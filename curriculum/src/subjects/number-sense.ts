import { subject, S, U, L, ch, tf, od, mt, ct } from '../dsl.ts';

export default subject({
  id: 'number-sense',
  description: 'Number sense grows from counting real things to understanding place value, fractions, negative numbers and the number system itself. Every stage connects symbols to quantities and asks children to explain how they know.',
  stages: [
    S('s4', 'Counting real objects to 10, recognising numerals, and comparing small groups.', [
      'Count up to 10 objects, touching each one once', 'Recognise numerals 0–10', 'Say which group has more or fewer',
    ], [
      U('counting-to-ten', 'Counting to 10', 'One number for each thing — and the last number tells how many.', 'Rote counting: saying 1–10 in order; One-to-one: touch and count, move and count; Cardinality: the last number is how many', [
        L('touch-and-count', 'Touch and Count', {
          o: ['Count up to 10 objects by touching each one once', 'Understand that the last number said tells how many there are'],
          p: ['Can say the numbers 1 to 5 in order'],
          e: [
            'When we count, we say one number for each thing. We touch or move each thing as we say its number, so nothing is counted twice and nothing is missed.',
            'The last number we say tells us how many there are altogether. If we count "1, 2, 3" for three bananas, there are 3 bananas — even if we count them in a different order.',
            'Moving things into a "counted" pile is a great trick. Things that have been counted go on one side; things still to count stay on the other.',
          ],
          v: 'count = say numbers in order, one for each thing; how many = the total number of things; altogether = all of them together; pile = a group of things put together',
          x: ['Counting stairs: say one number for each step you climb.', 'Counting spoons when setting the table: one spoon for each person, 1, 2, 3, 4.'],
          s: ['Kiko Counts the Mangoes', 'Kiko the mountain goat found mangoes under a tree. "One, two, two, three!" Kiko said, touching one mango twice. Olu the owl laughed kindly. "Let\'s move each mango into the basket as we count." Kiko tried again: "One… two… three… four!" Four mangoes went into the basket, one at a time. "The last number is four, so there are four mangoes," said Kiko proudly.'],
          a: [
            ct('How many apples? 🍎🍎🍎🍎', 4, 'Touch each apple: 1, 2, 3, 4. The last number is 4.'),
            ct('Count the stars: ⭐⭐⭐⭐⭐⭐', 6),
            ch('Kiko counted 🍌🍌🍌 as "1, 2, 3". How many bananas?', '2|*3|4', 'The last number counted tells how many.'),
            od('Put the numbers in counting order', '1|2|3|4|5'),
          ],
          t: ['If you count the same toys starting from the other end, will you get a different number? Why?', 'Why is it a good idea to move toys when you count them?'],
          k: ['Count your fingers on one hand out loud and tell a grown-up how many there are.', 'Explain to someone how you make sure you never count a toy twice.'],
          m: ['Counting Treasure Box', 'an egg carton or small box, 10 small objects (buttons, pasta, pebbles)', 'Collect 10 small treasures from around the house | Put them in a pile | Move them one at a time into the box while counting aloud | Ask a grown-up to hide some and count what is left', 'Use objects too big to swallow.'],
          q: [
            ct('How many balloons? 🎈🎈🎈🎈🎈', 5),
            ct('How many ducks? 🦆🦆🦆', 3),
            tf('When we count, we touch each thing only once.', true),
            ch('What number comes after 7?', '6|*8|9'),
          ],
          ms: ['Counts a set of up to 10 objects accurately on two different days', 'Answers "how many?" with the last number counted, without recounting', 'Can explain the touch-once rule in their own words'],
        }),
      ]),
      U('numerals', 'Number Shapes 0–10', 'Matching written numbers to the amounts they stand for.', 'Numerals: shapes of 0–10; Matching: numeral to quantity, quantity to numeral; Zero: an empty plate has zero', [
        L('numeral-match', 'Which Number Is This?', {
          o: ['Recognise the written numerals 0 to 10', 'Match a numeral to a group with that many things'],
          p: ['Can count up to 5 objects'],
          e: [
            'Numbers have shapes that we write down. The shape "3" means three things, like three birds or three claps. Each number shape is called a numeral.',
            'Zero, written 0, means none at all. An empty plate has zero cookies. Zero is still a number — it tells us there is nothing there.',
            'When you see a numeral, you can show it with fingers, claps or objects. When you see a group, you can find the numeral that matches it.',
          ],
          v: 'numeral = the written shape of a number, like 5; zero = none at all, written 0; match = find two things that go together',
          x: ['A house number on a door, like 7, tells which house it is.', 'Lift buttons show numerals for each floor.'],
          s: ['The Empty Nest', 'Mayur the peacock peeked into a nest. "How many eggs?" asked Tara the tortoise. "None! The birds have hatched and flown away," said Mayur. "So the number is zero," smiled Tara, and she drew a round 0 in the sand. "Zero means nothing is there."'],
          a: [
            mt('Match the number to the group', '1=🐟|2=🐟🐟|3=🐟🐟🐟|4=🐟🐟🐟🐟'),
            ch('Which numeral means five?', '3|*5|8'),
            ch('An empty plate has how many cookies?', '*0|1|10', 'Nothing there means zero.'),
            ct('Show the numeral as a count: how many dots? ● ● ● ● ● ● ●', 7),
          ],
          t: ['Is zero a number even though there is nothing there? What do you think?', 'Where do you see numerals around your home?'],
          k: ['Go on a numeral hunt and tell a grown-up three numbers you found and where.'],
          m: ['Numeral Hunt Poster', 'paper, crayons, stickers or small cutouts', 'Write the numerals 1 to 5 down the side of the paper | Next to each one, draw or stick that many things | Read your poster aloud to a family member'],
          q: [
            ch('Which numeral means two?', '*2|6|9'),
            mt('Match', '0=empty plate|1=☀️|3=🌼🌼🌼'),
            ct('How many? 🐞🐞🐞🐞🐞🐞🐞🐞', 8),
          ],
          ms: ['Names numerals 0–10 shown in random order', 'Matches numerals to sets correctly for 0–10', 'Explains what zero means using an example'],
        }),
      ]),
      U('more-or-less', 'More, Fewer, Same', 'Comparing two groups by matching and counting.', 'Comparing: more, fewer, same; Matching one-to-one: pairing objects; Ordering: smallest to biggest number', [
        L('which-has-more', 'Which Group Has More?', {
          o: ['Compare two groups and say which has more or fewer', 'Use matching (pairing up) to compare without counting'],
          p: ['Can count up to 10 objects'],
          e: [
            'To find which group has more, we can pair things up: one from this group with one from that group. The group with things left over has more.',
            'We can also count both groups. The bigger number means more things. If both numbers are the same, the groups are equal.',
            'Big things do not always mean more! Three elephants and three ants are the same number, even though elephants are much bigger.',
          ],
          v: 'more = a bigger number of things; fewer = a smaller number of things; same = equal, not more and not fewer; pair = two things put together',
          x: ['Four children and three chairs: one child has no chair, so there are more children than chairs.', 'Three elephants and three ants: the same number of animals.'],
          s: ['Chairs for the Party', 'Momo the bear invited friends for tea. Five friends came, but there were only four chairs. Everyone sat down, and Zuri the zebra was left standing. "We have more friends than chairs!" said Momo, and fetched one more chair. Now every friend had exactly one chair — the same number.'],
          a: [
            ch('Which has more? 🍓🍓🍓 or 🍓🍓🍓🍓🍓', '3 strawberries|*5 strawberries', 'Pair them up: two strawberries are left over in the group of 5.'),
            tf('🐘🐘🐘 and 🐜🐜🐜 have the same number of animals.', true, 'Size does not change the number.'),
            ch('Which has fewer? ⚽⚽⚽⚽ or ⚽⚽', '*2 balls|4 balls'),
            od('Put these from fewest to most', '🌟|🌟🌟|🌟🌟🌟|🌟🌟🌟🌟'),
          ],
          t: ['If you have 3 big cookies and a friend has 4 small cookies, who has more cookies? Who has more to eat?', 'How could you check who has more without counting?'],
          k: ['Make two piles of toys and tell a grown-up which pile has more and how you know.'],
          m: ['Cups and Spoons Matching Game', 'cups, spoons, a tray', 'Put some cups in a row | Put one spoon in each cup | See whether there are spoons or cups left over | Say "more spoons", "more cups" or "the same"'],
          q: [
            ch('Which has more? 🐱🐱 or 🐱🐱🐱🐱🐱🐱', '2 cats|*6 cats'),
            tf('5 is more than 3.', true),
            ch('🍪🍪🍪 and 🍪🍪🍪: what can you say?', 'first has more|second has more|*they are the same'),
          ],
          ms: ['Compares groups up to 10 correctly using matching or counting', 'Uses the words more, fewer and same correctly', 'Explains that bigger objects do not mean a bigger number'],
        }),
      ]),
    ]),
    S('s5', 'Counting to 20 and beyond, counting on, and seeing numbers as made of smaller parts.', [
      'Count, read and write numbers to 20', 'Count on from any number', 'Break numbers to 10 into parts',
    ], [
      U('teen-numbers', 'Numbers to 20', 'Teen numbers are "ten and some more".', 'Counting to 20: forwards and backwards; Teen numbers: ten and some ones; Number line: positions and jumps', [
        L('ten-and-some-more', 'Ten and Some More', {
          o: ['Read and count numbers from 11 to 20', 'Explain that teen numbers are made of one ten and some ones'],
          p: ['Counts reliably to 10'],
          e: [
            'Numbers from 11 to 19 are called teen numbers. Each one is made of a full ten and some more ones. Fourteen is ten and four more.',
            'We write teen numbers with two digits. In 14, the 1 stands for one ten and the 4 stands for four ones. That is why fourteen starts with a 1.',
            'Twenty is two tens. When we count past 19, we fill a second ten and start a new pattern: 20, 21, 22.',
          ],
          v: 'teen numbers = the numbers 13 to 19 (and 11, 12, made the same way); digit = one of the symbols 0–9 used to write numbers; ten frame = a box of 10 spaces for counting',
          x: ['Two hands of fingers (10) plus three more fingers from a friend makes 13.', 'A full egg carton of 10 eggs plus 2 more eggs is 12 eggs.'],
          s: ['The Ten-Bead Necklace', 'Rangi the chameleon made a necklace with exactly ten blue beads. Then Rangi added six red beads. "How many beads now?" asked Bolt the robot. Rangi said, "Ten blue… and eleven, twelve, thirteen, fourteen, fifteen, sixteen red. Sixteen! Ten and six more."'],
          a: [
            ch('Fourteen is ten and…', '*4 more|1 more|14 more'),
            ct('Ten frame full (10) plus ●●● — how many?', 13),
            od('Order these numbers', '11|13|16|19|20'),
            mt('Match', '12=ten and 2|15=ten and 5|18=ten and 8'),
          ],
          t: ['Why do you think we say "fourteen" and not "ten-four"?', 'Is 17 closer to 10 or to 20? How do you know?'],
          k: ['Show a teen number with your fingers and a friend\'s fingers, and explain the ten and the ones.'],
          m: ['Teen Number Egg Cartons', 'two egg cartons (or drawn ten frames), 20 small objects', 'Fill one carton completely with 10 objects | Put some objects in the second carton | Count the total starting from ten | Write the number and say "ten and ___ more"'],
          q: [
            ch('Which number is ten and seven?', '7|*17|70'),
            ct('How many? 🔟 and ●●●●●', 15),
            tf('Twenty is two tens.', true),
          ],
          ms: ['Counts objects to 20 accurately', 'Describes any teen number as ten and some ones', 'Places numbers 0–20 in order'],
        }),
      ]),
      U('number-bonds', 'Number Bonds to 10', 'Numbers can be split into parts and put back together.', 'Part-part-whole: splitting a number; Bonds to 5: all pairs; Bonds to 10: all pairs, missing parts', [
        L('make-ten', 'Make Ten', {
          o: ['Find pairs of numbers that make 10', 'Use a part-part-whole picture to show a number bond'],
          p: ['Counts to 10 and recognises numerals'],
          e: [
            'A number can be split into two parts. Ten can be 7 and 3, or 6 and 4. The parts together make the whole. This is called a number bond.',
            'Fingers are a helpful tool: hold up 10 fingers, fold some down, and the folded and standing fingers are the two parts.',
            'Knowing bonds to 10 by heart makes adding and subtracting faster later, because 10 is the building block of our number system.',
          ],
          v: 'whole = the total amount; part = one piece of the whole; number bond = two parts that make a whole',
          x: ['10 crayons: 4 in the box and 6 on the table.', '10 fingers: 8 standing up and 2 folded down.'],
          s: ['Ten Little Fish', 'Pala the dolphin was looking after ten little fish. Some hid behind a rock. Pala could see seven. "Three must be hiding," Pala thought, "because seven and three make ten." Pala swam behind the rock — and there they were, three little fish!'],
          a: [
            ch('7 and ___ make 10', '2|*3|4'),
            mt('Make 10', '1=9|4=6|5=5|2=8'),
            ct('10 fish. You can see 🐟🐟🐟🐟🐟🐟. How many are hiding?', 4),
            tf('6 and 3 make 10.', false, '6 and 3 make 9. 6 and 4 make 10.'),
          ],
          t: ['How many different ways can you make 10 with two numbers?', 'If you know 3 and 7 make 10, what else do you know?'],
          k: ['Use your fingers to show a grown-up three ways to make 10, and say each one out loud.'],
          m: ['Shake and Spill', '10 two-colour counters or coins, a cup', 'Put 10 counters in a cup and shake | Spill them out | Count how many show each colour | Record the bond like 6 + 4 | Repeat and find all the different bonds'],
          q: [
            ch('5 and ___ make 10', '4|*5|6'),
            ct('10 birds. 8 flew away. How many are left?', 2),
            mt('Match bonds to 10', '3=7|9=1|6=4'),
          ],
          ms: ['Recalls all bonds to 10 within a few seconds', 'Finds a missing part of 10 without counting all', 'Explains number bonds with a picture or objects'],
        }),
      ]),
    ]),
    S('s6', 'Place value to 100, counting in 2s, 5s and 10s, odd and even, and comparing two-digit numbers.', [
      'Understand tens and ones to 100', 'Skip count in 2s, 5s, 10s', 'Compare numbers using <, > and =',
    ], [
      U('place-value-100', 'Tens and Ones', 'Each digit has a value depending on its place.', 'Tens and ones: bundling, base-ten blocks; Hundred square: patterns; Partitioning: 47 = 40 + 7', [
        L('bundles-of-ten', 'Bundles of Ten', {
          o: ['Explain the value of each digit in a two-digit number', 'Partition a number into tens and ones (47 = 40 + 7)'],
          p: ['Understands teen numbers as ten and some ones'],
          e: [
            'Counting large groups is easier if we bundle things into tens. Thirty-four sticks can be 3 bundles of ten and 4 loose sticks.',
            'In a two-digit number, the left digit tells how many tens and the right digit tells how many ones. In 34, the 3 means 3 tens (thirty) and the 4 means 4 ones.',
            'The same digit can have different values: the 5 in 52 is worth fifty, but the 5 in 25 is worth only five. This is place value.',
          ],
          v: 'place value = the value a digit has because of its place; tens = groups of ten; ones = single units; partition = split a number into parts',
          x: ['47 = 4 tens and 7 ones = 40 + 7.', 'Ten-rupee notes and one-rupee coins: 3 notes and 6 coins is ₹36.'],
          s: ['The Stick Bundle Market', 'At the market, Zuri sold sticks for building. Customers kept asking, "How many sticks?" Counting one by one took ages. So Zuri tied the sticks into bundles of ten. "Fifty-three, please," said Kiko. Zuri handed over five bundles and three loose sticks in seconds.'],
          a: [
            ch('In 63, what is the 6 worth?', '6|*60|600'),
            mt('Match', '40 + 7=47|70 + 4=74|20 + 9=29'),
            ch('3 bundles of ten and 5 loose sticks make…', '8|*35|53'),
            tf('In 25 and 52, the digit 5 has the same value.', false, 'In 25 it is 5 ones; in 52 it is 5 tens, or fifty.'),
          ],
          t: ['Why do you think people chose to group in tens?', 'What would happen if we had no zero? How would we write 30?'],
          k: ['Explain to a family member why 52 and 25 are different numbers even though they use the same digits.'],
          m: ['Straw Bundle Bank', 'drinking straws or ice-cream sticks, rubber bands, a cup', 'Count out a big handful of straws | Bundle every ten with a rubber band | Write the number as tens and ones | Draw it as a picture of bundles and singles'],
          q: [
            ch('Which shows 58?', '5 ones and 8 tens|*5 tens and 8 ones|58 tens'),
            ch('70 + 3 = ?', '37|*73|703'),
            tf('The 9 in 94 is worth ninety.', true),
          ],
          ms: ['Identifies the value of each digit in any two-digit number', 'Partitions two-digit numbers into tens and ones in more than one way (e.g. 47 = 30 + 17)', 'Explains the role of zero as a place holder'],
        }),
      ]),
      U('odd-even-compare', 'Odd, Even and Comparing', 'Numbers that pair up, and symbols for comparing.', 'Odd and even: pairing, last digit rule; Skip counting: 2s, 5s, 10s; Comparing: <, >, =', [
        L('odd-or-even', 'Odd or Even?', {
          o: ['Decide whether a number is odd or even by pairing', 'Use <, > and = to compare two-digit numbers'],
          p: ['Counts in 2s', 'Understands tens and ones'],
          e: [
            'If every object in a group can be put into pairs with none left over, the number is even. If one is left over, the number is odd.',
            'You only need to look at the ones digit: numbers ending in 0, 2, 4, 6 or 8 are even; numbers ending in 1, 3, 5, 7 or 9 are odd.',
            'To compare two numbers, compare the tens first. 41 > 39 because 4 tens is more than 3 tens. If the tens are equal, compare the ones. The symbol always opens toward the bigger number.',
          ],
          v: 'even = can be split into pairs with none left over; odd = one left over after pairing; greater than (>) = bigger than; less than (<) = smaller than',
          x: ['Socks come in pairs, so a full sock drawer has an even number of socks.', '56 > 52 because the tens are the same and 6 ones is more than 2 ones.'],
          s: ['The Dance Partners', 'At the Heart Harbor dance, everyone needed a partner. Fourteen animals arrived and made seven pairs. Then Momo the bear arrived — fifteen! One left over. "Fifteen is odd," said Rangi, "so I\'ll dance with Momo and we\'ll make a group of three!"'],
          a: [
            ch('Is 7 odd or even?', '*odd|even', 'Pair 7 things: one is left over.'),
            mt('Match each number to the right description', '34=even: ends in 4|51=odd: ends in 1|88=even: ends in 8|19=odd: ends in 9'),
            ch('Which is true?', '*45 > 39|45 < 39|45 = 39'),
            od('Order from smallest to biggest', '19|28|35|53|82'),
          ],
          t: ['Is zero odd or even? Use the pairing idea to decide.', 'If you add two odd numbers, is the answer odd or even? Try some and look for a pattern.'],
          k: ['Teach a grown-up the "look at the last digit" trick for odd and even, and prove it with objects.'],
          m: ['Odd–Even Pairs Investigation', '20 counters or buttons, paper', 'Take 1 counter and try to pair it, then 2, 3, up to 20 | Record each number as odd or even in a table | Colour the even numbers on a 1–20 strip | Describe the pattern you see'],
          q: [
            tf('36 is even.', true),
            ch('Which symbol goes here: 62 __ 26', '<|*>|='),
            ch('Which number is odd?', '40|*73|58'),
          ],
          ms: ['Classifies numbers to 100 as odd or even and justifies with pairing', 'Compares two-digit numbers correctly with <, >, =', 'Explains the strategy of comparing tens first'],
        }),
      ]),
    ]),
    S('s7', 'Place value to 10,000, rounding, fractions as numbers, and estimating.', [
      'Read, write and compare numbers to 10,000', 'Round to the nearest 10 and 100', 'Understand fractions as parts of a whole and as numbers on a line',
    ], [
      U('thousands-rounding', 'Thousands and Rounding', 'Bigger place values and sensible approximations.', 'Place value to 10,000: thousands, hundreds, tens, ones; Rounding: nearest 10, nearest 100; Estimation: sensible guesses, checking', [
        L('round-it', 'Rounding Numbers', {
          o: ['Round numbers to the nearest 10 and 100', 'Use rounding to estimate and check answers'],
          p: ['Understands place value to 1,000', 'Can place numbers on a number line'],
          e: [
            'Rounding means finding a nearby "friendly" number that is easier to work with. 47 rounds to 50 because on a number line 47 is closer to 50 than to 40.',
            'Look at the digit to the right of the place you are rounding to. If it is 5 or more, round up; if it is 4 or less, round down. 350 rounded to the nearest 100 is 400 by this convention.',
            'Rounding is used for estimating: 298 + 405 is about 300 + 400 = 700. If your exact answer is far from your estimate, check your work.',
          ],
          v: 'round = change a number to a nearby simpler number; estimate = a sensible approximate answer; nearest = closest; convention = an agreed rule everyone uses',
          x: ['A book costs ₹198 — about ₹200.', 'A crowd of 4,812 people is reported as "about 5,000".'],
          s: ['The Quick Shopkeeper', 'Kiko bought three things costing ₹49, ₹31 and ₹78. "That\'s about 50 plus 30 plus 80 — around ₹160," Kiko said before the shopkeeper finished adding. The exact total was ₹158. "Your estimate was close, so my sum is probably right," said the shopkeeper.'],
          a: [
            ch('Round 63 to the nearest 10', '*60|70|100'),
            ch('Round 750 to the nearest 100', '700|*800|750', 'The tens digit is 5, so round up by convention.'),
            mt('Round to the nearest 100', '149=100|251=300|1,962=2,000'),
            tf('418 + 291 is about 700.', true, '400 + 300 = 700.'),
          ],
          t: ['When is it better to estimate than to calculate exactly? When is it not okay?', 'A news report says "about 2,000 people". Could the real number be 1,600? Why or why not?'],
          k: ['Explain to someone how you would quickly check whether 389 + 412 = 701 is sensible.'],
          m: ['Supermarket Estimate Challenge', 'a grocery receipt or a pretend price list, pencil', 'Round every price to the nearest 10 | Add the rounded prices for an estimate | Add the exact prices | Compare and explain the difference'],
          q: [
            ch('Round 2,349 to the nearest 100', '*2,300|2,400|2,000', 'The tens digit is 4, so round down.'),
            ch('Round 85 to the nearest 10', '80|*90|100'),
            tf('Estimating can help you spot a mistake.', true),
          ],
          ms: ['Rounds any number to 10,000 to the nearest 10 and 100', 'Uses estimates to judge whether a calculated answer is reasonable', 'Explains rounding using a number line'],
        }),
      ]),
      U('fractions-as-numbers', 'Fractions as Numbers', 'Fractions name equal parts and live on the number line.', 'Unit fractions: halves, thirds, quarters; Fractions of shapes and sets; Number line: fractions between 0 and 1', [
        L('equal-parts', 'Equal Parts', {
          o: ['Explain that a fraction names equal parts of a whole', 'Place simple fractions on a number line between 0 and 1'],
          p: ['Can divide a shape or set into halves'],
          e: [
            'A fraction describes equal parts of a whole. The bottom number (denominator) tells how many equal parts the whole is split into. The top number (numerator) tells how many parts we are talking about.',
            'The parts must be equal. Cutting a roti into three pieces of different sizes does not make thirds.',
            'Fractions are numbers too. On a number line from 0 to 1, ½ sits exactly halfway. ¼ is halfway between 0 and ½. More equal parts means each part is smaller, so ⅛ < ¼.',
          ],
          v: 'fraction = a number naming equal parts of a whole; numerator = top number: how many parts we have; denominator = bottom number: how many equal parts in the whole; unit fraction = a fraction with numerator 1',
          x: ['A pizza cut into 8 equal slices; you eat 3, so you ate ⅜.', 'Half of 12 marbles is 6 marbles.'],
          s: ['The Unfair Cake', 'Three friends shared a cake. Momo cut it, but one piece was huge and two were tiny. "Each of us gets a third!" said Momo. "Those aren\'t thirds," said Nova, "thirds must be equal." They cut a new cake into three matching pieces — now each really was one third.'],
          a: [
            ch('A shape is cut into 4 EQUAL parts and 1 is coloured. What fraction is coloured?', '*¼|⅓|½'),
            tf('Cutting a roti into 3 pieces of different sizes makes thirds.', false, 'Thirds must be three equal parts.'),
            od('Order from smallest to largest', '⅛|¼|½|1'),
            ch('Half of 10 is…', '2|*5|20'),
          ],
          t: ['Would you rather have ⅓ or ¼ of the same pizza? Why?', 'Can ½ of one thing be bigger than ½ of another? Give an example.'],
          k: ['Fold a paper strip into halves, quarters and eighths, and explain to someone why ⅛ is smaller than ¼.'],
          m: ['Fraction Wall', 'paper strips of equal length, scissors, glue, coloured pencils', 'Keep one strip whole and label it 1 | Fold and cut strips into halves, thirds, quarters, sixths, eighths | Stack them under the whole strip | Use the wall to find which fractions are equal (like 2/4 and 1/2)'],
          q: [
            ch('Which is bigger?', '⅕|*⅓'),
            ch('A bar is split into 6 equal parts; 5 are shaded. Fraction shaded?', '⅕|*⅚|⁶⁄₅'),
            tf('½ and 2/4 are equal.', true),
          ],
          ms: ['Names fractions of shapes and sets with denominators up to 12', 'Places unit fractions correctly on a 0–1 number line', 'Explains why parts must be equal'],
        }),
      ]),
    ]),
    S('s9', 'Large numbers, decimals and percentages, negative numbers, and factors and primes.', [
      'Work with numbers to millions and decimals to thousandths', 'Understand negative numbers in context', 'Find factors, multiples and primes',
    ], [
      U('decimals-percent', 'Decimals and Percentages', 'One idea, three forms: fractions, decimals, percentages.', 'Decimals: tenths, hundredths, thousandths; Percent: per hundred; Conversions: ½ = 0.5 = 50%', [
        L('three-forms', 'Fractions, Decimals, Percentages', {
          o: ['Convert between simple fractions, decimals and percentages', 'Compare quantities given in different forms'],
          p: ['Understands fractions and place value to thousandths'],
          e: [
            'Decimals extend place value to the right of the decimal point: tenths, hundredths, thousandths. 0.7 means 7 tenths; 0.07 means 7 hundredths.',
            'Percent means "per hundred". 35% means 35 out of every 100, which is 0.35 or 35/100. Percentages make it easy to compare amounts out of different totals.',
            'Key equivalents are worth memorising: ½ = 0.5 = 50%, ¼ = 0.25 = 25%, ¾ = 0.75 = 75%, ⅕ = 0.2 = 20%, 1/10 = 0.1 = 10%.',
          ],
          v: 'decimal point = the dot separating whole numbers from parts; percent = per hundred; equivalent = equal in value though written differently; tenth = one of ten equal parts',
          x: ['A test score of 18/20 is 90%.', 'A shirt with 25% off costs ¾ of the original price.'],
          s: ['Which Team Shoots Better?', 'Team A scored 12 goals from 20 shots. Team B scored 15 from 30. "Team B scored more!" said Kiko. Nova converted: 12/20 = 60%, 15/30 = 50%. "Team A is more accurate," said Nova, "even though Team B scored more goals."'],
          a: [
            mt('Match equal values', '½=50%|¼=0.25|3/10=30%|⅕=0.2'),
            ch('Which is largest?', '0.4|*45%|⅖'),
            tf('0.5 and 0.50 have the same value.', true),
            od('Order smallest to largest', '0.05|0.3|⅖|65%|0.9'),
          ],
          t: ['Why might a shop say "50% off" instead of "half price"? Are they the same?', 'Can a percentage be more than 100%? Find a real example.'],
          k: ['Explain to someone why 0.3 is bigger than 0.25 even though 25 is bigger than 3.'],
          m: ['Survey and Percentages', 'paper, pencil, at least 10 people or a set of objects to survey', 'Ask a question with a few choices (e.g. favourite fruit) | Tally the results | Convert each count to a fraction, decimal and percentage of the total | Present a poster with your findings'],
          q: [
            ch('¾ as a percentage is', '34%|*75%|0.75%'),
            ch('Which is smaller?', '*0.09|0.1'),
            tf('20% of 50 is 10.', true),
          ],
          ms: ['Converts fluently among fractions, decimals and percentages for common values', 'Compares mixed representations correctly', 'Explains common misconceptions such as 0.25 > 0.3'],
        }),
      ]),
      U('negative-primes', 'Negative Numbers, Factors and Primes', 'Numbers below zero and the building blocks of whole numbers.', 'Negative numbers: temperature, sea level, number line; Factors and multiples: factor pairs; Primes: sieve of Eratosthenes, prime factorisation', [
        L('prime-building-blocks', 'Primes: Building Blocks of Numbers', {
          o: ['Identify prime and composite numbers to 100', 'Write a number as a product of prime factors'],
          p: ['Knows multiplication facts to 10 × 10'],
          e: [
            'A factor of a number divides it exactly. The factors of 12 are 1, 2, 3, 4, 6 and 12. A prime number has exactly two factors: 1 and itself. 2, 3, 5, 7, 11 and 13 are primes.',
            'A composite number has more than two factors. 1 is neither prime nor composite, because it has only one factor.',
            'Every whole number greater than 1 can be built by multiplying primes in exactly one way (ignoring order): 60 = 2 × 2 × 3 × 5. Mathematicians call this the Fundamental Theorem of Arithmetic.',
          ],
          c: [['evidence', 'The "sieve" method for finding primes is credited to Eratosthenes of Cyrene, a Greek scholar of the 3rd century BCE; Euclid\'s Elements (c. 300 BCE) contains a proof that there are infinitely many primes.']],
          v: 'factor = a number that divides another exactly; multiple = the result of multiplying a number by a whole number; prime = a number with exactly two factors; composite = a number with more than two factors',
          x: ['24 = 2 × 2 × 2 × 3.', 'Negative numbers: −5 °C is colder than −2 °C.'],
          s: ['The Rectangle Test', 'Bolt had 13 square tiles and wanted to make a rectangle that was not a single row. Every attempt left tiles over. With 12 tiles Bolt made 2 × 6, 3 × 4 and 1 × 12. "13 only makes one long row," Bolt said. "That is what prime means!"'],
          a: [
            ch('Which number is prime?', '21|*23|27'),
            tf('1 is a prime number.', false, 'A prime has exactly two factors; 1 has only one.'),
            mt('Match each number to its prime factorisation', '12=2×2×3|30=2×3×5|49=7×7'),
            ch('Which is colder?', '*−8 °C|−3 °C'),
          ],
          t: ['Why is 2 the only even prime?', 'Do you think there is a largest prime number? What would that mean?'],
          k: ['Explain the "rectangle test" for primes to someone using tiles or a drawing.'],
          m: ['Sieve of Eratosthenes', 'a printed or drawn 1–100 grid, coloured pencils', 'Cross out 1 | Circle 2 and cross out its other multiples | Repeat with the next uncrossed number (3, 5, 7) | List the circled primes and count them | Explain why you only needed to sieve up to 10'],
          q: [
            ch('Prime factorisation of 18', '2×9|*2×3×3|3×6'),
            ch('How many primes are less than 10?', '3|*4|5'),
            tf('−1 is greater than −10.', true),
          ],
          ms: ['Identifies primes to 100 and justifies using factors', 'Finds prime factorisations of numbers to 200', 'Orders and compares negative numbers in context'],
        }),
      ]),
    ]),
    S('s12', 'The real number system, powers and standard form, and reasoning about number.', [
      'Classify numbers as natural, integer, rational, irrational', 'Use indices and standard form', 'Construct simple number proofs',
    ], [
      U('number-system', 'The Real Number System', 'From counting numbers to irrational numbers.', 'Number sets: ℕ, ℤ, ℚ, ℝ; Rational numbers: terminating and recurring decimals; Irrational numbers: √2, π', [
        L('rational-irrational', 'Rational and Irrational Numbers', {
          o: ['Classify numbers into natural, integer, rational and irrational', 'Explain why √2 cannot be written as a fraction'],
          p: ['Works confidently with fractions, decimals and square roots'],
          e: [
            'Natural numbers (1, 2, 3, …) are for counting. Integers add zero and the negatives. Rational numbers are any number that can be written as a fraction a/b of integers with b ≠ 0 — every terminating or recurring decimal is rational.',
            'Irrational numbers cannot be written as such a fraction. Their decimals go on forever without repeating. √2 and π are classic examples.',
            'A proof by contradiction shows √2 is irrational: assume √2 = a/b in lowest terms; then a² = 2b², so a is even; writing a = 2k gives b² = 2k², so b is even too — contradicting "lowest terms".',
          ],
          c: [['evidence', 'Greek mathematicians knew of incommensurable lengths (such as the diagonal of a unit square) by around the 5th–4th century BCE; the popular story that a Pythagorean was drowned for revealing this is a later legend with no reliable evidence.']],
          v: 'rational number = a number expressible as a fraction of integers; irrational number = a real number that is not rational; integer = a whole number, positive, negative or zero; proof by contradiction = showing an assumption leads to something impossible',
          x: ['0.333… = ⅓ is rational.', 'π ≈ 3.14159… is irrational; 22/7 is only an approximation.'],
          s: ['The Unmeasurable Diagonal', 'A student drew a square with sides of 1 metre and tried to measure the diagonal exactly in centimetres, then millimetres, then smaller units. No unit ever fitted both the side and the diagonal a whole number of times. Her teacher explained: the diagonal is √2 metres, and no fraction can describe it exactly.'],
          a: [
            mt('Classify', '−7=integer|0.25=rational|√2=irrational|5=natural'),
            tf('Every recurring decimal is rational.', true),
            ch('Which is irrational?', '√9|0.121212…|*√5'),
            tf('22/7 is exactly equal to π.', false, '22/7 = 3.142857…, close to but not equal to π.'),
          ],
          t: ['If √2 is irrational, what about 2√2 or √2 + 1? Can you justify your answer?', 'Is the sum of two irrational numbers always irrational? Look for a counterexample.'],
          k: ['Present the proof that √2 is irrational to someone, explaining each step in your own words.'],
          m: ['Approximating √2', 'calculator (optional), paper', 'Start with a guess g = 1.5 | Compute (g + 2/g) ÷ 2 to get a better guess | Repeat four times and record each value | Compare with the calculator value and explain why the decimal never terminates'],
          q: [
            ch('Which set does −3 belong to but 3.5 does not?', 'rational|*integers|real'),
            tf('Every integer is a rational number.', true),
            ch('0.142857142857… is', '*rational|irrational'),
          ],
          ms: ['Classifies numbers correctly into nested number sets', 'Reproduces and explains the irrationality proof for √2', 'Distinguishes exact values from decimal approximations'],
        }),
      ]),
      U('powers-standard-form', 'Powers and Standard Form', 'Writing very big and very small numbers efficiently.', 'Index laws: multiply, divide, power of a power; Zero and negative indices; Standard form: astronomy, microbiology', [
        L('standard-form', 'Standard Form', {
          o: ['Write numbers in standard form A × 10ⁿ with 1 ≤ A < 10', 'Use index laws including negative powers'],
          p: ['Understands place value and powers of 10'],
          e: [
            'Standard form writes a number as A × 10ⁿ where 1 ≤ A < 10 and n is an integer. 3,800,000 = 3.8 × 10⁶ and 0.00052 = 5.2 × 10⁻⁴.',
            'Index laws: 10ᵃ × 10ᵇ = 10ᵃ⁺ᵇ, 10ᵃ ÷ 10ᵇ = 10ᵃ⁻ᵇ, and 10⁰ = 1. A negative index means a reciprocal: 10⁻³ = 1/1000.',
            'Scientists use standard form because it shows the size (the power) and precision (the digits of A) at a glance.',
          ],
          c: [['science', 'The average Earth–Sun distance is about 1.496 × 10⁸ km; a typical red blood cell is about 7–8 × 10⁻⁶ m across.']],
          v: 'index (power) = the small raised number showing repeated multiplication; standard form = A × 10ⁿ with 1 ≤ A < 10; reciprocal = 1 divided by a number; order of magnitude = the power of ten describing size',
          x: ['(3 × 10⁴) × (2 × 10³) = 6 × 10⁷.', 'The mass of the Earth is about 5.97 × 10²⁴ kg.'],
          s: ['The Astronomer\'s Notebook', 'An astronomy club tried to write the distance to the nearest star beyond the Sun, about 40,000,000,000,000 km, in full on the board. They kept losing count of zeros. Writing 4.0 × 10¹³ km fitted on one line — and they could see instantly it was about 270,000 times the Earth–Sun distance.'],
          a: [
            ch('Write 45,000 in standard form', '45 × 10³|*4.5 × 10⁴|0.45 × 10⁵'),
            ch('10⁵ × 10³ =', '10¹⁵|*10⁸|10²'),
            tf('10⁻² = 0.01', true),
            od('Order from smallest to largest', '3 × 10⁻²|5 × 10⁻¹|2 × 10⁰|9 × 10²'),
          ],
          t: ['Why must A be at least 1 and less than 10? What goes wrong otherwise?', 'Why is 10⁰ equal to 1? Use the division law to argue it.'],
          k: ['Explain to someone how a calculator display like "6.02E23" relates to standard form.'],
          m: ['Scale of the Universe Poster', 'paper or a long strip, reference books or offline encyclopedia', 'Choose 10 objects from an atom to a galaxy | Find each size in metres and write it in standard form | Place them on a strip by power of ten | Write which jumps surprised you most'],
          q: [
            ch('0.0007 in standard form', '7 × 10⁴|*7 × 10⁻⁴|0.7 × 10⁻³'),
            ch('(2 × 10³) × (4 × 10²) =', '*8 × 10⁵|8 × 10⁶|6 × 10⁵'),
            tf('5.2 × 10⁻³ is smaller than 1.', true),
          ],
          ms: ['Converts between ordinary numbers and standard form both ways', 'Applies index laws including zero and negative indices', 'Calculates with numbers in standard form and reports in correct form'],
        }),
      ]),
    ]),
  ],
});
