/**
 * Adventure map scenery — one continuous, hand-built SVG landscape (no image files, works
 * offline, crisp at any size). Two compositions share the same pieces:
 *   wide  (1600×1000) for desktop and tablet
 *   tall  (400×1560)  for phones, scrolled like a game map
 * Every world gets its own biome drawn around its destination, so the landscape changes as the
 * road travels from the forest at the bottom, past the sea, up to the stars.
 */
import type { ReactNode } from 'react';

export type Pt = readonly [number, number];
export interface MapLayout {
  id: 'wide' | 'tall';
  w: number; h: number;
  start: Pt;
  /** Destination for each world, in curriculum (path) order. */
  nodes: Record<string, Pt>;
  /** Scale of biome decorations around a destination. */
  s: number;
  /** Destination diameter in map units (the HTML button is sized from this). */
  node: number;
  road: number;
}

export const WORLD_ORDER = ['word-woods', 'number-mountains', 'discovery-lab', 'green-valley', 'wellness-island', 'heart-harbor', 'globe-garden', 'time-tunnel', 'heritage-palace', 'rainbow-studio', 'tinker-town', 'mind-galaxy'];

export const LAYOUTS: Record<'wide' | 'tall', MapLayout> = {
  wide: {
    id: 'wide', w: 1600, h: 1000, start: [95, 930], s: 1, node: 128, road: 26,
    nodes: {
      'word-woods': [250, 818], 'number-mountains': [545, 842], 'discovery-lab': [835, 790], 'green-valley': [1110, 836],
      'wellness-island': [1440, 790], 'heart-harbor': [1205, 612], 'globe-garden': [905, 600], 'time-tunnel': [590, 628],
      'heritage-palace': [270, 548], 'rainbow-studio': [370, 318], 'tinker-town': [730, 262], 'mind-galaxy': [1150, 150],
    },
  },
  tall: {
    id: 'tall', w: 400, h: 1560, start: [300, 1526], s: 0.5, node: 106, road: 15,
    nodes: {
      'word-woods': [112, 1418], 'number-mountains': [290, 1302], 'discovery-lab': [112, 1184], 'green-valley': [298, 1078],
      'wellness-island': [214, 932], 'heart-harbor': [104, 838], 'globe-garden': [290, 734], 'time-tunnel': [112, 626],
      'heritage-palace': [290, 512], 'rainbow-studio': [112, 404], 'tinker-town': [290, 300], 'mind-galaxy': [150, 150],
    },
  },
};

// ---------- small shared pieces ----------

const Tree = ({ x, y, r, c = '#3E9B5C', d = '#2C7A47' }: { x: number; y: number; r: number; c?: string; d?: string }) => (
  <g transform={`translate(${x} ${y})`}>
    <ellipse cx="0" cy={r * 0.95} rx={r * 0.8} ry={r * 0.22} fill="#1d3b25" opacity=".18" />
    <rect x={-r * 0.14} y={r * 0.2} width={r * 0.28} height={r * 0.75} rx={r * 0.1} fill="#7A4E2A" />
    <circle cy={-r * 0.15} r={r * 0.78} fill={d} />
    <circle cx={-r * 0.22} cy={-r * 0.35} r={r * 0.6} fill={c} />
    <circle cx={r * 0.28} cy={-r * 0.05} r={r * 0.42} fill={c} opacity=".85" />
  </g>
);
const Pine = ({ x, y, r, c = '#2F7D57' }: { x: number; y: number; r: number; c?: string }) => (
  <g transform={`translate(${x} ${y})`}>
    <ellipse cx="0" cy={r * 0.9} rx={r * 0.55} ry={r * 0.15} fill="#1d3b25" opacity=".18" />
    <rect x={-r * 0.08} y={r * 0.55} width={r * 0.16} height={r * 0.35} fill="#6B4423" />
    <path d={`M0 ${-r} L${r * 0.55} ${r * 0.1} H${-r * 0.55}Z M0 ${-r * 0.55} L${r * 0.65} ${r * 0.6} H${-r * 0.65}Z`} fill={c} />
  </g>
);
const Rock = ({ x, y, r }: { x: number; y: number; r: number }) => (
  <g transform={`translate(${x} ${y})`}><path d={`M${-r} 0 Q${-r * 0.8} ${-r * 0.8} 0 ${-r * 0.85} Q${r * 0.9} ${-r * 0.7} ${r} 0Z`} fill="#9AA0A8" /><path d={`M${-r * 0.3} ${-r * 0.75} Q${r * 0.4} ${-r * 0.8} ${r * 0.8} ${-r * 0.2}`} stroke="#C4C9CF" strokeWidth={r * 0.18} fill="none" strokeLinecap="round" /></g>
);
const Flower = ({ x, y, c }: { x: number; y: number; c: string }) => (
  <g transform={`translate(${x} ${y})`}><path d="M0 0 V10" stroke="#3E8B4F" strokeWidth="2" />{[0, 72, 144, 216, 288].map((a) => <circle key={a} cx={Math.cos((a * Math.PI) / 180) * 4} cy={Math.sin((a * Math.PI) / 180) * 4} r="3.2" fill={c} />)}<circle r="2.4" fill="#FFD84D" /></g>
);
export const Cloud = ({ x, y, s = 1, o = 0.95 }: { x: number; y: number; s?: number; o?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`} fill="#fff" opacity={o}><ellipse cx="0" cy="0" rx="34" ry="16" /><ellipse cx="24" cy="-10" rx="24" ry="18" /><ellipse cx="50" cy="0" rx="28" ry="15" /><ellipse cx="22" cy="6" rx="40" ry="12" /></g>
);
const Bird = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) => (
  <path transform={`translate(${x} ${y}) scale(${s})`} d="M-8 0 Q-4 -5 0 0 Q4 -5 8 0" stroke="#3B3F66" strokeWidth="1.8" fill="none" strokeLinecap="round" />
);
const House = ({ x, y, w, c, roof }: { x: number; y: number; w: number; c: string; roof: string }) => (
  <g transform={`translate(${x} ${y})`}><rect x={-w / 2} y={-w * 0.6} width={w} height={w * 0.6} fill={c} /><path d={`M${-w * 0.62} ${-w * 0.58} L0 ${-w * 1.05} L${w * 0.62} ${-w * 0.58}Z`} fill={roof} /><rect x={-w * 0.12} y={-w * 0.32} width={w * 0.24} height={w * 0.32} fill="#5B3A22" /><rect x={-w * 0.4} y={-w * 0.48} width={w * 0.18} height={w * 0.14} fill="#FFF3B0" /><rect x={w * 0.22} y={-w * 0.48} width={w * 0.18} height={w * 0.14} fill="#FFF3B0" /></g>
);
const Gear = ({ x, y, r, c }: { x: number; y: number; r: number; c: string }) => (
  <g transform={`translate(${x} ${y})`} fill={c}>{Array.from({ length: 8 }, (_, i) => <rect key={i} x={-r * 0.16} y={-r * 1.22} width={r * 0.32} height={r * 0.4} rx={r * 0.06} transform={`rotate(${i * 45})`} />)}<circle r={r} /><circle r={r * 0.38} fill="#F7F3E8" /></g>
);
const Star = ({ x, y, r, c = '#FFF6C9' }: { x: number; y: number; r: number; c?: string }) => (
  <path transform={`translate(${x} ${y})`} d={`M0 ${-r} L${r * 0.28} ${-r * 0.28} L${r} 0 L${r * 0.28} ${r * 0.28} L0 ${r} L${-r * 0.28} ${r * 0.28} L${-r} 0 L${-r * 0.28} ${-r * 0.28}Z`} fill={c} />
);

// Deterministic "random" so the scene is identical on every render and in screenshots.
function rand(seed: number) { let s = seed; return () => ((s = (s * 16807) % 2147483647) / 2147483647); }

// ---------- biomes: drawn around a destination (origin = destination centre) ----------

const BIOMES: Record<string, () => ReactNode> = {
  'word-woods': () => (<>
    {[[-150, 40, 34], [-118, -30, 30], [-92, 58, 24], [112, -36, 28], [150, 20, 36], [100, 66, 22], [-60, -96, 24], [58, -100, 30], [-190, -10, 26], [190, -50, 24]].map(([x, y, r], i) => <Tree key={i} x={x} y={y} r={r} c={i % 2 ? '#4FAE6A' : '#3E9B5C'} />)}
    <g transform="translate(-30 96)"><rect x="-10" y="0" width="20" height="9" rx="3" fill="#F4E9D8" /><path d="M-14 1 Q0 -16 14 1Z" fill="#E4573D" /><circle cx="-5" cy="-5" r="2" fill="#fff" /><circle cx="5" cy="-4" r="1.6" fill="#fff" /></g>
    <g transform="translate(46 96) rotate(-8)"><path d="M0 0 L16 -4 L32 0 V18 L16 14 L0 18Z" fill="#fff" stroke="#6B4A2C" strokeWidth="2" /><path d="M16 -4 V14" stroke="#6B4A2C" strokeWidth="1.5" /></g>
  </>),
  'number-mountains': () => (<>
    <path d="M-230 40 L-90 -170 L40 40Z" fill="#8C93D9" /><path d="M-90 -170 L-118 -128 L-100 -134 L-88 -116 L-74 -134 L-60 -126Z" fill="#fff" />
    <path d="M-40 40 L110 -210 L250 40Z" fill="#6F78C9" /><path d="M110 -210 L80 -160 L100 -168 L112 -150 L126 -168 L142 -158Z" fill="#fff" />
    <path d="M110 -210 V-246" stroke="#3A3F7A" strokeWidth="3" /><path d="M110 -246 L140 -238 L110 -228Z" fill="#FF7A59" />
    <path d="M-230 40 L-90 -170 L-60 -126 L-150 40Z" fill="#fff" opacity=".12" />
    <Rock x={-150} y={76} r={22} /><Rock x={150} y={70} r={26} /><Pine x={-196} y={50} r={30} /><Pine x={196} y={58} r={26} />
    <text x="150" y="-30" fontFamily="Fredoka Variable, sans-serif" fontWeight="700" fontSize="30" fill="#fff" opacity=".8">3</text>
    <text x="-130" y="-20" fontFamily="Fredoka Variable, sans-serif" fontWeight="700" fontSize="26" fill="#fff" opacity=".8">2</text>
  </>),
  'discovery-lab': () => (<>
    <g transform="translate(138 -20)"><rect x="-44" y="-10" width="88" height="70" rx="8" fill="#E8EEF7" /><path d="M-48 -10 A48 48 0 0 1 48 -10Z" fill="#B9C9E6" /><rect x="-6" y="-56" width="12" height="46" fill="#2E3A66" opacity=".8" /><path d="M10 -40 L54 -86" stroke="#2E3A66" strokeWidth="9" strokeLinecap="round" /><rect x="-12" y="22" width="24" height="38" rx="4" fill="#3E5BA9" /></g>
    <g transform="translate(-140 -10)"><rect x="-22" y="-70" width="44" height="130" rx="18" fill="#fff" stroke="#3E5BA9" strokeWidth="4" /><rect x="-16" y="-10" width="32" height="64" rx="14" fill="#7FD6C2" />{[[-6, -30, 6], [8, -52, 4], [-2, -80, 5], [6, -104, 3]].map(([x, y, r], i) => <circle key={i} cx={x} cy={y} r={r} fill="none" stroke="#7FD6C2" strokeWidth="3" />)}</g>
    <Star x={-80} y={-110} r={10} c="#FFD84D" /><Star x={70} y={-120} r={8} c="#FFD84D" /><Tree x={190} y={70} r={24} /><Tree x={-196} y={70} r={22} />
  </>),
  'green-valley': () => (<>
    <g transform="translate(-140 -24)"><rect x="-40" y="-40" width="80" height="60" fill="#D9534F" /><path d="M-48 -38 L0 -82 L48 -38Z" fill="#8E2F2C" /><rect x="-14" y="-14" width="28" height="34" fill="#fff" /><path d="M-14 -14 L14 20 M14 -14 L-14 20" stroke="#D9534F" strokeWidth="3" /></g>
    <path d="M-210 70 H-70 M-210 54 H-70" stroke="#C69C6D" strokeWidth="4" />{[-200, -170, -140, -110, -80].map((x) => <rect key={x} x={x} y="44" width="6" height="34" fill="#A87C4F" />)}
    {[[110, -50], [140, -20], [170, -56]].map(([x, y], i) => <g key={i} transform={`translate(${x} ${y})`}><path d="M0 0 V46" stroke="#3E8B4F" strokeWidth="4" /><circle r="13" fill="#FFC93C" /><circle r="6" fill="#7A4E2A" /></g>)}
    <ellipse cx="130" cy="74" rx="54" ry="20" fill="#6EC3E8" /><ellipse cx="120" cy="70" rx="20" ry="6" fill="#fff" opacity=".5" />
    {[[-40, 98, '#FF8FB1'], [-10, 106, '#B784F5'], [30, 100, '#FF8FB1'], [70, 110, '#FFFFFF']].map(([x, y, c], i) => <Flower key={i} x={x as number} y={y as number} c={c as string} />)}
  </>),
  'wellness-island': () => (<>
    <ellipse cx="0" cy="52" rx="170" ry="54" fill="#F3DFA5" /><ellipse cx="0" cy="44" rx="150" ry="42" fill="#FBEBC0" />
    {[[-112, 10, -8], [118, 0, 10]].map(([x, y, a], i) => <g key={i} transform={`translate(${x} ${y}) rotate(${a})`}><path d="M0 40 Q-6 0 2 -54" stroke="#9B6B3C" strokeWidth="8" fill="none" /><path d="M2 -54 Q-40 -70 -58 -44 M2 -54 Q40 -72 60 -46 M2 -54 Q-20 -90 -44 -88 M2 -54 Q24 -92 48 -86" stroke="#2F9E63" strokeWidth="10" fill="none" strokeLinecap="round" /></g>)}
    <path d="M-200 120 Q-186 96 -168 116" stroke="#3D6FB0" strokeWidth="9" fill="none" strokeLinecap="round" /><path d="M-176 104 L-186 92" stroke="#3D6FB0" strokeWidth="6" strokeLinecap="round" />
    <g transform="translate(150 118)"><path d="M-26 0 H26 L18 12 H-18Z" fill="#fff" /><path d="M0 -2 V-46 L24 -6Z" fill="#FF8FB1" /></g>
  </>),
  'heart-harbor': () => (<>
    <g transform="translate(-140 -40)"><path d="M-18 70 L-12 -50 H12 L18 70Z" fill="#fff" />{[-30, 0, 30].map((y) => <rect key={y} x="-17" y={y} width="34" height="12" fill="#E4573D" />)}<rect x="-16" y="-70" width="32" height="22" rx="4" fill="#FFE27A" /><path d="M-20 -70 L0 -92 L20 -70Z" fill="#E4573D" /></g>
    <rect x="40" y="26" width="150" height="14" fill="#A87C4F" />{[56, 96, 136, 176].map((x) => <rect key={x} x={x} y="26" width="6" height="40" fill="#7A5634" />)}
    {[[110, 92, '#4E8FD6'], [176, 104, '#F5A623']].map(([x, y, c], i) => <g key={i} transform={`translate(${x} ${y})`}><path d="M-30 0 H30 L20 16 H-20Z" fill={c as string} /><path d="M0 -2 V-44 L22 -8Z" fill="#fff" /></g>)}
    <g transform="translate(-70 90)">{[0, 18].map((x) => <rect key={x} x={x} y="0" width="16" height="14" fill="#C69C6D" stroke="#8A6440" />)}</g>
  </>),
  'globe-garden': () => (<>
    <g transform="translate(140 -36)"><rect x="-16" y="30" width="32" height="40" fill="#C9B79C" /><rect x="-26" y="66" width="52" height="10" fill="#B19E80" /><circle cy="0" r="38" fill="#6EC3E8" /><path d="M-26 -14 Q-6 -24 6 -10 Q18 4 0 14 Q-14 22 -26 10Z M12 -28 Q30 -20 26 -2 Q18 -8 12 -28Z" fill="#7BC67E" /><ellipse cx="0" cy="0" rx="38" ry="14" fill="none" stroke="#fff" strokeWidth="2" opacity=".6" /></g>
    {[[-170, 30], [-120, 64], [-180, 96]].map(([x, y], i) => <rect key={i} x={x - 30} y={y - 16} width="60" height="32" rx="16" fill={i % 2 ? '#4FAE6A' : '#3E9B5C'} />)}
    <path d="M-150 -40 Q-110 -110 -70 -40" stroke="#C69C6D" strokeWidth="6" fill="none" /><path d="M-150 -40 Q-110 -110 -70 -40" stroke="#FF8FB1" strokeWidth="10" strokeDasharray="2 12" fill="none" strokeLinecap="round" />
    {[[60, 100, '#FFD84D'], [90, 92, '#FF8FB1'], [120, 102, '#B784F5'], [-30, 104, '#FF8FB1'], [10, 110, '#FFD84D']].map(([x, y, c], i) => <Flower key={i} x={x as number} y={y as number} c={c as string} />)}
  </>),
  'time-tunnel': () => (<>
    <path d="M-240 60 Q-230 -120 -120 -150 Q0 -190 120 -160 Q230 -130 240 60Z" fill="#B48A6B" /><path d="M-230 -20 Q0 -70 232 -20 M-236 20 Q0 -24 238 20" stroke="#9C7357" strokeWidth="8" fill="none" opacity=".7" />
    <g transform="translate(-150 10)"><path d="M-36 50 V-6 A36 36 0 0 1 36 -6 V50Z" fill="#2B2035" /><path d="M-26 50 L-10 0 M26 50 L10 0" stroke="#8C8C8C" strokeWidth="4" /></g>
    <g transform="translate(150 -60)"><rect x="-20" y="-10" width="40" height="80" fill="#8E6E57" /><circle cy="-22" r="26" fill="#FFF6E0" stroke="#5B4636" strokeWidth="5" /><path d="M0 -22 V-38 M0 -22 L12 -16" stroke="#5B4636" strokeWidth="4" strokeLinecap="round" /></g>
    <Rock x={-60} y={96} r={18} /><Rock x={80} y={92} r={22} />
  </>),
  'heritage-palace': () => (<>
    <rect x="-180" y="-100" width="360" height="110" fill="#F6E3C1" /><rect x="-180" y="-112" width="360" height="16" fill="#E8C98E" />
    {[-150, -110, 110, 150].map((x) => <path key={x} d={`M${x - 14} 10 V-56 A14 14 0 0 1 ${x + 14} -56 V10Z`} fill="#C98B4E" opacity=".7" />)}
    <path d="M-60 -112 Q-60 -190 0 -214 Q60 -190 60 -112Z" fill="#F2C14E" /><path d="M0 -214 V-236" stroke="#C98B4E" strokeWidth="4" />
    {[-200, 200].map((x) => <g key={x} transform={`translate(${x} 0)`}><rect x="-12" y="-150" width="24" height="160" fill="#F6E3C1" /><path d="M-18 -150 Q0 -190 18 -150Z" fill="#F2C14E" /></g>)}
    <g transform="translate(150 70)">{[-30, -15, 0, 15, 30].map((a) => <path key={a} d="M0 0 Q4 -30 0 -50" stroke="#2BA39A" strokeWidth="6" fill="none" transform={`rotate(${a})`} />)}<circle r="10" fill="#3D6FB0" /></g>
    <Tree x={-150} y={84} r={22} c="#5DB37E" />
  </>),
  'rainbow-studio': () => (<>
    {['#FF6B6B', '#FFA94D', '#FFD84D', '#69DB7C', '#4DABF7', '#9775FA'].map((c, i) => <path key={c} d={`M${-190 + i * 14} 30 A${190 - i * 14} ${190 - i * 14} 0 0 1 ${190 - i * 14} 30`} stroke={c} strokeWidth="14" fill="none" opacity=".9" />)}
    <g transform="translate(-150 40)"><path d="M0 -60 L-20 50 M0 -60 L20 50 M0 -60 V50" stroke="#8A5A33" strokeWidth="5" /><rect x="-32" y="-60" width="64" height="48" fill="#fff" stroke="#8A5A33" strokeWidth="4" /><circle cx="-8" cy="-38" r="9" fill="#FF6B6B" /><circle cx="10" cy="-32" r="7" fill="#4DABF7" /></g>
    <g transform="translate(150 70) rotate(-14)"><path d="M-40 0 Q-40 -30 0 -30 Q44 -30 44 0 Q44 22 10 18 Q0 30 -18 22 Q-40 22 -40 0Z" fill="#E8C98E" />{[['#FF6B6B', -20, -12], ['#FFD84D', 0, -18], ['#69DB7C', 20, -12], ['#9775FA', 24, 4]].map(([c, x, y]) => <circle key={c as string} cx={x as number} cy={y as number} r="6" fill={c as string} />)}</g>
  </>),
  'tinker-town': () => (<>
    <House x={-150} y={40} w={56} c="#F7D08A" roof="#4E8FD6" /><House x={-96} y={10} w={44} c="#FFB4A2" roof="#6D597A" />
    <g transform="translate(140 -20)"><path d="M-14 80 L-8 -20 H8 L14 80Z" fill="#E8EEF7" /><g transform="translate(0 -24)">{[0, 90, 180, 270].map((a) => <rect key={a} x="-5" y="-62" width="10" height="56" rx="4" fill="#F4F1EA" stroke="#8792A8" strokeWidth="2" transform={`rotate(${a + 20})`} />)}<circle r="9" fill="#8792A8" /></g></g>
    <Gear x={70} y={-90} r={22} c="#9AA5BE" /><Gear x={100} y={-60} r={14} c="#F2A541" />
    <g transform="translate(200 60)"><path d="M0 -60 Q14 -40 14 0 H-14 Q-14 -40 0 -60Z" fill="#fff" stroke="#E4573D" strokeWidth="3" /><path d="M-14 -4 L-24 12 H-14Z M14 -4 L24 12 H14Z" fill="#E4573D" /><circle cy="-30" r="6" fill="#4DABF7" /><path d="M-8 4 Q0 30 8 4" fill="#FFB703" /></g>
  </>),
  'mind-galaxy': () => (<>
    <g transform="translate(-150 -30)"><circle r="40" fill="#B784F5" /><circle cx="-10" cy="-10" r="12" fill="#fff" opacity=".18" /><ellipse rx="66" ry="14" fill="none" stroke="#FFD84D" strokeWidth="6" transform="rotate(-18)" /></g>
    <circle cx="140" cy="-80" r="22" fill="#4DABF7" /><circle cx="134" cy="-86" r="7" fill="#fff" opacity=".35" />
    <path d="M150 44 A32 32 0 1 1 186 0 A26 26 0 1 0 150 44Z" fill="#FFF3B0" />
    <path d="M-60 -130 L40 -96" stroke="#FFF6C9" strokeWidth="3" strokeLinecap="round" opacity=".8" /><Star x={44} y={-96} r={9} />
    <g transform="translate(-120 90)"><ellipse rx="56" ry="14" fill="#fff" opacity=".85" /><path d="M-8 -6 L16 -40" stroke="#5B5F8F" strokeWidth="8" strokeLinecap="round" /><path d="M-8 -6 L-20 6 M-8 -6 L4 6" stroke="#5B5F8F" strokeWidth="3" /></g>
  </>),
};

/** Big backdrops are drawn a little smaller so neighbouring worlds keep their space. */
const BIOME_SCALE: Record<string, number> = { 'number-mountains': 0.8, 'heritage-palace': 0.72, 'time-tunnel': 0.82, 'rainbow-studio': 0.9 };

// ---------- the landscape ----------

function catmull(points: Pt[], i: number): string {
  const p0 = points[Math.max(0, i - 1)], p1 = points[i], p2 = points[i + 1], p3 = points[Math.min(points.length - 1, i + 2)];
  const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
  const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
  return `C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0]} ${p2[1]}`;
}
/** The road as one segment per leg (start → world 1 → … → world 12). */
export function roadSegments(points: Pt[]): string[] {
  return points.slice(0, -1).map((p, i) => `M${p[0]} ${p[1]} ${catmull(points, i)}`);
}

function Ground({ layout }: { layout: MapLayout }) {
  if (layout.id === 'wide') return (<>
    <path d="M0 410 C140 340 260 380 380 350 C520 316 620 380 760 350 C900 320 1040 366 1180 336 C1320 306 1460 350 1600 330 V1000 H0Z" fill="#AFC3EB" opacity=".75" />
    <path d="M0 440 C80 330 220 252 380 262 C520 272 600 330 690 300 C790 266 870 214 980 236 C1060 252 1120 330 1220 350 C1320 370 1440 380 1600 400 V1000 H0Z" fill="#DCEFAE" />
    <path d="M0 470 C220 420 520 470 760 440 C1000 410 1240 450 1600 430 V1000 H0Z" fill="#C7E79F" />
    <path d="M1600 468 L1600 1000 L1300 1000 C1290 920 1302 850 1320 776 C1346 690 1376 620 1344 532 C1334 500 1420 474 1600 468Z" fill="url(#am-sea)" />
    <path d="M1300 1000 C1290 920 1302 850 1320 776 C1346 690 1376 620 1344 532 C1334 500 1420 474 1600 468" stroke="#F3DFA5" strokeWidth="16" fill="none" />
    {[[1400, 560], [1480, 640], [1520, 900], [1380, 940], [1560, 560]].map(([x, y], i) => <path key={i} d={`M${x} ${y} q12 -8 24 0 t24 0`} stroke="#fff" strokeWidth="3" fill="none" opacity=".6" />)}
    <path d="M0 560 C260 510 520 580 780 536 C1000 500 1200 520 1330 540 C1360 640 1336 700 1324 780 L0 780Z" fill="#B3DD8F" />
    <path d="M0 760 C220 720 480 792 760 752 C1000 720 1180 740 1316 772 C1302 860 1292 930 1300 1000 L0 1000Z" fill="#97D07E" />
    <path d="M700 312 C660 420 720 470 670 540 C620 610 700 700 820 712 C960 726 1100 700 1200 760 C1260 800 1290 830 1306 860" stroke="#7CC9E8" strokeWidth="22" fill="none" strokeLinecap="round" />
    <path d="M700 312 C660 420 720 470 670 540 C620 610 700 700 820 712 C960 726 1100 700 1200 760 C1260 800 1290 830 1306 860" stroke="#B6E3F4" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray="20 30" />
  </>);
  return (<>
    <path d="M0 470 C70 380 150 340 220 362 C290 384 340 330 400 318 V1560 H0Z" fill="#DCEFAE" />
    <path d="M0 700 C120 660 280 708 400 672 V1560 H0Z" fill="#C7E79F" />
    <ellipse cx="236" cy="936" rx="196" ry="84" fill="#F3DFA5" /><ellipse cx="236" cy="936" rx="186" ry="76" fill="url(#am-sea)" />
    {[[120, 910], [330, 960], [200, 990]].map(([x, y], i) => <path key={i} d={`M${x} ${y} q8 -6 16 0 t16 0`} stroke="#fff" strokeWidth="2.5" fill="none" opacity=".6" />)}
    <path d="M0 1050 C140 1012 260 1066 400 1036 V1560 H0Z" fill="#B3DD8F" />
    <path d="M0 1300 C150 1262 262 1322 400 1290 V1560 H0Z" fill="#97D07E" />
    <path d="M0 560 C80 590 60 660 150 690 C230 716 250 780 236 860" stroke="#7CC9E8" strokeWidth="12" fill="none" strokeLinecap="round" />
  </>);
}

function Sky({ layout }: { layout: MapLayout }) {
  const r = rand(layout.id === 'wide' ? 7 : 11);
  const starH = layout.id === 'wide' ? 300 : 330;
  const stars = Array.from({ length: layout.id === 'wide' ? 70 : 34 }, () => [r() * layout.w, r() * starH * (0.4 + r() * 0.6), 0.6 + r() * 1.8] as const);
  return (<>
    <rect width={layout.w} height={layout.h} fill="url(#am-sky)" />
    <g className="am-twinkle">{stars.map(([x, y, s], i) => <circle key={i} cx={x} cy={y} r={s} fill="#FFF8DC" opacity={0.4 + (i % 5) / 8} />)}</g>
    {layout.id === 'wide'
      ? <g className="am-clouds"><Cloud x={180} y={190} s={1.1} o={0.7} /><Cloud x={560} y={150} s={0.8} o={0.6} /><Cloud x={1360} y={300} s={1.2} o={0.85} /><Cloud x={900} y={360} s={0.9} o={0.8} /><Bird x={1040} y={420} /><Bird x={1066} y={410} s={0.8} /><Bird x={480} y={400} s={0.9} /></g>
      : <g className="am-clouds"><Cloud x={260} y={160} s={0.6} o={0.6} /><Cloud x={40} y={250} s={0.55} o={0.6} /><Cloud x={250} y={420} s={0.55} o={0.85} /><Bird x={210} y={560} s={0.7} /></g>}
  </>);
}

const SCATTER: Record<'wide' | 'tall', [number, number, number, 'tree' | 'pine' | 'rock' | 'flower'][]> = {
  wide: [
    [60, 760, 26, 'tree'], [420, 760, 22, 'tree'], [700, 960, 24, 'tree'], [980, 960, 26, 'tree'], [1240, 960, 20, 'pine'], [40, 610, 24, 'pine'],
    [440, 470, 20, 'pine'], [740, 470, 18, 'tree'], [1040, 470, 20, 'pine'], [1290, 450, 18, 'tree'], [560, 360, 16, 'pine'], [920, 330, 16, 'tree'],
    [150, 430, 18, 'pine'], [1000, 690, 14, 'rock'], [420, 660, 14, 'rock'], [1180, 760, 14, 'rock'], [380, 960, 0, 'flower'], [880, 950, 0, 'flower'], [160, 700, 0, 'flower'],
  ],
  tall: [
    [30, 1530, 18, 'tree'], [370, 1500, 16, 'pine'], [30, 1250, 14, 'pine'], [370, 1170, 14, 'tree'], [20, 1000, 14, 'tree'], [380, 820, 12, 'pine'],
    [20, 720, 12, 'pine'], [380, 610, 12, 'tree'], [20, 500, 12, 'tree'], [380, 420, 12, 'pine'], [210, 1250, 10, 'rock'], [200, 600, 8, 'rock'],
  ],
};

/** The whole landscape. `reach` = how many legs of the road have been travelled (lit in gold). */
export function AdventureScenery({ layout, reach }: { layout: MapLayout; reach: number }) {
  const points: Pt[] = [layout.start, ...WORLD_ORDER.map((id) => layout.nodes[id])];
  const segs = roadSegments(points);
  const k = layout.road;
  return (
    <svg className="am-scene" viewBox={`0 0 ${layout.w} ${layout.h}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="am-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1B1D4F" />
          <stop offset={layout.id === 'wide' ? 0.16 : 0.08} stopColor="#3D3A8C" />
          <stop offset={layout.id === 'wide' ? 0.28 : 0.17} stopColor="#9A86E0" />
          <stop offset={layout.id === 'wide' ? 0.38 : 0.24} stopColor="#FFC9A8" />
          <stop offset={layout.id === 'wide' ? 0.46 : 0.3} stopColor="#FFE9C9" />
        </linearGradient>
        <linearGradient id="am-sea" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#5CC6E8" /><stop offset="1" stopColor="#2F86C9" /></linearGradient>
        <filter id="am-glow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="4" /></filter>
      </defs>
      <Sky layout={layout} />
      <Ground layout={layout} />
      {SCATTER[layout.id].map(([x, y, r, kind], i) => kind === 'tree' ? <Tree key={i} x={x} y={y} r={r} /> : kind === 'pine' ? <Pine key={i} x={x} y={y} r={r} /> : kind === 'rock' ? <Rock key={i} x={x} y={y} r={r} /> : <g key={i}>{[0, 14, 28].map((d) => <Flower key={d} x={x + d} y={y + (d % 20)} c={d ? '#FF8FB1' : '#FFFFFF'} />)}</g>)}
      {/* start camp */}
      <g transform={`translate(${layout.start[0]} ${layout.start[1]}) scale(${layout.s})`}>
        <path d="M30 -10 L70 -70 L110 -10Z" fill="#F2A541" /><path d="M70 -70 L58 -10 H82Z" fill="#8E5A1F" opacity=".7" />
        <rect x="-62" y="-70" width="8" height="64" fill="#8A5A33" /><rect x="-96" y="-72" width="78" height="26" rx="6" fill="#F4E3C3" stroke="#8A5A33" strokeWidth="3" />
        <text x="-57" y="-53" textAnchor="middle" fontFamily="Fredoka Variable, sans-serif" fontWeight="700" fontSize="16" fill="#6B4423">START</text>
      </g>
      {WORLD_ORDER.map((id) => { const [x, y] = layout.nodes[id]; const B = BIOMES[id]; return B ? <g key={id} transform={`translate(${x} ${y}) scale(${layout.s * (BIOME_SCALE[id] ?? 1)})`}>{B()}</g> : null; })}
      {/* the road */}
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {segs.map((d, i) => i === segs.length - 1
          ? <path key={i} d={d} stroke="#FFF1B8" strokeWidth={k * 0.45} strokeDasharray={`${k * 0.2} ${k * 0.9}`} opacity=".9" />
          : <path key={i} d={d} stroke="#2a3b23" strokeOpacity=".14" strokeWidth={k + 10} transform={`translate(0 ${k * 0.25})`} />)}
        {segs.slice(0, -1).map((d, i) => <path key={`e${i}`} d={d} stroke="#C79A5B" strokeWidth={k + 6} />)}
        {segs.slice(0, -1).map((d, i) => <path key={`b${i}`} d={d} stroke="#EFD49A" strokeWidth={k} />)}
        {segs.slice(0, -1).map((d, i) => <path key={`c${i}`} d={d} stroke="#FFF8E6" strokeWidth={k * 0.2} strokeDasharray={`${k * 0.05} ${k * 0.75}`} />)}
        {segs.slice(0, Math.min(reach, segs.length)).map((d, i) => <path key={`r${i}`} className="am-travelled" d={d} stroke="#FFB703" strokeWidth={k * 0.32} strokeDasharray={`${k * 0.6} ${k * 0.5}`} />)}
      </g>
    </svg>
  );
}
