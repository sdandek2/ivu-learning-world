import { subject, S, U, L, ch, tf, od, mt, ct } from '../dsl.ts';

export default subject({
  id: 'vocabulary',
  description: 'Growing a rich word bank and understanding how words work together. Early stages build oral vocabulary through categories, opposites and describing words; later stages develop grammar (word classes, sentence structure, tense) and word knowledge (roots, connotation, register).',
  stages: [
    S('s4', 'Naming the world: word categories, describing words and opposites through talk and play.', [
      'Sort words into categories', 'Use describing words for size, colour and feeling', 'Know common opposites',
    ], [
      U('word-groups', 'Words That Belong Together', 'Grouping words helps us remember and understand them.', 'Categories: animals, food, clothes, vehicles; Odd one out: spotting what does not belong; Naming: specific names (sparrow, not just bird)', [
        L('odd-one-out', 'Odd One Out', {
          o: ['Sort familiar words into categories', 'Explain why one word does not belong in a group'],
          p: ['Can name common objects'],
          e: [
            'Words can live together in groups called categories. Dog, cat and cow are all animals. Banana, rice and roti are all food.',
            'When one word does not fit a group, it is the odd one out. In "apple, mango, car", car is the odd one out because it is not a fruit.',
            'Knowing categories helps your brain store new words. When you learn the word "parrot", you can put it in the bird group.',
          ],
          v: 'category = a group of things that are alike; odd one out = the one that does not belong; belong = fit in a group',
          x: ['Shirt, socks, cap — all clothes.', 'Bus, train, boat — all vehicles.'],
          s: ['Tara Sorts the Shelf', 'Tara the tortoise was tidying the shop shelves. She put the mangoes with the bananas, the shoes with the socks. Then she found a little toy car among the fruits. "You don\'t belong here!" Tara laughed, and carried it carefully to the toy shelf.'],
          a: [
            ch('Which is the odd one out? 🐶 🐱 🚗', '🐶 dog|🐱 cat|*🚗 car'),
            ch('Which is a fruit?', '*🍌 banana|👟 shoe|🚌 bus'),
            mt('Match the word to its group', '🐄 cow=animal|🍚 rice=food|🧦 sock=clothes'),
            tf('Train and boat are both vehicles.', true),
          ],
          t: ['Can a word belong to two groups? (Is a tomato a fruit or a vegetable?)', 'Why might it help to know which group a word belongs to?'],
          k: ['Name five animals, five foods and five things to wear, and tell a grown-up which was hardest.'],
          m: ['Category Sorting Mats', 'three plates or paper mats, toys and household objects', 'Label three mats: animals, food, clothes (with pictures) | Gather 12 objects or toy figures | Sort each one onto the right mat | Add one odd one out and ask a grown-up to find it'],
          q: [
            ch('Odd one out: 🍎 🍇 🪑', '🍎|🍇|*🪑'),
            ch('Which is an animal?', '*🐘|🏠|🎈'),
            tf('A sock is a kind of food.', false),
          ],
          ms: ['Sorts objects into at least four categories', 'Identifies and explains the odd one out', 'Names several members of common categories'],
        }),
      ]),
      U('describing', 'Describing Words and Opposites', 'Words that tell us more, and words that mean the opposite.', 'Describing words: big, small, soft, loud, happy; Opposites: hot–cold, up–down, fast–slow; Feelings words: happy, sad, cross, scared', [
        L('opposites', 'Big and Small, Hot and Cold', {
          o: ['Use describing words for size, temperature, speed and feeling', 'Name the opposite of common describing words'],
          p: ['Can name everyday objects'],
          e: [
            'Describing words tell us more about something. Not just "a dog" but "a big, fluffy dog". Describing words make our talking and writing more exciting.',
            'Many describing words have an opposite — a word that means the very different thing. Hot and cold. Fast and slow. Up and down. Full and empty.',
            'We can use opposites to compare: the elephant is big, but the mouse is small.',
          ],
          v: 'describe = tell what something is like; opposite = a word with the very different meaning; compare = look at how things are alike or different',
          x: ['Ice is cold; tea is hot.', 'A cheetah is fast; a snail is slow.'],
          s: ['Fast Kiko, Slow Tara', 'Kiko the goat raced up the hill — fast, fast, fast! Tara the tortoise walked — slow, slow, slow. At the top, Kiko was tired and hot. Tara arrived cool and calm. "Fast and slow are opposites," said Tara, "but we both got to the top!"'],
          a: [
            mt('Match the opposites', 'hot=cold|big=small|up=down|fast=slow'),
            ch('The opposite of happy is…', '*sad|big|loud'),
            ch('Which word describes 🐘?', '*big|tiny|fast'),
            tf('Full and empty are opposites.', true),
          ],
          t: ['Is a cat big or small? (It depends! Compared to what?)', 'Does every word have an opposite? What is the opposite of "banana"?'],
          k: ['Describe your favourite toy using three describing words.'],
          m: ['Opposites Hunt Photo Book', 'phone or drawing paper, crayons', 'Find pairs of opposites at home: full and empty cup, open and closed door | Draw or photograph each pair | Make a little book with one pair per page | Read it to someone, saying both words'],
          q: [
            ch('The opposite of up is…', 'left|*down|over'),
            ch('Ice is…', 'hot|*cold|loud'),
            mt('Match', 'open=closed|light=dark|wet=dry'),
          ],
          ms: ['Uses a range of describing words in talk', 'Gives opposites for at least 10 common words', 'Uses comparisons like big/small accurately'],
        }),
      ]),
    ]),
    S('s5', 'Nouns, verbs and adjectives; plurals; and growing vocabulary from stories.', [
      'Identify nouns (naming words) and verbs (doing words)', 'Form regular plurals with -s and -es', 'Learn and use new words from stories',
    ], [
      U('naming-doing', 'Naming Words and Doing Words', 'Nouns name things; verbs tell what happens.', 'Nouns: people, places, things, animals; Verbs: actions; Adjectives: describe nouns', [
        L('nouns-verbs', 'Nouns and Verbs', {
          o: ['Identify nouns and verbs in simple sentences', 'Build a sentence with a noun and a verb'],
          p: ['Uses describing words in speech'],
          e: [
            'Nouns are naming words. They name people (teacher), places (school), animals (tiger) and things (pencil). If you can put "a" or "the" in front of it, it is often a noun.',
            'Verbs are doing words. They tell us the action: run, jump, eat, sing, sleep. If you can do it, it\'s probably a verb.',
            'Most sentences need both: "The dog barks." Dog is the noun — who; barks is the verb — what it does.',
          ],
          v: 'noun = a naming word for a person, place, animal or thing; verb = a doing or action word; sentence = words that make a complete idea',
          x: ['"Birds fly." — birds (noun), fly (verb).', '"Ivaan kicks the ball." — Ivaan, ball (nouns); kicks (verb).'],
          s: ['The Word Party', 'At the word party, the nouns arrived: tiger, cake, Momo, garden. They stood still. Then the verbs arrived: dance, jump, eat! Suddenly everything happened. "The tiger dances! Momo eats cake!" The nouns needed the verbs to have any fun.'],
          a: [
            ch('Which word is a noun?', 'jump|*apple|run'),
            ch('Which word is a verb?', 'table|*swim|blue'),
            mt('Match each word to what kind of word it is', 'tiger=a naming word for an animal|sing=a doing word|Mumbai=a naming word for a place'),
            tf('"Jump" is a doing word.', true),
          ],
          t: ['Can one word be both a noun and a verb? (Think about "a fish" and "to fish".)', 'Why do sentences need verbs?'],
          k: ['Act out five verbs and ask someone to guess them, then name the noun doing each action.'],
          m: ['Noun–Verb Silly Sentences', 'two cups, slips of paper, pencil', 'Write 6 nouns on slips in one cup and 6 verbs in another | Pull one from each cup | Say the sentence: "The elephant sings!" | Draw your silliest sentence'],
          q: [
            ch('In "The cat sleeps", the verb is…', 'the|cat|*sleeps'),
            ch('Which is a noun?', '*garden|happily|jump'),
            tf('"Pencil" is a verb.', false),
          ],
          ms: ['Identifies nouns and verbs in simple sentences', 'Generates examples of each', 'Explains the difference between naming and doing words'],
        }),
      ]),
      U('plurals', 'One and Many', 'Plurals: how words change when there is more than one.', 'Regular plurals: add -s; Plurals with -es: box, bus, dish; Irregular plurals: child–children, mouse–mice', [
        L('one-and-many', 'One Cat, Two Cats', {
          o: ['Form plurals by adding -s or -es', 'Recognise some irregular plurals'],
          p: ['Can read simple CVC words'],
          e: [
            'A plural means more than one. Usually we just add -s: one cat, two cats; one book, three books.',
            'If a word ends in s, x, sh or ch, we add -es so we can say it easily: bus → buses, box → boxes, dish → dishes, lunch → lunches.',
            'A few words are rule-breakers: one child, two children; one mouse, two mice; one foot, two feet. We just have to learn these.',
          ],
          v: 'singular = one; plural = more than one; irregular = not following the usual rule',
          x: ['One fox, two foxes.', 'One tooth, many teeth.'],
          s: ['The Mice and the Mouses', 'Kiko counted the visitors: "One mouse, two mouses!" The mice giggled. "We are mice, not mouses!" they squeaked. "Some words have their own special plural." Kiko blushed and counted again: "One mouse, two mice, three mice!"'],
          a: [
            ch('One dog, two…', '*dogs|doges|dog'),
            ch('One box, three…', 'boxs|*boxes|box'),
            mt('Match singular to plural', 'child=children|mouse=mice|foot=feet'),
            ct('How many? 🦆🦆🦆🦆 — "four ___" — count the ducks', 4),
          ],
          t: ['Why do you think we add -es to "bus" instead of just -s?', 'Can you find a word that stays the same in the plural? (Think: sheep.)'],
          k: ['Count things around you and say each plural aloud, like "three spoons, two dishes".'],
          m: ['Plural Shop', 'toys or objects in groups, paper price tags', 'Set up a pretend shop with groups of objects | Make labels: "1 box", "3 boxes" | Take turns buying, saying the singular or plural correctly | Find one rule-breaker word to sell'],
          q: [
            ch('One bus, two…', 'buss|*buses|bus'),
            ch('One tooth, many…', 'tooths|*teeth|toothes'),
            tf('"Cats" is a plural.', true),
          ],
          ms: ['Forms regular -s/-es plurals correctly', 'Knows common irregular plurals', 'Uses plurals accurately in speech and writing'],
        }),
      ]),
    ]),
    S('s6', 'Adjectives and adverbs, synonyms, and the past and present tense.', [
      'Use adjectives and adverbs to add detail', 'Choose synonyms for overused words', 'Use past and present tense consistently',
    ], [
      U('synonyms', 'Wow Words and Synonyms', 'Finding just the right word.', 'Synonyms: big–huge–enormous; Shades of meaning: warm–hot–boiling; Overused words: said, nice, good', [
        L('shades-of-meaning', 'Shades of Meaning', {
          o: ['Find synonyms for common words', 'Order synonyms by strength (shades of meaning)'],
          p: ['Knows nouns, verbs and describing words'],
          e: [
            'Synonyms are words with similar meanings: big, large, huge, enormous. But they are not exactly the same — some are stronger than others.',
            'We can line synonyms up from weakest to strongest: warm → hot → boiling. Choosing the right "shade" makes your meaning precise.',
            'Writers swap tired words like "nice" or "said" for more exact ones: "The soup was delicious." "She whispered."',
          ],
          v: 'synonym = a word with a similar meaning; shade of meaning = how strong or gentle a word is compared with similar words; precise = exact',
          x: ['Said: whispered, shouted, asked, giggled.', 'Small: little, tiny, minuscule.'],
          s: ['Nice, Nice, Nice', 'Momo wrote: "We had a nice day. The weather was nice. The food was nice." Rangi said, "Nice is tired! Let\'s wake it up." Together they wrote: "We had a wonderful day. The weather was sunny and warm. The food was delicious." Momo grinned — it sounded like a real adventure now.'],
          a: [
            od('Order from weakest to strongest', 'warm|hot|boiling'),
            ch('A synonym for "happy" is…', 'sad|*cheerful|angry'),
            mt('Match the better word for "said"', 'said quietly=whispered|said loudly=shouted|said with a laugh=giggled'),
            od('Order from smallest to largest', 'tiny|small|big|enormous'),
          ],
          t: ['Are "slim" and "skinny" exactly the same? How might someone feel hearing each?', 'Why might a writer choose a simple word on purpose?'],
          k: ['Tell someone about your lunch using three exact describing words instead of "nice" or "good".'],
          m: ['Word Thermometer', 'paper strip, colour pencils', 'Draw a thermometer on a strip | Pick a word family (cold → freezing) | Write words from gentle at the bottom to strong at the top | Make two more thermometers for "happy" and "big"'],
          q: [
            ch('Which is strongest?', 'damp|wet|*soaking'),
            ch('A synonym for "fast" is…', '*quick|slow|heavy'),
            tf('Synonyms always mean exactly the same thing.', false),
          ],
          ms: ['Generates synonyms for common words', 'Orders words by intensity', 'Selects precise words in writing'],
        }),
      ]),
      U('tense', 'Past, Present and Future', 'Verbs change to show when things happen.', 'Present tense: I play, I am playing; Past tense: -ed and irregular (went, saw); Future: will, going to', [
        L('when-did-it-happen', 'When Did It Happen?', {
          o: ['Use present and past tense verbs correctly', 'Keep the same tense throughout a short piece'],
          p: ['Identifies verbs in sentences'],
          e: [
            'Verbs tell us WHEN something happens. Present tense: it is happening now — "I play." Past tense: it already happened — "I played." Future: it will happen — "I will play."',
            'Many past tense verbs add -ed: jump → jumped, walk → walked. Some are irregular: go → went, see → saw, eat → ate, run → ran.',
            'When we write a story or recount, we usually stay in one tense. Switching tense by accident confuses readers.',
          ],
          v: 'tense = the form of a verb that shows time; present = now; past = before now; future = after now',
          x: ['Today I walk to school. Yesterday I walked to school. Tomorrow I will walk to school.', 'go → went; swim → swam; catch → caught.'],
          s: ['The Time-Travelling Verb', 'Bolt built a time machine for verbs. "Play" stepped inside. Whoosh — it zoomed to yesterday and came out as "played"! Whoosh — to tomorrow: "will play"! Then "go" went in and came out as "went". "Some verbs change their whole costume," Bolt beeped.'],
          a: [
            ch('Yesterday I ___ to the park.', 'go|*went|will go'),
            mt('Match present to past', 'jump=jumped|see=saw|eat=ate|run=ran'),
            ch('Which sentence is in the future?', 'I swam.|I swim.|*I will swim.'),
            tf('"Walked" is in the past tense.', true),
          ],
          t: ['Why do you think some verbs are irregular?', 'When might a writer switch tense on purpose?'],
          k: ['Tell someone what you did yesterday, what you are doing now, and what you will do tomorrow.'],
          m: ['Timeline of My Day', 'long paper strip, pens', 'Draw a line with "yesterday", "today" and "tomorrow" | Write one sentence for each in the correct tense | Underline the verbs | Read it aloud and check the tenses'],
          q: [
            ch('Past tense of "catch" is…', 'catched|*caught|catching'),
            ch('Now: "She ___ a song."', '*sings|sang|will sang'),
            tf('"I will eat" is in the past tense.', false),
          ],
          ms: ['Uses regular and common irregular past forms', 'Maintains consistent tense in writing', 'Identifies past, present and future sentences'],
        }),
      ]),
    ]),
    S('s7', 'Grammar for meaning: sentence types, clauses, pronouns and punctuation.', [
      'Write statements, questions, commands and exclamations', 'Use pronouns to avoid repetition clearly', 'Use commas, apostrophes and speech marks',
    ], [
      U('sentence-types', 'Four Kinds of Sentences', 'Sentences do different jobs.', 'Statements: tell; Questions: ask; Commands: instruct; Exclamations: express strong feeling', [
        L('sentence-jobs', 'Sentence Jobs', {
          o: ['Identify and write statements, questions, commands and exclamations', 'Punctuate each sentence type correctly'],
          p: ['Writes sentences with capitals and full stops'],
          e: [
            'A statement tells you something: "Elephants are the largest land animals." It ends with a full stop.',
            'A question asks something and ends with a question mark: "Where do penguins live?" A command tells someone to do something, often starting with a bossy verb: "Close the door."',
            'An exclamation shows strong feeling or surprise and ends with an exclamation mark. In grammar, a "true" exclamation often starts with What or How: "What a huge wave that was!"',
          ],
          v: 'statement = a sentence that tells; question = a sentence that asks; command = a sentence that instructs; exclamation = a sentence that shows strong feeling',
          x: ['Command: "Mix the flour and water."', 'Exclamation: "How brave you were!"'],
          s: ['The Four Friends', 'Four sentence friends lived in a book. Statement said calm facts. Question kept wondering, "Why? How?" Command bossed everyone: "Line up!" And Exclamation shouted, "Wow, what a day!" Together, they made the book come alive.'],
          a: [
            mt('Match the sentence to its type', 'Shut the window.=command|Is it raining?=question|What a storm!=exclamation|It is cold.=statement'),
            ch('Which ends with a question mark?', 'Sit down|*Where is my bag|What a lovely day'),
            ch('"Stir the soup slowly." is a…', 'question|*command|statement'),
            tf('Commands often start with a verb.', true),
          ],
          t: ['Can a question be rude or polite depending on how it is asked?', 'Why do recipes use so many commands?'],
          k: ['Give a friend directions to an object in your house using only commands.'],
          m: ['Sentence-Type Recipe Card', 'card, pens', 'Choose a simple snack to make | Write the instructions as commands | Add a question at the top ("Are you hungry?") | Add a statement fact and an exclamation | Label each sentence type'],
          q: [
            ch('"How tall that tree is!" is a…', 'question|command|*exclamation'),
            ch('"The Moon orbits Earth." ends with…', '*.|?|!'),
            tf('"Please pass the salt." is a command.', true),
          ],
          ms: ['Writes and punctuates all four sentence types', 'Explains the purpose of each type', 'Uses sentence types purposefully in writing'],
        }),
      ]),
      U('punctuation', 'Commas, Apostrophes and Speech', 'Punctuation that makes meaning clear.', 'Commas: lists, after fronted adverbials; Apostrophes: contractions and possession; Speech marks: inverted commas, new speaker new line', [
        L('apostrophes', 'The Apostrophe\'s Two Jobs', {
          o: ['Use apostrophes for contractions', 'Use apostrophes to show possession'],
          p: ['Knows singular and plural nouns'],
          e: [
            'An apostrophe has two jobs. Job one: contraction — showing where letters are missing when two words squash together. do not → don\'t; it is → it\'s; I am → I\'m.',
            'Job two: possession — showing something belongs to someone. The dog\'s bone (one dog). With plural nouns ending in s, the apostrophe goes after the s: the dogs\' bones (many dogs).',
            'Watch out: "its" (belonging to it) has NO apostrophe: "The cat licked its paw." "It\'s" always means "it is" or "it has".',
          ],
          v: 'apostrophe = the mark \' used for contractions and possession; contraction = two words shortened into one; possession = showing ownership',
          x: ['can not → can\'t; we will → we\'ll.', 'Riya\'s book (belongs to Riya); the girls\' team (belongs to the girls).'],
          s: ['The Apostrophe Who Did Two Jobs', 'Little Apostrophe worked in two places. In the morning it stood where letters had left: "I\'m late!" In the afternoon it guarded belongings: "That\'s Kiko\'s hat!" "I\'m small," it said, "but without me, nobody knows who owns what!"'],
          a: [
            mt('Match the words to the contraction', 'do not=don\'t|I am=I\'m|we will=we\'ll|it is=it\'s'),
            ch('The bone belongs to one dog:', '*the dog\'s bone|the dogs bone|the dogs\' bone'),
            ch('Which is correct?', 'The bird flapped it\'s wings.|*The bird flapped its wings.'),
            tf('"The boys\' bikes" means bikes belonging to more than one boy.', true),
          ],
          t: ['Why might people often confuse "its" and "it\'s"?', 'How does the apostrophe change the meaning in "my sister\'s friends" and "my sisters\' friends"?'],
          k: ['Explain the two jobs of an apostrophe to someone using examples from your home.'],
          m: ['Apostrophe Hunt', 'newspaper, magazines or a book, highlighters', 'Find 10 apostrophes in real texts | Highlight contractions in one colour and possession in another | Write the full form of each contraction | Look for any mistakes on signs or menus in your area'],
          q: [
            ch('"She is" as a contraction:', '*she\'s|shes|she\'is'),
            ch('Toys belonging to many children:', 'the childrens toys|*the children\'s toys|the childrens\' toys'),
            tf('"It\'s" means "belonging to it".', false),
          ],
          ms: ['Uses contractions correctly', 'Places possessive apostrophes correctly for singular and plural nouns', 'Distinguishes its and it\'s'],
        }),
      ]),
    ]),
    S('s9', 'Word origins, figurative language, and complex sentences with clauses.', [
      'Use Latin and Greek roots to understand words', 'Interpret figurative language', 'Construct complex sentences with subordinate and relative clauses',
    ], [
      U('roots', 'Word Roots and Origins', 'English borrows from many languages, including Sanskrit.', 'Greek and Latin roots: bio, graph, tele, port, aqua; Borrowed words: from Hindi, Sanskrit, Persian, French; Etymology: tracing word histories', [
        L('roots-and-borrowing', 'Roots and Borrowed Words', {
          o: ['Use common Greek and Latin roots to infer meanings', 'Recognise English words borrowed from Indian languages'],
          p: ['Knows prefixes and suffixes'],
          e: [
            'Many English words are built from ancient Greek and Latin roots. "Tele" (far) + "phone" (sound) = telephone. "Bio" (life) + "logy" (study) = biology. "Port" (carry) appears in transport, export, portable.',
            'English has borrowed thousands of words from other languages. From Hindi and other Indian languages: shampoo, bungalow, jungle, pyjamas, verandah (also via Portuguese), thug. From Sanskrit, often through Hindi: avatar, karma, guru, mantra, yoga.',
            'Etymology is the study of where words come from. Dictionaries often list a word\'s origin, which can help you remember its meaning.',
          ],
          c: [['evidence', 'Words like "shampoo" (from Hindi chāmpo, "press/massage") and "bungalow" (from bangla, "of Bengal") entered English during the colonial period; their histories are recorded in historical dictionaries such as the Oxford English Dictionary.']],
          v: 'root = the core part of a word carrying meaning; etymology = the history of a word; loanword = a word borrowed from another language; derive = to come from',
          x: ['"Aqua" (water): aquarium, aquatic.', '"Graph" (write): autograph, paragraph, photograph.'],
          s: ['The Word Passport', 'Nova gave each word a passport. "Jungle" showed stamps from Sanskrit (jaṅgala, meaning dry, uncultivated land) to Hindi to English. "Telescope" had Greek stamps: tele (far) and skopein (to look). "Every word," said Nova, "has travelled to reach us."'],
          a: [
            mt('Match the root to its meaning', 'bio=life|tele=far|aqua=water|graph=write'),
            ch('"Portable" probably means…', '*able to be carried|very old|full of water'),
            ch('Which English word comes from Hindi?', '*shampoo|telephone|biology'),
            tf('English has borrowed words from many languages.', true),
          ],
          t: ['Why do languages borrow words from each other?', 'What does it tell us about history when one language borrows many words from another?'],
          k: ['Teach someone three roots and five words built from them.'],
          m: ['Etymology Detective Journal', 'a dictionary with etymologies (print or offline app), notebook', 'Choose 10 interesting words | Look up each word\'s origin | Draw a "word journey" map for three of them | Find two English words that came from an Indian language'],
          q: [
            ch('"Microscope" contains "micro", meaning…', 'large|*small|far'),
            ch('"Audio" relates to…', 'seeing|*hearing|writing'),
            tf('"Yoga" came into English from Sanskrit.', true),
          ],
          ms: ['Uses roots to infer meanings of unfamiliar words', 'Identifies loanwords and their source languages', 'Uses a dictionary to trace etymology'],
        }),
      ]),
      U('figurative', 'Figurative Language and Idioms', 'Language that means more than the literal words.', 'Similes and metaphors; Personification and hyperbole; Idioms and their origins', [
        L('not-literally', 'Not Literally!', {
          o: ['Distinguish literal from figurative meaning', 'Interpret and use similes, metaphors, personification, hyperbole and idioms'],
          p: ['Reads fluently and makes inferences'],
          e: [
            'Literal language means exactly what the words say. Figurative language uses words in imaginative ways to create a picture or feeling.',
            'A simile compares using "like" or "as" (as brave as a lion). A metaphor says something IS something else (the classroom was a zoo). Personification gives human qualities to non-human things (the wind howled). Hyperbole is deliberate exaggeration (I\'ve told you a million times).',
            'Idioms are phrases whose meaning cannot be worked out from the words: "it\'s raining cats and dogs", "a piece of cake". Every language has its own idioms.',
          ],
          v: 'literal = meaning exactly what the words say; figurative = using words imaginatively, not literally; idiom = a phrase whose meaning differs from its words; hyperbole = deliberate exaggeration',
          x: ['"Her smile was sunshine" — metaphor.', '"Break a leg!" — idiom meaning good luck.'],
          s: ['Bolt Takes Everything Literally', 'Rangi said, "It\'s raining cats and dogs!" Bolt rushed outside with a basket to catch them. Then Kiko said, "This homework is a piece of cake." Bolt looked for a fork. Nova laughed: "They\'re idioms, Bolt. They mean heavy rain and very easy!"'],
          a: [
            mt('Match the example to the device', 'as quick as a cheetah=simile|the moon was a lantern=metaphor|the leaves danced=personification|I\'m so hungry I could eat a horse=hyperbole'),
            ch('"Piece of cake" means…', 'a dessert|*something easy|something broken'),
            tf('"The sun smiled down on us" is personification.', true),
            ch('Which is literal?', 'Time flies.|*The plane flies to Chennai.|My heart sank.'),
          ],
          t: ['Why don\'t idioms translate well between languages? Can you think of an idiom in Marathi or Hindi?', 'Is figurative language ever confusing for readers? How should writers handle that?'],
          k: ['Describe a storm using one simile, one metaphor and one example of personification.'],
          m: ['Idiom Picture Book', 'paper, colours', 'Choose 6 idioms | Draw the silly literal meaning on one side | Write the real meaning on the other | Add one idiom from another language you know, with its translation'],
          q: [
            ch('"Her voice was music to my ears" is a…', 'simile|*metaphor|hyperbole'),
            ch('"I\'ve walked a thousand miles today!" is…', '*hyperbole|literal|personification'),
            tf('A simile uses "like" or "as".', true),
          ],
          ms: ['Identifies figurative devices accurately', 'Explains the intended meaning and effect', 'Uses figurative language purposefully in writing'],
        }),
      ]),
    ]),
    S('s12', 'Language in context: register, connotation, grammar for style, and how language changes.', [
      'Adapt register for audience and purpose', 'Analyse connotation and loaded language', 'Understand how languages change over time',
    ], [
      U('register', 'Register and Style', 'Choosing language to fit audience, purpose and context.', 'Formal vs informal register; Active vs passive voice; Nominalisation and academic style', [
        L('active-passive', 'Register, Active and Passive Voice', {
          o: ['Shift between formal and informal registers', 'Use active and passive voice deliberately'],
          p: ['Writes complex sentences accurately'],
          e: [
            'Register is the level of formality of language. Texting a friend ("gonna be late lol") uses informal register; an email to a principal ("I will be arriving late") uses formal register. Skilled writers move between registers deliberately.',
            'In active voice, the subject does the action: "The committee rejected the plan." In passive voice, the subject receives the action: "The plan was rejected (by the committee)."',
            'Passive voice is useful when the doer is unknown or unimportant, common in scientific writing ("The solution was heated"). It can also hide responsibility ("Mistakes were made") — a reason readers should notice it.',
          ],
          v: 'register = the formality level of language; active voice = the subject performs the action; passive voice = the subject receives the action; nominalisation = turning verbs into nouns (decide → decision)',
          x: ['Informal: "Loads of people turned up." Formal: "Attendance was high."', 'Active: "Scientists discovered the virus." Passive: "The virus was discovered."'],
          s: ['Mistakes Were Made', 'After the school fair lost money, two reports were written. One said: "The treasurer forgot to collect entry fees." The other said: "Entry fees were not collected." The students debated: both were true, but one named who was responsible and one did not. Grammar, they realised, can shape blame.'],
          a: [
            ch('Which is passive?', 'The dog chased the ball.|*The ball was chased by the dog.|The dog is chasing.'),
            ch('Most formal option:', 'Hey, what\'s up?|*Dear Sir or Madam,|Yo!'),
            tf('Passive voice can hide who is responsible.', true),
            mt('Match informal to formal', 'kids=children|a lot of=numerous|find out=ascertain'),
          ],
          t: ['Is formal language always better? When might informal be more effective?', 'Why do scientific reports often use the passive voice?'],
          k: ['Explain the same event (e.g. a broken window) to a friend, a teacher and a newspaper, changing your register each time.'],
          m: ['Register Remix', 'a short informal text (message or diary entry), paper', 'Choose an informal text | Rewrite it as a formal report | Rewrite it as a children\'s story | Annotate the changes in vocabulary, sentence structure and voice | Reflect on what each version gains and loses'],
          q: [
            ch('"The window was broken." The doer is…', 'the window|*not stated|broken'),
            ch('"Utilise" is more ___ than "use".', '*formal|informal|active'),
            tf('Active voice usually makes it clear who did the action.', true),
          ],
          ms: ['Adapts register appropriately across contexts', 'Uses active and passive voice for effect', 'Analyses how grammar choices position readers'],
        }),
      ]),
      U('language-change', 'Connotation and Language Change', 'Words carry associations, and languages keep evolving.', 'Connotation and denotation; Loaded language and euphemism; Language change: new words, shifting meanings', [
        L('connotation', 'Denotation, Connotation and Change', {
          o: ['Distinguish denotation from connotation', 'Explain how and why word meanings change over time'],
          p: ['Understands figurative language and register'],
          e: [
            'Denotation is a word\'s dictionary meaning. Connotation is the feelings and associations it carries. "Thrifty" and "stingy" both denote careful spending, but thrifty sounds positive and stingy sounds negative.',
            'Loaded language uses strong connotations to influence opinion; euphemisms soften harsh realities ("passed away" for "died"). Recognising these helps readers think critically about news and advertising.',
            'Languages change constantly. New words appear (selfie, podcast), meanings shift (in older English "nice" once meant "foolish"), and words are borrowed. Change is normal, not decay.',
          ],
          c: [['evidence', 'Historical dictionaries record that "nice" came from Latin nescius ("ignorant") and meant "foolish" in Middle English before gradually shifting to its modern positive meaning.']],
          v: 'denotation = a word\'s literal dictionary meaning; connotation = the associations a word carries; euphemism = a mild word used instead of a harsh one; semantic change = a shift in a word\'s meaning over time',
          x: ['"Home" vs "house": same denotation, warmer connotation for home.', '"Freedom fighter" vs "rebel" — loaded language shaping how a group is seen.'],
          s: ['The Word That Changed Its Mind', 'Professor Hoot read an old book aloud: "He was a nice fellow" — meaning foolish! The class gasped. "Words drift," said Hoot. "In a few hundred years, people may laugh at how we use words today."'],
          a: [
            ch('Which has the most positive connotation?', 'stubborn|*determined|pig-headed'),
            ch('"Let go" instead of "fired" is a…', '*euphemism|metaphor|loanword'),
            tf('Word meanings can change over time.', true),
            mt('Match neutral to loaded', 'crowd=mob|smell=stench|thin=scrawny'),
          ],
          t: ['Is it a problem that words change meaning? Who decides what a word means?', 'How might two newspapers describe the same protest with different connotations?'],
          k: ['Describe a classmate\'s confidence positively and negatively using only connotation changes, then discuss the effect.'],
          m: ['News Language Analysis', 'two news articles on the same event from different sources', 'Highlight emotionally loaded words in each | List the connotations of each word | Identify any euphemisms | Write a 400-word comparison of how language shapes the reader\'s view'],
          q: [
            ch('The dictionary meaning of a word is its…', '*denotation|connotation|etymology'),
            ch('"Slender" vs "skinny": which is more positive?', '*slender|skinny'),
            tf('Euphemisms make harsh things sound gentler.', true),
          ],
          ms: ['Analyses connotation and loaded language in real texts', 'Explains processes of language change with examples', 'Chooses words deliberately for connotation'],
        }),
      ]),
    ]),
  ],
});
