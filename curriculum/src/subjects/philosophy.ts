import { subject, S, U, L, ch, tf, mt } from '../dsl.ts';

export default subject({
  id: 'philosophy',
  description: 'Big Questions — philosophy for children through to young adults: wondering and asking good questions, fairness, friendship, what is real, what makes a good person, identity, how we know things, thought experiments, philosophers from India, China, Greece and beyond, mind and free will, ethical theories, justice, and the meaning of life. Lessons model respectful disagreement and reasoning, and present philosophical views as positions to examine, not answers to adopt.',
  stages: [
    S('s4', 'Wondering, asking questions and thinking about fairness.', [
      'Ask "why" and "what if" questions', 'Share ideas and listen to others', 'Talk about what is fair',
    ], [
      U('wondering', 'I Wonder…', 'Asking big questions.', 'Wondering; Why questions; Listening to ideas', [
        L('wonder', 'Big Questions, Little Thinkers', {
          o: ['Ask "why" and "what if" questions', 'Listen to and respond to others\' ideas'],
          p: ['Can ask questions'],
          e: [
            'Philosophy means "love of wisdom". Philosophers ask big questions that don\'t have easy answers, like "What is a friend?" or "Why do we dream?"',
            'Everyone can be a philosopher — even children! When we wonder about something and ask "why?" or "what if?", we are doing philosophy.',
            'In philosophy, we listen carefully to others, give reasons for our ideas ("I think... because...") and it\'s okay to change our minds.',
          ],
          v: 'wonder = to be curious about something; question = something you ask to find out; reason = why you think something; philosopher = a person who thinks about big questions',
          x: ['"Why is the sky blue?"', '"What if animals could talk?"'],
          s: ['The Question Jar', 'Ivaan\'s family kept a question jar. Every night, someone picked a question. Tonight Ivaan picked, "Can a fish be happy?" Papa said, "Maybe, if it\'s swimming freely." Aaji said, "How would we know?" Ivaan thought hard. "Maybe if it wiggles its tail fast!" Everyone laughed, and the conversation went on until bedtime.'],
          a: [
            ch('Philosophy means…', '*love of wisdom|love of food|love of games'),
            ch('Which is a big question?', '*What is a friend?|What colour is this ball?|How many shoes do I have?'),
            tf('It is okay to change your mind in philosophy.', true),
            ch('When sharing an idea, we say "I think… because…" to give a…', '*reason|song|present'),
          ],
          t: ['What is something you wonder about?', 'Can there be more than one good answer to a question?'],
          k: ['Ask a grown-up a big question and listen to their answer.'],
          m: ['Question Jar', 'a jar, paper slips, crayons', 'Write or draw big questions on slips | Put them in a jar | Pick one at dinner time | Everyone shares an idea with a reason'],
          q: [
            ch('Being curious is to…', '*wonder|wander|win'),
            tf('Children can be philosophers.', true),
            ch('A person who thinks about big questions is a…', '*philosopher|photographer|pilot'),
          ],
          ms: ['Asks wondering questions', 'Gives reasons', 'Listens to others'],
        }),
      ]),
      U('fairness', 'What Is Fair?', 'Thinking about fairness.', 'Sharing equally; Fair and unfair; Different needs', [
        L('fair', 'Is It Fair?', {
          o: ['Talk about whether situations are fair or unfair', 'Explain that fair doesn\'t always mean the same'],
          p: ['Can share ideas with reasons'],
          e: [
            'Fairness is about treating people rightly. Sharing a cake into equal pieces seems fair.',
            'But sometimes fair isn\'t exactly the same. If one friend can\'t reach a high shelf, giving them a step stool is fair, even if others don\'t get one. People have different needs.',
            'When things feel unfair, we can talk about it kindly and try to find a better way together.',
          ],
          v: 'fair = treating people rightly; unfair = not treating people rightly; equal = the same amount; need = something you must have',
          x: ['Taking turns on the swing.', 'Helping a friend who needs extra help.'],
          s: ['The Last Mango', 'There was one mango and three children. Zuri said, "Cut it in three!" Kiko said, "But I didn\'t have lunch — I\'m very hungry." Ivaan thought. "Maybe Kiko gets a bigger piece today, and next time someone else does." They all agreed. "Fair can be tricky," said Zuri, "but talking helps."'],
          a: [
            ch('Taking turns on the swing is…', '*fair|unfair|silly'),
            ch('Giving a step stool to someone who can\'t reach is…', '*fair because they have a different need|unfair|unkind'),
            tf('Fair always means exactly the same.', false),
            ch('When something feels unfair, we can…', '*talk about it kindly|shout|hit'),
          ],
          t: ['Is it fair that grown-ups stay up later than children? Why?', 'What would you do with one cookie and two friends?'],
          k: ['Tell a grown-up about something you think is fair or unfair, with a reason.'],
          m: ['Fair Share Challenge', 'a snack to share, family members', 'Share a snack with your family | Talk about the fairest way to share | Think about anyone with different needs | Agree on a plan together'],
          q: [
            ch('The same amount is…', '*equal|enormous|empty'),
            tf('People can have different needs.', true),
            ch('Treating people rightly is being…', '*fair|fast|funny'),
          ],
          ms: ['Judges fairness with reasons', 'Recognises different needs', 'Resolves disagreements kindly'],
        }),
      ]),
    ]),
    S('s5', 'Friendship and what is real.', [
      'Discuss what makes a friend', 'Wonder about dreams, pretend and reality', 'Agree and disagree respectfully',
    ], [
      U('friendship', 'What Is a Friend?', 'Thinking about friendship.', 'What friends do; Can a toy be a friend?; Falling out and making up', [
        L('friend', 'What Makes a Friend?', {
          o: ['Explain what makes someone a friend', 'Discuss tricky friendship questions with reasons'],
          p: ['Can give reasons'],
          e: [
            'A friend is someone you like and who likes you, who is kind, plays with you and helps you. But philosophers ask deeper questions: Can you be friends with someone you\'ve never met? Can a pet be a friend?',
            'The Greek philosopher Aristotle, over 2,300 years ago, said there are friendships of usefulness, of pleasure (fun) and the best kind — friendships of goodness, where friends care about each other for who they are.',
            'Friends sometimes disagree or fall out. Saying sorry and listening can help make up.',
          ],
          v: 'friend = someone you like and care about; loyal = sticking by someone; disagree = to have a different idea; make up = to become friends again after an argument',
          x: ['A friend who shares and listens.', 'Making up after an argument about a game.'],
          s: ['Teddy\'s Question', 'Ivaan hugged his teddy. "Teddy is my best friend." His sister asked, "But can Teddy be a friend if he can\'t talk back?" Ivaan thought. "He listens to all my secrets." "But does he care?" Ivaan frowned. "Maybe he\'s a different kind of friend." They talked about it all through breakfast.'],
          a: [
            ch('Which is something a good friend does?', '*listens and helps|always takes your toys|laughs at you'),
            ch('Aristotle said the best friendships are based on…', '*goodness|money|toys'),
            tf('Friends sometimes disagree and make up.', true),
            ch('Sticking by someone is being…', '*loyal|lazy|loud'),
          ],
          t: ['Can a pet be a friend? Why or why not?', 'Can you be friends with someone very different from you?'],
          k: ['Tell a grown-up what makes your best friend a good friend.'],
          m: ['Friendship Recipe', 'paper, crayons', 'Write a "recipe" for a good friend: ingredients and steps | Draw a picture of you and a friend | Share it with a friend | Talk about what you would add'],
          q: [
            ch('To become friends again is to…', '*make up|make do|mix up'),
            tf('Aristotle wrote about friendship.', true),
            ch('To have a different idea is to…', '*disagree|decide|draw'),
          ],
          ms: ['Defines friendship with reasons', 'Considers tricky cases', 'Discusses respectfully'],
        }),
      ]),
      U('real', 'What Is Real?', 'Dreams and pretend.', 'Dreams; Pretend and real; How do we know?', [
        L('dreams', 'Was It Just a Dream?', {
          o: ['Discuss the difference between dreams, pretend and real', 'Give reasons for how we know something is real'],
          p: ['Can discuss with reasons'],
          e: [
            'When we dream, things can feel real — flying, talking animals — but when we wake up, we know it was a dream.',
            'An old Chinese story tells of the philosopher Zhuangzi, who dreamed he was a butterfly. When he woke, he wondered: "Am I a man who dreamed of being a butterfly, or a butterfly dreaming I am a man?"',
            'How do we know what is real? We can check with our senses, ask others, or see if it stays the same over time. But philosophers find this question surprisingly hard!',
          ],
          v: 'dream = pictures and stories in your mind while sleeping; real = truly existing; pretend = imagining something as if it were real; imagine = to make pictures in your mind',
          x: ['Dreaming of flying over the ocean.', 'Pretending a box is a spaceship.'],
          s: ['The Butterfly Dream', 'Long ago in China, Zhuangzi dreamed he was a butterfly, fluttering happily among flowers. He didn\'t know he was Zhuangzi at all. Then he woke up — and there he was, a man. He wondered, smiling, "Was I a man dreaming of a butterfly, or am I now a butterfly dreaming I\'m a man?"'],
          a: [
            ch('Zhuangzi dreamed he was a…', '*butterfly|tiger|fish'),
            ch('Which is pretend?', '*a box as a spaceship|your real bed|the floor'),
            tf('Dreams can feel real.', true),
            ch('One way to check if something is real is to…', '*use your senses and ask others|close your eyes|go to sleep'),
          ],
          t: ['How do you know you\'re not dreaming right now?', 'Is something you imagine real in any way?'],
          k: ['Tell a grown-up about a dream that felt real.'],
          m: ['Dream Journal', 'a notebook, crayons', 'Each morning, draw or tell a dream | Mark the parts that could happen in real life | Mark the parts that couldn\'t | Talk about how you knew it was a dream'],
          q: [
            ch('Truly existing is…', '*real|ready|round'),
            tf('Zhuangzi was a Chinese philosopher.', true),
            ch('To make pictures in your mind is to…', '*imagine|ignore|invite'),
          ],
          ms: ['Distinguishes dream, pretend and real', 'Gives reasons for knowing', 'Enjoys puzzling questions'],
        }),
      ]),
    ]),
    S('s6', 'Being a good person and who am I?', [
      'Discuss virtues and character', 'Think about identity and change', 'Build arguments with reasons and examples',
    ], [
      U('good-person', 'What Makes a Good Person?', 'Virtues and character.', 'Virtues like honesty, courage and kindness; The ring of invisibility; Character grows with practice', [
        L('virtues', 'The Ring of Invisibility', {
          o: ['Discuss what makes a person good', 'Reflect on whether people are good only because they might be caught'],
          p: ['Can discuss fairness and friendship'],
          e: [
            'Virtues are good qualities of character, like honesty, courage, kindness, patience and fairness. Many traditions — Greek, Indian, Chinese — have lists of virtues.',
            'Plato, a Greek philosopher, told the story of the Ring of Gyges: a shepherd finds a ring that makes him invisible. Would people still be good if no one could see what they did?',
            'Aristotle thought virtues are like skills: we become honest by practising honesty, brave by practising brave actions. Character grows with practice.',
          ],
          v: 'virtue = a good quality of character; character = the kind of person you are; honesty = telling the truth; integrity = doing right even when no one is watching',
          x: ['Returning extra change at a shop.', 'Being kind to someone new at school.'],
          s: ['The Invisible Shepherd', 'Plato\'s story tells of Gyges, a shepherd who found a gold ring. When he turned it, he became invisible! At first he used it for mischief, and then for worse. Kiko\'s teacher asked the class, "If you had this ring, what would you do?" Kiko thought. "I\'d play tricks... but I\'d feel bad. I think I\'d use it to help people secretly."'],
          a: [
            mt('Match the virtue', 'honesty=telling the truth|courage=doing hard things despite fear|integrity=doing right when no one watches'),
            ch('The Ring of Gyges makes the wearer…', '*invisible|rich|tall'),
            tf('Aristotle thought virtues grow with practice.', true),
            ch('The kind of person you are is your…', '*character|costume|calendar'),
          ],
          t: ['Would you behave differently if you were invisible?', 'Can a person become more honest with practice?'],
          k: ['Explain the Ring of Gyges story and your answer to its question.'],
          m: ['Virtue Practice Week', 'a notebook', 'Choose one virtue to practise | Do one action for it each day | Record how it felt | Reflect on whether it got easier'],
          q: [
            ch('A good quality of character is a…', '*virtue|vehicle|vitamin'),
            tf('Plato told the story of the Ring of Gyges.', true),
            ch('Telling the truth is…', '*honesty|hunger|hurry'),
          ],
          ms: ['Discusses virtues', 'Engages with the thought experiment', 'Reflects on own character'],
        }),
      ]),
      U('identity', 'Who Am I?', 'Identity and change.', 'Am I the same as when I was a baby?; The Ship of Theseus; What makes me me?', [
        L('ship-theseus', 'The Ship of Theseus', {
          o: ['Discuss the Ship of Theseus puzzle', 'Reflect on what makes a person the same over time'],
          p: ['Can give reasons and examples'],
          e: [
            'You were once a baby. Your body has grown and changed, and you think differently. Are you still the same person?',
            'An ancient Greek puzzle asks: the hero Theseus\'s ship was kept in a harbour. As old planks rotted, they were replaced one by one, until no original plank remained. Is it still the same ship?',
            'Philosophers give different answers: some say memories make us the same person; some say our body; some say our character or story. In Buddhist thought, there is no fixed, unchanging self.',
          ],
          v: 'identity = what makes something the same thing over time; change = becoming different; memory = remembering the past; self = who a person is',
          x: ['A baby photo of you.', 'A cricket bat with a new handle and then a new blade.'],
          s: ['Grandpa\'s Old Bicycle', 'Grandpa\'s bicycle was 50 years old. Over the years, he had replaced the tyres, the seat, the chain, the handlebars and even the frame. "Is it still your first bicycle?" Ivaan asked. Grandpa scratched his head. "The parts are new, but the memories are old." Ivaan thought: "Maybe that\'s what makes it the same bike."'],
          a: [
            ch('The Ship of Theseus had all its…', '*planks replaced one by one|sails painted|crew changed'),
            ch('Which might make you the same person over time?', '*your memories|your shoes|the weather'),
            tf('Philosophers disagree about what makes a person the same over time.', true),
            ch('What makes something the same thing over time is its…', '*identity|idea|island'),
          ],
          t: ['Are you the same person as when you were a baby?', 'If all your memories changed, would you still be you?'],
          k: ['Explain the Ship of Theseus to a grown-up and ask their answer.'],
          m: ['Me Then and Me Now', 'photos, paper, crayons', 'Find a baby photo and a recent photo | List what has changed and what has stayed the same | Decide what makes you "you" | Present your answer with reasons'],
          q: [
            ch('Becoming different is…', '*change|chance|charge'),
            tf('Buddhist thought teaches there is no fixed, unchanging self.', true),
            ch('Remembering the past uses…', '*memory|money|music'),
          ],
          ms: ['Engages with the puzzle', 'Considers several views', 'Applies ideas to self'],
        }),
      ]),
    ]),
    S('s7', 'How we know things and thought experiments.', [
      'Distinguish knowledge, belief and opinion', 'Analyse thought experiments', 'Practise respectful philosophical dialogue',
    ], [
      U('knowledge', 'How Do We Know?', 'Knowledge, belief and opinion.', 'Fact, belief and opinion; Senses can be fooled; Testimony and evidence', [
        L('knowledge', 'Knowledge, Belief and Opinion', {
          o: ['Distinguish facts, beliefs and opinions', 'Evaluate sources of knowledge: senses, reasoning and testimony'],
          p: ['Can build arguments'],
          e: [
            'A fact can be checked with evidence ("Water boils at 100 °C at sea level"). An opinion expresses personal preference ("Mango is the best fruit"). A belief is something a person holds to be true, which may or may not be supported by evidence.',
            'Philosophers have long defined knowledge roughly as "justified true belief" — you believe it, it\'s true, and you have good reasons. In 1963, Edmund Gettier showed cases where all three hold, yet it still doesn\'t seem like knowledge, sparking much debate.',
            'We gain knowledge through senses (which can be fooled by optical illusions), reasoning and testimony (learning from others). Indian philosophers called these pramanas — means of knowledge.',
          ],
          v: 'fact = something that can be checked with evidence; opinion = a personal view or preference; belief = something held to be true; evidence = information that supports a claim',
          x: ['An optical illusion where equal lines look different.', 'Learning about Antarctica from books (testimony).'],
          s: ['The Stopped Clock', 'Raj glanced at the hall clock: 3 o\'clock. He believed it was 3 o\'clock, and it actually was. But the clock had stopped exactly 24 hours earlier! He had a true belief with a reason — yet did he really know the time? His philosophy teacher smiled. "That\'s a Gettier-style puzzle. Philosophers are still arguing about it."'],
          a: [
            mt('Match the statement to its type', 'Water boils at 100 °C at sea level=fact|Mango is the best fruit=opinion|I think it will rain tomorrow=belief'),
            ch('Knowledge has traditionally been defined as…', '*justified true belief|any opinion|a guess'),
            tf('Our senses can be fooled.', true),
            ch('Learning from others is…', '*testimony|telepathy|television only'),
          ],
          t: ['How do you know the Earth is round?', 'Can you know something without being able to prove it?'],
          k: ['Explain the stopped-clock puzzle and give your view.'],
          m: ['Illusion and Evidence Investigation', 'printed optical illusions, a ruler', 'Look at three optical illusions and record what you see | Measure or test to find the truth | Write about how senses can mislead | Suggest ways we check knowledge'],
          q: [
            ch('Information that supports a claim is…', '*evidence|emotion|exercise'),
            tf('Gettier challenged the "justified true belief" definition.', true),
            ch('A personal view or preference is an…', '*opinion|order|origin'),
          ],
          ms: ['Distinguishes fact, belief and opinion', 'Evaluates sources of knowledge', 'Engages with Gettier cases'],
        }),
      ]),
      U('thought-experiments', 'Thought Experiments', 'Experiments in the mind.', 'What is a thought experiment; The experience machine; Robots and minds', [
        L('thought-experiments', 'The Experience Machine', {
          o: ['Explain what a thought experiment is', 'Analyse Nozick\'s experience machine and what it reveals about values'],
          p: ['Can distinguish knowledge and belief'],
          e: [
            'A thought experiment is an imagined scenario used to test ideas. You can\'t build it, but thinking it through reveals what we believe.',
            'In 1974, philosopher Robert Nozick imagined an "experience machine" that could give you any experiences you wanted — feeling you\'d written a great novel or made a friend — while you floated in a tank. Would you plug in for life? Many people say no, suggesting we value doing things and real connections, not just feeling good.',
            'Other thought experiments ask: if a robot behaved exactly like a person, would it have feelings? Thought experiments don\'t give final answers but sharpen our thinking.',
          ],
          v: 'thought experiment = an imagined scenario used to test ideas; scenario = an imagined situation; value = something important to us; reality = what truly exists',
          x: ['Nozick\'s experience machine.', 'Imagining a robot with feelings.'],
          s: ['The Happiness Tank', 'Meera\'s class discussed Nozick\'s machine. Raj said, "I\'d plug in! I\'d feel like a cricket champion every day." Meera disagreed: "But you wouldn\'t really be one. I want to actually earn it." Their teacher asked, "So what do you value — the feeling or the reality?" The debate went on all lunch.'],
          a: [
            ch('A thought experiment is…', '*an imagined scenario to test ideas|a laboratory test|a dream'),
            ch('The experience machine was imagined by…', '*Robert Nozick|Aristotle|Zhuangzi'),
            tf('Many people say they would not plug into the experience machine.', true),
            ch('What the experience machine suggests many people value is…', '*real achievement and connections|only feelings|nothing'),
          ],
          t: ['Would you plug in? Why or why not?', 'Is a happy life the same as a good life?'],
          k: ['Lead a short discussion on the experience machine.'],
          m: ['Design a Thought Experiment', 'a notebook', 'Choose a question you care about | Invent an imagined scenario to test it | Ask five people their responses | Write what the responses reveal'],
          q: [
            ch('An imagined situation is a…', '*scenario|science|scenery'),
            tf('Thought experiments sharpen our thinking.', true),
            ch('Something important to us is a…', '*value|volume|vote'),
          ],
          ms: ['Explains thought experiments', 'Analyses Nozick\'s case', 'Designs a thought experiment'],
        }),
      ]),
    ]),
    S('s9', 'Philosophers of the world; mind and free will.', [
      'Compare philosophers from different traditions', 'Explore the mind-body problem', 'Debate free will and determinism',
    ], [
      U('world-philosophers', 'Philosophers of the World', 'Wisdom from many traditions.', 'Socrates and the Greek tradition; Confucius and Laozi; Indian darshanas and the Buddha', [
        L('world-philosophers', 'Many Paths to Wisdom', {
          o: ['Describe key ideas of philosophers from Greece, China and India', 'Compare their approaches to living well'],
          p: ['Knows thought experiments'],
          e: [
            'In Athens, Socrates (c. 470–399 BCE) questioned people to expose unclear thinking — the Socratic method — and said "the unexamined life is not worth living". Plato and Aristotle built on his work.',
            'In China, Confucius (551–479 BCE, traditional dates) taught ren (humaneness), ritual and good relationships in families and society. Laozi, traditionally the author of the Daodejing, taught living in harmony with the Dao (the Way).',
            'In India, the classical darshanas (schools) include Nyaya (logic), Vaisheshika, Samkhya, Yoga, Mimamsa and Vedanta, along with Buddhist, Jain and Charvaka (materialist) philosophies. The Buddha taught the Four Noble Truths about suffering and its end.',
          ],
          v: 'Socratic method = questioning to examine ideas; darshana = a school of Indian philosophy; ren = Confucian humaneness; Dao = the Way, in Chinese thought',
          x: ['Socrates questioning citizens in the marketplace.', 'The Charvaka school questioning life after death.'],
          s: ['The Gadfly of Athens', 'Socrates called himself a gadfly, stinging Athens awake with questions. He asked generals what courage was and judges what justice was — and showed they couldn\'t define them. Some loved him; others were angry. In 399 BCE, he was sentenced to death. He chose to accept it rather than abandon philosophy.'],
          a: [
            mt('Match the philosopher to the idea', 'Socrates=the unexamined life is not worth living|Confucius=ren (humaneness)|Laozi=harmony with the Dao|the Buddha=Four Noble Truths'),
            ch('Questioning to examine ideas is the…', '*Socratic method|Confucian ritual|Daoist way'),
            tf('Indian philosophy includes materialist schools like Charvaka.', true),
            ch('A school of Indian philosophy is a…', '*darshana|dharma only|dynasty'),
          ],
          t: ['Which philosopher\'s ideas appeal to you most? Why?', 'What do these traditions agree on about living well?'],
          k: ['Present one philosopher and an idea of theirs you can use today.'],
          m: ['Philosophers\' Dialogue', 'reliable sources, a partner', 'Choose two philosophers from different traditions | Research their views on living well | Write an imagined dialogue between them | Perform it and discuss'],
          q: [
            ch('Confucian humaneness is…', '*ren|Dao|darshana'),
            tf('Socrates was sentenced to death in 399 BCE.', true),
            ch('The Daodejing is traditionally attributed to…', '*Laozi|Socrates|Aristotle'),
          ],
          ms: ['Describes philosophers accurately', 'Compares traditions', 'Applies ideas to life'],
        }),
      ]),
      U('mind-will', 'Mind and Free Will', 'What is the mind? Are we free?', 'The mind-body problem; Can machines think?; Free will and determinism', [
        L('free-will', 'Are We Free?', {
          o: ['Explain the mind-body problem and the Turing test', 'Evaluate positions on free will and determinism'],
          p: ['Knows world philosophers'],
          e: [
            'The mind-body problem asks how the mind (thoughts, feelings) relates to the body (brain). René Descartes (17th century) argued mind and body are different substances (dualism); many scientists and philosophers today think the mind arises from brain activity (physicalism). The debate continues.',
            'In 1950, Alan Turing proposed a test: if a machine\'s conversation can\'t be distinguished from a human\'s, should we say it thinks? Critics like John Searle (the Chinese Room, 1980) argued that producing the right outputs isn\'t the same as understanding.',
            'Free will: determinism says every event is caused by earlier events. If so, are our choices free? Compatibilists say freedom means acting on your own reasons without being forced; libertarians (in philosophy) say true freedom requires choices not fully determined; hard determinists say free will is an illusion.',
          ],
          v: 'dualism = the view that mind and body are separate; determinism = the view that all events are caused by prior events; compatibilism = the view that free will and determinism can both be true; consciousness = awareness of oneself and the world',
          x: ['Searle\'s Chinese Room thought experiment.', 'Choosing tea or coffee — free or determined?'],
          s: ['The Chinese Room', 'Searle imagined himself in a room with a rulebook for matching Chinese symbols. People slip in questions in Chinese; he follows the rules and slips out perfect answers — without understanding a word. "That," he argued, "is what a computer does." Others replied that the whole system might understand. The argument still divides philosophers.'],
          a: [
            mt('Match the view', 'dualism=mind and body separate|determinism=all events caused|compatibilism=freedom and causation compatible|physicalism=mind arises from the brain'),
            ch('The Turing test was proposed in…', '*1950|1637|2000'),
            tf('Searle argued that producing correct outputs is not the same as understanding.', true),
            ch('Awareness of oneself and the world is…', '*consciousness|conscience|confidence'),
          ],
          t: ['If your choices are caused by your brain, are they still yours?', 'Could a machine ever really understand?'],
          k: ['Debate free will versus determinism with a partner.'],
          m: ['Free Will Position Paper', 'philosophy texts, scholarly sources', 'Summarise three positions on free will | Evaluate the strongest objection to each | Defend your own view | Write a 1500-word position paper'],
          q: [
            ch('The view that mind and body are separate is…', '*dualism|determinism|democracy'),
            tf('Descartes was a dualist.', true),
            ch('The view that all events are caused by prior events is…', '*determinism|dualism|deduction'),
          ],
          ms: ['Explains mind-body positions', 'Evaluates free will views', 'Constructs philosophical arguments'],
        }),
      ]),
    ]),
    S('s12', 'Ethics, justice and the meaning of life.', [
      'Compare major ethical theories', 'Analyse theories of justice', 'Reflect rigorously on meaning and purpose',
    ], [
      U('ethics', 'Ethical Theories', 'How should we decide what is right?', 'Consequentialism; Deontology; Virtue ethics and ahimsa', [
        L('ethics', 'Three Ways to Think About Right and Wrong', {
          o: ['Compare consequentialism, deontology and virtue ethics', 'Apply ethical theories to real dilemmas'],
          p: ['Knows virtues and thought experiments'],
          e: [
            'Consequentialism judges actions by their results. Utilitarianism (Jeremy Bentham, John Stuart Mill) aims for the greatest happiness for the greatest number. Critics say it can justify harming individuals for the majority.',
            'Deontology, associated with Immanuel Kant, judges actions by duties and rules: some acts, like lying or using people merely as tools, are wrong regardless of results. Critics say rigid rules can lead to bad outcomes.',
            'Virtue ethics (Aristotle, Confucius) asks what a good person would do, focusing on character. Indian traditions emphasise dharma and ahimsa (non-violence); Gandhi developed satyagraha — "truth-force" — as a method of non-violent resistance.',
          ],
          v: 'consequentialism = judging actions by results; deontology = judging actions by duties and rules; virtue ethics = focusing on good character; satyagraha = Gandhi\'s non-violent "truth-force"',
          x: ['The trolley problem: diverting a runaway trolley to save five but harm one.', 'Gandhi\'s Salt March of 1930.'],
          s: ['The Salt March', 'In 1930, Gandhi and 78 companions walked about 385 km to Dandi to make salt from seawater, breaking the British salt law non-violently. Thousands joined; tens of thousands were arrested. Gandhi argued that means and ends are inseparable — a just cause must be pursued by just methods. His ideas later inspired Martin Luther King Jr.'],
          a: [
            mt('Match the theory to its focus', 'consequentialism=results|deontology=duties and rules|virtue ethics=character|satyagraha=non-violent truth-force'),
            ch('Utilitarianism aims for…', '*the greatest happiness for the greatest number|following rules always|personal gain'),
            tf('Kant is associated with deontology.', true),
            ch('Gandhi\'s Salt March took place in…', '*1930|1857|1947'),
          ],
          t: ['Should you ever lie to protect someone?', 'Can non-violent resistance work against any injustice?'],
          k: ['Apply all three theories to one dilemma and present the results.'],
          m: ['Ethics Case Analysis', 'a real ethical dilemma (news or history), scholarly sources', 'Describe the dilemma | Analyse it with each theory | Evaluate which analysis is most convincing | Write a 2000-word essay'],
          q: [
            ch('Judging actions by results is…', '*consequentialism|deontology|virtue ethics'),
            tf('Satyagraha inspired Martin Luther King Jr.', true),
            ch('Focusing on good character is…', '*virtue ethics|utilitarianism|determinism'),
          ],
          ms: ['Compares ethical theories', 'Applies them to dilemmas', 'Evaluates strengths and weaknesses'],
        }),
      ]),
      U('justice-meaning', 'Justice and Meaning', 'What is a just society? What makes life meaningful?', 'Rawls and the veil of ignorance; Ambedkar on justice and equality; The meaning of life', [
        L('justice-meaning', 'Justice and the Meaning of Life', {
          o: ['Analyse Rawls\'s and Ambedkar\'s ideas of justice', 'Evaluate different answers to the question of life\'s meaning'],
          p: ['Knows ethical theories'],
          e: [
            'In "A Theory of Justice" (1971), John Rawls proposed the "veil of ignorance": design society\'s rules without knowing whether you\'ll be rich or poor, of which caste, gender or ability. He argued people would choose equal basic liberties and allow inequalities only if they benefit the least advantaged.',
            'Dr B. R. Ambedkar, chief architect of India\'s Constitution, argued that political democracy must rest on social democracy — liberty, equality and fraternity as a union. He fought caste discrimination, warning that political equality alongside social inequality was a contradiction.',
            'What gives life meaning? Some find it in religious faith; existentialists like Albert Camus and Jean-Paul Sartre argued we create our own meaning; others point to relationships, contribution, knowledge or love. Philosophy helps us examine our answers, not just accept them.',
          ],
          v: 'veil of ignorance = imagining society\'s rules without knowing your place in it; fraternity = a sense of shared brotherhood and sisterhood; existentialism = a philosophy emphasising freedom and creating meaning; social democracy = in Ambedkar\'s sense, equality in social life',
          x: ['Designing school rules without knowing which student you\'d be.', 'Ambedkar\'s final speech to the Constituent Assembly, 25 November 1949.'],
          s: ['A Life of Contradictions', 'On 25 November 1949, Dr Ambedkar warned the Constituent Assembly: "On the 26th of January 1950, we are going to enter into a life of contradictions. In politics we will have equality and in social and economic life we will have inequality." He urged the nation to remove this contradiction as soon as possible — a challenge still discussed today.'],
          a: [
            ch('Rawls\'s veil of ignorance asks you to design rules without knowing…', '*your place in society|the weather|the date'),
            mt('Match the thinker to the idea', 'Rawls=veil of ignorance|Ambedkar=liberty, equality and fraternity as a union|Camus=creating meaning in an absurd world'),
            tf('Ambedkar warned about political equality alongside social inequality.', true),
            ch('A philosophy emphasising freedom and creating meaning is…', '*existentialism|utilitarianism|determinism'),
          ],
          t: ['Behind the veil of ignorance, what rules would you choose for your school?', 'Do we discover meaning or create it?'],
          k: ['Lead a seminar on justice using Rawls and Ambedkar.'],
          m: ['Capstone Philosophy Essay', 'primary texts (excerpts), scholarly sources', 'Choose a question: justice or meaning | Present at least three positions fairly | Develop and defend your own argument | Write a 2500-word essay and present it'],
          q: [
            ch('A sense of shared brotherhood and sisterhood is…', '*fraternity|frugality|fragility'),
            tf('Rawls published "A Theory of Justice" in 1971.', true),
            ch('Ambedkar was chief architect of…', '*India\'s Constitution|the Taj Mahal|the Ajanta caves'),
          ],
          ms: ['Analyses theories of justice', 'Evaluates views on meaning', 'Writes a rigorous argument'],
        }),
      ]),
    ]),
  ],
});
