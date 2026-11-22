import { subject, S, U, L, ch, tf, od, mt } from '../dsl.ts';

export default subject({
  id: 'ecosystems',
  description: 'How living things depend on each other and on their environment: who eats whom, decomposers, food webs, energy pyramids, cycles of matter, keystone species, and ecosystem services — studied through local observation.',
  stages: [
    S('s4', 'Who eats what, and how animals and plants need each other.', [
      'Say what some animals eat', 'Know plants help animals and animals help plants', 'Notice living things in a garden or park',
    ], [
      U('who-eats-what', 'Who Eats What?', 'Animals eat plants or other animals.', 'Plant eaters: cows, rabbits; Meat eaters: lions, eagles; Both: bears, crows', [
        L('lunch-time', 'Lunch Time in the Wild', {
          o: ['Say what common animals eat', 'Sort animals into plant eaters and meat eaters'],
          p: ['Can name common animals'],
          e: [
            'Every animal needs food. Some animals eat only plants — cows eat grass, rabbits eat carrots and leaves, elephants eat leaves and fruit.',
            'Some animals eat other animals — lions, eagles and sharks are hunters.',
            'Some animals eat both plants and animals — bears eat berries and fish; crows eat almost anything!',
          ],
          v: 'plant eater = an animal that eats plants; meat eater = an animal that eats other animals; food = what living things eat to grow and have energy',
          x: ['🐄 A cow eats grass.', '🦅 An eagle catches fish and small animals.'],
          s: ['The Picnic Mix-Up', 'Momo the bear packed a picnic for friends: grass, carrots, fish and berries. The cow took the grass. The rabbit took the carrots. The eagle took a fish. Momo ate berries AND fish. "I like a bit of everything," Momo smiled.'],
          a: [
            mt('Match the animal to its food', '🐄 cow=grass|🐇 rabbit=carrot|🦁 lion=meat|🐝 bee=nectar'),
            ch('Which animal eats only plants?', '*🐘 elephant|🦈 shark|🦅 eagle'),
            tf('Some animals eat plants and meat.', true),
            ch('What does a cow eat?', '*grass 🌿|fish 🐟|rocks 🪨'),
          ],
          t: ['Why do you think lions don\'t eat grass?', 'What do you eat — plants, meat, or both?'],
          k: ['Tell a grown-up what three animals eat and how you know.'],
          m: ['Animal Lunchbox Game', 'paper plates, pictures of animals and foods (drawn or cut out)', 'Put an animal picture on each plate | Choose the right food for each plate | Explain your choices | Make a funny wrong plate and see if someone spots it', "Use child-safe scissors with adult supervision if cutting pictures. Keep small paper pieces away from younger children."],
          q: [
            ch('Which is a meat eater?', 'cow|rabbit|*lion'),
            ch('A rabbit eats…', '*plants|meat|metal'),
            tf('All animals need food.', true),
          ],
          ms: ['Matches animals to foods', 'Sorts plant/meat eaters', 'Explains why animals need food'],
        }),
      ]),
      U('helpers', 'Plants and Animals Help Each Other', 'Living things need each other.', 'Plants give food and shelter; Animals spread seeds and pollen; Trees as homes', [
        L('tree-friends', 'The Busy Tree', {
          o: ['Describe how a tree helps many animals', 'Describe how animals help plants'],
          p: ['Knows plants and animals are living'],
          e: [
            'One tree can be home to many animals. Birds nest in its branches, squirrels store food in it, insects live in its bark, and monkeys eat its fruit.',
            'Animals help trees too. Bees carry pollen so the tree can make fruit. Birds and monkeys eat fruit and drop the seeds far away, where new trees can grow.',
            'When living things help each other like this, everyone does better.',
          ],
          v: 'shelter = a safe place; help = do something useful for someone; together = with each other',
          x: ['A banyan tree shelters birds, bats and monkeys.', 'Birds spread seeds of fig trees.'],
          s: ['The Banyan Hotel', 'An old banyan tree had many guests. Parrots lived on the top floor, bats hung in the middle, squirrels ran up and down, and ants marched along the roots. "Thank you for your fruit and shade," said the parrots, and they carried its seeds far away so new banyans could grow.'],
          a: [
            ch('A tree gives birds…', '*a place to nest|a car|a phone'),
            ch('How do birds help trees?', '*They spread seeds|They cut branches|They paint leaves'),
            tf('Bees help plants make fruit.', true),
            mt('Who lives in the tree?', '🦜 parrot=top branches|🐿️ squirrel=runs up and down the trunk|🐜 ant=marches along the roots'),
          ],
          t: ['What would happen to animals if a big tree was cut down?', 'How do people use trees?'],
          k: ['Look at a tree and tell someone all the animals that might use it.'],
          m: ['Tree Visitors Watch', 'a notebook, crayons, a tree near your home', 'Sit near a tree for 10 minutes with a grown-up | Draw every animal you see on or near it | Count the visitors | Talk about how the tree helps them'],
          q: [
            ch('Which animal might eat fruit from a tree?', '*🐒 monkey|🐟 fish|🐄 cow only'),
            tf('Animals can help plants spread seeds.', true),
            ch('Trees give animals…', '*food and shelter|nothing|electricity'),
          ],
          ms: ['Describes tree–animal relationships', 'Explains mutual help', 'Observes and records visitors'],
        }),
      ]),
    ]),
    S('s5', 'Decomposers, simple food chains and recycling in nature.', [
      'Know what decomposers do', 'Build a 3-link food chain', 'Explain nature\'s recycling',
    ], [
      U('decomposers', 'Nature\'s Recyclers', 'Decomposers turn dead things back into soil.', 'Decomposers: worms, fungi, bacteria; Rotting leaves and fruit; Compost', [
        L('rotting', 'Where Do Fallen Leaves Go?', {
          o: ['Explain what decomposers do', 'Describe how compost is made'],
          p: ['Knows soil and worms'],
          e: [
            'When leaves fall and plants and animals die, they don\'t pile up forever. Decomposers break them down into tiny pieces that become part of the soil.',
            'Earthworms, fungi (like mushrooms and mould) and bacteria (tiny living things too small to see) are decomposers.',
            'This is nature\'s recycling! The nutrients go back into the soil and help new plants grow. People copy this by making compost from vegetable peels.',
          ],
          v: 'decomposer = a living thing that breaks down dead material; rot = break down slowly; compost = rotted plant waste used to enrich soil; fungi = living things like mushrooms and mould',
          x: ['A fallen apple turns brown and soft as it rots.', 'Mushrooms often grow on dead logs.'],
          s: ['The Leaf Pile Mystery', 'Every autumn, Tara\'s garden was covered in leaves. By spring, they had disappeared! "Who took them?" Tara wondered. She dug a little and found worms, tiny white threads of fungi and dark, crumbly soil. "The decomposers ate them," said Olu, "and gave the soil a gift."'],
          a: [
            ch('Which is a decomposer?', '*earthworm|tiger|eagle'),
            ch('Decomposers turn dead leaves into…', '*soil|plastic|stone'),
            tf('Mushrooms are a kind of fungus.', true),
            od('Order', 'leaf falls|decomposers break it down|nutrients go into soil|new plants grow'),
          ],
          t: ['What would the forest look like without decomposers?', 'Why shouldn\'t we put plastic in compost?'],
          k: ['Explain nature\'s recycling to someone using a fallen leaf.'],
          m: ['🧪 Compost in a Bottle', 'a clear bottle cut open (adult help), soil, vegetable peels, dry leaves, a little water', 'Layer soil, peels and leaves in the bottle | Add a little water and cover loosely | Keep it in the shade and observe weekly | Draw the changes over a month', "An adult must cut and prepare the bottle. Use clean vegetable scraps and soil, do not touch mold, keep the container covered and wash hands after observing."],
          q: [
            ch('Bacteria are…', '*tiny living things that help decompose|big animals|rocks'),
            ch('Compost is made from…', '*plant waste|plastic bottles|metal cans'),
            tf('Decomposers help plants by enriching the soil.', true),
          ],
          ms: ['Identifies decomposers', 'Explains nutrient recycling', 'Makes and observes compost'],
        }),
      ]),
      U('simple-chains', 'Simple Food Chains', 'Food chains show who eats whom.', 'Sun → plant → animal; Arrows: "is eaten by"; Chains in ponds, forests and fields', [
        L('three-links', 'Three Links in a Chain', {
          o: ['Build a three-link food chain', 'Explain what the arrows mean'],
          p: ['Knows what animals eat'],
          e: [
            'A food chain shows how food passes from one living thing to another. It always starts with a plant, because plants make food from sunlight.',
            'Example: grass → grasshopper → frog. The arrow means "is eaten by". Grass is eaten by the grasshopper, which is eaten by the frog.',
            'Food chains are everywhere: in ponds (algae → tadpole → fish), fields (grass → goat) and gardens (leaf → caterpillar → bird).',
          ],
          v: 'food chain = a list showing who eats whom; arrow = shows the direction food goes; energy = what living things need to move and grow',
          x: ['Leaf → caterpillar → sparrow.', 'Seeds → mouse → owl.'],
          s: ['The Pond Party', 'In a pond, tiny green algae soaked up sunshine. A tadpole nibbled the algae. A fish gobbled the tadpole. A kingfisher swooped down and caught the fish. "We\'re a chain," said the kingfisher, "and it all started with sunshine."'],
          a: [
            od('Make the chain', 'grass|grasshopper|frog'),
            ch('Food chains start with a…', '*plant|lion|rock'),
            ch('In "leaf → caterpillar → bird", who eats the caterpillar?', 'leaf|*bird|nobody'),
            tf('The arrow means "is eaten by".', true),
          ],
          t: ['Why does every food chain start with a plant?', 'What would happen if all the frogs disappeared?'],
          k: ['Make up a food chain from your garden and explain it to someone.'],
          m: ['Food Chain Mobile', 'card, string, a stick, crayons', 'Draw a plant and two or three animals in a chain | Cut them out | Hang them in order from a stick with string | Add the Sun at the top', "Use child-safe scissors with adult supervision. Keep string away from the neck and small cut-outs away from younger children."],
          q: [
            od('Order', 'seeds|mouse|owl'),
            ch('Which comes first in a pond food chain?', '*algae|fish|kingfisher'),
            tf('Plants make food from sunlight.', true),
          ],
          ms: ['Constructs valid 3-link chains', 'Explains arrow direction', 'Gives chains from several habitats'],
        }),
      ]),
    ]),
    S('s6', 'Food webs, producers and consumers, and changes in a habitat.', [
      'Build food webs from several chains', 'Use producer/consumer vocabulary', 'Predict effects of removing a species',
    ], [
      U('food-webs', 'Food Webs', 'Food chains join into webs.', 'Producers, primary and secondary consumers; Predator and prey; Food webs', [
        L('web-of-life', 'The Web of Life', {
          o: ['Combine food chains into a food web', 'Identify producers, consumers, predators and prey'],
          p: ['Builds food chains'],
          e: [
            'Most animals eat more than one thing, and are eaten by more than one thing. When food chains join together, they make a food web.',
            'Producers are plants (they make food). Primary consumers eat producers (herbivores). Secondary consumers eat primary consumers. A predator hunts other animals; the animals it hunts are its prey.',
            'In a web, if one species changes, others are affected. If snakes vanished, mice might increase and eat more seeds.',
          ],
          v: 'food web = connected food chains; producer = makes its own food; consumer = eats other living things; predator = hunts animals; prey = animals that are hunted',
          x: ['A frog is a predator of insects and prey of snakes.', 'Grass is eaten by deer, rabbits and grasshoppers.'],
          s: ['The Missing Snakes', 'Farmers in a village were scared of snakes and removed many of them. Next season, mice multiplied and ate the grain stores. An old farmer explained: "The snakes were eating the mice. Everything is connected in the web."'],
          a: [
            mt('Match the role', 'grass=producer|rabbit=primary consumer|fox=secondary consumer'),
            ch('An animal that hunts others is a…', '*predator|prey|producer'),
            ch('If snakes disappear from a field, mice will probably…', '*increase|decrease|vanish'),
            tf('A frog can be both predator and prey.', true),
          ],
          t: ['Why are food webs more realistic than food chains?', 'Can removing a predator ever harm the prey species?'],
          k: ['Use a food web drawing to explain to someone what happens if one animal disappears.'],
          m: ['String Food Web Game', 'a ball of string, name cards for 8 living things', 'Each person holds a card | Pass the string between who eats whom to build a web | Remove one person and see who feels the string go slack | Discuss the effects'],
          q: [
            ch('Primary consumers eat…', '*producers|secondary consumers|rocks'),
            ch('Prey is…', 'an animal that hunts|*an animal that is hunted|a plant'),
            tf('Changing one species can affect many others in a web.', true),
          ],
          ms: ['Builds food webs', 'Uses trophic vocabulary correctly', 'Predicts effects of population changes'],
        }),
      ]),
      U('habitat-change', 'Changing Habitats', 'How habitats change and how living things respond.', 'Natural change: seasons, fire, floods; Human change: building, pollution; Responses: adapt, move, decline', [
        L('changing-places', 'When Habitats Change', {
          o: ['Describe natural and human causes of habitat change', 'Explain how living things may respond'],
          p: ['Knows habitats and food webs'],
          e: [
            'Habitats change. Some changes are natural: seasons, floods, droughts, fires and storms. Many ecosystems recover over time — a burnt grassland can regrow quickly.',
            'Humans also change habitats: building roads and cities, cutting forests, polluting rivers, and draining wetlands.',
            'When a habitat changes, living things might adapt, move somewhere else, or decline. Some species, like crows and pigeons, do well in cities; others, like tigers, need large wild areas.',
          ],
          v: 'habitat change = when a place where living things live becomes different; pollution = harmful substances added to the environment; decline = become fewer; recover = return to a healthy state',
          x: ['A wetland drained for buildings loses its frogs and birds.', 'Sparrows have declined in some cities as nesting places disappear.'],
          s: ['The Return of the Sparrows', 'In one city, people noticed fewer house sparrows. Modern buildings had no gaps for nests. A school club built wooden nest boxes and planted native shrubs. The next spring, chirping returned to the neighbourhood. "Small changes can help," the children realised.'],
          a: [
            mt('Natural or human change?', 'forest fire from lightning=natural|building a road=human|a river flood after heavy rain=natural, from weather'),
            ch('Which animal often does well in cities?', '*pigeon|snow leopard|tiger'),
            tf('Some habitats can recover after natural changes.', true),
            ch('When their habitat is destroyed, animals may…', '*move, adapt or decline|always stay the same|turn into plants'),
          ],
          t: ['Why do some animals thrive in cities while others disappear?', 'How can new buildings be designed to help wildlife?'],
          k: ['Describe a change you have noticed in a place near your home and how it affected living things.'],
          m: ['Sparrow Nest Box', 'a small wooden or sturdy cardboard box, scissors (adult help), string', 'With an adult, cut a 3 cm entry hole in a box | Make sure it is weatherproof | Hang it in a shady, safe spot | Watch over weeks and record any visitors', "An adult must cut the entry hole and prepare the box. Secure it safely without climbing; observe birds from a distance and do not disturb nests."],
          q: [
            ch('Draining a wetland is a…', 'natural change|*human change'),
            tf('All animals do well in cities.', false),
            ch('A habitat recovering means it…', '*returns to a healthy state|gets more polluted|disappears'),
          ],
          ms: ['Distinguishes natural and human habitat change', 'Explains species responses', 'Proposes helpful actions'],
        }),
      ]),
    ]),
    S('s7', 'Energy flow, ecological pyramids, and cycles of matter.', [
      'Explain why energy decreases along food chains', 'Interpret pyramids of numbers and biomass', 'Describe the carbon cycle simply',
    ], [
      U('energy-flow', 'Energy Flow and Pyramids', 'Why there are fewer top predators.', 'Trophic levels; 10% rule (approximate); Pyramids of numbers and biomass', [
        L('pyramids', 'Ecological Pyramids', {
          o: ['Explain why energy decreases at each trophic level', 'Interpret pyramids of numbers and biomass'],
          p: ['Builds food webs'],
          e: [
            'Each step in a food chain is a trophic level. When an animal eats, it uses most of the energy to move, keep warm and live; only a small part (often roughly 10%) is stored in its body and passed on.',
            'That\'s why there is lots of grass, fewer deer and very few tigers: there\'s less energy available at each higher level.',
            'A pyramid of biomass shows the total mass of living material at each level, usually biggest at the bottom. A pyramid of numbers can have odd shapes — one tree can feed thousands of insects.',
          ],
          v: 'trophic level = a step in a food chain; biomass = the total mass of living material; energy transfer = passing energy from one level to the next; apex predator = a predator at the top with no natural predators',
          x: ['One tiger may need the energy of many deer over a year, which need huge amounts of plants.', 'A single banyan supports thousands of insects: an inverted number pyramid.'],
          s: ['Why So Few Tigers?', 'Kiko asked, "Why are there millions of insects but only a few tigers?" Nova drew a pyramid: wide grass at the bottom, fewer deer above, and a tiny tiger at the top. "At every step, most of the energy is used up living," Nova explained. "There\'s only enough left at the top for a few."'],
          a: [
            ch('At each trophic level, the energy passed on is usually…', '*a small fraction|doubled|exactly the same'),
            ch('Why are there fewer top predators?', '*less energy is available at higher levels|they are lazy|they eat plants'),
            tf('A pyramid of biomass is usually widest at the bottom.', true),
            od('Order the trophic levels', 'producer|primary consumer|secondary consumer|apex predator'),
          ],
          t: ['Why might eating more plants and fewer animals feed more people with the same land?', 'Why can a pyramid of numbers be upside-down?'],
          k: ['Explain an energy pyramid to someone using building blocks.'],
          m: ['Energy Pyramid Model', 'blocks or cups, labels', 'Stack 100 blocks for producers, 10 for primary consumers, 1 for the secondary consumer | Label each level | Explain where the "missing" energy goes | Draw a pyramid of numbers for a tree and its insects'],
          q: [
            ch('Grass is at which trophic level?', '*producer|apex predator|secondary consumer'),
            ch('A tiger is an…', '*apex predator|producer|decomposer'),
            tf('Most energy is passed on to the next level.', false),
          ],
          ms: ['Explains energy loss between levels', 'Interprets ecological pyramids', 'Applies ideas to human food choices'],
        }),
      ]),
      U('cycles', 'Cycles of Matter', 'Carbon and water cycle through ecosystems.', 'Carbon cycle: photosynthesis, respiration, decomposition, combustion; Water cycle in ecosystems; Nitrogen (introduction)', [
        L('carbon-cycle', 'The Carbon Cycle', {
          o: ['Describe the main processes of the carbon cycle', 'Explain how humans affect it'],
          p: ['Knows photosynthesis and decomposers'],
          e: [
            'Carbon is in all living things. Plants take in carbon dioxide from the air during photosynthesis and build it into their bodies. Animals get carbon by eating plants.',
            'Living things release carbon dioxide back into the air through respiration. Decomposers release carbon when they break down dead things. Burning wood or fossil fuels (combustion) also releases carbon dioxide.',
            'Fossil fuels are ancient carbon stores. Burning them quickly adds carbon dioxide to the air faster than plants and oceans can absorb it.',
          ],
          v: 'carbon cycle = the movement of carbon between living things, air, land and oceans; respiration = releasing energy from food, giving out carbon dioxide; combustion = burning; fossil fuel = coal, oil or gas from ancient living things',
          x: ['A tree trunk is mostly made from carbon taken from the air.', 'Your breath contains carbon dioxide from respiration.'],
          s: ['The Journey of a Carbon Atom', 'A carbon atom floated in the air as carbon dioxide. A mango leaf captured it. It became part of a mango, which Kiko ate. Kiko breathed it out again. It drifted over the ocean, dissolved, and was built into a tiny shell. Millions of years later, it was part of a rock. Carbon never stops travelling.'],
          a: [
            mt('Match the process to what it does to carbon dioxide in the air', 'photosynthesis=removes it|respiration=adds it|burning fossil fuels=adds it quickly'),
            ch('Plants take in carbon by…', '*photosynthesis|respiration|combustion'),
            tf('Decomposers release carbon dioxide.', true),
            ch('Fossil fuels are…', '*ancient carbon stores|new plants|minerals with no carbon'),
          ],
          t: ['How could planting trees help balance the carbon cycle?', 'Why is burning fossil fuels different from breathing?'],
          k: ['Tell the story of a carbon atom\'s journey to someone.'],
          m: ['Carbon Cycle Board Game', 'card, dice, counters, pens', 'Draw stations: air, plant, animal, decomposer, ocean, fossil fuel | Write cards for moves (photosynthesis, respiration, burning) | Play and track your carbon atom | Discuss which stations held carbon longest'],
          q: [
            ch('Which process adds CO₂ to the air?', 'photosynthesis|*respiration|growing'),
            ch('Ancient carbon stores underground are…', '*fossil fuels|clouds|sand'),
            tf('Carbon moves between living things and the environment.', true),
          ],
          ms: ['Describes carbon cycle processes', 'Explains human impact on the cycle', 'Represents the cycle in a model'],
        }),
      ]),
    ]),
    S('s9', 'Keystone species, population dynamics and ecosystem services.', [
      'Explain keystone species and trophic cascades', 'Interpret predator–prey population graphs', 'Describe ecosystem services',
    ], [
      U('keystone', 'Keystone Species', 'Some species hold ecosystems together.', 'Keystone species; Trophic cascades: wolves of Yellowstone; Ecosystem engineers: beavers, elephants', [
        L('trophic-cascade', 'Trophic Cascades', {
          o: ['Explain keystone species and trophic cascades', 'Evaluate evidence from real case studies'],
          p: ['Understands food webs and energy flow'],
          e: [
            'A keystone species has a much bigger effect on its ecosystem than its numbers suggest — removing it causes big changes. Top predators like tigers and wolves are often keystone species.',
            'A trophic cascade happens when changes at one level ripple down the food web. When wolves were reintroduced to Yellowstone (USA) in 1995, elk behaviour and numbers changed; in some areas, willow and aspen recovered. Scientists still debate how strong the cascade was.',
            'Ecosystem engineers physically shape habitats: elephants push over trees and open grasslands, and their dung spreads seeds. In India, elephants and hornbills are key seed dispersers.',
          ],
          c: [['interpretation', 'Ecologists agree wolves affected Yellowstone\'s ecosystem but debate how much plant recovery was due to wolves versus other factors like climate and other predators.']],
          v: 'keystone species = a species with a disproportionately large effect on its ecosystem; trophic cascade = ripple effects through food web levels; ecosystem engineer = a species that physically changes its habitat; reintroduction = returning a species to an area it had vanished from',
          x: ['Sea otters eat sea urchins, protecting kelp forests.', 'Hornbills spread seeds of large forest trees.'],
          s: ['The Wolves Return', 'For 70 years, Yellowstone had no wolves, and elk grazed riverbanks bare. In 1995 wolves were brought back. Elk became warier and moved more; in some places young willows began to grow again. Scientists collected decades of data — and discovered that ecosystems are more connected, and more complicated, than anyone expected.'],
          a: [
            ch('A keystone species…', '*has a big effect on its ecosystem|is always the biggest animal|lives in rocks'),
            ch('Removing a top predator can cause…', '*a trophic cascade|no changes at all|more sunlight'),
            tf('Scientists fully agree on every detail of the Yellowstone story.', false),
            mt('Match the species to its role', 'elephant=ecosystem engineer|hornbill=seed disperser|tiger=top predator'),
          ],
          t: ['Why should we be careful about simple "one cause" stories in ecology?', 'Which animal might be a keystone species near where you live?'],
          k: ['Explain the Yellowstone story to someone, including what scientists still debate.'],
          m: ['Keystone Case Study Report', 'books or reliable articles, notebook', 'Choose a keystone species (tiger, hornbill, sea otter, elephant) | Describe its role and effects | Present evidence and uncertainties | Write a one-page report'],
          q: [
            ch('Wolves were reintroduced to Yellowstone in…', '1905|*1995|2015'),
            ch('An animal that reshapes its habitat is an…', '*ecosystem engineer|apex prey|decomposer only'),
            tf('Trophic cascades ripple through food webs.', true),
          ],
          ms: ['Defines keystone species and trophic cascades', 'Evaluates case study evidence', 'Recognises scientific uncertainty'],
        }),
      ]),
      U('services', 'Ecosystem Services', 'What nature does for us.', 'Provisioning, regulating, cultural, supporting services; Wetlands, mangroves and forests; Valuing nature', [
        L('nature-does', 'What Nature Does for Us', {
          o: ['Classify ecosystem services', 'Explain the value of mangroves and wetlands'],
          p: ['Understands ecosystems'],
          e: [
            'Ecosystem services are benefits people get from nature. Provisioning services give products: food, timber, medicines, fresh water. Regulating services control natural processes: pollination, flood control, climate regulation, water purification.',
            'Cultural services are non-material: recreation, beauty, spiritual and educational value. Supporting services make the others possible: soil formation, nutrient cycling, photosynthesis.',
            'Mangroves, like the Sundarbans, protect coasts from storm surges, nurture fish nurseries and store carbon. Wetlands like East Kolkata Wetlands naturally treat wastewater and support fisheries.',
          ],
          c: [['evidence', 'The East Kolkata Wetlands, a Ramsar site, use sewage-fed fisheries and natural processes to treat a large share of the city\'s wastewater.']],
          v: 'ecosystem service = a benefit people get from nature; provisioning = providing products; regulating = controlling natural processes; Ramsar site = a wetland of international importance',
          x: ['Bees pollinating crops: regulating service.', 'A sacred grove\'s spiritual value: cultural service.'],
          s: ['The Mangrove Shield', 'When a powerful cyclone struck a stretch of coast, villages behind thick mangrove forests generally suffered less damage than those where mangroves had been cleared for farms. Fishermen began replanting mangroves — they had learned what the forest did for them.'],
          a: [
            mt('Match the service type', 'timber from a forest=provisioning|wetland filtering water=regulating|a peaceful walk in nature=cultural|soil formation=supporting'),
            ch('Mangroves protect coasts from…', '*storm surges|sunlight|earthquakes'),
            tf('Pollination is an ecosystem service.', true),
            ch('A wetland of international importance is a…', '*Ramsar site|national highway|desert'),
          ],
          t: ['Should we put a money value on nature? What are the risks and benefits?', 'Which ecosystem service do you rely on most every day?'],
          k: ['Give a short talk convincing your local council to protect a wetland or park.'],
          m: ['Ecosystem Services Map', 'a local map, coloured markers', 'Mark green and blue spaces near you | Label the services each provides | Identify any under threat | Write a letter or poster advocating for one space'],
          q: [
            ch('Food and fresh water are…', '*provisioning services|cultural services|supporting services'),
            ch('East Kolkata Wetlands help…', '*treat wastewater naturally|make deserts|mine coal'),
            tf('Cultural services include beauty and recreation.', true),
          ],
          ms: ['Classifies ecosystem services', 'Explains mangrove and wetland value', 'Advocates with evidence'],
        }),
      ]),
    ]),
    S('s12', 'Population ecology, biodiversity measurement, and global change.', [
      'Model population growth and carrying capacity', 'Measure biodiversity with indices', 'Analyse global ecological change',
    ], [
      U('populations', 'Population Ecology', 'How populations grow and are limited.', 'Exponential and logistic growth; Carrying capacity; Predator–prey cycles', [
        L('carrying-capacity', 'Carrying Capacity', {
          o: ['Describe exponential and logistic growth', 'Interpret predator–prey cycles'],
          p: ['Understands food webs and graphs'],
          e: [
            'With unlimited resources, a population can grow exponentially — doubling repeatedly. Bacteria in a fresh nutrient dish can do this for a while.',
            'Real environments have limits: food, space, water, predators and disease. As a population approaches the carrying capacity (K) — the maximum the environment can support long-term — growth slows, producing an S-shaped (logistic) curve.',
            'Predator and prey populations often cycle: more prey allows predators to increase; more predators reduce prey; fewer prey then reduce predators. Historical fur-trapping records of Canadian lynx and snowshoe hare are a classic example.',
          ],
          v: 'carrying capacity = the maximum population an environment can sustain; exponential growth = growth by repeated multiplication; logistic growth = S-shaped growth levelling off at carrying capacity; limiting factor = a resource that restricts growth',
          x: ['Locust swarms can grow explosively after rains.', 'An island deer population crashing after overgrazing.'],
          s: ['The Island Deer', 'A few reindeer were introduced to St. Matthew Island in Alaska in 1944 with no predators. Their numbers rose to about 6,000 by 1963 — then they ate the lichen faster than it could regrow. After a harsh winter, the population crashed to a few dozen. The island had a carrying capacity, and they overshot it.'],
          a: [
            ch('An S-shaped population curve shows…', 'exponential growth forever|*logistic growth levelling at carrying capacity|no growth'),
            ch('Carrying capacity is limited by…', '*food, space and other resources|the colour of animals|the calendar'),
            tf('Predator and prey populations can rise and fall in cycles.', true),
            od('Predator–prey cycle', 'prey increase|predators increase|prey decrease|predators decrease'),
          ],
          t: ['Does the idea of carrying capacity apply to humans? How might technology change it?', 'Why might predator peaks lag behind prey peaks?'],
          k: ['Explain the St. Matthew Island story using a graph you draw.'],
          m: ['🧪 Yeast Population Experiment', 'dry yeast, sugar, warm water, balloons, bottles', 'Mix yeast with different sugar amounts in bottles | Fit balloons and measure their circumference every 15 minutes | Graph the results | Relate the curve shape to carrying capacity and limiting factors'],
          q: [
            ch('K stands for…', '*carrying capacity|kinetic energy|kingdom'),
            ch('Unlimited resources lead to…', '*exponential growth|immediate extinction|no change'),
            tf('Overshooting carrying capacity can cause a population crash.', true),
          ],
          ms: ['Distinguishes growth models', 'Interprets population graphs', 'Applies limiting factors to real cases'],
        }),
      ]),
      U('biodiversity-crisis', 'Measuring and Protecting Biodiversity', 'Biodiversity indices and global change.', 'Species richness and evenness; Simpson\'s diversity index; Global biodiversity loss and protection targets', [
        L('diversity-index', 'Measuring Biodiversity', {
          o: ['Calculate and interpret a simple diversity index', 'Analyse causes of and responses to biodiversity loss'],
          p: ['Understands populations and sampling'],
          e: [
            'Biodiversity includes species richness (how many species) and evenness (how balanced their numbers are). Two meadows with ten species each can differ if one is dominated by a single species.',
            'Simpson\'s index of diversity (1 − Σn(n−1)/N(N−1)) gives a value from 0 to 1: higher means more diverse. Ecologists sample with quadrats and transects to estimate it.',
            'Major drivers of biodiversity loss are land-use change, overexploitation, climate change, pollution and invasive species. Global agreements, such as the 2022 Kunming-Montreal framework, include a target to conserve 30% of land and sea by 2030.',
          ],
          c: [['evidence', 'The IPBES 2019 global assessment estimated around one million species are threatened with extinction, many within decades, without action.']],
          v: 'species richness = the number of different species; evenness = how evenly individuals are spread among species; diversity index = a number summarising richness and evenness; invasive species = a non-native species that spreads and causes harm',
          x: ['Lantana is an invasive shrub in many Indian forests.', 'A transect samples species along a line across changing habitats.'],
          s: ['Two Meadows', 'Two student teams each found 8 plant species in their meadow. "Same diversity!" they said. But in one meadow, 90% of plants were a single grass. Calculating Simpson\'s index showed the other meadow was much more diverse. Counting species alone had hidden the difference.'],
          a: [
            mt('Match the term', 'richness=number of species|evenness=balance of numbers|invasive species=non-native and harmful'),
            ch('Simpson\'s index of diversity close to 1 means…', '*high diversity|low diversity|no species'),
            tf('Lantana is an invasive species in parts of India.', true),
            ch('A "30 by 30" target aims to conserve…', '*30% of land and sea by 2030|30 species|30 parks'),
          ],
          t: ['Why is evenness important, not just the number of species?', 'Who should pay for protecting biodiversity in poorer regions?'],
          k: ['Present your biodiversity survey results and what they suggest about the habitat.'],
          m: ['Quadrat Biodiversity Survey', 'string and pegs for 1 m² quadrats, plant ID guide, calculator', 'Sample 5 quadrats in two different areas (lawn vs wild patch) | Count individuals of each species | Calculate species richness and Simpson\'s index | Compare and explain the differences'],
          q: [
            ch('Counting species only measures…', '*richness|evenness|biomass'),
            ch('A major driver of biodiversity loss:', '*land-use change|more national parks|sustainable fishing'),
            tf('Quadrats are used to sample organisms.', true),
          ],
          ms: ['Calculates diversity indices', 'Interprets biodiversity data', 'Evaluates global conservation strategies'],
        }),
      ]),
    ]),
  ],
});
