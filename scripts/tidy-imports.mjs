// Normalises authoring slips (stray "']" after a unit's topic string) and rewrites the DSL import line of every subject file to exactly the helpers it uses.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
const dir = new URL('../curriculum/src/subjects/', import.meta.url);
const helpers = ['subject', 'S', 'U', 'L', 'ch', 'tf', 'od', 'mt', 'ct'];
for (const f of readdirSync(dir).filter((f) => f.endsWith('.ts'))) {
  const p = new URL(f, dir);
  const src = readFileSync(p, 'utf8');
  const body = src.replace(/^import .*?;\n/m, '');
  const used = helpers.filter((h) => new RegExp(`\\b${h}\\(`).test(body));
  const fixed = src
    .replace(/'\], \[\n(\s+)L\(/g, "', [\n$1L(")
    .replace(/'\.concat\('\|((?:[^'\\]|\\.)*)'\)/g, "|$1'");
  const out = fixed.replace(/^import \{[^}]*\} from '\.\.\/dsl\.ts';/m, `import { ${used.join(', ')} } from '../dsl.ts';`);
  if (out !== src) { writeFileSync(p, out); console.log('tidied', f); }
}
