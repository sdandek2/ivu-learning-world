import { subject, S, U, L, ch, tf, od, mt, ct } from '../dsl.ts';

export default subject({
  id: 'puzzles',
  description: 'Puzzles and problem solving from jigsaws to game theory: shape and jigsaw puzzles, mazes, memory and spot-the-difference games, tangrams, mini sudoku and magic squares, riddles, Polya\'s problem-solving steps, river-crossing and logic grid puzzles, the Tower of Hanoi and Königsberg bridges, lateral thinking, game theory, and the famous open problems and puzzle-solvers of mathematics.',
  stages: [
    S('s4', 'Jigsaws, shapes and mazes.', [
      'Complete simple jigsaws and shape puzzles', 'Find a path through a maze', 'Keep trying when stuck',
    ], [
      U('jigsaws', 'Jigsaws and Shape Puzzles', 'Fitting pieces together.', 'Edges and corners; Matching colours; Shape sorters', [
        L('jigsaw', 'Corners First!', {
          o: ['Use strategies to complete a simple jigsaw', 'Keep trying calmly when a piece doesn\'t fit'],
          p: ['Knows shapes and colours'],
          e: [
            'A jigsaw puzzle is a picture cut into pieces that fit together. A good strategy is to find the corner pieces first — they have two straight edges.',
            'Next, find the edge pieces with one straight side and build the frame. Then fill the middle by matching colours and shapes.',
            'If a piece doesn\'t fit, turn it around or try another spot. Being stuck is part of solving puzzles. Puzzle solvers stay calm and keep trying!',
          ],
          v: 'jigsaw = a picture cut into fitting pieces; corner = where two edges meet; edge = the outside side; strategy = a plan for solving',
          x: ['Finding the four corner pieces first.', 'Matching blue sky pieces together.'],
          s: ['The Last Piece', 'Ivaan and Aaji worked on a jungle jigsaw. Corners first, then edges, then the tiger in the middle. But one piece wouldn\'t fit anywhere! Ivaan felt grumpy. Aaji said, "Let\'s turn it." He turned it once... twice... CLICK! It fit perfectly — the tiger\'s eye. "Stuck just means not yet," Aaji smiled.'],
          a: [
            ch('Which pieces should you find first?', '*corners|middle pieces|any piece'),
            ct('How many corner pieces does a rectangle jigsaw have? 🧩🧩🧩🧩', 4),
            tf('If a piece doesn\'t fit, you can turn it.', true),
            od('Put the jigsaw strategy in order', 'Find the corners|Build the edges|Fill the middle'),
          ],
          t: ['How do you feel when you\'re stuck?', 'What helps you keep trying?'],
          k: ['Show a grown-up your jigsaw strategy.'],
          m: ['Make Your Own Jigsaw', 'an old greeting card or your drawing, safety scissors', 'Draw a picture or use an old card | Cut it into 6–8 pieces with wavy lines | Mix them up | Solve it and give it to someone else', "Use child-safe scissors with adult supervision. Adults should handle any sharp cutting tools and keep small pieces away from younger children."],
          q: [
            ch('A plan for solving is a…', '*strategy|sticker|story'),
            tf('Corner pieces have two straight edges.', true),
            ch('Edge pieces have…', '*one straight side|no straight sides|four straight sides'),
          ],
          ms: ['Uses corners-and-edges strategy', 'Persists calmly', 'Matches colours and shapes'],
        }),
      ]),
      U('mazes', 'Mazes', 'Finding the way.', 'Following paths; Dead ends; Going back and trying again', [
        L('mazes', 'Through the Maze', {
          o: ['Find a path through a simple maze', 'Go back and try again at a dead end'],
          p: ['Can follow a line with a finger'],
          e: [
            'A maze is a puzzle made of paths. You start at one place and try to reach the finish.',
            'Some paths lead to dead ends, where you can\'t go any further. When that happens, go back to the last place you had a choice and try another way.',
            'A clever trick: try starting from the finish and working backwards! People have built mazes in gardens and hedges for hundreds of years.',
          ],
          v: 'maze = a puzzle made of paths; path = a way to go; dead end = a path that stops; finish = the end of the maze',
          x: ['A pencil maze in a puzzle book.', 'A hedge maze in a garden.'],
          s: ['The Mouse and the Cheese', 'In the puzzle book, a little mouse wanted to reach the cheese. Ivaan traced the path with his finger — left, down... dead end! He went back to the last turn and tried right. Up, around, down... CHEESE! "Want to know a trick?" asked Papa. "Start at the cheese and go backwards." Ivaan tried the next maze that way. It was super quick!'],
          a: [
            ch('A path that stops is a…', '*dead end|finish|start'),
            ch('At a dead end, you should…', '*go back and try another way|give up|cry'),
            tf('You can solve some mazes by starting at the finish.', true),
            ch('A maze is made of…', '*paths|blocks of cheese|songs'),
          ],
          t: ['Why might starting from the finish help?', 'How could you make a maze harder?'],
          k: ['Trace a maze and tell a grown-up where the dead ends are.'],
          m: ['Draw-a-Maze', 'paper, pencil, crayons', 'Draw a start and finish | Draw one path that connects them | Add extra paths with dead ends | Ask a grown-up to solve it'],
          q: [
            ch('The end of the maze is the…', '*finish|start|middle'),
            tf('Hedge mazes are found in gardens.', true),
            ch('A way to go is a…', '*path|puddle|pancake'),
          ],
          ms: ['Navigates simple mazes', 'Backtracks at dead ends', 'Designs a maze'],
        }),
      ]),
    ]),
    S('s5', 'Memory games, spot the difference and tangrams.', [
      'Improve visual memory with games', 'Spot differences by looking carefully', 'Make shapes with tangram pieces',
    ], [
      U('memory-games', 'Look Carefully', 'Memory and attention.', 'Pairs game; Spot the difference; What\'s missing?', [
        L('spot', 'Spot the Difference', {
          o: ['Find differences between two pictures by scanning carefully', 'Use strategies to remember where cards are'],
          p: ['Can match pictures'],
          e: [
            'In spot-the-difference puzzles, two pictures look the same but have small changes. Good spotters scan carefully, part by part — top left, top right, bottom left, bottom right.',
            'In the pairs (memory) game, cards are placed face down. You turn two over; if they match, you keep them. Remembering where cards are helps you win.',
            'Saying things to yourself can help memory: "The cat is in the corner, the car is next to it." Paying attention is a skill we can practise.',
          ],
          v: 'difference = a way two things are not the same; scan = to look over something carefully; memory = remembering things; attention = focusing on something',
          x: ['Finding the missing button in the second picture.', 'Remembering where the two elephants are in a memory game.'],
          s: ['The Twin Gardens', 'Ivaan looked at two garden pictures. They looked exactly the same! Then he scanned slowly: top left — the sun was the same; top right — one picture had a bird, the other didn\'t! Bottom left — a missing flower! He found all five differences. "Slow looking is fast finding," he told his sister.'],
          a: [
            ch('A good way to spot differences is to…', '*scan part by part|glance quickly|close your eyes'),
            ch('In the pairs game, you win by…', '*remembering where cards are|guessing only|hiding cards'),
            tf('Attention is a skill we can practise.', true),
            ct('Count the differences found: ✅✅✅✅✅', 5),
          ],
          t: ['What helps you remember where things are?', 'Why does slow looking help?'],
          k: ['Play a pairs game with a grown-up and explain your memory trick.'],
          m: ['Homemade Memory Game', 'card, crayons, scissors', 'Cut 12 equal cards | Draw 6 pairs of matching pictures | Shuffle and lay them face down | Play with family and share memory tricks', "Use child-safe scissors with adult supervision and keep small cards away from children who may put them in their mouths."],
          q: [
            ch('Focusing on something is…', '*attention|allergy|arithmetic'),
            tf('Scanning part by part helps find differences.', true),
            ch('Remembering things uses your…', '*memory|muscles only|shoes'),
          ],
          ms: ['Scans systematically', 'Uses memory strategies', 'Sustains attention'],
        }),
      ]),
      U('tangrams', 'Tangrams', 'Seven pieces, many shapes.', 'Tangram pieces; Making animals and objects; Turning and flipping', [
        L('tangram', 'Seven Magic Pieces', {
          o: ['Name the seven tangram pieces', 'Make pictures by turning and flipping pieces'],
          p: ['Knows triangles, squares'],
          e: [
            'A tangram is a Chinese puzzle made of seven flat pieces: five triangles (two big, one medium, two small), one square and one parallelogram.',
            'Together, the seven pieces make a big square. But you can rearrange them to make hundreds of shapes — cats, boats, people, houses — using all seven pieces without overlapping.',
            'To fit pieces, try turning (rotating) or flipping them over. Tangrams became popular around the world in the 1800s.',
          ],
          v: 'tangram = a seven-piece shape puzzle; parallelogram = a slanted four-sided shape; rotate = to turn around; flip = to turn over',
          x: ['A tangram cat with a triangle tail.', 'A tangram boat with a triangle sail.'],
          s: ['The Tangram Swan', 'Zuri tipped out seven pieces. "Make a swan," said her uncle, showing a picture. She tried and tried — the neck wouldn\'t work. Then she flipped the parallelogram over, and suddenly it made a perfect curved neck! "Seven pieces, one swan," she smiled, and then made a cat, a rocket and a dancing person.'],
          a: [
            ct('How many pieces in a tangram? 🔺🔺🔺🔺🔺◼️▱', 7),
            ch('How many triangles are in a tangram?', '*five|two|seven'),
            tf('You can flip and rotate tangram pieces.', true),
            ch('Tangrams come from…', '*China|Brazil|Egypt'),
          ],
          t: ['Why do you think one puzzle can make so many shapes?', 'Which piece is hardest to place?'],
          k: ['Show a grown-up a tangram animal you made.'],
          m: ['Make a Tangram', 'a square of card, ruler, scissors (with an adult)', 'Draw the tangram cutting lines on the square | Cut out the seven pieces | Make the big square again | Create three animals of your own', "An adult should supervise cutting and use child-safe scissors. Keep the seven pieces away from younger children who may mouth small objects."],
          q: [
            ch('To turn something around is to…', '*rotate|repeat|remove'),
            tf('A tangram has one square.', true),
            ch('A slanted four-sided shape is a…', '*parallelogram|circle|triangle'),
          ],
          ms: ['Names tangram pieces', 'Rotates and flips shapes', 'Creates figures'],
        }),
      ]),
    ]),
    S('s6', 'Mini sudoku, magic squares and riddles.', [
      'Solve 4×4 sudoku', 'Explore magic squares', 'Solve and create riddles',
    ], [
      U('number-puzzles', 'Number Puzzles', 'Sudoku and magic squares.', '4×4 sudoku; Magic squares; The Lo Shu legend', [
        L('sudoku', 'Sudoku and Magic Squares', {
          o: ['Solve a 4×4 sudoku using logic', 'Check and complete a 3×3 magic square'],
          p: ['Can add numbers to 20'],
          e: [
            'In a 4×4 sudoku, each row, each column and each 2×2 box must contain the numbers 1, 2, 3 and 4 exactly once. You use logic, not guessing: "This row already has 1, 2 and 4, so the empty square must be 3."',
            'A magic square is a grid where every row, column and diagonal adds up to the same number. In the classic 3×3 magic square using 1 to 9, the magic sum is 15.',
            'The Lo Shu square from ancient Chinese legend is a 3×3 magic square. Magic squares also appear in India — a 4×4 magic square is carved at the Parshvanath temple in Khajuraho, dated to around the 10th century.',
          ],
          v: 'sudoku = a number placement puzzle; row = a line across; column = a line up and down; magic square = a grid where all lines add to the same sum',
          x: ['Rows of the Lo Shu: 4 9 2, 3 5 7, 8 1 6.', 'The Khajuraho magic square, where every row and column adds to 34.'],
          s: ['The Turtle\'s Shell', 'An old Chinese legend tells that during a great flood, a turtle emerged from the river with a strange pattern of dots on its shell. The dots formed numbers 1 to 9 in a square where every line added to 15. People saw it as a sign of order and harmony, and named it the Lo Shu.'],
          a: [
            ch('A row has 1, 2 and 4. The missing number in a 4×4 sudoku is…', '*3|5|1'),
            ch('In the classic 3×3 magic square, each line adds to…', '*15|10|20'),
            tf('Sudoku is solved with logic, not guessing.', true),
            ct('Add the middle row of the Lo Shu: 3 + 5 + 7', 15),
          ],
          t: ['Why does the middle of the 3×3 magic square have to be 5?', 'What strategies help in sudoku?'],
          k: ['Explain how you solved one square in a sudoku.'],
          m: ['Puzzle Maker', 'grid paper, pencil', 'Solve two 4×4 sudoku puzzles | Complete a 3×3 magic square with 1–9 | Create your own 4×4 sudoku | Swap with a friend to solve'],
          q: [
            ch('A line up and down is a…', '*column|row|diagonal'),
            tf('The Khajuraho magic square is 4×4.', true),
            ch('A line across is a…', '*row|column|circle'),
          ],
          ms: ['Solves 4×4 sudoku logically', 'Verifies magic squares', 'Creates puzzles'],
        }),
      ]),
      U('riddles', 'Riddles', 'Word puzzles.', 'What am I? riddles; Double meanings; Riddles in stories', [
        L('riddles', 'What Am I?', {
          o: ['Solve riddles by thinking about clues and double meanings', 'Create original riddles'],
          p: ['Has good vocabulary'],
          e: [
            'A riddle is a question or statement that needs clever thinking to solve. Many riddles describe something in a surprising way: "I have hands but cannot clap. What am I?" (A clock!)',
            'Riddles often use double meanings — words that mean two things. A clock\'s "hands" are not real hands.',
            'Riddles appear in stories everywhere: the Sphinx\'s riddle in Greek myth, Betal\'s riddles to King Vikramaditya, and the Yaksha\'s questions to Yudhishthira in the Mahabharata.',
          ],
          v: 'riddle = a puzzling question needing clever thinking; double meaning = a word that means two things; clue = a hint; solve = to find the answer',
          x: ['"What has keys but can\'t open locks?" — a piano.', '"What gets wetter the more it dries?" — a towel.'],
          s: ['The Yaksha\'s Questions', 'In the Mahabharata, a Yaksha guarding a lake asked Yudhishthira many riddles before letting him drink. "What is faster than the wind?" "The mind." "What is more numerous than grass?" "Thoughts." Yudhishthira answered wisely, and the Yaksha restored his brothers to life.'],
          a: [
            ch('"I have hands but cannot clap." What am I?', '*a clock|a glove|a tree'),
            ch('"What has keys but can\'t open locks?"', '*a piano|a door|a car'),
            tf('Riddles often use double meanings.', true),
            ch('"What gets wetter the more it dries?"', '*a towel|the sun|a stone'),
          ],
          t: ['What makes a riddle clever?', 'Can you think of a word with two meanings?'],
          k: ['Tell a grown-up a riddle you made up.'],
          m: ['Riddle Book', 'small booklet, pencils', 'Choose five objects | Write a "What am I?" riddle for each using double meanings | Put answers under flaps | Share your riddle book'],
          q: [
            ch('A hint is a…', '*clue|cloud|clock'),
            tf('The Yaksha asked Yudhishthira riddles.', true),
            ch('To find the answer is to…', '*solve|sell|sail'),
          ],
          ms: ['Solves riddles', 'Identifies double meanings', 'Creates original riddles'],
        }),
      ]),
    ]),
    S('s7', 'Problem-solving strategies and logic puzzles.', [
      'Use Polya\'s four steps', 'Solve river-crossing puzzles', 'Use logic grids',
    ], [
      U('polya', 'How to Solve It', 'Polya\'s four steps.', 'Understand the problem; Make a plan; Carry out and look back', [
        L('polya', 'Four Steps to Solving', {
          o: ['Apply Polya\'s four steps to a problem', 'Choose strategies like drawing, working backwards and simplifying'],
          p: ['Has solved simple puzzles'],
          e: [
            'Mathematician George Polya, in "How to Solve It" (1945), described four steps: Understand the problem; Devise a plan; Carry out the plan; Look back (check and reflect).',
            'Useful strategies include: draw a diagram, make a table, look for a pattern, work backwards, try a simpler version, and guess and check.',
            'Looking back is often skipped but powerful: Does the answer make sense? Could I solve it another way? Can I use this method again?',
          ],
          v: 'strategy = a method for solving; work backwards = start from the goal; simplify = make an easier version; reflect = think back on what you did',
          x: ['Drawing a diagram for a handshake problem.', 'Working backwards from the end of a story problem.'],
          s: ['The Handshake Problem', 'Ten friends each shake hands once with every other friend. How many handshakes? Kiko started counting and got confused. Then he tried a simpler version: 2 friends — 1. 3 friends — 3. 4 friends — 6. A pattern! 1, 3, 6, 10... For 10 friends: 45. He checked with a formula: 10 × 9 ÷ 2 = 45. Looking back, he grinned.'],
          a: [
            od('Put Polya\'s steps in order', 'Understand the problem|Devise a plan|Carry out the plan|Look back'),
            ch('Trying an easier version is…', '*simplifying|guessing|giving up'),
            ct('How many handshakes among 4 friends?', 6),
            tf('Looking back helps check and learn.', true),
          ],
          t: ['Which strategy do you use most? Why?', 'Why do people skip "look back"?'],
          k: ['Solve a problem aloud, naming each Polya step.'],
          m: ['Strategy Journal', 'a notebook, a set of puzzles', 'Solve five puzzles using Polya\'s steps | Record the strategy you used | Note what you learned looking back | Share your favourite strategy'],
          q: [
            ch('Starting from the goal is…', '*working backwards|working forwards|walking'),
            tf('Polya wrote "How to Solve It".', true),
            ch('Thinking back on what you did is to…', '*reflect|reject|repeat'),
          ],
          ms: ['Applies Polya\'s steps', 'Chooses strategies', 'Reflects on solutions'],
        }),
      ]),
      U('logic-puzzles', 'Logic Puzzles', 'River crossings and grids.', 'River-crossing puzzles; Logic grids; Knights and knaves', [
        L('river-crossing', 'Wolf, Goat and Cabbage', {
          o: ['Solve a river-crossing puzzle systematically', 'Use a logic grid to solve clue puzzles'],
          p: ['Knows Polya\'s steps'],
          e: [
            'In a classic river-crossing puzzle, a farmer must take a wolf, a goat and a cabbage across a river in a boat that holds only the farmer and one item. The wolf can\'t be left alone with the goat, nor the goat with the cabbage.',
            'The solution: take the goat across; return; take the wolf across; bring the goat back; take the cabbage across; return; take the goat across. The key insight is that you can bring something back! Such puzzles appear in a manuscript attributed to Alcuin of York, around 800 CE.',
            'Logic grid puzzles give clues about people and their choices; you mark a grid with ✓ and ✗ to eliminate possibilities until only one answer remains.',
          ],
          v: 'constraint = a rule that limits choices; eliminate = to rule out; logic grid = a table for tracking possibilities; insight = a sudden understanding',
          x: ['The farmer bringing the goat back across.', 'A grid showing who owns which pet.'],
          s: ['The Farmer\'s Puzzle', 'Zuri tried the wolf-goat-cabbage puzzle with toys. Every time, something got eaten! Frustrated, she asked, "Does the farmer have to always carry something forwards?" Her teacher smiled. Zuri\'s eyes lit up — she brought the goat back across, and suddenly the puzzle solved itself. "Going backwards was the answer!"'],
          a: [
            ch('What does the farmer take across first?', '*the goat|the wolf|the cabbage'),
            ch('The key insight is that…', '*the farmer can bring something back|the wolf can row|the cabbage can swim'),
            tf('Logic grids help eliminate possibilities.', true),
            od('Put the first three moves in order', 'Take the goat across|Return alone|Take the wolf across'),
          ],
          t: ['Why is it tempting to only move forwards?', 'How does a logic grid help with many clues?'],
          k: ['Act out the river-crossing solution with toys and explain each move.'],
          m: ['Logic Grid Challenge', 'printed or drawn logic grids', 'Solve two logic grid puzzles | Write your own with three people and three pets | Test that it has exactly one answer | Swap with a friend'],
          q: [
            ch('To rule out is to…', '*eliminate|estimate|elevate'),
            tf('River-crossing puzzles are over 1,000 years old.', true),
            ch('A rule that limits choices is a…', '*constraint|celebration|calendar'),
          ],
          ms: ['Solves river-crossing puzzles', 'Uses logic grids', 'Explains key insights'],
        }),
      ]),
    ]),
    S('s9', 'Classic mathematical puzzles and lateral thinking.', [
      'Solve and generalise the Tower of Hanoi', 'Understand the Königsberg bridges and graph theory', 'Use lateral thinking',
    ], [
      U('classic-puzzles', 'Classic Puzzles', 'Hanoi and Königsberg.', 'Tower of Hanoi; Königsberg bridges; Euler paths', [
        L('hanoi-bridges', 'Towers and Bridges', {
          o: ['Find and explain the minimum moves for the Tower of Hanoi', 'Use Euler\'s reasoning about the Königsberg bridges'],
          p: ['Knows problem-solving strategies'],
          e: [
            'The Tower of Hanoi, invented by Édouard Lucas in 1883, has discs on one peg to be moved to another, one at a time, never placing a larger disc on a smaller one. With n discs, the minimum number of moves is 2ⁿ − 1: 3 discs take 7 moves; 4 discs take 15.',
            'In 1736, Leonhard Euler studied the seven bridges of Königsberg: could you walk across each bridge exactly once? He proved it was impossible, founding graph theory.',
            'Euler showed that a path crossing every edge once exists only if zero or two points (vertices) have an odd number of connections. Königsberg had four land areas, all with an odd number of bridges.',
          ],
          v: 'vertex = a point in a graph; edge = a line joining two vertices; graph theory = the study of networks of points and lines; Euler path = a path using every edge exactly once',
          x: ['Tower of Hanoi with 3 discs in 7 moves.', 'Drawing an envelope shape without lifting your pen.'],
          s: ['The Bridges of Königsberg', 'Citizens of Königsberg loved Sunday walks across the seven bridges of their river. They wondered whether anyone could cross each bridge exactly once. Nobody succeeded. In 1736, Leonhard Euler turned the map into dots and lines and proved it impossible. A puzzle about a Sunday walk became a new branch of mathematics.'],
          a: [
            ch('Minimum moves for a 3-disc Tower of Hanoi?', '*7|3|9'),
            ch('Minimum moves for a 4-disc Tower of Hanoi?', '*15|8|16'),
            tf('Euler proved the Königsberg walk was impossible.', true),
            mt('Match the term', 'vertex=a point|edge=a connecting line|Euler path=uses every edge once'),
          ],
          t: ['Why is the formula 2ⁿ − 1?', 'Where are graphs used today?'],
          k: ['Demonstrate the Tower of Hanoi with 3 discs and explain the recursive idea.'],
          m: ['Puzzle Investigation', 'coins of different sizes or a Hanoi set, paper', 'Solve Hanoi with 1, 2, 3 and 4 discs | Record minimum moves and find the pattern | Draw five shapes and test for Euler paths | Write up your findings'],
          q: [
            ch('A point in a graph is a…', '*vertex|vortex|vector'),
            tf('Graph theory began with Euler\'s bridge problem.', true),
            ch('A line joining two vertices is an…', '*edge|angle|arc only'),
          ],
          ms: ['Generalises Hanoi', 'Applies Euler\'s criterion', 'Explains graph ideas'],
        }),
      ]),
      U('lateral', 'Lateral Thinking', 'Thinking outside the box.', 'The nine dots puzzle; Questioning assumptions; Creative problem solving', [
        L('lateral', 'Thinking Outside the Box', {
          o: ['Solve lateral thinking puzzles by questioning assumptions', 'Apply creative thinking techniques'],
          p: ['Has used logical strategies'],
          e: [
            'Lateral thinking, a term coined by Edward de Bono in 1967, means solving problems by approaching them from unexpected angles rather than step-by-step logic alone.',
            'The nine dots puzzle asks you to join nine dots in a 3×3 grid with four straight lines without lifting your pen. Most people fail because they assume lines must stay inside the square. Going outside the dots solves it — possibly the origin of "thinking outside the box".',
            'Techniques include questioning assumptions, reversing the problem, using random prompts and asking "what if?". Good problem solvers combine logical and lateral thinking.',
          ],
          v: 'lateral thinking = solving problems from unexpected angles; assumption = something taken for granted; reverse = to turn the other way; creativity = making new and useful ideas',
          x: ['The nine dots puzzle.', 'Asking "How could we make this problem worse?" to find solutions.'],
          s: ['The Man in the Lift', 'A classic puzzle: a man lives on the 10th floor. Every morning he takes the lift down. In the evening, he takes the lift to the 7th floor and walks up — unless it\'s raining or others are in the lift. Why? Meera puzzled over it, then questioned her assumption that he was tall. "He\'s too short to reach the 10th button — unless he has an umbrella!"'],
          a: [
            ch('Lateral thinking was named by…', '*Edward de Bono|Euler|Polya'),
            ch('The nine dots puzzle is solved by…', '*drawing lines outside the dots|using curved lines|lifting the pen'),
            tf('Questioning assumptions helps lateral thinking.', true),
            ch('Something taken for granted is an…', '*assumption|answer|angle'),
          ],
          t: ['What assumptions do people make about problems at school?', 'When is step-by-step logic better than lateral thinking?'],
          k: ['Present a lateral thinking puzzle and guide others to the answer.'],
          m: ['Creative Problem Lab', 'sticky notes, a real problem (e.g. reducing waste at home)', 'List assumptions about the problem | Use reversal: "How could we make it worse?" | Flip those ideas into solutions | Test one idea for a week'],
          q: [
            ch('Making new and useful ideas is…', '*creativity|calculation|copying'),
            tf('The nine dots puzzle uses four straight lines.', true),
            ch('To turn the other way is to…', '*reverse|repair|rest'),
          ],
          ms: ['Questions assumptions', 'Solves lateral puzzles', 'Applies creative techniques'],
        }),
      ]),
    ]),
    S('s12', 'Game theory and the great unsolved problems.', [
      'Analyse strategic games with game theory', 'Describe famous open problems and puzzle-solvers', 'Engage with mathematical research culture',
    ], [
      U('game-theory', 'Game Theory', 'The mathematics of strategy.', 'Prisoner\'s dilemma; Nash equilibrium; Cooperation and repeated games', [
        L('game-theory', 'The Prisoner\'s Dilemma', {
          o: ['Analyse the prisoner\'s dilemma and Nash equilibrium', 'Evaluate how cooperation can emerge in repeated games'],
          p: ['Knows logic and probability'],
          e: [
            'Game theory studies strategic decisions where each person\'s outcome depends on others\' choices. It was developed by John von Neumann and Oskar Morgenstern (1944) and extended by John Nash.',
            'In the prisoner\'s dilemma, two suspects are questioned separately. If both stay silent, both get short sentences. If one betrays the other, the betrayer goes free and the other gets a long sentence. If both betray, both get medium sentences. Each is individually better off betraying — so both betray, though both would be better off cooperating. Mutual betrayal is a Nash equilibrium: no one gains by changing strategy alone.',
            'In repeated games, cooperation can emerge. In Robert Axelrod\'s computer tournaments (around 1980), the simple strategy "tit for tat" — cooperate first, then copy the opponent\'s last move — performed remarkably well.',
          ],
          v: 'game theory = the study of strategic decision-making; Nash equilibrium = a state where no player benefits from changing strategy alone; dilemma = a difficult choice; tit for tat = cooperate first, then copy the other player',
          x: ['Two shops in a price war.', 'Countries negotiating climate agreements.'],
          s: ['The Tournament', 'In 1980, political scientist Robert Axelrod invited experts to submit computer programs to play repeated prisoner\'s dilemma against each other. Complex, clever strategies entered. The winner was the shortest program: tit for tat, submitted by Anatol Rapoport. Nice, retaliatory, forgiving and clear — it suggested how cooperation might evolve.'],
          a: [
            ch('In a one-shot prisoner\'s dilemma, the Nash equilibrium is…', '*both betray|both stay silent|one is freed'),
            ch('Tit for tat starts by…', '*cooperating|betraying|doing nothing'),
            tf('Cooperation can emerge in repeated games.', true),
            mt('Match the thinker', 'John Nash=equilibrium concept|Robert Axelrod=cooperation tournaments|von Neumann=founded game theory with Morgenstern'),
          ],
          t: ['Where do you see prisoner\'s dilemmas in real life?', 'Is tit for tat a good strategy for friendships?'],
          k: ['Run a classroom prisoner\'s dilemma game and explain the results.'],
          m: ['Strategy Tournament', 'Python or a spreadsheet', 'Code strategies like always cooperate, always betray and tit for tat | Run a round-robin tournament over many rounds | Analyse which strategies score best | Write a 1500-word report'],
          q: [
            ch('The study of strategic decisions is…', '*game theory|geometry|geology'),
            tf('Mutual betrayal is a Nash equilibrium in the prisoner\'s dilemma.', true),
            ch('A difficult choice is a…', '*dilemma|diagram|dialogue'),
          ],
          ms: ['Analyses games formally', 'Explains Nash equilibrium', 'Evaluates cooperation'],
        }),
      ]),
      U('open-problems', 'The Great Problems', 'Puzzles mathematicians are still solving.', 'Famous solved problems; Open problems; Ramanujan and puzzle-solvers', [
        L('open-problems', 'Unsolved Mysteries of Mathematics', {
          o: ['Describe famous solved and unsolved mathematical problems', 'Evaluate what drives mathematical discovery'],
          p: ['Has solved many puzzles'],
          e: [
            'Some problems take centuries. Fermat\'s Last Theorem (that aⁿ + bⁿ = cⁿ has no whole-number solutions for n > 2) was stated around 1637 and proved by Andrew Wiles in 1994. The Four Colour Theorem was proved in 1976 with computer help.',
            'Many puzzles remain open. The Collatz conjecture: start with any positive whole number; if even, halve it; if odd, multiply by 3 and add 1. Does every number eventually reach 1? Nobody knows. The Riemann Hypothesis, about prime numbers, is one of the Clay Millennium Prize Problems, each carrying a one-million-dollar prize.',
            'Srinivasa Ramanujan (1887–1920), largely self-taught, filled notebooks with remarkable formulas; mathematicians are still exploring them. His story with G. H. Hardy, and the "taxicab number" 1729, show the joy of puzzles at the highest level. India celebrates National Mathematics Day on his birthday, 22 December.',
          ],
          v: 'conjecture = a statement believed true but not yet proved; theorem = a proven mathematical statement; proof = a logical argument showing something is true; prime number = a number with exactly two factors',
          x: ['Collatz from 6: 6, 3, 10, 5, 16, 8, 4, 2, 1.', '1729 = 1³ + 12³ = 9³ + 10³.'],
          s: ['The Taxicab Number', 'When G. H. Hardy visited Ramanujan in hospital, he said his taxi\'s number, 1729, seemed dull. "No," Ramanujan replied at once, "it is a very interesting number. It is the smallest number expressible as the sum of two cubes in two different ways." 1729 = 1³ + 12³ = 9³ + 10³. Numbers, for Ramanujan, were old friends.'],
          a: [
            ch('Fermat\'s Last Theorem was proved by…', '*Andrew Wiles|Ramanujan|Euler'),
            ch('A statement believed true but not proved is a…', '*conjecture|theorem|fact'),
            tf('The Collatz conjecture is still unsolved.', true),
            od('Continue Collatz from 5', '5|16|8|4|2|1'),
          ],
          t: ['Why do mathematicians spend years on problems with no obvious use?', 'What can Ramanujan\'s story teach about talent and opportunity?'],
          k: ['Present one famous problem, solved or unsolved, to a group.'],
          m: ['Collatz Exploration', 'Python or a spreadsheet', 'Compute Collatz sequences for numbers 1 to 1,000 | Find which number takes the most steps | Graph the step counts | Write about why proof is harder than checking'],
          q: [
            ch('A proven mathematical statement is a…', '*theorem|conjecture|guess'),
            tf('National Mathematics Day honours Ramanujan.', true),
            ch('1729 is known as the…', '*taxicab number|prime number|perfect number'),
          ],
          ms: ['Describes famous problems accurately', 'Distinguishes conjecture and theorem', 'Explores problems computationally'],
        }),
      ]),
    ]),
  ],
});
