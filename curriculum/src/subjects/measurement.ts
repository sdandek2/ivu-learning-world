import { subject, S, U, L, ch, tf, od, mt, ct } from '../dsl.ts';

export default subject({
  id: 'measurement',
  description: 'Comparing, measuring and recording the world: length, mass, capacity, time and money, then data handling from tally charts to statistics and probability. Children measure real things before using formulas.',
  stages: [
    S('s4', 'Comparing sizes and using words for time.', [
      'Compare length, height and weight using words', 'Order objects by size', 'Use words for times of day',
    ], [
      U('compare-size', 'Longer, Taller, Heavier', 'Comparing things directly.', 'Length: long, short, longer, shorter; Height: tall, short; Weight: heavy, light; Capacity: full, empty, half full', [
        L('compare', 'Which Is Longer?', {
          o: ['Compare two objects by length, height or weight', 'Use comparison words like longer, taller, heavier'],
          p: ['Knows big and small'],
          e: [
            'To find which is longer, line up the ends at the same starting point. The one that sticks out further is longer.',
            'Tall and short are for height — how high something goes. Heavy and light are for weight — how hard something is to lift.',
            'A balance scale shows weight: the heavier side goes down; the lighter side goes up.',
          ],
          v: 'longer = more long than another; taller = more high than another; heavier = weighs more; compare = see how things are the same or different',
          x: ['A giraffe is taller than a goat.', 'A watermelon is heavier than a grape.'],
          s: ['The See-Saw Test', 'Momo the bear and Rangi the chameleon sat on a see-saw. Momo\'s side went down with a bump; Rangi went up high! "You\'re heavier," giggled Rangi. Then three friends climbed on Rangi\'s side, and slowly the see-saw balanced.'],
          a: [
            ch('Which is taller?', '*🦒 giraffe|🐐 goat'),
            ch('Which is heavier?', '*🍉 watermelon|🍇 grape'),
            ch('On a balance, the heavier side goes…', '*down ⬇️|up ⬆️'),
            od('Order from shortest to longest', 'ant 🐜|cat 🐱|crocodile 🐊'),
          ],
          t: ['Can something big be light? Think of a balloon.', 'How could you check which of two pencils is longer if they are in different rooms?'],
          k: ['Compare two family members\' heights and explain how you checked.'],
          m: ['🧪 Coat Hanger Balance', 'a coat hanger, two plastic cups, string, small objects', 'Hang two cups from the ends of a coat hanger | Hang it on a door handle | Put different objects in each cup | Say which is heavier and which is lighter'],
          q: [
            ch('Which is longer?', '*🐍 snake|🐛 caterpillar'),
            ch('Which is lighter?', '*🪶 feather|🧱 brick'),
            tf('To compare lengths, start both at the same line.', true),
          ],
          ms: ['Compares objects using correct vocabulary', 'Orders three objects by a measurable attribute', 'Uses fair comparison (same starting line)'],
        }),
      ]),
      U('time-words', 'Morning, Afternoon, Night', 'Talking about time and the order of our day.', 'Times of day: morning, afternoon, evening, night; Before and after; Days of the week', [
        L('my-day', 'The Order of My Day', {
          o: ['Name times of day and order daily events', 'Use the words before, after, first, then'],
          p: ['Can talk about daily routines'],
          e: [
            'A day has parts. Morning is when we wake up and eat breakfast. Afternoon comes after lunch. Evening is when the sky gets dark. Night is when we sleep.',
            'Events happen in order. We brush our teeth before bed. We eat lunch after breakfast.',
            'There are seven days in a week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. Then the week starts again.',
          ],
          v: 'morning = the start of the day; night = when it is dark and we sleep; before = earlier; after = later',
          x: ['The sun rises in the morning.', 'We see stars at night.'],
          s: ['Olu\'s Upside-Down Day', 'Olu the owl sleeps in the day and wakes at night! "Good morning!" Olu hooted as the moon came up. "That\'s night, silly," laughed Kiko. "For owls, it\'s our morning!" said Olu. Every animal has its own order of the day.'],
          a: [
            od('Put the day in order', 'wake up 🌅|eat lunch 🍛|see the stars 🌙'),
            ch('When do we usually sleep?', 'morning|*night|afternoon'),
            ch('What comes after Monday?', 'Sunday|*Tuesday|Friday'),
            ct('How many days in a week?', 7),
          ],
          t: ['Why do you think we sleep at night and not in the day?', 'What is your favourite part of the day and why?'],
          k: ['Tell a grown-up what you do in the morning, afternoon and evening.'],
          m: ['My Day Picture Clock', 'a paper plate, crayons, a paper arrow, a split pin', 'Divide the plate into four parts: morning, afternoon, evening, night | Draw what you do in each part | Attach an arrow with a split pin | Move the arrow through your day', "An adult should attach the split pin and check that no sharp point is exposed. Keep the pin away from mouths and eyes."],
          q: [
            od('Order', 'breakfast|lunch|dinner'),
            ch('Which day comes before Wednesday?', '*Tuesday|Thursday|Saturday'),
            tf('We see the sun rise in the evening.', false),
          ],
          ms: ['Sequences daily events correctly', 'Names times of day and days of the week', 'Uses before/after accurately'],
        }),
      ]),
    ]),
    S('s5', 'Measuring with non-standard units, telling time to the hour, and coins.', [
      'Measure using non-standard units (hands, blocks)', 'Tell time to the hour and half hour', 'Recognise coins and notes',
    ], [
      U('units', 'Measuring with Hands and Blocks', 'Measuring by counting equal units.', 'Non-standard units: hand spans, footsteps, cubes; Fair measuring: no gaps, no overlaps; Why we need standard units', [
        L('hand-spans', 'How Many Hands Long?', {
          o: ['Measure length using non-standard units without gaps or overlaps', 'Explain why standard units are needed'],
          p: ['Compares lengths directly'],
          e: [
            'We can measure by counting how many of something fit along an object: the table is 8 hand spans long; the rug is 12 footsteps.',
            'To measure fairly, place units end to end with no gaps and no overlaps, starting exactly at one end.',
            'But hands are different sizes! A grown-up\'s table might be 6 hand spans and yours 9 hand spans. That\'s why people invented standard units, like centimetres, that are the same for everyone.',
          ],
          v: 'measure = find the size of something; unit = the thing we count when measuring; gap = a space between units; standard = the same for everyone',
          x: ['A pencil is 15 paper clips long.', 'The door is 4 of Papa\'s hand spans wide but 7 of mine.'],
          s: ['The King\'s Bed', 'A king ordered a bed 6 feet long, measured with his own feet. The carpenter measured with his smaller feet. The bed came out too short! Then everyone agreed to use the same measuring stick. Now every bed fits.'],
          a: [
            ct('A book is ✋✋✋✋✋ long. How many hands?', 5),
            ch('When measuring, units should have…', 'big gaps|*no gaps and no overlaps|overlaps'),
            tf('Everyone\'s hand span is the same size.', false),
            ch('Why do we use centimetres?', '*They are the same for everyone|They are bigger|They are prettier'),
          ],
          t: ['Why did the king\'s bed turn out too short?', 'What else could you use as a measuring unit at home?'],
          k: ['Measure a table with your hands and a grown-up\'s hands, and explain why the numbers are different.'],
          m: ['Measure My Room', 'blocks, spoons or paper clips, paper', 'Choose a unit (blocks or spoons) | Measure five things in your room | Record each in a table | Ask someone else to measure with their feet and compare'],
          q: [
            ct('A spoon is 📎📎📎📎📎📎 paper clips long. How many?', 6),
            tf('We should start measuring at the very end of an object.', true),
            ch('Measuring with a grown-up\'s feet and a child\'s feet gives…', 'the same answer|*different answers'),
          ],
          ms: ['Measures accurately with non-standard units', 'Explains rules for fair measuring', 'Articulates the need for standard units'],
        }),
      ]),
      U('clocks-coins', 'Clocks and Coins', 'Reading o\'clock times and using money.', 'O\'clock and half past; Hour hand and minute hand; Indian coins and notes: ₹1, ₹2, ₹5, ₹10, ₹20', [
        L('oclock', 'O\'Clock Times', {
          o: ['Read and show times to the hour and half hour', 'Identify the hour hand and minute hand'],
          p: ['Counts to 12'],
          e: [
            'A clock has two hands. The short hand is the hour hand. The long hand is the minute hand.',
            'When the long hand points straight up at 12, it is "o\'clock". The short hand tells which hour: if it points to 3, it is 3 o\'clock.',
            'When the long hand points straight down at 6, it is "half past". Half past 3 means the hour hand is halfway between 3 and 4.',
          ],
          v: 'hour hand = the short hand; minute hand = the long hand; o\'clock = exactly on the hour; half past = 30 minutes after the hour',
          x: ['Long hand on 12, short hand on 7: 7 o\'clock.', 'Long hand on 6, short hand between 2 and 3: half past 2.'],
          s: ['Bolt\'s Bedtime', 'Bolt was told, "Bedtime is at 8 o\'clock." At 7 o\'clock Bolt looked: the short hand was on 7. "Not yet!" At half past 7, the long hand pointed down. "Nearly!" When the long hand reached 12 and the short hand reached 8, Bolt powered down to sleep.'],
          a: [
            ch('Long hand on 12, short hand on 4. Time?', '12 o\'clock|*4 o\'clock|half past 4'),
            ch('Which hand is the hour hand?', '*the short hand|the long hand'),
            ch('Long hand on 6 means…', 'o\'clock|*half past|quarter past'),
            tf('At 9 o\'clock, the minute hand points to 12.', true),
          ],
          t: ['Why do you think the hour hand moves so slowly?', 'What would happen if clocks had no numbers?'],
          k: ['Show times on a toy clock and tell someone what you usually do at each time.'],
          m: ['Paper Plate Clock', 'paper plate, card, split pin, pen', 'Write 1–12 around the plate | Cut a short and long hand and fix them with a split pin | Show the times of your meals and bedtime | Quiz a family member', "An adult should attach the split pin and check that no sharp point is exposed. Use child-safe scissors with supervision."],
          q: [
            ch('Long hand on 12, short hand on 10. Time?', '*10 o\'clock|12 o\'clock|half past 10'),
            ch('Half past 1: the long hand points to…', '12|*6|1'),
            tf('The minute hand is the long hand.', true),
          ],
          ms: ['Reads o\'clock and half past times', 'Shows given times on an analogue clock', 'Relates times to daily events'],
        }),
      ]),
    ]),
    S('s6', 'Standard units: centimetres, metres, kilograms, litres; time to 5 minutes; pictograms.', [
      'Measure with rulers in cm and m', 'Read scales in kg and litres', 'Collect data and make pictograms and tally charts',
    ], [
      U('standard-units', 'Rulers, Scales and Jugs', 'Using standard units and reading scales.', 'Length: cm, m; Mass: g, kg; Capacity: ml, l; Reading scales: counting in steps', [
        L('read-a-ruler', 'Measuring in Centimetres', {
          o: ['Measure lengths in cm using a ruler', 'Choose suitable units (cm, m, g, kg, ml, l)'],
          p: ['Understands standard units are needed'],
          e: [
            'A ruler shows centimetres (cm). Line up the end of the object with 0 — not with the edge of the ruler — and read the number where it ends.',
            '100 centimetres make 1 metre (m). We use cm for small things like pencils and m for big things like rooms.',
            'Mass is measured in grams (g) and kilograms (kg): 1000 g = 1 kg. Capacity — how much a container holds — is measured in millilitres (ml) and litres (l): 1000 ml = 1 l.',
          ],
          v: 'centimetre (cm) = a small unit of length; metre (m) = 100 cm; kilogram (kg) = 1000 grams; litre (l) = 1000 millilitres',
          x: ['A pencil ≈ 15 cm; a door ≈ 2 m tall.', 'A bag of rice: 5 kg; a water bottle: 1 litre.'],
          s: ['The Ruler Mistake', 'Kiko measured a crayon starting from the edge of the ruler and got 9 cm. Nova measured from the 0 mark and got 8 cm. "The ruler has a little space before the 0," Nova explained. "Always start at zero!"'],
          a: [
            mt('Match the object to the best unit', 'pencil=cm|room=m|apple=g|bucket of water=l'),
            ch('Where do you start measuring on a ruler?', 'the edge|*the 0 mark|the 1 mark'),
            ch('100 cm = ?', '10 m|*1 m|1 km'),
            tf('1 kg is heavier than 500 g.', true),
          ],
          t: ['Would you measure the distance to school in centimetres? Why not?', 'Why might a scale show 0 when nothing is on it?'],
          k: ['Measure three things with a ruler and explain how you did it.'],
          m: ['Kitchen Measuring Lab', 'ruler, kitchen scale, measuring jug, water', 'Measure 3 utensils in cm | Weigh 3 foods in g or kg | Measure water in 3 cups in ml | Record everything in a table and find the biggest of each'],
          q: [
            ch('1 litre = ?', '100 ml|*1000 ml|10 ml'),
            ch('Best unit for a person\'s mass:', 'g|*kg|cm'),
            ch('A line starts at 0 and ends at 7 on a ruler. Length?', '6 cm|*7 cm|8 cm'),
          ],
          ms: ['Measures accurately to the nearest cm', 'Chooses appropriate units', 'Reads simple scales'],
        }),
      ]),
      U('first-data', 'Tally Charts and Pictograms', 'Collecting and showing information.', 'Collecting data: questions and tallies; Pictograms: one picture per item or per 2; Reading and asking questions about data', [
        L('tally-pictogram', 'Tallies and Pictograms', {
          o: ['Record data using tally marks', 'Make and read a pictogram'],
          p: ['Counts in 5s'],
          e: [
            'Data is information we collect, like everyone\'s favourite fruit. We can record it quickly with tally marks: one line for each answer, and every fifth line crosses the other four, making a bundle of 5.',
            'A pictogram shows data using pictures. Each picture might stand for 1 — or sometimes 2 — so always read the key.',
            'We can ask questions about data: Which fruit is most popular? How many more people chose mango than banana?',
          ],
          v: 'data = information collected; tally = a mark used to count; pictogram = a chart using pictures; key = shows what each picture stands for',
          x: ['𝍸 means 5.', 'Key: 🍎 = 2 people. 🍎🍎🍎 = 6 people.'],
          s: ['The Favourite Fruit Survey', 'Zuri asked everyone in Globe Garden their favourite fruit. She made a tally: mango had two bundles of five and two more — 12! Banana had 7, apple 5. Then she drew a pictogram with mango pictures. "Mango wins!" everyone cheered — except Kiko, who loved apples.'],
          a: [
            ct('Count the tally: |||| |||| ||| (a bundle of five, another bundle of five, then three)', 13),
            ch('Key: ⭐ = 2. ⭐⭐⭐ = ?', '3|*6|5'),
            ch('Mango 12, banana 7. How many more chose mango?', '4|*5|19'),
            tf('The key tells us what each picture means.', true),
          ],
          t: ['Why do we cross every fifth tally mark?', 'Would a survey of 5 people be enough to decide the most popular fruit in India?'],
          k: ['Ask 10 people a question, then explain your results to someone.'],
          m: ['Family Survey Pictogram', 'paper, pens, stickers', 'Choose a question (favourite colour, pet, sport) | Ask at least 10 people and tally answers | Draw a pictogram with a key | Write three things your data shows'],
          q: [
            ct('How many tally marks in a bundle?', 5),
            ch('Key: 🙂 = 1 child. 🙂🙂🙂🙂 = ?', '*4|8|2'),
            ch('A pictogram uses…', 'only numbers|*pictures to show data|words only'),
          ],
          ms: ['Records data with tallies correctly', 'Constructs pictograms with a key', 'Answers comparison questions about data'],
        }),
      ]),
    ]),
    S('s7', 'Converting units, time and timetables, money calculations, and bar charts.', [
      'Convert between units of length, mass and capacity', 'Read 24-hour times and timetables', 'Draw and interpret bar charts',
    ], [
      U('time-timetables', 'Time and Timetables', '12-hour and 24-hour time, durations and timetables.', '24-hour clock; Durations: counting on; Timetables: trains and buses', [
        L('train-timetable', 'Reading a Train Timetable', {
          o: ['Convert between 12-hour and 24-hour time', 'Calculate durations using timetables'],
          p: ['Reads time to the minute'],
          e: [
            'The 24-hour clock numbers hours from 00 to 23, so there is no need for am and pm. 3:45 pm is 15:45. Midnight is 00:00.',
            'To convert a pm time, add 12 to the hour (except 12 pm, which stays 12:00). 7:20 pm → 19:20.',
            'To find a duration, count on: from 10:45 to 13:20 is 15 minutes to 11:00, 2 hours to 13:00, and 20 minutes more = 2 hours 35 minutes.',
          ],
          v: '24-hour clock = a time system using hours 00–23; duration = how long something takes; timetable = a table showing when things happen; am/pm = before/after midday',
          x: ['Indian Railways timetables use 24-hour time.', 'A film from 18:30 to 20:45 lasts 2 h 15 min.'],
          s: ['The Missed Train', 'Kiko read "Departs 17:10" and thought it meant 7:10. Kiko arrived at 7 in the evening — two hours late! Nova explained: "17:10 is 10 past 5 pm. Subtract 12 from hours after 12 to get pm times." Next time Kiko was early.'],
          a: [
            ch('4:30 pm in 24-hour time:', '04:30|*16:30|14:30'),
            ch('21:15 is…', '*9:15 pm|9:15 am|11:15 pm'),
            ch('Duration from 09:40 to 11:10?', '1 h 70 min|*1 h 30 min|2 h 30 min'),
            tf('00:00 is midnight.', true),
          ],
          t: ['Why do railways and airlines prefer the 24-hour clock?', 'If a journey crosses midnight, how do you calculate its duration?'],
          k: ['Explain to someone how you would plan a trip using a real bus or train timetable.'],
          m: ['Plan a Day Trip', 'a printed or copied bus/train timetable (real or invented), paper', 'Choose a departure and destination | Find a train that gets you there before 11:00 | Calculate journey time | Plan activities and the return trip, keeping a schedule in 24-hour time'],
          q: [
            ch('11:05 pm =', '11:05|*23:05|13:05'),
            ch('From 14:50 to 15:25 is…', '25 min|*35 min|75 min'),
            ch('06:00 is…', '*6 am|6 pm'),
          ],
          ms: ['Converts between 12- and 24-hour times', 'Calculates durations including across hours', 'Interprets real timetables'],
        }),
      ]),
      U('bar-charts', 'Bar Charts', 'Showing and comparing data with bars.', 'Axes, scales and labels; Drawing bar charts; Interpreting and comparing', [
        L('bar-chart', 'Building a Bar Chart', {
          o: ['Draw a bar chart with labelled axes and a suitable scale', 'Interpret bar charts to answer comparison questions'],
          p: ['Makes tally charts and pictograms'],
          e: [
            'A bar chart shows data with bars. The height of each bar shows the amount. Bars should be the same width with equal gaps.',
            'The vertical axis needs a scale — counting in 1s, 2s, 5s or 10s — chosen so the tallest bar fits. Always label both axes and give the chart a title.',
            'Bar charts make comparison easy: we can see at a glance which is biggest and smallest, and calculate differences.',
          ],
          v: 'axis = a reference line on a graph; scale = the numbers marked on an axis; bar chart = a graph using bars to show amounts; interpret = explain what data shows',
          x: ['Rainfall in a month: a bar for each week.', 'Scale in 5s: a bar reaching halfway between 15 and 20 shows 17 or 18 (estimate).'],
          s: ['The Squashed Chart', 'Bolt drew a bar chart of cars passing the school: 48, 12, 35. Bolt counted 1 square per car — the paper wasn\'t tall enough! Rangi suggested a scale of 5 per square. The chart fitted neatly, and everyone could see Monday was the busiest day.'],
          a: [
            ch('A chart\'s values go up to 80. A sensible scale is…', 'counting in 1s|*counting in 10s|counting in 100s'),
            ch('What must every bar chart have?', '*a title and labelled axes|colours only|pictures'),
            tf('Taller bars show bigger amounts.', true),
            ch('Bars show 25 and 40. The difference is…', '*15|65|10'),
          ],
          t: ['How could a chart be misleading if the scale doesn\'t start at 0?', 'When is a pictogram better than a bar chart?'],
          k: ['Show someone a bar chart and explain three things it tells you.'],
          m: ['Weather Bar Chart', 'a notebook, a ruler, a jar for rain (optional)', 'Record the daily maximum temperature (from a thermometer or local forecast) for two weeks | Draw a bar chart with a suitable scale | Write about the warmest and coolest days | Compare week 1 and week 2'],
          q: [
            ch('The horizontal and vertical lines on a graph are…', '*axes|bars|keys'),
            tf('All bars in a bar chart should be the same width.', true),
            ch('If a scale counts in 2s, halfway between 6 and 8 is…', '6.5|*7|7.5'),
          ],
          ms: ['Constructs accurate bar charts with appropriate scales', 'Interprets and compares data', 'Identifies misleading representations'],
        }),
      ]),
    ]),
    S('s9', 'Averages, line graphs, probability, and compound units.', [
      'Calculate mean, median, mode and range', 'Interpret line graphs and pie charts', 'Describe and calculate simple probabilities',
    ], [
      U('averages', 'Averages and Spread', 'Summarising data with one number — and knowing its limits.', 'Mean, median, mode; Range; Choosing the best average', [
        L('mean-median-mode', 'Mean, Median, Mode', {
          o: ['Calculate mean, median, mode and range', 'Choose the most appropriate average for a data set'],
          p: ['Interprets bar charts'],
          e: [
            'An average summarises data with one typical value. The mean adds all values and divides by how many there are. The median is the middle value when values are in order. The mode is the most common value.',
            'The range (largest − smallest) shows how spread out the data is.',
            'Averages can mislead. Five people earning ₹20,000, ₹22,000, ₹21,000, ₹23,000 and ₹5,00,000 have a mean of over ₹1,17,000 — but the median, ₹22,000, describes a typical person far better. Extreme values (outliers) pull the mean.',
          ],
          v: 'mean = total ÷ number of values; median = middle value in order; mode = most frequent value; range = largest − smallest; outlier = a value far from the rest',
          x: ['Data 3, 5, 5, 7, 10: mean 6, median 5, mode 5, range 7.', 'Shoe shops care about the mode size most.'],
          s: ['The Average Height Trick', 'A basketball coach said, "Our team\'s average height is 160 cm." A rival found that four players were about 140 cm and one was 240 cm! The median was 140 cm. "Choosing which average to report," said Nova, "can change the story."'],
          a: [
            ch('Mean of 2, 4, 6, 8?', '4|*5|6'),
            ch('Median of 1, 3, 9, 10, 12?', '3|*9|7'),
            ch('Mode of 4, 7, 7, 2, 9?', '4|*7|9'),
            ch('Range of 15, 3, 22, 9?', '13|*19|22'),
          ],
          t: ['Why might a news report choose the mean rather than the median, or vice versa?', 'Can data have more than one mode?'],
          k: ['Explain to someone, with an example, why the median can be more honest than the mean.'],
          m: ['Family Data Investigation', 'a question (e.g. hours of sleep, shoe sizes), notebook', 'Collect data from at least 10 people | Calculate mean, median, mode and range | Identify any outliers | Write which average best describes the data and why'],
          q: [
            ch('Mean of 10, 20, 30?', '*20|30|60'),
            tf('An outlier can pull the mean far from typical values.', true),
            ch('Middle value when data is ordered:', 'mean|*median|mode'),
          ],
          ms: ['Calculates all three averages and range', 'Selects and justifies the appropriate average', 'Recognises the effect of outliers'],
        }),
      ]),
      U('probability', 'Probability', 'How likely is it?', 'Probability scale 0–1; Equally likely outcomes; Experiments vs theory', [
        L('how-likely', 'How Likely Is It?', {
          o: ['Place events on a probability scale from 0 to 1', 'Calculate probabilities of equally likely outcomes and compare with experiments'],
          p: ['Understands fractions and decimals'],
          e: [
            'Probability measures how likely something is, from 0 (impossible) to 1 (certain). ½ means even chance.',
            'For equally likely outcomes: probability = favourable outcomes ÷ total outcomes. A fair die: P(rolling a 4) = 1/6. P(even number) = 3/6 = ½.',
            'Experiments give estimates. Toss a coin 10 times and you might get 7 heads. Toss it 1000 times and the proportion of heads usually gets close to ½. More trials give more reliable estimates.',
          ],
          v: 'probability = a measure of how likely an event is, from 0 to 1; outcome = a possible result; equally likely = having the same chance; relative frequency = how often something happened in an experiment ÷ number of trials',
          x: ['P(sun rising tomorrow) ≈ 1.', 'A bag with 3 red and 1 blue marble: P(red) = ¾.'],
          s: ['The Lucky Coin', 'Kiko tossed a coin five times and got five heads. "It\'s a lucky heads coin!" Nova tossed it 200 more times: 103 heads, 97 tails. "Short streaks happen by chance," Nova said. "Over many tosses, it\'s fair."'],
          a: [
            mt('Match the event to its probability', 'rolling a 7 on a normal die=0|tossing heads=½|the sun setting today=1'),
            ch('A fair die: P(rolling a 3)?', '1/3|*1/6|1/2'),
            ch('Bag: 2 red, 3 green. P(green)?', '2/5|*3/5|3/2'),
            tf('After five heads in a row, tails is more likely next.', false, 'A fair coin has no memory; each toss is still ½.'),
          ],
          t: ['Why do casinos always make money in the long run?', 'Is a weather forecast of "70% chance of rain" wrong if it doesn\'t rain?'],
          k: ['Explain the "gambler\'s fallacy" to someone using a coin.'],
          m: ['🧪 Dice Experiment', 'a die, tally chart, calculator', 'Predict how often each number will appear in 60 rolls | Roll 60 times and tally | Calculate relative frequencies | Combine results with family to make 300 rolls and compare with 1/6'],
          q: [
            ch('Impossible events have probability…', '*0|½|1'),
            ch('A spinner has 4 equal parts, 1 yellow. P(yellow)?', '*¼|½|1'),
            tf('More trials usually give a better estimate of probability.', true),
          ],
          ms: ['Calculates theoretical probabilities', 'Conducts experiments and compares with theory', 'Explains common misconceptions about chance'],
        }),
      ]),
    ]),
    S('s12', 'Statistical investigation, sampling and bias, correlation, and compound measures.', [
      'Plan statistical investigations with appropriate sampling', 'Interpret scatter graphs and correlation', 'Use compound measures: speed, density, rates',
    ], [
      U('statistics', 'Statistical Thinking', 'Sampling, bias and correlation.', 'Populations and samples; Bias in data collection; Scatter graphs; Correlation vs causation', [
        L('correlation-causation', 'Correlation Is Not Causation', {
          o: ['Interpret scatter graphs and describe correlation', 'Explain why correlation does not prove causation'],
          p: ['Calculates averages; reads graphs'],
          e: [
            'A scatter graph plots pairs of values to see if they are related. If both tend to increase together, there is a positive correlation; if one increases as the other decreases, negative correlation; if no pattern, no correlation.',
            'Correlation does not prove causation. Ice-cream sales and drowning incidents both rise in summer — but ice cream doesn\'t cause drowning. A third factor (hot weather) drives both.',
            'Good investigations use fair samples. A sample is biased if some groups are more likely to be included — like surveying only people at a gym about exercise habits.',
          ],
          v: 'correlation = a relationship between two variables; causation = one thing directly causing another; confounding variable = a hidden factor affecting both; sample = a part of a population studied',
          x: ['Height and shoe size: positive correlation.', 'Temperature and heating bills: negative correlation.'],
          s: ['The Firefighter Puzzle', 'A student found that fires with more firefighters present caused more damage. "Firefighters cause damage!" he claimed. His teacher asked: what makes a fire need more firefighters? A bigger fire — which also causes more damage. The hidden variable explained it all.'],
          a: [
            mt('Match the pair to the correlation', 'hours of revision and test score=positive|outside temperature and heater use=negative|shoe size and favourite colour=none'),
            ch('Ice cream sales and sunburn both rise. The likely cause is…', 'ice cream causes sunburn|*hot sunny weather affects both|sunburn causes ice cream sales'),
            tf('A strong correlation proves one thing causes the other.', false),
            ch('Surveying only gym members about exercise is…', '*biased|random|perfect'),
          ],
          t: ['How could scientists test whether something actually causes an effect?', 'Find a news headline that might confuse correlation and causation.'],
          k: ['Explain correlation vs causation to someone using an example you invent.'],
          m: ['Mini Statistical Investigation', 'a question with two measurable variables, data from 15+ people or a reliable dataset', 'Write a hypothesis | Plan a fair sample | Collect data and draw a scatter graph | Describe the correlation | Discuss possible confounding variables and whether causation is supported'],
          q: [
            ch('Points sloping down from left to right show…', 'positive correlation|*negative correlation|no correlation'),
            ch('A hidden factor affecting both variables is a…', '*confounding variable|sample|mode'),
            tf('A random sample reduces bias.', true),
          ],
          ms: ['Describes correlation from scatter graphs', 'Distinguishes correlation from causation with examples', 'Identifies sampling bias'],
        }),
      ]),
      U('compound-measures', 'Compound Measures', 'Speed, density and rates.', 'Speed = distance ÷ time; Density = mass ÷ volume; Unit conversions and rates', [
        L('speed-density', 'Speed and Density', {
          o: ['Calculate speed, distance and time', 'Calculate and interpret density'],
          p: ['Converts units; works with formulas'],
          e: [
            'A compound measure combines two measures. Speed = distance ÷ time. A train covering 300 km in 4 hours has an average speed of 75 km/h.',
            'Density = mass ÷ volume. Water has a density of about 1 g/cm³. Objects denser than water sink; less dense objects float.',
            'Units matter: convert before calculating. 90 km/h = 90,000 m ÷ 3600 s = 25 m/s.',
          ],
          c: [['science', 'Pure water at about 4 °C has a density very close to 1 g/cm³; ice is less dense (about 0.92 g/cm³), which is why icebergs float.']],
          v: 'speed = distance travelled per unit of time; density = mass per unit of volume; average speed = total distance ÷ total time; rate = a quantity per unit of another',
          x: ['Walk 6 km in 1.5 h → 4 km/h.', 'A 200 cm³ block of mass 540 g has density 2.7 g/cm³ (aluminium).'],
          s: ['Archimedes and the Crown', 'A famous story — reported by the Roman writer Vitruvius centuries later, so historians treat the details with caution — tells how Archimedes checked whether a king\'s crown was pure gold by comparing the water it displaced with that of pure gold of the same mass. A different volume meant a different density, revealing the fraud.'],
          a: [
            ch('120 km in 2 hours. Speed?', '*60 km/h|240 km/h|30 km/h'),
            ch('Mass 50 g, volume 25 cm³. Density?', '*2 g/cm³|0.5 g/cm³|75 g/cm³'),
            ch('36 km/h in m/s?', '*10 m/s|36 m/s|3.6 m/s'),
            tf('An object with density less than water will float in water.', true),
          ],
          t: ['Why is average speed for a journey not the average of the speeds of each part?', 'How could you find the density of an irregular stone?'],
          k: ['Explain how density decides whether things float, using examples from the kitchen.'],
          m: ['🧪 Density Detectives', 'kitchen scale, measuring jug, water, objects (stone, apple, eraser, coin)', 'Weigh each object | Find its volume by water displacement | Calculate density | Predict and test which will float'],
          q: [
            ch('Time to travel 150 km at 50 km/h?', '2 h|*3 h|4 h'),
            ch('Density = ?', 'mass × volume|*mass ÷ volume|volume ÷ mass'),
            tf('Ice floats because it is less dense than liquid water.', true),
          ],
          ms: ['Calculates with compound measures including conversions', 'Explains density and floating', 'Solves multi-step rate problems'],
        }),
      ]),
    ]),
  ],
});
