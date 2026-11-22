import { subject, S, U, L, ch, tf, od, mt, ct } from '../dsl.ts';

export default subject({
  id: 'geography',
  description: 'Where things are and why: from my room and neighbourhood to maps, compass directions, India\'s states and features, continents and oceans, latitude and longitude, climate zones, population and human geography, and geographic information systems.',
  stages: [
    S('s4', 'My home, my neighbourhood, and simple maps.', [
      'Describe places near home', 'Understand a map is a picture from above', 'Use words like near, far, left and right',
    ], [
      U('my-place', 'My Place', 'Home, street and neighbourhood.', 'My home and address; Places in my neighbourhood: shop, park, school, temple, mosque, hospital; Near and far', [
        L('neighbourhood', 'My Neighbourhood', {
          o: ['Name places in the neighbourhood', 'Describe places as near or far'],
          p: ['Can talk about places they visit'],
          e: [
            'A neighbourhood is the area around your home. It has places like shops, a park, a school, a hospital, places of worship, a bus stop and other people\'s homes.',
            'Some places are near (a short walk away), and some are far (you need a bus or car).',
            'Knowing your neighbourhood helps you find your way and feel safe.',
          ],
          v: 'neighbourhood = the area around your home; near = a short distance away; far = a long distance away; landmark = a place that is easy to recognise',
          x: ['The park is near; Grandma\'s village is far.', 'The big banyan tree is a landmark on the way to school.'],
          s: ['Zuri\'s Walk to the Park', 'Zuri walked to the park with her father. They passed the vegetable shop, the post office and a big blue gate. "That gate is a landmark," said Papa. "If you see it, the park is near." Zuri counted: vegetable shop, post office, blue gate, park! Now she knew the way.'],
          a: [
            ch('A place where we buy vegetables:', '*a shop 🏪|a park 🌳|a bus 🚌'),
            ch('A landmark is…', '*a place that is easy to recognise|a type of food|a toy'),
            tf('Some places are near and some are far.', true),
            mt('Match the place to what we do there', 'park=play|school=learn|hospital=get better when sick'),
          ],
          t: ['What is your favourite place in your neighbourhood? Why?', 'How would you tell a friend the way to your home?'],
          k: ['Tell a grown-up three places you pass on the way to school or the park.'],
          m: ['Neighbourhood Walk Map', 'paper, crayons, a walk with a grown-up', 'Go for a short walk around your area | Notice three landmarks | Draw them on paper in the order you passed them | Add your home and draw a path'],
          q: [
            ch('We go to school to…', '*learn|sleep|buy vegetables'),
            tf('A landmark helps us find our way.', true),
            ch('Grandma lives in another city. That is…', 'near|*far'),
          ],
          ms: ['Names neighbourhood places', 'Uses near/far correctly', 'Recognises landmarks'],
        }),
      ]),
      U('bird-view', 'A Bird\'s-Eye View', 'Maps show places from above.', 'Looking from above; Simple room map; Map symbols', [
        L('from-above', 'Seeing Like a Bird', {
          o: ['Understand that a map shows a place from above', 'Draw a simple map of a room'],
          p: ['Can describe a room'],
          e: [
            'A bird flying above sees the tops of things: the roof of a house, the round top of a tree, the flat top of a table. A map is like a picture drawn from above.',
            'On a map, we use simple shapes and symbols: a square for a table, a circle for a rug, a little tree shape for a tree.',
            'Maps help us find things and plan where to go.',
          ],
          v: 'map = a picture of a place seen from above; symbol = a small picture that stands for something; above = higher up, over',
          x: ['From above, a round table looks like a circle.', 'A treasure map shows where treasure is hidden.'],
          s: ['Mayur\'s Flight', 'Mayur the peacock flew up high above the village. "Everything looks different!" Houses were squares, the pond was a blue circle, the road a grey ribbon. Mayur drew what he saw and gave it to Kiko. "A map!" said Kiko. "Now I can find the pond."'],
          a: [
            ch('A map shows a place from…', '*above|inside a box|underground'),
            ch('From above, a round rug looks like a…', '*circle ⚪|triangle|star'),
            tf('Symbols on maps stand for real things.', true),
            mt('Match the thing to its map symbol', 'tree=🌳 small tree shape|pond=🔵 blue shape|house=🟥 small square'),
          ],
          t: ['What would your bed look like from above?', 'Why do maps use symbols instead of photos?'],
          k: ['Show a grown-up your room map and explain each symbol.'],
          m: ['Toy Room Map', 'toys or blocks, a sheet of paper, crayons', 'Arrange toys on a sheet of paper | Look at them from above | Draw around each one to make a map | Hide a small toy and use the map to find it'],
          q: [
            ch('A map is like a picture seen by a…', '*bird flying above|fish underwater|worm underground'),
            tf('Maps help us find places.', true),
            ch('A small picture on a map is a…', '*symbol|song|clock'),
          ],
          ms: ['Explains bird\'s-eye view', 'Draws a simple map', 'Uses symbols'],
        }),
      ]),
    ]),
    S('s5', 'Directions, map keys and the globe.', [
      'Use left, right, forward and backward', 'Use a map key', 'Know the Earth is round and has land and water',
    ], [
      U('directions', 'Which Way?', 'Giving and following directions.', 'Left and right; Forward and backward; Turning; Simple routes', [
        L('route', 'Follow the Route', {
          o: ['Give and follow directions using left, right, forward and turn', 'Describe a simple route'],
          p: ['Knows left and right'],
          e: [
            'Directions help us move from one place to another. Forward means go straight ahead. Turn left or turn right changes which way we face.',
            'A route is the path we take. We can describe it in steps: "Go forward 5 steps, turn left, go forward 3 steps."',
            'Landmarks make directions easier: "Turn right at the big tree."',
          ],
          v: 'direction = the way something faces or moves; route = the path from one place to another; turn = change the way you face; forward = straight ahead',
          x: ['"Walk to the door, turn right, the kitchen is ahead."', '"Turn left at the temple."'],
          s: ['Bolt\'s Treasure Hunt', 'Kiko hid a ball and gave Bolt directions: "Forward 4 steps. Turn right. Forward 2 steps. Look under the chair." Bolt followed each step — beep, beep, turn, beep — and found the ball! "Clear directions are the best treasure map," Bolt said.'],
          a: [
            od('Follow the route', 'go forward 3 steps|turn left|go forward 2 steps|find the toy'),
            ch('"Straight ahead" means…', '*forward|backward|turn around'),
            tf('Landmarks can make directions easier.', true),
            ch('If you turn right twice, you face…', 'the same way|*the opposite way|upwards'),
          ],
          t: ['Why do people sometimes get lost?', 'How would you give directions to someone who can\'t see?'],
          k: ['Give a grown-up directions to find something hidden in your home.'],
          m: ['Treasure Hunt Directions', 'a small "treasure", paper and pencil', 'Hide a treasure in a room | Write or draw step-by-step directions with arrows | Ask a family member to follow them | Swap roles'],
          q: [
            ch('A route is…', '*the path from one place to another|a kind of fruit|a song'),
            tf('Turning changes which way you face.', true),
            ch('"Go back" means…', 'forward|*backward|left'),
          ],
          ms: ['Gives clear directions', 'Follows multi-step routes', 'Uses landmarks'],
        }),
      ]),
      U('globe', 'Our Round Earth', 'A globe is a model of the Earth.', 'Globe vs map; Land and water; Blue for water, other colours for land', [
        L('globe-model', 'Spinning the Globe', {
          o: ['Explain that a globe is a model of the round Earth', 'Identify land and water on a globe'],
          p: ['Knows maps show places from above'],
          e: [
            'The Earth is round like a ball. A globe is a small model of the Earth that we can hold and spin.',
            'On a globe, blue shows water — oceans and seas. Green, brown and yellow show land. There is much more water than land on Earth!',
            'A map is flat, but a globe is round, so a globe shows the true shape of the Earth best.',
          ],
          v: 'globe = a round model of the Earth; ocean = a very large area of salty water; land = ground that is not covered by water; model = a small copy of something',
          x: ['India is shaped a bit like a triangle pointing down into the ocean.', 'The big blue areas are oceans.'],
          s: ['The Blue Planet', 'Nova showed Kiko a photo of Earth taken from space. "It\'s mostly blue!" said Kiko. "That\'s the ocean," said Nova. She spun a globe and stopped it with her finger. "And this is India — our home, on this big blue ball."'],
          a: [
            ch('A globe is shaped like a…', '*ball|box|triangle'),
            ch('On a globe, blue usually shows…', '*water|land|mountains only'),
            tf('Earth has more water than land.', true),
            ch('Which shows Earth\'s true shape best?', '*a globe|a flat map'),
          ],
          t: ['Why do you think a flat map can\'t show Earth perfectly?', 'If you dug straight through the Earth from India, where might you come out?'],
          k: ['Find India on a globe and show a grown-up.'],
          m: ['Balloon Globe', 'a blue balloon, green paper, glue, marker', 'Blow up a blue balloon (oceans) | Cut out rough continent shapes in green paper | Stick them on | Mark India with a star'],
          q: [
            ch('Large areas of salty water are…', '*oceans|deserts|forests'),
            tf('A globe is a model of the Earth.', true),
            ch('India is on the…', '*land|ocean|Moon'),
          ],
          ms: ['Explains globe as Earth model', 'Distinguishes land and water', 'Locates India on a globe'],
        }),
      ]),
    ]),
    S('s6', 'Compass directions, map scale and India on the map.', [
      'Use north, south, east and west', 'Understand simple map scale', 'Locate India\'s states and neighbours',
    ], [
      U('compass', 'The Compass', 'North, south, east and west.', 'Cardinal directions; Sunrise in the east; Using a compass; Compass rose on maps', [
        L('nsew', 'Never Eat Soggy Wheat', {
          o: ['Name the four cardinal directions', 'Use a compass rose to describe locations on a map'],
          p: ['Gives directions with left and right'],
          e: [
            'There are four main (cardinal) directions: north, east, south and west. A memory trick going clockwise: "Never Eat Soggy Wheat" (N, E, S, W).',
            'The Sun rises in the east and sets in the west. A magnetic compass needle points towards magnetic north.',
            'Maps have a compass rose showing directions. Usually north is at the top. We can say "The Himalayas are in the north of India; Kanyakumari is in the south."',
          ],
          v: 'north = the direction a compass points; compass = a tool showing directions; compass rose = a symbol on a map showing directions; cardinal directions = north, east, south, west',
          x: ['Kashmir is in the north of India.', 'The Bay of Bengal is east of India\'s peninsula.'],
          s: ['The Sunrise Guide', 'On a camping trip, Kiko\'s family lost their way. "The Sun rose over that hill," said Mama, "so that\'s east. Our camp is north." They turned so the sunrise was on their right and walked straight ahead. Soon they saw their tent!'],
          a: [
            od('Clockwise from north', 'north|east|south|west'),
            ch('The Sun rises in the…', '*east|west|north'),
            ch('On most maps, north is at the…', '*top|bottom|left'),
            tf('A compass needle points north.', true),
          ],
          t: ['How could you find directions without a compass?', 'Why do maps usually put north at the top?'],
          k: ['Stand outside and point to north, south, east and west, explaining how you know.'],
          m: ['🧪 Make a Compass', 'a needle, a magnet, a cork slice or leaf, a bowl of water', 'Stroke a needle with a magnet 30 times in one direction (adult help) | Float it on a cork in water | Watch it turn to point north–south | Check with the sunrise or a real compass'],
          q: [
            ch('The Sun sets in the…', 'east|*west|south'),
            ch('Opposite of north:', '*south|east|west'),
            tf('A compass rose shows directions on a map.', true),
          ],
          ms: ['Names and uses cardinal directions', 'Relates directions to the Sun', 'Reads a compass rose'],
        }),
      ]),
      U('india-map', 'India on the Map', 'States, capitals and neighbours.', 'States and union territories; Capital: New Delhi; Neighbouring countries; Using an atlas', [
        L('states-capitals', 'States and Neighbours', {
          o: ['Locate several Indian states and their capitals', 'Name India\'s neighbouring countries'],
          p: ['Uses compass directions'],
          e: [
            'India is divided into 28 states and 8 union territories. Each state has a capital: Maharashtra — Mumbai, Tamil Nadu — Chennai, West Bengal — Kolkata, Karnataka — Bengaluru. New Delhi is India\'s capital.',
            'India\'s neighbours include Pakistan to the west, China and Nepal and Bhutan to the north, Bangladesh and Myanmar to the east, and Sri Lanka and the Maldives across the sea to the south.',
            'An atlas is a book of maps. Using its index and grid helps us find places.',
          ],
          c: [['evidence', 'As of 2019 reorganisation, India has 28 states and 8 union territories; administrative divisions can change by law.']],
          v: 'state = a part of a country with its own government; capital = the city where a government is based; neighbour country = a country that shares a border; atlas = a book of maps',
          x: ['Ivaan might live in Maharashtra, whose capital is Mumbai.', 'Sri Lanka is an island nation south of India.'],
          s: ['Zuri\'s Postcard Collection', 'Zuri\'s pen-friends sent postcards from across India: a lighthouse from Chennai, a tram from Kolkata, the Gateway of India from Mumbai, and Dal Lake from Srinagar. She stuck each one on a big map of India and drew a line to her home. "My map is full of friends!" she said.'],
          a: [
            mt('Match the state to its capital', 'Maharashtra=Mumbai|Tamil Nadu=Chennai|West Bengal=Kolkata|Karnataka=Bengaluru'),
            ch('India\'s capital is…', '*New Delhi|Mumbai|Kolkata'),
            ch('Which country is an island to the south of India?', '*Sri Lanka|Nepal|Bhutan'),
            ch('How many states does India have?', '8|*28|100', 'India has 28 states and 8 union territories.'),
          ],
          t: ['Why do you think countries are divided into states?', 'What can you learn about a state from a map?'],
          k: ['Point to your state on a map of India and name its capital and two neighbouring states.'],
          m: ['India Puzzle Map', 'a printed outline map of India with states, card, scissors, glue', 'Stick the map on card | Colour and label states | Cut along state borders to make a puzzle | Put it together, naming states and capitals'],
          q: [
            ch('A book of maps is an…', '*atlas|album|almanac only'),
            ch('Nepal is to the ___ of India.', '*north|south|west'),
            tf('Each state has a capital.', true),
          ],
          ms: ['Locates states and capitals', 'Names neighbouring countries', 'Uses an atlas'],
        }),
      ]),
    ]),
    S('s7', 'Continents, oceans, physical features and the world map.', [
      'Name and locate continents and oceans', 'Describe major world physical features', 'Use map scale to measure distances',
    ], [
      U('continents', 'Continents and Oceans', 'The world\'s big land masses and waters.', 'Seven continents; Five oceans; Largest, smallest; Hemispheres', [
        L('seven-five', 'Seven Continents, Five Oceans', {
          o: ['Name and locate the seven continents and five oceans', 'Describe the hemispheres'],
          p: ['Knows land and water on a globe'],
          e: [
            'Earth\'s land is divided into seven continents: Asia (the largest, where India is), Africa, North America, South America, Antarctica, Europe and Australia (Oceania).',
            'The five oceans are the Pacific (the largest), Atlantic, Indian, Southern and Arctic.',
            'The equator divides Earth into the Northern and Southern Hemispheres. India is in the Northern Hemisphere. Australia is in the Southern Hemisphere, so its seasons are opposite to ours.',
          ],
          v: 'continent = one of the seven very large land masses; ocean = one of the five large bodies of salt water; equator = an imaginary line around the middle of Earth; hemisphere = half of the Earth',
          x: ['Antarctica is covered in ice and has no permanent residents.', 'The Indian Ocean is named after India.'],
          s: ['Around the World in a Paper Plane', 'Bolt designed a pretend round-the-world trip: from Asia (India) across the Indian Ocean to Africa, over the Atlantic to South America, up to North America, across the Pacific — waving at Australia — then over Europe and home. "And I\'ll send a postcard from Antarctica," Bolt beeped, "to the penguins."'],
          a: [
            ct('How many continents are there?', 7),
            ch('The largest ocean is the…', '*Pacific|Atlantic|Arctic'),
            ch('India is in…', '*Asia|Africa|Europe'),
            tf('Australia\'s seasons are opposite to India\'s.', true),
          ],
          t: ['Why is Antarctica so cold and so empty of people?', 'Why might the Indian Ocean have been named after India?'],
          k: ['Point to all seven continents on a world map and name them.'],
          m: ['Continent Collage', 'a world map outline, magazines or drawings, glue', 'Colour each continent differently | Add pictures of an animal, landmark or food from each | Label the oceans | Present your map'],
          q: [
            ch('The largest continent is…', '*Asia|Australia|Europe'),
            ct('How many oceans are there?', 5),
            ch('The equator divides Earth into…', '*hemispheres|states|continents'),
          ],
          ms: ['Names and locates continents and oceans', 'Explains hemispheres', 'Describes features of each continent'],
        }),
      ]),
      U('scale', 'Map Scale and Distance', 'How maps shrink the real world.', 'Scale bars; Measuring distances; Large and small scale maps', [
        L('map-scale', 'How Far Is It?', {
          o: ['Use a scale bar to calculate real distances', 'Compare large-scale and small-scale maps'],
          p: ['Measures in centimetres'],
          e: [
            'Maps are much smaller than the real world. A scale tells us how much smaller: "1 cm = 10 km" means every centimetre on the map stands for 10 kilometres in real life.',
            'To find a distance: measure on the map with a ruler, then multiply by the scale. 4 cm on a 1 cm = 10 km map is 40 km.',
            'A large-scale map shows a small area in lots of detail (a neighbourhood). A small-scale map shows a large area with less detail (the whole world).',
          ],
          v: 'scale = how map distance relates to real distance; scale bar = a line on a map showing distances; large-scale map = shows a small area in detail; small-scale map = shows a large area with less detail',
          x: ['A city map shows individual streets.', 'A world map shows only big cities.'],
          s: ['The Trip Planner', 'Zuri\'s family planned a road trip. On the map, the next town was 6 cm away. The scale said 1 cm = 25 km. "That\'s 150 km," Zuri calculated. "At 50 km an hour, about 3 hours." Her father was impressed. "You\'re our navigator now!"'],
          a: [
            ch('Scale 1 cm = 10 km. 5 cm on the map is…', '15 km|*50 km|5 km'),
            ch('A map of your neighbourhood is…', '*large-scale|small-scale'),
            tf('A scale shows how map distance relates to real distance.', true),
            ch('Scale 1 cm = 100 km. 3.5 cm is…', '35 km|*350 km|3,500 km'),
          ],
          t: ['Why does a straight-line distance on a map differ from the road distance?', 'Why can\'t one map show everything in detail?'],
          k: ['Measure the distance between two cities on a map and explain your calculation.'],
          m: ['Scale Drawing of My Room', 'squared paper, tape measure, ruler', 'Measure your room in metres | Choose a scale (1 cm = 50 cm) | Draw the room and furniture to scale | Calculate real distances from your drawing'],
          q: [
            ch('Scale 1 cm = 5 km, distance 8 cm:', '13 km|*40 km|85 km'),
            tf('A world map is a small-scale map.', true),
            ch('A scale bar helps measure…', '*real distances|temperature|time'),
          ],
          ms: ['Uses scale to calculate distances', 'Distinguishes map scales', 'Creates scale drawings'],
        }),
      ]),
    ]),
    S('s9', 'Latitude, longitude, time zones and climate zones.', [
      'Locate places using latitude and longitude', 'Explain time zones', 'Describe world climate zones',
    ], [
      U('lat-long', 'Latitude and Longitude', 'A global address system.', 'Lines of latitude and longitude; Equator and Prime Meridian; Coordinates; Tropics of Cancer and Capricorn', [
        L('coordinates', 'Earth\'s Grid', {
          o: ['Read latitude and longitude coordinates', 'Locate places using coordinates'],
          p: ['Uses coordinates on a grid'],
          e: [
            'Latitude lines run east–west around the Earth and measure how far north or south a place is from the equator (0°), up to 90° at the poles.',
            'Longitude lines run from pole to pole and measure how far east or west a place is from the Prime Meridian (0°) through Greenwich, London, up to 180°.',
            'Together they give coordinates. New Delhi is at about 28.6° N, 77.2° E. The Tropic of Cancer (about 23.4° N) passes through the middle of India.',
          ],
          v: 'latitude = distance north or south of the equator in degrees; longitude = distance east or west of the Prime Meridian in degrees; Prime Meridian = 0° longitude; coordinates = a pair of numbers giving a location',
          x: ['Mumbai: about 19° N, 73° E.', 'GPS on phones uses latitude and longitude.'],
          s: ['The Ship\'s Navigator', 'Centuries ago, sailors could find latitude by measuring the height of the Sun or Pole Star, but longitude was much harder. In the 1700s, John Harrison built accurate sea clocks; by comparing local time with home time, sailors could finally work out longitude and stop getting lost.'],
          a: [
            ch('Latitude measures distance from the…', '*equator|Prime Meridian|Moon'),
            ch('The Prime Meridian is…', '*0° longitude|0° latitude|the North Pole'),
            tf('The Tropic of Cancer passes through India.', true),
            mt('Match', 'equator=0° latitude|North Pole=90° N|Prime Meridian=0° longitude'),
          ],
          t: ['Why was longitude harder to find than latitude at sea?', 'How does your phone know where you are?'],
          k: ['Find the coordinates of your city and explain what they mean.'],
          m: ['Coordinate Treasure Hunt', 'a world map with a grid, a list of coordinates', 'Write coordinates for 8 famous places | Swap with a partner to find them | Check answers | Find the coordinates of your own home city'],
          q: [
            ch('Longitude lines run…', '*from pole to pole|parallel to the equator|nowhere'),
            ch('New Delhi is in the…', '*Northern and Eastern Hemispheres|Southern Hemisphere|Western Hemisphere'),
            tf('Coordinates use latitude and longitude.', true),
          ],
          ms: ['Reads and uses coordinates', 'Explains latitude and longitude', 'Locates key lines and places'],
        }),
      ]),
      U('time-climate', 'Time Zones and Climate Zones', 'Why time and climate differ around the world.', 'Time zones and IST; International Date Line; Climate zones: tropical, dry, temperate, polar, highland', [
        L('time-zones', 'What Time Is It There?', {
          o: ['Explain why time zones exist', 'Calculate times in other zones'],
          p: ['Knows Earth rotates'],
          e: [
            'Because the Earth rotates, it\'s day in some places and night in others. To keep noon roughly when the Sun is highest, the world is divided into time zones, usually one hour apart (about every 15° of longitude).',
            'India uses one time zone: Indian Standard Time (IST), which is 5 hours 30 minutes ahead of Coordinated Universal Time (UTC+5:30). When it\'s 12:00 noon in India, it\'s 6:30 am in London (UTC) in winter.',
            'Climate zones depend on latitude and other factors: tropical near the equator, dry deserts, temperate in mid-latitudes, polar near the poles, and highland in mountains.',
          ],
          c: [['evidence', 'IST is based on the 82.5° E meridian near Mirzapur, Uttar Pradesh. Some people propose two time zones for India because the Sun rises much earlier in the northeast than in the west.']],
          v: 'time zone = a region using the same standard time; IST = Indian Standard Time, UTC+5:30; UTC = Coordinated Universal Time; International Date Line = where the calendar date changes, near 180°',
          x: ['A video call to a cousin in the USA must account for time differences.', 'The sun rises over an hour earlier in Arunachal Pradesh than in Gujarat.'],
          s: ['The Midnight Birthday Call', 'Riya wanted to wish her uncle in California a happy birthday at exactly midnight his time. In summer, California was 12 and a half hours behind India. She did the maths and set an alarm for 12:30 pm the next day in India. Her uncle laughed: "Right on time!"'],
          a: [
            ch('IST is…', '*UTC+5:30|UTC+3|UTC'),
            ch('Time zones exist because…', '*the Earth rotates and places see the Sun at different times|countries like different times|clocks are broken'),
            mt('Match the climate zone', 'near the equator=tropical|near the poles=polar|high mountains=highland'),
            tf('India uses one standard time zone.', true),
          ],
          t: ['Should India have two time zones? What are the arguments?', 'What problems do time zones cause for international teams?'],
          k: ['Calculate the time in three world cities when it is 9 am in India and explain your working.'],
          m: ['World Clock Display', 'paper plates as clocks, a world time zone map', 'Make 5 clocks for different cities | Set them for a chosen IST time | Mark day or night for each | Explain the differences using a globe and torch'],
          q: [
            ch('Time zones are roughly every…', '*15° of longitude|1° of latitude|1,000 km of latitude'),
            ch('Deserts are in the ___ climate zone.', '*dry|polar|tropical rainforest'),
            tf('When it\'s noon in India, it\'s morning in London.', true),
          ],
          ms: ['Explains time zones', 'Calculates time differences', 'Describes climate zones'],
        }),
      ]),
    ]),
    S('s12', 'Human geography, urbanisation, and geospatial technology.', [
      'Analyse population distribution and migration', 'Evaluate urbanisation and its challenges', 'Use GIS and remote sensing concepts',
    ], [
      U('population', 'Population and Migration', 'Where people live and why they move.', 'Population density; Push and pull factors; Urbanisation in India; Demographic transition', [
        L('push-pull', 'Push and Pull', {
          o: ['Explain population distribution and density', 'Analyse migration using push and pull factors'],
          p: ['Uses maps and data'],
          e: [
            'Population density is the number of people per square kilometre. Some areas, like the Gangetic Plain, are very densely populated because of fertile land and water; others, like the Thar Desert or high Himalayas, are sparse.',
            'People migrate for many reasons. Push factors make people leave (lack of jobs, drought, conflict); pull factors attract them (jobs, education, safety, family).',
            'India is urbanising: a growing share of people live in cities. Cities offer opportunities but face challenges of housing, transport, water and pollution.',
          ],
          c: [['evidence', 'Census data show India\'s urban population share rising from about 17% in 1951 to about 31% in 2011.']],
          v: 'population density = people per square kilometre; migration = moving from one place to another to live; push factor = a reason to leave a place; pull factor = a reason to move to a place; urbanisation = the growth of cities',
          x: ['A farmer moving to a city after crop failure (push) for construction work (pull).', 'Students moving to cities for universities.'],
          s: ['Two Brothers', 'Two brothers grew up in a village in Bihar. When the monsoon failed twice, one moved to Mumbai for construction work and sent money home. The other stayed and started a small dairy with a loan. Their lives showed both sides of migration — opportunity, hardship and connection between village and city.'],
          a: [
            mt('Push or pull?', 'drought at home=push factor|jobs in a city=pull factor|good universities=pull factor, education'),
            ch('Population density means…', '*people per square kilometre|total land area|number of cities'),
            tf('India\'s urban population share has grown over time.', true),
            ch('Why is the Gangetic Plain densely populated?', '*fertile land and water|deserts|ice'),
          ],
          t: ['What are the benefits and costs of migration for families and villages?', 'How should cities plan for migrants?'],
          k: ['Interview a family member about any migration in your family history and present it.'],
          m: ['Family Migration Map and Data Study', 'a map, census data summaries, interviews', 'Map where your family has lived across generations | Identify push and pull factors | Compare with national migration patterns | Write a short report'],
          q: [
            ch('Conflict forcing people to leave is a…', '*push factor|pull factor|climate zone'),
            tf('Urbanisation means growth of cities.', true),
            ch('A sparsely populated region in India:', '*the Thar Desert|Kolkata|the Gangetic Plain'),
          ],
          ms: ['Explains population distribution', 'Analyses migration factors', 'Interprets census data'],
        }),
      ]),
      U('gis', 'Geospatial Technology', 'Maps, satellites and data.', 'GPS; Remote sensing; GIS layers; Applications: disaster response, planning', [
        L('gis-layers', 'Layers of Information', {
          o: ['Explain GPS, remote sensing and GIS', 'Describe uses of geospatial technology'],
          p: ['Reads coordinates and maps'],
          e: [
            'GPS uses signals from satellites to find a receiver\'s location. India has its own regional system, NavIC.',
            'Remote sensing means gathering information about Earth from a distance, usually satellites. Images can show forest cover, floods, crop health and city growth. ISRO\'s satellites provide such data, and platforms like Bhuvan share it.',
            'A Geographic Information System (GIS) combines layers of data on a map — roads, rivers, population, schools — to answer questions: Where should a new hospital go? Which villages are at flood risk?',
          ],
          c: [['evidence', 'NavIC (Navigation with Indian Constellation) is ISRO\'s regional satellite navigation system; Bhuvan is ISRO\'s geoportal.']],
          v: 'GPS = satellite system for finding location; remote sensing = collecting data about Earth from a distance; GIS = system combining layers of geographic data; layer = one set of mapped information',
          x: ['Flood maps from satellite images guiding rescue teams.', 'Delivery apps using GPS to track riders.'],
          s: ['Mapping the Flood', 'During a severe flood, satellite images showed which areas were underwater. GIS analysts overlaid layers of population, roads and hospitals. Rescue teams knew which villages to reach first and which roads were still usable. "Maps," said one officer, "saved lives today."'],
          a: [
            mt('Match the technology', 'GPS=finds location using satellites|remote sensing=observes Earth from a distance|GIS=combines layers of map data'),
            ch('India\'s regional navigation system is…', '*NavIC|Chandrayaan|Aadhaar'),
            tf('GIS can help decide where to build a hospital.', true),
            ch('Satellite images can show…', '*forest cover and floods|people\'s thoughts|tomorrow\'s lottery'),
          ],
          t: ['What privacy concerns come with location data?', 'How could GIS help your city solve a problem?'],
          k: ['Present a GIS-style analysis of a local problem using layered maps.'],
          m: ['Paper GIS Project', 'tracing paper or transparent sheets, a base map of your area, pens', 'Draw a base map | On separate transparent sheets, map layers (schools, parks, bus stops, population) | Overlay layers to find gaps | Propose where a new facility should go and why'],
          q: [
            ch('Collecting data about Earth from satellites is…', '*remote sensing|GPS only|surveying by foot'),
            tf('GIS uses layers of information.', true),
            ch('Location data raises concerns about…', '*privacy|gravity|tides'),
          ],
          ms: ['Explains geospatial technologies', 'Applies layering to analysis', 'Considers ethical issues'],
        }),
      ]),
    ]),
  ],
});
