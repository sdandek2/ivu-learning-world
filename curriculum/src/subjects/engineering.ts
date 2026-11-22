import { subject, S, U, L, ch, tf, od, mt } from '../dsl.ts';

export default subject({
  id: 'engineering',
  description: 'Building and engineering from block towers to sustainable design: stable bases, strong shapes, materials, bridges, the engineering design process, tension and compression, Indian engineering marvels from stepwells to modern bridges, earthquake-resistant design, engineering disciplines, learning from failure and engineering ethics.',
  stages: [
    S('s4', 'Building towers and walls that stand up.', [
      'Build towers with a wide, stable base', 'Test what makes buildings fall', 'Talk about building plans',
    ], [
      U('towers', 'Tall Towers', 'Making things stand up.', 'Wide bases; Balance; Testing and rebuilding', [
        L('stable-towers', 'Wide at the Bottom', {
          o: ['Build a tower that stands up using a wide base', 'Test a tower and improve it'],
          p: ['Can stack blocks'],
          e: [
            'When we build a tower, a wide, strong bottom (base) helps it stand up. A tower that is wide at the bottom and narrow at the top is stable — hard to knock over.',
            'If blocks are not lined up straight, the tower leans and may fall. Builders check that things are straight and balanced.',
            'Engineers are people who design and build things. They test their buildings, see what goes wrong and make them better. Falling down is part of learning!',
          ],
          v: 'base = the bottom part that holds things up; stable = steady and hard to knock over; balance = staying steady without falling; engineer = a person who designs and builds things',
          x: ['A pyramid of blocks.', 'A temple tower wide at the bottom.'],
          s: ['The Wobbly Tower', 'Ivaan stacked blocks one on top of another — tall and thin. Wobble, wobble, CRASH! He tried again with four blocks at the bottom, then three, then two, then one. It stood strong, even when his sister blew on it. "Wide at the bottom!" he said. "That\'s the engineer\'s secret."'],
          a: [
            ch('Which tower is most stable?', '*wide at the bottom|thin all the way|wide at the top'),
            ch('A person who designs and builds things is an…', '*engineer|artist only|astronaut'),
            tf('Falling down helps us learn how to build better.', true),
            od('Put the building steps in order', 'Plan the tower|Build it|Test it|Make it better'),
          ],
          t: ['Why do you think a wide base helps?', 'What tall buildings have you seen?'],
          k: ['Show a grown-up your tower and explain why it stands.'],
          m: ['Tower Challenge', 'blocks or paper cups', 'Build the tallest tower you can | Test it by blowing gently | Rebuild it with a wider base | Compare which stood better'],
          q: [
            ch('Steady and hard to knock over is…', '*stable|wobbly|tiny'),
            tf('A leaning tower may fall.', true),
            ch('The bottom part that holds things up is the…', '*base|top|roof'),
          ],
          ms: ['Builds with a stable base', 'Tests and improves', 'Uses building vocabulary'],
        }),
      ]),
      U('walls-houses', 'Walls and Houses', 'Building like a bricklayer.', 'Brick patterns; Strong walls; Houses around the world', [
        L('brick-walls', 'Brick by Brick', {
          o: ['Build a wall with overlapping bricks', 'Name homes made from different materials'],
          p: ['Can build a stable tower'],
          e: [
            'Bricklayers stack bricks so each brick sits across two bricks below, like a staircase pattern. This overlapping pattern makes walls strong; straight stacks split apart easily.',
            'Houses are built from many materials: bricks, stone, wood, mud, bamboo, ice and even snow.',
            'People build homes that suit their weather: thick mud walls stay cool in hot places, stilt houses stay dry in flood areas, and igloos made of snow keep warm in the Arctic.',
          ],
          v: 'brick = a block used for building walls; overlap = to lie partly over something; material = what something is made of; stilts = tall posts that lift a house off the ground',
          x: ['Overlapping bricks on a school wall.', 'Bamboo stilt houses in Assam.'],
          s: ['The Three Little Builders', 'Three little builders each made a wall. The first stacked bricks straight up in towers. The second leaned them against each other. The third overlapped each brick over two below. When the wind blew, only the third wall stood. "Overlap makes them hold hands," the third builder explained.'],
          a: [
            ch('Strong walls have bricks that…', '*overlap|stand in straight stacks|are loose'),
            mt('Match the home to the material', 'igloo=snow|stilt house=bamboo|cottage=bricks'),
            tf('Homes are built to suit the weather.', true),
            ch('Stilts keep a house…', '*dry in floods|very cold|underground'),
          ],
          t: ['What is your home made of?', 'Why would an igloo be warm inside?'],
          k: ['Tell a grown-up why overlapping bricks make a wall stronger.'],
          m: ['Strong Wall Test', 'blocks, a toy car', 'Build one wall with straight stacks | Build one with overlapping bricks | Roll a toy car into each | See which wall stays strong'],
          q: [
            ch('Tall posts that lift a house are…', '*stilts|stairs|sticks'),
            tf('Mud walls can keep homes cool.', true),
            ch('What something is made of is its…', '*material|colour|name'),
          ],
          ms: ['Builds overlapping walls', 'Names building materials', 'Links homes to climate'],
        }),
      ]),
    ]),
    S('s5', 'Strong shapes and choosing materials.', [
      'Discover why triangles are strong', 'Choose suitable materials for a job', 'Build and test structures',
    ], [
      U('shapes', 'Strong Shapes', 'Triangles hold firm.', 'Triangles vs squares; Triangles in buildings; Building with straws', [
        L('triangles', 'The Triangle Trick', {
          o: ['Show that a triangle keeps its shape better than a square', 'Find triangles in real structures'],
          p: ['Knows basic shapes'],
          e: [
            'If you make a square from straws and push a corner, it squashes into a diamond shape. If you make a triangle and push it, it holds its shape!',
            'That is why engineers use triangles in bridges, roofs, cranes and towers. Adding a diagonal across a square turns it into two triangles and makes it strong.',
            'Look for triangles in electricity towers, bicycle frames and roof trusses.',
          ],
          v: 'triangle = a shape with three sides; diagonal = a line joining opposite corners; rigid = stiff and keeps its shape; truss = a frame made of triangles',
          x: ['Triangles in an electricity pylon.', 'A bicycle frame made of two triangles.'],
          s: ['Squish or Stay?', 'Zuri made a square and a triangle from straws and pipe cleaners. She pushed the square — squish, it went flat. She pushed the triangle — it stayed strong! "Triangles are stubborn," she laughed. She added a straw across the square, and now it was stubborn too.'],
          a: [
            ch('Which shape keeps its shape when pushed?', '*triangle|square|circle made of straws'),
            ch('A diagonal turns a square into…', '*two triangles|a circle|a line'),
            tf('Bicycle frames use triangles.', true),
            ch('A frame made of triangles is a…', '*truss|tent|table'),
          ],
          t: ['Where can you see triangles in your neighbourhood?', 'Why don\'t all buildings use triangles everywhere?'],
          k: ['Show a grown-up the straw square and triangle test.'],
          m: ['🧪 Straw Structure Test', 'straws, pipe cleaners or tape', 'Build a square and a triangle | Push each corner gently | Add a diagonal to the square | Build a tower using triangles'],
          q: [
            ch('Stiff and keeps its shape is…', '*rigid|floppy|bendy'),
            tf('A triangle has three sides.', true),
            ch('A line joining opposite corners is a…', '*diagonal|circle|curve'),
          ],
          ms: ['Demonstrates triangle rigidity', 'Strengthens shapes with diagonals', 'Finds triangles in structures'],
        }),
      ]),
      U('materials', 'Choosing Materials', 'The right stuff for the job.', 'Strong, bendy, waterproof; Testing materials; Matching materials to jobs', [
        L('choose-materials', 'The Right Material', {
          o: ['Describe materials as strong, bendy, waterproof or light', 'Choose materials for a purpose and test them'],
          p: ['Can name common materials'],
          e: [
            'Engineers choose materials by their properties. Steel is strong; rubber is bendy and stretchy; glass is see-through; plastic can be waterproof; wood is strong and light.',
            'The right material depends on the job. A raincoat must be waterproof. A window must be see-through. A bridge must be strong.',
            'Engineers test materials before using them — how much weight they hold, whether they bend or break, whether water soaks through.',
          ],
          v: 'property = what a material is like; waterproof = does not let water through; flexible = bends easily; transparent = see-through',
          x: ['A rubber ball bouncing because it is flexible.', 'A plastic raincoat keeping you dry.'],
          s: ['The Teddy\'s Umbrella', 'Teddy needed an umbrella. Ivaan tested materials with a cup of water: paper got soggy, cloth dripped through, foil stayed dry, and a plastic bag stayed dry too. He made the umbrella from a plastic bag and a straw handle. Drip, drip — Teddy stayed perfectly dry!'],
          a: [
            mt('Match the material to the property', 'glass=transparent|rubber=flexible|plastic bag=waterproof'),
            ch('A raincoat must be…', '*waterproof|see-through|soft as cotton wool'),
            tf('Engineers test materials before using them.', true),
            ch('See-through means…', '*transparent|flexible|heavy'),
          ],
          t: ['Why aren\'t bridges made of paper?', 'What material would you use for a lunchbox?'],
          k: ['Explain which material you chose for a job and why.'],
          m: ['🧪 Teddy Umbrella Test', 'paper, cloth, foil, plastic, a cup of water, a teddy', 'Drip water onto each material | Record which stay dry | Make an umbrella from the best one | Test it on teddy'],
          q: [
            ch('What a material is like is its…', '*property|price|place'),
            tf('Steel is strong.', true),
            ch('Bends easily means…', '*flexible|rigid|transparent'),
          ],
          ms: ['Describes material properties', 'Chooses materials for purpose', 'Tests materials fairly'],
        }),
      ]),
    ]),
    S('s6', 'Bridges and the engineering design process.', [
      'Compare beam, arch and suspension bridges', 'Follow the engineering design process', 'Build and test a model bridge',
    ], [
      U('bridges', 'Bridges', 'Crossing gaps.', 'Beam bridges; Arch bridges; Suspension and cable-stayed bridges', [
        L('bridge-types', 'Beam, Arch and Suspension', {
          o: ['Describe beam, arch and suspension bridges', 'Explain how each carries weight'],
          p: ['Knows strong shapes'],
          e: [
            'A beam bridge is a flat deck resting on supports at each end — simple but limited in length. An arch bridge pushes the weight outwards and down into strong supports at each end called abutments; the Romans built many stone arches.',
            'A suspension bridge hangs the deck from cables slung between tall towers, allowing very long spans — like the Golden Gate Bridge. A cable-stayed bridge connects cables directly from towers to the deck — like the Bandra–Worli Sea Link in Mumbai.',
            'India\'s Chenab Rail Bridge in Jammu and Kashmir, opened in 2025, is a steel arch bridge about 359 metres above the river — the highest railway bridge in the world.',
          ],
          v: 'span = the distance a bridge crosses between supports; deck = the surface you travel on; abutment = a strong support at the end of an arch; cable = a thick, strong wire rope',
          x: ['A plank across a stream (beam).', 'The Bandra–Worli Sea Link (cable-stayed).'],
          s: ['A Bridge Above the Clouds', 'Engineers building the Chenab Bridge faced deep gorges, strong winds and earthquakes. They designed a huge steel arch, tested it for winds of over 200 km/h and protected it against blasts. When the first trains crossed in 2025, passengers looked down at a river far below — higher than the Eiffel Tower is tall.'],
          a: [
            mt('Match the bridge to its type', 'plank across a stream=beam|Chenab Bridge=arch|Golden Gate=suspension|Bandra–Worli Sea Link=cable-stayed'),
            ch('Which bridge type allows the longest spans?', '*suspension|beam|stepping stones'),
            tf('Arch bridges push weight into abutments.', true),
            ch('The surface you travel on is the…', '*deck|cable|tower'),
          ],
          t: ['Why can\'t a beam bridge be very long?', 'Which bridge type would you build over a wide sea?'],
          k: ['Explain how one bridge type carries weight, using your hands as a model.'],
          m: ['🧪 Paper Bridge Challenge', 'paper, books, coins', 'Place two books apart as banks | Make a flat paper beam bridge and add coins until it fails | Fold the paper into an arch or zigzag and test again | Record which holds the most coins'],
          q: [
            ch('The distance a bridge crosses is its…', '*span|deck|cable'),
            tf('The Chenab Bridge is a steel arch bridge.', true),
            ch('A thick, strong wire rope is a…', '*cable|beam|brick'),
          ],
          ms: ['Describes bridge types', 'Explains load paths simply', 'Tests model bridges'],
        }),
      ]),
      U('design-process', 'The Engineering Design Process', 'How engineers solve problems.', 'Ask and imagine; Plan and create; Test and improve', [
        L('edp', 'Ask, Imagine, Plan, Create, Improve', {
          o: ['Follow the steps of the engineering design process', 'Use constraints and criteria in a design challenge'],
          p: ['Can build and test models'],
          e: [
            'Engineers follow a design process: Ask (what is the problem?), Imagine (brainstorm ideas), Plan (draw and choose materials), Create (build a prototype) and Improve (test and make it better). Then they often repeat.',
            'Criteria are what the design must do — "hold 10 coins". Constraints are the limits — "use only 10 straws and 50 cm of tape".',
            'Engineers work in teams, share ideas and record their tests so they know what worked.',
          ],
          v: 'criteria = what a design must achieve; constraint = a limit on a design; prototype = a first model for testing; iterate = to repeat the process to improve',
          x: ['Designing an egg protector for a drop test.', 'Using only newspaper to build a tower.'],
          s: ['Operation Egg Drop', 'Zuri\'s team had to protect an egg dropped from a chair, using only straws, tape and paper. Their first design cracked the egg. They studied the break, added a straw "crumple zone" and a paper parachute. The second egg landed softly. "Engineering is failing forward," their teacher grinned.'],
          a: [
            od('Put the design process in order', 'Ask|Imagine|Plan|Create|Improve'),
            ch('A limit on a design is a…', '*constraint|criterion|prototype'),
            tf('Engineers often repeat the design process.', true),
            ch('A first model for testing is a…', '*prototype|blueprint only|final product'),
          ],
          t: ['Why test a prototype before building the real thing?', 'How does working in a team help?'],
          k: ['Present your design, test results and improvements.'],
          m: ['Egg Drop Challenge', 'straws, tape, paper, a raw egg (with an adult)', 'Write the criteria and constraints | Sketch and build a protector | Drop it from a safe height and record results | Improve and test again'],
          q: [
            ch('What a design must achieve are its…', '*criteria|constraints|crumbs'),
            tf('Recording tests helps engineers improve.', true),
            ch('To repeat a process to improve is to…', '*iterate|imitate|ignore'),
          ],
          ms: ['Follows the design process', 'Applies criteria and constraints', 'Improves designs from test data'],
        }),
      ]),
    ]),
    S('s7', 'Forces in structures and Indian engineering marvels.', [
      'Explain tension, compression and load', 'Analyse how structures carry loads', 'Describe historic and modern Indian engineering',
    ], [
      U('forces-structures', 'Forces in Structures', 'Push and pull inside buildings.', 'Tension and compression; Loads; Beams and columns', [
        L('tension-compression', 'Squash and Stretch', {
          o: ['Distinguish tension and compression in structures', 'Identify dead and live loads'],
          p: ['Knows bridge types'],
          e: [
            'Compression is a squashing force; tension is a stretching force. A column holding up a roof is in compression. A suspension bridge cable is in tension.',
            'When a beam bends under a load, its top is squashed (compression) and its bottom is stretched (tension). Concrete is strong in compression but weak in tension, so engineers add steel bars inside it — reinforced concrete.',
            'Structures carry loads. Dead load is the structure\'s own weight; live load is changing weight such as people, vehicles and furniture. Wind and earthquakes add environmental loads.',
          ],
          v: 'compression = a squashing force; tension = a stretching force; load = a force a structure must carry; reinforced concrete = concrete strengthened with steel bars',
          x: ['A sponge beam: the top squashes, the bottom stretches.', 'Steel rebar in a building\'s columns.'],
          s: ['The Sponge Bridge', 'Kiko drew lines across the top and bottom of a sponge, then bent it like a loaded beam. The top lines squeezed together; the bottom lines spread apart. "Compression on top, tension underneath!" he said. "That\'s why builders put steel in the bottom of concrete beams."'],
          a: [
            mt('Match the term to its meaning', 'compression=squashing force|tension=stretching force|live load=changing weight such as people'),
            ch('Concrete is weak in…', '*tension|compression|colour'),
            tf('Live load includes people and vehicles.', true),
            ch('Concrete with steel bars is…', '*reinforced concrete|plain mud|glass'),
          ],
          t: ['Why do engineers need to know the live load of a stadium?', 'Where else might tension be important?'],
          k: ['Demonstrate tension and compression with a sponge or ruler.'],
          m: ['🧪 Beam Investigation', 'strips of card, books, coins, a ruler', 'Make beams from single and folded card | Rest them between books | Add coins and measure the sag | Explain results using tension and compression'],
          q: [
            ch('A stretching force is…', '*tension|compression|friction'),
            tf('Dead load is a structure\'s own weight.', true),
            ch('A squashing force is…', '*compression|tension|gravity only'),
          ],
          ms: ['Distinguishes tension and compression', 'Identifies load types', 'Explains reinforced concrete'],
        }),
      ]),
      U('indian-engineering', 'Indian Engineering Marvels', 'From stepwells to sea links.', 'Stepwells and Kallanai; Temples and forts; Modern megaprojects', [
        L('marvels', 'Engineering Through the Ages', {
          o: ['Describe historic and modern Indian engineering achievements', 'Explain the engineering problems they solved'],
          p: ['Knows forces in structures'],
          e: [
            'Ancient engineers solved water problems. Stepwells such as Rani ki Vav in Gujarat (11th century, a UNESCO World Heritage Site) gave access to groundwater through many levels of steps. The Kallanai (Grand Anicut) on the Kaveri, traditionally credited to the Chola king Karikalan around the 2nd century CE, is among the oldest water-diversion structures still in use.',
            'The Harappan cities had planned streets and covered drains over 4,000 years ago. The Iron Pillar of Delhi, around 1,600 years old, has resisted rust remarkably — studied by metallurgists for its protective layer.',
            'Modern achievements include the Konkan Railway through the Western Ghats (completed 1998), the Delhi Metro, the Atal Tunnel under the Rohtang Pass (2020) and the Chenab Bridge. Engineer M. Visvesvaraya, whose birthday (15 September) is celebrated as Engineers\' Day in India, designed dams and flood-protection systems.',
          ],
          v: 'stepwell = a well reached by steps descending to the water; anicut = a dam or weir across a river; metallurgy = the science of metals; tunnel = an underground passage',
          x: ['Rani ki Vav\'s seven levels of sculpted steps.', 'The Atal Tunnel, over 9 km long at high altitude.'],
          s: ['The Engineer Who Tamed Floods', 'In 1908, a terrible flood struck Hyderabad. The Nizam called on engineer M. Visvesvaraya, who designed a flood-protection plan, including reservoirs, to prevent such disasters. Later he built the Krishna Raja Sagara dam in Mysore. India honours him every year on Engineers\' Day.'],
          a: [
            mt('Match the marvel to its place', 'Rani ki Vav=Gujarat|Kallanai=Kaveri river|Atal Tunnel=Rohtang Pass'),
            ch('Engineers\' Day in India honours…', '*M. Visvesvaraya|Aryabhata|C. V. Raman'),
            tf('The Harappans built covered drains.', true),
            ch('The Iron Pillar of Delhi is famous for…', '*resisting rust|being made of gold|moving by itself'),
          ],
          t: ['What problem did stepwells solve?', 'What modern problem would you like to engineer a solution for?'],
          k: ['Present one Indian engineering marvel and the problem it solved.'],
          m: ['Marvel Model', 'card, clay or recycled materials, research sources', 'Choose a marvel and research it | Build a simple model | Label the engineering features | Present how it solved a real problem'],
          q: [
            ch('A well reached by steps is a…', '*stepwell|staircase only|tunnel'),
            tf('The Konkan Railway runs through the Western Ghats.', true),
            ch('The science of metals is…', '*metallurgy|meteorology|mythology'),
          ],
          ms: ['Describes marvels accurately', 'Explains engineering problems solved', 'Connects history and modern engineering'],
        }),
      ]),
    ]),
    S('s9', 'Engineering disciplines and designing for earthquakes.', [
      'Describe engineering disciplines and careers', 'Explain earthquake-resistant design', 'Apply engineering calculations',
    ], [
      U('disciplines', 'Engineering Disciplines', 'Many kinds of engineers.', 'Civil and mechanical; Electrical and computer; Chemical, biomedical and aerospace', [
        L('disciplines', 'Which Engineer Are You?', {
          o: ['Describe major engineering disciplines', 'Match real problems to the disciplines that solve them'],
          p: ['Knows the design process'],
          e: [
            'Civil engineers design buildings, bridges, roads and water systems. Mechanical engineers design machines, engines and vehicles. Electrical engineers work with power systems and electronics. Computer engineers design hardware and software systems.',
            'Chemical engineers design processes for making medicines, fuels and materials. Biomedical engineers design medical devices like pacemakers and prosthetics. Aerospace engineers design aircraft and spacecraft — like ISRO\'s Chandrayaan-3, which landed near the Moon\'s south pole in 2023.',
            'Most big projects need teams from many disciplines working together, plus skills in maths, physics, communication and ethics.',
          ],
          v: 'discipline = a branch of study or work; civil engineering = designing infrastructure; biomedical engineering = applying engineering to medicine; aerospace = relating to aircraft and spacecraft',
          x: ['The Jaipur Foot, a low-cost prosthetic limb developed in India.', 'Chandrayaan-3\'s Vikram lander.'],
          s: ['Team Chandrayaan', 'Landing Chandrayaan-3 needed aerospace engineers for the trajectory, mechanical engineers for the landing legs, electrical engineers for power, computer engineers for the guidance software and materials experts for heat shields. On 23 August 2023, when Vikram touched down, the whole team cheered — every discipline had played its part.'],
          a: [
            mt('Match the engineer to the job', 'civil=bridges and roads|biomedical=prosthetics|aerospace=spacecraft|chemical=medicine production'),
            ch('Chandrayaan-3 landed in…', '*2023|1969|2010'),
            tf('Big projects need many disciplines working together.', true),
            ch('Designing machines and engines is…', '*mechanical engineering|civil engineering|biology'),
          ],
          t: ['Which discipline interests you most? Why?', 'Why do engineers need communication skills?'],
          k: ['Interview an engineer (in person or by reading) and present their work.'],
          m: ['Career Explorer', 'reliable career resources, interviews', 'Research three disciplines | List what they do, skills needed and an Indian example | Interview or read about an engineer | Make a career poster', "Ask permission before interviewing an engineer. Do not publish names or contact details without consent; use public career sources and attribute them."],
          q: [
            ch('Applying engineering to medicine is…', '*biomedical engineering|civil engineering|aerospace'),
            tf('The Jaipur Foot is a low-cost prosthetic.', true),
            ch('A branch of study is a…', '*discipline|discount|disguise'),
          ],
          ms: ['Describes disciplines accurately', 'Matches problems to disciplines', 'Explores careers'],
        }),
      ]),
      U('earthquakes', 'Designing for Earthquakes', 'Safe buildings.', 'Seismic zones; Base isolation and dampers; Building codes', [
        L('seismic', 'Buildings That Bend, Not Break', {
          o: ['Explain how earthquakes affect buildings', 'Describe earthquake-resistant design techniques'],
          p: ['Knows forces in structures'],
          e: [
            'Earthquakes shake the ground sideways and up and down. Buildings can crack or collapse if they are too stiff, too weak or poorly connected. India is divided into seismic zones; the Himalayan region is among the most active.',
            'Engineers design for earthquakes using ductile (bendable) reinforced concrete, strong connections, shear walls, and symmetrical shapes. Base isolation places flexible bearings under a building so the ground moves beneath it. Tuned mass dampers — huge weights near the top, as in Taipei 101 — reduce swaying.',
            'Building codes set minimum safety standards; in India, the Bureau of Indian Standards publishes seismic codes such as IS 1893. After the 2001 Bhuj earthquake, stricter enforcement and retrofitting gained importance.',
          ],
          v: 'seismic = relating to earthquakes; ductile = able to bend without breaking; base isolation = flexible bearings separating a building from ground motion; building code = rules for safe construction',
          x: ['Base-isolated hospitals that keep working after quakes.', 'Taipei 101\'s 660-tonne damper.'],
          s: ['The Hospital That Kept Working', 'After the 2001 Bhuj earthquake in Gujarat, a new hospital in Bhuj was built on base isolators — rubber-and-steel pads under the building. Engineers explained that in a future quake, the ground would move but the hospital would glide gently above it, so doctors could keep treating patients when they were needed most.'],
          a: [
            ch('Ductile means…', '*able to bend without breaking|very brittle|invisible'),
            mt('Match the technique', 'base isolation=flexible bearings under the building|tuned mass damper=heavy weight reducing sway|shear wall=stiff wall resisting sideways force'),
            tf('Building codes set minimum safety standards.', true),
            ch('The Indian seismic design code is…', '*IS 1893|ISO 9001|IPL 2020'),
          ],
          t: ['Why is a perfectly stiff building not ideal?', 'Who should pay for retrofitting old buildings?'],
          k: ['Explain base isolation using a model or demonstration.'],
          m: ['🧪 Shake Table Challenge', 'a tray on marbles or rubber balls, card, straws, clay', 'Build a small tower | Shake the tray to simulate an earthquake | Add bracing, a wider base or isolation pads | Compare performance and record results', "Use large, sturdy balls that cannot be swallowed and keep the tray on a stable surface. An adult should supervise; keep the setup away from stairs and edges."],
          q: [
            ch('Relating to earthquakes is…', '*seismic|scenic|solar'),
            tf('Symmetrical shapes help earthquake resistance.', true),
            ch('Rules for safe construction are…', '*building codes|recipes|passwords'),
          ],
          ms: ['Explains earthquake effects', 'Describes resistant designs', 'Tests models systematically'],
        }),
      ]),
    ]),
    S('s12', 'Sustainable engineering, learning from failure and ethics.', [
      'Evaluate sustainability in engineering', 'Analyse engineering failures', 'Apply ethical reasoning to engineering decisions',
    ], [
      U('sustainable', 'Sustainable Engineering', 'Building for the future.', 'Embodied carbon; Green buildings; Life-cycle thinking', [
        L('green-engineering', 'Engineering for a Liveable Planet', {
          o: ['Explain embodied carbon and life-cycle assessment', 'Evaluate sustainable design strategies'],
          p: ['Knows materials and structures'],
          e: [
            'Construction and buildings account for a large share of global energy use and carbon emissions. Cement production alone is responsible for roughly 7–8% of global CO₂ emissions.',
            'Embodied carbon is the carbon emitted making and transporting materials; operational carbon comes from using a building (cooling, lighting). Life-cycle assessment considers impacts from raw materials to demolition and reuse.',
            'Sustainable strategies include passive cooling (orientation, shading, courtyards and jaalis, like traditional Indian architecture), low-carbon materials (fly-ash concrete, bamboo, mass timber), renewable energy and designing for reuse. Rating systems such as GRIHA and IGBC assess green buildings in India.',
          ],
          v: 'embodied carbon = emissions from making and transporting materials; life-cycle assessment = evaluating impacts over a product\'s whole life; passive cooling = cooling without powered systems; retrofit = to upgrade an existing structure',
          x: ['Jaalis and courtyards in traditional havelis.', 'Fly ash, a power-plant by-product, used in cement.'],
          s: ['The Building That Breathes', 'An architect in Ahmedabad designed an office with thick walls, deep shaded windows, a central courtyard and wind towers drawing hot air out. In summer, it stayed comfortable with very little air conditioning. "Our grandparents knew this," she said. "We\'re just measuring it now."'],
          a: [
            ch('Cement production causes roughly what share of global CO₂?', '*7–8%|50%|0.1%'),
            mt('Match the term', 'embodied carbon=emissions from making materials|operational carbon=emissions from using a building|passive cooling=cooling without power'),
            tf('Traditional Indian architecture used passive cooling.', true),
            ch('GRIHA is a…', '*green building rating system in India|type of brick|bridge'),
          ],
          t: ['Is it better to renovate or rebuild? When?', 'How can traditional knowledge improve modern design?'],
          k: ['Present a sustainability assessment of a building you know.'],
          m: ['Green Redesign Project', 'floor plan of your home or school, research sources', 'Audit energy use and materials | Propose passive and active improvements | Estimate impacts using available data | Write a 1500-word proposal'],
          q: [
            ch('Upgrading an existing structure is a…', '*retrofit|ruin|replica'),
            tf('Life-cycle assessment considers demolition and reuse.', true),
            ch('Bamboo is considered a…', '*low-carbon material|high-carbon material|metal'),
          ],
          ms: ['Explains carbon concepts', 'Evaluates strategies with evidence', 'Proposes sustainable designs'],
        }),
      ]),
      U('failure-ethics', 'Failure and Ethics', 'Learning from what went wrong.', 'Tacoma Narrows and other failures; Root-cause analysis; Codes of ethics', [
        L('failure-ethics', 'When Engineering Fails', {
          o: ['Analyse engineering failures using root-cause analysis', 'Apply professional ethics to engineering dilemmas'],
          p: ['Knows structures and forces'],
          e: [
            'Engineers learn from failure. The Tacoma Narrows Bridge in the USA collapsed in 1940 just months after opening, when wind caused it to twist violently (aeroelastic flutter). It led to wind-tunnel testing of bridge designs.',
            'Root-cause analysis looks beyond the immediate cause to underlying factors: design errors, material defects, poor maintenance, pressure to cut costs or ignored warnings. The Space Shuttle Challenger disaster (1986) involved a known O-ring problem in cold weather and decision-making failures.',
            'Professional codes of ethics require engineers to hold public safety paramount, be honest and competent, and speak up about risks. Engineers sometimes face difficult choices between employer pressure and public safety.',
          ],
          v: 'root cause = the underlying reason for a failure; flutter = a self-reinforcing vibration caused by wind; whistle-blower = a person who reports wrongdoing; paramount = most important',
          x: ['Galloping Gertie, the Tacoma Narrows Bridge.', 'Engineers warning about O-rings before Challenger.'],
          s: ['The Night Before Challenger', 'On the night before the 1986 launch, engineer Roger Boisjoly and colleagues at the contractor warned that the O-ring seals might fail in the freezing cold. Under pressure, managers overruled them. The next morning, Challenger broke apart 73 seconds after launch. Boisjoly later spoke widely about engineering ethics and the duty to speak up.'],
          a: [
            ch('The Tacoma Narrows Bridge failed because of…', '*wind-induced twisting|an earthquake|a ship collision'),
            ch('Engineers\' codes hold what paramount?', '*public safety|profit|speed'),
            tf('Root-cause analysis looks beyond the immediate cause.', true),
            mt('Match the term', 'root cause=underlying reason|flutter=wind-driven vibration|whistle-blower=reports wrongdoing'),
          ],
          t: ['What should an engineer do if a manager ignores a safety concern?', 'Why are failures valuable for learning?'],
          k: ['Lead a discussion on an engineering ethics case study.'],
          m: ['Failure Case Study', 'documented reports, scholarly sources', 'Choose a well-documented engineering failure | Construct a timeline | Perform a root-cause analysis | Write a 1500-word report with ethical lessons'],
          q: [
            ch('The underlying reason for a failure is the…', '*root cause|surface cause|cover story'),
            tf('Tacoma Narrows led to wind-tunnel testing of bridges.', true),
            ch('Most important means…', '*paramount|parallel|partial'),
          ],
          ms: ['Analyses failures systematically', 'Applies ethical codes', 'Draws lessons for practice'],
        }),
      ]),
    ]),
  ],
});
