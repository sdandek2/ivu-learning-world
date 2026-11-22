import { subject, S, U, L, ch, tf, od, mt, ct } from '../dsl.ts';

export default subject({
  id: 'crafts',
  description: 'Crafts and making, from tearing paper to design thinking: cutting, folding and gluing; clay and play dough; recycled-material making; origami and paper engineering; weaving, block printing and India\'s living craft traditions; sculpture and 3D design; textiles and sustainable materials; and craft as livelihood, heritage and design.',
  stages: [
    S('s4', 'Tear, cut, fold and squish: first making skills.', [
      'Use safety scissors and glue', 'Fold paper in half', 'Shape play dough into objects',
    ], [
      U('paper-skills', 'Paper Play', 'Tearing, cutting, gluing.', 'Tearing paper; Using safety scissors; Gluing pieces', [
        L('cut-glue', 'Snip, Snip, Stick!', {
          o: ['Use safety scissors safely to cut along a line', 'Glue paper pieces to make a picture'],
          p: ['Can hold a crayon'],
          e: [
            'Paper is a wonderful material for making. We can tear it into pieces, cut it with safety scissors and stick it with glue.',
            'Scissors safety: hold them with the points facing down, walk slowly, cut away from your fingers and only cut paper. Always ask a grown-up for help.',
            'A little glue goes a long way. Dot the glue, press the paper down and hold it for a few seconds.',
          ],
          v: 'safety scissors = scissors with rounded tips for children; glue = sticky stuff that joins things; tear = to pull paper apart with your fingers; material = what something is made of',
          x: ['Tearing green paper for grass.', 'Cutting a straight line for a road.'],
          s: ['The Paper Garden', 'Ivaan tore green paper into little strips for grass. He carefully snipped out a yellow circle for the sun, holding his scissors the safe way. Dot, dot, dot went the glue, and press, press, press went his fingers. Soon a whole paper garden bloomed on his page. "I made it myself!" he said.'],
          a: [
            ch('Safe scissors are held with the points…', '*facing down|facing your friend|in the air'),
            ch('How much glue should you use?', '*a little dot|the whole bottle|none ever'),
            tf('We should only cut paper with our scissors.', true),
            od('Put the steps in order', 'Cut the shape|Dot the glue|Press it down|Hold for a few seconds'),
          ],
          t: ['What else can you make by tearing paper?', 'Why should scissors only cut paper?'],
          k: ['Show a grown-up how to hold and carry scissors safely.'],
          m: ['Torn Paper Garden', 'coloured paper, safety scissors, glue stick, card', 'Tear green strips for grass | Cut a circle for the sun | Glue everything onto card | Tell someone about your garden', "Use child-safe scissors with adult supervision and non-toxic glue. Adults should handle any sharp tools."],
          q: [
            ch('Rounded-tip scissors are called…', '*safety scissors|garden shears|knives'),
            tf('We cut away from our fingers.', true),
            ch('Glue is used to…', '*join things|cut things|colour things'),
          ],
          ms: ['Cuts along a line safely', 'Uses glue appropriately', 'Creates a simple collage'],
        }),
      ]),
      U('dough', 'Squish and Shape', 'Play dough and clay.', 'Rolling and squishing; Making shapes; Making a little animal', [
        L('dough-animals', 'Dough Animals', {
          o: ['Roll, pinch and squish dough into shapes', 'Make a simple animal from dough'],
          p: ['Can use hands to squeeze'],
          e: [
            'Play dough is soft and squishy. We can roll it into balls (round) and snakes (long), flatten it into pancakes and pinch it into points.',
            'Putting shapes together makes things: a big ball and a small ball make a snowman; a long snake curls into a snail.',
            'Potters make pots from clay, which goes hard when it dries or is baked in a hot oven called a kiln.',
          ],
          v: 'dough = soft, squishy material for shaping; roll = to move back and forth to make a ball or snake; pinch = to squeeze with finger and thumb; potter = a person who makes things from clay',
          x: ['Rolling a snake and coiling it into a snail.', 'Two balls making a ladybird body and head.'],
          s: ['The Dough Zoo', 'Ivaan rolled a big grey ball and stuck on four short legs and a long trunk — an elephant! His sister made a long orange snake with black stripes — a tiger tail! Soon the table was a whole dough zoo. Grandma made a tiny mouse. "Every zoo needs one small, brave animal," she said.'],
          a: [
            ch('To make a long snake, you…', '*roll the dough|pinch the dough|throw the dough'),
            ch('Clay goes hard when it is…', '*baked in a kiln or dried|put in water|squeezed'),
            ct('How many legs does a dough elephant need? 🦵🦵🦵🦵', 4),
            tf('A potter makes things from clay.', true),
          ],
          t: ['What animal can you make with only balls?', 'Why do you think clay gets hard when baked?'],
          k: ['Tell a grown-up how you made your dough animal.'],
          m: ['🧪 Homemade Play Dough', 'flour, salt, water, a little oil, food colouring (with an adult)', 'Mix 2 cups flour with 1 cup salt | Add water and a spoon of oil slowly and knead | Add a drop of colour | Make your dough zoo', "Use food-safe ingredients and non-toxic colouring. This dough is for play, not eating; keep it away from mouths and wash hands afterwards. An adult should supervise mixing."],
          q: [
            ch('Squeezing with finger and thumb is…', '*pinching|rolling|cutting'),
            tf('Two balls can make a snowman.', true),
            ch('A hot oven for clay is a…', '*kiln|fridge|bucket'),
          ],
          ms: ['Rolls, pinches and flattens dough', 'Combines shapes', 'Describes the making process'],
        }),
      ]),
    ]),
    S('s5', 'Making from recycled materials and simple origami.', [
      'Reuse materials to make something new', 'Follow step-by-step folding instructions', 'Plan before making',
    ], [
      U('recycled', 'Junk Modelling', 'Making new things from old.', 'Collecting clean materials; Joining with tape and glue; Planning a model', [
        L('junk-model', 'From Boxes to Rockets', {
          o: ['Build a model from clean recycled materials', 'Plan a model with a simple drawing first'],
          p: ['Can cut and glue'],
          e: [
            'Junk modelling means making things from boxes, tubes, bottle tops and other clean materials that would otherwise be thrown away. It is good for the planet, too.',
            'Before building, makers draw a simple plan: What will it be? Which materials will I use?',
            'We can join materials with masking tape, glue or split pins. Tape is quick; glue is neat but needs time to dry.',
          ],
          v: 'recycle = to use old things to make new things; model = a small copy of something; plan = an idea drawn before making; masking tape = easy-to-tear paper tape',
          x: ['A cardboard tube rocket.', 'A shoebox house with bottle-top windows.'],
          s: ['Rocket to the Moon', 'Ivaan wanted a rocket. First he drew a plan: a long tube, a cone on top and three fins. He found a kitchen roll tube, a paper cone and pieces of cereal box. Tape here, glue there, and a coat of silver paint. "Three, two, one... blast off!" His rocket zoomed around the room in his hand.'],
          a: [
            ch('Junk modelling uses…', '*clean recycled materials|new expensive toys|food'),
            ch('Before building, makers…', '*draw a plan|throw everything away|go to sleep'),
            tf('Glue needs time to dry.', true),
            mt('Match the junk to the part', 'tube=rocket body|bottle top=window|box=house'),
          ],
          t: ['What could you make from an egg box?', 'Why is reusing materials good for the Earth?'],
          k: ['Explain your plan and model to a grown-up.'],
          m: ['Junk Model Challenge', 'clean boxes, tubes, bottle tops, tape, glue', 'Choose something to make | Draw a plan with labels | Build it with tape and glue | Show and explain it'],
          q: [
            ch('Using old things to make new ones is…', '*recycling|wasting|hiding'),
            tf('A plan helps before making.', true),
            ch('Which joins materials quickly?', '*tape|water|sand'),
          ],
          ms: ['Plans before building', 'Joins materials appropriately', 'Explains reuse'],
        }),
      ]),
      U('origami', 'Folding Fun', 'Simple origami.', 'Valley and mountain folds; Following steps; Paper boat and cup', [
        L('paper-boat', 'The Paper Boat', {
          o: ['Make valley and mountain folds', 'Follow steps to fold a paper boat'],
          p: ['Can fold paper in half'],
          e: [
            'Origami is the art of folding paper into shapes without cutting or gluing. The word comes from Japanese: "ori" (fold) and "kami" (paper).',
            'A valley fold folds the paper towards you, making a V like a valley. A mountain fold folds it away from you, making a peak like a mountain.',
            'Careful folding means lining up the edges and pressing the crease firmly. A paper boat that floats is a classic first project that children all over the world, including India, make in the rain.',
          ],
          v: 'origami = the Japanese art of paper folding; crease = a line made by folding; valley fold = a fold towards you; mountain fold = a fold away from you',
          x: ['Folding a paper boat for monsoon puddles.', 'A folded paper cup that holds water briefly.'],
          s: ['Monsoon Boats', 'When the first monsoon rains came, Grandpa taught Ivaan to fold paper boats, just as his own grandfather had taught him. Fold, crease, open, tuck. They raced their boats in the stream along the lane. Ivaan\'s boat sailed all the way to the corner. "Some things never change," Grandpa smiled.'],
          a: [
            ch('Origami means…', '*folding paper|painting walls|cutting cloth'),
            mt('Match the fold', 'valley fold=towards you|mountain fold=away from you|crease=line made by folding'),
            tf('Traditional origami avoids cutting and gluing.', true),
            ch('Origami comes from which language?', '*Japanese|Spanish|Tamil'),
          ],
          t: ['Why should you press creases firmly?', 'What would happen if your boat was made of tissue paper?'],
          k: ['Teach someone how to make a valley fold and a mountain fold.'],
          m: ['🧪 Paper Boat Float Test', 'rectangular paper, a tub of water', 'Fold a paper boat step by step | Float it in a tub of water | Time how long it floats | Try a different paper and compare', "Use a shallow tub and supervise children around water. Empty the tub immediately afterwards and wipe up spills."],
          q: [
            ch('A fold away from you is a…', '*mountain fold|valley fold|cut'),
            tf('Lining up edges helps neat folding.', true),
            ch('"Kami" means…', '*paper|boat|water'),
          ],
          ms: ['Makes basic folds', 'Follows sequential instructions', 'Tests and compares results'],
        }),
      ]),
    ]),
    S('s6', 'Weaving, block printing and India\'s craft traditions.', [
      'Weave on a simple loom', 'Make a block print', 'Recognise Indian crafts and their regions',
    ], [
      U('weaving', 'Weaving and Threads', 'Over and under.', 'Warp and weft; Paper and card looms; Indian textiles', [
        L('weaving', 'Over, Under, Over, Under', {
          o: ['Weave using warp and weft on a card loom', 'Name famous Indian woven textiles'],
          p: ['Can cut and follow patterns'],
          e: [
            'Weaving makes cloth by crossing threads over and under each other. The threads stretched tight on the loom are the warp; the thread woven across is the weft.',
            'On a simple card loom, you wind string around notches to make the warp, then weave wool over and under. The next row goes under and over, so the threads lock together.',
            'India has famous woven textiles: Paithani silk saris from Paithan in Maharashtra with peacock borders, Banarasi silk from Varanasi, Kanjeevaram silk from Kanchipuram, and Pochampally ikat from Telangana.',
          ],
          v: 'weave = to cross threads over and under; loom = a frame for weaving; warp = threads held tight on a loom; weft = thread woven across the warp',
          x: ['A paper mat woven from strips.', 'A Paithani sari with a peacock border.'],
          s: ['Aaji\'s Paithani', 'Aaji unfolded her wedding Paithani, shimmering purple and gold. "Weavers in Paithan worked many months on this," she said, pointing to the peacocks in the border. Ivaan traced the threads. "Over and under, just like my paper mat!" "Exactly," said Aaji. "But a little more practice."'],
          a: [
            mt('Match the term', 'warp=threads held tight|weft=thread woven across|loom=weaving frame'),
            ch('Paithani saris come from…', '*Maharashtra|Kashmir|Assam'),
            tf('In weaving, each row alternates over and under.', true),
            ch('Kanjeevaram silk comes from…', '*Kanchipuram|Kolkata|Kochi'),
          ],
          t: ['Why does the next row start differently?', 'How long do you think it takes to weave a sari?'],
          k: ['Explain warp and weft using your woven piece.'],
          m: ['Card Loom Weaving', 'stiff card, string, wool, safety scissors', 'Cut notches at the top and bottom of the card | Wind string for the warp | Weave wool over and under for the weft | Push rows together and finish the edges', "An adult should prepare any notches or cuts in stiff card. Use blunt, child-safe scissors with supervision and keep string away from the neck."],
          q: [
            ch('A frame for weaving is a…', '*loom|kiln|lathe'),
            tf('Pochampally ikat comes from Telangana.', true),
            ch('Banarasi silk comes from…', '*Varanasi|Mumbai|Chennai'),
          ],
          ms: ['Weaves on a simple loom', 'Uses warp and weft vocabulary', 'Names Indian textiles'],
        }),
      ]),
      U('block-print', 'Printing Patterns', 'Block printing and India\'s crafts.', 'Making a stamp; Repeating patterns; Craft map of India', [
        L('block-printing', 'Block Printing', {
          o: ['Make a stamp and print a repeating pattern', 'Match Indian crafts to their regions'],
          p: ['Knows patterns'],
          e: [
            'Block printing uses a carved block dipped in colour and pressed onto cloth or paper. Repeating the print makes a pattern.',
            'In Rajasthan, Sanganer and Bagru are famous for hand block printing with wooden blocks and natural dyes. Ajrakh printing is a tradition of Kutch in Gujarat and Sindh.',
            'India has many other crafts: Bidri metalwork from Bidar, Channapatna wooden toys from Karnataka, Kondapalli toys from Andhra Pradesh, and Warli painting from Maharashtra. Many have Geographical Indication tags.',
          ],
          v: 'block print = a print made with a carved block; pattern = a design that repeats; dye = a colour used to stain cloth; artisan = a skilled craft worker',
          x: ['Bagru prints with natural indigo.', 'Channapatna lacquered wooden toys.'],
          s: ['The Printer\'s Rhythm', 'In Bagru, Ivaan watched an artisan press a carved wooden block onto cloth: dip, press, thump, lift. Dip, press, thump, lift. A row of perfect flowers appeared. "How do you keep them straight?" Ivaan asked. The artisan tapped his head. "Thirty years of practice — and a good eye."'],
          a: [
            mt('Match the craft to the region', 'Bagru printing=Rajasthan|Ajrakh=Kutch|Channapatna toys=Karnataka|Bidri=Bidar'),
            ch('A skilled craft worker is an…', '*artisan|astronaut|athlete'),
            tf('Repeating a print makes a pattern.', true),
            od('Put block printing in order', 'Carve the block|Dip it in colour|Press it onto cloth|Lift and repeat'),
          ],
          t: ['Why might artisans use natural dyes?', 'Why is it important to buy crafts from artisans fairly?'],
          k: ['Show your printed pattern and explain how you made it.'],
          m: ['Potato or Foam Block Print', 'a potato or craft foam, paint, paper (with an adult for cutting)', 'Draw a simple shape | Carve it with adult help | Dip in paint and press onto paper | Repeat to make a pattern', "An adult must do any cutting or carving. Children should use only the prepared block, non-toxic washable paint and a protected work surface."],
          q: [
            ch('A colour used to stain cloth is a…', '*dye|glue|clay'),
            tf('Sanganer is famous for block printing.', true),
            ch('Kondapalli toys come from…', '*Andhra Pradesh|Punjab|Goa'),
          ],
          ms: ['Prints repeating patterns', 'Names Indian crafts and regions', 'Values artisans\' skill'],
        }),
      ]),
    ]),
    S('s7', 'Sculpture, paper engineering and 3D design.', [
      'Build sculptures using additive and subtractive methods', 'Make pop-up mechanisms', 'Design in 3D with nets',
    ], [
      U('sculpture', 'Sculpture', 'Adding and taking away.', 'Additive and subtractive sculpture; Armatures; Famous sculpture traditions', [
        L('sculpture', 'Adding and Taking Away', {
          o: ['Distinguish additive and subtractive sculpture', 'Build a sculpture using an armature'],
          p: ['Can shape clay'],
          e: [
            'Sculpture is three-dimensional art. In subtractive sculpture, the artist removes material — carving wood or stone. In additive sculpture, the artist builds up material — modelling clay or welding metal.',
            'An armature is a frame, often of wire, that supports a sculpture from inside, like a skeleton.',
            'India has great sculpture traditions: the rock-cut Kailasa temple at Ellora, carved from a single rock in the 8th century; Chola bronzes made by the lost-wax method (still practised at Swamimalai); and Dhokra metal casting by tribal artisans.',
          ],
          v: 'sculpture = three-dimensional art; subtractive = taking material away; additive = building material up; armature = an inner frame supporting a sculpture',
          x: ['Carving soap with a spoon (subtractive).', 'A foil armature covered in clay (additive).'],
          s: ['The Temple From One Rock', 'At Ellora, workers began at the top of a hill and carved downwards, removing an enormous amount of rock — estimated at around 200,000 tonnes — to reveal the Kailasa temple, complete with pillars, elephants and towers. Nothing was added; everything was taken away. Ivaan stared up. "They must have planned every chip."'],
          a: [
            mt('Match the method', 'carving stone=subtractive|modelling clay=additive|wire frame=armature'),
            ch('The Kailasa temple at Ellora was…', '*carved from a single rock|built of bricks|made of glass'),
            tf('Chola bronzes were made by the lost-wax method.', true),
            ch('Three-dimensional art is…', '*sculpture|drawing|poetry'),
          ],
          t: ['Why must subtractive sculptors plan very carefully?', 'What does an armature do?'],
          k: ['Explain additive and subtractive methods using your sculptures.'],
          m: ['Two-Method Sculpture', 'a soap bar, a spoon, foil, air-dry clay (with an adult)', 'Carve a simple shape from soap | Make a foil armature of a figure | Cover it with clay | Compare the two methods'],
          q: [
            ch('An inner frame in a sculpture is an…', '*armature|apron|arch'),
            tf('Dhokra is a metal-casting craft.', true),
            ch('Taking material away is…', '*subtractive|additive|multiplication'),
          ],
          ms: ['Distinguishes sculpture methods', 'Uses an armature', 'Describes Indian sculpture traditions'],
        }),
      ]),
      U('paper-engineering', 'Paper Engineering', 'Pop-ups and nets.', 'Pop-up mechanisms; Nets of 3D shapes; Making a box', [
        L('pop-ups', 'Pop-Ups and Nets', {
          o: ['Make a pop-up card using a mechanism', 'Draw and fold a net to make a 3D box'],
          p: ['Knows 2D and 3D shapes'],
          e: [
            'Paper engineering uses folds and cuts to make paper move or stand up. A simple pop-up uses a "box fold": two parallel cuts on a fold, pushed inward, make a step that rises when the card opens.',
            'A net is a flat shape that folds up into a 3D shape. A cube has a net of six squares. Adding tabs lets you glue the edges together.',
            'Packaging designers use nets to make boxes, and pop-up book artists engineer complex scenes that spring up from the page.',
          ],
          v: 'mechanism = parts that make something move; net = a flat shape that folds into a 3D shape; tab = a small flap for gluing; parallel = side by side and never meeting',
          x: ['A birthday card with a popping cake.', 'Unfolding a cereal box to see its net.'],
          s: ['The Unfolded Box', 'Zuri carefully unglued a cereal box and laid it flat. "It\'s a strange cross shape with flaps!" Her teacher explained it was a net. Zuri drew her own net for a small gift box, added tabs, folded and glued. It worked! She filled it with homemade sweets for her friend\'s birthday.'],
          a: [
            ct('How many squares are in the net of a cube? ⬛⬛⬛⬛⬛⬛', 6),
            ch('A flat shape that folds into 3D is a…', '*net|tab|crease'),
            tf('A box fold uses two parallel cuts.', true),
            ch('Small flaps for gluing are…', '*tabs|nets|creases'),
          ],
          t: ['Why do packages have tabs?', 'How could you make two things pop up at once?'],
          k: ['Show how your pop-up mechanism works.'],
          m: ['Pop-Up Card and Gift Box', 'card, ruler, scissors, glue', 'Make a pop-up card with a box fold | Draw a net for a small cube box with tabs | Fold and glue the box | Give both as a gift', "Use child-safe scissors and non-toxic glue with adult supervision. Adults should handle any sharp tools; keep small pieces away from younger children."],
          q: [
            ch('Parts that make something move are a…', '*mechanism|material|motif'),
            tf('Packaging designers use nets.', true),
            ch('Lines side by side that never meet are…', '*parallel|crossed|curved'),
          ],
          ms: ['Makes a working pop-up', 'Constructs a 3D net', 'Explains paper engineering'],
        }),
      ]),
    ]),
    S('s9', 'Textiles, sustainable materials and design thinking.', [
      'Understand fibres and textile processes', 'Evaluate materials for sustainability', 'Apply the design thinking process',
    ], [
      U('textiles', 'Fibres and Fabrics', 'From fibre to fabric.', 'Natural and synthetic fibres; Spinning and dyeing; Khadi', [
        L('fibres', 'From Cotton Boll to Cloth', {
          o: ['Compare natural and synthetic fibres', 'Explain the process from fibre to fabric, including khadi'],
          p: ['Knows weaving'],
          e: [
            'Natural fibres come from plants (cotton, jute, linen) and animals (wool, silk). Synthetic fibres, like polyester and nylon, are made from petrochemicals.',
            'Making fabric involves cleaning fibres, spinning them into yarn, weaving or knitting the yarn into cloth, and dyeing or printing it. Natural dyes come from plants like indigo and madder.',
            'Khadi is hand-spun, hand-woven cloth. Gandhi promoted the charkha (spinning wheel) and khadi in the freedom struggle as a symbol of self-reliance (swadeshi) and as an alternative to imported mill cloth.',
          ],
          v: 'fibre = a thin thread-like strand; yarn = spun fibres ready for weaving; synthetic = made by people from chemicals; khadi = hand-spun, hand-woven cloth',
          x: ['Indigo-dyed cotton.', 'The charkha at the centre of the Congress flag of the freedom movement.'],
          s: ['The Spinning Wheel Revolution', 'In the 1920s, Gandhi asked Indians to spin yarn every day on a charkha and wear khadi. Across the country, people from every background sat at spinning wheels. The humble wheel became a symbol of independence and sat at the centre of the Congress flag; when India adopted its national flag in 1947, the charkha was replaced by the Ashoka Chakra.'],
          a: [
            mt('Match the fibre to its source', 'cotton=plant|silk=silkworm|wool=sheep|polyester=petrochemicals'),
            od('Put fabric making in order', 'Clean the fibres|Spin into yarn|Weave into cloth|Dye or print'),
            tf('Khadi is hand-spun and hand-woven.', true),
            ch('The charkha is a…', '*spinning wheel|loom|kiln'),
          ],
          t: ['Why was khadi a powerful symbol?', 'What are the pros and cons of synthetic fibres?'],
          k: ['Explain the journey from fibre to fabric with samples.'],
          m: ['🧪 Fibre Investigation', 'samples of cotton, wool, silk and polyester fabric, magnifier, water', 'Examine each fabric with a magnifier | Test how quickly a drop of water absorbs | Compare warmth and stretch | Record results in a table', "Use clean fabric samples and a small amount of water. Do not taste materials; wash hands after handling samples."],
          q: [
            ch('Spun fibres ready for weaving are…', '*yarn|dye|fibreglass'),
            tf('Indigo is a natural dye.', true),
            ch('Made by people from chemicals is…', '*synthetic|natural|organic'),
          ],
          ms: ['Compares fibres', 'Explains textile processes', 'Connects khadi to history'],
        }),
      ]),
      U('design-thinking', 'Design Thinking', 'Making for real needs.', 'Empathise and define; Ideate and prototype; Test and improve', [
        L('design-process', 'The Design Thinking Process', {
          o: ['Apply the design thinking process to a real problem', 'Evaluate materials for sustainability'],
          p: ['Can plan and build models'],
          e: [
            'Design thinking is a process for solving problems creatively, popularised by the design firm IDEO and Stanford\'s d.school. Its stages are: Empathise (understand users), Define (state the problem), Ideate (generate ideas), Prototype (build quick models) and Test (try them and learn).',
            'The process is a cycle, not a straight line — designers often go back and improve.',
            'Sustainable design considers a product\'s whole life cycle: materials, energy, use and disposal. Designers ask: can it be repaired, reused, recycled or composted?',
          ],
          v: 'prototype = an early model for testing; empathise = to understand another\'s feelings and needs; life cycle = the stages of a product from materials to disposal; ideate = to generate ideas',
          x: ['Designing a lunch bag that doesn\'t leak.', 'Choosing jute over plastic.'],
          s: ['A Better Bag for Aaji', 'Zuri noticed her grandmother struggled to carry vegetables in thin plastic bags. She interviewed Aaji (empathise), defined the problem, sketched ten ideas and made a prototype from an old sari with padded handles. Aaji tested it; the handles were too thin. Zuri improved them. Aaji now uses it every market day.'],
          a: [
            od('Put design thinking in order', 'Empathise|Define|Ideate|Prototype|Test'),
            ch('A prototype is…', '*an early model for testing|the final product|a drawing tool'),
            tf('Design thinking often loops back to improve.', true),
            ch('Sustainable design considers…', '*the whole life cycle|only the colour|only the price'),
          ],
          t: ['Why start with empathy?', 'Is a product that lasts longer more sustainable?'],
          k: ['Pitch your design solution to a panel.'],
          m: ['Design Challenge', 'recycled materials, notebook, a real user to interview', 'Interview a user about a daily problem | Define the problem and sketch at least eight ideas | Build and test a prototype | Improve it and present a design journal'],
          q: [
            ch('Understanding users\' needs is…', '*empathising|ideating|testing'),
            tf('Designers ask whether products can be repaired.', true),
            ch('Generating many ideas is…', '*ideating|defining|disposing'),
          ],
          ms: ['Follows the design process', 'Builds and improves prototypes', 'Evaluates sustainability'],
        }),
      ]),
    ]),
    S('s12', 'Craft, livelihood, heritage and the future of making.', [
      'Analyse craft economies and fair trade', 'Evaluate heritage protection such as GI tags', 'Explore digital fabrication and the maker movement',
    ], [
      U('craft-economy', 'Craft and Livelihood', 'Artisans, markets and heritage.', 'Artisan economies; Fair trade; Geographical Indications', [
        L('craft-livelihood', 'Crafts, Fair Trade and GI Tags', {
          o: ['Analyse challenges facing artisan economies', 'Evaluate fair trade and Geographical Indications as protections'],
          p: ['Knows Indian crafts'],
          e: [
            'Crafts are a major source of livelihood in India, employing millions of artisans, many in rural areas and many of them women. Artisans face competition from machine-made goods, middlemen who take most of the profit, and limited access to markets.',
            'Fair trade aims to give producers fair prices, safe conditions and long-term partnerships. Cooperatives and organisations such as SEWA (Self-Employed Women\'s Association, founded by Ela Bhatt in 1972) help artisans organise.',
            'A Geographical Indication (GI) tag protects products linked to a place, such as Darjeeling tea (India\'s first GI, 2004–05) and Kolhapuri chappals. GI tags can prevent imitation, but critics note benefits do not always reach individual artisans.',
          ],
          v: 'livelihood = a way of earning a living; fair trade = trade ensuring fair prices for producers; cooperative = a business owned by its members; Geographical Indication = a label protecting products linked to a place',
          x: ['Kolhapuri chappals with a GI tag.', 'Women\'s embroidery cooperatives in Kutch.'],
          s: ['The Chappal Controversy', 'In 2025, a European fashion house displayed sandals that closely resembled Kolhapuri chappals, sparking debate in India about credit and fair benefit for the artisans of Kolhapur. The episode raised questions about how GI tags, design credit and fair partnerships can protect traditional crafts in a global market.'],
          a: [
            ch('India\'s first GI tag went to…', '*Darjeeling tea|Basmati rice|Mysore silk'),
            mt('Match the term', 'fair trade=fair prices for producers|cooperative=member-owned business|GI tag=place-linked protection'),
            tf('Critics say GI benefits do not always reach individual artisans.', true),
            ch('SEWA was founded by…', '*Ela Bhatt|Rukmini Devi|Ravi Varma'),
          ],
          t: ['How can consumers support artisans fairly?', 'Is it ever acceptable for designers to borrow traditional designs?'],
          k: ['Present a case study of one craft and its economy.'],
          m: ['Craft Economy Case Study', 'interviews with artisans (with consent) or documented sources', 'Choose one Indian craft | Research its production, market and challenges | Evaluate GI or fair-trade protections | Write a 1500-word report with recommendations'],
          q: [
            ch('A way of earning a living is a…', '*livelihood|lifestyle|library'),
            tf('Middlemen can take much of the profit from artisans.', true),
            ch('A business owned by its members is a…', '*cooperative|monopoly|museum'),
          ],
          ms: ['Analyses craft economies', 'Evaluates protections critically', 'Proposes fair solutions'],
        }),
      ]),
      U('future-making', 'The Future of Making', 'Digital fabrication and makers.', '3D printing and laser cutting; The maker movement; Craft and technology together', [
        L('digital-fab', 'Makers and Machines', {
          o: ['Explain digital fabrication technologies', 'Evaluate how technology and traditional craft can work together'],
          p: ['Knows design thinking'],
          e: [
            '3D printers build objects layer by layer from digital designs, usually from plastic filament. Laser cutters cut precise shapes from wood, card or acrylic. CNC machines carve materials automatically.',
            'The maker movement celebrates people making, repairing and sharing designs — in makerspaces, fab labs and online. Open-source designs let anyone build and improve them.',
            'Technology and craft can combine: designers use digital tools to help artisans prototype new products, while hand skills give objects character machines cannot copy. Questions remain about job loss, plastic waste and preserving skills.',
          ],
          v: 'digital fabrication = making objects using computer-controlled machines; 3D printing = building objects layer by layer; makerspace = a shared workshop for making; open source = designs shared freely to use and improve',
          x: ['A 3D-printed prosthetic hand from an open-source design.', 'Laser-cut stencils for block printing.'],
          s: ['A Hand for Ananya', 'Volunteers at a makerspace downloaded an open-source design for a prosthetic hand, adjusted its size for a girl named Ananya, and printed it overnight. It cost a small fraction of a commercial prosthetic. As Ananya picked up a cup for the first time, the volunteers realised that sharing designs could change lives.'],
          a: [
            mt('Match the machine', '3D printer=builds layer by layer|laser cutter=cuts precise shapes|CNC machine=carves automatically'),
            ch('Designs shared freely to use and improve are…', '*open source|secret|patented only'),
            tf('Technology and traditional craft can work together.', true),
            ch('A shared workshop for making is a…', '*makerspace|marketplace|museum'),
          ],
          t: ['Will machines replace artisans? Why or why not?', 'How should makers handle plastic waste?'],
          k: ['Debate the impact of digital fabrication on traditional crafts.'],
          m: ['Craft-Tech Fusion Project', 'design software (free), access to a makerspace if possible, traditional materials', 'Choose a traditional craft | Design a product combining digital tools and hand skill | Prototype it | Present a reflection on sustainability and authenticity'],
          q: [
            ch('Building objects layer by layer is…', '*3D printing|weaving|painting'),
            tf('The maker movement values sharing designs.', true),
            ch('Making with computer-controlled machines is…', '*digital fabrication|handloom|pottery'),
          ],
          ms: ['Explains digital fabrication', 'Evaluates technology-craft relationships', 'Designs fusion products'],
        }),
      ]),
    ]),
  ],
});
