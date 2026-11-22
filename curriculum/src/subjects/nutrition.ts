import { subject, S, U, L, ch, tf, od, mt } from '../dsl.ts';

export default subject({
  id: 'nutrition',
  description: 'Food, nutrition and healthy eating: food groups, a balanced thali, water, where food comes from, nutrients and their jobs, reading labels, food safety, and the science and culture of diets. Non-judgemental about bodies; respectful of vegetarian, non-vegetarian and religious food practices.',
  stages: [
    S('s4', 'Healthy foods, drinking water, and trying new foods.', [
      'Name some healthy foods', 'Know water is the best drink', 'Try new fruits and vegetables',
    ], [
      U('everyday-foods', 'Everyday Foods and Sometimes Foods', 'Some foods help us grow every day; some are for sometimes.', 'Fruits and vegetables; Grains and dals; Sometimes foods: sweets, fried snacks, fizzy drinks', [
        L('grow-foods', 'Foods That Help Me Grow', {
          o: ['Name everyday foods that help us grow', 'Know that sweets and fried snacks are "sometimes" foods'],
          p: ['Can name foods they eat'],
          e: [
            'Food gives our body energy to play and helps us grow. Fruits and vegetables, rice, roti, dal, milk, curd, eggs and nuts are everyday foods that keep us strong.',
            'Sweets, chips, fried snacks and fizzy drinks are "sometimes foods". They are fine as a treat, but they don\'t help us grow much, and too much sugar can hurt our teeth.',
            'Eating many different colours of fruits and vegetables — like a rainbow — gives our body lots of good things.',
          ],
          v: 'healthy = good for your body; energy = what your body uses to move and play; treat = something special you have only sometimes; vegetable = a plant part we eat, like a carrot',
          x: ['A banana is a great snack.', 'Ladoos are a festival treat — a sometimes food.'],
          s: ['Momo\'s Rainbow Plate', 'Momo wanted only jalebis for lunch. Grandmother made a rainbow plate instead: red tomato, orange carrot, yellow dal, green spinach, purple brinjal and white rice. Momo tried each colour — and found a new favourite: carrots! After lunch, Momo had one small jalebi as a treat.'],
          a: [
            ch('Which is an everyday food?', '*🍎 apple|🍭 lollipop|🥤 fizzy drink'),
            ch('Which is a sometimes food?', 'spinach|dal|*chips'),
            tf('Eating many colours of fruits and vegetables is good for us.', true),
            mt('Match the colour', '🥕 carrot=orange|🥦 broccoli=green|🍅 tomato=red'),
          ],
          t: ['Why do you think sweets taste so good but aren\'t everyday foods?', 'What new vegetable would you like to try?'],
          k: ['Tell a grown-up about your favourite healthy food and why you like it.'],
          m: ['Rainbow Plate Challenge', 'paper plate, crayons or real food with a grown-up', 'Draw (or make with a grown-up) a plate with a food of every colour | Name each food | Try one new food this week | Draw a smiley if you liked it'],
          q: [
            ch('Which drink is best when you\'re thirsty?', '*water|cola|sugary juice'),
            ch('Which helps you grow?', '*dal and rice|candy floss|chips'),
            tf('Too many sweets can hurt our teeth.', true),
          ],
          ms: ['Distinguishes everyday and sometimes foods', 'Names varied healthy foods', 'Willing to try new foods'],
        }),
      ]),
      U('water-drink', 'Water Is Wonderful', 'Our bodies need water every day.', 'Why we need water; When to drink more: hot days, playing; Clean drinking water', [
        L('drink-water', 'Sip, Sip, Hooray!', {
          o: ['Explain why our bodies need water', 'Know when to drink more water'],
          p: ['Knows living things need water'],
          e: [
            'More than half of your body is water! You lose water when you sweat, breathe and go to the toilet, so you need to drink more every day.',
            'Drink more water on hot days and when you run and play. If you feel thirsty, tired or have a headache, your body might need water.',
            'Water is the best drink. It has no sugar, so it\'s good for your teeth too.',
          ],
          v: 'thirsty = feeling that you need a drink; sweat = water that comes out of your skin when you\'re hot; sip = a small drink',
          x: ['Carrying a water bottle to school.', 'Drinking water after playing football.'],
          s: ['The Droopy Kiko', 'On a hot day, Kiko ran and played until Kiko felt droopy and grumpy. "Have you had water?" asked Tara. Kiko had forgotten! A few cool sips later, Kiko felt bouncy again. "My body was asking for water," Kiko said.'],
          a: [
            ch('When should you drink more water?', '*on hot days and after playing|only at night|never'),
            tf('Our bodies are more than half water.', true),
            ch('Which drink has no sugar?', '*water|soda|sweet lassi'),
            ch('Feeling thirsty means your body…', '*needs water|needs sleep|needs a toy'),
          ],
          t: ['Where does the water go when we sweat?', 'Why might we need more water in summer than in winter?'],
          k: ['Tell someone three times today when you will drink water.'],
          m: ['My Water Bottle Chart', 'paper, stickers or crayons', 'Draw 6 water drops on a chart | Colour one each time you drink a glass of water | Check how many by bedtime | Try to colour them all for a week'],
          q: [
            ch('The best drink for teeth is…', '*water|cola|candy drink'),
            tf('We lose water when we sweat.', true),
            ch('After running you should…', '*drink some water|eat chips|sleep immediately'),
          ],
          ms: ['Explains why water matters', 'Identifies when to drink more', 'Chooses water as main drink'],
        }),
      ]),
    ]),
    S('s5', 'Food groups and the balanced thali.', [
      'Name food groups and what they do', 'Plan a balanced meal', 'Know where foods come from',
    ], [
      U('food-groups', 'Food Groups', 'Different foods do different jobs.', 'Energy foods: grains; Body-building foods: dal, milk, eggs; Protective foods: fruits, vegetables; Fats in small amounts', [
        L('three-jobs', 'Go, Grow and Glow Foods', {
          o: ['Sort foods into energy, body-building and protective groups', 'Explain each group\'s job'],
          p: ['Names everyday foods'],
          e: [
            'Energy ("go") foods give us power to run and think: rice, roti, millets, potatoes. Body-building ("grow") foods help muscles and bones grow: dal, beans, milk, curd, paneer, eggs, fish, meat and nuts.',
            'Protective ("glow") foods keep us healthy and help fight illness: fruits and vegetables full of vitamins and minerals.',
            'We need a little fat too, from oil, ghee or nuts, but only small amounts. Eating from all groups every day is called a balanced diet.',
          ],
          v: 'energy food = food that gives us power; body-building food = food that helps us grow strong; protective food = food that keeps us healthy; balanced diet = eating the right mix of foods',
          x: ['Roti is an energy food.', 'Dal is a body-building food.'],
          s: ['The Three Friends on the Plate', 'Roti said, "I give you energy to run!" Dal said, "I help your muscles grow!" Spinach said, "I keep you healthy and glowing!" They argued about who was most important — until Kiko said, "I need all three of you, every day!"'],
          a: [
            mt('Match the food to its group', 'rice=energy (go)|paneer=body-building (grow)|orange=protective (glow)'),
            ch('Which is a body-building food?', 'potato|*dal|cucumber'),
            ch('Protective foods are mostly…', '*fruits and vegetables|sweets|oils'),
            tf('A balanced diet includes all the food groups.', true),
          ],
          t: ['What might happen if someone ate only energy foods?', 'Can one food belong to more than one group?'],
          k: ['Look at your dinner and tell someone which food group each item belongs to.'],
          m: ['Food Group Sorting Mat', 'three plates labelled go, grow and glow, food pictures or real foods', 'Label three plates | Sort foods or pictures onto the right plate | Check that your family dinner has something from each | Draw your favourite balanced meal'],
          q: [
            ch('Which gives quick energy?', '*rice|spinach|curd'),
            ch('Eggs, milk and dal help us…', '*grow|sleep|see in the dark'),
            tf('We need only small amounts of fat.', true),
          ],
          ms: ['Classifies foods into groups', 'Explains group functions', 'Identifies balanced meals'],
        }),
      ]),
      U('thali', 'The Balanced Thali', 'An Indian thali can be a perfect balanced meal.', 'Parts of a thali; Regional thalis; Portion sizes', [
        L('build-thali', 'Build a Balanced Thali', {
          o: ['Plan a balanced thali with all food groups', 'Compare thalis from different regions'],
          p: ['Knows food groups'],
          e: [
            'A traditional Indian thali often includes a grain (rice or roti), a dal or other protein, vegetables (sabzi), curd, a salad and sometimes a small sweet. This can make a very balanced meal.',
            'Thalis differ across India: a Gujarati thali may have dhokla and kadhi; a South Indian meal may have rice, sambar, rasam and poriyal; a Punjabi thali may have makki roti and sarson saag.',
            'A good guide: about half the plate vegetables and fruit, a quarter grains, a quarter protein, with water to drink.',
          ],
          v: 'thali = a plate with several dishes; portion = the amount of food served; regional = from a particular area; sabzi = a cooked vegetable dish',
          x: ['Sambar adds protein (dal) and vegetables to a South Indian meal.', 'Curd adds calcium for bones.'],
          s: ['The Thali Tour', 'Zuri visited friends across India. In Gujarat she ate dhokla and kadhi; in Tamil Nadu, sambar and rasam with rice; in Punjab, makki ki roti with sarson ka saag. "Every thali is different," Zuri said, "but each one has grains, protein and vegetables!"'],
          a: [
            mt('Match the region to a dish', 'Gujarat=dhokla|Tamil Nadu=sambar|Punjab=sarson ka saag'),
            ch('About how much of the plate should be vegetables and fruit?', 'a tiny bit|*about half|none'),
            tf('Curd gives calcium for strong bones.', true),
            ch('Which makes a thali more balanced?', '*adding a vegetable dish|adding three sweets|removing dal'),
          ],
          t: ['What is your family\'s favourite thali? Is it balanced?', 'Why do you think different regions have different foods?'],
          k: ['Describe a balanced thali to someone and explain each part\'s job.'],
          m: ['Design a Thali', 'a paper plate divided into sections, crayons or real food with an adult', 'Plan a thali from your region with all food groups | Draw or help cook it | Label each dish\'s food group | Compare it with a thali from another region'],
          q: [
            ch('Which dish adds protein to a thali?', '*dal|plain rice|pickle'),
            ch('A quarter of the plate should be…', '*protein foods|sweets|fried snacks'),
            tf('Thalis differ across regions of India.', true),
          ],
          ms: ['Plans balanced regional meals', 'Explains portion guidelines', 'Appreciates regional diversity'],
        }),
      ]),
    ]),
    S('s6', 'Where food comes from and food safety.', [
      'Trace foods from farm to plate', 'Practise food hygiene', 'Read simple food labels',
    ], [
      U('farm-to-plate', 'From Farm to Plate', 'Many people help bring food to us.', 'Farmers, transporters, markets, cooks; Seasonal and local food; Food waste', [
        L('food-journey', 'The Journey of Rice', {
          o: ['Trace a food from farm to plate', 'Explain why reducing food waste matters'],
          p: ['Knows plants and crops'],
          e: [
            'Rice is grown by farmers in flooded fields, harvested, threshed to remove the grains, dried, husked and polished in mills, packed, transported, sold in shops and finally cooked in our kitchens.',
            'Many people work along this chain: farmers, labourers, mill workers, truck drivers, shopkeepers and cooks.',
            'Wasting food wastes all their work, plus water, land and energy. Taking only what we can eat and using leftovers helps.',
          ],
          v: 'harvest = gather a ripe crop; mill = a place where grain is processed; food waste = food that is thrown away; seasonal = available at a particular time of year',
          x: ['Mangoes are seasonal in summer.', 'Leftover rice can become lemon rice the next day.'],
          s: ['The Grain of Rice\'s Story', 'A grain of rice told its story: "I grew in a green paddy field in the monsoon. A farmer harvested me. A mill polished me. A truck carried me to the city. A shopkeeper sold me. A cook made me fluffy and warm." Then it whispered, "Please don\'t leave me on the plate!"'],
          a: [
            od('Rice journey', 'grown in a field|harvested|milled|sold in a shop|cooked'),
            ch('Why should we avoid wasting food?', '*It wastes people\'s work, water and land|Food grows back instantly|It doesn\'t matter'),
            tf('Many people help bring food to our plates.', true),
            ch('Mangoes in India are mainly in season in…', '*summer|winter'),
          ],
          t: ['How many people do you think helped make your breakfast?', 'Why might local, seasonal food be better for the planet?'],
          k: ['Thank someone who helped make your meal, and explain the journey of one food on the plate.'],
          m: ['Food Journey Comic', 'paper, pencils', 'Choose a food (milk, wheat, a banana) | Draw six panels showing its journey to you | Add the people involved | Add a final panel with a tip to avoid wasting it'],
          q: [
            ch('Rice grows in…', '*paddy fields|trees|the sea'),
            ch('Using leftovers helps…', '*reduce food waste|make more waste'),
            tf('Food waste also wastes water and energy.', true),
          ],
          ms: ['Sequences a food supply chain', 'Explains impacts of food waste', 'Practises reducing waste'],
        }),
      ]),
      U('food-safety', 'Safe Food', 'Keeping food clean and safe to eat.', 'Handwashing; Washing fruits and vegetables; Storing food; Signs of spoiled food', [
        L('safe-kitchen', 'Kitchen Safety Heroes', {
          o: ['Follow basic food hygiene rules', 'Recognise signs that food has spoiled'],
          p: ['Knows germs can make us ill'],
          e: [
            'Germs on hands and food can cause tummy illnesses. Wash hands with soap before eating and cooking. Wash fruits and vegetables with clean water.',
            'Keep cooked food covered so flies can\'t land on it. Store milk, curd and leftovers in a cool place or fridge. Keep raw meat separate from food that won\'t be cooked.',
            'Spoiled food may smell bad, look slimy or mouldy, or taste sour when it shouldn\'t. When in doubt, ask an adult — and don\'t eat it.',
          ],
          v: 'hygiene = keeping clean to stay healthy; spoiled = gone bad and unsafe; mould = fuzzy growth on old food; germs = tiny living things that can make us sick',
          x: ['Covering food with a lid or net keeps flies away.', 'Mouldy bread should not be eaten.'],
          s: ['The Fly Who Wasn\'t Invited', 'At a picnic, a fly buzzed over to the uncovered samosas. Rangi quickly put a net cover over them. "Flies walk on dirty places," Rangi explained, "and carry germs to food." Kiko washed hands before eating, and everyone enjoyed a safe, happy picnic.'],
          a: [
            ch('Before eating, you should…', '*wash hands with soap|touch the dog|skip washing'),
            ch('Which shows food may have spoiled?', '*a bad smell or mould|a nice colour|being warm and fresh'),
            tf('Covering food keeps flies away.', true),
            ch('Raw meat should be kept…', '*separate from ready-to-eat food|on top of salads|outside in the sun'),
          ],
          t: ['Why are tummy illnesses more common in hot weather?', 'Why do we wash fruit even if it looks clean?'],
          k: ['Show someone the steps of washing hands properly before a meal.'],
          m: ['🧪 Bread Mould Observation', 'two slices of bread, two zip bags, a marker', 'Put one slice in a bag after touching it with unwashed hands, and one with washed hands | Seal and label them | Observe for a week without opening | Draw the results and explain (then throw the bags away unopened)'],
          q: [
            ch('Mouldy food should be…', '*thrown away, not eaten|eaten quickly|shared'),
            tf('Germs can spread from hands to food.', true),
            ch('Milk should be stored…', '*somewhere cool|in the sun|in a hot car'),
          ],
          ms: ['Applies food hygiene rules', 'Recognises spoiled food', 'Explains how germs spread'],
        }),
      ]),
    ]),
    S('s7', 'Nutrients and their jobs; deficiency and balanced diets.', [
      'Name nutrients and their functions', 'Explain deficiency diseases', 'Plan a balanced diet for a day',
    ], [
      U('nutrients', 'Nutrients', 'Carbohydrates, proteins, fats, vitamins, minerals, fibre and water.', 'Macronutrients: carbohydrates, proteins, fats; Micronutrients: vitamins A, C, D, iron, calcium; Fibre and water', [
        L('nutrient-jobs', 'What Each Nutrient Does', {
          o: ['Name the main nutrients and their functions', 'Identify food sources of each'],
          p: ['Knows food groups'],
          e: [
            'Carbohydrates (grains, potatoes) are the main energy source. Proteins (dal, milk, eggs, paneer, meat, soya) build and repair the body. Fats (oils, nuts, ghee) store energy and help absorb some vitamins.',
            'Vitamins and minerals are needed in small amounts: vitamin A (carrots, mangoes) for eyes; vitamin C (amla, citrus) for healing and immunity; vitamin D (sunlight, fortified milk) and calcium (milk, ragi) for bones; iron (leafy greens, jaggery, dals) for healthy blood.',
            'Fibre (whole grains, vegetables, fruit) helps digestion. Water is needed for almost every body process.',
          ],
          c: [['evidence', 'National surveys in India have found anaemia (often linked to iron deficiency) is common among children and women, which is why iron-rich foods and supplementation programmes are promoted.']],
          v: 'nutrient = a substance in food that the body needs; carbohydrate = a nutrient that gives energy; protein = a nutrient for growth and repair; vitamin = a nutrient needed in small amounts for health; fibre = plant material that aids digestion',
          x: ['Amla is very rich in vitamin C.', 'Ragi is rich in calcium.'],
          s: ['Sailors and the Missing Vitamin', 'Centuries ago, sailors on long voyages became weak, with bleeding gums — a disease called scurvy. They had plenty of biscuits but no fresh fruit. When ships began carrying citrus fruits, scurvy disappeared. The missing nutrient was vitamin C.'],
          a: [
            mt('Match the nutrient to its job', 'carbohydrate=energy|protein=growth and repair|calcium=strong bones|iron=healthy blood'),
            ch('Amla is rich in…', '*vitamin C|fat|salt'),
            ch('Fibre helps…', '*digestion|hearing|hair colour'),
            tf('Vitamin D can be made in the skin with sunlight.', true),
          ],
          t: ['Why might vegetarians plan carefully to get enough protein and iron?', 'Why do we need only tiny amounts of vitamins?'],
          k: ['Explain to someone which nutrients are in your lunch and what they do.'],
          m: ['Nutrient Detective Day', 'a notebook, a list of foods and nutrients', 'Record everything you eat for one day | Identify the main nutrients in each food | Check if you had all the nutrients | Plan one change for tomorrow'],
          q: [
            ch('Which nutrient mainly builds muscles?', '*protein|fibre|vitamin C'),
            ch('Iron is important for…', '*healthy blood|sweet taste|hearing'),
            tf('Scurvy is caused by a lack of vitamin C.', true),
          ],
          ms: ['Names nutrients and functions', 'Identifies food sources', 'Explains deficiency diseases'],
        }),
      ]),
      U('diets', 'Diets Around the World', 'Many healthy ways to eat.', 'Vegetarian, vegan, non-vegetarian diets; Religious and cultural food practices; Fasting traditions', [
        L('food-cultures', 'Many Ways to Eat Well', {
          o: ['Describe different diets and food practices respectfully', 'Explain how each can be balanced'],
          p: ['Knows nutrients'],
          e: [
            'People eat in many ways. Vegetarians don\'t eat meat or fish; many eat dairy and some eat eggs. Vegans eat no animal products. Non-vegetarians eat meat, fish or eggs as well as plant foods.',
            'Religious and cultural practices shape diets: many Jains avoid root vegetables; many Muslims eat halal food and avoid pork; many Hindus avoid beef; many Sikhs eat langar (vegetarian community meals); fasting is part of Ramadan, Navratri, Ekadashi and other observances.',
            'Every diet can be healthy if it\'s balanced. Vegetarians often get protein from dals, milk, paneer and nuts; vegans may need to plan for vitamin B12, calcium and iron.',
          ],
          c: [['belief', 'Food rules such as Jain avoidance of root vegetables (to minimise harm to living organisms) and Islamic halal requirements are religious practices that followers observe as part of their faith.']],
          v: 'vegetarian = a diet without meat or fish; vegan = a diet with no animal products; halal = food permitted under Islamic law; fasting = choosing not to eat for a period, often for religious reasons',
          x: ['Langar at gurdwaras serves free vegetarian meals to anyone.', 'Roza (fasting) during Ramadan ends each evening with iftar.'],
          s: ['The Class Lunch Party', 'For a class party, every child brought a dish from home: idli, chole, a Jain sabzi without onion or garlic, egg curry, sheer khurma. The teacher labelled each one so everyone could choose foods that fitted their family\'s practices. "So many ways to eat," said Meera, "and all delicious!"'],
          a: [
            mt('Match the term', 'vegetarian=no meat or fish|vegan=no animal products|halal=permitted under Islamic law|langar=free community meal at gurdwaras'),
            ch('Many Jains avoid…', '*root vegetables like onions and potatoes|all fruit|water'),
            tf('Any diet can be healthy if it is balanced.', true),
            ch('Vegans may need to plan for…', '*vitamin B12|more sugar|less water'),
          ],
          t: ['How can we be respectful when sharing food with friends who follow different practices?', 'Why do many traditions include fasting?'],
          k: ['Explain to someone how a vegetarian can get enough protein.'],
          m: ['Inclusive Party Menu', 'paper, pens, recipe books', 'Plan a party menu for friends with different diets | Label each dish (vegetarian, vegan, Jain-friendly, contains egg) | Make sure each guest has a balanced choice | Present your menu'],
          q: [
            ch('A vegan diet includes…', 'milk|eggs|*only plant foods'),
            ch('Good vegetarian protein sources:', '*dal, paneer, nuts|only sugar|only rice'),
            tf('Respecting others\' food practices matters.', true),
          ],
          ms: ['Describes diets accurately and respectfully', 'Plans balanced meals across diets', 'Shows cultural sensitivity'],
        }),
      ]),
    ]),
    S('s9', 'Energy balance, food labels, and processed foods.', [
      'Explain energy balance', 'Read and interpret nutrition labels', 'Evaluate processed foods and marketing',
    ], [
      U('labels', 'Reading Food Labels', 'Understanding what\'s in packaged food.', 'Ingredients lists; Nutrition facts per 100 g; Sugar, salt, fat; FSSAI logos and dates', [
        L('read-label', 'Decoding the Label', {
          o: ['Read nutrition facts and ingredient lists', 'Compare products using per-100 g values'],
          p: ['Knows nutrients'],
          e: [
            'Packaged foods in India carry labels showing ingredients, nutrition information and an FSSAI licence number. Ingredients are listed from largest to smallest amount.',
            'Nutrition facts often show energy (kcal), protein, carbohydrate (including sugars), fat and sodium per 100 g and per serving. Comparing per 100 g lets you compare fairly between products.',
            'Watch for hidden sugars (sucrose, glucose syrup, maltodextrin), high salt (sodium), and trans fats. Check "best before" or "use by" dates.',
          ],
          v: 'ingredient = something used to make a food; per 100 g = the amount in 100 grams, for fair comparison; sodium = part of salt; FSSAI = Food Safety and Standards Authority of India',
          x: ['A cereal with sugar as the second ingredient is quite sugary.', 'Two biscuit brands compared per 100 g for sugar.'],
          s: ['The "Healthy" Juice', 'A juice box said "Made with real fruit!" on the front. Zuri turned it over: the first ingredient was water, the second sugar, and the fruit content was only 10%. "The front tells a story," she said. "The back tells the facts."'],
          a: [
            ch('Ingredients are listed…', '*from most to least|alphabetically|randomly'),
            ch('To compare two snacks fairly, use…', '*per 100 g values|the pack colour|the price only'),
            mt('Match the hidden name', 'glucose syrup=a sugar|sodium=part of salt|hydrogenated oil=may contain trans fat'),
            tf('The front of a pack may be marketing; the back has the facts.', true),
          ],
          t: ['Why might companies use phrases like "natural" or "made with real fruit"?', 'Should unhealthy foods carry warning labels?'],
          k: ['Compare two packaged foods with someone and explain which is healthier and why.'],
          m: ['Label Comparison Chart', '4–5 packaged foods of the same type (biscuits, cereals), notebook', 'Record sugar, salt, fat and protein per 100 g for each | Note the first three ingredients | Rank them from healthiest to least healthy | Present your findings'],
          q: [
            ch('If sugar is the first ingredient, the food contains…', '*mostly sugar|very little sugar|no sugar'),
            ch('Sodium on a label relates to…', '*salt|sugar|fibre'),
            tf('Per 100 g lets you compare products of different pack sizes.', true),
          ],
          ms: ['Reads and interprets labels', 'Compares products fairly', 'Spots marketing vs facts'],
        }),
      ]),
      U('energy-balance', 'Energy Balance and Healthy Habits', 'Energy in, energy out — without body shaming.', 'Calories as energy; Activity and energy use; Healthy habits over dieting; Body image', [
        L('energy-in-out', 'Energy In, Energy Out', {
          o: ['Explain energy balance in simple terms', 'Discuss healthy habits and positive body image'],
          p: ['Knows nutrients and food labels'],
          e: [
            'Food energy is measured in kilocalories (kcal). Our bodies use energy for everything — breathing, thinking, growing and moving. Growing children need plenty of energy.',
            'Over time, if energy in roughly matches energy out, body weight stays fairly stable for adults; children need extra for growth. Very high-sugar, highly processed foods can make it easy to take in lots of energy with few nutrients.',
            'Healthy bodies come in many shapes and sizes. Good habits — balanced meals, regular activity, enough sleep, and water — matter more than numbers on a scale. Teasing people about their bodies is hurtful and wrong.',
          ],
          v: 'kilocalorie (kcal) = a unit of food energy; energy balance = matching energy eaten with energy used; processed food = food changed a lot from its natural state; body image = how someone feels about their body',
          x: ['A brisk walk and a game of football both use energy.', 'An apple and a sweet drink may have similar energy, but the apple has fibre and vitamins.'],
          s: ['Different Bodies, Same Team', 'On the football team were tall players, short players, broad players and slim players. Each brought something different — speed, strength, balance. When someone made a joke about a teammate\'s size, the coach said firmly, "We judge effort and kindness here, not bodies."'],
          a: [
            ch('Food energy is measured in…', '*kilocalories|kilometres|kilograms only'),
            ch('Growing children need…', '*plenty of nutritious food for growth|to skip meals|only sweets'),
            tf('Healthy bodies come in many shapes and sizes.', true),
            ch('Which matters most for health?', '*balanced eating, activity and sleep habits|teasing others|crash diets'),
          ],
          t: ['Why are crash diets risky, especially for growing children?', 'How do adverts and social media affect body image?'],
          k: ['Explain to someone why habits matter more than appearance, using an example.'],
          m: ['Healthy Habits Tracker', 'a weekly chart', 'Track water, fruit and vegetables, active play and sleep for a week | Note how you feel each day | Identify one habit to improve | Celebrate progress, not appearance'],
          q: [
            ch('Our bodies use energy for…', '*everything, including breathing and thinking|only running|nothing'),
            tf('Teasing people about their bodies is hurtful.', true),
            ch('Highly processed sugary foods often have…', '*lots of energy but few nutrients|lots of fibre|no energy'),
          ],
          ms: ['Explains energy balance accurately', 'Promotes healthy habits', 'Demonstrates body-positive attitudes'],
        }),
      ]),
    ]),
    S('s12', 'Nutrition science, food systems and public health.', [
      'Evaluate nutrition research', 'Analyse food security and malnutrition in India', 'Discuss food policy',
    ], [
      U('nutrition-science', 'Nutrition Science and Evidence', 'How we know what we know about food.', 'Observational vs experimental studies; Fad diets and supplements; Recommended Dietary Allowances (ICMR)', [
        L('nutrition-evidence', 'Weighing Nutrition Evidence', {
          o: ['Distinguish observational and experimental nutrition studies', 'Critically evaluate fad diets and supplement claims'],
          p: ['Understands health claims and trials'],
          e: [
            'Many nutrition studies are observational: researchers compare what people eat with their health over time. These can show associations but not prove cause, because people who eat differently also differ in other ways.',
            'Randomised trials test diets directly but are hard to run for years. Strong conclusions come from many studies pointing the same way.',
            'In India, the Indian Council of Medical Research (ICMR) and the National Institute of Nutrition publish dietary guidelines. Fad diets promising rapid results, and supplements claiming miracle effects, rarely have strong evidence; most people can meet needs through a varied diet, though some groups need specific supplements.',
          ],
          v: 'observational study = research observing people without assigning treatments; association = a link that may not be causal; dietary guidelines = official advice on healthy eating; supplement = a product adding nutrients to the diet',
          x: ['Iron and folic acid supplements are recommended in pregnancy.', 'Claims that one "superfood" prevents all disease lack evidence.'],
          s: ['The Coffee Headlines', 'One week a headline said coffee was harmful; months later another said it was protective. A student traced both to observational studies with different populations. "Neither proved cause," she wrote. "The weight of many studies matters more than one headline."'],
          a: [
            ch('Observational studies can show…', '*associations|definite causes always|nothing'),
            ch('India\'s dietary guidelines are published by…', '*ICMR–National Institute of Nutrition|a soft drink company|social media influencers'),
            tf('A single study rarely settles a nutrition question.', true),
            mt('Match', 'fad diet=promises quick dramatic results|guideline=official evidence-based advice|supplement=adds nutrients to the diet'),
          ],
          t: ['Why is nutrition research harder than testing a medicine?', 'How should you respond to a viral "superfood" claim?'],
          k: ['Evaluate a popular diet trend and present the evidence for and against.'],
          m: ['Fact-Check a Fad Diet', 'reliable sources (ICMR-NIN guidelines, WHO, scientific reviews), notebook', 'Choose a fad diet or supplement claim | Find what types of studies support it | Rate the evidence quality | Write a balanced 600-word fact-check'],
          q: [
            ch('Best evidence comes from…', 'one celebrity|*many consistent studies|an advert'),
            tf('Some groups may need specific supplements.', true),
            ch('A study linking a food to health without assigning diets is…', '*observational|a randomised trial|a recipe'),
          ],
          ms: ['Distinguishes study types', 'Evaluates claims critically', 'Uses authoritative guidelines'],
        }),
      ]),
      U('food-systems', 'Malnutrition and Food Policy', 'The double burden and public responses.', 'Undernutrition: stunting, wasting, anaemia; Overnutrition and diet-related disease; Programmes: ICDS, mid-day meals (PM POSHAN), fortification', [
        L('double-burden', 'The Double Burden of Malnutrition', {
          o: ['Explain undernutrition and overnutrition', 'Evaluate public nutrition programmes in India'],
          p: ['Understands nutrients and energy balance'],
          e: [
            'Malnutrition means poor nutrition in either direction. Undernutrition includes stunting (low height for age), wasting (low weight for height) and micronutrient deficiencies like anaemia. Overnutrition includes overweight and obesity, linked to diabetes and heart disease.',
            'India faces a "double burden": both undernutrition and rising diet-related diseases, sometimes in the same communities.',
            'Public programmes include Integrated Child Development Services (anganwadi centres), school meals (PM POSHAN, formerly the Mid-Day Meal scheme), the public distribution system, and fortification of foods like salt with iodine. Evaluating them involves looking at coverage, quality and outcomes.',
          ],
          c: [['evidence', 'National Family Health Survey data show substantial rates of child stunting and anaemia alongside rising adult overweight; universal salt iodisation greatly reduced iodine deficiency disorders.']],
          v: 'malnutrition = poor nutrition from too little or too much of certain nutrients; stunting = low height for age; wasting = low weight for height; fortification = adding nutrients to common foods',
          x: ['Iodised salt prevents goitre.', 'School meals can improve attendance and nutrition.'],
          s: ['The School Lunch', 'In a village school, many children used to come to class hungry. When a hot school lunch began, attendance rose and teachers noticed children concentrating better. Researchers later studied such programmes to measure how much they helped — and how to make the meals more nutritious.'],
          a: [
            mt('Match the term', 'stunting=low height for age|wasting=low weight for height|fortification=adding nutrients to common foods'),
            ch('The "double burden" means…', '*both undernutrition and diet-related diseases|two meals a day|double portions'),
            tf('Iodised salt helps prevent iodine deficiency.', true),
            ch('India\'s school meal programme is now called…', '*PM POSHAN|ISRO|Chipko'),
          ],
          t: ['Why might undernutrition and obesity exist in the same community?', 'How would you measure whether a nutrition programme works?'],
          k: ['Present a policy recommendation to improve child nutrition, with evidence.'],
          m: ['Nutrition Policy Brief', 'NFHS summary data or reliable reports, notebook', 'Choose one nutrition challenge in India | Summarise data for a state or the country | Evaluate an existing programme | Recommend two evidence-based improvements in a two-page brief'],
          q: [
            ch('Low height for age is…', '*stunting|wasting|obesity'),
            ch('Anganwadi centres are part of…', '*ICDS|PM POSHAN only|the railways'),
            tf('Malnutrition can mean too little or too much.', true),
          ],
          ms: ['Explains forms of malnutrition', 'Analyses data on India\'s nutrition', 'Evaluates and proposes policy'],
        }),
      ]),
    ]),
  ],
});
