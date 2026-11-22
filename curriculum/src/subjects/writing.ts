import { subject, S, U, L, ch, tf, od, mt, ct } from '../dsl.ts';

export default subject({
  id: 'writing',
  description: 'From strong hands and first marks to letter formation, sentences, paragraphs and purposeful writing for real audiences. Physical skills (grip, formation) are built alongside composition (ideas, organisation, revision).',
  stages: [
    S('s4', 'Getting ready to write: strong fingers, pencil grip, pre-writing strokes and first letters.', [
      'Hold a crayon or pencil with a comfortable tripod grip', 'Draw lines, circles and zigzags with control', 'Form the letters of their own name',
    ], [
      U('ready-hands', 'Ready Hands', 'Strong hands and pre-writing patterns come before letters.', 'Hand strength: dough, pegs, tearing paper; Grip: the tripod grip; Pre-writing strokes: lines, circles, crosses, zigzags', [
        L('magic-lines', 'Magic Lines and Circles', {
          o: ['Draw straight, curved and zigzag lines with control', 'Hold a crayon with a tripod grip (thumb, pointer and middle finger)'],
          p: ['Can hold a crayon and make marks'],
          e: [
            'Before we write letters, we practise the lines that letters are made of. Every letter is built from straight lines, curves and circles.',
            'A good grip is like a little bird beak: your thumb and pointer finger pinch the pencil, and your middle finger is the cushion underneath. Hold it gently, not too tight.',
            'Start at the top and go down. Circles for letters like o go round anticlockwise, the same way the hands of a clock go backwards.',
          ],
          v: 'grip = how you hold your pencil; line = a long thin mark; curve = a bending line, like a rainbow; zigzag = a line that goes up and down in sharp points',
          x: ['Straight down lines make rain falling from a cloud.', 'Round and round circles make bubbles, balls and the letter o.'],
          s: ['The Rain and the Rainbow', 'Rangi the chameleon wanted to draw a rainy day. "Start at the top and go down," said Rangi, drawing rain lines: down, down, down. Then the sun came out. Rangi drew a big curve across the sky — a rainbow! "Lines and curves," Rangi smiled, "are the secret pieces of every letter."'],
          a: [
            ch('Which hand shape holds a pencil best?', '*a little bird beak 🐦|a tight fist ✊|one finger ☝️'),
            ch('Where do we start a down line?', '*at the top ⬆️|at the bottom ⬇️'),
            mt('Match the line to the picture', 'zigzag=⚡ lightning|circle=⚽ ball|curve=🌈 rainbow'),
            tf('Letters are made from lines, curves and circles.', true),
          ],
          t: ['Why do you think we start most letters at the top?', 'Which is harder to draw — a circle or a zigzag? Why?'],
          k: ['Show a grown-up your bird-beak grip and explain how it works.'],
          m: ['Rainy Day Line Picture', 'paper, crayons, a cotton bud and paint (optional)', 'Draw a big cloud at the top of the page | Draw rain lines from the top down | Add a curve rainbow and circle puddles | Draw a zigzag lightning bolt | Tell a grown-up which lines you used'],
          q: [
            ch('Which line is this: ⚡', 'circle|*zigzag|curve'),
            tf('We should squeeze the pencil as hard as we can.', false, 'A gentle grip is better and less tiring.'),
            ch('A ball shape is a…', '*circle|line|zigzag'),
          ],
          ms: ['Copies vertical, horizontal, circular and zigzag strokes', 'Uses a functional tripod or emerging tripod grip', 'Starts vertical strokes at the top'],
        }),
      ]),
      U('my-name', 'Writing My Name', 'The first word most children write is their own name.', 'Name letters: capital first letter, lower-case after; Letter formation: start points, direction; Recognising names: own name, family names', [
        L('name-writing', 'My Name Is Special', {
          o: ['Recognise their own written name', 'Write their first name with a capital letter first'],
          p: ['Can draw lines and circles'],
          e: [
            'Your name is a special word. When we write a name, the first letter is a capital (a big letter) and the rest are small letters.',
            'Each letter has a starting point. Most letters start at the top. For a name like Ivaan: I is a straight line down; v goes down-up; a is a round curve then a line; n is down, up and over.',
            'Practise by tracing first, then copying, then writing from memory. Every time you write your name, your hand remembers a little more.',
          ],
          v: 'capital letter = a big letter used at the start of names; small letter = the usual letters we write most of the time; trace = draw over lines that are already there',
          x: ['Ivaan starts with a capital I.', 'Mumbai, Asha and Tara all start with capital letters because they are names.'],
          s: ['The Name on the Door', 'Momo the bear made a sign for the new treehouse. "Whose house is this?" asked Kiko. "It needs a name!" Momo wrote M — a big capital — then o, m, o. "MOMO\'S HOUSE," read Kiko. Now everyone knew whose treehouse it was.'],
          a: [
            ch('Names start with a…', '*capital letter|small letter|number'),
            ct('How many letters in IVAAN?', 5),
            tf('In "Ivaan", the first letter is a capital.', true),
            od('Put the letters in order to spell the name Ravi', 'R|a|v|i'),
          ],
          t: ['Why do you think names get a capital letter?', 'Which letter in your name is the hardest to write? Why?'],
          k: ['Point to each letter of your name and say it, then tell a grown-up which letter is your favourite and why.'],
          m: ['Name Art Banner', 'long strip of paper, crayons, stickers or glue and pasta', 'A grown-up writes your name in big dotted letters | Trace each letter with a crayon | Decorate each letter with stickers or pasta | Hang the banner on your door'],
          q: [
            ct('How many letters in TARA?', 4),
            ch('Which name is written correctly?', '*Asha|asha|aSHA'),
            tf('We usually start writing letters at the top.', true),
          ],
          ms: ['Writes own first name legibly with a capital first letter', 'Starts most letters at the correct point', 'Recognises own name among others'],
        }),
      ]),
    ]),
    S('s5', 'Forming all letters correctly and writing labels, captions and simple sentences.', [
      'Form lower-case letters correctly', 'Write words using phonics', 'Write a simple sentence with a capital and full stop',
    ], [
      U('letter-families', 'Letter Families', 'Letters that are formed the same way are learned together.', 'Curly caterpillar letters: c a d e g o q s f; Long ladder letters: l i t u j y; One-armed robot letters: r n m h b k p; Zigzag letters: v w x z', [
        L('curly-caterpillar', 'Curly Caterpillar Letters', {
          o: ['Form c, a, d, o, g, q correctly starting at the "c" curve', 'Write letters with consistent size on a line'],
          p: ['Can draw anticlockwise circles'],
          e: [
            'Some letters start with the same move: a curly caterpillar "c" shape. Start at the top right, curl round to the left and come back. That makes c.',
            'For a, d, g, o and q, start with the same curl, then add something: a closes the circle and adds a short line; d adds a tall line; g adds a tail that hangs below the line.',
            'Letters sit on the line like people sit on a bench. Tall letters (d, l) reach up; tail letters (g, q, y) hang down below the line.',
          ],
          v: 'formation = the way you move your pencil to make a letter; anticlockwise = turning the opposite way to clock hands; baseline = the line letters sit on',
          x: ['c + short stick = a.', 'c + tall stick = d.'],
          s: ['Callie the Caterpillar', 'Callie the caterpillar loved curling up. When she curled, she made a c. When she curled and held a stick, she was an a. When she curled and climbed a tall tree, she was a d! "I\'m a whole letter family," she giggled.'],
          a: [
            ch('Which letter starts with a curly caterpillar curl?', 'l|*d|t'),
            mt('Match the letter to its extra part', 'd=tall line up|g=tail below the line|a=short line'),
            tf('The letter g hangs below the line.', true),
            ch('Where do we start the letter c?', '*top right|bottom left|middle'),
          ],
          t: ['Why do you think teachers group letters into families?', 'b and d are easy to mix up. How could you remember which is which?'],
          k: ['Teach a grown-up how to write the letter a, saying each move out loud.'],
          m: ['Letter Family Playdough', 'playdough, letter cards c a d g o q', 'Roll a dough snake | Curl it into a c | Add a short snake to make a, a tall snake to make d | Make all six curly letters and say their sounds'],
          q: [
            ch('Which letter has a tail below the line?', 'd|a|*g'),
            ch('c + tall line makes…', 'a|*d|g'),
            tf('All curly caterpillar letters start at the top right.', true),
          ],
          ms: ['Forms curly caterpillar letters with correct start and direction', 'Places letters correctly relative to the baseline', 'Writes letters at a consistent size'],
        }),
      ]),
      U('first-sentences', 'My First Sentences', 'A sentence is a complete idea with a capital and a full stop.', 'Sentence basics: capital letter, finger spaces, full stop; Saying before writing: rehearse aloud; Labels and captions: naming pictures', [
        L('say-it-write-it', 'Say It, Write It, Check It', {
          o: ['Write a simple sentence with a capital letter, spaces and a full stop', 'Say a sentence aloud before writing it'],
          p: ['Can write CVC words using sounds'],
          e: [
            'A sentence is a group of words that makes complete sense: "The cat sat on the mat." It starts with a capital letter and ends with a full stop.',
            'Good writers say their sentence out loud first, then count the words on their fingers. That way they don\'t forget words.',
            'Leave a finger space between words so readers can tell where each word ends. Then read it back to check: does it make sense?',
          ],
          v: 'sentence = words that make a complete idea; full stop = the dot at the end of a sentence; finger space = the gap between words; check = read again to find mistakes',
          x: ['"I can run." — 3 words, a capital I, a full stop.', '"A big dog ran to the park." — 7 words.'],
          s: ['The Words That Squashed Together', 'Kiko wrote: "igotabigred ball". Nobody could read it! Olu said, "Let\'s say it first: I got a big red ball. Six words. Now put a finger space between each word, a capital I, and a full stop." Kiko wrote: "I got a big red ball." Everyone could read it now.'],
          a: [
            ch('Which is a correct sentence?', 'the dog ran|*The dog ran.|The dog ran'),
            ct('How many words? "I can see a bird."', 5),
            tf('We leave a space between words.', true),
            od('Put the words in order to make a sentence', 'The|sun|is|hot.'),
          ],
          t: ['What would happen if books had no spaces between words?', 'Why do we say a sentence before writing it?'],
          k: ['Say a sentence about your favourite toy, count the words on your fingers, then write it.'],
          m: ['Picture Caption Book', 'paper folded into a little book, crayons, pencil', 'Draw a picture on each page about your day | Say a sentence about each picture | Count the words on your fingers | Write the sentence under the picture with a capital and full stop | Read your book to someone'],
          q: [
            ch('A sentence ends with a…', 'comma|*full stop|capital'),
            ct('How many words? "My cat is big."', 4),
            ch('Which sentence needs fixing?', 'I like red.|*i like red|We like blue.'),
          ],
          ms: ['Writes a sentence with capital letter, finger spaces and full stop', 'Rehearses sentences orally before writing', 'Re-reads to check sense'],
        }),
      ]),
    ]),
    S('s6', 'Writing short narratives and recounts in order, with joined ideas and neat handwriting.', [
      'Write a recount in time order using time words', 'Join ideas with and, but, because', 'Begin joined (cursive) handwriting strokes',
    ], [
      U('recounts', 'Telling What Happened', 'A recount tells real events in the order they happened.', 'Recount structure: opening, events, ending; Time words: first, next, then, after that, finally; Past tense: went, saw, played', [
        L('my-day-recount', 'My Day Recount', {
          o: ['Write a recount with an opening, events in order and an ending', 'Use time words to show order'],
          p: ['Writes simple sentences independently'],
          e: [
            'A recount tells about something that really happened. It answers: Who? Where? When? What happened? The opening sets the scene: "On Sunday, I went to the beach with my family."',
            'Events go in time order. Time words help the reader follow: first, next, then, after that, finally.',
            'Recounts are written in the past tense because the events already happened: went, saw, played, ate. End with a feeling or thought: "It was the best day ever because…"',
          ],
          v: 'recount = writing that retells real events in order; time words = words that show when things happened; past tense = verbs that show something already happened',
          x: ['First, we built a sandcastle. Next, a wave knocked it down.', 'Finally, we ate ice cream and walked home.'],
          s: ['Zuri\'s Jumbled Diary', 'Zuri wrote: "We ate lunch. Finally we woke up. Then we went to the zoo." Her friends were confused. Zuri rewrote it: "First, we woke up early. Then we went to the zoo. After that, we ate lunch. Finally, we went home tired and happy." Now it made sense.'],
          a: [
            od('Put the recount in order', 'First, I woke up.|Next, I brushed my teeth.|Then, I ate breakfast.|Finally, I went to school.'),
            ch('Which is in the past tense?', 'I go to the park.|*I went to the park.|I will go to the park.'),
            mt('Match the present to the past', 'run=ran|eat=ate|see=saw|play=played'),
            tf('A recount tells about something that really happened.', true),
          ],
          t: ['Why does the order matter in a recount?', 'How is a recount different from a made-up story?'],
          k: ['Tell someone about your weekend using at least four time words, then write it down.'],
          m: ['Weekend Recount Poster', 'paper, pencil, photos or drawings', 'Draw four pictures of things you did, in order | Write a sentence under each with a time word | Add an opening sentence (who, where, when) | Add an ending sentence about how you felt'],
          q: [
            ch('Which word shows the last event?', 'first|then|*finally'),
            ch('"Yesterday I ___ a kite."', 'fly|*flew|flying'),
            od('Order', 'We packed a picnic.|We drove to the lake.|We ate under a tree.'),
          ],
          ms: ['Writes recounts with clear opening, ordered events and ending', 'Uses time words and consistent past tense', 'Re-reads to check order and tense'],
        }),
      ]),
      U('joining-ideas', 'Joining Ideas', 'Conjunctions join ideas into longer, richer sentences.', 'Conjunctions: and, but, so, because, when; Expanded noun phrases: the big, fluffy dog; Joined handwriting: diagonal and horizontal joins', [
        L('because-and-but', 'And, But, Because', {
          o: ['Join two ideas using and, but, so or because', 'Explain the difference in meaning between the conjunctions'],
          p: ['Writes simple sentences with correct punctuation'],
          e: [
            'Conjunctions are joining words. "And" adds another idea: I like apples and I like mangoes. "But" shows a contrast: I like apples but I don\'t like pears.',
            '"Because" gives a reason: I took an umbrella because it was raining. "So" gives a result: It was raining, so I took an umbrella.',
            'Joining ideas makes writing flow and shows how ideas are connected — not just a list of short sentences.',
          ],
          v: 'conjunction = a word that joins words or ideas; contrast = showing a difference; reason = why something happens; result = what happens because of something',
          x: ['The dog was hungry, so it barked.', 'I wanted to play outside, but it was dark.'],
          s: ['The Choppy Robot', 'Bolt spoke in tiny sentences. "I went out. It rained. I got wet. I was sad." Rangi taught Bolt joining words. Bolt tried: "I went out, but it rained, so I got wet. I was sad because my circuits were dripping!" Everyone laughed — now Bolt sounded like a storyteller.'],
          a: [
            ch('"I wore a coat ___ it was cold."', 'but|*because|and'),
            ch('"I like football ___ I don\'t like cricket."', 'because|*but|so'),
            mt('Match the conjunction to its job', 'and=adds an idea|but=shows a contrast|because=gives a reason|so=gives a result'),
            tf('"So" tells us a result.', true),
          ],
          t: ['Do "because" and "so" mean the same thing? Try swapping them in a sentence.', 'Can too many "and"s make writing worse? Why?'],
          k: ['Make three sentences about your day: one with "but", one with "because" and one with "so". Say them aloud.'],
          m: ['Sentence Joining Game', 'cards with short sentences, cards with conjunctions', 'Write 10 short sentences on cards | Write and, but, so, because on four other cards | Pick two sentence cards and one conjunction card | Join them, and decide if the result makes sense | Write your three best joined sentences'],
          q: [
            ch('"I was tired, ___ I went to bed."', '*so|but|because'),
            ch('Which sentence uses "because" correctly?', '*I smiled because I won.|Because I smiled I.|I won because.'),
            tf('"But" is used to show a contrast.', true),
          ],
          ms: ['Uses and, but, so, because accurately in writing', 'Explains how conjunctions change meaning', 'Varies sentence length in a short piece'],
        }),
      ]),
    ]),
    S('s7', 'Planning and writing structured stories and information texts in paragraphs.', [
      'Plan writing before drafting', 'Organise writing into paragraphs', 'Revise and edit for clarity and accuracy',
    ], [
      U('story-writing', 'Crafting Stories', 'Stories have characters, a setting, a problem and a resolution.', 'Story mountain: opening, build-up, problem, resolution, ending; Characters: show, don\'t tell; Dialogue: speech marks and new lines', [
        L('story-mountain', 'Climbing the Story Mountain', {
          o: ['Plan a story using a story mountain', 'Write a story in paragraphs with a clear problem and resolution'],
          p: ['Writes sentences in order using conjunctions'],
          e: [
            'Many stories follow a "story mountain": an opening (meet the characters and setting), a build-up (something starts to happen), a problem (the top of the mountain), a resolution (how it is solved) and an ending.',
            'Planning first saves time. Jot notes or quick pictures for each part before writing sentences.',
            'Use a new paragraph for each part of the mountain, or when time, place or speaker changes. Paragraphs help readers follow the journey.',
          ],
          v: 'plot = the events of a story; setting = where and when a story happens; resolution = how the problem is solved; paragraph = a group of sentences about one idea or moment',
          x: ['Opening: Meera lived by the sea. Problem: a storm trapped a baby turtle. Resolution: Meera built a channel to the waves.', 'A new paragraph starts when the scene moves from the beach to Meera\'s house.'],
          s: ['The Story That Never Ended', 'Kiko wrote a story where a dragon found a cave, then a river, then a forest, then another cave… and nothing ever happened. "Where\'s the problem?" asked Nova. Kiko added: the dragon lost its fire. The search for its fire became the adventure — and finally the story had a top of the mountain.'],
          a: [
            od('Put the story mountain in order', 'Opening|Build-up|Problem|Resolution|Ending'),
            ch('Where do we meet the characters and setting?', '*opening|problem|resolution'),
            tf('We should start a new paragraph when the time or place changes.', true),
            ch('The resolution is when…', 'the story starts|*the problem is solved|we meet the hero'),
          ],
          t: ['Can a story have more than one problem? How would that change the mountain?', 'Why do you think almost every story has a problem?'],
          k: ['Tell a story out loud to someone using all five parts of the story mountain.'],
          m: ['Illustrated Story Book', 'paper, pencils, colours, stapler', 'Draw a story mountain and plan each part in notes | Write the story with a paragraph for each part | Read it aloud and fix anything confusing | Illustrate and bind it into a book', "An adult should operate the stapler and check that staples are fully closed. Keep the stapler and loose staples away from children."],
          q: [
            ch('The highest point of the story mountain is…', 'the opening|*the problem|the ending'),
            tf('Planning before writing can make a story better.', true),
            ch('A new paragraph is needed when…', 'every sentence|*the scene or speaker changes|never'),
          ],
          ms: ['Plans stories using a clear structure', 'Writes stories in paragraphs with a coherent problem and resolution', 'Uses some dialogue punctuated correctly'],
        }),
      ]),
      U('editing', 'Editing Like a Pro', 'Revising improves ideas; editing fixes accuracy.', 'Revising: add, remove, move, replace (ARMS); Editing: capitals, usage, punctuation, spelling (CUPS); Peer feedback: kind, specific, helpful', [
        L('arms-and-cups', 'ARMS and CUPS', {
          o: ['Revise writing by adding, removing, moving or replacing words', 'Edit for capitals, punctuation and spelling'],
          p: ['Can write a paragraph independently'],
          e: [
            'Writers rarely get it right first time. Revising improves the ideas: ARMS — Add details, Remove repetition, Move sentences to a better place, Substitute stronger words.',
            'Editing fixes the surface: CUPS — Capitals, Usage (does the grammar sound right?), Punctuation, Spelling.',
            'Reading your work aloud is the best trick. Your ears catch mistakes your eyes skip.',
          ],
          v: 'revise = change writing to make the ideas better; edit = correct mistakes in spelling, punctuation and grammar; draft = an early version of writing; feedback = comments to help improve work',
          x: ['Before: "The dog was nice." After revising: "The scruffy dog wagged its tail and licked my hand."', 'Editing: "i went to delhi" → "I went to Delhi."'],
          s: ['The Messy First Draft', 'Rangi showed Olu a first draft full of crossings-out. "It\'s ruined!" said Rangi. Olu smiled and opened a famous writer\'s notebook — it was covered in crossings-out too! "Messy drafts are where good writing comes from," said Olu.'],
          a: [
            mt('Match ARMS to its meaning', 'Add=put in more detail|Remove=take out what is not needed|Move=change the order|Substitute=swap for a better word'),
            ch('Which is editing (CUPS), not revising?', 'adding a new character|*fixing a capital letter|changing the ending'),
            ch('Best way to catch mistakes?', '*read it aloud|write faster|never re-read'),
            tf('Good writers often make many changes to their drafts.', true),
          ],
          t: ['Is it ever possible to finish revising? How do writers decide they are done?', 'Why is it easier to spot mistakes in someone else\'s writing?'],
          k: ['Give a family member kind, specific feedback on something they wrote: one thing you liked and one suggestion.'],
          m: ['Before-and-After Display', 'an old piece of your writing, coloured pens', 'Choose a piece you wrote earlier | Revise it using ARMS in one colour | Edit it using CUPS in another colour | Write a neat final copy | Display both versions and explain three improvements'],
          q: [
            ch('"S" in ARMS stands for…', 'spell|*substitute|stop'),
            ch('"P" in CUPS stands for…', '*punctuation|paragraph|planning'),
            tf('Revising and editing are exactly the same.', false),
          ],
          ms: ['Makes meaningful revisions to content', 'Edits for conventions with increasing independence', 'Gives and uses constructive feedback'],
        }),
      ]),
    ]),
    S('s9', 'Writing to inform, explain and persuade with clear structure, audience awareness and evidence.', [
      'Write persuasive texts with reasons and evidence', 'Write explanations with cohesive devices', 'Adapt tone and vocabulary for audience',
    ], [
      U('persuasive', 'Persuasive Writing', 'Convincing a reader with reasons, evidence and good structure.', 'Structure: claim, reasons, evidence, counter-argument, conclusion; Language: modal verbs, rhetorical questions; Audience: formal vs informal', [
        L('build-an-argument', 'Build an Argument', {
          o: ['Write a persuasive text with a clear claim, reasons and evidence', 'Address a counter-argument'],
          p: ['Writes organised paragraphs'],
          e: [
            'Persuasive writing tries to convince the reader. Start with a clear claim: "Our school should have a vegetable garden." Then give reasons, each in its own paragraph, supported by evidence such as facts, examples or expert views.',
            'Strong arguments answer the other side. A counter-argument paragraph says: "Some people think it costs too much. However…" This shows you have thought carefully.',
            'Persuasive language includes modal verbs (should, must, could), rhetorical questions ("Wouldn\'t you like fresh food?"), and a confident conclusion that restates the claim.',
          ],
          v: 'claim = the main point you are arguing; evidence = facts or examples that support a reason; counter-argument = the opposing view; modal verb = a word like should, must, could showing how certain or necessary something is',
          x: ['Reason: gardens teach science. Evidence: students can observe plant life cycles first-hand.', 'Counter-argument: "Some say it takes too much time. However, it could replace one lesson a week."'],
          s: ['The Great Playground Letter', 'Zuri\'s class wanted a new playground bench. Their first letter said, "We want a bench. Please." Nothing happened. Their second letter gave reasons (grandparents waiting at pick-up had nowhere to sit), evidence (a count of 14 people standing each day), and answered cost worries. The bench arrived a month later.'],
          a: [
            od('Order a persuasive essay', 'Claim|Reason 1 with evidence|Reason 2 with evidence|Counter-argument and reply|Conclusion'),
            ch('Which is evidence?', 'I think it\'s good.|*A survey found 80% of students want it.|Everyone knows it.'),
            ch('Which is a rhetorical question?', '*Don\'t we all deserve clean air?|What time is it?|How many legs has a spider?'),
            tf('Addressing the other side can make your argument stronger.', true),
          ],
          t: ['Is it fair to use only the evidence that supports your side? Why or why not?', 'How would you change your argument for a principal versus for classmates?'],
          k: ['Give a two-minute persuasive talk on a family decision (e.g. a weekend outing), including one counter-argument.'],
          m: ['Letter to a Decision-Maker', 'paper or computer, research materials', 'Choose a real local issue | Research two or three pieces of evidence | Plan claim, reasons, counter-argument and conclusion | Write a formal letter | Revise for tone and send it to the real person if appropriate'],
          q: [
            ch('"Children should sleep 9–11 hours." The modal verb is…', 'children|*should|sleep'),
            ch('The paragraph that answers the opposing view is the…', 'claim|*counter-argument|evidence'),
            tf('A persuasive conclusion should restate the claim.', true),
          ],
          ms: ['Writes arguments with a clear claim and supported reasons', 'Includes and rebuts a counter-argument', 'Adjusts tone appropriately for audience'],
        }),
      ]),
      U('explanation', 'Explanation Writing', 'Explaining how and why things happen clearly.', 'Structure: general statement, sequenced steps, summary; Cohesion: as a result, consequently, this means; Technical vocabulary and diagrams', [
        L('how-and-why', 'Explaining How and Why', {
          o: ['Write a clear explanation of a process using cause-and-effect language', 'Use diagrams and technical vocabulary to support writing'],
          p: ['Writes in paragraphs and uses conjunctions'],
          e: [
            'An explanation tells how or why something happens — like how rain forms or why we have seasons. It begins with a general statement introducing the topic.',
            'Then it explains the process in a logical sequence, using cause-and-effect connectives: because, therefore, as a result, consequently, this causes.',
            'Technical words should be used precisely and explained when needed. Diagrams with labels make complex processes much clearer.',
          ],
          v: 'process = a series of steps that lead to a result; cohesive device = words that link sentences and paragraphs; technical vocabulary = specialist words for a subject; consequently = as a result',
          x: ['"The Sun heats water in oceans. As a result, it evaporates and rises as water vapour."', '"When the vapour cools, it condenses into tiny droplets, which form clouds."'],
          s: ['Why Is the Sky Dark at Night?', 'Bolt was asked, "Why is it dark at night?" Bolt answered, "Because it is night." Nobody was satisfied. Bolt tried again: "The Earth spins. As a result, our side faces away from the Sun for part of each day, so less sunlight reaches us." Now it was an explanation.'],
          a: [
            ch('An explanation usually starts with…', '*a general statement about the topic|a joke|the conclusion'),
            ch('Which connective shows cause and effect?', 'meanwhile|*consequently|once upon a time'),
            od('Order the water cycle explanation', 'Water evaporates|Vapour cools and condenses|Clouds form|Rain falls'),
            tf('Diagrams can help explain a process.', true),
          ],
          t: ['What is the difference between explaining and describing?', 'How do you know if your explanation is clear enough for a younger reader?'],
          k: ['Explain how a bicycle\'s brakes stop it, using at least two cause-and-effect connectives.'],
          m: ['Explainer Poster', 'large paper, pens, reference books', 'Choose a process (digestion, volcanoes, rainbows) | Research the steps | Write a general statement, sequenced explanation and summary | Draw a labelled diagram | Test it by asking someone to explain it back to you'],
          q: [
            ch('"___ the ice melted, the water level rose."', '*Because|Although|Unless'),
            tf('Technical words should be used precisely.', true),
            ch('Which would best support an explanation of the heart?', 'a poem|*a labelled diagram|an advert'),
          ],
          ms: ['Writes logically sequenced explanations', 'Uses cause–effect cohesive devices accurately', 'Integrates diagrams and technical vocabulary'],
        }),
      ]),
    ]),
    S('s12', 'Advanced composition: essays, research writing, creative craft and style.', [
      'Write analytical and argumentative essays with thesis statements', 'Integrate and cite sources', 'Develop personal voice and style',
    ], [
      U('essay', 'The Analytical Essay', 'Thesis-driven writing that develops a line of argument.', 'Thesis: arguable, specific; Paragraph structure: topic sentence, evidence, analysis, link; Introductions and conclusions', [
        L('thesis-statements', 'Writing a Strong Thesis', {
          o: ['Write an arguable, specific thesis statement', 'Structure analytical paragraphs that develop the thesis'],
          p: ['Writes persuasive and explanatory texts in paragraphs'],
          e: [
            'A thesis is the central claim of an essay. A strong thesis is arguable (someone could disagree), specific (not vague), and gives a sense of the essay\'s direction.',
            'Weak: "Social media has good and bad effects." Strong: "Although social media connects teenagers to wider communities, its design rewards constant comparison, which harms self-esteem more than it helps belonging."',
            'Each body paragraph advances the thesis: a topic sentence (the paragraph\'s claim), evidence, analysis (why the evidence matters), and a link back to the thesis.',
          ],
          v: 'thesis = an essay\'s central arguable claim; topic sentence = a sentence stating a paragraph\'s main point; analysis = explaining how evidence supports a claim; line of argument = the logical path through an essay',
          x: ['Topic sentence: "The novel\'s setting mirrors the narrator\'s isolation."', 'Analysis: "By placing the house miles from any village, the author makes loneliness physical, not just emotional."'],
          s: ['The Essay That Said Nothing', 'A student\'s essay concluded: "In conclusion, there are many views on homework." Her teacher wrote: "What is YOUR view?" She rewrote her thesis: "Homework in primary school should be replaced by reading time, because evidence links reading volume to achievement more strongly than set tasks." Suddenly the essay had a spine.'],
          a: [
            ch('Which is the strongest thesis?', 'Climate change is a topic.|There are many opinions about climate.|*Cities should prioritise tree planting over new car parks because shade reduces heat-related illness.'),
            od('Order a body paragraph', 'Topic sentence|Evidence|Analysis|Link to thesis'),
            tf('A thesis should be something no one could disagree with.', false),
            ch('Analysis explains…', 'the plot|*why the evidence supports the claim|the author\'s birthday'),
          ],
          t: ['Can a thesis change as you write? Should it?', 'What makes analysis different from summary?'],
          k: ['Present your thesis to someone and ask them to argue against it; then refine it.'],
          m: ['Argumentative Essay', 'research notes, word processor or notebook', 'Choose a debatable question | Draft three possible theses and pick the strongest | Outline body paragraphs | Write an 800–1000 word essay | Revise after peer feedback'],
          q: [
            ch('A thesis should be…', 'vague and safe|*arguable and specific|a question'),
            ch('The sentence that states a paragraph\'s point is the…', '*topic sentence|evidence|citation'),
            tf('Every body paragraph should connect back to the thesis.', true),
          ],
          ms: ['Writes arguable, specific theses', 'Develops paragraphs with evidence and analysis', 'Sustains a coherent line of argument'],
        }),
      ]),
      U('research-writing', 'Research and Citation', 'Using sources honestly and effectively.', 'Source evaluation: currency, relevance, authority, accuracy, purpose; Quoting, paraphrasing, summarising; Citation and avoiding plagiarism', [
        L('using-sources', 'Using Sources Honestly', {
          o: ['Evaluate sources for reliability', 'Quote, paraphrase and cite sources correctly'],
          p: ['Writes structured essays'],
          e: [
            'Not all sources are equally reliable. Check: Currency (how recent?), Relevance (does it answer my question?), Authority (who wrote it and are they qualified?), Accuracy (is it supported by evidence?), Purpose (inform, sell, persuade?).',
            'You can use a source by quoting (exact words in quotation marks), paraphrasing (its idea in your own words and structure), or summarising (the main point briefly). All three need a citation.',
            'Plagiarism means presenting someone else\'s words or ideas as your own. Citing sources is honest, lets readers check your evidence, and shows the research behind your thinking.',
          ],
          v: 'citation = a reference showing where information came from; paraphrase = restate an idea in your own words; plagiarism = using others\' work without credit; primary source = original evidence from the time or person studied',
          x: ['Quote: According to the WHO, "physical activity reduces the risk of heart disease."', 'Paraphrase: Regular exercise lowers the chance of heart disease (World Health Organization).'],
          s: ['The Copied Paragraph', 'Arjun pasted a paragraph from a website into his report and changed three words. His teacher found the original in seconds. Arjun rewrote it: he read the source, closed the tab, explained the idea in his own words, and added the citation. His teacher said it was the best paragraph in the report — because it was really his.'],
          a: [
            mt('Match the method to its description', 'quote=exact words in quotation marks|paraphrase=same idea in your own words|summary=main point briefly'),
            ch('Which source is most reliable for a health fact?', 'an anonymous comment|*a national health agency report|an advert for vitamins'),
            tf('Paraphrased ideas still need a citation.', true),
            ch('Changing a few words of a copied paragraph is…', 'paraphrasing|*still plagiarism|summarising'),
          ],
          t: ['Is a very old source always unreliable? When might it be valuable?', 'Why do scientists and historians care so much about citations?'],
          k: ['Explain to someone the difference between paraphrasing and plagiarism with an example.'],
          m: ['Mini Research Report', 'at least four sources (books, reliable websites, interviews), notebook', 'Choose a research question | Evaluate each source using CRAAP (currency, relevance, authority, accuracy, purpose) | Take notes in your own words | Write a 1000-word report with citations and a bibliography'],
          q: [
            ch('"A" in the source checklist can stand for…', '*authority|adverb|annotate'),
            tf('Quotations must be in quotation marks and cited.', true),
            ch('An original diary from 1920 is a…', '*primary source|secondary source|fake source'),
          ],
          ms: ['Evaluates sources systematically', 'Integrates quotations and paraphrases with citations', 'Produces research writing free of plagiarism'],
        }),
      ]),
    ]),
  ],
});
