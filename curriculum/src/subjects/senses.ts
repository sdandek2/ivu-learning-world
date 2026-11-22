import { subject, S, U, L, ch, tf, od, mt, ct } from '../dsl.ts';

export default subject({
  id: 'senses',
  description: 'How we sense the world: the five classic senses and their organs, protecting our senses, how eyes and ears work, perception and illusions, senses beyond five (balance, body position), and how the brain builds experience — including inclusion of people with sensory disabilities.',
  stages: [
    S('s4', 'Seeing, hearing, smelling, tasting and touching.', [
      'Name the five senses and their body parts', 'Use senses to explore objects', 'Describe what they sense',
    ], [
      U('five-senses', 'My Five Senses', 'We learn about the world through our senses.', 'See with eyes; Hear with ears; Smell with nose; Taste with tongue; Touch with skin', [
        L('sense-organs', 'Five Ways to Explore', {
          o: ['Name the five senses and the body part for each', 'Use the senses to describe an object'],
          p: ['Names body parts'],
          e: [
            'We have five senses that tell us about the world. We see with our eyes, hear with our ears, smell with our nose, taste with our tongue, and touch with our skin.',
            'Our senses work together. When we eat a mango, we see its yellow colour, smell its sweet smell, feel its smooth skin and taste its juicy sweetness.',
            'Our senses help keep us safe too: we smell smoke, hear a car horn, and feel when something is too hot.',
          ],
          v: 'sense = a way our body notices things; tongue = the part of the mouth that tastes; skin = covers our body and feels touch; smell = what our nose notices',
          x: ['Hearing a bell tells us school has started.', 'Touching a cactus tells us it is prickly.'],
          s: ['The Mango Detective', 'Zuri was blindfolded and given something to explore. She felt it — smooth and round. She smelled it — sweet! She heard a little squish when she pressed it. Then she tasted it — juicy and sweet! "It\'s a mango!" she shouted. "My senses solved the mystery!"'],
          a: [
            mt('Match the sense to the body part', 'see=👀 eyes|hear=👂 ears|smell=👃 nose|taste=👅 tongue'),
            ch('We feel touch with our…', '*skin|hair|teeth'),
            ct('How many senses are we learning about?', 5),
            tf('Our senses can help keep us safe.', true),
          ],
          t: ['Which sense would you use to find out if milk has gone sour?', 'Which sense do you think you use most?'],
          k: ['Describe your favourite food using all five senses.'],
          m: ['Senses Walk', 'a notebook, crayons, a grown-up', 'Go on a short walk | Stop five times — once for each sense | Draw or tell what you saw, heard, smelled, felt and tasted (only safe snacks!) | Share your favourite sense moment'],
          q: [
            ch('We hear with our…', 'eyes|*ears|nose'),
            ch('Which sense tells us a flower smells sweet?', '*smell|hearing|sight'),
            tf('We taste with our tongue.', true),
          ],
          ms: ['Names senses and organs', 'Describes objects with multiple senses', 'Links senses to safety'],
        }),
      ]),
      U('careful-senses', 'Taking Care of Our Senses', 'Protecting eyes, ears and skin.', 'Eyes: no staring at the Sun, screen breaks; Ears: not too loud; Skin: sun protection, hot things', [
        L('protect-senses', 'Look After Your Senses', {
          o: ['Name ways to protect eyes, ears and skin', 'Know some people use glasses, hearing aids or other tools'],
          p: ['Knows the five senses'],
          e: [
            'Our senses are precious, so we look after them. Never look straight at the Sun. Take breaks from screens and look at faraway things to rest your eyes.',
            'Very loud sounds can hurt our ears. We can cover our ears near very loud noises and keep the volume low on headphones.',
            'Some people use glasses to see better or hearing aids to hear better. Some people who are blind read Braille with their fingers, and some people who are deaf talk using sign language. Everyone senses the world in their own way.',
          ],
          v: 'protect = keep safe; glasses = lenses that help people see clearly; hearing aid = a small device that helps people hear; Braille = raised dots people read with their fingers',
          x: ['Wearing a hat in strong sun protects your eyes and skin.', 'Indian Sign Language is used by many deaf people in India.'],
          s: ['Grandpa\'s Glasses', 'Grandpa couldn\'t read Kiko\'s storybook. "The letters are fuzzy!" Then he put on his glasses — "Now they\'re clear!" Kiko tried them on — everything went blurry! "Glasses are made just for your eyes," Grandpa laughed.'],
          a: [
            ch('To protect your ears from loud noise you can…', '*cover your ears|shout louder|turn the volume up'),
            ch('We should never look straight at…', '*the Sun|a book|a tree'),
            tf('Some people read with their fingers using Braille.', true),
            mt('Match the help', 'glasses=help seeing|hearing aid=help hearing|Braille=reading with fingers'),
          ],
          t: ['Why should we take breaks from screens?', 'How could we make our school easier for someone who can\'t see?'],
          k: ['Tell someone three ways you will look after your eyes and ears.'],
          m: ['Braille Name Card', 'card, glue, lentils or beads, a Braille alphabet chart', 'Find the Braille letters for your name | Glue lentils in the right dot patterns | Close your eyes and feel your name | Share it with your family'],
          q: [
            ch('Which protects your skin from strong sun?', '*a hat and shade|staying out all day|nothing'),
            tf('Very loud sounds can harm hearing.', true),
            ch('Sign language is a way of…', '*talking with hands|reading with fingers|smelling'),
          ],
          ms: ['Describes ways to protect senses', 'Shows awareness and respect for sensory differences', 'Knows Braille and sign language exist'],
        }),
      ]),
    ]),
    S('s5', 'Exploring each sense with experiments.', [
      'Investigate taste and smell together', 'Explore textures by touch', 'Test hearing direction',
    ], [
      U('taste-smell', 'Taste and Smell', 'Two senses that work as a team.', 'Taste: sweet, sour, salty, bitter, umami; Smell helps taste; Blocked nose experiment', [
        L('taste-test', 'The Taste Test', {
          o: ['Name the basic tastes', 'Show that smell helps us taste'],
          p: ['Knows the five senses'],
          e: [
            'Your tongue has taste buds that sense five basic tastes: sweet (sugar), salty (salt), sour (lemon), bitter (karela, bitter gourd), and umami — a savoury taste found in foods like tomatoes and mushrooms.',
            'Smell and taste work together. Much of what we call "flavour" actually comes from smell!',
            'When you have a blocked nose from a cold, food tastes bland because your nose can\'t help.',
          ],
          c: [['science', 'The old "tongue map" showing different tastes in different zones is a myth; taste buds across the tongue can sense all basic tastes.']],
          v: 'taste bud = a tiny sensor on the tongue; sour = a sharp taste like lemon; bitter = a strong taste like karela; flavour = taste and smell together',
          x: ['Amla is sour; jaggery is sweet.', 'Food tastes dull with a cold.'],
          s: ['The Blocked-Nose Banana', 'Kiko had a cold and complained, "The banana tastes of nothing!" Momo held Kiko\'s nose closed while Kiko tasted an apple, then let go. "Now I can taste it!" Kiko said. "Your nose is part of your tongue\'s team," Momo laughed.'],
          a: [
            mt('Match the food to the taste', 'lemon=sour|sugar=sweet|salt=salty|karela=bitter'),
            ch('With a blocked nose, food tastes…', '*less flavourful|much stronger|the same'),
            tf('Smell helps us taste.', true),
            ch('Taste buds are on the…', '*tongue|nose|ears'),
          ],
          t: ['Why might babies like sweet tastes and dislike bitter ones?', 'Why does medicine sometimes taste better if you hold your nose?'],
          k: ['Do a taste test with a grown-up and describe each taste.'],
          m: ['🧪 Nose-Hold Taste Test', 'small pieces of apple, cucumber and potato (raw, peeled), a blindfold, a grown-up', 'Wear a blindfold and hold your nose | Taste each piece and guess what it is | Repeat without holding your nose | Compare your results'],
          q: [
            ch('Which is bitter?', '*karela (bitter gourd)|honey|banana'),
            ct('How many basic tastes did we learn?', 5),
            tf('The "tongue map" with separate taste zones is correct.', false),
          ],
          ms: ['Names five basic tastes', 'Demonstrates smell\'s role in flavour', 'Conducts a simple sensory test'],
        }),
      ]),
      U('touch-hearing', 'Touch and Hearing', 'Feeling textures and finding sounds.', 'Textures: rough, smooth, soft, bumpy; Hot and cold; Two ears find direction', [
        L('two-ears', 'Why Two Ears?', {
          o: ['Describe textures using touch words', 'Explain why two ears help find where a sound comes from'],
          p: ['Knows senses and their organs'],
          e: [
            'Our skin can feel textures — rough, smooth, soft, bumpy, prickly — and also temperature: hot and cold. Fingertips are especially sensitive.',
            'Having two ears helps us tell where a sound comes from. A sound on your left reaches your left ear a tiny bit earlier and a little louder than your right ear. Your brain uses this to work out the direction.',
            'With one ear covered, finding the direction of a sound is much harder.',
          ],
          v: 'texture = how something feels to touch; sensitive = able to notice small things; direction = which way something is; temperature = how hot or cold something is',
          x: ['Velvet is soft; sandpaper is rough.', 'You turn your head towards a sound to find it.'],
          s: ['Where\'s the Bell?', 'In a game, Olu sat blindfolded while friends rang a bell from different spots. Olu pointed right at it every time! Then Olu covered one ear — and kept pointing the wrong way. "Two ears are a team," Olu hooted, "just like two eyes."'],
          a: [
            mt('Match the texture', 'sandpaper=rough|silk=smooth|cotton wool=soft'),
            ch('Two ears help us find…', '*which direction a sound comes from|colours|smells'),
            tf('Our fingertips are very sensitive.', true),
            ch('Covering one ear makes finding a sound…', '*harder|easier|the same'),
          ],
          t: ['Why do you think animals like deer can turn their ears?', 'Which part of your body is least sensitive to touch?'],
          k: ['Close your eyes, feel three textures, and describe them to someone.'],
          m: ['🧪 Sound Direction Game', 'a blindfold, a bell or clapping hands, a partner', 'Sit blindfolded in the middle of a room | A partner rings a bell from different places | Point to where you think it is | Repeat with one ear covered and compare scores'],
          q: [
            ch('A pineapple skin feels…', '*rough and bumpy|smooth|wet'),
            tf('Sound reaches the nearer ear first.', true),
            ch('Your skin can sense…', '*touch and temperature|colours|sounds'),
          ],
          ms: ['Describes textures precisely', 'Explains binaural hearing', 'Conducts a direction test'],
        }),
      ]),
    ]),
    S('s6', 'How eyes and ears work.', [
      'Describe parts of the eye and how we see', 'Describe parts of the ear and how we hear', 'Know how light and sound reach our senses',
    ], [
      U('how-eyes-work', 'How Eyes Work', 'Light enters the eye and the brain makes a picture.', 'Pupil, iris, lens, retina; Light reflects off objects into eyes; Glasses correct focus', [
        L('eye-parts', 'Inside the Eye', {
          o: ['Name parts of the eye', 'Explain that we see when light enters our eyes'],
          p: ['Knows light travels in straight lines'],
          e: [
            'We see things because light bounces off them and enters our eyes. Light passes through the pupil — the black hole in the middle of the eye.',
            'The coloured part around it is the iris, which makes the pupil bigger in dim light and smaller in bright light. The lens focuses light onto the retina at the back of the eye.',
            'The retina sends signals along the optic nerve to the brain, which turns them into the pictures we see. Glasses help focus light properly when the eye\'s lens can\'t do it alone.',
          ],
          v: 'pupil = the opening that lets light into the eye; iris = the coloured part of the eye; lens = focuses light; retina = the back of the eye that senses light',
          x: ['Your pupils get bigger in a dark room.', 'Near-sighted people see close things clearly but faraway things blurry.'],
          s: ['The Changing Pupils', 'Nova looked in a mirror in a dim room. Then she switched on a bright light and watched closely. Her pupils shrank! "The iris is like a camera," Nova said. "It lets in less light when it\'s bright to protect my eyes."'],
          a: [
            mt('Match the eye part to its job', 'pupil=lets light in|iris=changes pupil size|lens=focuses light|retina=senses light'),
            ch('We see objects because…', '*light bounces off them into our eyes|our eyes shoot beams|they make sound'),
            ch('In a dark room, pupils get…', '*bigger|smaller|disappear'),
            tf('The brain turns signals from the eyes into pictures.', true),
          ],
          t: ['Why can\'t we see anything in total darkness?', 'Why do some people need glasses only for reading?'],
          k: ['Show someone how their pupils change size in bright and dim light.'],
          m: ['🧪 Pupil Watch and Eye Model', 'a mirror, a torch (not pointed directly into eyes for long), a paper eye diagram', 'Look in a mirror in dim light, then turn on a room light and watch your pupils | Draw before and after | Label a diagram of the eye | Explain each part to someone'],
          q: [
            ch('The coloured part of the eye is the…', 'pupil|*iris|retina'),
            ch('The retina is at the…', '*back of the eye|front of the eye|ear'),
            tf('Glasses help focus light.', true),
          ],
          ms: ['Labels eye parts', 'Explains seeing via reflected light', 'Explains pupil response'],
        }),
      ]),
      U('how-ears-work', 'How Ears Work', 'Vibrations travel into the ear.', 'Outer ear, eardrum, ossicles, cochlea; Sound travels as vibrations; Hearing loss and protection', [
        L('ear-journey', 'A Sound\'s Journey', {
          o: ['Trace how sound travels through the ear', 'Explain how loud noise can damage hearing'],
          p: ['Knows sounds are vibrations'],
          e: [
            'Sound is made by vibrations travelling through the air. The outer ear collects sound and funnels it into the ear canal.',
            'The vibrations hit the eardrum, a thin skin that vibrates too. Three tiny bones (the smallest in the body) pass the vibrations to the cochlea, a snail-shaped part filled with liquid and tiny hair cells.',
            'The hair cells turn vibrations into signals sent to the brain. Very loud sounds can damage these hair cells, and they don\'t grow back — so protecting hearing matters.',
          ],
          v: 'eardrum = a thin skin that vibrates with sound; cochlea = a snail-shaped part of the inner ear; vibration = shaking back and forth; decibel = a unit for how loud a sound is',
          x: ['The stapes, in the middle ear, is the smallest bone in the body.', 'Fireworks up close can be loud enough to harm hearing.'],
          s: ['The Tin-Can Telephone', 'Rangi and Kiko made a telephone from two tin cans and a long string. Rangi whispered into one can, and Kiko heard it clearly through the other! "The string carries the vibrations," Rangi said, "just like the bones in our ears."'],
          a: [
            od('Path of sound', 'outer ear|ear canal|eardrum|tiny bones|cochlea|brain'),
            ch('The smallest bones in the body are in the…', '*ear|finger|nose'),
            tf('Hair cells damaged by loud noise usually don\'t grow back.', true),
            ch('Loudness is measured in…', '*decibels|metres|grams'),
          ],
          t: ['Why might people who listen to loud music often have hearing problems later?', 'How do hearing aids help?'],
          k: ['Explain to someone how a sound gets from a bell to their brain.'],
          m: ['🧪 Tin-Can Telephone', 'two paper cups or tins, a long string, a pin (adult help)', 'Make a hole in each cup and tie the string between them | Pull the string tight and talk | Try with a loose string | Explain how vibrations carry the sound'],
          q: [
            ch('Which vibrates when sound enters the ear?', '*eardrum|tongue|eyelid'),
            ch('The cochlea is shaped like a…', '*snail shell|star|square'),
            tf('Sound travels as vibrations.', true),
          ],
          ms: ['Traces the path of sound through the ear', 'Explains noise-induced hearing loss', 'Models sound transmission'],
        }),
      ]),
    ]),
    S('s7', 'Perception, illusions and more than five senses.', [
      'Explain that the brain interprets senses', 'Investigate optical illusions', 'Name senses beyond the five',
    ], [
      U('illusions', 'Tricks of the Brain', 'Seeing isn\'t always believing.', 'Optical illusions; Afterimages; The brain fills in gaps; Blind spot', [
        L('optical-illusions', 'Optical Illusions', {
          o: ['Explain that perception is the brain\'s interpretation', 'Investigate several illusions'],
          p: ['Knows how eyes work'],
          e: [
            'Your eyes collect light, but your brain decides what you see. This is called perception. Usually it\'s accurate — but sometimes the brain makes mistakes we call illusions.',
            'In the Müller-Lyer illusion, two equal lines look different lengths because of arrow-shaped ends. Afterimages appear when you stare at a colour, then look at white.',
            'Each eye has a blind spot where the optic nerve leaves the retina and there are no light sensors. You don\'t notice it because your brain fills in the gap!',
          ],
          v: 'perception = how the brain interprets sensory information; illusion = something that tricks our perception; afterimage = an image that lingers after looking away; blind spot = a part of the retina with no light sensors',
          x: ['Equal lines looking unequal.', 'A spinning wheel seeming to go backwards in videos.'],
          s: ['The Disappearing Dot', 'Professor Hoot drew a cross and a dot on a card and asked Kiko to close the left eye and stare at the cross with the right eye. As Kiko moved the card closer, the dot vanished! "Your blind spot," Hoot chuckled. "Your brain has been hiding it from you your whole life."'],
          a: [
            ch('Perception is done by the…', 'eyes alone|*brain|ears'),
            tf('Every eye has a blind spot.', true),
            ch('An illusion is…', '*a trick of perception|a real change in the object|a sound'),
            ch('Staring at red then white may show a ___ afterimage.', 'red|*green-blue|black'),
          ],
          t: ['If our brain can be fooled, how can we trust what we see?', 'Why might eyewitness accounts sometimes be wrong?'],
          k: ['Show someone an illusion and explain why it works.'],
          m: ['🧪 Blind Spot and Illusion Gallery', 'card, pens, ruler', 'Draw a cross and dot 8 cm apart and find your blind spot | Draw the Müller-Lyer lines and measure them | Create an afterimage card | Test each on family members and record reactions'],
          q: [
            tf('The Müller-Lyer lines are actually equal in length.', true),
            ch('We don\'t notice the blind spot because…', '*the brain fills in the gap|it doesn\'t exist|we blink'),
            ch('Illusions show that seeing involves…', '*the brain interpreting|only light|only colour'),
          ],
          ms: ['Explains perception as interpretation', 'Demonstrates illusions', 'Applies ideas to everyday judgement'],
        }),
      ]),
      U('more-senses', 'More Than Five Senses', 'Balance, body position and more.', 'Balance (vestibular sense); Body position (proprioception); Inner senses: hunger, thirst, pain, temperature', [
        L('hidden-senses', 'Our Hidden Senses', {
          o: ['Name senses beyond the traditional five', 'Explain balance and body-position senses'],
          p: ['Knows the five senses'],
          e: [
            'The "five senses" idea is old and simple. Scientists recognise more. The vestibular sense, in your inner ear, tells you about balance and movement — that\'s why spinning makes you dizzy.',
            'Proprioception tells you where your body parts are without looking — you can touch your nose with your eyes closed.',
            'We also sense temperature, pain, hunger, thirst and the need to breathe. These internal senses help keep us safe and healthy.',
          ],
          v: 'vestibular sense = the sense of balance from the inner ear; proprioception = sensing where your body parts are; dizzy = feeling unbalanced; interoception = sensing what is happening inside your body',
          x: ['Standing on one leg uses balance and proprioception.', 'Feeling hungry is an internal sense.'],
          s: ['The Spinning Chair', 'Kiko spun around and around on a chair, then tried to walk in a straight line — and wobbled everywhere! "The liquid in your inner ear is still swirling," Nova explained. "Your balance sense thinks you\'re still spinning."'],
          a: [
            mt('Match the sense', 'balance=vestibular sense|knowing where your arm is=proprioception|feeling hungry=interoception'),
            ch('The balance sense is in your…', '*inner ear|tongue|toes'),
            tf('Humans have more than five senses.', true),
            ch('Touching your nose with eyes closed uses…', '*proprioception|smell|hearing'),
          ],
          t: ['Why do astronauts sometimes feel sick in space?', 'Which "hidden" sense surprised you most?'],
          k: ['Demonstrate a balance test and explain what sense you are using.'],
          m: ['🧪 Balance Challenge', 'a timer, a flat floor, a cushion', 'Stand on one leg with eyes open and time it | Repeat with eyes closed | Repeat standing on a cushion | Graph the results and explain which senses help balance'],
          q: [
            ch('Spinning makes you dizzy because of your…', '*inner ear balance sense|eyelashes|teeth'),
            tf('Proprioception helps you know where your limbs are.', true),
            ch('Feeling thirsty is an…', '*internal sense|external sense of sight'),
          ],
          ms: ['Names senses beyond five', 'Explains vestibular and proprioceptive senses', 'Investigates balance'],
        }),
      ]),
    ]),
    S('s9', 'Animal senses compared, sensory technology, and accessibility.', [
      'Compare human and animal senses', 'Explain technology that extends senses', 'Design for accessibility',
    ], [
      U('animal-vs-human', 'Beyond Human Senses', 'What other animals can sense.', 'UV vision in bees; Infrared in snakes; Magnetic sense in birds; Electroreception in sharks', [
        L('extra-senses', 'Senses We Don\'t Have', {
          o: ['Describe senses some animals have that humans lack', 'Explain how technology extends human senses'],
          p: ['Knows the human senses'],
          e: [
            'Bees can see ultraviolet light, revealing patterns on flowers invisible to us. Some snakes, like pit vipers, detect infrared heat from warm-blooded prey.',
            'Many migrating birds appear to sense Earth\'s magnetic field. Sharks detect weak electric fields made by other animals\' muscles.',
            'Humans use technology to extend our senses: microscopes and telescopes for sight, infrared cameras for heat, microphones and sonar for sound, and sensors for magnetic fields.',
          ],
          v: 'ultraviolet = light beyond violet that humans can\'t see; infrared = heat radiation we can\'t see; electroreception = sensing electric fields; sonar = using sound echoes to detect objects',
          x: ['Thermal cameras help find people in smoke.', 'Ultrasound scans let doctors see inside the body.'],
          s: ['The Hidden Runway', 'A scientist photographed a plain yellow flower with a UV camera. Suddenly, dark lines appeared, pointing to the centre like a runway. "That\'s what the bees see," she said. "Flowers have been sending signals we never noticed."'],
          a: [
            mt('Match the animal to its sense', 'bee=ultraviolet vision|pit viper=infrared heat|shark=electroreception|migrating bird=magnetic sense'),
            ch('Thermal cameras detect…', '*infrared (heat)|smell|taste'),
            tf('Technology can extend human senses.', true),
            ch('Ultrasound uses…', '*sound|ultraviolet light|electric fields'),
          ],
          t: ['If you could add one animal sense to humans, which would be most useful?', 'Do animals experience the world in ways we can never fully imagine?'],
          k: ['Present one animal sense and one technology inspired by it.'],
          m: ['Sense-Extending Invention Poster', 'poster paper, research materials', 'Choose an animal sense humans lack | Research how it works | Find or invent a technology that mimics it | Present your poster'],
          q: [
            ch('Bees see…', '*ultraviolet patterns|only black and white|nothing'),
            ch('Sonar finds objects using…', '*sound echoes|smell|light'),
            tf('Some birds may sense Earth\'s magnetic field.', true),
          ],
          ms: ['Describes animal sensory abilities', 'Links them to technology', 'Evaluates how technology extends senses'],
        }),
      ]),
      U('accessibility', 'Designing for Everyone', 'Inclusion for people with sensory disabilities.', 'Visual and hearing impairments; Assistive technology: screen readers, captions; Universal design', [
        L('universal-design', 'Universal Design', {
          o: ['Describe assistive technologies for sensory disabilities', 'Apply universal design principles to a space or product'],
          p: ['Understands senses and perception'],
          e: [
            'Millions of people live with visual or hearing impairments. Disability is shaped not only by the body but by the environment: a building without ramps disables wheelchair users; a video without captions excludes deaf viewers.',
            'Assistive technologies include screen readers that speak text aloud, Braille displays, hearing aids, cochlear implants, captions and sign-language interpreters. Tactile paving helps blind people navigate pavements and stations.',
            'Universal design creates spaces and products usable by as many people as possible from the start — benefiting everyone, like captions that help in noisy places.',
          ],
          c: [['evidence', 'India\'s Rights of Persons with Disabilities Act, 2016, recognises a range of disabilities and requires accessibility in public buildings, transport and information.']],
          v: 'accessibility = how easily people of all abilities can use something; assistive technology = tools that help people with disabilities; universal design = designing for everyone from the start; tactile paving = textured ground surfaces that guide blind people',
          x: ['Audio announcements and Braille signage in metro stations.', 'Ramps help wheelchair users, parents with prams and delivery workers.'],
          s: ['The Museum That Listened', 'A museum asked blind and deaf visitors to test its exhibits. They found tiny labels, no audio guides, and videos without captions. After redesigning with tactile models, audio descriptions and captions, visitor numbers rose for everyone — families loved touching the models too.'],
          a: [
            mt('Match the tool to its use', 'screen reader=reads text aloud|captions=show spoken words as text|tactile paving=guides with texture|hearing aid=amplifies sound'),
            ch('Universal design means…', '*designing for as many people as possible from the start|designing only for experts|adding fixes later'),
            tf('Captions can help people without hearing loss too.', true),
            ch('India\'s disability rights law was passed in…', '1950|*2016|1990'),
          ],
          t: ['How is disability partly created by the environment?', 'What one change would make your school more accessible?'],
          k: ['Present an accessibility audit of a familiar place with three recommendations.'],
          m: ['Accessibility Audit', 'a checklist, notebook, camera', 'Choose a building (school, shop, park) | Check entrances, signage, lighting, sound and paths | Note barriers for people with sensory or mobility disabilities | Write recommendations and share them politely with those in charge'],
          q: [
            ch('Software that reads screen text aloud is a…', '*screen reader|microscope|thermometer'),
            ch('Ramps are an example of…', '*accessible design|decoration|a sensory illusion'),
            tf('Accessibility benefits many people, not just those with disabilities.', true),
          ],
          ms: ['Describes assistive technologies', 'Applies universal design', 'Shows respectful, inclusive reasoning'],
        }),
      ]),
    ]),
    S('s12', 'Neuroscience of perception and consciousness questions.', [
      'Explain how neurons transmit signals', 'Discuss how the brain constructs experience', 'Evaluate questions about consciousness',
    ], [
      U('neurons', 'Neurons and Signals', 'How nerve cells carry information.', 'Neuron structure; Action potentials; Synapses and neurotransmitters', [
        L('synapse', 'How Neurons Talk', {
          o: ['Describe neuron structure and signal transmission', 'Explain synapses and neurotransmitters'],
          p: ['Knows the nervous system basics'],
          e: [
            'Neurons are cells specialised to carry electrical signals. Dendrites receive signals, the cell body processes them, and a long axon carries the signal (an action potential) to other cells. A fatty myelin sheath speeds transmission.',
            'Between neurons is a tiny gap called a synapse. When a signal arrives, chemicals called neurotransmitters cross the gap and trigger the next neuron.',
            'The human brain contains roughly 86 billion neurons with trillions of connections. Learning strengthens some connections — neuroplasticity.',
          ],
          v: 'neuron = a nerve cell; axon = the long fibre carrying signals away from the cell body; synapse = the gap between neurons; neurotransmitter = a chemical that carries signals across synapses; neuroplasticity = the brain\'s ability to change with experience',
          x: ['Practising a skill strengthens neural pathways.', 'Some medicines act on neurotransmitters.'],
          s: ['Cajal\'s Drawings', 'In the late 1800s, Santiago Ramón y Cajal stained brain tissue and spent years drawing neurons under a microscope. He argued that the brain was made of separate cells connected at tiny gaps — not one continuous net. His beautiful drawings are still used, and he shared a Nobel Prize in 1906.'],
          a: [
            mt('Match the part', 'dendrite=receives signals|axon=carries signals away|synapse=gap between neurons|myelin=speeds transmission'),
            ch('Chemicals crossing synapses are…', '*neurotransmitters|antibodies|enzymes from the stomach'),
            tf('Learning can change connections in the brain.', true),
            ch('The human brain has roughly…', '86 thousand neurons|*86 billion neurons|86 neurons'),
          ],
          t: ['How does neuroplasticity give hope after brain injury?', 'What does "practice makes permanent" mean in terms of neurons?'],
          k: ['Explain a synapse to someone using a relay race analogy.'],
          m: ['Neuron Model and Human Chain', 'pipe cleaners, beads, string; a group of people', 'Build a model neuron and label it | Form a human chain passing a hand-squeeze "signal" and time it | Repeat with practice and discuss learning | Write up how this models (and doesn\'t model) real neurons'],
          q: [
            ch('An electrical signal along an axon is an…', '*action potential|antibody|hormone'),
            ch('Myelin…', '*speeds signals|stops signals|digests food'),
            tf('Cajal showed neurons are separate cells.', true),
          ],
          ms: ['Describes neuron structure and signalling', 'Explains synaptic transmission', 'Connects neuroscience to learning'],
        }),
      ]),
      U('consciousness', 'The Puzzle of Experience', 'How does the brain make the world we experience?', 'Perception as construction; Attention and inattentional blindness; Consciousness: science and philosophy', [
        L('constructed-world', 'Is the World Inside Your Head?', {
          o: ['Explain perception as an active, predictive process', 'Discuss scientific and philosophical views of consciousness'],
          p: ['Understands illusions and neurons'],
          e: [
            'Modern neuroscience suggests the brain doesn\'t just record the world — it predicts it, using past experience to make best guesses, then corrects them with sensory input.',
            'Attention matters: in a famous experiment, many viewers counting basketball passes failed to notice a person in a gorilla suit walking through the scene — inattentional blindness.',
            'Why physical brain activity produces subjective experience — the redness of red, the taste of mango — is called "the hard problem of consciousness". Scientists, philosophers and religious traditions (including Indian schools of thought on consciousness, or chit) approach it in different ways, and it remains open.',
          ],
          c: [['evidence', 'The "invisible gorilla" study by Simons and Chabris (1999) demonstrated inattentional blindness.'], ['interpretation', 'Positions on consciousness range from physicalism (it arises from brain processes) to views that consciousness is fundamental; Advaita Vedanta, for example, holds consciousness to be the ultimate reality. These are presented as differing perspectives.']],
          v: 'predictive processing = the idea that the brain predicts sensory input; inattentional blindness = failing to notice something unexpected when attention is elsewhere; consciousness = subjective awareness; hard problem = why physical processes give rise to experience',
          x: ['Missing a friend waving while focused on your phone.', 'Hearing your name in a noisy room (the cocktail party effect).'],
          s: ['The Invisible Gorilla', 'Students watched a video and counted passes between players in white shirts. Afterwards, the teacher asked, "Did you see the gorilla?" Half the class laughed — "What gorilla?" On replay, a person in a gorilla suit walked right through the middle, thumping their chest. Attention had shaped what they saw.'],
          a: [
            ch('Missing something obvious because attention is elsewhere is…', '*inattentional blindness|colour blindness|a reflex'),
            ch('The "hard problem" asks…', '*why brain activity produces subjective experience|how to make bones stronger|how lungs work'),
            tf('Consciousness is fully explained by science today.', false),
            mt('Match the idea', 'predictive processing=brain makes best guesses|physicalism=consciousness arises from physical processes|Advaita Vedanta=consciousness as ultimate reality'),
          ],
          t: ['Can we ever know if someone else experiences colours the way we do?', 'Could a computer ever be conscious? How would we know?'],
          k: ['Lead a discussion on whether a robot could have experiences, using at least two perspectives.'],
          m: ['Attention Experiment', 'a short video you record (people passing a ball with an unexpected event), volunteers, a notebook', 'Record a short video with a hidden unexpected event | Ask volunteers to count something specific | Ask if they noticed the event | Analyse results and write a reflection on attention and perception'],
          q: [
            ch('Perception, according to predictive views, is…', '*an active best guess|a perfect recording|random'),
            tf('Different traditions and scientists hold different views on consciousness.', true),
            ch('Hearing your name in a noisy room shows…', '*selective attention|deafness|a blind spot'),
          ],
          ms: ['Explains perception as construction', 'Discusses consciousness with multiple perspectives', 'Designs and analyses an attention experiment'],
        }),
      ]),
    ]),
  ],
});
