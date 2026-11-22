import { subject, S, U, L, ch, tf, od, mt } from '../dsl.ts';

export default subject({
  id: 'hygiene-safety',
  description: 'Staying clean, safe and confident: handwashing and personal hygiene, road, home and water safety, body safety and trusted adults, first aid, emergency numbers, and risk assessment. Written to empower children without frightening them.',
  stages: [
    S('s4', 'Clean hands, my body belongs to me, and safe crossing.', [
      'Wash hands properly', 'Know body safety rules and trusted adults', 'Hold a grown-up\'s hand near roads',
    ], [
      U('clean-hands', 'Clean Hands, Happy Me', 'Washing hands keeps germs away.', 'When to wash: before eating, after toilet, after playing; How to wash: soap, 20 seconds; Covering coughs and sneezes', [
        L('handwash', 'Wash, Wash, Wash Your Hands', {
          o: ['Wash hands with soap in the right steps', 'Know when to wash hands'],
          p: ['Can use a tap with help'],
          e: [
            'Germs are tiny living things too small to see. Some can make us sick. They get on our hands when we play, use the toilet or touch animals.',
            'Washing with soap and water removes germs. Wet your hands, rub with soap — palms, backs, between fingers, under nails — for about 20 seconds (sing "Happy Birthday" twice), rinse and dry.',
            'Wash before eating, after using the toilet, after playing outside, and after touching animals. Cover coughs and sneezes with your elbow.',
          ],
          v: 'germs = tiny living things that can make us sick; soap = helps wash germs away; rinse = wash off with water; sneeze = air bursting out of your nose',
          x: ['Washing hands before eating dal and rice.', 'Sneezing into your elbow, not your hands.'],
          s: ['The Germ Party That Didn\'t Happen', 'Tiny germs were planning a party on Kiko\'s hands after Kiko played in the mud. "Lunch time! We\'ll jump into the food!" they giggled. But Kiko went to the sink, scrubbed with soap and sang "Happy Birthday" twice. Whoosh! The germs washed away. Party cancelled!'],
          a: [
            od('Handwashing steps', 'wet hands 💧|add soap 🧼|scrub for 20 seconds 👐|rinse 🚿|dry 🧻'),
            ch('When should we wash hands?', '*before eating|only on Sundays|never'),
            ch('Sneeze into your…', '*elbow 💪|friend\'s face|food'),
            tf('Soap helps wash germs away.', true),
          ],
          t: ['Why can\'t we see germs?', 'Why is soap better than just water?'],
          k: ['Show a grown-up how you wash your hands, saying each step.'],
          m: ['🧪 Glitter Germs', 'a little glitter or flour, soap, water', 'Put a pinch of glitter on your hands (pretend germs) | Shake hands with a teddy and see the glitter spread | Try washing with water only | Then wash with soap and compare', "Use a small amount of washable, non-toxic material; keep it away from eyes and mouths and do not breathe it in. Wash hands and clean the surface afterwards."],
          q: [
            ch('How long should we scrub?', '1 second|*about 20 seconds|1 hour'),
            ch('After using the toilet, we should…', '*wash our hands|eat straight away|touch our eyes'),
            tf('Germs can spread from hands to food.', true),
          ],
          ms: ['Washes hands correctly', 'Knows key handwashing times', 'Covers coughs and sneezes'],
        }),
      ]),
      U('body-safety', 'My Body Belongs to Me', 'Safe and unsafe touch, and trusted grown-ups.', 'Private parts: covered by a swimsuit; Safe and unsafe touch; Saying no and telling; Trusted adults; No secrets that feel bad', [
        L('my-body-rules', 'My Body, My Rules', {
          o: ['Name private parts as the parts covered by a swimsuit', 'Know to say no, get away, and tell a trusted adult about unsafe touch'],
          p: ['Can name main body parts'],
          e: [
            'Your body belongs to you. Private parts are the parts covered by a swimsuit. Nobody should touch your private parts, or ask you to touch theirs, except a parent or doctor helping keep you clean or healthy — and a doctor only with your parent there.',
            'Safe touch feels good and caring, like a hug from family you want. Unsafe touch makes you feel scared, confused or uncomfortable. You can always say "No!", move away, and tell a trusted grown-up.',
            'Trusted grown-ups are people who keep you safe, like parents, grandparents or a teacher. Surprises (like a birthday present) are fun, but secrets that make you feel bad should always be told — even if someone says not to. It is never your fault.',
          ],
          v: 'private parts = the parts of the body covered by a swimsuit; safe touch = touch that feels caring and okay; unsafe touch = touch that feels scary or wrong; trusted adult = a grown-up who keeps you safe',
          x: ['A high-five from a friend: safe touch.', 'If someone says "Don\'t tell anyone about this touch" — tell a trusted adult right away.'],
          s: ['Momo\'s Helping Hand', 'Momo made a "helping hand" by tracing a paw on paper. On each finger, Momo wrote the name of a trusted grown-up: Mama, Papa, Grandma, Teacher, Aunty Tara. "If I ever feel unsafe or have a worry," Momo said, "I can tell any of these five. And if one doesn\'t listen, I\'ll tell the next."'],
          a: [
            ch('Private parts are the parts covered by a…', '*swimsuit 🩱|hat 🧢|glove 🧤'),
            ch('If a touch feels unsafe, you can…', '*say no, move away and tell a trusted adult|keep it a secret|do nothing'),
            tf('If someone touches you in an unsafe way, it is never your fault.', true),
            ch('Which is a surprise, not a bad secret?', '*a birthday present for Mama|someone asking you to hide a touch|a worry that makes you sad'),
          ],
          t: ['Who are the trusted grown-ups in your life?', 'What is the difference between a surprise and a secret?'],
          k: ['Practise saying "No, I don\'t like that!" in a strong voice, and name your trusted grown-ups to a parent.'],
          m: ['My Helping Hand', 'paper, crayons', 'Trace your hand on paper | Write or draw a trusted grown-up on each finger (with a parent\'s help) | Keep it on your wall | Practise telling a worry to someone on your hand'],
          q: [
            ch('Who can you tell if something feels wrong?', '*a trusted grown-up|nobody|only a stranger online'),
            tf('You should keep secrets that make you feel bad.', false, 'Always tell a trusted adult about secrets that make you feel bad.'),
            ch('Your body belongs to…', '*you|anyone who asks|nobody'),
          ],
          ms: ['Uses correct, simple body safety language', 'Identifies trusted adults', 'Knows say no, get away, tell'],
        }),
      ]),
    ]),
    S('s5', 'Road safety, home safety and emergency help.', [
      'Cross roads safely with an adult', 'Recognise dangers at home', 'Know how to get help in an emergency',
    ], [
      U('road-safety', 'Safe on the Road', 'Stop, look, listen.', 'Traffic lights; Zebra crossing; Footpaths; Seat belts and helmets', [
        L('stop-look-listen', 'Stop, Look and Listen', {
          o: ['Explain how to cross a road safely with an adult', 'Know the meaning of traffic light colours'],
          p: ['Knows left and right'],
          e: [
            'Roads can be dangerous because vehicles move fast. Always hold a grown-up\'s hand near roads, and walk on the footpath.',
            'To cross: find a safe place like a zebra crossing or a green pedestrian signal. Stop at the edge. Look right, left and right again (in India, traffic drives on the left). Listen for vehicles. Cross when it\'s clear, walking straight across.',
            'Traffic lights: red means stop, amber (yellow) means get ready, green means go — but still look! In a car, always wear a seat belt or sit in a child seat. On a two-wheeler, wear a helmet.',
          ],
          v: 'zebra crossing = black and white stripes where people cross; pedestrian = a person walking; seat belt = a strap that keeps you safe in a car; helmet = a hard hat that protects your head',
          x: ['Waiting for the green walking signal.', 'Wearing a helmet on a scooter.'],
          s: ['Kiko Learns to Wait', 'Kiko saw a friend across the busy road and wanted to run! Tara held Kiko back. "Stop. Look. Listen." A bus whooshed past. They walked to the zebra crossing, waited for the green signal, looked both ways, and crossed together. "Patience keeps us safe," said Tara.'],
          a: [
            mt('Match the light', '🔴 red=stop|🟡 amber=get ready|🟢 green=go if it\'s safe'),
            od('Crossing steps', 'stop at the edge|look right, left, right|listen for traffic|cross straight when clear'),
            ch('Where is safest to cross?', '*a zebra crossing|between parked cars|on a bend'),
            tf('We should wear a seat belt in a car.', true),
          ],
          t: ['Why is it dangerous to cross between parked cars?', 'Why should we still look even when the light is green?'],
          k: ['Teach a family member the stop–look–listen steps on your next walk.'],
          m: ['Road Safety Play Mat', 'a large paper sheet, crayons, toy cars and figures', 'Draw roads, a zebra crossing and traffic lights | Act out crossing safely with toy figures | Act out a car stopping at a red light | Explain the rules to a grown-up'],
          q: [
            ch('Red light means…', '*stop|go|dance'),
            ch('On a two-wheeler, wear a…', '*helmet|crown|scarf over eyes'),
            tf('Hold a grown-up\'s hand near roads.', true),
          ],
          ms: ['Describes safe crossing', 'Knows traffic signals', 'Uses seat belts/helmets'],
        }),
      ]),
      U('home-safety', 'Safe at Home', 'Spotting dangers and getting help.', 'Hot things, sharp things, medicines, electricity; Calling for help: 112; Knowing your address', [
        L('home-dangers', 'Danger Detectives at Home', {
          o: ['Identify common dangers at home', 'Know how to get help in an emergency'],
          p: ['Knows trusted adults'],
          e: [
            'Homes are mostly safe, but some things can hurt us: hot stoves and irons, sharp knives, medicines and cleaning liquids, electric sockets, and open windows or balconies.',
            'Never touch medicines or cleaning bottles without a grown-up. Never put anything into sockets. Stay away from the stove unless a grown-up is helping.',
            'In an emergency, find a grown-up. In India, 112 is the emergency number for police, fire and ambulance. Learn your full name, your parent\'s name, phone number and address.',
          ],
          c: [['evidence', 'India\'s Emergency Response Support System uses 112 as a single emergency number; 1098 is the CHILDLINE number for children in need of help.']],
          v: 'danger = something that can hurt you; emergency = a sudden dangerous situation; medicine = something to treat illness, only given by adults; address = where you live',
          x: ['A pan handle turned inward so no one knocks it.', 'Medicines kept in a high, locked cupboard.'],
          s: ['Bolt\'s Safety Sweep', 'Bolt walked through the house with a magnifying glass. "Danger detected: a knife at the table edge!" Bolt moved it back. "Danger: medicine bottle on a low shelf!" A grown-up put it up high. "Home is safe," Bolt beeped, "when we notice dangers."'],
          a: [
            ch('Which is dangerous to touch?', '*a hot iron|a teddy|a book'),
            ch('India\'s emergency number is…', '*112|123|999'),
            tf('Only grown-ups should give medicine.', true),
            mt('Match the danger to the rule', 'socket=never put anything in|stove=only with a grown-up|medicine=only from an adult'),
          ],
          t: ['Why do you think medicines are kept up high?', 'What would you say if you called for help?'],
          k: ['Say your full name, your parent\'s name, phone number and address to a grown-up.'],
          m: ['Emergency Card', 'card, pen, a parent to help', 'Write your name, a parent\'s name and phone number | Write your address and 112 | Practise saying it all aloud | Keep the card in your school bag'],
          q: [
            ch('If there is an emergency, first…', '*find a trusted grown-up|hide|play a game'),
            ch('Cleaning liquids should be…', '*touched only by adults|drunk|played with'),
            tf('You should learn your address.', true),
          ],
          ms: ['Identifies household hazards', 'Knows emergency number and personal details', 'Knows to seek adult help'],
        }),
      ]),
    ]),
    S('s6', 'Personal hygiene habits, water and fire safety.', [
      'Keep a daily hygiene routine', 'Know water safety rules', 'Know what to do in a fire',
    ], [
      U('hygiene-routine', 'My Hygiene Routine', 'Daily habits for a healthy body.', 'Bathing; Brushing teeth; Nails and hair; Clean clothes; Using toilets properly', [
        L('daily-routine', 'Fresh and Clean Every Day', {
          o: ['Follow a daily personal hygiene routine', 'Explain how hygiene prevents illness'],
          p: ['Washes hands correctly'],
          e: [
            'Personal hygiene means keeping your body clean. Bathe daily, especially in hot weather when you sweat. Brush teeth twice a day.',
            'Keep nails short and clean, since germs hide under them. Wash and comb your hair. Wear clean clothes and socks.',
            'Use the toilet properly, flush or pour water, and wash hands afterwards. Good hygiene prevents infections and helps you feel confident.',
          ],
          v: 'hygiene = keeping clean to stay healthy; routine = things you do regularly; infection = illness caused by germs getting into the body; nails = the hard parts at your fingertips',
          x: ['Trimming nails every week.', 'Changing socks every day.'],
          s: ['The Smelly Sock Mystery', 'Kiko noticed a funny smell in the bedroom. Following the smell, Kiko found three-day-old socks under the bed! Kiko washed them, put on clean ones, and from then on put socks in the laundry basket every evening. Mystery solved.'],
          a: [
            ch('How often should we brush our teeth?', 'once a month|*twice a day|never'),
            ch('Germs can hide under…', '*long, dirty nails|clean plates|the sky'),
            tf('Bathing daily helps keep us clean.', true),
            od('Morning routine', 'use the toilet and wash hands|brush teeth|bathe|wear clean clothes'),
          ],
          t: ['Why do you think we sweat more in summer?', 'How does hygiene help other people too?'],
          k: ['Tell someone your morning and evening hygiene routine.'],
          m: ['Hygiene Routine Chart', 'paper, stickers, pens', 'Make a chart with morning and evening hygiene tasks | Tick each task every day for two weeks | Notice which tasks you forget | Make a reminder for tricky ones'],
          q: [
            ch('Which keeps nails germ-free?', '*keeping them short and clean|biting them|never cutting them'),
            tf('Clean clothes help with hygiene.', true),
            ch('After using the toilet, always…', '*wash your hands|skip washing'),
          ],
          ms: ['Maintains a hygiene routine', 'Explains hygiene and infection', 'Self-manages daily tasks'],
        }),
      ]),
      U('water-fire', 'Water and Fire Safety', 'Staying safe near water and in a fire.', 'Swimming with adults; Never going into water alone; Fire: get out, stay out, call 112; Stop, drop and roll', [
        L('fire-drill', 'Get Out, Stay Out', {
          o: ['Explain what to do if there is a fire', 'Follow water safety rules'],
          p: ['Knows emergency number'],
          e: [
            'If there is a fire, get out quickly and stay out. Don\'t stop to collect toys. If there is smoke, crawl low where the air is cleaner. Before opening a door, feel it with the back of your hand — if hot, use another way.',
            'Once outside, call 112 or tell a grown-up, and never go back inside. If your clothes catch fire: Stop, Drop and Roll to put out the flames.',
            'Water is fun but can be dangerous. Only swim with a grown-up watching. Never go into rivers, lakes, the sea or wells alone, and stay away from deep water in the monsoon.',
          ],
          v: 'smoke = dark gas from fire that is harmful to breathe; evacuate = leave a dangerous place quickly; drown = to be harmed by being unable to breathe under water; lifeguard = a person trained to keep swimmers safe',
          x: ['Practising a family fire drill with a meeting point.', 'Wearing a life jacket in a boat.'],
          s: ['The Family Fire Drill', 'Zuri\'s family practised a fire drill. Papa pressed the smoke alarm test button — BEEP! Everyone crawled low to the door, went outside and met at the big neem tree. "Two minutes!" said Mama. "Now we know exactly what to do if it ever happens."'],
          a: [
            od('If there is a fire', 'shout "Fire!" to warn others|get out quickly|go to the meeting point|call 112'),
            ch('If your clothes catch fire:', '*Stop, Drop and Roll|run fast|jump in the air'),
            ch('In smoke, you should…', '*crawl low|stand tall|hide under the bed'),
            tf('Only swim when a grown-up is watching.', true),
          ],
          t: ['Why should you never go back into a burning building?', 'Why are rivers more dangerous in the monsoon?'],
          k: ['Show your family how to Stop, Drop and Roll and explain why it works.'],
          m: ['Family Escape Plan', 'paper, pens, a family meeting', 'Draw a map of your home with two ways out of each room | Choose an outside meeting point | Practise a drill with your family | Check smoke alarms with an adult if you have them'],
          q: [
            ch('After escaping a fire, you should…', '*stay out|go back for toys|hide inside'),
            tf('You can swim in a river alone if you are careful.', false),
            ch('Feel a door with the back of your hand to check if it\'s…', '*hot|wet|locked'),
          ],
          ms: ['Describes fire safety actions', 'Demonstrates Stop, Drop and Roll', 'States water safety rules'],
        }),
      ]),
    ]),
    S('s7', 'First aid basics and online safety foundations.', [
      'Give basic first aid for small injuries', 'Know when and how to get medical help', 'Understand privacy and safe sharing online',
    ], [
      U('first-aid', 'First Aid Basics', 'Helping with small injuries until help arrives.', 'Cuts and grazes; Burns: cool water; Nosebleeds; Calling for help: DRABC idea', [
        L('first-aider', 'Be a First Aider', {
          o: ['Treat minor cuts, burns and nosebleeds safely', 'Know when to call for adult or medical help'],
          p: ['Knows emergency number'],
          e: [
            'First aid is the first help given to an injured person. For a small cut: wash with clean water, press gently with a clean cloth to stop bleeding, and cover with a plaster. Tell an adult.',
            'For a burn: cool it under cool running water for at least 20 minutes. Don\'t put ice, butter, toothpaste or oil on it. Get adult help.',
            'For a nosebleed: sit up, lean forward (not back), and pinch the soft part of the nose for about 10 minutes. For anything serious — bad bleeding, someone not responding, trouble breathing — call 112 and get an adult immediately.',
          ],
          v: 'first aid = the first help given to someone injured or ill; plaster = a small sticky bandage; burn = an injury from heat; nosebleed = bleeding from the nose',
          x: ['A grazed knee washed and covered.', 'A kitchen burn cooled under running water.'],
          s: ['The Playground Fall', 'Ravi fell and scraped his knee. Asha stayed calm: "Let\'s tell the teacher." Together they rinsed the graze with clean water, pressed it with a clean tissue, and the teacher put on a plaster. "You were a great first aider," the teacher told Asha.'],
          a: [
            ch('For a burn, use…', '*cool running water|butter|ice cubes'),
            ch('For a nosebleed, lean…', '*forward|backward|sideways upside down'),
            tf('For serious injuries, call 112 and get an adult.', true),
            od('Small cut', 'wash with clean water|press with a clean cloth|cover with a plaster|tell an adult'),
          ],
          t: ['Why shouldn\'t we put butter or toothpaste on burns?', 'How can staying calm help an injured person?'],
          k: ['Show someone how to help with a nosebleed, explaining each step.'],
          m: ['Mini First Aid Kit', 'a small box, plasters, clean gauze, a card with emergency numbers', 'Collect basic first aid items with an adult | Label the box | Make a card with simple instructions for cuts, burns and nosebleeds | Keep it somewhere everyone knows', "Make this kit with an adult. Children should tell an adult about injuries and must not treat serious burns, heavy bleeding or other emergencies themselves. An adult should check and maintain the kit."],
          q: [
            ch('How long should you cool a burn?', '10 seconds|*at least 20 minutes|1 hour in ice'),
            tf('You should tilt your head back during a nosebleed.', false),
            ch('First aid means…', '*the first help given|surgery|a type of medicine'),
          ],
          ms: ['Treats minor injuries correctly', 'Recognises when to escalate', 'Stays calm and communicates'],
        }),
      ]),
      U('online-basics', 'Safe Online', 'Privacy, strangers online and asking for help.', 'Personal information; Online strangers; Unkind messages; Telling a trusted adult', [
        L('private-info', 'Keep It Private', {
          o: ['Identify personal information that should be kept private online', 'Know what to do if something online feels wrong'],
          p: ['Knows trusted adults'],
          e: [
            'Personal information includes your full name, address, school, phone number, passwords and photos showing where you live. Keep these private online, just like you wouldn\'t tell a stranger on the street.',
            'People online may not be who they say they are. Never agree to meet someone you only know online, and never send photos to strangers.',
            'If anything online makes you feel worried, scared or uncomfortable — a message, picture or request — stop, don\'t reply, and tell a trusted adult. You won\'t be in trouble for telling.',
          ],
          v: 'personal information = details that identify you; password = a secret code to protect an account; online stranger = someone you only know through the internet; privacy = keeping your information safe',
          x: ['A game asking for your home address — don\'t share it.', 'A message saying "Don\'t tell your parents about me" — tell a trusted adult.'],
          s: ['The Friendly Gamer', 'While playing an online game, someone called "CoolKid12" asked Nova which school Nova went to and for a photo. Nova felt uneasy and remembered the rule: stop, don\'t reply, tell. Nova told Papa, who blocked and reported the account. "You did exactly the right thing," Papa said.'],
          a: [
            mt('Match each detail to the right choice', 'home address=keep private: it shows where you live|password=keep secret: it protects your account|favourite colour=usually okay to share'),
            ch('If something online worries you, you should…', '*stop and tell a trusted adult|reply quickly|keep it secret'),
            tf('People online are always who they say they are.', false),
            ch('Someone you only know online asks to meet. You…', '*say no and tell a trusted adult|go alone|send your address'),
          ],
          t: ['Why might someone pretend to be a child online?', 'What makes a strong password?'],
          k: ['Explain the "stop, don\'t reply, tell" rule to someone in your family.'],
          m: ['Family Online Safety Agreement', 'paper, pens, a family discussion', 'Agree rules for which apps and games you use | List information never to share | Write who to tell if something feels wrong | Sign it together and put it near the computer'],
          q: [
            ch('Which should you NEVER share with online strangers?', '*your address|a joke|your favourite animal'),
            tf('You won\'t be in trouble for telling a trusted adult about something online.', true),
            ch('A good password is…', '*secret and hard to guess|your name|shared with friends'),
          ],
          ms: ['Identifies private information', 'Applies stop–don\'t reply–tell', 'Creates family safety agreements'],
        }),
      ]),
    ]),
    S('s9', 'Consent and boundaries, emergency response, and disease prevention.', [
      'Understand consent and respectful boundaries', 'Respond to emergencies including CPR awareness', 'Explain disease prevention measures',
    ], [
      U('consent', 'Consent and Boundaries', 'Respecting yourself and others.', 'Personal boundaries; Consent: asking and respecting no; Peer pressure; Help-seeking: 1098', [
        L('boundaries', 'Boundaries and Consent', {
          o: ['Explain consent in everyday situations', 'Practise setting and respecting boundaries'],
          p: ['Knows body safety and trusted adults'],
          e: [
            'Boundaries are limits people set about what feels okay — for touch, personal space, belongings and information. Everyone\'s boundaries can be different, and they can change.',
            'Consent means freely agreeing to something. It should be clear and can be withdrawn at any time. Asking "Is it okay if I…?" and respecting "no" are signs of respect — in hugs, borrowing things, sharing photos, and games.',
            'Peer pressure can push people to cross boundaries. It\'s okay to say no firmly. If anyone pressures, threatens or harms you, tell a trusted adult or call CHILDLINE 1098.',
          ],
          v: 'boundary = a limit about what feels okay to you; consent = freely given permission; peer pressure = influence from people your age to do something; respect = treating others\' choices as important',
          x: ['Asking before posting a photo of a friend.', 'Saying "I don\'t want to play that game" and walking away.'],
          s: ['The Photo Question', 'At a birthday party, Meera took a funny photo of Arjun mid-sneeze and was about to post it to the class group. She paused and asked, "Is it okay if I share this?" Arjun laughed but said, "Please don\'t." Meera deleted it. Arjun trusted her even more after that.'],
          a: [
            ch('Consent means…', '*freely agreeing|being forced|staying silent'),
            ch('Before sharing a photo of a friend, you should…', '*ask their permission|post it immediately|edit it secretly'),
            tf('Someone can change their mind and withdraw consent.', true),
            ch('CHILDLINE in India is…', '*1098|100|108'),
          ],
          t: ['How can you tell if someone is uncomfortable even if they don\'t say no?', 'Why is peer pressure hard to resist?'],
          k: ['Role-play saying no to peer pressure in three different ways.'],
          m: ['Boundaries Scenario Cards', 'card, pens', 'Write 8 everyday scenarios (borrowing, hugging, sharing photos) | For each, write a respectful question to ask and a respectful response to "no" | Discuss them with family | Add your own scenarios'],
          q: [
            ch('If a friend says no to a hug, you should…', '*respect it|hug them anyway|get angry'),
            tf('Everyone\'s boundaries can be different.', true),
            ch('A healthy response to peer pressure is…', '*saying no firmly|always going along|keeping quiet if hurt'),
          ],
          ms: ['Explains consent in everyday contexts', 'Sets and respects boundaries', 'Knows help-seeking routes'],
        }),
      ]),
      U('emergency-response', 'Emergency Response', 'Recognising emergencies and acting.', 'Checking for danger and response; Calling 112 with clear information; CPR awareness; Recovery position', [
        L('call-for-help', 'Making a Good Emergency Call', {
          o: ['Describe the steps of responding to an emergency', 'Make a clear emergency call'],
          p: ['Knows first aid basics'],
          e: [
            'In an emergency, first check for Danger — don\'t get hurt yourself. Then check Response: speak loudly and tap the person\'s shoulders. Shout for help.',
            'Call 112 (or ask someone to). Say clearly: what happened, where you are (address and landmarks), how many people are hurt, and their condition. Don\'t hang up until told to.',
            'If someone is not breathing normally, trained people give CPR (chest compressions). If someone is breathing but unresponsive, the recovery position helps keep the airway open. Learning first aid from a certified course is valuable.',
          ],
          v: 'CPR = cardiopulmonary resuscitation, chest compressions to keep blood flowing; recovery position = a safe side-lying position for an unconscious breathing person; landmark = a well-known place used to give directions; responder = someone who helps in an emergency',
          x: ['"My grandfather has collapsed at 12 Park Road, near the blue temple gate. He isn\'t answering."', 'A school first aid course for older students.'],
          s: ['The Calm Caller', 'When Grandmother fainted in the kitchen, eleven-year-old Kabir checked that the floor was safe, called her name loudly and tapped her shoulders. She was breathing but not answering. He called 112 and gave the address and landmark slowly and clearly. The ambulance arrived quickly. The paramedic said his clear call had saved precious minutes.'],
          a: [
            od('Emergency steps', 'check for danger|check response|shout for help|call 112|give first aid if trained'),
            ch('When calling 112, you should give…', '*what happened and exactly where|only your name|nothing, just hang up'),
            tf('Never put yourself in danger to help someone.', true),
            ch('A breathing but unresponsive person may be placed in the…', '*recovery position|standing position|upside down'),
          ],
          t: ['Why are landmarks helpful when giving an address?', 'Why is it important to stay on the line?'],
          k: ['Role-play an emergency call with a family member, giving clear information.'],
          m: ['Emergency Information Sheet', 'paper, pens, family help', 'Write your full address with landmarks | List emergency numbers (112, 1098, family doctor) | Practise a pretend call script | Ask a parent about local first aid courses'],
          q: [
            ch('First check in any emergency:', '*danger to yourself|your phone battery|the time'),
            tf('Learning certified first aid is valuable.', true),
            ch('CPR is given when someone is…', '*not breathing normally|sneezing|sleeping peacefully'),
          ],
          ms: ['Sequences emergency response', 'Makes clear emergency calls', 'Knows when CPR and recovery position apply'],
        }),
      ]),
    ]),
    S('s12', 'Risk assessment, public health and safety citizenship.', [
      'Assess and manage risks', 'Explain public health measures', 'Promote safety in the community',
    ], [
      U('risk', 'Thinking About Risk', 'Likelihood, severity and good decisions.', 'Hazard vs risk; Risk matrices; Cognitive biases about risk; Road safety statistics', [
        L('risk-matrix', 'Hazard, Risk and Decisions', {
          o: ['Distinguish hazard from risk', 'Use a simple risk matrix and recognise biases in risk perception'],
          p: ['Knows safety rules and probability basics'],
          e: [
            'A hazard is something that could cause harm (a busy road). Risk is the chance that harm will happen and how bad it would be. Risk = likelihood × severity.',
            'A risk matrix rates likelihood and severity to prioritise actions. Controls reduce risk: eliminate, substitute, add barriers, train people, and use protective equipment.',
            'People often misjudge risk: dramatic rare events (like plane crashes) feel scarier than common ones (like road accidents). In India, road crashes cause well over a hundred thousand deaths each year, many involving two-wheelers and pedestrians — so helmets, seat belts and safe speeds save many lives.',
          ],
          c: [['evidence', 'Government of India road accident reports record around 1.5 lakh or more deaths annually in recent years.']],
          v: 'hazard = something that could cause harm; risk = likelihood and severity of harm; control measure = an action that reduces risk; availability bias = judging risk by how easily examples come to mind',
          x: ['Wearing a helmet reduces the severity of head injuries.', 'A guard rail on a balcony is a barrier control.'],
          s: ['The Scary Headline', 'After a rare shark attack made the news, many people stopped swimming at the beach — but continued riding scooters without helmets. A student compared the numbers. "We fear what\'s dramatic, not what\'s dangerous," she wrote in her school magazine.'],
          a: [
            mt('Hazard or control?', 'wet floor=hazard|warning sign=control|helmet=control (protective equipment)'),
            ch('Risk combines…', '*likelihood and severity|colour and size|time and money'),
            tf('People often overestimate rare dramatic risks.', true),
            ch('Most effective control is often to…', '*eliminate the hazard|ignore it|add a poster only'),
          ],
          t: ['Why might teenagers take more risks? How can that be channelled positively?', 'How should a school decide which risks to address first?'],
          k: ['Present a risk assessment for a school event with your top three controls.'],
          m: ['Risk Assessment Project', 'a risk matrix template, notebook', 'Choose an activity (school trip, sports day) | List hazards, rate likelihood and severity | Propose controls and re-rate | Present it to a teacher or event organiser'],
          q: [
            ch('A busy road is a…', '*hazard|control|consent'),
            ch('Severity means…', '*how bad the harm would be|how often|how cheap'),
            tf('Helmets reduce the severity of head injuries.', true),
          ],
          ms: ['Distinguishes hazard and risk', 'Uses a risk matrix', 'Recognises risk biases with evidence'],
        }),
      ]),
      U('public-health', 'Public Health', 'Keeping whole communities healthy.', 'Sanitation and vaccination; Epidemics and contact tracing; Mental health and help-seeking', [
        L('community-health', 'Health for Everyone', {
          o: ['Explain major public health measures and their impact', 'Discuss mental health and help-seeking as part of public health'],
          p: ['Understands immunity and disease prevention'],
          e: [
            'Public health protects the health of whole populations through clean water and sanitation, vaccination, disease surveillance, health education and safe environments.',
            'During epidemics, measures like testing, contact tracing, isolation and vaccination slow spread. They work best when people trust and cooperate with them.',
            'Mental health is part of health. Stress, anxiety and depression are common and treatable. Talking to trusted people and professionals is a sign of strength. In India, Tele-MANAS (14416) provides free mental health support.',
          ],
          c: [['evidence', 'The National Tele Mental Health Programme (Tele-MANAS) was launched in 2022 with the toll-free number 14416.']],
          v: 'public health = protecting health of whole populations; epidemic = a rapid spread of disease in a population; contact tracing = finding people exposed to an infected person; mental health = emotional and psychological wellbeing',
          x: ['Mass polio vaccination campaigns.', 'School counsellors supporting students\' wellbeing.'],
          s: ['The Polio Volunteers', 'For years, thousands of health workers and volunteers walked village to village, crossing rivers and climbing hills to give polio drops to every child — sometimes many times. In 2014, India was certified polio-free. Public health, one doctor said, is "millions of small actions adding up".'],
          a: [
            mt('Match the measure', 'vaccination=prevents disease|contact tracing=finds exposed people|sanitation=safe waste disposal|counselling=supports mental health'),
            ch('Asking for help with mental health is…', '*a sign of strength|a weakness|not allowed'),
            tf('Public health measures work better with public trust.', true),
            ch('India\'s Tele-MANAS mental health helpline is…', '*14416|112|1098'),
          ],
          t: ['How should individual freedom be balanced with public health measures?', 'Why might people hesitate to seek mental health help, and how can that change?'],
          k: ['Give a short talk reducing stigma around mental health help-seeking.'],
          m: ['Community Health Campaign', 'poster materials or a short video, research', 'Choose a public health issue (handwashing, mosquito control, mental health) | Research evidence and local resources | Create a respectful, accurate campaign | Share it with your school or residents\' association'],
          q: [
            ch('A rapid spread of disease is an…', '*epidemic|ecosystem|economy'),
            tf('Mental health is part of overall health.', true),
            ch('Contact tracing helps…', '*slow disease spread|build roads|grow crops'),
          ],
          ms: ['Explains public health measures', 'Discusses ethics of public health', 'Promotes help-seeking respectfully'],
        }),
      ]),
    ]),
  ],
});
