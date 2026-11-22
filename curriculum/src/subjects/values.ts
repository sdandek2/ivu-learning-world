import { subject, S, U, L, ch, tf, od, mt } from '../dsl.ts';

export default subject({
  id: 'values',
  description: 'Character and values drawn from many traditions and from universal human experience: honesty, kindness, courage, fairness, responsibility, gratitude, perseverance, humility, integrity and justice. Children explore values through stories and real choices, and learn to reason about dilemmas.',
  stages: [
    S('s4', 'Honesty, kindness and helping.', [
      'Tell the truth even when it is hard', 'Do kind things for others', 'Help at home and school',
    ], [
      U('honesty', 'Telling the Truth', 'Honesty builds trust.', 'Truth and lies; Owning up to mistakes; Trust', [
        L('owning-up', 'The Broken Vase', {
          o: ['Explain why telling the truth matters', 'Practise owning up to a mistake'],
          p: ['Can talk about what happened'],
          e: [
            'Being honest means telling the truth. When we tell the truth, people can trust us — they believe what we say.',
            'Sometimes telling the truth is hard, especially when we\'ve made a mistake. But owning up ("I did it, I\'m sorry") is brave, and it helps fix the problem.',
            'Everyone makes mistakes. Grown-ups usually feel proud when children are honest, even about mistakes.',
          ],
          v: 'honest = telling the truth; truth = what really happened; trust = believing someone; mistake = something that went wrong by accident',
          x: ['"I spilled the milk. Sorry! I\'ll help clean it."', 'Giving back extra change a shopkeeper gave by mistake.'],
          s: ['The Broken Pot', 'Kiko was playing ball indoors and — crash! — Grandma\'s clay pot broke. Kiko wanted to hide. But Kiko took a deep breath and went to Grandma. "I broke your pot. I\'m really sorry." Grandma hugged Kiko. "I\'m sad about the pot, but I\'m proud you told the truth. Let\'s make a new one together."'],
          a: [
            ch('If you break something by accident, you should…', '*tell the truth|hide it|blame someone else'),
            ch('Being honest helps people…', '*trust you|get angry|forget you'),
            tf('Owning up to a mistake is brave.', true),
            ch('Which is honest?', '*"I ate the last biscuit."|"The cat ate it." (when you did)|"I don\'t know." (when you do)'),
          ],
          t: ['Why might someone tell a lie?', 'How do you feel after telling the truth about a mistake?'],
          k: ['Tell a grown-up about a time you told the truth even though it was hard.'],
          m: ['Truth Tree', 'paper, crayons, leaf cut-outs', 'Draw a big tree | Each time someone in your family is honest, add a leaf with what they did | Watch your tree grow over two weeks | Talk about how honesty helps your family'],
          q: [
            ch('Honest means…', '*telling the truth|telling stories that aren\'t true|keeping quiet always'),
            tf('Everyone makes mistakes.', true),
            ch('When you tell the truth, people can…', '*trust you|never believe you'),
          ],
          ms: ['Explains why honesty matters', 'Owns up to mistakes', 'Links honesty to trust'],
        }),
      ]),
      U('kindness', 'Kindness Counts', 'Small kind acts make a big difference.', 'Kind acts at home, school, outside; Kindness to animals and nature; How kindness feels', [
        L('kind-acts', 'Little Acts of Kindness', {
          o: ['Do and describe kind acts', 'Notice how kindness makes others and ourselves feel'],
          p: ['Uses kind words'],
          e: [
            'Kindness means caring about others and doing things to help or make them happy — without expecting anything back.',
            'Kind acts can be small: helping set the table, sharing a snack, drawing a picture for Grandpa, watering plants, or filling a water bowl for birds.',
            'Kindness feels good for the person receiving it and the person giving it. It spreads, too — one kind act can inspire another.',
          ],
          v: 'kindness = caring and helping others; help = make something easier for someone; gentle = soft and careful; generous = happy to share',
          x: ['Holding the door for someone carrying bags.', 'Comforting a friend who is sad.'],
          s: ['The Kindness Chain', 'Momo shared an umbrella with Tara in the rain. Tara felt so happy that she helped Zuri carry her books. Zuri then gave Kiko a mango. Kiko drew a picture for Grandma Owl. "One kind act," hooted Olu, "and look how far it travelled!"'],
          a: [
            ch('Which is a kind act?', '*helping set the table|breaking a toy|shouting'),
            ch('Kindness makes…', '*others and us feel good|everyone sad|no difference'),
            tf('One kind act can inspire another.', true),
            mt('Match the kind act', 'sad friend=give a hug or listen|thirsty bird=put out water|Grandpa=draw him a picture'),
          ],
          t: ['What is the kindest thing someone has ever done for you?', 'Can kindness be shown to people we don\'t know?'],
          k: ['Do one kind act today and tell a grown-up how it felt.'],
          m: ['Kindness Calendar', 'a paper calendar for one week, crayons', 'Plan one kind act for each day | Draw a picture of each act | Tick it off when done | Share your favourite with your family'],
          q: [
            ch('Kindness means…', '*caring and helping others|being bossy|ignoring people'),
            tf('Kindness can be small acts.', true),
            ch('Being kind to animals includes…', '*being gentle|pulling tails|chasing them'),
          ],
          ms: ['Performs kind acts', 'Describes effects of kindness', 'Extends kindness to animals and nature'],
        }),
      ]),
    ]),
    S('s5', 'Fairness, responsibility and gratitude.', [
      'Explain what is fair', 'Take responsibility for small jobs', 'Express gratitude',
    ], [
      U('fairness', 'Being Fair', 'Fair means everyone gets a fair chance.', 'Fair vs equal; Rules for fairness; Cheating', [
        L('fair-share', 'Is It Fair?', {
          o: ['Explain what fairness means', 'Understand that fair doesn\'t always mean exactly the same'],
          p: ['Takes turns'],
          e: [
            'Being fair means treating people justly — giving everyone a fair chance and following the rules.',
            'Sometimes fair means equal: everyone gets the same number of sweets. But sometimes fair means giving people what they need: a child who can\'t see well sits at the front.',
            'Cheating is unfair because it breaks the rules and takes away others\' fair chance.',
          ],
          v: 'fair = just and right for everyone; equal = exactly the same; cheat = break the rules to win; need = something someone must have',
          x: ['Sharing a roti into equal pieces.', 'Giving extra help to a friend who has a hurt arm.'],
          s: ['The Fence and the Mangoes', 'Three friends of different heights wanted to see over a fence to the mango festival. Giving each one box (equal) still left the smallest unable to see. Giving boxes by need — none for the tallest, two for the smallest — let everyone see. "That\'s fair," said Zuri.'],
          a: [
            ch('Cheating is…', '*unfair|fair|kind'),
            ch('A friend with a broken arm gets help carrying books. This is…', '*fair because they need it|unfair|cheating'),
            tf('Fair doesn\'t always mean exactly the same.', true),
            ch('Sharing a cake fairly among 4 friends:', '*4 equal pieces|one big piece for you|nothing for two'),
          ],
          t: ['Is it fair if everyone gets the same, even if some need more?', 'How do you feel when something is unfair?'],
          k: ['Tell someone about a time something felt unfair and what would have made it fair.'],
          m: ['Fair Share Experiment', 'a snack that can be shared (like grapes), plates', 'Share grapes equally among family members | Discuss: is equal always fair? | Imagine one person is very hungry — would you change it? | Decide together what feels fair'],
          q: [
            ch('Following game rules is…', '*fair|unfair'),
            tf('Sometimes fairness means giving people what they need.', true),
            ch('Equal means…', '*exactly the same|more for me|less for everyone'),
          ],
          ms: ['Explains fairness', 'Distinguishes equal and fair', 'Recognises cheating as unfair'],
        }),
      ]),
      U('responsibility-gratitude', 'Responsibility and Gratitude', 'Doing our part and saying thank you.', 'Responsibilities at home and school; Keeping promises; Gratitude practice', [
        L('thank-you-jobs', 'My Jobs and My Thank-Yous', {
          o: ['Carry out age-appropriate responsibilities', 'Express gratitude regularly'],
          p: ['Helps at home'],
          e: [
            'Responsibility means doing your jobs and taking care of things: tidying toys, feeding a pet, packing your school bag, keeping promises.',
            'When we are responsible, people can count on us — and we feel proud and grown-up.',
            'Gratitude means noticing good things and saying thank you — to people who help us, for food, for nature. Grateful people often feel happier.',
          ],
          v: 'responsibility = a job you are trusted to do; reliable = someone people can count on; gratitude = feeling and showing thanks; chore = a regular job at home',
          x: ['Watering the tulsi plant every morning.', 'Thanking the bus driver.'],
          s: ['Rangi\'s Plant Job', 'Rangi was given the job of watering the class plant. For a week, Rangi forgot, and the leaves drooped. Rangi felt bad, made a reminder picture, and watered it every day after. The plant grew a flower! Rangi thanked the class for trusting a chameleon with such an important job.'],
          a: [
            ch('Responsibility means…', '*doing your jobs and taking care of things|doing nothing|blaming others'),
            ch('Gratitude means…', '*saying and feeling thanks|complaining|being jealous'),
            tf('Grateful people often feel happier.', true),
            mt('Match the job', 'pet=feed it|toys=tidy them|school bag=pack it'),
          ],
          t: ['What jobs could you do at home?', 'Who are you grateful for, and why?'],
          k: ['Tell three people today something you are grateful for about them.'],
          m: ['Gratitude Jar and Job Chart', 'a jar, paper slips, a chart', 'Make a chart of three daily jobs and tick them off | Each evening write or draw one thing you\'re grateful for and put it in the jar | After two weeks, read the gratitude slips together'],
          q: [
            ch('Which is being responsible?', '*packing your own school bag|leaving toys everywhere|forgetting promises'),
            tf('Saying thank you shows gratitude.', true),
            ch('When people can count on you, you are…', '*reliable|careless|lazy'),
          ],
          ms: ['Completes age-appropriate jobs', 'Expresses gratitude', 'Learns from forgetting'],
        }),
      ]),
    ]),
    S('s6', 'Courage, perseverance and respect, through stories from many traditions.', [
      'Show courage in everyday situations', 'Keep trying when things are hard', 'Show respect for elders, peers and differences',
    ], [
      U('courage', 'Everyday Courage', 'Courage isn\'t only for heroes.', 'Physical courage; Moral courage: speaking up; Trying new things; Courage stories', [
        L('brave-choices', 'Brave Choices', {
          o: ['Describe different kinds of courage', 'Identify courageous choices in daily life'],
          p: ['Knows honesty and kindness'],
          e: [
            'Courage means doing the right or important thing even when you feel scared. Being brave doesn\'t mean having no fear — it means acting despite it.',
            'Physical courage might be learning to swim. Moral courage is standing up for what\'s right: telling the truth, speaking up for someone being teased, or saying no to something wrong.',
            'Small brave acts count: trying a new food, raising your hand to answer, saying sorry first.',
          ],
          v: 'courage = acting rightly despite fear; brave = showing courage; moral courage = standing up for what is right; fear = feeling scared',
          x: ['Speaking up when a friend is being teased.', 'Trying again after falling off a bicycle.'],
          s: ['Malala\'s Voice', 'As a girl in Pakistan\'s Swat Valley, Malala Yousafzai spoke out for girls\' right to go to school, even when this was dangerous. She was attacked in 2012 but survived and continued her campaign. In 2014, she became the youngest person to receive the Nobel Peace Prize, sharing it with India\'s Kailash Satyarthi, who campaigns against child labour.'],
          a: [
            ch('Courage means…', '*doing the right thing even when scared|never feeling scared|being loud'),
            ch('Which shows moral courage?', '*standing up for someone being teased|laughing along|hiding'),
            tf('Small acts can be brave.', true),
            mt('Physical or moral courage?', 'learning to swim=physical courage|telling the truth when it\'s hard=moral courage|speaking up for a friend=moral courage, for others'),
          ],
          t: ['When have you been brave?', 'Can a person be scared and brave at the same time?'],
          k: ['Tell someone about a brave choice you made or want to make.'],
          m: ['Courage Medals', 'cardboard circles, ribbon, crayons', 'Make medals for brave acts (trying something new, speaking up, telling the truth) | Award one to a family member when you notice their courage | Explain why they earned it | Keep one for yourself as a goal'],
          q: [
            ch('Speaking up for what\'s right is…', '*moral courage|physical courage only|unkind'),
            tf('Malala and Kailash Satyarthi shared the Nobel Peace Prize in 2014.', true),
            ch('Being brave means…', '*acting despite fear|never being afraid|showing off'),
          ],
          ms: ['Describes types of courage', 'Identifies courageous choices', 'Relates stories of courage accurately'],
        }),
      ]),
      U('perseverance', 'Keep Going!', 'Perseverance and patience.', 'Trying again; Practice; Patience; Stories: Robert the Bruce and the spider, Dashrath Manjhi', [
        L('never-give-up', 'The Mountain Man', {
          o: ['Explain perseverance', 'Use strategies to keep going on hard tasks'],
          p: ['Knows growth mindset language'],
          e: [
            'Perseverance means continuing to try even when something is hard or takes a long time.',
            'Strategies: break the task into small steps, take short breaks, ask for help, and remember how far you\'ve already come.',
            'Patience goes with perseverance — some things simply take time, like growing a plant or learning to read.',
          ],
          c: [['evidence', 'Dashrath Manjhi of Gehlaur, Bihar, spent about 22 years (roughly 1960–1982) carving a path through a hill with hand tools, shortening the route to the nearest town.']],
          v: 'perseverance = continuing despite difficulty; patience = waiting calmly; goal = something you want to achieve; effort = trying hard',
          x: ['Practising a song every day until you can play it.', 'Building a puzzle a few pieces at a time.'],
          s: ['The Man Who Moved a Mountain', 'In a village in Bihar, Dashrath Manjhi lived on one side of a rocky hill, far from the nearest town and hospital. After his wife was badly injured crossing it, he began to cut a path through the hill with only a hammer and chisel. People laughed. He kept going for about 22 years — and made a road that saved his neighbours hours of travel.'],
          a: [
            ch('Perseverance means…', '*keeping going when it\'s hard|giving up quickly|cheating'),
            od('Strategy for a hard task', 'break it into small steps|do one step|take a short break|keep going'),
            tf('Some things simply take time.', true),
            ch('Dashrath Manjhi cut a path through a…', '*hill|river|cloud'),
          ],
          t: ['What helped Dashrath Manjhi keep going?', 'What\'s something you kept trying until you could do it?'],
          k: ['Tell someone about a goal you are working towards and your next small step.'],
          m: ['Perseverance Project', 'a skill to learn (a song, a knot, a magic trick), a progress chart', 'Choose a skill that\'s hard for you | Practise 10 minutes a day for two weeks | Record progress on a chart | Perform it for your family at the end'],
          q: [
            ch('A good strategy for a big task is to…', '*break it into small steps|do nothing|quit'),
            tf('Patience helps with perseverance.', true),
            ch('Effort means…', '*trying hard|being lucky|being fast'),
          ],
          ms: ['Explains perseverance', 'Uses persistence strategies', 'Relates inspiring stories accurately'],
        }),
      ]),
    ]),
    S('s7', 'Integrity, empathy in action, and values across traditions.', [
      'Act with integrity when no one is watching', 'Compare values across religious and cultural traditions', 'Apply the Golden Rule',
    ], [
      U('integrity', 'Integrity', 'Doing right when no one is watching.', 'Integrity vs reputation; Consistency between words and actions; Temptation', [
        L('no-one-watching', 'When No One Is Watching', {
          o: ['Define integrity', 'Reason through situations that test integrity'],
          p: ['Understands honesty and fairness'],
          e: [
            'Integrity means being honest and doing what\'s right consistently — even when no one is watching and you could get away with something.',
            'It means your actions match your words: if you say you value fairness, you play fairly even when the referee isn\'t looking.',
            'Integrity is tested by temptation. Pausing to ask "Would I be proud if everyone knew?" helps.',
          ],
          v: 'integrity = being honest and doing right consistently; consistent = the same every time; temptation = a desire to do something you shouldn\'t; reputation = what others think of you',
          x: ['Returning a lost wallet with all the money inside.', 'Not copying answers in a test even when the teacher steps out.'],
          s: ['The Unmarked Answer Sheet', 'The teacher stepped out, leaving the answer sheet on her desk. Several students glanced at it. Aditi felt the temptation but kept working on her own. Later, she got some answers wrong — but felt proud. "My marks are really mine," she said.'],
          a: [
            ch('Integrity is…', '*doing right even when no one is watching|being popular|winning at any cost'),
            ch('A helpful question when tempted:', '*"Would I be proud if everyone knew?"|"Will I get caught?"|"Who cares?"'),
            tf('Integrity means actions match words.', true),
            ch('Finding a lost wallet, integrity means…', '*returning it with everything inside|keeping the money|ignoring it'),
          ],
          t: ['Is it harder to have integrity when no one would ever know?', 'How are integrity and reputation different?'],
          k: ['Discuss a real integrity dilemma with a family member and explain your choice.'],
          m: ['Integrity Dilemma Cards', 'card, pens', 'Write 8 situations that test integrity | For each, write the tempting choice and the integrity choice | Discuss them with family | Write a personal integrity motto'],
          q: [
            ch('Copying answers when the teacher is out lacks…', '*integrity|creativity|speed'),
            tf('Integrity is tested by temptation.', true),
            ch('Consistent means…', '*the same every time|changing randomly|never'),
          ],
          ms: ['Defines integrity', 'Reasons through dilemmas', 'Articulates personal values'],
        }),
      ]),
      U('shared-values', 'Shared Values Across Traditions', 'Many traditions teach similar values.', 'The Golden Rule in many traditions; Ahimsa, seva, compassion, charity; Respecting different beliefs', [
        L('golden-rule', 'The Golden Rule', {
          o: ['Identify the Golden Rule in several traditions', 'Explain how shared values can unite people with different beliefs'],
          p: ['Understands kindness and fairness'],
          e: [
            'Many religious and philosophical traditions teach a version of the Golden Rule: treat others as you would like to be treated.',
            'It appears in Confucius ("Do not impose on others what you do not wish for yourself"), the Mahabharata (a teaching not to do to others what would be painful to oneself), the Bible ("Do to others as you would have them do to you"), and sayings attributed to the Prophet Muhammad and in Jewish teaching.',
            'Traditions also emphasise values like ahimsa (non-violence), seva (service), compassion and charity. Different beliefs can share common values, which helps people live together respectfully.',
          ],
          c: [['belief', 'Each tradition expresses the Golden Rule within its own beliefs and texts; followers understand it in the context of their faith.'], ['interpretation', 'Scholars note that versions differ (positive "do" and negative "do not" forms), and traditions add their own emphases.']],
          v: 'Golden Rule = treat others as you want to be treated; compassion = caring about others\' suffering; ahimsa = non-violence; tradition = beliefs and practices passed down through generations',
          x: ['Not spreading a rumour because you wouldn\'t want one spread about you.', 'Helping a neighbour as you\'d hope to be helped.'],
          s: ['The Interfaith Kitchen', 'During a flood, people from a temple, a mosque, a church and a gurdwara cooked together in one community kitchen. Volunteers had different prayers and festivals, but all said the same thing when asked why they came: "We would want someone to help us."'],
          a: [
            ch('The Golden Rule says…', '*treat others as you want to be treated|always win|keep everything for yourself'),
            mt('Match the value', 'ahimsa=non-violence|seva=selfless service|compassion=caring about others\' suffering'),
            tf('Many different traditions teach a version of the Golden Rule.', true),
            ch('Shared values can help people…', '*live together respectfully|argue more|ignore each other'),
          ],
          t: ['Is the Golden Rule always enough? What if someone wants to be treated differently from you?', 'Why might very different traditions arrive at similar values?'],
          k: ['Share a version of the Golden Rule from a tradition you know and explain it.'],
          m: ['Golden Rule Collection', 'paper, pens, reliable books or sources', 'Collect five versions of the Golden Rule from different traditions with sources | Write each on a card | Note similarities and differences | Create a display and discuss with family'],
          q: [
            ch('Ahimsa means…', '*non-violence|anger|competition'),
            tf('The Golden Rule appears in the Mahabharata.', true),
            ch('Respecting different beliefs means…', '*listening and being courteous even when you disagree|mocking them|forcing your view'),
          ],
          ms: ['Identifies the Golden Rule across traditions', 'Explains shared values respectfully', 'Applies the rule in daily choices'],
        }),
      ]),
    ]),
    S('s9', 'Ethical reasoning and moral dilemmas.', [
      'Use different ethical approaches to analyse dilemmas', 'Distinguish values, rules and consequences', 'Discuss dilemmas respectfully',
    ], [
      U('dilemmas', 'Moral Dilemmas', 'When values conflict.', 'Dilemmas: two values in tension; Consequences, duties, virtues; Reasoning steps', [
        L('three-lenses', 'Three Ways to Think About Right and Wrong', {
          o: ['Apply consequence, duty and virtue approaches to a dilemma', 'Recognise that thoughtful people can disagree'],
          p: ['Understands integrity and shared values'],
          e: [
            'A moral dilemma is a situation where values clash: being honest might hurt a friend\'s feelings; keeping a promise might mean not helping someone else.',
            'Philosophers offer different lenses. Consequences: which choice produces the best results for everyone? Duties: what rules or duties apply (tell the truth, keep promises)? Virtues: what would a good, kind, honest person do?',
            'Indian thought also discusses dharma — duty and right action — which can depend on one\'s role and situation, as explored in the Mahabharata and Bhagavad Gita. Using several lenses helps us reason carefully, even when we disagree.',
          ],
          c: [['interpretation', 'Consequentialism, deontology (duty ethics) and virtue ethics are major Western philosophical frameworks; Indian traditions discuss dharma in varied and debated ways. These are tools for reasoning, not a single correct answer.']],
          v: 'dilemma = a difficult choice between conflicting values; consequence = a result of an action; duty = something you ought to do; virtue = a good quality of character',
          x: ['A friend asks if you like their drawing, and you don\'t.', 'You promised to meet a friend but find someone who needs help.'],
          s: ['The Promise and the Stranger', 'Arun promised to meet his friend at 5 pm. On the way, he saw an elderly man who had fallen and needed help getting home. Helping would make Arun late. He thought: the consequences (the man could be hurt), his duty (his promise), and what a kind person would do. He helped, then called his friend to explain. His friend understood.'],
          a: [
            mt('Match the lens', 'Which choice has the best results?=consequences|What rules or duties apply?=duties|What would a good person do?=virtues'),
            ch('A moral dilemma is…', '*a choice where values clash|an easy choice|a maths problem'),
            tf('Thoughtful people can reach different conclusions on dilemmas.', true),
            ch('Dharma in Indian thought relates to…', '*duty and right action|weather|cooking'),
          ],
          t: ['Is it ever right to break a promise?', 'Which lens do you find most convincing, and why?'],
          k: ['Present a dilemma to your family, analysing it through all three lenses.'],
          m: ['Dilemma Discussion Circle', 'dilemma cards, a family or friend group', 'Write five realistic dilemmas | Discuss each using the three lenses | Record where people agreed and disagreed | Write a reflection on what you learned about reasoning'],
          q: [
            ch('"What would an honest, kind person do?" uses the…', '*virtue lens|consequence lens|duty lens'),
            ch('Focusing on results for everyone is the…', '*consequence lens|duty lens|virtue lens'),
            tf('Dilemmas involve conflicting values.', true),
          ],
          ms: ['Applies multiple ethical lenses', 'Reasons clearly about dilemmas', 'Respects disagreement'],
        }),
      ]),
      U('justice', 'Justice and Equality', 'Fairness on a bigger scale.', 'Equality and equity; Justice movements; Dr B. R. Ambedkar and constitutional values', [
        L('equity', 'Equality, Equity and Justice', {
          o: ['Distinguish equality from equity', 'Describe contributions of justice reformers'],
          p: ['Understands fairness'],
          e: [
            'Equality means treating everyone the same. Equity means giving people what they need to have fair opportunities, recognising that people start from different places.',
            'Justice involves fair laws and fair treatment for all. In India, Dr B. R. Ambedkar, chair of the Constitution\'s drafting committee, championed equality and fought against caste discrimination; the Constitution abolished untouchability (Article 17).',
            'Reformers across history — such as Savitribai Phule, who opened schools for girls in the 1840s, and Raja Ram Mohan Roy — challenged injustice. Justice is an ongoing project for every generation.',
          ],
          c: [['evidence', 'Savitribai and Jyotirao Phule opened a school for girls in Pune in 1848. Article 17 of the Constitution of India abolishes untouchability.']],
          v: 'equality = treating everyone the same; equity = fairness by meeting different needs; justice = fair treatment under fair rules; discrimination = unfair treatment because of who someone is',
          x: ['Ramps (equity) let wheelchair users enter buildings like everyone else.', 'Scholarships for students facing disadvantage.'],
          s: ['The Teacher Who Was Pelted', 'When Savitribai Phule walked to teach girls in 1840s Pune, some people threw mud and stones at her. She carried a second sari to change into at school. She kept teaching. Today, her birthday, 3 January, is celebrated in Maharashtra and beyond as a tribute to women\'s education.'],
          a: [
            mt('Equality or equity?', 'everyone gets the same book=equality|large-print books for a student who needs them=equity|same exam time for all=equality, everyone treated the same'),
            ch('Dr B. R. Ambedkar is known for…', '*chairing the Constitution\'s drafting committee and fighting caste discrimination|inventing the telephone|cricket'),
            tf('Savitribai Phule opened a school for girls in 1848.', true),
            ch('Article 17 of India\'s Constitution…', '*abolishes untouchability|sets the national anthem|creates states'),
          ],
          t: ['When is equal treatment unfair?', 'What injustices still need to be addressed today?'],
          k: ['Present the life and work of a justice reformer to your family.'],
          m: ['Justice Reformers Timeline', 'paper, research sources', 'Choose five reformers from India and the world | Research their work and dates | Create an illustrated timeline | Write a reflection on one injustice today and what could help'],
          q: [
            ch('Giving extra support to those who need it is…', '*equity|equality|discrimination'),
            tf('Justice is an ongoing project.', true),
            ch('Unfair treatment because of who someone is:', '*discrimination|equity|justice'),
          ],
          ms: ['Distinguishes equality and equity', 'Describes reformers accurately', 'Connects values to social justice'],
        }),
      ]),
    ]),
    S('s12', 'Ethics in depth: philosophical traditions and applied ethics.', [
      'Compare major ethical theories', 'Analyse contemporary ethical issues', 'Develop and defend a personal ethical position',
    ], [
      U('ethical-theories', 'Ethical Theories', 'Major approaches from around the world.', 'Utilitarianism; Kantian duty ethics; Virtue ethics: Aristotle, Confucius; Dharma and nishkama karma; Buddhist ethics', [
        L('compare-theories', 'Comparing Ethical Theories', {
          o: ['Explain major ethical theories from different traditions', 'Evaluate strengths and weaknesses of each'],
          p: ['Uses ethical lenses for dilemmas'],
          e: [
            'Utilitarianism (Bentham, Mill) judges actions by consequences: the right action maximises overall well-being. Kantian ethics holds that some actions are right or wrong regardless of consequences; we should act only on principles we could will as universal laws and treat people as ends, never merely as means.',
            'Virtue ethics (Aristotle, and Confucius in a different form) focuses on developing good character — courage, justice, temperance, ren (humaneness). Buddhist ethics emphasises reducing suffering through right intention, speech and action.',
            'The Bhagavad Gita teaches nishkama karma — acting according to one\'s dharma without attachment to results. Each theory captures something important and faces objections; many people draw on several.',
          ],
          c: [['interpretation', 'These are summaries of complex traditions with many internal debates; the Gita\'s teachings, for example, are interpreted in varied ways by commentators and scholars.']],
          v: 'utilitarianism = ethics judging actions by overall consequences; categorical imperative = Kant\'s principle of acting on universalisable rules; virtue ethics = ethics focused on character; nishkama karma = action without attachment to its fruits',
          x: ['Utilitarian: a policy that helps the most people.', 'Kantian: never lying, even with good intentions.'],
          s: ['The Trolley Debate', 'A seminar discussed a famous thought experiment: a runaway trolley will hit five people unless you divert it, killing one. Utilitarians said divert it; Kantian-leaning students hesitated to use one person as a means; virtue ethicists asked what a wise, compassionate person would do. The debate showed each theory\'s insights — and limits.'],
          a: [
            mt('Match the theory to the thinker', 'utilitarianism=Mill|categorical imperative=Kant|virtue ethics=Aristotle|nishkama karma=Bhagavad Gita'),
            ch('Utilitarianism focuses on…', '*consequences|character only|following orders'),
            tf('Many people draw on more than one ethical theory.', true),
            ch('Kant said people should be treated as…', '*ends, never merely as means|tools|numbers'),
          ],
          t: ['Which theory best handles a conflict between honesty and kindness?', 'Can an action be right if it leads to bad results?'],
          k: ['Present a contemporary dilemma analysed through three theories, then give your view.'],
          m: ['Ethics Essay', 'philosophy sources, notebook', 'Choose a contemporary issue (AI, animal welfare, climate) | Analyse it through three ethical theories | Evaluate their strengths and weaknesses | Write a 1200-word essay defending your position'],
          q: [
            ch('Acting without attachment to results is…', '*nishkama karma|utilitarianism|groupthink'),
            ch('Confucian virtue of humaneness:', '*ren|rasa|seva'),
            tf('Each ethical theory faces objections.', true),
          ],
          ms: ['Explains multiple ethical theories accurately', 'Evaluates them critically', 'Defends a reasoned position'],
        }),
      ]),
      U('applied-ethics', 'Applied Ethics', 'Ethics in technology, medicine and society.', 'AI and data ethics; Bioethics; Business ethics; Ethics of care', [
        L('ai-ethics', 'Ethics of Technology', {
          o: ['Analyse ethical issues in technology', 'Propose ethical guidelines'],
          p: ['Compares ethical theories'],
          e: [
            'New technologies raise new ethical questions. AI systems can carry bias from their training data, affecting decisions about jobs, loans or policing. Who is responsible when an automated system causes harm?',
            'Data privacy asks how personal information should be collected and used. India\'s Digital Personal Data Protection Act, 2023, sets rules for handling personal data.',
            'Ethical guidelines often include fairness, transparency, accountability, privacy and human oversight. Applying ethical theories helps: What are the consequences? Are people respected? What would a responsible designer do?',
          ],
          c: [['evidence', 'Studies have documented bias in some facial recognition and hiring algorithms, with higher error rates for certain groups.']],
          v: 'algorithmic bias = unfair outcomes from automated systems; transparency = being open about how decisions are made; accountability = being responsible for outcomes; privacy = control over personal information',
          x: ['A hiring algorithm favouring one group because of biased historical data.', 'Apps asking for more permissions than they need.'],
          s: ['The Unfair Filter', 'A company built an automated system to sort job applications, trained on past hires. It began rejecting applications from women — because most past hires had been men. Engineers discovered the bias and scrapped the system. "Data reflects the past," one said, "and the past isn\'t always fair."'],
          a: [
            mt('Match the principle', 'transparency=being open about decisions|accountability=responsibility for outcomes|privacy=control over personal data|fairness=avoiding unjust bias'),
            ch('Algorithmic bias can come from…', '*biased training data|perfect data|weather'),
            tf('India passed a Digital Personal Data Protection Act in 2023.', true),
            ch('Human oversight means…', '*people can review and correct automated decisions|machines decide everything alone|no one checks'),
          ],
          t: ['Should AI ever make decisions about people without human review?', 'Who should be responsible when technology causes harm?'],
          k: ['Debate a technology ethics question, presenting at least two perspectives fairly.'],
          m: ['Ethical Design Charter', 'research sources, a technology of your choice', 'Choose an app or technology | Identify ethical risks (bias, privacy, safety) | Write a charter of five principles for its designers | Present it with examples'],
          q: [
            ch('Unfair outcomes from automated systems:', '*algorithmic bias|transparency|privacy'),
            tf('Ethical theories can help analyse technology issues.', true),
            ch('Accountability means…', '*being responsible for outcomes|hiding mistakes|blaming users'),
          ],
          ms: ['Analyses technology ethics', 'Applies theories to real cases', 'Proposes principled guidelines'],
        }),
      ]),
    ]),
  ],
});
