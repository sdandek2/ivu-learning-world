import { subject, S, U, L, ch, tf, od, mt } from '../dsl.ts';

export default subject({
  id: 'drama',
  description: 'Drama and puppetry from pretend play to directing: role-play, voices and puppets; mime and freeze frames; improvisation; India\'s folk theatre and puppet traditions; scriptwriting and stagecraft; Sanskrit, Greek and Shakespearean drama; modern Indian theatre; directing; and theatre for social change.',
  stages: [
    S('s4', 'Pretend play, voices and puppets.', [
      'Pretend to be different characters', 'Use loud, soft, high and low voices', 'Tell a simple story with a puppet',
    ], [
      U('pretend', 'Let\'s Pretend', 'Becoming someone else.', 'Pretend play; Character voices; Faces and bodies', [
        L('pretend-play', 'Who Am I Today?', {
          o: ['Pretend to be a character using voice and body', 'Change voice to show different characters'],
          p: ['Enjoys play'],
          e: [
            'In drama, we pretend to be someone or something else. This someone is called a character.',
            'We can change our voice to show different characters: a big, deep voice for a giant; a tiny, squeaky voice for a mouse; a slow, creaky voice for an old tortoise.',
            'We also use our faces and bodies: a giant stomps and stands tall, a mouse scurries and peeks. Acting is playing with care, so that others can understand our pretend.',
          ],
          v: 'character = a person or animal in a story; pretend = to act as if something is real; voice = the sounds we make when speaking; actor = a person who plays a character',
          x: ['Playing shopkeeper and customer.', 'Speaking in a deep giant voice.'],
          s: ['The Kitchen Restaurant', 'Ivaan tied on an apron and became Chef Ivaan. "Welcome to my restaurant!" he said in a grand voice. Mama became a fussy customer: "I want soup, but not too hot!" Ivaan stirred an empty pot and served it with a bow. "Delicious!" said Mama. They swapped roles and laughed until dinner was really ready.'],
          a: [
            ch('A person or animal in a story is a…', '*character|costume|stage'),
            mt('Match the character to the voice', 'giant=deep and big|mouse=tiny and squeaky|old tortoise=slow and creaky'),
            tf('Actors use their bodies as well as their voices.', true),
            ch('A person who plays a character is an…', '*actor|author|artist'),
          ],
          t: ['Who would you like to pretend to be? Why?', 'How would a sleepy lion move?'],
          k: ['Pretend to be an animal and say hello in its voice.'],
          m: ['Dress-Up Box', 'old clothes, scarves, hats, a box', 'Fill a box with dress-up items | Choose a character and dress up | Make up a voice and a walk | Act out a short scene with family'],
          q: [
            ch('To act as if something is real is to…', '*pretend|sleep|count'),
            tf('A giant might have a deep voice.', true),
            ch('A mouse might move by…', '*scurrying|stomping|flying'),
          ],
          ms: ['Takes on a character', 'Varies voice', 'Uses body to show character'],
        }),
      ]),
      U('puppets', 'Puppet Friends', 'Making and using puppets.', 'Sock and stick puppets; Making a puppet talk; Puppet shows', [
        L('puppet-show', 'My First Puppet Show', {
          o: ['Make a simple puppet', 'Tell a short story with a puppet'],
          p: ['Can pretend to be a character'],
          e: [
            'A puppet is a figure that is moved by a person, called a puppeteer. Puppets can be made from socks, paper bags, sticks or wood.',
            'To make a puppet talk, open and close its mouth (or move it a little) when it speaks. Look at the puppet, not the audience, so the audience watches the puppet too.',
            'India has famous puppet traditions, like the colourful Kathputli string puppets of Rajasthan. Puppets have entertained people for many hundreds of years.',
          ],
          v: 'puppet = a figure moved by a person; puppeteer = a person who moves a puppet; audience = the people watching; Kathputli = string puppets of Rajasthan',
          x: ['A sock puppet snake.', 'Kathputli puppets dancing on strings.'],
          s: ['Sockie the Snake', 'Ivaan pulled an old green sock over his hand and added two button eyes. "Hissss, I\'m Sockie!" Sockie wiggled up the sofa and peeked at Grandpa. "Are you a friendly snake?" Grandpa asked. Sockie nodded and gave him a tickly kiss. Everyone clapped. Sockie took a wobbly bow.'],
          a: [
            ch('A person who moves a puppet is a…', '*puppeteer|painter|pilot'),
            ch('Kathputli puppets are moved with…', '*strings|water|wind'),
            tf('The puppet\'s mouth moves when it speaks.', true),
            ch('The people watching a show are the…', '*audience|actors|puppets'),
          ],
          t: ['What story would your puppet tell?', 'Why should the puppeteer look at the puppet?'],
          k: ['Introduce your puppet to a grown-up and let it tell a joke.'],
          m: ['Sock Puppet Show', 'an old sock, buttons, wool, glue (with an adult), a table as a stage', 'Decorate a sock as a character | Hide behind a table | Make the puppet tell a short story | Take a bow at the end'],
          q: [
            ch('Kathputli comes from…', '*Rajasthan|Kerala|Assam'),
            tf('Puppets can be made from socks.', true),
            ch('A figure moved by a person is a…', '*puppet|picture|pillow'),
          ],
          ms: ['Makes a puppet', 'Animates the puppet when speaking', 'Tells a short story'],
        }),
      ]),
    ]),
    S('s5', 'Mime, freeze frames and acting out stories.', [
      'Mime actions without words', 'Create freeze frames of story moments', 'Act out a familiar story with others',
    ], [
      U('mime', 'Mime and Freeze Frames', 'Acting without words.', 'Mime; Freeze frames; Facial expression', [
        L('mime', 'Silent Stories', {
          o: ['Mime everyday actions clearly', 'Create a freeze frame showing a story moment'],
          p: ['Can pretend with voice and body'],
          e: [
            'Mime is acting without words. A mime artist shows actions using only face and body — like pretending to climb a ladder or open a heavy door.',
            'Good mime is clear and detailed: if you pretend to hold a cup, keep your hand the same shape the whole time!',
            'A freeze frame (or tableau) is like a photograph: actors freeze still to show an important moment in a story. The audience can guess what is happening from the bodies and faces.',
          ],
          v: 'mime = acting without words; freeze frame = a still picture made by actors; tableau = another word for a freeze frame; gesture = a movement that shows meaning',
          x: ['Miming eating a very sour lemon.', 'A freeze frame of the hare sleeping while the tortoise walks past.'],
          s: ['The Invisible Box', 'At the school show, a mime artist found himself trapped in an invisible box. He pressed his hands flat against walls nobody could see, looked up and felt for a lid. The children shouted, "There\'s a door!" He found it, stepped out and bowed. Nobody had said a word — but everyone had understood.'],
          a: [
            ch('Mime is acting…', '*without words|with lots of talking|only singing'),
            ch('A freeze frame is like a…', '*photograph|song|race'),
            tf('Good mime keeps the shapes of invisible objects the same.', true),
            mt('Match the mime to the meaning', 'rubbing tummy=hungry|shivering=cold|yawning=tired'),
          ],
          t: ['How can you show you are scared without words?', 'Why must mime be clear and detailed?'],
          k: ['Mime an action and let a grown-up guess what it is.'],
          m: ['Mime Guessing Game', 'cards with actions written or drawn', 'Make action cards like brushing teeth or flying a kite | Pick a card and mime it | Others guess | Make freeze frames of a favourite story'],
          q: [
            ch('Another word for a freeze frame is…', '*tableau|table|tablet'),
            tf('Mime uses face and body only.', true),
            ch('A movement that shows meaning is a…', '*gesture|guess|gift'),
          ],
          ms: ['Mimes clearly', 'Creates readable freeze frames', 'Interprets others\' mime'],
        }),
      ]),
      U('act-stories', 'Acting Out Stories', 'Working together.', 'Roles; Beginning, middle and end; Being a good audience', [
        L('act-story', 'Let\'s Put on a Play', {
          o: ['Act out a familiar story in a group with roles', 'Show good audience behaviour'],
          p: ['Can mime and make freeze frames'],
          e: [
            'A play is a story acted out for an audience. Each actor has a role — the character they play.',
            'A play has a beginning (meet the characters), a middle (a problem happens) and an end (the problem is solved). Actors need to remember what happens next and listen to each other.',
            'The audience has a job too: watch quietly, laugh at funny parts and clap at the end. Actors wait for laughter before speaking again!',
          ],
          v: 'play = a story acted out for an audience; role = the character an actor plays; scene = one part of a play; rehearse = to practise a play',
          x: ['Acting out "The Thirsty Crow" with a crow and a pot.', 'Clapping politely at the end of a show.'],
          s: ['The Tortoise Who Forgot His Line', 'In the class play, Kiko was the tortoise. Halfway through, he forgot what to say! He froze. Then Zuri, the hare, whispered, "Slow and steady..." Kiko smiled: "Slow and steady wins the race!" The audience cheered. After the show, Kiko said, "Good actors help each other."'],
          a: [
            od('Put the parts of a play in order', 'Meet the characters|A problem happens|The problem is solved'),
            ch('The character an actor plays is their…', '*role|rope|room'),
            tf('A good audience watches quietly and claps at the end.', true),
            ch('To practise a play is to…', '*rehearse|rest|rewind'),
          ],
          t: ['How can actors help each other on stage?', 'Why should actors wait for laughter?'],
          k: ['Tell a grown-up which role you played and what your character did.'],
          m: ['Family Play', 'simple costumes and props, a favourite fable', 'Choose a fable and give everyone a role | Plan the beginning, middle and end | Rehearse twice | Perform for an audience of toys or neighbours'],
          q: [
            ch('One part of a play is a…', '*scene|seed|sock'),
            tf('A play has a beginning, middle and end.', true),
            ch('A story acted out for an audience is a…', '*play|plate|plan'),
          ],
          ms: ['Plays a role in a group', 'Follows story structure', 'Shows good audience behaviour'],
        }),
      ]),
    ]),
    S('s6', 'Improvisation and India\'s folk theatre and puppet traditions.', [
      'Improvise scenes using "yes, and"', 'Describe Indian folk theatre forms', 'Compare puppet traditions',
    ], [
      U('improv', 'Improvisation', 'Making it up together.', '"Yes, and…"; Status games; Building a scene', [
        L('yes-and', 'Yes, And!', {
          o: ['Improvise a scene by accepting and building on offers', 'Use status to create interesting characters'],
          p: ['Can act out stories'],
          e: [
            'Improvisation (improv) is acting without a script — making it up as you go. The golden rule is "Yes, and…": accept what your partner offers and add something new.',
            'If your partner says, "Captain, the ship is sinking!", don\'t say "No, it isn\'t." Say, "Yes, and the sharks are circling — grab the bucket!"',
            'Status is how powerful or confident a character seems. A king has high status; a nervous servant has low status. Playing with status — like a servant who secretly runs the palace — makes scenes interesting.',
          ],
          v: 'improvisation = acting without a script; offer = an idea a performer gives in a scene; status = how powerful a character seems; script = the written words of a play',
          x: ['"Yes, and" turning a picnic into an alien adventure.', 'A high-status cat and a low-status lion.'],
          s: ['The Blocking Game', 'In drama club, Zuri said, "Look, a dragon!" Kiko said, "No, it\'s just a cloud." The scene died. They tried again. "Look, a dragon!" "Yes, and it\'s carrying a letter for you!" Suddenly the scene took off — they were reading a dragon\'s invitation to a party on the Moon.'],
          a: [
            ch('The golden rule of improv is…', '*Yes, and…|No, but…|Stop, wait…'),
            ch('Acting without a script is…', '*improvisation|rehearsal|reading'),
            tf('Status is how powerful a character seems.', true),
            ch('If your partner says "It\'s raining frogs!", a good response is…', '*"Yes, and they\'re singing!"|"No, it\'s not."|silence'),
          ],
          t: ['Why does saying "no" stop a scene?', 'How does "yes, and" help in real life, too?'],
          k: ['Improvise a one-minute scene with a partner using "yes, and".'],
          m: ['Improv Game Night', 'a group of two or more, a bowl of topic slips', 'Write fun places and characters on slips | Pick two slips and start a scene | Use "yes, and" for every offer | Try one scene with a status twist'],
          q: [
            ch('An idea given in a scene is an…', '*offer|order|object'),
            tf('A king usually has high status.', true),
            ch('The written words of a play are the…', '*script|scene|stage'),
          ],
          ms: ['Accepts and builds offers', 'Plays with status', 'Sustains an improvised scene'],
        }),
      ]),
      U('folk-theatre', 'Folk Theatre and Puppets of India', 'Living traditions.', 'Tamasha and Yakshagana; Jatra and Nautanki; Puppet traditions', [
        L('folk-theatre', 'Theatre of the People', {
          o: ['Match Indian folk theatre forms to their regions', 'Compare India\'s puppet traditions'],
          p: ['Knows puppets and plays'],
          e: [
            'India has many folk theatre forms, often performed outdoors at festivals with music and dance. Tamasha from Maharashtra blends song, dance (especially Lavani) and comedy. Yakshagana from coastal Karnataka performs epic stories with grand costumes and headgear.',
            'Jatra from Bengal and Odisha is travelling theatre with dramatic stories; Nautanki from Uttar Pradesh mixes music and melodrama; Bhavai is from Gujarat.',
            'India\'s puppet traditions include Kathputli string puppets (Rajasthan), Tholu Bommalata leather shadow puppets (Andhra Pradesh), Bommalattam (Tamil Nadu), and Putul Nach rod puppets (West Bengal).',
          ],
          v: 'folk theatre = traditional theatre of a community; shadow puppet = a flat puppet shown as a shadow on a screen; rod puppet = a puppet moved with rods; melodrama = drama with exaggerated emotions',
          x: ['Yakshagana dancers in tall, glittering crowns.', 'Leather shadow puppets glowing on a lit screen.'],
          s: ['Shadows on the Screen', 'In an Andhra village, Ivaan sat in the dark before a white cloth screen lit by a lamp. Colourful leather figures of Rama and Hanuman pressed against it, glowing like stained glass. The puppeteers sang, drummed and moved the figures all at once. "Shadows can tell stories too," Ivaan whispered.'],
          a: [
            mt('Match the form to the region', 'Tamasha=Maharashtra|Yakshagana=Karnataka|Jatra=Bengal|Nautanki=Uttar Pradesh'),
            ch('Tholu Bommalata uses…', '*leather shadow puppets|string puppets|masks only'),
            tf('Many folk theatre forms use music and dance.', true),
            ch('Drama with exaggerated emotions is…', '*melodrama|mime|monologue'),
          ],
          t: ['Why might folk theatre be performed outdoors?', 'What makes shadow puppets magical?'],
          k: ['Describe one folk theatre form to your family.'],
          m: ['🧪 Shadow Puppet Theatre', 'card, sticks, a torch, a white sheet', 'Cut out character shapes from card | Tape them to sticks | Shine a torch behind a sheet | Perform a short story and notice how distance changes shadow size'],
          q: [
            ch('Yakshagana comes from…', '*coastal Karnataka|Punjab|Assam'),
            tf('Putul Nach uses rod puppets.', true),
            ch('A flat puppet shown on a screen is a…', '*shadow puppet|glove puppet|marionette'),
          ],
          ms: ['Matches forms and regions', 'Compares puppet traditions', 'Creates a shadow performance'],
        }),
      ]),
    ]),
    S('s7', 'Scriptwriting and stagecraft.', [
      'Write a short script with stage directions', 'Understand the parts of a stage and theatre roles', 'Design simple sets, lights and costumes',
    ], [
      U('scriptwriting', 'Writing Scripts', 'Dialogue and stage directions.', 'Script format; Dialogue and subtext; Conflict', [
        L('scripts', 'Writing a Scene', {
          o: ['Write a short scene in script format', 'Create conflict and subtext in dialogue'],
          p: ['Can improvise scenes'],
          e: [
            'A script shows the character\'s name, then their words (dialogue). Stage directions, usually in brackets or italics, tell actors what to do: (She slams the door.)',
            'Good drama needs conflict — characters wanting different things, or a character facing an obstacle. Without conflict, nothing happens!',
            'Subtext is what a character really means underneath their words. If someone says "I\'m fine" while slamming a door, the subtext is that they are not fine.',
          ],
          v: 'dialogue = words spoken by characters; stage direction = instructions in a script for actors; conflict = a struggle between opposing wants; subtext = the hidden meaning beneath words',
          x: ['(She smiles, but her hands are shaking.)', 'Two siblings both wanting the last mango.'],
          s: ['The Last Mango', 'Zuri wrote a scene: two siblings, one mango. "You have it," said the brother, sighing loudly. "No, YOU have it," said the sister, staring at it. Neither moved. The audience laughed — they could see both secretly wanted it. "That\'s subtext," her teacher said. "What they say isn\'t what they mean."'],
          a: [
            ch('Instructions for actors in a script are…', '*stage directions|dialogue|scenes'),
            ch('Good drama needs…', '*conflict|silence only|no characters'),
            tf('Subtext is the hidden meaning beneath words.', true),
            mt('Match the term', 'dialogue=spoken words|stage direction=instruction for actors|conflict=opposing wants'),
          ],
          t: ['What is the subtext when someone says "Great, just great" after dropping their lunch?', 'Why is conflict needed in drama?'],
          k: ['Perform your scene with a partner and explain its conflict.'],
          m: ['Two-Page Script', 'paper or a computer', 'Choose two characters who want different things | Write a scene in script format | Add stage directions and subtext | Rehearse and perform it'],
          q: [
            ch('Words spoken by characters are…', '*dialogue|directions|décor'),
            tf('Stage directions are usually in brackets or italics.', true),
            ch('A struggle between opposing wants is…', '*conflict|comedy|costume'),
          ],
          ms: ['Writes in script format', 'Creates conflict', 'Uses subtext'],
        }),
      ]),
      U('stagecraft', 'Stagecraft', 'Behind the scenes.', 'Stage areas; Theatre roles; Set, lights, sound and costume', [
        L('stagecraft', 'The Theatre Team', {
          o: ['Name stage areas and theatre roles', 'Design simple set, lighting and costume ideas'],
          p: ['Knows scripts and plays'],
          e: [
            'Stage directions use stage areas from the actor\'s point of view facing the audience: upstage (back), downstage (front), stage left and stage right. Upstage is called that because old stages sloped upwards at the back.',
            'A play needs a whole team: the director (guides the actors and vision), stage manager (runs the show), and designers for set, lighting, sound and costume.',
            'Design helps tell the story: blue light can suggest night or sadness; a single chair can suggest a whole palace; a costume can show a character\'s age and personality.',
          ],
          v: 'upstage = the back of the stage; downstage = the front of the stage; director = the person who guides a production; stage manager = the person who runs the show',
          x: ['A spotlight on a single actor for a sad speech.', 'Stage right is the actor\'s right when facing the audience.'],
          s: ['The Stage Manager\'s Clipboard', 'On opening night, Meera wore black and held a clipboard. She called, "Lights, go!" and the stage glowed blue for night. "Sound, go!" — an owl hooted. The actors were the faces, but Meera ran everything. When the play ended, the director hugged her. "The show was yours too."'],
          a: [
            mt('Match the stage area', 'upstage=back of the stage|downstage=front of the stage|stage left=actor\'s left'),
            ch('Who guides the actors and the vision?', '*the director|the audience|the ticket seller'),
            tf('Lighting can suggest time and mood.', true),
            ch('Upstage is called that because old stages…', '*sloped upwards at the back|were upstairs|were outside'),
          ],
          t: ['How could you show a forest with very few props?', 'Which theatre job would you like? Why?'],
          k: ['Explain your design ideas for a scene.'],
          m: ['Design a Set in a Shoebox', 'a shoebox, card, fabric, a torch', 'Choose a scene from a play | Build a model set inside the shoebox | Use a torch with coloured paper for lighting | Present your design choices'],
          q: [
            ch('The person who runs the show is the…', '*stage manager|actor|critic'),
            tf('Stage directions use the actor\'s point of view.', true),
            ch('The front of the stage is…', '*downstage|upstage|backstage'),
          ],
          ms: ['Names stage areas and roles', 'Designs for storytelling', 'Explains design choices'],
        }),
      ]),
    ]),
    S('s9', 'Classical drama: Sanskrit, Greek and Shakespearean theatre.', [
      'Describe Sanskrit drama and Kalidasa', 'Explain Greek tragedy and comedy', 'Analyse a Shakespearean scene',
    ], [
      U('sanskrit-greek', 'Ancient Theatres', 'Sanskrit and Greek drama.', 'Natya Shastra and Kalidasa; Greek tragedy and chorus; Comparing traditions', [
        L('ancient-drama', 'Kalidasa and Sophocles', {
          o: ['Describe the features of Sanskrit and Greek drama', 'Compare their aims and conventions'],
          p: ['Can write and analyse scenes'],
          e: [
            'Sanskrit drama follows principles from the Natya Shastra and aims to evoke rasa in the audience. Plays often end happily. Kalidasa, commonly placed around the 4th–5th century CE, wrote "Abhijnanashakuntalam" (The Recognition of Shakuntala). Its English translation by William Jones in 1789 impressed European writers such as Goethe.',
            'Greek drama arose in Athens in the 5th century BCE, performed at festivals for Dionysus in open-air theatres. Tragedies by Aeschylus, Sophocles and Euripides showed heroes facing fate; a chorus commented on the action. Aristophanes wrote comedies mocking politicians.',
            'Aristotle\'s "Poetics" said tragedy produces catharsis — a release of pity and fear. Both traditions developed sophisticated theories about how drama affects audiences.',
          ],
          v: 'tragedy = a drama in which the hero suffers downfall; chorus = a group commenting on the action in Greek drama; catharsis = an emotional release; convention = an accepted practice in an art form',
          x: ['Shakuntala\'s ring and the curse of forgetting.', 'Sophocles\' "Antigone" defying the king.'],
          s: ['A Ring in a Fish', 'In Kalidasa\'s play, King Dushyanta forgets his wife Shakuntala because of a sage\'s curse. Only the ring he gave her can restore his memory — but she loses it in a river. Much later, a fisherman finds it inside a fish. The king remembers everything, and after more trials, the family is reunited.'],
          a: [
            mt('Match the playwright to the tradition', 'Kalidasa=Sanskrit drama|Sophocles=Greek tragedy|Aristophanes=Greek comedy'),
            ch('Aristotle said tragedy produces…', '*catharsis|boredom|rasa only'),
            tf('Sanskrit plays often end happily.', true),
            ch('A group commenting on action in Greek drama is the…', '*chorus|cast|crew'),
          ],
          t: ['Why might Sanskrit drama prefer happy endings?', 'How are rasa and catharsis similar and different?'],
          k: ['Present a comparison of Sanskrit and Greek drama.'],
          m: ['Scene Comparison', 'translations of Shakuntala and a Greek play', 'Read one scene from each | Compare structure, characters and aims | Stage a short extract from one | Write a reflection comparing the audience effect'],
          q: [
            ch('Abhijnanashakuntalam was written by…', '*Kalidasa|Sophocles|Shakespeare'),
            tf('Greek plays were performed at festivals for Dionysus.', true),
            ch('An emotional release is…', '*catharsis|chorus|convention'),
          ],
          ms: ['Describes both traditions accurately', 'Compares theories of audience effect', 'Stages an extract'],
        }),
      ]),
      U('shakespeare', 'Shakespeare', 'The Globe and the plays.', 'Shakespeare\'s life and the Globe; Verse and soliloquy; Shakespeare in India', [
        L('shakespeare', 'All the World\'s a Stage', {
          o: ['Describe Shakespeare\'s theatre and major plays', 'Analyse a soliloquy for meaning and performance'],
          p: ['Knows tragedy and comedy'],
          e: [
            'William Shakespeare (1564–1616) wrote about 37 plays, including tragedies (Hamlet, Macbeth), comedies (A Midsummer Night\'s Dream) and histories. Many were performed at the Globe Theatre in London, where poorer audience members stood in the yard as "groundlings".',
            'Shakespeare often wrote in iambic pentameter — lines of ten syllables with a da-DUM rhythm. A soliloquy is a speech in which a character speaks their thoughts alone, such as Hamlet\'s "To be, or not to be".',
            'Shakespeare has a rich life in India: Parsi theatre staged adaptations in the 19th century, and films such as Vishal Bhardwaj\'s "Maqbool" (Macbeth), "Omkara" (Othello) and "Haider" (Hamlet) reimagined the plays in Indian settings.',
          ],
          v: 'soliloquy = a speech in which a character speaks thoughts aloud alone; iambic pentameter = a line of ten syllables with a da-DUM rhythm; groundling = a standing audience member at the Globe; adaptation = a new version in a different setting or form',
          x: ['Hamlet\'s "To be, or not to be".', '"Omkara" setting Othello in Uttar Pradesh.'],
          s: ['The Groundlings\' Theatre', 'In 1600, a penny bought you a standing place in the Globe\'s yard. The groundlings cheered heroes, booed villains and threw nutshells. On a bare stage with few props, Shakespeare\'s words had to paint the scenes: "this wooden O", as one play calls the theatre, became battlefields, forests and palaces.'],
          a: [
            ch('A character speaking thoughts alone is a…', '*soliloquy|chorus|dialogue'),
            mt('Match the film to the play', 'Maqbool=Macbeth|Omkara=Othello|Haider=Hamlet'),
            tf('Iambic pentameter has ten syllables per line.', true),
            ch('Standing audience members at the Globe were…', '*groundlings|groundnuts|guards'),
          ],
          t: ['Why do Shakespeare\'s plays adapt so well to other cultures?', 'What does a soliloquy let the audience know?'],
          k: ['Perform a short soliloquy and explain the character\'s feelings.'],
          m: ['Soliloquy Performance', 'a Shakespeare soliloquy, a modern translation', 'Choose a soliloquy and read a modern version | Mark the rhythm and key words | Rehearse with gestures and pauses | Perform and explain your choices'],
          q: [
            ch('Shakespeare lived from…', '*1564 to 1616|1789 to 1850|1200 to 1250'),
            tf('Parsi theatre staged Shakespeare adaptations.', true),
            ch('A new version in a different setting is an…', '*adaptation|audition|applause'),
          ],
          ms: ['Describes Shakespeare\'s theatre', 'Analyses verse and soliloquy', 'Relates adaptations to context'],
        }),
      ]),
    ]),
    S('s12', 'Modern Indian theatre, directing and theatre for social change.', [
      'Analyse the work of modern Indian playwrights', 'Direct a scene with a clear concept', 'Evaluate theatre as a tool for social change',
    ], [
      U('modern-indian', 'Modern Indian Theatre', 'Playwrights and directors.', 'Vijay Tendulkar; Girish Karnad; Habib Tanvir and Badal Sircar', [
        L('modern-theatre', 'Voices of Modern Indian Theatre', {
          o: ['Analyse major works of modern Indian playwrights', 'Explain how they used myth, folk forms and politics'],
          p: ['Knows classical and folk theatre'],
          e: [
            'After independence, Indian theatre flourished in many languages. Marathi playwright Vijay Tendulkar wrote "Ghashiram Kotwal" (1972), using Dashavatar and folk forms to explore power, and "Shantata! Court Chalu Aahe" (Silence! The Court Is in Session). Some of his plays faced censorship and protests.',
            'Girish Karnad (Kannada) reworked myths and history in "Hayavadana", "Tughlaq" and "Nagamandala", using folk theatre conventions like Yakshagana. Habib Tanvir\'s Naya Theatre worked with Chhattisgarhi folk performers, as in "Charandas Chor".',
            'Badal Sircar (Bengali) developed "Third Theatre" — low-cost performances in open spaces, close to the audience. The National School of Drama, founded in 1959, trained generations of theatre artists.',
          ],
          v: 'playwright = a person who writes plays; censorship = official suppression of content; Third Theatre = Badal Sircar\'s intimate, low-cost theatre; myth = a traditional story, often about gods or heroes',
          x: ['"Ghashiram Kotwal" in Pune\'s Peshwa era.', 'Karnad\'s "Hayavadana" with a horse-headed man.'],
          s: ['The Play That Toured the World', 'When "Ghashiram Kotwal" premiered in 1972, its portrayal of the Peshwa era provoked protests in Pune. Yet its brilliant use of song, dance and a human wall of chorus actors made it a landmark. The production went on to tour Europe, showing how a Marathi play could speak to the world about power and corruption.'],
          a: [
            mt('Match the playwright to the play', 'Vijay Tendulkar=Ghashiram Kotwal|Girish Karnad=Hayavadana|Habib Tanvir=Charandas Chor'),
            ch('Badal Sircar developed…', '*Third Theatre|Parsi theatre|ballet'),
            tf('The National School of Drama was founded in 1959.', true),
            ch('Official suppression of content is…', '*censorship|choreography|criticism'),
          ],
          t: ['Why did modern playwrights turn to myth and folk forms?', 'When, if ever, is censorship of theatre justified?'],
          k: ['Present an analysis of one modern Indian play.'],
          m: ['Play Study and Staged Reading', 'a modern Indian play in translation, a group', 'Read the play and research its context | Analyse its use of folk forms or myth | Stage a reading of one scene | Write a 1500-word analysis'],
          q: [
            ch('Tughlaq was written by…', '*Girish Karnad|Kalidasa|Shakespeare'),
            tf('Habib Tanvir worked with Chhattisgarhi folk performers.', true),
            ch('A person who writes plays is a…', '*playwright|player|producer'),
          ],
          ms: ['Analyses modern plays in context', 'Explains use of folk forms', 'Engages with debates on censorship'],
        }),
      ]),
      U('social-change', 'Directing and Social Change', 'Theatre that acts on the world.', 'The director\'s concept; Street theatre; Theatre of the Oppressed', [
        L('theatre-change', 'Theatre That Changes Things', {
          o: ['Develop a director\'s concept for a scene', 'Evaluate street theatre and forum theatre as tools for change'],
          p: ['Knows stagecraft and modern theatre'],
          e: [
            'A director develops a concept — a unifying idea about what the production means and how it will look and feel — then guides actors, designers and rehearsals towards it.',
            'Street theatre takes performance to public spaces to raise awareness. Safdar Hashmi\'s group Jana Natya Manch (Janam), founded in 1973, performed plays on workers\' rights; Hashmi was fatally attacked during a performance in 1989, and his colleagues returned to finish the play two days later.',
            'Brazilian director Augusto Boal created the Theatre of the Oppressed, including forum theatre, in which audience members ("spect-actors") stop a scene and step in to try different solutions to a problem. Such methods are used worldwide in education and community work.',
          ],
          v: 'concept = a director\'s unifying idea for a production; street theatre = performance in public spaces; forum theatre = interactive theatre where the audience changes the action; spect-actor = an audience member who takes part',
          x: ['A street play on clean water in a market.', 'A forum theatre scene about bullying.'],
          s: ['Halla Bol', 'On 1 January 1989, Safdar Hashmi\'s troupe was performing the street play "Halla Bol" near Delhi when they were attacked; Hashmi died the next day. Two days later, his wife Moloyashree Hashmi and the troupe returned to the same spot and completed the performance before a large crowd — a powerful statement about art and courage.'],
          a: [
            ch('Augusto Boal created…', '*Theatre of the Oppressed|Kathakali|the Globe'),
            mt('Match the term', 'concept=director\'s unifying idea|street theatre=performance in public spaces|spect-actor=audience member who takes part'),
            tf('Jana Natya Manch was founded in 1973.', true),
            ch('In forum theatre, the audience…', '*steps in to try solutions|stays silent|leaves early'),
          ],
          t: ['Can theatre really change society?', 'What responsibilities do artists have when addressing social issues?'],
          k: ['Facilitate a short forum theatre scene with your group.'],
          m: ['Theatre for Change Project', 'a group, a local issue, open space (with permission)', 'Research a local issue respectfully | Write and direct a short street or forum play | Perform for an audience and invite interventions | Evaluate the impact in a written report'],
          q: [
            ch('An audience member who takes part is a…', '*spect-actor|stage manager|critic'),
            tf('Safdar Hashmi\'s colleagues returned to finish the play.', true),
            ch('Performance in public spaces is…', '*street theatre|radio drama|opera'),
          ],
          ms: ['Develops a directorial concept', 'Evaluates theatre for change', 'Creates participatory theatre'],
        }),
      ]),
    ]),
  ],
});
