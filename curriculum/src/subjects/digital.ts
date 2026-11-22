import { subject, S, U, L, ch, tf, od, mt } from '../dsl.ts';

export default subject({
  id: 'digital',
  description: 'Digital life and online safety from healthy screen habits to data rights: balancing screen time, asking a trusted adult, keeping personal information private, kindness online, how computers and the internet work, strong passwords, digital footprints, spotting misinformation, cybersecurity, recommendation algorithms, AI literacy, and privacy law and digital citizenship.',
  stages: [
    S('s4', 'Healthy screen habits and asking a grown-up.', [
      'Balance screen time with other play', 'Know to ask a trusted adult before going online', 'Tell a grown-up if something online feels wrong',
    ], [
      U('screen-balance', 'Screens and Balance', 'Healthy habits.', 'Screen time; Other play; Screens off before bed', [
        L('balance', 'Screen Time and Green Time', {
          o: ['Name healthy activities to balance screen time', 'Follow family rules about screens'],
          p: ['Knows tablets, phones and TVs'],
          e: [
            'Screens like tablets, phones and TVs can be fun and help us learn. But our bodies and brains also need running, building, drawing, reading and playing with people.',
            'Health experts suggest young children have only a little screen time each day, with a grown-up, and lots of active play and sleep.',
            'Screens off before bedtime helps us sleep well, because bright screens can make it harder to feel sleepy.',
          ],
          v: 'screen = the glass part of a tablet, phone or TV; balance = a fair mix of different things; habit = something you do regularly; rule = something we agree to follow',
          x: ['Playing outside after watching a show.', 'Reading a bedtime story instead of using a tablet.'],
          s: ['The Timer Game', 'Ivaan loved his tablet games. One day, Mama set a sand timer. "When the sand runs out, we switch to green time." When the last grain fell, Ivaan groaned — then raced outside to look for snails. He found three! "Green time is good too," he admitted, holding up a snail.'],
          a: [
            ch('Which helps balance screen time?', '*playing outside|more screens|staying up late'),
            ch('Before bedtime, screens should be…', '*switched off|very bright|in your bed'),
            tf('Our bodies need active play.', true),
            mt('Match the activity', 'running=active play|reading a book=quiet time|building blocks=making'),
          ],
          t: ['What is your favourite non-screen activity?', 'How do you feel after a long time on a screen?'],
          k: ['Tell a grown-up your favourite screen-free activity.'],
          m: ['Green Time Jar', 'a jar, paper slips, crayons', 'Draw screen-free activities on slips | Put them in the jar | After screen time, pick a slip | Do the activity together'],
          q: [
            ch('Something you do regularly is a…', '*habit|hat|hill'),
            tf('Screens can make it harder to fall asleep.', true),
            ch('A fair mix of different things is…', '*balance|boredom|bedtime'),
          ],
          ms: ['Names balancing activities', 'Follows screen rules', 'Connects screens and sleep'],
        }),
      ]),
      U('ask-adult', 'Ask a Grown-Up', 'Staying safe online.', 'Trusted adults; Pop-ups and strangers; Telling when something feels wrong', [
        L('ask', 'Stop, Think, Ask', {
          o: ['Name trusted adults to ask before going online', 'Tell a grown-up if something online feels scary or strange'],
          p: ['Knows family screen rules'],
          e: [
            'Before going online, clicking on things or downloading games, always ask a trusted grown-up — like Mama, Papa, a grandparent or a teacher.',
            'Sometimes pop-ups appear asking you to click or buy something. Don\'t click — show a grown-up.',
            'If you see something that makes you feel scared, sad or confused, or someone you don\'t know talks to you, stop, close the screen and tell a grown-up. You will never be in trouble for telling.',
          ],
          v: 'online = connected to the internet; trusted adult = a grown-up who keeps you safe; pop-up = a box that suddenly appears on a screen; stranger = someone you don\'t know',
          x: ['Asking before downloading a new app.', 'Showing Papa a pop-up saying "You won a prize!"'],
          s: ['The Flashing Prize', 'While playing a game, a big flashing box appeared: "YOU WON! CLICK HERE!" Ivaan\'s finger hovered over it. Then he remembered: stop, think, ask. He carried the tablet to Papa. "Good thinking," said Papa, closing it. "Those boxes often aren\'t real prizes. You did exactly the right thing."'],
          a: [
            od('Put the steps in order', 'Stop|Think|Ask a grown-up'),
            ch('If a pop-up says "You won!", you should…', '*show a grown-up|click it quickly|type your name'),
            tf('You will never be in trouble for telling a grown-up.', true),
            ch('If someone you don\'t know talks to you online, you…', '*tell a grown-up|chat with them|send a photo'),
          ],
          t: ['Who are your trusted grown-ups?', 'Why might a pop-up be tricky?'],
          k: ['Name two trusted adults and say what you would tell them.'],
          m: ['Stop-Think-Ask Hand', 'paper, crayons', 'Trace your hand | Write Stop, Think, Ask on three fingers | Draw your trusted adults on the other two | Keep it near the tablet'],
          q: [
            ch('Connected to the internet is…', '*online|offline|outside'),
            tf('Always ask before downloading games.', true),
            ch('A box that suddenly appears is a…', '*pop-up|pancake|puppet'),
          ],
          ms: ['Names trusted adults', 'Uses stop-think-ask', 'Reports uncomfortable content'],
        }),
      ]),
    ]),
    S('s5', 'Keeping information private and being kind online.', [
      'Know what personal information is', 'Keep personal information private', 'Be kind and respectful online',
    ], [
      U('private-info', 'Private Information', 'What to keep secret.', 'Personal information; Safe usernames; Photos', [
        L('personal-info', 'Keep It Private', {
          o: ['Identify personal information', 'Explain why personal information should stay private online'],
          p: ['Knows to ask a grown-up'],
          e: [
            'Personal information is information about you: your full name, address, school, phone number, birthday, passwords and photos.',
            'We keep personal information private online, like keeping a treasure locked in a box. Only share it with a trusted grown-up\'s permission.',
            'In games, use a nickname (username) that doesn\'t show your real name. Never share photos of yourself online without asking a grown-up.',
          ],
          v: 'personal information = details about you; private = kept secret or only shared with trusted people; username = a name you use online; permission = being allowed',
          x: ['Using "SpaceTiger7" instead of your real name.', 'Not telling a game chat which school you go to.'],
          s: ['The Treasure Box', 'Zuri\'s teacher gave each child a paper treasure box. "Put inside what you keep private online." Zuri drew her address, her school, her phone number and her password. On the outside she drew things that are okay to share, like her favourite colour. "Private things stay inside," she said, closing the lid.'],
          a: [
            ch('Which is personal information?', '*your home address|your favourite colour|the name of a famous story'),
            ch('A safe username is…', '*a nickname like SpaceTiger7|your full name|your address'),
            tf('We should ask a grown-up before sharing photos online.', true),
            mt('Match: private or okay to share?', 'phone number=keep private|favourite animal=okay to share|password=keep private only to trusted adults'),
          ],
          t: ['Why should strangers not know where you live?', 'What makes a good username?'],
          k: ['Tell a grown-up three things you keep private online.'],
          m: ['Private Treasure Box', 'a small box or folded paper, crayons', 'Draw private information inside the box | Draw okay-to-share things outside | Invent a safe username | Share the outside with family'],
          q: [
            ch('Being allowed is…', '*permission|privacy|password'),
            tf('Your school name is personal information.', true),
            ch('A name you use online is a…', '*username|nickname only at home|surname'),
          ],
          ms: ['Identifies personal information', 'Keeps information private', 'Creates safe usernames'],
        }),
      ]),
      U('kindness-online', 'Kind Online', 'Being a good digital friend.', 'Kind words; Unkind messages; Telling about bullying', [
        L('kind-online', 'Be Kind Online', {
          o: ['Explain how to be kind online', 'Know what to do about unkind messages'],
          p: ['Knows personal information'],
          e: [
            'There are real people behind every screen with real feelings. We should be as kind online as we are face to face.',
            'Before sending a message, ask: Is it true? Is it kind? Is it helpful? If not, don\'t send it.',
            'If someone sends unkind messages again and again, that is cyberbullying. Don\'t reply — tell a trusted adult, who can help block and report it.',
          ],
          v: 'kind = gentle and caring; cyberbullying = being unkind to someone online again and again; block = to stop someone from contacting you; report = to tell someone in charge',
          x: ['Writing "Great drawing!" on a friend\'s picture.', 'Telling a teacher about mean messages.'],
          s: ['The Message That Didn\'t Get Sent', 'Kiko was angry that his friend won the online game. He typed, "You cheated, loser!" His finger hovered over send. Then he remembered: true, kind, helpful? It wasn\'t any of them. He deleted it and wrote, "Good game! Rematch tomorrow?" His friend replied with a smiling face.'],
          a: [
            ch('Before sending a message, ask if it is…', '*true, kind and helpful|long and loud|secret'),
            ch('If someone keeps sending mean messages, you should…', '*tell a trusted adult|send mean messages back|keep it secret'),
            tf('Real people with feelings are behind every screen.', true),
            ch('Stopping someone from contacting you is…', '*blocking|baking|bouncing'),
          ],
          t: ['How would you feel if someone was unkind to you online?', 'How can you help a friend who is being bullied?'],
          k: ['Show a grown-up a kind message you could send to a friend.'],
          m: ['Kindness Comment Cards', 'card, crayons', 'Write five kind comments you could leave online | Decorate each card | Practise using the true-kind-helpful test | Send one kind message (with a grown-up)'],
          q: [
            ch('Being unkind online again and again is…', '*cyberbullying|cycling|cooking'),
            tf('You should not reply to bullies; tell an adult instead.', true),
            ch('To tell someone in charge is to…', '*report|repeat|relax'),
          ],
          ms: ['Applies the true-kind-helpful test', 'Responds safely to unkindness', 'Supports others'],
        }),
      ]),
    ]),
    S('s6', 'How computers and the internet work; passwords.', [
      'Name parts of a computer', 'Explain simply how the internet connects devices', 'Create and protect strong passwords',
    ], [
      U('how-it-works', 'How It Works', 'Computers and the internet.', 'Input, processing, output; Data and storage; The internet as a network', [
        L('internet-basics', 'Inside the Internet', {
          o: ['Describe input, processing, output and storage', 'Explain that the internet is a network of connected computers'],
          p: ['Can use a device with help'],
          e: [
            'Computers take input (keyboard, mouse, touchscreen, microphone), process it (with the processor, the "brain"), store it (memory and storage) and give output (screen, speakers, printer).',
            'The internet is a giant network connecting billions of devices around the world. Information travels in small pieces called packets through cables — including undersea cables — and wireless signals.',
            'Websites are stored on powerful computers called servers. When you visit a website, your device requests information from a server, and the server sends it back.',
          ],
          v: 'input = information going into a computer; output = information coming out; network = connected computers; server = a computer that stores and sends websites',
          x: ['Typing (input) and seeing words on screen (output).', 'Undersea cables connecting India to other countries.'],
          s: ['The Packet\'s Journey', 'When Zuri sent a photo to her grandmother in London, the photo was split into thousands of tiny packets. They raced through Wi-Fi, along cables, under the ocean and through servers, each finding its own route. In London, they joined back together in the right order. Grandma saw the photo in seconds. "Magic!" she said. "Networks," said Zuri.'],
          a: [
            mt('Match the device to its job', 'keyboard=input|screen=output|processor=processing'),
            ch('The internet is…', '*a network of connected computers|one big computer|a single cable'),
            tf('Information travels in small pieces called packets.', true),
            ch('A computer that stores and sends websites is a…', '*server|scanner|speaker'),
          ],
          t: ['How might data cross an ocean?', 'What happens when you type a website address?'],
          k: ['Explain how a message travels across the internet.'],
          m: ['Packet Relay Game', 'paper, a message, a group of people', 'Write a message and cut it into numbered pieces | Pass pieces by different routes around the room | Reassemble the message at the end | Discuss how the internet does this'],
          q: [
            ch('Connected computers form a…', '*network|notebook|nest'),
            tf('A microphone is an input device.', true),
            ch('Small pieces of data are…', '*packets|pixels only|parcels'),
          ],
          ms: ['Describes computer functions', 'Explains internet basics', 'Describes data transmission'],
        }),
      ]),
      U('passwords', 'Strong Passwords', 'Locking your accounts.', 'What makes a strong password; Passphrases; Never share', [
        L('passwords', 'Make a Strong Password', {
          o: ['Explain what makes a password strong', 'Create a memorable passphrase'],
          p: ['Knows private information'],
          e: [
            'A password is like a key to your account. A weak password like "123456" or "password" can be guessed in seconds.',
            'Strong passwords are long and hard to guess. A good method is a passphrase — several random words joined together, like "PurpleMango!Rocket42". Longer is usually stronger.',
            'Never share your password except with a trusted parent. Use different passwords for different accounts, so if one is found, the others stay safe.',
          ],
          v: 'password = a secret word or phrase to open an account; passphrase = a password made of several words; account = your personal space on an app or website; hacker = a person who breaks into computer systems',
          x: ['"TigerCloudBanana!7" as a passphrase.', '"ivaan2020" as a weak password.'],
          s: ['The Guessing Robot', 'Kiko\'s computer teacher showed a demo: a program tried common passwords. "123456" — cracked instantly! "kiko2015" — cracked in seconds. Then Kiko typed "JumpingRiver!Moon88". The program kept trying... and trying. "That would take a very long time," the teacher smiled. "Long and random wins."'],
          a: [
            ch('Which is the strongest password?', '*JumpingRiver!Moon88|123456|password'),
            ch('A password made of several words is a…', '*passphrase|username|nickname'),
            tf('Use different passwords for different accounts.', true),
            ch('Who can you share your password with?', '*a trusted parent|your best friend|everyone'),
          ],
          t: ['Why is your name a weak password?', 'How could you remember a long passphrase?'],
          k: ['Explain to a grown-up how to make a strong passphrase (without telling your real one).'],
          m: ['Passphrase Maker', 'dice or a word list, paper', 'Pick four random words using dice or a list | Add a symbol and numbers | Practise remembering it with a silly picture | Never use this demo one for real'],
          q: [
            ch('A person who breaks into systems is a…', '*hacker|helper|hiker'),
            tf('Longer passwords are usually stronger.', true),
            ch('Your personal space on an app is an…', '*account|address|alarm'),
          ],
          ms: ['Identifies strong passwords', 'Creates passphrases', 'Protects passwords'],
        }),
      ]),
    ]),
    S('s7', 'Digital footprints, privacy settings and spotting misinformation.', [
      'Explain digital footprints', 'Use privacy settings thoughtfully', 'Check whether online information is reliable',
    ], [
      U('footprint', 'Digital Footprints', 'What you leave behind.', 'Everything leaves a trace; Privacy settings; Thinking before posting', [
        L('footprint', 'Footprints That Don\'t Wash Away', {
          o: ['Explain what a digital footprint is and why it lasts', 'Use privacy settings and think before posting'],
          p: ['Knows personal information and passwords'],
          e: [
            'A digital footprint is the trail of information you leave online: posts, photos, comments, searches and even the websites you visit.',
            'Things posted online can be copied, screenshotted and shared, so they may last for years — even if you delete them. Future schools or employers may see them.',
            'Privacy settings control who can see what you share. Before posting, ask: Would I be okay with my grandparent, teacher or a future employer seeing this?',
          ],
          v: 'digital footprint = the trail of information you leave online; screenshot = a picture of what is on a screen; privacy settings = controls for who sees your information; permanent = lasting forever',
          x: ['A silly comment screenshotted by others.', 'Setting an account so only friends can see posts.'],
          s: ['The Screenshot', 'Meera posted an angry comment about a classmate, then deleted it five minutes later. But someone had already screenshotted it. The next day, it was being shared around the school. Meera apologised, and her classmate forgave her — but she learned that online, "delete" doesn\'t always mean gone.'],
          a: [
            ch('A digital footprint is…', '*the trail of information you leave online|a muddy shoe print|a type of game'),
            ch('Deleting a post means…', '*it may still exist through screenshots or copies|it is gone forever|no one ever saw it'),
            tf('Privacy settings control who can see your information.', true),
            ch('Before posting, ask if you\'d be okay with…', '*a grandparent or teacher seeing it|nobody ever seeing it|aliens'),
          ],
          t: ['What do you want your digital footprint to say about you?', 'Should parents post photos of children online without asking them?'],
          k: ['Explain digital footprints with an example.'],
          m: ['Footprint Audit', 'a notebook, a trusted adult', 'With an adult, search your name online | List what appears | Review privacy settings on any accounts | Write three personal rules for posting'],
          q: [
            ch('A picture of a screen is a…', '*screenshot|sunshade|snapshot only of nature'),
            tf('Online posts can last for years.', true),
            ch('Lasting forever is…', '*permanent|private|polite'),
          ],
          ms: ['Explains digital footprints', 'Uses privacy settings', 'Thinks before posting'],
        }),
      ]),
      U('misinformation', 'True or False Online', 'Checking information.', 'Misinformation and rumours; Checking sources; Fake images', [
        L('fact-check', 'Is It True?', {
          o: ['Explain misinformation and why it spreads', 'Use simple checks to judge online information'],
          p: ['Knows digital footprints'],
          e: [
            'Misinformation is false or misleading information. It spreads quickly because surprising or emotional stories get shared before people check them. Rumours forwarded in messaging groups have sometimes caused real harm.',
            'To check information: Who made it? Is it from a reliable source (like a well-known news organisation, government or scientific body)? Do other reliable sources say the same? When was it published?',
            'Images and videos can be edited or taken out of context. A reverse image search can show where a picture first appeared. When unsure, don\'t forward.',
          ],
          v: 'misinformation = false or misleading information; source = where information comes from; reliable = can be trusted; context = the situation around something',
          x: ['An old flood photo shared as if it were new.', 'A "miracle cure" message with no evidence.'],
          s: ['The Forwarded Message', 'Grandpa received a message: "Drinking hot water every 15 minutes cures all illnesses! Forward to 10 people!" Ivaan\'s sister asked, "Who wrote it?" No name. She checked a health ministry website and a trusted news site — nothing supported it. "Let\'s not forward it," Grandpa agreed. "Good detective work."'],
          a: [
            ch('Misinformation is…', '*false or misleading information|always true news|a type of computer'),
            od('Put the checking steps in order', 'Ask who made it|Check if the source is reliable|Compare with other sources|Decide whether to share'),
            tf('Old photos can be shared out of context.', true),
            ch('When unsure about a message, you should…', '*not forward it|forward it to everyone|change it'),
          ],
          t: ['Why do false stories spread so fast?', 'What would you say to a relative who forwards false messages?'],
          k: ['Show how you checked whether a claim was true.'],
          m: ['Fact-Check Challenge', 'a trusted adult, a list of claims, reliable websites', 'Choose three claims (some true, some false) | Check each using reliable sources | Record your evidence | Present your verdicts'],
          q: [
            ch('Where information comes from is its…', '*source|sauce|side'),
            tf('Reverse image search can show where a picture first appeared.', true),
            ch('Can be trusted means…', '*reliable|random|rapid'),
          ],
          ms: ['Explains misinformation', 'Applies source checks', 'Shares responsibly'],
        }),
      ]),
    ]),
    S('s9', 'Cybersecurity, algorithms and media literacy.', [
      'Recognise phishing and scams', 'Use multi-factor authentication', 'Analyse how recommendation algorithms shape what we see',
    ], [
      U('cybersecurity', 'Cybersecurity', 'Protecting yourself.', 'Phishing and scams; Multi-factor authentication; Updates and backups', [
        L('cybersecurity', 'Spot the Phish', {
          o: ['Identify signs of phishing and online scams', 'Explain multi-factor authentication, updates and backups'],
          p: ['Knows strong passwords'],
          e: [
            'Phishing is when criminals pretend to be trusted organisations to trick you into giving passwords, OTPs or money. Signs include urgency ("Act now!"), unexpected prizes, spelling mistakes, strange sender addresses and links to look-alike websites.',
            'Never share an OTP (one-time password) with anyone — banks will never ask for it. Multi-factor authentication (MFA) adds a second step, like a code on your phone, so a stolen password alone isn\'t enough.',
            'Install software updates, which fix security holes, and back up important files. In India, cybercrime can be reported at cybercrime.gov.in or by calling the helpline 1930.',
          ],
          v: 'phishing = tricking people into revealing information by pretending to be trustworthy; OTP = a one-time password; multi-factor authentication = using two or more ways to prove identity; backup = a copy of data kept safe',
          x: ['An SMS saying your bank account will be blocked unless you click a link.', 'A login code sent to your phone.'],
          s: ['The Urgent Message', 'Meera\'s aunt got a call: "This is your bank. Your card is blocked. Tell us the OTP we just sent to fix it." Meera remembered her cyber safety class. "Banks never ask for OTPs!" Her aunt hung up and called the bank directly using the number on her card. It had been a scam — and they had stopped it.'],
          a: [
            ch('Should you share an OTP with someone claiming to be from your bank?', '*never|yes, quickly|only on weekends'),
            mt('Match the sign to the scam trick', 'Act now!=urgency|You won a prize!=too good to be true|bannk-secure.com=look-alike website'),
            tf('MFA means a stolen password alone may not be enough.', true),
            ch('India\'s cybercrime helpline number is…', '*1930|100|108'),
          ],
          t: ['Why do scammers create urgency?', 'How can you help older relatives stay safe from scams?'],
          k: ['Teach a family member how to spot a phishing message.'],
          m: ['Scam-Spotting Guide', 'examples of real phishing messages (from official awareness sites)', 'Collect three examples of phishing from awareness websites | Annotate the warning signs | Make a one-page guide for your family | Explain it to them'],
          q: [
            ch('A copy of data kept safe is a…', '*backup|bug|browser'),
            tf('Software updates can fix security holes.', true),
            ch('Tricking people by pretending to be trustworthy is…', '*phishing|fishing for fish|filing'),
          ],
          ms: ['Identifies phishing signs', 'Explains MFA and updates', 'Knows how to report cybercrime'],
        }),
      ]),
      U('algorithms-media', 'Algorithms and Media Literacy', 'Who decides what you see?', 'Recommendation algorithms; Filter bubbles; Persuasive design', [
        L('feeds', 'Why Your Feed Looks Like That', {
          o: ['Explain how recommendation algorithms work', 'Evaluate filter bubbles and persuasive design'],
          p: ['Knows misinformation checks'],
          e: [
            'Apps use recommendation algorithms to choose what you see. They track what you watch, like, share and how long you look, then show more of what keeps you engaged.',
            'This can create filter bubbles or echo chambers, where you mostly see views you already agree with. Content that provokes strong emotions often spreads furthest.',
            'Persuasive design — infinite scroll, autoplay, notifications, streaks — is built to capture attention, because many platforms earn money from advertising time. Knowing this helps you take control: turn off autoplay, limit notifications and seek out different viewpoints.',
          ],
          v: 'algorithm = rules a computer follows to make decisions; filter bubble = seeing mostly content that matches your existing views; engagement = how much people interact with content; persuasive design = design that nudges behaviour',
          x: ['Autoplay starting the next video automatically.', 'A streak that encourages daily logins.'],
          s: ['The Cricket Feed', 'Kiko watched three cricket videos one evening. The next day, his feed was all cricket — highlights, arguments, angry rants about umpires. He realised he hadn\'t seen a single science video, which he used to love. He searched for some deliberately and turned off autoplay. "My feed, my choice," he decided.'],
          a: [
            ch('Recommendation algorithms show you more of…', '*what keeps you engaged|random things only|nothing'),
            mt('Match the design feature', 'autoplay=next video starts automatically|streak=rewards daily use|infinite scroll=content never ends'),
            tf('Filter bubbles can limit the views you see.', true),
            ch('Many platforms earn money from…', '*advertising|selling sweets|nothing'),
          ],
          t: ['Is it a problem if your feed only shows what you like?', 'Who should be responsible for healthy design — users, companies or governments?'],
          k: ['Present how a recommendation algorithm might shape a teenager\'s views.'],
          m: ['Feed Experiment', 'a notebook (observe a family-approved video site with an adult)', 'Note the first 10 recommendations | Watch videos on a new topic for a few days | Note how recommendations change | Write a reflection on algorithmic influence'],
          q: [
            ch('Design that nudges behaviour is…', '*persuasive design|graphic design|interior design'),
            tf('Emotional content often spreads further.', true),
            ch('How much people interact with content is…', '*engagement|encryption|entry'),
          ],
          ms: ['Explains recommendation systems', 'Evaluates filter bubbles', 'Takes control of digital habits'],
        }),
      ]),
    ]),
    S('s12', 'Data rights, AI literacy and digital citizenship.', [
      'Understand data protection rights and laws', 'Evaluate AI systems critically', 'Act as a responsible digital citizen',
    ], [
      U('data-rights', 'Data and Privacy Rights', 'Who owns your data?', 'Data collection and profiling; India\'s DPDP Act; Global privacy laws', [
        L('data-rights', 'Your Data, Your Rights', {
          o: ['Explain how personal data is collected and used', 'Describe key rights under data protection laws'],
          p: ['Knows algorithms and cybersecurity'],
          e: [
            'Companies collect data — location, contacts, browsing, purchases — to personalise services and target advertising. Combining data can create detailed profiles, raising concerns about surveillance, discrimination and data breaches.',
            'India\'s Digital Personal Data Protection Act, 2023 requires organisations to obtain consent for processing personal data for specified purposes, gives individuals rights to access, correct and erase their data, and requires verifiable parental consent for processing children\'s data. The European Union\'s GDPR (2018) is another influential law.',
            'In 2017, the Supreme Court of India, in the Puttaswamy judgment, declared privacy a fundamental right under the Constitution.',
          ],
          v: 'personal data = information that identifies a person; consent = permission given knowingly; data breach = unauthorised access to data; profiling = analysing data to predict behaviour',
          x: ['An app asking permission to access your location.', 'A breach exposing millions of passwords.'],
          s: ['The Right to Privacy', 'Justice K. S. Puttaswamy, a retired judge, challenged the government over privacy concerns. In August 2017, a nine-judge bench of the Supreme Court unanimously held that privacy is a fundamental right. The judgment shapes debates about data, surveillance and technology in India today.'],
          a: [
            ch('The Supreme Court declared privacy a fundamental right in…', '*2017|1950|1999'),
            mt('Match the term', 'consent=permission given knowingly|data breach=unauthorised access|profiling=predicting behaviour from data'),
            tf('The DPDP Act requires parental consent for children\'s data.', true),
            ch('India\'s data protection law is the…', '*Digital Personal Data Protection Act, 2023|Data Fun Act|Internet Freedom Law 1990'),
          ],
          t: ['Is "free" really free if you pay with your data?', 'How should privacy be balanced with security?'],
          k: ['Explain your data rights to a family member.'],
          m: ['App Privacy Audit', 'your family\'s apps, privacy policies', 'Choose three apps | Read their privacy policies and permissions | Note what data is collected and why | Write recommendations and adjust settings'],
          q: [
            ch('Permission given knowingly is…', '*consent|content|contest'),
            tf('GDPR is a European Union law.', true),
            ch('Analysing data to predict behaviour is…', '*profiling|printing|posting'),
          ],
          ms: ['Explains data collection', 'Describes legal rights', 'Manages own privacy'],
        }),
      ]),
      U('ai-citizenship', 'AI Literacy and Digital Citizenship', 'Living well with technology.', 'How AI systems learn; Bias, deepfakes and limits; Responsible digital citizenship', [
        L('ai-literacy', 'Thinking Critically About AI', {
          o: ['Explain how machine-learning systems are trained', 'Evaluate AI risks and practise responsible digital citizenship'],
          p: ['Knows data rights and algorithms'],
          e: [
            'Many AI systems use machine learning: they find patterns in large amounts of training data rather than following hand-written rules. Large language models predict likely text, which makes them fluent — but they can produce confident errors, sometimes called "hallucinations".',
            'AI can reflect biases in its training data, for example performing worse for under-represented groups. Generative AI can create realistic deepfake images, audio and video, which can be used to deceive or harass. Checking sources and labelling AI-generated content matter more than ever.',
            'Responsible digital citizenship means using technology ethically: respecting others\' privacy and work, verifying before sharing, being honest about AI use in schoolwork, standing up against online abuse, and caring for digital wellbeing.',
          ],
          v: 'machine learning = computers learning patterns from data; training data = examples used to teach an AI system; deepfake = realistic fake media made with AI; hallucination = a confident but false AI output',
          x: ['An AI chatbot inventing a fake reference.', 'A deepfake voice used in a scam call.'],
          s: ['The Invented Citation', 'For a school project, Meera asked an AI tool for sources about stepwells. It gave five neat references with authors and page numbers. When she searched for them in the library catalogue, two did not exist at all. Her teacher said, "AI can be a helpful assistant, but you are still the researcher. Always verify."'],
          a: [
            ch('Machine learning systems learn from…', '*patterns in training data|magic|only hand-written rules'),
            mt('Match the term', 'deepfake=realistic fake media|hallucination=confident false output|bias=unfair patterns from data'),
            tf('AI outputs should be verified.', true),
            ch('Being honest about AI use in schoolwork is part of…', '*responsible digital citizenship|cheating|coding'),
          ],
          t: ['When is it fair to use AI for schoolwork?', 'How should society respond to deepfakes?'],
          k: ['Lead a discussion on the benefits and risks of AI in education.'],
          m: ['AI Evaluation Project', 'an approved AI tool (with adult permission), reliable sources', 'Ask an AI tool five factual questions in a subject you know | Verify each answer with reliable sources | Record accuracy and errors | Write a 1500-word evaluation with guidelines for responsible use'],
          q: [
            ch('Examples used to teach an AI are…', '*training data|test tubes|tickets'),
            tf('AI can reflect biases in its training data.', true),
            ch('Realistic fake media made with AI is a…', '*deepfake|deep dive|database'),
          ],
          ms: ['Explains how AI learns', 'Evaluates AI risks', 'Practises responsible use'],
        }),
      ]),
    ]),
  ],
});
