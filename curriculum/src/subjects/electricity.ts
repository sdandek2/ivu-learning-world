import { subject, S, U, L, ch, tf, mt } from '../dsl.ts';

export default subject({
  id: 'electricity',
  description: 'Electricity and circuits from staying safe around plugs to semiconductors: things that use electricity, batteries and mains, simple circuits, conductors and insulators, switches, series and parallel circuits, magnets and electromagnets, voltage, current and resistance, generating power, electronic components, renewable energy and the grid, AC and DC, and microchips.',
  stages: [
    S('s4', 'Electricity around us and staying safe.', [
      'Name things that use electricity', 'Know battery and plug-in devices', 'Follow electrical safety rules',
    ], [
      U('around-us', 'Electricity Around Us', 'What uses electricity?', 'Lights, fans and fridges; Batteries; Plugs and sockets', [
        L('uses', 'What Needs Electricity?', {
          o: ['Name things that use electricity', 'Sort devices into battery-powered and plug-in'],
          p: ['Knows everyday objects at home'],
          e: [
            'Electricity is a kind of energy that makes things work: lights glow, fans spin, fridges stay cold and phones charge.',
            'Some things get electricity from batteries — torches, toy cars, TV remotes. Others plug into sockets in the wall — fridges, washing machines, televisions.',
            'Some things don\'t need electricity at all: a bicycle, a book or a ball!',
          ],
          v: 'electricity = energy that makes many machines work; battery = a small store of electricity; socket = the place in the wall where plugs go; device = a machine or tool',
          x: ['A torch uses batteries.', 'A fridge plugs into the wall.'],
          s: ['The Day the Lights Went Out', 'One stormy evening, the power went off. The fan stopped and the lights went dark! Ivaan found his torch and switched it on — it still worked because it had batteries. Mama lit a candle, and they played board games, which didn\'t need electricity at all. When the lights came back, everyone cheered.'],
          a: [
            ch('Which uses batteries?', '*a torch|a fridge|a book'),
            ch('Which needs no electricity?', '*a bicycle|a television|a fan'),
            tf('Electricity is a kind of energy.', true),
            mt('Match the device to its power', 'TV remote=battery|washing machine=plug|ball=no electricity'),
          ],
          t: ['What would your day be like without electricity?', 'Why did the torch still work in the storm?'],
          k: ['Show a grown-up three things that use electricity at home.'],
          m: ['Electricity Hunt Chart', 'paper, crayons', 'Walk around home with a grown-up | Draw things that use batteries in one column | Draw plug-in things in another | Add things that need no electricity'],
          q: [
            ch('The place in the wall for plugs is a…', '*socket|window|shelf'),
            tf('A toy car can run on batteries.', true),
            ch('A small store of electricity is a…', '*battery|bottle|bucket'),
          ],
          ms: ['Identifies electrical devices', 'Sorts power sources', 'Recognises non-electrical items'],
        }),
      ]),
      U('safety', 'Electrical Safety', 'Staying safe.', 'Never touch sockets; Water and electricity; Ask a grown-up', [
        L('safety', 'Safe With Electricity', {
          o: ['State key rules for electrical safety', 'Explain why water and electricity are dangerous together'],
          p: ['Knows things that use electricity'],
          e: [
            'Electricity from wall sockets is very strong and can badly hurt people. Never put fingers or objects into sockets.',
            'Water and electricity are dangerous together. Never touch switches or plugs with wet hands, and keep drinks away from devices.',
            'If you see a broken wire, sparks or smell burning, don\'t touch — tell a grown-up straight away. Small batteries in toys are safe to use, but never put batteries in your mouth.',
          ],
          v: 'danger = something that can hurt you; safe = not in danger; shock = when electricity passes through the body and hurts it; wire = a thin metal cable that carries electricity',
          x: ['Drying hands before switching on a light.', 'Telling Papa about a frayed charger cable.'],
          s: ['Kiko\'s Wet Hands', 'Kiko came out of the bath and reached for the light switch. "Stop!" said his big sister. "Dry your hands first. Water and electricity don\'t mix." Kiko dried his hands on his towel and then flicked on the light. "Safety first," he said, pretending to be a superhero with a towel cape.'],
          a: [
            ch('Should you touch a switch with wet hands?', '*no, dry them first|yes, always|only on Sundays'),
            ch('If you see sparks from a wire, you should…', '*tell a grown-up and not touch|touch it|ignore it'),
            tf('We should never put fingers into sockets.', true),
            tf('It is safe to put batteries in your mouth.', false),
          ],
          t: ['Why do you think water and electricity are dangerous together?', 'Who can you tell if something looks unsafe?'],
          k: ['Teach a grown-up three electricity safety rules.'],
          m: ['Safety Poster', 'paper, crayons', 'Draw three electricity safety rules | Use a big red cross for dangerous actions | Use a green tick for safe actions | Stick it near a socket at home'],
          q: [
            ch('Electricity passing through the body is a…', '*shock|song|smile'),
            tf('Keep drinks away from devices.', true),
            ch('A thin metal cable that carries electricity is a…', '*wire|rope|ribbon'),
          ],
          ms: ['States safety rules', 'Explains water danger', 'Knows to report hazards'],
        }),
      ]),
    ]),
    S('s5', 'Making simple circuits; conductors and insulators.', [
      'Build a simple circuit with a battery, wires and a bulb', 'Explain why a circuit must be complete', 'Test conductors and insulators',
    ], [
      U('circuits', 'Simple Circuits', 'Making a bulb light up.', 'Battery, wires and bulb; Complete loops; Broken circuits', [
        L('simple-circuit', 'Light the Bulb', {
          o: ['Build a simple circuit that lights a bulb', 'Explain why the circuit must be a complete loop'],
          p: ['Knows electrical safety'],
          e: [
            'A circuit is a path that electricity flows around. A simple circuit needs a battery (the power source), wires, and something to power, like a bulb or buzzer.',
            'The circuit must be a complete loop from one end of the battery, through the bulb, and back to the other end. If there is a gap, the electricity stops and the bulb goes out.',
            'Small batteries used for experiments are safe. Never experiment with wall sockets!',
          ],
          v: 'circuit = a complete path for electricity; bulb = a device that gives light; buzzer = a device that makes a sound; complete = with no gaps',
          x: ['A torch is a simple circuit.', 'A doorbell circuit with a buzzer.'],
          s: ['The Missing Link', 'Zuri connected a battery and a bulb with two wires — but the bulb stayed dark. She traced the path with her finger: battery, wire, bulb, wire... the second wire wasn\'t touching the battery! She pressed it on, and the bulb glowed. "The loop has to be complete," she said proudly.'],
          a: [
            ch('A circuit must be…', '*a complete loop|broken|very long'),
            mt('Match the part to its job', 'battery=power source|wire=carries electricity|bulb=gives light'),
            tf('A gap in the circuit stops the electricity.', true),
            ch('If the bulb doesn\'t light, you should check…', '*for gaps in the circuit|the weather|your shoes'),
          ],
          t: ['What else could you power with a circuit?', 'How is a torch like a circuit?'],
          k: ['Show a grown-up how your circuit works and what breaks it.'],
          m: ['🧪 Light-Up Card', 'a coin battery, an LED, copper tape, card (with an adult)', 'Draw a picture with a star or a sun | Stick copper tape in a loop | Place the LED and battery so the loop is complete | Fold the corner to close the circuit and light up'],
          q: [
            ch('A complete path for electricity is a…', '*circuit|circle drawing|cable car'),
            tf('A torch contains a simple circuit.', true),
            ch('A device that makes a sound is a…', '*buzzer|bulb|battery'),
          ],
          ms: ['Builds a working circuit', 'Explains complete loops', 'Troubleshoots gaps'],
        }),
      ]),
      U('conductors', 'Conductors and Insulators', 'What lets electricity through?', 'Metals conduct; Plastic, wood and rubber insulate; Why wires are covered', [
        L('conductors', 'Let It Through or Stop It?', {
          o: ['Test materials to sort them into conductors and insulators', 'Explain why wires are covered in plastic'],
          p: ['Can build a simple circuit'],
          e: [
            'A conductor lets electricity flow through it easily. Most metals — copper, iron, aluminium, silver — are good conductors.',
            'An insulator does not let electricity flow easily. Plastic, rubber, wood, glass and cloth are insulators.',
            'Wires have copper inside to carry electricity and a plastic covering outside to keep us safe. Electricians wear rubber gloves for the same reason.',
          ],
          v: 'conductor = a material that lets electricity flow; insulator = a material that blocks electricity; copper = a metal used in wires; test = to try out',
          x: ['A metal spoon completes the circuit.', 'A plastic ruler stops it.'],
          s: ['The Conductor Detective', 'Ivaan made a circuit with a gap and became a detective. He placed different things in the gap: a metal key — the bulb lit! A pencil eraser — dark. A coin — lit! A plastic button — dark. "Metals are the conductors," he announced. "Everything else is trying to stop the electricity."'],
          a: [
            mt('Match the material to its use', 'copper=inside wires|plastic=covering wires|rubber=electricians\' gloves'),
            ch('Why are wires covered in plastic?', '*to keep us safe|to make them pretty|to make them heavy'),
            tf('Most metals are good conductors.', true),
            ch('Which would light the bulb in a gap?', '*a metal key|a wooden stick|a rubber band'),
          ],
          t: ['Why do electricians wear rubber gloves?', 'Is water a conductor? Why might that matter?'],
          k: ['Explain conductors and insulators using your test results.'],
          m: ['🧪 Conductor Tester', 'a battery, bulb or LED, wires, objects to test', 'Make a circuit with a gap | Place each object in the gap | Record if the bulb lights | Sort objects into conductors and insulators'],
          q: [
            ch('A material that blocks electricity is an…', '*insulator|conductor|engine'),
            tf('Copper is used inside wires.', true),
            ch('Glass is a…', '*insulator|conductor|battery'),
          ],
          ms: ['Tests materials fairly', 'Classifies conductors and insulators', 'Explains wire design'],
        }),
      ]),
    ]),
    S('s6', 'Switches, series and parallel circuits, and electromagnets.', [
      'Add a switch to control a circuit', 'Compare series and parallel circuits', 'Build an electromagnet',
    ], [
      U('switches-circuits', 'Switches and Circuit Types', 'Controlling electricity.', 'Switches; Series circuits; Parallel circuits', [
        L('series-parallel', 'Series or Parallel?', {
          o: ['Use a switch to open and close a circuit', 'Compare series and parallel circuits'],
          p: ['Can build simple circuits'],
          e: [
            'A switch opens (breaks) or closes (completes) a circuit. When the switch is on, the circuit is closed and electricity flows.',
            'In a series circuit, components are connected one after another in a single loop. If one bulb breaks, they all go out, and adding more bulbs makes each one dimmer.',
            'In a parallel circuit, each component has its own path. If one bulb breaks, the others stay lit. Houses are wired in parallel so you can switch lights on and off separately.',
          ],
          v: 'switch = a device that opens or closes a circuit; series circuit = components in a single loop; parallel circuit = components on separate paths; component = a part of a circuit',
          x: ['Old fairy lights where one broken bulb darkens the string (series).', 'Room lights that work independently (parallel).'],
          s: ['The Diwali Lights Mystery', 'Grandpa\'s old string of Diwali lights wouldn\'t glow — not a single bulb! Ivaan and Grandpa tested bulbs one by one until they found the broken one. With a new bulb, the whole string sparkled. "Series circuit," said Grandpa. "One breaks, all stop. That\'s why new lights are often wired differently."'],
          a: [
            ch('A switch that is "on" makes the circuit…', '*closed|open|disappear'),
            ch('In a series circuit, if one bulb breaks…', '*all go out|the others get brighter|nothing happens'),
            tf('Houses are wired in parallel.', true),
            mt('Match the circuit to its feature', 'series=single loop|parallel=separate paths|switch=opens or closes the circuit'),
          ],
          t: ['Why would a house wired in series be annoying?', 'Where else might you use a switch?'],
          k: ['Show both circuit types and explain the difference.'],
          m: ['🧪 Series vs Parallel Build', 'two batteries, three bulbs or LEDs, wires, a switch (paper clip and pins)', 'Build a series circuit with two bulbs and a switch | Remove one bulb and observe | Build a parallel circuit | Remove one bulb and compare'],
          q: [
            ch('Components in a single loop form a…', '*series circuit|parallel circuit|short circuit'),
            tf('In parallel, other bulbs stay lit if one breaks.', true),
            ch('A part of a circuit is a…', '*component|compass|container'),
          ],
          ms: ['Uses switches', 'Compares circuit types', 'Applies to real wiring'],
        }),
      ]),
      U('electromagnets', 'Electromagnets', 'Magnets made by electricity.', 'Magnets attract and repel; Making an electromagnet; Uses of electromagnets', [
        L('electromagnets', 'Switch-On Magnets', {
          o: ['Build an electromagnet', 'Explain how electromagnets differ from permanent magnets'],
          p: ['Knows circuits and magnets'],
          e: [
            'Magnets attract iron and steel. Every magnet has a north and a south pole: opposite poles attract and like poles repel.',
            'When electricity flows through a coil of wire, it makes a magnetic field. Wrapping the coil around an iron nail makes an electromagnet. More coils or more current make it stronger.',
            'Unlike a permanent magnet, an electromagnet can be switched on and off. Electromagnets are used in scrapyard cranes, electric bells, speakers, motors and MRI scanners in hospitals.',
          ],
          v: 'magnet = an object that attracts iron and steel; pole = one end of a magnet; electromagnet = a magnet made by electricity flowing in a coil; repel = to push away',
          x: ['A scrapyard crane lifting cars.', 'An electric doorbell.'],
          s: ['The Scrapyard Crane', 'At the scrapyard, Kiko watched a giant round disc swing over a pile of old cars. The operator pressed a button — CLANG! — a whole car leapt up and stuck to the disc. He moved it over a truck and pressed again. The car dropped. "It\'s an electromagnet," the operator shouted. "On, it grabs. Off, it lets go!"'],
          a: [
            ch('An electromagnet can be…', '*switched on and off|never turned off|only made of wood'),
            ch('More coils make an electromagnet…', '*stronger|weaker|disappear'),
            tf('Like poles repel.', true),
            mt('Match the use', 'scrapyard crane=lifting metal|electric bell=ringing|MRI scanner=hospital imaging'),
          ],
          t: ['Why is being able to switch it off useful?', 'How could you test the strength of your electromagnet?'],
          k: ['Demonstrate your electromagnet picking up paper clips.'],
          m: ['🧪 Nail Electromagnet', 'an iron nail, insulated wire, a battery, paper clips (with an adult)', 'Wrap wire 20 times around the nail | Connect the ends to a battery briefly | Count paper clips picked up | Try 40 coils and compare'],
          q: [
            ch('To push away is to…', '*repel|attract|reflect'),
            tf('Opposite poles attract.', true),
            ch('One end of a magnet is a…', '*pole|plug|pin'),
          ],
          ms: ['Builds an electromagnet', 'Explains factors affecting strength', 'Identifies uses'],
        }),
      ]),
    ]),
    S('s7', 'Voltage, current and resistance; generating electricity.', [
      'Define voltage, current and resistance', 'Use Ohm\'s law', 'Explain how power stations generate electricity',
    ], [
      U('ohm', 'Voltage, Current and Resistance', 'Measuring electricity.', 'Current in amps; Voltage in volts; Resistance in ohms', [
        L('ohms-law', 'Ohm\'s Law', {
          o: ['Define voltage, current and resistance with units', 'Use Ohm\'s law V = I × R in calculations'],
          p: ['Can build series and parallel circuits'],
          e: [
            'Current (I) is the flow of electric charge, measured in amperes (amps, A) with an ammeter. Voltage (V) is the "push" that drives the current, measured in volts with a voltmeter. Resistance (R) is how much a component opposes the current, measured in ohms (Ω).',
            'Ohm\'s law, named after Georg Ohm (1827), says V = I × R for many conductors. If a 6 V battery drives current through a 3 Ω resistor, I = 6 ÷ 3 = 2 A.',
            'A water analogy helps: voltage is like water pressure, current like the flow rate, and resistance like a narrow pipe. Power (watts) = V × I tells how fast energy is used.',
          ],
          v: 'current = the flow of electric charge; voltage = the push that drives current; resistance = opposition to current; ohm = the unit of resistance',
          x: ['A 1.5 V AA battery.', 'A 230 V household supply in India.'],
          s: ['The Water Pipe Model', 'To explain circuits, Meera\'s teacher used a water tank and pipes. Raising the tank (more pressure) made water flow faster — like more voltage. Squeezing the pipe (more resistance) slowed it. "So a dim bulb in a long series circuit is like a pipe with lots of narrow bits," Meera said. "Exactly!"'],
          a: [
            ch('V = 6 V, R = 3 Ω. What is I?', '*2 A|18 A|3 A'),
            mt('Match the quantity to its unit', 'current=amperes|voltage=volts|resistance=ohms|power=watts'),
            tf('Voltage is like water pressure in the water analogy.', true),
            ch('Household supply in India is about…', '*230 V|1.5 V|10,000 V'),
          ],
          t: ['Why do longer, thinner wires have more resistance?', 'Where does the water analogy break down?'],
          k: ['Solve an Ohm\'s law problem aloud, explaining each step.'],
          m: ['🧪 Measuring Ohm\'s Law', 'a multimeter, batteries, resistors (with an adult)', 'Build a circuit with one resistor | Measure voltage and current | Repeat with 1, 2 and 3 batteries | Graph V against I and find R from the slope'],
          q: [
            ch('Opposition to current is…', '*resistance|voltage|power'),
            tf('Current is measured with an ammeter.', true),
            ch('Power = …', '*V × I|V ÷ I|I − R'),
          ],
          ms: ['Defines quantities and units', 'Applies Ohm\'s law', 'Uses analogies critically'],
        }),
      ]),
      U('generation', 'Generating Electricity', 'From power station to plug.', 'Generators and turbines; Fossil fuel and nuclear; Renewable sources', [
        L('generation', 'Where Electricity Comes From', {
          o: ['Explain how a generator produces electricity', 'Compare energy sources for power generation'],
          p: ['Knows electromagnets'],
          e: [
            'In 1831, Michael Faraday discovered that moving a magnet near a coil of wire produces electricity — electromagnetic induction. Generators in power stations spin coils within magnetic fields using turbines.',
            'Turbines can be turned by steam (from burning coal or gas, or from nuclear fission), by falling water (hydroelectric), or by wind. Solar panels work differently: photovoltaic cells convert sunlight directly into electricity.',
            'Coal has long been India\'s largest source of electricity, but solar and wind capacity have grown rapidly. Each source has trade-offs in cost, reliability, pollution and land use.',
          ],
          v: 'generator = a machine that converts motion into electricity; turbine = a wheel turned by steam, water or wind; induction = producing electricity by moving magnets and coils; photovoltaic = converting light into electricity',
          x: ['Bhakra Nangal Dam generating hydroelectric power.', 'Rooftop solar panels on homes.'],
          s: ['Faraday\'s Coil', 'In 1831, Michael Faraday, a bookbinder\'s apprentice turned scientist, moved a magnet in and out of a coil of wire connected to a meter. The needle flickered! He had made electricity from motion. When asked what use it was, he is said to have replied, "What use is a newborn baby?" Today almost all our electricity relies on his discovery.'],
          a: [
            ch('Faraday discovered electromagnetic induction in…', '*1831|1947|2001'),
            mt('Match the source to how it turns turbines', 'coal=steam from burning|hydroelectric=falling water|wind=moving air'),
            tf('Solar panels convert sunlight directly into electricity.', true),
            ch('A wheel turned by steam, water or wind is a…', '*turbine|transistor|thermometer'),
          ],
          t: ['Which energy source should India invest in most? Why?', 'Why do power stations need turbines?'],
          k: ['Explain the journey of electricity from a power station to your home.'],
          m: ['🧪 Hand Generator Demo', 'a small DC motor, an LED, a string (with an adult)', 'Connect an LED to a small motor | Wrap string around the motor shaft | Pull to spin it quickly | Observe the LED glow and explain induction'],
          q: [
            ch('A machine converting motion into electricity is a…', '*generator|refrigerator|radiator'),
            tf('Nuclear power stations heat water to make steam.', true),
            ch('Converting light into electricity is…', '*photovoltaic|photosynthesis|photography'),
          ],
          ms: ['Explains induction and generators', 'Compares energy sources', 'Traces electricity supply'],
        }),
      ]),
    ]),
    S('s9', 'Electronic components and the power grid.', [
      'Use resistors, LEDs, diodes and transistors', 'Explain how the grid transmits electricity', 'Calculate energy use and cost',
    ], [
      U('electronics', 'Electronic Components', 'Building blocks of electronics.', 'Resistors and LEDs; Diodes; Transistors as switches', [
        L('components', 'Resistors, Diodes and Transistors', {
          o: ['Explain the function of resistors, LEDs, diodes and transistors', 'Design a simple electronic circuit'],
          p: ['Knows Ohm\'s law'],
          e: [
            'A resistor limits current — for example, protecting an LED from too much current. Resistors are marked with coloured bands showing their value.',
            'A diode lets current flow in one direction only. An LED (light-emitting diode) is a diode that glows; it uses far less energy than old filament bulbs. India\'s UJALA programme distributed hundreds of millions of LED bulbs to save energy.',
            'A transistor acts as an electronic switch or amplifier: a small current at one terminal controls a larger current. Invented at Bell Labs in 1947, transistors are the basis of all modern computers — billions fit on a single chip.',
          ],
          v: 'resistor = a component that limits current; diode = a component allowing current one way only; LED = light-emitting diode; transistor = a semiconductor switch or amplifier',
          x: ['A night light that switches on in the dark using a light sensor and transistor.', 'A resistor protecting an LED.'],
          s: ['The Night Light', 'Kiko wanted a light that turned on by itself at night. He built a circuit with a light-dependent resistor, a transistor and an LED. In daylight, nothing happened. When he covered the sensor with his hand — the LED glowed! "The transistor is the brain," he said. "It decides when to switch on."'],
          a: [
            mt('Match the component', 'resistor=limits current|diode=one-way flow|transistor=electronic switch|LED=diode that glows'),
            ch('The transistor was invented in…', '*1947|1831|1990'),
            tf('LEDs use less energy than filament bulbs.', true),
            ch('A component allowing current one way only is a…', '*diode|resistor|battery'),
          ],
          t: ['Why do LEDs need resistors?', 'Why did transistors transform computing?'],
          k: ['Explain your circuit design, component by component.'],
          m: ['🧪 Automatic Night Light', 'breadboard, LDR, transistor, resistors, LED, battery (with an adult)', 'Follow a circuit diagram to build the night light | Test in light and dark | Adjust a resistor to change sensitivity | Draw and annotate your circuit'],
          q: [
            ch('LED stands for…', '*light-emitting diode|long electric device|low energy dynamo'),
            tf('A transistor can act as an amplifier.', true),
            ch('A component that limits current is a…', '*resistor|diode|switch'),
          ],
          ms: ['Explains component functions', 'Builds a working circuit', 'Reads circuit diagrams'],
        }),
      ]),
      U('grid', 'The Power Grid', 'Getting electricity everywhere.', 'Transmission and transformers; Units and bills; Balancing supply and demand', [
        L('grid', 'From Power Station to Plug', {
          o: ['Explain how transformers and high voltage reduce transmission losses', 'Calculate energy use in kilowatt-hours'],
          p: ['Knows generation and Ohm\'s law'],
          e: [
            'Power stations are often far from cities. Electricity is sent through transmission lines at very high voltages (hundreds of thousands of volts) because a higher voltage means a lower current for the same power, so less energy is lost as heat. Step-down transformers then reduce the voltage to 230 V for homes.',
            'Energy use is measured in kilowatt-hours (kWh), the "units" on an electricity bill. A 1,000 W (1 kW) heater running for 2 hours uses 2 kWh.',
            'Grid operators must balance supply and demand every second. India\'s national grid connects all regions; solar power peaks at midday, so storage, flexible demand and other sources help balance it.',
          ],
          v: 'transformer = a device that changes voltage; transmission = sending electricity over long distances; kilowatt-hour = the energy used by 1 kW for one hour; grid = a network of power lines and stations',
          x: ['Tall pylons carrying high-voltage lines.', 'An electricity bill showing units used.'],
          s: ['The Midday Surplus', 'On sunny days, solar farms in Rajasthan pour electricity into the grid at noon, sometimes more than needed nearby. Grid engineers in control rooms shift power to other regions, signal hydro plants to slow down and charge large batteries. At sunset, as solar fades and people switch on lights, they reverse the dance.'],
          a: [
            ch('A 1 kW heater used for 2 hours uses…', '*2 kWh|0.5 kWh|1,000 kWh'),
            ch('Electricity is transmitted at high voltage to…', '*reduce energy losses|make it colourful|increase current'),
            tf('Step-down transformers reduce voltage for homes.', true),
            mt('Match the term', 'transformer=changes voltage|grid=network of lines and stations|kWh=unit of energy on bills'),
          ],
          t: ['How could your family reduce its electricity use?', 'Why is balancing the grid harder with lots of solar power?'],
          k: ['Read an electricity bill and explain its units and charges.'],
          m: ['Home Energy Audit', 'appliance labels, a notebook, an electricity bill', 'List appliances with their power ratings | Estimate daily hours of use | Calculate monthly kWh for each | Suggest three ways to save energy'],
          q: [
            ch('A device that changes voltage is a…', '*transformer|transistor|turbine'),
            tf('Higher voltage means lower current for the same power.', true),
            ch('Units on an electricity bill are…', '*kilowatt-hours|kilograms|kilometres'),
          ],
          ms: ['Explains transmission and transformers', 'Calculates energy use', 'Discusses grid balancing'],
        }),
      ]),
    ]),
    S('s12', 'Electromagnetism, semiconductors and the energy transition.', [
      'Explain AC and DC and electromagnetic principles', 'Describe how semiconductors and microchips work', 'Evaluate pathways for the energy transition',
    ], [
      U('ac-dc', 'AC, DC and Electromagnetism', 'The physics behind power.', 'Alternating and direct current; The war of the currents; Maxwell and electromagnetic waves', [
        L('ac-dc', 'Alternating and Direct Current', {
          o: ['Compare AC and DC and their uses', 'Explain the significance of Maxwell\'s equations'],
          p: ['Knows induction and the grid'],
          e: [
            'Direct current (DC) flows in one direction — from batteries and solar cells. Alternating current (AC) reverses direction many times a second; India\'s mains supply is 50 Hz, reversing 100 times per second.',
            'In the 1880s "war of the currents", Thomas Edison promoted DC while Nikola Tesla and George Westinghouse promoted AC. AC won for grids because transformers can easily change its voltage. Today, high-voltage DC (HVDC) links are used for some very long-distance transmission.',
            'In the 1860s, James Clerk Maxwell unified electricity and magnetism in four equations and predicted that light is an electromagnetic wave. Radio, Wi-Fi, X-rays and visible light are all parts of the electromagnetic spectrum. Jagadish Chandra Bose demonstrated millimetre-wave radio communication in Kolkata in the 1890s.',
          ],
          v: 'alternating current = current that reverses direction regularly; direct current = current flowing in one direction; frequency = how many cycles happen each second; electromagnetic spectrum = the range of electromagnetic waves',
          x: ['A phone charger converting AC to DC.', 'HVDC lines carrying power across long distances.'],
          s: ['Bose\'s Invisible Signal', 'In 1895, at the Town Hall in Kolkata, Jagadish Chandra Bose used invisible electromagnetic waves to ring a bell and set off a small explosion in another room, through walls. His pioneering work on microwaves and detectors was later recognised by engineers as foundational to radio and wireless technology.'],
          a: [
            mt('Match the term', 'AC=reverses direction|DC=flows one way|50 Hz=India\'s mains frequency'),
            ch('India\'s mains frequency is…', '*50 Hz|60 Hz|5 Hz'),
            tf('AC won the "war of the currents" because transformers change its voltage easily.', true),
            ch('Maxwell predicted that light is…', '*an electromagnetic wave|a liquid|a sound'),
          ],
          t: ['Why do phone chargers convert AC to DC?', 'Why might HVDC be better for very long distances?'],
          k: ['Present the war of the currents and its outcome.'],
          m: ['Electromagnetism History Essay', 'scholarly sources', 'Research Faraday, Maxwell, Tesla and Bose | Trace how their work connects | Explain one key experiment in detail | Write a 1500-word essay'],
          q: [
            ch('Current that reverses direction is…', '*alternating current|direct current|static'),
            tf('Wi-Fi uses electromagnetic waves.', true),
            ch('Cycles per second is…', '*frequency|voltage|resistance'),
          ],
          ms: ['Compares AC and DC', 'Explains historical development', 'Connects electromagnetism to technology'],
        }),
      ]),
      U('chips-transition', 'Microchips and the Energy Transition', 'Semiconductors and the future.', 'Semiconductors and doping; Moore\'s law and chipmaking; Electrification and decarbonisation', [
        L('chips-energy', 'Silicon and a Cleaner Grid', {
          o: ['Explain how semiconductors and integrated circuits work', 'Evaluate strategies for decarbonising electricity'],
          p: ['Knows transistors and the grid'],
          e: [
            'Semiconductors like silicon conduct electricity better than insulators but worse than metals. Adding tiny amounts of other elements (doping) creates n-type and p-type regions; their junctions make diodes and transistors. An integrated circuit (microchip) puts billions of tiny transistors on one piece of silicon.',
            'Gordon Moore observed in 1965 that the number of transistors on a chip was doubling regularly — later stated as about every two years. Chipmaking requires extraordinarily precise factories (fabs); India has announced semiconductor manufacturing projects to build domestic capability.',
            'Decarbonising electricity means shifting from fossil fuels to low-carbon sources while keeping supply reliable. Strategies include solar, wind, hydro and nuclear power, batteries and pumped storage, stronger grids and energy efficiency. India has set a target of net-zero emissions by 2070.',
          ],
          v: 'semiconductor = a material with conductivity between conductors and insulators; doping = adding impurities to change a semiconductor\'s properties; integrated circuit = many components on a single chip; decarbonisation = reducing carbon emissions',
          x: ['A smartphone processor with billions of transistors.', 'Pumped storage hydro storing energy for night-time.'],
          s: ['Grains of Sand, Billions of Switches', 'Silicon comes from sand. In a fab, purified silicon wafers are patterned with light, layer by layer, in rooms far cleaner than a hospital operating theatre. A single speck of dust can ruin a chip. The result: a sliver smaller than a fingernail containing billions of switches — the brain of every phone and computer.'],
          a: [
            ch('Adding impurities to a semiconductor is…', '*doping|drilling|dyeing'),
            mt('Match the term', 'semiconductor=between conductor and insulator|integrated circuit=many components on one chip|Moore\'s law=transistor counts doubling regularly'),
            tf('India has a net-zero target of 2070.', true),
            ch('Silicon is obtained from…', '*sand|wood|oil'),
          ],
          t: ['Can Moore\'s law continue forever? Why or why not?', 'What is the best mix of sources for a reliable low-carbon grid?'],
          k: ['Lead a debate on India\'s energy transition pathways.'],
          m: ['Energy Transition Policy Brief', 'official data (e.g. Central Electricity Authority), scholarly sources', 'Research India\'s current electricity mix | Compare three decarbonisation strategies | Evaluate costs, reliability and equity | Write a 2000-word policy brief'],
          q: [
            ch('Many components on a single chip is an…', '*integrated circuit|isolated cell|insulator'),
            tf('Gordon Moore made his observation in 1965.', true),
            ch('Reducing carbon emissions is…', '*decarbonisation|desalination|dehydration'),
          ],
          ms: ['Explains semiconductors', 'Describes chip technology', 'Evaluates transition strategies'],
        }),
      ]),
    ]),
  ],
});
