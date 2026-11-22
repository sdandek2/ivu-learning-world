import { subject, S, U, L, ch, tf, od, mt } from '../dsl.ts';

export default subject({
  id: 'materials',
  description: 'Chemistry foundations: what things are made of, properties of materials, solids, liquids and gases, mixing and separating, reversible and irreversible changes, atoms and elements, and chemical reactions — always through careful, safe experiments.',
  stages: [
    S('s4', 'Exploring materials with our senses: hard, soft, rough, smooth, bendy, stretchy.', [
      'Name common materials: wood, metal, plastic, glass, fabric, paper', 'Describe materials by touch', 'Choose a material for a simple job',
    ], [
      U('touch-feel', 'Touch and Feel', 'Materials feel different and do different jobs.', 'Hard and soft; Rough and smooth; Bendy and stretchy', [
        L('hard-soft', 'Hard or Soft, Rough or Smooth?', {
          o: ['Describe objects as hard/soft and rough/smooth', 'Name the material something is made of'],
          p: ['Can name everyday objects'],
          e: [
            'Everything is made of a material. A spoon might be metal, a chair might be wood, a cup might be plastic or glass, and a shirt is fabric.',
            'We can describe materials by how they feel. A stone is hard; a pillow is soft. Sandpaper is rough; a mirror is smooth.',
            'Some materials bend, like a rubber band or paper. Some stretch, like a balloon. Some don\'t bend at all, like a brick.',
          ],
          v: 'material = what something is made of; hard = does not squash easily; soft = squashes easily; rough = bumpy to touch; smooth = flat and even to touch',
          x: ['A teddy is soft fabric.', 'A tree trunk is rough wood.'],
          s: ['The Three Little Pigs Choose Materials', 'Three little pigs built houses. One used straw — soft and bendy. One used sticks — light wood. One used bricks — hard and strong. When the wolf huffed and puffed, only the hard brick house stood. "Choosing the right material matters!" said the third pig.'],
          a: [
            ch('Which is soft?', '*🧸 teddy|🪨 rock|🔨 hammer'),
            ch('Which is smooth?', '*🪞 mirror|🌲 tree bark|🧽 scrubber'),
            mt('Match the object to its material', '🥄 spoon=metal|🪑 chair=wood|👕 shirt=fabric|📖 book page=paper'),
            tf('A rubber band can stretch.', true),
          ],
          t: ['Why are pillows soft and not hard?', 'What would happen if windows were made of wood?'],
          k: ['Close your eyes, feel three objects, and describe them to a grown-up before guessing what they are.'],
          m: ['Feely Bag Game', 'a cloth bag, objects of different materials (sponge, spoon, stone, cloth, foil)', 'Put one object in the bag | Feel it without looking | Describe it: hard or soft, rough or smooth | Guess the object and its material, then check'],
          q: [
            ch('Which is hard?', '*🧱 brick|☁️ cotton wool|🧶 wool'),
            ch('A window is usually made of…', '*glass|fabric|paper'),
            tf('Sandpaper feels rough.', true),
          ],
          ms: ['Uses property words accurately', 'Names materials of common objects', 'Sorts objects by a property'],
        }),
      ]),
      U('right-material', 'The Right Material for the Job', 'We choose materials because of their properties.', 'Waterproof: raincoats, umbrellas; Strong: bricks, steel; See-through: glass, plastic', [
        L('waterproof', 'Will It Keep Me Dry?', {
          o: ['Test which materials are waterproof', 'Choose a suitable material for a job'],
          p: ['Can describe materials by touch'],
          e: [
            'Some materials let water through; others keep water out. Materials that keep water out are called waterproof. Plastic, rubber and foil are waterproof. Paper towels and cotton soak water up.',
            'We choose materials for their job. An umbrella needs to be waterproof. A towel needs to soak up water. A window needs to be see-through.',
            'Scientists test materials to find out which is best — just like you can!',
          ],
          v: 'waterproof = does not let water through; absorbent = soaks up water; see-through = you can see through it; test = try it out to find out',
          x: ['Raincoats are waterproof plastic or treated fabric.', 'Towels are absorbent cotton.'],
          s: ['Teddy\'s Rainy Day', 'Teddy needed a raincoat. Momo tried a paper coat — it went soggy! A cotton coat — it got heavy and wet. Then a plastic bag coat — the water ran right off. "Plastic is waterproof," said Momo, and Teddy stayed dry all day.'],
          a: [
            ch('Which is best for an umbrella?', 'paper|*plastic|cotton wool'),
            ch('Which is best for drying your hands?', 'foil|*a towel|glass'),
            tf('Paper is waterproof.', false),
            mt('Match the job to the material', 'window=glass, see-through|raincoat=plastic, waterproof|towel=cotton, absorbent'),
          ],
          t: ['Why are boots made of rubber and not cloth?', 'Can something be waterproof AND see-through?'],
          k: ['Explain to a grown-up which material you would use to make a roof for a toy house, and why.'],
          m: ['🧪 Waterproof Test', 'a cup, a rubber band, squares of paper, foil, cloth, plastic bag, a spoon of water', 'Stretch a material over the cup with a rubber band | Pour one spoon of water on top | Check if water went into the cup | Test each material and sort into waterproof and not waterproof'],
          q: [
            ch('Which is waterproof?', '*rubber boots|paper bag|cotton socks'),
            ch('Absorbent means it…', '*soaks up water|keeps water out|shines'),
            tf('We should choose materials that suit their job.', true),
          ],
          ms: ['Tests waterproofness fairly', 'Matches materials to purposes', 'Explains choices using properties'],
        }),
      ]),
    ]),
    S('s5', 'Solids, liquids and melting and freezing.', [
      'Sort things into solids and liquids', 'Observe melting and freezing', 'Describe how heating and cooling change materials',
    ], [
      U('solid-liquid', 'Solids and Liquids', 'Solids keep their shape; liquids flow and take the shape of their container.', 'Solids: blocks, stones; Liquids: water, milk, oil; Pouring and shape', [
        L('pour-test', 'Can You Pour It?', {
          o: ['Sort materials into solids and liquids', 'Describe properties of solids and liquids'],
          p: ['Can describe materials'],
          e: [
            'A solid keeps its own shape. A block stays a block whether it\'s in a box or on a table. You can hold a solid in your hand.',
            'A liquid flows and can be poured. It takes the shape of whatever container it is in — a tall glass or a flat plate.',
            'Some things are tricky: sand and sugar can be poured, but each tiny grain is a solid that keeps its shape!',
          ],
          v: 'solid = keeps its own shape; liquid = flows and takes the shape of its container; pour = make something flow out; container = something that holds things',
          x: ['Milk takes the shape of the glass.', 'Ice is solid water; tap water is liquid.'],
          s: ['The Shape-Shifting Juice', 'Kiko poured orange juice into a tall glass — it was tall and thin. Then into a wide bowl — flat and round. "The juice keeps changing shape!" Kiko gasped. Then Kiko put a wooden block in the bowl. The block stayed exactly a block.'],
          a: [
            mt('Solid or liquid?', '🧱 brick=solid|🥛 milk=liquid|🪨 stone=solid, keeps its shape'),
            ch('Which takes the shape of its container?', '*juice|a pencil|a coin'),
            tf('Sand can be poured, but each grain is solid.', true),
            ch('Which is a liquid?', 'ice|*oil|wood'),
          ],
          t: ['Is honey a solid or a liquid? What about toothpaste?', 'Why can\'t we pour a chair?'],
          k: ['Show someone a solid and a liquid from the kitchen and explain how you know.'],
          m: ['🧪 Pour or Not?', 'cups, water, oil, rice, a block, a spoon, a tray', 'Try to pour each material from one cup to another over a tray | Notice if it keeps its shape | Sort into solids, liquids and "tricky" | Draw your results'],
          q: [
            ch('A solid…', '*keeps its shape|always flows|is always soft'),
            ch('Which is a solid?', '*an ice cube|water|lemon juice'),
            tf('A liquid takes the shape of its container.', true),
          ],
          ms: ['Classifies solids and liquids', 'Describes their properties', 'Discusses tricky materials (powders, gels)'],
        }),
      ]),
      U('melt-freeze', 'Melting and Freezing', 'Heating and cooling can change solids and liquids.', 'Melting: ice, butter, chocolate; Freezing: water to ice; Reversible changes', [
        L('ice-melts', 'The Melting Ice Race', {
          o: ['Observe that heating melts some solids and cooling freezes liquids', 'Know that melting and freezing can be reversed'],
          p: ['Knows solids and liquids'],
          e: [
            'When some solids get warm, they melt and turn into liquids. Ice melts into water. Butter and chocolate melt in the sun.',
            'When some liquids get very cold, they freeze into solids. Water in a freezer becomes ice.',
            'Melting and freezing can go backwards and forwards: water → ice → water. We call this a reversible change.',
          ],
          v: 'melt = change from solid to liquid when heated; freeze = change from liquid to solid when cooled; reversible = can be changed back; temperature = how hot or cold something is',
          x: ['Kulfi melts in your hand on a hot day.', 'Ice lollies are frozen juice.'],
          s: ['The Kulfi Mystery', 'Momo left a kulfi on the table while answering the door. When Momo came back, there was only a puddle and a stick! "Someone drank my kulfi!" Tara explained: "The warm room melted it." Momo poured the puddle into a mould and froze it again — a reversible change!'],
          a: [
            ch('Ice in a warm room will…', '*melt|freeze|grow'),
            ch('Water in a freezer will…', 'melt|*freeze|disappear'),
            od('Order', 'ice cube|melting puddle|water'),
            tf('Melting ice can be frozen again.', true),
          ],
          t: ['Where would an ice cube melt fastest in your house? Why?', 'Does chocolate melt at the same temperature as ice?'],
          k: ['Predict which of three places will melt an ice cube fastest, then explain your result.'],
          m: ['🧪 Ice Cube Race', 'ice cubes, three plates, a timer', 'Put one ice cube on each plate | Place plates in three spots (sunny window, shade, fridge) | Check every 10 minutes | Record which melted first and explain why'],
          q: [
            ch('Melting changes a…', '*solid into a liquid|liquid into a solid|gas into a solid'),
            ch('To freeze water we need to make it…', 'hotter|*colder'),
            tf('Freezing is a reversible change.', true),
          ],
          ms: ['Describes melting and freezing', 'Identifies reversible changes', 'Conducts a simple melting investigation'],
        }),
      ]),
    ]),
    S('s6', 'Gases, the water cycle of states, mixing and dissolving.', [
      'Know air is a gas and takes up space', 'Describe evaporation and condensation', 'Investigate dissolving',
    ], [
      U('gases', 'Gases All Around', 'Gases spread out to fill any space.', 'Air takes up space; Evaporation and condensation; States of matter: solid, liquid, gas', [
        L('evaporation', 'Where Did the Puddle Go?', {
          o: ['Describe the three states of matter', 'Explain evaporation and condensation'],
          p: ['Knows melting and freezing'],
          e: [
            'There are three common states of matter: solid, liquid and gas. A gas spreads out to fill any container. Air is a mixture of gases — you can\'t see it, but you can feel it as wind.',
            'Evaporation is when a liquid turns into a gas. A puddle disappears on a sunny day because the water evaporates into water vapour in the air. Heat makes it happen faster.',
            'Condensation is the opposite: a gas cooling into a liquid. Water droplets form on a cold glass because water vapour in the air cools on it.',
          ],
          v: 'gas = a state that spreads out to fill any space; evaporation = liquid changing to gas; condensation = gas changing to liquid; water vapour = water as a gas',
          x: ['Wet clothes dry on a washing line by evaporation.', 'A bathroom mirror fogs up by condensation.'],
          s: ['The Disappearing Puddle', 'After the monsoon rain, a big puddle sat in the playground. Each day, Kiko drew a chalk line around it — and each day it was smaller. "Who\'s drinking it?" asked Kiko. "The Sun is warming it," said Nova, "and the water is turning into vapour that floats into the air."'],
          a: [
            mt('Match the change', 'puddle drying=evaporation|drops on a cold glass=condensation|ice cube to water=melting'),
            ch('Air is a…', 'solid|liquid|*gas'),
            ch('Clothes dry fastest on a…', '*warm, windy day|cold, still day|in a closed bag'),
            tf('Condensation turns a gas into a liquid.', true),
          ],
          t: ['Why does a glass of cold water "sweat" on a hot day?', 'Where does the water go when a puddle dries up?'],
          k: ['Explain to someone why a bathroom mirror fogs up after a hot shower.'],
          m: ['🧪 Puddle Tracker', 'chalk, a puddle (or water poured on a path), a timer', 'Draw around a puddle with chalk | Redraw its edge every hour | Measure how much smaller it gets | Try a second puddle in the shade and compare'],
          q: [
            ch('Evaporation changes…', '*liquid to gas|gas to liquid|solid to liquid'),
            ch('Which state spreads to fill a room?', 'solid|liquid|*gas'),
            tf('Heat speeds up evaporation.', true),
          ],
          ms: ['Names and describes three states', 'Explains evaporation and condensation with examples', 'Investigates factors affecting evaporation'],
        }),
      ]),
      U('dissolving', 'Mixing and Dissolving', 'Some solids disappear into liquids — but they are still there.', 'Soluble and insoluble; Dissolving speed: stirring, temperature; Solutions', [
        L('sugar-vanishes', 'Where Did the Sugar Go?', {
          o: ['Test which solids dissolve in water', 'Investigate what makes dissolving faster'],
          p: ['Knows solids and liquids'],
          e: [
            'When sugar is stirred into water, it seems to vanish. It has dissolved: it has broken into pieces too tiny to see and spread through the water. Taste it — the sweetness proves it\'s still there!',
            'Materials that dissolve are soluble (sugar, salt). Materials that don\'t are insoluble (sand, chalk). The mixture of a dissolved solid in a liquid is called a solution.',
            'Dissolving is faster in warm water and when stirred, and smaller pieces dissolve faster than big lumps.',
          ],
          c: [['science', 'Never taste unknown substances in experiments. Only taste kitchen ingredients like sugar or salt with an adult\'s permission.']],
          v: 'dissolve = mix completely into a liquid so you can\'t see it; soluble = can dissolve; insoluble = cannot dissolve; solution = a liquid with something dissolved in it',
          x: ['Salt in water: soluble.', 'Sand in water: insoluble — it sinks to the bottom.'],
          s: ['The Sweet Tea Test', 'Grandmother stirred sugar into hot tea, and it vanished in seconds. Kiko tried sugar in cold milk — it took ages. Then Kiko dropped in a sugar cube without stirring — it sat there for a long time. "Hot, stirred and small," Grandmother winked. "That\'s the secret to sweet tea."'],
          a: [
            mt('Soluble or insoluble?', 'salt=soluble|sand=insoluble|sugar=dissolves too, soluble and sweet'),
            ch('Sugar dissolves fastest in…', '*hot water, stirred|cold water, not stirred|ice'),
            tf('Dissolved sugar is still in the water.', true),
            ch('A liquid with something dissolved in it is a…', '*solution|solid|gas'),
          ],
          t: ['How could you get the salt back from salty water?', 'Is dissolving a reversible change?'],
          k: ['Show someone how to dissolve sugar quickly and explain the three tricks.'],
          m: ['🧪 Dissolving Race', 'three clear cups, warm and cold water, sugar cubes and granulated sugar, spoons, timer', 'Put a sugar cube in cold water, one in warm water and granulated sugar in warm water | Stir each the same way | Time how long until it disappears | Change only one thing at a time and explain the fair test', "Use warm, not hot, water. An adult should pour and handle the water; do not taste the materials and wipe up spills promptly."],
          q: [
            ch('Which is insoluble in water?', 'salt|sugar|*sand'),
            ch('Stirring makes dissolving…', '*faster|slower|stop'),
            tf('Smaller pieces dissolve faster than big lumps.', true),
          ],
          ms: ['Classifies soluble and insoluble materials', 'Investigates dissolving variables fairly', 'Explains that dissolved substances remain present'],
        }),
      ]),
    ]),
    S('s7', 'Separating mixtures and reversible vs irreversible changes.', [
      'Separate mixtures by sieving, filtering, evaporating and magnets', 'Distinguish reversible and irreversible changes', 'Recognise signs of a chemical change',
    ], [
      U('separating', 'Separating Mixtures', 'Using properties to separate things.', 'Sieving; Filtering; Evaporating; Magnetic separation', [
        L('separation-lab', 'The Separation Challenge', {
          o: ['Choose a method to separate a mixture', 'Explain how each method uses a property of materials'],
          p: ['Knows dissolving and magnetism'],
          e: [
            'A mixture contains two or more substances that are not chemically joined, so they can be separated using their properties.',
            'Sieving separates by size (rice from small stones). Filtering separates insoluble solids from liquids (sand from water). Evaporating separates dissolved solids from water (salt from sea water). A magnet separates magnetic metals (iron filings from sand).',
            'For a tricky mixture, use methods in order: e.g. sand, salt and iron — magnet first, then add water and filter out the sand, then evaporate the water to get salt.',
          ],
          v: 'mixture = substances mixed but not chemically joined; filter = separate an insoluble solid from a liquid; sieve = separate by size; evaporate = remove liquid by turning it into gas',
          x: ['Salt pans on India\'s coasts evaporate sea water to collect salt.', 'Tea strainers filter tea leaves.'],
          s: ['The Spilled Jar Disaster', 'Bolt knocked three jars onto the floor: sand, salt and iron paper clips all mixed together! Rangi had a plan: "Magnet for the clips. Water to dissolve the salt. Filter out the sand. Then let the salty water evaporate in the sun." By evening, all three were back in their jars.'],
          a: [
            mt('Match the mixture to the method', 'rice and small stones=sieving|sand and water=filtering|salt and water=evaporating|iron filings and sand=magnet'),
            od('Separate sand, salt and iron filings', 'Use a magnet to remove iron|Add water to dissolve salt|Filter out the sand|Evaporate the water to get salt'),
            tf('Filtering can remove dissolved salt from water.', false, 'Dissolved salt passes through the filter; evaporation is needed.'),
            ch('Salt pans collect salt by…', 'filtering|*evaporation|magnets'),
          ],
          t: ['Why can\'t you get sugar out of tea using a strainer?', 'How do water treatment plants make river water safe?'],
          k: ['Explain to someone the order you would use to separate a mixture of sand, salt and paper clips.'],
          m: ['🧪 Separation Station', 'sand, salt, paper clips, water, a magnet, a funnel with coffee filter or cloth, a shallow dish, sunlight', 'Mix sand, salt and paper clips | Remove clips with a magnet | Add water, stir, and filter out sand | Leave the salty water in sunlight to evaporate | Show your three separated substances', "Use a classroom-safe magnet and blunt tools. Do not taste the materials; wash hands afterwards and have an adult supervise the water and evaporation steps."],
          q: [
            ch('Best method for separating peas from water:', '*sieving|evaporating|magnet'),
            ch('Filtering works because…', '*insoluble solid particles are too big to pass through|salt is magnetic|water is solid'),
            tf('Mixtures can be separated using physical methods.', true),
          ],
          ms: ['Selects appropriate separation methods', 'Explains methods using properties', 'Plans multi-step separations'],
        }),
      ]),
      U('changes', 'Reversible and Irreversible Changes', 'Some changes can be undone; some make new substances.', 'Reversible: melting, dissolving; Irreversible: burning, cooking, rusting; Signs of chemical change', [
        L('can-we-undo', 'Can We Undo It?', {
          o: ['Classify changes as reversible or irreversible', 'Recognise signs that a new substance has formed'],
          p: ['Knows melting, freezing and dissolving'],
          e: [
            'Reversible changes can be undone: melting, freezing, dissolving and evaporating. No new substance is made.',
            'Irreversible changes make new substances and can\'t easily be undone: cooking an egg, baking a cake, burning wood, and iron rusting.',
            'Signs of a chemical (irreversible) change include: a new colour, gas bubbles, a smell, light or heat given off, or a new solid forming.',
          ],
          v: 'reversible change = a change that can be undone; irreversible change = a change that makes new substances and cannot easily be undone; rust = a new substance formed when iron reacts with water and oxygen; chemical change = a change that makes a new substance',
          x: ['Burning a candle: wax reacts to make gases (irreversible), though melting wax is reversible.', 'Mixing vinegar and baking soda makes bubbles of carbon dioxide gas.'],
          s: ['The Uncooked Egg Wish', 'Kiko fried an egg and then changed his mind: "I want it raw!" Kiko cooled it in the fridge, then froze it, then waited. The egg stayed cooked. "Cooking made new substances," explained Nova. "That change can\'t go backwards."'],
          a: [
            mt('Reversible or irreversible?', 'melting chocolate=reversible|baking a cake=irreversible|dissolving salt=reversible, no new substance'),
            ch('Which is a sign of a chemical change?', 'changing shape|*gas bubbles forming|being cut in half'),
            ch('Rust forms when iron reacts with…', '*water and oxygen|sugar|light only'),
            tf('Burning wood is an irreversible change.', true),
          ],
          t: ['Is melting a candle the same change as burning it?', 'Why do we paint iron gates?'],
          k: ['Show someone one reversible and one irreversible change in the kitchen and explain the difference.'],
          m: ['🧪 Fizz and Rust Observations', 'baking soda, vinegar, a cup, three iron nails, water, oil, three jars', 'Mix baking soda and vinegar and observe the bubbles | Put nails in dry air, water, and water with oil on top | Observe the nails daily for a week | Record which rusted and explain why', "An adult should handle the iron nails and supervise the experiment. Do not taste or touch the mixtures, keep them away from eyes, and wash hands after use."],
          q: [
            ch('Which is reversible?', 'frying an egg|*freezing juice|burning paper'),
            ch('A new substance being made means the change is…', '*chemical|physical|reversible'),
            tf('Mixing baking soda and vinegar makes a gas.', true),
          ],
          ms: ['Classifies changes correctly', 'Identifies evidence of chemical change', 'Investigates rusting conditions fairly'],
        }),
      ]),
    ]),
    S('s9', 'Particles, atoms, elements and compounds.', [
      'Use the particle model to explain states of matter', 'Distinguish elements, compounds and mixtures', 'Read the periodic table at a basic level',
    ], [
      U('particles', 'The Particle Model', 'Everything is made of tiny particles.', 'Particle arrangement in solids, liquids, gases; Diffusion; Changes of state explained by particles', [
        L('particle-model', 'Dancing Particles', {
          o: ['Use the particle model to explain properties of solids, liquids and gases', 'Explain diffusion'],
          p: ['Knows three states of matter and changes of state'],
          e: [
            'All matter is made of tiny particles far too small to see. In a solid, particles are packed closely in a fixed pattern and vibrate in place — so solids keep their shape.',
            'In a liquid, particles are close but can slide past each other — so liquids flow. In a gas, particles are far apart and move quickly in all directions — so gases spread out.',
            'Heating gives particles more energy, so they move faster. That\'s why heating melts solids and evaporates liquids. Diffusion — like a smell spreading through a room — happens because particles move and mix.',
          ],
          v: 'particle = a tiny piece of matter; diffusion = particles spreading from crowded to less crowded areas; vibrate = move back and forth on the spot; kinetic theory = the idea that particles are always moving',
          x: ['Smell of agarbatti spreading through a room: diffusion.', 'A drop of ink spreading slowly in still water.'],
          s: ['The Spreading Smell', 'Grandmother lit incense in one corner of the room. A minute later Kiko, at the other end, sniffed. "How did the smell get here?" Nova explained: "The scent particles are moving all the time. They bump and spread until they reach your nose."'],
          a: [
            mt('Match the state to the particles', 'solid=fixed, vibrating in place|liquid=close but sliding|gas=far apart, moving fast'),
            ch('Heating makes particles…', '*move faster|stop moving|shrink'),
            tf('Diffusion explains a smell spreading across a room.', true),
            ch('Why can gases be squashed?', 'Particles are fixed|*Particles have lots of space between them|Gases have no particles'),
          ],
          t: ['Why does diffusion happen faster in hot water than cold water?', 'Can we ever see particles? How do scientists know they exist?'],
          k: ['Act out solid, liquid and gas particles with your family and explain each.'],
          m: ['🧪 Ink Diffusion Race', 'two clear glasses, hot and cold water, food colouring, timer', 'Fill one glass with hot water and one with cold | Add one drop of colouring to each at the same time | Observe without stirring | Record how long colour takes to spread and explain using particles', "Use warm, not hot, water and non-toxic food colouring. An adult should pour the water; do not drink the experiment and clean spills promptly."],
          q: [
            ch('In a solid, particles…', 'move freely|*vibrate in fixed positions|are far apart'),
            ch('Melting happens because particles…', '*gain energy and break free from fixed positions|lose all energy|disappear'),
            tf('Gas particles move in all directions.', true),
          ],
          ms: ['Explains properties using particle arrangement', 'Explains changes of state with energy', 'Explains diffusion with evidence'],
        }),
      ]),
      U('elements', 'Elements and Compounds', 'The building blocks of all substances.', 'Atoms and elements; The periodic table; Compounds and formulae: H₂O, CO₂, NaCl', [
        L('periodic-table', 'The Periodic Table', {
          o: ['Distinguish elements, compounds and mixtures', 'Find basic information on the periodic table'],
          p: ['Understands particles'],
          e: [
            'An element is a substance made of only one type of atom — like oxygen (O), iron (Fe) or gold (Au). About 118 elements are known, arranged in the periodic table.',
            'A compound is made when atoms of different elements chemically join, like water (H₂O: two hydrogen atoms and one oxygen) or carbon dioxide (CO₂). Compounds have different properties from their elements: sodium is a reactive metal and chlorine a poisonous gas, but together they make table salt (NaCl).',
            'The periodic table arranges elements by atomic number. Columns (groups) contain elements with similar properties; metals are on the left and middle, non-metals on the right.',
          ],
          c: [['evidence', 'Dmitri Mendeleev published an early periodic table in 1869, leaving gaps for undiscovered elements whose properties he predicted — several were later discovered.']],
          v: 'atom = the smallest particle of an element; element = a substance of one type of atom; compound = two or more elements chemically joined; chemical formula = symbols showing the atoms in a compound',
          x: ['O₂: oxygen gas (an element, two atoms joined).', 'Air is a mixture; water is a compound.'],
          s: ['Mendeleev\'s Card Game', 'The chemist Dmitri Mendeleev wrote each known element on a card with its properties and arranged them like a game of patience. He noticed repeating patterns — and boldly left gaps, predicting elements no one had found. When gallium and germanium were discovered, they fitted his predictions.'],
          a: [
            mt('Element, compound or mixture?', 'gold=element|water=compound|air=mixture'),
            ch('H₂O contains how many hydrogen atoms?', '1|*2|3'),
            ch('Table salt is made from…', '*sodium and chlorine|sugar and water|iron and oxygen'),
            tf('Compounds can have very different properties from their elements.', true),
          ],
          t: ['Why was it brave of Mendeleev to leave gaps?', 'Why might elements in the same group behave similarly?'],
          k: ['Find five elements in everyday life and explain where each is found.'],
          m: ['Element Trading Cards', 'card, colour pens, a periodic table', 'Choose 10 elements | Make a card for each with symbol, atomic number, group and an everyday use | Sort your cards into metals and non-metals | Play a matching game with family'],
          q: [
            ch('Fe is the symbol for…', 'fluorine|*iron|francium'),
            ch('CO₂ is a…', 'element|*compound|mixture of separate elements'),
            tf('About 118 elements are known.', true),
          ],
          ms: ['Distinguishes elements, compounds and mixtures', 'Interprets simple formulae', 'Navigates the periodic table'],
        }),
      ]),
    ]),
    S('s12', 'Chemical reactions, equations, acids and bases, and rates of reaction.', [
      'Write and balance word and symbol equations', 'Explain acids, bases and neutralisation', 'Investigate factors affecting reaction rates',
    ], [
      U('reactions', 'Chemical Reactions and Equations', 'Atoms rearrange; mass is conserved.', 'Reactants and products; Conservation of mass; Balancing equations', [
        L('balancing', 'Balancing Equations', {
          o: ['Write word and symbol equations', 'Balance equations using conservation of mass'],
          p: ['Knows elements, compounds and formulae'],
          e: [
            'In a chemical reaction, reactants rearrange into products. Atoms are not created or destroyed, so the total mass stays the same — the law of conservation of mass.',
            'Word equation: methane + oxygen → carbon dioxide + water. Symbol equation: CH₄ + 2O₂ → CO₂ + 2H₂O.',
            'To balance, count atoms of each element on both sides and adjust the large numbers in front (coefficients), never the small subscripts. Here: 1 C, 4 H, 4 O on each side.',
          ],
          c: [['evidence', 'Antoine Lavoisier\'s careful weighing experiments in the 1770s–1780s established conservation of mass in chemical reactions.']],
          v: 'reactant = a starting substance in a reaction; product = a substance formed; coefficient = number in front of a formula showing how many units; conservation of mass = total mass is unchanged in a reaction',
          x: ['2H₂ + O₂ → 2H₂O.', 'Mg + 2HCl → MgCl₂ + H₂.'],
          s: ['Lavoisier\'s Scales', 'In the 1770s, Antoine Lavoisier sealed substances in glass vessels and weighed them before and after heating. Even when substances changed completely, the sealed total mass stayed the same. Matter was rearranging, not appearing or vanishing — a turning point for chemistry.'],
          a: [
            ch('Balance: H₂ + O₂ → H₂O. Correct:', '*2H₂ + O₂ → 2H₂O|H₂ + O₂ → H₂O₂|H₂ + 2O₂ → H₂O'),
            tf('Mass is conserved in a sealed chemical reaction.', true),
            ch('In "iron + sulfur → iron sulfide", iron sulfide is the…', 'reactant|*product|catalyst'),
            ch('To balance equations you change…', 'subscripts|*coefficients|element symbols'),
          ],
          t: ['Why does a burning candle seem to lose mass if mass is conserved?', 'Why must we never change subscripts to balance an equation?'],
          k: ['Teach someone to balance CH₄ + O₂ → CO₂ + H₂O step by step.'],
          m: ['🧪 Conservation of Mass Test', 'a plastic bottle, balloon, vinegar, baking soda, kitchen scale', 'Put vinegar in the bottle and baking soda in the balloon | Fit the balloon on the bottle and weigh the whole set-up | Tip the soda in and let it react | Weigh again and explain the result; repeat without a balloon and compare', "Use small quantities of vinegar and baking soda in an open, unsealed setup. Wear eye protection, do not taste or touch the mixture, and have an adult supervise. Never cap or seal the reacting bottle."],
          q: [
            ch('Balance: N₂ + H₂ → NH₃', '*N₂ + 3H₂ → 2NH₃|N₂ + H₂ → 2NH₃|2N₂ + H₂ → NH₃'),
            ch('Starting substances are called…', '*reactants|products|catalysts'),
            tf('Atoms are destroyed in chemical reactions.', false),
          ],
          ms: ['Writes and balances equations', 'Explains conservation of mass', 'Accounts for apparent mass changes (gases)'],
        }),
      ]),
      U('acids-bases', 'Acids, Bases and Rates', 'pH, neutralisation and how fast reactions go.', 'pH scale and indicators; Neutralisation; Rate factors: temperature, concentration, surface area, catalysts', [
        L('ph-scale', 'Acids, Bases and the pH Scale', {
          o: ['Use indicators and the pH scale', 'Explain neutralisation and factors affecting reaction rate'],
          p: ['Writes chemical equations'],
          e: [
            'The pH scale runs from 0 to 14. Acids have pH below 7 (lemon juice ≈ 2), neutral substances pH 7 (pure water), and bases/alkalis above 7 (soap, baking soda solution).',
            'Indicators change colour with pH. Red cabbage juice turns red/pink in acids and green/yellow in strong alkalis. Acid + base → salt + water: this is neutralisation, used in antacid tablets and treating acidic soils.',
            'Reaction rates increase with higher temperature, higher concentration, larger surface area (powder vs lump) and catalysts — because particles collide more often or with more energy.',
          ],
          v: 'acid = a substance with pH below 7; base = a substance that neutralises acids (alkalis are soluble bases); indicator = a substance that changes colour with pH; catalyst = a substance that speeds up a reaction without being used up',
          x: ['HCl + NaOH → NaCl + H₂O.', 'Powdered sugar dissolves and reacts faster than a sugar cube due to greater surface area.'],
          s: ['The Purple Cabbage Rainbow', 'Nova boiled chopped red cabbage and strained the purple juice into seven glasses. Adding lemon juice, vinegar, water, baking soda solution and soapy water made a rainbow from pink to green. "One vegetable," said Nova, "and a full pH lab."'],
          a: [
            mt('Acid, neutral or alkali?', 'lemon juice=acid|pure water=neutral|soap solution=alkali'),
            ch('Acid + base →', '*salt + water|only gas|metal'),
            ch('Which increases reaction rate?', '*higher temperature|larger lumps|lower concentration'),
            tf('A catalyst is used up in the reaction.', false),
          ],
          t: ['Why do antacid tablets help with indigestion?', 'Why do flour mills have strict rules against sparks?'],
          k: ['Explain collision theory to someone using a crowded playground as an analogy.'],
          m: ['🧪 Red Cabbage Indicator Lab', 'red cabbage, hot water (adult), strainer, clear cups, kitchen liquids (lemon, vinegar, baking soda solution, soap)', 'Make cabbage indicator with an adult | Test household liquids and record colours | Arrange them in pH order | Neutralise vinegar with baking soda solution and observe the colour change', "An adult must prepare the hot-water indicator. Use only labelled household samples in small amounts, never taste them, wear eye protection, and never mix household cleaners or bleach."],
          q: [
            ch('pH 7 is…', 'acidic|*neutral|alkaline'),
            ch('Grinding a solid into powder makes it react…', '*faster|slower|not at all'),
            tf('Indicators change colour depending on pH.', true),
          ],
          ms: ['Uses pH and indicators', 'Explains neutralisation with equations', 'Explains rate factors with collision theory'],
        }),
      ]),
    ]),
  ],
});
