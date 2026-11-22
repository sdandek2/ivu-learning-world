import { subject, S, U, L, ch, tf, od, mt } from '../dsl.ts';

export default subject({
  id: 'friendship',
  description: 'Social skills for life: sharing and taking turns, making friends, kindness, solving conflicts, including others, standing up to bullying, healthy relationships, and community belonging.',
  stages: [
    S('s4', 'Sharing, taking turns and kind words.', [
      'Share and take turns', 'Use kind words like please, thank you and sorry', 'Play alongside and with others',
    ], [
      U('sharing', 'Sharing and Taking Turns', 'Playing together means sharing.', 'Sharing toys; Taking turns; Waiting patiently; Using a timer', [
        L('my-turn-your-turn', 'My Turn, Your Turn', {
          o: ['Share and take turns during play', 'Wait patiently for a turn'],
          p: ['Can play with toys'],
          e: [
            'When two friends want the same toy, they can take turns: first one friend plays, then the other. Saying "my turn, your turn" helps.',
            'Sharing means letting others use something too. When we share, games are more fun because we can play together.',
            'Waiting is hard! Counting, singing a song or using a sand timer can help us wait for our turn.',
          ],
          v: 'share = let others use something too; turn = a chance to have a go; wait = stay until it is your time; patient = calm while waiting',
          x: ['Taking turns on the swing.', 'Sharing crayons at the drawing table.'],
          s: ['The One Red Car', 'Kiko and Rangi both wanted the shiny red car. They pulled and pulled — and it nearly broke! Momo brought a sand timer. "Kiko first until the sand runs out, then Rangi." When the sand ran out, Kiko passed the car. Then they built a ramp together and took turns racing.'],
          a: [
            ch('Two friends want the same toy. A good idea is…', '*take turns|grab it|cry loudly'),
            ch('While waiting for a turn, you can…', '*count or sing|push to the front|leave angrily'),
            tf('Sharing can make games more fun.', true),
            od('Taking turns', 'Kiko plays|the timer runs out|Kiko passes the toy|Rangi plays'),
          ],
          t: ['How do you feel when someone shares with you?', 'Is it ever okay not to share something special? What could you do instead?'],
          k: ['Play a game with a grown-up taking turns and say "my turn, your turn" each time.'],
          m: ['Turn-Taking Board Game', 'paper, a dice or spinner, counters', 'Draw a simple path game on paper | Take turns rolling and moving | Practise waiting and saying "your turn" | Clap for each other\'s good moves'],
          q: [
            ch('Taking turns means…', '*everyone gets a go|one person plays always|nobody plays'),
            tf('Waiting patiently is part of playing together.', true),
            ch('Sharing crayons is…', '*kind|unkind'),
          ],
          ms: ['Shares and takes turns with support', 'Uses turn-taking language', 'Waits with a strategy'],
        }),
      ]),
      U('kind-words', 'Kind Words and Magic Words', 'Words can make people feel good.', 'Please, thank you, sorry, excuse me; Kind words vs hurtful words; Saying sorry and making it better', [
        L('magic-words', 'The Magic Words', {
          o: ['Use please, thank you, sorry and excuse me', 'Say sorry and help make things better'],
          p: ['Can speak in short sentences'],
          e: [
            'Some words are like magic because they make people feel respected: please (when asking), thank you (when someone helps), sorry (when we hurt someone) and excuse me (to get past or interrupt).',
            'Kind words make people smile. Hurtful words, like calling names, make people sad — even if we didn\'t mean it.',
            'When we make a mistake, we say sorry and try to fix it: helping rebuild a tower we knocked over, or getting a tissue for a friend who is crying.',
          ],
          v: 'please = a polite word when asking; thank you = what we say when someone helps or gives us something; sorry = what we say when we have hurt someone; kind = caring and gentle',
          x: ['"May I have the blue crayon, please?"', '"Sorry I knocked your tower. Let\'s build it again together."'],
          s: ['The Knocked-Down Tower', 'Zuri ran past and accidentally knocked down Tara\'s tall block tower. Tara\'s eyes filled with tears. Zuri stopped. "I\'m sorry, Tara. I didn\'t look where I was going. Can I help you build it again?" Together they built an even taller tower.'],
          a: [
            mt('Match the magic word', 'asking for something=please|someone helps you=thank you|you hurt someone=sorry|you need to get past=excuse me'),
            ch('After saying sorry, you can…', '*help fix the problem|laugh|run away'),
            tf('Calling names can hurt people\'s feelings.', true),
            ch('Which is kind?', '*"Thank you for sharing!"|"Go away!"|"You\'re silly."'),
          ],
          t: ['Why do you think "please" and "thank you" matter?', 'Is saying sorry enough, or should we also do something?'],
          k: ['Use all four magic words today and tell a grown-up when you used each.'],
          m: ['Kindness Jar', 'a jar, paper slips, crayons', 'Each time someone in your family uses a magic word or does something kind, write or draw it on a slip | Put it in the jar | At the end of the week, read them all together | Celebrate your kind family'],
          q: [
            ch('When someone gives you a gift, say…', '*thank you|go away|nothing'),
            tf('Saying sorry can help make things better.', true),
            ch('To interrupt politely, say…', '*excuse me|hey you|be quiet'),
          ],
          ms: ['Uses polite words independently', 'Apologises and repairs', 'Distinguishes kind and hurtful words'],
        }),
      ]),
    ]),
    S('s5', 'Making friends, being a good friend, and playing fairly.', [
      'Join in play and invite others', 'Describe what makes a good friend', 'Play games fairly',
    ], [
      U('making-friends', 'Making Friends', 'How to start and keep friendships.', 'Saying hello and asking to join; Inviting others; Common interests', [
        L('can-i-play', 'Can I Play Too?', {
          o: ['Use friendly ways to join a game', 'Invite someone who is alone to play'],
          p: ['Shares and takes turns'],
          e: [
            'Making friends starts with small steps: smile, say hello and your name, and ask a question: "What are you building?"',
            'To join a game, watch for a moment, then ask: "Can I play too?" If they say not now, that\'s okay — try another game or ask later.',
            'Good friends also notice others who are alone and invite them: "Do you want to play with us?" That can make someone\'s whole day.',
          ],
          v: 'friend = someone you like and enjoy being with; invite = ask someone to join; join = become part of something; interest = something you like doing',
          x: ['"Hi, I\'m Ivaan. I like dinosaurs too!"', '"Would you like to play catch with us?"'],
          s: ['The Bench by the Swings', 'Every break, a new boy named Arun sat alone on the bench. Kiko noticed and remembered feeling lonely once. Kiko walked over: "Hi! I\'m Kiko. Do you like climbing?" Arun nodded. By the end of break, they were racing up the climbing frame together.'],
          a: [
            ch('A friendly way to join a game:', '*"Can I play too?"|grab the ball|stand and frown'),
            ch('Someone is sitting alone. You could…', '*invite them to play|ignore them|laugh'),
            tf('If someone says "not now", you can try another game.', true),
            od('Making a new friend', 'smile|say hello and your name|ask a question|play together'),
          ],
          t: ['What makes it hard to make a new friend?', 'How does it feel to be invited to play?'],
          k: ['Practise introducing yourself to a toy or grown-up as if meeting a new friend.'],
          m: ['Friendship Bracelet', 'coloured threads or wool, beads', 'Make a simple bracelet with a grown-up\'s help | Think of a friend or someone who might like a friend | Give it with a kind message | Notice how they feel'],
          q: [
            ch('A good way to start a conversation is to…', '*ask a question|turn away|shout'),
            tf('Inviting someone who is alone is kind.', true),
            ch('"Do you want to play with us?" is an…', '*invitation|insult|order'),
          ],
          ms: ['Uses friendly openers', 'Includes others', 'Handles "not now" calmly'],
        }),
      ]),
      U('good-friend', 'Being a Good Friend', 'What good friends do.', 'Listening; Helping; Keeping promises; Saying nice things', [
        L('good-friend-recipe', 'The Good Friend Recipe', {
          o: ['Describe qualities of a good friend', 'Show friendly behaviours'],
          p: ['Can join and invite others to play'],
          e: [
            'Good friends listen when you talk, help when you need it, and are kind even when they disagree.',
            'Good friends keep promises, tell the truth, and say nice things — like "Great drawing!" or "You can do it!"',
            'Being a good friend works both ways. To have good friends, we try to BE a good friend.',
          ],
          v: 'listen = pay attention to someone talking; promise = saying you will do something; trust = believing someone is honest and kind; loyal = sticking by a friend',
          x: ['Helping a friend pick up spilled crayons.', 'Cheering for a friend in a race.'],
          s: ['Momo\'s Friendship Soup', 'Momo made pretend "friendship soup". "A cup of listening," Momo said, stirring. "A spoon of sharing. A sprinkle of kind words. A pinch of keeping promises. And lots of laughing!" Everyone pretended to taste it. "Delicious!" they cheered.'],
          a: [
            mt('Friendly or unfriendly?', 'listening to a friend=friendly|breaking a promise=unfriendly|cheering for a friend=friendly, encouraging'),
            ch('A good friend…', '*tells the truth|tells lies|leaves you out'),
            tf('To have good friends, we try to be a good friend.', true),
            ch('Your friend falls over. A good friend…', '*helps them up|laughs|walks away'),
          ],
          t: ['What is the most important thing a friend does?', 'Can friends disagree and still be friends?'],
          k: ['Tell a grown-up about your friend and three things that make them a good friend.'],
          m: ['Friendship Recipe Card', 'card, crayons', 'Write or draw a recipe for friendship | List "ingredients" like listening and sharing | Decorate it | Give a copy to a friend'],
          q: [
            ch('Keeping a promise shows you are…', '*trustworthy|unkind|bored'),
            tf('Good friends can still disagree.', true),
            ch('Which is a kind thing to say?', '*"You can do it!"|"You\'re slow."|"Go away."'),
          ],
          ms: ['Names good-friend qualities', 'Shows friendly behaviours', 'Reflects on own friendship skills'],
        }),
      ]),
    ]),
    S('s6', 'Solving conflicts, including everyone, and understanding differences.', [
      'Solve disagreements with words', 'Include people who are different', 'Respect differences in families and cultures',
    ], [
      U('conflict', 'Solving Disagreements', 'Using words to solve problems.', 'Cool down first; I-statements; Listening to both sides; Finding a win-win', [
        L('i-statements', 'Talk It Out', {
          o: ['Use I-statements to express a problem', 'Find a fair solution with someone'],
          p: ['Manages big feelings'],
          e: [
            'Disagreements happen between friends — that\'s normal. What matters is solving them without hurting each other.',
            'Steps: cool down first. Then use an I-statement: "I feel upset when you take my ball without asking. I\'d like you to ask first." Listen to the other person\'s side too.',
            'Together, think of solutions and choose one that is fair for both — a win-win. If you\'re stuck, ask an adult to help.',
          ],
          v: 'disagreement = when people think differently; I-statement = a sentence starting with "I feel… when…"; solution = a way to fix a problem; compromise = each side gives a little',
          x: ['"I feel left out when you whisper. Can we all talk together?"', 'Taking turns choosing the game: a compromise.'],
          s: ['The Game Choice', 'Zuri wanted to play football; Kiko wanted to play tag. They started shouting. Then they stopped, took three breaths, and talked. "I feel cross because we always play football," said Kiko. "I didn\'t know," said Zuri. They agreed: tag first, then football. Both were happy.'],
          a: [
            ch('Which is an I-statement?', '*"I feel sad when you don\'t share."|"You\'re mean!"|"Go away!"'),
            od('Solving a disagreement', 'cool down|use I-statements|listen to the other side|find a fair solution'),
            tf('Disagreements between friends are normal.', true),
            ch('A compromise means…', '*each side gives a little|one person always wins|nobody plays'),
          ],
          t: ['Why is it important to cool down before talking?', 'Why might "You always…" sentences make things worse?'],
          k: ['Turn three "You…" complaints into I-statements and say them to a grown-up.'],
          m: ['Peace Table Role-Play', 'two chairs, a "talking object", scenario cards', 'Write common disagreements on cards | Sit at a "peace table" with a partner | Use the talking object and I-statements | Find a win-win and act it out'],
          q: [
            ch('First step when angry with a friend:', '*cool down|shout|push'),
            tf('Listening to the other person\'s side helps solve problems.', true),
            ch('A win-win solution is…', '*fair for both|good for only one|bad for both'),
          ],
          ms: ['Uses I-statements', 'Listens to other perspectives', 'Reaches fair solutions'],
        }),
      ]),
      U('differences', 'Everyone Belongs', 'Respecting differences and including everyone.', 'Different families, languages, abilities, appearances; Inclusion; Stereotypes', [
        L('include-everyone', 'Everyone Belongs Here', {
          o: ['Describe ways people are different and the same', 'Include others regardless of differences'],
          p: ['Shows empathy'],
          e: [
            'People are different in many ways: families (big, small, one parent, grandparents), languages, religions, food, skin colour, abilities and interests. These differences make our world rich.',
            'We are also the same in important ways: everyone wants to feel safe, loved and included.',
            'A stereotype is an unfair idea that everyone in a group is the same, like "boys don\'t dance" or "girls aren\'t good at sports". Stereotypes are wrong and can hurt. Everyone deserves to be included.',
          ],
          v: 'different = not the same; include = let someone be part of something; stereotype = an unfair idea that everyone in a group is the same; respect = treating someone as important',
          x: ['A classmate who uses a wheelchair joining a game with adapted rules.', 'Learning "hello" in a friend\'s home language.'],
          s: ['The Dance Club', 'When Ravi joined the dance club, someone said, "Boys don\'t dance!" Ravi felt embarrassed. But the teacher said, "Everyone who loves to dance belongs here." Ravi danced his best, and at the show, the whole school cheered. The next year, five more boys joined.'],
          a: [
            ch('A stereotype is…', '*an unfair idea that everyone in a group is the same|a true fact|a type of food'),
            mt('Match each to how people compare', 'languages we speak=can be different|wanting to feel safe=the same for everyone|favourite foods=vary from person to person'),
            tf('Differences can make the world richer.', true),
            ch('"Girls can\'t play cricket" is…', '*a stereotype|true|a rule'),
          ],
          t: ['Have you ever been left out because of something about you? How did it feel?', 'How can we change a game so everyone can play?'],
          k: ['Tell someone three ways you and a friend are different and three ways you are the same.'],
          m: ['"All About Us" Class Book', 'paper, crayons, photos (optional)', 'Make a page about yourself: family, languages, favourite things | Ask friends to make pages too | Put them together into a book | Read it together and notice differences and similarities'],
          q: [
            ch('Which is inclusive?', '*changing a game so a friend in a wheelchair can play|leaving them out|laughing'),
            tf('Everyone wants to feel safe and included.', true),
            ch('"Boys don\'t cry" is a…', '*stereotype|fact|promise'),
          ],
          ms: ['Describes and respects differences', 'Challenges stereotypes', 'Includes others actively'],
        }),
      ]),
    ]),
    S('s7', 'Bullying: recognising, responding and being an upstander.', [
      'Distinguish bullying from conflict', 'Respond safely to bullying', 'Act as an upstander',
    ], [
      U('bullying', 'Understanding Bullying', 'What bullying is and what it is not.', 'Bullying: repeated, deliberate, power imbalance; Types: physical, verbal, social, online; Effects', [
        L('what-is-bullying', 'What Is Bullying?', {
          o: ['Define bullying and distinguish it from ordinary conflict', 'Describe types and effects of bullying'],
          p: ['Solves disagreements'],
          e: [
            'Bullying is when someone deliberately and repeatedly hurts another person who finds it hard to defend themselves. A single argument between equals is a conflict, not bullying — though it still needs sorting out.',
            'Bullying can be physical (hitting, pushing), verbal (name-calling, threats), social (leaving someone out on purpose, spreading rumours) or online (cyberbullying: mean messages, sharing embarrassing photos).',
            'Bullying can make people feel scared, sad, lonely and anxious. It is never the target\'s fault, and it should always be reported to a trusted adult.',
          ],
          v: 'bullying = repeated, deliberate hurting of someone who finds it hard to defend themselves; target = the person being bullied; cyberbullying = bullying using phones or the internet; rumour = a story spread that may not be true',
          x: ['Being left out of every group on purpose, day after day — social bullying.', 'Two friends arguing once over a game — conflict, not bullying.'],
          s: ['Not Just Teasing', 'Every day, a group called Meena names because of her glasses and hid her tiffin. "It\'s just a joke," they said. But Meena dreaded school. When she finally told her teacher, the teacher explained that repeated, deliberate hurt is bullying — and it would stop. It did, with help from the school.'],
          a: [
            mt('Match the type of bullying', 'hitting and pushing=physical|calling names=verbal|leaving out on purpose=social|mean messages online=cyberbullying'),
            ch('Bullying is…', '*repeated and deliberate|a one-time accident|a friendly game'),
            tf('Bullying is never the target\'s fault.', true),
            ch('Two equal friends argue once. This is…', '*a conflict|bullying|cyberbullying'),
          ],
          t: ['Why do you think some people bully others?', 'Why might someone being bullied not tell anyone?'],
          k: ['Explain the difference between conflict and bullying to someone with examples.'],
          m: ['Bullying or Conflict? Card Sort', 'card, pens', 'Write 10 short scenarios | Sort them into bullying and conflict | Discuss tricky ones with family | For each, write what a person could do'],
          q: [
            ch('Spreading rumours to hurt someone is…', '*social bullying|kindness|a compliment'),
            tf('Bullying should be reported to a trusted adult.', true),
            ch('Cyberbullying happens…', '*online or on phones|only in playgrounds|never'),
          ],
          ms: ['Defines bullying accurately', 'Identifies types', 'Knows to report'],
        }),
      ]),
      U('upstander', 'Be an Upstander', 'Bystanders can help stop bullying.', 'Bystander vs upstander; Safe ways to help; Supporting the target; Reporting', [
        L('upstander-actions', 'From Bystander to Upstander', {
          o: ['Explain the role of bystanders', 'Choose safe upstander actions'],
          p: ['Defines bullying'],
          e: [
            'A bystander sees bullying but doesn\'t help. An upstander takes action to help — safely.',
            'Upstander actions: don\'t laugh or join in; say "Stop, that\'s not okay" if it\'s safe; help the target get away; be friendly to them afterwards; and tell a trusted adult.',
            'You don\'t have to be a hero or fight. Even small actions — sitting with someone who was left out — can change how they feel. Research shows bullying often stops quickly when peers step in.',
          ],
          v: 'bystander = someone who sees something happen but doesn\'t act; upstander = someone who takes safe action to help; target = the person being bullied; report = tell someone in charge',
          x: ['Walking away with the target and saying "Come play with us."', 'Telling a teacher what you saw.'],
          s: ['The Lunch Table', 'At lunch, some children told Sam he couldn\'t sit with them. Others watched in silence. Then Priya picked up her tray and sat next to Sam. "Want to sit here?" One by one, three more children joined them. The group that excluded Sam ate alone that day.'],
          a: [
            ch('An upstander…', '*takes safe action to help|joins in|laughs'),
            mt('Helpful or harmful?', 'laughing at the target=harmful|telling a teacher=helpful|sitting with the target afterwards=helpful, shows support'),
            tf('Upstanders should never put themselves in danger.', true),
            ch('A simple upstander action:', '*inviting the target to join you|filming it to share|ignoring it'),
          ],
          t: ['Why do bystanders often stay silent?', 'What makes it easier to be an upstander?'],
          k: ['Role-play three upstander responses with a family member.'],
          m: ['Upstander Pledge Poster', 'poster paper, pens', 'Write five upstander actions | Add who to tell at your school | Decorate it and sign a pledge | Ask family members to add their signatures'],
          q: [
            ch('Someone who sees bullying and does nothing is a…', '*bystander|upstander|teacher'),
            tf('Telling a trusted adult is an upstander action.', true),
            ch('Best response if it\'s unsafe to step in:', '*get an adult immediately|fight|walk away and forget'),
          ],
          ms: ['Distinguishes bystander and upstander roles', 'Chooses safe actions', 'Supports targets'],
        }),
      ]),
    ]),
    S('s9', 'Healthy relationships, peer influence and communication skills.', [
      'Identify features of healthy and unhealthy relationships', 'Manage peer influence', 'Communicate assertively',
    ], [
      U('healthy-relationships', 'Healthy Relationships', 'Respect, trust and boundaries in friendships.', 'Healthy signs: respect, trust, honesty, support; Warning signs: control, pressure, put-downs; Ending a friendship kindly', [
        L('green-red-flags', 'Green Flags and Red Flags', {
          o: ['Identify healthy and unhealthy relationship behaviours', 'Know how to respond to unhealthy patterns'],
          p: ['Understands consent and boundaries'],
          e: [
            'Healthy friendships have "green flags": respect for each other\'s choices, trust, honesty, support, fun, and freedom to have other friends.',
            '"Red flags" include controlling behaviour (telling you who you can talk to), constant put-downs, pressure to do things you don\'t want to, jealousy that limits you, and threats.',
            'Friendships change as we grow; sometimes we drift apart, and that\'s okay. If a relationship feels controlling or harmful, talk to a trusted adult. You deserve respect.',
          ],
          v: 'healthy relationship = one based on respect, trust and support; red flag = a warning sign of an unhealthy pattern; controlling = trying to decide what someone else does; respect = valuing someone\'s feelings and choices',
          x: ['A friend who supports you trying a new club: green flag.', 'A friend who says "If you talk to her, I won\'t be your friend": red flag.'],
          s: ['The Friend Who Decided Everything', 'Neha\'s best friend chose what they played, who they sat with, and got angry if Neha spent time with others. Neha felt anxious all the time. Her aunt asked, "Does this friendship feel good?" Neha realised it didn\'t. With support, she set boundaries — and made new friends too.'],
          a: [
            mt('Green flag or red flag?', 'supports your choices=green flag|tells you who you can\'t talk to=red flag|puts you down often=red flag, hurtful'),
            ch('In a healthy friendship, you can…', '*have other friends too|only see one person|never disagree'),
            tf('Friendships can change, and that\'s okay.', true),
            ch('If a friendship feels controlling, you should…', '*talk to a trusted adult|keep quiet forever|try harder to please'),
          ],
          t: ['Why might it be hard to notice red flags in a close friendship?', 'How can you end a friendship kindly?'],
          k: ['Describe three green flags you value in a friend.'],
          m: ['Relationship Flags Scenarios', 'card, pens', 'Write 10 short friendship scenarios | Sort them into green and red flags | Discuss what someone could do about each red flag | Make a personal "what I value in friends" list'],
          q: [
            ch('Which is a red flag?', '*threatening to end the friendship if you see others|celebrating your success|listening to you'),
            tf('Everyone deserves respect in relationships.', true),
            ch('A green flag is…', '*honesty and support|constant criticism|pressure'),
          ],
          ms: ['Distinguishes healthy and unhealthy behaviours', 'Plans responses to red flags', 'Values respectful relationships'],
        }),
      ]),
      U('assertive', 'Assertive Communication', 'Standing up for yourself respectfully.', 'Passive, aggressive, assertive; Saying no; Peer pressure; Online communication', [
        L('assertiveness', 'Passive, Aggressive or Assertive?', {
          o: ['Distinguish passive, aggressive and assertive communication', 'Respond assertively to peer pressure'],
          p: ['Uses I-statements'],
          e: [
            'Passive communication means not expressing your needs — going along to avoid conflict. Aggressive communication means expressing needs in a way that hurts or disrespects others.',
            'Assertive communication is the healthy middle: clearly and calmly expressing your feelings and needs while respecting others. "I don\'t want to skip class. I\'ll see you at lunch."',
            'Assertive body language: steady voice, eye contact, calm posture. Online, the same rules apply — pause before posting and avoid group pile-ons.',
          ],
          v: 'passive = not standing up for your needs; aggressive = forceful and disrespectful; assertive = clear and respectful; peer pressure = influence from others your age',
          x: ['Passive: "Umm, okay, I guess I\'ll do it." Aggressive: "You\'re an idiot for asking!" Assertive: "No thanks, that\'s not for me."', 'Not forwarding a mean meme in a group chat.'],
          s: ['The Dare', 'At a sleepover, friends dared Rohan to prank-call a neighbour. He felt pressure, but said calmly, "Nah, I\'m not doing that. Let\'s play a game instead." Someone groaned, but another friend said, "Yeah, I didn\'t really want to either." The pressure vanished.'],
          a: [
            mt('Match the style', '"Umm, I guess so…" (going along)=passive|"Shut up, that\'s dumb!"=aggressive|"No thanks, I\'d rather not."=assertive'),
            ch('Assertive communication is…', '*clear and respectful|rude|silent'),
            tf('Often others feel the same pressure but don\'t say so.', true),
            ch('Assertive body language includes…', '*a steady voice and calm posture|shouting and pointing|looking at the floor and mumbling'),
          ],
          t: ['Why can being assertive feel difficult?', 'Is it ever appropriate to be passive? When?'],
          k: ['Practise saying no assertively to three peer-pressure scenarios.'],
          m: ['Assertiveness Practice Scripts', 'paper, pens, a partner', 'Write five pressure scenarios relevant to you | Write passive, aggressive and assertive responses for each | Role-play the assertive ones | Reflect on which felt most natural'],
          q: [
            ch('"I feel uncomfortable with that, so I\'m going to say no." is…', '*assertive|aggressive|passive'),
            tf('Assertive means respecting both yourself and others.', true),
            ch('Before posting something online when angry, you should…', '*pause and think|post immediately|share it widely'),
          ],
          ms: ['Identifies communication styles', 'Responds assertively', 'Applies skills online'],
        }),
      ]),
    ]),
    S('s12', 'Belonging, community and the psychology of groups.', [
      'Analyse group dynamics and conformity', 'Explore belonging and identity', 'Build inclusive communities',
    ], [
      U('groups', 'The Psychology of Groups', 'Why groups influence us so strongly.', 'Conformity: Asch experiments; In-groups and out-groups; Groupthink', [
        L('conformity', 'Why We Go Along', {
          o: ['Explain conformity and in-group bias', 'Evaluate how group pressure affects decisions'],
          p: ['Communicates assertively'],
          e: [
            'In the 1950s, Solomon Asch asked people to judge which of several lines matched a reference line. When actors in the group deliberately chose the wrong answer, many real participants went along at least some of the time — showing the power of conformity.',
            'People tend to favour their own group (in-group) and judge outsiders (out-group) more harshly, even when groups are formed randomly. This can fuel prejudice.',
            'Groupthink happens when a group values agreement over good decisions, silencing doubts. Encouraging dissent, a "devil\'s advocate", and diverse members helps groups decide better.',
          ],
          c: [['interpretation', 'Later researchers have discussed how culture and context influence conformity rates; Asch also found that a single dissenter greatly reduced conformity.']],
          v: 'conformity = changing behaviour to match a group; in-group = a group you belong to; groupthink = poor decisions from valuing agreement over critical thinking; dissent = disagreement with the majority',
          x: ['Laughing at a joke you don\'t find funny because everyone else is.', 'A team ignoring warning signs to avoid conflict.'],
          s: ['One Voice Is Enough', 'In Asch\'s experiments, when just one other person in the room gave the correct answer, participants were far more likely to trust their own eyes. A single dissenting voice broke the spell. Sometimes being that one voice helps others speak up too.'],
          a: [
            mt('Match the concept', 'conformity=changing to match a group|in-group bias=favouring your own group|groupthink=agreement over good decisions'),
            ch('In Asch\'s studies, conformity dropped when…', '*one other person disagreed with the group|the lines got longer|people were tired'),
            tf('Groups can make poor decisions when doubts are silenced.', true),
            ch('A way to avoid groupthink:', '*invite dissent and diverse views|silence critics|decide quickly without discussion'),
          ],
          t: ['When is conformity helpful? When is it harmful?', 'How can you encourage dissent in a friendly way?'],
          k: ['Lead a decision-making discussion where you deliberately invite a devil\'s advocate.'],
          m: ['Conformity Observation Study', 'a notebook, ethical approach (no deception that harms anyone)', 'Observe conformity in everyday life (fashion, opinions in group chats) for two weeks | Record examples | Analyse causes and effects | Write a reflective report with recommendations'],
          q: [
            ch('Favouring your own group is…', '*in-group bias|conformity always|groupthink'),
            tf('A single dissenter can reduce conformity.', true),
            ch('Groupthink values…', '*agreement over good decisions|critical thinking|diversity'),
          ],
          ms: ['Explains conformity research', 'Analyses group bias', 'Applies strategies for better group decisions'],
        }),
      ]),
      U('community', 'Belonging and Community', 'Building communities where everyone belongs.', 'Identity and belonging; Social capital; Volunteering and service (seva)', [
        L('belonging', 'Building Belonging', {
          o: ['Explain why belonging matters for wellbeing', 'Design an initiative that builds inclusion'],
          p: ['Understands group psychology'],
          e: [
            'Belonging — feeling accepted and valued — is a basic human need. Research links strong social connection to better mental and physical health.',
            'People hold many identities: family, region, language, religion, interests. Healthy communities make room for multiple identities rather than forcing everyone to be the same.',
            'Service strengthens communities. Many traditions value service: seva in Sikhism and Hinduism, sadaqah in Islam, dana in Buddhism, and volunteering in secular life. Inclusive initiatives — buddy systems, clubs for all, accessible events — help everyone belong.',
          ],
          c: [['belief', 'Many religious traditions teach service to others as a spiritual practice, such as seva (selfless service) in Sikhism, expressed in community kitchens (langar).']],
          v: 'belonging = feeling accepted and valued in a group; identity = who you are and the groups you feel part of; seva = selfless service; social capital = networks of relationships that help a community work',
          x: ['A school buddy system for new students.', 'Neighbours organising a clean-up and shared meal.'],
          s: ['The Buddy Bench', 'A student noticed that new and quiet students often ate alone. She proposed a "buddy bench": anyone sitting there was saying, "I\'d like company." Students took turns checking the bench. Within months, the school\'s survey showed more students felt they belonged.'],
          a: [
            ch('Belonging is linked to…', '*better wellbeing|worse health|nothing'),
            mt('Match the tradition to service', 'seva=selfless service|langar=free community kitchen|volunteering=giving time to help others'),
            tf('People can hold many identities at once.', true),
            ch('An inclusive initiative:', '*a buddy system for new students|a club with a secret invite list|banning newcomers'),
          ],
          t: ['What makes you feel you belong somewhere?', 'How can a community welcome newcomers while keeping its traditions?'],
          k: ['Pitch an inclusion initiative to your school or residential society.'],
          m: ['Belonging Initiative', 'survey forms, a small team, a plan', 'Survey peers about belonging | Identify a group that may feel excluded | Design and run a small initiative for a month | Resurvey and report the results', "Ask permission before surveying peers, make participation voluntary and anonymous, and avoid sensitive questions. Work with a trusted adult and report only group-level results."],
          q: [
            ch('Selfless service in Sikhism is…', '*seva|groupthink|conformity'),
            tf('Strong social connection is linked to better health.', true),
            ch('Healthy communities…', '*make room for many identities|force everyone to be the same|exclude newcomers'),
          ],
          ms: ['Explains importance of belonging', 'Respects multiple identities', 'Designs and evaluates inclusion initiatives'],
        }),
      ]),
    ]),
  ],
});
