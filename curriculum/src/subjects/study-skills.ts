import { subject, S, U, L, ch, tf, od, mt, ct } from '../dsl.ts';

export default subject({
  id: 'study-skills',
  description: 'Memory and learning skills from listening games to independent research: paying attention, routines, memory tricks, learning from mistakes, how memory works, sleep and learning, organising, note-taking, retrieval practice and spaced repetition, metacognition, active reading, exam strategies, research and citation, and time management and wellbeing. Where research is mixed, lessons say so.',
  stages: [
    S('s4', 'Listening, paying attention and helpful routines.', [
      'Listen carefully and follow two-step instructions', 'Use routines to get ready', 'Notice when attention wanders and bring it back',
    ], [
      U('attention', 'Listening Ears', 'Paying attention.', 'Listening games; Following instructions; Bringing attention back', [
        L('listening', 'Listening Ears On!', {
          o: ['Follow two-step instructions', 'Use strategies to pay attention'],
          p: ['Can follow one-step instructions'],
          e: [
            'Paying attention means focusing on one thing — like listening to a story or watching how to build a tower.',
            'Good listeners look at the person speaking, keep their body calm and think about what is being said. Then they can follow instructions like "Pick up your shoes and put them by the door."',
            'Sometimes our minds wander — that\'s normal! When we notice, we can gently bring our attention back, like calling a puppy back to us.',
          ],
          v: 'attention = focusing on something; listen = to pay attention to sounds and words; instruction = telling someone what to do; focus = to keep your mind on one thing',
          x: ['Looking at the teacher during story time.', 'Remembering two steps: wash hands, then sit down.'],
          s: ['The Puppy Mind', 'During story time, Ivaan\'s mind wandered to his toy dinosaur. Then to lunch. Then to the bird outside. His teacher said, "Our minds are like puppies — they run off. Gently call them back." Ivaan imagined a little puppy and whispered, "Come back, puppy." He looked at the book again and heard the funniest part of the story.'],
          a: [
            ch('Good listeners…', '*look at the person speaking|talk at the same time|look away'),
            od('Follow the instructions in order', 'Pick up your shoes|Put them by the door|Wash your hands'),
            tf('It is normal for our minds to wander.', true),
            ch('Keeping your mind on one thing is…', '*focus|fidget|forget'),
          ],
          t: ['What helps you pay attention?', 'What makes your mind wander?'],
          k: ['Give a grown-up a two-step instruction and see if they follow it.'],
          m: ['Simon Says Listening Game', 'family members', 'Play Simon Says with one-step instructions | Try two-step instructions | Take turns being Simon | Talk about what helped you listen'],
          q: [
            ch('Focusing on something is…', '*attention|allergy|applause'),
            tf('We can bring our attention back gently.', true),
            ch('Telling someone what to do is an…', '*instruction|invitation|illustration'),
          ],
          ms: ['Follows two-step instructions', 'Uses attention strategies', 'Notices wandering attention'],
        }),
      ]),
      U('routines', 'Helpful Routines', 'Doing things in order.', 'Morning routine; Picture checklists; Tidying up', [
        L('routines', 'My Morning Routine', {
          o: ['Follow a picture routine', 'Explain how routines help'],
          p: ['Can sequence steps'],
          e: [
            'A routine is something we do in the same order every day, like waking up, brushing teeth, getting dressed and eating breakfast.',
            'Routines help our brains because we don\'t have to remember everything from scratch. They make mornings and bedtimes calmer.',
            'A picture checklist shows each step. Ticking off steps feels great and helps us become independent.',
          ],
          v: 'routine = steps done in the same order each day; checklist = a list of things to do; independent = doing things by yourself; habit = something you do so often it becomes easy',
          x: ['A bedtime routine: bath, pyjamas, story, sleep.', 'A picture chart on the fridge.'],
          s: ['The Rushed Morning', 'One morning, Ivaan couldn\'t find his shoes, forgot to brush his teeth and nearly missed the school bus! That evening, he and Mama made a picture checklist: toilet, brush teeth, get dressed, breakfast, shoes, bag. The next morning, he ticked each picture. He was ready early — and had time to play with blocks!'],
          a: [
            od('Put the morning routine in order', 'Wake up|Brush teeth|Get dressed|Eat breakfast'),
            ch('A list of things to do is a…', '*checklist|chocolate|chair'),
            tf('Routines can make mornings calmer.', true),
            ch('Doing things by yourself is being…', '*independent|impatient|invisible'),
          ],
          t: ['What is in your bedtime routine?', 'How do you feel when you finish your checklist?'],
          k: ['Tell a grown-up the steps of your morning routine.'],
          m: ['Picture Routine Chart', 'paper, crayons, stickers', 'Draw each step of your morning routine | Put them in order on a chart | Tick or sticker each step every morning | Celebrate after a week'],
          q: [
            ch('Steps done in the same order each day are a…', '*routine|riddle|race'),
            tf('A picture checklist can help you remember steps.', true),
            ch('Something done so often it becomes easy is a…', '*habit|hobby|hat'),
          ],
          ms: ['Follows a routine', 'Explains benefits', 'Uses a checklist independently'],
        }),
      ]),
    ]),
    S('s5', 'Memory tricks and learning from mistakes.', [
      'Use songs, rhymes and chunking to remember', 'See mistakes as part of learning', 'Ask for help when stuck',
    ], [
      U('memory-tricks', 'Memory Tricks', 'Ways to remember.', 'Songs and rhymes; Chunking; Pictures in your head', [
        L('memory-tricks', 'Remember It!', {
          o: ['Use songs, rhymes and chunking to remember information', 'Make a picture in your mind to remember something'],
          p: ['Can listen and follow routines'],
          e: [
            'Our brains remember songs and rhymes easily. That\'s why the alphabet song helps us remember letters!',
            'Chunking means breaking a long list into small groups. A phone number like 9876543210 is easier as 98765 43210.',
            'Making a funny picture in your mind also helps. To remember to buy milk, eggs and bread, imagine a cow juggling eggs on a loaf of bread!',
          ],
          v: 'memory = your brain\'s way of keeping information; chunking = breaking information into small groups; rhyme = words that end with the same sound; remember = to keep something in your mind',
          x: ['The days-of-the-week song.', 'Remembering 4 7 2 9 as 47 29.'],
          s: ['The Juggling Cow', 'Ivaan had to remember three things from the shop: bananas, soap and rice. He imagined a monkey slipping on soap and landing in a bowl of rice! He giggled the whole way. At the shop, he closed his eyes, saw the silly monkey and said, "Bananas, soap and rice!" Mama was amazed.'],
          a: [
            ch('Breaking a list into small groups is…', '*chunking|chewing|chatting'),
            ch('Which is easier to remember?', '*98765 43210|9876543210|both are the same'),
            tf('Silly pictures can help us remember.', true),
            ct('How many chunks in 47 29?', 2),
          ],
          t: ['What song helps you remember something?', 'What silly picture could help you remember your friends\' names?'],
          k: ['Remember a list of three things using a silly picture and say it to a grown-up.'],
          m: ['Memory Tray Game', 'a tray, 8 small objects, a cloth', 'Look at 8 objects on a tray for one minute | Cover them with a cloth | Name as many as you remember | Try again using chunks or a story'],
          q: [
            ch('Words that end with the same sound are…', '*rhymes|riddles|rules'),
            tf('Songs can help memory.', true),
            ch('Your brain\'s way of keeping information is…', '*memory|muscle|mood'),
          ],
          ms: ['Uses chunking', 'Uses songs and images', 'Applies tricks to real tasks'],
        }),
      ]),
      U('mistakes', 'Mistakes Help Us Learn', 'Learning from mistakes.', 'Mistakes are normal; The power of "yet"; Asking for help', [
        L('mistakes', 'I Can\'t Do It... Yet!', {
          o: ['Explain how mistakes help us learn', 'Use the word "yet" and ask for help when stuck'],
          p: ['Has tried new things'],
          e: [
            'Everyone makes mistakes when learning — babies fall when learning to walk, and scientists try many times before discoveries.',
            'When something is hard, we can say "I can\'t do it yet." The word "yet" reminds us that with practice we can improve.',
            'When stuck, we can try a different way, take a break, or ask for help. Asking for help is smart, not weak!',
          ],
          v: 'mistake = something done wrong while trying; practise = to do something many times to get better; improve = to get better; stuck = not able to move forward',
          x: ['Falling off a bicycle before learning to ride.', 'Asking a teacher to explain again.'],
          s: ['The Wobbly Bicycle', 'Zuri fell off her bicycle five times. "I can\'t ride!" she cried. Her father said, "You can\'t ride yet." Zuri tried again, wobbled and fell. Then she asked, "Can you hold the seat?" Day by day, she practised. One morning, she looked back — Papa had let go long ago. "I CAN!" she shouted.'],
          a: [
            ch('Mistakes are…', '*part of learning|always bad|never okay'),
            ch('"I can\'t do it ___"', '*yet|ever|never'),
            tf('Asking for help is smart.', true),
            ch('When stuck, you can…', '*try another way, take a break or ask for help|give up forever|hide'),
          ],
          t: ['What is something you couldn\'t do before but can now?', 'How do you feel when you make a mistake?'],
          k: ['Tell a grown-up about a mistake that helped you learn.'],
          m: ['"Yet" Wall', 'paper, crayons, sticky notes', 'Write things you can\'t do yet on sticky notes | Put them on a "yet" wall | Practise one each week | Move them to a "Now I can!" wall when learned'],
          q: [
            ch('To get better is to…', '*improve|ignore|imagine'),
            tf('Scientists make many mistakes before discoveries.', true),
            ch('Not able to move forward is being…', '*stuck|strong|speedy'),
          ],
          ms: ['Sees mistakes as learning', 'Uses "yet"', 'Asks for help appropriately'],
        }),
      ]),
    ]),
    S('s6', 'How memory works and getting organised.', [
      'Explain short-term and long-term memory', 'Explain why sleep and practice help learning', 'Use a planner and organise materials',
    ], [
      U('how-memory', 'How Memory Works', 'Your learning brain.', 'Short-term and long-term memory; Practice strengthens memory; Sleep and learning', [
        L('memory-works', 'The Forgetting Curve', {
          o: ['Describe short-term and long-term memory', 'Explain the forgetting curve and why practice and sleep help'],
          p: ['Uses memory tricks'],
          e: [
            'Short-term (working) memory holds a small amount of information for a short time — like a phone number you just heard. Long-term memory stores information for days, years or a lifetime.',
            'In the 1880s, Hermann Ebbinghaus studied how quickly we forget. His "forgetting curve" showed we forget much of new information within a day or two unless we review it. Each review makes the memory last longer.',
            'Sleep helps the brain strengthen and organise memories. Research shows that sleep after learning improves recall, which is one reason all-night cramming works poorly.',
          ],
          v: 'short-term memory = holds information briefly; long-term memory = stores information for a long time; forgetting curve = how memory fades over time without review; review = to go over again',
          x: ['Remembering a new word longer after reviewing it the next day.', 'Feeling clearer after a good night\'s sleep.'],
          s: ['Ebbinghaus\'s Nonsense Words', 'In the 1880s, German scientist Hermann Ebbinghaus memorised long lists of nonsense syllables like "DAX" and "BOK" — and tested himself to see how fast he forgot them. He was his own experiment! His results showed that memories fade quickly at first, but reviewing at spaced intervals keeps them strong.'],
          a: [
            mt('Match the memory type', 'short-term memory=holds information briefly|long-term memory=stores information for years|forgetting curve=fading without review'),
            ch('Ebbinghaus studied…', '*how quickly we forget|how plants grow|how birds fly'),
            tf('Sleep helps strengthen memories.', true),
            ch('To go over something again is to…', '*review|remove|repair'),
          ],
          t: ['Why might cramming the night before a test not work well?', 'What helps you remember things for a long time?'],
          k: ['Explain the forgetting curve to a family member.'],
          m: ['🧪 Memory Experiment', 'a list of 15 new words, a notebook', 'Learn 15 new words | Test yourself after 1 hour, 1 day and 3 days without review | Repeat with a new list, reviewing each day | Compare results on a chart'],
          q: [
            ch('Memory that holds information briefly is…', '*short-term memory|long-term memory|no memory'),
            tf('We forget much new information within a day or two without review.', true),
            ch('Who drew the forgetting curve?', '*Hermann Ebbinghaus|Isaac Newton|Aesop'),
          ],
          ms: ['Describes memory types', 'Explains the forgetting curve', 'Connects sleep and learning'],
        }),
      ]),
      U('organise', 'Getting Organised', 'Planners and tidy spaces.', 'Using a planner; Packing your bag; A tidy study space', [
        L('organise', 'Plan, Pack and Prepare', {
          o: ['Use a weekly planner for homework and activities', 'Set up an organised study space'],
          p: ['Can follow routines'],
          e: [
            'A planner (or diary) helps you write down homework, tests and activities so you don\'t have to keep everything in your head.',
            'Packing your school bag the night before, using a checklist, prevents morning panic.',
            'A good study space is quiet, tidy and has everything you need — pencils, paper, water — with distractions like phones or TV away.',
          ],
          v: 'planner = a book or chart for planning tasks; deadline = the time something must be finished; distraction = something that takes your attention away; organised = well arranged and planned',
          x: ['Writing "Science project due Friday" in a planner.', 'Keeping a pencil box ready on the desk.'],
          s: ['The Forgotten Project', 'Kiko remembered his science project on Thursday night — it was due Friday! He stayed up late, stressed. Afterwards, he started a planner, writing each task and breaking big projects into small steps across the week. The next project was finished two days early. "My planner remembers so my brain doesn\'t have to worry," he said.'],
          a: [
            ch('A planner helps you…', '*remember tasks and deadlines|forget everything|play games'),
            ch('A good study space has…', '*few distractions|loud TV|lots of toys'),
            tf('Packing your bag the night before can help.', true),
            ch('The time something must be finished is a…', '*deadline|headline|lifeline'),
          ],
          t: ['What distracts you most when studying?', 'How could you break a big project into small steps?'],
          k: ['Show a grown-up your planner and how you use it.'],
          m: ['Weekly Planner', 'paper or a notebook, ruler, coloured pens', 'Draw a weekly planner grid | Fill in school, homework and activities | Break one big task into small daily steps | Review the planner each evening'],
          q: [
            ch('Something that takes your attention away is a…', '*distraction|direction|decoration'),
            tf('Breaking big projects into small steps helps.', true),
            ch('Well arranged and planned means…', '*organised|old|ordinary'),
          ],
          ms: ['Uses a planner', 'Organises materials', 'Plans big tasks in steps'],
        }),
      ]),
    ]),
    S('s7', 'Note-taking, retrieval practice and spaced repetition.', [
      'Take structured notes', 'Use retrieval practice instead of rereading', 'Plan spaced review',
    ], [
      U('notes', 'Smart Notes', 'Note-taking methods.', 'Cornell notes; Mind maps; Summarising in your own words', [
        L('notes', 'Cornell Notes and Mind Maps', {
          o: ['Take notes using the Cornell method and mind maps', 'Summarise information in your own words'],
          p: ['Can organise tasks'],
          e: [
            'The Cornell method, developed by Walter Pauk at Cornell University, divides a page into three parts: a main notes column, a cue column for questions or key words, and a summary at the bottom.',
            'Mind maps put the main topic in the centre with branches for subtopics, using colours and pictures — great for seeing connections.',
            'Good notes are short and in your own words, not copied word for word. Putting ideas into your own words helps you understand and remember them.',
          ],
          v: 'note-taking = writing down key information; summary = a short version of the main points; cue = a word or question that prompts memory; paraphrase = to say something in your own words',
          x: ['A Cornell page with questions in the left column.', 'A mind map of the water cycle.'],
          s: ['The Copying Trap', 'Meera copied every word from her science textbook into her notebook — pages and pages. But when tested, she remembered little. Her teacher showed her the Cornell method: short notes in her own words, questions on the side, a summary at the bottom. Using her cue questions to test herself, she remembered far more with far less writing.'],
          a: [
            mt('Match the Cornell section', 'main column=notes|cue column=questions and key words|bottom=summary'),
            ch('Good notes are…', '*short and in your own words|copied word for word|very long'),
            tf('Mind maps show connections between ideas.', true),
            ch('Saying something in your own words is to…', '*paraphrase|photocopy|pronounce'),
          ],
          t: ['Why might copying word for word not help you learn?', 'When would a mind map be better than Cornell notes?'],
          k: ['Explain a topic using only your mind map.'],
          m: ['Note-Taking Trial', 'a textbook chapter, paper', 'Take Cornell notes on one section | Make a mind map of another section | Test yourself on both a day later | Decide which method works better for you'],
          q: [
            ch('A short version of the main points is a…', '*summary|sentence|signal'),
            tf('Walter Pauk developed the Cornell method.', true),
            ch('A word that prompts memory is a…', '*cue|queue|quiz'),
          ],
          ms: ['Uses Cornell notes', 'Creates mind maps', 'Summarises in own words'],
        }),
      ]),
      U('retrieval', 'Retrieval and Spacing', 'Evidence-based study.', 'Retrieval practice; Spaced repetition; Interleaving', [
        L('retrieval', 'Test Yourself, Space It Out', {
          o: ['Explain retrieval practice and spaced repetition', 'Plan a study schedule using these methods'],
          p: ['Knows the forgetting curve and note-taking'],
          e: [
            'Retrieval practice means recalling information from memory — with flashcards, self-quizzes or explaining aloud — instead of just rereading. Many studies show it improves long-term memory more than rereading or highlighting.',
            'Spaced repetition means reviewing over increasing intervals: after 1 day, then 3 days, then a week, and so on. The Leitner box system moves flashcards to less-frequent boxes when you get them right. (This app uses a similar idea for revision!)',
            'Interleaving — mixing different types of problems instead of practising one type in a block — can improve the ability to choose the right method, though it can feel harder at first.',
          ],
          v: 'retrieval practice = recalling information from memory to strengthen it; spaced repetition = reviewing at increasing intervals; interleaving = mixing different types of practice; flashcard = a card with a question on one side and the answer on the other',
          x: ['Quizzing yourself with flashcards.', 'Mixing addition, subtraction and multiplication problems.'],
          s: ['The Leitner Box', 'In the 1970s, German journalist Sebastian Leitner suggested a simple box with sections. New flashcards go in box 1, reviewed daily. Get one right? Move it to box 2, reviewed every few days. Wrong? Back to box 1. Zuri tried it for her science words — and found she remembered them weeks later, with less study time.'],
          a: [
            ch('Which usually helps long-term memory more?', '*testing yourself|rereading many times|highlighting everything'),
            ch('In a Leitner box, a card you get right moves to…', '*a less frequent box|the bin|box 1'),
            tf('Interleaving can feel harder but help learning.', true),
            mt('Match the method', 'retrieval practice=recalling from memory|spaced repetition=increasing intervals|interleaving=mixing problem types'),
          ],
          t: ['Why does testing yourself feel harder than rereading?', 'How could you use spacing for your next test?'],
          k: ['Explain retrieval practice and spacing to a classmate.'],
          m: ['Leitner Box Study System', 'index cards, a shoebox with 4 sections', 'Make flashcards for a topic | Set up a 4-box Leitner system | Study daily for two weeks, moving cards | Reflect on results in a journal'],
          q: [
            ch('Reviewing at increasing intervals is…', '*spaced repetition|cramming|copying'),
            tf('Retrieval practice includes explaining aloud from memory.', true),
            ch('A card with a question and an answer is a…', '*flashcard|postcard|scorecard'),
          ],
          ms: ['Explains evidence-based methods', 'Uses retrieval practice', 'Plans spaced review'],
        }),
      ]),
    ]),
    S('s9', 'Metacognition, active reading and exam strategies.', [
      'Plan, monitor and evaluate own learning', 'Use active reading strategies', 'Prepare for and manage exams',
    ], [
      U('metacognition', 'Thinking About Thinking', 'Metacognition.', 'Plan, monitor, evaluate; Illusions of knowing; Reflection journals', [
        L('metacognition', 'Know What You Know', {
          o: ['Use the plan-monitor-evaluate cycle', 'Recognise illusions of competence'],
          p: ['Uses retrieval practice'],
          e: [
            'Metacognition means thinking about your own thinking and learning. Skilled learners plan (What is my goal? Which strategy?), monitor (Is this working? Do I understand?) and evaluate (What went well? What will I change?).',
            'An illusion of competence happens when material feels familiar — after rereading, for example — so we think we know it, but can\'t recall it in a test. Self-testing exposes the gap.',
            'Reflection journals help: after studying or a test, write what worked, what didn\'t and what to change. Education research reviews identify metacognition and self-regulation as among the more effective, low-cost ways to improve learning.',
          ],
          v: 'metacognition = thinking about your own thinking; monitor = to check progress; illusion of competence = feeling you know something when you don\'t; self-regulation = managing your own learning and behaviour',
          x: ['Asking "Could I explain this to someone?"', 'Noticing that highlighting felt productive but didn\'t help recall.'],
          s: ['The Familiar Feeling', 'Raj reread his history chapter three times. It felt so familiar — he was sure he knew it. In the test, his mind went blank. Afterwards, he started closing the book and writing everything he could remember first. The gaps showed him what to study. "Familiar isn\'t the same as knowing," he wrote in his journal.'],
          a: [
            od('Put the metacognition cycle in order', 'Plan|Monitor|Evaluate'),
            ch('An illusion of competence is…', '*feeling you know something when you don\'t|being very skilled|a magic trick'),
            tf('Self-testing can expose gaps in knowledge.', true),
            ch('Thinking about your own thinking is…', '*metacognition|meteorology|metabolism'),
          ],
          t: ['When have you felt you knew something but didn\'t?', 'What question could you ask yourself while studying?'],
          k: ['Describe how you planned, monitored and evaluated a recent piece of learning.'],
          m: ['Learning Reflection Journal', 'a notebook', 'Before each study session, write your goal and strategy | During it, note what is working | Afterwards, evaluate and plan changes | Review the journal after a month'],
          q: [
            ch('To check progress is to…', '*monitor|memorise|motivate'),
            tf('Rereading can create an illusion of competence.', true),
            ch('Managing your own learning is…', '*self-regulation|self-portrait|self-service'),
          ],
          ms: ['Uses the plan-monitor-evaluate cycle', 'Recognises illusions of competence', 'Reflects regularly'],
        }),
      ]),
      U('reading-exams', 'Active Reading and Exams', 'Reading and test strategies.', 'SQ3R; Exam preparation; Managing test anxiety', [
        L('sq3r', 'SQ3R and Exam Day', {
          o: ['Use the SQ3R reading method', 'Apply exam preparation and anxiety-management strategies'],
          p: ['Uses metacognition'],
          e: [
            'SQ3R, introduced by Francis Robinson in 1946, stands for Survey (skim headings and pictures), Question (turn headings into questions), Read (look for answers), Recite (say or write answers from memory) and Review.',
            'Exam preparation: start early, use past papers for retrieval practice, space your revision and sleep well. In the exam, read all questions first, plan your time by marks, attempt questions you know first, and check your answers.',
            'Some nervousness is normal and can even help focus. Slow breathing, positive self-talk ("I\'ve prepared for this") and good preparation reduce test anxiety. If anxiety is severe, talk to a parent, teacher or counsellor.',
          ],
          v: 'survey = to look over quickly; recite = to say from memory; anxiety = a feeling of worry or nervousness; past paper = a previous exam used for practice',
          x: ['Turning "Causes of the Revolt of 1857" into "What caused the Revolt of 1857?"', 'Box breathing before an exam.'],
          s: ['The Exam Plan', 'Meera\'s exam had five questions in two hours. She read them all first, noticed one was worth 30 marks, and planned: 40 minutes for that one, 20 minutes for each of the others. She answered her strongest question first to build confidence and left ten minutes to check. "Planning took five minutes and saved me," she said.'],
          a: [
            od('Put SQ3R in order', 'Survey|Question|Read|Recite|Review'),
            ch('In an exam, a good first step is to…', '*read all the questions|start writing immediately|leave early'),
            tf('Some nervousness can help focus.', true),
            ch('A previous exam used for practice is a…', '*past paper|passport|postcard'),
          ],
          t: ['Which part of SQ3R do people skip most?', 'What helps you stay calm before a test?'],
          k: ['Teach the SQ3R method using a textbook chapter.'],
          m: ['Exam Prep Plan', 'a calendar, past papers, notebook', 'Choose an upcoming test | Make a spaced revision timetable over two weeks | Practise with past papers under timed conditions | Reflect on results and adjust'],
          q: [
            ch('To say from memory is to…', '*recite|reread|relax'),
            tf('SQ3R was introduced in 1946.', true),
            ch('A feeling of worry or nervousness is…', '*anxiety|ability|accuracy'),
          ],
          ms: ['Uses SQ3R', 'Plans exam time', 'Manages anxiety'],
        }),
      ]),
    ]),
    S('s12', 'Research skills, time management and lifelong learning.', [
      'Conduct research with reliable sources and citations', 'Manage time and priorities', 'Become a self-directed, healthy learner',
    ], [
      U('research', 'Research Skills', 'Finding and using sources.', 'Primary and secondary sources; Evaluating sources; Citation and plagiarism', [
        L('research', 'Research Like a Scholar', {
          o: ['Find and evaluate primary and secondary sources', 'Cite sources correctly and avoid plagiarism'],
          p: ['Uses metacognition and note-taking'],
          e: [
            'Primary sources are original evidence — letters, data, photographs, interviews, original research papers. Secondary sources interpret primary sources — textbooks, reviews, documentaries.',
            'Evaluate sources by asking: Who wrote it and what is their expertise? What evidence do they use? Is it up to date? Is there bias or a commercial purpose? The CRAAP test (Currency, Relevance, Authority, Accuracy, Purpose) is one checklist.',
            'Citation gives credit to sources and lets readers check them. Common styles include APA and MLA. Plagiarism — presenting others\' words or ideas as your own, including AI-generated text without disclosure — is academic dishonesty.',
          ],
          v: 'primary source = original evidence; secondary source = an interpretation of primary sources; citation = a reference to a source; plagiarism = presenting others\' work as your own',
          x: ['A freedom fighter\'s letter (primary).', 'A history textbook chapter (secondary).'],
          s: ['The Missing Citation', 'Arjun wrote a brilliant essay, but his teacher found two paragraphs copied from a website without credit. He was shocked — he hadn\'t meant to cheat; he\'d copied notes and forgotten where they came from. From then on, he recorded the source next to every note he took. His next essay had twenty citations — and was even better.'],
          a: [
            mt('Match the term', 'primary source=original evidence|secondary source=interprets evidence|citation=credits a source'),
            ch('Plagiarism is…', '*presenting others\' work as your own|citing sources|reading widely'),
            tf('Citations let readers check sources.', true),
            ch('In the CRAAP test, "A" for authority asks about…', '*who wrote it and their expertise|the colour of the page|the price'),
          ],
          t: ['Is using an AI tool without saying so plagiarism?', 'Why might a primary source still be biased?'],
          k: ['Present a source evaluation using the CRAAP test.'],
          m: ['Mini Research Project', 'library and online databases, a citation guide', 'Choose a research question | Find at least three primary and three secondary sources | Evaluate each with the CRAAP test | Write a 2000-word report with correct citations'],
          q: [
            ch('Original evidence is a…', '*primary source|secondary source|summary'),
            tf('APA and MLA are citation styles.', true),
            ch('A reference to a source is a…', '*citation|celebration|circulation'),
          ],
          ms: ['Distinguishes source types', 'Evaluates sources critically', 'Cites correctly'],
        }),
      ]),
      U('time-wellbeing', 'Time, Focus and Wellbeing', 'Sustainable learning.', 'Prioritising with the Eisenhower matrix; Deep work and the Pomodoro technique; Rest, exercise and wellbeing', [
        L('time-management', 'Work Smart, Rest Well', {
          o: ['Prioritise tasks using the Eisenhower matrix', 'Use focus techniques and balance study with wellbeing'],
          p: ['Can plan and research'],
          e: [
            'The Eisenhower matrix sorts tasks by urgent and important: do important-urgent tasks now, schedule important-not-urgent ones (often the most valuable, like long-term projects), delegate or limit urgent-not-important ones, and drop the rest.',
            'The Pomodoro technique, created by Francesco Cirillo in the late 1980s, uses focused work periods (often 25 minutes) followed by short breaks. Removing phones and notifications supports deep, focused work.',
            'Sustainable learning needs sleep (teenagers need around 8–10 hours), exercise, healthy food, time with friends and rest. Burnout harms learning; balance is part of achievement.',
          ],
          v: 'prioritise = to decide what is most important; Eisenhower matrix = a grid sorting tasks by urgency and importance; Pomodoro technique = timed focus periods with breaks; burnout = exhaustion from long-term stress',
          x: ['Scheduling project work early instead of waiting until it\'s urgent.', 'Studying for 25 minutes, then a 5-minute stretch.'],
          s: ['The Tomato Timer', 'As a university student in the late 1980s, Francesco Cirillo struggled to focus. He grabbed a tomato-shaped kitchen timer and challenged himself to study for just a few minutes without distraction. It worked. "Pomodoro" — Italian for tomato — became a technique used by millions of students and workers.'],
          a: [
            mt('Match the Eisenhower box to the action', 'important and urgent=do now|important, not urgent=schedule|urgent, not important=delegate or limit|neither=drop'),
            ch('Pomodoro means…', '*tomato|timer|tea'),
            tf('Teenagers need around 8–10 hours of sleep.', true),
            ch('Exhaustion from long-term stress is…', '*burnout|breakout|blackout'),
          ],
          t: ['Which tasks in your life are important but not urgent?', 'How do you know when you need rest?'],
          k: ['Present your weekly plan using the Eisenhower matrix.'],
          m: ['Personal Learning Plan', 'a planner, a timer', 'Sort your tasks into an Eisenhower matrix | Use Pomodoro sessions for two weeks | Track sleep, exercise and mood | Write a reflection and set goals for lifelong learning'],
          q: [
            ch('To decide what is most important is to…', '*prioritise|postpone|print'),
            tf('Removing notifications supports focused work.', true),
            ch('The Pomodoro technique was created by…', '*Francesco Cirillo|Hermann Ebbinghaus|Walter Pauk'),
          ],
          ms: ['Prioritises effectively', 'Uses focus techniques', 'Balances study and wellbeing'],
        }),
      ]),
    ]),
  ],
});
