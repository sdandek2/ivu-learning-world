import { subject, S, U, L, ch, tf, od, mt } from '../dsl.ts';

export default subject({
  id: 'dance',
  description: 'Dance and movement from free play to choreography: moving to music, levels and directions, animal and story movements; hand gestures and expressions; India\'s folk and classical dances and dances of the world; the elements of dance; choreography; the Natya Shastra and abhinaya; and dance history, safe practice and dance in society.',
  stages: [
    S('s4', 'Moving to music: fast and slow, high and low, freeze and go.', [
      'Move in different ways to music', 'Use high, middle and low levels', 'Move like animals and tell stories with the body',
    ], [
      U('move-music', 'Move to the Music', 'Listening with our bodies.', 'Freeze dance; Fast and slow moves; Levels: high, middle, low', [
        L('freeze-dance', 'Freeze and Go!', {
          o: ['Move to music and freeze when it stops', 'Move at high, middle and low levels'],
          p: ['Can walk, jump and stretch'],
          e: [
            'Dance is moving your body to music or rhythm. When music is fast, we can move quickly; when it is slow, we can move gently.',
            'In freeze dance, you dance while the music plays and freeze like a statue when it stops. This helps us listen carefully and control our bodies.',
            'Dancers move at different levels: high (on tiptoes, arms up), middle (standing normally) and low (crouching or on the floor).',
          ],
          v: 'dance = moving your body to music or rhythm; freeze = to stop completely still; level = how high or low your body is; statue = a figure that does not move',
          x: ['Stretching tall like a giraffe at a high level.', 'Crawling like a crocodile at a low level.'],
          s: ['The Statue Garden', 'At Ivaan\'s birthday party, they played freeze dance. When the music stopped, Ivaan froze on one leg like a flamingo, his cousin crouched like a frog, and Grandpa stood with his arms stretched like a tree. "It\'s a statue garden!" laughed Mama. Then the music started again and everyone wiggled and giggled.'],
          a: [
            ch('In freeze dance, when the music stops you…', '*freeze like a statue|keep dancing|sit down and eat'),
            mt('Match the level', 'tiptoes with arms up=high|standing normally=middle|crouching=low'),
            tf('Slow music can make us move gently.', true),
            ch('Dancing helps us listen and control our…', '*bodies|toys|food'),
          ],
          t: ['What is the funniest statue you can make?', 'How does fast music make you want to move?'],
          k: ['Show a grown-up a high, a middle and a low move.'],
          m: ['Family Freeze Dance', 'music player, open space', 'Clear a safe space | Play music and dance | Pause the music and freeze | Take turns choosing the levels for each round'],
          q: [
            ch('Crouching is a…', '*low level|high level|middle level'),
            tf('To freeze means to stop completely still.', true),
            ch('Moving your body to music is…', '*dance|sleep|reading'),
          ],
          ms: ['Responds to music changes', 'Uses three levels', 'Shows body control'],
        }),
      ]),
      U('story-moves', 'Animal and Story Moves', 'Telling stories with our bodies.', 'Animal movements; Feelings in movement; Story dance', [
        L('animal-moves', 'Move Like an Animal', {
          o: ['Move like different animals', 'Show feelings through movement'],
          p: ['Can move at different levels'],
          e: [
            'Our bodies can pretend to be animals: hop like a rabbit, slither like a snake, stomp like an elephant, flutter like a butterfly.',
            'We can also show feelings with our bodies. Happy movements may be bouncy and big. Sad movements may be slow and droopy. Angry movements may be strong and sharp.',
            'When we put moves together, we can tell a story without any words! Many dances around the world, including Indian classical dance, tell stories this way.',
          ],
          v: 'slither = to move smoothly along the ground like a snake; flutter = to move wings lightly and quickly; droopy = hanging down sadly; express = to show a feeling',
          x: ['Peacock dance with proud, spread-out arms.', 'Slow, droopy steps to show feeling sad.'],
          s: ['The Butterfly\'s Journey', 'Ivaan curled up small on the floor — he was a caterpillar in a cocoon. Slowly, slowly, he stretched one arm, then the other. He stood up, opened his arms wide and fluttered around the room. "I\'m a butterfly!" he shouted, landing gently on a cushion flower. His dance had told a whole story.'],
          a: [
            mt('Match the animal to its move', 'snake=slither|rabbit=hop|elephant=stomp|butterfly=flutter'),
            ch('Happy movements are often…', '*bouncy and big|slow and droopy|sharp and angry'),
            tf('Dances can tell stories without words.', true),
            ch('To show a feeling is to…', '*express it|hide it|forget it'),
          ],
          t: ['How would you dance a thunderstorm?', 'How can you tell what someone feels from how they move?'],
          k: ['Dance a short animal story and ask a grown-up to guess the animal.'],
          m: ['Caterpillar to Butterfly Dance', 'a scarf, soft music', 'Curl up as a caterpillar | Slowly grow inside a cocoon | Open up and flutter with the scarf as wings | Perform the story for your family'],
          q: [
            ch('Which animal flutters?', '*butterfly|elephant|snake'),
            tf('Slow, droopy moves can show sadness.', true),
            ch('Moving smoothly along the ground like a snake is…', '*slithering|hopping|flying'),
          ],
          ms: ['Imitates animal movements', 'Expresses feelings through movement', 'Sequences moves into a story'],
        }),
      ]),
    ]),
    S('s5', 'Hand gestures, expressions and folk dances of India.', [
      'Make simple mudras and facial expressions', 'Name folk dances from different states', 'Learn and perform simple folk steps',
    ], [
      U('mudras', 'Hands and Faces Tell Stories', 'Mudras and expressions.', 'Simple mudras; Facial expressions; Telling a story with hands', [
        L('simple-mudras', 'Talking Hands', {
          o: ['Make and name simple mudras', 'Show feelings with facial expressions'],
          p: ['Can show feelings in movement'],
          e: [
            'In Indian classical dance, hand gestures are called mudras or hastas. Each one can mean many things.',
            'Pataka (a flat hand with fingers together) can show a flag, a cloud or a forest. Alapadma (fingers spread like an open lotus) can show a flower or the moon. Hamsasya (thumb and first finger touching) can show a swan\'s beak or tying a thread.',
            'Dancers also use their eyes, eyebrows and face to show feelings — happiness, surprise, anger, fear. Hands and faces together help the audience understand the story.',
          ],
          v: 'mudra = a hand gesture in dance; pataka = a flat-hand gesture; alapadma = an open-lotus gesture; expression = showing a feeling on your face',
          x: ['Using alapadma to show a blooming lotus.', 'Raising eyebrows to show surprise.'],
          s: ['The Silent Story', 'Zuri\'s dance teacher told a story without saying a word. Her pataka hand became rain clouds. Her fingers fluttered down as raindrops. Her alapadma hand opened into a lotus, and her face glowed with joy. "A flower opened in the rain!" Zuri guessed. Her teacher smiled and bowed.'],
          a: [
            mt('Match the mudra', 'pataka=flat hand|alapadma=open lotus|hamsasya=swan\'s beak'),
            ch('A hand gesture in Indian dance is a…', '*mudra|drum|costume'),
            tf('One mudra can mean many things.', true),
            ch('Raising your eyebrows often shows…', '*surprise|sleep|hunger'),
          ],
          t: ['What mudra would you invent for a cat?', 'Why might a dancer use their eyes so much?'],
          k: ['Tell a tiny story using two mudras and one expression.'],
          m: ['Mudra Story Cards', 'card, crayons', 'Draw three mudras on cards | Write what each can mean | Make a short story using all three | Perform it and let your family guess'],
          q: [
            ch('Alapadma can show a…', '*flower|car|book'),
            tf('Faces help tell the story in dance.', true),
            ch('A flat-hand gesture is…', '*pataka|alapadma|hamsasya'),
          ],
          ms: ['Forms simple mudras', 'Uses facial expression', 'Combines hands and face to tell a story'],
        }),
      ]),
      U('folk-dances', 'Folk Dances of India', 'Dances of the people.', 'Lavani and Koli; Garba and Bhangra; Bihu and Ghoomar', [
        L('folk-dances', 'Dances From Every State', {
          o: ['Match folk dances to their states', 'Perform a simple folk step'],
          p: ['Can move to a beat'],
          e: [
            'Folk dances are dances of ordinary people, performed at festivals, harvests and weddings. Every region of India has its own.',
            'In Maharashtra, the Koli dance of fishing communities shows rowing boats and waves, and Lavani is a lively dance to the beat of the dholki. In Gujarat, people dance Garba in circles during Navratri. In Punjab, Bhangra celebrates the harvest with energetic jumps.',
            'In Assam, Bihu welcomes the new year and spring. In Rajasthan, Ghoomar is a graceful spinning dance with swirling skirts.',
          ],
          v: 'folk dance = a traditional dance of a community; Garba = a circle dance of Gujarat; Bhangra = a harvest dance of Punjab; Koli = a dance of Maharashtra\'s fishing communities',
          x: ['Garba circles during Navratri.', 'Koli dancers pretending to row a boat.'],
          s: ['Round and Round at Navratri', 'At Navratri, Ivaan joined a giant circle of dancers. Clap to the left, clap to the right, step and turn! Everyone moved together around a lamp in the middle — grandmothers, children, aunties and uncles. When the music got faster, the whole circle spun faster too. Ivaan was dizzy and delighted.'],
          a: [
            mt('Match the dance to the state', 'Garba=Gujarat|Bhangra=Punjab|Bihu=Assam|Ghoomar=Rajasthan'),
            ch('The Koli dance shows…', '*rowing boats and waves|flying planes|climbing trees'),
            tf('Folk dances are often performed at festivals.', true),
            ch('Garba is danced during…', '*Navratri|Christmas|Eid'),
          ],
          t: ['Why do so many folk dances happen at harvest time?', 'Which folk dance would you like to learn?'],
          k: ['Show a grown-up a Garba clap-and-step pattern.'],
          m: ['Folk Dance Map', 'outline map of India, crayons', 'Mark six states on the map | Draw a dancer for each folk dance | Learn one simple step | Perform it for your family'],
          q: [
            ch('Lavani is from…', '*Maharashtra|Kerala|Assam'),
            tf('Bhangra celebrates the harvest.', true),
            ch('A traditional dance of a community is a…', '*folk dance|robot dance|ballet'),
          ],
          ms: ['Matches dances to regions', 'Performs a folk step', 'Explains the occasions for folk dance'],
        }),
      ]),
    ]),
    S('s6', 'India\'s classical dances and dances of the world.', [
      'Name India\'s classical dance forms and their regions', 'Compare dance styles from around the world', 'Describe costumes and music in dance',
    ], [
      U('classical', 'Classical Dances of India', 'Eight great forms.', 'Bharatanatyam and Kathak; Kathakali and Odissi; Manipuri, Kuchipudi, Mohiniyattam and Sattriya', [
        L('classical-forms', 'The Classical Dance Forms', {
          o: ['Name India\'s classical dance forms and their states', 'Describe distinctive features of three forms'],
          p: ['Knows mudras and folk dances'],
          e: [
            'The Sangeet Natak Akademi, India\'s national academy for music, dance and drama, recognises eight classical dance forms: Bharatanatyam (Tamil Nadu), Kathak (North India), Kathakali (Kerala), Kuchipudi (Andhra Pradesh), Odissi (Odisha), Manipuri (Manipur), Mohiniyattam (Kerala) and Sattriya (Assam). The Ministry of Culture also includes Chhau.',
            'Bharatanatyam features geometric poses and strong footwork. Kathak is known for fast spins (chakkars) and rhythmic footwork with ankle bells (ghungroo). Kathakali uses elaborate green face make-up and huge costumes to act out epic stories.',
            'Odissi features the tribhangi pose, with the body bent in three places, like temple sculptures. Each form has its own music, costume and history.',
          ],
          v: 'classical dance = a dance form with long tradition and detailed rules; ghungroo = ankle bells; chakkar = a spin in Kathak; tribhangi = a three-bend pose in Odissi',
          x: ['Kathak dancers spinning dozens of chakkars.', 'Kathakali\'s green "pacha" make-up for heroes.'],
          s: ['Three Hours of Make-up', 'Backstage, Ivaan watched a Kathakali dancer lie on the floor while an artist painted his face green, red and white for three hours. A ridge of white paper framed his chin. When he finally stood up in his giant skirt and crown, he wasn\'t a man any more — he was the hero Bhima, ready to fight for justice.'],
          a: [
            mt('Match the dance to its state', 'Bharatanatyam=Tamil Nadu|Kathakali=Kerala|Odissi=Odisha|Sattriya=Assam'),
            ch('Kathak is known for…', '*fast spins and footwork|green face make-up|silence'),
            tf('Sangeet Natak Akademi recognises eight classical dance forms.', true),
            ch('Ankle bells are called…', '*ghungroo|mudras|chakkars'),
          ],
          t: ['Why might Kathakali make-up take so long?', 'How do temple sculptures connect to Odissi?'],
          k: ['Describe one classical dance form and show one of its poses.'],
          m: ['Classical Dance Fact Cards', 'card, pictures or drawings', 'Make a card for each of the eight forms | Add state, costume and one special feature | Watch a short performance of two forms | Present your favourite'],
          q: [
            ch('Mohiniyattam is from…', '*Kerala|Punjab|Gujarat'),
            tf('Odissi uses the tribhangi pose.', true),
            ch('A spin in Kathak is a…', '*chakkar|ghungroo|mudra'),
          ],
          ms: ['Names forms and regions', 'Describes distinctive features', 'Recognises forms in performance'],
        }),
      ]),
      U('world-dance', 'Dances of the World', 'Movement across cultures.', 'Ballet; Flamenco and samba; Hula and lion dance', [
        L('world-dances', 'Dancing Around the World', {
          o: ['Describe dances from several countries', 'Compare features of world dances'],
          p: ['Knows Indian dance forms'],
          e: [
            'Ballet developed in the royal courts of Italy and France and is known for pointe work (dancing on the tips of the toes), leaps and turns. French is still used for ballet steps, such as plié (bend) and jeté (jump).',
            'Flamenco from Andalusia in Spain combines singing, guitar, handclaps and strong footwork. Samba from Brazil is a joyful dance central to Rio\'s Carnival.',
            'Hula from Hawaii tells stories with hand movements and swaying hips — like Indian dance, hands carry meaning. The Chinese lion dance, performed at Lunar New Year, is believed to bring good luck.',
          ],
          v: 'ballet = a classical dance from European courts; pointe = dancing on the tips of the toes; flamenco = a dance and music tradition of Andalusia; carnival = a festival with parades and dancing',
          x: ['A ballerina doing a plié.', 'Lion dancers leaping at Lunar New Year.'],
          s: ['Hands That Speak Everywhere', 'Zuri watched a hula dancer\'s hands become ocean waves, then palm trees swaying in the wind. "That\'s like my Bharatanatyam mudras!" she said. Her teacher nodded. "Many cultures discovered that hands can tell stories. Dancers everywhere are cousins."'],
          a: [
            mt('Match the dance to its country', 'flamenco=Spain|samba=Brazil|hula=Hawaii (USA)|lion dance=China'),
            ch('Ballet steps are named in…', '*French|Hindi|Japanese'),
            tf('Hula uses hand movements to tell stories.', true),
            ch('Dancing on the tips of the toes is…', '*pointe work|hip-hop|marching'),
          ],
          t: ['What do Indian dance and hula have in common?', 'Why do so many cultures dance at festivals?'],
          k: ['Compare two world dances in a short talk.'],
          m: ['World Dance Passport', 'small booklet, stickers or drawings', 'Make a passport page for five dances | Add country, music and costume | Learn one simple step from one dance | Stamp each page when you try a step'],
          q: [
            ch('Samba is central to Carnival in…', '*Rio de Janeiro|Paris|Delhi'),
            tf('The lion dance is performed at Lunar New Year.', true),
            ch('Plié means…', '*bend|jump|turn'),
          ],
          ms: ['Describes world dances', 'Compares features across cultures', 'Tries steps respectfully'],
        }),
      ]),
    ]),
    S('s7', 'The elements of dance and making choreography.', [
      'Use the elements of dance: body, energy, space and time', 'Create a short choreography', 'Give and receive feedback',
    ], [
      U('elements', 'Elements of Dance', 'Body, energy, space and time.', 'Body; Energy; Space; Time', [
        L('best', 'Body, Energy, Space, Time', {
          o: ['Describe dance using body, energy, space and time', 'Vary movements using the elements'],
          p: ['Can perform simple dances'],
          e: [
            'Dance teachers often describe movement using four elements, sometimes remembered as BEST. Body: which parts move and what shapes they make. Energy: how the movement is done — sharp or smooth, strong or light.',
            'Space: where the dancer moves — levels, directions, pathways (straight, curved, zigzag) and size (big or small). Time: tempo (fast or slow), rhythm and pauses.',
            'Changing even one element transforms a movement. A simple walk becomes a sneaky tiptoe (light energy, low level) or a proud march (strong energy, steady time).',
          ],
          v: 'energy = in dance, the quality or force of a movement; pathway = the path a dancer travels; tempo = the speed of movement or music; elements of dance = body, energy, space and time',
          x: ['A sharp, strong punch versus a smooth, light float.', 'A curved pathway across the stage.'],
          s: ['One Walk, Ten Ways', 'Kiko\'s teacher asked the class to walk across the room. Then: "Walk like you\'re on the Moon." "Walk like the floor is hot!" "Walk sadly in the rain." Every walk looked completely different. "You only changed energy, space and time," the teacher said. "That\'s the secret of choreography."'],
          a: [
            mt('Match the element', 'body=which parts move|energy=how the movement is done|space=where the dancer moves|time=speed and rhythm'),
            ch('A zigzag path is part of…', '*space|energy|body'),
            tf('Changing one element can transform a movement.', true),
            ch('Sharp and smooth describe…', '*energy|time|costume'),
          ],
          t: ['How would you change a jump using energy?', 'Which element do you find hardest to control?'],
          k: ['Demonstrate one movement four ways, changing one element each time.'],
          m: ['Element Remix', 'open space, music', 'Choose a simple movement | Perform it four times, changing body, energy, space and time | Film or show it | Explain what changed each time'],
          q: [
            ch('The path a dancer travels is a…', '*pathway|pitch|pose'),
            tf('Tempo relates to time.', true),
            ch('Light, strong and sharp are qualities of…', '*energy|space|body'),
          ],
          ms: ['Uses dance elements vocabulary', 'Varies movement deliberately', 'Analyses movement'],
        }),
      ]),
      U('choreography', 'Making a Dance', 'Choreography basics.', 'Motifs and repetition; Canon and unison; Feedback', [
        L('choreograph', 'Become a Choreographer', {
          o: ['Create a short dance using motifs and structure', 'Give and receive constructive feedback'],
          p: ['Knows the elements of dance'],
          e: [
            'A choreographer is a person who creates dances. Choreographers often start with a motif — a short movement phrase — and develop it by repeating, reversing, changing size or speed.',
            'Group dances can use unison (everyone doing the same move at the same time) or canon (dancers doing the same move one after another, like a round song).',
            'Good choreographers rehearse, watch and improve. Useful feedback is specific and kind: "The canon section was clear — maybe make the ending stronger."',
          ],
          v: 'choreographer = a person who creates dances; motif = a short movement phrase that is developed; unison = moving together at the same time; canon = the same movement one after another',
          x: ['A wave effect created by canon.', 'A dramatic ending in unison.'],
          s: ['The Wave', 'Zuri\'s group wanted their dance to look like the sea. They made a motif: arms rising and falling. In unison, it looked like a calm tide. Then they tried canon — one after another — and it rippled like a wave. "Again!" their teacher called. After three rehearsals and some feedback, it was magical.'],
          a: [
            ch('Moving together at the same time is…', '*unison|canon|solo'),
            ch('A short movement phrase that is developed is a…', '*motif|costume|stage'),
            tf('Good feedback is specific and kind.', true),
            od('Put the choreography process in order', 'Choose an idea|Create a motif|Develop and structure it|Rehearse and get feedback'),
          ],
          t: ['What makes a dance interesting to watch?', 'How do you feel when giving feedback?'],
          k: ['Present your dance and explain your choreographic choices.'],
          m: ['Choreograph a One-Minute Dance', 'music, open space, a group or family', 'Choose a theme and music | Create a motif and develop it | Include unison and canon | Rehearse, perform and collect feedback'],
          q: [
            ch('Dancers doing the same move one after another is…', '*canon|unison|freeze'),
            tf('Choreographers rehearse and improve their dances.', true),
            ch('A person who creates dances is a…', '*choreographer|conductor|composer'),
          ],
          ms: ['Creates and develops motifs', 'Uses unison and canon', 'Gives constructive feedback'],
        }),
      ]),
    ]),
    S('s9', 'The Natya Shastra, abhinaya and the history of Indian dance.', [
      'Explain abhinaya and rasa from the Natya Shastra', 'Trace the history and revival of classical dance', 'Analyse a performance',
    ], [
      U('natya-shastra', 'The Natya Shastra', 'Ancient theory of performance.', 'Nritta, nritya and natya; Four kinds of abhinaya; Rasa and bhava', [
        L('abhinaya', 'Abhinaya and Rasa', {
          o: ['Distinguish nritta, nritya and natya', 'Explain the four kinds of abhinaya and the theory of rasa'],
          p: ['Knows classical dance forms and mudras'],
          e: [
            'The Natya Shastra, a Sanskrit treatise on drama, dance and music traditionally attributed to the sage Bharata, is commonly dated to roughly 200 BCE–200 CE. It remains the foundation of Indian performing-arts theory.',
            'Indian dance distinguishes nritta (pure dance, rhythmic movement without meaning), nritya (expressive dance conveying meaning) and natya (dramatic performance). Abhinaya — expression — has four kinds: angika (body), vachika (speech and song), aharya (costume and make-up) and sattvika (inner emotional states).',
            'The theory of rasa says performance aims to evoke an aesthetic emotion in the audience. The Natya Shastra lists eight rasas, including love (shringara), heroism (vira), compassion (karuna) and wonder (adbhuta); later thinkers added a ninth, peace (shanta).',
          ],
          v: 'abhinaya = expression in performance; rasa = the aesthetic emotion experienced by the audience; bhava = the emotion portrayed by the performer; nritta = pure, abstract dance',
          x: ['A Bharatanatyam varnam alternating nritta and nritya.', 'A dancer portraying Yashoda\'s love for baby Krishna (vatsalya).'],
          s: ['A Room Full of Tears', 'In a small hall, a dancer portrayed a mother searching for her lost child. She used no props — only her eyes, hands and breath. Slowly, the audience fell silent; some wiped their eyes. Afterwards, she said, "I showed the bhava. The rasa — that was yours."'],
          a: [
            mt('Match the abhinaya', 'angika=body|vachika=speech and song|aharya=costume and make-up|sattvika=inner emotional states'),
            ch('Pure dance without meaning is…', '*nritta|nritya|natya'),
            tf('The Natya Shastra lists eight rasas.', true),
            ch('The emotion experienced by the audience is…', '*rasa|bhava|tala'),
          ],
          t: ['What is the difference between bhava and rasa?', 'Can a dance without a story still evoke emotion?'],
          k: ['Perform or describe a short piece showing one rasa and explain your abhinaya.'],
          m: ['Nine Rasas Project', 'mirror, camera, notebook', 'Study the nine rasas | Practise expressing each in front of a mirror | Photograph or film each expression | Write how each was created using abhinaya'],
          q: [
            ch('Aharya abhinaya is about…', '*costume and make-up|footwork|singing'),
            tf('Shanta was added as a ninth rasa by later thinkers.', true),
            ch('Expressive dance conveying meaning is…', '*nritya|nritta|drill'),
          ],
          ms: ['Distinguishes dance categories', 'Explains abhinaya and rasa', 'Applies theory in practice'],
        }),
      ]),
      U('dance-history', 'History and Revival', 'From temples to the stage.', 'Temple and court traditions; Colonial suppression; Revival and modern dance', [
        L('revival', 'From Temple to Stage', {
          o: ['Trace the history of Indian classical dance', 'Evaluate the 20th-century revival and its debates'],
          p: ['Knows classical dance forms'],
          e: [
            'Many classical forms grew in temples and royal courts. Sadir, the ancestor of Bharatanatyam, was performed by hereditary women dancers called devadasis; Kathak developed through storytellers (kathakars) and later Mughal and Rajput courts.',
            'Under colonial rule, some Victorian-influenced reformers attacked these traditions as immoral. The Madras Devadasis (Prevention of Dedication) Act was passed in 1947, ending temple dedication.',
            'In the 1930s, figures such as Rukmini Devi Arundale, who founded Kalakshetra in 1936, and E. Krishna Iyer helped revive and reshape the dance as Bharatanatyam for the concert stage. Historians debate this revival: it preserved the art but also moved it away from the hereditary communities who had sustained it, such as dancers like T. Balasaraswati, who argued for its traditional roots.',
          ],
          v: 'devadasi = a woman dedicated to temple service, historically including dance; revival = bringing something back into use; hereditary = passed down in families; Kalakshetra = an arts academy founded in Chennai in 1936',
          x: ['Uday Shankar blending Indian and Western stagecraft in the 1930s.', 'T. Balasaraswati\'s renowned abhinaya.'],
          s: ['Two Great Dancers', 'In the 1930s and 40s, two remarkable women shaped Bharatanatyam. Rukmini Devi, from a Theosophist family, brought it to new audiences and founded Kalakshetra. Balasaraswati, from a hereditary family of musicians and dancers, insisted on its deep traditional roots. Both were brilliant — and their debate still shapes how the dance is understood.'],
          a: [
            ch('The ancestor of Bharatanatyam was called…', '*Sadir|Garba|Bhangra'),
            ch('Kalakshetra was founded by…', '*Rukmini Devi Arundale|M. S. Subbulakshmi|Uday Shankar'),
            tf('Historians debate the effects of the 20th-century revival.', true),
            od('Put these in time order', 'Temple and court traditions|Colonial-era reform campaigns|Kalakshetra founded|Dance on the modern concert stage'),
          ],
          t: ['Who should decide how a traditional art changes?', 'What is gained and lost when an art moves from temple to stage?'],
          k: ['Present both sides of the debate on the revival of Bharatanatyam.'],
          m: ['Dance History Research', 'scholarly articles, documentaries', 'Research one classical form\'s history | Identify key people and turning points | Include perspectives of hereditary communities | Write a 1200-word report'],
          q: [
            ch('Hereditary means…', '*passed down in families|newly invented|imported'),
            tf('Kathak developed partly through storytellers called kathakars.', true),
            ch('Kalakshetra was founded in…', '*1936|1847|2001'),
          ],
          ms: ['Traces history accurately', 'Evaluates revival debates', 'Includes multiple perspectives'],
        }),
      ]),
    ]),
    S('s12', 'Safe practice, dance analysis and dance in society.', [
      'Apply anatomy and safe practice in dance', 'Analyse dance works critically', 'Evaluate dance\'s roles in identity, politics and wellbeing',
    ], [
      U('safe-practice', 'The Dancer\'s Body', 'Anatomy and safe practice.', 'Warm-up and cool-down; Alignment; Injury prevention and wellbeing', [
        L('dancer-body', 'Training Safely', {
          o: ['Design a safe warm-up and cool-down', 'Explain alignment and common injury risks'],
          p: ['Has regular dance practice'],
          e: [
            'Dancers are athletes. A warm-up raises heart rate and body temperature and mobilises joints; dynamic movements are generally preferred before dancing, with static stretches more often used in cool-down.',
            'Good alignment — for example, knees tracking over toes in a plié or the Bharatanatyam aramandi (half-sitting) position — reduces strain. Common dance injuries include ankle sprains, knee problems and overuse injuries from repetitive training.',
            'Wellbeing matters too: adequate rest, nutrition, hydration and healthy attitudes to body image. Dance medicine and science research supports dancers\' long-term health.',
          ],
          v: 'alignment = the correct positioning of body parts; warm-up = activity that prepares the body for exercise; overuse injury = an injury from repeated strain; aramandi = the half-sitting position in Bharatanatyam',
          x: ['Knees over toes in aramandi.', 'Rest days in a training schedule.'],
          s: ['The Knee That Taught a Lesson', 'Meera practised aramandi for hours, letting her knees roll inwards. Soon they ached. Her teacher showed her how to turn out from the hips and keep knees over toes. With a proper warm-up and rest days, the pain faded, and her lines became cleaner. "Strong technique is safe technique," her teacher said.'],
          a: [
            ch('In a plié, knees should track…', '*over the toes|inwards|backwards'),
            tf('Overuse injuries come from repeated strain.', true),
            od('Put a safe session in order', 'Warm-up|Technique practice|Choreography|Cool-down'),
            ch('Dynamic movements are generally preferred…', '*in the warm-up|only after injury|never'),
          ],
          t: ['Why is rest part of training?', 'How can dance culture support healthy body image?'],
          k: ['Lead a group through a safe warm-up and explain each part.'],
          m: ['Personal Training Plan', 'notebook, reliable dance-science sources', 'Design a 15-minute warm-up and 10-minute cool-down | Create a weekly schedule with rest days | Explain alignment tips for your style | Review and adjust after two weeks'],
          q: [
            ch('Correct positioning of the body is…', '*alignment|abhinaya|attitude'),
            tf('Hydration and nutrition matter for dancers.', true),
            ch('Aramandi is a position in…', '*Bharatanatyam|ballet|samba'),
          ],
          ms: ['Designs safe sessions', 'Explains alignment', 'Prioritises wellbeing'],
        }),
      ]),
      U('dance-society', 'Dance in Society', 'Critique and meaning.', 'Analysing a dance work; Dance and identity; Dance, politics and wellbeing', [
        L('dance-analysis', 'Reading a Dance', {
          o: ['Analyse a dance work using structured criteria', 'Evaluate dance\'s roles in identity and social change'],
          p: ['Knows the elements of dance and Indian dance theory'],
          e: [
            'Dance analysis considers movement (using the elements of dance), choreographic structure, music, costume, lighting and context. Like art criticism, it moves from description to interpretation to evaluation.',
            'Dance expresses identity — national, regional, religious, gender. Choreographers such as Chandralekha (1928–2006) reimagined Bharatanatyam with yoga and martial arts to explore the body and gender; Pina Bausch\'s dance-theatre in Germany explored human relationships.',
            'Dance can be political — banned, revived or used in protest — and therapeutic: dance movement therapy is used to support mental and physical health.',
          ],
          v: 'dance-theatre = a form combining dance with theatrical elements; context = the circumstances surrounding a work; dance movement therapy = the therapeutic use of movement; interpretation = explaining meaning',
          x: ['Chandralekha\'s "Sharira".', 'Flash-mob dances used in public campaigns.'],
          s: ['Kalaripayattu on Stage', 'Audiences in the 1980s were startled by Chandralekha\'s dancers: slow, powerful movements drawn from yoga and Kerala\'s martial art Kalaripayattu, set against Bharatanatyam\'s geometry. Some critics were shocked; others hailed a new Indian modern dance. Her work asked: what can the dancing body say today?'],
          a: [
            mt('Match the choreographer', 'Chandralekha=reimagined Bharatanatyam|Pina Bausch=dance-theatre in Germany|Uday Shankar=blended Indian and Western stagecraft'),
            ch('Dance analysis considers…', '*movement, structure, music, design and context|only costumes|only the music'),
            tf('Dance movement therapy supports health.', true),
            ch('A form combining dance and theatre is…', '*dance-theatre|ballet only|aerobics'),
          ],
          t: ['Should classical forms change to speak to modern audiences?', 'How can dance express protest?'],
          k: ['Present an analysis of a dance work to a group.'],
          m: ['Dance Critique Essay', 'recordings of a dance work, scholarly sources', 'Choose a work and watch it several times | Analyse movement, structure, design and context | Research the choreographer\'s intentions | Write a 1500-word critique'],
          q: [
            ch('The circumstances surrounding a work are its…', '*context|costume|chorus'),
            tf('Chandralekha used yoga and martial arts in her work.', true),
            ch('Pina Bausch worked in…', '*Germany|India|Brazil'),
          ],
          ms: ['Analyses dance systematically', 'Evaluates social roles of dance', 'Supports claims with evidence'],
        }),
      ]),
    ]),
  ],
});
