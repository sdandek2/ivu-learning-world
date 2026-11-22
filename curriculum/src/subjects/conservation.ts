import { subject, S, U, L, ch, tf, od, mt, ct } from '../dsl.ts';

export default subject({
  id: 'conservation',
  description: 'Caring for the planet through action: reducing waste, recycling, saving energy, protecting nature, conservation movements in India, sustainability, and the science and ethics of environmental decisions. Every stage ends in a real action project.',
  stages: [
    S('s4', 'Keeping our surroundings clean and putting waste in the right place.', [
      'Put litter in the bin', 'Sort waste into wet and dry', 'Reuse things instead of throwing them away',
    ], [
      U('clean-places', 'Clean and Green', 'Everyone can help keep places clean.', 'Litter and bins; Wet waste and dry waste; Keeping parks and streets clean', [
        L('wet-dry', 'Wet Waste, Dry Waste', {
          o: ['Sort waste into wet (kitchen) and dry', 'Explain why we use bins'],
          p: ['Can sort objects into groups'],
          e: [
            'Waste is what we throw away. Wet waste comes from the kitchen: fruit peels, vegetable scraps and leftover food. It can rot and become compost.',
            'Dry waste includes paper, plastic, glass and metal. Much of it can be recycled into new things.',
            'Putting waste in the right bin keeps our homes and streets clean and helps recycling. Litter on the ground can hurt animals and block drains.',
          ],
          v: 'waste = things we throw away; wet waste = food and kitchen scraps; dry waste = paper, plastic, glass and metal; litter = rubbish left in the wrong place',
          x: ['🍌 A banana peel is wet waste.', '📰 Old newspaper is dry waste.'],
          s: ['The Two Bins', 'Momo had a green bin and a blue bin. Kiko threw a banana peel and a juice box in the same bin. "Oops!" said Momo, "The peel goes in green — it turns into compost. The box goes in blue — it can be recycled." Kiko sorted them, and the bins smiled.'],
          a: [
            mt('Sort the waste', '🍌 banana peel=wet waste|📰 newspaper=dry waste|🥕 carrot scraps=wet, for compost'),
            ch('Litter on the ground can…', '*hurt animals and block drains|make plants grow|clean the street'),
            tf('Wet waste can become compost.', true),
            ch('Where should a sweet wrapper go?', '*in a dry waste bin|on the road|in a river'),
          ],
          t: ['What would a park look like if nobody used bins?', 'Why is it helpful to separate waste?'],
          k: ['Show a grown-up how you sort waste at home and explain why.'],
          m: ['Waste Sorting Game', 'two boxes labelled wet and dry, clean empty packets, paper, pictures of food scraps', 'Label one box "wet" and one "dry" | Sort a pile of items and pictures | Check together | Help sort your family\'s waste for a day'],
          q: [
            ch('Which is wet waste?', '*apple core|plastic bottle|tin can'),
            ch('Which is dry waste?', 'tea leaves|*cardboard|rice'),
            tf('Litter should go in a bin.', true),
          ],
          ms: ['Sorts wet and dry waste', 'Uses bins consistently', 'Explains harm of litter'],
        }),
      ]),
      U('reuse', 'Use It Again', 'Reusing things saves resources.', 'Reuse: jars, boxes, cloth bags; Mend and share; Toy swaps', [
        L('reuse-it', 'Don\'t Throw It, Reuse It!', {
          o: ['Find new uses for old things', 'Explain that reusing saves resources'],
          p: ['Knows about waste'],
          e: [
            'Before we throw something away, we can ask: can I use it again? A glass jar can hold pencils. A cardboard box can become a toy house.',
            'Cloth bags can be used hundreds of times instead of plastic bags. Old clothes can be passed to younger cousins or friends.',
            'Every time we reuse something, we save the trees, water and energy needed to make a new one.',
          ],
          v: 'reuse = use again; resource = something useful we get from nature, like wood or water; mend = fix something broken',
          x: ['An old tin can become a plant pot.', 'A cloth bag replaces many plastic bags.'],
          s: ['Rangi\'s Box Castle', 'Rangi\'s new fridge came in a huge cardboard box. Instead of throwing it away, Rangi cut a door and windows, painted towers and made a castle! Friends came to play. When it finally wore out, Rangi put the cardboard in the recycling.'],
          a: [
            ch('A glass jar can be reused to…', '*hold pencils|eat|wear'),
            ch('Which bag can be used many times?', '*cloth bag|thin plastic bag|paper napkin'),
            tf('Reusing things saves resources.', true),
            mt('Match old to new use', 'tin can=plant pot|cardboard box=toy house|old T-shirt=cleaning cloth'),
          ],
          t: ['What is the most creative reuse idea you can think of?', 'Why do you think people throw away things that still work?'],
          k: ['Show someone something you reused and explain its new job.'],
          m: ['Junk Robot', 'clean boxes, bottle caps, tubes, tape, glue', 'Collect clean junk from your home | Build a robot or animal | Give it a name and a story | Display it and explain what each part used to be'],
          q: [
            ch('Reusing means…', '*using something again|throwing it away|buying new'),
            tf('Old clothes can be passed on to others.', true),
            ch('Which saves the most resources?', '*reusing a jar|throwing away the jar|buying a new jar'),
          ],
          ms: ['Generates reuse ideas', 'Explains resource saving', 'Completes a reuse project'],
        }),
      ]),
    ]),
    S('s5', 'Reduce, reuse, recycle; saving electricity.', [
      'Explain the 3 Rs', 'Identify recyclable materials', 'Save electricity at home',
    ], [
      U('three-rs', 'Reduce, Reuse, Recycle', 'Three ways to make less waste.', 'Reduce: buy less, refuse plastic; Reuse; Recycle: paper, glass, metal, plastic', [
        L('the-3rs', 'The Three Rs', {
          o: ['Explain reduce, reuse and recycle', 'Put the 3 Rs in order of best to good'],
          p: ['Sorts waste'],
          e: [
            'Reduce means making less waste in the first place — like carrying a water bottle instead of buying plastic ones, or saying no to things we don\'t need.',
            'Reuse means using things again. Recycle means turning old materials into new things: old paper into new paper, glass bottles into new bottles, aluminium cans into new cans.',
            'Reduce is best, then reuse, then recycle. Recycling is good but still uses energy and water.',
          ],
          v: 'reduce = make less waste; recycle = turn old materials into new things; refuse = say no to something you don\'t need; material = what something is made from',
          x: ['Refusing a plastic straw: reduce.', 'Old newspapers become egg cartons: recycle.'],
          s: ['The Water Bottle Choice', 'On a school trip, Kiko bought a plastic water bottle every hour — five bottles! Tara carried one steel bottle and refilled it. At the end of the day, Kiko had a bag of empty bottles. "Reducing is easier than recycling," Tara smiled.'],
          a: [
            od('Best to good', 'reduce|reuse|recycle'),
            mt('Which R?', 'carrying your own bottle=reduce|using a jar for pencils=reuse|turning cans into new cans=recycle'),
            ch('Which can be recycled?', '*aluminium can|banana peel|a living plant'),
            tf('Reducing waste is better than recycling it.', true),
          ],
          t: ['Why is reducing better than recycling?', 'What is hard to recycle? Why?'],
          k: ['Explain the 3 Rs to someone, giving your own example of each.'],
          m: ['Recycled Paper Making', 'old newspaper, water, a blender (adult), a wire mesh or strainer, a cloth', 'Tear paper into small pieces and soak overnight | An adult blends it into pulp | Spread the pulp thinly on a mesh and press out water | Dry it on a cloth and write a message on your new paper', "Only an adult may operate the blender. Keep hands and tools away from the blades, unplug it before opening or cleaning, and let the pulp cool if it becomes warm."],
          q: [
            ch('Saying no to a plastic bag is…', '*reduce|recycle|reuse'),
            ch('Old glass bottles can be…', '*recycled into new glass|turned into fruit|planted'),
            tf('Recycling uses some energy.', true),
          ],
          ms: ['Explains and orders the 3 Rs', 'Identifies recyclable materials', 'Applies the 3 Rs daily'],
        }),
      ]),
      U('save-energy', 'Saving Energy at Home', 'Electricity is precious too.', 'Switch off lights and fans; Unplug devices; Use daylight', [
        L('switch-off', 'Switch It Off!', {
          o: ['Name ways to save electricity', 'Explain where electricity comes from in simple terms'],
          p: ['Knows things that use electricity'],
          e: [
            'Lights, fans, TVs and fridges all use electricity. Much of India\'s electricity is made in power stations that burn coal, which pollutes the air.',
            'We can save electricity by switching off lights and fans when leaving a room, using daylight, and switching off devices at the plug when not in use.',
            'Saving electricity saves money and helps the air stay cleaner.',
          ],
          v: 'electricity = energy that powers lights and machines; switch off = turn off; power station = a place that makes electricity; daylight = light from the Sun',
          x: ['Open curtains instead of switching on a light in the day.', 'Turn off the fan when you leave the room.'],
          s: ['Bolt the Energy Detective', 'Bolt walked around the house with a notebook. In the empty bedroom, the fan was spinning. In the kitchen, a light was on in daylight. The TV glowed with no one watching. Bolt switched them all off and wrote: "Saved electricity: lots!"'],
          a: [
            ch('When you leave a room, you should…', '*switch off the lights and fan|leave everything on|turn on the TV'),
            ch('In the daytime we can use…', '*daylight from windows|more bulbs|torches'),
            tf('Saving electricity can help keep the air cleaner.', true),
            ch('Much electricity in India comes from burning…', '*coal|water|sand'),
          ],
          t: ['Which machine in your home do you think uses the most electricity?', 'Why does saving electricity save money?'],
          k: ['Be the "energy detective" at home for a day and report what you switched off.'],
          m: ['Energy Detective Checklist', 'a clipboard or notebook, pencil', 'Make a checklist of rooms | Check each room twice a day for lights and fans left on | Switch off what isn\'t needed | Count your "saves" for a week'],
          q: [
            ch('Which saves electricity?', '*switching off unused fans|leaving the TV on|opening the fridge often'),
            tf('Electricity can be made in power stations.', true),
            ch('Using sunlight instead of bulbs in the day is…', '*saving energy|wasting energy'),
          ],
          ms: ['Practises energy-saving habits', 'Explains why saving energy matters', 'Monitors household use'],
        }),
      ]),
    ]),
    S('s6', 'Plastic pollution and protecting trees and wildlife.', [
      'Explain why plastic is a problem', 'Explain the importance of trees', 'Take action for local nature',
    ], [
      U('plastic', 'The Plastic Problem', 'Why plastic lasts so long and harms nature.', 'Single-use plastic; Plastic in oceans and animals; Alternatives: cloth, steel, leaf plates', [
        L('plastic-forever', 'Plastic Lasts Forever (Almost)', {
          o: ['Explain why plastic pollution is harmful', 'Suggest alternatives to single-use plastic'],
          p: ['Knows the 3 Rs'],
          e: [
            'Plastic is strong, light and cheap — that\'s why it\'s everywhere. But most plastic doesn\'t rot. A plastic bottle can last for hundreds of years, breaking into tiny pieces called microplastics.',
            'Plastic litter can block drains, causing floods, and harm animals. Cows on streets may eat plastic bags; sea turtles may mistake bags for jellyfish.',
            'Single-use plastics — used once then thrown away — are the biggest problem. Alternatives include cloth bags, steel bottles and tiffins, and traditional leaf plates (pattals).',
          ],
          v: 'single-use plastic = plastic used once then thrown away; microplastic = tiny pieces of broken-down plastic; alternative = another choice; biodegradable = able to rot naturally',
          x: ['Leaf plates (pattals) used at feasts are biodegradable.', 'Steel tiffins can last for years.'],
          s: ['The Turtle\'s Mistake', 'A sea turtle saw something floating, soft and see-through. "A jellyfish — lunch!" But it was a plastic bag. Luckily a fisherman saw the turtle struggling and helped free it. Back on shore, he told everyone, "Our bags travel further than we think."'],
          a: [
            ch('Why is plastic a problem in nature?', '*It doesn\'t rot for a very long time|It grows into trees|It is too heavy'),
            mt('Match the plastic item to an alternative', 'plastic bag=cloth bag|plastic bottle=steel bottle|plastic plate=leaf plate'),
            tf('Sea turtles can mistake plastic bags for jellyfish.', true),
            ch('Tiny pieces of plastic are called…', '*microplastics|crystals|seeds'),
          ],
          t: ['Is all plastic bad? When is plastic useful?', 'Why did people start using so much plastic?'],
          k: ['Give a one-minute talk to your family about reducing plastic.'],
          m: ['Plastic-Free Week Challenge', 'a chart, pen', 'Count the single-use plastic your family uses in one day | Plan swaps for the most common items | Try a plastic-reduced week | Count again and compare'],
          q: [
            ch('Which is single-use?', '*a plastic straw|a steel spoon|a cloth bag'),
            ch('Leaf plates are…', '*biodegradable|made of metal|permanent'),
            tf('Plastic in drains can cause flooding.', true),
          ],
          ms: ['Explains plastic\'s environmental harm', 'Suggests and uses alternatives', 'Measures and reduces plastic use'],
        }),
      ]),
      U('trees', 'Why Trees Matter', 'Trees give us more than shade.', 'Trees give oxygen, shade, homes, food, rain links; Chipko movement; Planting and caring for saplings', [
        L('chipko', 'Hug a Tree: The Chipko Story', {
          o: ['List benefits of trees', 'Retell the Chipko movement and explain its importance'],
          p: ['Knows plants and photosynthesis basics'],
          e: [
            'Trees give us oxygen, shade, fruit, wood and medicines. Their roots hold soil in place so it doesn\'t wash away. They are homes for birds, insects and animals.',
            'In the 1970s, in the hills of Uttarakhand, villagers — many of them women — protected their forests by hugging trees so that contractors could not cut them. This was the Chipko movement ("chipko" means "to cling").',
            'Chipko inspired forest protection across India. Today we can help by planting native trees and caring for them until they are strong.',
          ],
          c: [['evidence', 'A well-known Chipko action took place at Reni village in 1974, where Gaura Devi led women in protecting the forest. Sunderlal Bahuguna and Chandi Prasad Bhatt were among its prominent leaders.'], ['tradition', 'In 1730, according to tradition, Amrita Devi Bishnoi and many others of the Bishnoi community gave their lives to protect khejri trees at Khejarli, Rajasthan.']],
          v: 'Chipko = a forest protection movement where people hugged trees; sapling = a young tree; native tree = a tree that naturally grows in an area; soil erosion = soil being washed or blown away',
          x: ['Neem, peepal and banyan are native trees in much of India.', 'Tree roots help stop landslides on hills.'],
          s: ['The Women of Reni', 'In 1974, when men from the village were away, contractors arrived to cut trees near Reni. Gaura Devi and the village women went into the forest and stood with their arms around the trees. "This forest is our mother\'s home," they said. The contractors left, and the forest stood.'],
          a: [
            ch('"Chipko" means…', '*to cling (hug)|to cut|to plant'),
            mt('Match the benefit', 'roots=hold soil in place|leaves=give oxygen and shade|branches=homes for birds'),
            tf('The Chipko movement began in the hills of Uttarakhand.', true),
            ch('Which is a native Indian tree?', '*neem|eucalyptus from Australia|no trees are native'),
          ],
          t: ['Why do you think women led many Chipko actions?', 'Is it ever okay to cut trees? How should we decide?'],
          k: ['Tell the Chipko story to someone and explain why it still matters.'],
          m: ['Adopt a Sapling', 'a native sapling (from a nursery), a pot or garden spot, water, a growth chart', 'Plant a native sapling with an adult | Water and care for it regularly | Measure its height every two weeks | Keep a diary with photos or drawings'],
          q: [
            ch('Tree roots help prevent…', '*soil erosion|rain|sunlight'),
            ch('In the Chipko movement, people protected trees by…', '*hugging them|painting them|moving them'),
            tf('Native trees naturally grow in an area.', true),
          ],
          ms: ['Lists tree benefits', 'Recounts Chipko accurately', 'Cares for a sapling over time'],
        }),
      ]),
    ]),
    S('s7', 'Renewable energy, carbon footprint, and conservation heroes.', [
      'Compare renewable and non-renewable energy', 'Estimate a carbon footprint', 'Learn from conservation leaders',
    ], [
      U('renewables', 'Renewable Energy', 'Energy that won\'t run out.', 'Non-renewable: coal, oil, gas; Renewable: solar, wind, hydro, biogas; India\'s solar growth', [
        L('solar-wind', 'Sun, Wind and Water Power', {
          o: ['Distinguish renewable and non-renewable energy', 'Evaluate advantages and limitations of each'],
          p: ['Knows electricity saving'],
          e: [
            'Non-renewable energy comes from fossil fuels — coal, oil and natural gas — formed over millions of years. They will run out, and burning them releases carbon dioxide and air pollution.',
            'Renewable energy comes from sources that are naturally replenished: solar (sunlight), wind, hydroelectric (flowing water) and biogas (from animal dung and food waste).',
            'Renewables have challenges: the Sun doesn\'t shine at night and wind isn\'t constant, so storage (batteries) and planning are needed. India has rapidly expanded solar power, including large solar parks in Rajasthan and Karnataka.',
          ],
          v: 'renewable = naturally replenished and won\'t run out; non-renewable = will run out; solar panel = a device turning sunlight into electricity; biogas = gas fuel from rotting organic waste',
          x: ['Rooftop solar panels on homes and schools.', 'Village biogas plants using cow dung for cooking gas.'],
          s: ['The Solar Village', 'A village with unreliable electricity installed solar panels on its school and health centre. Now children could study after dark, and the clinic could keep vaccines cold. The headteacher smiled: "Our sunshine was always here — now it works for us."'],
          a: [
            mt('Renewable or non-renewable?', 'solar=renewable|coal=non-renewable|wind=renewable, it keeps blowing'),
            ch('A challenge for solar power is…', '*no sunlight at night|it causes smoke|it uses coal'),
            tf('Biogas can be made from cow dung.', true),
            ch('Burning fossil fuels releases…', '*carbon dioxide|pure water only|nothing'),
          ],
          t: ['Why doesn\'t India switch to 100% renewable energy overnight?', 'Which renewable source would suit your area best?'],
          k: ['Explain to someone the pros and cons of solar power.'],
          m: ['🧪 Solar Oven', 'a pizza box or shoebox, foil, black paper, cling film, a snack like a biscuit with chocolate', 'Line the box with foil and put black paper at the bottom | Cover the opening with cling film | Angle the foil flap to reflect sunlight in | Put the snack inside and record the temperature or melting time', "Use sunlight only and have an adult check the box and food temperature before touching or eating. Do not look at reflected sunlight, and do not leave the oven unattended."],
          q: [
            ch('Which is renewable?', 'oil|natural gas|*hydroelectric'),
            ch('Storing solar energy for night uses…', '*batteries|more coal|candles'),
            tf('Fossil fuels formed over millions of years.', true),
          ],
          ms: ['Classifies energy sources', 'Evaluates pros and cons', 'Builds and tests a solar device'],
        }),
      ]),
      U('footprint', 'My Carbon Footprint', 'How our choices add up.', 'Carbon footprint: travel, food, electricity, things we buy; Measuring and reducing; Fairness between people and countries', [
        L('footprint-calc', 'Measuring My Footprint', {
          o: ['Explain what a carbon footprint is', 'Identify the biggest parts of a household footprint and ways to reduce them'],
          p: ['Knows renewable vs non-renewable energy'],
          e: [
            'A carbon footprint is the total greenhouse gases released by our activities — travel, electricity, food and the things we buy.',
            'Typically, big parts include transport (cars and flights), electricity from fossil fuels, and food (especially meat and food waste). Walking, cycling, public transport, saving electricity and wasting less food all help.',
            'Footprints vary hugely between people and countries. People in some wealthy countries have footprints many times larger than the average person in India. Fairness is part of the climate conversation.',
          ],
          v: 'carbon footprint = total greenhouse gases caused by an activity or person; emissions = gases released into the air; public transport = buses and trains shared by many people; per capita = per person',
          x: ['Cycling to school instead of being driven reduces emissions.', 'Wasting food wastes all the energy used to grow and transport it.'],
          s: ['The Family Footprint Detective', 'Zuri tracked her family\'s week: car trips, electricity units, food bought. The biggest item surprised her — one long car trip. "If we take the train next time," she calculated, "we\'d cut that by a lot." The family agreed to try.'],
          a: [
            ch('A carbon footprint measures…', '*greenhouse gases from our activities|shoe sizes|steps walked'),
            mt('Which choice is lower-carbon?', 'driving alone vs bus=bus|food waste vs eating leftovers=eating leftovers|lights on all day vs daylight=daylight'),
            tf('Footprints vary a lot between countries.', true),
            ch('Which usually has a high footprint?', '*a long flight|walking|cycling'),
          ],
          t: ['Should people with bigger footprints do more to reduce them?', 'What is easy to change, and what is hard?'],
          k: ['Present your family\'s biggest footprint item and a realistic plan to reduce it.'],
          m: ['Household Footprint Audit', 'electricity bill, a travel log, a food waste tally, an online or printed calculator (offline estimates are fine)', 'Record a week of travel, electricity and food waste | Estimate emissions using simple factors | Identify the biggest source | Make a family action plan and check again in a month'],
          q: [
            ch('Which reduces emissions?', '*taking a train instead of a car|leaving lights on|throwing away food'),
            ch('Per capita means…', '*per person|per country|per day'),
            tf('Food waste contributes to emissions.', true),
          ],
          ms: ['Explains carbon footprints', 'Audits household emissions', 'Plans realistic reductions'],
        }),
      ]),
    ]),
    S('s9', 'Sustainable development, circular economy, and environmental movements.', [
      'Explain the Sustainable Development Goals', 'Describe a circular economy', 'Analyse environmental movements in India',
    ], [
      U('sdgs', 'Sustainable Development', 'Meeting today\'s needs without harming tomorrow.', 'Brundtland definition; The 17 SDGs; Balancing people, planet, prosperity', [
        L('seventeen-goals', 'The 17 Global Goals', {
          o: ['Define sustainable development', 'Explain links between several SDGs'],
          p: ['Knows carbon footprints'],
          e: [
            'Sustainable development means "development that meets the needs of the present without compromising the ability of future generations to meet their own needs" (Brundtland Report, 1987).',
            'In 2015, United Nations member states agreed 17 Sustainable Development Goals (SDGs) for 2030, including no poverty, zero hunger, quality education, clean water, affordable clean energy, climate action and life on land and below water.',
            'The goals are connected: clean energy can improve health (less smoke from cooking fires), education can reduce poverty, and protecting forests helps climate and livelihoods.',
          ],
          v: 'sustainable development = progress that doesn\'t harm future generations; SDGs = 17 global goals agreed by UN members for 2030; trade-off = a balance where gaining one thing means losing some of another; livelihood = a way of earning a living',
          x: ['SDG 6: clean water and sanitation.', 'SDG 13: climate action.'],
          s: ['The Smoke-Free Kitchen', 'In many villages, women cooked on wood fires, breathing smoke every day. Clean cooking gas programmes reduced the smoke, improving health (SDG 3), saving time for women and girls (SDG 5), and reducing tree cutting (SDG 15). "One change," said the health worker, "helps many goals."'],
          a: [
            ch('Sustainable development meets present needs without…', '*harming future generations\' ability to meet theirs|any planning|using any resources'),
            ct('How many SDGs are there?', 17),
            mt('Match the SDG to its topic', 'SDG 4=quality education|SDG 6=clean water and sanitation|SDG 13=climate action'),
            tf('The SDGs are connected to each other.', true),
          ],
          t: ['Which SDG do you think is most important? Why might others disagree?', 'Can economic growth and environmental protection go together?'],
          k: ['Explain how one action in your community helps at least three SDGs.'],
          m: ['SDG Connection Web', 'large paper, 17 SDG cards (drawn), string or markers', 'Lay out all 17 goals | Draw links between goals that support each other | Find one trade-off between goals | Choose one goal and plan a small local action'],
          q: [
            ch('The SDGs target the year…', '2000|*2030|2100'),
            ch('A trade-off means…', '*gaining one thing may cost another|everything is free|nothing changes'),
            tf('Clean cooking fuel can improve health.', true),
          ],
          ms: ['Defines sustainability', 'Explains SDG interconnections', 'Plans local action linked to SDGs'],
        }),
      ]),
      U('circular', 'The Circular Economy', 'Designing out waste.', 'Linear vs circular economy; Repair, refurbish, remanufacture; Extended producer responsibility; India\'s informal recyclers', [
        L('make-use-return', 'From Take-Make-Waste to Circular', {
          o: ['Compare linear and circular economies', 'Evaluate the role of informal recyclers in India'],
          p: ['Knows the 3 Rs'],
          e: [
            'A linear economy follows "take, make, waste": extract resources, make products, throw them away. A circular economy keeps materials in use: design for durability, repair, reuse, remanufacture and recycle, so waste is minimised.',
            'Extended producer responsibility (EPR) makes companies responsible for collecting and recycling their packaging and products after use. India has EPR rules for plastic packaging and electronic waste.',
            'In India, a large informal workforce of waste pickers and kabadiwalas collects and sorts recyclables, recovering a significant share of materials, often in difficult and unsafe conditions. Recognising and protecting these workers is part of a fair circular economy.',
          ],
          v: 'circular economy = a system that keeps materials in use and minimises waste; linear economy = take, make, waste; extended producer responsibility = making producers responsible for their products\' end of life; kabadiwala = a local scrap dealer who buys recyclables',
          x: ['Repair cafés help people fix appliances instead of discarding them.', 'Refillable detergent stations reduce packaging.'],
          s: ['The Kabadiwala\'s Bicycle', 'Every Sunday, the kabadiwala cycled down Zuri\'s street calling "Raddi!" He bought old newspapers, bottles and metal, sorted them, and sold them to recyclers. Zuri realised he was part of a giant recycling system — keeping materials in use long before the word "circular economy" was popular.'],
          a: [
            od('Linear economy order', 'take resources|make products|throw away'),
            mt('Circular action', 'fixing a broken fan=repair|selling newspapers to a kabadiwala=recycling|refilling a detergent bottle=reuse'),
            ch('EPR makes ___ responsible for products after use.', '*producers|only consumers|nobody'),
            tf('Informal waste workers recover many recyclables in India.', true),
          ],
          t: ['Why are many products designed to be hard to repair?', 'How can waste pickers\' work be made safer and more respected?'],
          k: ['Present a redesign of a common product to make it more circular.'],
          m: ['Product Redesign Challenge', 'a common disposable product, paper, pencils', 'Map the product\'s life from raw materials to disposal | Identify where waste happens | Redesign it for repair, reuse or recycling | Present your design with a life-cycle diagram'],
          q: [
            ch('"Take, make, waste" describes a…', '*linear economy|circular economy'),
            ch('Repairing a phone instead of replacing it is…', '*circular|linear'),
            tf('A circular economy aims to minimise waste.', true),
          ],
          ms: ['Compares economic models', 'Explains EPR', 'Designs circular solutions'],
        }),
      ]),
    ]),
    S('s12', 'Environmental ethics, policy, and leading change.', [
      'Analyse environmental ethics perspectives', 'Evaluate environmental laws and policy', 'Design and lead a community project',
    ], [
      U('env-ethics', 'Environmental Ethics', 'Why and how should we value nature?', 'Anthropocentrism, biocentrism, ecocentrism; Environmental justice; Traditions of nature reverence', [
        L('values-nature', 'Why Value Nature?', {
          o: ['Compare different ethical views of nature', 'Analyse environmental justice issues'],
          p: ['Understands sustainability'],
          e: [
            'Anthropocentrism values nature mainly for its usefulness to humans. Biocentrism values all living things for their own sake. Ecocentrism values whole ecosystems, including rivers and mountains.',
            'Environmental justice asks who bears the costs of pollution and who receives the benefits. Often poorer communities live closest to polluting industries or waste dumps.',
            'Many traditions express reverence for nature — sacred groves, Bishnoi protection of wildlife, Jain ahimsa, Indigenous land stewardship. These can inform ethics alongside scientific evidence and democratic debate.',
          ],
          c: [['interpretation', 'Philosophers and communities disagree about the basis of our duties to nature; these positions are presented for comparison, not as a single correct answer.'], ['evidence', 'In 2017, the Uttarakhand High Court declared the Ganga and Yamuna "living entities"; the Supreme Court later stayed that order, showing ongoing legal debate about the rights of nature.']],
          v: 'anthropocentrism = human-centred view of value; ecocentrism = valuing whole ecosystems; environmental justice = fair distribution of environmental benefits and burdens; stewardship = responsible care for something',
          x: ['Whether a forest should be cleared for a mine raises all three views.', 'The 1984 Bhopal gas tragedy is a central case in environmental justice debates in India.'],
          s: ['The Forest Council', 'A proposed mine would bring jobs but clear a forest sacred to local villagers and home to elephants. At a public hearing, an engineer spoke of development, an elder of the grove\'s sacred meaning, a biologist of elephant corridors, and a young woman of who would breathe the dust. Each was reasoning from different values.'],
          a: [
            mt('Match the view', 'nature is valuable mainly for human use=anthropocentrism|every living thing has value=biocentrism|whole ecosystems have value=ecocentrism'),
            ch('Environmental justice asks…', '*who bears pollution costs and who benefits|which animal is fastest|how to build roads faster'),
            tf('There is only one correct view in environmental ethics.', false),
            ch('A legal debate about the "rights of nature" in India involved…', '*the Ganga and Yamuna|the Moon|the Thar Desert only'),
          ],
          t: ['Can a river have rights? What would that mean in practice?', 'How should we balance jobs and environmental protection?'],
          k: ['Debate a real environmental decision, arguing from a view you do not personally hold.'],
          m: ['Ethics Position Paper', 'a real case study, research sources', 'Choose a real environmental controversy | Present the case from three ethical perspectives | Analyse justice dimensions | Write and defend your own reasoned position (1000 words)'],
          q: [
            ch('Valuing ecosystems as wholes is…', 'anthropocentrism|*ecocentrism|consumerism'),
            ch('Pollution near poorer communities raises issues of…', '*environmental justice|astronomy|music'),
            tf('Traditional practices can inform environmental ethics.', true),
          ],
          ms: ['Compares ethical frameworks', 'Analyses justice issues with evidence', 'Constructs reasoned positions respectfully'],
        }),
      ]),
      U('lead-change', 'Leading Change', 'From knowledge to action.', 'Environmental laws in India; Citizen science; Designing and evaluating a community project', [
        L('action-project', 'Design an Action Project', {
          o: ['Explain key Indian environmental laws and institutions', 'Plan, run and evaluate a community environmental project'],
          p: ['Understands sustainability and ethics'],
          e: [
            'India\'s environmental framework includes the Wildlife (Protection) Act 1972, the Water Act 1974, the Air Act 1981, the Environment (Protection) Act 1986 and the National Green Tribunal (2010), which hears environmental cases. Article 48A of the Constitution directs the state to protect the environment, and Article 51A(g) makes it a fundamental duty of citizens.',
            'Citizen science lets ordinary people collect real data — bird counts, air quality readings, river monitoring — that help researchers and decision-makers.',
            'Effective projects start with a clear problem and baseline data, set measurable goals, involve stakeholders, act, then measure results honestly and share what was learned — including what didn\'t work.',
          ],
          v: 'citizen science = public participation in scientific research; baseline = measurements taken before a change; stakeholder = anyone affected by or involved in an issue; National Green Tribunal = a court for environmental cases in India',
          x: ['The annual Great Backyard Bird Count invites anyone to record birds.', 'A school measuring waste before and after a composting programme.'],
          s: ['The Data That Changed a Decision', 'Students noticed heavy traffic smoke outside their school. For three months they recorded air quality readings with a simple sensor and counted vehicles. They presented charts to the municipality. A no-idling zone and a new pedestrian crossing followed. "Our numbers," one student said, "were more convincing than our complaints."'],
          a: [
            mt('Match the law or body', 'Wildlife (Protection) Act=1972|Environment (Protection) Act=1986|National Green Tribunal=2010'),
            od('Steps of an action project', 'identify the problem|collect baseline data|plan with stakeholders|act|measure and share results'),
            tf('Protecting the environment is a fundamental duty of Indian citizens.', true),
            ch('Citizen science means…', '*the public collecting data for research|only scientists working|no data at all'),
          ],
          t: ['What makes a project successful long-term rather than a one-day event?', 'How should you report results that show your project didn\'t work?'],
          k: ['Pitch your project to a real decision-maker (principal, RWA, councillor) with data.'],
          m: ['Community Environmental Project', 'notebook, measuring tools suited to the problem, a team', 'Choose a local problem and gather baseline data | Set a measurable goal and plan with stakeholders | Run the project for at least 6 weeks | Measure results, write a report and present it publicly'],
          q: [
            ch('Measurements before a project starts are the…', '*baseline|conclusion|hypothesis only'),
            ch('India\'s environmental court is the…', '*National Green Tribunal|Lok Sabha|Election Commission'),
            tf('Honest evaluation includes reporting what didn\'t work.', true),
          ],
          ms: ['Explains the environmental legal framework', 'Plans and runs a project with data', 'Evaluates and communicates outcomes honestly'],
        }),
      ]),
    ]),
  ],
});
