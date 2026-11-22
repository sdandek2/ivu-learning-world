import { subject, S, U, L, ch, tf, od, mt, ct } from '../dsl.ts';

export default subject({
  id: 'space',
  description: 'Astronomy from day and night and the Moon\'s shapes to the solar system, stars, space exploration (including India\'s missions), and the scale and history of the universe. Distinguishes astronomy (science) from astrology and from cultural sky traditions.',
  stages: [
    S('s4', 'Sun, Moon and stars; day and night.', [
      'Know the Sun gives us light and warmth in the day', 'Know we see the Moon and stars at night', 'Notice the Moon changes shape',
    ], [
      U('day-night', 'Day and Night', 'The sky changes from day to night.', 'Daytime: Sun, light, warmth; Night-time: Moon, stars, dark; Sun safety: never look at the Sun', [
        L('sun-moon-stars', 'Sun, Moon and Stars', {
          o: ['Describe what we see in the sky in the day and at night', 'Know never to look directly at the Sun'],
          p: ['Knows morning and night'],
          e: [
            'In the daytime, the Sun shines in the sky. It gives us light and warmth. The Sun is a star — a giant ball of hot glowing gas — the closest star to us.',
            'At night, our side of the Earth turns away from the Sun, so it gets dark. Then we can often see the Moon and many other stars twinkling far away.',
            'Never look straight at the Sun, even with sunglasses — it can hurt your eyes.',
          ],
          v: 'Sun = the star that gives us light and warmth; Moon = the big round object we often see at night; star = a giant ball of glowing gas, very far away; day = when our side of Earth faces the Sun',
          x: ['☀️ Day: we play outside in sunlight.', '🌙⭐ Night: we see the Moon and stars.'],
          s: ['Olu and Kiko\'s Sky Shift', 'Kiko liked the day — sunshine on the mountain. Olu the owl liked the night — the Moon and twinkling stars. "The sky has two shifts," laughed Olu, "a day shift and a night shift. And we get to enjoy both!"'],
          a: [
            ch('What gives us light in the day?', '*☀️ the Sun|🌙 the Moon|⭐ other stars'),
            ch('When do we usually see stars?', 'midday|*night'),
            tf('It is safe to look straight at the Sun.', false),
            mt('Day or night?', '☀️ Sun high in the sky=day|🌙 Moon and stars=night|🦉 owls awake and hunting=night-time'),
          ],
          t: ['Where does the Sun go at night?', 'Are there stars in the sky in the daytime too?'],
          k: ['Tell a grown-up three things you see in the day sky and three in the night sky.'],
          m: ['Day and Night Picture', 'paper folded in half, crayons, star stickers', 'On one half draw a daytime sky and what you do in the day | On the other half draw the night sky | Add star stickers | Explain your picture to someone'],
          q: [
            ch('The Sun is a…', '*star|planet|cloud'),
            ch('It gets dark at night because…', '*our side of Earth turns away from the Sun|the Sun switches off|clouds cover the sky'),
            tf('We should protect our eyes from the Sun.', true),
          ],
          ms: ['Describes day and night skies', 'States the Sun is a star', 'Knows Sun safety'],
        }),
      ]),
      U('moon-shapes', 'The Changing Moon', 'The Moon looks different on different nights.', 'Full moon, half moon, crescent; Moon watching; Festivals and the Moon', [
        L('moon-phases-simple', 'Why Does the Moon Change Shape?', {
          o: ['Name full moon, half moon and crescent moon', 'Notice the Moon\'s shape changes over a month'],
          p: ['Knows we see the Moon at night'],
          e: [
            'The Moon looks like a different shape on different nights. Sometimes it is a full, round circle (full moon). Sometimes it is half. Sometimes it is a thin curve called a crescent.',
            'The Moon doesn\'t really change shape. It is always a round ball. The Sun lights up half of it, and we see different amounts of the lit half as the Moon travels around the Earth.',
            'It takes about a month for the Moon to go from new moon to full moon and back again. Many festivals, like Eid and Diwali, are timed by the Moon.',
          ],
          v: 'full moon = when we see the whole round Moon lit up; crescent = a thin curved shape of the Moon; new moon = when we can hardly see the Moon; phase = the shape of the Moon we see',
          x: ['Diwali falls on the new moon night (amavasya) of the month of Kartika in many calendars.', 'Eid al-Fitr begins when the new crescent moon is sighted.'],
          s: ['The Moon Plays Peek-a-Boo', 'Rangi noticed the Moon getting bigger each night: a thin smile, then a half, then a big round face. Then smaller again. "The Moon is playing peek-a-boo!" Rangi said. Olu explained: "It\'s always round. We just see more or less of its sunny side."'],
          a: [
            ch('A thin curved Moon is a…', 'full moon|*crescent|half moon'),
            ch('The Moon is really…', '*always a round ball|flat like a plate|a different shape each night'),
            ch('About how long from full moon to the next full moon?', 'a day|a week|*a month'),
            tf('Some festivals are timed by the Moon.', true),
          ],
          t: ['Why do you think people long ago used the Moon as a calendar?', 'Can you sometimes see the Moon in the daytime?'],
          k: ['Look at the Moon tonight and tell someone its shape the next day.'],
          m: ['Moon Diary', 'a notebook, a pencil, a grown-up to help on clear nights', 'Look at the Moon on clear nights for two weeks | Draw its shape each time with the date | Notice whether it gets bigger or smaller | Share your diary'],
          q: [
            ch('A whole round bright Moon is a…', '*full moon|crescent|new moon'),
            tf('The Moon makes its own light.', false, 'The Moon reflects sunlight.'),
            ch('The shape of the Moon we see is called its…', '*phase|orbit|colour'),
          ],
          ms: ['Names main Moon phases', 'Explains that the Moon is always round', 'Records Moon observations'],
        }),
      ]),
    ]),
    S('s5', 'The Earth spins and orbits; planets of our solar system.', [
      'Explain that Earth\'s spin causes day and night', 'Name the eight planets in order', 'Know the Earth orbits the Sun',
    ], [
      U('spinning-earth', 'The Spinning Earth', 'Earth spins once a day and travels around the Sun once a year.', 'Rotation: day and night; Orbit: one year; The Sun appears to move across the sky', [
        L('earth-spins', 'Why Do We Have Day and Night?', {
          o: ['Explain day and night using Earth\'s rotation', 'Know Earth orbits the Sun once a year'],
          p: ['Knows the Sun lights the day'],
          e: [
            'The Earth is a giant ball that spins like a top. One complete spin takes about 24 hours — one day.',
            'The side facing the Sun has daytime; the side facing away has night. The Sun seems to move across the sky, but really it is the Earth turning.',
            'While spinning, the Earth also travels around the Sun in a big path called an orbit. One full orbit takes about 365 days — one year.',
          ],
          v: 'rotate = spin around; orbit = the path one object takes around another; axis = the imaginary line Earth spins around; year = the time Earth takes to orbit the Sun',
          x: ['When it is day in India, it is night in parts of the USA.', 'A birthday comes once every orbit of the Sun.'],
          s: ['The Torch and the Ball', 'Bolt held a torch (the Sun) while Rangi slowly turned a ball with a sticker on it (India). When the sticker faced the torch, Rangi said "Good morning!" As the ball turned away, "Good night!" Then Rangi walked the ball all the way around Bolt. "That\'s a year," Bolt beeped.'],
          a: [
            ch('Day and night happen because…', '*Earth spins|the Sun goes around Earth every day|clouds block the Sun'),
            ch('About how long does one spin of Earth take?', '1 hour|*about 24 hours|a whole year', 'One full spin is about 24 hours — one day.'),
            ch('Earth travels around the Sun once every…', 'day|month|*year'),
            tf('When it is day in India, it is night somewhere else on Earth.', true),
          ],
          t: ['Why do you think people long ago believed the Sun moved around the Earth?', 'If Earth spun faster, what would happen to the length of a day?'],
          k: ['Use a ball and torch to show someone why we have day and night.'],
          m: ['🧪 Torch and Globe Model', 'a torch, a ball or orange, a sticker, a darkened room', 'Put a sticker on the ball for your home | Shine the torch on it in a dark room | Slowly turn the ball and say when your home has day and night | Walk it around the torch to show a year'],
          q: [
            ch('Earth\'s spin is called…', '*rotation|orbit|eclipse'),
            ch('Earth\'s path around the Sun is its…', 'axis|*orbit|shadow'),
            tf('The Sun really moves across our sky each day.', false, 'It appears to move because the Earth rotates.'),
          ],
          ms: ['Explains day/night by rotation', 'Distinguishes rotation and orbit', 'Uses models to demonstrate'],
        }),
      ]),
      U('planets', 'Our Solar System', 'Eight planets travel around the Sun.', 'The eight planets in order; Rocky and gas planets; Fun facts', [
        L('eight-planets', 'Meet the Planets', {
          o: ['Name the eight planets in order from the Sun', 'Describe one feature of each planet'],
          p: ['Knows Earth orbits the Sun'],
          e: [
            'Eight planets orbit our Sun. In order: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. A memory trick: "My Very Easy Method Just Speeds Up Naming."',
            'The first four are small and rocky. Mars is red because of rusty dust. Venus is the hottest planet because its thick clouds trap heat.',
            'The outer four are giants made mostly of gas or ice. Jupiter is the biggest; Saturn has beautiful rings. Pluto used to be called a planet but is now classed as a dwarf planet.',
          ],
          c: [['science', 'In 2006 the International Astronomical Union defined "planet" in a way that reclassified Pluto as a dwarf planet.']],
          v: 'planet = a large body that orbits a star; solar system = the Sun and everything that orbits it; rocky planet = a planet with a solid surface; gas giant = a huge planet made mostly of gas',
          x: ['Jupiter is so big that more than 1,000 Earths could fit inside it.', 'Saturn\'s rings are made of ice and rock pieces.'],
          s: ['The Planet Race', 'The planets had a race around the Sun. Mercury, the closest, zoomed round in just 88 days! Earth took 365 days. Far-away Neptune plodded on its huge path — it takes about 165 Earth years for one lap. "It\'s not about speed," said Neptune, "my track is just very long!"'],
          a: [
            od('Put the first four planets in order from the Sun', 'Mercury|Venus|Earth|Mars'),
            ch('Which is the biggest planet?', 'Earth|*Jupiter|Mars'),
            ch('Which planet has famous rings?', '*Saturn|Mercury|Mars'),
            ct('How many planets orbit our Sun?', 8),
          ],
          t: ['Why do you think Venus is hotter than Mercury, even though Mercury is closer to the Sun?', 'Would you like to visit another planet? What would you need?'],
          k: ['Say the planets in order using the memory sentence and tell one fact about your favourite.'],
          m: ['Solar System Mobile', 'paper or balls of different sizes, paint, string, a hanger or stick', 'Make eight planets in roughly correct relative sizes | Paint them | Hang them in order from the Sun | Add a fact card for each planet'],
          q: [
            ch('The red planet is…', 'Venus|*Mars|Neptune'),
            od('Order from the Sun', 'Jupiter|Saturn|Uranus|Neptune'),
            tf('Pluto is now called a dwarf planet.', true),
          ],
          ms: ['Names planets in order', 'Describes key features', 'Distinguishes rocky and giant planets'],
        }),
      ]),
    ]),
    S('s6', 'Moon phases explained, stars and constellations, and astronauts.', [
      'Explain Moon phases using a model', 'Identify a few constellations', 'Describe what astronauts do',
    ], [
      U('stars-constellations', 'Stars and Constellations', 'Patterns in the night sky.', 'Stars are suns; Constellations: Orion, Ursa Major (Saptarishi); Cultural sky stories; Astronomy vs astrology', [
        L('star-patterns', 'Star Patterns', {
          o: ['Identify a constellation and explain what it is', 'Distinguish astronomy from astrology'],
          p: ['Knows stars are like the Sun'],
          e: [
            'Stars are suns, but so far away they look like tiny dots. A constellation is a group of stars that people imagined into a picture. The stars in a constellation may be very different distances from us.',
            'Orion the Hunter has three bright stars in a row for his belt. The Big Dipper (part of Ursa Major) is known in India as the Saptarishi — the seven sages. Different cultures saw different pictures in the same stars.',
            'Astronomy is the science of space, based on observation and evidence. Astrology is a traditional belief that star and planet positions influence people\'s lives; scientific tests have not found evidence that it predicts personality or events.',
          ],
          c: [['tradition', 'In Indian tradition, the seven bright stars of the Big Dipper are named after the Saptarishi, the seven sages, and the star Polaris is associated with Dhruva.'], ['science', 'Controlled studies have not found that astrological predictions perform better than chance.']],
          v: 'constellation = a named pattern of stars; astronomy = the scientific study of space; astrology = a belief system linking sky positions to human lives; Pole Star = a star that stays almost still in the northern sky',
          x: ['Orion is easy to see in winter evenings.', 'The Saptarishi stars can help you find the Pole Star (Dhruva Tara).'],
          s: ['Dhruva and the Steady Star', 'A traditional story tells of young Dhruva, whose determination was so great that he was given a place in the sky as the star that never moves. Long before compasses, travellers in the north used this steady star to find their way at night — and astronomers know it as Polaris, almost directly above Earth\'s North Pole.'],
          a: [
            ch('A constellation is…', '*a pattern of stars people named|a single planet|a cloud'),
            ch('Orion\'s belt has…', '*three bright stars in a row|one star|a ring'),
            mt('Match', 'astronomy=science of space based on evidence|astrology=belief linking stars to human lives|Saptarishi=seven sages, the Big Dipper'),
            tf('All stars in a constellation are the same distance from Earth.', false),
          ],
          t: ['Why might different cultures see different pictures in the same stars?', 'How could you test whether a claim about the stars is scientific?'],
          k: ['Find a constellation (in the sky or in a book) and tell someone its story and one scientific fact.'],
          m: ['Constellation Viewer', 'a paper cup or toilet roll tube, pin, paper, a torch', 'Draw a constellation on paper over the end of a tube | Prick holes for the stars | Shine a torch through in a dark room | Tell the cultural story and the science of the stars'],
          q: [
            ch('Stars look tiny because they are…', 'small|*very far away|cold'),
            ch('Which is a science?', '*astronomy|astrology'),
            tf('The Pole Star stays almost still in the northern sky.', true),
          ],
          ms: ['Identifies constellations', 'Explains constellations as human patterns', 'Distinguishes astronomy from astrology respectfully'],
        }),
      ]),
      U('astronauts', 'Life in Space', 'How astronauts live and work in space.', 'Rockets and launches; Living on the International Space Station; Indian astronauts and Gaganyaan', [
        L('astronaut-life', 'A Day as an Astronaut', {
          o: ['Describe how astronauts live in microgravity', 'Name Indian contributions to human spaceflight'],
          p: ['Knows Earth orbits the Sun'],
          e: [
            'Rockets push hot gas downward very fast, which pushes the rocket up. To get into orbit, a spacecraft must reach about 28,000 km/h.',
            'On the International Space Station, astronauts float because they and the station are falling around the Earth together — this is called microgravity. They sleep in sleeping bags tied to walls, exercise daily to keep bones and muscles strong, and drink from pouches.',
            'Rakesh Sharma became the first Indian citizen in space in 1984, aboard a Soviet mission. Kalpana Chawla, born in India, flew on NASA Space Shuttle missions. India\'s Gaganyaan programme is preparing Indian astronauts to launch on an Indian rocket.',
          ],
          c: [['evidence', 'Rakesh Sharma flew aboard Soyuz T-11 in April 1984. Kalpana Chawla flew on STS-87 (1997) and died in the Columbia accident in 2003.']],
          v: 'astronaut = a person trained to travel in space; microgravity = the floating feeling in orbit; orbit = a path around a planet; space station = a spacecraft where people live and work',
          x: ['Astronauts\' tears don\'t fall — they form blobs on their eyes.', 'Exercise in space protects bones from weakening.'],
          s: ['"Saare Jahan Se Achha"', 'When Prime Minister Indira Gandhi asked Rakesh Sharma in 1984 how India looked from space, he famously replied, "Saare jahan se achha" — better than the whole world. Children across India cheered, and many decided that day that they wanted to explore space too.'],
          a: [
            ch('First Indian citizen in space:', '*Rakesh Sharma|Kalpana Chawla|C. V. Raman'),
            ch('Astronauts float on the ISS because…', 'there is no gravity at all|*they are falling around Earth together with the station|they are very light'),
            tf('Astronauts must exercise to keep their bones strong.', true),
            ch('India\'s human spaceflight programme is called…', '*Gaganyaan|Chandrayaan|Mangalyaan'),
          ],
          t: ['Why might sleeping in space be strange?', 'What qualities do astronauts need?'],
          k: ['Pretend to be an astronaut and describe your day on the space station to someone.'],
          m: ['Design a Space Meal Kit', 'paper, zip bags, foods, labels', 'Research what astronauts eat | Choose foods that won\'t make floating crumbs | Pack a day\'s meals in labelled bags | Explain your choices'],
          q: [
            ch('Rockets go up by pushing gas…', '*downwards|upwards|sideways only'),
            ch('Kalpana Chawla flew with…', '*NASA|ISRO\'s Gaganyaan|no space agency'),
            tf('Rakesh Sharma flew to space in 1984.', true),
          ],
          ms: ['Explains microgravity simply', 'Describes astronaut life', 'Recalls Indian spaceflight milestones accurately'],
        }),
      ]),
    ]),
    S('s7', 'Seasons, eclipses and India\'s space missions.', [
      'Explain seasons using Earth\'s tilt', 'Explain solar and lunar eclipses', 'Describe ISRO missions: Chandrayaan, Mangalyaan, Aditya-L1',
    ], [
      U('tilt-eclipse', 'Seasons and Eclipses', 'Earth\'s tilt and the alignment of Sun, Earth and Moon.', 'Axial tilt and seasons; Solar eclipse; Lunar eclipse; Eclipse safety', [
        L('eclipses', 'Eclipses', {
          o: ['Explain solar and lunar eclipses with a model', 'Explain why seasons happen'],
          p: ['Knows rotation, orbit and Moon phases'],
          e: [
            'A solar eclipse happens when the Moon passes between the Sun and Earth, blocking the Sun\'s light for some places. Never look at a solar eclipse without proper eclipse glasses — it can permanently damage eyes.',
            'A lunar eclipse happens when the Earth passes between the Sun and Moon, so Earth\'s shadow falls on the Moon. The Moon can look red. It is safe to watch.',
            'Seasons happen because Earth\'s axis is tilted about 23.5°. When our hemisphere tilts toward the Sun, sunlight is more direct and days are longer — summer. It is not because Earth is closer to the Sun.',
          ],
          c: [['tradition', 'Many cultures told stories to explain eclipses; in Indian tradition, Rahu and Ketu are said to swallow the Sun or Moon.'], ['science', 'Indian astronomer Āryabhaṭa (5th century CE) explained eclipses as shadows cast by the Earth and Moon.']],
          v: 'solar eclipse = the Moon blocks the Sun\'s light; lunar eclipse = Earth\'s shadow falls on the Moon; axis tilt = the lean of Earth\'s spin axis; hemisphere = half of the Earth',
          x: ['Total solar eclipses are rare at any one place.', 'In June the Northern Hemisphere tilts toward the Sun.'],
          s: ['Āryabhaṭa\'s Shadows', 'Around 1,500 years ago, the astronomer Āryabhaṭa wrote that eclipses happen because of shadows: the Moon covering the Sun, or Earth\'s shadow falling on the Moon. Traditional stories of Rahu and Ketu were still told, but his explanation could predict when eclipses would happen.'],
          a: [
            mt('Match', 'Moon between Sun and Earth=solar eclipse|Earth between Sun and Moon=lunar eclipse|Earth\'s tilt=seasons'),
            tf('It is safe to look at a solar eclipse without special glasses.', false),
            ch('Summer happens when our hemisphere…', '*tilts toward the Sun|is closest to the Moon|stops rotating'),
            ch('During a total lunar eclipse the Moon can look…', 'invisible|*reddish|green'),
          ],
          t: ['Why don\'t we have an eclipse every month?', 'Why is it summer in Australia when it\'s winter in Europe?'],
          k: ['Demonstrate both eclipses to someone using a torch, a ball and a small ball.'],
          m: ['🧪 Eclipse Model', 'a lamp, a large ball (Earth), a small ball on a stick (Moon), a dark room', 'Line up lamp, Moon and Earth to show a solar eclipse | Then lamp, Earth and Moon for a lunar eclipse | Tilt the Earth ball and walk it around the lamp to show seasons | Explain each to someone'],
          q: [
            ch('Seasons are mainly caused by…', 'distance from the Sun|*Earth\'s axial tilt|the Moon'),
            ch('A solar eclipse can happen only at…', '*new moon|full moon|any time'),
            tf('Āryabhaṭa explained eclipses as shadows.', true),
          ],
          ms: ['Explains eclipses with models', 'Explains seasons by tilt', 'Distinguishes traditional stories from scientific explanations respectfully'],
        }),
      ]),
      U('isro', 'India in Space', 'ISRO\'s missions to the Moon, Mars and the Sun.', 'Aryabhata satellite (1975); Chandrayaan-1, -2, -3; Mangalyaan; Aditya-L1', [
        L('isro-missions', 'ISRO\'s Great Missions', {
          o: ['Describe major ISRO missions and their achievements', 'Explain why space missions matter on Earth'],
          p: ['Knows the solar system'],
          e: [
            'The Indian Space Research Organisation (ISRO) launched India\'s first satellite, Aryabhata, in 1975 (on a Soviet rocket). Today ISRO builds rockets like the PSLV and LVM3.',
            'Chandrayaan-1 (2008) helped detect water molecules on the Moon. Mangalyaan, the Mars Orbiter Mission, reached Mars orbit in 2014 on its first attempt. Chandrayaan-3 landed near the Moon\'s south pole region in August 2023, making India the first country to land there.',
            'Aditya-L1, launched in 2023, studies the Sun from a point about 1.5 million km from Earth. Satellites also help us every day with weather forecasts, maps, communication and disaster warnings.',
          ],
          c: [['evidence', 'Chandrayaan-3\'s Vikram lander touched down on 23 August 2023; India now celebrates 23 August as National Space Day.']],
          v: 'satellite = an object that orbits a planet; ISRO = the Indian Space Research Organisation; lander = a spacecraft that sets down on a surface; rover = a vehicle that drives on another world',
          x: ['Weather satellites help forecast cyclones.', 'Chandrayaan-3\'s rover was named Pragyan.'],
          s: ['The Night of the Landing', 'On 23 August 2023, millions of people across India watched screens as the Vikram lander slowed down above the Moon. The last minutes were tense. Then the scientists stood and cheered — Chandrayaan-3 had landed safely, and soon the little rover Pragyan rolled out onto the lunar soil.'],
          a: [
            mt('Match the mission to its target', 'Chandrayaan-3=Moon|Mangalyaan=Mars|Aditya-L1=Sun'),
            ch('India\'s first satellite (1975) was…', '*Aryabhata|Chandrayaan|Gaganyaan'),
            ch('Chandrayaan-3 landed near the Moon\'s…', 'north pole|*south pole region|equator only'),
            tf('Satellites help with weather forecasting on Earth.', true),
          ],
          t: ['Why is it valuable for a country to explore space?', 'Why might landing near the Moon\'s south pole interest scientists?'],
          k: ['Give a short talk about one ISRO mission: its goal, how it worked and what it found.'],
          m: ['Mission Timeline Poster', 'long paper, pens, pictures', 'Make a timeline of ISRO milestones from 1975 to today | Add the destination and a key achievement for each | Draw a rocket and spacecraft | Present it to your family'],
          q: [
            ch('Mangalyaan reached Mars orbit in…', '2008|*2014|2023'),
            ch('Aditya-L1 studies…', 'Mars|*the Sun|Saturn'),
            tf('ISRO stands for Indian Space Research Organisation.', true),
          ],
          ms: ['Recalls major ISRO missions accurately', 'Explains mission goals', 'Connects space technology to daily life'],
        }),
      ]),
    ]),
    S('s9', 'Stars and their life cycles, galaxies, and the scale of the universe.', [
      'Describe the life cycle of stars', 'Explain light-years and the scale of the universe', 'Describe galaxies including the Milky Way',
    ], [
      U('star-life', 'The Life of Stars', 'Stars are born, shine and die.', 'Nebulae and star birth; Main sequence: fusion; Red giants, white dwarfs, supernovae, neutron stars, black holes', [
        L('star-lifecycle', 'How Stars Live and Die', {
          o: ['Describe the main stages in a star\'s life', 'Explain how stars produce energy by fusion'],
          p: ['Knows the Sun is a star'],
          e: [
            'Stars form in nebulae — huge clouds of gas and dust. Gravity pulls the material together until the centre gets hot enough for nuclear fusion: hydrogen nuclei join to make helium, releasing enormous energy.',
            'A star like the Sun shines steadily for about 10 billion years, then swells into a red giant, and finally becomes a small, dense white dwarf.',
            'Much more massive stars burn faster and end in a huge explosion called a supernova, leaving a neutron star or a black hole. Supernovae spread elements like iron and gold into space — the atoms in your body were made in stars.',
          ],
          c: [['science', 'The Indian-American astrophysicist Subrahmanyan Chandrasekhar calculated the maximum mass of a white dwarf (about 1.4 solar masses), the "Chandrasekhar limit", and shared the 1983 Nobel Prize in Physics.']],
          v: 'nebula = a cloud of gas and dust where stars form; nuclear fusion = light nuclei joining and releasing energy; supernova = a massive star\'s explosive death; black hole = a region where gravity is so strong not even light escapes',
          x: ['The Sun is about 4.6 billion years old.', 'Betelgeuse in Orion is a red supergiant.'],
          s: ['Made of Stardust', 'Billions of years ago, giant stars lived and exploded, scattering carbon, oxygen and iron across space. Some of that dust gathered into our solar system, our Earth — and eventually into you. "We are made of star-stuff," the astronomer Carl Sagan liked to say.'],
          a: [
            od('Life of a Sun-like star', 'nebula|main sequence star|red giant|white dwarf'),
            ch('Stars produce energy by…', 'burning wood|*nuclear fusion|reflecting light'),
            ch('A massive star may end as a…', '*supernova|red planet|comet'),
            tf('Elements in our bodies were made in stars.', true),
          ],
          t: ['Why do massive stars live shorter lives than small ones?', 'What does "we are made of star-stuff" mean to you?'],
          k: ['Explain the life of a star to someone as if you were the star telling its own story.'],
          m: ['Star Life Cycle Comic', 'paper, coloured pencils', 'Draw two paths: a Sun-like star and a massive star | Show each stage in a panel | Add captions explaining the science | Include Chandrasekhar\'s limit in your comic'],
          q: [
            ch('Stars form in…', '*nebulae|black holes|planets'),
            ch('The Sun will eventually become a…', 'black hole|*white dwarf|neutron star'),
            tf('Chandrasekhar worked out the maximum mass of a white dwarf.', true),
          ],
          ms: ['Sequences stellar life cycles', 'Explains fusion as the energy source', 'Recognises contributions of astronomers accurately'],
        }),
      ]),
      U('galaxies', 'Galaxies and Scale', 'From our solar system to the observable universe.', 'Light-years; The Milky Way; Other galaxies; Scale models', [
        L('light-years', 'How Big Is Space?', {
          o: ['Explain what a light-year is', 'Describe our place in the Milky Way galaxy'],
          p: ['Knows the speed of light is very fast'],
          e: [
            'Light travels about 300,000 km every second. A light-year is the distance light travels in one year — about 9.5 trillion kilometres. It is a unit of distance, not time.',
            'Light from the Sun takes about 8 minutes to reach us. The nearest star beyond the Sun, Proxima Centauri, is about 4.2 light-years away — so we see it as it was over four years ago.',
            'Our Sun is one of hundreds of billions of stars in the Milky Way, a spiral galaxy about 100,000 light-years across. The observable universe contains billions of galaxies.',
          ],
          v: 'light-year = the distance light travels in a year; galaxy = an enormous system of stars, gas and dust; Milky Way = our home galaxy; observable universe = the part of the universe we can see',
          x: ['The Andromeda galaxy is about 2.5 million light-years away.', 'The Milky Way looks like a faint band of light in a dark sky.'],
          s: ['Looking Back in Time', 'Nova looked at a star through a telescope. "That light left the star before your grandparents were born," said Professor Hoot. "When you look far into space, you\'re looking back in time." Nova whispered, "Maybe that star doesn\'t even exist any more."'],
          a: [
            ch('A light-year measures…', 'time|*distance|brightness'),
            ch('Sunlight takes about ___ to reach Earth.', '8 seconds|*8 minutes|8 years'),
            od('Order from smallest to largest', 'Earth|solar system|Milky Way|observable universe'),
            tf('When we see distant stars, we see light that left them long ago.', true),
          ],
          t: ['Why is it impossible to see a far-away star "as it is now"?', 'How does knowing the size of the universe make you feel?'],
          k: ['Explain the light-year to someone using the idea of a very fast traveller.'],
          m: ['Toilet-Paper Solar System Scale', 'a roll of toilet paper, markers, a long corridor or outdoor space', 'Let 1 sheet ≈ 10 million km | Mark the Sun at sheet 0 and planets at scaled distances (Mercury ≈ 6, Earth ≈ 15, Neptune ≈ 450) | Walk the model | Calculate where Proxima Centauri would be on the same scale'],
          q: [
            ch('Our galaxy is the…', 'Andromeda|*Milky Way|Orion'),
            ch('Nearest star beyond the Sun is about…', '4 km|*4.2 light-years|4 million light-years'),
            tf('The Milky Way contains billions of stars.', true),
          ],
          ms: ['Explains light-years correctly', 'Describes our cosmic address', 'Builds and interprets scale models'],
        }),
      ]),
    ]),
    S('s12', 'Cosmology, the history of astronomy, and the search for life.', [
      'Explain the evidence for the Big Bang', 'Trace the history of astronomy across cultures', 'Evaluate the search for exoplanets and life',
    ], [
      U('cosmology', 'The Origin of the Universe', 'Evidence for the Big Bang.', 'Redshift and expansion; Cosmic microwave background; Science and questions of meaning', [
        L('big-bang', 'The Big Bang: Evidence', {
          o: ['Explain the main evidence for the Big Bang model', 'Distinguish scientific cosmology from religious and philosophical accounts'],
          p: ['Understands light and galaxies'],
          e: [
            'In the 1920s, Edwin Hubble found that distant galaxies\' light is redshifted — stretched to longer wavelengths — and that farther galaxies recede faster. The universe is expanding.',
            'Running the expansion backward suggests the universe was once extremely hot and dense, about 13.8 billion years ago. This is the Big Bang model — not an explosion in space, but the expansion of space itself.',
            'In 1965, the cosmic microwave background (CMB) radiation was discovered: faint leftover heat from the early universe, strong evidence for the model. Science describes how the universe evolved; questions of why there is a universe at all are explored by philosophy and religious traditions in their own ways.',
          ],
          c: [['science', 'Georges Lemaître proposed an expanding universe from a "primeval atom" in 1927; current measurements give an age of about 13.8 billion years.'], ['belief', 'Many religious traditions have creation accounts; Hindu cosmology, for example, describes vast repeating cycles of creation and dissolution. Followers interpret these in various ways, and many see no conflict with scientific cosmology.']],
          v: 'redshift = stretching of light from objects moving away; cosmic microwave background = radiation left over from the early universe; cosmology = the study of the universe\'s origin and evolution; expansion = the growth of space over time',
          x: ['A raisin loaf rising: every raisin moves away from every other.', 'The CMB is detected by sensitive radio telescopes and satellites.'],
          s: ['The Pigeon Problem', 'In 1965, Arno Penzias and Robert Wilson found a faint, steady hiss in their radio antenna that came from every direction. They even cleaned out pigeon droppings, thinking that was the cause! The hiss remained. It turned out to be the cosmic microwave background — the afterglow of the early universe.'],
          a: [
            mt('Match the evidence', 'redshift of galaxies=universe is expanding|cosmic microwave background=leftover heat from the early universe|age measurements=about 13.8 billion years'),
            tf('The Big Bang was an explosion at a point in existing space.', false, 'It describes the expansion of space itself from a hot, dense state.'),
            ch('Who discovered the CMB in 1965?', '*Penzias and Wilson|Newton|Galileo'),
            ch('Questions about the ultimate purpose of the universe are mainly explored by…', 'only telescopes|*philosophy and religious traditions|weather forecasts'),
          ],
          t: ['What would it mean for science if new evidence contradicted the Big Bang?', 'Can science and religious belief both offer something to human understanding? How?'],
          k: ['Present the three main lines of evidence for the Big Bang to someone, then discuss what science can and cannot answer.'],
          m: ['🧪 Balloon Universe Model', 'a balloon, marker, string, ruler', 'Draw dots (galaxies) on a partly inflated balloon | Measure distances between dots | Inflate more and measure again | Show that farther dots moved apart more and discuss the model\'s limits'],
          q: [
            ch('Redshift shows galaxies are…', 'approaching|*moving away|stationary'),
            ch('The universe\'s estimated age:', '4.6 billion years|*13.8 billion years|6,000 years'),
            tf('The CMB is evidence for the Big Bang model.', true),
          ],
          ms: ['Explains Big Bang evidence', 'Distinguishes scientific and religious/philosophical questions respectfully', 'Evaluates models and their limits'],
        }),
      ]),
      U('history-astronomy', 'Astronomy Across Cultures and Life Beyond Earth', 'How people studied the sky — and the search for other worlds.', 'Babylonian, Greek, Indian, Islamic, Chinese and Mayan astronomy; Copernican revolution; Exoplanets and astrobiology', [
        L('exoplanets', 'Are We Alone?', {
          o: ['Describe contributions to astronomy from many cultures', 'Explain how exoplanets are detected and what makes a world habitable'],
          p: ['Understands stars and galaxies'],
          e: [
            'Many cultures advanced astronomy. Babylonians recorded planetary positions; Greek astronomers measured Earth\'s size; Indian astronomers like Āryabhaṭa proposed Earth\'s rotation; scholars in the Islamic world refined observations and instruments; Chinese astronomers recorded supernovae; the Maya built precise calendars. Copernicus (1543) and Galileo\'s telescope observations (1610) supported a Sun-centred system.',
            'Since 1995, astronomers have confirmed thousands of exoplanets — planets around other stars — mostly by detecting a star\'s dimming as a planet passes in front (transit method) or a star\'s wobble.',
            'A "habitable zone" is the region around a star where liquid water could exist on a planet\'s surface. Astrobiologists also look for biosignatures — gases in atmospheres that might indicate life. So far, no life beyond Earth has been confirmed.',
          ],
          c: [['evidence', 'In 1995 Michel Mayor and Didier Queloz detected 51 Pegasi b, the first exoplanet around a Sun-like star, earning a share of the 2019 Nobel Prize in Physics. Jantar Mantar observatories built by Sawai Jai Singh II in the 18th century still stand in Jaipur and Delhi.']],
          v: 'exoplanet = a planet orbiting a star other than the Sun; transit method = detecting a planet by the dip in starlight as it passes in front; habitable zone = region around a star where liquid water could exist; biosignature = evidence that might indicate life',
          x: ['TRAPPIST-1 has several Earth-sized planets, some in its habitable zone.', 'The Jantar Mantar in Jaipur has a giant sundial, the Samrat Yantra.'],
          s: ['The Dimming Star', 'A student analysing public telescope data noticed a star dimming slightly every 12 days, then brightening again. The dips were identical each time. "Something is passing in front of it," she realised. Professional astronomers confirmed it: a new exoplanet, found by careful attention to tiny changes.'],
          a: [
            mt('Match the person to the contribution', 'Āryabhaṭa=proposed Earth\'s rotation|Copernicus=Sun-centred model|Galileo=telescope observations|Mayor and Queloz=first exoplanet around a Sun-like star'),
            ch('The transit method detects…', '*dimming as a planet passes in front of its star|radio messages|planet colours directly'),
            tf('Life beyond Earth has been confirmed.', false),
            ch('The habitable zone is where…', 'stars are born|*liquid water could exist on a planet\'s surface|black holes form'),
          ],
          t: ['If we found microbial life on another world, how would it change how we see ourselves?', 'Why is it important to recognise contributions from many cultures to science?'],
          k: ['Give a talk on the history of astronomy, featuring at least four different cultures.'],
          m: ['🧪 Transit Light Curve Experiment', 'a lamp, a small ball on a stick, a phone with a light-meter app (or careful observation)', 'Darken a room and point the light sensor at the lamp | Pass the "planet" in front repeatedly at steady speed | Record brightness readings over time | Graph the light curve and explain how planet size affects the dip'],
          q: [
            ch('The first exoplanet around a Sun-like star was found in…', '1905|*1995|2019'),
            ch('Galileo\'s telescope observations supported…', '*a Sun-centred system|a flat Earth|astrology'),
            tf('Astronomy developed in many cultures, not just one.', true),
          ],
          ms: ['Describes multicultural history of astronomy accurately', 'Explains exoplanet detection methods', 'Evaluates habitability and claims about life carefully'],
        }),
      ]),
    ]),
  ],
});
