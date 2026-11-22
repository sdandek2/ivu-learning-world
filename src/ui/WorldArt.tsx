/**
 * Illustrated world scenes — hand-built SVG so every world is visually distinct,
 * crisp at any size, tiny to ship, and fully offline.
 */
import type { World } from '../curriculum/schema.ts';

type C = World['colors'];

function Sun({ x, y, r = 14, c = '#FFD25E' }: { x: number; y: number; r?: number; c?: string }) {
  return <g><circle cx={x} cy={y} r={r + 6} fill={c} opacity=".25" /><circle cx={x} cy={y} r={r} fill={c} /></g>;
}
function Cloud({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return <g transform={`translate(${x} ${y}) scale(${s})`} fill="#fff" opacity=".9"><ellipse cx="0" cy="0" rx="16" ry="9" /><ellipse cx="13" cy="-5" rx="11" ry="9" /><ellipse cx="25" cy="1" rx="12" ry="8" /></g>;
}

const scenes: Record<string, (c: C) => React.ReactNode> = {
  woods: (c) => (<>
    <Sun x={196} y={34} /><Cloud x={30} y={30} />
    <path d="M0 120 Q60 98 120 112 T240 104 V160 H0Z" fill={c.land} opacity=".55" />
    {[[30, 118, 1.1], [70, 112, 0.9], [168, 110, 1.2], [210, 116, 0.95]].map(([x, y, s], i) => (
      <g key={i} transform={`translate(${x} ${y}) scale(${s})`}><rect x="-4" y="-6" width="8" height="26" rx="3" fill="#8B5A2B" /><circle cy="-22" r="22" fill={c.land} /><circle cx="-10" cy="-30" r="12" fill="#5DB37E" /><circle cx="9" cy="-12" r="9" fill="#2F7A4D" opacity=".6" /></g>
    ))}
    <g transform="translate(104 108)"><path d="M0 0 L22 -6 L44 0 L44 26 L22 20 L0 26Z" fill="#fff" stroke={c.ink} strokeWidth="2" /><path d="M22 -6 V20" stroke={c.ink} strokeWidth="2" /><path d="M6 6 H16 M6 12 H16 M28 6 H38 M28 12 H38" stroke={c.accent} strokeWidth="2" strokeLinecap="round" /></g>
    <path d="M0 160 H240 V146 Q180 136 120 146 T0 142Z" fill={c.land} />
  </>),
  mountains: (c) => (<>
    <Sun x={40} y={36} c="#FFB36B" /><Cloud x={160} y={26} s={0.9} />
    <path d="M-10 160 L70 50 L150 160Z" fill={c.land} /><path d="M70 50 L54 72 L64 68 L72 78 L80 68 L88 74Z" fill="#fff" />
    <path d="M90 160 L170 30 L250 160Z" fill="#7F8BDB" /><path d="M170 30 L150 62 L162 56 L172 68 L182 56 L192 62Z" fill="#fff" />
    <path d="M170 30 V14" stroke={c.ink} strokeWidth="2" /><path d="M170 14 L188 19 L170 24Z" fill={c.accent} />
    <text x="62" y="120" fontFamily="Fredoka Variable, sans-serif" fontSize="22" fontWeight="700" fill="#fff" opacity=".85">1 2 3</text>
    <path d="M0 160 H240 V150 Q120 138 0 150Z" fill={c.ink} opacity=".25" />
  </>),
  lab: (c) => (<>
    <path d="M0 128 H240 V160 H0Z" fill={c.land} opacity=".35" />
    <g transform="translate(70 40)"><path d="M18 0 H38 V30 L58 80 Q60 90 50 90 H6 Q-4 90 -2 80 L18 30Z" fill="#fff" stroke={c.ink} strokeWidth="2.5" /><path d="M6 62 H50 L56 80 Q58 86 50 86 H6 Q-2 86 0 80Z" fill={c.accent} opacity=".85" /><rect x="14" y="-6" width="28" height="8" rx="3" fill={c.ink} /></g>
    <g transform="translate(150 70)"><rect x="0" y="0" width="22" height="58" rx="10" fill="#fff" stroke={c.ink} strokeWidth="2.5" /><rect x="3" y="26" width="16" height="29" rx="8" fill={c.land} /></g>
    {[[100, 30, 6], [112, 16, 4], [92, 12, 3], [160, 52, 5], [168, 40, 3]].map(([x, y, r], i) => <circle key={i} cx={x} cy={y} r={r} fill="none" stroke={c.land} strokeWidth="2" />)}
    <g transform="translate(196 40)" fill={c.accent}><circle r="5" /><circle cx="-14" cy="18" r="4" fill={c.land} /><circle cx="12" cy="20" r="4" fill={c.land} /><path d="M0 0 L-14 18 M0 0 L12 20" stroke={c.ink} strokeWidth="1.5" /></g>
  </>),
  valley: (c) => (<>
    <Sun x={120} y={40} r={16} />
    <path d="M0 110 Q50 70 110 104 T240 92 V160 H0Z" fill="#A6D36C" /><path d="M0 132 Q80 106 160 128 T240 120 V160 H0Z" fill={c.land} />
    {[[30, 136], [60, 146], [96, 140], [180, 142], [214, 134]].map(([x, y], i) => (
      <g key={i} transform={`translate(${x} ${y})`}><path d="M0 0 V-12" stroke="#2C6E2F" strokeWidth="2" />{[0, 72, 144, 216, 288].map((a) => <circle key={a} cx={Math.cos(a * Math.PI / 180) * 4} cy={-14 + Math.sin(a * Math.PI / 180) * 4} r="3" fill={i % 2 ? c.accent : '#FFD25E'} />)}<circle cy="-14" r="2.2" fill="#fff" /></g>
    ))}
    <g transform="translate(150 104)"><ellipse rx="18" ry="11" fill="#8C6B3E" /><path d="M-12 -4 Q0 -14 12 -4" fill="none" stroke="#6B4F2A" strokeWidth="2" /><circle cx="20" cy="-2" r="5" fill="#9BBF6A" /></g>
  </>),
  island: (c) => (<>
    <Sun x={190} y={36} c="#FFC36B" /><Cloud x={30} y={34} />
    <path d="M0 110 H240 V160 H0Z" fill={c.accent} opacity=".7" />
    <path d="M0 122 Q20 116 40 122 T80 122 T120 122 T160 122 T200 122 T240 122" stroke="#fff" strokeWidth="2" fill="none" opacity=".7" />
    <ellipse cx="110" cy="112" rx="70" ry="14" fill="#F6D6A0" />
    <path d="M108 110 Q104 70 116 44" stroke="#8B5A2B" strokeWidth="6" fill="none" strokeLinecap="round" />
    {[-60, -20, 20, 60, 100].map((a) => <path key={a} d={`M116 44 q${Math.cos(a * Math.PI / 180) * 26} ${Math.sin(a * Math.PI / 180) * 12 - 6} ${Math.cos(a * Math.PI / 180) * 34} ${Math.sin(a * Math.PI / 180) * 18 + 8}`} stroke={c.land === '#F07C5A' ? '#3BAA6B' : c.land} strokeWidth="7" fill="none" strokeLinecap="round" />)}
    <path d="M184 128 q8 -14 18 -4 q-6 2 -8 8 z" fill="#5E8CC4" /><path d="M176 132 q14 -12 34 0" stroke="#5E8CC4" strokeWidth="5" fill="none" strokeLinecap="round" />
  </>),
  harbor: (c) => (<>
    <Cloud x={160} y={30} /><Sun x={44} y={36} c="#FFC2D1" />
    <path d="M0 112 H240 V160 H0Z" fill={c.accent} opacity=".55" />
    <rect x="0" y="100" width="70" height="14" fill="#B07D52" /><rect x="10" y="114" width="6" height="30" fill="#8B5A2B" /><rect x="50" y="114" width="6" height="30" fill="#8B5A2B" />
    <g transform="translate(140 70)"><path d="M-36 40 H40 L28 58 H-24Z" fill={c.ink} /><path d="M2 40 V-14" stroke={c.ink} strokeWidth="3" /><path d="M4 -10 C30 -10 34 24 4 34Z" fill={c.land} /><path d="M18 6 c-3 -5 -9 -3 -8 2 c1 4 8 8 8 8 s7 -4 8 -8 c1 -5 -5 -7 -8 -2z" fill="#fff" /></g>
    <path d="M0 136 Q30 128 60 136 T120 136 T180 136 T240 136" stroke="#fff" strokeWidth="2" fill="none" opacity=".7" />
  </>),
  globe: (c) => (<>
    <Sun x={200} y={30} r={12} />
    <path d="M0 132 Q120 112 240 132 V160 H0Z" fill="#8BC07A" />
    <g transform="translate(120 78)"><circle r="44" fill={c.accent} /><path d="M-30 -20 q14 -10 22 2 q10 6 2 16 q-10 4 -14 14 q-10 -4 -10 -16z M8 -36 q16 2 22 14 q-8 6 -16 0z M14 6 q14 -4 20 8 q-4 16 -16 18 q-8 -12 -4 -26z" fill={c.land} /><ellipse rx="44" ry="16" fill="none" stroke="#fff" strokeWidth="1.5" opacity=".6" /><path d="M0 -44 V44" stroke="#fff" strokeWidth="1.5" opacity=".6" /><rect x="-4" y="44" width="8" height="10" fill={c.ink} /><rect x="-20" y="54" width="40" height="6" rx="3" fill={c.ink} /></g>
    {[[30, 138], [206, 136]].map(([x, y], i) => <g key={i} transform={`translate(${x} ${y})`}><rect x="-2" y="-14" width="4" height="14" fill="#6B4F2A" /><circle cy="-20" r="10" fill="#4E9A4A" /></g>)}
  </>),
  tunnel: (c) => (<>
    <path d="M0 130 H240 V160 H0Z" fill={c.land} opacity=".4" />
    <path d="M50 140 V80 A70 70 0 0 1 190 80 V140Z" fill={c.land} /><path d="M78 140 V86 A42 42 0 0 1 162 86 V140Z" fill={c.ink} />
    {[0, 1, 2, 3, 4, 5, 6].map((i) => <path key={i} d={`M${120 + Math.cos(Math.PI + i * Math.PI / 6) * 56} ${80 + Math.sin(Math.PI + i * Math.PI / 6) * 56} L${120 + Math.cos(Math.PI + i * Math.PI / 6) * 70} ${80 + Math.sin(Math.PI + i * Math.PI / 6) * 70}`} stroke={c.sky} strokeWidth="3" />)}
    <g transform="translate(120 104)"><circle r="18" fill="#FFF6E0" stroke={c.accent} strokeWidth="3" /><path d="M0 0 V-11 M0 0 L8 5" stroke={c.ink} strokeWidth="2.5" strokeLinecap="round" /></g>
    <g transform="translate(26 116)" fill={c.accent}><path d="M0 0 L10 -16 L20 0Z" /><rect x="6" y="0" width="8" height="18" /></g>
    <g transform="translate(206 120)"><ellipse rx="10" ry="14" fill="#C48A55" /><path d="M-6 -8 H6" stroke="#8B5A2B" strokeWidth="2" /></g>
  </>),
  palace: (c) => (<>
    <Sun x={196} y={30} c="#FFD27A" />
    <path d="M0 136 H240 V160 H0Z" fill={c.land} opacity=".35" />
    <g transform="translate(120 136)" fill="#FFF3D6" stroke={c.ink} strokeWidth="2">
      <rect x="-70" y="-50" width="140" height="50" />
      <path d="M-26 -50 Q-26 -92 0 -104 Q26 -92 26 -50Z" fill={c.accent} />
      <path d="M-70 -50 Q-70 -72 -56 -80 Q-42 -72 -42 -50Z" fill={c.land} /><path d="M42 -50 Q42 -72 56 -80 Q70 -72 70 -50Z" fill={c.land} />
      <path d="M-12 0 V-26 Q0 -40 12 -26 V0Z" fill={c.land} />
      <path d="M-54 -14 V-30 Q-48 -38 -42 -30 V-14Z M42 -14 V-30 Q48 -38 54 -30 V-14Z" fill={c.sky} />
    </g>
    <g transform="translate(36 140)">{[-1, 0, 1].map((k) => <ellipse key={k} cx={k * 7} cy="-6" rx="5" ry="11" transform={`rotate(${k * 30} ${k * 7} 0)`} fill="#F49AC1" />)}</g>
    <g transform="translate(208 140)"><path d="M0 0 q-10 -20 0 -34 q10 14 0 34" fill="#3E8E5E" /><circle cy="-36" r="5" fill={c.accent} /></g>
  </>),
  studio: (c) => (<>
    {['#E94F64', '#F28C28', '#F4D03F', '#3BB273', '#2D7DD2', '#8E44AD'].map((col, i) => <path key={col} d={`M20 110 A100 100 0 0 1 220 110`} transform={`translate(${i * 8} ${i * 8}) scale(${1 - i * 0.067})`} stroke={col} strokeWidth="7" fill="none" opacity=".8" />)}
    <path d="M0 130 H240 V160 H0Z" fill={c.land} opacity=".3" />
    <g transform="translate(84 112)"><path d="M0 0 C-30 -4 -34 30 -4 34 C10 36 6 22 18 24 C34 26 40 6 20 -2Z" fill="#F7E1C4" stroke={c.ink} strokeWidth="2" />{['#E94F64', '#3BB273', '#2D7DD2', '#F4D03F'].map((col, i) => <circle key={col} cx={-14 + i * 9} cy={6 + (i % 2) * 8} r="4" fill={col} />)}</g>
    <g transform="translate(160 70) rotate(25)"><rect x="-3" y="0" width="6" height="56" rx="3" fill="#8B5A2B" /><path d="M-4 0 L0 -18 L4 0Z" fill={c.accent} /></g>
  </>),
  town: (c) => (<>
    <path d="M0 134 H240 V160 H0Z" fill={c.land} opacity=".5" />
    {[[20, 96, 36, 38, '#F28C28'], [62, 80, 30, 54, '#9DB4C0'], [178, 90, 40, 44, '#5C9EAD']].map(([x, y, w, h, col], i) => (
      <g key={i}><rect x={x as number} y={y as number} width={w as number} height={h as number} fill={col as string} /><path d={`M${x} ${y} L${(x as number) + (w as number) / 2} ${(y as number) - 14} L${(x as number) + (w as number)} ${y}Z`} fill={c.ink} />{[0, 1].map((k) => <rect key={k} x={(x as number) + 6 + k * 14} y={(y as number) + 10} width="8" height="8" fill="#FFF3B0" />)}</g>
    ))}
    <g transform="translate(124 106)"><rect x="-16" y="-20" width="32" height="28" rx="6" fill="#DDE6EC" stroke={c.ink} strokeWidth="2" /><circle cx="-6" cy="-8" r="4" fill={c.accent} /><circle cx="6" cy="-8" r="4" fill={c.accent} /><path d="M-6 2 H6" stroke={c.ink} strokeWidth="2" /><path d="M0 -20 V-28" stroke={c.ink} strokeWidth="2" /><circle cy="-30" r="3" fill={c.accent} /><rect x="-12" y="8" width="24" height="20" rx="4" fill="#B8C7D1" stroke={c.ink} strokeWidth="2" /></g>
    <g transform="translate(206 40)"><circle r="14" fill="none" stroke={c.ink} strokeWidth="6" strokeDasharray="5 4" /><circle r="5" fill={c.ink} /></g>
  </>),
  galaxy: (c) => (<>
    {Array.from({ length: 26 }, (_, i) => <circle key={i} cx={(i * 53) % 240} cy={(i * 37) % 150} r={i % 3 ? 1 : 1.8} fill="#fff" opacity={0.5 + (i % 4) * 0.12} />)}
    <g transform="translate(80 84)"><circle r="30" fill={c.land} /><circle cx="-8" cy="-8" r="7" fill="#7B70E0" /><circle cx="10" cy="10" r="4" fill="#7B70E0" /><ellipse rx="48" ry="10" fill="none" stroke={c.accent} strokeWidth="3" transform="rotate(-18)" /></g>
    <circle cx="186" cy="50" r="14" fill="#FF8FA3" /><circle cx="196" cy="118" r="8" fill="#6FD3C7" />
    <path d="M150 100 l4 9 9 1 -7 6 2 9 -8 -5 -8 5 2 -9 -7 -6 9 -1z" fill={c.accent} />
  </>),
};

export function WorldArt({ world, className, title }: { world: Pick<World, 'motif' | 'colors' | 'title'>; className?: string; title?: string }) {
  const c = world.colors;
  return (
    <svg viewBox="0 0 240 160" className={className} role="img" aria-label={title ?? `${world.title} illustration`} preserveAspectRatio="xMidYMid slice">
      <rect width="240" height="160" fill={c.sky} />
      {scenes[world.motif]?.(c)}
    </svg>
  );
}

/** The friendly guide — a round buddy who takes on each world's colours. */
export function Buddy({ color = '#5867C9', accent = '#FFD166', size = 72, mood = 'happy', className }: { color?: string; accent?: string; size?: number; mood?: 'happy' | 'wow' | 'think'; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      <ellipse cx="50" cy="94" rx="26" ry="4" fill="#000" opacity=".1" />
      <path d="M28 22 L34 6 L44 20Z M72 22 L66 6 L56 20Z" fill={color} />
      <circle cx="50" cy="52" r="38" fill={color} />
      <ellipse cx="50" cy="64" rx="24" ry="20" fill="#fff" opacity=".9" />
      <circle cx="37" cy="44" r="10" fill="#fff" /><circle cx="63" cy="44" r="10" fill="#fff" />
      <circle cx={mood === 'think' ? 39 : 38} cy={mood === 'think' ? 42 : 45} r="4.5" fill="#1B1B2F" /><circle cx={mood === 'think' ? 65 : 64} cy={mood === 'think' ? 42 : 45} r="4.5" fill="#1B1B2F" />
      <circle cx="37" cy="44" r="13" fill="none" stroke="#F5D99B" strokeWidth="3.2" /><circle cx="63" cy="44" r="13" fill="none" stroke="#F5D99B" strokeWidth="3.2" /><path d="M50 43 Q50 40 50 43" stroke="#F5D99B" strokeWidth="3.2" fill="none" /><path d="M24 39 Q29 34 32 36 M68 36 Q73 34 76 39" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <circle cx="39.5" cy="43" r="1.5" fill="#fff" /><circle cx="65.5" cy="43" r="1.5" fill="#fff" />
      <path d="M46 54 L50 59 L54 54Z" fill={accent} />
      {mood === 'wow' ? <ellipse cx="50" cy="68" rx="5" ry="6" fill="#1B1B2F" /> : mood === 'think' ? <path d="M43 68 H57" stroke="#1B1B2F" strokeWidth="3" strokeLinecap="round" /> : <path d="M40 65 Q50 75 60 65" stroke="#1B1B2F" strokeWidth="3" fill="none" strokeLinecap="round" />}
      <circle cx="28" cy="60" r="5" fill="#FF8FA3" opacity=".6" /><circle cx="72" cy="60" r="5" fill="#FF8FA3" opacity=".6" />
    </svg>
  );
}
