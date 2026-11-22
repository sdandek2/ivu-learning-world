import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { readdirSync, statSync, writeFileSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';

/** Generates the offline precache list for the hand-written service worker. */
function precacheManifest(): Plugin {
  return {
    name: 'ivu-precache-manifest',
    apply: 'build',
    closeBundle() {
      const dist = join(process.cwd(), 'dist');
      const files: string[] = [];
      const walk = (dir: string) => {
        for (const name of readdirSync(dir)) {
          const p = join(dir, name);
          if (statSync(p).isDirectory()) walk(p);
          else if (!name.endsWith('.map') && name !== 'sw.js') files.push('./' + relative(dist, p).split('\\').join('/'));
        }
      };
      walk(dist);
      const version = JSON.parse(readFileSync(join(dist, 'curriculum/v1/index.json'), 'utf8')).contentVersion;
      const sw = readFileSync(join(dist, 'sw.js'), 'utf8')
        .replace('__PRECACHE__', JSON.stringify(files.sort()))
        .replace('__CACHE_VERSION__', `ivu-${version}-${Date.now()}`);
      writeFileSync(join(dist, 'sw.js'), sw);
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), precacheManifest()],
  build: { target: 'es2022', sourcemap: false, chunkSizeWarningLimit: 600 },
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    include: ['tests/**/*.test.{ts,tsx}'],
  },
} as never);
