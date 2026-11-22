import { subject, S, U, L, ch, tf, od, mt } from '../dsl.ts';

export default subject({
  id: 'art',
  description: 'Drawing and painting from first scribbles to art criticism: lines, shapes and colours; mixing paint; texture and collage; drawing from observation; Indian folk and classical art; perspective and composition; great artists from India and the world; the elements and principles of design; art history; and how to look at, talk about and build a portfolio of art.',
  stages: [
    S('s4', 'Lines, shapes and colours: making marks with joy.', [
      'Draw different kinds of lines and shapes', 'Name and use primary colours', 'Talk about their own pictures',
    ], [
      U('lines-shapes', 'Lines and Shapes', 'Every picture starts with a line.', 'Straight, wavy and zigzag lines; Circles, squares and triangles; Shapes make pictures', [
        L('lines', 'Lines Go for a Walk', {
          o: ['Draw straight, wavy, zigzag and curly lines', 'Combine shapes to make a picture'],
          p: ['Can hold a crayon'],
          e: [
            'A line is a mark that goes from one place to another. Lines can be straight, wavy like water, zigzag like lightning, or curly like a snail\'s shell.',
            'When a line goes all the way round and meets itself, it makes a shape: a circle, a square, a triangle.',
            'Artists put lines and shapes together to make pictures. A circle and some lines can become a sun! A square and a triangle can become a house.',
          ],
          v: 'line = a mark from one point to another; shape = a closed outline like a circle or square; zigzag = a line with sharp ups and downs; artist = a person who makes art',
          x: ['Wavy lines for the sea.', 'A triangle on a square for a house.'],
          s: ['The Line Who Went for a Walk', 'Little Line woke up on a white page and decided to go for a walk. She walked straight across the meadow, wobbled wavily over a river, zigzagged up a mountain and curled round and round into a snail shell. When she looked back, she had drawn a whole picture! "Walking is wonderful," she giggled.'],
          a: [
            ch('Which line looks like lightning?', '*zigzag|straight|curly'),
            ch('A circle and lines can make a…', '*sun|car|chair'),
            mt('Match the line to the thing', 'wavy=water|zigzag=lightning|curly=snail shell'),
            tf('A square has four sides.', true),
          ],
          t: ['What can you make with only circles?', 'Which line is your favourite to draw?'],
          k: ['Show a grown-up your drawing and name the lines you used.'],
          m: ['Line Walk Picture', 'big paper, crayons', 'Draw a line that walks across the page | Make it go straight, wavy, zigzag and curly | Turn the line into a picture | Tell the story of your line'],
          q: [
            ch('A shape made with three sides is a…', '*triangle|circle|square'),
            tf('Lines can be curly.', true),
            ch('A person who makes art is an…', '*artist|astronaut|athlete'),
          ],
          ms: ['Draws varied lines', 'Names basic shapes', 'Combines shapes into pictures'],
        }),
      ]),
      U('colours', 'Colour Fun', 'Red, yellow and blue.', 'Primary colours; Mixing makes new colours; Colours and feelings', [
        L('primary-colours', 'Red, Yellow and Blue', {
          o: ['Name the three primary colours', 'Mix two primary colours to make a new colour'],
          p: ['Knows some colour names'],
          e: [
            'In painting, red, yellow and blue are called primary colours. We can mix them to make many other colours.',
            'Red and yellow make orange. Yellow and blue make green. Blue and red make purple.',
            'Colours can make us feel things too. Bright yellow can feel happy and sunny; soft blue can feel calm.',
          ],
          v: 'primary colours = red, yellow and blue in painting; mix = to put together; orange = the colour made by red and yellow; purple = the colour made by blue and red',
          x: ['Yellow and blue paint making green grass.', 'Red and yellow making an orange sunset.'],
          s: ['The Three Paint Pots', 'Three paint pots lived on a shelf: Red, Yellow and Blue. One rainy day they got bored. Yellow dripped onto Blue — and suddenly there was Green! Red splashed onto Yellow — Orange! Blue bumped into Red — Purple! "Look at all the friends we made," they laughed, painting a rainbow together.'],
          a: [
            ch('Yellow and blue make…', '*green|orange|purple'),
            ch('Red and yellow make…', '*orange|green|blue'),
            mt('Match the mix', 'red + yellow=orange|yellow + blue=green|blue + red=purple'),
            tf('Red, yellow and blue are primary colours.', true),
          ],
          t: ['What colour makes you feel happy?', 'What do you think would happen if you mixed all three?'],
          k: ['Tell a grown-up how to make green paint.'],
          m: ['🧪 Colour Mixing Bags', 'zip bags, red, yellow and blue paint (with an adult)', 'Put two blobs of different colours in a bag | Seal it tightly | Squish the bag to mix | Name the new colour you made'],
          q: [
            ch('Blue and red make…', '*purple|yellow|green'),
            tf('Mixing colours can make new colours.', true),
            ch('How many primary colours are there in painting?', '*three|two|ten'),
          ],
          ms: ['Names primary colours', 'Predicts mixing results', 'Uses colour to show feeling'],
        }),
      ]),
    ]),
    S('s5', 'Warm and cool colours, texture and collage.', [
      'Sort warm and cool colours', 'Create texture with different materials', 'Make a collage with a theme',
    ], [
      U('warm-cool', 'Warm and Cool Colours', 'Colours have temperatures.', 'Warm colours; Cool colours; Light and dark tints', [
        L('warm-cool', 'Fire Colours and Ice Colours', {
          o: ['Sort colours into warm and cool', 'Make lighter tints by adding white and darker shades by adding black'],
          p: ['Knows primary and secondary colours'],
          e: [
            'Artists call red, orange and yellow warm colours, because they remind us of fire and sunshine. Blue, green and purple are cool colours, like water, leaves and ice.',
            'Warm colours often seem to jump forward in a picture; cool colours seem to sit back and feel calm.',
            'Adding white to a colour makes a lighter tint (red + white = pink). Adding black makes a darker shade.',
          ],
          v: 'warm colours = red, orange and yellow; cool colours = blue, green and purple; tint = a colour mixed with white; shade = a colour mixed with black',
          x: ['A sunset painted in warm colours.', 'An underwater scene in cool colours.'],
          s: ['The Two Kingdoms', 'In the Kingdom of Fire, everything glowed red, orange and yellow, and the people were lively and loud. In the Kingdom of Ice, everything shimmered blue, green and purple, and the people were calm and quiet. One day a painter visited both and painted a picture where they met — and it was the most beautiful picture of all.'],
          a: [
            ch('Which is a warm colour?', '*orange|blue|green'),
            ch('Which is a cool colour?', '*blue|red|yellow'),
            ch('Red + white makes…', '*pink|brown|green'),
            tf('Adding black makes a darker shade.', true),
          ],
          t: ['Would you paint a cosy room in warm or cool colours?', 'How does a cool-coloured picture make you feel?'],
          k: ['Describe a picture using the words warm and cool.'],
          m: ['Half-and-Half Painting', 'paper, paints', 'Fold paper in half | Paint one half with warm colours and one with cool | Make one tint and one shade | Talk about how each half feels'],
          q: [
            ch('A colour mixed with white is a…', '*tint|shade|line'),
            tf('Yellow is a cool colour.', false),
            ch('Cool colours remind us of…', '*water and ice|fire|the sun'),
          ],
          ms: ['Sorts warm and cool colours', 'Makes tints and shades', 'Uses colour temperature on purpose'],
        }),
      ]),
      U('texture', 'Texture and Collage', 'How things feel and look.', 'Rough and smooth; Rubbings; Collage pictures', [
        L('collage', 'Rough, Smooth and Stuck Together', {
          o: ['Describe textures using words like rough, smooth and bumpy', 'Make a collage using different materials'],
          p: ['Can cut and glue with help'],
          e: [
            'Texture is how something feels — rough like tree bark, smooth like a pebble, bumpy like a lemon, soft like wool.',
            'Artists can show texture by making a rubbing: put paper over a leaf or coin and rub with the side of a crayon.',
            'A collage is a picture made by sticking different materials together — paper, fabric, leaves, buttons. The French word "coller" means "to glue". Artists such as Henri Matisse made famous collages with cut paper.',
          ],
          v: 'texture = how something feels or looks like it feels; rubbing = a picture made by rubbing a crayon over a textured surface; collage = a picture made by gluing materials together; rough = not smooth',
          x: ['A leaf rubbing showing veins.', 'A collage elephant made from grey fabric.'],
          s: ['The Treasure Walk', 'Ivaan and Aaji went on a texture walk. They found rough bark, smooth stones, a fluffy feather and crinkly leaves. At home, they made rubbings and then glued everything into a collage of a magical forest. "This tree is rough because it\'s real bark!" Ivaan said proudly.'],
          a: [
            mt('Match the texture', 'tree bark=rough|pebble=smooth|wool=soft'),
            ch('A picture made by gluing materials together is a…', '*collage|sculpture|photo'),
            tf('You can make a rubbing of a leaf with a crayon.', true),
            ch('"Coller" in French means…', '*to glue|to colour|to cut'),
          ],
          t: ['What textures can you find in your room?', 'Why might an artist use real materials in a picture?'],
          k: ['Describe three textures in your collage to someone.'],
          m: ['Texture Collage', 'card, glue, fabric, paper, leaves, buttons', 'Collect materials with different textures | Make rubbings of two of them | Plan a picture | Glue the pieces into a collage and name the textures'],
          q: [
            ch('Texture is…', '*how something feels|a colour|a number'),
            tf('Matisse made collages with cut paper.', true),
            ch('A lemon\'s skin is…', '*bumpy|glassy|furry'),
          ],
          ms: ['Describes textures', 'Makes rubbings', 'Creates a themed collage'],
        }),
      ]),
    ]),
    S('s6', 'Drawing what we see and exploring Indian folk art.', [
      'Draw from observation with shading', 'Recognise Indian folk art styles', 'Create art inspired by traditional styles',
    ], [
      U('observation', 'Drawing What We See', 'Observation and shading.', 'Looking carefully; Light and shadow; Shading techniques', [
        L('shading', 'Light, Shadow and Shading', {
          o: ['Draw an object by looking carefully', 'Use shading to make shapes look 3D'],
          p: ['Can draw basic shapes'],
          e: [
            'Observational drawing means drawing what you actually see, not what you think something looks like. Artists look at the object more than the paper.',
            'Light makes some parts of an object bright (highlights) and other parts dark (shadows). An object also casts a shadow on the table.',
            'Shading shows light and shadow. You can press harder for darker areas, or use hatching (lines side by side) and cross-hatching (crossed lines). Shading turns a flat circle into a round ball.',
          ],
          v: 'observation = looking carefully; highlight = the brightest part of an object; hatching = shading with parallel lines; cast shadow = the shadow an object throws onto a surface',
          x: ['Shading an apple with a highlight.', 'Cross-hatching the dark side of a cup.'],
          s: ['The Apple Lesson', 'Kiko drew an apple as a red circle with a stalk. His art teacher placed a real apple by the window. "Look again." Kiko noticed a bright white spot, a darker side and a shadow on the table. He drew it again, shading gently. The new apple looked so round he almost wanted to bite it.'],
          a: [
            ch('Observational drawing means drawing…', '*what you actually see|from memory only|with your eyes shut'),
            mt('Match the term', 'highlight=brightest part|hatching=parallel lines|cast shadow=shadow on the surface'),
            tf('Shading can make a circle look like a ball.', true),
            ch('Which way should you look most while drawing from observation?', '*at the object|at the ceiling|at your shoes'),
          ],
          t: ['Where is the light coming from in the room?', 'Why might drawing from memory be different from drawing from life?'],
          k: ['Explain how you shaded your drawing.'],
          m: ['Still-Life Study', 'pencil, paper, three objects, a lamp', 'Arrange three objects under a lamp | Draw their outlines while looking carefully | Add shading and cast shadows | Compare with a drawing from memory'],
          q: [
            ch('Crossed lines for shading are called…', '*cross-hatching|zigzag|dots'),
            tf('Objects cast shadows away from the light.', true),
            ch('The brightest part of an object is the…', '*highlight|shadow|outline'),
          ],
          ms: ['Draws from observation', 'Uses shading techniques', 'Identifies the light source'],
        }),
      ]),
      U('folk-art', 'Indian Folk Art', 'Warli, Madhubani and more.', 'Warli of Maharashtra; Madhubani of Bihar; Gond and Pattachitra', [
        L('warli-madhubani', 'Warli and Madhubani', {
          o: ['Recognise the features of Warli and Madhubani art', 'Create a picture inspired by a folk style, crediting its origin'],
          p: ['Knows basic shapes'],
          e: [
            'Warli art comes from the Warli people of the Sahyadri region of Maharashtra. It uses simple white shapes — circles, triangles and lines — on a mud or red-brown background to show dancing, farming and village life. People are made of two triangles joined at the tip!',
            'Madhubani (Mithila) art comes from the Mithila region of Bihar and Nepal. It traditionally was painted by women on walls, using bright colours and patterns, with every space filled with flowers, fish, birds and borders.',
            'Other folk styles include Gond art from Madhya Pradesh (made of dots and lines) and Pattachitra from Odisha. Warli painting and Madhubani painting both have Geographical Indication (GI) tags that recognise where they come from.',
          ],
          v: 'folk art = traditional art made by communities; Warli = folk art of the Warli people of Maharashtra; Madhubani = folk art from the Mithila region; motif = a repeated design',
          x: ['The circle dance (tarpa dance) in Warli art.', 'Fish motifs in Madhubani paintings.'],
          s: ['The Painted Wall', 'In a Warli village, Ivaan watched an artist mix rice paste with water and use a bamboo stick as a brush. On the red mud wall appeared tiny people made of triangles, dancing in a spiral around a musician. "Every picture tells about our life," the artist said. "Now you try — and remember it comes from our people."'],
          a: [
            mt('Match the art to its region', 'Warli=Maharashtra|Madhubani=Bihar|Pattachitra=Odisha|Gond=Madhya Pradesh'),
            ch('Warli people are drawn using…', '*two triangles|squares only|photos'),
            tf('Madhubani art often fills every space with patterns.', true),
            ch('Traditional Warli paint is white made from…', '*rice paste|chalk powder only|oil paint'),
          ],
          t: ['Why is it important to say where a folk style comes from?', 'What would you show about your life in Warli style?'],
          k: ['Explain the features of Warli art to your family.'],
          m: ['Warli Life Picture', 'brown paper, white paint or crayon, thin brush', 'Draw people using two triangles and circle heads | Show a scene from your day | Add a spiral dance or farm | Label it "inspired by Warli art of Maharashtra"'],
          q: [
            ch('Madhubani art comes from the region of…', '*Mithila|Kashmir|Goa'),
            tf('Gond art uses dots and lines.', true),
            ch('A repeated design is a…', '*motif|museum|mural'),
          ],
          ms: ['Recognises folk styles', 'Creates folk-inspired art', 'Credits origins respectfully'],
        }),
      ]),
    ]),
    S('s7', 'Perspective, composition and great artists.', [
      'Use one-point perspective', 'Plan a balanced composition', 'Discuss the work of Indian and world artists',
    ], [
      U('perspective', 'Perspective and Composition', 'Making flat pictures look deep.', 'One-point perspective; Horizon line and vanishing point; Rule of thirds', [
        L('one-point', 'The Vanishing Point', {
          o: ['Draw a scene in one-point perspective', 'Use the rule of thirds to plan a composition'],
          p: ['Can draw from observation'],
          e: [
            'Perspective is a way of making a flat picture look deep. Things far away look smaller and closer together.',
            'In one-point perspective, you draw a horizon line (where land meets sky) and a vanishing point on it. Lines going into the distance — like a road or railway — all meet at the vanishing point. Renaissance artists in Italy, such as Brunelleschi, developed this system in the 1400s.',
            'Composition is how you arrange things in a picture. The rule of thirds divides the page into a 3×3 grid; placing important things on the lines or where they cross often looks balanced and interesting.',
          ],
          v: 'perspective = showing depth on a flat surface; horizon line = where land and sky seem to meet; vanishing point = where parallel lines seem to meet; composition = the arrangement of a picture',
          x: ['Railway tracks meeting in the distance.', 'A tree placed on a third line in a landscape photo.'],
          s: ['The Disappearing Road', 'On a long, straight road, Zuri noticed something strange: the road looked narrower and narrower until it became a single dot. The trees beside it got smaller too. "It\'s the vanishing point!" she said. That evening, she drew the road with a ruler, and the picture seemed to stretch for miles.'],
          a: [
            ch('Where do parallel lines meet in one-point perspective?', '*the vanishing point|the corner|the bottom'),
            ch('Things far away look…', '*smaller|bigger|brighter always'),
            tf('The rule of thirds uses a 3×3 grid.', true),
            mt('Match the term', 'horizon line=where land meets sky|vanishing point=where lines meet|composition=arrangement'),
          ],
          t: ['Why did medieval paintings often look flat?', 'Where would you put the main subject in your picture?'],
          k: ['Explain how you drew depth in your perspective scene.'],
          m: ['Perspective Street', 'paper, ruler, pencil', 'Draw a horizon line and vanishing point | Draw a road and buildings using lines to the point | Add windows and trees that get smaller | Colour your street'],
          q: [
            ch('One-point perspective was developed in…', '*Renaissance Italy|ancient Egypt|the 21st century'),
            tf('Composition is how a picture is arranged.', true),
            ch('Where land and sky seem to meet is the…', '*horizon line|vanishing point|frame'),
          ],
          ms: ['Draws in one-point perspective', 'Plans composition', 'Explains depth techniques'],
        }),
      ]),
      U('artists', 'Great Artists', 'Indian and world masters.', 'Raja Ravi Varma; Amrita Sher-Gil; Vincent van Gogh; Frida Kahlo', [
        L('masters', 'Meet the Masters', {
          o: ['Describe the work of four major artists', 'Compare artworks using art vocabulary'],
          p: ['Knows colour, line and texture'],
          e: [
            'Raja Ravi Varma (1848–1906) from Kerala painted scenes from Indian epics in a realistic, oil-painting style. His printing press made affordable prints that spread his images of gods and heroines across India.',
            'Amrita Sher-Gil (1913–1941), of Hungarian and Indian heritage, painted the lives of ordinary Indian women with deep, earthy colours, and is regarded as a pioneer of modern Indian art. Vincent van Gogh (1853–1890), a Dutch painter, used swirling brushstrokes and thick paint, as in "The Starry Night" (1889).',
            'Frida Kahlo (1907–1954), from Mexico, painted bold self-portraits filled with Mexican culture and personal feelings. Each artist found their own way of seeing.',
          ],
          v: 'self-portrait = a picture an artist makes of themselves; brushstroke = a mark made by a brush; realism = art showing things as they look; style = an artist\'s particular way of making art',
          x: ['Ravi Varma\'s "Shakuntala".', 'Van Gogh\'s "Sunflowers".'],
          s: ['A Painter With a Printing Press', 'In 1894, Raja Ravi Varma set up a printing press near Mumbai. Before that, most people could only see paintings in palaces. Soon, his colourful prints of Lakshmi, Saraswati and scenes from the epics hung in homes across India. A painting had travelled from the palace to the kitchen wall.'],
          a: [
            mt('Match the artist to the country', 'Raja Ravi Varma=India|Vincent van Gogh=Netherlands|Frida Kahlo=Mexico'),
            ch('"The Starry Night" was painted by…', '*Vincent van Gogh|Frida Kahlo|Ravi Varma'),
            tf('Frida Kahlo painted many self-portraits.', true),
            ch('Ravi Varma made his art affordable through…', '*a printing press|television|the internet'),
          ],
          t: ['Which artist\'s style do you like best? Why?', 'Why might an artist paint themselves?'],
          k: ['Present one artist and one artwork using art words.'],
          m: ['In the Style Of', 'paints, paper, prints of artworks', 'Choose one master | Study their colours, brushstrokes and subjects | Paint your own subject in their style | Write a label naming the artist who inspired you'],
          q: [
            ch('Amrita Sher-Gil is a pioneer of…', '*modern Indian art|cave painting|photography'),
            tf('Van Gogh used thick paint and swirling strokes.', true),
            ch('An artist\'s particular way of making art is their…', '*style|stamp|stage'),
          ],
          ms: ['Describes four artists accurately', 'Compares works using vocabulary', 'Creates inspired work with credit'],
        }),
      ]),
    ]),
    S('s9', 'Elements and principles of design, and art history.', [
      'Analyse art using elements and principles', 'Trace major art movements', 'Apply design principles in original work',
    ], [
      U('elements-principles', 'Elements and Principles', 'The language of art.', 'Elements: line, shape, form, colour, value, texture, space; Principles: balance, contrast, emphasis, rhythm, unity; Colour theory', [
        L('design-language', 'The Grammar of Art', {
          o: ['Name and identify the elements and principles of art', 'Use colour theory, including complementary colours'],
          p: ['Knows colour mixing and composition'],
          e: [
            'The elements of art are the building blocks: line, shape, form (3D shape), colour, value (lightness and darkness), texture and space.',
            'The principles of design are how artists arrange the elements: balance, contrast, emphasis (focal point), movement, rhythm or pattern, proportion and unity.',
            'In colour theory, complementary colours sit opposite each other on the colour wheel — red and green, blue and orange, yellow and purple — and create strong contrast. Analogous colours sit next to each other and create harmony.',
          ],
          v: 'element = a basic building block of art; principle = a way of arranging elements; complementary colours = colours opposite on the colour wheel; value = how light or dark a colour is',
          x: ['A red flower on green leaves showing complementary contrast.', 'Symmetrical balance in the Taj Mahal.'],
          s: ['Spotting the Focal Point', 'In a gallery, Zuri\'s teacher asked, "Where does your eye go first?" In the painting, a small figure in a bright orange shawl stood against a misty blue valley. "There!" said Zuri. "Exactly — complementary contrast and emphasis," the teacher said. "The artist planned that."'],
          a: [
            mt('Match the complementary pair', 'red=green|blue=orange|yellow=purple'),
            ch('Which is a principle of design?', '*balance|line|texture'),
            ch('How light or dark a colour is, is its…', '*value|texture|form'),
            tf('Analogous colours sit next to each other on the colour wheel.', true),
          ],
          t: ['How can contrast draw attention?', 'Can a picture break the "rules" and still work?'],
          k: ['Analyse an artwork aloud using three elements and two principles.'],
          m: ['Colour Wheel and Design Study', 'paints, compass, paper', 'Paint a 12-part colour wheel | Mark complementary and analogous colours | Make two small designs: one harmonious, one high-contrast | Write a comparison'],
          q: [
            ch('A 3D shape is called…', '*form|line|value'),
            tf('Emphasis creates a focal point.', true),
            ch('Complementary colours create strong…', '*contrast|silence|texture'),
          ],
          ms: ['Identifies elements and principles', 'Applies colour theory', 'Analyses artworks using vocabulary'],
        }),
      ]),
      U('art-history', 'Art Through Time', 'Movements and schools.', 'Ajanta and Mughal miniatures; Renaissance; Impressionism; Bengal School and modernism', [
        L('movements', 'Art Movements', {
          o: ['Describe major art movements in India and the world', 'Place artworks in historical context'],
          p: ['Knows several famous artists'],
          e: [
            'The Ajanta cave paintings in Maharashtra, made roughly from the 2nd century BCE to the 5th century CE, show Buddhist Jataka stories. Mughal miniature painting (16th–18th centuries) combined Persian and Indian styles in fine detail.',
            'The European Renaissance (14th–16th centuries) revived classical ideas and realism: Leonardo da Vinci, Michelangelo. Impressionism (1870s, France) captured light and moments with visible brushstrokes: Claude Monet\'s "Impression, Sunrise" gave the movement its name.',
            'In India, the Bengal School, led by Abanindranath Tagore in the early 1900s, sought an Indian modern style. After independence, the Progressive Artists\' Group (1947), including M. F. Husain, S. H. Raza and F. N. Souza, explored modernism.',
          ],
          v: 'movement = a group of artists sharing ideas in a period; miniature = a small, detailed painting; Impressionism = a style capturing light and moments; modernism = art breaking with traditional styles',
          x: ['Abanindranath Tagore\'s "Bharat Mata".', 'Monet\'s water lilies.'],
          s: ['A Name From an Insult', 'In 1874, a critic mocked Claude Monet\'s painting "Impression, Sunrise", sneering that it was only an "impression", not a finished picture. The painters liked the word and kept it. Today, "Impressionism" is one of the most loved art movements in the world.'],
          a: [
            od('Put these in time order', 'Ajanta paintings|Mughal miniatures|Impressionism|Progressive Artists\' Group'),
            mt('Match the artist to the movement', 'Monet=Impressionism|Abanindranath Tagore=Bengal School|S. H. Raza=Progressive Artists\' Group'),
            tf('Ajanta paintings show Buddhist stories.', true),
            ch('Mughal miniatures combined…', '*Persian and Indian styles|Japanese and Mexican styles|only photography'),
          ],
          t: ['Why do art movements often react against what came before?', 'How did politics affect the Bengal School?'],
          k: ['Present one art movement with three key works.'],
          m: ['Art History Timeline', 'long paper strip, printed images', 'Choose six movements from India and the world | Place them on a timeline with dates | Add one image and key features for each | Present connections between them'],
          q: [
            ch('The Renaissance revived…', '*classical ideas and realism|cave art|digital art'),
            tf('The Progressive Artists\' Group was founded in 1947.', true),
            ch('A small, detailed painting is a…', '*miniature|mural|mosaic'),
          ],
          ms: ['Describes movements accurately', 'Places works in context', 'Connects Indian and world art'],
        }),
      ]),
    ]),
    S('s12', 'Art criticism, visual communication and the portfolio.', [
      'Critique art with a structured method', 'Analyse visual communication', 'Develop a personal portfolio',
    ], [
      U('criticism', 'Looking Critically', 'Describing, analysing, interpreting and judging.', 'Feldman\'s method; Context and meaning; Who decides what is art?', [
        L('critique', 'Four Steps of Art Criticism', {
          o: ['Apply Feldman\'s four-step method of art criticism', 'Debate questions about the value and definition of art'],
          p: ['Knows elements, principles and movements'],
          e: [
            'Edmund Feldman proposed a four-step method: Describe (what do you see?), Analyse (how are elements and principles used?), Interpret (what does it mean or express?) and Judge (is it successful, and why?).',
            'Context matters: knowing when, where and why a work was made can change its meaning. A work may be read differently by different audiences.',
            'Some works challenge the idea of art itself. In 1917, Marcel Duchamp submitted a urinal titled "Fountain" to an exhibition, asking whether an artist\'s choice alone could make something art. Such works provoke debate about who decides what art is — artists, critics, museums or audiences.',
          ],
          v: 'critique = a careful judgement of a work; interpretation = an explanation of meaning; context = the circumstances in which something was made; aesthetic = relating to beauty and taste',
          x: ['Interpreting Amrita Sher-Gil\'s "Three Girls".', 'Debating Duchamp\'s "Fountain".'],
          s: ['The Gallery Argument', 'Two friends stood before a canvas painted entirely red. "Anyone could do that," said one. "But they didn\'t," said the other, reading the label about the artist\'s idea of colour and emotion. They argued all the way home — and realised that the argument itself was part of what the art was for.'],
          a: [
            od('Put Feldman\'s steps in order', 'Describe|Analyse|Interpret|Judge'),
            ch('Duchamp\'s "Fountain" raised the question…', '*what counts as art|how to paint faces|how to mix colours'),
            tf('Context can change how a work is understood.', true),
            ch('An explanation of a work\'s meaning is an…', '*interpretation|exhibition|easel'),
          ],
          t: ['Can an artwork have one correct meaning?', 'Who should decide what counts as art?'],
          k: ['Give a four-step critique of an artwork to a group.'],
          m: ['Gallery Critique Essay', 'a museum visit or online collection, notebook', 'Choose one artwork | Apply Feldman\'s four steps in detail | Research the context | Write a 1500-word critique with a reasoned judgement'],
          q: [
            ch('The first step in Feldman\'s method is…', '*Describe|Judge|Interpret'),
            tf('Different audiences may interpret a work differently.', true),
            ch('Relating to beauty and taste is…', '*aesthetic|athletic|arithmetic'),
          ],
          ms: ['Applies Feldman\'s method', 'Uses context in interpretation', 'Argues about art thoughtfully'],
        }),
      ]),
      U('portfolio', 'Visual Communication and Portfolio', 'Design and personal practice.', 'Graphic design basics; Digital art tools; Building a portfolio', [
        L('portfolio', 'Building Your Portfolio', {
          o: ['Apply graphic design principles to communicate a message', 'Curate a portfolio that shows growth and a personal voice'],
          p: ['Can critique art'],
          e: [
            'Visual communication uses images, type and layout to share a message — posters, logos, book covers, infographics. Good design uses hierarchy (what to notice first), alignment, contrast and white space.',
            'Digital tools allow layers, undo and easy sharing, but the same art principles apply. Many artists combine hand-drawn and digital work.',
            'A portfolio is a curated collection of your best and most meaningful work. It shows skill, range, process (sketches and experiments) and a personal voice. Artists write a short artist\'s statement explaining their ideas and approach.',
          ],
          v: 'hierarchy = the order in which things are noticed; white space = empty space in a design; portfolio = a curated collection of work; artist\'s statement = a short text explaining an artist\'s work',
          x: ['A poster where the title is biggest and boldest.', 'A portfolio page showing sketches and the final piece.'],
          s: ['The Sketchbook That Got Her In', 'When Meera applied to art school, she worried her finished paintings weren\'t perfect. But she included her messy sketchbooks too: experiments, failures and ideas. The interviewer spent most of the time on those. "This shows how you think," he said. "That\'s what we\'re looking for."'],
          a: [
            mt('Match the design term', 'hierarchy=what is noticed first|white space=empty space|alignment=lining things up'),
            ch('A portfolio should show…', '*skill, range, process and voice|only one picture|other people\'s work'),
            tf('An artist\'s statement explains an artist\'s ideas.', true),
            ch('A poster\'s title is usually biggest because of…', '*hierarchy|texture|perspective'),
          ],
          t: ['What makes a portfolio feel personal?', 'Should you include unfinished work? Why?'],
          k: ['Present your portfolio and artist\'s statement to an audience.'],
          m: ['Personal Portfolio', 'your artworks, a folder or digital tool', 'Select 10–15 pieces showing range and growth | Include process work and sketches | Design a consistent layout | Write a 300-word artist\'s statement'],
          q: [
            ch('Empty space in a design is…', '*white space|hierarchy|contrast'),
            tf('The same art principles apply in digital work.', true),
            ch('A curated collection of work is a…', '*portfolio|palette|pastel'),
          ],
          ms: ['Applies design principles', 'Curates a coherent portfolio', 'Writes a reflective artist\'s statement'],
        }),
      ]),
    ]),
  ],
});
