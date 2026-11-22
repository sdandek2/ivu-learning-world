import { subject, S, U, L, ch, tf, od, mt } from '../dsl.ts';

export default subject({
  id: 'civics',
  description: 'Rules, rights and citizenship: why rules matter, fairness and voting, children\'s rights, the Constitution of India, democracy and elections, the three branches of government, the courts and rule of law, and active citizenship. Non-partisan and grounded in constitutional values.',
  stages: [
    S('s4', 'Rules at home and school, and why we have them.', [
      'Name rules at home and school', 'Explain that rules keep us safe and fair', 'Follow simple class rules',
    ], [
      U('rules', 'Why Do We Have Rules?', 'Rules help us live together safely.', 'Home rules; School rules; Game rules; Safety rules', [
        L('rules-help', 'Rules Help Us', {
          o: ['Name rules at home and school', 'Explain how rules keep us safe and fair'],
          p: ['Can follow simple instructions'],
          e: [
            'Rules tell us what to do and what not to do. At home, a rule might be "wash hands before eating". At school, "raise your hand to speak".',
            'Rules keep us safe: "walk, don\'t run, near the pool". Rules keep things fair: "take turns on the slide".',
            'When everyone follows rules, it\'s easier to live and play together happily.',
          ],
          v: 'rule = an instruction about what to do or not do; safe = protected from harm; fair = the same for everyone; follow = do what a rule says',
          x: ['"Hold hands when crossing the road" — a safety rule.', '"Share the crayons" — a fairness rule.'],
          s: ['The Playground Without Rules', 'One day, the animals decided to have no rules at the playground. Everyone pushed to the slide, the swings got tangled, and little Rangi got knocked over. "Maybe rules aren\'t so bad," said Kiko. They made three rules: take turns, be gentle, help anyone who falls. The playground was fun again.'],
          a: [
            ch('Why do we have rules?', '*to keep us safe and fair|to make us sad|for no reason'),
            mt('Match the rule to its reason', 'walk near the pool=safety|take turns on the slide=fairness|raise your hand=everyone gets heard'),
            tf('Rules help us live together.', true),
            ch('A home rule could be…', '*wash hands before eating|never sleep|eat only sweets'),
          ],
          t: ['What would happen if there were no traffic rules?', 'Which rule do you find hardest to follow?'],
          k: ['Tell a grown-up two rules at home and why they matter.'],
          m: ['Family Rules Poster', 'paper, crayons, a family chat', 'With your family, choose 5 important home rules | Draw a picture for each | Discuss why each rule matters | Hang the poster where everyone can see it'],
          q: [
            ch('"Take turns" is a rule for…', '*fairness|cooking|sleeping'),
            tf('Safety rules protect us from harm.', true),
            ch('When everyone follows rules, things are…', '*easier and happier|harder|scary'),
          ],
          ms: ['Names rules in different settings', 'Explains purposes of rules', 'Follows rules consistently'],
        }),
      ]),
      U('making-choices', 'Voting Together', 'Making choices as a group.', 'Choosing together; Voting with hands or pictures; Accepting the result', [
        L('class-vote', 'Let\'s Vote!', {
          o: ['Take part in a simple vote', 'Accept a group decision even if it wasn\'t their choice'],
          p: ['Can count to 10'],
          e: [
            'When a group must choose, everyone can vote. Each person chooses once — by raising a hand or putting a token in a box. The choice with the most votes wins.',
            'Voting is fair because everyone gets one vote, and everyone\'s vote counts the same.',
            'If your choice doesn\'t win, it\'s okay to feel disappointed — but we accept the result and maybe try again next time.',
          ],
          v: 'vote = choose one option in a group decision; choice = what you pick; result = the outcome after counting; majority = more than half',
          x: ['Voting on which story to read at story time.', 'Choosing a class pet\'s name by vote.'],
          s: ['Naming the Class Fish', 'The class got a goldfish. Should it be called Bubbles or Goldie? Everyone put a button in a jar. Bubbles: 12 buttons. Goldie: 8. "Bubbles wins!" said the teacher. Ravi had voted for Goldie. He felt a little sad, then smiled and said, "Hello, Bubbles!"'],
          a: [
            ch('In a fair vote, each person gets…', '*one vote|ten votes|no vote'),
            ch('Bubbles 12, Goldie 8. Which wins?', '*Bubbles|Goldie|both'),
            tf('It\'s okay to feel sad if your choice loses.', true),
            ch('After a vote, we should…', '*accept the result|cry and stop playing|cheat'),
          ],
          t: ['Why should everyone\'s vote count the same?', 'What could we do if the vote is a tie?'],
          k: ['Hold a family vote on a game or dinner choice and explain the result.'],
          m: ['Family Vote', 'paper slips or buttons, a box', 'Choose a family decision with 2–3 options | Each person votes secretly | Count the votes together | Announce and accept the result'],
          q: [
            ch('The choice with the most votes…', '*wins|loses|is ignored'),
            tf('Voting is a fair way to decide.', true),
            ch('More than half the votes is a…', '*majority|minority|mistake'),
          ],
          ms: ['Participates in a vote', 'Counts votes correctly', 'Accepts outcomes gracefully'],
        }),
      ]),
    ]),
    S('s5', 'Rights and responsibilities of children.', [
      'Name some rights all children have', 'Match rights with responsibilities', 'Know who protects children\'s rights',
    ], [
      U('child-rights', 'Children Have Rights', 'Rights every child should have.', 'Right to education, health, play, safety, a name, to be heard; UN Convention on the Rights of the Child', [
        L('my-rights', 'My Rights', {
          o: ['Name rights that all children have', 'Explain why rights matter'],
          p: ['Understands fairness'],
          e: [
            'Rights are things every person should have just because they are human. Children have special rights too, agreed by almost every country in the UN Convention on the Rights of the Child (1989), which India signed.',
            'Children have the right to a name, to go to school, to healthcare, to play, to be safe from harm, and to have their opinions heard on things that affect them.',
            'Rights belong to every child, everywhere — whatever their gender, religion, language, family or ability.',
          ],
          c: [['evidence', 'The UN Convention on the Rights of the Child was adopted in 1989; India ratified it in 1992. India\'s Right to Education Act (2009) makes education a right for children aged 6–14.']],
          v: 'right = something every person should have; convention = an agreement between countries; protection = keeping safe; opinion = what someone thinks',
          x: ['Going to school is a right.', 'Being kept safe from harm is a right.'],
          s: ['The Rights Kite', 'Zuri made a kite with a ribbon for each right: school, health, play, safety, being heard. When the wind blew, all the ribbons flew together. "Every child should have a kite like this," she said. "And no one should cut the ribbons."'],
          a: [
            ch('Which is a right every child has?', '*to go to school|to drive a car|to eat only sweets'),
            ch('Children\'s rights belong to…', '*every child, everywhere|only some children|only rich children'),
            tf('Children have the right to play.', true),
            mt('Match the right', 'school=education|doctor=health|playground=play'),
          ],
          t: ['Why might some children not get all their rights?', 'What right is most important to you?'],
          k: ['Tell a grown-up three rights all children have.'],
          m: ['Rights Kite or Poster', 'paper, ribbons or strips, crayons', 'Make a kite or poster | Add a ribbon or picture for five children\'s rights | Explain each one | Display it at home'],
          q: [
            ch('Having your opinion heard is a…', '*right|punishment|game'),
            tf('India signed the UN Convention on the Rights of the Child.', true),
            ch('Rights are for…', '*every child|only boys|only girls'),
          ],
          ms: ['Names children\'s rights', 'Explains universality', 'Connects rights to daily life'],
        }),
      ]),
      U('responsibilities', 'Rights and Responsibilities', 'With rights come responsibilities.', 'Right to learn → responsibility to try and not disturb others; Right to be safe → responsibility not to hurt others; Respecting others\' rights', [
        L('two-sides', 'Two Sides of a Coin', {
          o: ['Match rights with responsibilities', 'Explain respecting others\' rights'],
          p: ['Names children\'s rights'],
          e: [
            'Rights and responsibilities go together, like two sides of a coin. If I have the right to learn, I have a responsibility to try my best and not stop others learning.',
            'If I have the right to be safe, I have a responsibility not to hurt others. If I have the right to be heard, I should listen to others too.',
            'Respecting other people\'s rights is how we protect everyone\'s rights.',
          ],
          v: 'responsibility = something you should do; respect = treat as important; protect = keep safe; duty = a responsibility you owe',
          x: ['Right to play → responsibility to share the playground.', 'Right to a clean environment → responsibility not to litter.'],
          s: ['The Noisy Classroom', 'During reading time, Kiko kept talking loudly. Momo couldn\'t read. "I have the right to talk!" said Kiko. "And I have the right to learn," said Momo. The teacher explained, "Your right to talk comes with a responsibility not to stop others learning. Let\'s talk at break time." Kiko agreed.'],
          a: [
            mt('Match the right to the responsibility', 'right to learn=try your best and let others learn|right to be safe=don\'t hurt others|right to be heard=listen to others'),
            ch('Rights and responsibilities are like…', '*two sides of a coin|a cat and a dog|night and noon'),
            tf('Respecting others\' rights protects everyone.', true),
            ch('The right to a clean environment comes with the responsibility to…', '*not litter|litter more|ignore rubbish'),
          ],
          t: ['Can someone lose their rights if they don\'t meet responsibilities?', 'Whose responsibility is it to protect children\'s rights?'],
          k: ['Explain to someone one of your rights and the responsibility that goes with it.'],
          m: ['Rights and Responsibilities Coins', 'cardboard circles, pens', 'Make paper "coins" with a right on one side and a responsibility on the other | Make at least five | Use them to explain to family | Keep them in a jar as reminders'],
          q: [
            ch('Right to play → responsibility to…', '*share and play safely|break toys|exclude others'),
            tf('Rights come with responsibilities.', true),
            ch('A responsibility is…', '*something you should do|a type of toy|a punishment'),
          ],
          ms: ['Pairs rights and responsibilities', 'Respects others\' rights', 'Applies ideas in class life'],
        }),
      ]),
    ]),
    S('s6', 'National symbols, the Constitution, and fundamental rights.', [
      'Identify India\'s national symbols', 'Explain what a constitution is', 'Name fundamental rights and duties',
    ], [
      U('national-symbols', 'Symbols of India', 'Symbols that represent the nation.', 'National flag: tricolour and Ashoka Chakra; National emblem; National anthem and song; Republic Day and Independence Day', [
        L('tricolour', 'Our National Flag', {
          o: ['Describe the national flag and its colours', 'Name national symbols and national days'],
          p: ['Knows India is a country'],
          e: [
            'India\'s national flag is the tricolour: saffron at the top, white in the middle with a navy blue Ashoka Chakra (a wheel with 24 spokes), and green at the bottom.',
            'Other national symbols include the national emblem (the Lion Capital of Ashoka from Sarnath), the national anthem "Jana Gana Mana" by Rabindranath Tagore, and the national song "Vande Mataram" by Bankim Chandra Chattopadhyay.',
            'Independence Day (15 August) marks freedom from British rule in 1947. Republic Day (26 January) marks the Constitution coming into effect in 1950.',
          ],
          c: [['evidence', 'The flag was adopted by the Constituent Assembly on 22 July 1947; the Constitution came into force on 26 January 1950.'], ['interpretation', 'The flag\'s colours are commonly explained as courage and sacrifice (saffron), truth and peace (white), and faith, fertility and prosperity (green); explanations vary.']],
          v: 'national flag = a flag representing the country; Ashoka Chakra = the 24-spoked wheel on the flag; anthem = a national song; Republic Day = the day the Constitution came into force',
          x: ['Flag hoisting on Independence Day at school.', 'Standing respectfully during the national anthem.'],
          s: ['The Flag at School', 'On Independence Day morning, Ivaan\'s school gathered in the courtyard. As the principal hoisted the tricolour, flower petals fluttered down from its folds. Everyone stood straight and sang "Jana Gana Mana". Ivaan counted the spokes of the chakra in a picture later: twenty-four!'],
          a: [
            od('Flag colours from top to bottom', 'saffron|white|green'),
            ch('How many spokes does the Ashoka Chakra have?', '12|*24|36'),
            mt('Match the date', '15 August=Independence Day|26 January=Republic Day|2 October=Gandhi Jayanti'),
            tf('"Jana Gana Mana" was written by Rabindranath Tagore.', true),
          ],
          t: ['Why do countries have national symbols?', 'How should we show respect to the flag and anthem?'],
          k: ['Describe the national flag to someone and explain one national day.'],
          m: ['National Symbols Booklet', 'paper, crayons, stapler', 'Make a booklet with one page each for the flag, emblem, anthem, animal, bird and flower | Draw and label each | Add one fact | Share it on Republic Day', "An adult should operate the stapler and check that staples are fully closed. Keep the stapler and loose staples away from children."],
          q: [
            ch('The colour at the top of the flag is…', '*saffron|green|blue'),
            ch('Republic Day is on…', '15 August|*26 January|2 October'),
            tf('The national emblem comes from the Lion Capital at Sarnath.', true),
          ],
          ms: ['Describes national symbols accurately', 'Knows national days and their meaning', 'Shows respect for national symbols'],
        }),
      ]),
      U('constitution', 'The Constitution of India', 'The rulebook of the country.', 'What a constitution is; Dr B. R. Ambedkar and the Constituent Assembly; Preamble; Fundamental Rights and Duties', [
        L('rulebook', 'India\'s Rulebook', {
          o: ['Explain what a constitution is', 'Name some fundamental rights and duties'],
          p: ['Knows rights and responsibilities'],
          e: [
            'A constitution is the highest set of rules for a country. It says how the government works and what rights citizens have. India\'s Constitution, one of the longest in the world, was written by the Constituent Assembly between 1946 and 1949.',
            'Dr B. R. Ambedkar chaired the drafting committee. The Preamble begins "We, the people of India" and promises justice, liberty, equality and fraternity.',
            'Fundamental Rights include equality before law, freedom of speech, freedom of religion, protection from exploitation, and the right to constitutional remedies. Fundamental Duties include respecting the Constitution and flag, protecting the environment and developing a scientific temper.',
          ],
          c: [['evidence', 'The Constitution was adopted on 26 November 1949 (now observed as Constitution Day) and came into force on 26 January 1950.']],
          v: 'constitution = the highest set of rules of a country; Preamble = the introduction to the Constitution; fundamental rights = basic rights protected by the Constitution; fraternity = brotherhood and sisterhood among citizens',
          x: ['Freedom of speech lets people express opinions.', 'Protecting the environment is a fundamental duty.'],
          s: ['We, the People', 'In 1949, after nearly three years of debate, members of the Constituent Assembly — from many regions, religions and backgrounds, including 15 women — signed the Constitution. Their first words were "We, the people of India". The rulebook belonged not to kings or rulers, but to the people.'],
          a: [
            ch('A constitution is…', '*the highest set of rules of a country|a type of food|a festival'),
            ch('The drafting committee was chaired by…', '*Dr B. R. Ambedkar|Rabindranath Tagore|C. V. Raman'),
            mt('Right or duty?', 'freedom of speech=fundamental right|protecting the environment=fundamental duty|equality before law=fundamental right, for everyone'),
            tf('The Preamble begins "We, the people of India".', true),
          ],
          t: ['Why does a country need a written constitution?', 'Which fundamental duty do you think is most important?'],
          k: ['Read the Preamble aloud and explain one of its promises in your own words.'],
          m: ['Class Constitution', 'paper, pens, a group discussion', 'Write a "preamble" for your class or family stating shared goals | List rights and responsibilities | Vote to adopt it | Display and review it after a month'],
          q: [
            ch('Constitution Day is on…', '*26 November|15 August|1 January'),
            tf('The Constitution protects fundamental rights.', true),
            ch('Fraternity means…', '*brotherhood and sisterhood among citizens|a type of tax|a law court'),
          ],
          ms: ['Explains the Constitution\'s role', 'Names rights and duties', 'Interprets the Preamble'],
        }),
      ]),
    ]),
    S('s7', 'Democracy and elections.', [
      'Explain democracy', 'Describe how elections work in India', 'Explain the role of political parties and voters',
    ], [
      U('democracy', 'What Is Democracy?', 'Government by the people.', 'Direct and representative democracy; Universal adult franchise; Majority rule and minority rights', [
        L('by-the-people', 'Government by the People', {
          o: ['Define democracy and representative democracy', 'Explain universal adult franchise and minority rights'],
          p: ['Understands voting'],
          e: [
            'Democracy means government by the people. In a direct democracy, people vote on every decision. In a representative democracy, like India, people elect representatives to make laws for them.',
            'India has universal adult franchise: every citizen aged 18 or older can vote, regardless of religion, caste, gender, wealth or education — one person, one vote.',
            'In a healthy democracy, the majority decides, but the rights of minorities are protected, and people can criticise the government freely and peacefully.',
          ],
          c: [['evidence', 'The voting age in India was lowered from 21 to 18 by the 61st Amendment (1988). India\'s first general elections were held in 1951–52.']],
          v: 'democracy = government by the people; representative = a person elected to act for others; franchise = the right to vote; minority = a smaller group within a larger population',
          x: ['Electing a Member of Parliament (MP) for your constituency.', 'Protecting freedom of religion for all groups.'],
          s: ['The World\'s Biggest Election', 'In India\'s first general election in 1951–52, millions of people voted for the first time, many of whom could not read. Party symbols — like a pair of bullocks or a lamp — helped them choose. Today, India\'s elections are the largest in the world, with polling booths even in remote mountains and forests.'],
          a: [
            ch('Democracy means government by…', '*the people|one king|the army'),
            ch('In India, citizens can vote from age…', '16|*18|21'),
            tf('Minority rights are protected in a healthy democracy.', true),
            mt('Match', 'direct democracy=people vote on every decision|representative democracy=people elect representatives|universal adult franchise=all adults can vote'),
          ],
          t: ['Why do you think symbols were used on ballots in early elections?', 'What should happen when the majority wants something that harms a minority?'],
          k: ['Explain to someone why "one person, one vote" matters.'],
          m: ['Mock Election', 'ballot papers, a box, candidate speeches, family or classmates', 'Choose a simple issue or roles to elect | Candidates give short speeches | Hold a secret ballot | Count votes and discuss fairness'],
          q: [
            ch('India is a…', '*representative democracy|monarchy|direct democracy'),
            tf('In India, every adult citizen can vote.', true),
            ch('Franchise means…', '*the right to vote|a shop|a festival'),
          ],
          ms: ['Defines forms of democracy', 'Explains voting rights', 'Values minority rights'],
        }),
      ]),
      U('elections', 'How Elections Work', 'From campaigns to counting.', 'Election Commission of India; Constituencies; EVMs and VVPAT; Model Code of Conduct; Secret ballot', [
        L('election-day', 'Election Day', {
          o: ['Describe the steps of an election', 'Explain safeguards for free and fair elections'],
          p: ['Understands democracy'],
          e: [
            'The Election Commission of India, an independent constitutional body, organises elections. The country is divided into constituencies; each elects one representative.',
            'Before voting, candidates campaign under a Model Code of Conduct. On election day, voters show ID, get indelible ink on a finger, and vote secretly using an Electronic Voting Machine (EVM). A VVPAT slip lets voters verify their vote.',
            'Votes are counted, and the candidate with the most votes in each constituency wins. The party or coalition with a majority in the Lok Sabha forms the government.',
          ],
          v: 'constituency = an area that elects a representative; Election Commission = the body that runs elections; secret ballot = voting privately; indelible ink = ink that marks voters to prevent voting twice',
          x: ['Indelible ink on a voter\'s left index finger.', 'Polling stations set up in schools.'],
          s: ['Grandmother Votes', 'Ivaan went with his grandmother to the polling station at his school. She showed her voter ID, got a purple ink mark on her finger and stepped behind a screen. Beep! She came out smiling. "Nobody knows who I voted for," she whispered, "and that\'s exactly how it should be."'],
          a: [
            od('Steps of voting', 'show voter ID|get ink on your finger|vote secretly on the EVM|check the VVPAT slip'),
            ch('Elections in India are run by the…', '*Election Commission|Supreme Court|army'),
            tf('Voting is secret.', true),
            ch('Indelible ink helps prevent…', '*voting twice|rain|forgetting names'),
          ],
          t: ['Why is the secret ballot important?', 'Why must the Election Commission be independent?'],
          k: ['Walk someone through what happens at a polling booth.'],
          m: ['School Election Simulation', 'ballot box, voter list, ID cards, ink stamp (washable)', 'Create a voter list and ID cards | Set up a polling booth with a screen | Hold a secret vote on a school issue | Count publicly and announce results'],
          q: [
            ch('An area that elects one representative is a…', '*constituency|state capital|village only'),
            ch('EVM stands for…', '*Electronic Voting Machine|Every Voter Matters|Election Vote Map'),
            tf('The Model Code of Conduct guides campaigns.', true),
          ],
          ms: ['Sequences the election process', 'Explains safeguards', 'Simulates fair elections'],
        }),
      ]),
    ]),
    S('s9', 'The three branches of government and the rule of law.', [
      'Explain the legislature, executive and judiciary', 'Describe how a bill becomes a law', 'Explain the rule of law and courts',
    ], [
      U('three-branches', 'Three Branches of Government', 'Separation of powers.', 'Legislature: Parliament (Lok Sabha, Rajya Sabha); Executive: President, Prime Minister, Council of Ministers; Judiciary: courts; Checks and balances; Federalism', [
        L('separation-powers', 'Who Does What?', {
          o: ['Describe the roles of the three branches', 'Explain checks and balances and federalism'],
          p: ['Understands democracy and elections'],
          e: [
            'The legislature makes laws. India\'s Parliament has the Lok Sabha (elected directly by the people) and the Rajya Sabha (elected mainly by state legislatures), plus the President.',
            'The executive carries out laws. The President is head of state; the Prime Minister and Council of Ministers run the government. The judiciary interprets laws and settles disputes; the Supreme Court is the highest court.',
            'Checks and balances stop any branch from becoming too powerful: courts can strike down unconstitutional laws; Parliament can question ministers. India is federal: power is shared between the Union and the states.',
          ],
          v: 'legislature = the branch that makes laws; executive = the branch that carries out laws; judiciary = the branch that interprets laws; federalism = sharing power between national and state governments',
          x: ['Parliament passing a budget.', 'The Supreme Court ruling on a constitutional question.'],
          s: ['The Three Friends\' Agreement', 'Professor Hoot explained with a story: three friends ran a village. One wrote the rules, one carried them out, and one judged disputes. When the rule-carrier tried to ignore a rule, the judge stopped him. When the rule-writer wrote an unfair rule, the judge struck it down. "Each keeps the others honest," said Hoot.'],
          a: [
            mt('Match the branch to its job', 'legislature=makes laws|executive=carries out laws|judiciary=interprets laws'),
            ch('The Lok Sabha is elected…', '*directly by the people|by the Supreme Court|by the President alone'),
            tf('Courts can strike down unconstitutional laws.', true),
            ch('Sharing power between the Union and states is…', '*federalism|monarchy|anarchy'),
          ],
          t: ['Why is it dangerous for one person or group to hold all power?', 'What issues should be decided by states rather than the Union?'],
          k: ['Explain checks and balances to someone using an example.'],
          m: ['Government Structure Chart', 'poster paper, research sources', 'Draw the three branches at Union level | Add the state-level equivalents | Draw arrows showing checks and balances | Present it to your family'],
          q: [
            ch('The highest court in India is the…', '*Supreme Court|High Court of Delhi|Lok Sabha'),
            ch('The head of state in India is the…', '*President|Prime Minister|Chief Justice'),
            tf('Parliament can question ministers.', true),
          ],
          ms: ['Describes the three branches', 'Explains checks and balances', 'Explains federalism'],
        }),
      ]),
      U('rule-of-law', 'The Rule of Law', 'Everyone is equal before the law.', 'How a bill becomes a law; Rule of law; Courts and justice; Rights of the accused; Public interest litigation', [
        L('equal-before-law', 'No One Is Above the Law', {
          o: ['Explain the rule of law', 'Describe how laws are made and how courts protect rights'],
          p: ['Knows the three branches'],
          e: [
            'The rule of law means everyone — ordinary citizens, officials and leaders — must obey the law, and laws apply equally to all.',
            'A bill becomes a law after being debated and passed by both houses of Parliament and receiving the President\'s assent.',
            'Courts protect rights: anyone accused of a crime has the right to a fair trial and a lawyer, and is presumed innocent until proven guilty. Through public interest litigation (PIL), citizens can approach courts on behalf of people whose rights are violated.',
          ],
          c: [['evidence', 'Article 14 of the Constitution guarantees equality before the law; PILs became prominent in India from the late 1970s and 1980s.']],
          v: 'rule of law = everyone must obey laws that apply equally; bill = a proposed law; assent = formal approval; public interest litigation = a court case filed for the public good',
          x: ['A senior official prosecuted for corruption.', 'A PIL leading to cleaner air measures in cities.'],
          s: ['The Case for Clean Air', 'Citizens worried about air pollution in a city filed a public interest litigation. The court examined evidence from scientists and ordered actions to reduce pollution. "The court can\'t solve everything," one lawyer said, "but it reminded everyone that the right to life includes the right to breathe."'],
          a: [
            od('How a bill becomes law', 'bill introduced in Parliament|debated and passed by Lok Sabha|passed by Rajya Sabha|President gives assent'),
            ch('The rule of law means…', '*everyone must obey the law equally|leaders are above the law|laws apply only to children'),
            tf('An accused person is presumed innocent until proven guilty.', true),
            ch('A PIL is filed for…', '*the public good|a private quarrel only|a festival'),
          ],
          t: ['Why is "innocent until proven guilty" important?', 'What happens to a society when powerful people ignore laws?'],
          k: ['Explain the rule of law to someone using a real or imagined example.'],
          m: ['Mock Parliament and Moot Court', 'a proposed school rule, roles, notebook', 'Draft a "bill" for a school rule | Debate and vote on it in two "houses" | Hold a short moot court where someone challenges it | Write a reflection on the process'],
          q: [
            ch('A proposed law is called a…', '*bill|verdict|PIL'),
            tf('Article 14 guarantees equality before the law.', true),
            ch('The President\'s formal approval of a bill is…', '*assent|veto only|campaign'),
          ],
          ms: ['Explains rule of law', 'Sequences law-making', 'Describes judicial protection of rights'],
        }),
      ]),
    ]),
    S('s12', 'Active citizenship, political thought and global citizenship.', [
      'Analyse political ideas and ideologies fairly', 'Practise informed, peaceful civic participation', 'Explain global institutions and human rights',
    ], [
      U('political-thought', 'Ideas About Government', 'Political philosophies and Indian thought.', 'Liberty, equality, justice; Gandhi\'s satyagraha and swaraj; Ambedkar on social democracy; Comparing ideologies fairly', [
        L('big-ideas', 'Liberty, Equality, Fraternity', {
          o: ['Explain key political concepts', 'Compare ideas of major thinkers fairly'],
          p: ['Understands the Constitution and democracy'],
          e: [
            'Political philosophy asks: What makes government legitimate? How should liberty and equality be balanced? Thinkers from many traditions, from Kautilya\'s Arthashastra to Locke, Rousseau and Mill, offered different answers.',
            'Mahatma Gandhi developed satyagraha — nonviolent resistance based on truth — and swaraj, self-rule both political and personal. Dr Ambedkar warned that political democracy needs social democracy: liberty, equality and fraternity in everyday life, not just in law.',
            'Political ideologies (on a spectrum from more state action to more market freedom, more tradition to more change) offer different priorities. Good citizens understand views they disagree with and argue respectfully with evidence.',
          ],
          c: [['interpretation', 'Political ideas are contested; this lesson presents thinkers\' views for understanding and does not endorse any party or ideology.'], ['evidence', 'Ambedkar\'s warning about social democracy comes from his speech to the Constituent Assembly on 25 November 1949.']],
          v: 'legitimacy = the rightful authority to govern; satyagraha = nonviolent resistance based on truth; ideology = a set of political beliefs; social democracy (Ambedkar\'s sense) = equality and fraternity in social life',
          x: ['The Salt March (1930) as satyagraha.', 'Debates over the role of government in healthcare.'],
          s: ['A Warning and a Hope', 'On 25 November 1949, the day before the Constitution was adopted, Dr Ambedkar told the Assembly that India was entering a life of contradictions: equality in politics but inequality in social and economic life. He urged the nation to remove these contradictions — a challenge students still debate today.'],
          a: [
            mt('Match the idea to the thinker', 'satyagraha=Gandhi|social democracy=Ambedkar|Arthashastra=Kautilya'),
            ch('Satyagraha means…', '*nonviolent resistance based on truth|armed rebellion|tax collection'),
            tf('Good citizens try to understand views they disagree with.', true),
            ch('An ideology is…', '*a set of political beliefs|a type of vote|a court'),
          ],
          t: ['Can liberty and equality conflict? Give an example.', 'Is nonviolent resistance always effective?'],
          k: ['Present a political idea you disagree with as fairly and accurately as possible.'],
          m: ['Political Thought Essay', 'primary sources (speeches, writings), notebook', 'Choose two thinkers with different views | Read excerpts of their writing | Compare their answers to one big question | Write a balanced 1200-word essay with your own reasoned view'],
          q: [
            ch('Ambedkar argued political democracy needs…', '*social democracy|a monarchy|no constitution'),
            tf('Political ideas are often contested.', true),
            ch('The Salt March is an example of…', '*satyagraha|an election|a court case'),
          ],
          ms: ['Explains political concepts', 'Represents thinkers accurately', 'Argues respectfully with evidence'],
        }),
      ]),
      U('global-citizenship', 'Active and Global Citizenship', 'Participating at home and in the world.', 'Civic participation: RTI, petitions, volunteering; Media literacy; United Nations and human rights; Global challenges', [
        L('active-citizen', 'Being an Active Citizen', {
          o: ['Describe peaceful ways to participate in civic life', 'Explain global institutions and the Universal Declaration of Human Rights'],
          p: ['Understands rule of law and rights'],
          e: [
            'Citizenship isn\'t only voting. Citizens can file Right to Information (RTI) requests to see government records, write petitions, attend public meetings, volunteer, and engage peacefully in debate. Checking facts before sharing news is part of responsible citizenship.',
            'Globally, the United Nations (founded 1945) works for peace, development and human rights. The Universal Declaration of Human Rights (1948) set out rights for all people; Hansa Mehta of India helped change its wording from "all men" to "all human beings are born free and equal".',
            'Global challenges — climate change, pandemics, migration — require cooperation across borders. Global citizens think about how their actions affect people everywhere.',
          ],
          c: [['evidence', 'The Right to Information Act was passed in 2005. Hansa Mehta served on the UN Commission on Human Rights and is credited with the change to Article 1 of the UDHR.']],
          v: 'RTI = Right to Information, a law letting citizens request government information; petition = a formal request signed by people; UDHR = Universal Declaration of Human Rights; global citizen = someone who considers their role in the wider world',
          x: ['An RTI request revealing how funds for a local road were spent.', 'Students joining an international climate project.'],
          s: ['Hansa Mehta\'s Words', 'When the Universal Declaration of Human Rights was being drafted, the first article said "All men are born free and equal." Hansa Mehta, a delegate from India, argued that this could exclude women. The wording was changed to "All human beings." Her small change carried a huge meaning for half the world.'],
          a: [
            mt('Match the tool to its use', 'RTI=request government information|petition=formal request signed by many|volunteering=giving time for community good'),
            ch('Hansa Mehta helped change the UDHR wording to…', '*"All human beings"|"All citizens of India"|"All adults over 21"'),
            tf('Checking facts before sharing is part of responsible citizenship.', true),
            ch('The United Nations was founded in…', '1919|*1945|1991'),
          ],
          t: ['What issue in your community would you use civic tools to address?', 'Should global problems take priority over local ones?'],
          k: ['Present a plan to address a local issue using at least two civic tools.'],
          m: ['Civic Action Project', 'research, a local issue, a team', 'Identify a local issue | Use an appropriate tool (RTI request with adult help, petition, public meeting) | Document every step and response | Present outcomes and lessons learned'],
          q: [
            ch('The RTI Act was passed in…', '1950|*2005|2020'),
            tf('Global challenges require cooperation across borders.', true),
            ch('The UDHR was adopted in…', '*1948|1857|2000'),
          ],
          ms: ['Uses civic participation tools', 'Explains global institutions and human rights', 'Acts as an informed, peaceful citizen'],
        }),
      ]),
    ]),
  ],
});
