import { subject, S, U, L, ch, tf, od, mt } from '../dsl.ts';

export default subject({
  id: 'forces',
  description: 'Physics through play and experiment: pushes and pulls, magnets, light and shadow, sound, friction, gravity, energy transfer, electricity\'s relatives, and Newton\'s laws. Every concept is tested with hands-on investigations.',
  stages: [
    S('s4', 'Pushes and pulls, and how things move, roll and stop.', [
      'Know that a push or pull makes things move', 'Notice that harder pushes make things go faster or further', 'Explore which things a magnet attracts',
    ], [
      U('push-pull', 'Push and Pull', 'Forces are pushes and pulls.', 'Pushing: swings, doors, balls; Pulling: wagons, drawers, ropes; Bigger push, bigger move', [
        L('push-or-pull', 'Push or Pull?', {
          o: ['Sort actions into pushes and pulls', 'Notice that a bigger push makes something move more'],
          p: ['Can move toys around'],
          e: [
            'To make something move, we push it or pull it. A push moves something away from you — like kicking a ball. A pull moves something towards you — like opening a drawer.',
            'Pushes and pulls are called forces. A gentle push makes a toy car roll a little way. A strong push makes it roll further and faster.',
            'Forces can also stop things moving or change their direction, like catching a ball or hitting it with a bat.',
          ],
          v: 'push = move something away from you; pull = move something towards you; force = a push or a pull; move = go from one place to another',
          x: ['Pushing a swing.', 'Pulling a rope in tug of war.'],
          s: ['The Stuck Cart', 'Momo\'s cart full of mangoes got stuck in the mud. Momo pulled from the front — it moved a little. Kiko pushed from behind — it moved a little more. "Together!" said Momo. Momo pulled and Kiko pushed at the same time, and the cart rolled free!'],
          a: [
            mt('Push or pull?', 'kicking a ball=push|opening a drawer=pull|pressing a doorbell=push, with a finger'),
            ch('Which makes a toy car go further?', 'a tiny push|*a big push|no push'),
            tf('A force can make something stop.', true),
            ch('Tug of war uses…', 'pushes|*pulls'),
          ],
          t: ['Is opening a door a push or a pull? Does it depend on which side you are?', 'How do you stop a rolling ball?'],
          k: ['Show a grown-up three pushes and three pulls in your home and explain each.'],
          m: ['🧪 Toy Car Push Test', 'a toy car, a ruler or tape, a smooth floor', 'Mark a start line with tape | Give the car a gentle push and mark where it stops | Give it a medium push, then a strong push | Compare how far it went each time'],
          q: [
            ch('Pulling a wagon moves it…', '*towards you|away from you'),
            ch('A push or pull is called a…', '*force|colour|shape'),
            tf('A stronger push makes a ball roll further.', true),
          ],
          ms: ['Classifies everyday actions as push/pull', 'Relates force size to movement', 'Describes forces starting and stopping motion'],
        }),
      ]),
      U('magnets', 'Magic Magnets', 'Magnets pull some metals.', 'Attract: magnets pull iron and steel; Not attracted: wood, plastic, paper; Magnet fishing games', [
        L('what-sticks', 'What Sticks to a Magnet?', {
          o: ['Test which objects a magnet attracts', 'Know that magnets attract some metals but not all things'],
          p: ['Can sort objects into groups'],
          e: [
            'A magnet can pull some things towards it without touching them. We say the magnet attracts them.',
            'Magnets attract things made of iron or steel, like paper clips and some spoons. They do not attract wood, plastic, paper or glass.',
            'Not all metals are attracted! Coins, aluminium foil and copper are metals, but most of them are not attracted to a magnet.',
          ],
          v: 'magnet = an object that attracts iron and steel; attract = pull towards; metal = a hard, shiny material like iron or steel; test = try something to find out',
          x: ['A fridge magnet sticks to the steel fridge door.', 'A magnet does not pick up a wooden block.'],
          s: ['Bolt\'s Magnet Hand', 'Bolt got a new magnet hand. It picked up paper clips — click! A spoon — clink! But when Bolt tried to pick up a banana, nothing happened. "Magnets only pull certain metals," explained Rangi. Bolt was a little disappointed — it had wanted a magnet banana.'],
          a: [
            ch('Which will a magnet pick up?', '*📎 paper clip|🍌 banana|🧸 teddy'),
            ch('Which will NOT stick to a magnet?', 'steel pin|iron nail|*wooden spoon'),
            tf('Magnets attract all metals.', false, 'Most magnets attract iron and steel, not metals like aluminium or copper.'),
            ch('"Attract" means…', '*pull towards|push away|break'),
          ],
          t: ['How might a magnet help find a lost needle in the grass?', 'Can a magnet pull through paper? How could you test it?'],
          k: ['Predict, test and then explain to someone which five objects a magnet attracted.'],
          m: ['🧪 Magnet Fishing Game', 'a magnet tied to a string on a stick, paper fish with paper clips, a few non-magnetic "fish" (no clips)', 'Make paper fish and put a paper clip on most of them | Spread them on the floor as a pond | Fish with your magnet | Find out why some fish can\'t be caught'],
          q: [
            ch('A magnet attracts…', '*an iron nail|a plastic cup|a paper'),
            tf('A magnet can pull a paper clip without touching it.', true),
            ch('Which is NOT attracted?', '*glass marble|steel key'),
          ],
          ms: ['Predicts and tests magnetic attraction', 'Knows only some metals are magnetic', 'Uses the word attract correctly'],
        }),
      ]),
    ]),
    S('s5', 'Light and shadows, and sounds around us.', [
      'Know we need light to see', 'Explain how shadows form', 'Know sounds are made by vibrations',
    ], [
      U('light-shadow', 'Light and Shadows', 'Light travels and shadows form when it is blocked.', 'Light sources: Sun, lamp, candle; Shadows: blocking light; Shadow size and position', [
        L('shadow-play', 'Shadow Play', {
          o: ['Name sources of light', 'Explain that a shadow forms when an object blocks light'],
          p: ['Knows day and night'],
          e: [
            'We need light to see. Light comes from light sources like the Sun, lamps, torches and candles. The Moon is not a light source — it reflects the Sun\'s light.',
            'Light travels in straight lines. When something blocks the light, it makes a dark shape behind it called a shadow.',
            'Move closer to a torch and your shadow gets bigger. Move away and it gets smaller. Outside, shadows change length during the day as the Sun moves across the sky.',
          ],
          v: 'light source = something that gives out light; shadow = a dark shape made when light is blocked; block = stop something passing through; reflect = bounce light off',
          x: ['Your shadow is long in the morning and evening, short at midday.', 'Hand shadows can look like animals on a wall.'],
          s: ['Kiko\'s Shadow Friend', 'Kiko kept seeing a dark goat following everywhere in the sunshine. "Who are you?" Kiko asked. It copied every move! Tara laughed: "That\'s your shadow. Your body blocks the sunlight." When a cloud covered the Sun, the shadow vanished. "Where did my friend go?" Kiko asked.'],
          a: [
            ch('Which is a light source?', '*☀️ the Sun|🌙 the Moon|🪞 a mirror'),
            ch('A shadow forms when…', '*something blocks light|it rains|we sing'),
            tf('Moving closer to a torch makes your shadow bigger.', true),
            ch('When is your shadow shortest outdoors?', 'early morning|*around midday|evening'),
          ],
          t: ['Why don\'t we see shadows on a cloudy day?', 'Can you make a shadow with a glass of water? Why or why not?'],
          k: ['Make hand shadow animals and explain how they are made.'],
          m: ['🧪 Shadow Puppet Theatre', 'card, scissors, sticks, a torch, a white sheet or wall', 'Cut animal shapes from card and tape them to sticks | Shine a torch at the wall in a dark room | Hold puppets between the torch and wall | Make shadows grow and shrink and tell a story'],
          q: [
            ch('Light travels in…', '*straight lines|circles|zigzags'),
            ch('The Moon shines because it…', 'makes its own light|*reflects sunlight|is on fire'),
            tf('A shadow is the same shape as the object blocking the light.', true),
          ],
          ms: ['Identifies light sources', 'Explains shadow formation', 'Investigates shadow size changes'],
        }),
      ]),
      U('sound', 'Good Vibrations', 'Sounds are made when things vibrate.', 'Vibrations: drums, strings, voice box; Loud and quiet; High and low pitch', [
        L('vibrations', 'Feel the Sound', {
          o: ['Explain that sounds are made by vibrations', 'Describe sounds as loud/quiet and high/low'],
          p: ['Can listen carefully'],
          e: [
            'Every sound is made by something vibrating — moving back and forth very quickly. Touch your throat while humming: you can feel your voice box vibrating.',
            'A harder hit makes bigger vibrations and a louder sound. A gentle tap makes a quieter sound.',
            'Pitch is how high or low a sound is. A small, tight string makes a high sound; a long, loose string makes a low sound.',
          ],
          v: 'vibrate = move back and forth very quickly; loud = a strong sound; quiet = a soft sound; pitch = how high or low a sound is',
          x: ['A drum skin vibrates when hit.', 'A bird\'s chirp is high pitch; a lion\'s roar is low pitch.'],
          s: ['The Dancing Rice', 'Rangi put some rice grains on a drum and banged a pot nearby. The rice jumped and danced! "The sound makes the air shake, and the shaking air makes the drum shake," said Rangi. Quiet taps made tiny wiggles; loud bangs made the rice leap.'],
          a: [
            ch('All sounds are made by…', '*vibrations|colours|lights'),
            mt('Match the sound to the pitch', '🐦 bird chirp=high|🦁 lion roar=low|🥁 big drum=deep boom'),
            ch('A harder hit on a drum makes the sound…', '*louder|quieter|disappear'),
            tf('You can feel vibrations in your throat when you hum.', true),
          ],
          t: ['Why do you think we can\'t see most vibrations?', 'How could you make a guitar string sound higher?'],
          k: ['Make a loud sound and a quiet sound with the same object, and explain the difference.'],
          m: ['🧪 Rubber Band Guitar', 'an open box or plastic tub, rubber bands of different thickness', 'Stretch rubber bands around the box | Pluck each band and listen | Compare thick and thin bands, tight and loose | Play a simple tune'],
          q: [
            ch('Which makes a higher sound?', '*a short, tight string|a long, loose string'),
            tf('A quiet sound has small vibrations.', true),
            ch('Your voice comes from your…', '*voice box (throat)|elbow|ears'),
          ],
          ms: ['Explains sound as vibration', 'Distinguishes volume and pitch', 'Changes pitch and volume in experiments'],
        }),
      ]),
    ]),
    S('s6', 'Friction, gravity, floating and sinking, and simple fair tests.', [
      'Investigate friction on different surfaces', 'Know that gravity pulls things down', 'Plan a fair test changing one thing',
    ], [
      U('friction', 'Friction', 'A force that slows things down.', 'Rough and smooth surfaces; Friction is useful: brakes, shoe grips; Reducing friction: oil, wheels, ice', [
        L('slippery-or-grippy', 'Slippery or Grippy?', {
          o: ['Explain that friction is a force that slows moving things', 'Carry out a fair test on friction'],
          p: ['Understands pushes and pulls'],
          e: [
            'Friction is a force between two surfaces rubbing together. It always works against movement, slowing things down.',
            'Rough surfaces like carpet and sand have more friction. Smooth surfaces like ice and polished floors have less — that\'s why we slip.',
            'Friction is useful: it lets our shoes grip, bicycle brakes stop us, and matches light. Sometimes we want less friction, so we use wheels, oil or smooth surfaces.',
          ],
          v: 'friction = a force that slows things when surfaces rub; rough = bumpy, not smooth; grip = hold firmly without slipping; fair test = changing only one thing at a time',
          x: ['Shoes with deep grooves grip better on wet ground.', 'Oil on a squeaky door hinge reduces friction.'],
          s: ['The Great Slide Race', 'Momo, Kiko and Rangi raced down a slide wearing different clothes. Momo in woolly trousers stopped halfway. Kiko in shorts went a bit further. Rangi slid down on a smooth plastic mat and zoomed off the end! "Less friction, more speed," Rangi laughed.'],
          a: [
            ch('Which surface has the most friction?', 'ice|*carpet|glass'),
            ch('Friction makes moving things…', '*slow down|speed up|float'),
            mt('Is friction helpful here?', 'brakes on a bicycle=helpful|shoes on a wet floor=helpful grip|a squeaky hinge=less is better'),
            tf('In a fair test, we change only one thing.', true),
          ],
          t: ['What would happen if there were no friction at all?', 'Why do we put sand or grit on icy roads?'],
          k: ['Explain to someone why you slip on a wet floor using the word friction.'],
          m: ['🧪 Friction Ramp Fair Test', 'a ramp, a toy car, a ruler, surfaces (towel, foil, carpet, paper)', 'Set the ramp at the same height each time | Cover the floor at the bottom with a different surface each test | Release the car from the same spot | Measure how far it travels on each surface and record in a table'],
          q: [
            ch('To reduce friction in a machine we use…', '*oil|sand|glue'),
            ch('Shoe grooves increase…', '*grip (friction)|speed on ice|weight'),
            tf('Friction acts against movement.', true),
          ],
          ms: ['Explains friction and its effects', 'Plans and conducts a fair test', 'Gives examples of useful and unwanted friction'],
        }),
      ]),
      U('float-sink', 'Floating and Sinking', 'Why some things float and others sink.', 'Testing objects; Shape matters: boats; Upthrust from water', [
        L('float-or-sink', 'Float or Sink?', {
          o: ['Predict and test whether objects float or sink', 'Explain that shape affects floating'],
          p: ['Understands forces as pushes and pulls'],
          e: [
            'When you put something in water, gravity pulls it down and the water pushes it up. That upward push is called upthrust.',
            'If the water can push up enough, the object floats. A cork, an apple and a leaf float. A stone, a coin and a key sink.',
            'Shape matters! A ball of clay sinks, but the same clay shaped into a wide boat can float, because it pushes aside more water and gets more upthrust.',
          ],
          v: 'float = stay on top of water; sink = go down to the bottom; upthrust = the upward push of water; predict = say what you think will happen',
          x: ['Huge steel ships float because of their shape.', 'A coin sinks, but a cork floats.'],
          s: ['Pala\'s Clay Boat Challenge', 'Pala the dolphin dared her friends: "Make clay float!" Kiko dropped a clay ball — plop, it sank. Rangi flattened the clay into a wide dish with sides. It bobbed on the water! They even loaded it with three pebbles before it sank.'],
          a: [
            ch('Which floats?', '*🍎 apple|🪨 stone|🔑 key'),
            ch('The water\'s upward push is called…', 'gravity|*upthrust|friction'),
            tf('Changing the shape of clay can make it float.', true),
            ch('Big steel ships float because of their…', 'colour|*shape|name'),
          ],
          t: ['Why do you think a huge ship floats but a tiny pebble sinks?', 'Do things float more easily in salty water? How could you find out?'],
          k: ['Predict whether five objects will float or sink, test them, and explain any surprises.'],
          m: ['🧪 Float or Sink Investigation', 'a bowl of water, 10 objects, clay or foil, a results table', 'Predict float or sink for each object | Test and record | Shape foil or clay into a boat | Count how many coins your boat can carry before sinking'],
          q: [
            ch('Which sinks?', 'cork|leaf|*coin'),
            tf('Gravity pulls a floating object down too.', true),
            ch('A flattened, boat-shaped piece of clay…', '*can float|always sinks|melts'),
          ],
          ms: ['Predicts and tests floating', 'Explains upthrust and gravity together', 'Designs a floating boat'],
        }),
      ]),
    ]),
    S('s7', 'Forces and their effects, simple circuits of energy, and how light reflects and refracts.', [
      'Represent forces with arrows', 'Explain balanced and unbalanced forces', 'Investigate reflection and refraction',
    ], [
      U('balanced-forces', 'Balanced and Unbalanced Forces', 'What happens when forces act together.', 'Force arrows; Balanced forces: no change; Unbalanced: speeding up, slowing, turning; Newtons', [
        L('force-arrows', 'Force Arrows', {
          o: ['Draw force arrows to show size and direction', 'Predict motion from balanced or unbalanced forces'],
          p: ['Knows friction and gravity'],
          e: [
            'We can draw forces as arrows. The arrow points in the direction of the force; a longer arrow means a bigger force. Forces are measured in newtons (N).',
            'If the forces on an object are balanced — equal size, opposite directions — its motion does not change. A book resting on a table stays still; a car at steady speed keeps going.',
            'If forces are unbalanced, the object speeds up, slows down or changes direction, in the direction of the bigger force.',
          ],
          v: 'newton (N) = the unit of force; balanced forces = equal and opposite forces; unbalanced forces = one force bigger than another; resultant force = the overall force',
          x: ['Tug of war with equal teams: balanced, no movement.', 'A parachute opening: air resistance greater than weight for a moment, so the skydiver slows down.'],
          s: ['The Tug of War Draw', 'Heart Harbor\'s tug of war went on for ten minutes with the rope barely moving. "The forces are balanced!" Nova shouted. Then Momo joined the left team. The left team\'s force became bigger, and the rope zipped their way. "Unbalanced!" everyone laughed as the right team tumbled.'],
          a: [
            ch('Forces of 10 N left and 10 N right are…', '*balanced|unbalanced'),
            ch('15 N right and 5 N left. The object moves…', '*right|left|not at all'),
            tf('A car at steady speed in a straight line has balanced forces.', true),
            ch('Force is measured in…', 'kilograms|*newtons|metres'),
          ],
          t: ['If forces are balanced, can an object still be moving? Explain.', 'Why does a ball rolling on grass eventually stop?'],
          k: ['Draw force arrows on a picture of a cyclist and explain them to someone.'],
          m: ['🧪 Spring Balance Experiments', 'a spring balance or a rubber band and ruler, small objects, a string', 'Measure the force needed to lift different objects | Measure the force needed to drag them across different surfaces | Draw force diagrams for each | Explain when forces were balanced'],
          q: [
            ch('Unbalanced forces can make an object…', 'never change|*speed up, slow down or turn|disappear'),
            ch('A longer force arrow means…', '*a bigger force|a slower object|a lighter object'),
            tf('A book resting on a table has no forces on it.', false, 'Gravity pulls down and the table pushes up — balanced.'),
          ],
          ms: ['Draws force diagrams correctly', 'Predicts motion from forces', 'Uses newtons as the unit of force'],
        }),
      ]),
      U('light-behaviour', 'Reflection and Refraction', 'Light bounces and bends.', 'Reflection: mirrors, angle of incidence = angle of reflection; Refraction: bending in water and glass; Rainbows and spectra', [
        L('bounce-and-bend', 'Bounce and Bend', {
          o: ['Explain how mirrors reflect light', 'Describe refraction and how a prism splits white light'],
          p: ['Knows light travels in straight lines'],
          e: [
            'Reflection is light bouncing off a surface. A smooth mirror reflects light neatly: the angle the light hits at equals the angle it bounces off at.',
            'Refraction is light bending when it passes from one material into another, like from air into water. That\'s why a straw in a glass of water looks bent.',
            'White light is a mixture of colours. A prism refracts each colour by a slightly different amount, splitting light into a spectrum. Raindrops do the same to make rainbows.',
          ],
          c: [['evidence', 'Isaac Newton\'s prism experiments in the 1660s showed that white light is made of a spectrum of colours that can be recombined.']],
          v: 'reflection = light bouncing off a surface; refraction = light bending as it passes into a different material; spectrum = the band of colours in white light; prism = a glass shape that splits light',
          x: ['A periscope uses two mirrors to see over walls.', 'A swimming pool looks shallower than it is due to refraction.'],
          s: ['Newton\'s Rainbow in a Room', 'In the 1660s, Isaac Newton darkened his room and let a thin beam of sunlight through a hole in the shutter. Passing it through a glass prism, he saw a band of colours on the wall. Then he used a second prism to recombine them into white light — proving the colours were in the sunlight all along.'],
          a: [
            mt('Match', 'mirror=reflection|straw looks bent in water=refraction|rainbow=splitting white light'),
            od('Put these rainbow colours in the order they appear (indigo sits between blue and violet)', 'red|orange|yellow|green|blue|violet'),
            tf('White light is made of many colours.', true),
            ch('Light hitting a mirror at 30° reflects at…', '60°|*30°|90°'),
          ],
          t: ['Why do you only see a rainbow when the Sun is behind you?', 'Why does writing look backwards in a mirror?'],
          k: ['Explain to someone why a pencil looks bent in a glass of water.'],
          m: ['🧪 Make a Rainbow and a Periscope', 'a glass of water, a sunny window, white paper; a long box, two small mirrors, tape', 'Place the glass on a sunny windowsill with paper below and find the spectrum | Build a periscope with two mirrors angled at 45° in a box | Use it to see over a table | Explain the light path with a diagram'],
          q: [
            ch('Bending of light is called…', 'reflection|*refraction|absorption'),
            ch('A prism splits white light into a…', '*spectrum|shadow|reflection'),
            tf('Angle of incidence equals angle of reflection.', true),
          ],
          ms: ['Explains reflection with the law of reflection', 'Explains refraction phenomena', 'Investigates spectra with prisms or water'],
        }),
      ]),
    ]),
    S('s9', 'Energy stores and transfers, gravity and weight, pressure.', [
      'Describe energy stores and transfers', 'Distinguish mass and weight', 'Explain pressure in solids, liquids and gases',
    ], [
      U('energy', 'Energy Stores and Transfers', 'Energy is never created or destroyed, only transferred.', 'Energy stores: kinetic, gravitational, chemical, thermal, elastic; Transfers: by forces, heating, electricity, light, sound; Conservation and wasted energy', [
        L('energy-transfers', 'Following the Energy', {
          o: ['Identify energy stores and transfers in everyday situations', 'Apply the law of conservation of energy and calculate efficiency qualitatively'],
          p: ['Understands forces and motion'],
          e: [
            'Energy is stored in different ways: kinetic (moving things), gravitational potential (raised objects), chemical (food, fuel, batteries), thermal (hot objects) and elastic (stretched springs).',
            'Energy is transferred between stores by forces, heating, electricity, light and sound. When you eat breakfast and climb stairs, chemical energy is transferred to gravitational potential energy and some is transferred to thermal energy.',
            'Energy cannot be created or destroyed — only transferred (the law of conservation of energy). But some energy is usually "wasted", spreading out as heat or sound, so no machine is 100% efficient.',
          ],
          v: 'kinetic energy = energy of movement; potential energy = stored energy due to position or stretch; conservation of energy = energy is never created or destroyed; efficiency = useful energy out ÷ total energy in',
          x: ['A falling ball: gravitational → kinetic.', 'A torch: chemical (battery) → electrical → light (useful) + heat (wasted).'],
          s: ['The Bouncing Ball Mystery', 'Kiko dropped a ball from 1 metre. It bounced to 70 cm, then 50 cm, then lower each time until it stopped. "Where did the energy go?" Nova listened: each bounce made a sound and slightly warmed the ball and floor. "It didn\'t vanish," Nova said, "it spread out."'],
          a: [
            mt('Match the store', 'stretched rubber band=elastic|hot tea=thermal|moving bus=kinetic|battery=chemical'),
            od('Energy in a roller coaster drop', 'gravitational potential at the top|kinetic increases as it falls|fastest at the bottom'),
            tf('Energy can be destroyed.', false),
            ch('A more efficient bulb…', '*wastes less energy as heat|uses more energy|is always brighter'),
          ],
          t: ['If energy is conserved, why do we worry about "running out" of energy?', 'Why can\'t a perpetual motion machine work?'],
          k: ['Trace the energy transfers in making a cup of tea and explain them to someone.'],
          m: ['🧪 Bounce Efficiency Investigation', 'balls of different types, metre ruler, phone for slow-motion video (optional)', 'Drop each ball from 1 m | Measure bounce height | Calculate bounce height ÷ drop height as an efficiency estimate | Explain where the "lost" energy went'],
          q: [
            ch('A ball at the top of a hill has mainly…', 'kinetic energy|*gravitational potential energy|sound energy'),
            ch('Wasted energy often ends up as…', '*heat in the surroundings|more fuel|new matter'),
            tf('Food contains chemical energy.', true),
          ],
          ms: ['Identifies stores and transfers in systems', 'Applies conservation of energy', 'Discusses efficiency and dissipation'],
        }),
      ]),
      U('mass-weight', 'Mass, Weight and Gravity', 'Why you\'d weigh less on the Moon.', 'Mass (kg) vs weight (N); Gravitational field strength; Weight on other planets', [
        L('moon-weight', 'Would You Weigh Less on the Moon?', {
          o: ['Distinguish mass from weight', 'Calculate weight using W = m × g'],
          p: ['Knows force is measured in newtons'],
          e: [
            'Mass is the amount of matter in an object, measured in kilograms. It is the same everywhere.',
            'Weight is the force of gravity pulling on that mass, measured in newtons. Weight = mass × gravitational field strength (g). On Earth, g ≈ 9.8 N/kg.',
            'On the Moon, g ≈ 1.6 N/kg — about one-sixth of Earth\'s. A 30 kg child weighs about 294 N on Earth but only about 49 N on the Moon. Their mass is still 30 kg.',
          ],
          c: [['science', 'Surface gravity values: Earth ≈ 9.8 N/kg, Moon ≈ 1.6 N/kg, Mars ≈ 3.7 N/kg, Jupiter ≈ 24.8 N/kg (at cloud tops).']],
          v: 'mass = amount of matter, measured in kg; weight = gravitational force on a mass, measured in N; gravitational field strength = force per kilogram (N/kg); gravity = the attractive force between masses',
          x: ['A 10 kg bag: weight ≈ 98 N on Earth.', 'Astronauts bounce on the Moon because of lower gravity.'],
          s: ['Astronaut Bounces', 'When Apollo astronauts walked on the Moon in 1969–1972, they found that hopping was easier than walking. Their bodies and heavy suits had the same mass, but the Moon\'s weaker gravity pulled them down only about one-sixth as strongly.'],
          a: [
            ch('Mass is measured in…', '*kilograms|newtons|metres'),
            ch('A 50 kg person on Earth (g = 10 N/kg) weighs about…', '50 N|*500 N|5 N'),
            tf('Your mass changes on the Moon.', false),
            ch('On the Moon, your weight is about…', 'the same|*one-sixth of Earth\'s|six times more'),
          ],
          t: ['Why do bathroom scales show kilograms when they actually measure a force?', 'Where in the solar system would you weigh the most?'],
          k: ['Explain the difference between mass and weight to someone using the Moon as an example.'],
          m: ['Planet Weight Calculator', 'a table of g values for planets, calculator, poster paper', 'Use your mass (or a toy\'s) | Calculate weight on each planet using W = m × g | Make a poster comparing results | Add a fact about each planet\'s gravity'],
          q: [
            ch('W = m × g. m = 20 kg, g = 10 N/kg. W = ?', '2 N|30 N|*200 N'),
            ch('Weight is a…', '*force|mass|volume'),
            tf('Gravitational field strength is weaker on the Moon than on Earth.', true),
          ],
          ms: ['Distinguishes mass and weight', 'Calculates weight in different gravitational fields', 'Explains everyday misconceptions'],
        }),
      ]),
    ]),
    S('s12', 'Newton\'s laws, momentum, and waves.', [
      'Apply Newton\'s three laws of motion', 'Calculate speed, acceleration and momentum', 'Describe wave properties',
    ], [
      U('newtons-laws', 'Newton\'s Laws of Motion', 'The rules that govern how things move.', 'First law: inertia; Second law: F = ma; Third law: action and reaction', [
        L('f-equals-ma', 'F = ma', {
          o: ['State and apply Newton\'s three laws', 'Calculate force, mass and acceleration'],
          p: ['Understands balanced and unbalanced forces'],
          e: [
            'First law: an object stays at rest or moves at constant velocity unless a resultant force acts on it (inertia). That\'s why passengers lurch forward when a bus brakes suddenly.',
            'Second law: resultant force = mass × acceleration (F = ma). A 1000 kg car accelerating at 2 m/s² needs a resultant force of 2000 N.',
            'Third law: when object A exerts a force on B, B exerts an equal and opposite force on A. A rocket pushes gas backwards; the gas pushes the rocket forwards.',
          ],
          c: [['evidence', 'Newton published these laws in "Philosophiæ Naturalis Principia Mathematica" in 1687, building on work by Galileo and others.']],
          v: 'inertia = resistance to change in motion; acceleration = rate of change of velocity (m/s²); resultant force = overall force on an object; velocity = speed in a given direction',
          x: ['Seatbelts protect against inertia in a crash.', 'Swimming: you push water back, it pushes you forward.'],
          s: ['The Tablecloth Trick', 'A magician whipped a tablecloth from under plates and cups — and they barely moved! It looked like magic, but it was Newton\'s first law. The cloth was pulled so quickly that friction acted only briefly, and the plates\' inertia kept them in place.'],
          a: [
            mt('Match the law', 'first law=inertia|second law=F = ma|third law=equal and opposite reactions'),
            ch('F = ma: m = 5 kg, a = 3 m/s². F = ?', '8 N|*15 N|1.67 N'),
            ch('A rocket moves forward because…', '*gas pushed backward pushes the rocket forward|air pulls it|gravity disappears'),
            tf('With no resultant force, a moving object keeps moving at constant velocity.', true),
          ],
          t: ['If action and reaction are equal, why doesn\'t everything cancel out and stay still?', 'Why did people before Galileo think a moving object naturally stops?'],
          k: ['Demonstrate each of Newton\'s laws using household objects and explain them.'],
          m: ['🧪 Balloon Rocket', 'balloon, string, straw, tape, measuring tape', 'Thread string through a straw and tie it across a room | Tape a blown-up balloon to the straw | Release and measure distance | Vary the balloon size and relate results to Newton\'s laws'],
          q: [
            ch('Seatbelts are needed because of…', '*inertia|friction|magnetism'),
            ch('F = 20 N, m = 4 kg. a = ?', '80 m/s²|*5 m/s²|16 m/s²'),
            tf('Forces always come in pairs.', true),
          ],
          ms: ['States and applies all three laws', 'Calculates using F = ma', 'Explains real phenomena with Newtonian reasoning'],
        }),
      ]),
      U('waves', 'Waves', 'Energy transfer without matter transfer.', 'Transverse and longitudinal waves; Wavelength, frequency, amplitude; Wave speed = frequency × wavelength; Electromagnetic spectrum', [
        L('wave-properties', 'Properties of Waves', {
          o: ['Describe transverse and longitudinal waves', 'Use v = f × λ'],
          p: ['Knows sound and light behaviour'],
          e: [
            'Waves transfer energy without transferring matter. In a transverse wave (light, water ripples), vibrations are at right angles to the direction of travel. In a longitudinal wave (sound), vibrations are along the direction of travel.',
            'Amplitude is the height of a wave (related to energy, loudness or brightness). Wavelength (λ) is the distance between peaks. Frequency (f) is how many waves pass per second, in hertz (Hz).',
            'Wave speed = frequency × wavelength (v = fλ). Sound in air travels at about 340 m/s; light in a vacuum at about 300,000,000 m/s.',
          ],
          v: 'amplitude = maximum displacement from rest; wavelength = distance between successive peaks; frequency = number of waves per second (Hz); transverse = vibration perpendicular to travel; longitudinal = vibration parallel to travel',
          x: ['A 340 Hz sound in air has wavelength ≈ 1 m.', 'Seeing lightning before hearing thunder: light is far faster than sound.'],
          s: ['Counting the Storm', 'During a storm, Zuri saw lightning and counted seconds until the thunder: three seconds. "Sound travels about 340 metres each second," she said, "so the lightning was about 1 kilometre away." Her little brother counted the next one: nine seconds — the storm was moving off.'],
          a: [
            mt('Match the wave to its type', 'sound in air=longitudinal|light=transverse|water ripple=surface wave'),
            ch('v = fλ: f = 100 Hz, λ = 3 m. v = ?', '33 m/s|*300 m/s|103 m/s'),
            tf('Waves transfer energy but not matter.', true),
            ch('Louder sound means bigger…', '*amplitude|wavelength only|speed'),
          ],
          t: ['Why can\'t sound travel through space but light can?', 'Why do we see lightning before we hear thunder?'],
          k: ['Use a slinky or rope to demonstrate both wave types to someone and explain the difference.'],
          m: ['🧪 Slinky and Water Wave Lab', 'slinky or long rope, a shallow tray of water, ruler, timer', 'Make transverse and longitudinal waves on a slinky | Measure wavelength and count frequency | Make ripples in a tray and observe reflection | Calculate a wave speed and write up the method'],
          q: [
            ch('Frequency is measured in…', '*hertz|metres|newtons'),
            ch('Sound in air travels at about…', '3 m/s|*340 m/s|300,000 km/s'),
            tf('In a longitudinal wave, vibrations are parallel to the direction of travel.', true),
          ],
          ms: ['Describes wave types and properties', 'Applies v = fλ', 'Explains everyday wave phenomena'],
        }),
      ]),
    ]),
  ],
});
