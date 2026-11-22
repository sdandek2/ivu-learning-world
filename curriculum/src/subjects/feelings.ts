import { subject, S, U, L, ch, tf, od, mt } from '../dsl.ts';

export default subject({
  id: 'feelings',
  description: 'Emotional literacy: naming feelings, noticing them in the body, understanding causes, managing big feelings, empathy, complex and mixed emotions, and emotional intelligence. All feelings are accepted; behaviours are what we learn to choose.',
  stages: [
    S('s4', 'Naming happy, sad, angry, scared and calm, and knowing all feelings are okay.', [
      'Name basic feelings', 'Recognise feelings on faces', 'Know all feelings are okay and can be shared',
    ], [
      U('feeling-faces', 'Feeling Faces', 'Feelings have names and show on our faces.', 'Happy, sad, angry, scared, surprised, calm; Faces and bodies show feelings; All feelings are okay', [
        L('name-feelings', 'How Do I Feel?', {
          o: ['Name six basic feelings', 'Recognise feelings from faces'],
          p: ['Can talk about simple experiences'],
          e: [
            'Feelings are what happens inside us when things happen around us. Some feelings are happy, sad, angry, scared, surprised and calm.',
            'Our faces show our feelings. A smile can show happy. Tears can show sad. A frown and tight fists can show angry. Wide eyes can show surprised or scared.',
            'All feelings are okay to have. Everyone feels sad or angry sometimes. What matters is what we do with our feelings — and that we can talk about them.',
          ],
          v: 'feeling = what happens inside us, like happy or sad; happy = feeling good and smiley; angry = feeling cross and hot inside; calm = feeling quiet and peaceful',
          x: ['😀 Getting a hug from Grandma — happy.', '😢 Dropping your ice cream — sad.'],
          s: ['Momo\'s Feelings Day', 'In the morning, Momo got a new kite — happy! At lunch, it got stuck in a tree — sad. Kiko laughed — Momo felt angry! Then a loud thunderclap — scared! Mama Bear gave a big hug, and Momo felt calm. "So many feelings in one day," Momo sighed, "and they all came and went."'],
          a: [
            mt('Match the face to the feeling', '😀=happy|😢=sad|😠=angry|😨=scared'),
            ch('Getting a present usually makes us feel…', '*happy|angry|scared'),
            tf('All feelings are okay to have.', true),
            ch('Which shows a calm feeling?', '*😌|😡|😱'),
          ],
          t: ['Can you feel two feelings at the same time?', 'What makes you feel calm?'],
          k: ['Tell a grown-up about a time you felt happy and a time you felt sad today.'],
          m: ['Feelings Mirror Game', 'a mirror, feeling cards with emoji faces', 'Pick a feeling card | Make that face in the mirror | Say a time you felt that way | Take turns with a grown-up guessing each other\'s feeling faces'],
          q: [
            ch('😠 shows…', 'happy|*angry|sleepy'),
            ch('Losing a favourite toy might make us feel…', '*sad|very happy|bored'),
            tf('It\'s okay to talk about our feelings.', true),
          ],
          ms: ['Names six basic feelings', 'Identifies feelings from faces', 'Expresses that all feelings are okay'],
        }),
      ]),
      U('feelings-body', 'Feelings in My Body', 'Our bodies tell us how we feel.', 'Butterflies in the tummy; Hot face when angry; Heavy when sad; Light and bouncy when happy', [
        L('body-clues', 'Body Clues', {
          o: ['Notice where feelings show in the body', 'Use body clues to name a feeling'],
          p: ['Names basic feelings'],
          e: [
            'Feelings show up in our bodies! When we are angry, our face may feel hot and our fists tight. When we are nervous, we might feel "butterflies" in our tummy.',
            'When we are sad, our body might feel heavy and slow. When we are happy, we might feel light and bouncy, like we want to jump.',
            'Noticing these body clues helps us know what we are feeling — and then we can do something to help ourselves.',
          ],
          v: 'body clue = a sign in your body that shows a feeling; nervous = a little scared or worried; butterflies = a fluttery feeling in your tummy; tight = squeezed together',
          x: ['Heart beating fast before a race — excited or nervous.', 'Shoulders slumped — maybe sad or tired.'],
          s: ['Kiko\'s Butterflies', 'On the first day at a new school, Kiko\'s tummy felt fluttery. "Are there real butterflies in there?" Kiko asked. Tara smiled, "That\'s how being nervous feels. Take three slow breaths." Kiko breathed slowly — and the butterflies settled down.'],
          a: [
            mt('Match the body clue to the feeling', 'hot face, tight fists=angry|butterflies in tummy=nervous|light and bouncy=happy|heavy and slow=sad'),
            ch('Before a big event, you might feel…', '*butterflies in your tummy|nothing at all|a cold nose only'),
            tf('Our bodies can show how we feel.', true),
            ch('Slow breaths can help us feel…', '*calmer|angrier|hungrier'),
          ],
          t: ['Where in your body do you feel happy?', 'Why do you think our hearts beat fast when we are scared?'],
          k: ['Point to where you feel anger and where you feel happy in your body, and tell a grown-up.'],
          m: ['Feelings Body Map', 'a body outline on paper, crayons in different colours', 'Choose a colour for each feeling | Colour where you feel each feeling in your body | Talk about your map with a grown-up | Compare with their map'],
          q: [
            ch('Tight fists can be a clue for…', '*angry|sleepy|hungry'),
            tf('Noticing body clues helps us understand feelings.', true),
            ch('Feeling light and bouncy often means…', '*happy|sad|sick'),
          ],
          ms: ['Identifies body signs of feelings', 'Links body clues to names', 'Uses breathing to settle'],
        }),
      ]),
    ]),
    S('s5', 'Why we feel things, and calming big feelings.', [
      'Explain what caused a feeling', 'Use calming strategies', 'Notice others\' feelings',
    ], [
      U('feeling-causes', 'Why Do I Feel This Way?', 'Feelings have causes.', 'Triggers: things that cause feelings; Same event, different feelings; Feelings change', [
        L('because-feeling', 'I Feel… Because…', {
          o: ['Say what caused a feeling using "I feel… because…"', 'Understand that people can feel differently about the same thing'],
          p: ['Names basic feelings'],
          e: [
            'Feelings have causes. "I feel happy because my friend shared her crayons." "I feel cross because my tower fell down."',
            'The same thing can make different people feel different ways. Thunder might make one child scared and another excited!',
            'Feelings don\'t last forever. They come and go like weather — a cloudy feeling can turn sunny again.',
          ],
          v: 'cause = the reason something happens; trigger = something that starts a feeling; different = not the same; change = become something else',
          x: ['"I feel proud because I tied my shoes by myself."', 'A dog makes Ravi happy but makes Asha nervous.'],
          s: ['The Rainy Day', 'When it rained, Zuri groaned — no outdoor play! But Pala the dolphin cheered — rain was wonderful! "Same rain," said Olu, "but different feelings." By afternoon, the rain stopped, a rainbow appeared, and Zuri felt happy again.'],
          a: [
            ch('"I feel happy because…" — which fits?', '*my friend shared with me|I fell over|I lost my shoe'),
            tf('Two people can feel differently about the same thing.', true),
            ch('Feelings are like weather because…', '*they come and go|they never change|they are always rainy'),
            mt('Match the cause to a likely feeling', 'tower falls down=frustrated|birthday party=excited|a loud bang=startled'),
          ],
          t: ['Has something ever made you feel two ways at once?', 'Why might a dog make one child happy and another scared?'],
          k: ['Tell a grown-up three "I feel… because…" sentences about your day.'],
          m: ['Feelings Weather Chart', 'paper, weather stickers or drawings', 'Each morning and evening, draw a weather symbol for your feeling (sunny, cloudy, stormy) | Write or say why | After a week, see how your feelings changed | Talk about what helped stormy days clear'],
          q: [
            ch('"I feel scared because…" — which fits?', '*there was a loud thunderclap|I ate a mango|I hugged my mum'),
            tf('Feelings can change.', true),
            ch('A thing that starts a feeling is a…', '*trigger|tree|toy only'),
          ],
          ms: ['Uses "I feel… because…"', 'Recognises different reactions', 'Understands feelings change'],
        }),
      ]),
      U('calm-down', 'Calming Big Feelings', 'Tools to help when feelings are big.', 'Belly breathing; Counting to ten; Calm corner; Asking for a hug or help', [
        L('calm-toolbox', 'My Calm-Down Toolbox', {
          o: ['Use at least three calming strategies', 'Choose a strategy that works for them'],
          p: ['Recognises big feelings in the body'],
          e: [
            'Sometimes feelings get very big — like a volcano about to erupt! It\'s okay to feel angry or upset, but we try not to hurt ourselves, others or things.',
            'Calming tools help: take slow belly breaths (smell the flower, blow out the candle), count slowly to ten, squeeze a soft toy, go to a quiet calm corner, or ask for a hug.',
            'Different tools work for different people. When the feeling is smaller, we can talk about what happened.',
          ],
          v: 'calm down = help a big feeling get smaller; belly breathing = slow breaths that fill your tummy like a balloon; calm corner = a quiet cosy place to settle; strategy = a plan or tool',
          x: ['"Smell the flower" (breathe in), "blow out the candle" (breathe out).', 'Squeezing a pillow instead of hitting.'],
          s: ['The Volcano Feeling', 'When Kiko\'s brother broke Kiko\'s toy, Kiko felt like a volcano about to blow! Kiko wanted to shout and throw things. Instead, Kiko went to the calm corner, hugged the soft goat toy and did five belly breaths. The volcano cooled. Then Kiko could say, "I\'m upset that my toy broke."'],
          a: [
            ch('When feeling very angry, a good choice is…', '*take slow belly breaths|hit someone|throw toys'),
            od('Belly breathing', 'smell the flower (breathe in slowly)|hold for a moment|blow out the candle (breathe out slowly)'),
            tf('Different calming tools work for different people.', true),
            mt('Match the tool', 'counting to ten=slows you down|calm corner=a quiet place|a hug=comfort from someone'),
          ],
          t: ['Which calming tool works best for you?', 'Why is it easier to talk after you calm down?'],
          k: ['Teach a grown-up your favourite calming tool and practise it together.'],
          m: ['Calm-Down Jar', 'a clear jar or bottle with lid, water, glitter, a drop of glue or glycerine (adult help)', 'Fill the jar with water and add glitter and glue | Seal the lid tightly | When feelings are big, shake it and watch the glitter settle while breathing slowly | Notice how your feelings settle too'],
          q: [
            ch('Which is a calming tool?', '*counting slowly to ten|shouting louder|kicking things'),
            tf('It\'s okay to feel angry, but not to hurt others.', true),
            ch('After calming down, we can…', '*talk about what happened|stay angry forever|hide'),
          ],
          ms: ['Uses calming strategies', 'Distinguishes feelings from actions', 'Talks about feelings after calming'],
        }),
      ]),
    ]),
    S('s6', 'Empathy, more feeling words, and expressing feelings safely.', [
      'Show empathy for others\' feelings', 'Use a wider range of feeling words', 'Express feelings with words, art and movement',
    ], [
      U('empathy', 'Walking in Someone Else\'s Shoes', 'Empathy means understanding how others feel.', 'Noticing others\' feelings; Imagining their point of view; Kind responses', [
        L('empathy-steps', 'Empathy Steps', {
          o: ['Notice and name how someone else might feel', 'Respond kindly to someone\'s feelings'],
          p: ['Names feelings and causes'],
          e: [
            'Empathy means trying to understand how someone else feels — imagining being in their shoes.',
            'Empathy steps: Notice (look at their face and body), Wonder (how might they feel, and why?), and Respond (say or do something kind: "Are you okay? Do you want to play with me?").',
            'Empathy doesn\'t mean you must feel exactly the same, or fix everything. Sometimes just listening helps a lot.',
          ],
          v: 'empathy = understanding how someone else feels; notice = see or pay attention to; respond = say or do something back; kind = caring and gentle',
          x: ['Seeing a classmate alone at lunch and inviting them to sit with you.', 'Saying "That must have been scary" when a friend tells you about a dog chasing them.'],
          s: ['The New Girl', 'Leela was new and sat alone at break, looking down. Asha noticed. She wondered, "Maybe she feels lonely and shy." Asha walked over: "Hi, I\'m Asha. Do you like skipping?" Leela smiled for the first time all day.'],
          a: [
            od('Empathy steps', 'notice how they look|wonder how they feel|respond kindly'),
            ch('A friend\'s pet is sick. An empathetic thing to say:', '*"That sounds really worrying. I\'m sorry."|"So what?"|"My pet is better."'),
            tf('Sometimes just listening shows empathy.', true),
            ch('Empathy means…', '*understanding someone else\'s feelings|always agreeing|ignoring others'),
          ],
          t: ['Is it possible to feel empathy for someone very different from you?', 'How do you feel when someone shows you empathy?'],
          k: ['Tell someone about a time you showed empathy, or a time someone showed it to you.'],
          m: ['Empathy Detective Week', 'a notebook', 'Each day, notice one person who seems to have a strong feeling | Write how you think they felt and why | Write what kind thing you did or could do | Share one story with your family'],
          q: [
            ch('First empathy step:', '*notice|ignore|interrupt'),
            tf('Empathy means you must fix every problem.', false),
            ch('A classmate dropped their lunch. An empathetic response:', '*offer to share yours|laugh|walk away'),
          ],
          ms: ['Applies empathy steps', 'Uses empathetic language', 'Shows kind responses'],
        }),
      ]),
      U('feeling-words', 'A Bigger Feelings Vocabulary', 'More words help us say exactly how we feel.', 'Beyond happy: proud, excited, grateful; Beyond sad: disappointed, lonely; Beyond angry: frustrated, jealous; Feelings wheel', [
        L('exact-feelings', 'Just the Right Feeling Word', {
          o: ['Use precise feeling words', 'Explain differences between similar feelings'],
          p: ['Names basic feelings'],
          e: [
            'There are many more feeling words than happy, sad and angry. Happy can be proud, excited, grateful or content. Sad can be disappointed, lonely or hurt.',
            'Angry can be frustrated (when something is hard), annoyed (a little angry), or jealous (wanting what someone else has). Scared can be worried, nervous or terrified.',
            'Using the exact word helps others understand you — and helps you understand yourself. "I\'m frustrated because this puzzle is hard" is clearer than "I\'m mad!"',
          ],
          v: 'proud = pleased about something you did; disappointed = sad because something didn\'t happen as hoped; frustrated = upset when something is hard; jealous = wanting what someone else has',
          x: ['Proud after finishing a drawing.', 'Disappointed when a trip is cancelled.'],
          s: ['Bolt\'s Feelings Upgrade', 'Bolt only had three feeling buttons: HAPPY, SAD, ANGRY. When Bolt couldn\'t build a tower, Bolt pressed ANGRY — but that wasn\'t quite right. Rangi gave Bolt new buttons: FRUSTRATED, DISAPPOINTED, PROUD, GRATEFUL. "FRUSTRATED!" Bolt beeped. "Yes — that\'s exactly it!"'],
          a: [
            mt('Match the situation to the feeling', 'finishing a hard puzzle=proud|a trip is cancelled=disappointed|a friend gets the toy you wanted=jealous|a puzzle is too hard=frustrated'),
            ch('Feeling thankful is…', '*grateful|jealous|bored'),
            tf('More feeling words help us explain ourselves clearly.', true),
            ch('A little bit angry is…', '*annoyed|terrified|delighted'),
          ],
          t: ['Is jealousy always a bad feeling? What can it tell us?', 'What\'s the difference between being lonely and being alone?'],
          k: ['Describe today using three exact feeling words.'],
          m: ['Feelings Wheel', 'a paper plate, colour pencils', 'Divide a plate into 6 sections for basic feelings | Around each, write 2–3 more exact feeling words | Use the wheel each evening to name your feelings | Add new words you learn'],
          q: [
            ch('Upset because something is hard:', '*frustrated|grateful|calm'),
            ch('Feeling pleased about your own effort:', '*proud|lonely|nervous'),
            tf('Disappointed is a kind of sad.', true),
          ],
          ms: ['Uses precise feeling vocabulary', 'Distinguishes similar emotions', 'Applies words to own experience'],
        }),
      ]),
    ]),
    S('s7', 'Mixed feelings, managing anger and worry, and resilience.', [
      'Recognise mixed and complex feelings', 'Use strategies for anger and worry', 'Bounce back from setbacks',
    ], [
      U('mixed', 'Mixed Feelings', 'We can feel two things at once.', 'Mixed emotions: excited and nervous; Feelings vs thoughts vs actions; Emotional triggers', [
        L('two-at-once', 'Two Feelings at Once', {
          o: ['Identify mixed feelings in situations', 'Distinguish feelings, thoughts and actions'],
          p: ['Uses precise feeling words'],
          e: [
            'We can feel two or more feelings at the same time. Moving to a new city might feel exciting and sad. Performing on stage might feel nervous and thrilled.',
            'Feelings, thoughts and actions are connected but different. Feeling: "I\'m nervous." Thought: "What if I forget my lines?" Action: practising, or avoiding the stage.',
            'We can\'t always choose our feelings, but we can notice our thoughts and choose our actions.',
          ],
          v: 'mixed feelings = more than one feeling at the same time; thought = what we tell ourselves in our heads; action = what we do; trigger = something that sparks a feeling',
          x: ['Graduating from a class: proud and sad to leave friends.', 'A new baby sibling: happy and a bit jealous.'],
          s: ['Leaving Grandma\'s House', 'After a wonderful summer holiday at Grandma\'s, it was time to go home. Zuri felt happy about seeing her friends again, but sad to leave Grandma. "Can I feel both?" she asked. Grandma hugged her. "Of course. That\'s what loving two places feels like."'],
          a: [
            mt('Feeling, thought or action?', 'I feel nervous.=feeling|What if I forget?=thought|I practise my speech.=action'),
            ch('Starting at a new school might feel…', '*excited and nervous together|only one feeling|nothing'),
            tf('We can choose our actions even when we can\'t choose our feelings.', true),
            ch('A new baby sibling might make you feel…', '*happy and a bit jealous|only angry|nothing'),
          ],
          t: ['Why might mixed feelings be confusing?', 'Can a thought change a feeling?'],
          k: ['Describe a time you had mixed feelings and what you did.'],
          m: ['Feelings–Thoughts–Actions Triangle', 'paper, pens', 'Draw a triangle with Feeling, Thought and Action at the corners | Fill it in for three real situations | Notice how changing a thought might change the action | Share one with a trusted person'],
          q: [
            tf('People can feel two emotions at once.', true),
            ch('"I\'ll never be good at this" is a…', '*thought|action|feeling word'),
            ch('Practising before a performance is an…', '*action|feeling|thought only'),
          ],
          ms: ['Identifies mixed feelings', 'Separates feelings, thoughts and actions', 'Chooses constructive actions'],
        }),
      ]),
      U('resilience', 'Bouncing Back', 'Resilience: coping with setbacks.', 'Mistakes help us learn; Growth mindset language; Problem-solving; Asking for help', [
        L('bounce-back', 'Bouncing Back', {
          o: ['Use growth mindset language', 'Use problem-solving steps after a setback'],
          p: ['Manages big feelings'],
          e: [
            'Resilience is the ability to bounce back after difficult times, like a ball that bounces after it drops. Everyone faces setbacks: losing a match, a bad mark, a fight with a friend.',
            'Growth mindset language helps: instead of "I can\'t do this", say "I can\'t do this YET." Mistakes help our brains learn.',
            'Problem-solving steps: calm down, name the problem, think of options, choose one and try it, then check how it went. And it\'s always okay to ask for help.',
          ],
          v: 'resilience = the ability to recover from difficulties; setback = something that goes wrong; growth mindset = believing abilities grow with effort; yet = not so far, but maybe later',
          x: ['"I haven\'t learned long division yet."', 'Practising after losing a chess game.'],
          s: ['Kalpana\'s Determination', 'Kalpana Chawla grew up in Karnal, Haryana, at a time when few girls studied engineering. She studied aeronautical engineering, moved abroad for further study, and faced many challenges before becoming an astronaut. Her story reminds us that obstacles can be steps on a path, not the end of it.'],
          a: [
            ch('Growth mindset version of "I can\'t do this":', '*"I can\'t do this yet."|"I\'ll never do this."|"This is stupid."'),
            od('Problem-solving steps', 'calm down|name the problem|think of options|try one|check how it went'),
            tf('Mistakes can help us learn.', true),
            ch('Resilience means…', '*bouncing back after difficulties|never having problems|giving up quickly'),
          ],
          t: ['Can you think of a time you got better at something after failing?', 'Why is asking for help a sign of strength?'],
          k: ['Tell someone about a setback and how you bounced back (or could).'],
          m: ['My Resilience Story', 'paper, pens', 'Write about a time something went wrong | Describe how you felt and what you did | Write what you learned | Add one growth mindset sentence to remember'],
          q: [
            ch('Which shows a growth mindset?', '*"Mistakes help me learn."|"I\'m just bad at maths."|"Why try?"'),
            tf('Asking for help is okay.', true),
            ch('A setback is…', '*something that goes wrong|a prize|a holiday'),
          ],
          ms: ['Uses growth mindset language', 'Applies problem-solving steps', 'Seeks help appropriately'],
        }),
      ]),
    ]),
    S('s9', 'Emotional intelligence, stress and anxiety, and supporting others.', [
      'Explain the components of emotional intelligence', 'Recognise and manage stress and anxiety', 'Support a friend and know when to involve adults',
    ], [
      U('eq', 'Emotional Intelligence', 'Understanding and managing emotions in ourselves and others.', 'Self-awareness, self-regulation, motivation, empathy, social skills; Emotions and decisions', [
        L('five-parts', 'The Five Parts of Emotional Intelligence', {
          o: ['Describe the components of emotional intelligence', 'Reflect on personal strengths and areas to grow'],
          p: ['Recognises mixed feelings and uses coping strategies'],
          e: [
            'Emotional intelligence (EQ) means recognising, understanding and managing emotions — your own and others\'. A popular model, from psychologist Daniel Goleman, describes five parts.',
            'Self-awareness (knowing your emotions), self-regulation (managing them), motivation (using emotions to pursue goals), empathy (understanding others) and social skills (handling relationships well).',
            'Emotions influence decisions — sometimes helpfully (fear keeps us safe), sometimes unhelpfully (anger leads to words we regret). Pausing before reacting is a key EQ skill.',
          ],
          c: [['interpretation', 'Emotional intelligence is a widely used framework; psychologists debate how best to define and measure it, and different models exist.']],
          v: 'emotional intelligence = the ability to understand and manage emotions; self-regulation = managing your emotions and actions; self-awareness = knowing your own feelings; motivation = the drive to achieve goals',
          x: ['Pausing and breathing before replying to an annoying message.', 'Noticing a friend is upset even when they say "I\'m fine".'],
          s: ['The Message Not Sent', 'Arjun read a group message mocking his drawing. He typed an angry reply — then paused. He put his phone down, went for a walk, and came back calmer. Instead of the angry reply, he messaged a teacher about the unkind group chat. He was glad he hadn\'t sent the first message.'],
          a: [
            mt('Match the EQ part', 'knowing your feelings=self-awareness|managing your reactions=self-regulation|understanding others\' feelings=empathy|getting along with others=social skills'),
            ch('A key EQ skill when angry is…', '*pausing before reacting|reacting instantly|ignoring everyone'),
            tf('Emotions can influence our decisions.', true),
            ch('Fear can be helpful because…', '*it can keep us safe|it is always wrong|it makes us taller'),
          ],
          t: ['Which part of EQ is your strongest? Which would you like to grow?', 'Can EQ be learned, or are people born with it?'],
          k: ['Describe to someone a time you paused before reacting, and what happened.'],
          m: ['EQ Self-Reflection Journal', 'a notebook', 'Each evening for two weeks, note a strong feeling | Write what triggered it and how you responded | Rate your self-regulation 1–5 | At the end, identify patterns and one goal'],
          q: [
            ch('Managing emotions well is…', '*self-regulation|ignoring feelings|shouting'),
            ch('Emotional intelligence includes understanding…', '*your own and others\' emotions|only maths|only your own height'),
            tf('Psychologists have different models of EQ.', true),
          ],
          ms: ['Describes EQ components', 'Reflects on personal emotional patterns', 'Applies pausing strategies'],
        }),
      ]),
      U('stress', 'Stress, Worry and Anxiety', 'Understanding and coping with stress.', 'Healthy and unhealthy stress; Signs of anxiety; Coping strategies; When to seek help', [
        L('stress-coping', 'Understanding Stress', {
          o: ['Distinguish everyday stress from anxiety that needs help', 'Use healthy coping strategies'],
          p: ['Understands EQ and coping tools'],
          e: [
            'Stress is the body\'s response to challenges. A little stress can help — it focuses us before an exam or match. Too much stress for too long can affect sleep, mood, appetite and health.',
            'Anxiety is a feeling of worry or fear. Everyone feels anxious sometimes, but if worry is very strong, lasts a long time, or stops someone from doing everyday things, it\'s important to talk to a trusted adult or professional.',
            'Healthy coping: breathing exercises, exercise, sleep, talking to someone, breaking tasks into small steps, limiting news and social media, and doing things you enjoy. Unhealthy coping — like avoiding everything or hurting yourself — makes things worse; get help.',
          ],
          v: 'stress = the body\'s response to challenges or pressure; anxiety = strong worry or fear; coping strategy = a way of handling difficult feelings; professional = a trained person such as a counsellor or doctor',
          x: ['Feeling nervous before exams and then fine afterwards — usual stress.', 'Worrying so much you can\'t sleep for weeks — time to get help.'],
          s: ['Exam Week', 'Before her exams, Riya couldn\'t sleep and felt her chest tighten. She told her mother, who helped her make a study timetable with breaks, and they went for evening walks. When the worry stayed strong, they talked to the school counsellor, who taught her breathing techniques. Slowly, she felt in control again.'],
          a: [
            ch('A little stress can…', '*help us focus|never be useful|make us taller'),
            ch('When worry stops you doing everyday things, you should…', '*talk to a trusted adult or professional|hide it|ignore it forever'),
            mt('Match the coping choice to what it does', 'going for a walk=releases tension through movement|talking to a friend=shares the load|avoiding everyone for weeks=makes things worse: get help'),
            tf('Everyone feels anxious sometimes.', true),
          ],
          t: ['What causes stress for young people today?', 'How can friends support each other during stressful times?'],
          k: ['Share three coping strategies that work for you with a family member.'],
          m: ['Stress Toolkit Card', 'a card, pens', 'List your common stress signs | List five healthy coping strategies | Write the names of three people you can talk to, plus Tele-MANAS 14416 | Keep the card in your bag'],
          q: [
            ch('Which is a healthy coping strategy?', '*breaking tasks into small steps|staying up all night worrying|skipping meals'),
            tf('Asking for help with anxiety is a sign of strength.', true),
            ch('Long-lasting, strong worry may need…', '*professional support|no attention|more screen time'),
          ],
          ms: ['Distinguishes stress and anxiety', 'Uses healthy coping', 'Knows when and where to seek help'],
        }),
      ]),
    ]),
    S('s12', 'The science of emotions, cultural expression, and mental wellbeing.', [
      'Explain theories of emotion', 'Compare cultural ways of expressing emotion', 'Promote mental wellbeing in communities',
    ], [
      U('emotion-science', 'The Science of Emotion', 'How brains and bodies create emotions.', 'Amygdala and prefrontal cortex; Theories of emotion; Emotions in Indian aesthetics: rasa', [
        L('brain-emotion', 'Emotions and the Brain', {
          o: ['Describe brain regions involved in emotion', 'Compare theories and cultural frameworks of emotion'],
          p: ['Understands emotional intelligence'],
          e: [
            'Brain areas work together in emotion. The amygdala helps detect threats quickly; the prefrontal cortex helps plan, reason and regulate emotional responses. In adolescence, the prefrontal cortex is still developing.',
            'Scientists have proposed different theories: some emphasise bodily reactions leading to feelings; others emphasise how we interpret situations; many modern researchers see emotions as constructed from body signals, context and concepts learned in culture.',
            'Indian aesthetics offers the rasa theory from the Natyashastra: art evokes emotional "flavours" such as shringara (love), karuna (compassion), raudra (anger), bhayanaka (fear) and shanta (peace, added by later theorists).',
          ],
          c: [['interpretation', 'Theories of emotion are actively debated; no single theory is universally accepted.'], ['tradition', 'The Natyashastra lists eight rasas; later scholars such as Abhinavagupta discussed shanta as a ninth.']],
          v: 'amygdala = a brain region involved in detecting threats and emotional responses; prefrontal cortex = the brain region for planning and self-control; rasa = in Indian aesthetics, the emotional essence evoked by art; construction = building something from parts',
          x: ['Jumping at a sudden noise before you know what it is.', 'Feeling karuna (compassion) watching a sad scene in a play.'],
          s: ['The Rope or the Snake', 'An old teaching story describes a person who sees a coiled shape at dusk and jumps in terror — it\'s a snake! On closer look, it\'s only a rope. The fear was real, but the interpretation was wrong. Scientists today might say the brain predicted danger from limited information.'],
          a: [
            mt('Match the brain area', 'amygdala=fast threat detection|prefrontal cortex=planning and regulation|hippocampus=memory formation'),
            ch('The prefrontal cortex in teenagers is…', '*still developing|fully finished at 10|not used'),
            tf('Rasa theory comes from the Natyashastra.', true),
            ch('Karuna rasa is the flavour of…', '*compassion|anger|humour'),
          ],
          t: ['Are emotions universal or shaped by culture?', 'How does knowing the brain is still developing change how teens might think about decisions?'],
          k: ['Explain the rope–snake story using modern brain science.'],
          m: ['Emotion Across Art Forms', 'examples of music, film, poetry and classical dance', 'Choose four artworks | Identify the rasa or emotion each evokes | Analyse how each creates that emotion | Present a comparative reflection'],
          q: [
            ch('Which brain area helps regulate emotions?', '*prefrontal cortex|amygdala only|spinal cord'),
            tf('All scientists agree on a single theory of emotion.', false),
            ch('Shanta rasa is associated with…', '*peace|fear|disgust'),
          ],
          ms: ['Describes neural bases of emotion', 'Compares theories respectfully', 'Connects science and aesthetics'],
        }),
      ]),
      U('wellbeing', 'Mental Wellbeing for All', 'Promoting wellbeing and reducing stigma.', 'Mental health continuum; Stigma and help-seeking; Supporting a friend; Community wellbeing', [
        L('mental-health-continuum', 'The Mental Health Continuum', {
          o: ['Explain mental health as a continuum', 'Plan how to support a friend and reduce stigma'],
          p: ['Understands stress and anxiety'],
          e: [
            'Mental health is a continuum, from thriving to struggling, and people move along it over time. Everyone has mental health, just like physical health.',
            'Stigma — negative attitudes about mental illness — stops many people from seeking help. Language matters: saying "a person with depression" rather than insulting labels, and treating mental illness like any other health condition.',
            'To support a friend: notice changes, ask "How are you really?", listen without judging, encourage professional help, and tell a trusted adult if they may be in danger. Look after your own wellbeing too.',
          ],
          v: 'continuum = a range without sharp divisions; stigma = negative attitudes that cause shame; depression = a mental health condition with persistent low mood; wellbeing = feeling good and functioning well',
          x: ['A friend who stops enjoying activities and withdraws may need support.', 'Mental health awareness campaigns in schools.'],
          s: ['The Friend Who Went Quiet', 'Kavya noticed her friend Dev had gone quiet, stopped playing cricket and skipped lunch. She asked, "How are you really?" He shrugged at first, then admitted he felt low all the time. Kavya listened, then said, "Can we talk to Mr. Rao together?" The counsellor helped Dev find support. Months later, Dev thanked her.'],
          a: [
            od('Supporting a friend', 'notice changes|ask how they really are|listen without judging|encourage help and involve a trusted adult'),
            ch('Stigma about mental illness…', '*stops people seeking help|helps people recover|is harmless'),
            tf('Everyone has mental health.', true),
            ch('If a friend may be in danger, you should…', '*tell a trusted adult immediately|keep it a secret|wait and see'),
          ],
          t: ['Why might young people hide mental health struggles?', 'How can schools make it easier to ask for help?'],
          k: ['Role-play a supportive conversation with a friend who seems low.'],
          m: ['Wellbeing Campaign', 'poster or video materials, reliable sources', 'Research mental health stigma and local support services | Design a respectful, accurate campaign for your school | Include how to support a friend and helplines (Tele-MANAS 14416) | Share it with permission from your school'],
          q: [
            ch('Mental health is best described as…', '*a continuum everyone is on|only for people with illness|fixed forever'),
            tf('Listening without judging helps a struggling friend.', true),
            ch('Respectful language:', '*"a person with depression"|insulting labels|jokes about illness'),
          ],
          ms: ['Explains mental health continuum', 'Demonstrates supportive skills', 'Promotes stigma reduction'],
        }),
      ]),
    ]),
  ],
});
