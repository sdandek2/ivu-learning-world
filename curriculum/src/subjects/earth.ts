import { subject, S, U, L, ch, tf, od, mt, ct } from '../dsl.ts';

export default subject({
  id: 'earth',
  description: 'Earth science: weather and seasons, rocks and soils, the water cycle, India\'s monsoon, volcanoes and earthquakes, the layered Earth and plate tectonics, and climate. Children observe local weather and landforms before learning global systems.',
  stages: [
    S('s4', 'Weather around us: sunny, rainy, windy, cloudy, and what to wear.', [
      'Name kinds of weather', 'Choose clothes for the weather', 'Notice that weather changes',
    ], [
      U('weather-watch', 'Weather Watchers', 'Every day the weather can be different.', 'Weather words: sunny, rainy, cloudy, windy, stormy; Weather symbols; Daily weather chart', [
        L('what-weather', 'What Is the Weather Today?', {
          o: ['Name and describe different kinds of weather', 'Choose suitable clothes for the weather'],
          p: ['Can describe what they see outside'],
          e: [
            'Weather is what the air outside is like today. It might be sunny and hot, cloudy and grey, rainy and wet, or windy with leaves blowing around.',
            'Weather changes from day to day and even during one day. The morning can be sunny and the afternoon rainy!',
            'We dress for the weather: a hat and water bottle when it\'s sunny, a raincoat and umbrella when it\'s rainy, a sweater when it\'s cold.',
          ],
          v: 'weather = what the air outside is like; sunny = bright with sunshine; rainy = water falling from clouds; windy = moving air you can feel',
          x: ['☀️ Sunny: wear a cap and drink water.', '🌧️ Rainy: take an umbrella.'],
          s: ['Momo\'s Weather Wardrobe', 'Momo opened the window. Sunshine! Momo put on a sunhat. By lunchtime, dark clouds rolled in — plop, plop, rain! Momo swapped the hat for a raincoat. In the evening, a chilly wind blew, and Momo grabbed a woolly scarf. "Busy weather day!" Momo laughed.'],
          a: [
            ch('What do you wear in the rain?', '*a raincoat 🧥|sunglasses 🕶️|swimsuit 🩱'),
            mt('Match the weather to the picture', 'sunny=☀️|rainy=🌧️|windy=🌬️|cloudy=☁️'),
            tf('Weather can change during one day.', true),
            ch('On a hot sunny day we should…', '*drink water and wear a hat|wear a thick coat|stay in the rain'),
          ],
          t: ['Why does the sky look grey on rainy days?', 'What is your favourite weather and why?'],
          k: ['Look outside and tell a grown-up today\'s weather and what you should wear.'],
          m: ['Weather Chart for a Week', 'paper, crayons, weather symbol stickers or drawings', 'Draw a chart with the seven days | Each morning look outside | Draw the weather symbol for that day | At the end of the week, count which weather happened most'],
          q: [
            ch('☁️ means…', 'sunny|*cloudy|snowy'),
            ch('An umbrella is useful when it is…', '*rainy|sunny and dry|night'),
            tf('Weather is the same every day.', false),
          ],
          ms: ['Names and identifies kinds of weather', 'Matches clothing to weather', 'Keeps a simple weather record'],
        }),
      ]),
      U('seasons', 'Seasons', 'Seasons bring different weather through the year.', 'Indian seasons: summer, monsoon, winter (and spring, autumn); Changes we notice: trees, clothes, food; Festivals and seasons', [
        L('three-seasons', 'Summer, Monsoon and Winter', {
          o: ['Name the main seasons in India', 'Describe what changes in each season'],
          p: ['Knows weather words'],
          e: [
            'A year has seasons — times when the weather is different. In much of India, there is a hot summer, a rainy monsoon, and a cooler winter.',
            'In summer it is hot and sunny; mangoes are in season! In the monsoon, heavy rains fill rivers and make everything green. In winter, mornings are cool and we wear sweaters.',
            'Many traditional calendars in India describe six seasons, called ritus, including spring and autumn.',
          ],
          c: [['tradition', 'Traditional Indian calendars name six ritus: Vasanta (spring), Grishma (summer), Varsha (monsoon), Sharad (autumn), Hemanta (pre-winter) and Shishira (winter).']],
          v: 'season = a part of the year with its own kind of weather; monsoon = the rainy season; summer = the hottest season; winter = the coolest season',
          x: ['Summer: mangoes and long days.', 'Monsoon: puddles, frogs and green fields.'],
          s: ['The Peacock\'s Favourite Season', 'In summer Mayur rested in the shade. In winter he fluffed his feathers against the cold mornings. But when the first monsoon clouds rolled in, Mayur spread his tail and danced! "The rain is coming," he called, "my favourite season!"'],
          a: [
            ch('Which season brings heavy rain in India?', 'winter|*monsoon|summer'),
            mt('Match the season', 'summer=mangoes and heat|monsoon=rain and puddles|winter=cool mornings and sweaters'),
            ct('How many ritus (seasons) in traditional Indian calendars?', 6),
            tf('In winter we wear sweaters.', true),
          ],
          t: ['Why do you think farmers wait for the monsoon?', 'Do all places in the world have a monsoon?'],
          k: ['Tell a grown-up about your favourite season and three things you love about it.'],
          m: ['Season Wheel', 'paper plate, crayons, magazine pictures or drawings', 'Divide a plate into three or six parts | Draw each season: weather, clothes, food, festivals | Add an arrow in the middle | Turn it to show today\'s season'],
          q: [
            ch('Mangoes are mostly ripe in…', '*summer|winter'),
            ch('The rainy season in India is called the…', 'winter|*monsoon|spring'),
            tf('Seasons repeat every year.', true),
          ],
          ms: ['Names Indian seasons and their features', 'Links seasons to everyday life', 'Knows seasons repeat yearly'],
        }),
      ]),
    ]),
    S('s5', 'Rocks, soil and the water cycle in simple terms.', [
      'Describe different rocks and soil', 'Know rain comes from clouds', 'Explain the water cycle simply',
    ], [
      U('rocks-soil', 'Rocks and Soil', 'What is under our feet.', 'Rocks: hard, smooth, rough; Soil: sand, clay, humus; Living things in soil: worms', [
        L('rock-detectives', 'Rock and Soil Detectives', {
          o: ['Describe rocks by colour, texture and hardness', 'Describe what soil is made of'],
          p: ['Can describe materials'],
          e: [
            'Rocks are natural, hard materials that make up the ground and mountains. Some are smooth like river pebbles, some rough like granite, some soft enough to scratch like chalk.',
            'Soil is made of tiny bits of broken rock mixed with rotting plants and animals (called humus), water and air.',
            'Soil is home to worms, insects and roots. Worms help by mixing the soil and letting air in.',
          ],
          v: 'rock = a hard natural material from the Earth; soil = the top layer of ground where plants grow; humus = the dark, rich part of soil from rotted plants; pebble = a small smooth stone',
          x: ['River pebbles are smooth because water rubbed them for a long time.', 'Clay soil is sticky; sandy soil is gritty.'],
          s: ['The Worm\'s Underground Kingdom', 'Tara dug a little hole in the garden. A wriggly earthworm popped out. "Welcome to my kingdom!" it said. "I eat old leaves and mix the soil. My tunnels let air and water reach the roots." Tara gently covered it up again.'],
          a: [
            ch('Why are river pebbles smooth?', '*Water rubbed them for a long time|Someone polished them|They grew that way'),
            ch('The dark, rich part of soil is…', '*humus|sand|glass'),
            tf('Worms help keep soil healthy.', true),
            mt('Match the soil to how it feels', 'sand=gritty|clay=sticky|humus=soft and crumbly'),
          ],
          t: ['Where do you think soil comes from?', 'Why might farmers be happy to see worms?'],
          k: ['Show someone two rocks and describe how they are different.'],
          m: ['🧪 Soil Shake Jar', 'a clear jar with lid, a handful of soil, water', 'Put soil in a jar and fill with water | Close the lid and shake | Leave it to settle overnight | Draw the layers you see (stones, sand, silt, clay, floating bits)'],
          q: [
            ch('Soil is made of broken rock and…', '*rotted plants and animals|plastic|sugar'),
            ch('A rock you can scratch easily is…', '*soft|hard'),
            tf('Plants grow in soil.', true),
          ],
          ms: ['Describes rocks using properties', 'Explains soil components', 'Recognises soil organisms\' role'],
        }),
      ]),
      U('rain', 'Where Does Rain Come From?', 'Water goes round and round in the water cycle.', 'Clouds and rain; Evaporation from seas and rivers; The water cycle', [
        L('water-cycle-basic', 'The Never-Ending Water Journey', {
          o: ['Explain that rain falls from clouds', 'Describe the water cycle in simple steps'],
          p: ['Knows puddles dry up'],
          e: [
            'The Sun warms water in seas, rivers and lakes. Some of it turns into an invisible gas called water vapour and rises into the sky. This is evaporation.',
            'High up, the air is cold. The water vapour cools into tiny droplets that make clouds. This is condensation.',
            'When droplets join and get heavy, they fall as rain. The rain flows back into rivers and seas — and the journey starts again. That\'s the water cycle.',
          ],
          v: 'water cycle = water moving from earth to sky and back again; cloud = many tiny water droplets in the sky; evaporate = turn from liquid into gas; rain = water falling from clouds',
          x: ['The same water has been going round for millions of years.', 'Puddles dry up as water evaporates.'],
          s: ['Droplet\'s Adventure', 'A little water droplet named Bindu lived in the sea. One hot day, the Sun warmed her and up she floated, light as a feather. High in the sky, she met other droplets and they huddled into a fluffy cloud. When the cloud got heavy, down Bindu fell as rain — into a river that carried her all the way home to the sea.'],
          a: [
            od('Put the water cycle in order', 'Sun warms the sea|Water rises as vapour|Clouds form|Rain falls'),
            ch('Clouds are made of…', 'cotton|*tiny water droplets|smoke'),
            tf('Rain flows back to rivers and seas.', true),
            ch('What warms the water to start the cycle?', '*the Sun|the Moon|the wind'),
          ],
          t: ['Could the water you drink today once have been in a dinosaur\'s puddle?', 'Why do clouds float?'],
          k: ['Tell the story of a raindrop\'s journey to someone using hand actions.'],
          m: ['🧪 Water Cycle in a Bag', 'a zip bag, water, blue food colouring, a marker, tape, a sunny window', 'Draw sun, clouds and sea on the bag | Add a little coloured water | Seal it and tape it to a sunny window | Watch over a few days for droplets and "rain" running down'],
          q: [
            ch('Water vapour cools into clouds. This is…', 'evaporation|*condensation|melting'),
            od('Order', 'evaporation|condensation|rain'),
            tf('The water cycle goes round and round.', true),
          ],
          ms: ['Describes the water cycle in order', 'Uses evaporation and condensation correctly', 'Relates the cycle to observed weather'],
        }),
      ]),
    ]),
    S('s6', 'Landforms, the monsoon, and measuring weather.', [
      'Name landforms: mountain, valley, river, plain, desert, coast', 'Explain how the monsoon works in simple terms', 'Measure rainfall and temperature',
    ], [
      U('landforms', 'Shapes of the Land', 'Mountains, rivers, plains and more.', 'Landforms: mountains, valleys, plateaus, plains, deserts, islands; India\'s landforms: Himalayas, Deccan Plateau, Thar Desert, Gangetic Plain', [
        L('india-landforms', 'Landforms of India', {
          o: ['Name and describe major landforms', 'Locate major Indian landforms'],
          p: ['Knows basic map ideas'],
          e: [
            'Landforms are the natural shapes of the land. Mountains are very high land; the Himalayas in the north of India contain the world\'s highest peaks, including Mount Everest on the Nepal–China border.',
            'A plateau is high, flat land — like the Deccan Plateau in southern India. Plains are large, flat, low land, often by rivers — like the Gangetic Plain, with rich soil for farming.',
            'A desert gets very little rain — like the Thar Desert in Rajasthan. An island has water all around it — like the Andaman and Nicobar Islands.',
          ],
          v: 'landform = a natural shape of the land; plateau = high, flat land; plain = low, flat land; desert = a very dry place with little rain; peninsula = land with water on three sides',
          x: ['Southern India is a peninsula: sea on three sides.', 'Rivers carve valleys between mountains.'],
          s: ['Kiko\'s Journey Across India', 'Kiko the mountain goat started in the snowy Himalayas, trotted down into the green Gangetic Plain, crossed the dry Thar Desert, climbed onto the Deccan Plateau, and finally saw the sea all around the southern tip of India. "Every landform has its own animals, plants and people," Kiko said.'],
          a: [
            mt('Match the landform to the Indian example', 'mountains=Himalayas|plateau=Deccan|desert=Thar|plain=Gangetic Plain'),
            ch('Land with water on three sides is a…', 'plateau|*peninsula|valley'),
            tf('A desert gets very little rain.', true),
            ch('Mount Everest is in the…', '*Himalayas|Thar Desert|Deccan Plateau'),
          ],
          t: ['Why do you think many cities grew up on plains near rivers?', 'How do people adapt to living in deserts or mountains?'],
          k: ['Point to landforms on a map of India and explain one fact about each.'],
          m: ['Salt Dough Relief Map', 'salt dough (flour, salt, water), cardboard, paint, an outline map of India', 'Trace an outline of India onto cardboard | Build up mountains, plateau and plains with dough | Paint landforms in different colours when dry | Label them with small flags'],
          q: [
            ch('Flat, low land beside a big river is a…', '*plain|mountain|plateau'),
            ch('The Andaman Islands are surrounded by…', '*sea|desert|mountains'),
            tf('The Deccan is a plateau.', true),
          ],
          ms: ['Defines major landforms', 'Locates major Indian landforms on a map', 'Links landforms to human settlement'],
        }),
      ]),
      U('monsoon', 'The Monsoon', 'Seasonal winds that bring India\'s rains.', 'Monsoon winds: from sea to land; Onset in Kerala; Importance for farming and water; Measuring rainfall', [
        L('monsoon-winds', 'How the Monsoon Comes', {
          o: ['Explain in simple terms why the monsoon happens', 'Measure rainfall with a rain gauge'],
          p: ['Knows the water cycle'],
          e: [
            'In summer, the land heats up faster than the sea. Warm air over the land rises, and cooler, moist air from the Indian Ocean flows in to replace it. These seasonal winds are the southwest monsoon.',
            'The moist sea air rises over land and hills, cools, and drops heavy rain. The monsoon usually reaches Kerala around early June and spreads across India over the following weeks.',
            'Most of India\'s yearly rain falls in the monsoon months. Farmers depend on it for crops, and it refills rivers, lakes and groundwater.',
          ],
          c: [['science', 'The India Meteorological Department tracks the monsoon\'s onset; the normal onset date over Kerala is around 1 June, though it varies by several days each year.']],
          v: 'monsoon = seasonal winds that bring a rainy season; humid = air full of moisture; rain gauge = a tool for measuring rainfall; onset = the start of something',
          x: ['Cherrapunji and Mawsynram in Meghalaya are among the wettest places on Earth.', 'A good monsoon helps rice crops grow.'],
          s: ['The Farmer\'s Wait', 'In a dry village, Farmer Lata looked at the sky every evening in June. The fields were cracked and the well was low. Then one afternoon, dark clouds rolled in from the southwest, the wind smelled of rain — and the first drops fell. Children danced, and Lata began to plough.'],
          a: [
            ch('The monsoon winds blow from…', '*the sea to the land in summer|the land to the sea in summer|space'),
            ch('Monsoon usually reaches Kerala around…', 'January|*early June|November'),
            tf('Most of India\'s rain falls in the monsoon season.', true),
            ch('A rain gauge measures…', 'wind|*rainfall|temperature'),
          ],
          t: ['What might happen if the monsoon is very late or very weak?', 'Why do hills get more rain than flat land nearby?'],
          k: ['Explain to someone why the monsoon matters for the food we eat.'],
          m: ['🧪 Make a Rain Gauge', 'a clear plastic bottle, scissors (adult help), ruler, tape, pebbles', 'Cut the top off a bottle and turn it upside down into the base as a funnel | Put pebbles at the bottom and tape a ruler to the side | Place it in an open area | Record rainfall every day for two weeks and make a bar chart', "An adult must cut and prepare the plastic bottle; cover any sharp edges. Place it in a safe outdoor spot and do not climb or lean over railings to position it."],
          q: [
            ch('Land heats up ___ than the sea in summer.', '*faster|slower'),
            ch('Monsoon rain is important for…', '*farming and refilling water supplies|making deserts|melting snow'),
            tf('The monsoon arrives on exactly the same day every year.', false),
          ],
          ms: ['Explains monsoon formation simply', 'Measures and records rainfall', 'Explains monsoon importance'],
        }),
      ]),
    ]),
    S('s7', 'Volcanoes, earthquakes, rock types and erosion.', [
      'Describe the Earth\'s layers', 'Explain volcanoes and earthquakes', 'Classify rocks as igneous, sedimentary or metamorphic',
    ], [
      U('restless-earth', 'Restless Earth', 'Volcanoes and earthquakes.', 'Earth\'s layers: crust, mantle, core; Volcanoes: magma, lava, eruption; Earthquakes and safety', [
        L('volcanoes-quakes', 'Volcanoes and Earthquakes', {
          o: ['Describe the layers of the Earth', 'Explain what causes volcanoes and earthquakes and how to stay safe'],
          p: ['Knows rocks and landforms'],
          e: [
            'The Earth has layers: a thin rocky crust (where we live), a thick hot mantle of rock that flows very slowly, and a very hot core of iron and nickel at the centre.',
            'The crust is broken into giant pieces called plates that move a few centimetres a year. Where plates meet, pressure builds and is released suddenly as an earthquake.',
            'At some plate edges and hot spots, melted rock (magma) rises through cracks. When it erupts at the surface it is called lava, building volcanoes. India\'s Barren Island in the Andaman Sea has an active volcano.',
          ],
          v: 'crust = Earth\'s outer layer; mantle = the hot, slowly flowing layer under the crust; magma = melted rock underground; lava = melted rock that reaches the surface; plate = a giant piece of Earth\'s crust',
          x: ['The Himalayas are still rising slowly as the Indian plate pushes into the Eurasian plate.', 'Drop, Cover, Hold On is the earthquake safety rule.'],
          s: ['The Cracked Egg Earth', 'Nova boiled an egg and tapped it gently so the shell cracked into pieces. "The shell is like the crust, cracked into plates," Nova said. "The white is like the mantle, and the yolk is the core." Pressing the shell pieces together, Nova showed how they could crumple and push up — like mountains forming.'],
          a: [
            od('Earth\'s layers from outside to centre', 'crust|mantle|outer core|inner core'),
            mt('Match', 'magma=melted rock underground|lava=melted rock at the surface|plate=giant piece of crust'),
            ch('Earthquake safety rule:', '*Drop, Cover, Hold On|Run outside immediately|Stand by a window'),
            tf('The Himalayas formed as the Indian plate pushed into Asia.', true),
          ],
          t: ['Why do so many volcanoes and earthquakes happen in a "Ring of Fire" around the Pacific?', 'Why do some people live near volcanoes despite the danger?'],
          k: ['Teach your family the earthquake safety drill and explain why each step matters.'],
          m: ['🧪 Baking Soda Volcano', 'a small bottle, clay or sand to build a cone, baking soda, vinegar, washing-up liquid, red food colouring, a tray', 'Build a volcano cone around the bottle on a tray | Put baking soda, a drop of washing-up liquid and colouring inside | Pour in vinegar and watch the "eruption" | Explain how this model differs from a real volcano', "Use small amounts on a tray with adult supervision. Do not seal the bottle, taste the mixture or point it toward anyone; wash hands after the activity."],
          q: [
            ch('We live on the Earth\'s…', '*crust|core|mantle'),
            ch('Earthquakes often happen…', '*where plates meet|only in deserts|only at night'),
            tf('Lava is magma that has reached the surface.', true),
          ],
          ms: ['Describes Earth\'s structure', 'Explains causes of earthquakes and volcanoes', 'Knows safety procedures'],
        }),
      ]),
      U('rock-cycle', 'The Rock Cycle and Erosion', 'Rocks form, break down and re-form.', 'Igneous, sedimentary, metamorphic rocks; Weathering and erosion; Fossils in sedimentary rock', [
        L('three-rocks', 'Three Families of Rocks', {
          o: ['Classify rocks as igneous, sedimentary or metamorphic', 'Explain weathering and erosion'],
          p: ['Knows Earth\'s layers'],
          e: [
            'Igneous rocks form when magma or lava cools and hardens — like granite and basalt. The Deccan Traps are vast layers of basalt from ancient lava flows.',
            'Sedimentary rocks form from layers of sand, mud or shells pressed together over long periods — like sandstone and limestone. Fossils are usually found in sedimentary rocks.',
            'Metamorphic rocks form when heat and pressure change existing rocks — limestone becomes marble (like the Makrana marble of the Taj Mahal). Weathering breaks rocks down, and erosion carries the pieces away by water, wind and ice.',
          ],
          c: [['science', 'The Deccan Traps formed from enormous volcanic eruptions about 66 million years ago, around the time of the dinosaur extinction; scientists continue to research their role.']],
          v: 'igneous = rock formed from cooled magma or lava; sedimentary = rock formed from pressed layers; metamorphic = rock changed by heat and pressure; erosion = moving broken rock by water, wind or ice',
          x: ['Red sandstone of many Mughal forts is sedimentary.', 'River canyons are carved by erosion.'],
          s: ['The Marble\'s Long Story', 'A tiny sea shell sank to the ocean floor millions of years ago. Layer upon layer covered it, pressing it into limestone. Much later, deep heat and pressure squeezed the limestone into gleaming marble. Quarried and carved, it became part of a beautiful monument visited by millions.'],
          a: [
            mt('Match the rock to its family', 'granite=igneous|sandstone=sedimentary|marble=metamorphic'),
            ch('Fossils are usually found in…', 'igneous rock|*sedimentary rock|lava'),
            ch('Marble forms from…', '*limestone changed by heat and pressure|cooled lava|sand'),
            tf('Erosion moves broken rock pieces from one place to another.', true),
          ],
          t: ['How can a rock be part of a "cycle"?', 'How long do you think it takes to make a sedimentary rock?'],
          k: ['Explain the rock cycle to someone using three rocks or pictures.'],
          m: ['🧪 Crayon Rock Cycle', 'old crayons, a grater (adult help), foil, warm water or sunlight', 'Grate crayons into shavings ("weathering") | Layer and press them in foil ("sedimentary") | Warm and press harder ("metamorphic") | Melt fully and let cool ("igneous") | Label each stage', "An adult must handle the grater and any heating. Children should not touch hot wax, foil or tools; let materials cool fully before handling."],
          q: [
            ch('Basalt forms from…', '*cooled lava|pressed sand|shells'),
            ch('Wind carrying sand away is…', 'melting|*erosion|condensation'),
            tf('Metamorphic means "changed form".', true),
          ],
          ms: ['Classifies rock types by formation', 'Explains weathering and erosion', 'Describes the rock cycle'],
        }),
      ]),
    ]),
    S('s9', 'Climate zones, atmosphere and natural hazards.', [
      'Distinguish weather from climate', 'Describe the layers and composition of the atmosphere', 'Explain cyclones and floods and preparedness',
    ], [
      U('climate', 'Weather vs Climate', 'Short-term conditions vs long-term patterns.', 'Climate zones; Factors: latitude, altitude, distance from sea; Climate graphs', [
        L('weather-climate', 'Weather Is Not Climate', {
          o: ['Distinguish weather from climate', 'Explain factors that affect climate'],
          p: ['Measures and records weather'],
          e: [
            'Weather is the condition of the atmosphere at a particular time and place — today\'s rain. Climate is the average weather pattern over many years, usually 30 or more.',
            'Climate depends on latitude (places near the equator receive more direct sunlight), altitude (higher places are cooler — think of Shimla vs Delhi), and distance from the sea (coasts have milder temperatures).',
            'India has many climates: the cold desert of Ladakh, the hot desert of Thar, the humid tropics of Kerala and the alpine Himalayas.',
          ],
          v: 'weather = atmospheric conditions at a particular time; climate = long-term average weather patterns; latitude = distance north or south of the equator; altitude = height above sea level',
          x: ['A cold day in Chennai is weather; Chennai\'s tropical climate is long-term.', 'Shimla is cooler than Delhi in summer mainly because of altitude.'],
          s: ['One Snowy Day', 'A rare cold wave brought frost to a city usually warm in winter. "So much for the climate getting warmer!" said someone. A scientist explained gently, "One cold day is weather. Climate is what the records show over decades."'],
          a: [
            mt('Weather or climate?', 'It is raining in Pune today=weather|Kerala is usually hot and humid=climate|A storm hit Odisha last night=weather, a single event'),
            ch('Why is Shimla cooler than Delhi?', 'latitude|*higher altitude|closer to the sea'),
            tf('Climate is measured over many years.', true),
            ch('Places near the coast tend to have…', '*milder temperatures|more extreme temperatures|no rain'),
          ],
          t: ['Can one very cold winter disprove global warming? Why or why not?', 'How might climate shape the food and houses of a region?'],
          k: ['Explain to someone the difference between weather and climate with an example.'],
          m: ['Climate Graph Comparison', 'climate data for two Indian cities (from an atlas), graph paper', 'Plot monthly temperature as a line and rainfall as bars for each city | Compare the two graphs | Explain the differences using latitude, altitude and sea | Present your findings'],
          q: [
            ch('Average weather over 30 years is…', 'weather|*climate|a forecast'),
            ch('Higher altitude usually means…', '*cooler temperatures|hotter temperatures'),
            tf('Today\'s temperature is a weather measurement.', true),
          ],
          ms: ['Distinguishes weather and climate', 'Explains climatic factors', 'Interprets climate graphs'],
        }),
      ]),
      U('hazards', 'Cyclones, Floods and Preparedness', 'Natural hazards and how communities reduce risk.', 'Tropical cyclones; Floods and droughts; Early warning and disaster preparedness', [
        L('cyclones', 'Cyclones and Staying Safe', {
          o: ['Explain how tropical cyclones form', 'Describe how early warnings and preparedness save lives'],
          p: ['Knows the water cycle and winds'],
          e: [
            'Tropical cyclones form over warm ocean water. Warm, moist air rises, cools and forms huge clouds, releasing energy that drives powerful spiralling winds around a calm centre called the eye.',
            'Cyclones bring strong winds, very heavy rain, and storm surges — sea water pushed onto land. India\'s east coast, along the Bay of Bengal, is often affected.',
            'Early warnings from weather services, cyclone shelters and evacuation plans have greatly reduced deaths. Odisha\'s preparedness is widely cited: deaths from severe cyclones in recent years have been far lower than in the 1999 super cyclone.',
          ],
          c: [['evidence', 'The 1999 Odisha super cyclone killed roughly 10,000 people. When Cyclone Phailin struck in 2013, large-scale evacuation of around a million people helped keep deaths to a few dozen, according to official and international reports.']],
          v: 'cyclone = a large spinning storm over warm ocean water; storm surge = sea water pushed onto land by a storm; evacuation = moving people away from danger; preparedness = being ready in advance',
          x: ['Cyclone warnings use colour-coded alerts.', 'A family emergency kit: water, torch, first aid, documents.'],
          s: ['The Village That Listened', 'When the radio warned of a severe cyclone, the village volunteers went house to house. Everyone moved to the concrete cyclone shelter on the hill, carrying water and medicines. The storm roared all night. In the morning, houses were damaged — but every single person was safe.'],
          a: [
            ch('Cyclones form over…', '*warm ocean water|deserts|glaciers'),
            ch('The calm centre of a cyclone is the…', '*eye|tail|edge'),
            tf('Early warnings have reduced cyclone deaths.', true),
            mt('Match the item to its use in an emergency kit', 'torch=light when power fails|first aid kit=treat injuries|drinking water=stay hydrated'),
          ],
          t: ['Why do cyclones weaken after moving over land?', 'What makes a community resilient to disasters?'],
          k: ['Present your family\'s emergency plan to them, explaining each part.'],
          m: ['Family Disaster Preparedness Plan', 'paper, a list of local emergency numbers', 'List hazards in your area | Plan where to go and how to communicate | Prepare (or list) an emergency kit | Practise the plan once with your family'],
          q: [
            ch('Sea water pushed onto land by a storm is a…', '*storm surge|tide pool|monsoon'),
            ch('India\'s east coast faces cyclones mainly from the…', '*Bay of Bengal|Thar Desert|Himalayas'),
            tf('Preparedness can greatly reduce loss of life.', true),
          ],
          ms: ['Explains cyclone formation', 'Describes hazards and impacts', 'Evaluates preparedness strategies'],
        }),
      ]),
    ]),
    S('s12', 'Plate tectonics evidence, climate science, and Earth systems.', [
      'Evaluate evidence for plate tectonics', 'Explain the greenhouse effect and climate change evidence', 'Analyse interactions between Earth systems',
    ], [
      U('tectonics', 'Plate Tectonics', 'From continental drift to a unifying theory.', 'Wegener\'s evidence; Sea-floor spreading; Plate boundaries: divergent, convergent, transform', [
        L('continental-drift', 'From Drift to Plate Tectonics', {
          o: ['Evaluate evidence for continental drift and plate tectonics', 'Describe types of plate boundaries'],
          p: ['Knows Earth\'s layers'],
          e: [
            'In 1912 Alfred Wegener proposed that continents had drifted apart. His evidence: the matching shapes of coastlines, identical fossils (like the reptile Mesosaurus) on continents now separated by oceans, and matching rock layers.',
            'Many scientists rejected the idea because Wegener could not explain how continents moved. In the 1950s–60s, mapping of the ocean floor revealed mid-ocean ridges and symmetrical magnetic stripes — evidence of sea-floor spreading.',
            'Plate tectonics now explains this: at divergent boundaries plates move apart; at convergent boundaries they collide (forming mountains or subduction zones); at transform boundaries they slide past each other.',
          ],
          c: [['evidence', 'India was once part of the supercontinent Gondwana. Fossils of the seed fern Glossopteris occur in India, Africa, South America, Australia and Antarctica.']],
          v: 'continental drift = the idea that continents move; sea-floor spreading = new crust forming at mid-ocean ridges; subduction = one plate sinking under another; Gondwana = an ancient southern supercontinent',
          x: ['Himalayas: convergent boundary.', 'Mid-Atlantic Ridge: divergent boundary.'],
          s: ['The Idea Ahead of Its Time', 'Alfred Wegener spent years gathering evidence that continents had moved. Critics mocked him for lacking a mechanism. He died on a Greenland expedition in 1930. Decades later, ocean-floor discoveries confirmed much of his idea — a reminder that science changes its mind when the evidence demands it.'],
          a: [
            mt('Match the boundary', 'plates move apart=divergent|plates collide=convergent|plates slide past=transform'),
            ch('Which was evidence used by Wegener?', '*matching fossils across oceans|satellite GPS|seismometers in space'),
            tf('Wegener\'s idea was quickly accepted by all scientists.', false),
            ch('India was once part of…', '*Gondwana|Laurasia only|the Moon'),
          ],
          t: ['Why did scientists reject Wegener\'s idea at first — and were they wrong to be cautious?', 'How does plate tectonics explain the location of earthquakes?'],
          k: ['Present the history of plate tectonics as a story of evidence and changing ideas.'],
          m: ['Continental Jigsaw', 'a printed world map, scissors, glue, fossil distribution information', 'Cut out the continents | Fit them together like Pangaea/Gondwana | Mark fossil and rock evidence | Write a paragraph evaluating the evidence'],
          q: [
            ch('Sea-floor spreading occurs at…', '*mid-ocean ridges|transform faults only|river deltas'),
            ch('The Himalayas formed at a ___ boundary.', 'divergent|*convergent|transform'),
            tf('Glossopteris fossils are found on several southern continents.', true),
          ],
          ms: ['Evaluates historical and modern evidence', 'Classifies plate boundaries with examples', 'Explains how scientific consensus formed'],
        }),
      ]),
      U('climate-change', 'Climate Change Science', 'The greenhouse effect and the evidence for warming.', 'Greenhouse effect; Evidence: temperature records, ice cores, sea level; Mitigation and adaptation', [
        L('greenhouse', 'The Greenhouse Effect', {
          o: ['Explain the natural and enhanced greenhouse effect', 'Evaluate evidence for human-caused climate change'],
          p: ['Understands energy transfer and atmosphere'],
          e: [
            'Sunlight warms the Earth\'s surface, which gives off infrared radiation. Greenhouse gases like carbon dioxide (CO₂), methane and water vapour absorb some of this and warm the atmosphere. Without this natural greenhouse effect, Earth would be far too cold for most life.',
            'Burning fossil fuels and cutting forests have increased CO₂ from about 280 parts per million before industrialisation to over 420 ppm today. This enhances the greenhouse effect.',
            'Evidence of warming includes global temperature records, shrinking glaciers and sea ice, rising sea levels and ice-core records. Responses include mitigation (reducing emissions) and adaptation (preparing for changes).',
          ],
          c: [['science', 'The Intergovernmental Panel on Climate Change (IPCC) concludes that human influence has unequivocally warmed the climate; global surface temperature has risen by roughly 1.1–1.2 °C since the late 1800s.']],
          v: 'greenhouse effect = warming of Earth by gases trapping infrared radiation; fossil fuel = coal, oil or gas formed from ancient organisms; mitigation = reducing the causes of climate change; adaptation = adjusting to climate change effects',
          x: ['Himalayan glaciers feeding rivers like the Ganga are retreating.', 'Solar power reduces CO₂ emissions compared with coal.'],
          s: ['The Keeling Curve', 'In 1958, scientist Charles David Keeling began measuring CO₂ at Mauna Loa in Hawai\'i. The line wiggled up and down with the seasons as plants grew and decayed — but year after year, it kept climbing. That simple, careful measurement became one of the most important graphs in science.'],
          a: [
            ch('Without any greenhouse effect, Earth would be…', '*much colder|much hotter|the same'),
            ch('Main human cause of increased CO₂:', '*burning fossil fuels|volcanoes only|breathing'),
            mt('Mitigation or adaptation?', 'switching to solar power=mitigation|building higher sea walls=adaptation|planting forests=mitigation by absorbing CO₂'),
            tf('CO₂ levels are now higher than before industrialisation.', true),
          ],
          t: ['Who should do the most to reduce emissions — countries with high past emissions or high current emissions?', 'How can individuals and governments each contribute?'],
          k: ['Give a 3-minute explanation of the greenhouse effect with a diagram, then answer questions.'],
          m: ['🧪 Mini Greenhouse Experiment', 'two jars, two thermometers, a lamp or sunlight, cling film', 'Place a thermometer in each jar | Cover one with cling film | Put both under the same light for 30 minutes | Record temperatures every 5 minutes and explain the model\'s strengths and limits', "Use a cool-running lamp or indirect sunlight, keep water away from electrical cords, and have an adult supervise the setup. Do not touch a hot bulb."],
          q: [
            ch('Which is a greenhouse gas?', '*methane|nitrogen|argon'),
            ch('Reducing emissions is called…', '*mitigation|adaptation|erosion'),
            tf('Scientists agree human activity is warming the climate.', true),
          ],
          ms: ['Explains the greenhouse effect accurately', 'Interprets climate evidence', 'Evaluates mitigation and adaptation strategies'],
        }),
      ]),
    ]),
  ],
});
