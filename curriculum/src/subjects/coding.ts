import { subject, S, U, L, ch, tf, od, mt, ct } from '../dsl.ts';

export default subject({
  id: 'coding',
  description: 'Coding and algorithms from unplugged games to real programs: sequences and instructions, directions and grids, patterns and loops, debugging, conditionals and events, variables, block-based programming, functions, data structures, searching and sorting, text-based programming in Python, algorithm efficiency, and the ideas of computer science.',
  stages: [
    S('s4', 'Step-by-step instructions and directions: coding without a screen.', [
      'Follow and give step-by-step instructions', 'Use forward, left and right', 'Notice when an instruction is wrong and fix it',
    ], [
      U('sequences', 'Step by Step', 'Instructions in order.', 'Instructions; Order matters; Everyday algorithms', [
        L('sequence', 'First, Next, Last', {
          o: ['Put instructions in the right order', 'Explain why the order of steps matters'],
          p: ['Can follow simple directions'],
          e: [
            'An algorithm is a set of step-by-step instructions to do something. Brushing your teeth, making a sandwich and getting dressed all follow algorithms!',
            'The order matters. If you put on your shoes before your socks, it doesn\'t work! Computers follow instructions exactly, in order.',
            'Coding means writing instructions that a computer can follow. Before computers, we can practise by giving instructions to friends or toy robots.',
          ],
          v: 'algorithm = step-by-step instructions; instruction = one step telling what to do; order = which comes first, next and last; code = instructions for a computer',
          x: ['Socks first, then shoes.', 'Wash hands, then eat.'],
          s: ['Robot Papa', 'Ivaan told Papa, "Make me a sandwich!" Papa stood still like a robot. "Instructions, please." Ivaan said, "Put jam on bread." Papa rubbed the jam jar — still closed — on the bread bag! Ivaan giggled. "Open the bag. Take out bread. Open the jar..." Step by step, a perfect sandwich appeared. "Robots need every step!" Ivaan laughed.'],
          a: [
            od('Put the steps in order', 'Put on socks|Put on shoes|Tie the laces|Go outside'),
            ch('An algorithm is…', '*step-by-step instructions|a kind of fruit|a song'),
            tf('Computers follow instructions exactly.', true),
            od('Put the toothbrushing steps in order', 'Wet the brush|Add toothpaste|Brush teeth|Rinse'),
          ],
          t: ['What happens if you mix up the steps of a recipe?', 'Can you think of an algorithm you use every day?'],
          k: ['Give a grown-up three steps to do something, like clapping and jumping.'],
          m: ['Robot Game', 'a grown-up or friend as the "robot"', 'Choose a simple task like stacking cups | Give the robot one instruction at a time | The robot does exactly what you say | Fix any steps that go wrong'],
          q: [
            ch('Instructions for a computer are called…', '*code|cake|clouds'),
            tf('Order matters in an algorithm.', true),
            ch('What comes first?', '*socks|shoes|laces'),
          ],
          ms: ['Sequences instructions', 'Explains why order matters', 'Gives clear instructions'],
        }),
      ]),
      U('directions', 'Robot Directions', 'Moving on a grid.', 'Forward and back; Turn left and right; Grid paths', [
        L('grid-moves', 'Guide the Robot', {
          o: ['Use forward, back, left and right to move on a grid', 'Plan a path to a goal'],
          p: ['Can follow step-by-step instructions'],
          e: [
            'A robot on a grid can move forward, move back, turn left and turn right. We can write arrows to show the moves: ⬆️ forward, ⬅️ left, ➡️ right.',
            'To reach a goal, we plan the path: "Forward, forward, turn right, forward." Each square counts as one step.',
            'If the robot goes the wrong way, we look at our instructions to find the mistake. Finding and fixing mistakes is called debugging.',
          ],
          v: 'forward = moving ahead; turn = changing direction; grid = squares in rows and columns; debug = to find and fix a mistake in instructions',
          x: ['Guiding a toy car to a parking spot.', 'Telling a friend how to walk to the door.'],
          s: ['Bunny Wants a Carrot', 'On the floor grid, Bunny sat in one corner and a carrot lay in the other. Ivaan laid arrow cards: forward, forward, turn right, forward. Bunny hopped... and bumped into the wall! "Oops, a bug!" Ivaan checked his cards and swapped one. This time Bunny hopped straight to the carrot. Crunch!'],
          a: [
            ct('Count the steps forward: ⬆️⬆️⬆️', 3),
            ch('Finding and fixing a mistake is called…', '*debugging|dancing|drawing'),
            tf('Each square on a grid can be one step.', true),
            ch('To change direction, the robot must…', '*turn|stop forever|jump'),
          ],
          t: ['Is there more than one path to the carrot?', 'What is the shortest path?'],
          k: ['Give a grown-up directions to walk from the door to your bed.'],
          m: ['Floor Grid Adventure', 'masking tape or chalk, a toy, arrow cards', 'Make a 4×4 grid on the floor | Place a toy at start and a treasure at the goal | Lay arrow cards for the path | Test it and debug if needed'],
          q: [
            ch('Squares in rows and columns make a…', '*grid|circle|line'),
            tf('A robot can turn left or right.', true),
            ch('If the robot goes the wrong way, you…', '*debug the instructions|give up|throw it'),
          ],
          ms: ['Uses directional commands', 'Plans paths', 'Debugs simple errors'],
        }),
      ]),
    ]),
    S('s5', 'Patterns, loops and debugging.', [
      'Spot repeating patterns in instructions', 'Use loops to repeat steps', 'Debug a sequence step by step',
    ], [
      U('loops', 'Loops', 'Repeat it!', 'Spotting repeats; Repeat blocks; Loops in dance and songs', [
        L('repeat', 'Repeat 3 Times', {
          o: ['Find repeating patterns in instructions', 'Rewrite repeated steps as a loop'],
          p: ['Can sequence instructions'],
          e: [
            'Sometimes instructions repeat: "clap, clap, clap, clap." Instead of writing it many times, we can say "repeat clap 4 times." This is a loop.',
            'Loops save time and make code shorter. A song chorus that repeats is like a loop.',
            'To draw a square with a robot, you could write: forward, turn, forward, turn, forward, turn, forward, turn. Or simply: repeat 4 times (forward, turn).',
          ],
          v: 'loop = instructions that repeat; repeat = to do again; pattern = something that happens again and again; shorter = using fewer steps',
          x: ['"Repeat 3 times: jump."', 'Walking around a square: repeat 4 times (walk, turn).'],
          s: ['The Lazy Wizard', 'A wizard had to write the spell "Sparkle!" one hundred times on a scroll. His hand ached after ten. His clever apprentice said, "Write: REPEAT 100 TIMES: Sparkle!" The wizard tried it, and one hundred sparkles burst into the sky at once. "A loop!" he cried. "Why didn\'t I think of that?"'],
          a: [
            ch('"Clap, clap, clap" can be written as…', '*repeat clap 3 times|clap once|stop'),
            ct('Repeat 5 times: ⭐ — how many stars?', 5),
            tf('Loops make code shorter.', true),
            ch('How many times do you repeat (forward, turn) to make a square?', '*4|2|10'),
          ],
          t: ['Where do you see loops in your day?', 'Why do programmers like loops?'],
          k: ['Make a dance using a loop and teach it to a grown-up.'],
          m: ['Loop Dance', 'music, a space to move', 'Choose two moves like jump and spin | Make a pattern and repeat it 4 times | Write it as "repeat 4 times" | Perform your loop dance'],
          q: [
            ch('Instructions that repeat are a…', '*loop|lake|leaf'),
            tf('A song chorus is like a loop.', true),
            ch('Repeat 2 times (hop) means…', '*hop, hop|hop once|no hops'),
          ],
          ms: ['Identifies repetition', 'Writes loops', 'Explains benefits of loops'],
        }),
      ]),
      U('debugging', 'Bug Hunters', 'Finding mistakes.', 'What is a bug; Testing step by step; Fixing and retesting', [
        L('bug-hunt', 'Be a Bug Hunter', {
          o: ['Find a mistake in a set of instructions', 'Test, fix and test again'],
          p: ['Can follow loops and sequences'],
          e: [
            'A bug is a mistake in code that makes it do the wrong thing. Everyone makes bugs — even expert programmers!',
            'To find a bug, go through the instructions one step at a time and check what happens at each step. When something goes wrong, you\'ve found the bug.',
            'A famous story: in 1947, engineers working on the Harvard Mark II computer found a real moth stuck in it and taped it in their logbook as the "first actual case of bug being found". Grace Hopper, a computing pioneer, loved telling this story.',
          ],
          v: 'bug = a mistake in code; test = to try something to see if it works; fix = to correct a mistake; step through = to check one step at a time',
          x: ['A robot path that turns the wrong way.', 'A recipe missing "turn on the oven".'],
          s: ['The Moth in the Machine', 'In 1947, the giant Mark II computer at Harvard kept making errors. The team searched inside its relays and found a small moth stuck there. They removed it, taped it into their logbook and wrote: "First actual case of bug being found." The page still exists at the Smithsonian museum.'],
          a: [
            ch('A bug is…', '*a mistake in code|always an insect|a new computer'),
            od('Put bug hunting in order', 'Test the code|Find where it goes wrong|Fix the mistake|Test again'),
            tf('Expert programmers make bugs too.', true),
            ch('Checking one step at a time is…', '*stepping through|skipping|guessing'),
          ],
          t: ['How do you feel when you find a mistake? How should you feel?', 'Why test again after fixing?'],
          k: ['Show how you found and fixed a bug in some instructions.'],
          m: ['Buggy Instructions Challenge', 'paper, a grown-up', 'Ask a grown-up to write instructions with one hidden bug | Follow them step by step | Find and circle the bug | Fix it and test again'],
          q: [
            ch('To correct a mistake is to…', '*fix it|hide it|ignore it'),
            tf('A real moth was once found in a computer.', true),
            ch('To try something to see if it works is to…', '*test|taste|toss'),
          ],
          ms: ['Locates bugs systematically', 'Fixes and retests', 'Shows a positive attitude to mistakes'],
        }),
      ]),
    ]),
    S('s6', 'Conditionals, events and block-based programming.', [
      'Use if-then-else conditions', 'Program events in a block-based language', 'Create a simple interactive story or game',
    ], [
      U('conditionals', 'If This, Then That', 'Making decisions.', 'If-then; If-then-else; Conditions in daily life', [
        L('if-then', 'If It Rains, Take an Umbrella', {
          o: ['Explain if-then-else conditions', 'Write conditionals for everyday decisions'],
          p: ['Can use loops and sequences'],
          e: [
            'Programs make decisions using conditions. "If it is raining, then take an umbrella." The part after "if" is the condition — it is either true or false.',
            'If-then-else gives two choices: "If it is raining, then take an umbrella, else wear sunglasses."',
            'Games use conditions all the time: "If the player touches a coin, then add 1 point." "If lives = 0, then game over."',
          ],
          v: 'condition = something that is true or false; if-then = do something only when a condition is true; else = what to do when the condition is false; decision = choosing what to do',
          x: ['If the light is red, stop; else go.', 'If you are hungry, eat a snack.'],
          s: ['The Smart Doorbell', 'Zuri built a pretend smart doorbell. "If someone presses the button, then play a song." Then she added: "If it\'s night-time, then play a quiet song, else play a loud one." Her little brother pressed it twenty times to test every condition. "It works!" she cheered, covering her ears.'],
          a: [
            ch('A condition is…', '*true or false|always true|a colour'),
            ch('"If raining, then umbrella, else…"', '*sunglasses|umbrella|nothing ever'),
            tf('Games use conditions to decide what happens.', true),
            mt('Match the condition to the action', 'traffic light is red=stop|player touches coin=add a point|lives = 0=game over'),
          ],
          t: ['What "if-then" rules do you follow at home?', 'Can a condition be both true and false at once?'],
          k: ['Tell someone three if-then-else rules from your day.'],
          m: ['If-Then Game Cards', 'cards, a group', 'Write conditions on cards like "If you are wearing blue" | Write actions like "then jump" | Call out cards and everyone follows if true | Add "else" actions'],
          q: [
            ch('What to do when a condition is false is the…', '*else part|if part|loop'),
            tf('"If lives = 0, then game over" is a conditional.', true),
            ch('Choosing what to do is a…', '*decision|drawing|dinner'),
          ],
          ms: ['Explains conditionals', 'Writes if-then-else', 'Identifies conditions in games'],
        }),
      ]),
      U('blocks', 'Block Coding', 'Programming with blocks.', 'Sprites and events; Motion and looks blocks; Making an animation', [
        L('block-coding', 'Make a Sprite Move', {
          o: ['Use events, motion and loop blocks to animate a character', 'Create a short interactive program'],
          p: ['Knows loops and conditionals'],
          e: [
            'Block-based languages, like Scratch (created at MIT and first released in 2007) and ScratchJr, let you snap blocks together like puzzle pieces instead of typing.',
            'A sprite is a character in the program. Event blocks start the code: "when green flag clicked" or "when this sprite clicked". Motion blocks move it; looks blocks change how it appears; sound blocks play sounds.',
            'Combining events, loops and conditions creates interactive stories and games: "When green flag clicked, forever: if touching edge, bounce."',
          ],
          v: 'sprite = a character or object in a program; event = something that starts code, like a click; block = a puzzle-piece instruction; forever loop = a loop that never stops',
          x: ['A cat sprite that meows when clicked.', 'A fish that swims back and forth forever.'],
          s: ['Ivaan\'s Dancing Cat', 'Ivaan opened ScratchJr with Papa. He chose a cat sprite and snapped on blocks: green flag, jump, turn, jump, play sound. He pressed the flag. The cat jumped, spun and meowed! Then he added a repeat block so it danced 5 times. "I made a cat dance," he announced to the whole family.'],
          a: [
            ch('A character in a program is a…', '*sprite|spoon|spell'),
            ch('"When green flag clicked" is an…', '*event block|motion block|sound only'),
            tf('Block coding uses puzzle-piece instructions.', true),
            mt('Match the block type', 'move 10 steps=motion|change colour=looks|play drum=sound'),
          ],
          t: ['What game would you like to make?', 'Why might blocks be easier than typing for beginners?'],
          k: ['Show and explain a program you made.'],
          m: ['Animated Greeting Card', 'Scratch or ScratchJr (free, works offline as an app)', 'Choose a background and two sprites | Use an event block to start | Add motion, looks and a loop | Share your animated card with someone'],
          q: [
            ch('A loop that never stops is a…', '*forever loop|repeat 2|stop block'),
            tf('Scratch was created at MIT.', true),
            ch('Something that starts code, like a click, is an…', '*event|error|edge'),
          ],
          ms: ['Uses events, motion and loops', 'Creates an interactive program', 'Explains code to others'],
        }),
      ]),
    ]),
    S('s7', 'Variables, functions and building games.', [
      'Use variables to store and change data', 'Write functions to reuse code', 'Design and build a game with a score',
    ], [
      U('variables', 'Variables', 'Boxes for information.', 'What is a variable; Changing values; Score and lives', [
        L('variables', 'Keeping Score', {
          o: ['Explain what a variable is', 'Use a variable to keep score in a game'],
          p: ['Can build block programs with events and conditions'],
          e: [
            'A variable is like a labelled box that stores information a program needs to remember — a score, a name, the number of lives.',
            'Variables can change: "set score to 0" at the start, then "change score by 1" each time the player catches a star.',
            'Variables can store numbers, text (called strings) or true/false values (called Booleans, after the mathematician George Boole).',
          ],
          v: 'variable = a named store for information; value = what is stored in a variable; string = text data; Boolean = a true or false value',
          x: ['score = 10', 'playerName = "Ivaan"'],
          s: ['The Magic Scoreboard', 'Zuri built a game where a basket catches falling apples. But nothing counted her catches! She made a variable called "score", set it to 0, and added "change score by 1" whenever an apple touched the basket. Now the scoreboard ticked up: 1, 2, 3... "My game remembers!" she said.'],
          a: [
            ch('A variable is like a…', '*labelled box for information|a sprite|a sound'),
            ch('Text data is called a…', '*string|loop|sprite'),
            tf('Variables can change during a program.', true),
            ct('score starts at 0, then add 1 three times. What is score?', 3),
          ],
          t: ['What variables might a racing game need?', 'Why should a game reset the score at the start?'],
          k: ['Explain how your game keeps score using a variable.'],
          m: ['Catch Game', 'Scratch (offline editor)', 'Make a basket sprite controlled by arrow keys | Make apples fall from the top | Create a score variable and add 1 per catch | Add a lives variable and game over'],
          q: [
            ch('A true or false value is a…', '*Boolean|string|sprite'),
            tf('"set score to 0" gives a variable its starting value.', true),
            ch('What is stored in a variable is its…', '*value|volume|voice'),
          ],
          ms: ['Explains variables', 'Uses variables to track state', 'Distinguishes data types'],
        }),
      ]),
      U('functions', 'Functions', 'Reusable code.', 'Defining a function; Inputs (parameters); Breaking problems down', [
        L('functions', 'Write It Once, Use It Many Times', {
          o: ['Define and use a function with a parameter', 'Break a big problem into smaller parts'],
          p: ['Can use variables and loops'],
          e: [
            'A function is a named set of instructions you can use again and again. Instead of writing "draw a square" code many times, you define a function called drawSquare and call it whenever you need a square.',
            'Functions can take inputs called parameters. drawSquare(size) can draw big or small squares depending on the size you give it.',
            'Breaking a big problem into smaller parts — decomposition — is a key skill. A house drawing might use functions for drawSquare, drawTriangle and drawWindow.',
          ],
          v: 'function = a named, reusable set of instructions; parameter = an input to a function; call = to use a function; decomposition = breaking a problem into smaller parts',
          x: ['drawSquare(50) and drawSquare(100).', 'A "make tea" function used every morning.'],
          s: ['The Robot Chef\'s Recipes', 'Kiko programmed a robot chef. Instead of teaching it every step every day, he made functions: makeRoti, makeDal, makeSalad. For dinner, he just wrote: makeDal, makeRoti(4), makeSalad. "Four rotis, coming up!" said the robot. Kiko had taught it once; now it could cook forever.'],
          a: [
            ch('A function is…', '*a named, reusable set of instructions|a variable|a bug'),
            ch('In drawSquare(size), size is a…', '*parameter|sprite|loop'),
            tf('Decomposition means breaking a problem into smaller parts.', true),
            mt('Match the term', 'define=create a function|call=use a function|parameter=input to a function'),
          ],
          t: ['What functions would you need to draw a whole town?', 'Why do programmers use functions?'],
          k: ['Explain a function you wrote and its parameter.'],
          m: ['Pattern Town', 'Scratch with the Pen extension, or a turtle-graphics tool', 'Define functions for square, triangle and circle shapes | Add a size parameter | Use them to draw a town | Explain how functions saved time'],
          q: [
            ch('To use a function is to…', '*call it|delete it|draw it'),
            tf('Functions can take inputs.', true),
            ch('Breaking a problem into parts is…', '*decomposition|decoration|destruction'),
          ],
          ms: ['Defines and calls functions', 'Uses parameters', 'Decomposes problems'],
        }),
      ]),
    ]),
    S('s9', 'Text-based programming in Python, data and algorithms.', [
      'Write Python programs with input, output, conditions and loops', 'Use lists to store data', 'Implement searching and sorting algorithms',
    ], [
      U('python', 'Python Basics', 'Typing real code.', 'print and input; if/elif/else; for and while loops', [
        L('python-basics', 'Hello, Python', {
          o: ['Write Python programs using print, input, variables and conditions', 'Use for and while loops'],
          p: ['Understands variables, loops and conditions in blocks'],
          e: [
            'Python is a popular text-based programming language, created by Guido van Rossum and first released in 1991. It is known for being readable.',
            'print("Hello") shows text. name = input("Your name? ") asks the user to type something. if age >= 13: ... elif ...: ... else: ... makes decisions. Indentation (spaces at the start of lines) shows which code belongs inside a block.',
            'for i in range(5): repeats 5 times (i goes 0 to 4). while lives > 0: repeats as long as the condition is true. Careful — a while loop whose condition never becomes false runs forever!',
          ],
          v: 'syntax = the rules for writing code in a language; indentation = spaces at the start of a line; input = data given to a program; output = what a program shows or produces',
          x: ['print("Namaste, " + name)', 'for i in range(3): print("Hip hip hooray!")'],
          s: ['The Missing Colon', 'Meera wrote her first Python quiz, but it crashed with "SyntaxError". She stared at the screen. Her teacher pointed: "if answer == 4" was missing a colon at the end. She added it, ran the program, and it asked, "What is 2 + 2?" She typed 4. "Correct!" printed on the screen. One tiny symbol, one big smile.'],
          a: [
            ch('Which shows text on the screen?', '*print()|input()|range()'),
            ct('How many times does for i in range(4) repeat?', 4),
            tf('Indentation matters in Python.', true),
            mt('Match the code to its job', 'input()=asks the user|if/else=makes decisions|while=repeats while true'),
          ],
          t: ['Why might readable code matter?', 'What could go wrong with a while loop?'],
          k: ['Explain your Python program line by line.'],
          m: ['Python Quiz Game', 'Python installed locally (free) or an offline editor', 'Write a program that asks five questions | Use if/else to check answers | Keep score in a variable | Print a final message based on the score'],
          q: [
            ch('Rules for writing code are called…', '*syntax|sprites|sockets'),
            tf('Python was first released in 1991.', true),
            ch('range(5) gives numbers from…', '*0 to 4|1 to 5|5 to 10'),
          ],
          ms: ['Writes correct Python syntax', 'Uses conditions and loops', 'Reads and fixes errors'],
        }),
      ]),
      U('search-sort', 'Searching and Sorting', 'Classic algorithms.', 'Lists; Linear and binary search; Bubble sort', [
        L('search-sort', 'Find It Fast', {
          o: ['Use lists in Python', 'Compare linear and binary search, and trace bubble sort'],
          p: ['Can write Python loops'],
          e: [
            'A list stores many values in order: marks = [72, 85, 90]. Each item has an index starting at 0, so marks[0] is 72.',
            'Linear search checks items one by one. Binary search works only on sorted lists: check the middle; if the target is smaller, search the left half, otherwise the right half. Each step halves the list, so binary search is much faster on big lists — about 20 checks for a million items.',
            'Bubble sort repeatedly swaps neighbouring items that are in the wrong order until the list is sorted. It is simple but slow for large lists; faster algorithms like merge sort and quicksort are used in practice.',
          ],
          v: 'list = an ordered collection of values; index = the position of an item; binary search = searching a sorted list by halving it; sort = to arrange in order',
          x: ['Finding a word in a dictionary by opening in the middle.', 'Sorting cards by repeatedly swapping neighbours.'],
          s: ['The Guessing Game', 'Kiko thought of a number from 1 to 100. Zuri guessed 50. "Lower." 25. "Higher." 37. "Higher." 43... In just seven guesses she had it. "How?" asked Kiko. "Binary search," she grinned. "I cut the possibilities in half every time."'],
          a: [
            ch('In marks = [72, 85, 90], marks[0] is…', '*72|85|90'),
            ch('Binary search only works on…', '*sorted lists|empty lists|pictures'),
            tf('Bubble sort swaps neighbouring items.', true),
            od('Sort these numbers smallest to largest', '3|8|15|42'),
          ],
          t: ['Why must the list be sorted for binary search?', 'When might a simple slow algorithm be fine?'],
          k: ['Demonstrate binary search with a number-guessing game.'],
          m: ['🧪 Algorithm Race', 'Python, a timer', 'Write linear search and binary search functions | Test them on lists of 100, 10,000 and 1,000,000 numbers | Count steps or time each | Graph and explain the results'],
          q: [
            ch('The position of an item in a list is its…', '*index|indent|input'),
            tf('Binary search halves the list each step.', true),
            ch('To arrange in order is to…', '*sort|search|skip'),
          ],
          ms: ['Uses lists and indexes', 'Compares search algorithms', 'Traces sorting'],
        }),
      ]),
    ]),
    S('s12', 'Computer science foundations: efficiency, data structures and computation.', [
      'Analyse algorithm efficiency with Big O', 'Choose appropriate data structures', 'Understand the limits of computation',
    ], [
      U('efficiency', 'Algorithm Efficiency', 'Big O and recursion.', 'Big O notation; Recursion; Merge sort', [
        L('big-o', 'How Fast Is Fast?', {
          o: ['Describe algorithm efficiency using Big O notation', 'Write and trace a recursive function'],
          p: ['Knows searching and sorting algorithms'],
          e: [
            'Big O notation describes how an algorithm\'s running time grows as input size n grows. Linear search is O(n); binary search is O(log n); bubble sort is O(n²); merge sort is O(n log n).',
            'For a million items, O(n²) means around a trillion steps, but O(n log n) only about twenty million. Choosing the right algorithm can matter more than a faster computer.',
            'Recursion is when a function calls itself on a smaller version of the problem, with a base case to stop. Merge sort recursively splits a list in half, sorts each half and merges them — a "divide and conquer" strategy.',
          ],
          v: 'Big O = notation describing how running time grows with input size; recursion = a function calling itself; base case = the condition that stops recursion; divide and conquer = splitting a problem into smaller subproblems',
          x: ['factorial(n) = n × factorial(n − 1), with factorial(0) = 1.', 'Merge sort splitting [8,3,5,1] into [8,3] and [5,1].'],
          s: ['The Tower of Hanoi', 'A legend tells of priests moving 64 golden discs between three poles, never placing a bigger disc on a smaller one. The recursive solution takes 2⁶⁴ − 1 moves. At one move per second, that would take hundreds of billions of years — far longer than the age of the universe. Some problems are simple to describe but enormous to compute.'],
          a: [
            mt('Match the algorithm to its Big O', 'linear search=O(n)|binary search=O(log n)|bubble sort=O(n²)|merge sort=O(n log n)'),
            ch('Recursion needs a…', '*base case|sprite|forever loop'),
            tf('Algorithm choice can matter more than computer speed.', true),
            ch('Merge sort uses…', '*divide and conquer|random guessing|no comparisons'),
          ],
          t: ['Why does growth rate matter more than exact speed for big inputs?', 'When is recursion clearer than a loop?'],
          k: ['Explain Big O to a classmate with a real example.'],
          m: ['Sorting Benchmark Report', 'Python, plotting library or spreadsheet', 'Implement bubble sort and merge sort | Time them on increasing input sizes | Plot the results | Write a report relating results to Big O'],
          q: [
            ch('The condition that stops recursion is the…', '*base case|bug|big case'),
            tf('Binary search is O(log n).', true),
            ch('A function calling itself is…', '*recursion|iteration only|compilation'),
          ],
          ms: ['Applies Big O analysis', 'Writes recursive functions', 'Compares algorithms empirically'],
        }),
      ]),
      U('structures-limits', 'Data Structures and Limits', 'Organising data and what computers can\'t do.', 'Stacks, queues, dictionaries and graphs; Turing and computability; Ethics of algorithms', [
        L('structures', 'Stacks, Graphs and the Limits of Computing', {
          o: ['Choose suitable data structures for problems', 'Explain the halting problem and ethical issues in algorithms'],
          p: ['Can analyse algorithm efficiency'],
          e: [
            'Data structures organise data for efficient use. A stack is last-in-first-out (like a pile of plates; used for "undo"). A queue is first-in-first-out (like a ticket line). A dictionary (hash map) looks up values by key quickly. A graph models connections — maps, social networks — and algorithms like Dijkstra\'s find shortest paths.',
            'In 1936, Alan Turing described an abstract "Turing machine" and proved that no general algorithm can decide, for every program and input, whether it will eventually stop — the halting problem. Some problems are uncomputable.',
            'Algorithms also raise ethical questions: biased training data can lead to unfair decisions in hiring or lending; recommendation algorithms shape what people see. Computer scientists increasingly study fairness, transparency and accountability.',
          ],
          v: 'stack = last-in-first-out structure; queue = first-in-first-out structure; graph = nodes connected by edges; halting problem = the proven impossibility of deciding in general whether programs stop',
          x: ['A browser\'s back button as a stack.', 'GPS navigation using shortest-path algorithms on a graph.'],
          s: ['Turing\'s Machine on Paper', 'In 1936, before electronic computers existed, 24-year-old Alan Turing imagined a machine with an endless tape, reading and writing symbols by simple rules. With this paper machine, he proved that some questions can never be answered by any algorithm — and laid the foundations of computer science.'],
          a: [
            mt('Match the structure to its behaviour', 'stack=last in, first out|queue=first in, first out|dictionary=look up by key|graph=connections between nodes'),
            ch('The halting problem shows that…', '*some problems cannot be solved by any algorithm|all problems are easy|computers never stop'),
            tf('Biased data can lead to unfair algorithmic decisions.', true),
            ch('An "undo" feature typically uses a…', '*stack|queue|graph'),
          ],
          t: ['Which data structure would you use for a printer\'s jobs? Why?', 'Who is responsible when an algorithm makes an unfair decision?'],
          k: ['Present the halting problem in plain language.'],
          m: ['Shortest Path Project', 'Python, a map of your neighbourhood', 'Model places and roads as a graph with distances | Implement breadth-first search or Dijkstra\'s algorithm | Find shortest routes | Write about how real navigation apps differ'],
          q: [
            ch('Nodes connected by edges form a…', '*graph|stack|string'),
            tf('Turing described his machine in 1936.', true),
            ch('A ticket line works like a…', '*queue|stack|tree'),
          ],
          ms: ['Chooses suitable data structures', 'Explains computability limits', 'Discusses algorithmic ethics'],
        }),
      ]),
    ]),
  ],
});
