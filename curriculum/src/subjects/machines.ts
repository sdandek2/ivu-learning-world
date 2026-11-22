import { subject, S, U, L, ch, tf, od, mt, ct } from '../dsl.ts';

export default subject({
  id: 'machines',
  description: 'Simple machines and mechanisms from wheels and ramps to robots: pushes and pulls, wheels, ramps, levers, pulleys, the six simple machines, gears, mechanical advantage and work, compound machines, engines and efficiency, and robotics, control systems and automation.',
  stages: [
    S('s4', 'Wheels and ramps make work easier.', [
      'Notice wheels everywhere', 'Test how ramps help move things', 'Use push and pull words',
    ], [
      U('wheels', 'Wonderful Wheels', 'Things that roll.', 'Round wheels roll; Wheels on vehicles; Rolling vs sliding', [
        L('wheels', 'Why Wheels Roll', {
          o: ['Find wheels on everyday things', 'Explain that wheels make moving things easier'],
          p: ['Knows push and pull'],
          e: [
            'A wheel is round, so it can roll smoothly. Rolling is much easier than sliding or dragging.',
            'Wheels are on cars, bicycles, trains, prams, shopping trolleys, office chairs and suitcases. They help us move heavy things with less effort.',
            'The wheel is one of the oldest and most important inventions — people have used wheels for more than 5,000 years!',
          ],
          v: 'wheel = a round object that turns; roll = to move by turning over and over; drag = to pull something along the ground; effort = how hard you work',
          x: ['A suitcase with wheels is easier to pull.', 'A toy car rolling across the floor.'],
          s: ['Grandma\'s Heavy Bag', 'Grandma\'s shopping bag was so heavy she could barely drag it. Ivaan had an idea. He fetched his old toy wagon, and together they lifted the bag onto it. Now Ivaan could pull it all by himself — rumble, rumble down the path. "Wheels are magic," said Grandma. "Not magic," said Ivaan. "Science!"'],
          a: [
            ch('Wheels are…', '*round|square|flat'),
            ch('Which is easier?', '*rolling a box on wheels|dragging a box|carrying it on your head'),
            tf('People have used wheels for thousands of years.', true),
            ct('How many wheels on a bicycle? 🚲', 2),
          ],
          t: ['What would the world be like without wheels?', 'Why don\'t square wheels work?'],
          k: ['Go on a wheel hunt and tell a grown-up how many wheels you found.'],
          m: ['🧪 Roll or Slide Test', 'a toy car, a block of the same size, a smooth floor', 'Push the block and the car with the same small push | See which goes further | Try again on a carpet | Talk about what you found'],
          q: [
            ch('Moving by turning over and over is…', '*rolling|sliding|jumping'),
            tf('A shopping trolley has wheels.', true),
            ct('How many wheels on a car? 🚗', 4),
          ],
          ms: ['Finds wheels in the environment', 'Explains rolling vs sliding', 'Tests movement'],
        }),
      ]),
      U('ramps', 'Ramps and Slopes', 'Going up and down.', 'What is a ramp; Steep and gentle slopes; Ramps help people', [
        L('ramps', 'Up the Ramp', {
          o: ['Explain how a ramp helps move things up', 'Compare steep and gentle ramps'],
          p: ['Knows about rolling'],
          e: [
            'A ramp is a sloping surface that joins a low place to a high place. It is easier to push a heavy thing up a ramp than to lift it straight up.',
            'A gentle (less steep) ramp is easier to push up but longer. A steep ramp is shorter but harder.',
            'Ramps help people using wheelchairs and prams get into buildings. Things also roll down ramps faster when they are steeper.',
          ],
          v: 'ramp = a sloping surface between low and high places; slope = a surface that goes up or down; steep = going up sharply; gentle = going up slowly',
          x: ['A wheelchair ramp at a hospital.', 'A slide at the playground.'],
          s: ['The Car Race', 'Ivaan made two ramps with books and boards: one steep, one gentle. He let two toy cars go at the same time. Zoom! The car on the steep ramp shot off first. "Steep is fast going down," he said. Then he tried pushing a block up each ramp. "But gentle is easier going up!"'],
          a: [
            ch('A ramp helps us…', '*move heavy things up more easily|swim|fly'),
            ch('Which ramp makes cars roll faster?', '*steep|gentle|flat'),
            tf('Ramps help people using wheelchairs.', true),
            ch('Which ramp is easier to push something up?', '*gentle|steep|vertical wall'),
          ],
          t: ['Where have you seen ramps?', 'Why do buildings need ramps as well as stairs?'],
          k: ['Explain to a grown-up why ramps help people.'],
          m: ['🧪 Ramp Race', 'a board, books, toy cars', 'Make a ramp with one book | Race a car and see how far it goes | Add more books to make it steeper | Compare the distances'],
          q: [
            ch('Going up sharply is…', '*steep|gentle|flat'),
            tf('A slide is a kind of ramp.', true),
            ch('A sloping surface is a…', '*ramp|wheel|rope'),
          ],
          ms: ['Explains how ramps help', 'Compares steep and gentle slopes', 'Values accessibility'],
        }),
      ]),
    ]),
    S('s5', 'Levers and pulleys.', [
      'Use a lever to lift a load', 'Explain the fulcrum', 'Use a pulley to lift things',
    ], [
      U('levers', 'Levers', 'Seesaws and spoons.', 'Load, effort and fulcrum; Seesaws; Levers at home', [
        L('levers', 'Lift With a Lever', {
          o: ['Name the load, effort and fulcrum on a lever', 'Show that moving the fulcrum changes how easy lifting is'],
          p: ['Knows push and pull'],
          e: [
            'A lever is a stiff bar that turns on a point called the fulcrum. The thing you lift is the load; the push you give is the effort.',
            'A seesaw is a lever! If a heavier person sits closer to the middle, a lighter person can balance them by sitting further away.',
            'Putting the fulcrum close to the load makes it easier to lift. Levers around us include spoons used to open tin lids, bottle openers and scissors.',
          ],
          v: 'lever = a stiff bar that turns on a point; fulcrum = the point a lever turns on; load = the thing being moved; effort = the force you use',
          x: ['A seesaw in the park.', 'A spoon prising open a tin lid.'],
          s: ['Papa and the Seesaw', 'Papa sat on one end of the seesaw. Ivaan sat on the other end — and nothing happened! Papa was too heavy. Then Papa slid closer to the middle. Ivaan went down and Papa went up! "Moving closer to the fulcrum made me lighter on the lever," Papa explained. Ivaan felt as strong as a giant.'],
          a: [
            mt('Match the lever part', 'fulcrum=the turning point|load=the thing being lifted|effort=the push you give'),
            ch('A seesaw is a…', '*lever|pulley|wheel'),
            tf('Putting the fulcrum near the load makes lifting easier.', true),
            ch('The point a lever turns on is the…', '*fulcrum|load|handle'),
          ],
          t: ['How could a small child lift an adult with a lever?', 'What levers can you find in the kitchen?'],
          k: ['Show a grown-up a ruler-and-pencil lever and name its parts.'],
          m: ['🧪 Ruler Lever', 'a ruler, a pencil, coins', 'Rest the ruler on a pencil as a fulcrum | Put coins on one end | Press the other end to lift them | Move the pencil and feel the difference'],
          q: [
            ch('The thing being moved is the…', '*load|fulcrum|ruler'),
            tf('A bottle opener is a lever.', true),
            ch('The force you use is the…', '*effort|load|fulcrum'),
          ],
          ms: ['Identifies lever parts', 'Demonstrates fulcrum position effects', 'Finds everyday levers'],
        }),
      ]),
      U('pulleys', 'Pulleys', 'Wheels and ropes.', 'What is a pulley; Flags and wells; More pulleys, less effort', [
        L('pulleys', 'Pulling Down to Lift Up', {
          o: ['Explain how a single pulley changes the direction of a pull', 'Describe where pulleys are used'],
          p: ['Knows wheels'],
          e: [
            'A pulley is a wheel with a groove that holds a rope. When you pull down on one end of the rope, the load on the other end goes up!',
            'A single fixed pulley changes the direction of the pull — pulling down is easier than lifting up because you can use your body weight.',
            'Using several pulleys together (a block and tackle) reduces the effort needed. Pulleys are used in wells, flagpoles, cranes and lifts.',
          ],
          v: 'pulley = a wheel with a grooved rim for a rope; groove = a narrow channel; crane = a machine for lifting heavy things; direction = the way something moves',
          x: ['Drawing water from a village well.', 'Raising the flag on Independence Day.'],
          s: ['The Flag Goes Up', 'On Independence Day, Ivaan watched the principal pull down on a rope. At the top of the pole, a small wheel turned, and the flag rose up and up until it unfurled in the breeze, petals falling out. "Pull down, flag goes up," Ivaan whispered. "That\'s a pulley!"'],
          a: [
            ch('When you pull down on a pulley rope, the load goes…', '*up|down|sideways'),
            ch('A pulley is a wheel with a…', '*groove for a rope|motor|battery'),
            tf('More pulleys together can reduce the effort.', true),
            mt('Match the pulley use', 'flagpole=raising a flag|well=lifting water|crane=lifting heavy loads'),
          ],
          t: ['Why is pulling down easier than lifting up?', 'Where else could you use a pulley?'],
          k: ['Explain how a flag goes up a pole.'],
          m: ['🧪 Cotton Reel Pulley', 'an empty cotton reel, a pencil, string, a small bucket or cup', 'Push a pencil through the reel and hold it between two chairs | Hang string over the reel | Tie a cup on one end | Pull down to lift small toys'],
          q: [
            ch('A machine for lifting heavy things is a…', '*crane|car|clock'),
            tf('A single fixed pulley changes the direction of a pull.', true),
            ch('A narrow channel is a…', '*groove|gear|gate'),
          ],
          ms: ['Explains pulley action', 'Builds a simple pulley', 'Identifies pulley uses'],
        }),
      ]),
    ]),
    S('s6', 'The six simple machines and gears.', [
      'Name and identify the six simple machines', 'Explain how gears change speed and direction', 'Find simple machines in tools',
    ], [
      U('six-machines', 'Six Simple Machines', 'The building blocks of machines.', 'Lever, wheel and axle, pulley; Inclined plane, wedge, screw; Machines in tools', [
        L('six-simple', 'The Six Simple Machines', {
          o: ['Name and describe the six simple machines', 'Identify simple machines in everyday tools'],
          p: ['Knows levers, pulleys and ramps'],
          e: [
            'There are six classical simple machines: the lever, the wheel and axle, the pulley, the inclined plane (ramp), the wedge and the screw.',
            'A wedge is two inclined planes back to back — like an axe or knife — that splits things apart. A screw is an inclined plane wrapped around a cylinder; turning it moves it in or lifts things, like a jar lid or a bolt.',
            'A wheel and axle is a big wheel fixed to a smaller rod (axle) — turning the big wheel turns the axle with more force, as in a door knob or a steering wheel. Simple machines make work easier by changing the size or direction of a force.',
          ],
          v: 'wedge = two inclined planes that split things; screw = an inclined plane wrapped around a cylinder; axle = a rod that a wheel turns on; inclined plane = a ramp',
          x: ['An axe as a wedge.', 'A door knob as a wheel and axle.'],
          s: ['The Machine Hunt', 'Zuri\'s teacher challenged the class: find all six simple machines in the school in ten minutes. Zuri found a ramp at the entrance, a pulley on the flagpole, a wedge (doorstop!), screws in a desk, a wheel and axle in the tap, and a lever in the stapler. "Six out of six!" she shouted, out of breath.'],
          a: [
            mt('Match the tool to the simple machine', 'axe=wedge|jar lid=screw|door knob=wheel and axle|wheelchair ramp=inclined plane'),
            ct('How many classical simple machines are there? ⚙️⚙️⚙️⚙️⚙️⚙️', 6),
            tf('A screw is an inclined plane wrapped around a cylinder.', true),
            ch('Two inclined planes back to back make a…', '*wedge|pulley|lever'),
          ],
          t: ['Which simple machine do you use most?', 'Why are they called "simple"?'],
          k: ['Show three tools and name the simple machine in each.'],
          m: ['Simple Machine Hunt', 'notebook, camera (optional)', 'Search your home for all six simple machines | Draw or photograph each | Label the machine type | Present your collection'],
          q: [
            ch('A rod a wheel turns on is an…', '*axle|axe|arrow'),
            tf('A doorstop is a wedge.', true),
            ch('A ramp is also called an…', '*inclined plane|incline wheel|axle'),
          ],
          ms: ['Names six simple machines', 'Identifies machines in tools', 'Explains how they help'],
        }),
      ]),
      U('gears', 'Gears', 'Toothed wheels.', 'Gears turn each other; Big and small gears; Gears in bicycles and clocks', [
        L('gears', 'Teeth That Turn', {
          o: ['Explain how meshed gears turn in opposite directions', 'Describe how gear size changes speed'],
          p: ['Knows wheel and axle'],
          e: [
            'A gear is a wheel with teeth. When two gears mesh (their teeth fit together), turning one turns the other — in the opposite direction.',
            'If a big gear turns a small gear, the small gear spins faster. If a small gear turns a big gear, the big gear turns more slowly but with more force.',
            'Gears are in bicycles (using a chain), clocks, washing machines and cars. On a bicycle, a low gear makes pedalling uphill easier.',
          ],
          v: 'gear = a wheel with teeth; mesh = when gear teeth fit together; chain = linked metal loops connecting gears; speed = how fast something moves',
          x: ['Bicycle gears for going uphill.', 'Tiny gears inside a wind-up clock.'],
          s: ['The Bicycle Hill', 'Kiko pedalled hard up the hill, puffing. His cousin called, "Change to a lower gear!" Kiko clicked the lever, and suddenly pedalling was much easier — though his legs went round faster and the bike moved slower. "Gears trade speed for force," his cousin said. Kiko reached the top grinning.'],
          a: [
            ch('Two meshed gears turn in…', '*opposite directions|the same direction|no direction'),
            ch('A big gear turning a small gear makes the small gear spin…', '*faster|slower|not at all'),
            tf('A low gear on a bicycle helps going uphill.', true),
            ch('A wheel with teeth is a…', '*gear|pulley|wedge'),
          ],
          t: ['If three gears are in a row, which way does the third turn?', 'Why do clocks need gears?'],
          k: ['Show how two gears turn using cardboard gears.'],
          m: ['🧪 Cardboard Gears', 'corrugated cardboard, pins, a board (with an adult)', 'Cut circles and add teeth with cardboard strips | Pin them on a board so they mesh | Turn one and watch the others | Mark directions and count turns', "An adult should prepare the board and secure the pins. Keep sharp pin points covered and use child-safe scissors with supervision."],
          q: [
            ch('When gear teeth fit together they…', '*mesh|melt|mix'),
            tf('A chain connects bicycle gears.', true),
            ch('A small gear turning a big gear makes the big gear…', '*slower but stronger|faster|stop'),
          ],
          ms: ['Explains gear direction', 'Relates gear size to speed and force', 'Builds a gear train'],
        }),
      ]),
    ]),
    S('s7', 'Mechanical advantage, work and compound machines.', [
      'Calculate mechanical advantage', 'Explain work and the trade-off between force and distance', 'Analyse compound machines',
    ], [
      U('mechanical-advantage', 'Mechanical Advantage', 'Measuring how machines help.', 'Work = force × distance; Mechanical advantage; Lever classes', [
        L('ma', 'No Free Lunch', {
          o: ['Calculate work and mechanical advantage', 'Classify levers into three classes'],
          p: ['Knows the six simple machines'],
          e: [
            'In science, work is done when a force moves something: work = force × distance, measured in joules. Simple machines don\'t reduce the work needed — they trade force for distance. A ramp needs less force but a longer distance.',
            'Mechanical advantage (MA) = load ÷ effort. If you lift a 600 N load with 200 N of effort, MA = 3. For an ideal lever, MA also equals effort arm ÷ load arm. Archimedes said, "Give me a place to stand, and I will move the Earth."',
            'Levers come in three classes: first class (fulcrum in the middle — seesaw), second class (load in the middle — wheelbarrow), third class (effort in the middle — tweezers, your forearm). Third-class levers have MA less than 1 but increase speed and range of motion.',
          ],
          v: 'work = force multiplied by distance moved; joule = the unit of work and energy; mechanical advantage = load divided by effort; newton = the unit of force',
          x: ['A wheelbarrow (second-class lever).', 'Your forearm lifting a cup (third-class lever).'],
          s: ['Archimedes and the Ship', 'An ancient story tells that Archimedes of Syracuse used a system of levers and pulleys to drag a fully loaded ship onto shore single-handed, astonishing King Hiero. Whether or not it happened exactly so, the principle was real: with enough mechanical advantage, a small force can move a huge load.'],
          a: [
            ch('If load = 600 N and effort = 200 N, MA is…', '*3|400|1200'),
            mt('Match the lever to its class', 'seesaw=first class|wheelbarrow=second class|tweezers=third class'),
            tf('Simple machines trade force for distance.', true),
            ch('Work is measured in…', '*joules|metres|kilograms'),
          ],
          t: ['Why do we use tweezers if their MA is less than 1?', 'What did Archimedes mean about moving the Earth?'],
          k: ['Explain mechanical advantage with a worked example.'],
          m: ['🧪 Measuring MA', 'a spring balance or luggage scale, a board ramp, a weight', 'Measure the force to lift a weight straight up | Measure the force to pull it up a ramp | Calculate MA for different ramp angles | Graph and explain the results'],
          q: [
            ch('Mechanical advantage = …', '*load ÷ effort|effort ÷ distance|load × effort'),
            tf('A wheelbarrow is a second-class lever.', true),
            ch('The unit of force is the…', '*newton|joule|watt'),
          ],
          ms: ['Calculates work and MA', 'Classifies levers', 'Explains the force-distance trade-off'],
        }),
      ]),
      U('compound', 'Compound Machines', 'Simple machines combined.', 'Bicycles; Cranes and excavators; Rube Goldberg machines', [
        L('compound', 'Machines Inside Machines', {
          o: ['Identify simple machines within compound machines', 'Design a chain-reaction machine'],
          p: ['Knows simple machines and gears'],
          e: [
            'A compound machine combines two or more simple machines. Scissors are two levers with wedge blades. A bicycle uses wheels and axles, levers (brakes, pedals), gears and screws.',
            'Cranes combine pulleys, levers and winches. An excavator uses hydraulic systems with levers to dig.',
            'Rube Goldberg machines, named after an American cartoonist, are deliberately complicated chain-reaction machines that perform a simple task in many steps — great for learning how energy passes from one part to the next.',
          ],
          v: 'compound machine = a machine made of two or more simple machines; hydraulic = using liquid under pressure; chain reaction = a series of events each causing the next; winch = a drum for winding rope',
          x: ['Scissors: levers plus wedges.', 'A tow truck using a winch.'],
          s: ['The Breakfast Machine', 'For a school project, Meera\'s team built a Rube Goldberg machine to drop a teabag into a cup. A marble rolled down a ramp, knocked dominoes, tipped a lever, released a toy car that pulled a string over a pulley — and plop! The teabag landed perfectly. It took 22 steps and 40 attempts.'],
          a: [
            ch('Scissors are made of…', '*two levers and wedges|pulleys only|a screw only'),
            mt('Match the machine to its parts', 'bicycle=wheels, gears and levers|crane=pulleys and winches|scissors=levers and wedges'),
            tf('Rube Goldberg machines are deliberately complicated.', true),
            ch('Using liquid under pressure is…', '*hydraulic|electric|magnetic'),
          ],
          t: ['Why is a bicycle such an efficient machine?', 'What makes Rube Goldberg machines fun to build?'],
          k: ['Present your chain-reaction machine and name each simple machine in it.'],
          m: ['Chain-Reaction Machine', 'dominoes, ramps, marbles, string, cups, toy cars', 'Plan a machine with at least six steps | Include at least three simple machines | Build and test each step separately | Run the whole machine and film it'],
          q: [
            ch('A series of events each causing the next is a…', '*chain reaction|chain store|chair'),
            tf('A compound machine has two or more simple machines.', true),
            ch('A drum for winding rope is a…', '*winch|wedge|wheelbarrow'),
          ],
          ms: ['Identifies parts of compound machines', 'Designs chain reactions', 'Troubleshoots mechanisms'],
        }),
      ]),
    ]),
    S('s9', 'Engines, energy and efficiency.', [
      'Explain energy transfers in machines', 'Calculate efficiency', 'Describe how engines work',
    ], [
      U('efficiency', 'Energy and Efficiency', 'Where does energy go?', 'Energy transfers; Friction and wasted energy; Efficiency calculations', [
        L('efficiency', 'No Machine Is Perfect', {
          o: ['Describe energy transfers and losses in machines', 'Calculate efficiency as a percentage'],
          p: ['Knows work and mechanical advantage'],
          e: [
            'Energy cannot be created or destroyed, only transferred — the law of conservation of energy. In machines, some energy is always transferred to less useful forms, mostly heat from friction, and sound.',
            'Efficiency = useful energy output ÷ total energy input × 100%. If a motor uses 500 J and does 400 J of useful work, it is 80% efficient. No real machine is 100% efficient.',
            'Engineers increase efficiency by reducing friction (lubricants, ball bearings, streamlining). A typical petrol car engine converts only around 20–35% of fuel energy into motion, while electric motors are often over 85% efficient.',
          ],
          v: 'efficiency = useful output divided by total input; friction = a force opposing motion; lubricant = a substance that reduces friction; conservation of energy = energy is not created or destroyed',
          x: ['Oiling a squeaky bicycle chain.', 'Ball bearings in a skateboard wheel.'],
          s: ['The Squeaky Wheel', 'Kiko\'s bicycle squeaked and felt hard to pedal. His uncle dripped oil onto the chain and wheel bearings. Suddenly the bike glided silently. "The squeak was energy escaping as sound and heat," his uncle said. "Now more of your effort goes into moving forward."'],
          a: [
            ch('If input = 500 J and useful output = 400 J, efficiency is…', '*80%|40%|125%'),
            ch('Most wasted energy in machines becomes…', '*heat|light|new energy'),
            tf('No real machine is 100% efficient.', true),
            mt('Match the method to how it reduces losses', 'lubricant=reduces friction|ball bearings=roll instead of slide|streamlining=reduces air resistance'),
          ],
          t: ['Why can\'t a perpetual motion machine work?', 'Why are electric motors more efficient than petrol engines?'],
          k: ['Explain efficiency with a calculation example.'],
          m: ['🧪 Friction Investigation', 'a toy car, different surfaces, a ramp, oil or soap (with an adult)', 'Roll a car down a ramp onto different surfaces | Measure the distance travelled | Try lubricating the axles | Calculate and explain the differences'],
          q: [
            ch('A force opposing motion is…', '*friction|gravity|magnetism'),
            tf('Energy cannot be created or destroyed.', true),
            ch('A substance that reduces friction is a…', '*lubricant|glue|fuel'),
          ],
          ms: ['Describes energy transfers', 'Calculates efficiency', 'Explains methods to reduce losses'],
        }),
      ]),
      U('engines', 'Engines', 'From steam to electric.', 'Steam engines; Internal combustion; Electric motors', [
        L('engines', 'How Engines Work', {
          o: ['Explain how steam, combustion and electric engines produce motion', 'Evaluate the environmental impact of engines'],
          p: ['Knows energy and efficiency'],
          e: [
            'A steam engine burns fuel to boil water; the expanding steam pushes a piston. James Watt\'s improvements in the 1760s–1780s, including a separate condenser, made steam engines far more efficient, powering the Industrial Revolution. India\'s first passenger train ran from Bori Bunder to Thane in 1853.',
            'An internal combustion engine burns fuel inside cylinders. In a four-stroke engine: intake (fuel and air enter), compression, power (a spark ignites the mixture, pushing the piston) and exhaust. The pistons turn a crankshaft.',
            'Electric motors use magnetism: a current in a coil within a magnetic field creates a turning force. Electric vehicles produce no exhaust at the tailpipe, but their overall impact depends on how the electricity is generated.',
          ],
          v: 'piston = a part that moves up and down in a cylinder; crankshaft = a shaft turning up-and-down motion into rotation; combustion = burning; stroke = one movement of a piston',
          x: ['A steam locomotive on a heritage railway.', 'A scooter\'s petrol engine vs an e-scooter\'s motor.'],
          s: ['400 Passengers to Thane', 'On 16 April 1853, three steam locomotives named Sahib, Sultan and Sindh pulled 14 carriages carrying about 400 passengers from Bori Bunder in Bombay to Thane — a journey of about 34 km. Crowds gathered to watch, and a 21-gun salute marked the start of railways in India.'],
          a: [
            od('Put the four strokes in order', 'intake|compression|power|exhaust'),
            ch('India\'s first passenger train ran in…', '*1853|1947|1901'),
            tf('Electric motors use magnetism.', true),
            ch('A part turning up-and-down motion into rotation is the…', '*crankshaft|piston|spark plug'),
          ],
          t: ['Are electric vehicles always cleaner? What does it depend on?', 'How did steam engines change society?'],
          k: ['Explain the four-stroke cycle with a diagram.'],
          m: ['🧪 Build a Simple Motor', 'a battery, copper wire, a magnet, safety pins (with an adult)', 'Wind a coil of wire and strip the ends | Support it on safety pins attached to a battery | Place a magnet underneath | Observe and explain why it spins', "An adult must assemble and supervise the battery circuit. Use only a low-voltage battery, disconnect it between tests, and stop if the wire or battery becomes warm. Never connect to a wall socket."],
          q: [
            ch('Burning is…', '*combustion|condensation|conduction'),
            tf('James Watt improved the steam engine.', true),
            ch('One movement of a piston is a…', '*stroke|strike|string'),
          ],
          ms: ['Explains engine types', 'Describes the four-stroke cycle', 'Evaluates environmental impact'],
        }),
      ]),
    ]),
    S('s12', 'Robotics, control systems and automation.', [
      'Explain sensors, actuators and control systems', 'Design a feedback control loop', 'Evaluate the social impact of automation',
    ], [
      U('robotics', 'Robotics and Control', 'Machines that sense and act.', 'Sensors and actuators; Feedback control; Programming a robot', [
        L('robotics', 'Sense, Think, Act', {
          o: ['Describe the sense-think-act cycle of a robot', 'Explain open-loop and closed-loop control'],
          p: ['Knows motors, gears and coding'],
          e: [
            'A robot senses its environment with sensors (light, distance, touch, cameras), processes information with a controller (a computer) and acts with actuators (motors, servos, grippers).',
            'An open-loop system acts without checking results — a simple toaster timer. A closed-loop (feedback) system measures its output and adjusts — a thermostat turns heating on and off to keep a set temperature. Cruise control and self-balancing robots use feedback.',
            'A common controller is PID (proportional-integral-derivative), which adjusts based on the current error, past errors and how fast the error is changing. Robots are used in factories, surgery, warehouses and space — ISRO\'s Pragyan rover explored the Moon in 2023.',
          ],
          v: 'sensor = a device that detects something; actuator = a device that creates movement; feedback = using output information to adjust; controller = the part that makes decisions',
          x: ['A line-following robot using light sensors.', 'A thermostat as a feedback system.'],
          s: ['The Robot That Kept Falling', 'Meera\'s two-wheeled robot kept toppling over. She added a gyroscope sensor and wrote feedback code: if tilting forward, drive forward slightly; if tilting back, reverse. It wobbled wildly at first. She tuned the numbers in her controller patiently. Finally, it balanced — rocking gently like a person standing on a bus.'],
          a: [
            mt('Match the part', 'sensor=detects the environment|controller=makes decisions|actuator=creates movement'),
            ch('A thermostat is an example of…', '*closed-loop control|open-loop control|no control'),
            tf('Feedback systems measure output and adjust.', true),
            ch('Pragyan was a rover on…', '*the Moon|Mars|Venus'),
          ],
          t: ['Why do self-balancing robots need feedback?', 'What sensors would a robot vacuum need?'],
          k: ['Explain sense-think-act using a real robot example.'],
          m: ['Line-Following Robot', 'a robotics kit or microcontroller, light sensors, motors (or a free simulator)', 'Build or simulate a two-wheeled robot | Add two light sensors | Program feedback to follow a black line | Tune and document performance'],
          q: [
            ch('A device that creates movement is an…', '*actuator|antenna|alarm'),
            tf('A toaster timer is open-loop.', true),
            ch('Using output information to adjust is…', '*feedback|feed-forward only|failure'),
          ],
          ms: ['Explains the robot cycle', 'Distinguishes control types', 'Designs feedback behaviour'],
        }),
      ]),
      U('automation', 'Automation and Society', 'Machines and work.', 'Industrial revolutions; Automation and jobs; Safety and ethics', [
        L('automation', 'Machines, Jobs and the Future', {
          o: ['Trace the history of industrial automation', 'Evaluate automation\'s effects on work and society'],
          p: ['Knows robotics and engines'],
          e: [
            'The First Industrial Revolution (late 1700s) mechanised production with water and steam. The Second (late 1800s) brought electricity and assembly lines — Henry Ford\'s moving assembly line (1913) cut car assembly time dramatically. Later waves added computers and, now, AI and connected systems.',
            'Automation increases productivity and can remove dangerous, dull or dirty tasks. But it can also displace workers. In the early 1800s, Luddites in England smashed textile machinery that threatened their livelihoods. Economists debate whether new technologies create more jobs than they destroy and who benefits.',
            'Responses include education and retraining, social safety nets, and designing technology to support workers. Safety standards govern how robots work alongside humans (collaborative robots, or "cobots").',
          ],
          v: 'automation = using machines to do tasks without human effort; productivity = output per worker or hour; Luddite = a 19th-century worker who opposed textile machines; cobot = a robot designed to work alongside people',
          x: ['Car factories with robotic welding arms.', 'Cobots helping workers lift heavy parts.'],
          s: ['The Handloom and the Power Loom', 'In 19th-century India, cheap machine-made cloth from British mills flooded markets, and many handloom weavers lost their livelihoods. Later, Gandhi\'s khadi movement promoted hand-spinning partly in response. The story shows that automation\'s effects depend on who controls the machines and who shares the gains.'],
          a: [
            od('Put these in time order', 'Steam-powered mills|Electric assembly lines|Computers in factories|AI and connected systems'),
            ch('The Luddites were…', '*workers who opposed textile machines|robot designers|inventors of steam'),
            tf('Economists debate how automation affects jobs.', true),
            ch('A robot designed to work alongside people is a…', '*cobot|drone|android only'),
          ],
          t: ['Should some jobs never be automated?', 'How can society share the benefits of automation fairly?'],
          k: ['Debate the motion: "Automation will create more good jobs than it destroys."'],
          m: ['Automation Impact Report', 'economic data, interviews, scholarly sources', 'Choose an industry in India | Research how automation has changed it | Interview a worker if possible (with consent) | Write a 2000-word report with recommendations'],
          q: [
            ch('Output per worker or hour is…', '*productivity|profit|population'),
            tf('Ford\'s moving assembly line began in 1913.', true),
            ch('Using machines to do tasks without human effort is…', '*automation|animation|aviation'),
          ],
          ms: ['Traces industrial history', 'Evaluates social effects', 'Proposes fair responses'],
        }),
      ]),
    ]),
  ],
});
