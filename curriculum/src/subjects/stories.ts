import { subject, S, U, L, ch, tf, od, mt } from '../dsl.ts';

export default subject({
  id: 'stories',
  description: 'Enjoying, understanding and responding to stories, poems and plays from India and around the world. Children move from listening and retelling to analysing character, genre, theme and the craft of authors.',
  stages: [
    S('s4', 'Loving stories: listening, joining in with repeated lines, and retelling with pictures.', [
      'Listen to a story and join in with repeated parts', 'Name characters and say what happened', 'Retell a familiar story in order',
    ], [
      U('story-time', 'Story Time', 'Stories have characters, places, and things that happen.', 'Characters: who is in the story; Setting: where it happens; Events: what happens first, next, last', [
        L('who-where-what', 'Who, Where, What?', {
          o: ['Name the characters and setting of a story', 'Say what happened at the beginning, middle and end'],
          p: ['Can listen to a short story'],
          e: [
            'Every story has characters — the people or animals in it. It has a setting — the place where it happens, like a forest or a kitchen.',
            'Things happen in a story, one after another. Something happens at the beginning, something exciting in the middle, and the story finishes at the end.',
            'When we remember who, where and what happened, we can tell the story again in our own words. That is called retelling.',
          ],
          v: 'character = a person or animal in a story; setting = where a story happens; beginning = the start; end = the finish',
          x: ['In "The Thirsty Crow", the character is a crow and the setting is a hot, dry place with a pot.', 'Beginning: the crow is thirsty. Middle: it drops pebbles in the pot. End: it drinks the water.'],
          s: ['The Thirsty Crow', 'On a hot day, a crow was very thirsty. It found a pot with a little water at the bottom, but its beak could not reach. The crow had an idea! It dropped pebbles into the pot, one by one. The water rose higher and higher, until the crow could drink. Clever crow!'],
          a: [
            ch('Who is the main character in The Thirsty Crow?', '*a crow 🐦‍⬛|a lion 🦁|a fish 🐟'),
            od('Put the story in order', 'The crow was thirsty|It found a pot|It dropped in pebbles|It drank the water'),
            ch('What did the crow put in the pot?', 'leaves 🍃|*pebbles 🪨|sticks 🪵'),
            tf('The crow gave up and flew away.', false),
          ],
          t: ['What else could the crow have done to get the water?', 'Why do you think the crow did not give up?'],
          k: ['Retell The Thirsty Crow to a grown-up using a cup, water and pebbles.'],
          m: ['🧪 Be the Clever Crow', 'a tall glass, a little water, small clean pebbles or marbles', 'Pour a little water into the glass | Mark where the water is | Drop pebbles in one at a time | Watch the water rise | Tell the story while you do it'],
          q: [
            ch('Where did the crow find water?', '*in a pot|in a river|in a cloud'),
            od('Order', 'Thirsty crow|Pebbles in pot|Water rises|Crow drinks'),
            tf('The water went up when the pebbles went in.', true),
          ],
          ms: ['Names characters and setting of a familiar story', 'Retells a short story with beginning, middle and end', 'Answers simple "why" questions about a story'],
        }),
      ]),
      U('rhymes-poems', 'Rhymes and Action Poems', 'Poems and rhymes are fun to say, sing and act out.', 'Nursery rhymes: rhythm and rhyme; Action poems: moving to words; Repeated lines: joining in', [
        L('action-rhymes', 'Clap, Stomp and Rhyme', {
          o: ['Join in with a rhyme using actions', 'Hear the rhyming words in a poem'],
          p: ['Can repeat short phrases'],
          e: [
            'Poems often have rhymes — words that sound the same at the end, like star and far, or bee and tree.',
            'Poems also have a beat, like a heart: da-DUM, da-DUM. We can clap or stomp to the beat.',
            'Many rhymes repeat lines again and again. Repeating helps us remember the poem and join in.',
          ],
          v: 'poem = words arranged with rhythm, often rhyming; rhyme = words that end with the same sound; beat = the steady rhythm we can clap to',
          x: ['"Twinkle, twinkle, little star, how I wonder what you are" — star and are rhyme.', '"Machli jal ki rani hai" is a Hindi rhyme many children in India know.'],
          s: ['The Rhyming Parade', 'In Word Woods, the animals had a rhyming parade. "I\'m a cat in a hat!" called the cat. "I\'m a frog on a log!" croaked the frog. "I\'m a bee in a tree!" buzzed the bee. Olu the owl clapped the beat, and everyone stomped along.'],
          a: [
            mt('Match the rhyming words', 'cat=hat|frog=log|bee=tree|star=car'),
            ch('Which word rhymes with "sun"?', '*fun|moon|sky'),
            tf('"Ball" and "tall" rhyme.', true),
            ch('Which word does NOT rhyme with "cake"?', 'lake|bake|*cup'),
          ],
          t: ['Why do you think little children love rhymes?', 'Can you make up a silly rhyme for your name?'],
          k: ['Say a favourite rhyme to a grown-up with actions, and point out two words that rhyme.'],
          m: ['Rhyme Time Shaker Show', 'an empty bottle, dry rice or beans, tape', 'Make a shaker by putting rice in a bottle and taping it shut | Choose a rhyme you know | Shake on each beat as you say it | Perform it for your family'],
          q: [
            ch('Which rhymes with "dog"?', 'cat|*log|pig'),
            tf('"Star" and "moon" rhyme.', false),
            mt('Rhyme pairs', 'bed=red|hen=ten|cap=map'),
          ],
          ms: ['Joins in with rhymes and repeated refrains', 'Identifies rhyming pairs', 'Keeps a steady beat while reciting'],
        }),
      ]),
    ]),
    S('s5', 'Fables, fairy tales and folk tales from around the world; predicting and making connections.', [
      'Predict what will happen next using clues', 'Connect stories to own experiences', 'Recognise a moral in a fable',
    ], [
      U('fables', 'Fables and Their Lessons', 'Short animal stories that teach a lesson.', 'Fables: Aesop and Panchatantra; Morals: what the story teaches; Characters: tricky, wise, foolish', [
        L('tortoise-hare', 'The Hare and the Tortoise', {
          o: ['Retell a fable and identify its moral', 'Explain how a character\'s actions led to the ending'],
          p: ['Can retell a simple story'],
          e: [
            'A fable is a short story, often with animals, that teaches a lesson. The lesson is called the moral.',
            'Many famous fables are credited to Aesop, a storyteller from ancient Greece. India has its own great collection of fables, the Panchatantra.',
            'In fables, what characters do leads to what happens to them. A boastful character often learns a lesson; a patient or clever character often succeeds.',
          ],
          v: 'fable = a short story that teaches a lesson; moral = the lesson of a story; boast = to show off about yourself',
          x: ['The Hare and the Tortoise: moral — slow and steady wins the race.', 'The Lion and the Mouse: moral — even small friends can be a big help.'],
          s: ['The Hare and the Tortoise', 'A speedy hare laughed at a slow tortoise. "Let\'s race!" said the tortoise. The hare raced ahead, then thought, "I have plenty of time," and lay down for a nap. The tortoise kept walking, step by step, never stopping. When the hare woke up, the tortoise was crossing the finish line!'],
          a: [
            ch('Why did the hare lose?', 'He was too slow|*He took a nap|He got lost'),
            ch('The moral is…', '*Slow and steady wins the race|Always run fast|Never race'),
            od('Put the fable in order', 'Hare laughs at tortoise|The race begins|Hare naps|Tortoise wins'),
            tf('The tortoise stopped to rest.', false),
          ],
          t: ['Was the hare a bad animal, or did he just make a mistake?', 'When in your life is "slow and steady" a good idea?'],
          k: ['Tell the fable from the tortoise\'s point of view to someone.'],
          m: ['Fable Finger Puppets', 'paper, crayons, tape, scissors (with a grown-up)', 'Draw a hare and a tortoise and cut them out | Tape them into rings for your fingers | Act out the race | Say the moral at the end'],
          q: [
            ch('A fable usually teaches a…', 'recipe|*lesson|song'),
            ch('Who won the race?', 'the hare|*the tortoise|nobody'),
            tf('The Panchatantra is a collection of fables from India.', true),
          ],
          ms: ['Retells a fable in sequence', 'States the moral in own words', 'Links character actions to consequences'],
        }),
      ]),
      U('folk-fairy', 'Folk Tales and Fairy Tales', 'Stories passed down through generations.', 'Folk tales: Akbar–Birbal, Tenali Raman; Fairy tales: magic and wishes; Predicting: using clues to guess what happens next', [
        L('predict-next', 'What Will Happen Next?', {
          o: ['Make predictions using clues from the story', 'Check and change predictions as the story continues'],
          p: ['Can retell familiar stories'],
          e: [
            'Good readers think ahead. They make a prediction: a smart guess about what will happen next, based on clues.',
            'Clues come from the title, pictures, what characters say, and what usually happens in stories like this one.',
            'As we keep reading, we check: was I right? If not, we change our prediction. Being wrong is fine — it means the author surprised us!',
          ],
          v: 'prediction = a smart guess about what will happen; clue = a hint; folk tale = a traditional story passed down by telling',
          x: ['Title: "The Clever Minister" — clue that someone will be clever.', 'A character says "I will trick him!" — clue that a trick is coming.'],
          s: ['Birbal and the Crow Count', 'Emperor Akbar asked, "Birbal, how many crows live in this city?" Everyone wondered how anyone could know. Birbal smiled and said, "Nine thousand and ninety-nine, Your Majesty. If there are more, some are visiting relatives. If fewer, some have gone to visit theirs!" Akbar laughed at the clever answer.'],
          a: [
            ch('Akbar asks a very hard question. What do you predict Birbal will do?', 'run away|*give a clever answer|cry'),
            ch('Which is a clue for a prediction?', '*what a character says|the page number|the colour of the cover only'),
            tf('Good readers change their prediction if new clues appear.', true),
            ch('Birbal\'s answer was…', 'a real count|*a clever joke-answer|a mistake'),
          ],
          t: ['Could anyone really count all the crows in a city? Why was Birbal\'s answer clever?', 'Is it more fun when a story surprises you?'],
          k: ['Stop a story halfway and predict the ending to a grown-up, giving one clue for your idea.'],
          m: ['Prediction Story Box', 'a shoebox, small toys or drawings', 'A grown-up puts three objects from a story in a box | Look at them and predict what the story is about | Listen to the story | Say what you got right and what surprised you'],
          q: [
            ch('A prediction is…', 'a fact|*a smart guess|the ending'),
            tf('Pictures can give clues about what will happen.', true),
            ch('Who was the clever minister in the story?', 'Akbar|*Birbal|a crow'),
          ],
          ms: ['Makes predictions supported by a clue', 'Revises predictions with new information', 'Retells a folk tale with key events'],
        }),
      ]),
    ]),
    S('s6', 'Characters and feelings, story settings, and comparing versions of stories.', [
      'Describe characters\' feelings and how they change', 'Describe settings using senses', 'Compare two versions of a story',
    ], [
      U('characters', 'Getting to Know Characters', 'Characters have feelings, wants and personalities.', 'Character traits: kind, brave, greedy; Feelings and change: how characters grow; Evidence: what they say and do', [
        L('character-traits', 'What Is This Character Like?', {
          o: ['Describe a character\'s traits using evidence', 'Explain how a character changes during a story'],
          p: ['Can retell stories in order'],
          e: [
            'A character trait is what a character is like inside: brave, greedy, kind, lazy, honest. Traits are shown through what characters say, do and think.',
            'Feelings change during a story, and sometimes traits change too. A greedy character may learn to share by the end.',
            'To describe a character, give evidence: "The king was greedy because he wanted everything he touched to turn to gold."',
          ],
          v: 'trait = what a character is like inside; evidence = proof from the story; change = when a character becomes different',
          x: ['King Midas is greedy (he asks for everything to turn to gold), then regretful (his food and daughter turn to gold).', 'The lion is proud, but becomes grateful when the mouse frees him.'],
          s: ['The Golden Touch', 'In an old Greek story, King Midas wished that everything he touched would turn to gold. At first he was delighted — gold chairs, gold roses! But then his bread turned to gold, and he could not eat. When he hugged his daughter, she turned to gold too. Midas wept and begged for the wish to be taken away. He learned that love matters more than gold.'],
          a: [
            ch('At the start, King Midas was…', '*greedy|lazy|shy'),
            ch('Which is evidence he changed?', 'He liked gold.|*He begged for the wish to be taken away.|He was a king.'),
            mt('Match the action to the trait', 'shares food=generous|tells the truth=honest|helps others despite fear=brave'),
            tf('Characters can change during a story.', true),
          ],
          t: ['Why do you think authors make characters change?', 'Would you want the golden touch? What would you wish for instead?'],
          k: ['Describe a character from a favourite book using two traits and evidence for each.'],
          m: ['Character Profile Card', 'card, pencils, a favourite book', 'Draw the character in the middle | Write three traits around them | Add evidence from the story for each | Draw an arrow showing how they changed'],
          q: [
            ch('A character trait is…', 'where the story happens|*what a character is like|the title'),
            ch('King Midas learned that…', 'gold is best|*love matters more than gold|wishes are easy'),
            tf('We find evidence for traits in what characters say and do.', true),
          ],
          ms: ['Identifies traits supported by evidence', 'Describes character change across a story', 'Uses varied trait vocabulary'],
        }),
      ]),
      U('versions', 'Same Story, Different Tellings', 'Stories change as they travel between places and people.', 'Comparing versions: Cinderella-type stories worldwide; Retelling: changing the point of view; Settings: how place changes a story', [
        L('compare-versions', 'Cinderella Around the World', {
          o: ['Compare two versions of a similar story', 'Explain how setting and culture shape a story'],
          p: ['Describes characters and settings'],
          e: [
            'Some stories are told in many countries, each with its own twist. Stories about a kind, mistreated person who is rewarded — like Cinderella — appear in many cultures.',
            'An early recorded version is the Chinese tale of Ye Xian, written down over a thousand years ago. Other versions come from Egypt, France, Germany and many other places.',
            'When we compare versions, we look for what is the same (the plot pattern) and what is different (the setting, the magic helper, the ending).',
          ],
          c: [['evidence', 'The story of Ye Xian was recorded by the Chinese writer Duan Chengshi in the 9th century CE. Folklorists group stories like this under a shared "tale type" because similar plots appear in many cultures.']],
          v: 'version = one way of telling a story; compare = find what is the same and different; culture = the way of life of a group of people',
          x: ['In the French version, a fairy godmother helps; in Ye Xian, a magical fish helps.', 'The lost shoe is a glass slipper in one version and a golden shoe in another.'],
          s: ['Ye Xian and the Magic Fish', 'Long ago in China, a kind girl named Ye Xian was treated unkindly by her stepmother. Her only friend was a beautiful fish. When the stepmother harmed the fish, its bones still granted Ye Xian\'s wishes. She went to a festival in a cloak of kingfisher feathers and golden shoes. She lost a shoe — and the king searched the land to find whose foot it fitted.'],
          a: [
            ch('Who helped Ye Xian?', 'a fairy godmother|*a magic fish|a cat'),
            mt('Match the story to its detail', 'Ye Xian=a magic fish helps|Cinderella (French)=a fairy godmother helps|both stories=a lost shoe'),
            tf('Similar stories can come from different countries.', true),
            ch('What is the SAME in both stories?', '*A lost shoe helps find the heroine|The helper is a fish|They are set in France'),
          ],
          t: ['Why do you think similar stories appear in places far apart?', 'If you set the story in your town today, what would the "lost shoe" be?'],
          k: ['Tell someone the similarities and differences between two versions of a story you know.'],
          m: ['Venn Diagram of Two Tales', 'paper, two coloured pencils', 'Draw two overlapping circles | Label one Ye Xian and one Cinderella | Write differences in the outer parts and similarities in the middle | Write your own version set in India'],
          q: [
            ch('Ye Xian\'s story was written down in…', '*China|Brazil|Antarctica'),
            ch('Comparing versions means finding…', 'only differences|*similarities and differences|the author\'s age'),
            tf('Every version of a story must be exactly the same.', false),
          ],
          ms: ['Identifies similarities and differences across versions', 'Explains how setting/culture influences details', 'Creates an adapted version maintaining core plot'],
        }),
      ]),
    ]),
    S('s7', 'Genres, poetry forms, myths and legends, and responding to longer books.', [
      'Identify features of genres (myth, legend, adventure, mystery)', 'Read and write simple poetry forms', 'Sustain reading of chapter books',
    ], [
      U('myths-legends', 'Myths and Legends', 'Ancient stories that explain the world or celebrate heroes.', 'Myths: explaining nature (Greek, Norse, Indian); Legends: heroes with some historical basis; Traditional narratives vs history', [
        L('myth-or-legend', 'Myths, Legends and History', {
          o: ['Distinguish myths, legends and historical accounts', 'Identify features of myths and legends'],
          p: ['Can compare versions of stories'],
          e: [
            'A myth is a traditional story, often involving gods or supernatural beings, that explains something about the world — like why the seasons change. Many cultures have myths: Greek, Norse, Egyptian, Indian and more.',
            'A legend is a traditional story about a hero or event that may have some basis in history, but has been exaggerated or changed over many retellings — like stories of King Arthur or Robin Hood.',
            'History is based on evidence: documents, objects and remains. We can enjoy myths and legends as stories and also ask what evidence exists. For many people, some traditional stories are also sacred, and we treat those with respect.',
          ],
          c: [['interpretation', 'Scholars use "myth" as a technical term for traditional sacred or explanatory narratives; it does not mean "false". Many communities hold their traditional stories as sacred or true, and respectful study recognises this.']],
          v: 'myth = a traditional story explaining the world, often involving gods; legend = a traditional story about a hero, possibly based on real events; evidence = information that shows what really happened',
          x: ['Greek myth: Persephone\'s time in the underworld explains winter.', 'Legend: Robin Hood, an outlaw hero whose real existence historians debate.'],
          s: ['Why Persephone Brings Spring', 'In a Greek myth, the goddess Demeter made crops grow. When her daughter Persephone was taken to the underworld, Demeter grieved and nothing grew. A deal was made: Persephone would spend part of each year below and part above. When she returned, Demeter rejoiced and spring arrived. Ancient Greeks told this story to explain the seasons.'],
          a: [
            mt('Match the story type to its description', 'myth=explains nature with gods|legend=a hero with possible real roots|history=based on evidence'),
            ch('What does the Persephone myth explain?', '*the seasons|the tides|volcanoes'),
            tf('Scientists explain seasons by the tilt of the Earth as it orbits the Sun.', true),
            ch('A legend is…', 'always completely true|*a story about a hero that may have some historical basis|a science report'),
          ],
          t: ['Why did ancient people create myths to explain nature?', 'Can a story be meaningful even if it is not historical fact?'],
          k: ['Retell a myth from any culture and explain what it was trying to explain.'],
          m: ['Write Your Own Myth', 'paper, pencils', 'Choose something in nature (why the moon changes shape, why peacocks dance in rain) | Invent characters and a problem | Write a myth that explains it | Add a short note about the real scientific explanation'],
          q: [
            ch('A story that explains thunder through a god\'s anger is a…', '*myth|science report|recount'),
            tf('"Myth" in literature study always means a lie.', false),
            ch('History relies on…', 'imagination only|*evidence|rhymes'),
          ],
          ms: ['Distinguishes myth, legend and history with examples', 'Identifies typical features of myths and legends', 'Discusses traditional stories respectfully, separating evidence from narrative'],
        }),
      ]),
      U('poetry-forms', 'Poetry Forms', 'Poems come in many shapes and patterns.', 'Haiku: 5-7-5 syllables; Acrostic and shape poems; Free verse and imagery', [
        L('haiku', 'Tiny Poems: Haiku', {
          o: ['Identify the features of a haiku', 'Write a haiku using sensory imagery'],
          p: ['Can count syllables'],
          e: [
            'A haiku is a short poem form from Japan. In English, haiku are often written in three lines with 5, 7 and 5 syllables.',
            'Traditional haiku capture one moment in nature, often with a hint of the season. They use vivid images rather than telling feelings directly.',
            'Matsuo Bashō, a famous Japanese poet of the 1600s, wrote one of the best-known haiku, about an old pond and a frog jumping in.',
          ],
          c: [['evidence', 'Matsuo Bashō (1644–1694) is widely regarded as a master of the form; the 5-7-5 pattern in English approximates Japanese sound units (on), which are not exactly the same as English syllables.']],
          v: 'haiku = a three-line poem, often 5-7-5 syllables, about a moment in nature; syllable = a beat in a word; imagery = words that create pictures in the mind',
          x: ['"Monsoon clouds roll in (5) / peacocks spread their shining tails (7) / the dry earth drinks deep (5)."', 'Acrostic: the first letters of each line spell a word.'],
          s: ['The Frog and the Pond', 'A poet sat by an old, quiet pond. Everything was still. Suddenly — plop! — a frog jumped in, and the sound rippled out. The poet wrote just a few words about it. More than three hundred years later, people around the world still read that tiny poem and feel the quiet moment.'],
          a: [
            od('Put the parts of writing a haiku in order', 'Observe a moment in nature|Note sights and sounds|Shape three lines of 5, 7, 5 syllables|Read it aloud and refine'),
            ch('Haiku traditionally come from…', '*Japan|Brazil|Egypt'),
            tf('Haiku often describe a moment in nature.', true),
            ch('Which line has 5 syllables?', '*cool rain on the leaves|the elephant walks slowly home|dancing'),
          ],
          t: ['Why might a very short poem be powerful?', 'Is it more important to follow 5-7-5 exactly, or to capture a strong image?'],
          k: ['Read your haiku aloud slowly, then explain the moment it captures.'],
          m: ['Haiku Nature Walk', 'notebook, pencil, a garden or window', 'Spend five quiet minutes observing nature | Note sights, sounds and smells | Write three haiku about what you noticed | Illustrate your favourite one'],
          q: [
            ch('How many lines in a haiku?', '2|*3|5'),
            ch('Middle line usually has ___ syllables.', '5|*7|9'),
            tf('Imagery helps readers picture the moment.', true),
          ],
          ms: ['Identifies haiku features', 'Writes haiku with clear imagery', 'Reads poems aloud with attention to rhythm'],
        }),
      ]),
    ]),
    S('s9', 'Novels, perspective and narrative voice, and literature from many cultures.', [
      'Analyse point of view and narrative voice', 'Explore themes across texts', 'Read literature from a range of cultures and periods',
    ], [
      U('point-of-view', 'Point of View', 'Who tells the story changes the story.', 'First person: I; Third person limited and omniscient; Unreliable narrators', [
        L('who-tells', 'Who Is Telling the Story?', {
          o: ['Identify first-person and third-person narration', 'Explain how point of view affects what readers know and feel'],
          p: ['Analyses characters with evidence'],
          e: [
            'A first-person narrator is a character in the story using "I": "I opened the door and froze." We see only what they see and know only what they think.',
            'A third-person narrator uses "he", "she", "they". A third-person limited narrator follows one character closely; an omniscient (all-knowing) narrator can tell us what everyone thinks.',
            'Point of view shapes our sympathy and suspense. A narrator might even be unreliable — mistaken, biased, or hiding things — so readers must think critically about what they are told.',
          ],
          v: 'narrator = the voice telling the story; first person = narration using I; omniscient = knowing everything; unreliable narrator = a narrator whose account cannot be fully trusted',
          x: ['"I knew I shouldn\'t open the box." — first person.', '"Meanwhile, far away, the king was plotting." — omniscient third person.'],
          s: ['The Wolf\'s Side of the Story', 'Everyone knows the tale of the three little pigs. But what if the wolf told it? "I only went to borrow a cup of sugar," he says, "and I had a terrible cold. Achoo!" Readers laugh — because a narrator telling his own story might not be telling the whole truth.'],
          a: [
            mt('Match the sentence to its point of view', 'I ran home.=first person|She ran home.=third person|Everyone secretly wondered what Ravi knew.=omniscient'),
            ch('An unreliable narrator…', 'always tells the truth|*might be mistaken or biased|is never a character'),
            tf('A first-person narrator can know exactly what everyone else thinks.', false),
            ch('Which pronoun shows first person?', '*I|they|she'),
          ],
          t: ['How would a story you know change if a different character narrated it?', 'Why might an author choose an unreliable narrator?'],
          k: ['Retell a well-known story from the villain\'s point of view to someone, then discuss how it changed.'],
          m: ['Point-of-View Rewrite', 'a short story or fable, notebook', 'Choose a familiar story | Rewrite one key scene in first person from a minor character | Rewrite it again with an omniscient narrator | Compare what readers learn in each version'],
          q: [
            ch('"He wondered if anyone noticed." Point of view?', 'first person|*third person|second person'),
            ch('A narrator who knows all characters\' thoughts is…', '*omniscient|limited|unreliable'),
            tf('Point of view affects how readers feel about characters.', true),
          ],
          ms: ['Identifies narrative perspective accurately', 'Analyses how perspective shapes meaning', 'Writes from varied perspectives'],
        }),
      ]),
      U('world-literature', 'Literature from Many Cultures', 'Great writing from India and around the world.', 'Indian literature: Tagore, R.K. Narayan, Ruskin Bond; World classics; Translation: what is gained and lost', [
        L('tagore-narayan', 'Stories from Indian Writers', {
          o: ['Read and respond to works by notable Indian writers', 'Discuss how setting and culture appear in literature'],
          p: ['Discusses themes and point of view'],
          e: [
            'India has a rich literary tradition in many languages. Rabindranath Tagore wrote poems, songs and stories in Bengali and became the first non-European to win the Nobel Prize in Literature, in 1913.',
            'R. K. Narayan wrote in English about the fictional town of Malgudi, capturing everyday South Indian life with gentle humour; "Swami and Friends" follows a schoolboy\'s adventures.',
            'Reading literature from many places lets us see the world through different eyes. Translations bring stories across languages, though some meanings, wordplay and sounds are hard to carry over.',
          ],
          c: [['evidence', 'Tagore received the Nobel Prize in Literature in 1913, largely for "Gitanjali". R. K. Narayan\'s first novel, "Swami and Friends", was published in 1935.']],
          v: 'literature = written works valued for their artistry and ideas; translation = rendering text from one language into another; setting = time and place of a story; anthology = a collection of works',
          x: ['Tagore\'s "Kabuliwala" tells of a bond between a little girl and an Afghan fruit-seller in Kolkata.', 'Malgudi is a fictional town, but readers feel they could visit it.'],
          s: ['The Kabuliwala', 'In Tagore\'s story, little Mini chatters happily with Rahamat, a tall fruit-seller from Kabul who reminds him of his own daughter far away. Years pass, and when he returns, Mini is a grown bride who no longer remembers him. Her father, seeing Rahamat\'s sadness, understands that fathers everywhere share the same love.'],
          a: [
            ch('Tagore won the Nobel Prize in Literature in…', '1813|*1913|2013'),
            ch('Malgudi is…', 'a real city|*a fictional town created by R. K. Narayan|a river'),
            tf('Translations can lose some wordplay and sound of the original.', true),
            ch('The Kabuliwala reminds Mini\'s father that…', '*love for children is shared across cultures|fruit is expensive|travel is dangerous'),
          ],
          t: ['What can stories from another place teach us that a textbook cannot?', 'Should we read literature in its original language if we can? Why?'],
          k: ['Give a short talk recommending a book by an Indian author, explaining its setting and why someone should read it.'],
          m: ['Literary Map', 'a map of India (printed or drawn), sticky notes', 'Choose five Indian writers in different languages | Find where each was from or set their work | Mark them on the map with a book title | Read one short story and write a review'],
          q: [
            ch('R. K. Narayan wrote mainly in…', '*English|Bengali|Tamil'),
            tf('Tagore wrote in Bengali.', true),
            ch('A collection of stories by different authors is an…', 'atlas|*anthology|almanac'),
          ],
          ms: ['Responds thoughtfully to works from Indian and world literature', 'Explains cultural context in literary works', 'Considers issues of translation'],
        }),
      ]),
    ]),
    S('s12', 'Literary criticism, tragedy and drama, and comparative literary study.', [
      'Apply critical lenses to literature', 'Analyse drama including tragedy', 'Write comparative literary essays',
    ], [
      U('drama-tragedy', 'Drama and Tragedy', 'How plays work, from Sanskrit drama to Shakespeare.', 'Elements of drama: dialogue, stage directions, soliloquy; Tragedy: flaw, downfall, catharsis; Sanskrit drama: Kalidasa', [
        L('tragic-hero', 'The Tragic Hero', {
          o: ['Analyse the features of tragedy', 'Compare dramatic traditions'],
          p: ['Analyses character, theme and point of view'],
          e: [
            'In classical tragedy, as described by Aristotle, a noble hero falls from good fortune to disaster, often through a flaw or error of judgement (hamartia). The audience feels pity and fear, followed by a release of emotion called catharsis.',
            'Shakespeare\'s tragedies — Hamlet, Macbeth, King Lear — follow and adapt this pattern. Macbeth\'s ambition, stirred by prophecy, leads him to murder and ruin.',
            'India has its own classical drama. Kalidasa\'s Sanskrit play "Abhijnanashakuntalam" (The Recognition of Shakuntala) is celebrated worldwide. Classical Sanskrit drama theory (in the Natyashastra) emphasises rasa — the emotional flavour experienced by the audience — and the classical tradition generally avoided tragic endings.',
          ],
          c: [['evidence', 'The Natyashastra is traditionally attributed to Bharata Muni; scholars date its compilation broadly between about 200 BCE and 200 CE. Kalidasa is usually dated to around the 4th–5th century CE.'], ['interpretation', 'Critics debate whether "tragic flaw" is the best translation of Aristotle\'s hamartia; many prefer "error" or "mistake".']],
          v: 'tragedy = a drama ending in the downfall of the main character; hamartia = the hero\'s error or flaw; catharsis = emotional release felt by the audience; rasa = in Indian aesthetics, the emotional essence evoked in the audience',
          x: ['Macbeth: ambition → murder → guilt → downfall.', 'Shakuntala: separation through a curse, then recognition and reunion.'],
          s: ['Two Theatres, Two Feelings', 'A student watched Macbeth and left shaken but strangely relieved. Months later she watched a performance of Shakuntala and left uplifted, filled with longing and joy. She wondered: why did one tradition want audiences to feel catharsis through ruin, and another to savour rasa through harmony?'],
          a: [
            mt('Match the term to its meaning', 'hamartia=the hero\'s error or flaw|catharsis=emotional release|rasa=emotional essence savoured by the audience'),
            ch('Macbeth\'s downfall is driven mainly by…', '*ambition|laziness|kindness'),
            tf('Kalidasa wrote in Sanskrit.', true),
            ch('Classical Sanskrit drama generally…', 'ended in tragedy|*avoided tragic endings|had no music'),
          ],
          t: ['Why might audiences enjoy watching tragedy?', 'What do the differences between Greek and Sanskrit drama suggest about their cultures\' values?'],
          k: ['Perform a short soliloquy and explain what it reveals about the character\'s inner conflict.'],
          m: ['Comparative Drama Essay', 'Macbeth and an English translation of Shakuntala (or detailed summaries), notebook', 'Read key scenes from both plays | Note how each handles conflict, emotion and ending | Research Aristotle\'s and the Natyashastra\'s ideas | Write a 1000-word comparison'],
          q: [
            ch('Aristotle\'s word for emotional release is…', 'rasa|*catharsis|hamartia'),
            ch('The Natyashastra is a work about…', 'medicine|*performing arts and drama|astronomy'),
            tf('A tragic hero usually begins in a position of high status.', true),
          ],
          ms: ['Analyses tragic structure in a play', 'Compares dramatic traditions with accurate context', 'Writes informed comparative analysis'],
        }),
      ]),
      U('critical-lenses', 'Critical Lenses', 'Different ways of reading the same text.', 'Lenses: historical, feminist, postcolonial, reader-response; Context of writing vs context of reading; Constructing interpretations', [
        L('lenses', 'Reading Through Different Lenses', {
          o: ['Apply at least two critical lenses to a text', 'Evaluate competing interpretations'],
          p: ['Writes analytical essays with a thesis'],
          e: [
            'Literary critics read texts through different "lenses" — sets of questions that highlight different aspects. A historical lens asks how the time of writing shaped the text.',
            'A feminist lens asks how gender roles are portrayed and challenged. A postcolonial lens examines how colonialism and power between cultures shape stories. A reader-response lens focuses on how readers create meaning.',
            'No single lens is "correct". Each reveals something and misses something. Strong critics test interpretations against textual evidence and remain open to others.',
          ],
          c: [['interpretation', 'Critical lenses are interpretive frameworks; different scholars may reach different, well-argued conclusions about the same text.']],
          v: 'critical lens = a perspective used to interpret a text; postcolonial = relating to the effects of colonisation on cultures and literature; interpretation = an explanation of meaning; context = circumstances surrounding a text',
          x: ['Feminist lens on a fairy tale: why does the princess wait to be rescued?', 'Postcolonial lens on "Kim" by Kipling: how is India represented by a British author?'],
          s: ['The Book Club Argument', 'Four friends discussed the same novel. One talked about the era it was written in; another about how women were shown; another about how colonial power appeared; the last about how the ending made her feel. At first they argued — then realised each had noticed something the others missed.'],
          a: [
            mt('Match the lens to its question', 'historical=How did the time of writing shape this?|feminist=How are gender roles portrayed?|postcolonial=How are colonised peoples represented?|reader-response=What does this mean to me as a reader?'),
            tf('There is only one correct interpretation of a great book.', false),
            ch('A strong interpretation is supported by…', 'personal guesses|*textual evidence|the book cover'),
            ch('A postcolonial lens would especially examine…', 'rhyme scheme|*representation of colonised cultures|page numbers'),
          ],
          t: ['Can applying a modern lens to an old text be unfair to it? Or necessary?', 'Which lens do you find most useful, and why?'],
          k: ['Lead a short discussion of a fairy tale, asking questions from two different lenses.'],
          m: ['Multi-Lens Analysis', 'a novel or short story studied in depth, notebook', 'Choose a text | Write one paragraph each from three lenses | Identify evidence each lens highlights | Write a conclusion evaluating which lens is most illuminating for this text'],
          q: [
            ch('A lens focusing on the reader\'s experience is…', 'historical|*reader-response|feminist'),
            tf('Different lenses can reveal different meanings.', true),
            ch('"Context" means…', '*circumstances surrounding a text|the first chapter|the author\'s name'),
          ],
          ms: ['Applies multiple critical lenses with evidence', 'Evaluates the strengths and limits of interpretations', 'Writes nuanced literary criticism'],
        }),
      ]),
    ]),
  ],
});
