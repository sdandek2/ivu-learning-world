import { subject, S, U, L, ch, tf, mt, ct } from '../dsl.ts';

export default subject({
  id: 'shapes',
  description: 'Spatial reasoning from naming and handling shapes to properties, symmetry, angles, area and perimeter, transformations, and finally geometric proof including Pythagoras\' theorem. Children build, draw, fold and measure before they formalise.',
  stages: [
    S('s4', 'Naming flat and solid shapes, and position words.', [
      'Name circle, square, triangle and rectangle', 'Notice shapes in the world around them', 'Use position words: on, under, next to, behind',
    ], [
      U('flat-shapes', 'Shape Spotters', 'Flat shapes have names, sides and corners.', 'Circle, square, triangle, rectangle; Sides and corners: counting; Shapes around us: windows, wheels, roofs', [
        L('name-shapes', 'Circles, Squares and Triangles', {
          o: ['Name circles, squares, triangles and rectangles', 'Count sides and corners of a shape'],
          p: ['Can count to 5'],
          e: [
            'A circle is round all the way — it has no corners and no straight sides. Wheels and plates are circles.',
            'A triangle has 3 straight sides and 3 corners. A square has 4 straight sides that are all the same length, and 4 corners. A rectangle also has 4 sides and 4 corners, but two sides are long and two are short.',
            'Shapes are everywhere! A window may be a square, a slice of pizza a triangle, a door a rectangle.',
          ],
          v: 'circle = a round shape with no corners; triangle = a shape with 3 sides and 3 corners; square = a shape with 4 equal sides; corner = where two sides meet',
          x: ['🍕 A slice of pizza looks like a triangle.', '🚪 A door is a rectangle.'],
          s: ['The Shape Parade', 'In Number Mountains the shapes had a parade. Circle rolled along: "No corners for me!" Triangle marched: "One, two, three corners!" Square stamped: "Four sides, all the same!" Rectangle stretched tall: "Four sides — two long, two short!" Kiko clapped for every shape.'],
          a: [
            ch('Which shape has 3 sides?', 'circle ⚪|*triangle 🔺|square 🟥'),
            ct('How many corners does a square have?', 4),
            ch('Which shape has no corners?', '*circle ⚪|triangle 🔺|rectangle ▭'),
            mt('Match the thing to its shape', '🍕 pizza slice=triangle|⚽ ball seen flat=circle|🚪 door=rectangle'),
          ],
          t: ['Is a square a kind of rectangle? What do you think?', 'Why do you think wheels are circles and not squares?'],
          k: ['Go on a shape walk and tell a grown-up three shapes you found and where.'],
          m: ['Shape Collage', 'coloured paper shapes (cut by a grown-up), glue, paper', 'Sort the shapes into circles, triangles, squares and rectangles | Make a picture (a house, a robot, a rocket) using the shapes | Count how many of each shape you used | Tell someone about your picture', "Use pre-cut shapes or child-safe scissors with adult supervision. Adults should handle sharp cutting tools."],
          q: [
            ct('How many sides does a triangle have?', 3),
            ch('Which is round?', '*⚪|🔺|🟥'),
            tf('A rectangle has 4 corners.', true),
          ],
          ms: ['Names four basic 2D shapes reliably', 'Counts sides and corners', 'Identifies shapes in the environment'],
        }),
      ]),
      U('position', 'Where Is It?', 'Position words tell us where things are.', 'On, under, in, behind, in front of, next to, between; Following position directions; Describing a route', [
        L('position-words', 'On, Under, Behind', {
          o: ['Use position words to describe where objects are', 'Follow directions using position words'],
          p: ['Understands simple instructions'],
          e: [
            'Position words tell us where something is. The cat is ON the bed. The ball is UNDER the table. The bag is BEHIND the door.',
            'Next to means right beside. Between means in the middle of two things. In front of means facing you, before something else.',
            'We use position words to give directions and to find hidden things: "Your shoes are under the chair, next to the box."',
          ],
          v: 'on = on top of; under = below; behind = at the back of; between = in the middle of two things; next to = beside',
          x: ['The book is on the shelf.', 'The dog is between the two trees.'],
          s: ['Where Is Momo\'s Hat?', 'Momo the bear lost his hat. "Is it on the bed?" No. "Is it under the table?" No. Zuri peeked behind the curtain. "It\'s between the cushions, next to your teddy!" Momo put on his hat and gave Zuri a big hug.'],
          a: [
            ch('🐱 is above the 📦, sitting on top. The cat is…', '*on the box|under the box|behind the box'),
            mt('Match the opposite position words', 'on=under|in front of=behind|inside=outside'),
            ch('The ball is in the middle of two chairs. It is…', 'behind|*between|under'),
            tf('"Under" means below something.', true),
          ],
          t: ['If you stand on the other side of the table, is "behind" still behind?', 'How would you tell a robot where to find a toy?'],
          k: ['Hide a toy and give a grown-up clues using position words to find it.'],
          m: ['Teddy Hide and Seek', 'a teddy, a room', 'A grown-up hides teddy | Ask questions using position words: "Is it under the bed?" | When you find it, describe exactly where it was | Swap and hide it for the grown-up'],
          q: [
            ch('The bird is in the sky, over the tree. The bird is…', '*above the tree|under the tree|inside the tree'),
            ch('The opposite of "in front of" is…', 'on|*behind|next to'),
            tf('"Next to" means beside.', true),
          ],
          ms: ['Uses position words accurately', 'Follows two-part position directions', 'Gives position clues to others'],
        }),
      ]),
    ]),
    S('s5', '3D shapes, sorting shapes by properties, and simple patterns with shapes.', [
      'Name cube, cuboid, sphere, cylinder, cone and pyramid', 'Sort shapes by properties', 'Describe how 3D shapes move: roll, slide, stack',
    ], [
      U('solid-shapes', 'Solid Shapes', '3D shapes have faces, edges and vertices.', '3D shapes: cube, cuboid, sphere, cylinder, cone, pyramid; Faces: flat and curved; Roll, slide, stack', [
        L('roll-or-stack', 'Roll, Slide or Stack?', {
          o: ['Name common 3D shapes', 'Predict whether a shape will roll, slide or stack, and explain why'],
          p: ['Names 2D shapes'],
          e: [
            '3D shapes are solid — you can hold them. A ball is a sphere. A dice is a cube. A tin is a cylinder. An ice-cream cone is a cone. A box is a cuboid.',
            'Flat surfaces are called faces. Curved surfaces can roll; flat faces can slide and stack.',
            'A cylinder has two flat faces and one curved surface, so it can roll on its side and stack when standing up!',
          ],
          v: 'sphere = a perfectly round 3D shape, like a ball; cube = a 3D shape with 6 square faces; cylinder = a 3D shape like a tin; face = a flat surface of a 3D shape',
          x: ['A ball (sphere) rolls in every direction.', 'Building blocks (cubes) stack into towers.'],
          s: ['The Tower Contest', 'Bolt and Kiko had a tower contest. Kiko tried stacking balls — they rolled away! Bolt stacked cubes — tall and steady. Then Kiko tried tins: standing up, they stacked; on their side, they rolled. "Flat faces stack, curves roll," Bolt beeped.'],
          a: [
            ch('Which shape rolls in every direction?', '*sphere ⚽|cube 🎲|pyramid'),
            mt('Match the object to its shape', '🎲 dice=cube|🥫 tin=cylinder|🍦 cone=cone|📦 box=cuboid'),
            ct('How many faces does a cube have?', 6),
            tf('A cylinder can both roll and stack.', true),
          ],
          t: ['Why are most boxes cuboids and not spheres?', 'Which shape would make the best wheel? Why?'],
          k: ['Show someone which household objects roll and which stack, and explain why.'],
          m: ['🧪 Ramp Rolling Test', 'a board or tray as a ramp, books, objects: ball, tin, block, cone, box', 'Make a ramp with a board on books | Predict: will each object roll, slide or stay? | Test each one | Record your results in a table with ticks'],
          q: [
            ch('A tin of beans is a…', 'cube|*cylinder|sphere'),
            ch('Which is best for building a tower?', 'sphere|*cube|cone'),
            tf('A sphere has flat faces.', false),
          ],
          ms: ['Names six common 3D shapes', 'Explains rolling and stacking using faces', 'Relates 3D shapes to everyday objects'],
        }),
      ]),
      U('sorting-shapes', 'Sorting Shapes', 'Shapes can be sorted by their properties.', 'Properties: sides, corners, curved or straight; Sorting rules; Venn and Carroll diagrams', [
        L('sort-by-rule', 'Sorting by a Rule', {
          o: ['Sort shapes using a property such as number of sides', 'Explain the sorting rule used'],
          p: ['Names 2D shapes and counts sides'],
          e: [
            'Properties are facts about a shape: how many sides, how many corners, whether sides are straight or curved.',
            'We can sort shapes by a rule: "shapes with 4 sides" and "shapes without 4 sides". Squares and rectangles go in the first group.',
            'A sorting circle (Venn diagram) can show shapes that fit two rules at once in the overlapping part.',
          ],
          v: 'property = a fact about a shape; sort = put into groups by a rule; rule = the reason things go together',
          x: ['Rule "has curves": circle, oval.', 'Rule "has 3 corners": all triangles, big or small.'],
          s: ['The Shape Party Guest List', 'Rectangle threw a party for shapes with 4 sides. Square came in — welcome! Triangle tried to come in but only had 3 sides. "Sorry, the rule is 4 sides," said Rectangle. Triangle laughed and threw its own party for 3-sided shapes.'],
          a: [
            ch('Which shape fits the rule "4 sides"?', 'triangle|circle|*square'),
            ch('Which shape fits "has a curved side"?', '*circle|square|triangle'),
            tf('A big triangle and a tiny triangle both have 3 sides.', true),
            ct('How many sides does a hexagon have?', 6),
          ],
          t: ['Does size or colour change what shape something is?', 'Can you think of a sorting rule that puts a square and a circle together?'],
          k: ['Sort some shapes and ask someone to guess your secret rule.'],
          m: ['Secret Rule Game', 'paper shapes of different sizes, colours and types, two hoops or circles of string', 'Choose a secret rule (e.g. "has corners") | Sort shapes into the hoops | Let a partner guess the rule | Try a rule using overlapping hoops'],
          q: [
            ct('How many sides does a rectangle have?', 4),
            ch('Rule: "3 corners". Which fits?', '*triangle|square|circle'),
            tf('Colour is a property that changes a shape\'s name.', false),
          ],
          ms: ['Sorts shapes by stated properties', 'Identifies an unknown sorting rule', 'Explains why size and colour do not change shape type'],
        }),
      ]),
    ]),
    S('s6', 'Symmetry, polygons, and turns and direction.', [
      'Find lines of symmetry', 'Name polygons by number of sides', 'Describe quarter, half and full turns',
    ], [
      U('symmetry', 'Symmetry', 'A line of symmetry splits a shape into mirror halves.', 'Line symmetry: folding test, mirrors; Symmetry in nature: butterflies, leaves; Symmetry in art: rangoli, kolam', [
        L('mirror-halves', 'Mirror Halves', {
          o: ['Identify lines of symmetry in shapes and pictures', 'Complete a symmetrical pattern'],
          p: ['Names 2D shapes'],
          e: [
            'A shape is symmetrical if you can fold it along a line and both halves match exactly. That fold line is called a line of symmetry.',
            'Some shapes have many lines of symmetry: a square has 4, a circle has infinitely many. Some have none.',
            'Symmetry appears in nature — butterfly wings, leaves, faces — and in art, like rangoli and kolam designs drawn at doorways in India.',
          ],
          v: 'symmetry = when two halves match like a mirror image; line of symmetry = the fold line; reflection = a mirror image',
          x: ['🦋 A butterfly has one line of symmetry down its body.', 'The letter A has a vertical line of symmetry; the letter F has none.'],
          s: ['Mayur\'s Rangoli', 'For a festival, Mayur the peacock made a rangoli at the door. He drew one petal on the left and copied it exactly on the right. Then top and bottom. "Fold it in your mind," Mayur said, "and every half matches." His friends gasped — the design looked like a perfect flower.'],
          a: [
            ch('Which has a line of symmetry?', '*🦋 butterfly|the letter F|a squiggle'),
            ct('How many lines of symmetry does a square have?', 4),
            tf('If you fold a symmetrical shape on its line, both halves match.', true),
            ch('Which letter is symmetrical?', '*A|F|G'),
          ],
          t: ['Is your face perfectly symmetrical? Look in a mirror and check.', 'Why do you think so many things in nature are symmetrical?'],
          k: ['Show someone a symmetrical object at home and explain where the line of symmetry is.'],
          m: ['Paint-Blot Butterfly', 'paper, paint, crayons', 'Fold a paper in half and open it | Paint blobs on one side only | Fold and press, then open | Find the line of symmetry and add a body and antennae'],
          q: [
            ct('Lines of symmetry in a rectangle (not a square)?', 2),
            ch('Which has NO line of symmetry?', 'heart|circle|*the letter R'),
            tf('A circle has many lines of symmetry.', true),
          ],
          ms: ['Identifies lines of symmetry in shapes and images', 'Completes symmetrical figures', 'Recognises symmetry in nature and art'],
        }),
      ]),
      U('turns', 'Turns and Directions', 'Turning and moving in different directions.', 'Quarter, half, three-quarter and full turns; Clockwise and anticlockwise; Left and right', [
        L('quarter-turns', 'Quarter Turns', {
          o: ['Describe quarter, half and full turns', 'Use clockwise and anticlockwise'],
          p: ['Knows left and right'],
          e: [
            'A full turn spins all the way round until you face the same way again. A half turn makes you face the opposite way. A quarter turn is one quarter of a full turn — like turning from facing the door to facing the window beside it.',
            'Clockwise means turning the same way as the hands of a clock. Anticlockwise means the opposite way.',
            'Two quarter turns make a half turn. Four quarter turns make a full turn.',
          ],
          v: 'clockwise = turning the same way as clock hands; anticlockwise = turning the opposite way to clock hands; quarter turn = one quarter of the way round; full turn = all the way round',
          x: ['Turning a door handle is a small turn.', 'The minute hand makes a full turn every hour.'],
          s: ['Bolt Learns to Dance', 'Bolt wanted to dance. "Make a quarter turn clockwise," said Rangi. Bolt turned to face the window. "Another quarter turn!" Now Bolt faced the back wall — a half turn altogether. Two more quarter turns and Bolt was facing the front again. "A full turn — I\'m dancing!" Bolt beeped.'],
          a: [
            ct('How many quarter turns make a full turn?', 4),
            ch('After a half turn you face…', 'the same way|*the opposite way|sideways'),
            ch('The hands of a clock turn…', '*clockwise|anticlockwise'),
            tf('Two quarter turns make a half turn.', true),
          ],
          t: ['If you make a quarter turn clockwise and then a quarter turn anticlockwise, where do you face?', 'Why do you think the word "clockwise" was invented?'],
          k: ['Give someone turning instructions to face a hidden object.'],
          m: ['Robot Turning Game', 'a cardboard box robot costume (optional), arrows on paper', 'One person is the robot | Give commands: forward 2 steps, quarter turn clockwise | Guide the robot to a target | Write the instructions as a list of arrows'],
          q: [
            ch('Three quarter turns clockwise is the same as one quarter turn…', 'clockwise|*anticlockwise'),
            ct('How many half turns make a full turn?', 2),
            tf('A full turn brings you back to where you started facing.', true),
          ],
          ms: ['Describes and performs fractional turns', 'Uses clockwise and anticlockwise correctly', 'Gives and follows turning directions'],
        }),
      ]),
    ]),
    S('s7', 'Angles, perimeter and area, and properties of quadrilaterals and triangles.', [
      'Measure and classify angles', 'Calculate perimeter and area of rectangles', 'Classify triangles and quadrilaterals',
    ], [
      U('angles', 'Angles', 'Angles measure turn.', 'Right angles; Acute, obtuse, reflex; Measuring with a protractor; Angles on a line and around a point', [
        L('angle-types', 'Acute, Right and Obtuse', {
          o: ['Identify right, acute, obtuse and reflex angles', 'Measure angles with a protractor in degrees'],
          p: ['Understands quarter and half turns'],
          e: [
            'An angle measures how much something turns. We measure angles in degrees (°). A full turn is 360°, a half turn is 180°, and a quarter turn — a right angle — is 90°.',
            'An acute angle is less than 90° (sharp, like a beak). An obtuse angle is between 90° and 180°. A reflex angle is more than 180°.',
            'Angles on a straight line add up to 180°. Angles around a point add up to 360°. The angles inside any triangle add up to 180°.',
          ],
          v: 'angle = the amount of turn between two lines; degree (°) = the unit for measuring angles; right angle = exactly 90°; protractor = a tool for measuring angles',
          x: ['The corner of a book is a right angle.', 'Clock hands at 2 o\'clock make an acute angle (60°).'],
          s: ['The Leaning Door', 'Kiko opened a door just a little — an acute angle. Then wide open against the wall — almost a straight line. Nova measured each opening with a protractor: 30°, 90°, 160°. "Doors are angle machines," Nova laughed.'],
          a: [
            mt('Match the angle to its type', '45°=acute|90°=right angle|120°=obtuse|270°=reflex'),
            ch('Angles on a straight line add up to…', '90°|*180°|360°'),
            ch('Two angles of a triangle are 60° and 70°. The third is…', '40°|*50°|60°'),
            tf('A right angle is 90°.', true),
          ],
          t: ['Why do you think a full turn was divided into 360 degrees?', 'Can a triangle have two right angles? Why not?'],
          k: ['Explain to someone how to use a protractor, then measure an angle in front of them.'],
          m: ['Angle Hunt', 'protractor, paper, ruler', 'Find 10 angles at home (scissors, laptop screen, roof, book) | Estimate each angle | Measure with a protractor or a paper right-angle tester | Record estimate, measurement and type in a table', "Use scissors only as an example of an angle; keep blades closed when measuring and handle them carefully with adult supervision."],
          q: [
            tf('175° is an obtuse angle.', true, 'An obtuse angle is greater than 90° and less than 180°.'),
            ch('Angles around a point add up to…', '180°|*360°|90°'),
            ch('A full turn is…', '180°|*360°|100°'),
          ],
          ms: ['Classifies angles correctly', 'Measures angles to within ±2°', 'Uses angle facts to find missing angles'],
        }),
      ]),
      U('area-perimeter', 'Perimeter and Area', 'Distance around and space inside.', 'Perimeter: adding side lengths; Area: counting squares, length × width; Same area, different perimeter', [
        L('around-and-inside', 'Around and Inside', {
          o: ['Calculate the perimeter and area of rectangles', 'Explain the difference between perimeter and area'],
          p: ['Multiplication facts to 10 × 10'],
          e: [
            'Perimeter is the distance all the way around a shape. For a rectangle 5 m long and 3 m wide: 5 + 3 + 5 + 3 = 16 m.',
            'Area is the amount of surface inside a shape, measured in square units like cm² or m². For a rectangle, area = length × width: 5 × 3 = 15 m².',
            'Shapes with the same area can have different perimeters. A 4 × 4 square and a 2 × 8 rectangle both have area 16, but perimeters of 16 and 20.',
          ],
          v: 'perimeter = total distance around a shape; area = amount of surface a shape covers; square unit = a square used to measure area (cm²); length = how long something is',
          x: ['A fence around a garden measures perimeter.', 'A carpet covering a floor measures area.'],
          s: ['The Goat Pen Puzzle', 'Kiko had 20 metres of fence for a goat pen. A 9 × 1 pen had a tiny area of 9 m². A 5 × 5 pen had 25 m² — much more grass with the same fence! "Same perimeter, different area," Kiko said, munching happily.'],
          a: [
            ch('Perimeter of a 6 cm × 2 cm rectangle?', '12 cm|*16 cm|8 cm'),
            ch('Area of a 6 cm × 2 cm rectangle?', '*12 cm²|16 cm²|8 cm²'),
            mt('Match the job to the measure', 'fence around a park=perimeter|paint for a wall=area|water a tank holds=volume'),
            tf('Two shapes with the same area always have the same perimeter.', false),
          ],
          t: ['If you double the length and width of a rectangle, what happens to its area?', 'Which shape gives the biggest area for a fixed perimeter?'],
          k: ['Measure a table and explain to someone how you found its perimeter and area.'],
          m: ['Design a Dream Bedroom', 'squared paper, ruler, pencils', 'Draw your room to scale (1 square = 50 cm) | Calculate the floor area and perimeter | Add a rug and bed and calculate their areas | Find how much floor space is left free'],
          q: [
            ch('Area of a 7 m × 4 m room?', '22 m²|*28 m²|11 m²'),
            ch('Perimeter of a square with side 5 cm?', '*20 cm|25 cm|10 cm'),
            tf('Area is measured in square units.', true, 'Area measures a surface, so its units are squared, such as cm².'),
          ],
          ms: ['Calculates perimeter and area of rectangles and composite rectilinear shapes', 'Distinguishes perimeter and area in context', 'Explores relationships between them'],
        }),
      ]),
    ]),
    S('s9', 'Circles, volume, coordinates and transformations.', [
      'Plot points and transform shapes on a coordinate grid', 'Calculate volume of cuboids', 'Know circle vocabulary and circumference',
    ], [
      U('coordinates', 'Coordinates and Transformations', 'Describing position and movement on a grid.', 'Coordinates: (x, y) in four quadrants; Translation, reflection, rotation; Congruence', [
        L('transform', 'Translate, Reflect, Rotate', {
          o: ['Plot coordinates in four quadrants', 'Translate, reflect and rotate shapes on a grid'],
          p: ['Knows symmetry and turns'],
          e: [
            'Coordinates give a position on a grid as (x, y): go along the x-axis first, then up or down the y-axis. "Along the corridor, then up the stairs." Negative coordinates go left or down.',
            'A translation slides a shape without turning it. A reflection flips it over a mirror line. A rotation turns it around a centre point by an angle.',
            'In all three transformations the shape stays the same size and shape — the image is congruent to the original.',
          ],
          v: 'coordinate = a pair of numbers giving a position (x, y); translation = a slide; reflection = a flip in a mirror line; rotation = a turn about a point; congruent = identical in shape and size',
          x: ['Translate (2, 3) by 4 right and 1 down → (6, 2).', 'Reflect (3, 5) in the y-axis → (−3, 5).'],
          s: ['The Treasure Grid', 'Zuri found an old map: "Start at (0, 0). Treasure at (−3, 4)." Kiko went 3 right — wrong way! Zuri explained: "Negative x means go LEFT." They went 3 left, 4 up, and dug. Out came a box of shiny marbles.'],
          a: [
            ch('Translate (1, 2) by 3 right: new point?', '(1, 5)|*(4, 2)|(3, 2)'),
            ch('Reflect (4, 1) in the y-axis:', '(4, −1)|*(−4, 1)|(1, 4)'),
            tf('A rotated shape is congruent to the original.', true),
            mt('Match the transformation', 'slide=translation|flip=reflection|turn=rotation'),
          ],
          t: ['Which transformations change a shape\'s orientation (which way it faces)?', 'Can two different transformations give the same result?'],
          k: ['Describe to someone how to move a shape from one place to another using transformation words and coordinates.'],
          m: ['Transformation Art', 'squared paper, colours, a ruler', 'Draw axes from −10 to 10 | Draw a simple shape in the first quadrant | Reflect it in both axes and rotate it 180° | Colour the design and label coordinates of the vertices'],
          q: [
            ch('The point (−2, −5) is in which quadrant?', 'first|second|*third'),
            ch('Rotating (2, 0) by 90° anticlockwise about the origin gives…', '*(0, 2)|(−2, 0)|(0, −2)'),
            tf('In (x, y), x tells you how far along.', true),
          ],
          ms: ['Plots and reads coordinates in four quadrants', 'Performs and describes transformations accurately', 'Identifies congruent images'],
        }),
      ]),
      U('circles-volume', 'Circles and Volume', 'Measuring round shapes and 3D space.', 'Circle parts: radius, diameter, circumference; π and circumference; Volume of cuboids', [
        L('circle-pi', 'Circles and π', {
          o: ['Name parts of a circle', 'Calculate circumference using π, and volume of a cuboid'],
          p: ['Calculates area and perimeter'],
          e: [
            'The radius is the distance from the centre to the edge. The diameter goes across through the centre — twice the radius. The circumference is the distance around.',
            'For every circle, circumference ÷ diameter is the same number: π (pi), about 3.14. So circumference = π × diameter.',
            'Volume is the space inside a 3D shape, measured in cubic units. For a cuboid: volume = length × width × height. A box 4 cm × 3 cm × 2 cm holds 24 cm³.',
          ],
          c: [['evidence', 'Many ancient mathematicians approximated π. Āryabhaṭa (499 CE) gave a value equivalent to 3.1416, and Archimedes (3rd century BCE) proved π lies between 3 10/71 and 3 1/7.']],
          v: 'radius = centre to edge; diameter = across a circle through the centre; circumference = distance around a circle; π = circumference ÷ diameter ≈ 3.14; volume = space inside a 3D shape',
          x: ['Diameter 10 cm → circumference ≈ 31.4 cm.', 'A tank 50 cm × 30 cm × 40 cm holds 60,000 cm³ = 60 litres.'],
          s: ['The String and the Plates', 'Nova wrapped string around a small plate, a big plate and a bicycle wheel, then measured each string and each diameter. Every time, the string was just over three times the diameter. "The same magic number, every circle," Nova whispered. "That\'s π."'],
          a: [
            ch('Radius 5 cm → diameter?', '2.5 cm|*10 cm|25 cm'),
            ch('Circumference ≈ π × ___', 'radius|*diameter|area'),
            ch('Volume of a 5 × 2 × 3 cuboid?', '10|*30|25'),
            tf('π is about 3.14.', true),
          ],
          t: ['Why is π the same for every circle, big or small?', 'If you double a cuboid\'s length, width and height, what happens to its volume?'],
          k: ['Explain to someone how you could estimate π using string and round objects.'],
          m: ['🧪 Measuring π', 'string, ruler, 5 round objects (plates, lids, tins)', 'Measure the diameter of each object | Wrap string around to measure circumference | Divide circumference by diameter for each | Find the average and compare with 3.14'],
          q: [
            ch('Circumference of a circle with diameter 20 cm ≈', '31.4 cm|*62.8 cm|20 cm'),
            ch('Volume is measured in…', 'cm|cm²|*cm³'),
            tf('The diameter is twice the radius.', true),
          ],
          ms: ['Uses circle vocabulary correctly', 'Calculates circumference using π', 'Calculates cuboid volume in context'],
        }),
      ]),
    ]),
    S('s12', 'Geometric reasoning and proof: Pythagoras, similarity and trigonometry basics.', [
      'Apply and prove Pythagoras\' theorem', 'Use similarity and scale factors', 'Use sine, cosine and tangent in right-angled triangles',
    ], [
      U('pythagoras', 'Pythagoras\' Theorem', 'A great relationship in right-angled triangles.', 'Statement: a² + b² = c²; Proofs: rearrangement; Applications: distance, ladders, navigation', [
        L('pythagoras-proof', 'Proving Pythagoras', {
          o: ['State and apply Pythagoras\' theorem', 'Follow and explain a proof of the theorem'],
          p: ['Squares, square roots and area'],
          e: [
            'In a right-angled triangle, the square of the hypotenuse (the longest side, opposite the right angle) equals the sum of the squares of the other two sides: a² + b² = c².',
            'Proof by rearrangement: four copies of the triangle placed inside a square of side (a + b) leave a tilted square of area c². Rearranged differently, they leave two squares of areas a² and b². The leftover area is the same, so a² + b² = c².',
            'Uses include finding distances: a ladder 5 m long with its foot 3 m from a wall reaches √(25 − 9) = 4 m up.',
          ],
          c: [['evidence', 'The relationship was known long before Pythagoras: Babylonian tablet Plimpton 322 (c. 1800 BCE) lists Pythagorean triples, and the Baudhāyana Śulbasūtra (Indian, roughly 800–500 BCE, dating uncertain) states it for constructing altars. Greek tradition credits Pythagoras or his school with a proof, though no proof from Pythagoras himself survives.']],
          v: 'hypotenuse = the longest side of a right-angled triangle; theorem = a proven mathematical statement; Pythagorean triple = whole numbers satisfying a² + b² = c²; proof = a logical argument establishing truth',
          x: ['3, 4, 5: 9 + 16 = 25.', 'Distance between (1, 2) and (7, 10) = √(36 + 64) = 10.'],
          s: ['Ropes and Altars', 'Long ago, builders needed perfect right angles. One method: tie knots in a rope to make lengths 3, 4 and 5, and pull it tight into a triangle — the corner between 3 and 4 is a right angle. Builders in several ancient civilisations may have used such rope methods, and an Indian text, the Śulbasūtras, describes rope geometry for altar construction.'],
          a: [
            ch('Sides 6 and 8, hypotenuse?', '*10|12|14'),
            tf('5, 12, 13 is a Pythagorean triple.', true),
            ch('Hypotenuse 13, one side 5, other side?', '8|*12|18'),
            ch('Which triangle is right-angled?', '4, 5, 6|*8, 15, 17|2, 3, 4'),
          ],
          t: ['Does a² + b² = c² work for non-right triangles? What happens when the angle is bigger than 90°?', 'Why is it fair to say several civilisations "discovered" this relationship?'],
          k: ['Present the rearrangement proof to someone using paper cut-outs.'],
          m: ['Paper Proof and Field Check', 'card, scissors, ruler, string, tape measure', 'Cut four identical right triangles and demonstrate the rearrangement proof | Use a 3–4–5 string triangle to check corners of a room or garden | Measure a diagonal of a rectangular space and check it against Pythagoras', "Use child-safe scissors with adult supervision. Take measurements in a safe, uncluttered area and do not climb or lean over edges."],
          q: [
            ch('Hypotenuse is opposite the…', 'smallest angle|*right angle|longest side'),
            ch('Legs 9 and 12, hypotenuse?', '*15|21|13'),
            tf('The relationship was known in Babylon before Pythagoras lived.', true),
          ],
          ms: ['Applies Pythagoras in 2D problems', 'Explains a proof of the theorem', 'Discusses the historical record accurately'],
        }),
      ]),
      U('trigonometry', 'Introducing Trigonometry', 'Ratios that connect angles and sides.', 'Similar triangles and ratio; SOH-CAH-TOA; Angles of elevation: heights of trees and buildings', [
        L('soh-cah-toa', 'SOH CAH TOA', {
          o: ['Define sine, cosine and tangent as ratios in right-angled triangles', 'Use trigonometry to find unknown sides and angles'],
          p: ['Applies Pythagoras; understands similar shapes'],
          e: [
            'All right-angled triangles with the same angle θ are similar, so the ratios of their sides are fixed. These ratios have names: sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent (SOH CAH TOA).',
            'To find a side, choose the ratio linking what you know and what you need. A tree: you stand 20 m away and the angle of elevation to the top is 35°. Height = 20 × tan 35° ≈ 14 m.',
            'To find an angle, use the inverse functions: θ = tan⁻¹(opposite/adjacent).',
          ],
          c: [['evidence', 'Indian astronomers including Āryabhaṭa (5th century CE) tabulated "jyā" (half-chord) values, a forerunner of the sine; the word "sine" came into English via Arabic and Latin translations.']],
          v: 'sine = opposite ÷ hypotenuse; cosine = adjacent ÷ hypotenuse; tangent = opposite ÷ adjacent; angle of elevation = angle looking up from horizontal',
          x: ['sin 30° = 0.5: opposite is half the hypotenuse.', 'Ladder 6 m at 70° to ground: height = 6 × sin 70° ≈ 5.6 m.'],
          s: ['Measuring the Temple Tower', 'A student wanted to know a tall tower\'s height without climbing it. She stood 50 m away, measured an angle of elevation of 40° with a homemade clinometer, and calculated 50 × tan 40° ≈ 42 m, plus her eye height. A later check of official records showed she was within a metre.'],
          a: [
            mt('Match the ratio', 'sin=opposite/hypotenuse|cos=adjacent/hypotenuse|tan=opposite/adjacent'),
            ch('sin 30° = ?', '*0.5|1|0.866'),
            ch('Opposite 5, adjacent 5. tan θ = 1, so θ = ?', '30°|*45°|60°'),
            tf('Trigonometric ratios depend only on the angle, not the triangle size.', true),
          ],
          t: ['Why does the size of the triangle not change sin θ?', 'How might surveyors and navigators have used trigonometry before computers?'],
          k: ['Explain to someone how to find a tree\'s height using trigonometry.'],
          m: ['🧪 Build a Clinometer', 'protractor, straw, string, small weight, tape measure', 'Tape a straw along a protractor and hang a weighted string from the centre | Sight the top of a tall object and read the angle | Measure your distance from its base | Calculate the height with tan and compare with another method'],
          q: [
            tf('cos θ = adjacent ÷ hypotenuse.', true, 'In a right triangle, cosine is adjacent divided by hypotenuse.'),
            ch('Hypotenuse 10, angle 30°, opposite side = ?', '*5|8.66|10'),
            ch('To find an angle from a ratio, use the…', '*inverse function|square root|distributive law'),
          ],
          ms: ['Selects correct trigonometric ratios', 'Solves for unknown sides and angles', 'Applies trigonometry to real measurement'],
        }),
      ]),
    ]),
  ],
});
