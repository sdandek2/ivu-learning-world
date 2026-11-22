import { subject, S, U, L, ch, tf, od, mt, ct } from '../dsl.ts';

export default subject({
  id: 'body',
  description: 'Understanding the human body: naming body parts, bones and muscles, heart and lungs, the brain and nerves, growth and change, body systems working together, and human biology in depth. Body-positive, accurate and age-appropriate.',
  stages: [
    S('s4', 'Naming body parts and what they do.', [
      'Name main body parts', 'Say what different body parts help us do', 'Know every body is special',
    ], [
      U('body-parts', 'Head, Shoulders, Knees and Toes', 'Our bodies have many parts with different jobs.', 'Head, arms, hands, legs, feet; Face: eyes, ears, nose, mouth; What each part does', [
        L('name-parts', 'My Body Parts', {
          o: ['Name the main parts of the body', 'Say what some body parts help us do'],
          p: ['Can point to own head, hands and feet'],
          e: [
            'Our body has many parts. On top is the head, with the face: eyes to see, ears to hear, a nose to smell, and a mouth to eat and talk.',
            'We have two arms with hands and fingers to hold, draw and wave. We have two legs with feet and toes to walk, run and jump.',
            'Every body is different — tall, short, different colours and shapes — and every body is special.',
          ],
          v: 'body = all of you, from head to toe; elbow = where your arm bends; knee = where your leg bends; fingers = the five parts at the end of each hand',
          x: ['We use our hands to eat and our legs to run.', 'Elbows and knees help our arms and legs bend.'],
          s: ['Bolt Gets a Body Check', 'Bolt the robot wanted to be like the children. "What do I need?" Bolt asked. "Eyes to see!" said Ivaan. "Hands to hold!" said Asha. "Legs to dance!" said Ravi. Bolt pointed to each robot part, matching it to a body part. "We\'re different," beeped Bolt, "but we\'re all special."'],
          a: [
            mt('Match the body part to its job', '👀 eyes=see|👂 ears=hear|👃 nose=smell|✋ hands=hold'),
            ct('How many fingers on one hand?', 5),
            ch('Which part helps us walk?', '*legs 🦵|ears 👂|nose 👃'),
            tf('Every body is special.', true),
          ],
          t: ['What would be hard to do without elbows?', 'Which body part do you use most?'],
          k: ['Play "Simon says touch your…" and name each body part as you touch it.'],
          m: ['Life-Size Body Outline', 'a long roll of paper, crayons', 'Lie down on the paper while a grown-up traces around you | Draw your face, hair and clothes | Label the body parts you know | Hang it on the wall and measure how you grow'],
          q: [
            ch('We hear with our…', 'eyes|*ears|feet'),
            ct('How many legs do people have?', 2),
            ch('Where your arm bends is your…', '*elbow|knee|nose'),
          ],
          ms: ['Names main body parts', 'Links parts to functions', 'Expresses positive body language'],
        }),
      ]),
      U('growing-me', 'Growing Me', 'Bodies grow and change.', 'Baby to child to adult; Measuring height; Baby teeth and new teeth', [
        L('how-i-grow', 'How I Grow', {
          o: ['Describe ways their body has changed since being a baby', 'Know that growing needs food, sleep and exercise'],
          p: ['Knows living things grow'],
          e: [
            'When you were a baby, you were small and couldn\'t walk or talk. Now you are bigger, stronger and can do lots of things!',
            'Your body grows slowly every day. You get taller, your feet get bigger, and one day your baby teeth will wobble and fall out so bigger teeth can grow.',
            'To grow well, your body needs healthy food, water, lots of sleep and plenty of play and exercise.',
          ],
          v: 'grow = get bigger; baby teeth = your first teeth, which fall out; height = how tall you are; sleep = rest that helps your body grow',
          x: ['Your shoes from last year may be too small now.', 'Most children start losing baby teeth around age 6.'],
          s: ['Momo\'s Measuring Wall', 'Every birthday, Momo\'s mother marked Momo\'s height on the kitchen wall. One mark, two marks, three marks — each one higher! "How did I grow so tall?" Momo asked. "Good food, lots of sleep and lots of play," said Mother Bear with a hug.'],
          a: [
            od('Put in order', 'baby 👶|toddler 🧒|big child 🧑'),
            ch('To grow, your body needs…', '*food, sleep and play|only sweets|no sleep'),
            tf('Baby teeth fall out to make room for bigger teeth.', true),
            ch('Who is usually the tallest?', 'a baby|*an adult|a toddler'),
          ],
          t: ['What can you do now that you couldn\'t do as a baby?', 'Why do you think we need so much sleep when we are young?'],
          k: ['Tell a grown-up three things you can do now that you couldn\'t do last year.'],
          m: ['Height Chart', 'a long strip of paper, a ruler, stickers', 'Make a height chart and stick it on a wall | Measure yourself and family members | Mark everyone\'s height | Measure again in six months'],
          q: [
            ch('Which helps you grow?', '*sleep|staying up all night|skipping meals'),
            tf('People grow taller as they grow up.', true),
            ch('Your first teeth are called…', '*baby teeth|grown-up teeth|wisdom teeth'),
          ],
          ms: ['Describes own growth', 'Names needs for healthy growth', 'Measures and records height'],
        }),
      ]),
    ]),
    S('s5', 'Bones, muscles, heart and lungs — the basics.', [
      'Know bones hold us up and protect us', 'Know muscles help us move', 'Know the heart pumps blood and lungs breathe air',
    ], [
      U('bones-muscles', 'Bones and Muscles', 'The skeleton and muscles work together.', 'Skeleton: skull, ribs, spine; Muscles pull bones; Joints', [
        L('skeleton', 'My Skeleton', {
          o: ['Name important bones: skull, ribs, spine', 'Explain that muscles move bones'],
          p: ['Names body parts'],
          e: [
            'Inside your body is a skeleton made of bones. It holds you up — without it, you\'d flop like a jelly! Adults have 206 bones.',
            'Some bones protect important organs: the skull protects your brain, and the ribs protect your heart and lungs. Your spine (backbone) lets you stand tall and bend.',
            'Muscles are attached to bones. When a muscle pulls, the bone moves. Joints, like elbows and knees, are where bones meet and bend.',
          ],
          v: 'skeleton = all the bones in your body; skull = the bone that protects your brain; ribs = curved bones that protect your heart and lungs; muscle = a part that pulls bones to move them',
          x: ['Feel your ribs when you breathe in.', 'Bend your elbow and feel the muscle in your upper arm get firm.'],
          s: ['The Skeleton That Stood Tall', 'In a museum, Kiko saw a dinosaur skeleton. "It\'s just bones!" said Kiko. Professor Hoot smiled, "You have a skeleton too, inside. Without it, you couldn\'t stand. And your muscles are the ropes that pull it to make you move."'],
          a: [
            mt('Match the bone to its job', 'skull=protects the brain|ribs=protect heart and lungs|spine=helps you stand and bend'),
            ch('What moves your bones?', '*muscles|hair|nails'),
            tf('Adults have 206 bones.', true),
            ch('Where bones meet and bend is a…', '*joint|muscle|skull'),
          ],
          t: ['Why do you think the skull is so hard?', 'What would happen if we had no joints?'],
          k: ['Point to your skull, ribs and spine and explain to someone what each does.'],
          m: ['Cotton-Bud Skeleton', 'black paper, cotton buds, glue, white crayon', 'Draw a body outline on black paper | Glue cotton buds as arm and leg bones | Draw a skull, ribs and spine with white crayon | Label the main bones'],
          q: [
            ch('Your ribs protect your…', '*heart and lungs|feet|hair'),
            ch('Your backbone is also called the…', '*spine|skull|elbow'),
            tf('Muscles pull bones to make them move.', true),
          ],
          ms: ['Names key bones and their functions', 'Explains muscle–bone movement', 'Identifies joints'],
        }),
      ]),
      U('heart-lungs', 'Heart and Lungs', 'Breathing in air and pumping blood.', 'Lungs: breathing in and out; Heart: pumping blood; Pulse and exercise', [
        L('heartbeat', 'Listen to Your Heart', {
          o: ['Explain that the heart pumps blood around the body', 'Notice that exercise makes the heart beat faster'],
          p: ['Knows the ribs protect the heart'],
          e: [
            'Your heart is a strong muscle about the size of your fist. It pumps blood around your whole body, day and night, without stopping.',
            'Your lungs fill with air when you breathe in. They take oxygen from the air into your blood. When you breathe out, they push out carbon dioxide.',
            'When you run or dance, your muscles need more oxygen, so you breathe faster and your heart beats faster. You can feel your heartbeat as a pulse in your wrist or neck.',
          ],
          v: 'heart = a muscle that pumps blood; lungs = organs that breathe air in and out; pulse = the beat of your heart you can feel; oxygen = a gas in the air our bodies need',
          x: ['After running, your heart thumps faster.', 'Breathe in deeply and feel your chest get bigger.'],
          s: ['Kiko\'s Thumping Drum', 'After racing up the hill, Kiko put a hoof on Kiko\'s chest. Thump-thump-thump-thump! "My heart is drumming!" Tara explained, "Your muscles need more oxygen when you run, so your heart beats faster to deliver it." After a rest, the drum slowed down again.'],
          a: [
            ch('The heart pumps…', '*blood|air|food'),
            ch('Lungs help us…', '*breathe|see|taste'),
            ch('After running, your heartbeat is…', '*faster|slower|stopped'),
            tf('Your heart is about the size of your fist.', true),
          ],
          t: ['Why do you breathe faster when you run?', 'Does your heart ever rest?'],
          k: ['Count your heartbeats for 15 seconds before and after jumping, and tell someone what changed.'],
          m: ['🧪 Pulse Experiment', 'a timer, paper, a grown-up to help find your pulse', 'Find your pulse on your wrist or neck | Count beats for 15 seconds while sitting | Do 30 jumping jacks and count again | Rest for 2 minutes and count once more | Make a simple chart'],
          q: [
            ch('Where can you feel your pulse?', '*wrist|hair|elbow tip'),
            ch('Which gas do our lungs take from the air?', '*oxygen|smoke|steam'),
            tf('Exercise makes the heart beat faster.', true),
          ],
          ms: ['Explains heart and lung functions', 'Measures pulse', 'Links exercise to heart rate'],
        }),
      ]),
    ]),
    S('s6', 'The brain and nerves, teeth and digestion basics.', [
      'Explain the brain controls the body', 'Know about teeth types and care', 'Describe basic digestion',
    ], [
      U('brain', 'The Amazing Brain', 'The brain is the body\'s control centre.', 'Brain and nerves; Senses send messages; Reflexes; Sleep and the brain', [
        L('control-centre', 'The Control Centre', {
          o: ['Explain that the brain controls the body using nerves', 'Describe a reflex'],
          p: ['Knows the skull protects the brain'],
          e: [
            'Your brain is your body\'s control centre. It lets you think, remember, feel, and move. It is protected by your skull.',
            'Nerves are like tiny wires that carry messages between your brain and every part of your body, very fast. When you touch something, nerves tell your brain; when you decide to wave, your brain sends a message to your arm.',
            'A reflex is an automatic, very fast response, like pulling your hand away from something hot before you even think. Sleep helps your brain store memories and rest.',
          ],
          v: 'brain = the organ that controls thinking and the body; nerve = a pathway carrying messages to and from the brain; reflex = an automatic quick reaction; memory = what the brain stores to remember',
          x: ['Blinking when something flies at your eyes is a reflex.', 'Learning to ride a bicycle builds new pathways in your brain.'],
          s: ['The Message Race', 'Rangi touched a hot cup. Zing! A message raced up a nerve. Before Rangi even said "Ouch!", the hand had jerked away. "That was a reflex," said Nova. "Your body protected you super fast — and THEN your brain noticed."'],
          a: [
            ch('The brain is protected by the…', '*skull|ribs|knees'),
            ch('Messages travel through…', '*nerves|bones|hair'),
            tf('A reflex happens automatically, without thinking first.', true),
            ch('Sleep helps the brain…', '*store memories and rest|stop working forever|grow hair'),
          ],
          t: ['Why is it helpful that some reactions are automatic?', 'How do you think the brain remembers things?'],
          k: ['Explain to someone how a message travels when you touch something.'],
          m: ['🧪 Ruler Drop Reaction Test', 'a 30 cm ruler, a partner, paper', 'A partner holds a ruler above your open hand | They drop it without warning and you catch it | Record the centimetre mark where you caught it | Repeat 5 times and see if practice helps'],
          q: [
            ch('Which controls your body?', '*brain|stomach|toenails'),
            ch('Pulling away from heat quickly is a…', '*reflex|dream|memory'),
            tf('Nerves carry messages very quickly.', true),
          ],
          ms: ['Explains brain and nerve roles', 'Describes reflexes', 'Measures reaction time'],
        }),
      ]),
      U('teeth', 'Teeth and Tummies', 'Teeth and the start of digestion.', 'Types of teeth: incisors, canines, molars; Tooth care; Food\'s journey', [
        L('tooth-types', 'Bite, Tear and Chew', {
          o: ['Name the types of teeth and their jobs', 'Explain how to care for teeth'],
          p: ['Knows about baby teeth'],
          e: [
            'You have different teeth for different jobs. Incisors at the front are flat and sharp for biting. Canines are pointy for tearing. Molars at the back are wide for chewing and grinding.',
            'Sugary foods help germs make acid that can cause holes (cavities) in teeth. Brushing twice a day with fluoride toothpaste, for about two minutes, keeps teeth strong.',
            'After chewing, food goes down a tube to your stomach, where it is mashed and mixed, and then into your intestines.',
          ],
          v: 'incisor = a front tooth for biting; canine = a pointy tooth for tearing; molar = a back tooth for chewing; cavity = a hole in a tooth caused by decay',
          x: ['Biting an apple uses incisors.', 'Chewing rice uses molars.'],
          s: ['The Sugar Bugs', 'Tiny germs called sugar bugs loved it when Kiko ate sticky sweets and forgot to brush. They made acid that started a little hole in a molar. Kiko visited the dentist, got it fixed, and started brushing twice a day. "No more parties for the sugar bugs!" Kiko said.'],
          a: [
            mt('Match the tooth to its job', 'incisor=biting|canine=tearing|molar=chewing'),
            ch('How often should you brush?', 'once a week|*twice a day|never'),
            tf('Sugary snacks can cause cavities.', true),
            ch('After chewing, food goes to the…', '*stomach|lungs|brain'),
          ],
          t: ['Why do you think animals like tigers have big canines?', 'Why is it important to brush at night?'],
          k: ['Teach a younger child how to brush teeth for two minutes.'],
          m: ['🧪 Egg Tooth Experiment', 'two hard-boiled eggs, vinegar, cola, water, cups (eggshell is like tooth enamel)', 'Put eggs in vinegar, cola and water for a day | Observe changes to the shells | Try brushing one stained egg with toothpaste | Explain what this shows about teeth'],
          q: [
            ch('Back teeth for grinding are…', 'incisors|canines|*molars'),
            ch('Fluoride toothpaste helps…', '*keep teeth strong|make teeth fall out|change teeth colour'),
            tf('Cavities are holes in teeth.', true),
          ],
          ms: ['Names tooth types and functions', 'Demonstrates good brushing', 'Links diet to dental health'],
        }),
      ]),
    ]),
    S('s7', 'Body systems working together: circulatory, respiratory, digestive.', [
      'Describe the circulatory and respiratory systems', 'Explain how systems work together', 'Understand the effects of exercise',
    ], [
      U('circulation', 'The Circulatory System', 'Heart, blood vessels and blood.', 'Arteries, veins, capillaries; Double circulation; Blood components', [
        L('blood-highway', 'The Blood Highway', {
          o: ['Describe the parts of the circulatory system', 'Trace blood\'s path through the heart, lungs and body'],
          p: ['Knows the heart pumps blood'],
          e: [
            'The circulatory system includes the heart, blood vessels and blood. Arteries carry blood away from the heart; veins carry it back. Tiny capillaries connect them and let oxygen and food pass into cells.',
            'Humans have a double circulation: the right side of the heart pumps blood to the lungs to pick up oxygen; the left side pumps oxygen-rich blood to the whole body.',
            'Blood contains red blood cells (carry oxygen), white blood cells (fight infection), platelets (help clotting) and plasma (the liquid that carries nutrients and wastes).',
          ],
          c: [['evidence', 'William Harvey published his demonstration of blood circulation in 1628. Earlier, Ibn al-Nafis (13th century) described the pulmonary circulation.']],
          v: 'artery = a vessel carrying blood away from the heart; vein = a vessel carrying blood to the heart; capillary = a tiny vessel connecting arteries and veins; red blood cell = a cell that carries oxygen',
          x: ['A cut stops bleeding because platelets help form a clot.', 'Veins look bluish through skin, but blood is always red.'],
          s: ['Harvey\'s Counting', 'In the 1600s, William Harvey calculated how much blood the heart pumps each hour. It was far more than a body could make from food! He reasoned that the same blood must go round and round. His careful measurements overturned ideas that had been taught for centuries.'],
          a: [
            mt('Match the part to its job', 'artery=carries blood away from the heart|vein=carries blood back to the heart|capillary=lets substances pass to cells|platelet=helps blood clot'),
            od('Path of blood (simplified)', 'right side of heart|lungs (pick up oxygen)|left side of heart|body'),
            tf('Blood inside veins is blue.', false, 'Blood is always red; veins only look bluish through skin.'),
            ch('Red blood cells carry…', '*oxygen|thoughts|bones'),
          ],
          t: ['Why does the body need a double circulation?', 'What might happen if a person has too few red blood cells?'],
          k: ['Trace the path of blood through the body for someone using a diagram.'],
          m: ['Circulation Floor Map', 'chalk or tape, red and blue paper cards', 'Draw a large heart, lungs and body on the floor | Walk the path as a "blood cell", picking up red (oxygen) cards at the lungs | Drop them off in the body and pick up blue (CO₂) cards | Explain each stop'],
          q: [
            ch('Blood picks up oxygen in the…', '*lungs|stomach|brain'),
            ch('White blood cells…', '*fight infection|carry oxygen|digest food'),
            tf('Arteries carry blood away from the heart.', true),
          ],
          ms: ['Describes circulatory components', 'Traces double circulation', 'Explains blood components'],
        }),
      ]),
      U('breathing', 'Breathing and Exercise', 'The respiratory system and fitness.', 'Airways and alveoli; Breathing mechanism: diaphragm; Effects of exercise and smoking', [
        L('breathing-system', 'How We Breathe', {
          o: ['Describe the path of air into the lungs', 'Explain the effects of exercise and smoking on breathing'],
          p: ['Knows lungs take in oxygen'],
          e: [
            'Air enters through the nose or mouth, travels down the windpipe (trachea), into two bronchi, then smaller tubes, ending in millions of tiny air sacs called alveoli. Oxygen passes from alveoli into the blood.',
            'Breathing is powered by the diaphragm, a dome-shaped muscle under the lungs. When it contracts and flattens, the chest gets bigger and air rushes in.',
            'Regular exercise strengthens the heart and breathing muscles. Smoking damages the alveoli and airways, making breathing harder and causing serious diseases.',
          ],
          v: 'trachea = the windpipe; alveoli = tiny air sacs where oxygen enters the blood; diaphragm = the muscle that powers breathing; respiratory system = the organs used for breathing',
          x: ['Yoga breathing (pranayama) involves slow, controlled breaths.', 'Smoke and air pollution can irritate airways.'],
          s: ['The Balloon Lungs', 'Nova made a model: a bottle with two balloons inside and a stretchy sheet at the bottom. When Nova pulled the sheet down, the balloons inflated. "The sheet is the diaphragm," Nova explained. "When it moves down, air rushes into the lungs."'],
          a: [
            od('Path of air', 'nose|trachea|bronchi|alveoli'),
            ch('The muscle that powers breathing is the…', '*diaphragm|heart|biceps'),
            tf('Smoking damages the lungs.', true),
            ch('Oxygen enters the blood in the…', '*alveoli|stomach|skull'),
          ],
          t: ['Why do athletes train to improve their breathing?', 'Why might air pollution be especially harmful for children?'],
          k: ['Use a model or drawing to explain to someone how the diaphragm makes us breathe.'],
          m: ['🧪 Bottle Lung Model', 'a plastic bottle (cut by an adult), two balloons, a straw or Y-connector, a rubber glove or balloon sheet, tape', 'Insert balloons into the bottle via a straw | Stretch a sheet over the cut bottom | Pull the sheet down and watch the balloons inflate | Label the parts and explain the model\'s limits'],
          q: [
            ch('The windpipe is the…', '*trachea|oesophagus|diaphragm'),
            ch('Exercise makes breathing muscles…', '*stronger|weaker|disappear'),
            tf('The diaphragm sits under the lungs.', true),
          ],
          ms: ['Traces the respiratory pathway', 'Explains breathing mechanics', 'Evaluates effects of exercise and smoking'],
        }),
      ]),
    ]),
    S('s9', 'Puberty and growth, the immune system, and the nervous system in more depth.', [
      'Understand changes during puberty', 'Explain how the immune system defends the body', 'Describe the nervous and endocrine systems',
    ], [
      U('growing-up', 'Growing Up: Puberty', 'Body changes as children become adults.', 'Hormones; Physical changes; Emotional changes; Hygiene and self-care', [
        L('puberty', 'Changes During Puberty', {
          o: ['Describe common physical and emotional changes during puberty', 'Explain that puberty timing varies and is normal'],
          p: ['Knows the body grows and changes'],
          e: [
            'Puberty is the time when a child\'s body begins to develop into an adult\'s body. It is triggered by hormones — chemical messengers in the blood. It often starts between about 8 and 14 years old and varies a lot between people.',
            'Common changes include growth spurts, body hair, sweating more, skin changes such as pimples, voice changes, and development of the reproductive system. Girls begin menstruation (periods); boys\' voices deepen.',
            'Emotions can change too: feeling more sensitive or moody is common. Talking to trusted adults, good hygiene, sleep and healthy food all help. Everyone\'s timing is different — and that is normal.',
          ],
          v: 'puberty = the stage when a body develops from child to adult; hormone = a chemical messenger in the blood; menstruation = a monthly period in girls and women as part of the reproductive cycle; growth spurt = a period of fast growth',
          x: ['Using deodorant and bathing daily helps with extra sweat.', 'Some friends may grow taller earlier than others.'],
          s: ['Different Timings', 'In Class 6, Riya was suddenly the tallest in her class, while her friend Meera hadn\'t changed at all. Meera worried something was wrong. Their teacher explained: "Everyone\'s body has its own timetable. Earlier or later — both are normal." Meera felt much better.'],
          a: [
            ch('Puberty is triggered by…', '*hormones|eating sweets|exercise only'),
            ch('The age puberty starts…', 'is the same for everyone|*varies from person to person'),
            tf('Feeling more emotional during puberty is common.', true),
            mt('Match the change to self-care', 'more sweating=bathe daily and use deodorant|pimples=wash face gently|mood changes=talk to a trusted adult'),
          ],
          t: ['Why might it help to know about puberty before it starts?', 'Who are trusted adults you could talk to about body changes?'],
          k: ['List three trusted adults you could ask questions about growing up, and practise how you might start the conversation.'],
          m: ['Self-Care Kit Plan', 'paper, pens', 'List hygiene items useful during puberty | Plan a simple daily routine for sleep, washing and exercise | Write questions you might want to ask a trusted adult | Keep the plan somewhere private'],
          q: [
            ch('Chemical messengers in the blood are…', '*hormones|nerves|bones'),
            tf('Everyone starts puberty at exactly the same age.', false),
            ch('A good way to manage worries about body changes:', '*talk to a trusted adult|keep it secret forever|compare yourself constantly to others'),
          ],
          ms: ['Describes puberty changes accurately', 'Recognises timing variation as normal', 'Identifies trusted sources of help'],
        }),
      ]),
      U('immune', 'The Immune System', 'How the body fights germs.', 'Pathogens: bacteria, viruses; Barriers: skin, mucus; White blood cells and antibodies; Vaccines', [
        L('defence', 'The Body\'s Defence Force', {
          o: ['Describe the body\'s defences against pathogens', 'Explain how vaccines work'],
          p: ['Knows blood components'],
          e: [
            'Pathogens are microbes that cause disease — some bacteria, viruses, fungi and parasites. The body\'s first defences are barriers: skin, mucus in the nose, tears, and stomach acid.',
            'If pathogens get in, white blood cells attack them. Some engulf pathogens; others make antibodies that lock onto specific pathogens. Memory cells remember them, so the next infection is fought off faster.',
            'Vaccines safely train the immune system using a harmless form or part of a pathogen, so the body builds memory without getting the disease. Vaccination has greatly reduced diseases like polio — India was certified polio-free in 2014.',
          ],
          c: [['evidence', 'Edward Jenner developed the smallpox vaccine in 1796; smallpox was declared eradicated worldwide in 1980. The WHO certified India polio-free in 2014.']],
          v: 'pathogen = a microbe that causes disease; antibody = a protein that targets a specific pathogen; vaccine = a substance that trains the immune system safely; immunity = the body\'s ability to resist a disease',
          x: ['Handwashing removes pathogens before they enter the body.', 'Antibiotics treat bacterial infections but do not work against viruses.'],
          s: ['The Last Case of Smallpox', 'Smallpox once killed millions of people. Through a huge global vaccination effort — including mass campaigns in India in the 1970s — health workers tracked down every case. The last naturally occurring case was in 1977, and in 1980 the world declared smallpox eradicated. It is one of humanity\'s greatest achievements.'],
          a: [
            mt('Match the defence', 'skin=physical barrier|white blood cells=attack pathogens|antibodies=target specific pathogens|vaccine=trains the immune system'),
            ch('Antibiotics work against…', '*bacteria|viruses|all germs equally'),
            tf('Memory cells help the body fight an infection faster the second time.', true),
            ch('India was certified polio-free in…', '1990|*2014|2022'),
          ],
          t: ['Why do some vaccines need booster doses?', 'Why is vaccinating many people important even for those who can\'t be vaccinated?'],
          k: ['Explain to someone how a vaccine works using the idea of a "wanted poster".'],
          m: ['🧪 Glitter Germ Handwashing Test', 'glitter or a little flour, soap, water, a timer', 'Rub glitter on your hands as pretend germs | Rinse with water only for 5 seconds and observe | Wash properly with soap for 20 seconds | Compare and explain why technique matters'],
          q: [
            ch('Proteins that lock onto specific pathogens are…', '*antibodies|hormones|platelets'),
            ch('Vaccines work by…', '*training the immune system safely|killing all bacteria in the body|replacing blood'),
            tf('Smallpox has been eradicated.', true),
          ],
          ms: ['Describes immune defences', 'Explains vaccination', 'Distinguishes antibiotics and antivirals'],
        }),
      ]),
    ]),
    S('s12', 'Homeostasis, the nervous and endocrine systems, and health decisions.', [
      'Explain homeostasis', 'Compare nervous and hormonal control', 'Evaluate health information critically',
    ], [
      U('homeostasis', 'Homeostasis', 'Keeping the internal environment stable.', 'Temperature regulation; Blood glucose and insulin; Negative feedback', [
        L('negative-feedback', 'Keeping Balance', {
          o: ['Explain homeostasis and negative feedback', 'Describe control of body temperature and blood glucose'],
          p: ['Understands body systems and hormones'],
          e: [
            'Homeostasis is keeping conditions inside the body stable — temperature around 37 °C, blood glucose and water levels within safe ranges — even when the outside changes.',
            'It works by negative feedback: a change is detected, and the body responds to reverse it. If you overheat, you sweat and blood vessels near the skin widen to lose heat; if cold, you shiver and vessels narrow.',
            'Blood glucose is controlled by hormones from the pancreas. After a meal, insulin helps cells take in glucose, lowering blood sugar. In type 1 diabetes, the body makes little or no insulin; in type 2, the body doesn\'t respond to insulin properly.',
          ],
          v: 'homeostasis = maintaining a stable internal environment; negative feedback = a response that reverses a change; insulin = a hormone that lowers blood glucose; pancreas = an organ that makes insulin',
          x: ['Shivering generates heat from muscle activity.', 'Diabetes affects millions of people in India.'],
          s: ['The Discovery of Insulin', 'In 1921–22, Frederick Banting, Charles Best and colleagues in Toronto extracted insulin and used it to treat a 14-year-old boy, Leonard Thompson, who was dying of diabetes. He recovered. Insulin turned a fatal disease into a manageable condition for millions.'],
          a: [
            od('Negative feedback steps', 'a change is detected|a signal is sent|the body responds|the change is reversed'),
            ch('When too hot, the body…', '*sweats|shivers|stops breathing'),
            ch('Insulin ___ blood glucose.', '*lowers|raises|does not affect'),
            tf('Normal body temperature is around 37 °C.', true),
          ],
          t: ['Why is negative feedback a good design for keeping things stable?', 'How can lifestyle affect the risk of type 2 diabetes?'],
          k: ['Explain temperature control to someone, using a home thermostat as an analogy.'],
          m: ['🧪 Cooling by Evaporation', 'two thermometers, a wet cloth, a fan', 'Wrap one thermometer bulb in a wet cloth | Place both in front of a fan | Record temperatures every minute for 10 minutes | Relate the result to sweating'],
          q: [
            ch('Homeostasis means…', '*keeping internal conditions stable|growing taller|digesting food'),
            ch('Insulin is made by the…', '*pancreas|heart|lungs'),
            tf('Shivering helps generate heat.', true),
          ],
          ms: ['Explains homeostasis with examples', 'Describes negative feedback', 'Explains glucose regulation and diabetes accurately'],
        }),
      ]),
      U('health-info', 'Evaluating Health Information', 'Making good decisions with evidence.', 'Clinical trials; Correlation vs causation in health news; Misinformation and trusted sources', [
        L('health-claims', 'Is This Health Claim True?', {
          o: ['Evaluate health claims using evidence', 'Explain how clinical trials test treatments'],
          p: ['Understands body systems and the immune system'],
          e: [
            'Health claims are everywhere — in adverts, social media and messages forwarded by relatives. Some are helpful, some are wrong, and some are dangerous.',
            'Good evidence often comes from randomised controlled trials: participants are randomly split into groups, one receiving the treatment and one a placebo or standard care, often without knowing which (blinding). This shows whether the treatment itself works.',
            'Ask: Who is making the claim? Is there evidence from trials? Is it a single story or many patients? Does it promise a "miracle cure"? Check with qualified doctors and reliable health organisations.',
          ],
          v: 'clinical trial = a study testing a medical treatment on people; placebo = an inactive treatment used for comparison; randomised = assigned by chance; misinformation = false or misleading information',
          x: ['"This herb cures all diseases" — a red-flag claim.', 'A vaccine approved after large phase 3 trials.'],
          s: ['James Lind and the Oranges', 'In 1747, ship\'s surgeon James Lind tested treatments for scurvy on twelve sick sailors, giving pairs different remedies. Those given oranges and lemons recovered fast. It was one of the first controlled trials — and showed the power of comparing treatments fairly.'],
          a: [
            ch('Which is a red flag?', '*"Miracle cure for every disease!"|"Results from a large controlled trial"|"Ask your doctor"'),
            ch('A placebo is…', '*an inactive treatment for comparison|the strongest medicine|a type of vitamin'),
            tf('Randomisation helps make trial groups fair.', true),
            mt('Match', 'randomised=assigned by chance|blinded=participants don\'t know their group|placebo=inactive comparison'),
          ],
          t: ['Why are personal stories not enough to prove a treatment works?', 'How should you respond kindly when a relative forwards a false health message?'],
          k: ['Evaluate a real health advert or message with someone, explaining your reasoning.'],
          m: ['Health Claim Investigation', 'a health claim from an advert or message, reliable sources (WHO, government health sites, textbooks)', 'Choose a claim | Find what evidence exists | Rate the evidence quality | Write a short, respectful fact-check that could be shared with family'],
          q: [
            ch('The strongest evidence for a treatment usually comes from…', 'one person\'s story|*randomised controlled trials|an advert'),
            ch('Lind\'s 1747 trial tested treatments for…', '*scurvy|malaria|polio'),
            tf('It\'s wise to check health claims with qualified doctors.', true),
          ],
          ms: ['Evaluates health claims critically', 'Explains trial design', 'Communicates corrections respectfully'],
        }),
      ]),
    ]),
  ],
});
