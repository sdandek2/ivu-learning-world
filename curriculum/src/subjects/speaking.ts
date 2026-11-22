import { subject, S, U, L, ch, tf, od, mt } from '../dsl.ts';

export default subject({
  id: 'speaking',
  description: 'Oracy: listening carefully, speaking clearly, taking turns, asking questions, explaining and presenting, and finally debating and public speaking. Talk is the foundation for thinking and for writing.',
  stages: [
    S('s4', 'Listening carefully and speaking clearly in everyday conversations and games.', [
      'Listen and follow two-step instructions', 'Take turns in a conversation', 'Speak in full sentences to share needs and ideas',
    ], [
      U('good-listening', 'Good Listening', 'Listening is a skill we can practise.', 'Whole-body listening: eyes, ears, still body; Following instructions: one and two steps; Listening games: Simon Says, sound walks', [
        L('whole-body-listening', 'Whole-Body Listening', {
          o: ['Show good listening with eyes, ears and a still body', 'Follow a two-step instruction'],
          p: ['Can follow a simple one-step instruction'],
          e: [
            'Good listening uses your whole body. Your eyes look at the speaker. Your ears are ready. Your mouth is quiet. Your hands and feet are still.',
            'When someone gives an instruction, listen to the whole thing before you start. "Pick up the red block and put it in the box" has two steps: pick up, then put in.',
            'If you forget, it\'s okay to ask: "Can you say that again, please?" Asking is part of good listening.',
          ],
          v: 'listen = pay attention to sounds and words; instruction = words that tell you what to do; step = one part of an instruction',
          x: ['"Wash your hands, then sit at the table." — two steps.', 'Simon Says is a listening game: only move when you hear "Simon says".'],
          s: ['Pala\'s Treasure Map', 'Pala the dolphin told the fish: "Swim to the big rock, then look under the shell." Little Fin swam off before Pala finished and got lost. The other fish listened to the whole instruction. They swam to the rock, looked under the shell — and found shiny treasure! Fin came back and asked, "Can you say that again, please?"'],
          a: [
            ch('Good listeners look at…', '*the speaker 👀|the ceiling|their shoes'),
            od('"Clap your hands, then touch your nose." Put the steps in order', 'Clap your hands 👏|Touch your nose 👃|Wait for the next instruction ⏳'),
            tf('If you forget an instruction, you can politely ask again.', true),
            ch('When someone is talking, our mouth should be…', 'shouting|*quiet|singing'),
          ],
          t: ['Why is it hard to listen when you are excited?', 'How do you know someone is really listening to you?'],
          k: ['Play Simon Says with a grown-up, then take a turn being Simon and explain the rules.'],
          m: ['Sound Walk', 'a notebook or paper and crayons, a quiet place', 'Sit very still for one minute with eyes closed | Listen to every sound | Draw or tell three sounds you heard | Go to another place and compare the sounds'],
          q: [
            ch('Whole-body listening means…', '*eyes, ears and a still body|running around|talking at the same time'),
            od('"Open the door and say hello." Order', 'Open the door|Say hello|Close the door gently'),
            tf('Good listeners wait until the instruction is finished.', true),
          ],
          ms: ['Follows two-step instructions without prompts', 'Demonstrates attentive listening behaviours', 'Asks for repetition or clarification when needed'],
        }),
      ]),
      U('taking-turns', 'Talking Together', 'Conversations are like a game of catch.', 'Turn-taking: speaking and listening in turns; Full sentences: saying "I would like…"; Polite words: please, thank you, excuse me', [
        L('conversation-catch', 'Conversation Catch', {
          o: ['Take turns speaking and listening in a conversation', 'Use polite words and full sentences'],
          p: ['Can listen attentively for a short time'],
          e: [
            'A conversation is like playing catch with a ball. One person speaks (throws), the other listens (catches) and then answers (throws back).',
            'If two people talk at once, the ball drops! Wait for a pause before you speak. If you need to interrupt, say "Excuse me".',
            'Using full sentences helps people understand: not just "Water!" but "May I have some water, please?" Polite words make conversations kind.',
          ],
          v: 'conversation = people talking and listening in turns; take turns = one at a time; polite = kind and respectful',
          x: ['"What did you do today?" "I painted a picture. What did you do?"', '"Excuse me, may I say something?"'],
          s: ['The Dropped Ball', 'Momo and Kiko were playing catch. Momo threw the ball, but Kiko was busy talking and — thud! — it dropped. "Talking is like catch too," laughed Momo. "If we both talk at once, the words drop!" So they took turns: one talked, one listened, then they swapped.'],
          a: [
            ch('In a conversation we…', '*take turns|all talk at once|never listen'),
            ch('Most polite way to ask for juice:', 'Juice!|Give juice.|*May I have some juice, please?'),
            mt('Match the polite words', 'when you want something=please|when someone helps you=thank you|when you need to interrupt=excuse me'),
            tf('It is kind to wait for a pause before speaking.', true),
          ],
          t: ['How do you feel when someone talks over you?', 'How can you tell it\'s your turn to speak?'],
          k: ['Have a "catch conversation" with a grown-up, passing a ball each time you take a turn to talk.'],
          m: ['Talking Ball Family Dinner', 'a soft ball or toy', 'At dinner, only the person holding the ball speaks | Each person shares one thing about their day | Pass the ball to the next speaker | Talk afterwards about how it felt'],
          q: [
            ch('If you need to interrupt, say…', 'Hey!|*Excuse me|Stop!'),
            tf('Talking at the same time helps everyone understand.', false),
            ch('A good answer to "How are you?"', '*I am fine, thank you. How are you?|Go away.|Nothing.'),
          ],
          ms: ['Takes turns appropriately in conversation', 'Uses polite words without prompting', 'Responds on topic using full sentences'],
        }),
      ]),
    ]),
    S('s5', 'Asking and answering questions, describing, and show-and-tell.', [
      'Ask who, what, where, when, why questions', 'Describe objects and events in detail', 'Speak to a small group with confidence',
    ], [
      U('questions', 'Question Words', 'Questions help us find out more.', 'Question words: who, what, where, when, why, how; Asking follow-up questions; Answering in full sentences', [
        L('five-ws', 'Who, What, Where, When, Why?', {
          o: ['Use question words to find out information', 'Ask a follow-up question in a conversation'],
          p: ['Takes turns in conversation'],
          e: [
            'Question words help us find out different things. Who asks about a person. What asks about a thing or action. Where asks about a place. When asks about time. Why asks for a reason. How asks about the way something happens.',
            'Good listeners ask follow-up questions. If a friend says "I went to the beach", you could ask "What did you see there?" That shows you are interested.',
            'Questions end with a rising voice and, in writing, a question mark.',
          ],
          v: 'question = words that ask for information; follow-up question = a question that asks more about what someone just said; reason = why something happens',
          x: ['Where do penguins live? (a place)', 'Why do leaves fall in autumn? (a reason)'],
          s: ['The Curious Reporter', 'Zuri the zebra became a reporter for the Globe Garden News. She interviewed Tara: "Who are you? Where do you live? Why are you so slow?" Tara smiled: "I\'m Tara. I live by the pond. I\'m slow because my shell is heavy — but it keeps me safe!" Zuri wrote it all down.'],
          a: [
            mt('Match the question word to what it asks', 'who=a person|where=a place|when=a time|why=a reason'),
            ch('"I went to the zoo." A good follow-up question:', '*What animals did you see?|What is your name?|Where is my pencil?'),
            ch('Which question asks for a reason?', 'Where is the cat?|*Why is the cat hiding?|Who is the cat?'),
            tf('Asking follow-up questions shows you are listening.', true),
          ],
          t: ['Which question word is the hardest to answer? Why?', 'Why do little children ask "why?" so often?'],
          k: ['Interview a family member using all six question words, then tell someone else what you found out.'],
          m: ['Family Reporter Interview', 'a toy microphone (or a spoon!), paper', 'Choose someone to interview | Plan six questions, one with each question word | Ask your questions and listen carefully | Report back three things you learned'],
          q: [
            ch('"___ is your birthday?" asks about time.', 'Who|*When|Where'),
            ch('"___ made this cake?" asks about a person.', '*Who|Why|Where'),
            tf('"How" asks about the way something happens.', true),
          ],
          ms: ['Uses a range of question words appropriately', 'Asks relevant follow-up questions', 'Answers questions in full, on-topic sentences'],
        }),
      ]),
      U('show-and-tell', 'Show and Tell', 'Describing and sharing with a group.', 'Describing: size, colour, texture, use; Speaking to a group: voice, eyes, posture; Listening to others: questions and compliments', [
        L('show-tell', 'My Show and Tell', {
          o: ['Describe an object using several details', 'Speak clearly to a small group'],
          p: ['Uses describing words'],
          e: [
            'In show and tell, you bring something special and talk about it. Good describing tells what it looks like, feels like, what it is used for and why it is special to you.',
            'When speaking to a group: stand tall, look at your audience, speak loudly enough for the back row, and don\'t rush.',
            'The audience has a job too: listen, then ask a question or give a kind compliment.',
          ],
          v: 'describe = tell what something is like; audience = the people listening; detail = a small piece of information; compliment = a kind comment',
          x: ['"This is my wooden elephant. It is brown and smooth. My grandmother brought it from Kerala."', 'Audience question: "How old is it?"'],
          s: ['Bolt\'s Shiny Bolt', 'Bolt brought a tiny metal bolt for show and tell and mumbled, "This is a bolt." Nobody heard. Bolt tried again, standing tall: "This is a silver bolt. It is cold and heavy. It holds my arm on. Without it, I couldn\'t wave!" Everyone clapped — and asked lots of questions.'],
          a: [
            ch('When speaking to a group, look at…', 'the floor|*your audience|the ceiling'),
            ch('Which description has the most detail?', 'It\'s a ball.|*It\'s a red, bouncy ball I got for my birthday.|Ball.'),
            od('Order a show and tell', 'Say what it is|Describe it|Say why it is special|Ask for questions'),
            tf('The audience should listen and ask questions afterwards.', true),
          ],
          t: ['What makes a talk interesting to listen to?', 'Why do some people feel nervous speaking to a group? What helps?'],
          k: ['Give a one-minute show and tell to your family about a special object.'],
          m: ['Mystery Bag Describing Game', 'a cloth bag, small objects', 'Put an object in the bag without others seeing | Describe it without saying its name | Others guess what it is | Swap roles and notice which describing words helped most'],
          q: [
            ch('Speak loudly enough for…', 'only you|*everyone in the audience|the next street'),
            tf('Saying why something is special makes a talk more interesting.', true),
            ch('A kind audience response is…', '*a question or compliment|yawning|talking to a friend'),
          ],
          ms: ['Describes objects with at least three details', 'Speaks audibly with eye contact to a group', 'Responds to others\' talks with relevant questions'],
        }),
      ]),
    ]),
    S('s6', 'Explaining, giving instructions, and retelling with expression.', [
      'Give clear spoken instructions in order', 'Explain ideas using "because"', 'Retell stories with expressive voice',
    ], [
      U('instructions', 'Giving Instructions', 'Clear instructions help others do things.', 'Sequence words: first, next, then, finally; Bossy verbs: cut, fold, stir; Checking understanding', [
        L('clear-instructions', 'Say It Step by Step', {
          o: ['Give clear spoken instructions in the right order', 'Check that the listener understood'],
          p: ['Can describe objects in detail'],
          e: [
            'Instructions tell someone how to do something. Good instructions are in order and use sequence words: first, next, then, finally.',
            'Start each step with a "bossy verb" — an action word: fold, cut, pour, stir. Keep each step short and clear.',
            'Watch your listener. If they look confused, slow down, show them, or ask: "Does that make sense?"',
          ],
          v: 'instructions = steps telling how to do something; sequence = order; bossy verb = an action word that starts an instruction',
          x: ['First, fold the paper in half. Next, fold the corners down. Finally, fold the edges up — a paper boat!', '"Does that make sense? Shall I show you?"'],
          s: ['The Peanut Butter Robot', 'Kiko told Bolt, "Make a sandwich." Bolt stood still. "Put peanut butter on bread," said Kiko. Bolt put the whole jar on the bread! Kiko laughed and tried again: "First, open the jar. Next, use a knife to spread a little on one slice. Then put the other slice on top." Bolt made a perfect sandwich.'],
          a: [
            od('Order the instructions for brushing teeth', 'Wet the brush|Add toothpaste|Brush all your teeth|Rinse your mouth'),
            ch('Which is a bossy verb?', 'happy|*stir|blue'),
            tf('Good instructions can be in any order.', false),
            ch('If your listener looks confused, you should…', 'talk faster|*slow down and check|walk away'),
          ],
          t: ['Why did Bolt get it wrong the first time?', 'Is it easier to give instructions or to follow them? Why?'],
          k: ['Teach someone how to make a paper boat (or another simple thing) using only spoken instructions — no touching!'],
          m: ['Back-to-Back Building', 'two sets of identical blocks (6–8 each)', 'Sit back to back with a partner | Build something secretly | Give instructions so your partner can build the same thing | Compare and discuss which instructions were unclear'],
          q: [
            ch('The last step often begins with…', 'first|next|*finally'),
            od('Planting a seed', 'Fill a pot with soil|Make a small hole|Drop in the seed|Water it'),
            tf('Starting steps with action words makes instructions clearer.', true),
          ],
          ms: ['Gives multi-step instructions in logical order', 'Uses precise action words', 'Monitors and repairs listener understanding'],
        }),
      ]),
      U('explaining', 'Explaining My Thinking', 'Saying why, not just what.', 'Because sentences; Agreeing and disagreeing politely; Building on others\' ideas', [
        L('because-talk', 'I Think… Because…', {
          o: ['Explain an opinion or answer with a reason', 'Agree or disagree politely and build on others\' ideas'],
          p: ['Speaks in full sentences'],
          e: [
            'Good thinkers explain their ideas: "I think the bridge fell because it was too thin." The word "because" shows your reason.',
            'In discussions, people may disagree — and that\'s okay. Disagree with the idea, not the person: "I see what you mean, but I think…"',
            'You can also build on someone\'s idea: "I agree with Asha, and I\'d add that…" This makes group thinking stronger.',
          ],
          v: 'reason = why you think something; opinion = what you think or believe; agree = think the same; disagree = think differently',
          x: ['"I think we should play inside because it\'s raining."', '"I disagree, because we have umbrellas and the rain is light."'],
          s: ['The Great Pet Debate', 'The Heart Harbor friends had to choose a class pet. "A fish, because it\'s quiet," said Momo. "I see what you mean, but I think a rabbit, because we can hold it," said Zuri. "I\'d add that a rabbit needs lots of care — can we manage that?" said Tara. They listened to every reason before deciding together.'],
          a: [
            ch('Which sentence gives a reason?', 'I like dogs.|*I like dogs because they are friendly.|Dogs.'),
            ch('Most polite way to disagree:', 'You\'re wrong!|*I see what you mean, but I think…|That\'s silly.'),
            mt('Match the sentence starter to its purpose', 'I agree, and…=build on an idea|I disagree because…=give a different view|Can you explain why…?=ask for a reason'),
            tf('It is okay to disagree with someone\'s idea politely.', true),
          ],
          t: ['Can two people both have good reasons and still disagree?', 'Have you ever changed your mind after hearing someone\'s reason?'],
          k: ['Choose a question ("Is summer better than winter?") and explain your answer to someone with two reasons.'],
          m: ['Talk Stems Bookmark', 'card, pens, ribbon', 'Write talk starters on a bookmark: "I think… because…", "I agree, and…", "I disagree because…", "Can you say more about…?" | Use them at dinner discussions for a week | Tick each starter when you use it'],
          q: [
            ch('Finish the explanation: "I wear a coat in winter…"', 'and.|*because it is cold.|but.'),
            tf('Disagreeing means you don\'t like the person.', false),
            ch('"I\'d add that…" is used to…', '*build on an idea|end a conversation|ask the time'),
          ],
          ms: ['Supports opinions with reasons', 'Disagrees respectfully', 'Builds on others\' contributions'],
        }),
      ]),
    ]),
    S('s7', 'Presentations, discussion roles, and persuasive speaking.', [
      'Plan and deliver a short presentation', 'Take roles in group discussions', 'Use voice, pace and gesture effectively',
    ], [
      U('presentations', 'Planning a Presentation', 'Talks that inform an audience.', 'Structure: hook, main points, conclusion; Visual aids: posters, objects, slides; Delivery: voice, pace, pause, gesture', [
        L('hook-points-close', 'Hook, Points, Close', {
          o: ['Structure a presentation with a hook, main points and a conclusion', 'Use voice and gesture to engage an audience'],
          p: ['Explains ideas with reasons'],
          e: [
            'A strong presentation has three parts. The hook grabs attention: a question, surprising fact or short story. The main points (usually two or three) give the information. The conclusion sums up and leaves the audience thinking.',
            'Delivery matters as much as content. Vary your voice (louder, softer), pace (slow down for important bits) and use pauses for effect. Gestures can show size, shape or importance.',
            'Use notes with key words, not full sentences, so you talk to the audience rather than reading. Practise aloud at least three times.',
          ],
          v: 'presentation = a talk that shares information with an audience; hook = an opening that grabs attention; pace = how fast you speak; gesture = a movement of the hands or body that adds meaning',
          x: ['Hook: "What animal can sleep for up to three years? A snail!"', 'Pause before revealing a surprising answer.'],
          s: ['Nova\'s Nervous Talk', 'Nova had to present about the planets and wrote every word on paper. On the day, Nova read it fast, eyes down, and nobody remembered anything. Next time, Nova used three key-word cards, started with "Did you know a day on Venus is longer than its year?", and practised with a mirror. The class was spellbound.'],
          a: [
            od('Order a presentation', 'Hook|Main point 1|Main point 2|Conclusion'),
            ch('Which is the best hook?', 'Today I will talk about bees.|*What would happen if all the bees disappeared?|Bees.'),
            ch('Your notes should be…', 'every word written out|*key words only|blank'),
            tf('Pausing can make an important point stand out.', true),
          ],
          t: ['What makes you stop listening to a speaker?', 'Should a presentation include your opinion? When?'],
          k: ['Give a two-minute presentation on an animal, with a hook, two facts and a conclusion.'],
          m: ['Mini-Expert Talk', 'index cards, a poster or object as a visual aid', 'Choose a topic you know well | Plan hook, three points, conclusion on cards | Make a simple visual aid | Practise three times, once recorded | Present to your family and ask for one "glow" and one "grow"'],
          q: [
            ch('The part that grabs attention is the…', '*hook|conclusion|middle'),
            ch('Good presenters mostly…', 'read every word|*look at the audience|speak as fast as possible'),
            tf('Practising aloud helps a presentation go well.', true),
          ],
          ms: ['Delivers organised presentations with a clear hook and conclusion', 'Uses voice, pace and gesture deliberately', 'Speaks from notes rather than reading a script'],
        }),
      ]),
      U('discussion', 'Group Discussion', 'Thinking together productively.', 'Discussion roles: leader, summariser, challenger, includer; Ground rules; Reaching a decision', [
        L('discussion-roles', 'Discussion Roles', {
          o: ['Take on a discussion role effectively', 'Help a group reach a reasoned decision'],
          p: ['Agrees and disagrees politely'],
          e: [
            'Groups think better when people take roles. The leader keeps the group on task. The summariser sums up what has been said. The challenger asks "Are we sure? What\'s the evidence?" The includer invites quiet members to speak.',
            'Good discussions have ground rules: one person speaks at a time; respond to ideas, not people; everyone gets a chance.',
            'To reach a decision, list options, weigh reasons for each, and agree on the best — or find a compromise.',
          ],
          v: 'discussion = talking together to explore ideas; summarise = say the main points briefly; compromise = an agreement where each side gives a little; ground rules = agreed rules for how a group works',
          x: ['Includer: "Ravi, we haven\'t heard from you — what do you think?"', 'Summariser: "So far we have two ideas: a garden and a library corner."'],
          s: ['The Silent Member', 'In a group choosing a class project, three loud voices argued while Leela stayed quiet. Tara, the includer, asked, "Leela, what do you think?" Leela suggested combining a garden with reading benches. Everyone loved it. "We nearly missed the best idea," the group realised.'],
          a: [
            mt('Match the role to its job', 'leader=keeps the group on task|summariser=sums up ideas|challenger=asks for evidence|includer=invites everyone to speak'),
            ch('A good ground rule:', 'Loudest wins|*One person speaks at a time|Never change your mind'),
            ch('A compromise means…', 'one side wins completely|*each side gives a little|nobody decides'),
            tf('Quiet group members may have valuable ideas.', true),
          ],
          t: ['Which discussion role suits you best? Which is hardest?', 'Is it always good to reach agreement? When might disagreement be useful?'],
          k: ['Lead a family discussion on a real decision (a meal, an outing), using two roles, then summarise the result.'],
          m: ['Family Council', 'role cards, a decision to make', 'Make cards for leader, summariser, challenger, includer | Assign roles to family members | Discuss a real choice for 10 minutes | Reflect: did the roles help?'],
          q: [
            ch('Who asks "What\'s the evidence?"', 'includer|*challenger|summariser'),
            tf('Responding to ideas rather than people is a good ground rule.', true),
            ch('The summariser…', '*restates the main points|makes the final decision alone|stays silent'),
          ],
          ms: ['Fulfils discussion roles effectively', 'Contributes and invites contributions', 'Helps groups reach reasoned decisions'],
        }),
      ]),
    ]),
    S('s9', 'Formal debate, persuasive speech, and active listening for critical response.', [
      'Participate in structured debates', 'Deliver persuasive speeches', 'Listen critically to evaluate arguments',
    ], [
      U('debate', 'Structured Debate', 'Arguing a case with evidence and rebuttal.', 'Motion, proposition, opposition; Constructing arguments: claim, reason, evidence; Rebuttal and summary speeches', [
        L('debate-basics', 'How a Debate Works', {
          o: ['Explain the structure of a formal debate', 'Construct an argument and a rebuttal'],
          p: ['Gives reasoned opinions in discussion'],
          e: [
            'A debate is a structured argument about a motion, such as "This house believes homework should be banned." The proposition argues for the motion; the opposition argues against it.',
            'Each argument needs a claim, a reason and evidence. A rebuttal responds directly to the other side\'s argument, showing why it is weak or incomplete.',
            'Debaters may be assigned a side they do not personally agree with. This builds the skill of understanding different viewpoints — a key part of fair thinking.',
          ],
          v: 'motion = the statement being debated; proposition = the team arguing for the motion; opposition = the team arguing against; rebuttal = a response that challenges an argument',
          x: ['Motion: "Schools should have longer breaks." Proposition: breaks improve focus. Opposition: longer breaks mean longer school days.', 'Rebuttal: "The opposition says focus doesn\'t improve, but the study we cited shows…"'],
          s: ['Arguing the Other Side', 'Kiko was told to argue AGAINST more playtime — the opposite of what Kiko believed. Kiko grumbled, then researched and found real reasons: shorter lunches mean earlier home time, more time for clubs. After the debate, Kiko said, "I still prefer playtime, but now I understand why some people disagree."'],
          a: [
            mt('Match the term to its meaning', 'motion=the statement debated|proposition=argues for|opposition=argues against|rebuttal=answers the other side'),
            ch('A rebuttal should…', 'ignore the other team|*respond directly to their argument|repeat your first point'),
            tf('Debaters sometimes argue for a side they don\'t believe.', true),
            od('Order an argument', 'Claim|Reason|Evidence'),
          ],
          t: ['Is it honest to argue for something you don\'t believe? What can you gain from it?', 'What is the difference between winning a debate and being right?'],
          k: ['Prepare and deliver a two-minute speech for one side of a motion, then a one-minute rebuttal of the other side.'],
          m: ['Family Debate Night', 'a motion, timer, note cards', 'Choose a light motion (e.g. "Breakfast is the best meal") | Split into two teams and research | Each person gives a 1-minute speech | Each team gives a rebuttal | An audience member judges on reasoning, not volume'],
          q: [
            ch('The team arguing FOR the motion is the…', '*proposition|opposition|audience'),
            ch('Which is a rebuttal?', 'My favourite colour is blue.|*Our opponents claim X, but the evidence shows Y.|Thank you for listening.'),
            tf('Strong debate arguments include evidence.', true),
          ],
          ms: ['Constructs claim–reason–evidence arguments orally', 'Delivers relevant rebuttals', 'Argues assigned positions respectfully'],
        }),
      ]),
      U('critical-listening', 'Critical Listening', 'Evaluating what we hear: speeches, ads, news.', 'Active listening: summarising, questioning; Spotting persuasion techniques in speech; Distinguishing evidence from emotion', [
        L('listen-critically', 'Listening Critically', {
          o: ['Summarise a spoken argument accurately', 'Evaluate the evidence and techniques used by a speaker'],
          p: ['Understands persuasive techniques'],
          e: [
            'Active listening means not just hearing but processing: noting the main points, asking clarifying questions, and summarising fairly.',
            'Critical listening adds evaluation: Is the claim supported by evidence? Is the speaker using emotion instead of reasons? What is left out? Who benefits if I believe this?',
            'You can respect a speaker and still question their argument. Fair-minded listeners give credit to good points even when they disagree overall.',
          ],
          v: 'active listening = listening carefully to understand and respond; critical = carefully judging quality and evidence; clarify = make clearer; bias = an unfair preference',
          x: ['Summarising: "So your main point is that recycling is not enough on its own?"', 'Evaluating: "That was an emotional story, but is it typical?"'],
          s: ['The Miracle Water Advert', 'A loud advert promised: "Drink Sparkle Water and become a genius!" with a famous actor smiling. Zuri listened critically: no evidence, a celebrity instead of a scientist, and an impossible promise. "Great music," she said, "but zero proof."'],
          a: [
            ch('Which is a clarifying question?', 'Why are you so wrong?|*When you say "most people", how many do you mean?|What\'s for lunch?'),
            ch('A celebrity selling a product is mainly using…', 'scientific evidence|*fame to persuade|statistics'),
            tf('You can respect a speaker and still question their argument.', true),
            mt('Match the question to what it checks', 'What is the evidence?=support for the claim|Who benefits?=possible bias|What is missing?=left-out information'),
          ],
          t: ['Why is critical listening especially important today, with so many videos and ads?', 'How can you tell if you are disagreeing because of evidence or just because you dislike the speaker?'],
          k: ['Listen to a short speech or advert, summarise it in two sentences, and give a fair evaluation.'],
          m: ['Advert Detective Report', 'recordings of 3 adverts or short speeches, notebook', 'Listen to each one twice | Note the main claim, evidence and persuasive techniques | Rate each for evidence quality (1–5) | Present your findings to the family'],
          q: [
            ch('Active listening includes…', 'interrupting often|*summarising and asking questions|daydreaming'),
            ch('"Everyone is buying it!" is an appeal to…', 'evidence|*popularity|logic'),
            tf('Emotional stories always prove a claim is true.', false),
          ],
          ms: ['Accurately summarises spoken arguments', 'Evaluates evidence and persuasive techniques', 'Responds fair-mindedly to opposing views'],
        }),
      ]),
    ]),
    S('s12', 'Public speaking, rhetoric in famous speeches, and Socratic dialogue.', [
      'Analyse famous speeches', 'Deliver extended speeches with impact', 'Lead and contribute to Socratic seminars',
    ], [
      U('famous-speeches', 'Famous Speeches', 'How great speakers moved audiences.', 'Speech analysis: context, purpose, techniques; Indian and world speeches; Delivery: performance and presence', [
        L('tryst-with-destiny', 'Speeches That Shaped History', {
          o: ['Analyse the context, purpose and techniques of historic speeches', 'Apply techniques in an original speech'],
          p: ['Understands rhetorical appeals'],
          e: [
            'Some speeches are remembered because they captured a historic moment. Jawaharlal Nehru\'s "Tryst with Destiny" speech, delivered at midnight as India became independent on 15 August 1947, used powerful imagery: "At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom."',
            'Martin Luther King Jr.\'s "I Have a Dream" speech (1963) used repetition (anaphora) to build emotion and vision for civil rights in the United States.',
            'Analysing a speech means asking: What was the context? Who was the audience? What was the purpose? Which techniques were used, and how effective were they?',
          ],
          c: [['evidence', 'Nehru delivered "Tryst with Destiny" to the Constituent Assembly on the night of 14–15 August 1947. King delivered "I Have a Dream" at the March on Washington on 28 August 1963. Texts and recordings of both are preserved.']],
          v: 'anaphora = repeating words at the start of successive clauses; context = the situation in which a speech is given; imagery = vivid descriptive language; cadence = the rhythm and flow of speech',
          x: ['Anaphora: "I have a dream… I have a dream…"', 'Imagery: "when the world sleeps, India will awake to life and freedom."'],
          s: ['The Midnight Speech', 'On a humid August night in 1947, members of the Constituent Assembly gathered in Delhi. Outside, crowds waited. As midnight approached, Nehru rose to speak of a "tryst with destiny". Millions later heard or read those words, and they are still quoted at every Independence Day.'],
          a: [
            ch('"Tryst with Destiny" was delivered in…', '1857|*1947|1977'),
            ch('Repeating "I have a dream" is an example of…', '*anaphora|euphemism|hyperbole'),
            tf('Understanding context helps us analyse a speech.', true),
            mt('Match the question to the analysis step', 'When and where?=context|To whom?=audience|To do what?=purpose|How?=techniques'),
          ],
          t: ['Why do some speeches remain powerful decades later?', 'Can a speech be powerful but misleading? Find an example from history.'],
          k: ['Deliver a 3-minute original speech on a cause you care about, using at least three rhetorical techniques.'],
          m: ['Speech Analysis and Performance', 'texts or recordings of two famous speeches, notebook', 'Research the context of each speech | Annotate techniques | Write a 600-word comparative analysis | Perform an excerpt, then your own speech using similar techniques'],
          q: [
            ch('Analysing who a speech was for is examining its…', '*audience|imagery|anaphora'),
            ch('"At the stroke of the midnight hour…" was spoken by…', 'Gandhi|*Nehru|Tagore'),
            tf('Imagery helps listeners picture ideas.', true),
          ],
          ms: ['Analyses speeches with reference to context, purpose and technique', 'Delivers extended speeches with presence', 'Evaluates the ethics and effectiveness of rhetoric'],
        }),
      ]),
      U('socratic', 'Socratic Seminar', 'Inquiry through dialogue.', 'Socratic questioning: clarifying, probing assumptions, evidence, implications; Seminar norms; Reflection on thinking', [
        L('socratic-questioning', 'Socratic Questioning', {
          o: ['Use types of Socratic questions to deepen dialogue', 'Contribute to a seminar that builds shared understanding'],
          p: ['Participates in structured discussion'],
          e: [
            'Socrates, an ancient Greek philosopher known mainly through the writings of his student Plato, explored ideas through questioning rather than lecturing.',
            'Socratic questions include: clarifying ("What do you mean by…?"), probing assumptions ("What are we assuming?"), asking for evidence ("How do we know?"), exploring viewpoints ("How might someone disagree?") and implications ("If that\'s true, what follows?").',
            'In a Socratic seminar, the goal is not to win but to understand a text or question more deeply together. Participants refer to the text, build on each other, and are willing to change their minds.',
          ],
          c: [['evidence', 'Socrates (c. 470–399 BCE) left no writings; our knowledge of him comes chiefly from Plato and Xenophon, whose portrayals differ.']],
          v: 'Socratic method = exploring ideas through disciplined questioning; assumption = something accepted as true without proof; implication = a consequence that follows from an idea; seminar = a discussion-based class',
          x: ['"When you say a law is unjust, what makes a law just?"', '"If honesty is always right, what about lying to protect someone?"'],
          s: ['The Question That Wouldn\'t Go Away', 'A seminar began with "Is it ever right to break a rule?" One student said "Never." Another asked, "What about a rule that harms people?" A third asked, "Who decides if a rule is harmful?" By the end, nobody had a final answer — but everyone understood the question far better than when they started.'],
          a: [
            mt('Match the question to its type', 'What do you mean by fair?=clarifying|What are we taking for granted?=probing assumptions|How do we know?=evidence|What would follow if that were true?=implications'),
            tf('The goal of a Socratic seminar is to win the argument.', false),
            ch('Most of what we know about Socrates comes from…', 'his own books|*Plato and Xenophon|newspapers'),
            ch('A good seminar participant…', 'repeats their opinion loudly|*builds on others and refers to the text|stays silent throughout'),
          ],
          t: ['Is there value in a discussion that ends without an answer?', 'Why might Socrates have preferred questions to lectures?'],
          k: ['Facilitate a 15-minute family seminar on a big question, using at least four types of Socratic question.'],
          m: ['Seminar Facilitation Portfolio', 'a short philosophical text or question, notebook', 'Prepare an opening question and eight follow-up questions of different types | Facilitate a seminar with family or friends | Record key turns in the discussion | Write a reflection on how understanding shifted'],
          q: [
            ch('"How might someone disagree?" explores…', '*viewpoints|evidence|definitions'),
            tf('Changing your mind in a seminar can be a sign of good thinking.', true),
            ch('Socrates lived in ancient…', 'Rome|*Greece|Egypt'),
          ],
          ms: ['Uses varied Socratic questions purposefully', 'Contributes to collaborative inquiry with textual reference', 'Reflects on how dialogue changed understanding'],
        }),
      ]),
    ]),
  ],
});
