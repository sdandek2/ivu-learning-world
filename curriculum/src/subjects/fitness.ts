import { subject, S, U, L, ch, tf, od, mt } from '../dsl.ts';

export default subject({
  id: 'fitness',
  description: 'Movement, play and fitness: fundamental movement skills, balance and coordination, yoga, games and teamwork, components of fitness, traditional Indian games and sports, training principles and lifelong active living. Every lesson is mostly doing, not watching.',
  stages: [
    S('s4', 'Running, jumping, balancing and moving like animals.', [
      'Run, jump, hop and balance safely', 'Move in different ways and directions', 'Enjoy active play every day',
    ], [
      U('move-like-animals', 'Move Like an Animal', 'Exploring how bodies can move.', 'Run, jump, hop, skip, crawl; Fast and slow; Big and small movements', [
        L('animal-moves', 'Jump Like a Frog, Stomp Like an Elephant', {
          o: ['Perform basic movements: run, jump, hop, crawl', 'Move fast and slow, big and small'],
          p: ['Can walk and run'],
          e: [
            'Our bodies can move in so many ways! We can run, jump, hop on one foot, skip, crawl and roll.',
            'We can move fast like a cheetah or slow like a tortoise, big like an elephant or small like a mouse.',
            'Moving every day makes our muscles and bones strong, our heart healthy, and it\'s fun! Children should be active for at least an hour a day.',
          ],
          v: 'hop = jump on one foot; skip = step and hop with each foot; crawl = move on hands and knees; balance = stay steady without falling',
          x: ['🐸 Jump like a frog with both feet.', '🐘 Stomp slowly and heavily like an elephant.'],
          s: ['The Animal Parade Game', 'Kiko called out animals, and everyone moved like them. "Frog!" — everyone jumped. "Snake!" — everyone slithered. "Cheetah!" — everyone ran fast. "Tortoise!" — everyone moved very, very slowly. By the end, everyone was laughing and puffing!'],
          a: [
            mt('Match the animal to its move', '🐸 frog=jump|🐍 snake=slither|🐆 cheetah=run fast|🐢 tortoise=move slowly'),
            ch('Hopping means jumping on…', '*one foot|two hands|your back'),
            tf('Moving every day helps our heart.', true),
            ch('Which is slow?', '*🐢 tortoise|🐆 cheetah|🐎 horse'),
          ],
          t: ['Which animal move is the hardest? Why?', 'How do you feel after running around?'],
          k: ['Teach a grown-up three animal moves and see if they can guess the animals.'],
          m: ['Animal Movement Dice', 'a box made into a dice, pictures of six animals', 'Stick an animal picture on each side of the box | Roll it | Move like that animal for 20 seconds | Play with your family'],
          q: [
            ch('Crawling means moving on…', '*hands and knees|one foot|your head'),
            ch('How long should children be active each day?', 'one minute|*at least one hour|never'),
            tf('A cheetah is fast.', true),
          ],
          ms: ['Performs basic locomotor skills', 'Varies speed and size of movement', 'Enjoys daily activity'],
        }),
      ]),
      U('balance-catch', 'Balance and Catch', 'Steady bodies and busy hands.', 'Balancing on one leg; Walking a line; Rolling, throwing and catching a ball', [
        L('balance-ball', 'Steady Feet, Ready Hands', {
          o: ['Balance on one leg and walk along a line', 'Roll, throw and catch a large ball'],
          p: ['Can run and jump'],
          e: [
            'Balancing means keeping steady without falling. Try standing on one leg like a flamingo! Spreading your arms out and looking at one spot helps.',
            'To catch a ball, keep your eyes on it, stretch your hands out ready, and bring the ball into your chest.',
            'To throw, step forward with the opposite foot to your throwing hand and swing your arm. Practise makes it easier every time.',
          ],
          v: 'balance = stay steady; catch = grab something thrown to you; throw = send something through the air with your hand; aim = point at a target',
          x: ['Walking along a line like a tightrope walker.', 'Rolling a ball to knock down plastic bottles.'],
          s: ['Mayur\'s Flamingo Challenge', 'Mayur the peacock challenged friends to stand on one leg. Kiko wobbled and fell after two seconds. Tara looked at one spot on a tree and spread her arms — ten seconds! "The trick is to stay calm and focus," Tara said. Kiko tried again and lasted five seconds.'],
          a: [
            ch('To balance better, you can…', '*look at one spot and spread your arms|close your eyes and spin|jump up and down'),
            ch('When catching, keep your eyes on the…', '*ball|sky|ground'),
            tf('Practice makes catching easier.', true),
            od('Catching a ball', 'watch the ball|hands ready|catch it|bring it to your chest'),
          ],
          t: ['Why is it harder to balance with your eyes closed?', 'Is it easier to catch a big ball or a small ball? Why?'],
          k: ['Show a grown-up how you balance on one leg and explain your trick.'],
          m: ['Bottle Bowling', 'six empty plastic bottles, a ball, tape to mark a line', 'Stand the bottles like skittles | Roll the ball from behind the line | Count how many fall | Move the line further back as you get better'],
          q: [
            ch('A flamingo balances on…', '*one leg|three legs|its head'),
            tf('Spreading your arms helps balance.', true),
            ch('When throwing, step forward with…', '*the opposite foot|both feet together|no feet'),
          ],
          ms: ['Balances on one leg for several seconds', 'Catches a large ball', 'Throws towards a target'],
        }),
      ]),
    ]),
    S('s5', 'Yoga for children, games with rules, and warming up.', [
      'Hold simple yoga poses', 'Play simple games following rules', 'Warm up before and cool down after exercise',
    ], [
      U('kids-yoga', 'Yoga Adventures', 'Poses and breathing for strength and calm.', 'Animal poses: tree, cobra, cat-cow, butterfly; Breathing; Calm and focus', [
        L('tree-pose', 'Strong and Calm Like a Tree', {
          o: ['Hold simple yoga poses safely', 'Use slow breathing to feel calm'],
          p: ['Can balance on one leg'],
          e: [
            'Yoga combines poses (asanas), breathing and calm attention. It comes from India and is practised around the world.',
            'Many poses are named after nature: tree pose (vrikshasana), cobra pose (bhujangasana), butterfly pose and cat–cow. They make our bodies strong and flexible.',
            'Slow, deep breaths through the nose help our bodies and minds feel calm. Never force a pose — yoga should never hurt.',
          ],
          c: [['tradition', 'Yoga has roots in ancient Indian traditions, with philosophical texts such as the Yoga Sutras of Patanjali. Modern posture-based yoga developed further in the 20th century. International Day of Yoga is observed on 21 June.']],
          v: 'yoga = practice of poses, breathing and attention from India; asana = a yoga pose; flexible = able to bend easily; breathe = take air in and out',
          x: ['Tree pose: stand on one leg, foot on the other leg\'s calf or thigh, hands together.', 'Butterfly pose: sit with soles of feet together and gently flap knees.'],
          s: ['The Windy Day Tree', 'Momo tried tree pose but wobbled in the "wind". "Grow your roots," said the yoga teacher. Momo pressed the standing foot into the ground, breathed slowly, and lifted arms like branches. When the "wind" blew, Momo swayed a little — but stayed standing tall.'],
          a: [
            mt('Match the pose to its name', 'standing on one leg=tree pose|lying on tummy, chest lifted=cobra pose|soles together, knees flapping=butterfly pose'),
            ch('Yoga comes from…', '*India|Antarctica|the Moon'),
            tf('A yoga pose should never hurt.', true),
            ch('Slow breathing helps us feel…', '*calm|angry|sleepy forever'),
          ],
          t: ['Why do you think many poses are named after animals and nature?', 'How do you feel after slow breathing?'],
          k: ['Teach a family member tree pose and explain how to stay balanced.'],
          m: ['Yoga Story Sequence', 'a mat or carpet, picture cards of poses', 'Make cards for 5 poses (tree, cobra, butterfly, cat, mountain) | Create a short story linking them | Do the poses as you tell the story | End with 5 slow breaths lying down'],
          q: [
            ch('Vrikshasana is…', '*tree pose|cobra pose|running'),
            ch('In yoga we breathe…', '*slowly and deeply|as fast as possible|not at all'),
            tf('International Day of Yoga is on 21 June.', true),
          ],
          ms: ['Performs basic poses safely', 'Uses calming breath', 'Knows yoga\'s Indian origins'],
        }),
      ]),
      U('rules-games', 'Games with Rules', 'Playing fairly together.', 'Tag games; Taking turns; Fair play: winning and losing well; Warm-up and cool-down', [
        L('fair-play', 'Playing Fair', {
          o: ['Follow rules in simple games', 'Win and lose gracefully, and warm up before playing'],
          p: ['Can run, throw and catch'],
          e: [
            'Games have rules so they are fair and fun for everyone. Rules tell us how to play, how to score and what is not allowed.',
            'Good players take turns, play safely, and are kind. Winning is fun, and losing is part of the game too — shake hands and say "good game".',
            'Before running games, warm up with gentle jogging and stretches to get muscles ready. After playing, cool down by walking and stretching slowly.',
          ],
          v: 'rule = an agreement about how to play; fair = the same for everyone; warm up = gentle exercise before activity; cool down = slow movement after activity',
          x: ['In tag, the person who is "it" chases and tags others.', 'Saying "well played" to the other team.'],
          s: ['The Sore Loser Who Learned', 'Kiko lost a running race and stomped off. Later, Kiko won a game of tag — and saw Rangi looking sad. Kiko remembered the feeling and said, "Good game, Rangi! Want to play again?" Rangi smiled, and they played until sunset.'],
          a: [
            ch('Why do games have rules?', '*to make them fair and fun|to make people cry|no reason'),
            ch('After losing, a good player…', '*says "good game"|shouts at others|quits forever'),
            tf('We should warm up before running games.', true),
            od('A game session', 'warm up|play the game|cool down'),
          ],
          t: ['Is it more fun to win by cheating or lose fairly? Why?', 'What would happen in a game with no rules?'],
          k: ['Explain the rules of your favourite game to someone who doesn\'t know it.'],
          m: ['Invent a New Game', 'a ball, cones or bottles, friends or family', 'Make up a simple game with 3 rules | Teach it to others | Play and see if the rules are fair | Change one rule to make it better'],
          q: [
            ch('Warming up gets your ___ ready.', '*muscles|homework|lunch'),
            tf('Taking turns is part of fair play.', true),
            ch('A cool down includes…', '*slow walking and stretching|sprinting|jumping off a wall'),
          ],
          ms: ['Follows game rules', 'Shows good sportsmanship', 'Warms up and cools down'],
        }),
      ]),
    ]),
    S('s6', 'Traditional Indian games, team skills, and the benefits of exercise.', [
      'Play traditional games like kho-kho and kabaddi', 'Cooperate in a team', 'Explain how exercise helps the body and mind',
    ], [
      U('traditional-games', 'Traditional Indian Games', 'Games played across India for generations.', 'Kho-kho; Kabaddi; Lagori (pittu); Gilli-danda; Hopscotch (stapu)', [
        L('kho-kho', 'Kho-Kho and Kabaddi', {
          o: ['Explain the basic rules of kho-kho and kabaddi', 'Play a traditional game safely as a team'],
          p: ['Plays games with rules'],
          e: [
            'Kho-kho is a chasing game. Chasers sit in a row facing alternate directions; one chaser runs, and can tag a teammate by touching their back and saying "kho" to let them take over the chase.',
            'Kabaddi is a contact team sport. A raider enters the opponents\' half and tries to tag defenders and return, all while chanting "kabaddi, kabaddi" on a single breath. Defenders try to stop them. It is now played professionally and internationally.',
            'Other traditional games include lagori (knocking down a stack of stones and rebuilding it), gilli-danda and stapu (hopscotch). They need little equipment and build speed, agility and teamwork.',
          ],
          v: 'kho-kho = a chasing team game from India; kabaddi = a contact team sport where raiders chant on one breath; raider = the attacking player in kabaddi; agility = moving quickly and changing direction easily',
          x: ['Lagori needs only a ball and a stack of flat stones.', 'Kabaddi is a medal sport at the Asian Games.'],
          s: ['Grandfather\'s Game', 'Ivaan\'s grandfather taught the cousins lagori. He stacked seven flat stones, explained the rules, and soon everyone was racing to rebuild the tower while dodging the ball. "We played this every evening when I was your age," he said, smiling. "No phones — just friends and stones."'],
          a: [
            mt('Match the game to its feature', 'kho-kho=chasers pass the chase with "kho"|kabaddi=raider chants on one breath|lagori=knock down and rebuild a stone stack'),
            ch('In kabaddi, the attacking player is the…', '*raider|goalkeeper|bowler'),
            tf('Many traditional games need very little equipment.', true),
            ch('Agility means…', '*moving quickly and changing direction easily|sleeping well|lifting heavy things'),
          ],
          t: ['Why do you think traditional games lasted for so many generations?', 'What skills does kho-kho build?'],
          k: ['Teach the rules of a traditional game to friends and organise a match.'],
          m: ['Traditional Games Festival', 'chalk, a ball, flat stones, a stick (gilli-danda), friends or family', 'Learn the rules of three traditional games from elders | Set up stations | Play each game for 10 minutes | Record which skills each game uses'],
          q: [
            ch('Which game uses a stack of stones?', '*lagori|kabaddi|kho-kho'),
            tf('Kabaddi is played at the Asian Games.', true),
            ch('In kho-kho, the chase passes by saying…', '*"kho"|"stop"|"out"'),
          ],
          ms: ['Explains and plays traditional games', 'Cooperates as a team', 'Values cultural heritage of games'],
        }),
      ]),
      U('why-exercise', 'Why Exercise Matters', 'Exercise helps body and mind.', 'Heart and lungs; Strong bones and muscles; Mood and sleep; Screen time balance', [
        L('exercise-benefits', 'Exercise Superpowers', {
          o: ['Explain several benefits of exercise for body and mind', 'Plan a balanced active day'],
          p: ['Knows the heart and lungs'],
          e: [
            'Exercise strengthens the heart and lungs, so they work better. Activities like running, skipping and jumping make bones stronger.',
            'Exercise also helps the mind: it can improve mood, reduce stress, help us sleep better and even help us concentrate in class.',
            'Health guidelines suggest children aged 5–17 get at least 60 minutes of moderate-to-vigorous activity daily, and limit long periods of sitting and recreational screen time.',
          ],
          c: [['evidence', 'World Health Organization guidelines recommend an average of 60 minutes per day of moderate-to-vigorous physical activity for children and adolescents aged 5–17.']],
          v: 'exercise = activity that makes your body work harder; moderate = makes you breathe faster but you can still talk; vigorous = makes you puff and find it hard to talk; mood = how you feel',
          x: ['Cycling to school counts as activity.', 'A game of football is vigorous activity.'],
          s: ['The Grumpy Afternoon', 'After a long morning of screens, Zuri felt grumpy and tired. Grandmother took her for a skipping-rope challenge in the courtyard. Twenty minutes later, Zuri was laughing, her cheeks pink. That night she slept like a log. "Moving changed my whole mood," she said.'],
          a: [
            mt('Match the activity to its benefit', 'running=stronger heart and lungs|jumping=stronger bones|playing outside=better mood'),
            ch('How much daily activity is recommended for children?', '10 minutes|*at least 60 minutes|5 hours of running'),
            tf('Exercise can help us sleep better.', true),
            ch('Vigorous activity makes you…', '*puff and find it hard to talk|fall asleep|feel cold'),
          ],
          t: ['Why do you think exercise improves mood?', 'How can families make time for activity?'],
          k: ['Plan an active Saturday and explain it to your family.'],
          m: ['Activity Log and Mood Chart', 'a weekly chart, pens', 'Record minutes of activity each day | Rate your mood and sleep each day | After a week, look for patterns | Set an activity goal for next week'],
          q: [
            ch('Moderate activity means…', '*breathing faster but can still talk|sitting still|sleeping'),
            tf('Exercise helps bones grow stronger.', true),
            ch('Too much sitting and screen time should be…', '*limited|increased|ignored'),
          ],
          ms: ['Explains exercise benefits', 'Meets activity guidelines', 'Monitors activity and wellbeing'],
        }),
      ]),
    ]),
    S('s7', 'Components of fitness and sport skills.', [
      'Name the components of fitness', 'Test and improve personal fitness', 'Develop sport-specific skills',
    ], [
      U('fitness-components', 'Components of Fitness', 'Different kinds of fit.', 'Stamina, strength, speed, flexibility, balance, coordination, agility; Fitness tests', [
        L('fitness-tests', 'Testing My Fitness', {
          o: ['Name the main components of fitness', 'Conduct simple fitness tests and set goals'],
          p: ['Knows exercise benefits'],
          e: [
            'Fitness has several components. Stamina (endurance) is keeping going for a long time. Strength is how much force muscles produce. Speed is moving quickly. Flexibility is how far joints can move.',
            'Skill-related components include balance, coordination (moving body parts together smoothly) and agility (changing direction quickly).',
            'Simple tests measure these: shuttle runs (agility/speed), sit-and-reach (flexibility), standing broad jump (power), and timed skipping or jogging (stamina). Compare yourself with your own past results, not others.',
          ],
          v: 'stamina = the ability to keep going for a long time; strength = how much force muscles produce; flexibility = range of movement at joints; coordination = moving body parts together smoothly',
          x: ['A marathon runner needs stamina.', 'A gymnast needs flexibility and balance.'],
          s: ['Personal Bests', 'At the start of term, Arjun did a sit-and-reach test and could barely touch his toes. He stretched gently every evening. Six weeks later, he reached 5 cm further. He didn\'t win any prize — but he beat his own personal best, and that felt brilliant.'],
          a: [
            mt('Match the athlete to a key component', 'marathon runner=stamina|weightlifter=strength|gymnast=flexibility|badminton player=agility'),
            ch('Sit-and-reach tests…', '*flexibility|stamina|speed'),
            tf('It\'s best to compare fitness with your own past results.', true),
            ch('Changing direction quickly is…', '*agility|strength|stamina'),
          ],
          t: ['Which component of fitness matters most for your favourite sport?', 'Why is comparing with your own results more helpful than comparing with others?'],
          k: ['Explain your fitness test results to someone and the goal you have set.'],
          m: ['Six-Week Fitness Challenge', 'measuring tape, timer, notebook', 'Do four simple fitness tests and record results | Choose one component to improve | Practise three times a week for six weeks | Retest and graph your progress'],
          q: [
            ch('Keeping going for a long time is…', '*stamina|speed|flexibility'),
            ch('A shuttle run mainly tests…', '*agility and speed|flexibility|balance only'),
            tf('Coordination is a skill-related fitness component.', true),
          ],
          ms: ['Names fitness components', 'Conducts fitness tests safely', 'Sets and tracks personal goals'],
        }),
      ]),
      U('sport-skills', 'Sport Skills and Teamwork', 'Practising skills and working as a team.', 'Skill practice: drills; Teamwork and communication; Indian sports heroes', [
        L('practice-makes', 'How Skills Improve', {
          o: ['Explain how deliberate practice improves skills', 'Describe teamwork and communication in sport'],
          p: ['Plays games with rules'],
          e: [
            'Skills improve through deliberate practice: focused repetition of a specific skill with feedback, slightly beyond what feels easy. Breaking a skill into parts helps.',
            'In team sports, players communicate (calling for the ball, encouraging), take roles, and support each other. A team of good communicators often beats a team of brilliant individuals.',
            'Indian athletes show what practice can achieve: P. V. Sindhu (badminton), Neeraj Chopra (javelin, Olympic gold 2020 Tokyo Games), Mary Kom (boxing) and the hockey teams of the past and present.',
          ],
          c: [['evidence', 'Neeraj Chopra won the men\'s javelin gold at the Tokyo Olympic Games held in 2021 (officially "Tokyo 2020"); P. V. Sindhu won Olympic medals in 2016 and 2021.']],
          v: 'deliberate practice = focused practice on a specific skill with feedback; drill = a repeated exercise to build a skill; feedback = information about how you did; teamwork = working together towards a goal',
          x: ['Practising badminton serves 50 times with a coach watching.', 'Calling "mine!" in cricket to avoid a collision.'],
          s: ['The Serve That Changed', 'Meera kept missing her badminton serve. Her coach broke it into three parts: grip, swing, follow-through. Meera practised each part slowly for two weeks, getting feedback every session. Then she put it together — and it flew perfectly over the net.'],
          a: [
            ch('Deliberate practice includes…', '*focus, repetition and feedback|only playing matches|no practice'),
            mt('Match the athlete to the sport', 'P. V. Sindhu=badminton|Neeraj Chopra=javelin|Mary Kom=boxing'),
            tf('Good communication helps teams succeed.', true),
            ch('Breaking a skill into parts helps…', '*learn it more effectively|make it harder|nothing'),
          ],
          t: ['Is talent or practice more important? Why?', 'What makes a good team captain?'],
          k: ['Teach someone a sport skill by breaking it into steps.'],
          m: ['Skill Practice Journal', 'notebook, equipment for a chosen skill', 'Choose one sport skill | Break it into parts | Practise for 15 minutes, four times a week, for three weeks | Record successes and feedback, and film or describe progress'],
          q: [
            ch('Neeraj Chopra won Olympic gold in…', '*javelin|swimming|chess'),
            ch('Feedback means…', '*information about how you did|a type of food|giving up'),
            tf('Teams can succeed through good communication.', true),
          ],
          ms: ['Applies deliberate practice', 'Communicates in teams', 'Describes athletes accurately'],
        }),
      ]),
    ]),
    S('s9', 'Training principles, sports science and injury prevention.', [
      'Apply FITT and overload principles', 'Explain the science of training', 'Prevent and manage common injuries',
    ], [
      U('training', 'Training Principles', 'How to train safely and effectively.', 'FITT: frequency, intensity, time, type; Progressive overload; Rest and recovery; Specificity', [
        L('fitt', 'The FITT Principle', {
          o: ['Explain FITT and progressive overload', 'Design a safe personal training plan'],
          p: ['Knows fitness components'],
          e: [
            'FITT guides training: Frequency (how often), Intensity (how hard), Time (how long) and Type (what activity).',
            'Progressive overload means gradually increasing demands so the body adapts — a little more distance, time or repetitions each week. Increasing too fast risks injury.',
            'Rest and recovery are part of training: muscles adapt and repair during rest, especially sleep. Specificity means training matches your goal — swimmers swim, runners run.',
          ],
          v: 'FITT = frequency, intensity, time, type; progressive overload = gradually increasing training demands; recovery = rest that allows the body to repair and adapt; specificity = training matched to a goal',
          x: ['Running 2 km three times a week, adding a little each week.', 'Rest days between hard sessions.'],
          s: ['Too Much, Too Soon', 'Ravi decided to get fit and ran 10 km on his first day. The next morning he could barely walk and missed a week. His PE teacher helped him plan: 2 km three times a week, adding 10% each week. Two months later, Ravi ran 5 km happily — and injury-free.'],
          a: [
            mt('Match FITT', 'Frequency=how often|Intensity=how hard|Time=how long|Type=which activity'),
            ch('Progressive overload means…', '*increasing demands gradually|doing the maximum on day one|never changing'),
            tf('Rest days are part of good training.', true),
            ch('A swimmer training mostly by swimming shows…', '*specificity|overload only|laziness'),
          ],
          t: ['Why does the body need rest to get fitter?', 'How would you adjust a plan if you felt pain?'],
          k: ['Present your personal training plan and explain how it uses FITT.'],
          m: ['Personal Training Plan', 'a weekly planner, a goal', 'Choose a fitness goal | Write a 6-week plan using FITT and gradual overload | Include warm-ups, cool-downs and rest days | Follow it and keep a log'],
          q: [
            ch('"I" in FITT stands for…', '*intensity|interest|inside'),
            tf('Increasing training too quickly can cause injury.', true),
            ch('Muscles adapt and repair mainly during…', '*rest and sleep|warm-ups only|eating sweets'),
          ],
          ms: ['Explains training principles', 'Designs safe plans', 'Monitors and adjusts training'],
        }),
      ]),
      U('injury', 'Preventing and Managing Injury', 'Staying in the game.', 'Common injuries: sprains, strains; RICE for minor injuries; Hydration and heat; When to see a doctor', [
        L('rice', 'RICE and Injury Prevention', {
          o: ['Describe ways to prevent sports injuries', 'Apply basic first aid for minor sprains and know when to seek medical help'],
          p: ['Knows warm-ups and first aid basics'],
          e: [
            'Prevention: warm up, use correct technique, wear suitable shoes and protective gear, build up gradually, stay hydrated, and rest when tired. In Indian summers, avoid intense exercise in the hottest hours.',
            'A sprain is an injury to a ligament (joint), like a twisted ankle; a strain is an injury to a muscle. For minor sprains and strains, a common first-aid approach is RICE: Rest, Ice (wrapped, not directly on skin, for short periods), Compression (a bandage), Elevation (raise it).',
            'See a doctor for severe pain, swelling, inability to bear weight, a possible broken bone, or a head injury. Never play on after a head injury — stop and get checked.',
          ],
          v: 'sprain = injury to a ligament at a joint; strain = injury to a muscle; RICE = rest, ice, compression, elevation; concussion = a brain injury from a blow to the head',
          x: ['Wearing shin guards in football.', 'Drinking water before, during and after sport in the heat.'],
          s: ['Sitting Out', 'In the final minutes of a match, Asha bumped heads with another player and felt dizzy. She wanted to keep playing, but her coach insisted she sit out and see a doctor. "Your brain is more important than any match," the coach said. Asha recovered fully and was back the following month.'],
          a: [
            od('RICE', 'Rest|Ice|Compression|Elevation'),
            ch('After a head injury in sport, you should…', '*stop playing and get checked|keep playing|shake it off'),
            mt('Match', 'sprain=ligament injury|strain=muscle injury|dehydration=not enough water'),
            tf('Warming up can help prevent injuries.', true),
          ],
          t: ['Why do some players hide injuries? What can coaches do about it?', 'How should training change in very hot weather?'],
          k: ['Explain RICE and the "stop after a head injury" rule to a teammate.'],
          m: ['Team Injury Prevention Poster', 'poster paper, pens', 'Research common injuries in your favourite sport | List prevention tips | Explain RICE and when to see a doctor | Share the poster with your club or class'],
          q: [
            ch('Ice should be applied…', '*wrapped in cloth for short periods|directly on skin for hours|never'),
            ch('A twisted ankle is often a…', '*sprain|fracture always|concussion'),
            tf('Hydration matters in hot weather.', true),
          ],
          ms: ['Applies prevention strategies', 'Uses RICE appropriately', 'Recognises when to seek medical help'],
        }),
      ]),
    ]),
    S('s12', 'Exercise physiology, sport and society, and lifelong activity.', [
      'Explain aerobic and anaerobic exercise', 'Analyse sport in society', 'Design a lifelong activity plan',
    ], [
      U('physiology', 'Exercise Physiology', 'What happens inside during exercise.', 'Aerobic and anaerobic respiration; Lactic acid and oxygen debt; Heart rate zones; Training adaptations', [
        L('aerobic-anaerobic', 'Aerobic and Anaerobic Exercise', {
          o: ['Explain aerobic and anaerobic respiration in exercise', 'Use heart rate to monitor intensity'],
          p: ['Understands respiration and the circulatory system'],
          e: [
            'In aerobic respiration, muscles use oxygen to release energy from glucose: glucose + oxygen → carbon dioxide + water (+ energy). It powers steady, longer activity like jogging.',
            'In intense bursts, muscles can\'t get enough oxygen, so they also use anaerobic respiration: glucose → lactic acid (+ less energy). This powers sprints but can\'t last long. Afterwards, you breathe hard to repay the "oxygen debt".',
            'Training causes adaptations: a stronger heart pumping more blood per beat (lower resting heart rate), more capillaries, and more efficient muscles. Heart rate zones help gauge intensity; a rough estimate of maximum heart rate is 220 minus age.',
          ],
          v: 'aerobic = using oxygen; anaerobic = without enough oxygen; lactic acid = a product of anaerobic respiration in muscles; oxygen debt = extra oxygen needed after intense exercise',
          x: ['Marathon running is mainly aerobic.', 'A 100 m sprint relies heavily on anaerobic energy.'],
          s: ['The Burning Legs', 'In the last 50 metres of a 400 m race, Kabir\'s legs burned and felt heavy. His coach explained afterwards: "Your muscles switched to anaerobic energy. It\'s fast but tiring. Training will make your aerobic system stronger so you can hold your speed longer."'],
          a: [
            mt('Aerobic or anaerobic?', 'long slow jog=aerobic|100 m sprint=anaerobic|heavy breathing after sprinting=repaying oxygen debt'),
            ch('Anaerobic respiration in muscles produces…', '*lactic acid|oxygen|chlorophyll'),
            ch('Estimated max heart rate for a 15-year-old:', '*205 bpm|150 bpm|235 bpm'),
            tf('Training can lower resting heart rate.', true),
          ],
          t: ['Why can\'t humans sprint for an hour?', 'What does a lower resting heart rate suggest about fitness?'],
          k: ['Explain to someone why you breathe hard after a sprint.'],
          m: ['🧪 Heart Rate Zones Experiment', 'a timer, notebook (heart-rate monitor optional)', 'Measure resting heart rate | Walk, jog and sprint for 2 minutes each with rests | Record heart rate after each | Graph results and relate them to aerobic and anaerobic exercise'],
          q: [
            ch('Aerobic respiration requires…', '*oxygen|lactic acid|no glucose'),
            ch('Oxygen debt is repaid by…', '*breathing hard after exercise|eating sweets|sleeping during exercise'),
            tf('Sprints rely heavily on anaerobic energy.', true),
          ],
          ms: ['Explains energy systems', 'Uses heart rate data', 'Describes training adaptations'],
        }),
      ]),
      U('sport-society', 'Sport, Society and Lifelong Activity', 'Sport\'s role in culture, equality and health.', 'Gender and access in sport; Doping and ethics; Para-sport; Lifelong physical activity', [
        L('fair-sport', 'Sport, Fairness and Society', {
          o: ['Analyse issues of equality, ethics and inclusion in sport', 'Design a lifelong physical activity plan'],
          p: ['Understands fitness and training'],
          e: [
            'Sport reflects society. Access to sport has often been unequal by gender, income, caste, region and disability. Initiatives like Khelo India aim to widen participation.',
            'Ethics in sport includes fair play, anti-doping rules (which protect health and fairness), and respect for opponents and officials.',
            'Para-sport showcases elite athletes with disabilities; India\'s para-athletes, such as Avani Lekhara (shooting) and Sumit Antil (javelin), have won Paralympic gold. For most people, the goal is lifelong activity — finding enjoyable movement that continues for decades.',
          ],
          c: [['evidence', 'At the Tokyo Paralympic Games (held in 2021), Avani Lekhara won gold in shooting and Sumit Antil won gold in javelin (F64).']],
          v: 'doping = using banned substances to enhance performance; para-sport = sport for athletes with disabilities; inclusion = ensuring everyone can take part; lifelong activity = staying active throughout life',
          x: ['Women\'s cricket and hockey gaining wider audiences.', 'Walking groups for older adults.'],
          s: ['The Girl Who Wasn\'t Allowed', 'Decades ago, a girl in a small town was told wrestling "wasn\'t for girls". She trained anyway, with her family\'s support, and became a national champion. Today, more girls in her town wrestle than ever — because someone went first.'],
          a: [
            ch('Anti-doping rules protect…', '*health and fairness|only sponsors|nobody'),
            mt('Match the athlete to the event', 'Avani Lekhara=para shooting|Sumit Antil=para javelin|Neeraj Chopra=javelin'),
            tf('Access to sport has not always been equal.', true),
            ch('Lifelong activity means…', '*staying active throughout life|only competing as a teenager|never exercising after school'),
          ],
          t: ['How can sport break down barriers in society?', 'Is it ever fair to ban an athlete from competing? When?'],
          k: ['Give a talk on an inspiring Indian athlete and the barriers they overcame.'],
          m: ['Lifelong Activity Plan and Inclusion Audit', 'notebook, local sports facility information', 'Write a plan for staying active at ages 20, 40 and 70 | Audit a local sports facility for inclusion (gender, disability, cost) | Propose two improvements | Share with family or the facility'],
          q: [
            ch('Para-sport is for…', '*athletes with disabilities|only professionals|only children'),
            tf('Fair play includes respecting officials.', true),
            ch('Khelo India aims to…', '*widen sports participation|ban sports|close stadiums'),
          ],
          ms: ['Analyses equality and ethics in sport', 'Describes athletes accurately', 'Plans for lifelong activity'],
        }),
      ]),
    ]),
  ],
});
