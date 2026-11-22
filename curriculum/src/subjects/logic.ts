import { subject, S, U, L, ch, tf, od, mt } from '../dsl.ts';

export default subject({
  id: 'logic',
  description: 'Logic and reasoning from sorting toys to formal logic: same and different, odd one out, patterns, if-then reasoning, classification and Venn diagrams, and, or and not, deduction and induction, syllogisms, logical fallacies, truth tables, the Indian Nyaya tradition of inference, and reasoning with probability and evidence.',
  stages: [
    S('s4', 'Same and different, sorting and the odd one out.', [
      'Sort objects by colour, shape and size', 'Find the odd one out and explain why', 'Use words like same, different, because',
    ], [
      U('sorting', 'Sorting Things', 'Putting things in groups.', 'Sort by colour; Sort by shape; Sort by size', [
        L('sort', 'Sort It Out', {
          o: ['Sort objects into groups by one feature', 'Explain the sorting rule using "because"'],
          p: ['Knows colours and shapes'],
          e: [
            'Sorting means putting things that are the same in some way into groups. We can sort by colour (all the red things together), by shape (all the circles) or by size (big and small).',
            'The reason we put things together is the sorting rule. "These go together because they are all blue."',
            'The same things can be sorted in different ways! Buttons could be sorted by colour, by size or by how many holes they have.',
          ],
          v: 'sort = to put things into groups; group = things that belong together; rule = the reason things go together; same = alike in some way',
          x: ['Putting all the red blocks in one box.', 'Sorting socks into pairs.'],
          s: ['The Messy Toy Box', 'Ivaan\'s toy box was a jumble. Papa said, "Let\'s sort!" First, they made a car pile, an animal pile and a block pile. Then Ivaan had another idea: "Let\'s sort by colour!" Now there was a red pile with a red car, a red block and a red elephant. "Same toys, new groups," Papa laughed.'],
          a: [
            ch('Which belongs with an apple, a tomato and a strawberry if we sort by colour?', '*a red ball|a banana|a leaf'),
            ch('A sorting rule tells…', '*why things go together|how tall you are|what time it is'),
            tf('The same things can be sorted in different ways.', true),
            mt('Match the thing to its group', 'circle=shapes|elephant=animals|car=vehicles'),
          ],
          t: ['How else could you sort your toys?', 'Can one toy belong to two groups?'],
          k: ['Sort some objects and tell a grown-up your rule using "because".'],
          m: ['Sorting Trays', 'a muffin tray or bowls, buttons, beads or pasta', 'Mix up small objects | Sort them by colour | Mix them again and sort by size | Explain each rule'],
          q: [
            ch('Putting things into groups is…', '*sorting|sleeping|singing'),
            tf('We can sort by size.', true),
            ch('Things that belong together form a…', '*group|gap|game'),
          ],
          ms: ['Sorts by a feature', 'States the rule', 'Re-sorts flexibly'],
        }),
      ]),
      U('odd-one', 'Odd One Out', 'Spot what doesn\'t belong.', 'Finding the odd one; Explaining why; More than one answer', [
        L('odd-one-out', 'Which One Doesn\'t Belong?', {
          o: ['Find the odd one out in a group', 'Explain the reason using "because"'],
          p: ['Can sort objects'],
          e: [
            'In an odd-one-out puzzle, all the things are alike except one. We look carefully to see what most of them share.',
            'For example: cat, dog, cow, car. The car is the odd one out because it is not an animal.',
            'Sometimes there is more than one good answer! In a red apple, a red car and a green apple, the car is odd (not a fruit) — or the green apple is odd (not red). What matters is a good reason.',
          ],
          v: 'odd one out = the thing that is different from the rest; reason = why you think something; alike = the same in some way; explain = to tell why',
          x: ['Spoon, fork, knife, pencil — the pencil is not for eating.', 'Circle, square, triangle, banana.'],
          s: ['The Puzzle at Breakfast', 'Aaji put four things on the table: a banana, a mango, an orange and a shoe! Ivaan laughed. "The shoe is the odd one out because you can\'t eat it!" Aaji swapped the shoe for a carrot. Ivaan thought hard. "The carrot, because it\'s a vegetable!" "Or the banana," said Aaji, "because it\'s the only one you peel like that." They both were right.'],
          a: [
            ch('Which is the odd one out: cat, dog, cow, car?', '*car|cat|dog'),
            ch('Which is the odd one out: circle, square, triangle, banana?', '*banana|circle|square'),
            tf('An odd-one-out puzzle can have more than one good answer.', true),
            ch('Which is the odd one out: spoon, fork, knife, pencil?', '*pencil|spoon|fork'),
          ],
          t: ['Can you make an odd-one-out puzzle with three toys and one food?', 'Why is the reason important?'],
          k: ['Make an odd-one-out puzzle for a grown-up and ask them to explain their answer.'],
          m: ['Odd-One-Out Cards', 'card, crayons', 'Draw four things on each card, with one odd one out | Make five cards | Play with your family | Ask everyone to explain their reasons'],
          q: [
            ch('The thing that is different is the…', '*odd one out|best one|first one'),
            tf('A good answer needs a reason.', true),
            ch('Which is odd: red, blue, green, elephant?', '*elephant|red|blue'),
          ],
          ms: ['Identifies the odd one out', 'Explains reasoning', 'Accepts multiple valid answers'],
        }),
      ]),
    ]),
    S('s5', 'Patterns, sequences and if-then thinking.', [
      'Continue and create patterns', 'Predict what comes next', 'Use if-then to reason',
    ], [
      U('patterns', 'What Comes Next?', 'Patterns and sequences.', 'Repeating patterns; Growing patterns; Making your own', [
        L('next', 'Find the Pattern', {
          o: ['Continue repeating and growing patterns', 'Explain the pattern rule'],
          p: ['Can sort and compare'],
          e: [
            'A pattern is something that repeats or changes in a regular way. Red, blue, red, blue... comes next? Red!',
            'Some patterns grow: 1 star, 2 stars, 3 stars... The rule is "add one more each time".',
            'To find what comes next, look for the rule. Then use the rule to predict. Logic helps us notice rules and use them.',
          ],
          v: 'pattern = something that repeats or changes in a regular way; predict = to say what will happen next; rule = how a pattern works; sequence = things in a particular order',
          x: ['🍎🍌🍎🍌 — next is 🍎.', '2, 4, 6, 8 — next is 10.'],
          s: ['The Necklace Mystery', 'Zuri was making a bead necklace: red, red, blue, red, red, blue. Then her little brother knocked the box, and the beads spilled! "Oh no — what came next?" Zuri looked at her necklace and spotted the rule: two reds, one blue. She picked up two red beads and a blue one and kept going.'],
          a: [
            ch('What comes next? 🔴🔵🔴🔵🔴…', '*🔵|🔴|🟢'),
            ch('What comes next? 2, 4, 6, 8…', '*10|9|12'),
            od('Put this growing pattern in order', '⭐|⭐⭐|⭐⭐⭐|⭐⭐⭐⭐'),
            tf('Finding the rule helps you predict what comes next.', true),
          ],
          t: ['Where do you see patterns at home?', 'Can you make a pattern with sounds?'],
          k: ['Clap a pattern and ask a grown-up to continue it.'],
          m: ['Pattern Snake', 'paper strips, crayons or stickers', 'Draw a long snake on paper | Fill it with a repeating pattern | Make a second snake with a growing pattern | Ask someone to find your rules'],
          q: [
            ch('To say what happens next is to…', '*predict|paint|pack'),
            tf('A pattern can grow.', true),
            ch('What comes next? 🐱🐶🐱🐶…', '*🐱|🐶|🐭'),
          ],
          ms: ['Continues patterns', 'States the rule', 'Creates patterns'],
        }),
      ]),
      U('if-then', 'If This, Then That', 'Thinking with rules.', 'If-then rules; Using clues; Checking with evidence', [
        L('if-then-reasoning', 'If It Rains, the Ground Gets Wet', {
          o: ['Use if-then rules to reach conclusions', 'Use clues to solve simple logic puzzles'],
          p: ['Can find patterns'],
          e: [
            'An if-then rule tells us what follows from something. "If it rains, then the ground gets wet." If we know it is raining, we can conclude the ground is wet.',
            'Careful! If the ground is wet, it might not be because of rain — maybe someone watered the plants. Good thinkers check other possibilities.',
            'Logic puzzles give clues. "The cat is not on the bed. The cat is on the chair or the bed." So the cat must be on the chair!',
          ],
          v: 'if-then = a rule saying one thing follows from another; clue = a piece of information that helps solve a puzzle; conclusion = what you decide is true; possibility = something that could be true',
          x: ['If you drop a glass, then it may break.', 'If it is Sunday, then there is no school.'],
          s: ['Who Ate the Ladoo?', 'One ladoo was missing! Ivaan looked for clues. "If someone ate it, there will be crumbs." There were crumbs — on Kiko the dog\'s nose! But wait — could someone else have dropped crumbs? Ivaan checked: the plate was too high for Kiko... unless he climbed the chair. The chair had paw prints! "Mystery solved," said Ivaan.'],
          a: [
            ch('If it rains, the ground gets wet. It is raining. So…', '*the ground is wet|the sun is out|it is night'),
            ch('The cat is on the chair or the bed. It is not on the bed. So it is…', '*on the chair|on the roof|on the bed'),
            tf('A wet ground could have other causes than rain.', true),
            ch('A piece of information that helps solve a puzzle is a…', '*clue|cloud|clock'),
          ],
          t: ['If the floor is wet, what could have happened?', 'Why should detectives check other possibilities?'],
          k: ['Tell a grown-up an if-then rule and what follows from it.'],
          m: ['Detective Case File', 'paper, a hidden toy, a grown-up', 'Ask a grown-up to hide a toy and give three clues | Use if-then thinking to narrow it down | Write your conclusion | Check if you were right'],
          q: [
            ch('What you decide is true is your…', '*conclusion|clue|question'),
            tf('If-then rules help us reason.', true),
            ch('If it is Sunday, there is no school. Today is Sunday. So…', '*there is no school today|there is school|it is raining'),
          ],
          ms: ['Applies if-then rules', 'Considers alternatives', 'Solves clue puzzles'],
        }),
      ]),
    ]),
    S('s6', 'Classification, Venn diagrams and logical words.', [
      'Use Venn diagrams to sort', 'Use and, or and not precisely', 'Judge statements as true or false',
    ], [
      U('venn', 'Venn Diagrams', 'Overlapping circles.', 'Two-circle Venn diagrams; The overlap; Outside the circles', [
        L('venn', 'Circles That Overlap', {
          o: ['Sort items into a two-circle Venn diagram', 'Explain the meaning of the overlap and the outside'],
          p: ['Can sort by one rule'],
          e: [
            'A Venn diagram uses overlapping circles to sort things by two rules at once. It is named after John Venn, an English logician, who popularised it in 1880.',
            'If one circle is "animals that can fly" and the other "animals that lay eggs", the overlap holds animals that do both (like a pigeon). A bat goes only in "can fly"; a crocodile goes only in "lays eggs".',
            'Things that fit neither rule — like a dog — go outside both circles.',
          ],
          v: 'Venn diagram = overlapping circles for sorting; overlap = where circles share space; category = a group with a shared feature; classify = to sort into categories',
          x: ['A penguin: lays eggs but cannot fly.', 'A bat: flies but does not lay eggs.'],
          s: ['The Fruit Venn', 'Zuri drew two hoops on the floor: "red" and "round". An apple went in the overlap — red AND round! A strawberry went only in red. An orange went only in round. A banana went outside — neither red nor round. "The overlap is for things that are both," she explained to her little brother.'],
          a: [
            ch('Circles: "can fly" and "lays eggs". Where does a pigeon go?', '*in the overlap|outside both|only in can fly'),
            ch('Where does a dog go?', '*outside both circles|in the overlap|only in lays eggs'),
            tf('Venn diagrams are named after John Venn.', true),
            mt('Match the animal to its place', 'bat=can fly only|crocodile=lays eggs only|pigeon=both'),
          ],
          t: ['Can you think of something for every part of the diagram?', 'Why might a Venn diagram be useful?'],
          k: ['Explain your Venn diagram to a grown-up.'],
          m: ['Hoop Venn Sort', 'two hoops or string circles, objects or picture cards', 'Lay two overlapping hoops and choose two rules | Sort objects into the regions | Put things that fit neither outside | Swap rules and sort again'],
          q: [
            ch('Where circles share space is the…', '*overlap|outside|edge'),
            tf('Things that fit neither rule go outside the circles.', true),
            ch('To sort into categories is to…', '*classify|calculate|celebrate'),
          ],
          ms: ['Sorts using two rules', 'Interprets regions', 'Creates Venn diagrams'],
        }),
      ]),
      U('logic-words', 'And, Or, Not', 'Precise words.', 'And; Or; Not', [
        L('and-or-not', 'And, Or, Not', {
          o: ['Use and, or and not precisely', 'Decide whether combined statements are true or false'],
          p: ['Can use Venn diagrams'],
          e: [
            'In logic, "and" means both parts must be true. "It is sunny AND warm" is true only if it is both sunny and warm.',
            '"Or" means at least one part is true. "I will have tea OR juice" — in logic, having both still makes it true (this is called inclusive or). "Not" flips truth: if "it is raining" is false, "it is NOT raining" is true.',
            'Computers use and, or and not (called Boolean operators) to search and make decisions. Searching "tigers AND India" finds pages about both.',
          ],
          v: 'and = both must be true; or = at least one must be true; not = the opposite; statement = a sentence that is true or false',
          x: ['"A square has 4 sides AND 4 corners" — true.', '"A cat is NOT a fish" — true.'],
          s: ['The Club Rules', 'Kiko\'s club had a rule: "To join, you must be 8 AND like puzzles." Zuri was 8 and loved puzzles — she joined! Raj was 8 but hated puzzles — not allowed. Then the rule changed to "8 OR likes puzzles." Now Raj could join, and so could Zuri\'s little brother, who was 6 but loved puzzles.'],
          a: [
            ch('"It is sunny AND warm" is true when…', '*it is both sunny and warm|it is only sunny|it is neither'),
            ch('"Tea OR juice" is true if you have…', '*at least one of them|neither|only water'),
            tf('If "it is raining" is false, then "it is not raining" is true.', true),
            mt('Match the word to its meaning', 'and=both must be true|or=at least one is true|not=the opposite'),
          ],
          t: ['How could "or" be confusing in everyday speech?', 'How do search engines use and?'],
          k: ['Make three statements using and, or and not, and say if each is true.'],
          m: ['Logic Gate Game', 'cards with "and", "or" and "not", a group', 'Call out statements like "wearing blue AND has a sister" | Players stand if the statement is true for them | Swap the logic word | Discuss how the results changed'],
          q: [
            ch('A sentence that is true or false is a…', '*statement|story|song'),
            tf('"A cat is not a fish" is true.', true),
            ch('"Has 4 legs AND can fly" — is it true for a dog?', '*false|true|sometimes'),
          ],
          ms: ['Uses logical words precisely', 'Evaluates compound statements', 'Connects to search'],
        }),
      ]),
    ]),
    S('s7', 'Deduction, induction and syllogisms.', [
      'Distinguish deductive and inductive reasoning', 'Evaluate syllogisms for validity', 'Separate validity from truth',
    ], [
      U('deduction-induction', 'Deduction and Induction', 'Two ways of reasoning.', 'Deduction: certain conclusions; Induction: likely conclusions; Detectives and scientists', [
        L('two-reasonings', 'Certain or Likely?', {
          o: ['Distinguish deductive from inductive reasoning', 'Explain why inductive conclusions can be overturned'],
          p: ['Can use if-then reasoning'],
          e: [
            'Deductive reasoning moves from general rules to a certain conclusion: "All mammals breathe air. Whales are mammals. So whales breathe air." If the premises are true and the reasoning valid, the conclusion must be true.',
            'Inductive reasoning moves from observations to a general, probable conclusion: "Every swan I have seen is white, so all swans are white." It is useful but can be wrong — Europeans believed this until black swans were recorded in Australia in 1697.',
            'Science relies heavily on induction (observing patterns) and tests ideas deductively (predicting what should happen if an idea is true).',
          ],
          v: 'deduction = reasoning from general rules to a certain conclusion; induction = reasoning from observations to a likely conclusion; premise = a statement an argument starts from; probable = likely but not certain',
          x: ['A detective deducing from clues.', 'Predicting the sun will rise tomorrow from past experience.'],
          s: ['The Black Swan', 'For centuries, Europeans used "black swan" to mean something impossible — every swan anyone had seen was white. Then, in 1697, Dutch explorer Willem de Vlamingh\'s expedition saw black swans in Western Australia. One observation overturned a "certain" rule. Thinkers still use the black swan to warn that induction can fail.'],
          a: [
            ch('"All mammals breathe air. Whales are mammals. So whales breathe air." This is…', '*deduction|induction|guessing'),
            ch('"Every swan I\'ve seen is white, so all swans are white." This is…', '*induction|deduction|a fact'),
            tf('Inductive conclusions can be overturned by new evidence.', true),
            ch('A statement an argument starts from is a…', '*premise|promise|prize'),
          ],
          t: ['Is it reasonable to believe the sun will rise tomorrow?', 'How do scientists use both kinds of reasoning?'],
          k: ['Give one example of deduction and one of induction from daily life.'],
          m: ['Reasoning Journal', 'a notebook', 'For a week, record examples of reasoning you hear | Label each as deductive or inductive | Note which conclusions could be wrong | Share your three best examples'],
          q: [
            ch('Likely but not certain is…', '*probable|proven|impossible'),
            tf('Valid deduction from true premises gives a true conclusion.', true),
            ch('Reasoning from observations to a likely conclusion is…', '*induction|deduction|addition'),
          ],
          ms: ['Distinguishes reasoning types', 'Explains limits of induction', 'Applies both to examples'],
        }),
      ]),
      U('syllogisms', 'Syllogisms', 'Classic arguments.', 'All, some, none; Valid and invalid; True vs valid', [
        L('syllogisms', 'All, Some and None', {
          o: ['Evaluate syllogisms as valid or invalid', 'Explain the difference between a valid and a true argument'],
          p: ['Knows deduction and Venn diagrams'],
          e: [
            'A syllogism is an argument with two premises and a conclusion, studied by Aristotle over 2,300 years ago. "All dogs are animals. All animals need food. So all dogs need food." This is valid.',
            'Validity is about form: if the premises were true, would the conclusion have to be true? "All cats can fly. Tom is a cat. So Tom can fly" is valid in form — but its first premise is false, so the conclusion isn\'t established.',
            'Invalid example: "All roses are flowers. Some flowers fade quickly. So some roses fade quickly." The fading flowers might not be roses! Venn diagrams help check validity.',
          ],
          v: 'syllogism = an argument with two premises and a conclusion; valid = the conclusion follows from the premises; sound = valid with true premises; invalid = the conclusion does not follow',
          x: ['A valid but unsound syllogism about flying cats.', 'A Venn diagram showing roses inside flowers.'],
          s: ['The Tricky Shopkeeper', 'A shopkeeper said, "All good phones are expensive. This phone is expensive. So it must be good!" Meera drew a Venn diagram: good phones inside expensive things — but expensive things could include bad phones too. "That doesn\'t follow," she said politely. The shopkeeper laughed and offered a discount.'],
          a: [
            ch('"All dogs are animals. All animals need food. So all dogs need food." Is it valid?', '*valid|invalid|impossible to tell'),
            ch('"All good phones are expensive. This phone is expensive. So it is good." Is it valid?', '*invalid|valid|true'),
            tf('A valid argument can have a false premise.', true),
            mt('Match the term', 'valid=conclusion follows|sound=valid with true premises|invalid=conclusion does not follow'),
          ],
          t: ['Why might people be fooled by invalid arguments?', 'How can a Venn diagram expose a bad argument?'],
          k: ['Present a valid and an invalid syllogism and explain the difference.'],
          m: ['Syllogism Checker', 'paper, coloured pens', 'Write five syllogisms, some valid and some not | Draw a Venn diagram for each | Mark each valid or invalid | Swap with a partner and check each other'],
          q: [
            ch('Valid with true premises is…', '*sound|silly|simple'),
            tf('Aristotle studied syllogisms.', true),
            ch('An argument with two premises and a conclusion is a…', '*syllogism|symbol|synonym'),
          ],
          ms: ['Evaluates validity', 'Distinguishes validity and soundness', 'Uses diagrams to check arguments'],
        }),
      ]),
    ]),
    S('s9', 'Logical fallacies and formal logic.', [
      'Identify common logical fallacies', 'Build truth tables', 'Analyse arguments in media',
    ], [
      U('fallacies', 'Logical Fallacies', 'Errors in reasoning.', 'Ad hominem and straw man; False dilemma and slippery slope; Appeal to popularity and authority', [
        L('fallacies', 'Spot the Fallacy', {
          o: ['Identify common logical fallacies', 'Respond to fallacious arguments constructively'],
          p: ['Can evaluate syllogisms'],
          e: [
            'A fallacy is an error in reasoning that makes an argument seem stronger than it is. Ad hominem attacks the person instead of the argument ("You\'re too young to know"). Straw man misrepresents an opponent\'s view to make it easier to attack.',
            'A false dilemma presents only two options when more exist ("Either you agree with me or you hate the country"). Slippery slope claims one step will inevitably lead to extreme consequences without evidence.',
            'Appeal to popularity says something is true because many believe it; appeal to authority relies on someone\'s status rather than evidence, especially outside their expertise. Post hoc assumes that because B followed A, A caused B.',
          ],
          v: 'fallacy = an error in reasoning; ad hominem = attacking the person, not the argument; straw man = misrepresenting an opponent\'s view; false dilemma = presenting only two options when more exist',
          x: ['"Everyone\'s buying it, so it must be good" (appeal to popularity).', '"I wore my lucky socks and we won" (post hoc).'],
          s: ['The Debate Club', 'In a debate about school uniforms, Raj said, "Zuri only wants to ban uniforms because she\'s lazy!" The judge stopped him. "That\'s ad hominem — address her arguments, not her." Raj then said, "So she wants students to wear anything, even pyjamas?" "Straw man," said the judge. Raj sighed and finally answered her real point.'],
          a: [
            mt('Match the fallacy', 'attacking the person=ad hominem|misrepresenting a view=straw man|only two options=false dilemma|everyone believes it=appeal to popularity'),
            ch('"I wore lucky socks and we won, so the socks caused the win" is…', '*post hoc|valid deduction|a straw man'),
            tf('A fallacy makes an argument seem stronger than it is.', true),
            ch('"If we allow phones in class, soon students will never study" (without evidence) is…', '*slippery slope|sound reasoning|a syllogism'),
          ],
          t: ['Why are fallacies common in advertising and politics?', 'How can you point out a fallacy without being rude?'],
          k: ['Analyse an advertisement or speech for fallacies and present your findings.'],
          m: ['Fallacy Hunt', 'advertisements, opinion articles, debates (age-appropriate)', 'Collect five persuasive examples | Identify any fallacies | Rewrite each argument without the fallacy | Present your best example'],
          q: [
            ch('An error in reasoning is a…', '*fallacy|fact|formula'),
            tf('Appeal to authority can be a fallacy when the authority lacks relevant expertise.', true),
            ch('Attacking the person is…', '*ad hominem|straw man|post hoc'),
          ],
          ms: ['Identifies fallacies', 'Explains why they mislead', 'Responds constructively'],
        }),
      ]),
      U('truth-tables', 'Truth Tables', 'Formal logic.', 'Propositions and connectives; Truth tables; Implication and its converse', [
        L('truth-tables', 'Truth Tables and Implication', {
          o: ['Construct truth tables for AND, OR, NOT and IF-THEN', 'Distinguish a conditional from its converse and contrapositive'],
          p: ['Knows and, or, not'],
          e: [
            'Propositional logic uses letters for statements (P, Q) and connectives: ∧ (and), ∨ (or), ¬ (not) and → (if-then). A truth table lists every combination of truth values. With two propositions, there are 4 rows.',
            'P → Q ("if P then Q") is false only when P is true and Q is false. For example, "If it rains, the match is cancelled" is broken only if it rains and the match goes ahead.',
            'The converse (Q → P) does not follow from P → Q. But the contrapositive (¬Q → ¬P) is logically equivalent: "If the match was not cancelled, it did not rain." George Boole\'s algebra of logic (1854) underlies digital circuits.',
          ],
          v: 'proposition = a statement that is true or false; connective = a word or symbol joining propositions; converse = reversing an if-then statement; contrapositive = negating and reversing an if-then statement',
          x: ['A truth table for P ∧ Q with four rows.', 'Logic gates in a computer chip.'],
          s: ['The Card Puzzle', 'Peter Wason\'s famous 1966 selection task shows four cards: A, K, 4, 7. Rule: "If a card has a vowel on one side, it has an even number on the other." Which cards must you turn to test it? Most people pick A and 4. The answer is A and 7 — because the 7 could hide a vowel, breaking the rule. Formal logic beats intuition here.'],
          a: [
            ch('P → Q is false only when…', '*P is true and Q is false|both are true|both are false'),
            ch('The contrapositive of P → Q is…', '*¬Q → ¬P|Q → P|P ∧ Q'),
            tf('A truth table with two propositions has four rows.', true),
            mt('Match the symbol', '∧=and|∨=or|¬=not|→=if-then'),
          ],
          t: ['Why do people confuse a statement with its converse?', 'How is Boolean logic used in computers?'],
          k: ['Explain the Wason selection task and its answer.'],
          m: ['Truth Table Workbook', 'paper or a spreadsheet', 'Build truth tables for ∧, ∨, ¬ and → | Verify P → Q is equivalent to ¬Q → ¬P | Test the converse | Write a one-page explanation'],
          q: [
            ch('Reversing an if-then statement gives the…', '*converse|contrapositive|conclusion'),
            tf('The contrapositive is logically equivalent to the original.', true),
            ch('A statement that is true or false is a…', '*proposition|preposition|prediction'),
          ],
          ms: ['Constructs truth tables', 'Distinguishes converse and contrapositive', 'Connects to Boolean logic'],
        }),
      ]),
    ]),
    S('s12', 'Indian logic and reasoning with probability.', [
      'Explain the Nyaya theory of inference', 'Compare Indian and Western logical traditions', 'Reason with probability and evidence',
    ], [
      U('nyaya', 'Nyaya: Indian Logic', 'Pramanas and inference.', 'Pramanas: means of knowledge; The five-member syllogism; Debate traditions', [
        L('nyaya', 'Where There Is Smoke, There Is Fire', {
          o: ['Describe the pramanas of Nyaya philosophy', 'Analyse the five-member Nyaya syllogism'],
          p: ['Knows syllogisms and deduction'],
          e: [
            'Nyaya is one of the classical schools of Indian philosophy, systematised in the Nyaya Sutras traditionally attributed to Gautama (Akshapada), commonly dated to roughly the 2nd century CE. It studies pramanas — valid means of knowledge: perception (pratyaksha), inference (anumana), comparison (upamana) and testimony (shabda).',
            'The Nyaya inference has five members: (1) The hill has fire (thesis). (2) Because it has smoke (reason). (3) Wherever there is smoke, there is fire, as in a kitchen (rule with example). (4) This hill has smoke associated with fire (application). (5) Therefore the hill has fire (conclusion). Unlike Aristotle\'s form, it explicitly includes an example.',
            'Later, Navya-Nyaya ("new logic"), associated with Gangesha (around the 14th century), developed a highly precise technical language. Indian traditions also analysed debate and fallacies (hetvabhasa — "reasons that only appear valid").',
          ],
          v: 'pramana = a valid means of knowledge; anumana = inference; hetvabhasa = a fallacious reason; vyapti = the universal relation between reason and conclusion',
          x: ['Inferring fire from smoke on a distant hill.', 'Debates in ancient Indian universities like Nalanda.'],
          s: ['The Smoke on the Hill', 'A traveller saw smoke rising from a distant hill. "There must be fire," she said. Her companion asked, "How do you know? You can\'t see it." She replied, "Wherever I have seen smoke, I have seen fire — in kitchens, in fields. And this smoke is rising from the hill." Nyaya philosophers used this simple scene to build a whole theory of inference.'],
          a: [
            mt('Match the pramana', 'pratyaksha=perception|anumana=inference|upamana=comparison|shabda=testimony'),
            ch('How many members does the Nyaya syllogism have?', '*five|three|two'),
            tf('The Nyaya syllogism includes an example.', true),
            ch('A fallacious reason in Indian logic is a…', '*hetvabhasa|pramana|sutra'),
          ],
          t: ['Why might including an example strengthen an argument?', 'How is testimony a source of knowledge — and when is it unreliable?'],
          k: ['Present a five-member Nyaya inference about a modern topic.'],
          m: ['Comparative Logic Essay', 'scholarly sources on Nyaya and Aristotelian logic', 'Explain the five-member syllogism | Compare it with Aristotle\'s three-part syllogism | Analyse strengths of each | Write a 1500-word essay'],
          q: [
            ch('Inference is…', '*anumana|pratyaksha|shabda'),
            tf('Navya-Nyaya is associated with Gangesha.', true),
            ch('A valid means of knowledge is a…', '*pramana|prasad|pranayama'),
          ],
          ms: ['Describes the pramanas', 'Analyses Nyaya inference', 'Compares logical traditions'],
        }),
      ]),
      U('probability-reasoning', 'Reasoning With Uncertainty', 'Probability and evidence.', 'Base rates; Bayes\' theorem; Correlation and causation', [
        L('bayes', 'Updating Beliefs With Evidence', {
          o: ['Apply base rates and Bayes\' theorem informally', 'Distinguish correlation from causation'],
          p: ['Knows fallacies and basic probability'],
          e: [
            'Real reasoning is often uncertain. Bayes\' theorem, named after Thomas Bayes (published 1763), shows how to update the probability of a hypothesis when new evidence arrives.',
            'Base rates matter. Suppose a disease affects 1 in 1,000 people and a test is 99% accurate. If you test positive, the chance you have the disease is only about 9%: among 100,000 people, about 99 of the 100 sick people test positive, but so do about 999 healthy people (1% false positives). Ignoring this is the base rate fallacy.',
            'Correlation is not causation: ice-cream sales and drowning both rise in summer, but one doesn\'t cause the other — hot weather affects both (a confounding variable). Randomised controlled trials help establish causation.',
          ],
          v: 'base rate = how common something is in a population; Bayes\' theorem = a formula for updating probabilities with evidence; correlation = two things varying together; confounding variable = a hidden factor affecting both variables',
          x: ['A positive result for a rare disease is often a false positive.', 'Ice cream and drowning both rising in summer.'],
          s: ['The Rare Disease Test', 'A doctor told a worried patient, "Your test was positive, but don\'t panic yet." She drew 1,000 dots: one red (sick), 999 blue. "The test catches the red one, but also wrongly flags about 10 blue ones. So of 11 positives, only 1 is truly sick." The patient\'s follow-up test came back negative. Thinking in base rates had saved a lot of fear.'],
          a: [
            ch('Ignoring how common something is leads to the…', '*base rate fallacy|straw man|valid deduction'),
            ch('Ice-cream sales and drowning rise together because of…', '*a confounding variable (hot weather)|ice cream causing drowning|chance only'),
            tf('Correlation does not prove causation.', true),
            mt('Match the term', 'base rate=how common something is|correlation=varying together|confounder=hidden factor affecting both'),
          ],
          t: ['Why do people often ignore base rates?', 'How can we tell if a new medicine really works?'],
          k: ['Explain the rare disease test example to a group with a diagram.'],
          m: ['Base Rate Investigation', 'a spreadsheet, scenario data', 'Model a diagnostic test with different base rates and accuracies | Calculate the probability of disease given a positive test | Graph how base rate changes the result | Write a report on implications for screening'],
          q: [
            ch('Two things varying together show…', '*correlation|causation always|nothing'),
            tf('Bayes\' theorem updates probabilities with evidence.', true),
            ch('A hidden factor affecting both variables is a…', '*confounding variable|constant|conclusion'),
          ],
          ms: ['Applies base rates', 'Reasons with Bayes informally', 'Distinguishes correlation and causation'],
        }),
      ]),
    ]),
  ],
});
