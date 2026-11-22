import { subject, S, U, L, ch, tf, mt, ct } from '../dsl.ts';

export default subject({
  id: 'languages',
  description: 'Languages and scripts, taught in English as a bridge to Marathi, Sanskrit and the wider world: greetings in many languages, Marathi family, number, colour and animal words, Sanskrit numbers and words, writing systems of the world, the Devanagari script, language families, India\'s languages, Panini\'s Sanskrit grammar, words that travel between languages, linguistics, and language, identity and endangered languages. Marathi and Sanskrit words are shown with English pronunciation guides.',
  stages: [
    S('s4', 'Many ways to say hello, and Marathi family words.', [
      'Say hello in several languages', 'Learn Marathi words for family members', 'Enjoy the sounds of different languages',
    ], [
      U('hello', 'Hello, Namaskar, Hola!', 'Greetings around the world.', 'Hello in Indian languages; Hello around the world; Polite words', [
        L('hello-world', 'Many Ways to Say Hello', {
          o: ['Say hello in at least four languages', 'Know that people around the world speak many languages'],
          p: ['Can say hello in English'],
          e: [
            'People around the world speak thousands of different languages — more than 7,000! Each language has its own way of saying hello.',
            'In Marathi, we say "Namaskar" (nuh-muss-kaar). In Hindi and Sanskrit, "Namaste" (nuh-muss-tay). In Spanish, "Hola" (oh-la). In French, "Bonjour" (bon-zhoor). In Mandarin Chinese, "Nǐ hǎo" (nee how). In Japanese, "Konnichiwa".',
            'Polite words matter in every language. In Marathi, thank you can be "Dhanyavaad" (dhun-ya-vaad), the same word used in Hindi.',
          ],
          v: 'language = the words people use to talk; greeting = a way of saying hello; Namaskar = hello in Marathi; polite = kind and respectful in how you speak',
          x: ['Saying "Namaskar" to Aaji with folded hands.', 'Saying "Hola" to a Spanish-speaking friend.'],
          s: ['The Hello Train', 'Ivaan pretended to drive a train around the world. At the first stop, a teddy waved: "Namaskar!" At the next: "Bonjour!" Then: "Hola!" Then: "Konnichiwa!" At the last stop, Aaji was waiting with a smile. "Namaskar, Ivaan!" she said, folding her hands. Ivaan folded his hands too. "Namaskar, Aaji! I said hello all around the world!"'],
          a: [
            mt('Match hello to the language', 'Namaskar=Marathi|Hola=Spanish|Bonjour=French|Konnichiwa=Japanese'),
            ch('About how many languages are spoken in the world?', '*more than 7,000|ten|one'),
            tf('Namaste is a greeting in Hindi and Sanskrit.', true),
            ch('"Dhanyavaad" means…', '*thank you|goodbye|banana'),
          ],
          t: ['Why do you think people speak different languages?', 'Which hello do you like the sound of best?'],
          k: ['Greet three family members in three different languages.'],
          m: ['Hello Around the World Map', 'paper, crayons, a simple world map', 'Draw or colour a map | Write or draw hello in different languages on countries | Practise saying each one | Greet your family with a new hello each day'],
          q: [
            ch('Hello in Marathi is…', '*Namaskar|Hola|Bonjour'),
            tf('Every language has a way to say hello.', true),
            ch('A way of saying hello is a…', '*greeting|garden|game'),
          ],
          ms: ['Greets in several languages', 'Knows many languages exist', 'Uses polite words'],
        }),
      ]),
      U('family-words', 'Marathi Family Words', 'Aai, Baba, Aaji, Ajoba.', 'Parents; Grandparents; Brothers and sisters', [
        L('marathi-family', 'Aai, Baba and Everyone', {
          o: ['Say Marathi words for family members', 'Use family words in simple sentences'],
          p: ['Knows English family words'],
          e: [
            'In Marathi, mother is "Aai" (aa-ee) and father is "Baba" (baa-baa).',
            'Grandmother is "Aaji" (aa-jee) and grandfather is "Ajoba" (uh-jo-baa). An elder brother is often called "Dada" (daa-daa) and an elder sister "Tai" (taa-ee).',
            'Families in different places use different words. In Hindi, mother is often "Maa" and grandmother "Dadi" or "Nani". Knowing family words helps us talk lovingly with our families.',
          ],
          v: 'Aai = mother in Marathi; Baba = father in Marathi; Aaji = grandmother in Marathi; Ajoba = grandfather in Marathi',
          x: ['"Aai, I love you!"', 'Calling an elder sister "Tai".'],
          s: ['Ivaan\'s Family Tree', 'Ivaan drew a big tree. At the top, he drew Ajoba with his glasses and Aaji with her bright sari. Below them, Baba and Aai holding hands. At the bottom, himself. "Aai, Baba, Aaji, Ajoba," he said, pointing to each. Aaji clapped. "Now you know our family in Marathi!"'],
          a: [
            mt('Match the Marathi word', 'Aai=mother|Baba=father|Aaji=grandmother|Ajoba=grandfather'),
            ch('An elder sister in Marathi is often called…', '*Tai|Dada|Baba'),
            tf('Different languages have different family words.', true),
            ch('"Dada" is often used for an…', '*elder brother|elder sister|aunt'),
          ],
          t: ['What do you call your grandparents?', 'Why might families use special words for each other?'],
          k: ['Point to family photos and name each person in Marathi.'],
          m: ['Marathi Family Tree', 'paper, crayons, family photos (optional)', 'Draw a tree with branches | Draw or stick your family on it | Label each person with the Marathi word | Show it to your family and say each word', "Ask relatives before using their names or photographs. Include only information the family is comfortable sharing and keep the finished tree private unless everyone agrees."],
          q: [
            ch('Mother in Marathi is…', '*Aai|Ajoba|Tai'),
            tf('Ajoba means grandfather.', true),
            ch('Father in Marathi is…', '*Baba|Aaji|Dada'),
          ],
          ms: ['Names family members in Marathi', 'Uses words in sentences', 'Compares family words across languages'],
        }),
      ]),
    ]),
    S('s5', 'Counting in Marathi and Sanskrit; colours and animals.', [
      'Count 1–5 in Marathi and Sanskrit', 'Name colours in Marathi', 'Name animals in Marathi and Sanskrit',
    ], [
      U('numbers', 'Counting in Marathi and Sanskrit', 'Ek, don, teen!', 'Marathi numbers 1–5; Sanskrit numbers 1–5; Counting songs', [
        L('count-languages', 'Ek, Don, Teen', {
          o: ['Count from 1 to 5 in Marathi', 'Count from 1 to 5 in Sanskrit'],
          p: ['Can count 1–10 in English'],
          e: [
            'In Marathi, we count: 1 "ek", 2 "don", 3 "teen", 4 "chaar", 5 "paach".',
            'In Sanskrit, an ancient language of India: 1 "ekam", 2 "dve", 3 "trini", 4 "chatvari", 5 "pancha".',
            'Notice how similar some words are! Sanskrit is an ancient relative of Marathi and Hindi. Even English is distantly related: Sanskrit "trini" and English "three" both come from a very old shared ancestor language.',
          ],
          v: 'ek = one in Marathi; don = two in Marathi; pancha = five in Sanskrit; Sanskrit = an ancient language of India',
          x: ['Counting stairs: ek, don, teen, chaar, paach!', 'The word "Panchatantra" contains "pancha", meaning five.'],
          s: ['The Staircase Count', 'Every evening, Ivaan and Ajoba climbed the stairs together, counting in Marathi: "Ek, don, teen, chaar, paach!" One day Ajoba said, "Let\'s try Sanskrit." "Ekam, dve, trini, chatvari, pancha!" Ivaan giggled. "Pancha sounds like paach!" "Clever boy," said Ajoba. "They\'re cousins."'],
          a: [
            mt('Match the Marathi number', 'ek=1|don=2|teen=3|paach=5'),
            ch('Five in Sanskrit is…', '*pancha|ek|dve'),
            ct('Count in Marathi: ek, don, teen, chaar — how many?', 4),
            tf('Sanskrit "trini" and English "three" are related.', true),
          ],
          t: ['Which Marathi and Sanskrit numbers sound alike?', 'Why might languages share similar words?'],
          k: ['Count five toys in Marathi and then in Sanskrit.'],
          m: ['Counting Cards in Three Languages', 'card, crayons', 'Make cards for 1 to 5 | Write the number and draw that many dots | Add the English, Marathi and Sanskrit words | Play a matching game with family'],
          q: [
            ch('Two in Marathi is…', '*don|teen|ek'),
            tf('Pancha means five.', true),
            ch('Three in Marathi is…', '*teen|chaar|paach'),
          ],
          ms: ['Counts 1–5 in Marathi', 'Counts 1–5 in Sanskrit', 'Notices word similarities'],
        }),
      ]),
      U('colours-animals', 'Colours and Animals', 'Words for the world around us.', 'Marathi colour words; Marathi animal words; Sanskrit nature words', [
        L('colours-animals', 'Laal, Hirva and Vagh', {
          o: ['Name colours in Marathi', 'Name animals in Marathi and some nature words in Sanskrit'],
          p: ['Knows colours and animals in English'],
          e: [
            'Marathi colours: red is "laal", yellow is "pivla", green is "hirva", blue is "nila", white is "pandhra" and black is "kaala".',
            'Marathi animals: cat is "manjar", dog is "kutra", cow is "gaay", elephant is "hatti", tiger is "vagh" and fish is "maasa".',
            'Some Sanskrit nature words: sun is "surya", moon is "chandra", water is "jalam" and elephant is "gajah". You may know "Ganesh" is also called "Gajanan" — the elephant-faced one!',
          ],
          v: 'laal = red in Marathi; hirva = green in Marathi; vagh = tiger in Marathi; surya = sun in Sanskrit',
          x: ['"Hirva popat" — a green parrot.', '"Surya Namaskar" — saluting the sun in yoga.'],
          s: ['The Colourful Zoo', 'At the zoo, Ivaan played a game with Aai. "What colour is the parrot?" "Hirva!" "What animal is that?" "Vagh!" — a big orange tiger with kaala stripes. At the elephant enclosure, Aai said, "In Sanskrit, an elephant is gajah." Ivaan trumpeted like a hatti. "I\'m a gajah AND a hatti!"'],
          a: [
            mt('Match the Marathi colour', 'laal=red|pivla=yellow|hirva=green|nila=blue'),
            mt('Match the Marathi animal', 'manjar=cat|kutra=dog|vagh=tiger|hatti=elephant'),
            ch('Sun in Sanskrit is…', '*surya|chandra|jalam'),
            tf('"Gajah" means elephant in Sanskrit.', true),
          ],
          t: ['Which Marathi word is your favourite to say?', 'What does "Surya Namaskar" mean, using the words you know?'],
          k: ['Describe an animal using a Marathi colour and animal word, like "kaala kutra".'],
          m: ['Marathi Animal Book', 'paper, crayons, stapler', 'Draw six animals | Colour them and write the Marathi colour word | Write the Marathi animal name | Read the book to your family', "An adult should operate the stapler and check that staples are fully closed. Keep the stapler and loose staples away from children."],
          q: [
            ch('Moon in Sanskrit is…', '*chandra|surya|gajah'),
            tf('"Maasa" means fish in Marathi.', true),
            ch('White in Marathi is…', '*pandhra|laal|nila'),
          ],
          ms: ['Names colours in Marathi', 'Names animals in Marathi', 'Knows Sanskrit nature words'],
        }),
      ]),
    ]),
    S('s6', 'Writing systems of the world and the Devanagari script.', [
      'Compare alphabets, abugidas and logographic scripts', 'Recognise Devanagari vowels and consonants', 'Write their name in Devanagari',
    ], [
      U('scripts', 'Scripts of the World', 'Many ways to write.', 'Alphabets; Abugidas like Devanagari; Logographic scripts like Chinese', [
        L('scripts', 'Letters, Syllables and Symbols', {
          o: ['Describe different types of writing systems', 'Identify scripts used for different languages'],
          p: ['Can read English letters'],
          e: [
            'A script is a system of writing. An alphabet, like the Latin alphabet used for English, has separate letters for consonants and vowels.',
            'An abugida, like Devanagari (used for Marathi, Hindi, Sanskrit and Nepali), writes each consonant with a built-in "a" sound; other vowels are shown with marks added to the consonant. Many Indian scripts — Bengali, Tamil, Telugu, Kannada, Gujarati — are abugidas descended from the ancient Brahmi script.',
            'Chinese uses logograms — characters that represent words or meaningful parts of words. Arabic and Urdu are written from right to left.',
          ],
          v: 'script = a system of writing; alphabet = a set of letters for consonants and vowels; abugida = a script where consonants carry a built-in vowel; logogram = a character representing a word or meaning',
          x: ['Devanagari: नमस्कार (namaskar).', 'Chinese: 山 (shān), meaning mountain.'],
          s: ['The Mountain Picture', 'Zuri\'s teacher drew three peaks: 山. "This is the Chinese character for mountain," she said. "It started long ago as a picture." Then she wrote "मराठी" on the board. "This is Marathi in Devanagari — the line on top joins the letters." Zuri traced both in the air. "Every script is like a secret code!"'],
          a: [
            mt('Match the script to its type', 'Latin alphabet=alphabet|Devanagari=abugida|Chinese characters=logographic'),
            ch('Devanagari is used for…', '*Marathi, Hindi and Sanskrit|Chinese|English'),
            tf('Arabic and Urdu are written right to left.', true),
            ch('Many Indian scripts descend from…', '*Brahmi|Latin|Chinese'),
          ],
          t: ['Why might different languages use different scripts?', 'What would be hard about writing in logograms?'],
          k: ['Show a grown-up three different scripts and name them.'],
          m: ['Script Collection', 'packaging, newspapers, signs (photos), a notebook', 'Find examples of different scripts around you | Stick or copy them into a notebook | Label the language and script | Share your collection'],
          q: [
            ch('A system of writing is a…', '*script|scroll|scribble'),
            tf('Tamil and Telugu scripts descend from Brahmi.', true),
            ch('A character representing a word is a…', '*logogram|letter only|line'),
          ],
          ms: ['Describes script types', 'Matches scripts to languages', 'Recognises scripts in the environment'],
        }),
      ]),
      U('devanagari', 'Devanagari Letters', 'Swar and vyanjan.', 'Vowels (swar); Consonants (vyanjan); Vowel marks (matra)', [
        L('devanagari', 'अ आ इ — Learning Devanagari', {
          o: ['Recognise some Devanagari vowels and consonants', 'Explain how vowel marks (matras) change sounds'],
          p: ['Knows what an abugida is'],
          e: [
            'Devanagari letters hang from a line on top called the shirorekha. Vowels are called swar: अ (a), आ (aa), इ (i), ई (ee), उ (u), ऊ (oo).',
            'Consonants are called vyanjan: क (ka), ख (kha), ग (ga), म (ma), न (na), र (ra). Each has a built-in "a" sound.',
            'To change the vowel, add a mark called a matra: क (ka) + ा = का (kaa); क + ि = कि (ki). Devanagari letters are arranged scientifically by where in the mouth they are pronounced — from the throat to the lips.',
          ],
          v: 'swar = a vowel in Devanagari; vyanjan = a consonant in Devanagari; matra = a vowel mark added to a consonant; shirorekha = the line on top of Devanagari letters',
          x: ['म + ा = मा (maa).', 'आई (Aai), Marathi for mother.'],
          s: ['Writing Aai', 'Ivaan wanted to write a card for Aai in Marathi. Aaji showed him: "आ is \'aa\', and ई is \'ee\'. Together: आई — Aai!" Ivaan copied it carefully, drawing the line on top. When Aai opened the card, her eyes filled with happy tears. "You wrote my name in Marathi!"'],
          a: [
            mt('Match the Devanagari letter to its sound', 'अ=a|क=ka|म=ma|न=na'),
            ch('A vowel mark is called a…', '*matra|swar|vyanjan'),
            tf('The line on top of Devanagari letters is called the shirorekha.', true),
            ch('आई spells…', '*Aai|Baba|Tai'),
          ],
          t: ['Why might letters be arranged by where they are pronounced?', 'How is Devanagari different from the English alphabet?'],
          k: ['Write and read aloud one Marathi word in Devanagari.'],
          m: ['My Name in Devanagari', 'paper, pencil, a Devanagari chart', 'Find the letters for your name with a grown-up | Practise writing each letter | Write your name with the shirorekha | Decorate a name card'],
          q: [
            ch('A consonant in Devanagari is a…', '*vyanjan|swar|matra'),
            tf('Each Devanagari consonant has a built-in "a" sound.', true),
            ch('A vowel in Devanagari is a…', '*swar|sitar|star'),
          ],
          ms: ['Recognises letters', 'Uses matras', 'Writes simple words'],
        }),
      ]),
    ]),
    S('s7', 'Language families and the languages of India.', [
      'Describe major language families', 'Explain India\'s linguistic diversity', 'Understand classical and scheduled languages',
    ], [
      U('families', 'Language Families', 'How languages are related.', 'Indo-European; Dravidian; Sino-Tibetan and Austroasiatic', [
        L('families', 'Family Trees of Languages', {
          o: ['Describe major language families', 'Use word comparisons to show relationships'],
          p: ['Knows similar number words in different languages'],
          e: [
            'Like people, languages have families. Languages descended from a common ancestor share words and grammar patterns.',
            'The Indo-European family includes Sanskrit, Marathi, Hindi, Bengali, Persian, Greek, Latin, English and German. Compare "mother": Sanskrit "mātṛ", Latin "mater", English "mother". In 1786, William Jones, a judge in Calcutta, noted Sanskrit\'s striking similarity to Greek and Latin.',
            'The Dravidian family, mainly in South India, includes Tamil, Telugu, Kannada and Malayalam. India also has Austroasiatic languages (such as Santali and Khasi) and Tibeto-Burman languages (such as Manipuri/Meitei and Bodo).',
          ],
          v: 'language family = languages descended from a common ancestor; Indo-European = a family including Sanskrit, Marathi and English; Dravidian = a family including Tamil and Telugu; cognate = words in related languages with a shared origin',
          x: ['Sanskrit "nava", Latin "novem", English "nine" — cognates.', 'Tamil, one of the world\'s oldest living literary languages.'],
          s: ['The Judge Who Noticed', 'In 1786, Sir William Jones, a British judge in Calcutta who studied Sanskrit, gave a famous lecture. He said Sanskrit, Greek and Latin were so alike that they must have "sprung from some common source, which, perhaps, no longer exists." His idea helped start the scientific study of language families.'],
          a: [
            mt('Match the language to its family', 'Marathi=Indo-European|Tamil=Dravidian|Santali=Austroasiatic|Meitei=Tibeto-Burman'),
            ch('Words in related languages with a shared origin are…', '*cognates|opposites|rhymes'),
            tf('Sanskrit and Latin are in the same language family.', true),
            ch('Who noted Sanskrit\'s similarity to Greek and Latin in 1786?', '*William Jones|Panini|Aesop'),
          ],
          t: ['Why do related languages share words?', 'What words in Marathi and English sound similar?'],
          k: ['Present a set of cognates across three languages.'],
          m: ['Cognate Detective', 'a notebook, dictionaries or family members who speak other languages', 'Choose ten basic words (mother, three, new…) | Find them in Marathi, Sanskrit, English and one more language | Highlight similarities | Make a family-tree poster of the languages'],
          q: [
            ch('Kannada belongs to the…', '*Dravidian family|Indo-European family|Sino-Tibetan family'),
            tf('English is an Indo-European language.', true),
            ch('Languages from a common ancestor form a…', '*language family|alphabet|dictionary'),
          ],
          ms: ['Describes language families', 'Identifies cognates', 'Explains historical relationships'],
        }),
      ]),
      U('india-languages', 'The Languages of India', 'A land of many tongues.', 'The Eighth Schedule; Classical languages; Multilingual India', [
        L('india-languages', 'Unity in Many Languages', {
          o: ['Explain India\'s linguistic diversity and constitutional recognition', 'Describe classical languages, including Marathi'],
          p: ['Knows language families'],
          e: [
            'India is one of the world\'s most linguistically diverse countries. The 2011 Census recorded 121 languages spoken by 10,000 or more people, and many more mother tongues.',
            'The Eighth Schedule of the Constitution lists 22 scheduled languages, including Marathi, Hindi, Bengali, Tamil, Telugu, Sanskrit, Urdu, Kannada, Gujarati and Konkani. Hindi in Devanagari is the official language of the Union, with English also used for official purposes.',
            'The government recognises some languages as "classical" for their antiquity and rich literature. In October 2024, Marathi received classical language status, along with Pali, Prakrit, Assamese and Bengali, joining Tamil, Sanskrit, Telugu, Kannada, Malayalam and Odia.',
          ],
          v: 'scheduled language = a language listed in the Constitution\'s Eighth Schedule; classical language = a language recognised for antiquity and rich literature; mother tongue = the first language a person learns; multilingual = able to use several languages',
          x: ['A Mumbai child speaking Marathi at home, Hindi with friends and English at school.', 'Rupee notes printed with text in many languages.'],
          s: ['The Language Panel', 'Ivaan looked closely at a banknote with Papa. On the back was a panel with the value written in 15 languages besides Hindi and English! "Marathi is there," Papa pointed. "And Tamil, Bengali, Kannada…" Ivaan counted the scripts. "Our money speaks lots of languages!"'],
          a: [
            ch('How many languages are listed in the Eighth Schedule?', '*22|5|100'),
            ch('Marathi received classical language status in…', '*2024|1947|1960'),
            tf('Hindi in Devanagari is the official language of the Union.', true),
            ch('The first language a person learns is their…', '*mother tongue|second language|script'),
          ],
          t: ['What are the advantages of growing up multilingual?', 'How can a country with many languages stay united?'],
          k: ['Describe the languages you and your family speak and where you use each.'],
          m: ['Language Map of India', 'an outline map of India, colours, reliable sources', 'Mark the main language of each state | Colour by language family | Add the 11 classical languages | Present three interesting facts'],
          q: [
            ch('Able to use several languages is…', '*multilingual|monolingual|musical'),
            tf('Marathi is a scheduled language.', true),
            ch('Which of these is a classical language of India?', '*Tamil|English|French'),
          ],
          ms: ['Explains linguistic diversity', 'Describes constitutional recognition', 'Knows Marathi\'s classical status'],
        }),
      ]),
    ]),
    S('s9', 'Sanskrit grammar and words that travel.', [
      'Describe Panini\'s grammar and sandhi', 'Trace loanwords between Indian languages and English', 'Use simple Sanskrit phrases',
    ], [
      U('sanskrit-grammar', 'Sanskrit and Panini', 'The world\'s first scientific grammar.', 'Panini\'s Ashtadhyayi; Sandhi: joining sounds; Simple Sanskrit sentences', [
        L('panini', 'Panini and the Rules of Sanskrit', {
          o: ['Describe Panini\'s contribution to linguistics', 'Explain and apply simple sandhi rules'],
          p: ['Knows Devanagari basics'],
          e: [
            'Panini, a grammarian from Gandhara in north-west ancient India, composed the Ashtadhyayi ("eight chapters"), commonly dated to around the 4th century BCE. In about 4,000 compact rules (sutras), it describes Sanskrit\'s sounds and word formation with remarkable precision. Modern linguists and computer scientists admire its rule-based system.',
            'Sandhi ("joining") describes how sounds change when words meet. For example, "deva" + "indra" becomes "devendra" (a + i → e), and "sūrya" + "udaya" becomes "sūryodaya", sunrise (a + u → o). Marathi words like "suryoday" show this too.',
            'A simple Sanskrit sentence: "Bālakaḥ paṭhati" — "The boy reads." "Rāmaḥ vanam gacchati" — "Rama goes to the forest." Endings show who does what, so word order is flexible.',
          ],
          v: 'grammar = the rules of a language; sutra = a short rule or aphorism; sandhi = sound changes when words join; inflection = changing word endings to show grammar',
          x: ['"Vidya" + "alaya" = "Vidyalaya" (school).', '"Mahā" + "ātmā" = "Mahātmā" (great soul).'],
          s: ['A Grammar Like a Computer Program', 'In the 20th century, linguists studying Panini\'s Ashtadhyayi were amazed. Its rules called other rules, had priorities when they conflicted and used special markers — much like a computer program. Written over 2,000 years before computers, it remains one of the most complete grammars of any language ever made.'],
          a: [
            ch('Panini\'s grammar is called the…', '*Ashtadhyayi|Ramayana|Arthashastra'),
            ch('"Vidya" + "alaya" becomes…', '*Vidyalaya|Vidyaalaaya|Alayavidya'),
            tf('Sandhi describes sound changes when words join.', true),
            mt('Match the Sanskrit to its meaning', 'Bālakaḥ paṭhati=The boy reads|sūryodaya=sunrise|Mahātmā=great soul'),
          ],
          t: ['Why might Panini\'s rule system interest computer scientists?', 'How do word endings make word order flexible?'],
          k: ['Explain three sandhi examples to your family.'],
          m: ['Sandhi Word Builder', 'card, Sanskrit or Marathi word lists', 'Collect ten compound words like Vidyalaya and Himalaya | Split each into its parts | Write the sandhi rule used | Create three new correct compounds'],
          q: [
            ch('The rules of a language are its…', '*grammar|glossary|geography'),
            tf('The Ashtadhyayi has about 4,000 rules.', true),
            ch('A short rule or aphorism is a…', '*sutra|sitar|saga'),
          ],
          ms: ['Describes Panini\'s work', 'Applies sandhi rules', 'Reads simple Sanskrit sentences'],
        }),
      ]),
      U('loanwords', 'Words That Travel', 'Borrowing between languages.', 'Sanskrit words in English; English words from Indian languages; Persian and Portuguese in Marathi', [
        L('loanwords', 'Shampoo, Jungle and Yoga', {
          o: ['Identify loanwords between Indian languages and English', 'Explain how trade, rule and culture spread words'],
          p: ['Knows language families'],
          e: [
            'Languages borrow words. English took "yoga", "karma", "guru", "avatar", "mantra" and "nirvana" from Sanskrit and Pali.',
            'Through trade and colonial contact, English borrowed from Hindi, Urdu, Marathi and other Indian languages: "shampoo" (from "chāmpo", to press), "bungalow" (from Bengali "bangla"), "jungle" (from "jangal"), "pyjama" (from Persian via Urdu) and "thug".',
            'Marathi itself borrowed many words: from Persian and Arabic during Sultanate and Mughal times ("kagad", paper; "darwaja", door), and from Portuguese ("pav", bread; "batata", potato; "chavi", key). Borrowed words tell the story of history.',
          ],
          v: 'loanword = a word borrowed from another language; borrowing = taking words from another language; etymology = the origin and history of a word; colonial = relating to rule by a foreign power',
          x: ['Marathi "pav" (as in vada pav) from Portuguese "pão".', 'English "loot" from Hindi "lūṭ".'],
          s: ['The Vada Pav Story', 'Eating vada pav at a Mumbai stall, Ivaan asked, "Why is it called pav?" His uncle explained: "Portuguese traders brought bread to Goa and western India centuries ago. Their word was \'pão\'. We made it \'pav\'!" Ivaan looked at his snack with new respect. "My lunch is a history lesson."'],
          a: [
            mt('Match the word to its source', 'yoga=Sanskrit|pav=Portuguese|bungalow=Bengali|kagad=Persian'),
            ch('"Shampoo" comes from a Hindi word meaning…', '*to press|to wash hair|bubbles'),
            tf('Marathi "batata" comes from Portuguese.', true),
            ch('The origin and history of a word is its…', '*etymology|entomology|energy'),
          ],
          t: ['What does a loanword tell us about history?', 'Should languages try to avoid borrowed words?'],
          k: ['Present five loanwords and their stories.'],
          m: ['Etymology Notebook', 'an etymological dictionary or reliable online source', 'Collect 15 everyday words in Marathi and English | Research their origins | Group them by source language | Write a short history of borrowing in your notebook'],
          q: [
            ch('A word borrowed from another language is a…', '*loanword|keyword|password'),
            tf('English borrowed "jungle" from an Indian language.', true),
            ch('Marathi "chavi" (key) comes from…', '*Portuguese|Japanese|Russian'),
          ],
          ms: ['Identifies loanwords', 'Explains historical routes of borrowing', 'Researches etymology'],
        }),
      ]),
    ]),
    S('s12', 'Linguistics, language and identity, and endangered languages.', [
      'Apply basic linguistics: phonetics, morphology and syntax', 'Analyse language, identity and power', 'Evaluate efforts to protect endangered languages',
    ], [
      U('linguistics', 'The Science of Language', 'Phonetics, morphology and syntax.', 'Phonetics and the IPA; Morphology: building words; Syntax: building sentences', [
        L('linguistics', 'How Language Works', {
          o: ['Describe the main branches of linguistics', 'Use the IPA and analyse word structure'],
          p: ['Knows grammar and sandhi'],
          e: [
            'Linguistics is the scientific study of language. Phonetics studies speech sounds; the International Phonetic Alphabet (IPA) gives one symbol per sound so any language can be written accurately. Marathi has retroflex sounds like ळ (ḷ), made by curling the tongue back.',
            'Morphology studies how words are built from morphemes — the smallest meaningful units. "Unhappiness" = un + happy + ness. Marathi and Sanskrit use rich endings (inflection) to show case and tense.',
            'Syntax studies sentence structure. English is usually Subject–Verb–Object ("Ivaan reads a book"), while Marathi is usually Subject–Object–Verb ("Ivaan pustak vachto" — Ivaan book reads). Noam Chomsky proposed that humans share an innate capacity for language — a theory still debated.',
          ],
          v: 'linguistics = the scientific study of language; phonetics = the study of speech sounds; morpheme = the smallest meaningful unit of language; syntax = the structure of sentences',
          x: ['"Unhappiness" as three morphemes.', 'Marathi\'s Subject–Object–Verb word order.'],
          s: ['The Retroflex Sound', 'A linguistics student from Spain struggled with the Marathi sound "ḷ" in "doḷa" (eye). Her Marathi friend showed her: curl your tongue back, touch the roof of your mouth, then say "l". She tried it ten times, laughing. Finally it came out right. "Your language has sounds I didn\'t know existed," she said. That\'s phonetics in action.'],
          a: [
            mt('Match the branch to its focus', 'phonetics=speech sounds|morphology=word structure|syntax=sentence structure|semantics=meaning'),
            ch('Marathi\'s usual word order is…', '*Subject–Object–Verb|Subject–Verb–Object|Verb–Subject–Object'),
            ct('How many morphemes in un-happi-ness?', 3),
            tf('The IPA gives one symbol per sound.', true),
          ],
          t: ['Why do some sounds in one language seem hard for speakers of another?', 'Is the ability to learn language innate?'],
          k: ['Analyse a Marathi sentence and its English translation for word order.'],
          m: ['Mini Linguistics Study', 'recordings of family speech (with consent), an IPA chart', 'Record short sentences in Marathi and English | Transcribe some sounds in IPA | Analyse word order and morphology | Write a 1500-word comparative report'],
          q: [
            ch('The smallest meaningful unit of language is a…', '*morpheme|phoneme|sentence'),
            tf('English is usually Subject–Verb–Object.', true),
            ch('The scientific study of language is…', '*linguistics|literature|logistics'),
          ],
          ms: ['Describes branches of linguistics', 'Uses IPA and morphological analysis', 'Compares syntax across languages'],
        }),
      ]),
      U('identity-endangered', 'Language, Identity and Survival', 'Why languages matter.', 'Language and identity; Language and power; Endangered languages and revival', [
        L('endangered', 'Saving Languages', {
          o: ['Analyse the links between language, identity and power', 'Evaluate efforts to document and revive endangered languages'],
          p: ['Knows India\'s languages and linguistics'],
          e: [
            'Language is closely tied to identity, culture and memory. In India, the 1950s–60s saw states reorganised along linguistic lines; Maharashtra was formed in 1960 after the Samyukta Maharashtra movement. Debates over which languages are used in schools, courts and government reflect questions of power and opportunity.',
            'UNESCO estimates that around 40% of the world\'s languages are endangered — many with few remaining speakers, often because younger generations shift to dominant languages. When a language disappears, unique knowledge of plants, history and ways of thinking may be lost.',
            'Revival efforts include documentation (recordings, dictionaries), teaching children, and media in the language. Hebrew was revived as an everyday spoken language in the late 19th and 20th centuries; in India, projects document tribal languages, and the People\'s Linguistic Survey of India (led by G. N. Devy) recorded 780 languages.',
          ],
          v: 'endangered language = a language at risk of no longer being spoken; language shift = a community moving to another language; revitalisation = efforts to revive a language; documentation = recording a language for the future',
          x: ['Recording elders telling stories in a tribal language.', 'The formation of Maharashtra on 1 May 1960.'],
          s: ['The Last Speakers', 'A linguist visited a village where only a few elderly people still spoke their ancestral language fluently. Their grandchildren spoke the regional language instead. Together, the elders and the linguist recorded songs, stories and names of medicinal plants. The children helped make a picture dictionary — and began learning words their grandparents had feared would vanish.'],
          a: [
            ch('Maharashtra was formed in…', '*1960|1947|1950'),
            ch('A community moving to another language is…', '*language shift|language family|loanword'),
            tf('UNESCO estimates around 40% of the world\'s languages are endangered.', true),
            mt('Match the term', 'documentation=recording a language|revitalisation=reviving a language|endangered=at risk of disappearing'),
          ],
          t: ['Does it matter if a language disappears? Why?', 'How should a multilingual country choose languages for schools?'],
          k: ['Lead a discussion on language rights and identity.'],
          m: ['Language Documentation Project', 'a recording device, consent forms, a speaker of a less-documented language or dialect', 'With consent, record a speaker telling a story or describing daily life | Transcribe and translate it | Create a short glossary | Write a reflection on language, identity and preservation', "Get informed consent from the speaker and explain how the recording will be used. Do not publish names, voices or personal stories without explicit permission; allow the speaker to stop or withdraw."],
          q: [
            ch('Efforts to revive a language are…', '*revitalisation|replacement|repetition'),
            tf('Hebrew was revived as a spoken language.', true),
            ch('Recording a language for the future is…', '*documentation|decoration|demonstration'),
          ],
          ms: ['Analyses language and identity', 'Evaluates revival efforts', 'Practises ethical documentation'],
        }),
      ]),
    ]),
  ],
});
