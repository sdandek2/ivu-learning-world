/**
 * The curriculum map: 6 developmental stages, 12 worlds, 60 subjects.
 * Subject content lives in curriculum/src/subjects/<subjectId>.ts
 */
import type { StageMeta } from '../../src/curriculum/schema.ts';

export const CONTENT_VERSION = '1.0.0';

export const STAGES: StageMeta[] = [
  { id: 's4', label: 'Ages 4–5', minAge: 4, maxAge: 5, description: 'Play, talk, notice. Concrete objects, pictures, songs and stories; short sessions with an adult nearby.' },
  { id: 's5', label: 'Ages 5–6', minAge: 5, maxAge: 6, description: 'Early reading and number. Sorting, comparing and explaining simple "why" with support.' },
  { id: 's6', label: 'Ages 6–7', minAge: 6, maxAge: 7, description: 'Independent reading of simple texts, place value, first experiments and first sustained projects.' },
  { id: 's7', label: 'Ages 7–9', minAge: 7, maxAge: 9, description: 'Fluent reading, multi-step problems, fair tests, timelines and comparing points of view.' },
  { id: 's9', label: 'Ages 9–12', minAge: 9, maxAge: 12, description: 'Abstraction and evidence: fractions to ratio, systems thinking, sources, structured argument.' },
  { id: 's12', label: 'Ages 12+', minAge: 12, maxAge: 18, description: 'Formal reasoning, research, critique and independent extended projects.' },
];

export interface SubjectMeta { id: string; title: string; icon: string; tagline: string }
export interface WorldMeta {
  id: string; title: string; domain: string; tagline: string; guide: string; motif: string;
  colors: { sky: string; land: string; accent: string; ink: string };
  subjects: SubjectMeta[];
}

export const WORLDS: WorldMeta[] = [
  {
    id: 'word-woods', title: 'Word Woods', domain: 'Language & Literacy', motif: 'woods',
    tagline: 'Where every tree whispers a story', guide: 'Olu the Owl',
    colors: { sky: '#DDF3E4', land: '#3E8E5E', accent: '#F2B134', ink: '#1F3B2C' },
    subjects: [
      { id: 'phonics', title: 'Phonics & Reading', icon: '🔤', tagline: 'Sounds become words' },
      { id: 'writing', title: 'Writing & Handwriting', icon: '✏️', tagline: 'Make your marks' },
      { id: 'vocabulary', title: 'Vocabulary & Grammar', icon: '📚', tagline: 'Words and how they fit' },
      { id: 'stories', title: 'Stories & Literature', icon: '📖', tagline: 'Enter other worlds' },
      { id: 'speaking', title: 'Speaking & Listening', icon: '🗣️', tagline: 'Say it, hear it, share it' },
    ],
  },
  {
    id: 'number-mountains', title: 'Number Mountains', domain: 'Mathematics', motif: 'mountains',
    tagline: 'Climb higher one step at a time', guide: 'Kiko the Mountain Goat',
    colors: { sky: '#E3ECFF', land: '#5867C9', accent: '#FF8A5B', ink: '#1E2557' },
    subjects: [
      { id: 'number-sense', title: 'Numbers & Counting', icon: '🔢', tagline: 'How many? Which is more?' },
      { id: 'operations', title: 'Adding, Subtracting & Beyond', icon: '➕', tagline: 'Put together, take apart' },
      { id: 'shapes', title: 'Shapes & Geometry', icon: '🔺', tagline: 'Corners, sides and space' },
      { id: 'measurement', title: 'Measurement & Data', icon: '📏', tagline: 'Long, heavy, full — and charts' },
      { id: 'patterns', title: 'Patterns & Algebra', icon: '🔁', tagline: 'What comes next, and why' },
    ],
  },
  {
    id: 'discovery-lab', title: 'Discovery Lab', domain: 'Science', motif: 'lab',
    tagline: 'Wonder, test, find out', guide: 'Dr. Bubbles the Octopus',
    colors: { sky: '#E6F7FA', land: '#1E9AAE', accent: '#B65CE0', ink: '#0F3540' },
    subjects: [
      { id: 'life-science', title: 'Living Things', icon: '🐛', tagline: 'What makes something alive?' },
      { id: 'forces', title: 'Forces, Motion & Energy', icon: '🧲', tagline: 'Push, pull, go!' },
      { id: 'materials', title: 'Matter & Materials', icon: '🧪', tagline: 'What things are made of' },
      { id: 'earth', title: 'Earth & Weather', icon: '🌦️', tagline: 'Rocks, rain and sky' },
      { id: 'space', title: 'Space & Astronomy', icon: '🪐', tagline: 'Sun, Moon and stars' },
    ],
  },
  {
    id: 'green-valley', title: 'Green Valley', domain: 'Nature & Environment', motif: 'valley',
    tagline: 'Everything is connected', guide: 'Tara the Tortoise',
    colors: { sky: '#EEF8DC', land: '#6FA33A', accent: '#E8673C', ink: '#2C3D14' },
    subjects: [
      { id: 'plants', title: 'Plants & Gardening', icon: '🌱', tagline: 'Seeds, roots and blooms' },
      { id: 'animals', title: 'Animals & Habitats', icon: '🦁', tagline: 'Who lives where, and how' },
      { id: 'ecosystems', title: 'Ecosystems & Food Chains', icon: '🕸️', tagline: 'Who eats whom' },
      { id: 'water', title: 'Oceans, Rivers & Water', icon: '🌊', tagline: 'Every drop travels' },
      { id: 'conservation', title: 'Caring for the Earth', icon: '♻️', tagline: 'Small actions, big change' },
    ],
  },
  {
    id: 'wellness-island', title: 'Wellness Island', domain: 'Body & Health', motif: 'island',
    tagline: 'A strong body, a happy you', guide: 'Pala the Dolphin',
    colors: { sky: '#FFF0E8', land: '#F07C5A', accent: '#2BB3A3', ink: '#4A1E12' },
    subjects: [
      { id: 'body', title: 'My Amazing Body', icon: '🫀', tagline: 'Bones, muscles and more' },
      { id: 'senses', title: 'The Five Senses', icon: '👂', tagline: 'See, hear, smell, taste, touch' },
      { id: 'nutrition', title: 'Food & Nutrition', icon: '🥕', tagline: 'Fuel for growing' },
      { id: 'hygiene-safety', title: 'Hygiene & Safety', icon: '🧼', tagline: 'Clean, careful, confident' },
      { id: 'fitness', title: 'Movement & Fitness', icon: '🤸', tagline: 'Run, stretch, balance' },
    ],
  },
  {
    id: 'heart-harbor', title: 'Heart Harbor', domain: 'Social-Emotional & Character', motif: 'harbor',
    tagline: 'Kind hearts, calm minds', guide: 'Momo the Bear',
    colors: { sky: '#FFF2F5', land: '#E0607E', accent: '#5CA9E6', ink: '#4A1426' },
    subjects: [
      { id: 'feelings', title: 'Feelings & Emotions', icon: '💛', tagline: 'Name it to tame it' },
      { id: 'friendship', title: 'Friendship & Kindness', icon: '🤝', tagline: 'Playing and caring together' },
      { id: 'values', title: 'Values & Character', icon: '🌟', tagline: 'Honest, brave, fair' },
      { id: 'mindfulness', title: 'Calm & Mindfulness', icon: '🧘', tagline: 'Breathe and notice' },
      { id: 'life-skills', title: 'Life Skills & Responsibility', icon: '🧺', tagline: 'I can do it myself' },
    ],
  },
  {
    id: 'globe-garden', title: 'Globe Garden', domain: 'People, Places & Society', motif: 'globe',
    tagline: 'One world, many homes', guide: 'Zuri the Zebra',
    colors: { sky: '#FFF8E1', land: '#D99A1E', accent: '#2D7DD2', ink: '#3D2B05' },
    subjects: [
      { id: 'geography', title: 'Maps & Geography', icon: '🗺️', tagline: 'Where in the world?' },
      { id: 'communities', title: 'Communities & Helpers', icon: '🏘️', tagline: 'People who help us' },
      { id: 'cultures', title: 'Cultures & Festivals', icon: '🎎', tagline: 'Many ways to celebrate' },
      { id: 'money', title: 'Money & Economics', icon: '🪙', tagline: 'Needs, wants and choices' },
      { id: 'civics', title: 'Rules, Rights & Citizenship', icon: '🏛️', tagline: 'Fair rules for everyone' },
    ],
  },
  {
    id: 'time-tunnel', title: 'Time Tunnel', domain: 'History', motif: 'tunnel',
    tagline: 'Travel back and find out how we know', guide: 'Professor Hoot',
    colors: { sky: '#F3ECE2', land: '#9A6B3F', accent: '#3FA7A0', ink: '#3A2614' },
    subjects: [
      { id: 'historical-thinking', title: 'Thinking Like a Historian', icon: '🔎', tagline: 'Clues from the past' },
      { id: 'early-humans', title: 'Early Humans & Ancient Worlds', icon: '🏺', tagline: 'Caves, rivers and first cities' },
      { id: 'indian-history', title: 'History of India', icon: '📜', tagline: 'From Harappa to the Republic' },
      { id: 'world-history', title: 'World History', icon: '🌍', tagline: 'Peoples and turning points' },
      { id: 'inventions', title: 'Inventions & Discoveries', icon: '💡', tagline: 'Ideas that changed lives' },
    ],
  },
  {
    id: 'heritage-palace', title: 'Heritage Palace', domain: 'Epics, Stories & Wisdom Traditions', motif: 'palace',
    tagline: 'Great stories and the wisdom people find in them', guide: 'Mayur the Peacock',
    colors: { sky: '#FBEFFF', land: '#8E44AD', accent: '#F4B400', ink: '#2E0F3D' },
    subjects: [
      { id: 'ramayana', title: 'The Ramayana', icon: '🏹', tagline: 'Rama, Sita and the long journey' },
      { id: 'mahabharata', title: 'The Mahabharata', icon: '🐚', tagline: 'Families, choices and dharma' },
      { id: 'gita', title: 'The Bhagavad Gita', icon: '🪷', tagline: 'A conversation on a battlefield' },
      { id: 'folk-tales', title: 'Panchatantra, Jataka & Folk Tales', icon: '🐒', tagline: 'Clever animals, wise lessons' },
      { id: 'world-traditions', title: 'World Religions & Wisdom', icon: '🕊️', tagline: 'How people find meaning' },
    ],
  },
  {
    id: 'rainbow-studio', title: 'Rainbow Studio', domain: 'Arts & Creativity', motif: 'studio',
    tagline: 'Make something only you can make', guide: 'Rangi the Chameleon',
    colors: { sky: '#FFF4E0', land: '#E94F64', accent: '#3BB273', ink: '#45131B' },
    subjects: [
      { id: 'art', title: 'Drawing & Painting', icon: '🎨', tagline: 'Lines, colours, pictures' },
      { id: 'music', title: 'Music & Rhythm', icon: '🎵', tagline: 'Beat, tune and song' },
      { id: 'dance', title: 'Dance & Movement', icon: '💃', tagline: 'Tell it with your body' },
      { id: 'crafts', title: 'Crafts & Making', icon: '✂️', tagline: 'Fold, cut, build' },
      { id: 'drama', title: 'Drama & Puppetry', icon: '🎭', tagline: 'Pretend and perform' },
    ],
  },
  {
    id: 'tinker-town', title: 'Tinker Town', domain: 'Technology & Engineering', motif: 'town',
    tagline: 'Build it, test it, make it better', guide: 'Bolt the Robot',
    colors: { sky: '#E9EEF2', land: '#4F6D7A', accent: '#F28C28', ink: '#17252D' },
    subjects: [
      { id: 'coding', title: 'Coding & Algorithms', icon: '🧩', tagline: 'Step-by-step instructions' },
      { id: 'engineering', title: 'Building & Engineering', icon: '🏗️', tagline: 'Strong, tall, useful' },
      { id: 'machines', title: 'Simple Machines', icon: '⚙️', tagline: 'Levers, wheels and ramps' },
      { id: 'electricity', title: 'Electricity & Circuits', icon: '🔋', tagline: 'Making things light up' },
      { id: 'digital', title: 'Digital Life & Online Safety', icon: '💻', tagline: 'Smart and safe with screens' },
    ],
  },
  {
    id: 'mind-galaxy', title: 'Mind Galaxy', domain: 'Thinking, Wonder & Languages', motif: 'galaxy',
    tagline: 'Think about thinking', guide: 'Nova the Star-Fox',
    colors: { sky: '#1D1B4B', land: '#5B4FCF', accent: '#FFD166', ink: '#F4F1FF' },
    subjects: [
      { id: 'logic', title: 'Logic & Reasoning', icon: '🧠', tagline: 'If this, then that' },
      { id: 'puzzles', title: 'Puzzles & Problem Solving', icon: '🎲', tagline: 'Stuck is where learning starts' },
      { id: 'philosophy', title: 'Big Questions', icon: '🤔', tagline: 'Wondering together' },
      { id: 'study-skills', title: 'Memory & Learning Skills', icon: '🗂️', tagline: 'Learn how to learn' },
      { id: 'languages', title: 'Languages & Scripts', icon: '🌐', tagline: 'Many ways to say hello' },
    ],
  },
];

/** Subjects that must label evidence / belief / tradition in every lesson. */
export const SENSITIVITY: Record<string, 'history' | 'heritage'> = {
  'historical-thinking': 'history', 'early-humans': 'history', 'indian-history': 'history', 'world-history': 'history', inventions: 'history',
  ramayana: 'heritage', mahabharata: 'heritage', gita: 'heritage', 'folk-tales': 'heritage', 'world-traditions': 'heritage', cultures: 'heritage',
};
