import { subject, S, U, L, ch, tf, od, mt, ct } from '../dsl.ts';

export default subject({
  id: 'music',
  description: 'Music and rhythm from clapping games to composition: steady beat, loud and soft, high and low; instruments of India and the world; rhythm patterns and tala; melody and raga; reading notation; the Hindustani and Carnatic traditions alongside Western music; harmony, form and composing; and the science and cultural meaning of music.',
  stages: [
    S('s4', 'Beat, loud and soft, high and low: music through play.', [
      'Keep a steady beat', 'Hear and make loud and soft, high and low sounds', 'Sing simple songs and action rhymes',
    ], [
      U('beat', 'The Steady Beat', 'Music has a heartbeat.', 'Clapping the beat; Fast and slow; Body percussion', [
        L('steady-beat', 'Clap the Beat', {
          o: ['Clap or tap a steady beat to a song', 'Tell the difference between fast and slow music'],
          p: ['Can clap hands'],
          e: [
            'Most music has a steady beat, like a heartbeat or a clock ticking. We can clap, tap or march to the beat.',
            'Some music has a fast beat that makes us want to run and jump. Some has a slow beat that makes us want to sway or rest. How fast or slow music goes is called tempo.',
            'Our bodies are instruments too! We can clap, stamp, pat our knees and click our fingers. This is called body percussion.',
          ],
          v: 'beat = the steady pulse in music; tempo = how fast or slow music is; body percussion = making music with your body; march = to walk to a beat',
          x: ['Marching to a band.', 'Swaying slowly to a lullaby.'],
          s: ['The Elephant and the Mouse Band', 'Gaja the elephant walked with a slow, heavy beat: BOOM... BOOM... BOOM. Chinni the mouse scampered with a fast beat: tik-tik-tik-tik. When they played music together, Gaja kept the slow beat on his drum and Chinni tapped fast on a tiny bell. The jungle animals danced all night!'],
          a: [
            ch('A steady beat is like a…', '*heartbeat|sneeze|whisper'),
            ch('How fast or slow music goes is called…', '*tempo|colour|volume'),
            tf('You can make music with your body.', true),
            ct('Clap and count: 👏👏👏👏', 4),
          ],
          t: ['What music makes you want to run? What makes you want to rest?', 'What sounds can your body make?'],
          k: ['Clap the beat to a song and tell a grown-up if it is fast or slow.'],
          m: ['Body Band', 'just your body and a song', 'Choose a favourite song | Clap the beat | Try stamping, patting knees and clicking | Perform your body band for your family'],
          q: [
            ch('Stamping and clapping is called…', '*body percussion|painting|reading'),
            tf('A lullaby usually has a slow tempo.', true),
            ch('Which animal had a slow beat?', '*the elephant|the mouse|the bird'),
          ],
          ms: ['Keeps a steady beat', 'Distinguishes fast and slow', 'Uses body percussion'],
        }),
      ]),
      U('sounds', 'Loud, Soft, High and Low', 'Exploring sounds.', 'Loud and soft; High and low; Making sound shakers', [
        L('dynamics-pitch', 'Loud and Soft, High and Low', {
          o: ['Sing and play loudly and softly', 'Tell high sounds from low sounds'],
          p: ['Can keep a steady beat'],
          e: [
            'Sounds can be loud like a drum or soft like a whisper. In music, how loud or soft we play is called dynamics.',
            'Sounds can also be high like a bird\'s tweet or low like a lion\'s roar. How high or low a sound is, is called pitch.',
            'Small things often make higher sounds, and big things often make lower sounds — a small bell rings high, a big drum booms low.',
          ],
          v: 'loud = a big sound; soft = a quiet sound; pitch = how high or low a sound is; dynamics = how loud or soft music is',
          x: ['A whispering song at bedtime.', 'A tiny flute and a big tuba.'],
          s: ['The Sleeping Giant', 'Ivaan\'s class sang a song about a sleeping giant. When the giant was asleep, they sang softly: "Shhh, shhh." When the giant woke up, they sang LOUDLY with low, grumbly voices: "FEE FI FO FUM!" Then a little bird flew by and they sang high and sweet: "Tweet, tweet!" Everyone laughed.'],
          a: [
            mt('Match the sound', 'bird=high|lion=low|whisper=soft'),
            ch('How loud or soft music is, is called…', '*dynamics|pitch|tempo'),
            tf('A big drum usually makes a low sound.', true),
            ch('How high or low a sound is, is called…', '*pitch|loudness|beat'),
          ],
          t: ['When should we use soft voices?', 'Why do you think a big drum sounds low?'],
          k: ['Sing a song softly and then loudly for a grown-up.'],
          m: ['🧪 Shaker Sounds', 'small bottles or boxes, rice, beans, paper clips (with an adult)', 'Fill containers with different things | Seal them tightly | Shake loudly and softly | Sort them from highest to lowest sound'],
          q: [
            ch('A whisper is…', '*soft|loud|high only'),
            tf('A small bell usually rings high.', true),
            ch('A lion\'s roar is…', '*low|high|silent'),
          ],
          ms: ['Controls loud and soft', 'Identifies high and low pitch', 'Explores sound sources'],
        }),
      ]),
    ]),
    S('s5', 'Instruments of India and the world, and rhythm patterns.', [
      'Name instruments and their families', 'Clap and copy rhythm patterns', 'Sing songs from different cultures',
    ], [
      U('instruments', 'Instrument Families', 'Strings, winds, drums and more.', 'String instruments; Wind instruments; Percussion instruments', [
        L('instrument-families', 'How Instruments Make Sound', {
          o: ['Sort instruments into strings, wind and percussion', 'Name Indian and world instruments in each family'],
          p: ['Knows high and low sounds'],
          e: [
            'Instruments make sound by making something vibrate (shake very fast). String instruments have strings that are plucked, bowed or struck: the sitar, veena, violin and guitar.',
            'Wind instruments make sound when you blow air through them: the bansuri (bamboo flute), shehnai, trumpet and flute.',
            'Percussion instruments are hit, shaken or scraped: the tabla, dholak, mridangam, drums, cymbals and the ghatam (a clay pot!).',
          ],
          v: 'vibrate = to shake very fast; string instrument = an instrument with strings; wind instrument = an instrument you blow into; percussion = instruments you hit, shake or scrape',
          x: ['Plucking a sitar\'s strings.', 'Tapping a tabla.'],
          s: ['The Instrument Parade', 'At the music festival, Zuri watched a parade. First came the strings: a sitar player plucking twinkly notes. Then the winds: a shehnai player puffing his cheeks. Last came the percussion: dhol drummers BOOM-BOOMING. "Every family sounds different," Zuri said, "but together they make a band!"'],
          a: [
            mt('Match the instrument to its family', 'sitar=strings|bansuri=wind|tabla=percussion'),
            ch('Instruments make sound by…', '*vibrating|melting|sleeping'),
            tf('The ghatam is a clay pot used as a drum.', true),
            ch('Which is a wind instrument?', '*shehnai|veena|dholak'),
          ],
          t: ['Which instrument would you like to learn? Why?', 'How do you think a flute makes sound?'],
          k: ['Name one instrument from each family and show how it is played.'],
          m: ['🧪 Rubber Band Guitar', 'a box, rubber bands of different thickness (with an adult)', 'Stretch rubber bands over an open box | Pluck each one | Notice which sounds higher or lower | Feel the band vibrate'],
          q: [
            ch('The mridangam is a…', '*percussion instrument|string instrument|wind instrument'),
            tf('A violin is played with a bow.', true),
            ch('To shake very fast is to…', '*vibrate|whisper|float'),
          ],
          ms: ['Sorts instruments into families', 'Names Indian and world instruments', 'Explains vibration simply'],
        }),
      ]),
      U('rhythm', 'Rhythm Patterns', 'Long and short sounds.', 'Long and short; Echo clapping; Rhythm words', [
        L('rhythm-patterns', 'Ta, Ti-Ti and Rest', {
          o: ['Clap long and short sounds in a pattern', 'Copy and create simple rhythm patterns'],
          p: ['Can keep a steady beat'],
          e: [
            'Rhythm is the pattern of long and short sounds in music. The beat stays steady, but the rhythm changes.',
            'We can use rhythm words: "ta" for one sound on a beat, "ti-ti" for two quick sounds on a beat, and "shh" for a rest (silence).',
            'In Indian music, drummers learn rhythms by speaking syllables called bols, like "dha, dhin, na". Saying a rhythm helps us remember it.',
          ],
          v: 'rhythm = a pattern of long and short sounds; rest = a silence in music; echo = to copy back; bol = a spoken drum syllable in Indian music',
          x: ['Clapping "ta ta ti-ti ta".', 'A tabla player saying "dha dhin dhin dha".'],
          s: ['Echo Mountain', 'On Echo Mountain, Ivaan clapped "ta, ta, ti-ti, ta". From across the valley came back: "ta, ta, ti-ti, ta!" He clapped a harder one with a rest: "ti-ti, ta, shh, ta." Back it came perfectly. "The mountain is a good listener," he laughed. "Or maybe it\'s my sister hiding behind the rock!"'],
          a: [
            ch('Rhythm is a pattern of…', '*long and short sounds|colours|shapes'),
            ch('A silence in music is a…', '*rest|beat|song'),
            tf('Tabla players speak bols to learn rhythms.', true),
            od('Put the steps of echo clapping in order', 'Listen to the pattern|Remember it|Clap it back|Check if it matched'),
          ],
          t: ['Can you make a rhythm from your name?', 'Why might saying a rhythm help us remember it?'],
          k: ['Clap a rhythm and have a grown-up echo it back.'],
          m: ['Name Rhythms', 'paper, pencil', 'Say each family member\'s name and clap its syllables | Write long and short marks for each | Put names together into a rhythm piece | Perform it as a family'],
          q: [
            ch('"Ti-ti" means…', '*two quick sounds|one long sound|a rest'),
            tf('The beat stays steady while rhythm changes.', true),
            ch('To copy back is to…', '*echo|rest|vibrate'),
          ],
          ms: ['Claps rhythm patterns', 'Uses rhythm words and rests', 'Creates own rhythms'],
        }),
      ]),
    ]),
    S('s6', 'Melody, notes and the sargam; reading simple notation.', [
      'Sing the sargam and the do-re-mi scale', 'Recognise melody shapes', 'Read simple rhythm and pitch notation',
    ], [
      U('melody', 'Melody and Scales', 'Sa Re Ga Ma and Do Re Mi.', 'Sargam; Solfège; Melody going up and down', [
        L('sargam', 'Sa Re Ga Ma Pa Dha Ni', {
          o: ['Sing the sargam and solfège scales', 'Describe a melody as moving up, down or staying the same'],
          p: ['Knows high and low pitch'],
          e: [
            'A melody is a tune — a series of notes that go up, down or stay the same. A scale is a set of notes going up or down in order.',
            'In Indian music, the seven notes (swaras) are Sa, Re, Ga, Ma, Pa, Dha, Ni — called the sargam. In Western music, the notes are often sung Do, Re, Mi, Fa, So, La, Ti (solfège), or named C, D, E, F, G, A, B.',
            'After Ni (or Ti), the scale returns to a higher Sa (or Do) — the same note, but higher. This is called an octave.',
          ],
          v: 'melody = a tune; scale = notes going up or down in order; swara = a note in Indian music; octave = the distance from one note to the same note higher or lower',
          x: ['Singing Sa Re Ga Ma Pa Dha Ni Sa.', '"Do-Re-Mi" from a famous song.'],
          s: ['The Musical Staircase', 'Ivaan\'s music teacher drew a staircase on the board with seven steps. "Sa" was on the bottom step. As Ivaan sang Re, Ga, Ma, Pa, Dha, Ni, he climbed each step with his hand. At the top was another Sa, high and bright. "It\'s like the same friend, but standing on a chair!" Ivaan said.'],
          a: [
            od('Put the sargam in order', 'Sa|Re|Ga|Ma|Pa'),
            ch('How many main notes are in the sargam?', '*seven|five|twelve'),
            mt('Match the Indian note to the solfège note', 'Sa=Do|Re=Re|Ga=Mi'),
            tf('An octave goes from one note to the same note higher.', true),
          ],
          t: ['Does your favourite song\'s melody go up or down at the start?', 'Why do you think the scale returns to Sa?'],
          k: ['Sing the sargam going up and down for a grown-up.'],
          m: ['🧪 Water Glass Scale', 'eight glasses, water, a spoon (with an adult)', 'Fill glasses with different amounts of water | Tap each gently with a spoon | Arrange them from low to high | Play the sargam on your glasses'],
          q: [
            ch('A tune is called a…', '*melody|rest|rhythm'),
            tf('Swara means a note in Indian music.', true),
            ch('After Ni comes…', '*a higher Sa|Re|nothing'),
          ],
          ms: ['Sings scales', 'Describes melody shape', 'Explains the octave'],
        }),
      ]),
      U('notation', 'Writing Music Down', 'Reading notes.', 'Note values; The staff; Indian notation', [
        L('note-values', 'Reading Notes', {
          o: ['Read and clap note values: whole, half, quarter and eighth notes', 'Identify notes on the staff'],
          p: ['Can clap rhythm patterns'],
          e: [
            'Music can be written down so others can play it. In Western notation, a quarter note gets one beat, a half note gets two beats, a whole note gets four beats, and two eighth notes share one beat.',
            'Notes are written on a staff — five lines and four spaces. The higher a note sits, the higher its pitch. A treble clef at the start shows higher notes.',
            'Indian music has its own notation systems, such as the Bhatkhande system for Hindustani music, which writes swaras using letters. But much Indian music has traditionally been learned by ear from a guru.',
          ],
          v: 'notation = a way of writing music; staff = five lines on which notes are written; quarter note = a note worth one beat; clef = a symbol that shows the pitch range of the staff',
          x: ['Two half notes filling a bar of four beats.', 'Learning a raga by listening to a guru.'],
          s: ['The Secret Code', 'Zuri found an old sheet of paper covered in dots and lines in her grandfather\'s cupboard. "It\'s a secret code!" she said. Her grandfather laughed and played it on his harmonium — it was his favourite song from when he was a boy. "Music writing lets songs travel through time," he said.'],
          a: [
            mt('Match the note to its beats', 'whole note=4 beats|half note=2 beats|quarter note=1 beat'),
            ch('The staff has how many lines?', '*five|three|ten'),
            ct('How many beats in two half notes?', 4),
            tf('Much Indian music has traditionally been learned by ear.', true),
          ],
          t: ['What are the advantages of writing music down?', 'What might be lost when music is only written, not heard?'],
          k: ['Read and clap a four-beat rhythm from notation.'],
          m: ['Compose a Rhythm Card', 'card, pencil', 'Draw four boxes for four beats | Fill them with quarter, half or eighth notes | Clap your rhythm | Swap cards with a friend and clap theirs'],
          q: [
            ch('A way of writing music is…', '*notation|nutrition|navigation'),
            tf('Higher notes sit higher on the staff.', true),
            ch('Two eighth notes together equal…', '*one beat|four beats|no beats'),
          ],
          ms: ['Reads note values', 'Identifies staff positions', 'Compares notation systems'],
        }),
      ]),
    ]),
    S('s7', 'Indian classical music: raga, tala and the two great traditions.', [
      'Explain raga and tala', 'Compare Hindustani and Carnatic music', 'Recognise great musicians and their contributions',
    ], [
      U('raga-tala', 'Raga and Tala', 'The heart of Indian classical music.', 'What is a raga; Tala cycles; Teentaal and Adi tala', [
        L('raga-tala', 'Melody Moods and Rhythm Cycles', {
          o: ['Explain what a raga and a tala are', 'Count a tala cycle with claps and waves'],
          p: ['Knows the sargam and rhythm'],
          e: [
            'A raga is a melodic framework: a set of notes with rules for how to move up (aroha) and down (avaroha), characteristic phrases and a mood (rasa). Many ragas are traditionally linked to times of day or seasons — Raga Bhairav to the morning, Raga Yaman to the evening.',
            'A tala is a rhythmic cycle that repeats. Teentaal, common in Hindustani music, has 16 beats divided into four sections of four. The first beat, called sam, is the most important — musicians often meet there with a flourish.',
            'In Carnatic music, Adi tala has 8 beats. Musicians keep tala with claps, finger counts and waves of the hand.',
          ],
          v: 'raga = a melodic framework with rules and mood; tala = a repeating rhythmic cycle; sam = the first and most important beat of a tala; aroha = the ascending pattern of a raga',
          x: ['Raga Yaman sung in the evening.', 'A tabla player landing on sam with a smile.'],
          s: ['Meeting at Sam', 'At a concert, Ivaan watched the sitar player and the tabla player improvise for many minutes. Their patterns grew wilder and more complex. Then, together, they landed on the first beat — DHA! — and the audience burst into "Wah!" "That\'s sam," his father whispered. "They planned to meet there all along."'],
          a: [
            ch('Teentaal has how many beats?', '*16|8|3'),
            ch('The first beat of a tala is called…', '*sam|raga|aroha'),
            mt('Match the term', 'raga=melodic framework|tala=rhythmic cycle|aroha=ascending pattern|rasa=mood'),
            tf('Many ragas are linked to times of day.', true),
          ],
          t: ['Why might a raga be linked to a time of day?', 'How is a tala like a clock?'],
          k: ['Clap and count one cycle of Teentaal for a listener.'],
          m: ['Raga Listening Journal', 'recordings of Raga Bhairav and Raga Yaman, notebook', 'Listen to a morning and an evening raga | Write the mood each creates | Clap along to find the tala | Compare your notes'],
          q: [
            ch('Adi tala has how many beats?', '*8|16|12'),
            tf('A raga has rules for ascending and descending.', true),
            ch('Raga Yaman is traditionally sung in the…', '*evening|morning|afternoon only'),
          ],
          ms: ['Explains raga and tala', 'Counts tala cycles', 'Describes raga moods'],
        }),
      ]),
      U('two-traditions', 'Hindustani and Carnatic', 'Two great traditions.', 'Hindustani music; Carnatic music; Great musicians', [
        L('two-traditions', 'Two Rivers of Music', {
          o: ['Compare the Hindustani and Carnatic traditions', 'Describe the contributions of great musicians'],
          p: ['Knows raga and tala'],
          e: [
            'Indian classical music has two main traditions. Hindustani music, mainly from North India, uses instruments like the sitar, sarod, tabla and bansuri, and forms such as khayal and dhrupad. It was shaped by both Hindu and Persian influences in royal courts.',
            'Carnatic music, mainly from South India, uses the veena, violin, mridangam and ghatam. It is largely based on compositions (kritis); the "Trinity" of Tyagaraja, Muthuswami Dikshitar and Syama Sastri composed many in the 18th–19th centuries.',
            'Great musicians include Bharat Ratna awardees Pandit Ravi Shankar (sitar), M. S. Subbulakshmi (Carnatic vocal), Ustad Bismillah Khan (shehnai) and Pandit Bhimsen Joshi (Hindustani vocal).',
          ],
          v: 'Hindustani = the North Indian classical tradition; Carnatic = the South Indian classical tradition; kriti = a Carnatic composition; gharana = a family or school of Hindustani music',
          x: ['A khayal performance by a vocalist of the Kirana gharana.', 'A Tyagaraja kriti sung at a Carnatic concert.'],
          s: ['Music at the Ganga', 'Every morning for decades, Ustad Bismillah Khan played his shehnai near the ghats of Varanasi. People said the river itself seemed to listen. In 1947, he played at the Red Fort on the eve of India\'s independence. In 2001 he received the Bharat Ratna, India\'s highest civilian honour.'],
          a: [
            mt('Match the musician to the instrument or style', 'Ravi Shankar=sitar|Bismillah Khan=shehnai|M. S. Subbulakshmi=Carnatic vocal|Bhimsen Joshi=Hindustani vocal'),
            ch('Carnatic music comes mainly from…', '*South India|North India|Europe'),
            tf('Tyagaraja is one of the Carnatic "Trinity".', true),
            ch('A family or school of Hindustani music is a…', '*gharana|kriti|tala'),
          ],
          t: ['Why might two traditions develop differently in North and South India?', 'Which tradition\'s sound do you prefer? Why?'],
          k: ['Present a comparison of the two traditions with one listening example each.'],
          m: ['Compare-and-Listen Chart', 'recordings, chart paper', 'Listen to one Hindustani and one Carnatic piece | Compare instruments, voice style and rhythm | Make a Venn diagram | Present your findings'],
          q: [
            ch('A Carnatic composition is a…', '*kriti|gharana|sam'),
            tf('Hindustani music was shaped by Hindu and Persian influences.', true),
            ch('The sarod is used mainly in…', '*Hindustani music|Carnatic music|jazz only'),
          ],
          ms: ['Compares the two traditions', 'Describes great musicians accurately', 'Listens analytically'],
        }),
      ]),
    ]),
    S('s9', 'Harmony, form and composition across musical cultures.', [
      'Understand chords and harmony', 'Analyse musical form', 'Compose an original piece',
    ], [
      U('harmony', 'Harmony and Chords', 'Notes sounding together.', 'Chords; Major and minor; Harmony vs. drone', [
        L('chords', 'Major, Minor and the Drone', {
          o: ['Build major and minor chords', 'Compare Western harmony with the Indian drone'],
          p: ['Can read the staff and scales'],
          e: [
            'Harmony is when different notes sound together. A chord is three or more notes played at once. A major chord (C–E–G) often sounds bright; a minor chord (C–E♭–G) often sounds darker or sadder — though such feelings are partly learned through culture.',
            'Western music developed complex harmony, with chord progressions such as I–IV–V–I that underlie many songs.',
            'Indian classical music focuses on melody over a drone — a continuous note (often Sa and Pa) played by the tanpura. Instead of changing chords, the melody explores the raga against this steady background.',
          ],
          v: 'harmony = notes sounding together; chord = three or more notes played at once; drone = a continuous sustained note; progression = a sequence of chords',
          x: ['A guitar strumming C, F and G chords.', 'The tanpura humming behind a vocalist.'],
          s: ['The Tanpura\'s Hum', 'Before her concert, the singer tuned her tanpura until its four strings shimmered together in a soft, endless hum. "Why no chords?" asked a Western visitor. "The tanpura is the sky," she smiled, "and my voice is the bird. The sky doesn\'t need to change for the bird to fly."'],
          a: [
            ch('A chord is…', '*three or more notes played together|one note|a rest'),
            ch('The tanpura plays a…', '*drone|melody only|drum pattern'),
            tf('Feelings about major and minor are partly learned through culture.', true),
            mt('Match the term', 'harmony=notes together|progression=sequence of chords|drone=sustained note'),
          ],
          t: ['Why do you think minor chords sound sad to many listeners?', 'What does a drone give to melody?'],
          k: ['Explain the difference between harmony and a drone with examples.'],
          m: ['Chord Explorer', 'a keyboard app or instrument', 'Play C major and C minor | Describe the mood of each | Play a I–IV–V–I progression | Sing a melody over a drone and compare'],
          q: [
            ch('C–E–G is a…', '*major chord|minor chord|drone'),
            tf('Indian classical music focuses on melody over a drone.', true),
            ch('A sequence of chords is a…', '*progression|percussion|pitch'),
          ],
          ms: ['Builds chords', 'Compares harmonic systems', 'Discusses cultural perception'],
        }),
      ]),
      U('composition', 'Form and Composition', 'Shaping music.', 'Verse and chorus; Alap-jor-jhala; Composing a piece', [
        L('form', 'The Shape of a Piece', {
          o: ['Analyse common musical forms', 'Compose an original piece with clear form'],
          p: ['Knows harmony and raga'],
          e: [
            'Form is the structure of a piece. Many songs use verse–chorus form: verses tell the story with changing words; the chorus repeats. Other forms include ABA (ternary) and rondo (ABACA).',
            'A Hindustani instrumental raga performance often follows alap (slow, free exploration without rhythm), jor (adding pulse), jhala (fast, exciting) and then a composition (gat) with tabla.',
            'Composers plan contrast and repetition. Repetition helps listeners remember; contrast keeps them interested.',
          ],
          v: 'form = the structure of a piece of music; chorus = the repeated section of a song; alap = the slow opening of a raga performance; ternary = ABA form',
          x: ['A pop song: verse, chorus, verse, chorus, bridge, chorus.', 'A sitar recital beginning with a long alap.'],
          s: ['The Song That Wouldn\'t Leave', 'Kiko wrote a song with five verses and no chorus. His friends forgot it immediately. Then he added a catchy chorus between each verse. The next day, the whole class was humming it. "Repetition is a hook," his teacher said, "and contrast is the journey."'],
          a: [
            od('Put a raga performance in order', 'alap|jor|jhala|gat with tabla'),
            mt('Match the form', 'ABA=ternary|ABACA=rondo|verse-chorus=popular song form'),
            tf('Repetition helps listeners remember music.', true),
            ch('The slow, free opening of a raga performance is the…', '*alap|jhala|chorus'),
          ],
          t: ['Why do so many songs use choruses?', 'How does an alap prepare listeners?'],
          k: ['Present your composition and explain its form.'],
          m: ['Compose a Piece', 'an instrument or music app, notation paper', 'Choose a form (verse-chorus or ABA) | Compose a melody for each section | Add rhythm or chords | Perform or record it and write a short programme note'],
          q: [
            ch('The repeated section of a song is the…', '*chorus|verse|bridge'),
            tf('Jhala is fast and exciting.', true),
            ch('Ternary form is…', '*ABA|AB|ABACA'),
          ],
          ms: ['Analyses forms', 'Composes with clear structure', 'Explains compositional choices'],
        }),
      ]),
    ]),
    S('s12', 'The science and meaning of music.', [
      'Explain the physics of sound and tuning', 'Analyse music\'s cultural and social roles', 'Research music cognition',
    ], [
      U('acoustics', 'The Science of Sound', 'Acoustics and tuning.', 'Frequency and pitch; Harmonics; Tuning systems', [
        L('acoustics', 'Frequency, Harmonics and Tuning', {
          o: ['Relate frequency to pitch and explain harmonics', 'Compare tuning systems'],
          p: ['Knows scales and chords'],
          e: [
            'Sound is a vibration travelling through air. Its frequency (vibrations per second, measured in hertz, Hz) determines pitch. The note A above middle C is commonly tuned to 440 Hz; doubling the frequency gives the octave above (880 Hz).',
            'Most instruments produce a fundamental frequency plus harmonics (overtones) at whole-number multiples. The mix of harmonics gives each instrument its timbre — why a sitar and a flute sound different on the same note. The sitar\'s jawari bridge creates a buzzing richness of overtones.',
            'Tuning systems vary. Western music mostly uses 12-tone equal temperament, dividing the octave into 12 equal semitones. Indian music uses just intonation based on natural ratios, and theory describes 22 shrutis (microtones) in the octave.',
          ],
          v: 'frequency = vibrations per second; hertz = the unit of frequency; timbre = the tone colour of a sound; shruti = a microtonal interval in Indian music theory',
          x: ['A guitar string vibrating at 110 Hz for low A.', 'The tanpura\'s buzzing jawari.'],
          s: ['Pythagoras and the Blacksmith', 'An old legend says Pythagoras heard hammers in a blacksmith\'s shop ringing in harmony and discovered that pleasing intervals came from simple ratios like 2:1 and 3:2. Historians doubt the story — hammers don\'t work that way — but the ratios themselves were really studied by Greek and Indian thinkers alike.'],
          a: [
            ch('If A is 440 Hz, the octave above is…', '*880 Hz|220 Hz|441 Hz'),
            ch('Timbre is…', '*the tone colour of a sound|the speed|the loudness'),
            tf('Equal temperament divides the octave into 12 equal semitones.', true),
            mt('Match the term', 'frequency=vibrations per second|harmonics=whole-number multiples|shruti=microtone'),
          ],
          t: ['Why does a sitar sound different from a flute on the same note?', 'What is gained and lost with equal temperament?'],
          k: ['Explain harmonics and timbre to a group using a demonstration.'],
          m: ['🧪 Sound Spectrum Investigation', 'a free spectrum-analyser app, several instruments or voices', 'Record the same note on different instruments | View their spectrums | Identify the fundamental and harmonics | Write a lab report comparing timbres'],
          q: [
            ch('Frequency is measured in…', '*hertz|metres|grams'),
            tf('Indian theory describes 22 shrutis.', true),
            ch('Doubling the frequency raises pitch by…', '*an octave|a semitone|nothing'),
          ],
          ms: ['Relates frequency and pitch', 'Explains timbre via harmonics', 'Compares tuning systems'],
        }),
      ]),
      U('music-society', 'Music, Mind and Society', 'Why humans make music.', 'Music and the brain; Music and identity; Music and protest', [
        L('music-meaning', 'Why Humans Make Music', {
          o: ['Evaluate theories about music\'s origins and effects', 'Analyse music\'s roles in identity and social movements'],
          p: ['Knows musical traditions'],
          e: [
            'Every known human culture makes music. Scientists debate why: theories include social bonding, communication between parents and infants, and courtship. Brain imaging shows music activates areas for emotion, movement and memory; music therapy is used to help people with conditions such as stroke and dementia.',
            'Music expresses identity — national anthems, devotional songs, regional folk music. "Jana Gana Mana", written by Rabindranath Tagore, was adopted as India\'s national anthem in 1950.',
            'Music has powered social movements: "Vande Mataram" in India\'s freedom struggle, "We Shall Overcome" in the US civil rights movement, and songs against apartheid in South Africa.',
          ],
          v: 'music therapy = using music to support health; anthem = a song representing a group or nation; identity = a sense of who you are and belong with; cognition = mental processes such as thinking and memory',
          x: ['Singing together at a festival.', 'Protest songs at marches.'],
          s: ['The Song in the Hospital', 'A man who had lost his speech after a stroke could not say "good morning". But when a music therapist began a familiar song, he sang along, word for word. Researchers think singing uses brain networks partly different from speech — one reason music therapy can help.'],
          a: [
            ch('"Jana Gana Mana" was written by…', '*Rabindranath Tagore|Ravi Shankar|Tyagaraja'),
            mt('Match the song to the movement', 'Vande Mataram=Indian freedom struggle|We Shall Overcome=US civil rights|freedom songs=anti-apartheid'),
            tf('Every known human culture makes music.', true),
            ch('Using music to support health is…', '*music therapy|music theory|music piracy'),
          ],
          t: ['Why do you think every culture makes music?', 'Can music change society?'],
          k: ['Present an analysis of a protest song and its impact.'],
          m: ['Music and Society Research Essay', 'scholarly sources, recordings', 'Choose a question (e.g. music in a social movement) | Research historical and scientific sources | Analyse two songs in depth | Write a 2000-word essay'],
          q: [
            ch('Mental processes such as memory are called…', '*cognition|composition|conduction'),
            tf('India adopted its national anthem in 1950.', true),
            ch('A song representing a nation is an…', '*anthem|aria|album'),
          ],
          ms: ['Evaluates theories of music', 'Analyses social roles', 'Uses evidence from research'],
        }),
      ]),
    ]),
  ],
});
