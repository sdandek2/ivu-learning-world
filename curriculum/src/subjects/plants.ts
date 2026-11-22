import { subject, S, U, L, ch, tf, od, mt } from '../dsl.ts';

export default subject({
  id: 'plants',
  description: 'Growing and understanding plants: planting seeds, caring for a garden, what plants need, pollination and seed dispersal, photosynthesis, India\'s crops and trees, and plant science for food security. Hands-on gardening runs through every stage.',
  stages: [
    S('s4', 'Planting seeds and caring for a growing plant.', [
      'Plant a seed and care for it', 'Know plants need water, light and soil', 'Notice and describe how a plant grows',
    ], [
      U('seed-to-sprout', 'From Seed to Sprout', 'A tiny seed can grow into a big plant.', 'Seeds: shapes and sizes; Planting: soil, water, sunlight; Watching: roots and shoots', [
        L('plant-a-seed', 'Let\'s Plant a Seed', {
          o: ['Plant a seed and describe what it needs', 'Notice the first root and shoot'],
          p: ['Knows plants are living'],
          e: [
            'A seed is like a little lunchbox with a baby plant inside. When it gets water and warmth, it wakes up and starts to grow. This is called germination.',
            'First a tiny root grows down into the soil to drink water. Then a green shoot grows up towards the light.',
            'To keep growing, the plant needs water, sunlight, air and soil. Too much water can drown it, so water a little at a time.',
          ],
          v: 'seed = the part that grows into a new plant; root = the part that grows down into soil; shoot = the first green stem growing up; sprout = to start growing',
          x: ['Mung beans sprout in just a day or two.', 'Mango seeds are big; mustard seeds are tiny.'],
          s: ['Tara\'s Tiny Bean', 'Tara the tortoise planted a bean in a cup and waited. Nothing! Day two — nothing! "Be patient," whispered the soil. On day four, a tiny root peeked out, then a green shoot unfolded like a sleepy stretch. "Hello, little plant!" Tara smiled.'],
          a: [
            od('Put the steps in order', 'put soil in a pot 🪴|plant the seed 🌰|water it 💧|watch it sprout 🌱'),
            ch('Which part grows down into the soil?', '*the root|the leaf|the flower'),
            ch('A plant needs…', '*water and sunlight|toys and music|ice cream'),
            tf('Seeds come in different shapes and sizes.', true),
          ],
          t: ['Why do you think the root grows first?', 'What would happen to a seed kept in a dry box?'],
          k: ['Show a grown-up your seed pot and explain what you will do to help it grow.'],
          m: ['🧪 Bean in a Jar', 'a clear jar, paper towel, water, 2–3 mung or rajma beans', 'Line the jar with damp paper towel | Push beans between the towel and glass | Keep the towel damp and the jar in light | Draw what you see every day for a week'],
          q: [
            ch('The first green part that grows up is the…', '*shoot|root|seed'),
            tf('Too much water can harm a plant.', true),
            ch('A seed starting to grow is called…', '*germination|melting|sleeping'),
          ],
          ms: ['Plants and cares for a seed', 'Names plant needs', 'Describes germination observations'],
        }),
      ]),
      U('garden-friends', 'Garden Friends', 'Gardens are full of plants and little creatures.', 'Flowers, leaves, trees; Helpful creatures: bees, worms, ladybirds; Garden care: watering, weeding', [
        L('garden-helpers', 'Who Helps the Garden?', {
          o: ['Name garden creatures that help plants', 'Describe simple ways to care for a garden'],
          p: ['Has planted or seen plants growing'],
          e: [
            'A garden is busy with helpers! Bees visit flowers and carry pollen, which helps plants make fruit and seeds.',
            'Earthworms dig tunnels that let air and water into the soil. Ladybirds eat tiny insects called aphids that damage plants.',
            'We help too: watering when soil is dry, pulling weeds that take water and space, and never stepping on young plants.',
          ],
          v: 'garden = a place where plants are grown; weed = a plant growing where it is not wanted; pollen = yellow dust in flowers; helper = something that makes a job easier',
          x: ['🐝 Bees help make mangoes and apples.', '🐞 Ladybirds protect roses from aphids.'],
          s: ['The Bee Who Was Too Busy', 'Buzzy the bee visited a hundred flowers before lunch. "Why so busy?" asked Momo. "Every flower I visit, I carry a little pollen," buzzed Buzzy. "That helps them make seeds and fruit." That summer, Momo\'s garden grew the biggest pumpkins ever.'],
          a: [
            mt('Match the helper to the job', '🐝 bee=carries pollen|🪱 worm=digs air tunnels|🐞 ladybird=eats aphids'),
            ch('A weed is…', '*a plant growing where we don\'t want it|a kind of bee|a flower pot'),
            tf('Worms help make soil healthy.', true),
            ch('Bees visit flowers for…', '*nectar and pollen|water only|sunlight'),
          ],
          t: ['Why should we be gentle with bees?', 'Is a weed a bad plant? What do you think?'],
          k: ['Tell a grown-up which garden helper you like best and why.'],
          m: ['Bug Hotel', 'a plastic bottle cut in half or a small box, sticks, dry leaves, pine cones, bamboo pieces', 'Fill the container with sticks, leaves and hollow stems | Place it in a quiet corner of the garden or balcony | Check it gently every few days | Draw any creatures that move in'],
          q: [
            ch('Which creature carries pollen?', '*🐝|🐌|🐟'),
            ch('Pulling out weeds helps plants get more…', '*water and space|music|toys'),
            tf('Ladybirds eat tiny insects that harm plants.', true),
          ],
          ms: ['Names garden helpers and their roles', 'Describes basic garden care', 'Shows care for small creatures'],
        }),
      ]),
    ]),
    S('s5', 'What plants need, a fair test for growth, and plants we eat.', [
      'Test what plants need to grow', 'Know which parts of plants we eat', 'Grow a herb or vegetable',
    ], [
      U('plant-needs', 'What Do Plants Need?', 'Testing plants\' needs with a fair test.', 'Light, water, warmth; Fair test: one change at a time; Recording growth', [
        L('light-test', 'Light or Dark?', {
          o: ['Carry out a simple fair test on plant needs', 'Explain why plants need light'],
          p: ['Has grown a seed'],
          e: [
            'To find out what plants need, scientists do a fair test: they change only ONE thing and keep everything else the same.',
            'Put one cress pot in a sunny place and one in a dark cupboard. Give them the same water, soil and pot. Only the light is different.',
            'Plants in the dark grow pale, thin and floppy, stretching to find light. Plants in the light grow green and strong, because leaves use light to make food.',
          ],
          v: 'fair test = changing only one thing at a time; predict = say what you think will happen; result = what actually happened; pale = light-coloured, not bright',
          x: ['Two identical pots: one watered, one not — testing water.', 'Plants on a windowsill lean towards the window.'],
          s: ['The Cupboard Cress', 'Kiko grew two pots of cress. One went on the windowsill; one went in the dark cupboard. After a week, the window cress was bright green. The cupboard cress was yellow and tall and floppy. "It\'s been searching for the light," said Tara. "Plants need light to make their food."'],
          a: [
            ch('In a fair test you change…', '*only one thing|everything|nothing'),
            ch('Cress grown in the dark is usually…', '*pale and floppy|green and strong|purple'),
            tf('Plants lean towards light.', true),
            ch('To test if plants need water, the two pots should get…', '*the same light but different water|different light and different water|no soil'),
          ],
          t: ['Why must we keep everything else the same in a fair test?', 'Can any plants grow without sunlight?'],
          k: ['Explain your plant experiment to someone: what you changed, what you kept the same and what happened.'],
          m: ['🧪 Cress Fair Test', 'two pots or egg shells, cotton wool, cress or mustard seeds, water, a ruler', 'Sow seeds on damp cotton wool in two pots | Put one in light and one in a dark cupboard | Water both the same | Measure and draw them every two days | Write your conclusion'],
          q: [
            ch('Plants use light to…', '*make food|sleep|walk'),
            tf('A fair test changes lots of things at once.', false),
            ch('What should stay the same in the light test?', '*water, soil and pot size|the amount of light'),
          ],
          ms: ['Conducts a fair test with one variable', 'Records results', 'Explains the need for light'],
        }),
      ]),
      U('food-plants', 'Plants We Eat', 'Roots, stems, leaves, flowers, fruits and seeds on our plates.', 'Edible parts; Indian crops: rice, wheat, millet, pulses; Growing herbs: tulsi, coriander, mint', [
        L('eat-plant-parts', 'Which Part Are We Eating?', {
          o: ['Identify which plant part common foods come from', 'Name important Indian food crops'],
          p: ['Knows the parts of a plant'],
          e: [
            'Almost everything we eat comes from plants. We eat roots (carrot, radish), stems (potato is an underground stem!, sugarcane), leaves (spinach, methi), flowers (cauliflower, broccoli), fruits (mango, tomato) and seeds (rice, wheat, dal).',
            'Grains like rice, wheat and millets (jowar, bajra, ragi) are the seeds of grass plants. They give us energy.',
            'Pulses — dals, chickpeas, rajma — are seeds too, and give us protein to grow strong.',
          ],
          c: [['science', 'A potato is a tuber: a swollen underground stem, not a root. It has "eyes" (buds) that can sprout new shoots.']],
          v: 'grain = the seed of a grass plant like rice or wheat; pulse = an edible seed like dal or chickpeas; crop = a plant grown by farmers for food; millet = a hardy small-seeded grain',
          x: ['Roti comes from wheat seeds ground into flour.', 'Ragi (finger millet) is grown widely in Karnataka.'],
          s: ['The Thali Treasure Hunt', 'Momo looked at a thali: rice, dal, a potato sabzi, spinach, a tomato and a slice of mango. "Which part of each plant am I eating?" Momo wondered. Seeds, seeds, stem, leaves, fruit, fruit! "A whole garden on one plate," Momo laughed.'],
          a: [
            mt('Match the food to the plant part', 'carrot=root|spinach=leaf|cauliflower=flower|rice=seed'),
            ch('A potato is actually…', 'a root|*an underground stem|a fruit'),
            ch('Ragi, jowar and bajra are…', '*millets (grains)|fruits|leaves'),
            tf('Dal is made from seeds.', true),
          ],
          t: ['Why do you think grains are eaten all over the world?', 'Is a tomato a fruit or a vegetable? Why do people disagree?'],
          k: ['Look at your lunch and tell someone which plant part each food came from.'],
          m: ['Windowsill Herb Garden', 'small pots, soil, coriander seeds or mint cuttings, water', 'Plant coriander seeds or push mint stems into soil | Water lightly and keep in light | Watch them grow for 3–4 weeks | Pick some leaves to add to a family meal'],
          q: [
            ch('Sugarcane is a…', 'leaf|*stem|flower'),
            ch('Wheat flour comes from wheat…', 'roots|leaves|*seeds'),
            tf('A mango is a fruit.', true),
          ],
          ms: ['Identifies edible plant parts', 'Names Indian staple crops', 'Grows an edible plant'],
        }),
      ]),
    ]),
    S('s6', 'Flowers, pollination and seed dispersal.', [
      'Name parts of a flower', 'Explain pollination', 'Describe ways seeds are dispersed',
    ], [
      U('flowers', 'Flowers and Pollination', 'Flowers help plants make seeds.', 'Flower parts: petals, stamen, pistil; Pollinators: bees, butterflies, birds, bats, wind; From flower to fruit', [
        L('pollination', 'The Pollen Journey', {
          o: ['Name the main parts of a flower', 'Explain how pollination leads to seeds and fruit'],
          p: ['Knows plant parts'],
          e: [
            'Flowers have colourful petals to attract visitors. In the middle are the stamens, which make powdery pollen, and the pistil, which contains tiny eggs (ovules).',
            'Pollination happens when pollen moves from a stamen to a pistil. Bees, butterflies, birds and even bats carry pollen as they feed on nectar. Some plants, like wheat and maize, are pollinated by the wind.',
            'After pollination, the ovules become seeds and the part around them often grows into a fruit.',
          ],
          v: 'petal = the colourful part of a flower; stamen = the part that makes pollen; pistil = the part that receives pollen and holds ovules; pollination = moving pollen from stamen to pistil',
          x: ['Sunbirds pollinate many Indian flowers.', 'Without pollinators, many fruits would not form.'],
          s: ['The Sunbird\'s Breakfast', 'A tiny purple sunbird darted to a red hibiscus and dipped its curved beak inside for sweet nectar. When it flew off, yellow pollen dusted its head. At the next flower, some pollen rubbed off onto the pistil. "Thank you for the breakfast," the bird chirped — and the flower began to make seeds.'],
          a: [
            mt('Match the flower part to its job', 'petal=attracts visitors|stamen=makes pollen|pistil=receives pollen'),
            od('Order', 'Bee visits a flower|Pollen sticks to the bee|Bee visits another flower|Pollen reaches the pistil|Seeds form'),
            ch('Which is NOT a pollinator?', 'bee|butterfly|*rock'),
            tf('Some plants are pollinated by the wind.', true),
          ],
          t: ['Why do you think many flowers are brightly coloured or smell sweet?', 'What might happen to our food if bee numbers fell sharply?'],
          k: ['Using a real flower, show someone the petals, stamens and pistil and explain pollination.'],
          m: ['Flower Dissection Diagram', 'a large flower (hibiscus or lily), a tray, tweezers, paper, tape', 'Gently take the flower apart on a tray | Tape each part onto paper | Label petals, stamens and pistil | Look at pollen with a magnifying glass if you have one'],
          q: [
            ch('Pollen is made by the…', '*stamen|petal|root'),
            ch('After pollination, ovules become…', '*seeds|leaves|roots'),
            tf('Bats can be pollinators.', true),
          ],
          ms: ['Names flower parts and functions', 'Explains pollination', 'Links pollination to food production'],
        }),
      ]),
      U('dispersal', 'Seeds on the Move', 'How seeds travel to new places.', 'Wind: dandelion, maple; Animals: burrs, fruits eaten; Water: coconut; Bursting: pea pods, balsam', [
        L('seed-travel', 'How Seeds Travel', {
          o: ['Describe four ways seeds are dispersed', 'Link seed features to their dispersal method'],
          p: ['Knows seeds come from flowers'],
          e: [
            'If all seeds fell right under the parent plant, they would compete for light and water. So plants have clever ways to spread their seeds.',
            'Wind: light seeds with fluffy parachutes or wings float away (dandelion, maple). Animals: tasty fruits are eaten and seeds pass out elsewhere; hooked burrs cling to fur.',
            'Water: coconuts float across seas. Bursting: some pods dry and explode, flinging seeds (balsam, peas).',
          ],
          v: 'dispersal = spreading seeds to new places; burr = a seed case with hooks; pod = a seed case, like a pea pod; germinate = start to grow',
          x: ['Coconut palms grow along tropical beaches because coconuts float.', 'Birds eat figs and spread fig seeds.'],
          s: ['The Coconut Voyage', 'A coconut fell from a palm on a sandy shore and rolled into the sea. For weeks it bobbed on the waves, its thick husk keeping the seed safe. At last it washed onto a faraway beach, sprouted, and grew into a new palm tree.'],
          a: [
            mt('Match the seed to how it travels', 'dandelion=wind|coconut=water|burr=animal fur|balsam pod=bursting'),
            ch('Why do plants spread seeds far away?', '*so seedlings don\'t compete with the parent|to get exercise|because seeds are angry'),
            tf('Birds can help spread seeds.', true),
            ch('A seed with "wings" is usually spread by…', '*wind|water|bursting'),
          ],
          t: ['Which method do you think spreads seeds the furthest?', 'How might humans spread seeds without meaning to?'],
          k: ['Show someone a seed and explain how you think it travels, based on its shape.'],
          m: ['🧪 Paper Helicopter Seeds', 'paper, scissors, paper clips, a stopwatch', 'Make paper "helicopter seeds" with different wing lengths | Drop each from the same height | Time how long they take to fall and how far they drift | Explain which design would spread seeds best'],
          q: [
            ch('A fluffy parachute seed travels by…', '*wind|water|bursting'),
            ch('Hooked seeds stick to…', '*animal fur|water|rocks'),
            tf('Some pods burst to fling seeds out.', true),
          ],
          ms: ['Explains dispersal methods', 'Links seed structure to method', 'Designs and tests a model seed'],
        }),
      ]),
    ]),
    S('s7', 'Photosynthesis, trees and forests, and farming in India.', [
      'Explain photosynthesis in words', 'Explain the importance of trees', 'Describe Kharif and Rabi crops',
    ], [
      U('photosynthesis-basic', 'How Plants Make Food', 'Photosynthesis in words.', 'Ingredients: carbon dioxide, water, light; Products: sugar, oxygen; Leaves and chlorophyll', [
        L('leaf-kitchen', 'The Leaf Kitchen', {
          o: ['Describe photosynthesis in a word equation', 'Explain why photosynthesis matters for all life'],
          p: ['Knows plants need light'],
          e: [
            'Leaves are like kitchens. They take in carbon dioxide from the air through tiny holes, and water from the roots. Using energy from sunlight, the green pigment chlorophyll helps turn these into sugar (glucose) — the plant\'s food.',
            'Oxygen is released as a by-product. Word equation: carbon dioxide + water → (light, chlorophyll) → glucose + oxygen.',
            'Almost all food chains begin with photosynthesis, and much of the oxygen we breathe comes from plants and ocean algae.',
          ],
          v: 'photosynthesis = how plants make food using light; chlorophyll = the green pigment that captures light; glucose = a sugar plants make; stomata = tiny holes in leaves for gases',
          x: ['Water plants release bubbles of oxygen in sunlight.', 'Plants store extra glucose as starch, like in potatoes and rice.'],
          s: ['Van Helmont\'s Willow', 'In the 1600s, Jan van Helmont planted a small willow in a weighed pot of soil and only watered it for five years. The tree gained over 70 kilograms, but the soil lost hardly any weight. He concluded the mass came from water. Later scientists found much of it came from carbon dioxide in the air — through photosynthesis.'],
          a: [
            od('Photosynthesis word equation', 'carbon dioxide + water|light and chlorophyll|glucose + oxygen'),
            ch('Which gas do plants take in for photosynthesis?', 'oxygen|*carbon dioxide|nitrogen'),
            ch('The green pigment in leaves is…', '*chlorophyll|glucose|starch'),
            tf('Photosynthesis releases oxygen.', true),
          ],
          t: ['Where does most of a tree\'s mass come from?', 'Why would life on Earth be impossible without photosynthesis?'],
          k: ['Explain photosynthesis to someone using the idea of a kitchen with ingredients and a cook.'],
          m: ['🧪 Pondweed Bubbles', 'water plant (from an aquarium shop), a glass of water, a lamp, a timer', 'Put the water plant in a glass of water | Place a lamp near it and count bubbles per minute | Move the lamp further away and count again | Explain how light affects photosynthesis'],
          q: [
            ch('Photosynthesis happens mainly in…', 'roots|*leaves|flowers'),
            ch('Plants store extra glucose as…', '*starch|oxygen|chlorophyll'),
            tf('Light energy is needed for photosynthesis.', true),
          ],
          ms: ['States the word equation', 'Explains reactants and products', 'Investigates light intensity effects'],
        }),
      ]),
      U('farming', 'Farming in India', 'Seasons of farming and how farmers grow food.', 'Kharif (monsoon) and Rabi (winter) crops; Irrigation; Millets and sustainable farming', [
        L('kharif-rabi', 'Kharif and Rabi', {
          o: ['Distinguish Kharif and Rabi crops', 'Explain how irrigation helps farming'],
          p: ['Knows the monsoon and food crops'],
          e: [
            'Indian farmers grow crops in two main seasons. Kharif crops are sown at the start of the monsoon (around June–July) and harvested in autumn: rice, maize, cotton, soybean, bajra.',
            'Rabi crops are sown in winter (around October–November) and harvested in spring: wheat, mustard, gram (chana), barley.',
            'Irrigation — supplying water through canals, wells, tanks or drip pipes — lets farmers grow crops when rain is not enough. Drip irrigation saves water by delivering it right to the roots.',
          ],
          v: 'Kharif = monsoon-season crops; Rabi = winter-season crops; irrigation = supplying water to crops; harvest = gathering ripe crops',
          x: ['Punjab is known for Rabi wheat.', 'Paddy fields are flooded for Kharif rice.'],
          s: ['Two Harvests', 'Farmer Raju planted rice when the monsoon rains came, and harvested golden paddy in October. Then he sowed wheat for winter, watering it from his tube well. By spring, the wheat stood tall. "Two harvests a year," he told his grandson, "if we respect the seasons and use water wisely."'],
          a: [
            mt('Kharif or Rabi?', 'rice=Kharif|wheat=Rabi|mustard=Rabi, winter oilseed'),
            ch('Kharif crops are sown…', '*with the monsoon|in winter|in snow'),
            ch('Drip irrigation saves water by…', '*delivering water to the roots|flooding the field|using no water'),
            tf('Wheat is mainly a Rabi crop in India.', true),
          ],
          t: ['What happens to farmers when the monsoon fails?', 'Why are millets being encouraged again?'],
          k: ['Explain the farming year of an Indian village to someone using a calendar.'],
          m: ['Farming Calendar Wheel', 'a paper plate, pens, crop pictures', 'Divide a plate into 12 months | Mark Kharif sowing and harvesting months | Mark Rabi sowing and harvesting months | Add the monsoon and festivals linked to harvests (Pongal, Baisakhi, Onam)'],
          q: [
            ch('Gram (chana) is a…', 'Kharif crop|*Rabi crop'),
            ch('Water supplied to crops by canals or wells is…', '*irrigation|evaporation|pollination'),
            tf('Many harvest festivals celebrate the end of a growing season.', true),
          ],
          ms: ['Classifies crops by season', 'Explains irrigation methods', 'Links farming to climate and culture'],
        }),
      ]),
    ]),
    S('s9', 'Plant transport, adaptations, and biodiversity of Indian flora.', [
      'Explain transport in xylem and phloem', 'Describe plant adaptations', 'Explain the importance of plant biodiversity',
    ], [
      U('plant-transport', 'Plant Plumbing', 'How water and food move inside plants.', 'Xylem: water up; Phloem: sugars around; Transpiration', [
        L('xylem-phloem', 'Xylem and Phloem', {
          o: ['Describe the roles of xylem and phloem', 'Explain transpiration and factors affecting it'],
          p: ['Knows photosynthesis'],
          e: [
            'Plants have two transport systems. Xylem vessels carry water and minerals from the roots up to the leaves. Phloem carries sugars made in the leaves to all parts of the plant, including roots, fruits and growing tips.',
            'Water evaporates from leaves through stomata — this is transpiration. As water leaves, more is pulled up the xylem like sucking through a straw.',
            'Transpiration is faster when it is hot, dry, windy and bright. Plants can close stomata to save water when it is dry.',
          ],
          v: 'xylem = tubes carrying water up from roots; phloem = tubes carrying sugars around the plant; transpiration = water evaporating from leaves; stomata = pores in leaves',
          x: ['A large tree can move hundreds of litres of water a day in hot weather.', 'Wilting happens when water loss exceeds uptake.'],
          s: ['The Wilting Plant Rescue', 'On a hot, windy afternoon, Kiko\'s potted plant drooped sadly. "It\'s dying!" Kiko cried. Tara watered it and moved it into the shade. By evening, the leaves had lifted again. "It was losing water faster than its roots could drink," Tara explained.'],
          a: [
            mt('Match', 'xylem=carries water up|phloem=carries sugars around|stomata=let gases and water vapour in and out'),
            ch('Transpiration is fastest when it is…', '*hot, dry and windy|cold and still|dark and humid'),
            tf('Wilting happens when a plant loses more water than it takes in.', true),
            ch('Sugars move through the…', 'xylem|*phloem|roots only'),
          ],
          t: ['Why might desert plants have few or small leaves?', 'How do you think water reaches the top of a very tall tree?'],
          k: ['Explain to someone why a plant wilts on a hot day and how to help it.'],
          m: ['🧪 Bag a Leaf', 'a clear plastic bag, string, a leafy plant branch, a sunny spot', 'Tie a clear bag over a leafy branch | Leave it in sunlight for a few hours | Observe the water droplets | Repeat in shade and compare the amount of water'],
          q: [
            ch('Water travels up the plant in…', '*xylem|phloem|petals'),
            ch('Transpiration happens mainly through…', '*stomata|roots|flowers'),
            tf('Plants can close stomata to save water.', true),
          ],
          ms: ['Explains xylem and phloem functions', 'Explains transpiration and its factors', 'Investigates transpiration'],
        }),
      ]),
      U('indian-flora', 'Plant Biodiversity of India', 'Forests, sacred groves and medicinal plants.', 'Forest types: tropical evergreen, deciduous, mangrove, alpine; Sacred groves; Traditional plant knowledge and evidence', [
        L('forests-of-india', 'Forests of India', {
          o: ['Describe major forest types in India', 'Discuss traditional plant knowledge and scientific evidence'],
          p: ['Understands adaptation and photosynthesis'],
          e: [
            'India has many forest types: tropical evergreen forests in the Western Ghats and Northeast, deciduous forests (with teak and sal) that shed leaves in the dry season, mangroves like the Sundarbans on coasts, and alpine meadows in the Himalayas.',
            'Many communities protect sacred groves — patches of forest preserved for religious or cultural reasons. They often shelter rare plants and animals.',
            'Traditional systems like Ayurveda use many plants, such as neem, tulsi and turmeric. Some uses have scientific support; others are still being studied. Science tests claims carefully, while respecting traditional knowledge as a source of ideas.',
          ],
          c: [['tradition', 'Sacred groves (such as devrai in Maharashtra and kavu in Kerala) are protected by local communities through traditional customs.'], ['science', 'Turmeric\'s compound curcumin is widely researched; evidence for many health claims remains limited or mixed, so medical advice should come from qualified doctors.']],
          v: 'biodiversity = the variety of living things in an area; deciduous = trees that shed leaves seasonally; mangrove = trees that grow in salty coastal water; sacred grove = forest protected for cultural or religious reasons',
          x: ['The Sundarbans mangroves are home to the Bengal tiger.', 'Teak and sal are valuable deciduous trees.'],
          s: ['The Grove No One Cut', 'In a village in the Western Ghats, a small forest stood untouched for generations because it was dedicated to the local deity. When botanists surveyed it, they found trees and frogs found almost nowhere else. "Tradition protected what science is only now discovering," one researcher said.'],
          a: [
            mt('Match the forest type to a place', 'mangrove=Sundarbans|tropical evergreen=Western Ghats|alpine=high Himalayas'),
            ch('Deciduous trees…', 'never lose leaves|*shed leaves in a dry or cold season|grow only in water'),
            tf('Sacred groves often protect rare species.', true),
            ch('Health claims about plants should be…', 'believed without question|*tested with evidence and checked with doctors|ignored completely'),
          ],
          t: ['How can traditional knowledge and modern science work together?', 'Why is plant biodiversity important for medicine and food?'],
          k: ['Present one Indian forest type: where it is, what grows there and why it matters.'],
          m: ['Local Tree Survey', 'a notebook, a phone camera or sketchbook, a tree field guide', 'Survey 10 trees in your neighbourhood | Identify and photograph or sketch each | Note uses and any traditional significance | Make a map and booklet of your local trees'],
          q: [
            ch('Mangroves grow in…', '*salty coastal water|deserts|snow'),
            ch('Teak is mainly found in…', '*deciduous forests|alpine meadows|mangroves'),
            tf('Biodiversity means the variety of living things.', true),
          ],
          ms: ['Describes Indian forest types', 'Explains sacred groves and conservation value', 'Distinguishes traditional claims from tested evidence'],
        }),
      ]),
    ]),
    S('s12', 'Plant biochemistry, the Green Revolution, and the future of food.', [
      'Explain photosynthesis and respiration in detail', 'Evaluate the Green Revolution', 'Analyse plant science for food security',
    ], [
      U('photosynthesis-advanced', 'Photosynthesis and Respiration', 'Energy flow at the cellular level.', 'Light-dependent and light-independent reactions (overview); Limiting factors; Respiration in plants', [
        L('limiting-factors', 'Limiting Factors', {
          o: ['Explain limiting factors of photosynthesis', 'Compare photosynthesis and respiration'],
          p: ['Knows the photosynthesis equation'],
          e: [
            'Balanced equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (with light energy). It occurs in chloroplasts in two linked stages: light-dependent reactions (capturing light energy) and the Calvin cycle (fixing carbon into sugar).',
            'The rate depends on limiting factors: light intensity, CO₂ concentration and temperature. Whichever is in shortest supply limits the rate. Greenhouses raise yields by controlling these factors.',
            'All living cells, including plant cells, carry out respiration: glucose + oxygen → carbon dioxide + water, releasing energy. Plants photosynthesise only in light but respire all the time.',
          ],
          v: 'limiting factor = the factor in shortest supply that restricts a process\'s rate; respiration = releasing energy from glucose in cells; chloroplast = organelle where photosynthesis occurs; Calvin cycle = the light-independent stage fixing carbon dioxide',
          x: ['At night, plants release CO₂ because respiration continues without photosynthesis.', 'Commercial greenhouses add CO₂ to boost tomato yields.'],
          s: ['The Greenhouse Grower', 'A tomato grower in Nashik noticed that on bright winter days, adding more light did nothing. She tested raising the temperature slightly — yields jumped. "Temperature was my limiting factor," she noted. Understanding the science saved her money and energy.'],
          a: [
            ch('If light is plentiful but CO₂ is low, the limiting factor is…', 'light|*CO₂|water'),
            tf('Plants respire only at night.', false, 'They respire all the time; photosynthesis happens only in light.'),
            mt('Match', 'photosynthesis=stores energy in glucose|respiration=releases energy from glucose|chloroplast=site of photosynthesis'),
            ch('Balanced photosynthesis equation produces glucose and…', '*6O₂|6CO₂|6N₂'),
          ],
          t: ['How could knowledge of limiting factors help reduce farming costs?', 'Why do plants release CO₂ at night?'],
          k: ['Explain limiting factors using a graph you draw of rate versus light intensity.'],
          m: ['🧪 Leaf Disc Flotation Investigation', 'spinach leaves, a straw or hole punch, syringe, baking soda water, cups, a lamp', 'Punch leaf discs and remove air with a syringe of baking soda water | Place discs in cups under lights at different distances | Time how long until discs float | Plot results and identify limiting factors'],
          q: [
            ch('Which is NOT a limiting factor for photosynthesis?', 'light intensity|CO₂ concentration|*the colour of the pot'),
            ch('Respiration releases…', '*energy|chlorophyll|light'),
            tf('Greenhouses can control limiting factors.', true),
          ],
          ms: ['Writes balanced equations', 'Interprets limiting factor graphs', 'Designs and analyses photosynthesis investigations'],
        }),
      ]),
      U('food-future', 'The Green Revolution and Food Security', 'Feeding a growing world sustainably.', 'Green Revolution in India: high-yield varieties, irrigation, fertilisers; Benefits and costs; Sustainable agriculture', [
        L('green-revolution', 'Evaluating the Green Revolution', {
          o: ['Explain what the Green Revolution was and its effects', 'Evaluate benefits and costs using evidence'],
          p: ['Knows farming seasons and irrigation'],
          e: [
            'In the 1960s, India faced food shortages. The Green Revolution introduced high-yielding varieties of wheat and rice, expanded irrigation, and increased use of chemical fertilisers and pesticides. Scientists such as M. S. Swaminathan played leading roles, building on Norman Borlaug\'s wheat research.',
            'Wheat and rice production rose dramatically, helping India become largely self-sufficient in staple grains and reducing famine risk.',
            'There were costs too: in some regions, groundwater depletion, soil degradation, pesticide overuse, and less crop diversity (fewer millets and pulses). Today, sustainable agriculture seeks to keep yields high while protecting soil, water and biodiversity.',
          ],
          c: [['evidence', 'India\'s wheat production rose from about 12 million tonnes in 1965 to over 20 million tonnes by 1970; groundwater decline in Punjab and Haryana is documented by government agencies.'], ['interpretation', 'Historians and economists debate how to weigh the Green Revolution\'s benefits against its environmental and social costs.']],
          v: 'high-yielding variety = a crop strain bred for larger harvests; food security = reliable access to enough nutritious food; sustainable agriculture = farming that meets present needs without harming the future; groundwater = water stored underground',
          x: ['Punjab became known as India\'s "breadbasket".', 'Millets are being promoted for nutrition and drought tolerance.'],
          s: ['A Scientist\'s Two Concerns', 'M. S. Swaminathan helped bring high-yield wheat to India in the 1960s. Decades later, he warned that soil health and water use needed urgent care, and called for an "evergreen revolution" — productivity without ecological harm. He saw both the triumph and the challenge.'],
          a: [
            mt('Benefit or cost?', 'higher wheat yields=benefit|falling groundwater=cost|fewer famines=benefit, for food security'),
            ch('A leading Indian scientist of the Green Revolution:', '*M. S. Swaminathan|C. V. Raman|Homi Bhabha'),
            tf('The Green Revolution had only benefits.', false),
            ch('An "evergreen revolution" aims for…', '*high yields with environmental care|more pesticides|only rice'),
          ],
          t: ['How should a country balance feeding people today with protecting resources for the future?', 'What role could millets play in sustainable food systems?'],
          k: ['Hold a balanced debate: "The Green Revolution was a success." Argue both sides with evidence.'],
          m: ['Food Security Policy Brief', 'research sources (government reports, books), notebook', 'Research one Indian state\'s agriculture | Identify a food-security or sustainability challenge | Propose three evidence-based solutions | Write a two-page brief with citations'],
          q: [
            ch('The Green Revolution in India began mainly in the…', '1860s|*1960s|2000s'),
            ch('A documented cost in parts of Punjab:', '*groundwater depletion|too much rainfall|volcanoes'),
            tf('Food security means reliable access to enough nutritious food.', true),
          ],
          ms: ['Explains the Green Revolution accurately', 'Weighs benefits and costs with evidence', 'Proposes sustainable solutions'],
        }),
      ]),
    ]),
  ],
});
