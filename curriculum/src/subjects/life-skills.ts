import { subject, S, U, L, ch, tf, od, mt, ct } from '../dsl.ts';

export default subject({
  id: 'life-skills',
  description: 'Practical independence: dressing and tidying, helping at home, simple cooking, time management, organisation, decision-making, planning, budgeting basics, and preparing for adult life. Builds confidence through real responsibility.',
  stages: [
    S('s4', 'Doing things by myself: dressing, tidying, and helping.', [
      'Dress and undress with little help', 'Tidy toys away', 'Help with small jobs at home',
    ], [
      U('by-myself', 'I Can Do It Myself!', 'Building independence step by step.', 'Getting dressed: buttons, zips, shoes; Washing up after meals; Packing a bag', [
        L('get-dressed', 'Getting Dressed by Myself', {
          o: ['Put on clothes in the right order', 'Try fastenings like buttons, zips and velcro'],
          p: ['Can name clothes'],
          e: [
            'Getting dressed by yourself is a big step! Clothes go on in an order: underwear first, then trousers or skirt, then a top, then socks, then shoes.',
            'Buttons, zips and velcro take practice. Start with big buttons and practise on a shirt lying on the table before trying it on.',
            'If something is tricky, try again slowly, and it\'s okay to ask for a little help.',
          ],
          v: 'dress = put on clothes; button = a small disc that fastens clothes; zip = a fastener that slides up and down; velcro = fuzzy strips that stick together',
          x: ['Socks before shoes!', 'Tops with the label at the back.'],
          s: ['Kiko\'s Upside-Down Morning', 'Kiko wanted to dress without help and put shoes on first, then tried to pull socks over them! Everyone giggled — Kiko too. Tara drew a picture chart: underwear, trousers, top, socks, shoes. The next morning, Kiko followed it and walked out proudly, all by myself!'],
          a: [
            od('Getting dressed order', 'underwear|trousers|top|socks|shoes 👟'),
            ch('What goes on before shoes?', '*socks 🧦|a hat|a coat on top'),
            tf('Buttons get easier with practice.', true),
            ch('If something is tricky, you can…', '*try again slowly or ask for help|give up forever|cry'),
          ],
          t: ['Which fastening is the hardest for you?', 'How do you feel when you do something by yourself?'],
          k: ['Tell a grown-up the order you put your clothes on.'],
          m: ['Dressing Picture Chart', 'paper, crayons, tape', 'Draw each clothing item in order | Stick the chart near your clothes | Follow it every morning for a week | Add a sticker each day you dress by yourself'],
          q: [
            ch('Shoes go on…', 'first|*last|never'),
            tf('Asking for a little help is okay.', true),
            ch('Velcro fastens by…', '*sticking together|tying|buttoning'),
          ],
          ms: ['Dresses with minimal help', 'Sequences dressing', 'Persists with fastenings'],
        }),
      ]),
      U('tidy-help', 'Tidy Up and Help Out', 'Everyone helps at home.', 'Tidying toys into boxes; Setting the table; Watering plants; Folding small clothes', [
        L('tidy-time', 'Tidy-Up Time', {
          o: ['Tidy toys into the right places', 'Do a small helping job at home'],
          p: ['Can sort objects'],
          e: [
            'When everything has a home, it\'s easy to find. Blocks go in the block box, books on the shelf, crayons in the crayon tin.',
            'Tidying after play is part of being a good helper. A tidy-up song makes it fun!',
            'You can help at home in other ways: setting spoons on the table, watering plants, putting socks in pairs, and feeding a pet with a grown-up.',
          ],
          v: 'tidy = put things back where they belong; helper = someone who does useful jobs; sort = put things into groups; chore = a regular job at home',
          x: ['Matching socks into pairs.', 'Putting all the toy cars in one box.'],
          s: ['The Missing Puzzle Piece', 'Momo couldn\'t finish a puzzle because one piece was missing. After searching everywhere, Momo found it under a pile of toys. "If everything had a home," said Mama Bear, "it would be easy to find." So Momo made labels for each box — and never lost a puzzle piece again.'],
          a: [
            ch('Where should books go?', '*on the bookshelf|on the floor|in the bath'),
            ch('A helping job you can do:', '*setting spoons on the table|cooking on the stove alone|driving'),
            tf('Tidying helps us find things easily.', true),
            mt('Match the item to its home', 'crayons=crayon tin|books=bookshelf|blocks=block box'),
          ],
          t: ['Why is it easier to play when your room is tidy?', 'What jobs do grown-ups in your home do every day?'],
          k: ['Show a grown-up how you tidied your toys and where each thing lives.'],
          m: ['Toy Home Labels', 'boxes or baskets, paper, crayons, tape', 'Draw a picture label for each toy box | Stick labels on the boxes | Tidy all toys into the right boxes | Time yourself with a tidy-up song'],
          q: [
            ch('After playing, we should…', '*tidy up|leave everything out|hide toys under the bed'),
            ct('Pairs of socks: 🧦🧦 🧦🧦 🧦🧦 — how many pairs?', 3),
            tf('Helping at home is part of being a family.', true),
          ],
          ms: ['Tidies toys independently', 'Completes small household jobs', 'Uses organisation systems'],
        }),
      ]),
    ]),
    S('s5', 'Daily routines, simple food preparation and caring for belongings.', [
      'Follow a morning and evening routine', 'Make a simple snack safely', 'Look after belongings',
    ], [
      U('routines', 'My Daily Routine', 'Routines make days smoother.', 'Morning routine; Evening routine; Picture schedules', [
        L('morning-routine', 'Ready for the Day', {
          o: ['Follow a morning routine with a picture schedule', 'Explain why routines help'],
          p: ['Dresses independently'],
          e: [
            'A routine is a set of things we do in the same order every day. A morning routine might be: wake up, use the toilet, brush teeth, wash face, get dressed, eat breakfast, pack bag.',
            'Routines help us remember what to do, save time and feel calm because we know what comes next.',
            'A picture schedule shows each step. Tick each one as you finish it.',
          ],
          v: 'routine = things done in the same order every day; schedule = a plan showing when things happen; morning = the start of the day; evening = the end of the day',
          x: ['Evening routine: bath, pyjamas, story, brush teeth, sleep.', 'Packing your school bag the night before.'],
          s: ['The Rushed Morning', 'One morning Zuri overslept, couldn\'t find her shoes, forgot her water bottle and was late. That evening, she made a picture schedule and packed her bag before bed. The next morning, she followed the pictures, step by step, and had time for an extra cuddle before school.'],
          a: [
            od('A morning routine', 'wake up|brush teeth|get dressed|eat breakfast|pack bag'),
            ch('Routines help us…', '*remember what to do|forget everything|be late'),
            tf('Packing your bag the night before saves time.', true),
            ch('A picture schedule shows…', '*the steps in order|cartoons|the weather'),
          ],
          t: ['What happens when you skip a step in your routine?', 'Which part of your day do you like best?'],
          k: ['Tell a grown-up your evening routine in order.'],
          m: ['Picture Schedule', 'card, crayons, a clothes peg', 'Draw each step of your morning routine on a strip | Stick it on the wall | Move a peg along as you finish each step | Try it for a week and see if mornings feel easier'],
          q: [
            ch('Which comes first?', '*wake up|eat breakfast|go to school'),
            tf('Routines can make us feel calm.', true),
            ch('A routine is…', '*things done in the same order every day|a type of food|a game'),
          ],
          ms: ['Follows a routine independently', 'Explains benefits of routines', 'Uses a visual schedule'],
        }),
      ]),
      U('little-chef', 'Little Chef', 'Making simple snacks safely.', 'Kitchen safety: knives and heat with adults; Washing produce; Simple recipes: fruit chaat, sandwich, lemonade', [
        L('fruit-chaat', 'Making Fruit Chaat', {
          o: ['Follow a simple recipe step by step', 'Follow kitchen safety rules'],
          p: ['Washes hands correctly'],
          e: [
            'Cooking starts with safety: wash hands, ask a grown-up before using knives or anything hot, and use a child-safe knife for soft foods.',
            'A recipe tells us what we need (ingredients) and what to do (steps). Fruit chaat: wash fruits, have a grown-up help cut them, put them in a bowl, sprinkle a little chaat masala or lemon juice, and mix.',
            'Cleaning up is part of cooking: put peels in the wet-waste bin and wash your bowl.',
          ],
          v: 'recipe = instructions for making food; ingredient = a food item used in a recipe; peel = the outer skin of fruit; safe = not dangerous',
          x: ['Banana, apple and papaya make a colourful chaat.', 'Spreading butter on bread with a blunt knife.'],
          s: ['Rangi\'s Rainbow Chaat', 'Rangi wanted to make something for the family picnic. With Grandma watching, Rangi washed the fruits, peeled a banana and used a safe knife to slice it. Grandma cut the apple. Rangi added pomegranate seeds and a squeeze of lemon. "A rainbow in a bowl!" everyone cheered.'],
          a: [
            od('Fruit chaat steps', 'wash your hands|wash the fruit|cut with a grown-up\'s help|mix in a bowl|clean up'),
            ch('Before using a sharp knife, you should…', '*ask a grown-up|grab it quickly|use it on your hand'),
            tf('Cleaning up is part of cooking.', true),
            ch('A list of foods needed for a recipe is the…', '*ingredients|weather|game rules'),
          ],
          t: ['Why should grown-ups help with knives and stoves?', 'What other simple snack could you make?'],
          k: ['Explain your recipe to someone step by step.'],
          m: ['Make and Share a Snack', 'fruits or bread and spread, a safe knife, a bowl, an adult', 'Choose a simple recipe | Gather ingredients | Make it with an adult supervising | Serve it to your family and clean up', "An adult must handle the knife and supervise food preparation. Wash fruit and hands first, check for food allergies and choking hazards, and keep raw foods separate from ready-to-eat foods."],
          q: [
            ch('First step in cooking:', '*wash your hands|eat the ingredients|turn on the stove alone'),
            tf('Fruit peels go in the wet-waste bin.', true),
            ch('A recipe gives…', '*ingredients and steps|only pictures|a map'),
          ],
          ms: ['Follows a simple recipe', 'Applies kitchen safety', 'Cleans up after cooking'],
        }),
      ]),
    ]),
    S('s6', 'Time management, organisation and money basics.', [
      'Plan time for homework and play', 'Organise school things', 'Understand saving and spending',
    ], [
      U('time', 'Managing My Time', 'Planning so there\'s time for everything.', 'Estimating time; To-do lists; Homework first, then play; Using a timer', [
        L('to-do-list', 'My To-Do List', {
          o: ['Make and use a to-do list', 'Estimate how long tasks take'],
          p: ['Reads time to the hour'],
          e: [
            'A to-do list helps you remember what needs doing and lets you tick things off — which feels great!',
            'Put important things first. Estimate how long each takes: reading 15 minutes, maths 20 minutes, tidying 10 minutes.',
            'A timer can help you focus: work for 20 minutes, then take a 5-minute break. Planning time means there\'s still time left to play.',
          ],
          v: 'to-do list = a list of tasks to complete; estimate = make a sensible guess; priority = the most important thing; break = a short rest',
          x: ['Doing homework before playing outside.', 'Setting a timer for 20 minutes of reading.'],
          s: ['The Very Busy Saturday', 'Kiko wanted to play, help Grandma, finish a project and practise the flute — all on Saturday! Kiko wrote a list, numbered the most important first, and guessed how long each would take. By evening, everything was ticked off, and there was still time to play.'],
          a: [
            ch('A to-do list helps you…', '*remember tasks and plan|forget everything|sleep'),
            ch('Most important tasks should go…', '*first|last|nowhere'),
            tf('Estimating time helps with planning.', true),
            od('A focused work session', 'set a timer for 20 minutes|work on one task|take a 5-minute break|start the next task'),
          ],
          t: ['Why does time sometimes feel short or long?', 'What happens when we leave important things to the end?'],
          k: ['Show someone your to-do list for tomorrow and explain the order.'],
          m: ['Weekly Planner', 'a weekly planner page, coloured pens', 'List your regular activities (school, classes, play) | Add homework and chores | Colour-code types of activity | Check each evening what you completed'],
          q: [
            ch('A priority is…', '*the most important thing|the least important thing|a type of toy'),
            tf('Short breaks can help focus.', true),
            ch('Estimate means…', '*make a sensible guess|measure exactly|forget'),
          ],
          ms: ['Creates and uses to-do lists', 'Estimates task duration', 'Prioritises tasks'],
        }),
      ]),
      U('money-basics', 'Saving and Spending', 'Making choices with money.', 'Needs and wants; Saving in a piggy bank; Waiting to buy', [
        L('save-spend', 'Save, Spend or Share?', {
          o: ['Distinguish needs and wants', 'Make a plan to save for something'],
          p: ['Recognises coins and notes'],
          e: [
            'Needs are things we must have, like food, water, clothes and a home. Wants are nice to have, like toys and sweets.',
            'Money can be spent, saved or shared. Saving means keeping money to buy something bigger later. Sharing means using some to help others.',
            'Waiting to buy something you really want, instead of spending on small things now, is a powerful skill.',
          ],
          v: 'need = something we must have; want = something nice to have; save = keep money for later; budget = a plan for using money',
          x: ['Saving ₹10 a week for 10 weeks to buy a ₹100 book.', 'Sharing pocket money with a charity drive.'],
          s: ['The Three Jars', 'Grandpa gave Zuri three jars labelled SAVE, SPEND and SHARE. Each time she got pocket money, she split it between them. After two months, her SAVE jar bought the paint set she wanted, her SHARE jar bought food for the animal shelter, and her SPEND jar had paid for a few treats along the way.'],
          a: [
            mt('Need or want?', 'food=need|toy car=want|clothes=need, to stay warm and covered'),
            ch('Saving means…', '*keeping money for later|spending it all now|losing it'),
            ct('Save ₹10 a week. How many weeks to save ₹50?', 5),
            tf('Sharing money can help others.', true),
          ],
          t: ['Is it always easy to tell a need from a want?', 'How does it feel to wait and save for something?'],
          k: ['Tell a grown-up something you would save for and how you would do it.'],
          m: ['Save–Spend–Share Jars', 'three jars or envelopes, labels, coins or play money', 'Label three jars | Decide how to split any pocket money or play money | Track your savings goal on a chart | Celebrate when you reach it'],
          q: [
            ch('Which is a need?', '*water|a video game|candy'),
            tf('Waiting to buy can help you get something you really want.', true),
            ch('A plan for using money is a…', '*budget|bucket|bicycle'),
          ],
          ms: ['Distinguishes needs and wants', 'Plans savings', 'Practises delayed gratification'],
        }),
      ]),
    ]),
    S('s7', 'Decision-making, problem-solving and household skills.', [
      'Use a decision-making process', 'Plan and carry out a household project', 'Develop basic sewing, cooking and repair skills',
    ], [
      U('decisions', 'Making Good Decisions', 'Thinking before choosing.', 'Steps: identify, options, consequences, choose, review; Pros and cons; Influences on decisions', [
        L('decision-steps', 'Decision Steps', {
          o: ['Use a step-by-step process to make decisions', 'Weigh pros and cons of options'],
          p: ['Plans time'],
          e: [
            'Good decisions follow steps: identify the decision, list options, think about consequences (good and bad) for each, choose, then review how it went.',
            'A pros-and-cons list helps compare options. Some pros or cons matter more than others — think about your values and the people affected.',
            'Decisions are influenced by feelings, friends, adverts and habits. Pausing helps you notice these influences.',
          ],
          v: 'decision = a choice; option = a possible choice; consequence = what happens as a result; pros and cons = advantages and disadvantages',
          x: ['Choosing between football club and art club.', 'Deciding how to spend a birthday gift of money.'],
          s: ['The Club Choice', 'Arjun could join only one club: football or coding. He listed pros and cons. Football: friends, exercise, but late evenings. Coding: he loved puzzles, but none of his friends were joining. He chose coding, then reviewed after a month. He\'d made new friends and loved it.'],
          a: [
            od('Decision steps', 'identify the decision|list options|think about consequences|choose|review'),
            ch('Pros are…', '*advantages|disadvantages|prizes'),
            tf('Adverts can influence decisions.', true),
            ch('Reviewing a decision means…', '*checking how it went|never thinking about it|blaming others'),
          ],
          t: ['Can a good decision still turn out badly? Why?', 'How do friends influence your decisions?'],
          k: ['Talk someone through a real decision using the steps.'],
          m: ['Decision Journal', 'a notebook', 'Record three real decisions over two weeks | For each, write options, pros and cons, and your choice | Review the outcome later | Note what you learned'],
          q: [
            ch('Cons are…', '*disadvantages|advantages|options'),
            tf('Pausing can help you notice influences.', true),
            ch('Thinking about what will happen is considering…', '*consequences|colours|weather'),
          ],
          ms: ['Applies decision steps', 'Weighs pros and cons', 'Reflects on outcomes'],
        }),
      ]),
      U('household', 'Household Skills', 'Practical skills for independence.', 'Sewing a button; Simple cooking: chai, poha, omelette; Basic repairs; Laundry', [
        L('sew-a-button', 'Sew a Button and Cook a Meal', {
          o: ['Sew on a button', 'Cook a simple dish safely with supervision'],
          p: ['Follows recipes and safety rules'],
          e: [
            'Sewing a button: thread a needle and knot the end, push the needle up through the fabric and a buttonhole, down through the opposite hole, repeat several times, then knot underneath.',
            'Simple cooking with supervision builds independence: making chai, poha or a vegetable upma involves measuring, chopping, heating and timing. Learn stove safety: handles turned in, sleeves rolled up, never leave the stove unattended.',
            'Other useful skills: sorting laundry, folding clothes, changing a bulb (with power off and an adult), and tightening a loose screw.',
          ],
          v: 'needle = a thin pointed tool for sewing; thread = thin string for sewing; supervision = an adult watching to keep you safe; measure = find the amount needed',
          x: ['Making chai: water, tea leaves, milk, sugar, boiled and strained.', 'Folding T-shirts neatly into drawers.'],
          s: ['The Loose Button', 'Before a school function, Kavya\'s shirt button fell off. Everyone was busy. She remembered what Grandma taught her: thread, knot, up and down, up and down, knot underneath. Five minutes later, the button was back. "I fixed it myself!" she told Grandma that evening.'],
          a: [
            od('Sewing a button', 'thread the needle and knot it|push up through fabric and buttonhole|go down through the opposite hole|repeat several times|knot underneath'),
            ch('Stove safety includes…', '*turning pan handles inward|leaving the stove alone|wearing loose sleeves'),
            tf('Cooking should be supervised until you are experienced.', true),
            mt('Match the skill to the tool', 'sewing=needle and thread|measuring flour=measuring cup|tightening a screw=screwdriver'),
          ],
          t: ['Why are practical skills useful even if you can pay someone else?', 'Which skill would you like to learn next?'],
          k: ['Teach someone a household skill you have learned.'],
          m: ['Household Skills Passport', 'a small booklet, an adult mentor', 'List 8 household skills | Learn and practise one each week with supervision | Get a "stamp" when you can do it independently | Reflect on your progress'],
          q: [
            ch('Before changing a bulb you must…', '*switch off the power with an adult|touch the socket|stand on a wobbly chair'),
            tf('Practical skills build independence.', true),
            ch('When sewing, you finish by…', '*knotting underneath|cutting the button off|pulling the thread out'),
          ],
          ms: ['Sews a button', 'Cooks a simple dish safely', 'Completes household tasks'],
        }),
      ]),
    ]),
    S('s9', 'Personal finance, goal-setting and study organisation.', [
      'Make a simple budget', 'Set SMART goals', 'Organise study and projects',
    ], [
      U('budget', 'Budgeting', 'Planning income and spending.', 'Income and expenses; Fixed and variable costs; Saving goals; Avoiding impulse buys', [
        L('make-budget', 'Making a Budget', {
          o: ['Create a simple personal budget', 'Distinguish fixed and variable expenses'],
          p: ['Distinguishes needs and wants'],
          e: [
            'A budget is a plan for money: income (money coming in) and expenses (money going out). The goal is to spend less than you earn and save the difference.',
            'Fixed expenses stay the same (like a bus pass); variable expenses change (like snacks). Tracking spending shows where money really goes.',
            'Impulse buying — buying without planning — can drain savings. A useful rule: wait 24 hours before buying non-essential items.',
          ],
          v: 'income = money received; expense = money spent; fixed expense = a cost that stays the same; impulse buy = an unplanned purchase',
          x: ['Monthly pocket money ₹500: bus ₹200 (fixed), snacks ₹150 (variable), save ₹150.', 'Waiting a day before buying a new gadget.'],
          s: ['Where Did It Go?', 'Riya got ₹500 pocket money and had nothing left by the 15th. She tracked every rupee next month: ₹250 had gone on small snacks! She made a budget, set ₹150 aside for savings first, and by the end of term had saved enough for a book set she wanted.'],
          a: [
            mt('Income or expense?', 'pocket money=income|bus fare=expense|birthday gift money=income too'),
            ch('A fixed expense:', '*a monthly bus pass|snacks|gifts'),
            ch('Income ₹600, expenses ₹450. Savings?', '₹50|*₹150|₹1,050'),
            tf('Waiting before buying can reduce impulse spending.', true),
          ],
          t: ['Why might "pay yourself first" (saving before spending) work well?', 'How do adverts encourage impulse buying?'],
          k: ['Present your monthly budget to a parent and explain your choices.'],
          m: ['One-Month Budget Challenge', 'a notebook or spreadsheet', 'List your income for a month | Plan expenses and a savings goal | Track every expense | Compare plan vs actual and adjust'],
          q: [
            ch('Money coming in is…', '*income|expense|debt'),
            ch('Snacks are usually a…', '*variable expense|fixed expense|income'),
            tf('A budget helps plan money.', true),
          ],
          ms: ['Creates a budget', 'Classifies expenses', 'Tracks and adjusts spending'],
        }),
      ]),
      U('goals', 'Setting and Reaching Goals', 'SMART goals and planning.', 'SMART goals; Breaking goals into milestones; Tracking progress; Handling setbacks', [
        L('smart-goals', 'SMART Goals', {
          o: ['Write SMART goals', 'Plan milestones and track progress'],
          p: ['Uses decision steps'],
          e: [
            'SMART goals are Specific, Measurable, Achievable, Relevant and Time-bound. "Get better at maths" is vague; "Complete 10 practice problems every weekday for 4 weeks to improve my test score" is SMART.',
            'Break big goals into milestones — smaller steps with dates — and track progress on a chart.',
            'Setbacks are normal. Review what happened, adjust the plan, and keep going.',
          ],
          v: 'SMART = specific, measurable, achievable, relevant, time-bound; milestone = a step towards a goal; track = record progress; adjust = change to improve',
          x: ['"Read 4 books by the end of the month."', '"Run 2 km without stopping by 1 March."'],
          s: ['The Swimming Goal', 'Ravi wanted to "learn swimming". His coach helped him write a SMART goal: "Swim 25 m without stopping by the end of the summer holidays, practising three times a week." He set milestones: float, kick, 5 m, 10 m. He missed one week when he was ill, adjusted, and reached 25 m with a week to spare.'],
          a: [
            mt('Match the SMART letter', 'S=specific|M=measurable|T=time-bound'),
            ch('Which is SMART?', '*"Read 20 pages every day for 2 weeks."|"Read more."|"Be a better reader someday."'),
            tf('Setbacks are a normal part of reaching goals.', true),
            ch('A milestone is…', '*a smaller step towards a goal|the final prize|a stone'),
          ],
          t: ['Why do vague goals often fail?', 'How do you stay motivated over a long goal?'],
          k: ['Share a SMART goal with someone and ask them to check in with you.'],
          m: ['Goal Tracker', 'a chart or notebook', 'Write one SMART goal | List 4–5 milestones with dates | Track progress weekly | Reflect at the end on what helped and what to change'],
          q: [
            ch('"By Friday" makes a goal…', '*time-bound|vague|impossible'),
            tf('Breaking goals into milestones helps.', true),
            ch('"A" in SMART stands for…', '*achievable|angry|always'),
          ],
          ms: ['Writes SMART goals', 'Plans milestones', 'Tracks and adjusts'],
        }),
      ]),
    ]),
    S('s12', 'Preparing for adulthood: careers, financial literacy and civic life.', [
      'Explore career pathways', 'Understand banking, interest and scams', 'Develop independent living skills',
    ], [
      U('careers', 'Exploring Careers', 'Interests, skills and pathways.', 'Self-assessment: interests, strengths, values; Career clusters; Education pathways; Informational interviews', [
        L('career-explore', 'Finding Your Path', {
          o: ['Assess personal interests, strengths and values', 'Research career pathways and requirements'],
          p: ['Sets SMART goals'],
          e: [
            'Choosing a career starts with knowing yourself: what you enjoy (interests), what you\'re good at (strengths), and what matters to you (values, like helping others or creativity).',
            'Careers can be grouped into clusters: health, engineering and technology, arts and design, business, education, law, agriculture, skilled trades and more. Each has different education pathways — university degrees, diplomas, apprenticeships and vocational training.',
            'Talking to people in a career (informational interviews), job shadowing, and internships help you learn what work is really like. Careers often change over a lifetime, so learning to learn matters most.',
          ],
          v: 'career = a path of work over time; vocational training = education for a specific trade or skill; internship = temporary work experience; informational interview = a conversation to learn about someone\'s job',
          x: ['An ITI course leading to an electrician\'s career.', 'Interviewing a nurse about her daily work.'],
          s: ['The Unexpected Path', 'Meera thought she wanted to be a doctor. After shadowing at a clinic, she realised what she loved most was explaining things to patients. She explored and found public health communication — combining science, writing and helping people. "Knowing myself mattered more than picking a famous job," she said.'],
          a: [
            mt('Match', 'interests=what you enjoy|strengths=what you are good at|values=what matters to you'),
            ch('An informational interview is…', '*a conversation to learn about someone\'s job|a job exam|a TV show'),
            tf('Careers often change over a lifetime.', true),
            ch('Vocational training prepares people for…', '*specific trades or skills|only university|nothing'),
          ],
          t: ['What would you do if you couldn\'t fail?', 'How might technology change jobs by the time you start working?'],
          k: ['Conduct and present an informational interview with someone in a career that interests you.'],
          m: ['Career Exploration Portfolio', 'notebook, interviews, research', 'Complete an interests–strengths–values reflection | Research three careers (tasks, education, pay range, future demand) | Interview one professional | Write a plan for the next two years', "Ask permission before interviewing a professional. Do not share contact details or private salary information; use public sources for pay ranges and share the portfolio only with permission."],
          q: [
            ch('Temporary work experience is an…', '*internship|interest|interview only'),
            tf('Self-knowledge helps with career choices.', true),
            ch('Learning to learn matters because…', '*careers and technologies change|nothing changes|school ends forever'),
          ],
          ms: ['Completes self-assessment', 'Researches pathways accurately', 'Plans next steps'],
        }),
      ]),
      U('financial-literacy', 'Financial Literacy', 'Banking, interest, credit and scams.', 'Bank accounts and UPI safety; Simple and compound interest; Credit and debt; Spotting scams', [
        L('interest-scams', 'Interest, Credit and Scams', {
          o: ['Calculate simple and compound interest', 'Recognise and avoid common financial scams'],
          p: ['Makes budgets'],
          e: [
            'Banks pay interest on savings and charge interest on loans. Simple interest is calculated on the original amount; compound interest is calculated on the amount plus interest already added, so it grows faster over time — "interest on interest".',
            'Credit (borrowing) can be useful but costly: high interest debt (like unpaid credit card balances) grows quickly. Borrow only what you can repay.',
            'Scams try to trick people: never share OTPs, PINs or passwords; banks never ask for them by phone. Be suspicious of offers that sound too good to be true, urgent threats, and unknown links. In India, cyber fraud can be reported at the national helpline 1930.',
          ],
          c: [['evidence', 'India\'s national cybercrime helpline 1930 and the cybercrime.gov.in portal are used to report online financial fraud.']],
          v: 'interest = money paid for using or lending money; compound interest = interest calculated on principal plus earlier interest; credit = borrowed money; OTP = one-time password used to confirm transactions',
          x: ['₹1,000 at 10% simple interest for 2 years → ₹200 interest.', 'At 10% compound annually for 2 years → ₹210 interest.'],
          s: ['The Urgent Call', 'Riya\'s grandfather got a call: "Your bank account will be blocked today! Share the OTP to verify." He nearly did, but remembered Riya\'s advice: banks never ask for OTPs. He hung up and called his bank directly. It was a scam. Riya helped him report it to 1930.'],
          a: [
            ch('₹2,000 at 5% simple interest for 3 years. Interest?', '₹100|*₹300|₹600'),
            ch('Compound interest grows faster because…', '*interest is earned on interest|banks are generous|it is free money'),
            tf('Banks never ask for your OTP over the phone.', true),
            mt('Match the warning sign', 'urgent threats=pressure tactic|unknown links=possible phishing|too-good-to-be-true offer=likely scam'),
          ],
          t: ['Why does starting to save early matter so much with compound interest?', 'Why do scams work even on smart people?'],
          k: ['Teach an elderly relative three rules for avoiding phone and online scams.'],
          m: ['Compound Interest Explorer', 'calculator or spreadsheet, notebook', 'Calculate savings of ₹1,000 a year at 7% compound interest over 10, 20 and 40 years | Compare with simple interest | Graph the results | Write a short guide on scams and safe banking for your family'],
          q: [
            ch('Interest on the original amount only:', '*simple interest|compound interest|credit'),
            ch('Never share your…', '*OTP or PIN|favourite colour|name of your school subject'),
            tf('High-interest debt can grow quickly.', true),
          ],
          ms: ['Calculates interest correctly', 'Explains credit responsibly', 'Recognises and reports scams'],
        }),
      ]),
    ]),
  ],
});
