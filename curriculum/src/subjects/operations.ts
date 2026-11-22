import { subject, S, U, L, ch, tf, mt, ct } from '../dsl.ts';

export default subject({
  id: 'operations',
  description: 'The four operations built on understanding, not just procedures: combining and separating real objects, then strategies, place-value methods, multiplication as equal groups and arrays, division as sharing and grouping, and finally order of operations and operations with fractions, decimals and integers.',
  stages: [
    S('s4', 'Putting together and taking away with real objects to 10.', [
      'Combine two small groups and find how many altogether', 'Take some away and find how many are left', 'Tell simple number stories',
    ], [
      U('put-together', 'Putting Together', 'Adding means joining groups and counting how many altogether.', 'Joining groups: one more, two more; Altogether: counting all; Number stories: 2 birds and 1 more bird', [
        L('one-more', 'One More, Two More', {
          o: ['Find one more and two more than a number to 10', 'Join two small groups and count how many altogether'],
          p: ['Counts objects to 10'],
          e: [
            'When we put two groups together, we are adding. Three apples and two more apples make five apples altogether.',
            'One more means the next number when we count. One more than 4 is 5. Two more than 4 is 6.',
            'To find how many altogether, push the groups together and count them all. Later, you can start counting from the bigger group: "Fiiive… six, seven."',
          ],
          v: 'add = put together; altogether = all of them counted together; one more = the next number',
          x: ['2 ducks swim over to join 3 ducks: 5 ducks altogether.', 'You have 4 crayons and get 1 more: now you have 5.'],
          s: ['Kiko\'s Picnic Plate', 'Kiko had three grapes on a plate. Tara gave Kiko two more. "How many now?" asked Tara. Kiko pushed them together and counted: "One, two, three, four, five! Three and two more make five grapes altogether."'],
          a: [
            ct('🍎🍎🍎 and 🍎 more. How many altogether?', 4),
            ct('🐤🐤 and 🐤🐤🐤 come to join. How many altogether?', 5),
            ch('One more than 6 is…', '5|*7|8'),
            tf('2 and 2 more make 4.', true),
          ],
          t: ['Does it matter which group you count first? Try it!', 'If you add zero more, what happens?'],
          k: ['Tell a grown-up a number story with your toys: "I had…, then … more came. Now I have …".'],
          m: ['Bus Stop Adding Game', 'a shoebox bus, small toy figures', 'Put some passengers on the bus | At each "stop" add one or two more | Count how many are on the bus now | Tell the story of the journey'],
          q: [
            ct('⭐⭐⭐ and ⭐⭐ more. How many?', 5),
            ch('Two more than 3 is…', '4|*5|6'),
            ct('🐟 and 🐟🐟🐟 more. How many fish?', 4),
          ],
          ms: ['Finds one and two more than numbers to 10', 'Combines groups to 10 accurately', 'Tells simple addition stories'],
        }),
      ]),
      U('take-away', 'Taking Away', 'Subtracting means taking some away and counting what is left.', 'Taking away: how many left; One less: the number before; Number stories: 5 cakes, 2 eaten', [
        L('how-many-left', 'How Many Are Left?', {
          o: ['Take away objects and count how many are left', 'Find one less than a number to 10'],
          p: ['Counts objects to 10'],
          e: [
            'When some things go away, we are subtracting. If you have 5 biscuits and eat 2, there are 3 biscuits left.',
            'One less means the number just before. One less than 5 is 4.',
            'To find how many are left: start with the group, move away the ones that go, and count the ones still there.',
          ],
          v: 'take away = remove some; left = still there after some are taken; one less = the number before',
          x: ['5 balloons, 1 pops: 4 balloons left.', '4 birds on a wire, 2 fly away: 2 left.'],
          s: ['Five Little Monkeys', 'Five little monkeys sat in a tree. One jumped down to find a banana — four were left. Another jumped down — three were left. Mayur the peacock counted, "Five take away two is three!" Soon the monkeys came back with bananas for everyone.'],
          a: [
            ct('🧁🧁🧁🧁🧁 — 2 are eaten. How many left?', 3),
            ct('🎈🎈🎈🎈 — 1 pops. How many left?', 3),
            ch('One less than 8 is…', '*7|9|6'),
            tf('If you take away all of them, zero are left.', true),
          ],
          t: ['Can you take away more than you have? What happens?', 'How is taking away like counting backwards?'],
          k: ['Use five toys to tell a grown-up a "taking away" story.'],
          m: ['Five Little Ducks Puppet Show', 'five toy ducks or paper ducks, a blanket for a "hill"', 'Sing "Five Little Ducks" | Each verse, hide one duck behind the hill | Count how many are left each time | At the end, bring them all back and count again'],
          q: [
            ct('🐸🐸🐸🐸 — 1 hops away. How many left?', 3),
            ct('🍪🍪🍪 — all 3 eaten. How many left?', 0),
            ch('One less than 4 is…', '*3|5|2'),
          ],
          ms: ['Solves take-away problems with objects to 10', 'Finds one less than numbers to 10', 'Explains "left" using objects'],
        }),
      ]),
    ]),
    S('s5', 'Addition and subtraction facts to 20, using the + − = symbols and simple strategies.', [
      'Read and write addition and subtraction number sentences', 'Add by counting on from the larger number', 'Understand subtraction as finding the difference',
    ], [
      U('number-sentences', 'Number Sentences', 'Writing maths stories with +, − and =.', 'Symbols: +, −, =; Counting on: start from the bigger number; Fact families: 3+4=7, 7−4=3', [
        L('counting-on', 'Counting On', {
          o: ['Add by counting on from the larger number', 'Write and read number sentences using + and ='],
          p: ['Adds small groups by counting all'],
          e: [
            'Instead of counting everything from 1, start with the bigger number in your head and count on. For 8 + 3: "eight… nine, ten, eleven." The answer is 11.',
            'We write adding as a number sentence: 8 + 3 = 11. The + sign means "add", and = means "is the same as".',
            'You can swap the numbers in an addition: 3 + 8 is the same as 8 + 3. So always start with the bigger one — it\'s quicker!',
          ],
          v: 'plus (+) = add; equals (=) = is the same as; count on = start from a number and count forward; number sentence = a maths sentence like 4 + 2 = 6',
          x: ['9 + 2: "nine… ten, eleven" → 11.', '2 + 9 = 9 + 2 = 11.'],
          s: ['The Lazy Counter', 'Rangi had 12 marbles and found 3 more. Kiko started counting all of them from one. Rangi smiled: "Twelve is already in my head… thirteen, fourteen, fifteen!" Rangi finished first. "Counting on saves my energy," Rangi winked.'],
          a: [
            ch('7 + 3 = ?', '9|*10|11'),
            ch('Count on: 12 + 2 = ?', '13|*14|15'),
            tf('5 + 9 gives the same answer as 9 + 5.', true),
            mt('Match', '6 + 2=8|10 + 5=15|9 + 4=13'),
          ],
          t: ['Why is it quicker to start from the bigger number?', 'What does the = sign really mean? Is 7 = 3 + 4 a true sentence?'],
          k: ['Show someone how to count on to solve 15 + 3, saying each step aloud.'],
          m: ['Dice Count-On Race', 'two dice (or one die and number cards to 12), paper', 'Roll the number card and the die | Write the number sentence | Count on from the bigger number | Record ten sums and circle the biggest'],
          q: [
            ch('8 + 4 = ?', '11|*12|13'),
            ch('Which is true?', '*3 + 6 = 9|3 + 6 = 8|3 + 6 = 10'),
            ct('11 + 3 = ? (count on)', 14),
          ],
          ms: ['Counts on from the larger addend', 'Reads and writes addition sentences with correct symbols', 'Uses commutativity to simplify'],
        }),
      ]),
      U('fact-families', 'Fact Families and Subtraction', 'Addition and subtraction are opposites.', 'Fact families: three numbers, four facts; Difference: comparing two numbers; Missing numbers: 5 + ? = 9', [
        L('fact-family', 'The Fact Family House', {
          o: ['Write the four facts in a fact family', 'Use addition facts to solve subtraction'],
          p: ['Adds within 20'],
          e: [
            'Three numbers like 3, 5 and 8 make a fact family. They live in one house and make four facts: 3 + 5 = 8, 5 + 3 = 8, 8 − 5 = 3, 8 − 3 = 5.',
            'Subtraction undoes addition. If you know 6 + 4 = 10, then you know 10 − 4 = 6 without counting.',
            'Subtraction can also mean the difference: how many more one number is than another. The difference between 9 and 6 is 3.',
          ],
          v: 'fact family = numbers that make related addition and subtraction facts; minus (−) = take away; difference = how much bigger one number is than another; inverse = the opposite operation',
          x: ['Family 4, 7, 11: 4 + 7 = 11, 7 + 4 = 11, 11 − 7 = 4, 11 − 4 = 7.', 'Difference between 12 and 9 is 3.'],
          s: ['The Number House', 'In Number Mountains stood a little house where 2, 6 and 8 lived together. Every morning they made four different sentences: "2 plus 6 is 8! 6 plus 2 is 8! 8 take away 6 is 2! 8 take away 2 is 6!" Their neighbour, a lonely number 5, wanted to join — but 5 didn\'t fit their family.'],
          a: [
            ch('If 7 + 2 = 9, then 9 − 2 = ?', '*7|11|5'),
            ch('Which belongs in the family 4, 6, 10?', '*10 − 4 = 6|10 − 3 = 7|4 + 4 = 8'),
            ct('Difference between 15 and 11?', 4),
            ch('5 + ? = 12', '6|*7|8'),
          ],
          t: ['Why does a fact family have four facts and not three?', 'What happens in a fact family with two numbers the same, like 5, 5, 10?'],
          k: ['Explain to someone how knowing 8 + 5 = 13 helps you solve 13 − 5.'],
          m: ['Fact Family Houses', 'paper, scissors, pencils', 'Draw a house with a triangle roof | Write three family numbers in the roof | Write the four facts in the windows | Make houses for five different families', "Use child-safe scissors with adult supervision and keep small paper pieces away from younger children."],
          q: [
            ch('If 9 + 6 = 15, then 15 − 9 = ?', '5|*6|24'),
            ct('Difference between 20 and 14?', 6),
            ch('? − 3 = 8', '5|*11|10'),
          ],
          ms: ['Writes complete fact families', 'Uses inverse relationships to solve subtraction', 'Solves missing-number problems within 20'],
        }),
      ]),
    ]),
    S('s6', 'Two-digit addition and subtraction, and early multiplication as equal groups.', [
      'Add and subtract two-digit numbers using tens and ones', 'Understand multiplication as equal groups and repeated addition', 'Solve one-step word problems',
    ], [
      U('two-digit', 'Adding and Subtracting with Tens', 'Using place value to add and subtract bigger numbers.', 'Adding tens: 30 + 40; Partitioning: 34 + 25 = 30 + 20 + 4 + 5; Bridging ten: 28 + 5', [
        L('partition-add', 'Split and Add', {
          o: ['Add two-digit numbers by partitioning into tens and ones', 'Add by bridging through ten'],
          p: ['Understands tens and ones'],
          e: [
            'Big numbers are easier if we split them. 34 + 25: split into tens and ones. Tens: 30 + 20 = 50. Ones: 4 + 5 = 9. Together: 50 + 9 = 59.',
            'Adding tens is like adding ones, but with tens: 3 tens + 4 tens = 7 tens = 70.',
            'Bridging ten: 28 + 5 — first add 2 to make 30, then add the remaining 3 → 33. Your bonds to 10 make this quick.',
          ],
          v: 'partition = split a number into parts; tens = groups of ten; bridge = go through a ten; strategy = a way of solving',
          x: ['46 + 32 → 40 + 30 = 70, 6 + 2 = 8 → 78.', '57 + 6 → 57 + 3 = 60, 60 + 3 = 63.'],
          s: ['The Rupee Shop', 'Zuri bought a book for ₹34 and a pen for ₹25. "Tens first," she thought: three ten-rupee notes and two more make five tens — ₹50. "Then ones": four coins and five coins make ₹9. "That\'s ₹59," Zuri said before the shopkeeper had finished.'],
          a: [
            ch('40 + 30 = ?', '7|*70|43'),
            ch('23 + 14 = ?', '27|*37|47'),
            ch('Bridge ten: 48 + 5 = ?', '52|*53|54'),
            mt('Match', '20 + 50=70|35 + 12=47|61 + 25=86'),
          ],
          t: ['Why do we add the tens and ones separately?', 'Is there another way to solve 28 + 5? Which do you prefer?'],
          k: ['Explain how you would add 45 + 33 to someone, using the words "tens" and "ones".'],
          m: ['Shop and Add', 'pretend price tags, play money (₹10 notes and ₹1 coins)', 'Label toys with prices between ₹11 and ₹49 | Pick two items | Pay using tens and ones | Write the addition and check your total'],
          q: [
            tf('52 + 36 = 88.', true, 'Add tens and ones: 52 + 36 = 88.'),
            ch('39 + 4 = ?', '42|*43|44'),
            ch('60 + 20 = ?', '62|*80|8'),
          ],
          ms: ['Adds two-digit numbers without regrouping mentally', 'Bridges through ten fluently', 'Explains partitioning strategy'],
        }),
      ]),
      U('equal-groups', 'Equal Groups', 'Multiplication starts with equal groups.', 'Equal groups: same number in each; Repeated addition: 3 + 3 + 3; Arrays: rows and columns; Counting in 2s, 5s, 10s', [
        L('groups-of', 'Groups Of', {
          o: ['Recognise and make equal groups', 'Write multiplication as repeated addition'],
          p: ['Skip counts in 2s, 5s and 10s'],
          e: [
            'Equal groups have the same number of things in each group. 3 plates with 4 cookies on each plate are equal groups.',
            'To find the total, we can add again and again: 4 + 4 + 4 = 12. That is called repeated addition. We write it as 3 × 4 = 12, said "3 groups of 4".',
            'An array arranges things in rows and columns: 3 rows of 4. Arrays show multiplication clearly — and you can turn them around to see that 3 × 4 = 4 × 3.',
          ],
          v: 'equal groups = groups with the same number in each; multiply (×) = find the total of equal groups; array = objects in rows and columns; repeated addition = adding the same number again and again',
          x: ['5 hands, 5 fingers each: 5 × 5 = 25.', 'Egg box with 2 rows of 6: 2 × 6 = 12.'],
          s: ['The Fair Party Plates', 'Momo was setting four plates for friends. "Two ladoos on each plate," said Momo. Plate one: 2. Plate two: 4. Plate three: 6. Plate four: 8. "Four groups of two make eight," Momo said. "Everyone gets the same — that\'s fair!"'],
          a: [
            ct('3 nests with 🥚🥚 in each. How many eggs?', 6),
            ch('5 + 5 + 5 is the same as…', '5 × 5|*3 × 5|3 + 5'),
            ct('Array: 2 rows of ⭐⭐⭐⭐. How many stars?', 8),
            tf('3 groups of 2 is the same total as 2 groups of 3.', true),
          ],
          t: ['Are 2 + 3 + 4 equal groups? Why not?', 'Why might multiplying be quicker than adding?'],
          k: ['Make equal groups with toys and explain to someone how you found the total.'],
          m: ['Array Hunt', 'phone or paper for drawing', 'Find arrays at home: egg boxes, window panes, tiles, chocolate bars | Draw or photograph five | Write the multiplication for each | Count to check'],
          q: [
            ct('4 bags with 🍊🍊 in each. How many oranges?', 8),
            ch('2 × 5 means…', '*2 groups of 5|2 + 5|5 − 2'),
            ct('3 rows of 3 chairs. How many chairs?', 9),
          ],
          ms: ['Identifies equal groups', 'Represents multiplication as repeated addition and arrays', 'Solves simple multiplication problems with objects'],
        }),
      ]),
    ]),
    S('s7', 'Multiplication tables, division as sharing and grouping, and column methods.', [
      'Recall multiplication facts to 10 × 10', 'Understand division as sharing and grouping', 'Use column addition and subtraction with regrouping',
    ], [
      U('times-tables', 'Times Tables and Division', 'Multiplication facts and their inverse, division.', 'Times tables: 2, 3, 4, 5, 6, 7, 8, 9, 10; Division: sharing and grouping; Remainders', [
        L('share-and-group', 'Sharing and Grouping', {
          o: ['Solve division problems by sharing and by grouping', 'Use multiplication facts to divide, including remainders'],
          p: ['Knows multiplication as equal groups'],
          e: [
            'Division has two meanings. Sharing: 12 sweets shared equally among 3 children — each gets 4. Grouping: 12 sweets put into bags of 3 — you can make 4 bags.',
            'Division is the inverse of multiplication. If 3 × 4 = 12, then 12 ÷ 3 = 4 and 12 ÷ 4 = 3. Knowing tables makes division quick.',
            'Sometimes things don\'t share exactly. 13 ÷ 4 = 3 remainder 1: each person gets 3, and 1 is left over. In real life we decide what to do with the remainder.',
          ],
          v: 'divide (÷) = share equally or make equal groups; quotient = the answer to a division; remainder = what is left over; inverse = the opposite operation',
          x: ['20 ÷ 5 = 4 because 5 × 4 = 20.', '17 children, cars hold 4: 17 ÷ 4 = 4 r 1, so 5 cars are needed.'],
          s: ['The Boat Problem', '23 animals needed to cross the river, and each boat held 5. Kiko said, "23 ÷ 5 = 4 remainder 3, so 4 boats!" Tara shook her head. "Then 3 friends are left on the shore. We need 5 boats." The remainder mattered!'],
          a: [
            ch('24 ÷ 6 = ?', '3|*4|5'),
            ch('If 7 × 8 = 56, then 56 ÷ 8 = ?', '6|*7|8'),
            ch('14 ÷ 4 = ?', '3|*3 remainder 2|4'),
            mt('Match', '6 × 7=42|9 × 4=36|8 × 8=64'),
          ],
          t: ['When should you round a remainder up, and when should you ignore it?', 'Why can\'t we divide by zero? Try sharing 6 sweets among 0 people.'],
          k: ['Make up a division word problem with a remainder and explain what the remainder means in your story.'],
          m: ['Times Table Patterns Poster', 'a 10 × 10 multiplication grid, coloured pencils', 'Fill in a 10 × 10 multiplication grid | Colour patterns (e.g. all multiples of 5) | Write three things you notice | Use the grid to solve five division questions'],
          q: [
            ch('35 ÷ 5 = ?', '6|*7|8'),
            ch('9 × 6 = ?', '45|*54|56'),
            tf('26 students in teams of 4 make 6 full teams with 2 students left over.', true, '4 × 6 = 24, so 2 students remain after making 6 full teams.'),
          ],
          ms: ['Recalls multiplication facts to 10 × 10', 'Solves sharing and grouping divisions', 'Interprets remainders in context'],
        }),
      ]),
      U('column-methods', 'Column Methods', 'Efficient written methods for larger numbers.', 'Column addition with carrying; Column subtraction with exchanging; Checking with inverse operations', [
        L('column-subtraction', 'Column Subtraction with Exchanging', {
          o: ['Subtract three-digit numbers using the column method with exchanging', 'Check answers using addition'],
          p: ['Understands place value to 1000'],
          e: [
            'In column subtraction, line up hundreds, tens and ones. Subtract the ones first, then tens, then hundreds.',
            'If the top digit is smaller, exchange: take one ten from the tens column and turn it into ten ones. For 52 − 27: 2 − 7 can\'t be done, so exchange one ten: 12 − 7 = 5, and 4 tens − 2 tens = 2 tens. Answer: 25.',
            'Check by adding: 25 + 27 = 52. ✓ Addition and subtraction are inverses, so this always works.',
          ],
          v: 'exchange = swap one ten for ten ones (or one hundred for ten tens); column = a vertical line of digits with the same place value; inverse check = using the opposite operation to check',
          x: ['403 − 158 = 245 (exchange from hundreds through tens).', 'Check: 245 + 158 = 403.'],
          s: ['The Broken Ten', 'At the market, Zuri had ₹52 in five ten-rupee notes and two coins. She needed to pay ₹27. She couldn\'t take 7 coins from 2! So she swapped one ten-rupee note for ten coins. Now she had 4 notes and 12 coins, paid 2 notes and 7 coins, and had ₹25 left.'],
          a: [
            ch('63 − 28 = ?', '45|*35|31'),
            ch('In 52 − 27, the first step is…', 'subtract the tens|*exchange a ten because 2 < 7|add the numbers'),
            tf('You can check 81 − 36 = 45 by adding 45 + 36.', true),
            ch('500 − 123 = ?', '423|*377|387'),
          ],
          t: ['Why do we subtract the ones column first?', 'When might mental subtraction be quicker than the column method?'],
          k: ['Teach someone column subtraction for 72 − 38, explaining the exchange step.'],
          m: ['Base-Ten Bank', 'paper strips (hundreds), sticks (tens), dots or beans (ones)', 'Make paper "base ten" pieces | Model 342 − 167 with the pieces, exchanging physically | Write the column method alongside | Check with addition'],
          q: [
            tf('91 − 46 = 45.', true, 'Exchange one ten: 91 − 46 = 45.'),
            tf('45 + 75 = 120 is a correct check for 120 − 75 = 45.', true, 'Addition reverses subtraction: 45 + 75 = 120.'),
            ch('346 − 129 = ?', '227|*217|223'),
          ],
          ms: ['Uses column subtraction with exchanging accurately', 'Explains exchanging with place value language', 'Checks answers with inverse operations'],
        }),
      ]),
    ]),
    S('s9', 'Long multiplication and division, order of operations, and operations with fractions and decimals.', [
      'Multiply multi-digit numbers', 'Apply order of operations', 'Add, subtract and multiply fractions and decimals',
    ], [
      U('order-of-operations', 'Order of Operations', 'Agreed rules for which calculation comes first.', 'BODMAS/BIDMAS: brackets, orders, division/multiplication, addition/subtraction; Left-to-right rule; Writing expressions', [
        L('bodmas', 'BODMAS', {
          o: ['Evaluate expressions using the order of operations', 'Use brackets to change the order of calculation'],
          p: ['Fluent with the four operations'],
          e: [
            'Without rules, 2 + 3 × 4 could be 20 or 14. Mathematicians agree: multiplication and division happen before addition and subtraction. So 2 + 3 × 4 = 2 + 12 = 14.',
            'BODMAS reminds us: Brackets, Orders (powers and roots), Division and Multiplication (left to right), Addition and Subtraction (left to right).',
            'Brackets let us choose the order: (2 + 3) × 4 = 20. Division and multiplication have equal priority, so work left to right: 12 ÷ 3 × 2 = 4 × 2 = 8.',
          ],
          v: 'expression = a mathematical phrase like 3 + 4 × 2; brackets = ( ) showing what to do first; order of operations = agreed sequence for calculating; evaluate = work out the value',
          x: ['10 − 2 × 3 = 10 − 6 = 4.', '(10 − 2) × 3 = 8 × 3 = 24.'],
          s: ['The Calculator Argument', 'Kiko and Nova typed 6 + 4 × 5 into two calculators. One showed 50, the other 26! Nova explained: the simple calculator worked left to right; the scientific one followed the order of operations. "That\'s why mathematicians agreed on one rule," said Nova.'],
          a: [
            ch('3 + 4 × 2 = ?', '14|*11|9'),
            ch('(3 + 4) × 2 = ?', '*14|11|10'),
            ch('20 ÷ 4 × 2 = ?', '2.5|*10|40'),
            tf('Brackets are calculated first.', true),
          ],
          t: ['Why is it important that everyone uses the same order of operations?', 'Can you write an expression that equals 24 using 2, 3, 4 and brackets?'],
          k: ['Explain to someone why 8 − 2 × 3 is not 18.'],
          m: ['Four Fours Challenge', 'paper, pencil', 'Use exactly four 4s and any operations and brackets | Make expressions for every number from 0 to 10 (e.g. 4 ÷ 4 + 4 ÷ 4 = 2) | Record each one | Find the hardest number and share your solution'],
          q: [
            tf('5 × (2 + 3) = 25.', true, 'Calculate the brackets first: 2 + 3 = 5, then 5 × 5 = 25.'),
            ch('18 − 6 ÷ 3 = ?', '4|*16|12'),
            ch('2² + 3 × 2 = ?', '*10|14|16'),
          ],
          ms: ['Evaluates multi-operation expressions correctly', 'Inserts brackets to achieve given results', 'Explains order of operations reasoning'],
        }),
      ]),
      U('fraction-operations', 'Calculating with Fractions', 'Adding, subtracting and multiplying fractions.', 'Common denominators; Adding and subtracting fractions and mixed numbers; Multiplying fractions: "of"', [
        L('add-fractions', 'Adding Fractions', {
          o: ['Add and subtract fractions with different denominators', 'Multiply a fraction by a fraction'],
          p: ['Finds equivalent fractions'],
          e: [
            'To add fractions, the pieces must be the same size — the same denominator. ¼ + ¼ = 2/4 = ½ because quarters are already the same size.',
            'For different denominators, find equivalent fractions with a common denominator: ½ + ⅓ = 3/6 + 2/6 = 5/6. Add the numerators; the denominator stays the same.',
            'Multiplying fractions means "a fraction of a fraction": ½ × ⅓ = ⅙ (half of a third). Multiply numerators and multiply denominators.',
          ],
          v: 'common denominator = a shared denominator for two fractions; equivalent fractions = fractions with equal value; numerator = top number; simplify = write a fraction in lowest terms',
          x: ['⅔ − ¼ = 8/12 − 3/12 = 5/12.', '¾ × ⅖ = 6/20 = 3/10.'],
          s: ['The Pizza Mix-Up', 'Rangi ate ½ of a pizza and Kiko ate ⅓ of an identical pizza. "Together we ate 2/5!" said Kiko, adding tops and bottoms. Nova drew both pizzas cut into sixths: 3/6 and 2/6 — 5/6 altogether. "You can\'t add different-sized slices without making them the same size first," Nova said.'],
          a: [
            ch('¼ + ½ = ?', '2/6|*¾|⅔'),
            tf('½ + ⅓ = 2/5', false, 'Different denominators: convert to sixths. 3/6 + 2/6 = 5/6.'),
            ch('½ × ½ = ?', '1|*¼|½'),
            ch('⅚ − ⅓ = ?', '*½|4/3|⅔'),
          ],
          t: ['Why does multiplying by a fraction less than 1 make a number smaller?', 'Why don\'t we add the denominators?'],
          k: ['Use a drawing to explain to someone why ½ + ⅓ = 5/6.'],
          m: ['Recipe Scaling', 'a simple recipe with fractional amounts, paper', 'Choose a recipe with fractions (e.g. ¾ cup flour) | Calculate amounts for half the recipe | Calculate amounts for 1½ times the recipe | Cook one version with a grown-up and check'],
          q: [
            ch('⅖ + ⅕ = ?', '3/10|*⅗|⅖'),
            ch('⅔ × ¾ = ?', '*½|6/7|5/12'),
            ct('Common denominator of ¼ and ⅙?', 12, '12 is the least common multiple of 4 and 6.'),
          ],
          ms: ['Adds and subtracts fractions with unlike denominators', 'Multiplies fractions and simplifies', 'Explains procedures with models'],
        }),
      ]),
    ]),
    S('s12', 'Operations with integers, algebraic manipulation, and estimation and error.', [
      'Calculate with negative numbers', 'Use the distributive law', 'Estimate and bound errors',
    ], [
      U('integers', 'Operations with Negative Numbers', 'Rules for adding, subtracting, multiplying and dividing integers.', 'Number line model; Subtracting a negative; Sign rules for × and ÷', [
        L('negatives', 'Negative Numbers', {
          o: ['Add, subtract, multiply and divide with negative numbers', 'Justify the sign rules'],
          p: ['Places negative numbers on a number line'],
          e: [
            'On a number line, adding a positive moves right; adding a negative moves left. 5 + (−8) = −3.',
            'Subtracting a negative is the same as adding: 3 − (−4) = 7. Think of removing a debt — taking away a debt of 4 makes you 4 better off.',
            'For multiplication and division: same signs give a positive, different signs give a negative. (−3) × (−4) = 12; (−12) ÷ 3 = −4. A pattern explains why: 3 × −4 = −12, 2 × −4 = −8, 1 × −4 = −4, 0 × −4 = 0, so −1 × −4 must be 4.',
          ],
          c: [['evidence', 'Indian mathematician Brahmagupta (7th century CE) gave explicit rules for arithmetic with negative numbers ("debts") and zero in his Brāhmasphuṭasiddhānta (628 CE).']],
          v: 'integer = a whole number, positive, negative or zero; additive inverse = a number that adds to zero (5 and −5); absolute value = distance from zero; debt = a negative amount owed',
          x: ['−7 + 10 = 3.', '(−6) × 5 = −30.'],
          s: ['Brahmagupta\'s Fortunes and Debts', 'Over 1,300 years ago, the mathematician Brahmagupta described numbers as "fortunes" and "debts". A debt minus zero is a debt; a fortune minus a debt becomes a bigger fortune. Students who imagine owing and being owed money often find his rules surprisingly natural.'],
          a: [
            ct('−4 + 9 = ?', 5, 'Starting at −4 and moving 9 steps right lands on 5.'),
            ch('6 − (−2) = ?', '4|*8|−8'),
            ch('(−5) × (−3) = ?', '−15|*15|−8'),
            ch('(−20) ÷ 4 = ?', '5|*−5|−80'),
          ],
          t: ['Explain, using a real-world model, why subtracting a negative is the same as adding.', 'Use a pattern to convince someone that negative × negative is positive.'],
          k: ['Present the pattern argument for (−1) × (−1) = 1 to someone.'],
          m: ['Temperature Investigation', 'weather data from several cities (from an atlas or offline almanac), paper', 'Record winter minimum temperatures for 6 cities, including some below zero | Calculate the differences between pairs | Find the mean | Write up which calculations involved negative numbers and how you handled them'],
          q: [
            ch('−3 − 5 = ?', '2|−2|*−8'),
            ch('(−2)³ = ?', '8|*−8|−6'),
            tf('(−7) × 0 = 0', true),
          ],
          ms: ['Calculates fluently with integers', 'Justifies sign rules using models or patterns', 'Applies integers in contexts like temperature and finance'],
        }),
      ]),
      U('distributive', 'The Distributive Law and Mental Strategies', 'Structure behind efficient calculation and algebra.', 'Distributive law: a(b + c) = ab + ac; Mental multiplication: 99 × 7; Expanding and factorising', [
        L('distribute', 'Distribute and Factorise', {
          o: ['Use the distributive law for mental calculation', 'Expand and factorise simple algebraic expressions'],
          p: ['Understands order of operations and integers'],
          e: [
            'The distributive law says a(b + c) = ab + ac. Multiplying a sum is the same as multiplying each part and adding.',
            'It powers mental maths: 7 × 99 = 7 × (100 − 1) = 700 − 7 = 693. And 23 × 15 = 23 × 10 + 23 × 5 = 230 + 115 = 345.',
            'In algebra, expanding uses the law forwards: 3(x + 4) = 3x + 12. Factorising uses it backwards: 6x + 9 = 3(2x + 3).',
          ],
          v: 'distributive law = a(b + c) = ab + ac; expand = remove brackets by multiplying; factorise = write as a product with brackets; common factor = a factor shared by terms',
          x: ['8 × 102 = 8 × 100 + 8 × 2 = 800 + 16 = 816.', '5x − 15 = 5(x − 3).'],
          s: ['The Speedy Shopkeeper', 'A shopkeeper sold 6 items at ₹199 each. Before the customer could get out a calculator, she said "₹1,194." How? 6 × 200 = 1,200, minus 6 × 1 = 6. "The distributive law is my best shop assistant," she laughed.'],
          a: [
            ch('9 × 101 = ?', '*909|919|1,009'),
            ch('Expand 4(x + 5)', '4x + 5|*4x + 20|x + 20'),
            ch('Factorise 6x + 12', '6(x + 12)|*6(x + 2)|3(x + 4)'),
            tf('7 × 98 = 7 × 100 − 7 × 2', true),
          ],
          t: ['Why does the distributive law work? Use an area model to show it.', 'Is there a distributive law for addition over multiplication, a + (b × c) = (a + b) × (a + c)? Test it.'],
          k: ['Show someone three different mental strategies for 25 × 16 and explain which is fastest.'],
          m: ['Area Model Investigation', 'squared paper, colours', 'Draw a rectangle for 23 × 14 split into 20 + 3 and 10 + 4 | Find the four partial areas | Repeat for (x + 3)(x + 2) | Write a short explanation linking arithmetic and algebra'],
          q: [
            ch('Expand 3(2x − 1)', '*6x − 3|6x − 1|5x − 3'),
            tf('15 × 12 = 180.', true, 'Distribute 15: 15 × 10 + 15 × 2 = 150 + 30 = 180.'),
            ch('Factorise 10a − 25', '*5(2a − 5)|10(a − 25)|5(2a − 25)'),
          ],
          ms: ['Applies the distributive law for mental calculation', 'Expands and factorises linear expressions', 'Explains the law with area models'],
        }),
      ]),
    ]),
  ],
});
