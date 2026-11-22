import { subject, S, U, L, ch, tf, od, mt } from '../dsl.ts';

export default subject({
  id: 'mindfulness',
  description: 'Attention, calm and self-awareness through secular, age-appropriate practices: breathing, noticing with the senses, body scans, focus, gratitude, managing screens and sleep, and an introduction to contemplative traditions and the science of attention. Practices are optional, gentle and never forced.',
  stages: [
    S('s4', 'Breathing games and quiet noticing.', [
      'Take slow breaths using fun images', 'Sit quietly and notice sounds', 'Use calm breathing when upset',
    ], [
      U('breathing-games', 'Breathing Games', 'Fun ways to breathe slowly.', 'Balloon belly; Smell the flower, blow the candle; Bunny breaths; Star breathing', [
        L('balloon-belly', 'Balloon Belly', {
          o: ['Do slow belly breathing using an imaginary balloon', 'Notice how slow breathing makes the body feel'],
          p: ['Can sit still for a short time'],
          e: [
            'Mindful breathing means noticing your breath. Put your hands on your tummy. Breathe in slowly through your nose and feel your tummy grow like a balloon.',
            'Breathe out slowly through your mouth and feel the balloon go down. Try it three times.',
            'Slow breathing helps our bodies feel calm and our minds feel clear — like letting a snow globe settle.',
          ],
          v: 'breathe = take air in and out; slow = not fast; calm = peaceful and quiet; notice = pay attention to',
          x: ['Smell a flower (breathe in), blow out a candle (breathe out).', 'Bunny breaths: three quick sniffs in, one long breath out.'],
          s: ['Pala\'s Bubble Breath', 'Pala the dolphin taught the little fish a game. "Breathe in slowly and fill your tummy like a big bubble," said Pala. "Now let it out slowly, slowly." The little fish who had been zooming around in a panic floated gently. "I feel calm now," whispered the smallest fish.'],
          a: [
            od('Balloon belly breathing', 'hands on tummy|breathe in slowly through your nose|feel your tummy grow|breathe out slowly'),
            ch('Slow breathing helps us feel…', '*calm|angry|hungry'),
            tf('We can breathe in by "smelling a flower".', true),
            ch('When breathing in, your tummy…', '*gets bigger|disappears|turns blue'),
          ],
          t: ['How does your body feel after three slow breaths?', 'When could you use balloon breathing?'],
          k: ['Teach a grown-up balloon belly breathing.'],
          m: ['Breathing Buddy', 'a small soft toy, a mat or bed', 'Lie down and put a soft toy on your tummy | Breathe slowly and watch it rise and fall | Count five breaths | Tell a grown-up how you feel afterwards'],
          q: [
            ch('Breathe out slowly like…', '*blowing out a candle|a sneeze|a shout'),
            tf('Slow breathing can help us feel calm.', true),
            ch('In balloon breathing we breathe in through our…', '*nose|ears|toes'),
          ],
          ms: ['Performs slow belly breathing', 'Describes calming effects', 'Uses breathing when upset with prompts'],
        }),
      ]),
      U('quiet-noticing', 'Quiet Noticing', 'Using our senses to notice right now.', 'Listening game; Looking closely; Mindful eating: a raisin', [
        L('listening-game', 'The Listening Game', {
          o: ['Sit quietly and notice sounds', 'Describe what they noticed'],
          p: ['Knows the five senses'],
          e: [
            'Mindfulness means paying attention to right now, gently and kindly. One way is to listen very carefully.',
            'Close your eyes (or look down), sit still and listen. What sounds can you hear? A bird? A fan? Your own breath? Count them on your fingers.',
            'When your mind wanders off, that\'s okay — just gently come back to listening. Noticing helps us feel calm and focused.',
          ],
          v: 'mindfulness = paying attention to right now; notice = pay attention to; wander = drift away; focus = keep attention on one thing',
          x: ['Hearing a crow, a scooter and a ticking clock.', 'Eating a raisin slowly and noticing its taste and texture.'],
          s: ['Olu\'s One-Minute Quiet', 'Olu the owl said, "Let\'s be still for one minute and listen." Everyone closed their eyes. Kiko heard leaves rustling. Momo heard a far-away bell. Zuri heard her own heart. When the minute was over, they all felt peaceful. "The world is full of sounds we usually miss," hooted Olu.'],
          a: [
            ch('Mindfulness means…', '*paying attention to right now|thinking about tomorrow|being noisy'),
            ch('If your mind wanders off, you should…', '*gently come back|give up|feel bad'),
            tf('We can notice sounds by being still.', true),
            ch('Eating mindfully means…', '*eating slowly and noticing the taste|eating very fast|not tasting'),
          ],
          t: ['What sound surprised you when you listened carefully?', 'Is it hard to keep still? Why?'],
          k: ['Do a one-minute listening game with a grown-up and share what you each heard.'],
          m: ['Mindful Raisin (or Grape)', 'one raisin or grape, a quiet moment', 'Look at the raisin closely — colour and wrinkles | Smell it | Put it on your tongue without chewing | Chew slowly and notice the taste | Tell someone what you noticed'],
          q: [
            ch('To play the listening game, we…', '*sit still and listen|run around|sing loudly'),
            tf('It\'s okay if our mind wanders.', true),
            ch('Noticing helps us feel…', '*calm and focused|wild|sleepy forever'),
          ],
          ms: ['Sits quietly for a short practice', 'Describes noticed sensations', 'Returns attention gently'],
        }),
      ]),
    ]),
    S('s5', 'Body awareness and calm spaces.', [
      'Do a simple body scan', 'Use a calm space', 'Notice thoughts as passing clouds',
    ], [
      U('body-scan', 'Body Scan', 'Noticing each part of the body.', 'Head to toe noticing; Tense and relax; Sleepy-time relaxation', [
        L('head-to-toe', 'Head to Toe', {
          o: ['Do a simple guided body scan', 'Use tense-and-relax to let go of tension'],
          p: ['Does balloon breathing'],
          e: [
            'A body scan is like a gentle torch moving slowly from your head to your toes, noticing how each part feels: warm, cool, tight, relaxed, tingly.',
            'Tense and relax: squeeze your hands into fists for three seconds, then let go. Feel the difference. Try with shoulders, face and feet.',
            'A body scan before bed can help you relax and fall asleep.',
          ],
          v: 'body scan = noticing each part of the body in turn; tense = squeeze tight; relax = let go and become loose; tension = tightness in the body',
          x: ['Noticing your shoulders are tight and letting them drop.', 'Wiggling your toes and noticing how they feel.'],
          s: ['Spaghetti Bear', 'Momo couldn\'t sleep. Mama Bear said, "Let\'s turn into spaghetti!" First Momo was uncooked spaghetti — stiff and tight from head to toe. Then cooked spaghetti — soft, floppy and relaxed. They moved down the body, letting each part go floppy. By the toes, Momo was fast asleep.'],
          a: [
            od('Body scan order', 'head|shoulders|arms and hands|tummy|legs|feet and toes'),
            ch('After tensing your fists, you…', '*let go and relax|keep squeezing forever|shout'),
            tf('A body scan can help us fall asleep.', true),
            ch('Relax means…', '*let go and become loose|squeeze tight|run fast'),
          ],
          t: ['Where in your body do you hold tightness when you are worried?', 'How does your body feel after the spaghetti game?'],
          k: ['Lead a grown-up through the spaghetti game.'],
          m: ['Bedtime Body Scan Routine', 'a bed or mat', 'At bedtime, lie down comfortably | Move attention slowly from head to toes | Tense and relax each part | Notice how you feel and how fast you fall asleep; try it for a week'],
          q: [
            ch('A body scan moves attention…', '*slowly through the body|only to your nose|very fast'),
            tf('Tensing then relaxing helps us notice tension.', true),
            ch('Floppy spaghetti is…', '*relaxed|tense|angry'),
          ],
          ms: ['Follows a guided body scan', 'Uses tense-and-relax', 'Applies relaxation at bedtime'],
        }),
      ]),
      U('thought-clouds', 'Thoughts Are Like Clouds', 'Watching thoughts come and go.', 'Thoughts pass by; Not every thought is true; Calm corner and glitter jar', [
        L('cloud-watching', 'Cloud-Watching Thoughts', {
          o: ['Notice thoughts without getting carried away', 'Understand that thoughts come and go'],
          p: ['Sits quietly and notices'],
          e: [
            'Our minds are full of thoughts, like clouds drifting across the sky. Some are happy, some worried, some silly.',
            'In mindfulness, we can watch thoughts float by without jumping on them. We notice, "Oh, there\'s a worry cloud," and let it drift away.',
            'Thoughts are not always true. "Everyone hates me" is a cloud, not a fact. The sky — your calm mind — is always there behind the clouds.',
          ],
          v: 'thought = an idea or words in your mind; drift = move slowly; worry = an anxious thought; fact = something that is true',
          x: ['Noticing "I\'m going to fail" as a worry cloud.', 'Letting a silly thought float by and coming back to your breath.'],
          s: ['Kiko\'s Worry Clouds', 'Before the school play, Kiko lay on the grass. Thoughts kept coming: "What if I forget my lines?" Tara said, "Watch them like clouds." Kiko imagined each worry as a grey cloud drifting past. Behind them was the big blue sky. Kiko took a breath and felt ready.'],
          a: [
            ch('Thoughts are like…', '*clouds that come and go|rocks that never move|walls'),
            ch('"Everyone hates me" is…', '*a thought, not a fact|definitely true|a rule'),
            tf('We can notice a thought without following it.', true),
            ch('Behind the clouds, the sky is like…', '*your calm mind|a storm|a test'),
          ],
          t: ['Have you ever believed a thought that wasn\'t true?', 'What kinds of thought clouds visit you most?'],
          k: ['Describe a worry cloud to a grown-up and imagine it drifting away.'],
          m: ['Thought Cloud Jar', 'a clear jar, water, glitter, cotton wool clouds drawn on paper', 'Make a glitter jar | Draw some thought clouds and label them | Shake the jar and watch thoughts swirl | Breathe slowly as the glitter settles and the water clears'],
          q: [
            tf('Thoughts are always true.', false),
            ch('When a worry comes, you can…', '*notice it and let it drift|panic|hide'),
            ch('A calm mind is like…', '*a clear sky|a storm|a traffic jam'),
          ],
          ms: ['Observes thoughts nonjudgementally', 'Distinguishes thoughts from facts', 'Uses imagery to settle'],
        }),
      ]),
    ]),
    S('s6', 'Focus, gratitude and kindness practices.', [
      'Practise focusing attention', 'Keep a gratitude practice', 'Practise loving-kindness wishes',
    ], [
      U('focus', 'Focus Muscles', 'Attention grows with practice.', 'Focusing on one thing; Distractions; Single-tasking vs multitasking', [
        L('attention-gym', 'The Attention Gym', {
          o: ['Practise sustained attention', 'Explain why single-tasking helps learning'],
          p: ['Notices thoughts'],
          e: [
            'Attention is like a muscle: it gets stronger with practice. Focusing on one thing — your breath, a candle flame (with an adult), or a sound — trains it.',
            'Distractions pull attention away: phones, noise, wandering thoughts. Each time you notice and come back, it\'s like one "rep" at the gym.',
            'Studies suggest that switching between tasks often slows us down and causes more mistakes than doing one thing at a time. Single-tasking helps us learn better.',
          ],
          v: 'attention = focusing the mind on something; distraction = something that pulls attention away; single-tasking = doing one thing at a time; concentrate = focus hard',
          x: ['Doing homework with the TV off.', 'Counting breaths to ten and starting again if you lose count.'],
          s: ['The Juggling Robot', 'Bolt tried to do homework, watch a video and chat all at once. The homework had many mistakes! The next day, Bolt did homework alone, then watched a video, then chatted. "One thing at a time," Bolt beeped, "and everything goes better."'],
          a: [
            ch('Attention gets stronger with…', '*practice|ignoring it|more distractions'),
            ch('Each time you notice your mind wandering and come back is…', '*a "rep" for your attention muscle|a failure|cheating'),
            tf('Single-tasking can help us learn better.', true),
            ch('Which helps concentration while studying?', '*a quiet space without a phone|loud TV|switching tasks constantly'),
          ],
          t: ['What distracts you most?', 'Why do you think phones are so distracting?'],
          k: ['Count your breaths to ten with a grown-up and share how many times your mind wandered.'],
          m: ['🧪 Focus Experiment', 'a simple worksheet (puzzle or sums), a timer', 'Do one worksheet with distractions (TV on) and time it | Do a similar one in a quiet space | Compare time and mistakes | Write what you discovered'],
          q: [
            ch('Doing one thing at a time is…', '*single-tasking|multitasking|daydreaming'),
            tf('Distractions can cause more mistakes.', true),
            ch('A good way to train attention:', '*counting breaths|scrolling quickly|switching tasks every minute'),
          ],
          ms: ['Sustains attention for short periods', 'Notices and returns from distraction', 'Applies single-tasking'],
        }),
      ]),
      U('gratitude-kindness', 'Gratitude and Kind Wishes', 'Practices that grow positive feelings.', 'Three good things; Gratitude letters; Loving-kindness wishes', [
        L('three-good-things', 'Three Good Things', {
          o: ['Practise noticing three good things each day', 'Practise sending kind wishes to self and others'],
          p: ['Expresses gratitude'],
          e: [
            'Our brains often notice problems more than good things. A "three good things" practice trains us to notice the good: each evening, recall three good things from the day and why they happened.',
            'Kind wishes practice: quietly wish "May I be happy. May I be safe. May I be healthy." Then send the same wishes to someone you love, to someone you don\'t know well, and even to someone you find difficult.',
            'These practices, drawn from psychology and contemplative traditions, have been linked in some studies to greater wellbeing and kindness.',
          ],
          c: [['tradition', 'Loving-kindness practice (metta in Pali, maitri in Sanskrit) comes from Buddhist tradition and is now also taught in secular settings.'], ['interpretation', 'Research on gratitude and kindness practices shows encouraging but mixed results; effects vary between people.']],
          v: 'gratitude = feeling thankful; wish = hope for something good; well-being = feeling good and healthy; metta = loving-kindness',
          x: ['"A friend shared lunch, the rain stopped for play, Grandma called."', '"May my little sister be happy."'],
          s: ['The Gratitude Pebbles', 'Each evening, Zuri put a pebble in a jar for every good thing that happened. One grumpy day she thought she\'d have none — but she remembered a friend\'s joke, a tasty dal and a beautiful sunset. Three pebbles. "Even grumpy days have good bits," she smiled.'],
          a: [
            ch('"Three good things" means…', '*noticing three good things each day|complaining three times|winning three games'),
            ch('A kind wish:', '*"May you be happy."|"I hope you lose."|"Go away."'),
            tf('Our brains often notice problems more than good things.', true),
            ch('Metta (maitri) means…', '*loving-kindness|anger|silence'),
          ],
          t: ['Why might it be hard to send kind wishes to someone you\'re cross with?', 'How do you feel after remembering good things?'],
          k: ['Share your three good things at dinner and ask others for theirs.'],
          m: ['Gratitude Letter', 'paper, pen, an envelope', 'Think of someone who helped you | Write a letter explaining what they did and how it helped | Read it to them or post it | Notice how you both feel'],
          q: [
            tf('Kind wishes can be sent to people we find difficult.', true),
            ch('Gratitude practice trains us to notice…', '*good things|only problems|nothing'),
            ch('Loving-kindness practice comes from…', '*Buddhist tradition, now also taught secularly|a cooking show|maths'),
          ],
          ms: ['Keeps a gratitude practice', 'Practises kind wishes', 'Describes effects on mood'],
        }),
      ]),
    ]),
    S('s7', 'Mindfulness for stress, sleep and screens.', [
      'Use mindfulness to manage stress', 'Build healthy sleep habits', 'Use technology mindfully',
    ], [
      U('sleep', 'Sleep Well', 'Why sleep matters and how to get it.', 'Sleep needs by age; Sleep and memory; Bedtime routines; Screens and sleep', [
        L('sleep-science', 'The Science of Sleep', {
          o: ['Explain why sleep matters for body and brain', 'Design a healthy bedtime routine'],
          p: ['Does a body scan'],
          e: [
            'Sleep isn\'t wasted time — during sleep the brain stores memories, the body grows and repairs, and emotions are processed. Children aged 6–12 typically need about 9–12 hours; teenagers about 8–10 hours.',
            'Too little sleep affects mood, attention, learning and health.',
            'A bedtime routine helps: the same bedtime each night, a calm wind-down (reading, a body scan), a dark, cool room, and no screens for about an hour before bed, since bright screens and exciting content can delay sleep.',
          ],
          c: [['science', 'Paediatric sleep guidelines (for example, from the American Academy of Sleep Medicine) recommend 9–12 hours for children aged 6–12 and 8–10 hours for teenagers aged 13–18.']],
          v: 'sleep routine = the same steps each night before bed; memory = information the brain stores; wind-down = calming activities before sleep; melatonin = a hormone that helps us feel sleepy',
          x: ['Reading a book instead of watching videos before bed.', 'Waking at a similar time even on weekends.'],
          s: ['The Test After the Late Night', 'Arjun stayed up late gaming before a test and felt foggy and grumpy the next day. Before the next test, he went to bed on time after reading and a body scan. He felt clearer and remembered more. "Sleep was studying I didn\'t know I was doing," he joked.'],
          a: [
            ch('During sleep, the brain…', '*stores memories|switches off completely|forgets everything'),
            ch('Children aged 6–12 typically need about…', '4–5 hours|*9–12 hours|15–16 hours'),
            od('A healthy bedtime routine', 'screens off about an hour before bed|calm activity like reading|body scan or slow breathing|lights out at the usual time'),
            tf('Too little sleep can affect mood and learning.', true),
          ],
          t: ['Why do you think teenagers often feel sleepy in the morning?', 'What gets in the way of good sleep in your home?'],
          k: ['Present your ideal bedtime routine to your family and explain why each step helps.'],
          m: ['Two-Week Sleep Diary', 'a notebook', 'Record bedtime, wake time and how you felt each day | Note screen use before bed | After one week, try a new routine | Compare mood and energy across the two weeks'],
          q: [
            ch('Screens before bed can…', '*delay sleep|make you sleep instantly|have no effect ever'),
            tf('Sleep helps the body grow and repair.', true),
            ch('A good sleep room is…', '*dark and cool|bright and noisy|full of screens'),
          ],
          ms: ['Explains sleep functions', 'Designs a bedtime routine', 'Tracks and reflects on sleep'],
        }),
      ]),
      U('mindful-tech', 'Mindful Technology Use', 'Using screens on purpose.', 'Attention-grabbing design; Notifications; Screen-time plans; Digital breaks', [
        L('screens-on-purpose', 'Screens on Purpose', {
          o: ['Explain how apps are designed to capture attention', 'Make a mindful technology plan'],
          p: ['Understands attention and distraction'],
          e: [
            'Many apps and games are designed to keep us using them: endless scrolling, autoplay, rewards and notifications. These features grab attention, which isn\'t always good for us.',
            'Mindful tech use means choosing why, when and how long to use screens. Before opening an app, ask: "What am I here for?"',
            'Helpful habits: turn off non-essential notifications, use screens in shared spaces, set time limits, keep phones out of bedrooms at night, and take regular breaks to move, talk and play.',
          ],
          v: 'notification = an alert from an app; autoplay = the next video playing automatically; screen time = time spent using devices; intention = a clear purpose',
          x: ['Watching one planned episode, then switching off.', 'Turning off game notifications during homework.'],
          s: ['The Endless Scroll', 'Kavya opened a video app to watch one clip. An hour later she was still scrolling and felt tired and grumpy. The next day, she asked herself, "What am I here for?" before opening it, watched what she planned, and closed it. She had time to cycle with friends.'],
          a: [
            ch('Autoplay and endless scroll are designed to…', '*keep you using the app|help you sleep|save battery'),
            ch('A mindful question before opening an app:', '*"What am I here for?"|"How long can I stay?"|"Who\'s online?"'),
            tf('Turning off notifications can help focus.', true),
            mt('Match the habit to the benefit', 'phones out of bedrooms=better sleep|notifications off=better focus|screen breaks=more movement'),
          ],
          t: ['Why might tech companies design apps to be hard to put down?', 'How do you feel after a long time on screens?'],
          k: ['Present your family technology plan and explain each rule.'],
          m: ['Family Tech Plan', 'paper, a family meeting', 'Track screen time for a few days | Discuss what helps and what harms | Agree a plan (times, places, notification settings) | Review it after two weeks'],
          q: [
            ch('An alert from an app is a…', '*notification|password|cable'),
            tf('Mindful tech use means choosing why and how long to use screens.', true),
            ch('A healthy habit is…', '*keeping phones out of the bedroom at night|scrolling in bed|unlimited autoplay'),
          ],
          ms: ['Explains persuasive design', 'Uses technology intentionally', 'Creates and reviews a tech plan'],
        }),
      ]),
    ]),
    S('s9', 'Self-compassion, values-based living, and meditation traditions.', [
      'Practise self-compassion', 'Identify personal values and act on them', 'Describe contemplative traditions respectfully',
    ], [
      U('self-compassion', 'Self-Compassion', 'Being a good friend to yourself.', 'Self-criticism vs self-kindness; Common humanity; Mindful acceptance', [
        L('kind-to-self', 'Talking to Yourself Like a Friend', {
          o: ['Explain the three parts of self-compassion', 'Replace harsh self-talk with kind, realistic self-talk'],
          p: ['Notices thoughts as clouds'],
          e: [
            'Self-compassion means treating yourself with the same kindness you\'d show a good friend when things go wrong. Psychologist Kristin Neff describes three parts: self-kindness, common humanity, and mindfulness.',
            'Self-kindness: instead of "I\'m so stupid", try "That was hard. It\'s okay to make mistakes; I\'ll try again." Common humanity: remembering everyone struggles sometimes — you\'re not alone. Mindfulness: noticing painful feelings without ignoring or exaggerating them.',
            'Self-compassion isn\'t making excuses. Research suggests it can help people learn from mistakes and keep trying, rather than giving up out of shame.',
          ],
          c: [['interpretation', 'Self-compassion is a research area in psychology; findings are encouraging though still developing.']],
          v: 'self-compassion = treating yourself kindly when struggling; self-talk = the words you say to yourself in your head; common humanity = recognising everyone struggles; self-criticism = harsh judgement of yourself',
          x: ['"I failed this test" → "I\'m disappointed. Lots of people find this hard. What can I do differently?"', 'Placing a hand on your heart and taking a slow breath when upset.'],
          s: ['The Coach in Your Head', 'Two runners missed a race goal. One heard a harsh coach in her head: "You\'re useless." She quit. The other heard a kind coach: "That hurt. Everyone has bad races. Let\'s look at what to train." She kept going and improved. The second coach wasn\'t softer on effort — just kinder about the person.'],
          a: [
            mt('Match the part of self-compassion', 'speaking kindly to yourself=self-kindness|remembering others struggle too=common humanity|noticing feelings without exaggerating=mindfulness'),
            ch('Kind self-talk after a mistake:', '*"It\'s okay to make mistakes; I\'ll try again."|"I\'m hopeless."|"I never get anything right."'),
            tf('Self-compassion means making excuses.', false),
            ch('Common humanity reminds us that…', '*everyone struggles sometimes|we are alone|only we make mistakes'),
          ],
          t: ['Why are we often kinder to friends than to ourselves?', 'Can self-compassion make us more motivated? How?'],
          k: ['Rewrite three harsh self-talk sentences as kind ones and read them to someone you trust.'],
          m: ['Self-Compassion Letter', 'paper, pen', 'Think of something you feel bad about | Write a letter to yourself as a kind friend would | Include all three parts of self-compassion | Keep it to reread on hard days'],
          q: [
            ch('Self-compassion includes…', '*self-kindness, common humanity and mindfulness|self-criticism|ignoring feelings'),
            tf('Self-compassion can help people keep trying.', true),
            ch('Harsh self-judgement is…', '*self-criticism|self-kindness|mindfulness'),
          ],
          ms: ['Explains self-compassion', 'Uses kind self-talk', 'Applies self-compassion to setbacks'],
        }),
      ]),
      U('traditions', 'Contemplative Traditions', 'Meditation across cultures.', 'Dhyana in yoga; Vipassana and Zen; Christian contemplative prayer; Sufi practices; Secular mindfulness', [
        L('meditation-traditions', 'Meditation Around the World', {
          o: ['Describe contemplative practices from several traditions', 'Distinguish secular mindfulness from religious practice respectfully'],
          p: ['Practises mindfulness'],
          e: [
            'Many traditions include contemplative practice. In Indian traditions, dhyana (meditation) is one of the eight limbs of yoga described by Patanjali. Buddhist traditions include vipassana (insight) and samatha (calm) meditation; Zen emphasises seated meditation (zazen).',
            'Christian contemplative prayer, Sufi remembrance (dhikr) in Islam, Jewish meditative prayer, and Sikh naam simran (remembering the divine name) are other examples.',
            'Modern secular mindfulness, popularised by programmes like Jon Kabat-Zinn\'s Mindfulness-Based Stress Reduction (1979), draws on these practices without religious belief. People of all faiths and none can practise attention and calm, while respecting each tradition\'s own meaning.',
          ],
          c: [['belief', 'In religious traditions, meditation is often connected to spiritual goals such as liberation (moksha, nirvana) or closeness to God, as understood by followers.'], ['evidence', 'Jon Kabat-Zinn founded Mindfulness-Based Stress Reduction at the University of Massachusetts Medical School in 1979.']],
          v: 'meditation = a practice of training attention and awareness; dhyana = meditation in yoga and Indian traditions; secular = not connected to religion; contemplative = involving deep, quiet reflection',
          x: ['Vipassana courses held in many Indian cities.', 'Naam simran in Sikh practice.'],
          s: ['Many Paths to Stillness', 'At a school wellbeing week, students shared practices from their families: one grandmother\'s morning dhyana, a father\'s Sufi dhikr, a mother\'s quiet prayer, a cousin\'s secular breathing app. "They\'re different," said the teacher, "and each has its own meaning to the people who practise it. All of them value stillness."'],
          a: [
            mt('Match the practice to the tradition', 'dhyana=yoga / Indian traditions|vipassana=Buddhist|dhikr=Sufi (Islam)|naam simran=Sikh'),
            ch('Secular mindfulness is…', '*practised without religious belief|a religion|only for monks'),
            tf('Different traditions give meditation different meanings.', true),
            ch('MBSR was founded by…', '*Jon Kabat-Zinn|Patanjali|Newton'),
          ],
          t: ['Why might it matter to respect a practice\'s original meaning?', 'What do these different practices have in common?'],
          k: ['Present one contemplative tradition respectfully, explaining its practice and meaning to followers.'],
          m: ['Contemplative Practices Comparison', 'reliable sources, interviews with family or community members (with permission)', 'Research three contemplative practices from different traditions | Note their methods and purposes | Interview someone who practises one (if possible) | Write a respectful comparison'],
          q: [
            ch('Dhyana is one of the limbs of yoga described by…', '*Patanjali|Darwin|Einstein'),
            tf('People of different faiths can practise attention and calm.', true),
            ch('Zazen is associated with…', '*Zen Buddhism|Sufism|Sikhism'),
          ],
          ms: ['Describes practices accurately', 'Distinguishes secular and religious contexts', 'Shows respect for diverse traditions'],
        }),
      ]),
    ]),
    S('s12', 'The science of attention and meditation, and contemplative inquiry.', [
      'Evaluate research on mindfulness', 'Explain attention networks in the brain', 'Explore philosophical questions about the self',
    ], [
      U('mindfulness-science', 'Mindfulness Research', 'What the evidence says — and doesn\'t.', 'Study designs; Effects on stress and attention; Limitations and hype', [
        L('evaluate-research', 'Evaluating Mindfulness Research', {
          o: ['Summarise evidence on mindfulness effects', 'Identify limitations and hype in research'],
          p: ['Understands study design and health claims'],
          e: [
            'Many studies have examined mindfulness programmes. Reviews suggest modest benefits for stress, anxiety and some aspects of attention for many people — similar in size to some other well-established approaches.',
            'Limitations include small samples, lack of active control groups (comparing with no intervention rather than another activity), publication bias, and over-enthusiastic media coverage.',
            'Mindfulness isn\'t for everyone or every problem; for some people, intensive meditation can bring up difficult experiences. It complements, but doesn\'t replace, professional mental health care.',
          ],
          c: [['science', 'Systematic reviews and meta-analyses report small to moderate effects of mindfulness-based programmes on stress and anxiety, with calls for higher-quality trials.']],
          v: 'meta-analysis = combining results from many studies; active control = a comparison group doing a different activity; publication bias = positive results being published more often; effect size = how big an effect is',
          x: ['A study comparing mindfulness with an equally engaging relaxation class.', 'Headlines claiming meditation "rewires your brain" from tiny studies.'],
          s: ['The Headline and the Study', 'A newspaper declared, "Meditation makes you smarter!" A student found the original study: 20 participants, no active control group, a small change on one test. "Interesting," she wrote, "but the headline promised much more than the study showed."'],
          a: [
            mt('Match the term', 'meta-analysis=combines many studies|active control=comparison doing another activity|publication bias=positive results published more'),
            ch('Reviews suggest mindfulness has…', '*modest benefits for many people|no effects ever|miracle cures'),
            tf('Mindfulness can complement but not replace professional care.', true),
            ch('A weakness in some studies:', '*no active control group|too many participants|perfect design'),
          ],
          t: ['Why do media often exaggerate scientific findings?', 'How would you design a fair mindfulness study?'],
          k: ['Critique a mindfulness news article, comparing it with the original study.'],
          m: ['Mini Research Design', 'notebook, ethical guidelines', 'Design a study testing a short breathing practice on test anxiety | Include an active control group and fair measures | Consider ethics and consent | Write a proposal and identify likely limitations'],
          q: [
            ch('Combining results of many studies is a…', '*meta-analysis|headline|placebo'),
            tf('Positive results are sometimes published more often than negative ones.', true),
            ch('Intensive meditation can for some people…', '*bring up difficult experiences|never cause any difficulty|replace all medicine'),
          ],
          ms: ['Summarises evidence accurately', 'Identifies methodological limitations', 'Communicates balanced conclusions'],
        }),
      ]),
      U('self-inquiry', 'Who Am I?', 'Philosophical and contemplative questions about the self.', 'The self in neuroscience; Anatta (no-self) and Atman; Personal identity puzzles', [
        L('what-is-self', 'What Is the Self?', {
          o: ['Compare views of the self from philosophy, religion and neuroscience', 'Reflect on personal identity'],
          p: ['Understands contemplative traditions'],
          e: [
            'What is the "self"? Neuroscience suggests our sense of self is built by brain processes that integrate memory, body signals and social experience.',
            'Indian traditions offer contrasting views. Many Hindu schools teach that the Atman — the true self — is eternal; Advaita Vedanta holds that Atman is ultimately identical with Brahman. Buddhism teaches anatta (anatman), that there is no permanent, unchanging self — only changing processes.',
            'Western philosophy has its own puzzles: if every part of a ship is replaced over time, is it the same ship? If your memories changed, would you still be you? There is no agreed answer, but asking helps us understand ourselves and others.',
          ],
          c: [['belief', 'Atman (in many Hindu schools) and anatta (in Buddhism) are religious and philosophical teachings held by followers; they are presented here for understanding, not to persuade.'], ['interpretation', 'Personal identity remains an open question in philosophy and neuroscience.']],
          v: 'self = what we mean by "I" or "me"; Atman = in Hindu thought, the true self; anatta = the Buddhist teaching of no permanent self; personal identity = what makes someone the same person over time',
          x: ['You at 4 and you at 14 — the same person?', 'The Ship of Theseus thought experiment.'],
          s: ['The Ship of Theseus', 'An ancient Greek puzzle: a famous ship was kept in a harbour, and as planks rotted, each was replaced, until no original plank remained. Was it still the same ship? Students debated for an hour. One said, "Like my body — my cells change, but I\'m still me. Or am I?"'],
          a: [
            mt('Match the view', 'Atman=eternal true self (many Hindu schools)|anatta=no permanent self (Buddhism)|neuroscience=self built by brain processes'),
            ch('The Ship of Theseus is a puzzle about…', '*identity over time|shipbuilding costs|navigation'),
            tf('There is one agreed answer to "What is the self?"', false),
            ch('Advaita Vedanta teaches Atman is ultimately identical with…', '*Brahman|the body|a ship'),
          ],
          t: ['What makes you "you"? Your memories, body, personality, relationships?', 'How might different views of self affect how people live?'],
          k: ['Lead a philosophical discussion on "Are you the same person you were at age 4?"'],
          m: ['Identity Reflection Essay', 'notebook, sources on philosophy of self', 'Write about how you have changed since early childhood | Consider three views of the self | Discuss which makes most sense to you and why | Write a 1000-word reflective essay'],
          q: [
            ch('The Buddhist teaching of no permanent self is…', '*anatta|Atman|dharma'),
            tf('Neuroscience studies how the brain builds a sense of self.', true),
            ch('Personal identity asks…', '*what makes someone the same person over time|how tall someone is|what someone eats'),
          ],
          ms: ['Compares views of self accurately', 'Engages with thought experiments', 'Reflects thoughtfully on identity'],
        }),
      ]),
    ]),
  ],
});
