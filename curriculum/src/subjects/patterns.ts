import { subject, S, U, L, ch, tf, od, mt } from '../dsl.ts';

export default subject({
  id: 'patterns',
  description: 'Algebraic thinking from repeating patterns and "what comes next" to growing patterns, rules, unknowns, equations, sequences, graphs of functions and quadratic thinking. Patterns are the bridge from arithmetic to algebra.',
  stages: [
    S('s4', 'Copying, continuing and making repeating patterns with colours, shapes, sounds and movements.', [
      'Continue an AB and ABB pattern', 'Spot a mistake in a pattern', 'Make their own pattern',
    ], [
      U('repeating', 'Repeating Patterns', 'Patterns repeat the same unit again and again.', 'AB patterns: red-blue-red-blue; ABB and ABC patterns; Sound and movement patterns: clap-stamp', [
        L('what-comes-next', 'What Comes Next?', {
          o: ['Continue a repeating pattern', 'Describe the repeating part of a pattern'],
          p: ['Knows colours and simple shapes'],
          e: [
            'A pattern is something that repeats in the same order again and again. Red, blue, red, blue, red, blue… The part that repeats — red, blue — is called the core.',
            'To find what comes next, say the pattern out loud and listen for the repeating part.',
            'Patterns can be made of colours, shapes, sounds (clap, stamp) or even movements (jump, turn).',
          ],
          v: 'pattern = something that repeats in the same order; repeat = do again; next = the one that comes after',
          x: ['🍎🍌🍎🍌🍎🍌 — apple, banana repeats.', 'Clap, clap, stamp, clap, clap, stamp.'],
          s: ['Mayur\'s Feather Pattern', 'Mayur the peacock had beautiful tail feathers: blue, green, blue, green, blue, green. One day a gold feather grew in the middle. "That breaks my pattern!" Mayur squawked. Then more gold feathers grew: blue, green, gold, blue, green, gold. "A new pattern!" Mayur danced.'],
          a: [
            ch('What comes next? 🔴🔵🔴🔵🔴 ?', '🔴|*🔵|🟢'),
            ch('What comes next? 🐶🐱🐱🐶🐱🐱🐶 ?', '🐶|*🐱|🐭'),
            ch('Which pattern has a mistake?', '⭐🌙⭐🌙|*⭐🌙🌙⭐|🌙⭐🌙⭐'),
            tf('Clap, stamp, clap, stamp is a pattern.', true),
          ],
          t: ['Can you find a pattern on your clothes or in your house?', 'What would happen if a pattern never repeated?'],
          k: ['Make a clapping pattern and teach it to a grown-up, saying the repeating part.'],
          m: ['Pattern Necklace', 'string or wool, pasta tubes or beads in two or three colours', 'Choose a pattern like red-red-blue | Thread beads following the pattern | Check it by saying it aloud | Wear your necklace and ask someone to name the pattern'],
          q: [
            ch('Next: 🟡🟢🟡🟢 ?', '*🟡|🟢|🔴'),
            ch('Next: ▲●●▲●● ?', '*▲|●'),
            tf('The repeating part of a pattern is called the core.', true),
          ],
          ms: ['Continues AB, ABB and ABC patterns', 'Identifies and corrects errors in patterns', 'Creates and describes own patterns'],
        }),
      ]),
      U('nature-patterns', 'Patterns All Around', 'Patterns in nature, homes and festivals.', 'Nature: stripes, spots, petals; Clothes and fabrics: borders and prints; Art: rangoli, mehndi, block prints', [
        L('pattern-hunt', 'Pattern Hunt', {
          o: ['Find patterns in nature and everyday objects', 'Describe a pattern using words like repeat, stripe and spot'],
          p: ['Can continue simple patterns'],
          e: [
            'Patterns are everywhere in nature: a zebra\'s stripes, a tiger\'s stripes, a ladybird\'s spots, and the way petals go around a flower.',
            'People make patterns too: on saree borders, in block prints, in rangoli and mehndi designs, and on floor tiles.',
            'When you see a pattern, ask: What repeats? How many times? Can I continue it?',
          ],
          v: 'stripe = a long thin band of colour; spot = a small round mark; border = a pattern along an edge; design = a planned pattern or picture',
          x: ['🦓 Zebra: black, white, black, white stripes.', 'A saree border might repeat flower, leaf, flower, leaf.'],
          s: ['Zuri\'s Stripes', 'Zuri the zebra wondered why she had stripes. Tara the tortoise looked at her own shell: hexagon, hexagon, hexagon. "Patterns help animals hide and help friends recognise each other," said Tara. Zuri decided she loved her black-and-white pattern.'],
          a: [
            ch('Which animal has stripes?', '*🦓 zebra|🐘 elephant|🐸 frog'),
            ch('Which animal has spots?', '*🐞 ladybird|🐍 snake|🐟 fish'),
            tf('Tiles on a floor often make a pattern.', true),
            mt('Match the animal to its pattern', '🐯 tiger=stripes|🐆 leopard=spots|🐢 tortoise=shell shapes'),
          ],
          t: ['Why do you think some animals have stripes or spots?', 'Is every flower\'s petal pattern the same?'],
          k: ['Show a grown-up a pattern you found at home and explain what repeats.'],
          m: ['Leaf and Vegetable Printing', 'paint, paper, leaves, a cut potato or okra (bhindi)', 'Dip a leaf or cut vegetable in paint | Print a repeating pattern along a strip of paper | Use two colours to make an AB pattern | Use your strip as a border for a card'],
          q: [
            ch('A pattern along the edge of a saree is a…', '*border|spot|circle'),
            tf('Patterns only exist in art, never in nature.', false),
            ch('Zebra stripes repeat…', '*black, white|red, blue|spot, spot'),
          ],
          ms: ['Identifies patterns in natural and made environments', 'Describes patterns with appropriate vocabulary', 'Creates repeating prints'],
        }),
      ]),
    ]),
    S('s5', 'Number patterns, counting in steps, and growing patterns.', [
      'Continue number patterns counting in 2s, 5s, 10s', 'Recognise growing patterns', 'Describe a pattern rule in words',
    ], [
      U('number-patterns', 'Number Patterns', 'Numbers that follow a rule.', 'Counting in 2s, 5s, 10s; Odd and even patterns; Counting backwards', [
        L('skip-patterns', 'Skip-Counting Patterns', {
          o: ['Continue number patterns that go up or down in equal steps', 'Describe the rule of a number pattern'],
          p: ['Counts to 50'],
          e: [
            'A number pattern follows a rule. 2, 4, 6, 8… the rule is "add 2". 5, 10, 15, 20… the rule is "add 5".',
            'Patterns can go down too: 20, 18, 16, 14… the rule is "take away 2".',
            'To find the rule, look at how much the numbers change from one to the next. If the change is always the same, you\'ve found the rule!',
          ],
          v: 'rule = what you do to get the next number; step = the amount of change each time; sequence = numbers in a pattern order',
          x: ['10, 20, 30, 40 → add 10.', '15, 12, 9, 6 → take away 3.'],
          s: ['Kiko\'s Mountain Steps', 'Kiko climbed Number Mountain, jumping two steps at a time: 2, 4, 6, 8. Then Kiko got tired and jumped back down three steps at a time: 30, 27, 24, 21… "Every jump is the same size," Kiko puffed. "That\'s my pattern rule!"'],
          a: [
            ch('Next: 5, 10, 15, 20, ?', '21|*25|30'),
            ch('Next: 20, 18, 16, ?', '15|*14|12'),
            ch('Rule for 3, 6, 9, 12?', 'add 2|*add 3|add 6'),
            od('Put in order to make a pattern', '10|20|30|40'),
          ],
          t: ['Can a pattern go up by 2 and then by 3? Is it still a pattern?', 'What patterns do you see in the even numbers?'],
          k: ['Make up a number pattern and ask someone to find your rule.'],
          m: ['Hundred Square Patterns', 'a 1–100 grid (drawn or printed), coloured pencils', 'Colour every second number in yellow | Colour every fifth number in blue | Colour every tenth number in red | Describe the shapes and stripes the patterns make'],
          q: [
            ch('Next: 2, 4, 6, 8, ?', '9|*10|12'),
            ch('Rule for 50, 40, 30?', '*take away 10|add 10|take away 5'),
            ch('Next: 1, 3, 5, 7, ?', '8|*9|10'),
          ],
          ms: ['Continues increasing and decreasing number sequences', 'States the rule of a sequence', 'Creates sequences from a given rule'],
        }),
      ]),
      U('growing', 'Growing Patterns', 'Patterns that get bigger each time.', 'Growing towers: 1, 2, 3 blocks; Shape patterns: triangles from matchsticks; Predicting the next step', [
        L('growing-towers', 'Growing Towers', {
          o: ['Build and continue growing patterns', 'Predict a later step of a growing pattern'],
          p: ['Counts in steps'],
          e: [
            'A growing pattern gets bigger each step. Step 1: 1 block. Step 2: 2 blocks. Step 3: 3 blocks. Each step adds one more.',
            'Some patterns grow faster: 1, 3, 5, 7 blocks — adding 2 each time.',
            'If you know the rule, you can predict far ahead without building: in "add 1 each step", step 10 will have 10 blocks.',
          ],
          v: 'growing pattern = a pattern that increases each step; step = one stage of the pattern; predict = say what will happen before it happens',
          x: ['Staircase of blocks: 1, 2, 3, 4.', 'Matchstick squares in a row: 4, 7, 10, 13 sticks.'],
          s: ['Bolt\'s Staircase', 'Bolt built a staircase: one block, then two, then three. "How many blocks for step 10?" asked Rangi. Bolt started building… then stopped. "Each step adds one, so step 10 has 10 blocks. I don\'t need to build it — I can predict it!"'],
          a: [
            ch('Towers: 1, 2, 3, 4 blocks. Step 5?', '4|*5|6'),
            ch('Pattern: 2, 4, 6 blocks. Step 4?', '7|*8|10'),
            tf('A growing pattern gets bigger each step.', true),
            ch('Rule for 1, 4, 7, 10?', '*add 3|add 4|add 1'),
          ],
          t: ['Could a growing pattern ever shrink? What would that be called?', 'Why is predicting useful when patterns get very big?'],
          k: ['Build a growing pattern and explain your rule and what step 10 will look like.'],
          m: ['Matchstick Patterns', 'matchsticks, toothpicks or ice-cream sticks, paper', 'Make 1 triangle with 3 sticks | Add triangles in a row, sharing sides | Count sticks for 1, 2, 3, 4 triangles | Record in a table and predict 10 triangles'],
          q: [
            ch('1, 3, 5, 7 blocks. Step 5?', '8|*9|11'),
            ch('Each step adds 2. Step 1 has 2. Step 3 has…', '4|*6|8'),
            tf('You can predict a later step by using the rule.', true),
          ],
          ms: ['Continues growing patterns with objects', 'Identifies the growth rule', 'Predicts later terms'],
        }),
      ]),
    ]),
    S('s6', 'Missing numbers, equal and unequal, and pattern rules in tables.', [
      'Solve missing-number problems', 'Understand = as "balanced"', 'Use input–output tables',
    ], [
      U('balance', 'Balancing Equations', 'The equals sign means both sides balance.', 'Equals as balance: 3 + 4 = 5 + 2; Missing numbers: 6 + □ = 10; Unequal: < and >', [
        L('balance-scale', 'The Balance Scale', {
          o: ['Explain that = means both sides have the same value', 'Find missing numbers to balance an equation'],
          p: ['Adds and subtracts within 20'],
          e: [
            'The equals sign = does not mean "the answer is". It means "is the same as". Both sides balance, like a see-saw.',
            'So 3 + 4 = 5 + 2 is true: both sides make 7. And 10 = 6 + 4 is true too, even with the single number on the left.',
            'A missing number is like a mystery box: 6 + □ = 10. Ask "what balances the scale?" 6 + 4 = 10, so □ = 4.',
          ],
          v: 'equals (=) = has the same value as; balance = both sides the same; missing number = an unknown to find',
          x: ['8 = 5 + 3.', '□ − 4 = 6 → □ = 10.'],
          s: ['The Market Balance', 'At the market, the shopkeeper put 7 mangoes on one side of the scale. Zuri had a 5-mango bag. "How many more to balance?" she wondered. She added 1… 2. The scale levelled! "5 + 2 = 7," Zuri said. "The equals sign is a balance!"'],
          a: [
            ch('Is 4 + 5 = 6 + 3 true?', '*true|false'),
            ch('7 + □ = 12. □ = ?', '4|*5|6'),
            ch('□ = 9 − 3', '*6|12|3'),
            tf('The = sign means "the answer comes next".', false),
          ],
          t: ['Is 10 = 10 a true number sentence? Why?', 'How many different ways can you balance 12 = □ + □?'],
          k: ['Explain to someone why 15 = 8 + 7 is a correct sentence.'],
          m: ['🧪 Coat Hanger Balance Equations', 'coat hanger balance, cups, identical small objects (coins, cubes)', 'Put 3 coins and 4 coins on one side | Find different ways to balance the other side | Write each as an equation | Hide some coins under a cup and challenge someone to find the missing number'],
          q: [
            ch('5 + 5 = □ + 7', '*3|5|17'),
            ch('Which is true?', '*12 = 6 + 6|12 = 6 − 6|12 + 1 = 12'),
            ch('20 − □ = 15', '*5|15|35'),
          ],
          ms: ['Interprets = as equivalence', 'Solves missing-number equations', 'Generates balanced equations'],
        }),
      ]),
      U('function-machines', 'Function Machines', 'A machine that follows a rule.', 'Input–output: + 3, × 2; Finding the rule; Working backwards', [
        L('machine-rules', 'The Rule Machine', {
          o: ['Find outputs of a function machine', 'Find the rule from inputs and outputs'],
          p: ['Knows addition and simple multiplication'],
          e: [
            'A function machine takes a number in (the input), follows a rule, and gives a number out (the output). Rule "+ 3": put in 5, get out 8.',
            'If you know inputs and outputs, you can find the rule: in 2 → out 4, in 5 → out 10, in 10 → out 20. The rule is "× 2".',
            'You can work backwards too: if the rule is + 3 and the output is 10, the input was 10 − 3 = 7.',
          ],
          v: 'input = the number going in; output = the number coming out; function = a rule that changes an input to an output; inverse = undoing a rule',
          x: ['Rule × 5: 3 → 15.', 'Rule − 4: output 6, input 10.'],
          s: ['Bolt\'s Number Factory', 'Bolt built a machine. Rangi fed in 4 and out came 7. Fed in 10, out came 13. "What does it do?" asked Kiko. "It adds 3!" said Rangi. Then Bolt switched the machine to run backwards — and it took 3 away instead.'],
          a: [
            ch('Rule + 6. Input 4 → output?', '8|*10|24'),
            ch('In 3 → out 9, in 5 → out 15. Rule?', '+ 6|*× 3|+ 10'),
            ch('Rule + 5, output 12. Input?', '17|*7|60'),
            mt('Rule × 2: match input to output', '4=8|7=14|10=20'),
          ],
          t: ['Could two different rules give the same output for one input? Find an example.', 'How many input–output pairs do you need to be sure of the rule?'],
          k: ['Be a "human function machine" and let someone guess your secret rule.'],
          m: ['Cardboard Function Machine', 'a cardboard box, paper slips, pens', 'Cut an input slot and output slot in a box | Write a secret rule inside | A partner posts number slips in; you post answers out | They guess the rule after three tries'],
          q: [
            ch('Rule × 10. Input 6 → ?', '16|*60|610'),
            ch('In 8 → out 4, in 20 → out 16. Rule?', '÷ 2|*− 4|− 2'),
            tf('Working backwards uses the inverse operation.', true),
          ],
          ms: ['Calculates outputs from rules', 'Deduces rules from input–output pairs', 'Works backwards using inverse operations'],
        }),
      ]),
    ]),
    S('s7', 'Formulas in words and letters, simple equations, and sequences.', [
      'Use letters to stand for unknown numbers', 'Solve one-step equations', 'Find and use the nth term of simple sequences',
    ], [
      U('letters', 'Letters for Numbers', 'Algebra uses letters for unknowns and variables.', 'Unknowns: n + 3 = 10; Expressions: 2n, n + 5; Substitution', [
        L('letter-unknown', 'Mystery Numbers', {
          o: ['Use a letter to represent an unknown number', 'Solve one-step equations and substitute values into expressions'],
          p: ['Solves missing-number problems'],
          e: [
            'In algebra, we use a letter instead of a box for an unknown number: n + 3 = 10. Here n = 7.',
            'An expression like 2n means "2 times n". If n = 5, then 2n = 10. Putting a number in place of the letter is called substitution.',
            'To solve an equation, undo what has been done to the letter: n − 4 = 9 → add 4 to both sides → n = 13. Whatever you do to one side, do to the other — keep the balance!',
          ],
          v: 'variable = a letter standing for a number that can change; equation = a statement that two expressions are equal; expression = numbers and letters combined with operations; substitute = replace a letter with a number',
          x: ['3n when n = 4 is 12.', 'x ÷ 2 = 8 → x = 16.'],
          s: ['The Mystery Bag', 'Nova put some marbles in a bag and added 5 loose marbles beside it. "There are 12 altogether. How many in the bag?" Kiko wrote: b + 5 = 12. "Take 5 from both sides: b = 7." Nova opened the bag — exactly 7 marbles!'],
          a: [
            ch('n + 6 = 15. n = ?', '21|*9|6'),
            ch('If a = 3, what is 4a?', '7|*12|43'),
            ch('y − 5 = 10. y = ?', '5|*15|50'),
            tf('2n means 2 × n.', true),
          ],
          t: ['Why do mathematicians use letters instead of boxes?', 'Can n be different numbers in different problems?'],
          k: ['Explain to someone how to solve 3x = 21, using the idea of a balance.'],
          m: ['Algebra Mystery Bags', 'paper bags or envelopes, counters', 'Hide counters in a bag and put some loose counters next to it | Write an equation for the total | Swap with a partner and solve each other\'s equations | Check by opening the bags'],
          q: [
            ch('5m = 30. m = ?', '25|*6|150'),
            ch('If p = 7, p + 8 = ?', '*15|78|56'),
            ch('k ÷ 3 = 4. k = ?', '1|7|*12'),
          ],
          ms: ['Uses letters as unknowns and variables', 'Solves one-step equations by inverse operations', 'Substitutes values into expressions accurately'],
        }),
      ]),
      U('sequences', 'Sequences and the nth Term', 'Rules that give any term in a sequence.', 'Term-to-term rules; Position-to-term rules; nth term of linear sequences', [
        L('nth-term', 'Jumping to Any Term', {
          o: ['Distinguish term-to-term and position-to-term rules', 'Find the nth term of a linear sequence'],
          p: ['Describes sequence rules; uses letters'],
          e: [
            'The sequence 5, 8, 11, 14… has a term-to-term rule: add 3. But to find the 100th term, adding 3 a hundred times is slow!',
            'A position-to-term rule connects the position n to the term. Here the terms go up in 3s, so start with 3n: 3, 6, 9, 12. Our sequence is 2 more each time: nth term = 3n + 2.',
            'Check: n = 1 → 5 ✓, n = 2 → 8 ✓. Now the 100th term = 3 × 100 + 2 = 302 — instantly.',
          ],
          v: 'term = a number in a sequence; position = where a term is in the sequence (1st, 2nd…); nth term = a formula for the term at position n; linear sequence = one that goes up or down by the same amount',
          x: ['4, 9, 14, 19… → 5n − 1.', '10, 8, 6, 4… → 12 − 2n.'],
          s: ['The Seat Number Puzzle', 'A theatre has 7 seats in row 1, 11 in row 2, 15 in row 3. Zuri needed row 50 for a ticket. Instead of counting, she found the rule: 4n + 3. "Row 50 has 203 seats," she announced. The usher checked the plan and nodded in surprise.'],
          a: [
            ch('nth term of 2, 4, 6, 8…?', 'n + 2|*2n|n²'),
            ch('nth term of 6, 11, 16, 21…?', '*5n + 1|5n + 6|n + 5'),
            ch('Sequence 3n + 4: 10th term?', '17|*34|31'),
            tf('A term-to-term rule is the quickest way to find the 1000th term.', false),
          ],
          t: ['Why does the multiplier in the nth term equal the common difference?', 'Is 100 in the sequence 4n + 1? How do you know?'],
          k: ['Explain to someone how you found the nth term of a sequence of your choice.'],
          m: ['Tile Pattern Formula', 'square tiles or paper squares, squared paper', 'Build a growing tile pattern (e.g. an L-shape) | Record tiles for steps 1–5 | Find the nth term | Predict step 20 and check by building or drawing'],
          q: [
            ch('nth term of 7, 10, 13…?', '*3n + 4|3n + 7|7n + 3'),
            ch('Sequence 2n − 1: 5th term?', '10|*9|11'),
            tf('3, 7, 11, 15 is a linear sequence.', true),
          ],
          ms: ['Finds nth terms of linear sequences', 'Uses nth term to find and test terms', 'Explains the link between difference and coefficient'],
        }),
      ]),
    ]),
    S('s9', 'Linear equations, graphs of linear functions, and inequalities.', [
      'Solve two-step and bracket equations', 'Plot straight-line graphs and understand gradient', 'Solve simple inequalities',
    ], [
      U('equations', 'Solving Equations', 'Balancing to find unknowns.', 'Two-step equations; Unknowns on both sides; Forming equations from problems', [
        L('two-step', 'Two-Step Equations', {
          o: ['Solve two-step equations and equations with unknowns on both sides', 'Form an equation from a word problem'],
          p: ['Solves one-step equations'],
          e: [
            'For 3x + 5 = 20, undo operations in reverse order: subtract 5 from both sides (3x = 15), then divide by 3 (x = 5).',
            'With unknowns on both sides, collect them on one side: 5x + 2 = 2x + 14 → 3x + 2 = 14 → 3x = 12 → x = 4.',
            'To form an equation, choose a letter for the unknown and translate the words: "I think of a number, double it and add 7. I get 31." → 2n + 7 = 31 → n = 12.',
          ],
          v: 'solve = find the value that makes an equation true; inverse operation = an operation that undoes another; coefficient = the number multiplying a variable; form = write an equation to represent a situation',
          x: ['4(x − 2) = 20 → x − 2 = 5 → x = 7.', '7 − 2x = 1 → 2x = 6 → x = 3.'],
          s: ['The Phone Plan', 'Plan A costs ₹200 plus ₹2 per minute; plan B costs ₹50 plus ₹5 per minute. When do they cost the same? Kiko wrote 200 + 2m = 50 + 5m, then 150 = 3m, so m = 50 minutes. "Above 50 minutes, plan A is cheaper," Kiko concluded.'],
          a: [
            ch('2x + 3 = 13. x = ?', '8|*5|6.5'),
            ch('6x − 4 = 3x + 11. x = ?', '*5|7|3'),
            ch('"Triple a number, subtract 4, get 17." The equation is…', '*3n − 4 = 17|4 − 3n = 17|3(n − 4) = 17'),
            tf('Whatever you do to one side of an equation, you must do to the other.', true),
          ],
          t: ['Why do we undo operations in reverse order?', 'Can an equation have no solution? Try x + 1 = x + 2.'],
          k: ['Teach someone to solve 5x − 7 = 18 step by step, explaining each step.'],
          m: ['Think-of-a-Number Tricks', 'paper, pencil', 'Invent a "think of a number" trick (e.g. double, add 10, halve, subtract the original) | Use algebra to explain why it always gives the same answer | Perform it for your family | Write up the algebra proof'],
          q: [
            ch('5x + 1 = 26. x = ?', '*5|4|27/5'),
            ch('3(x + 2) = 21. x = ?', '7|*5|19/3'),
            ch('x/4 + 3 = 7. x = ?', '1|*16|40'),
          ],
          ms: ['Solves multi-step linear equations', 'Forms equations from contexts', 'Checks solutions by substitution'],
        }),
      ]),
      U('linear-graphs', 'Straight-Line Graphs', 'Equations as lines: gradient and intercept.', 'Plotting y = mx + c; Gradient as steepness; Real-life graphs: distance–time, cost', [
        L('y-mx-c', 'y = mx + c', {
          o: ['Plot straight-line graphs from equations', 'Interpret gradient and y-intercept'],
          p: ['Plots coordinates in four quadrants'],
          e: [
            'An equation like y = 2x + 1 gives a y-value for every x. Make a table (x = 0, 1, 2…), plot the points, and they lie on a straight line.',
            'In y = mx + c, m is the gradient — how steep the line is (how much y increases when x increases by 1). c is the y-intercept — where the line crosses the y-axis.',
            'Real situations: a taxi fare of ₹50 plus ₹15 per km is y = 15x + 50. Gradient 15 = cost per km; intercept 50 = starting fare.',
          ],
          v: 'gradient = the steepness of a line, change in y ÷ change in x; y-intercept = where a line crosses the y-axis; linear = forming a straight line; function = a rule linking x and y',
          x: ['y = 3x − 2: gradient 3, intercept −2.', 'A horizontal line y = 4 has gradient 0.'],
          s: ['The Two Taxis', 'Taxi A charges ₹30 plus ₹20 per km; Taxi B charges ₹80 plus ₹10 per km. Zuri plotted both lines. They crossed at 5 km. "For short trips take A; for long trips take B," she explained, pointing to where one line climbed above the other.'],
          a: [
            ch('Gradient of y = 4x + 7?', '*4|7|11'),
            ch('y-intercept of y = 2x − 5?', '2|*−5|5'),
            ch('Which line is steepest?', 'y = x|y = 2x|*y = 5x'),
            tf('Lines with the same gradient are parallel.', true),
          ],
          t: ['What does a negative gradient mean in a real situation?', 'Why does a straight line need only two points to draw it?'],
          k: ['Explain to someone what the gradient and intercept mean on a phone bill graph.'],
          m: ['Real-Life Graph Poster', 'graph paper, ruler, prices from a real service (taxi, electricity, mobile plan)', 'Write equations for two pricing plans | Plot both on one graph | Find where they intersect | Write advice on which plan to choose and when'],
          q: [
            ch('Line through (0, 3) with gradient 2:', '*y = 2x + 3|y = 3x + 2|y = 2x − 3'),
            ch('For y = −x + 4, as x increases, y…', 'increases|*decreases|stays the same'),
            ch('y = 3x + 1 when x = 4:', '12|*13|15'),
          ],
          ms: ['Plots linear graphs accurately', 'Interprets gradient and intercept in context', 'Finds intersections and compares models'],
        }),
      ]),
    ]),
    S('s12', 'Quadratics, simultaneous equations, and functions.', [
      'Solve simultaneous linear equations', 'Factorise and solve quadratic equations', 'Understand functions and their graphs',
    ], [
      U('simultaneous', 'Simultaneous Equations', 'Two equations, two unknowns.', 'Elimination; Substitution; Graphical solutions', [
        L('two-unknowns', 'Two Equations, Two Unknowns', {
          o: ['Solve simultaneous linear equations by elimination and substitution', 'Interpret solutions graphically'],
          p: ['Solves linear equations and plots lines'],
          e: [
            'Simultaneous equations are two equations that must both be true: x + y = 10 and x − y = 4. Adding them eliminates y: 2x = 14, so x = 7 and y = 3.',
            'Substitution: from y = 2x + 1 and 3x + y = 16, replace y: 3x + 2x + 1 = 16 → 5x = 15 → x = 3, y = 7.',
            'Graphically, each equation is a line; the solution is the point where they intersect. Parallel lines never meet — no solution.',
          ],
          v: 'simultaneous equations = equations solved together; eliminate = remove a variable by adding or subtracting equations; substitute = replace a variable with an equivalent expression; intersection = where two graphs meet',
          x: ['2a + b = 11, a + b = 7 → subtract: a = 4, b = 3.', 'Two pens and a notebook cost ₹70; one pen and a notebook cost ₹50 → pen ₹20, notebook ₹30.'],
          s: ['The Ticket Puzzle', 'A school sold 200 tickets: adults ₹100, children ₹50, total ₹14,000. "How many of each?" Nova wrote a + c = 200 and 100a + 50c = 14,000. Multiplying the first by 50 and subtracting: 50a = 4,000, a = 80, c = 120.'],
          a: [
            ch('x + y = 9, x − y = 1. x = ?', '4|*5|9'),
            ch('y = x + 2, 2x + y = 11. x = ?', '*3|4|5'),
            tf('Parallel lines give no solution to simultaneous equations.', true),
            ch('The graphical solution is where the lines…', 'are steepest|*intersect|cross the y-axis'),
          ],
          t: ['When would substitution be easier than elimination?', 'What does it mean if two equations describe the same line?'],
          k: ['Create a real-world simultaneous equations problem and explain its solution to someone.'],
          m: ['Shop Puzzle Book', 'paper, real price lists', 'Write five "two items, two totals" puzzles using real prices | Solve each by elimination or substitution | Check one graphically | Swap puzzles with someone'],
          q: [
            ch('3x + y = 13, x + y = 7. x = ?', '2|*3|4'),
            ch('a + b = 12, a = 2b. b = ?', '*4|6|8'),
            tf('Simultaneous equations can be solved by drawing graphs.', true),
          ],
          ms: ['Solves by elimination and substitution', 'Interprets solutions graphically', 'Models contexts with simultaneous equations'],
        }),
      ]),
      U('quadratics', 'Quadratics', 'Equations with x², and their curved graphs.', 'Expanding double brackets; Factorising quadratics; Solving x² + bx + c = 0; Parabolas', [
        L('factorise-solve', 'Factorising and Solving Quadratics', {
          o: ['Factorise quadratic expressions', 'Solve quadratic equations and link roots to graphs'],
          p: ['Expands single brackets; solves linear equations'],
          e: [
            'Expanding (x + 2)(x + 3) gives x² + 5x + 6. Factorising reverses this: find two numbers that multiply to 6 and add to 5 — they are 2 and 3.',
            'To solve x² + 5x + 6 = 0: factorise to (x + 2)(x + 3) = 0. If a product is zero, one factor must be zero, so x = −2 or x = −3.',
            'The graph of y = x² + 5x + 6 is a U-shaped curve called a parabola. The solutions are where it crosses the x-axis (the roots).',
          ],
          c: [['evidence', 'Babylonian tablets (c. 2000–1600 BCE) contain problems equivalent to quadratics; Brahmagupta (628 CE) gave an explicit general rule for solving them, and al-Khwārizmī (9th century) systematised methods in his book on al-jabr, from which "algebra" gets its name.']],
          v: 'quadratic = an expression or equation with x² as the highest power; factorise = write as a product of brackets; root = a solution where the graph crosses the x-axis; parabola = the U-shaped graph of a quadratic',
          x: ['x² − 9 = (x + 3)(x − 3) → roots ±3.', 'x² − 7x + 12 = (x − 3)(x − 4) → x = 3 or 4.'],
          s: ['The Garden Border', 'A square garden is surrounded by a 1 m path. The garden plus path covers 49 m². If the garden side is x, then (x + 2)² = 49, so x + 2 = 7 (length must be positive), giving x = 5 m. The other root, x = −9, makes no sense for a length — so maths and context work together.'],
          a: [
            ch('Expand (x + 1)(x + 4)', 'x² + 4|*x² + 5x + 4|x² + 4x + 5'),
            ch('Factorise x² + 7x + 10', '*(x + 2)(x + 5)|(x + 1)(x + 10)|(x + 3)(x + 4)'),
            ch('Solve (x − 2)(x + 6) = 0', '*x = 2 or x = −6|x = −2 or x = 6|x = 4'),
            tf('A quadratic equation can have two solutions.', true),
          ],
          t: ['Why must one factor be zero if a product is zero?', 'What does it mean graphically if a quadratic has no real roots?'],
          k: ['Explain to someone how the factorised form shows where a parabola crosses the x-axis.'],
          m: ['🧪 Projectile Parabola', 'a ball, phone camera (optional), graph paper', 'Throw a ball and sketch or film its path | Plot approximate heights at equal time intervals | Fit a parabola shape | Discuss what the roots and the highest point mean'],
          q: [
            ch('Factorise x² − 16', '(x − 4)²|*(x + 4)(x − 4)|(x − 8)(x + 2)'),
            ch('Roots of x² − 5x + 6 = 0', 'x = −2, −3|*x = 2, 3|x = 1, 6'),
            ch('The graph of a quadratic is a…', 'straight line|*parabola|circle'),
          ],
          ms: ['Expands and factorises quadratics', 'Solves quadratic equations by factorising', 'Connects roots to graphs and context'],
        }),
      ]),
    ]),
  ],
});
