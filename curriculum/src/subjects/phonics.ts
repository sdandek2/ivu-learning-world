import { subject, S, U, L, ch, tf, od, mt, ct } from '../dsl.ts';

export default subject({
  id: 'phonics',
  description: 'From hearing sounds in words to fluent, thoughtful reading. Systematic synthetic phonics in the early stages (sounds → blending → decodable words), then fluency, comprehension strategies, and finally critical reading of complex texts.',
  stages: [
    S('s4', 'Tuning in to sounds: rhyme, first sounds, and the first letter–sound links.', [
      'Hear and make rhymes', 'Hear the first sound in a spoken word', 'Link the sounds s, a, t, p, i, n to their letters',
    ], [
      U('sound-ears', 'Listening Ears', 'Words are made of sounds we can hear and play with.', 'Rhyme: hearing and making rhymes; First sounds: I-spy with sounds; Syllables: clapping word beats', [
        L('first-sounds', 'What Sound Does It Start With?', {
          o: ['Hear the first sound in a spoken word', 'Find objects that start with the same sound'],
          p: ['Can listen to and repeat short words'],
          e: [
            'Every word we say is made of sounds. "Sun" starts with a hissing snake sound: sss. "Mango" starts with a humming sound: mmm.',
            'We are listening for the SOUND, not the letter name. The sound of s is "sss", not "ess". Stretch the start of a word to hear it: "sssun".',
            'Words can share a first sound: sun, sock and sandwich all start with sss. Playing "I spy something beginning with mmm" trains your listening ears.',
          ],
          v: 'sound = what we hear when we say part of a word; first sound = the sound at the very start of a word; rhyme = words that end with the same sound, like cat and hat',
          x: ['Ball, bat and bus all start with b.', 'Moon and mango start with mmm; sun does not.'],
          s: ['Olu\'s Sound Basket', 'Olu the owl had a basket for things starting with sss. Kiko brought a sock — in it went! Then a spoon — in it went! Then Kiko brought a banana. "Bbb-banana," Olu listened. "That starts with bbb, not sss. It needs the b-basket!" Kiko laughed and made a second basket.'],
          a: [
            ch('Which starts with the same sound as SUN ☀️?', '*sock 🧦|ball ⚽|moon 🌙'),
            ch('Which starts with mmm?', 'fish 🐟|*mango 🥭|tiger 🐯'),
            mt('Match the pictures that start with the same sound', '🐝 bee=⚽ ball|🐟 fish=🦊 fox|🐍 snake=🧦 sock'),
            tf('Cat and cup start with the same sound.', true),
          ],
          t: ['Does your name start with the same sound as anyone else\'s in your family?', 'Why do you think we stretch the first sound when we listen?'],
          k: ['Play I-spy with a grown-up using sounds: "I spy something beginning with…" and explain your clue.'],
          m: ['Sound Treasure Hunt', 'a bag or basket, objects around the house', 'Pick a sound, like sss or mmm | Hunt for 5 things that start with that sound | Say each word, stretching the first sound | Put a wrong one in the basket and see if a grown-up can find it'],
          q: [
            ch('Which starts like DOG 🐶?', 'cat 🐱|*duck 🦆|pig 🐷'),
            tf('Ball and bat start with the same sound.', true),
            ch('Which starts with sss?', '*sun ☀️|pen 🖊️|top 🔝'),
          ],
          ms: ['Identifies the first sound in spoken words reliably', 'Sorts objects or pictures by first sound', 'Produces a word with a given first sound'],
        }),
      ]),
      U('first-letters', 'My First Letters: s a t p i n', 'Each letter shape stands for a sound.', 'Letter sounds: s, a, t, p, i, n; Letter shapes: tracing in sand, air writing; Oral blending: s-a-t → sat', [
        L('satpin', 'Letters Make Sounds', {
          o: ['Say the sounds for s, a, t, p, i and n', 'Blend spoken sounds into a word (s-a-t → sat)'],
          p: ['Can hear the first sound in a word'],
          e: [
            'Letters are shapes that stand for sounds. The letter s says "sss". The letter a says "a" as in apple. The letter t says a short "t".',
            'These six letters — s, a, t, p, i, n — can make lots of words: sat, pin, tap, nap, pit, tin, sit.',
            'Blending means pushing sounds together to make a word. Say them slowly, then faster: s… a… t… s-a-t… sat!',
          ],
          v: 'letter = a written shape for a sound; blend = push sounds together to say a word; sound buttons = touching under each letter as you say its sound',
          x: ['p-a-n blends to pan.', 'i-n blends to in.'],
          s: ['The Sound Train', 'Bolt the robot had three train carriages: s, a and t. "Each one carries a sound," said Bolt. The train went slowly: "sss… aaa… t." Then faster: "ss-a-t." Then whoosh! "Sat!" The train had made a word.'],
          a: [
            ch('Blend: s – a – t', '*sat|pin|tap'),
            ch('Blend: p – i – n', 'pan|*pin|nap'),
            mt('Match the letter to its picture', 's=☀️ sun|a=🍎 apple|t=🐯 tiger|p=🐷 pig'),
            ct('How many sounds in "tap"? t-a-p', 3),
          ],
          t: ['If you change the t in "tap" to n, what new word do you make?', 'Why do you think letters were invented?'],
          k: ['Read the word "sat" to a grown-up by touching each letter as you say its sound, then saying the whole word.'],
          m: ['Sandy Letters', 'a tray with sand, salt or flour, letter cards s a t p i n', 'Look at a letter card and say its sound | Draw the letter in the sand with your finger | Say the sound again as you draw | Make three letters in a row and blend them into a word'],
          q: [
            ch('Blend: t – i – n', '*tin|tap|pit'),
            ch('Which letter says "sss"?', 'a|*s|t'),
            ct('How many sounds in "pin"?', 3),
          ],
          ms: ['Says the sound for s, a, t, p, i, n on sight', 'Orally blends 3 sounds into a word', 'Reads at least 5 CVC words made from these letters'],
        }),
      ]),
    ]),
    S('s5', 'Reading simple words and sentences: all single letter sounds, digraphs, and first tricky words.', [
      'Know all 26 letter sounds', 'Read consonant digraphs sh, ch, th, ng', 'Read short decodable sentences',
    ], [
      U('cvc-words', 'Reading CVC Words', 'Sound out and blend consonant–vowel–consonant words.', 'Vowels: a, e, i, o, u; CVC words: cat, dog, sun; Segmenting: hearing each sound for spelling', [
        L('vowel-sandwich', 'The Vowel in the Middle', {
          o: ['Read CVC words with all five short vowels', 'Segment spoken CVC words into three sounds'],
          p: ['Knows most single letter sounds'],
          e: [
            'Many short words are like a sandwich: a consonant, a vowel in the middle, and a consonant — like c-a-t or d-o-g. We call them CVC words.',
            'The five vowels a, e, i, o, u are the "filling". Changing the vowel changes the word: pat, pet, pit, pot, put — no, "put" is tricky! Pat, pet, pit, pot are all regular.',
            'To read, say each sound and blend. To spell, do the opposite: say the word slowly and write a letter for each sound you hear. That is called segmenting.',
          ],
          v: 'vowel = one of the letters a, e, i, o, u; consonant = any letter that is not a vowel; segment = split a word into its sounds',
          x: ['b-e-d → bed; r-u-n → run.', 'Changing the vowel: hat → hit → hot → hut.'],
          s: ['The Magic Middle', 'Rangi the chameleon could change colour — and words! Rangi sat on the word "hat" and turned purple: it became "hit". Rangi turned blue: "hot". Then orange: "hut". "I only changed the middle sound," Rangi giggled, "but each time I made a new word!"'],
          a: [
            ch('Read: d – o – g', 'dig|*dog|dug'),
            mt('Match the word to the picture', 'sun=☀️|bed=🛏️|cat=🐱|bus=🚌'),
            ch('Which word has the sound "e" in the middle?', 'pin|*pen|pan'),
            od('Put the sounds in order to make "map"', 'm|a|p'),
          ],
          t: ['How many new words can you make by changing only the middle sound of "pat"?', 'Why are vowels important in almost every word?'],
          k: ['Read five CVC words to a grown-up, then explain how you worked out the hardest one.'],
          m: ['Word Slider', 'card strips, scissors, pen', 'Write a start letter and an end letter on a card with a gap | Make a strip of vowels a e i o u | Slide the strip through the gap | Read each word and decide if it is a real word or a silly word'],
          q: [
            ch('Read: f – i – t', '*fit|fat|fog'),
            ch('Which picture matches "pig"?', '*🐷|🐶|🐮'),
            ct('How many sounds in "dog"?', 3),
          ],
          ms: ['Reads CVC words with all five vowels accurately', 'Spells CVC words by segmenting', 'Explains what changing the vowel does'],
        }),
      ]),
      U('digraphs', 'Two Letters, One Sound', 'Some sounds are written with two letters.', 'Digraphs: sh, ch, th, ng, ck; Tricky words: the, to, I, was; Sentences: reading with finger tracking', [
        L('sh-ch-th', 'sh, ch and th', {
          o: ['Read words containing sh, ch and th', 'Recognise that two letters can make one sound'],
          p: ['Reads CVC words'],
          e: [
            'Sometimes two letters work together to make ONE sound. We call them a digraph — "di" means two. s and h together say "sh", like a quiet finger on your lips.',
            'c and h together say "ch" like a train: ch-ch-ch. t and h together say "th" — stick your tongue out a little: think, this, bath.',
            'When you see these pairs, put ONE sound button under both letters. "Ship" has three sounds: sh-i-p, even though it has four letters.',
          ],
          v: 'digraph = two letters that make one sound; sound button = a dot under the letters for each sound; tricky word = a word we cannot fully sound out, like "the"',
          x: ['sh: ship, fish, shop.', 'ch: chip, lunch; th: thin, bath.'],
          s: ['The Quiet Ship', 'A big ship sailed past the harbour. "SHHH!" said Momo the bear. "The baby fish are sleeping." Everyone whispered. "Sh is the sleeping sound," said Momo. When the fish woke up, they chased a chip: "Ch-ch-ch!" went the little fish train.'],
          a: [
            ch('Which word has "sh"?', 'chin|*shop|thin'),
            ct('How many SOUNDS in "fish"? f-i-sh', 3, 'sh is two letters but one sound.'),
            mt('Match', 'ship=🚢|chick=🐤|bath=🛁'),
            tf('In "chip", c and h make one sound together.', true),
          ],
          t: ['Why can\'t we just read "s" then "h" in ship? What would it sound like?', 'Can you think of a word with "sh" at the end?'],
          k: ['Teach a grown-up the actions for sh (finger on lips), ch (train) and th (tongue out), and read one word for each.'],
          m: ['Digraph Fishing Game', 'paper fish shapes, paper clips, a stick with string and a magnet (or just tongs), pen', 'Write a word with sh, ch or th on each fish | Add a paper clip to each | Fish one out | Read it, then sort it into the sh, ch or th pond'],
          q: [
            ch('Which word starts with "ch"?', 'ship|*chop|then'),
            ct('How many sounds in "moth"?', 3),
            ch('"th" is in…', 'chat|*thin|shed'),
          ],
          ms: ['Reads words with sh, ch, th, ng and ck', 'Counts sounds (not letters) correctly in digraph words', 'Reads a short decodable sentence including digraphs'],
        }),
      ]),
    ]),
    S('s6', 'Long vowel sounds, alternative spellings, and reading with fluency and understanding.', [
      'Read words with vowel digraphs (ai, ee, igh, oa, oo)', 'Know split digraphs (a-e, i-e, o-e)', 'Read aloud with expression and retell',
    ], [
      U('long-vowels', 'Long Vowel Teams', 'Vowel teams and split digraphs make long vowel sounds.', 'Vowel digraphs: ai, ee, igh, oa, oo; Split digraphs: a-e, i-e, o-e, u-e; Alternative spellings: ay/ai, ee/ea', [
        L('magic-e', 'The Split Digraph (Magic e)', {
          o: ['Read words with split digraphs a-e, i-e, o-e, u-e', 'Explain how the final e changes the vowel sound'],
          p: ['Reads CVC words and common digraphs'],
          e: [
            'Look at "cap" and "cape". Adding e at the end changes the short "a" into a long "ay" sound. The a and the e work as a team even though a letter sits between them — a split digraph.',
            'It works for other vowels: pin → pine, hop → hope, cub → cube. The e itself is silent; its job is to change the vowel.',
            'Reading tip: when you see a vowel, one consonant, then e at the end, try the long vowel sound first.',
          ],
          v: 'split digraph = two vowel letters split by a consonant that make one long sound; long vowel = a vowel that says its name, like a in cake; silent letter = a letter we write but do not say',
          x: ['kit → kite, not → note.', 'tub → tube; man → mane.'],
          s: ['The Sneaky e', 'Little e loved jumping onto the ends of words. It hopped onto "hop" — and suddenly the word said "hope"! It leapt onto "kit" — "kite!" "I don\'t make a sound," said little e, "but I make the vowel shout its name!"'],
          a: [
            ch('Add e to "pin". What does it say?', 'pin|*pine|pen'),
            mt('Match', 'cap=🧢|cape=🦸|kit=🧰|kite=🪁'),
            tf('In "hope", the e is silent.', true),
            ch('Which word has a split digraph?', 'cat|*cake|coat'),
          ],
          t: ['Why might English use a silent e instead of a new letter for long sounds?', 'Can you find a word where the "magic e" rule does not work? (Hint: "have", "give")'],
          k: ['Explain the split digraph to a younger child or a toy using cap and cape.'],
          m: ['Flip Book of Magic e', 'paper strips, stapler, pens', 'Write short words like cap, pin, hop, cub on strips | Add a flap with e that folds over the end | Read each word with and without the flap | Draw a picture for both words'],
          q: [
            ch('Read: r-o-b-e', 'rob|*robe|rib'),
            ch('Which is a long "i" word?', 'bit|*bite|bat'),
            tf('Adding e to "cub" makes "cube".', true),
          ],
          ms: ['Reads split digraph words accurately in and out of context', 'Explains the role of silent e', 'Spells common split digraph words'],
        }),
      ]),
      U('fluent-reading', 'Reading with Fluency', 'Reading smoothly, with expression, and understanding what we read.', 'Fluency: phrasing, punctuation, expression; Comprehension: who, what, where, why; Retelling: beginning, middle, end', [
        L('read-like-a-storyteller', 'Read Like a Storyteller', {
          o: ['Use punctuation to read with expression', 'Retell a short story in order'],
          p: ['Reads simple sentences by sounding out'],
          e: [
            'Fluent readers read smoothly, not word… by… word. They group words into phrases, like "the big red bus", and say them together.',
            'Punctuation is a signal: a full stop means pause; a question mark means your voice goes up; an exclamation mark means say it with feeling!',
            'Good readers also check understanding. After a page, ask: Who is in it? What happened? Why? If something does not make sense, go back and re-read.',
          ],
          v: 'fluency = reading smoothly and at a good speed; expression = using your voice to show feeling; punctuation = marks like . ? ! that guide reading; retell = tell what happened in your own words',
          x: ['"Help!" shouted the cat. — read "Help!" loudly.', '"Where is my hat?" — voice goes up at the end.'],
          s: ['The Robot Who Read Too Flat', 'Bolt read a story aloud: "THE. WOLF. IS. COMING. RUN." Nobody was scared. Rangi showed Bolt the exclamation mark. Bolt tried again: "The wolf is coming… RUN!" Everyone jumped. "Punctuation tells me how to read," Bolt beeped happily.'],
          a: [
            ch('What should your voice do at a question mark?', '*go up|go down|stop talking'),
            mt('Match the mark to its job', '.=stop and pause|?=ask a question|!=show strong feeling'),
            od('Put the story in order', 'Pip planted a seed|Pip watered it every day|A green shoot appeared|A big sunflower grew'),
            tf('Good readers re-read when something does not make sense.', true),
          ],
          t: ['Why do you think reading in phrases helps us understand?', 'How can the same sentence mean different things if you read it differently?'],
          k: ['Read a page of a favourite book to someone using expression, then retell it without looking.'],
          m: ['Family Radio Show', 'a short story book, a phone or tablet to record (optional)', 'Choose a short story | Practise reading it three times, adding expression | Perform it for your family like a radio show | Ask your listeners to retell the beginning, middle and end'],
          q: [
            ch('"Look out!" should be read…', 'quietly and slowly|*loudly and with feeling|as a question'),
            od('Order: beginning, middle, end', 'The egg cracked|A chick wriggled out|The chick cheeped for its mother'),
            ch('A full stop means…', '*pause; the sentence is finished|ask a question|shout'),
          ],
          ms: ['Reads age-appropriate text with phrasing and attention to punctuation', 'Retells a story with beginning, middle and end', 'Self-corrects when meaning breaks down'],
        }),
      ]),
    ]),
    S('s7', 'Reading to learn: complex spellings, prefixes and suffixes, and comprehension strategies.', [
      'Decode multisyllabic words using syllables and morphemes', 'Infer characters\' feelings and motives', 'Summarise texts',
    ], [
      U('word-parts', 'Word Parts: Prefixes and Suffixes', 'Long words are built from smaller meaningful parts.', 'Prefixes: un-, re-, dis-, pre-; Suffixes: -ful, -less, -ing, -ed, -ly; Syllable division: chunking long words', [
        L('build-a-word', 'Build-a-Word', {
          o: ['Use prefixes and suffixes to read and understand longer words', 'Break multisyllabic words into syllables'],
          p: ['Reads most single-syllable words fluently'],
          e: [
            'Long words are often built from parts. A root word carries the main meaning: "help". A prefix goes in front and changes meaning: "un-" means not. A suffix goes at the end: "-ful" means full of.',
            'So "unhelpful" = un + help + ful = not full of help. Spotting parts lets you read and understand words you have never seen before.',
            'For other long words, split into syllables — each has one vowel sound: fan-tas-tic, hel-i-cop-ter. Read each chunk, then blend the chunks.',
          ],
          v: 'root word = the main part of a word that carries its meaning; prefix = a part added at the start of a word; suffix = a part added at the end of a word; syllable = a beat of a word with one vowel sound',
          x: ['re + play = replay (play again).', 'care + less = careless (without care).'],
          s: ['The Word Workshop', 'In Tinker Town, Bolt ran a word workshop. A customer wanted a word meaning "not happy". Bolt took the prefix "un-" from the shelf and bolted it onto "happy": "unhappy!" Next someone wanted "full of joy". Bolt fitted "-ful" onto "joy": "joyful!"'],
          a: [
            ch('"Rewrite" means…', '*write again|not write|write before'),
            mt('Match the prefix to its meaning', 'un-=not|re-=again|pre-=before'),
            ct('How many syllables in "helicopter"? hel-i-cop-ter', 4),
            ch('Which word means "without fear"?', 'fearful|*fearless|unfear'),
          ],
          t: ['Why might "disappear" and "appear" be connected? What does "dis-" do?', 'Can a word have both a prefix and a suffix? Find three examples.'],
          k: ['Invent a new word using a real prefix and root, and explain to someone what it would mean.'],
          m: ['Word Family Tree', 'large paper, markers', 'Write a root word (like "play" or "kind") in the trunk | Add branches with prefixes and suffixes | Write each new word on a leaf | Use three of the words in sentences'],
          q: [
            ch('In "unkind", the prefix is…', '*un|kind|nd'),
            ch('"Hopeful" means…', 'without hope|*full of hope|hope again'),
            ct('How many syllables in "fantastic"?', 3),
          ],
          ms: ['Identifies common prefixes/suffixes and their meanings', 'Decodes unfamiliar multisyllabic words by syllables and morphemes', 'Uses morphology to infer meaning of new words'],
        }),
      ]),
      U('comprehension', 'Reading Between the Lines', 'Inference and summarising: understanding more than the words say.', 'Inference: clues + what I know; Characters: feelings, motives, change; Summarising: main idea, key details', [
        L('inference-detective', 'Inference Detective', {
          o: ['Make inferences using text clues and background knowledge', 'Support an inference with evidence from the text'],
          p: ['Reads short passages independently'],
          e: [
            'Authors don\'t tell us everything. They leave clues. Inference means using those clues plus what you already know to work out what is not said.',
            'Example: "Riya stamped upstairs and slammed her door." The author never says "angry", but stamping and slamming are clues — and we know people do that when they are upset.',
            'Good inference needs evidence. Say: "I think… because the text says…". A guess without a clue from the text is not an inference.',
          ],
          v: 'inference = a conclusion reached from clues and knowledge; evidence = words in the text that support an idea; motive = the reason a character does something; literal = exactly what the words say',
          x: ['"He shivered and pulled his scarf tighter" → it is cold.', '"Her eyes sparkled as she unwrapped the box" → she is excited or pleased.'],
          s: ['The Muddy Footprints', 'Detective Nova found muddy paw prints from the garden to the sofa, a chewed cushion, and a wagging tail sticking out from under a blanket. "Nobody told me who did it," said Nova, "but the clues tell me everything. The puppy has been in the garden — and is very pleased with itself!"'],
          a: [
            ch('"Arjun yawned and rubbed his eyes." Arjun is probably…', 'hungry|*tired|angry'),
            ch('Which shows an inference with evidence?', 'She is sad.|*She is sad because the text says tears ran down her face.|I like sad stories.'),
            tf('An inference must be supported by clues in the text.', true),
            mt('Match the clue to the inference', 'umbrellas everywhere=it is raining|smoke and sirens=there is a fire|wrapping paper on the floor=someone opened presents'),
          ],
          t: ['Can two readers make different inferences from the same text? How would you decide which is better?', 'Why do authors "show" feelings instead of just telling us?'],
          k: ['Read a short story page and explain one inference to someone, using the sentence "I think… because the text says…".'],
          m: ['Inference Clue Cards', 'index cards, pens, a picture book', 'Find 5 sentences in a book that hint at a feeling or event without saying it | Copy each onto a card | Write your inference and the clue words on the back | Swap cards with a family member and compare inferences'],
          q: [
            ch('"The dog\'s ears flattened and it hid behind the sofa during the thunder." The dog feels…', 'excited|*scared|sleepy'),
            tf('If the text says "Maya laughed until she cried", we can infer Maya found something funny.', true),
            ch('Best evidence that a character is nervous:', 'She wore a blue dress.|*Her hands shook as she held the microphone.|She lived in a big house.'),
          ],
          ms: ['Makes plausible inferences about feelings, motives and events', 'Supports inferences with quoted or paraphrased evidence', 'Distinguishes literal information from inferred meaning'],
        }),
      ]),
    ]),
    S('s9', 'Reading across genres: non-fiction structures, author\'s purpose, and evaluating sources.', [
      'Identify text structures and features of non-fiction', 'Determine author\'s purpose and viewpoint', 'Compare information across texts',
    ], [
      U('nonfiction', 'Reading Non-Fiction', 'How information texts are organised and how to navigate them.', 'Text features: headings, captions, diagrams, glossary; Text structures: cause–effect, compare–contrast, problem–solution, sequence; Note-making: key words, mind maps', [
        L('text-structures', 'How Information Is Organised', {
          o: ['Identify common non-fiction text structures', 'Use structure and features to find and summarise information'],
          p: ['Reads fluently and can summarise a paragraph'],
          e: [
            'Non-fiction writers organise ideas in patterns. Sequence explains steps or time order. Cause and effect explains why something happens. Compare and contrast shows similarities and differences. Problem and solution describes a problem and ways to solve it.',
            'Signal words reveal the structure: "first, then, finally" (sequence); "because, as a result, therefore" (cause–effect); "however, similarly, whereas" (compare); "one solution is" (problem–solution).',
            'Text features help navigation: headings tell you what a section is about, captions explain images, a glossary defines key words, and an index helps you find topics.',
          ],
          v: 'text structure = the way information is organised; signal word = a word that hints at the structure; glossary = a list of key words and meanings; caption = text explaining a picture',
          x: ['"Because forests were cut down, the soil washed away" — cause and effect.', '"Frogs have smooth skin, whereas toads have bumpy skin" — compare and contrast.'],
          s: ['Lost in the Library Book', 'Zuri needed to find out what tigers eat for a project. She started reading a 200-page book from page one. Nova showed her the index: "Tigers, diet — page 43." Then the heading "What Tigers Eat" and a diagram of a food chain. Zuri found her answer in two minutes.'],
          a: [
            mt('Match signal words to structure', 'first, next, finally=sequence|because, as a result=cause and effect|whereas, however=compare and contrast'),
            ch('A list of key words and their meanings at the back of a book is a…', 'caption|*glossary|heading'),
            ch('"Plastic harms sea turtles. One solution is to use cloth bags." Structure?', 'sequence|*problem and solution|compare and contrast'),
            tf('Headings help readers find information quickly.', true),
          ],
          t: ['Why might an author choose compare–contrast instead of cause–effect for the same topic?', 'How can text features sometimes mislead a reader (e.g. a dramatic photo)?'],
          k: ['Explain to someone how you would find one fact in a non-fiction book in under two minutes.'],
          m: ['Make a Mini Information Book', 'paper, stapler, pencils, reference books', 'Choose a topic you know well | Plan sections with headings | Use at least two structures (e.g. sequence and compare–contrast) | Add captions, a glossary and a contents page | Ask a reader to find a fact using your features'],
          q: [
            ch('"Water heats, then evaporates, then forms clouds." Structure?', '*sequence|problem–solution|compare–contrast'),
            ch('Which signal word suggests cause and effect?', 'similarly|*therefore|first'),
            tf('An index is usually at the front of a book.', false, 'The contents page is at the front; the index is usually at the back.'),
          ],
          ms: ['Identifies text structures using signal words', 'Uses features (contents, index, headings, glossary) efficiently', 'Summarises a non-fiction section accurately'],
        }),
      ]),
      U('purpose-viewpoint', 'Author\'s Purpose and Viewpoint', 'Why was this written, and from whose point of view?', 'Purpose: inform, persuade, entertain, explain; Viewpoint: fact vs opinion, bias; Comparing texts: same topic, different accounts', [
        L('fact-opinion', 'Fact, Opinion and Purpose', {
          o: ['Distinguish facts from opinions in texts', 'Identify the author\'s purpose and viewpoint'],
          p: ['Understands basic non-fiction structures'],
          e: [
            'A fact can be checked and shown to be true or false: "The Ganga flows into the Bay of Bengal." An opinion is what someone thinks or feels: "The Ganga is the most beautiful river." Opinions can be reasonable or unreasonable, but they cannot be proven true like facts.',
            'Authors write for a purpose: to inform, persuade, entertain or explain. Persuasive texts mix facts with opinions and use emotive words to influence you.',
            'Every author has a viewpoint. Ask: Who wrote this? Why? What did they leave out? Comparing two accounts of the same event reveals different viewpoints.',
          ],
          v: 'fact = a statement that can be checked; opinion = a belief or judgement; bias = leaning unfairly to one side; persuade = try to make someone agree or act',
          x: ['Advert: "Crunchy-O\'s — the tastiest cereal ever!" (opinion, persuade).', 'Encyclopedia: "Cheetahs can reach speeds of over 100 km/h in short bursts." (fact, inform).'],
          s: ['Two Reports of the Match', 'After the school football final, two newspapers reported it. The Red Times wrote: "Brilliant Reds deservedly win 2–1!" The Blue Gazette wrote: "Unlucky Blues lose 2–1 after a dubious penalty." Kiko noticed: both agreed on the score — the fact — but told very different stories.'],
          a: [
            ch('Which is a FACT?', 'Mangoes are the best fruit.|*Mangoes grow on trees.|Mangoes are too sweet.'),
            mt('Match text to purpose', 'advertisement=persuade|recipe=explain how|joke book=entertain|encyclopedia=inform'),
            tf('A text can contain both facts and opinions.', true),
            ch('Which word signals an opinion?', 'measured|*wonderful|located'),
          ],
          t: ['Is "Most people in my class like cricket" a fact or an opinion? How could you check?', 'Why might an author leave out certain facts?'],
          k: ['Find an advertisement and explain to someone which parts are facts and which are opinions, and what it wants you to do.'],
          m: ['Two Sides Newspaper', 'paper, pens', 'Pick a simple event (e.g. "the new park opens") | Write a short neutral report with only facts | Rewrite it twice: once strongly for, once strongly against | Highlight opinion words in each version | Present them and explain how viewpoint changes the story'],
          q: [
            ch('"Delhi is the capital of India." This is…', '*a fact|an opinion'),
            ch('A leaflet saying "Join the best club in town!" mainly wants to…', 'entertain|inform|*persuade'),
            tf('Opinions can always be proven true.', false),
          ],
          ms: ['Separates fact from opinion with justification', 'Identifies purpose and viewpoint in varied texts', 'Compares two accounts and explains differences'],
        }),
      ]),
    ]),
    S('s12', 'Critical and analytical reading: rhetoric, argument evaluation, and close reading of literature.', [
      'Analyse rhetorical techniques', 'Evaluate arguments and evidence', 'Close-read literary texts for theme and craft',
    ], [
      U('rhetoric', 'Rhetoric and Argument', 'How texts persuade, and how to evaluate whether they should.', 'Rhetorical appeals: ethos, pathos, logos; Techniques: repetition, rhetorical questions, tricolon; Fallacies: ad hominem, straw man, false dilemma', [
        L('ethos-pathos-logos', 'Ethos, Pathos, Logos', {
          o: ['Identify the three classical rhetorical appeals', 'Evaluate whether an argument\'s evidence and reasoning are sound'],
          p: ['Can identify fact, opinion and purpose'],
          e: [
            'Aristotle described three modes of persuasion: ethos (credibility of the speaker), pathos (appeal to emotion), and logos (appeal to logic and evidence). Most persuasive texts mix all three.',
            'Rhetorical techniques include repetition, rhetorical questions, triads ("tricolon"), and vivid imagery. Recognising them helps you notice when you are being moved — and decide if you should be.',
            'A strong argument has true premises and valid reasoning. Watch for fallacies: attacking the person instead of the argument (ad hominem), misrepresenting an opposing view (straw man), or presenting only two options when more exist (false dilemma).',
          ],
          c: [['evidence', 'The ethos–pathos–logos framework comes from Aristotle\'s "Rhetoric", written in the 4th century BCE.']],
          v: 'ethos = persuasion through credibility; pathos = persuasion through emotion; logos = persuasion through logic and evidence; fallacy = a flaw in reasoning that makes an argument unsound',
          x: ['"As a doctor with 20 years\' experience…" — ethos.', '"Either we ban all cars or the planet is doomed." — false dilemma.'],
          s: ['The School Debate', 'In a debate about longer lunch breaks, Meera said, "Ninety percent of students surveyed reported feeling tired after lunch-rush." Her opponent replied, "Meera just wants to play more football." The judge noted: Meera used logos; her opponent used an ad hominem attack — which didn\'t answer her evidence at all.'],
          a: [
            mt('Match the example to the appeal', 'statistics from a study=logos|a heartbreaking photo=pathos|endorsement by an expert=ethos'),
            ch('"You can\'t trust his idea about recycling — he failed maths." This is…', 'straw man|*ad hominem|false dilemma'),
            tf('An emotional appeal is always a fallacy.', false, 'Pathos can be legitimate when emotions fit the facts.'),
            ch('Which is a false dilemma?', '*"You\'re either with us or against us."|"Studies show sleep improves memory."|"I have taught for ten years."'),
          ],
          t: ['When is an emotional appeal fair, and when is it manipulative?', 'Can an argument use a fallacy and still reach a true conclusion?'],
          k: ['Give a one-minute persuasive speech using all three appeals, then ask listeners to identify each one.'],
          m: ['Rhetoric Annotation Project', 'a printed famous speech or editorial, highlighters', 'Choose a speech or op-ed | Highlight ethos, pathos and logos in three colours | Mark rhetorical techniques in the margin | Identify any fallacies | Write a 300-word evaluation of how convincing it is and why'],
          q: [
            ch('"Nine out of ten dentists recommend…" mainly uses…', 'pathos|*ethos and logos|ad hominem'),
            ch('Misrepresenting an opponent\'s view to attack it easily is a…', '*straw man|ad hominem|tricolon'),
            tf('A valid argument with a false premise can still lead to a false conclusion.', true),
          ],
          ms: ['Identifies appeals and techniques in unfamiliar texts', 'Detects common fallacies and explains why they are flawed', 'Writes a balanced evaluation of an argument\'s effectiveness and soundness'],
        }),
      ]),
      U('close-reading', 'Close Reading Literature', 'How writers create meaning through language, structure and form.', 'Language: imagery, metaphor, connotation; Structure: perspective, pacing, foreshadowing; Theme: universal ideas and evidence', [
        L('craft-and-theme', 'Craft and Theme', {
          o: ['Analyse how specific word choices create effects', 'Develop and support an interpretation of theme'],
          p: ['Can infer and support inferences with evidence'],
          e: [
            'Close reading means slowing down to notice how a writer creates meaning. Word choice matters: "the house loomed" suggests threat in a way "the house stood" does not. That suggestion is the word\'s connotation.',
            'Writers shape structure too: who narrates, what is revealed when, and how pacing speeds up or slows down. Foreshadowing plants hints of later events.',
            'A theme is a central idea about life the text explores — not just a topic. "Friendship" is a topic; "true friendship requires honesty even when it hurts" is a theme. Support interpretations with precise evidence and explanation (point–evidence–explain).',
          ],
          v: 'connotation = the feelings or ideas a word suggests beyond its literal meaning; foreshadowing = hints of what will happen later; theme = a central message or insight about life; imagery = language that appeals to the senses',
          x: ['"Her voice was ice" (metaphor) suggests coldness and distance.', 'Point: the narrator is lonely. Evidence: "the empty chairs stared back". Explain: personifying chairs emphasises her isolation.'],
          s: ['The Same Storm', 'Two students described the same storm. One wrote: "It rained heavily." The other wrote: "The sky split open and the rain came down like a punishment." Their teacher asked the class: "What does the second writer want you to feel — and how did they do it in eleven words?"'],
          a: [
            ch('"The shadows crept across the floor." The verb "crept" suggests…', '*something slow and threatening|happiness|speed'),
            tf('A theme is the same thing as the topic of a story.', false, 'A theme is an insight or message about the topic.'),
            od('Order the analysis paragraph', 'Point: make a claim|Evidence: quote the text|Explain: analyse how the evidence supports the claim'),
            mt('Match the device to the example', 'simile=as brave as a lion|metaphor=the classroom was a zoo|personification=the wind whispered'),
          ],
          t: ['Can a text have a theme the author did not intend? Who decides what a text means?', 'Why might a writer tell a story from an unreliable narrator\'s point of view?'],
          k: ['Present a two-minute close reading of a single paragraph from a novel, focusing on three word choices.'],
          m: ['Close Reading Essay', 'a short story or novel chapter, notebook', 'Choose a passage of about 200 words | Annotate imagery, connotation and structure | Formulate a theme statement | Write a 500-word essay using point–evidence–explain | Revise after reading it aloud'],
          q: [
            ch('Which is a theme statement?', 'War|*War destroys innocence even in those who survive it.|A story about soldiers'),
            ch('A hint early in a story about a later event is…', 'imagery|*foreshadowing|connotation'),
            tf('In close reading, explaining the effect of evidence matters as much as quoting it.', true),
          ],
          ms: ['Analyses language and structure with precise terminology', 'Formulates arguable theme statements', 'Writes sustained interpretations supported by evidence'],
        }),
      ]),
    ]),
  ],
});
