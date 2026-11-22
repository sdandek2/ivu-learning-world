import { subject, S, U, L, ch, tf, od, mt } from '../dsl.ts';

export default subject({
  id: 'communities',
  description: 'How people live and work together: families, community helpers, services, transport and communication, villages and cities, local government, and community development. Celebrates the dignity of all work.',
  stages: [
    S('s4', 'My family and the helpers around me.', [
      'Talk about their family', 'Name community helpers and what they do', 'Thank people who help us',
    ], [
      U('families', 'All Kinds of Families', 'Families come in many shapes.', 'Family members; Big families and small families; Living with grandparents; Family roles and love', [
        L('my-family', 'My Family', {
          o: ['Name family members and their relationships', 'Know families can look different'],
          p: ['Can talk about people at home'],
          e: [
            'A family is a group of people who love and care for each other. Some families have a mother and father; some have one parent; some live with grandparents, aunts, uncles and cousins all together.',
            'In many Indian homes, grandparents live with the family — this is called a joint family. Other families are small, called nuclear families.',
            'Every family is different, and every family is special. What matters is that family members look after each other.',
          ],
          v: 'family = people who love and care for each other; grandparents = your parents\' parents; joint family = a family where several generations live together; cousin = the child of your aunt or uncle',
          x: ['Ivaan\'s family might include Aaji and Aajoba (grandparents in Marathi).', 'Some children live with one parent; some with foster parents.'],
          s: ['Momo\'s Family Tree', 'Momo drew a tree. On the trunk: Momo. On the branches: Mama, Papa, baby sister. Higher up: Grandma and Grandpa. Kiko\'s tree had Kiko, Papa and Grandma. Zuri\'s had lots of cousins! "Our trees are all different," said Momo, "but they\'re all full of love."'],
          a: [
            ch('Your mother\'s mother is your…', '*grandmother|sister|aunt'),
            ch('A family where grandparents, parents and children live together is a…', '*joint family|school|team'),
            tf('Families can look different from each other.', true),
            mt('Match the family word', 'your parent\'s brother=uncle|your aunt\'s child=cousin|your father\'s father=grandfather'),
          ],
          t: ['What do you like doing with your family?', 'How do family members help each other?'],
          k: ['Tell a grown-up about everyone in your family and one thing you love about each.'],
          m: ['Family Tree Picture', 'paper, crayons, photos (optional)', 'Draw a tree | Put yourself on the trunk | Add family members on the branches | Ask grown-ups about relatives you haven\'t met'],
          q: [
            ch('Your father\'s sister is your…', '*aunt|cousin|niece'),
            tf('All families must look the same.', false),
            ch('Family members…', '*look after each other|never talk|live alone always'),
          ],
          ms: ['Names family relationships', 'Accepts family diversity', 'Describes caring roles'],
        }),
      ]),
      U('helpers', 'Community Helpers', 'People whose work helps us all.', 'Doctor, nurse, teacher, police officer, firefighter, farmer, sweeper, postman, vegetable seller, driver', [
        L('who-helps', 'Who Helps Us?', {
          o: ['Name community helpers and the work they do', 'Show respect and thanks for all work'],
          p: ['Can name some jobs'],
          e: [
            'Community helpers are people whose work helps everyone. Doctors and nurses help us when we\'re sick. Teachers help us learn. Farmers grow our food.',
            'Firefighters put out fires. Police officers help keep us safe. Sanitation workers keep our streets clean. Postal workers deliver letters and parcels. Drivers take us places.',
            'Every job matters. A clean street is as important as a hospital! We show respect to all workers and say thank you.',
          ],
          v: 'community helper = a person whose work helps everyone; doctor = helps sick people get better; firefighter = puts out fires; sanitation worker = keeps streets and homes clean',
          x: ['The vegetable seller brings fresh vegetables to our street.', 'The bus driver takes children safely to school.'],
          s: ['The Day Everyone Stayed Home', 'Bolt imagined a day when no helpers came to work. No milk was delivered, rubbish piled up, the bus didn\'t come, and the clinic was closed. "We need everyone!" Bolt beeped. The next day, Bolt made thank-you cards for the milkman, the sweeper, the bus driver and the nurse.'],
          a: [
            mt('Match the helper to the job', '👩‍⚕️ doctor=helps sick people|👨‍🚒 firefighter=puts out fires|👩‍🌾 farmer=grows food|👮 police officer=keeps people safe'),
            ch('Who keeps our streets clean?', '*sanitation workers|astronauts|actors'),
            tf('Every job is important.', true),
            ch('Who teaches us at school?', '*a teacher|a pilot|a farmer'),
          ],
          t: ['Which helper would you like to be? Why?', 'What would happen if there were no sanitation workers?'],
          k: ['Thank a community helper you meet today and tell a grown-up how they felt.'],
          m: ['Thank-You Cards for Helpers', 'card, crayons', 'Choose three community helpers you see often | Make a thank-you card for each | Draw them doing their job | Give the cards with a grown-up'],
          q: [
            ch('Who delivers letters?', '*postal worker|chef|dentist'),
            tf('We should respect people in all jobs.', true),
            ch('Nurses help…', '*sick people|cars|plants only'),
          ],
          ms: ['Names helpers and roles', 'Expresses respect for all work', 'Shows gratitude'],
        }),
      ]),
    ]),
    S('s5', 'Needs of a community, transport and communication.', [
      'Name services a community needs', 'Describe kinds of transport', 'Describe ways people communicate',
    ], [
      U('services', 'What Does a Community Need?', 'Services that keep communities running.', 'Water, electricity, roads, schools, hospitals, markets; Who provides them', [
        L('community-needs', 'Building a Community', {
          o: ['Name essential services in a community', 'Explain why each service matters'],
          p: ['Names community helpers'],
          e: [
            'A community is a group of people living in the same area. To live well, a community needs services: clean water, electricity, roads, schools, hospitals, markets, parks and waste collection.',
            'Some services are provided by the government (like government schools, roads and water supply), and some by businesses or volunteers.',
            'When everyone takes care of shared places — not littering, saving water — the whole community benefits.',
          ],
          v: 'community = people living in the same area; service = something that helps people, like water supply; public = shared by everyone; government = people who run a town, state or country',
          x: ['A water tank that supplies the whole village.', 'A public park everyone can use.'],
          s: ['The New Village', 'Animals moved to a new valley. "What do we need?" asked Momo. "Water!" said Pala. "A school!" said Olu. "A clinic," said Tara. "A market," said Zuri. "Roads to connect it all," said Bolt. Together, they planned and built a village where everyone had what they needed.'],
          a: [
            ch('Which is a service a community needs?', '*a hospital|a broken toy|a puddle'),
            mt('Match the service to the need', 'water supply=drinking and washing|school=learning|market=buying food'),
            tf('Taking care of shared places helps everyone.', true),
            ch('Shared by everyone is called…', '*public|private|secret'),
          ],
          t: ['Which service do you think is most important? Why?', 'What service is missing in your area?'],
          k: ['Describe three services in your community and who provides them.'],
          m: ['Model Village', 'cardboard boxes, paper, glue, crayons', 'Plan a village with homes and services | Build it from boxes | Label each service | Explain how people use it'],
          q: [
            ch('Waste collection helps keep…', '*the community clean|cars fast|birds quiet'),
            tf('Some services are provided by the government.', true),
            ch('A community is…', '*people living in the same area|one person alone|a type of tree'),
          ],
          ms: ['Names community services', 'Explains their importance', 'Identifies shared responsibility'],
        }),
      ]),
      U('transport-comm', 'Getting Around and Staying in Touch', 'Transport and communication then and now.', 'Land, water and air transport; Indian Railways; Communication: letters, phones, internet', [
        L('on-the-move', 'On the Move', {
          o: ['Classify transport as land, water or air', 'Compare old and new ways of communicating'],
          p: ['Knows community services'],
          e: [
            'Transport moves people and goods. Land transport includes bicycles, buses, cars, autorickshaws, bullock carts and trains. Water transport includes boats and ships. Air transport includes aeroplanes and helicopters.',
            'Indian Railways is one of the largest railway networks in the world and carries millions of passengers every day.',
            'Communication means sharing messages. Long ago people sent letters by post or messengers. Today we also use phones, video calls and the internet — but a handwritten letter is still special!',
          ],
          v: 'transport = ways of moving people and goods; passenger = a person travelling in a vehicle; communication = sharing messages; goods = things that are bought and sold',
          x: ['Fishermen use boats; tourists use houseboats in Kerala.', 'Grandparents may remember sending telegrams.'],
          s: ['Grandpa\'s Letter', 'Kiko\'s grandpa told stories of waiting weeks for a letter from his brother in another city. "Now you can call him in a second," Kiko said. Grandpa smiled and pulled out a yellowed letter. "But I still keep this." Kiko decided to write Grandpa a letter too.'],
          a: [
            mt('Land, water or air?', '🚆 train=land|⛵ boat=water|✈️ aeroplane=air'),
            ch('Which is a modern way to communicate?', '*video call|carrier pigeon|smoke signals'),
            tf('Indian Railways carries millions of people every day.', true),
            ch('Goods means…', '*things bought and sold|good behaviour|weather'),
          ],
          t: ['How did people send urgent messages before phones?', 'Which transport is best for the environment?'],
          k: ['Tell someone about a journey you made and the transport you used.'],
          m: ['Write and Post a Letter', 'paper, envelope, stamp, an address', 'Write a letter to a relative or friend | Address the envelope with a grown-up | Post it at a post box or post office | Wait for a reply and compare with sending a message'],
          q: [
            ch('A helicopter travels by…', '*air|water|rail'),
            ch('Communication means…', '*sharing messages|travelling only|cooking'),
            tf('Letters are still a way to communicate.', true),
          ],
          ms: ['Classifies transport', 'Compares communication methods', 'Uses postal communication'],
        }),
      ]),
    ]),
    S('s6', 'Villages and cities, and occupations.', [
      'Compare village and city life', 'Describe occupations in primary, secondary and service sectors', 'Explain interdependence',
    ], [
      U('village-city', 'Village and City', 'Different ways of living.', 'Village life: farming, crafts, close-knit; City life: jobs, transport, crowds; Both depend on each other', [
        L('village-or-city', 'Village or City?', {
          o: ['Compare features of village and city life', 'Explain how villages and cities depend on each other'],
          p: ['Knows community services'],
          e: [
            'Villages are smaller places, often surrounded by fields. Many people work in farming, fishing, dairy or crafts. People often know their neighbours well.',
            'Cities are big and busy, with many buildings, shops, offices, factories, schools and hospitals. There is more traffic and more kinds of jobs.',
            'Villages and cities need each other. Cities need food, milk and raw materials from villages; villages use goods, services and markets from cities. Many families have members in both.',
          ],
          v: 'village = a small rural settlement; city = a large urban settlement; rural = to do with the countryside; urban = to do with towns and cities',
          x: ['Milk from village dairies sold in city shops.', 'Tractors made in cities used on village farms.'],
          s: ['Two Cousins Swap', 'Asha from Mumbai visited her cousin Raju in a village in Maharashtra for the summer. She milked a cow and swam in the river. Raju then visited Mumbai, rode the local train and saw the sea. "Your milk comes from places like my village," Raju said. "And our phones come from your city," laughed Asha.'],
          a: [
            mt('Village or city?', 'fields and farms=village|tall buildings and traffic=city|many offices=city, busy'),
            ch('Cities get food mostly from…', '*villages and farms|factories only|the sea only'),
            tf('Villages and cities depend on each other.', true),
            ch('Rural means…', '*countryside|city|underwater'),
          ],
          t: ['Would you rather live in a village or a city? Why?', 'Why do many people move from villages to cities?'],
          k: ['Describe one good thing and one hard thing about village life and city life.'],
          m: ['Village–City Comparison Poster', 'poster paper, magazines, crayons', 'Divide the poster in two | Show homes, work, transport and food in a village and a city | Draw arrows showing what each gives the other | Present it'],
          q: [
            ch('Urban means…', '*to do with cities|to do with farms|to do with the sea'),
            tf('Many villages have farming.', true),
            ch('Villages depend on cities for…', '*goods and services|all their food|rain'),
          ],
          ms: ['Compares village and city', 'Explains interdependence', 'Uses rural/urban vocabulary'],
        }),
      ]),
      U('occupations', 'The World of Work', 'Many kinds of jobs.', 'Primary: farming, fishing, mining; Secondary: factories, building; Tertiary: services; Dignity of labour', [
        L('three-sectors', 'Three Kinds of Work', {
          o: ['Sort occupations into primary, secondary and tertiary sectors', 'Explain the dignity of all labour'],
          p: ['Names community helpers'],
          e: [
            'Primary sector jobs take things from nature: farming, fishing, mining, forestry.',
            'Secondary sector jobs make things: factory workers, builders, weavers, carpenters turning raw materials into products.',
            'Tertiary (service) sector jobs provide services: teachers, doctors, shopkeepers, drivers, bankers, software engineers. All three sectors depend on each other, and all work deserves respect — Mahatma Gandhi emphasised the dignity of manual labour.',
          ],
          c: [['evidence', 'Gandhi encouraged everyone, including students and leaders, to do manual work such as spinning and cleaning, to promote the dignity of labour.']],
          v: 'occupation = a job or kind of work; primary sector = getting raw materials from nature; secondary sector = making goods; tertiary sector = providing services; dignity of labour = respect for all kinds of work',
          x: ['Cotton farmer (primary) → textile mill worker (secondary) → shopkeeper selling shirts (tertiary).', 'A fisherman catches fish; a cook prepares it; a waiter serves it.'],
          s: ['The Journey of a Shirt', 'Kiko\'s new shirt started in a cotton field in Gujarat, where a farmer picked the cotton. In a mill, workers spun it into thread and wove cloth. A tailor stitched it. A truck driver delivered it, and a shopkeeper sold it. "So many people made my shirt!" Kiko said.'],
          a: [
            mt('Match the job to the sector', 'farmer=primary|factory worker=secondary|teacher=tertiary|fisherman=primary, from nature'),
            od('Journey of a shirt', 'farmer grows cotton|mill makes cloth|tailor stitches it|shop sells it'),
            tf('All kinds of work deserve respect.', true),
            ch('A doctor works in the…', 'primary sector|secondary sector|*tertiary (service) sector'),
          ],
          t: ['Why do some jobs get less respect than others? Is that fair?', 'How has technology changed jobs?'],
          k: ['Interview a family member about their work and present which sector it is in.'],
          m: ['Product Journey Chain', 'paper strips, glue, pens', 'Choose an everyday product (bread, a pencil, a cricket bat) | Research the jobs involved from raw material to you | Make a paper chain with one job per link | Label each link\'s sector'],
          q: [
            ch('Making goods in factories is the…', 'primary|*secondary|tertiary sector'),
            ch('Mining is in the…', '*primary sector|tertiary sector'),
            tf('The three sectors depend on each other.', true),
          ],
          ms: ['Classifies occupations by sector', 'Traces supply chains', 'Values dignity of labour'],
        }),
      ]),
    ]),
    S('s7', 'Local self-government: panchayats and municipalities.', [
      'Explain the role of gram panchayats and municipalities', 'Describe how local leaders are elected', 'Identify local issues and how to raise them',
    ], [
      U('local-gov', 'Local Government', 'Who runs our village or town?', 'Gram sabha and gram panchayat; Sarpanch; Municipal corporations and councils; 73rd and 74th Amendments', [
        L('panchayat', 'The Panchayat and the Municipality', {
          o: ['Explain the structure and roles of local government', 'Describe how citizens participate'],
          p: ['Knows community services'],
          e: [
            'In villages, the Panchayati Raj system governs locally. The gram sabha includes all adult voters of the village; it elects the gram panchayat, led by the sarpanch. Panchayats look after local roads, water, sanitation and village development.',
            'In towns and cities, municipal councils or corporations, led by elected councillors and a mayor, manage water supply, waste, streetlights, roads and local health services.',
            'The 73rd and 74th Constitutional Amendments (1992) strengthened these bodies and reserved seats for women and for Scheduled Castes and Scheduled Tribes, so more people could take part in decisions.',
          ],
          c: [['evidence', 'The 73rd (rural) and 74th (urban) Constitutional Amendment Acts were passed in 1992; they mandate at least one-third of seats for women in local bodies, and many states have increased this to 50%.']],
          v: 'gram sabha = all adult voters of a village; gram panchayat = the elected village council; sarpanch = the head of a gram panchayat; municipality = the local government of a town or city',
          x: ['A gram sabha meeting deciding on a new well.', 'A municipal corporation fixing streetlights.'],
          s: ['The Women Sarpanch', 'In a village, many people doubted that a young woman could lead. After she was elected sarpanch, she held regular gram sabha meetings, got the school toilets built and a water pipeline laid. At the next election, she was re-elected with a big majority.'],
          a: [
            mt('Match the term', 'sarpanch=head of the gram panchayat|gram sabha=all adult voters of the village|councillor=elected member of a city council'),
            ch('Who manages waste collection in a city?', '*the municipality|the Supreme Court|the army'),
            tf('Seats in local bodies are reserved for women.', true),
            ch('The Panchayati Raj amendment was passed in…', '1947|*1992|2019'),
          ],
          t: ['Why is local government important when we already have state and national governments?', 'How can young people take part in local decisions?'],
          k: ['Explain to someone how a problem in your area (like a broken streetlight) could be fixed through local government.'],
          m: ['Local Issue Petition', 'paper, a local problem, signatures from family and neighbours (with permission)', 'Identify a local problem | Find out which local body is responsible | Write a polite petition with facts and a proposed solution | Collect signatures and submit it with an adult'],
          q: [
            ch('Villages are governed locally by…', '*panchayats|the President only|schools'),
            tf('Local leaders are elected by citizens.', true),
            ch('The head of a city corporation is usually called the…', '*mayor|sarpanch|governor'),
          ],
          ms: ['Explains local government structure', 'Describes citizen participation', 'Takes action on local issues'],
        }),
      ]),
      U('community-action', 'Community Action', 'Working together for change.', 'Self-help groups; Cooperative movements: Amul; Volunteering; Community problem-solving', [
        L('cooperatives', 'Together We Can: Cooperatives', {
          o: ['Explain how cooperatives and self-help groups work', 'Describe a successful community initiative'],
          p: ['Knows local government'],
          e: [
            'A cooperative is a business owned and run by its members, who share the benefits. In the 1940s, dairy farmers in Anand, Gujarat, formed a cooperative to get fair prices for their milk. It grew into Amul.',
            'Verghese Kurien helped build the cooperative dairy system; Operation Flood (from 1970) helped India become one of the world\'s largest milk producers.',
            'Self-help groups, often of women, save money together and give small loans to members to start businesses. Community action shows that ordinary people working together can bring big change.',
          ],
          c: [['evidence', 'The Kaira District Cooperative Milk Producers\' Union was formed in 1946 in Anand; India has been the world\'s largest milk producer in recent decades according to official and FAO data.']],
          v: 'cooperative = a business owned and run by its members; self-help group = a small group that saves and lends money together; member = a person who belongs to a group; collective = done by a group together',
          x: ['Amul is owned by millions of dairy farmers.', 'Women\'s self-help groups running small tailoring businesses.'],
          s: ['The Milk Revolution', 'In the 1940s, dairy farmers near Anand were paid unfairly by middlemen. They decided to sell their milk together through their own cooperative. Each farmer, even with just one buffalo, became an owner. Years later, their cooperative became one of India\'s best-known brands — and inspired the "White Revolution".'],
          a: [
            ch('A cooperative is owned by…', '*its members|one rich person|the government only'),
            ch('Amul started in…', '*Anand, Gujarat|Kolkata|Chennai'),
            tf('Self-help groups help members save and borrow.', true),
            ch('Operation Flood is linked to…', '*milk production|floods|space'),
          ],
          t: ['Why might farmers be stronger together than alone?', 'What community problem could a group of families solve together?'],
          k: ['Tell the Amul story to someone and explain what made it work.'],
          m: ['Class or Family Cooperative', 'materials for a small project (e.g. plant saplings, crafts), a notebook', 'Form a small group with shared ownership | Decide on a product or service | Keep fair records of contributions and earnings | Share the results and reflect on cooperation'],
          q: [
            ch('Verghese Kurien is linked to…', '*the dairy cooperative movement|cricket|space travel'),
            tf('Cooperatives share benefits among members.', true),
            ch('Self-help groups are often formed by…', '*women saving together|only banks|robots'),
          ],
          ms: ['Explains cooperatives and SHGs', 'Describes successful initiatives accurately', 'Practises collective action'],
        }),
      ]),
    ]),
    S('s9', 'Urban planning, public services and social inequality.', [
      'Analyse urban planning challenges', 'Evaluate public service delivery', 'Discuss inequality and access',
    ], [
      U('urban-planning', 'Planning Cities', 'Designing cities for people.', 'Master plans; Public transport; Housing and slums; Green spaces; Smart cities', [
        L('good-city', 'What Makes a Good City?', {
          o: ['Identify features of well-planned cities', 'Evaluate urban challenges and solutions'],
          p: ['Compares village and city life'],
          e: [
            'Urban planners design how land is used: housing, roads, markets, parks, schools and hospitals. Chandigarh, designed by Le Corbusier in the 1950s, is an example of a planned city.',
            'Many Indian cities grew quickly without enough planning, leading to traffic jams, crowded informal settlements (slums), pollution and pressure on water and waste systems.',
            'Solutions include good public transport (metro systems now run in many cities), affordable housing, protected green spaces, walking and cycling paths, and involving residents in planning.',
          ],
          v: 'urban planning = designing how cities use land; informal settlement = housing built without official permission, often lacking services; public transport = shared transport like buses and metros; master plan = a long-term plan for a city',
          x: ['Delhi Metro carrying millions of passengers daily.', 'Parks reducing heat in crowded neighbourhoods.'],
          s: ['The Street That Changed', 'A busy market street was choked with traffic and unsafe for walking. The city tried a pedestrian zone: cars were diverted, benches and trees added. Shopkeepers worried at first — but more people walked and shopped. Within a year, sales were up and the air was cleaner.'],
          a: [
            ch('Chandigarh is known as a…', '*planned city|desert village|port'),
            mt('Problem and solution', 'traffic jams=better public transport|heat and no shade=parks and trees|lack of housing=affordable homes'),
            tf('Involving residents can improve city planning.', true),
            ch('A long-term plan for a city is a…', '*master plan|menu|weather report'),
          ],
          t: ['Who should a city be designed for — cars, people, businesses?', 'Why do informal settlements grow in cities?'],
          k: ['Present a plan to improve one street in your area.'],
          m: ['Redesign a Neighbourhood', 'a map of your area, tracing paper, pens', 'Map current land uses | Identify three problems | Redesign with tracing paper overlays | Present your plan and its trade-offs'],
          q: [
            ch('Metros are a form of…', '*public transport|private transport|farming'),
            tf('Rapid unplanned growth can cause traffic and pollution.', true),
            ch('Green spaces help cities by…', '*reducing heat and improving health|making more traffic|removing water'),
          ],
          ms: ['Identifies planning features', 'Evaluates urban problems and solutions', 'Proposes realistic plans'],
        }),
      ]),
      U('inequality', 'Access and Inequality', 'Who gets what services, and why?', 'Access to education, health, water; Income inequality; Social exclusion; Government schemes', [
        L('fair-access', 'Fair Access for All', {
          o: ['Analyse unequal access to services', 'Evaluate policies that aim to reduce inequality'],
          p: ['Understands equity'],
          e: [
            'Not everyone has equal access to good schools, health care, clean water or jobs. Differences can depend on income, location (rural or urban), gender, caste, disability and other factors.',
            'Governments use policies to reduce inequality: the Right to Education Act (2009) for free schooling for ages 6–14, public health programmes, food security schemes, and reservations in education and jobs for historically disadvantaged groups.',
            'Evaluating policies means asking: who benefits, what are the results, what gaps remain, and how could it be improved? People reasonably debate the best approaches.',
          ],
          c: [['evidence', 'The Right of Children to Free and Compulsory Education Act came into force in 2010.'], ['interpretation', 'Policies like reservations are debated in Indian public life; supporters and critics offer different arguments about their design and effects.']],
          v: 'inequality = unequal distribution of resources or opportunities; access = the ability to use a service; social exclusion = being left out of society\'s opportunities; policy = a plan of action by a government',
          x: ['A village without a nearby secondary school.', 'Mid-day meals improving school attendance.'],
          s: ['The Long Walk to School', 'In a remote village, the nearest secondary school was 10 km away. Many girls stopped studying after Class 8. When a state scheme gave bicycles to girls, more continued to high school. Researchers studied the effect — and found enrolment rose. One small policy changed many futures.'],
          a: [
            ch('Inequality in access can depend on…', '*income, location, gender and more|only the weather|nothing'),
            ch('The Right to Education Act provides free schooling for ages…', '*6–14|0–3|18–25'),
            tf('Evaluating policies includes asking what gaps remain.', true),
            mt('Match the policy to the aim', 'mid-day meals=nutrition and attendance|bicycles for girls=access to secondary school|RTE Act=free schooling'),
          ],
          t: ['Is equal opportunity enough, or do some people need extra support?', 'How can we measure whether a policy works?'],
          k: ['Present an analysis of one government scheme: aims, results and improvements.'],
          m: ['Service Access Survey', 'a short questionnaire, notebook', 'Survey 10 families about access to schools, clinics and water (with permission) | Map the results | Identify inequalities | Suggest one evidence-based improvement'],
          q: [
            ch('The ability to use a service is…', '*access|inequality|policy'),
            tf('People debate the best ways to reduce inequality.', true),
            ch('A plan of action by a government is a…', '*policy|petition|parade'),
          ],
          ms: ['Analyses inequality in access', 'Evaluates policies with evidence', 'Proposes improvements'],
        }),
      ]),
    ]),
    S('s12', 'Sociology of communities and development.', [
      'Apply sociological concepts to communities', 'Evaluate models of development', 'Design a community development project',
    ], [
      U('sociology', 'Studying Society', 'Sociology: how communities work.', 'Social institutions: family, religion, education, economy; Socialisation; Social change', [
        L('institutions', 'Social Institutions', {
          o: ['Explain major social institutions and socialisation', 'Analyse social change in Indian communities'],
          p: ['Understands communities and inequality'],
          e: [
            'Sociology studies how societies are organised. Social institutions are lasting structures that meet basic needs: family, education, religion, economy and government.',
            'Socialisation is how we learn norms, values and roles — first from family, then school, friends, media and community.',
            'Communities change: urbanisation, technology, education and migration have reshaped families (more nuclear families), work and gender roles in India. Sociologists such as M. N. Srinivas studied these changes, describing processes like Sanskritisation and Westernisation.',
          ],
          c: [['interpretation', 'Concepts like Sanskritisation are analytical tools proposed by sociologists and debated by later scholars.']],
          v: 'sociology = the study of society; social institution = a lasting structure like family or education; socialisation = learning society\'s norms and values; norm = an expected way of behaving',
          x: ['Learning greetings like namaste or salaam at home — socialisation.', 'More women entering paid work — social change.'],
          s: ['Three Generations, One Home', 'In one family, the grandmother had married at 16 and never attended school. Her daughter finished college and became a teacher. Her granddaughter studies engineering and plans to work abroad. Sitting together, they discussed how much had changed in three generations — and what had stayed the same: the family meal every Sunday.'],
          a: [
            mt('Match the institution to its role', 'family=raising children|education=passing on knowledge|economy=producing goods and services'),
            ch('Learning society\'s norms is…', '*socialisation|urbanisation|migration'),
            tf('Communities and families change over time.', true),
            ch('A norm is…', '*an expected way of behaving|a type of road|a law of physics'),
          ],
          t: ['Which institution influences you most?', 'What social changes have you seen in your family?'],
          k: ['Interview three generations of a family and present how roles have changed.'],
          m: ['Three-Generation Oral History', 'recording device or notebook, consent from interviewees', 'Interview a grandparent, parent and young person about childhood, education, work and family | Compare answers | Identify social changes and continuities | Write a 1000-word sociological report'],
          q: [
            ch('Sociology studies…', '*society|stars|soil'),
            tf('Socialisation begins in the family.', true),
            ch('M. N. Srinivas was a…', '*sociologist|cricketer|chemist'),
          ],
          ms: ['Explains institutions and socialisation', 'Analyses social change', 'Conducts ethical oral history research'],
        }),
      ]),
      U('development', 'Community Development', 'What counts as progress?', 'GDP vs human development; Participatory development; Sustainable livelihoods', [
        L('measuring-progress', 'Measuring Progress', {
          o: ['Compare measures of development', 'Design a participatory development project'],
          p: ['Understands inequality and policy'],
          e: [
            'Development is often measured by GDP (the value of goods and services produced). But GDP doesn\'t show whether people are healthy, educated or happy.',
            'The Human Development Index (HDI), introduced by the UNDP with economists Mahbub ul Haq and Amartya Sen, combines life expectancy, education and income. Sen argued development means expanding people\'s real freedoms and capabilities.',
            'Participatory development involves community members in deciding priorities and designing solutions, rather than imposing projects from outside. It often leads to more lasting results.',
          ],
          c: [['evidence', 'The first Human Development Report was published by UNDP in 1990; Amartya Sen received the Nobel Prize in Economic Sciences in 1998.']],
          v: 'GDP = gross domestic product, the value of goods and services produced; HDI = Human Development Index combining health, education and income; capability = a real freedom to do or be something; participatory = involving the people affected',
          x: ['Kerala\'s strong health and education outcomes relative to its income level.', 'Villagers mapping their own water needs before a project.'],
          s: ['The Well Nobody Used', 'An outside agency built a shiny new well in a village without asking anyone. It was placed far from homes and near a place women felt unsafe walking to. It sat unused. Later, a participatory project let villagers choose the location and design. The new well was used every day.'],
          a: [
            mt('Match the measure', 'GDP=value of goods and services|HDI=health, education and income|capabilities=real freedoms people have'),
            ch('Participatory development means…', '*involving the community in decisions|imposing projects from outside|ignoring local needs'),
            tf('GDP alone doesn\'t show people\'s health or education.', true),
            ch('Amartya Sen described development as expanding…', '*freedoms and capabilities|only factories|only GDP'),
          ],
          t: ['Should a country aim to maximise GDP or wellbeing? Can it do both?', 'Why did the unused well fail?'],
          k: ['Present a participatory plan for a community improvement project.'],
          m: ['Participatory Development Plan', 'community meeting (school, building, or neighbourhood), notebook', 'Hold a meeting to list community needs | Rank priorities together | Design one small project with community input | Implement or simulate it and evaluate the outcome'],
          q: [
            ch('HDI combines…', '*life expectancy, education and income|only income|only population'),
            tf('Participatory approaches often last longer.', true),
            ch('GDP measures…', '*value of goods and services produced|happiness directly|rainfall'),
          ],
          ms: ['Compares development measures', 'Explains capability approach', 'Designs participatory projects'],
        }),
      ]),
    ]),
  ],
});
