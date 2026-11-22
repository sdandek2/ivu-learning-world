import { subject, S, U, L, ch, tf, od, mt } from '../dsl.ts';

export default subject({
  id: 'water',
  description: 'Water as a resource and a home: using water wisely, rivers from source to sea, India\'s great rivers, oceans and tides, clean water and sanitation, groundwater, water conflicts and integrated water management.',
  stages: [
    S('s4', 'Water in our lives and saving water.', [
      'Name ways we use water', 'Know water is precious', 'Practise saving water',
    ], [
      U('we-need-water', 'We Need Water', 'All living things need water.', 'Drinking, washing, cooking, plants; Where water comes from: tap, well, river, rain; Clean water', [
        L('water-uses', 'How Do We Use Water?', {
          o: ['Name ways we use water every day', 'Know that people, animals and plants all need water'],
          p: ['Can talk about daily routines'],
          e: [
            'We use water all day: to drink, to cook food, to wash our hands and bodies, to clean the house, and to water plants.',
            'Animals need water to drink, and plants drink water through their roots. Without water, nothing could live.',
            'Water comes to us from rain, rivers, lakes and wells. It must be clean before we drink it.',
          ],
          v: 'water = the clear liquid all living things need; drink = take water into your body; clean = free from dirt and germs; well = a deep hole dug to reach water underground',
          x: ['We wash hands before eating.', 'Plants wilt without water.'],
          s: ['Pala\'s Thirsty Friends', 'Pala the dolphin heard that the animals on land were thirsty because their pond was nearly dry. The rain clouds listened, and soon — splash! — the pond filled again. The deer drank, the birds bathed, the flowers lifted their heads. "Water is life," said Pala happily.'],
          a: [
            ch('Which needs water?', 'plants|animals|*all of these, and people too'),
            mt('Match the use', '🚿=washing|🥤=drinking|🌱=watering plants'),
            tf('We should drink clean water.', true),
            ch('Where does rain come from?', '*clouds ☁️|trees 🌳|cars 🚗'),
          ],
          t: ['What would happen if there was no water for a day?', 'Why must drinking water be clean?'],
          k: ['Tell a grown-up five ways your family uses water each day.'],
          m: ['Water Use Diary', 'paper, crayons', 'Draw a clock or a list of your day | Draw a water drop every time you use water | Count your drops at the end of the day | Talk about which uses are most important'],
          q: [
            ch('Which needs water to grow?', '*a plant|a rock|a toy'),
            tf('Water must be clean before we drink it.', true),
            ch('Before eating we should…', '*wash our hands|jump in a puddle|skip water'),
          ],
          ms: ['Names daily water uses', 'Knows all life needs water', 'Understands clean water importance'],
        }),
      ]),
      U('save-water', 'Every Drop Counts', 'Small habits save lots of water.', 'Turn off taps; Use a bucket; Fix leaks; Reuse water for plants', [
        L('save-drops', 'Be a Water Saver', {
          o: ['Practise ways to save water', 'Explain why saving water matters'],
          p: ['Knows we use water every day'],
          e: [
            'Clean water is precious. In many places, there isn\'t enough, especially in summer before the monsoon.',
            'We can save water: turn off the tap while brushing teeth, take a bucket bath instead of a long shower, and tell a grown-up about leaking taps.',
            'We can reuse water too: water used to wash vegetables can water the plants.',
          ],
          v: 'save = not waste; leak = water escaping through a small hole or crack; reuse = use again; waste = use carelessly',
          x: ['A dripping tap can waste many litres a day.', 'Rice-washing water can water plants.'],
          s: ['The Dripping Tap', 'Drip, drip, drip went the tap in Momo\'s house all night. In the morning, Momo put a bucket underneath and found it half full! "That much water, just wasted," Momo gasped. Momo told Papa Bear, who fixed the tap, and they used the bucket water for the garden.'],
          a: [
            ch('While brushing teeth, you should…', '*turn off the tap|leave the tap running|fill a bath'),
            ch('Water used to wash vegetables can be used to…', '*water plants|throw away|drink'),
            tf('A dripping tap wastes water.', true),
            mt('Saver or waster?', 'fixing a leak=saver|leaving the tap on=waster|bucket bath=saver of water'),
          ],
          t: ['Why might some places run out of water in summer?', 'How could your school save water?'],
          k: ['Teach someone in your family one way to save water.'],
          m: ['🧪 Drip Collector', 'a cup, a timer, a tap (turned to drip slowly by an adult)', 'Let a tap drip into a cup for 10 minutes | Measure how much water collected | Work out with a grown-up how much would drip in a day | Make a "Save Water" poster'],
          q: [
            ch('Which saves water?', '*a bucket bath|a long shower|leaving taps open'),
            tf('Reusing water helps save it.', true),
            ch('If a tap is leaking, you should…', '*tell a grown-up|ignore it|turn it on more'),
          ],
          ms: ['Demonstrates water-saving habits', 'Explains why water is precious', 'Spots water waste'],
        }),
      ]),
    ]),
    S('s5', 'Rivers, ponds and lakes; living things in water.', [
      'Describe a river\'s journey', 'Name animals and plants that live in fresh water', 'Know rivers are important to people',
    ], [
      U('rivers', 'A River\'s Journey', 'Rivers flow from mountains to the sea.', 'Source, tributaries, mouth; Fast streams and slow rivers; Rivers and towns', [
        L('source-to-sea', 'From Mountain to Sea', {
          o: ['Describe the journey of a river from source to mouth', 'Explain why people settle near rivers'],
          p: ['Knows rain comes from clouds'],
          e: [
            'A river starts at its source, often high in the mountains from melting snow, a spring or rain. Up there it is a small, fast stream rushing over rocks.',
            'Smaller streams called tributaries join it, and it grows bigger. On flat land it flows slowly and bends in loops.',
            'At its mouth, the river meets the sea. People have built villages and cities near rivers for thousands of years for water, fish, farming and transport.',
          ],
          v: 'source = where a river starts; tributary = a smaller river that joins a bigger one; mouth = where a river meets the sea; stream = a small, narrow river',
          x: ['The Ganga starts at the Gangotri Glacier.', 'Kolkata grew beside the Hooghly, a branch of the Ganga.'],
          s: ['The Little Stream Who Grew', 'High in the mountains, a tiny stream trickled from a melting glacier. "I\'m so small," it sighed. Down the hill, another stream joined it — then another, and another. By the time it reached the plains, it was a wide, gentle river, carrying boats and watering fields. At last it reached the sea and whispered, "I made it!"'],
          a: [
            od('Order the river\'s journey', 'source in the mountains|fast stream|tributaries join|slow river on the plains|mouth at the sea'),
            mt('Match the word', 'source=where a river starts|mouth=where a river meets the sea|tributary=a river that joins another'),
            tf('Many cities were built beside rivers.', true),
            ch('Where does the Ganga start?', '*Gangotri Glacier|the Thar Desert|Mumbai'),
          ],
          t: ['Why does a river flow fast in the mountains but slowly on the plains?', 'What do people use rivers for?'],
          k: ['Tell someone the story of a river\'s journey using a drawing.'],
          m: ['🧪 Sand Tray River', 'a tray, sand or soil, a jug of water, a book to tilt the tray', 'Make a slope of sand on a tilted tray | Pour water slowly from the top | Watch the water carve a path | Draw where it flowed fast and slow'],
          q: [
            ch('A river\'s source is usually…', '*in hills or mountains|in the sea|in a city'),
            ch('Smaller rivers that join a big one are…', '*tributaries|mouths|oceans'),
            tf('A river ends at its mouth.', true),
          ],
          ms: ['Describes river features from source to mouth', 'Explains settlement near rivers', 'Models river flow'],
        }),
      ]),
      U('pond-life', 'Pond Life', 'Fresh water is home to many creatures.', 'Frogs, fish, dragonflies, ducks; Water plants: lotus, lilies; Food chains in ponds', [
        L('pond-dip', 'What Lives in a Pond?', {
          o: ['Name plants and animals that live in or near ponds', 'Explain how pond plants help animals'],
          p: ['Knows habitats'],
          e: [
            'Ponds and lakes are freshwater habitats — the water isn\'t salty like the sea. Fish, frogs, snails, water beetles, dragonflies and ducks live there.',
            'Water plants like the lotus and water lily float on top; their leaves give shade and shelter. Tiny green algae are food for small creatures.',
            'Many insects, like dragonflies and mosquitoes, spend their young life underwater before flying away.',
          ],
          v: 'fresh water = water that is not salty; pond = a small area of still water; lotus = a water plant with large floating leaves and flowers; algae = tiny green plant-like living things in water',
          x: ['The lotus is India\'s national flower.', 'Dragonfly nymphs live underwater for months.'],
          s: ['The Frog\'s Lotus Leaf', 'A little frog sat on a lotus leaf in the middle of a pond. Below, fish swam in the cool shade of the leaves. A dragonfly zipped past, and a heron waited quietly at the edge. "Our pond is a whole city," the frog croaked.'],
          a: [
            ch('Which animal lives in a pond?', '*🐸 frog|🐪 camel|🐧 penguin'),
            ch('Pond water is…', '*fresh (not salty)|very salty|frozen always'),
            tf('The lotus is India\'s national flower.', true),
            mt('Match', '🐸 frog=sits on lily pads|🐟 fish=swims underwater|🦆 duck=paddles on top'),
          ],
          t: ['Why do you think ponds have so many insects?', 'What might pollute a pond?'],
          k: ['Describe a pond to someone and name five things that live there.'],
          m: ['Pond in a Tub', 'a large tub, rainwater or pond water, a few water plants, stones (with an adult\'s help)', 'Set up a tub with water and plants in a shady spot | Add stones as steps for insects to climb | Observe it each week | Record any visitors like dragonflies or birds', "Use a shallow, stable tub with an adult present. Do not drink the water or touch unknown wildlife; wash hands afterwards and empty the tub when finished."],
          q: [
            ch('Lily pads float on…', '*water|sand|trees'),
            ch('Dragonfly young live…', '*underwater|in trees|in the sky only'),
            tf('Ponds are freshwater habitats.', true),
          ],
          ms: ['Names pond organisms', 'Explains roles of pond plants', 'Observes a freshwater habitat'],
        }),
      ]),
    ]),
    S('s6', 'India\'s great rivers and the oceans around India.', [
      'Name and locate major Indian rivers', 'Name the seas around India', 'Describe tides and waves',
    ], [
      U('indian-rivers', 'Rivers of India', 'Himalayan and peninsular rivers.', 'Himalayan rivers: Ganga, Yamuna, Brahmaputra, Indus; Peninsular rivers: Godavari, Krishna, Kaveri, Narmada; Rivers in culture', [
        L('great-rivers', 'India\'s Great Rivers', {
          o: ['Locate major Indian rivers on a map', 'Distinguish Himalayan from peninsular rivers'],
          p: ['Knows a river\'s journey'],
          e: [
            'Himalayan rivers — the Ganga, Yamuna, Brahmaputra and Indus — are fed by snow and glaciers as well as rain, so they flow all year.',
            'Peninsular rivers — like the Godavari, Krishna and Kaveri — depend mainly on monsoon rain, so they can become low in the dry season. Most flow east into the Bay of Bengal; the Narmada and Tapi flow west into the Arabian Sea.',
            'Rivers are central to Indian life and culture. Many people consider rivers like the Ganga sacred, and festivals are held on their banks.',
          ],
          c: [['belief', 'Many Hindus revere the Ganga as a sacred river and a goddess, Ganga Ma; bathing in it is believed to purify. Other rivers are also honoured in various traditions.']],
          v: 'Himalayan river = a river fed by Himalayan snow and glaciers; peninsular river = a river of southern India fed mainly by rain; delta = land formed where a river splits before the sea; perennial = flowing all year',
          x: ['The Ganga–Brahmaputra delta (Sundarbans) is one of the largest in the world.', 'The Godavari is the longest river in peninsular India.'],
          s: ['Two Rivers Meet', 'At Devprayag, two Himalayan rivers — the swift Bhagirathi and the Alaknanda — meet. Their waters join and from there the river is called the Ganga. Travellers stand on the bridge watching the two different-coloured streams flow together into one.'],
          a: [
            mt('Himalayan or peninsular?', 'Ganga=Himalayan|Kaveri=peninsular|Brahmaputra=Himalayan, fed by snow'),
            ch('The Narmada flows into the…', '*Arabian Sea|Bay of Bengal|Indian Ocean directly at Kanyakumari'),
            tf('Himalayan rivers usually flow all year.', true),
            ch('Land formed where a river splits near the sea is a…', '*delta|plateau|glacier'),
          ],
          t: ['Why might peninsular rivers run low before the monsoon?', 'How can a river be both a resource and sacred?'],
          k: ['Point to five Indian rivers on a map and tell someone where each flows.'],
          m: ['River Map of India', 'an outline map of India, blue pens, labels', 'Draw the major rivers in blue | Label each and mark where it ends | Colour Himalayan and peninsular rivers differently | Add one city on each river'],
          q: [
            ch('Which is a peninsular river?', 'Ganga|Indus|*Godavari'),
            ch('Most peninsular rivers flow into the…', '*Bay of Bengal|Arabian Sea|Mediterranean'),
            tf('Glaciers feed Himalayan rivers.', true),
          ],
          ms: ['Locates major rivers', 'Distinguishes river types and their water sources', 'Discusses cultural significance respectfully'],
        }),
      ]),
      U('oceans-tides', 'Seas, Waves and Tides', 'The oceans around India.', 'Arabian Sea, Bay of Bengal, Indian Ocean; Waves made by wind; Tides made by the Moon', [
        L('tides', 'Why Does the Sea Come and Go?', {
          o: ['Name the seas around India', 'Explain what causes waves and tides'],
          p: ['Knows the Moon orbits Earth'],
          e: [
            'India has the Arabian Sea to the west, the Bay of Bengal to the east and the Indian Ocean to the south. India\'s coastline is several thousand kilometres long.',
            'Waves are made mostly by wind blowing across the water. Stronger winds make bigger waves.',
            'Tides are the slow rise and fall of the sea, usually twice a day. They are caused mainly by the Moon\'s gravity pulling on the oceans, with help from the Sun.',
          ],
          v: 'tide = the regular rise and fall of the sea level; high tide = when the sea comes furthest up the shore; low tide = when the sea is furthest out; wave = moving ripple of water',
          x: ['At low tide you can find crabs and shells in rock pools.', 'Fishing boats often go out with the tides.'],
          s: ['The Disappearing Beach', 'In the morning, Kiko built a sandcastle near the water. After lunch, the sea had crept up and washed it away! "The sea moved!" Kiko said. "That\'s the tide," explained Pala. "The Moon pulls the ocean, and twice a day the water comes in and goes out."'],
          a: [
            mt('Match the sea to its side of India', 'Arabian Sea=west|Bay of Bengal=east|Indian Ocean=south'),
            ch('Waves are mostly made by…', '*wind|fish|the Sun\'s light'),
            ch('Tides are caused mainly by…', '*the Moon\'s gravity|boats|rain'),
            tf('There are usually two high tides a day.', true),
          ],
          t: ['Why is it important for fishermen to know the tide times?', 'Why don\'t lakes have big tides like the sea?'],
          k: ['Explain to someone why a sandcastle near the sea might get washed away.'],
          m: ['Tide Table Investigation', 'a printed tide table for a coastal city (from a newspaper or almanac), paper', 'Read high and low tide times for a week | Plot them on a chart | Notice how the times shift each day | Explain the pattern using the Moon'],
          q: [
            ch('The sea to the east of India is the…', 'Arabian Sea|*Bay of Bengal|Red Sea'),
            ch('When the sea is furthest out, it is…', 'high tide|*low tide'),
            tf('Wind helps make waves.', true),
          ],
          ms: ['Names seas around India', 'Explains waves and tides', 'Reads tide tables'],
        }),
      ]),
    ]),
    S('s7', 'Clean water, sanitation, and water pollution.', [
      'Explain how water is cleaned for drinking', 'Describe causes of water pollution', 'Explain the importance of sanitation',
    ], [
      U('clean-water', 'Clean Water for All', 'How water is treated and why sanitation matters.', 'Water treatment: sedimentation, filtration, chlorination; Boiling and purifiers; Sanitation and health', [
        L('water-treatment', 'From River to Tap', {
          o: ['Describe the steps in treating water', 'Explain how sanitation prevents disease'],
          p: ['Knows filtering and separating mixtures'],
          e: [
            'River or lake water can contain mud, germs and chemicals. Water treatment plants clean it in steps: screening (removing large rubbish), sedimentation (letting mud settle), filtration (passing through sand and gravel), and disinfection (often with chlorine) to kill germs.',
            'At home, boiling water or using a reliable purifier can make it safer to drink.',
            'Sanitation means safe toilets and safe disposal of waste. Without it, germs from human waste can get into water and cause diseases like diarrhoea and cholera. Handwashing with soap after using the toilet and before eating is one of the most effective ways to prevent illness.',
          ],
          c: [['evidence', 'The World Health Organization identifies unsafe water, sanitation and hygiene as major causes of diarrhoeal disease, especially among young children.']],
          v: 'sanitation = safe toilets and waste disposal; disinfection = killing germs; sedimentation = letting heavy particles settle; contaminated = made unclean or unsafe',
          x: ['Clear-looking water can still contain harmful germs.', 'India\'s Swachh Bharat Mission built millions of toilets.'],
          s: ['John Snow\'s Map', 'In London in 1854, many people fell ill with cholera. Dr John Snow marked each case on a map and noticed they clustered around one water pump on Broad Street. When the pump handle was removed, cases in the area dropped. It helped show that dirty water could spread disease.'],
          a: [
            od('Steps in water treatment', 'screening out rubbish|sedimentation|filtration|disinfection'),
            ch('Clear water is always safe to drink.', 'true|*false — it can still contain germs'),
            tf('Washing hands with soap helps prevent illness.', true),
            ch('Cholera spreads mainly through…', '*contaminated water|sunlight|loud noise'),
          ],
          t: ['Why was John Snow\'s map so important?', 'Why are toilets a public health issue, not just a private one?'],
          k: ['Teach a younger child the steps of proper handwashing and explain why.'],
          m: ['🧪 Make a Water Filter', 'a plastic bottle cut in half (adult help), cotton wool, sand, gravel, charcoal (optional), muddy water', 'Layer cotton, charcoal, sand and gravel in the upside-down bottle | Pour muddy water through | Compare before and after | Explain why this water is still NOT safe to drink without disinfection'],
          q: [
            ch('Killing germs in water is…', '*disinfection|sedimentation|evaporation'),
            ch('Safe toilets and waste disposal are called…', '*sanitation|irrigation|navigation'),
            tf('Filtering alone always makes water safe to drink.', false),
          ],
          ms: ['Sequences water treatment', 'Explains links between sanitation and health', 'Knows limits of simple filtering'],
        }),
      ]),
      U('pollution', 'Water Pollution', 'What pollutes water and how to stop it.', 'Sources: sewage, industry, farm chemicals, plastic; Effects: algal blooms, fish deaths; Clean-up efforts', [
        L('polluted-rivers', 'Polluted Rivers', {
          o: ['Identify sources of water pollution', 'Explain effects on ecosystems and people'],
          p: ['Knows food webs'],
          e: [
            'Water pollution comes from untreated sewage, factory waste, farm fertilisers and pesticides washing off fields, and plastic litter.',
            'Extra fertilisers can cause algal blooms: algae grow quickly, then die and decompose, using up oxygen in the water so fish suffocate. Plastics harm animals that swallow them or get tangled.',
            'Clean-up needs many actions: treating sewage before it enters rivers, stopping industrial dumping, careful fertiliser use, reducing plastic, and community clean-ups.',
          ],
          v: 'pollution = harmful substances in the environment; sewage = waste water from homes and toilets; algal bloom = a sudden overgrowth of algae; pesticide = a chemical used to kill pests',
          x: ['Microplastics have been found in rivers and seas worldwide.', 'Sewage treatment plants clean water before releasing it.'],
          s: ['The River Clean-Up', 'A group of students in Pune noticed plastic piling up along their local river. Every Sunday for a year, they and their families picked up litter, recorded what they found, and wrote to their municipal ward about the main sources. Slowly, new bins appeared and a drain was fixed.'],
          a: [
            mt('Match the source to the pollutant', 'farms=fertilisers and pesticides|homes=sewage|factories=chemical waste'),
            ch('Algal blooms can kill fish by…', '*using up oxygen when algae decompose|making the water too cold|eating the fish'),
            tf('Plastic in rivers can harm animals.', true),
            ch('Treating sewage before release…', '*reduces pollution|increases pollution|has no effect'),
          ],
          t: ['Who should be responsible for cleaning polluted rivers?', 'How do your daily choices affect rivers far away?'],
          k: ['Make a short speech to your class or family about one way to reduce river pollution.'],
          m: ['Litter Audit', 'gloves, bags, a notebook, an adult', 'With an adult, collect litter from a park or roadside for 20 minutes | Sort and count the items by type | Make a bar chart | Suggest three ways to reduce the most common item', "Only do this with an adult in a safe park area away from roads and water. Do not touch sharp, medical, chemical or unknown waste; leave it for an adult or local cleanup service."],
          q: [
            ch('Which is a source of water pollution?', '*untreated sewage|planting trees|rainwater harvesting'),
            ch('Fertilisers washing into lakes can cause…', '*algal blooms|earthquakes|tides'),
            tf('Community clean-ups can help reduce pollution.', true),
          ],
          ms: ['Identifies pollution sources', 'Explains ecological effects', 'Proposes realistic solutions'],
        }),
      ]),
    ]),
    S('s9', 'Groundwater, water scarcity, and rainwater harvesting.', [
      'Explain groundwater and aquifers', 'Analyse causes of water scarcity', 'Design rainwater harvesting systems',
    ], [
      U('groundwater', 'Water Underground', 'Aquifers, wells and falling water tables.', 'Aquifers and water tables; Over-extraction; Recharge', [
        L('aquifers', 'Aquifers and the Water Table', {
          o: ['Explain how groundwater is stored and recharged', 'Analyse the effects of over-extraction'],
          p: ['Knows the water cycle'],
          e: [
            'When rain soaks into the ground, it fills the tiny spaces between soil and rock particles. Layers of rock that hold and let water through are called aquifers. The top of this saturated zone is the water table.',
            'Wells and borewells pump groundwater up. India is among the largest users of groundwater in the world, much of it for irrigation.',
            'If water is pumped out faster than rain can recharge it, the water table falls. Wells must go deeper, some dry up, and in coastal areas seawater can seep in.',
          ],
          c: [['evidence', 'The Central Ground Water Board reports that groundwater is over-exploited in many blocks, especially in parts of Punjab, Haryana, Rajasthan and Tamil Nadu.']],
          v: 'aquifer = an underground layer of rock or soil that holds water; water table = the top level of underground water; recharge = refilling of groundwater; borewell = a narrow, deep well drilled to reach groundwater',
          x: ['Old stepwells (baoris) reached groundwater by steps.', 'Paved cities let less rain soak in, reducing recharge.'],
          s: ['The Deepening Well', 'Grandfather remembered that the village well was only 10 metres deep when he was a boy. Now the borewell went down 200 metres. "We took water faster than the rain gave it back," he said. The village began building check dams and recharge pits — and slowly, the water table started to rise.'],
          a: [
            ch('An underground layer that holds water is an…', '*aquifer|atmosphere|estuary'),
            ch('The water table falls when…', '*more water is pumped out than is recharged|it rains heavily|trees are planted'),
            tf('Paving over land can reduce groundwater recharge.', true),
            mt('Match', 'recharge=refilling groundwater|borewell=drilled deep well|stepwell=traditional well with steps'),
          ],
          t: ['Why is groundwater sometimes called a "hidden" resource?', 'How can cities let more rain soak into the ground?'],
          k: ['Explain the falling water table to someone using a sponge and a straw.'],
          m: ['🧪 Aquifer in a Cup', 'a clear cup, gravel, sand, clay, water, a straw', 'Layer clay, gravel and sand in a cup | Pour water slowly and watch it fill spaces | Mark the water table | Use a straw to "pump" water and watch the level drop'],
          q: [
            ch('Rain soaking into the ground does what to groundwater?', '*recharges it|pollutes it always|freezes it'),
            ch('Over-extraction near the coast can let ___ seep in.', '*seawater|oil|lava'),
            tf('India uses large amounts of groundwater for irrigation.', true),
          ],
          ms: ['Explains aquifers and water tables', 'Analyses over-extraction effects', 'Models groundwater'],
        }),
      ]),
      U('harvesting', 'Rainwater Harvesting', 'Catching and storing rain.', 'Rooftop harvesting; Traditional systems: johads, kunds, stepwells, eris; Calculating harvest potential', [
        L('catch-the-rain', 'Catch the Rain', {
          o: ['Describe modern and traditional rainwater harvesting', 'Calculate the rainwater a roof can collect'],
          p: ['Knows area and volume'],
          e: [
            'Rainwater harvesting means collecting rain where it falls and storing it or letting it soak into the ground. Rooftop systems channel rain through pipes into tanks or recharge pits.',
            'India has many traditional systems: johads (earthen check dams) in Rajasthan, kunds (covered underground tanks) in desert areas, stepwells in Gujarat and Rajasthan, and eris (tank systems) in Tamil Nadu.',
            'Harvest potential: roof area (m²) × rainfall (m) × collection efficiency. A 100 m² roof with 0.8 m of rain a year at 80% efficiency could collect about 64,000 litres.',
          ],
          c: [['evidence', 'Communities in Alwar district, Rajasthan, working with the organisation Tarun Bharat Sangh from the 1980s, revived johads, and several seasonal rivers were reported to flow again.']],
          v: 'rainwater harvesting = collecting and storing rain; recharge pit = a pit that lets water soak into the ground; johad = a traditional earthen check dam; catchment = the area that collects rainwater',
          x: ['Chennai made rooftop rainwater harvesting mandatory for buildings in the early 2000s.', 'Stepwells like Rani ki Vav are UNESCO World Heritage sites.'],
          s: ['The River That Came Back', 'In a dry district of Rajasthan, villagers rebuilt old earthen johads to catch monsoon rain. Year after year, more water soaked into the ground. Wells refilled. Then one season, a river that had been dry for decades began to flow again. "We didn\'t make rain," an elder said. "We just learned to hold it."'],
          a: [
            ch('Roof 50 m², rain 1 m, efficiency 100%. Water collected?', '*50 m³ (50,000 litres)|5 m³|500 litres'),
            mt('Match the traditional system to its region', 'johad=Rajasthan|eri=Tamil Nadu|stepwell=Gujarat and Rajasthan'),
            tf('Rainwater harvesting can help recharge groundwater.', true),
            ch('1 m³ of water is…', '100 litres|*1,000 litres|10 litres'),
          ],
          t: ['Why did traditional systems fall out of use, and why are they being revived?', 'Should rainwater harvesting be compulsory for all buildings?'],
          k: ['Present a plan for rainwater harvesting at your home or school, with numbers.'],
          m: ['Rooftop Harvest Calculation', 'a measuring tape (or building plan), local annual rainfall data, calculator', 'Measure or estimate your roof area | Find local average annual rainfall | Calculate harvest potential at 80% efficiency | Design a simple system and compare with your household\'s water use'],
          q: [
            ch('A recharge pit helps water…', '*soak into the ground|evaporate faster|turn to ice'),
            ch('Kunds are…', '*covered underground tanks|rivers|mountains'),
            tf('Harvest potential depends on roof area and rainfall.', true),
          ],
          ms: ['Describes harvesting systems', 'Calculates harvest potential', 'Evaluates traditional and modern methods'],
        }),
      ]),
    ]),
    S('s12', 'Water governance, oceans and climate, and integrated water management.', [
      'Analyse water-sharing conflicts', 'Explain ocean–climate links', 'Evaluate integrated water resource management',
    ], [
      U('water-governance', 'Sharing Water', 'Rivers cross borders; so do disputes.', 'Inter-state disputes (e.g. Kaveri); International treaties: Indus Waters Treaty; Equity and sustainability', [
        L('sharing-rivers', 'Who Gets the River?', {
          o: ['Analyse a river-sharing dispute from multiple perspectives', 'Evaluate mechanisms for resolving water conflicts'],
          p: ['Understands river systems and scarcity'],
          e: [
            'When rivers flow through several states or countries, sharing water fairly is difficult — especially in dry years. Upstream users can affect downstream users.',
            'In India, the Kaveri water dispute between Karnataka, Tamil Nadu, Kerala and Puducherry has lasted over a century; tribunals and the Supreme Court have issued allocations, and a management authority now oversees sharing.',
            'Internationally, the Indus Waters Treaty (1960) between India and Pakistan, brokered by the World Bank, allocated the eastern rivers mainly to India and the western rivers mainly to Pakistan. Such agreements show cooperation is possible, though they face strains.',
          ],
          c: [['interpretation', 'Each party in a water dispute frames fairness differently — by historical use, population, area, or need. Analysing a dispute requires understanding these competing principles.']],
          v: 'tribunal = a body set up to judge a specific dispute; upstream = towards a river\'s source; downstream = towards a river\'s mouth; equity = fairness',
          x: ['Drought years intensify Kaveri tensions.', 'The Mekong River is shared by six countries.'],
          s: ['The Farmer and the City', 'Upstream, a farmer needed water for sugarcane. Downstream, a city needed drinking water and farmers needed water for rice. In a dry year there wasn\'t enough for all. The students role-playing the dispute realised: every side had a real need. Fairness required data, compromise and trust.'],
          a: [
            ch('The Indus Waters Treaty was signed in…', '1947|*1960|2000'),
            ch('A body set up to judge a specific dispute is a…', '*tribunal|temple|market'),
            tf('Water disputes often become harder in drought years.', true),
            mt('Match', 'upstream=towards the source|downstream=towards the mouth|equity=fairness'),
          ],
          t: ['What principles should decide how a shared river is divided?', 'How can data and science help reduce water conflicts?'],
          k: ['Role-play a negotiation between upstream and downstream users and present the agreement you reached.'],
          m: ['Dispute Analysis Brief', 'news archives and official summaries, notebook', 'Choose a water dispute (national or international) | Map stakeholders and their claims | Summarise legal decisions or treaties | Propose improvements and justify them'],
          q: [
            ch('The Kaveri dispute involves…', '*Karnataka and Tamil Nadu among others|Punjab and Bengal only|India and China'),
            tf('Treaties can help countries share rivers.', true),
            ch('Fairness in sharing water is called…', '*equity|erosion|evaporation'),
          ],
          ms: ['Analyses disputes from multiple perspectives', 'Evaluates resolution mechanisms', 'Proposes principled solutions'],
        }),
      ]),
      U('oceans-climate', 'Oceans and Climate', 'The ocean as Earth\'s climate engine.', 'Ocean currents and heat transport; Ocean acidification; Sea-level rise and coastal India', [
        L('ocean-engine', 'The Ocean\'s Role in Climate', {
          o: ['Explain how oceans regulate climate', 'Analyse threats from warming and acidification'],
          p: ['Understands the greenhouse effect'],
          e: [
            'Oceans absorb enormous amounts of heat and carbon dioxide. Currents move warm and cold water around the globe, shaping regional climates and the monsoon.',
            'Because oceans absorb CO₂, seawater is becoming more acidic. Ocean acidification makes it harder for corals and shellfish to build shells and skeletons.',
            'Warming oceans expand, and melting land ice adds water, so sea levels rise. Coastal cities and low-lying areas, including parts of India\'s coastline and the Sundarbans, face increased flooding and erosion risks.',
          ],
          c: [['science', 'The IPCC reports that the ocean has absorbed over 90% of the excess heat from human-caused warming and around a quarter to a third of human CO₂ emissions.']],
          v: 'ocean current = a large, continuous movement of seawater; acidification = becoming more acidic; thermal expansion = water expanding as it warms; coral bleaching = corals losing their algae under stress',
          x: ['Coral bleaching events have affected reefs including in Lakshadweep.', 'Mangroves can help coasts adapt to rising seas.'],
          s: ['The Fading Reef', 'A diver returned to a reef she had visited ten years earlier. Where there had been brilliant colours, many corals were pale and white — bleached by a marine heatwave. In some patches, young corals were growing again. "Reefs can recover," she wrote, "if we give them a chance."'],
          a: [
            ch('Most excess heat from global warming has gone into the…', 'atmosphere|*oceans|land'),
            ch('Ocean acidification is caused mainly by absorbing…', '*CO₂|salt|oxygen'),
            tf('Warm water expands, contributing to sea-level rise.', true),
            mt('Match', 'coral bleaching=corals losing their algae|acidification=seawater becoming more acidic|thermal expansion=water expanding as it warms'),
          ],
          t: ['How should coastal cities prepare for sea-level rise?', 'Why does what happens in the ocean matter to people far inland?'],
          k: ['Give a presentation on one threat to oceans and two solutions, with evidence.'],
          m: ['🧪 Acidification Demonstration', 'two cups, vinegar, water, chalk pieces or eggshell', 'Place chalk in water and in vinegar | Observe over 24 hours | Relate the reaction to shells in more acidic oceans | Write up the experiment and its limits as a model'],
          q: [
            ch('Coral bleaching is often triggered by…', '*unusually warm water|cold winters|more fish'),
            ch('Sea-level rise is caused by thermal expansion and…', '*melting land ice|more boats|tides'),
            tf('Oceans help regulate Earth\'s climate.', true),
          ],
          ms: ['Explains ocean–climate interactions', 'Analyses acidification and sea-level rise', 'Evaluates adaptation strategies'],
        }),
      ]),
    ]),
  ],
});
