import { subject, S, U, L, ch, tf, od, mt, ct } from '../dsl.ts';

export default subject({
  id: 'life-science',
  description: 'Biology from noticing living and non-living things to life cycles, classification, cells, human and plant systems, genetics and evolution. Emphasis on observation, fair testing and evidence.',
  stages: [
    S('s4', 'Living and non-living things, and how living things grow and change.', [
      'Sort things into living and non-living', 'Know that living things need food, water and air', 'Notice that living things grow',
    ], [
      U('alive', 'Is It Alive?', 'Living things grow, move, need food and water, and have young.', 'Living: animals, plants, people; Non-living: rocks, toys, water; Needs: food, water, air', [
        L('living-nonliving', 'Living or Not Living?', {
          o: ['Sort things into living and non-living', 'Name things all living things need'],
          p: ['Can name common animals and objects'],
          e: [
            'Living things grow, need food and water, breathe air, and can have babies or make seeds. Animals, plants and people are living things.',
            'Non-living things do not grow by themselves, eat or breathe. A rock, a toy car and a spoon are non-living.',
            'Plants are alive too! They grow, drink water through their roots, and make seeds — even though they cannot walk.',
          ],
          v: 'living = alive: grows, needs food and water; non-living = not alive; grow = get bigger over time; need = must have to stay alive',
          x: ['A puppy grows into a dog — living.', 'A ball does not grow — non-living.'],
          s: ['Kiko\'s Pet Rock', 'Kiko gave a rock some grass and water every day. "Grow, rock, grow!" But the rock stayed the same. Tara the tortoise smiled. "Rocks are not alive, Kiko. Let\'s plant a seed instead." A week later, a tiny green shoot appeared. "This one is alive!" Kiko cheered.'],
          a: [
            ch('Which is living?', '*🐕 dog|🪨 rock|🚗 car'),
            ch('Which is NOT living?', '🌳 tree|🐦 bird|*🧸 teddy'),
            mt('Sort', '🌻 sunflower=living|⚽ ball=non-living|🐟 fish=living, swims'),
            tf('Plants are living things.', true),
          ],
          t: ['Is fire alive? It grows and needs air… what do you think?', 'Was a wooden table ever part of something living?'],
          k: ['Find three living and three non-living things at home and explain how you decided.'],
          m: ['Living and Non-Living Sorting Hunt', 'two baskets or boxes, labels, toys and real objects, a plant pot', 'Label one basket "living" and one "non-living" | Collect objects (use a photo or drawing for animals) | Sort them | Explain your trickiest choice'],
          q: [
            ch('Which is living?', '🪑 chair|*🐞 ladybird|🔑 key'),
            tf('A rock grows if you water it.', false),
            ch('All living things need…', '*water|toys|television'),
          ],
          ms: ['Sorts objects as living/non-living correctly', 'Names needs of living things', 'Explains plants are alive'],
        }),
      ]),
      U('growing-up', 'Babies and Grown-Ups', 'Animals have young that grow into adults.', 'Young and adult: kitten–cat, calf–cow, chick–hen; How I have grown; Caring for young', [
        L('baby-animals', 'Baby Animals', {
          o: ['Match baby animals to their adults', 'Describe how living things change as they grow'],
          p: ['Can name common animals'],
          e: [
            'Animals have babies, called young. Many baby animals have special names: a baby cat is a kitten, a baby cow is a calf, a baby hen is a chick.',
            'Some babies look like small adults, like puppies. Others look very different, like a caterpillar that becomes a butterfly, or a tadpole that becomes a frog.',
            'You were a baby too! Now you are bigger, stronger, and can do many more things.',
          ],
          v: 'young = baby animals; adult = a grown-up animal; grow = get bigger; change = become different',
          x: ['Calf → cow; kitten → cat.', 'Tadpole → frog: it grows legs and loses its tail.'],
          s: ['Who Is My Mother?', 'A little duckling hatched and went looking for its mother. "Are you my mother?" it asked a cat. "No, I\'m a cat. My babies are kittens." It asked a cow. "No, my baby is a calf." Then it heard "Quack!" — and there was Mother Duck, with more ducklings waddling behind.'],
          a: [
            mt('Match baby to adult', 'kitten=cat|calf=cow|chick=hen|puppy=dog'),
            ch('A tadpole grows into a…', 'fish|*frog|duck'),
            od('Order from youngest to oldest', 'baby 👶|child 🧒|grown-up 🧑'),
            tf('Some baby animals look very different from their parents.', true),
          ],
          t: ['Why do you think baby animals need their parents?', 'What can you do now that you could not do as a baby?'],
          k: ['Look at a baby photo of yourself and tell someone three ways you have changed.'],
          m: ['My Growing-Up Timeline', 'photos or drawings of you at different ages, paper strip, glue', 'Collect 3–4 photos or draw yourself as a baby, toddler and now | Stick them in order on a strip | Write or say one thing you could do at each age | Add a space for "when I grow up"'],
          q: [
            mt('Match', 'lamb=sheep|duckling=duck|foal=horse'),
            ch('A caterpillar becomes a…', '*butterfly|bee|bird'),
            tf('People grow and change too.', true),
          ],
          ms: ['Matches young to adults for common animals', 'Describes changes during growth', 'Sequences life stages'],
        }),
      ]),
    ]),
    S('s5', 'Animal groups, plant parts, and the human body basics.', [
      'Group animals: mammals, birds, fish, reptiles, amphibians, insects', 'Name parts of a plant', 'Know what animals eat',
    ], [
      U('animal-groups', 'Animal Groups', 'Scientists sort animals by their features.', 'Mammals: fur, milk; Birds: feathers, beaks; Fish: fins, gills; Reptiles, amphibians, insects', [
        L('feathers-fur-fins', 'Feathers, Fur and Fins', {
          o: ['Sort animals into groups by their features', 'Describe the main features of each group'],
          p: ['Names many animals'],
          e: [
            'Scientists sort animals into groups by looking at their bodies. Mammals have hair or fur and feed their babies milk — like cows, elephants, dogs and humans.',
            'Birds have feathers, beaks and lay eggs. Fish live in water, have fins and breathe with gills. Reptiles, like snakes and lizards, have dry scaly skin.',
            'Amphibians, like frogs, live in water when young and on land as adults. Insects have six legs and three body parts — like ants, bees and butterflies.',
          ],
          v: 'mammal = an animal with hair that feeds its young milk; bird = an animal with feathers and a beak; insect = a small animal with six legs; feature = a part or quality used to sort things',
          x: ['A whale lives in water but is a mammal — it breathes air and feeds its baby milk.', 'A spider has eight legs, so it is not an insect.'],
          s: ['The Bat\'s Problem', 'A bat flew to the birds\' party. "You fly, so you\'re a bird!" they said. But the bat had fur, not feathers, and fed its babies milk. "I\'m a mammal that flies!" the bat explained. The mammals cheered — and the birds let it stay for cake anyway.'],
          a: [
            mt('Match the animal to its group', '🐘 elephant=mammal|🦜 parrot=bird|🐠 fish=fish|🐜 ant=insect'),
            ct('How many legs does an insect have?', 6),
            ch('A whale is a…', 'fish|*mammal|reptile'),
            tf('Birds have feathers.', true),
          ],
          t: ['Why isn\'t a bat a bird, even though it flies?', 'Is a penguin a bird even though it cannot fly?'],
          k: ['Choose an animal and explain to someone which group it belongs to and why.'],
          m: ['Animal Group Sorting Cards', 'card, pictures or drawings of 20 animals', 'Make a card for each animal | Sort them into mammals, birds, fish, reptiles, amphibians and insects | Check tricky ones (bat, whale, penguin, spider) | Make a poster of your groups'],
          q: [
            ch('Which is an insect?', '*🦋 butterfly|🕷️ spider|🐌 snail'),
            ch('Fish breathe using…', 'lungs|*gills|feathers'),
            tf('Mammals feed their babies milk.', true),
          ],
          ms: ['Classifies common animals into major groups', 'Justifies classification with features', 'Handles exceptions (whale, bat, penguin)'],
        }),
      ]),
      U('plant-parts', 'Parts of a Plant', 'Each part of a plant has a job.', 'Roots, stem, leaves, flower, seed, fruit; What plants need: light, water, warmth', [
        L('plant-jobs', 'Every Part Has a Job', {
          o: ['Name the main parts of a plant', 'Explain the job of each part'],
          p: ['Knows plants are living'],
          e: [
            'Roots hold the plant in the ground and drink water from the soil. The stem holds the plant up and carries water to the leaves, like a straw.',
            'Leaves catch sunlight to make food for the plant. Flowers make seeds, and often a fruit grows around the seeds to protect them.',
            'Seeds can grow into new plants. That\'s why we find seeds inside mangoes, tomatoes and watermelons!',
          ],
          v: 'root = the part underground that takes in water; stem = the part that holds the plant up; leaf = the part that makes food using sunlight; seed = the part that can grow into a new plant',
          x: ['We eat roots (carrots), stems (sugarcane), leaves (spinach), flowers (cauliflower), fruits (mango), seeds (peas).', 'A tree trunk is a very thick stem.'],
          s: ['The Plant Team', 'Inside a sunflower, the parts were talking. "I drink water!" said Root. "I carry it up!" said Stem. "I make food from sunlight!" said Leaf. "I make seeds for new sunflowers!" said Flower. "We\'re a team," they agreed, "and nobody can do it alone."'],
          a: [
            mt('Match the part to its job', 'root=drinks water from soil|stem=holds the plant up|leaf=makes food from sunlight|flower=makes seeds'),
            ch('A carrot is a…', '*root|leaf|flower'),
            ch('Which part catches sunlight?', 'root|*leaf|seed'),
            tf('A tree trunk is a stem.', true),
          ],
          t: ['What would happen to a plant with no roots?', 'Why do you think many fruits taste sweet?'],
          k: ['Show someone a real plant and point to each part, explaining its job.'],
          m: ['🧪 Colour-Changing Celery', 'a celery stick or white flower, a glass of water, food colouring', 'Put water and food colouring in a glass | Stand the celery or flower in it | Check after a few hours and the next day | Explain what the stem did'],
          q: [
            ch('Which part makes seeds?', '*flower|root|stem'),
            ch('Spinach is a…', 'root|stem|*leaf'),
            tf('Roots help hold a plant in the ground.', true),
          ],
          ms: ['Names plant parts and their functions', 'Identifies edible plant parts', 'Explains water transport using evidence'],
        }),
      ]),
    ]),
    S('s6', 'Life cycles, habitats and food chains.', [
      'Describe life cycles of a butterfly, frog and plant', 'Explain how animals suit their habitats', 'Build simple food chains',
    ], [
      U('life-cycles', 'Life Cycles', 'Living things go through stages from birth to adult.', 'Butterfly: egg, caterpillar, chrysalis, butterfly; Frog: spawn, tadpole, froglet, frog; Plant: seed, seedling, flowering plant', [
        L('metamorphosis', 'The Amazing Butterfly', {
          o: ['Describe the stages of a butterfly\'s life cycle', 'Compare complete metamorphosis with growth in mammals'],
          p: ['Knows animals grow and change'],
          e: [
            'A butterfly\'s life is a cycle with four stages. It starts as a tiny egg laid on a leaf. A caterpillar (larva) hatches and eats and eats, growing quickly.',
            'Then the caterpillar forms a chrysalis (pupa). Inside, its body is completely rebuilt. Finally, an adult butterfly comes out, and the adult lays eggs — and the cycle begins again.',
            'This big change is called metamorphosis. Mammals don\'t do this: a kitten already looks like a small cat and simply grows.',
          ],
          v: 'life cycle = the stages a living thing goes through, repeating each generation; larva = the young stage, like a caterpillar; pupa = the resting stage when the body changes; metamorphosis = a big change in body form',
          x: ['Egg → caterpillar → chrysalis → butterfly.', 'Frogspawn → tadpole → froglet → frog.'],
          s: ['The Very Hungry Caterpillar Inspector', 'Rangi found a striped caterpillar munching a milkweed leaf. Day after day it grew bigger. One morning, it hung upside down and turned into a green chrysalis. Rangi waited patiently for two weeks. Then — crack! — a wet, crumpled butterfly crawled out, dried its wings, and flew away.'],
          a: [
            od('Order the butterfly life cycle', 'egg|caterpillar|chrysalis|butterfly'),
            ch('What does the caterpillar mainly do?', '*eat and grow|fly|lay eggs'),
            ct('How many stages in a butterfly\'s life cycle?', 4),
            tf('A kitten goes through metamorphosis.', false),
          ],
          t: ['Why is it called a cycle and not a line?', 'Why might a caterpillar need to eat so much?'],
          k: ['Explain the butterfly life cycle to someone using hand actions for each stage.'],
          m: ['Life Cycle Paper Plate', 'paper plate, crayons, pasta shapes (optional), glue', 'Divide a plate into four sections | Draw or make each stage (rice for eggs, spiral pasta for caterpillar, shell pasta for chrysalis, bow pasta for butterfly) | Add arrows showing the cycle | Present it to your family'],
          q: [
            ch('Which comes after the chrysalis?', 'egg|caterpillar|*butterfly'),
            od('Frog life cycle', 'frogspawn|tadpole|froglet|frog'),
            ch('The big change in body form is called…', 'migration|*metamorphosis|hibernation'),
          ],
          ms: ['Sequences life cycles of butterfly, frog and flowering plant', 'Explains metamorphosis', 'Compares life cycles across groups'],
        }),
      ]),
      U('food-chains', 'Who Eats What?', 'Energy passes from plants to animals in food chains.', 'Producers and consumers; Herbivores, carnivores, omnivores; Food chains: grass → deer → tiger', [
        L('food-chain', 'Building a Food Chain', {
          o: ['Build a food chain starting with a plant', 'Classify animals as herbivores, carnivores or omnivores'],
          p: ['Knows plants make food from sunlight'],
          e: [
            'Plants make their own food using sunlight, so they are called producers. Animals cannot make food; they eat plants or other animals, so they are consumers.',
            'Herbivores eat plants (deer, cows). Carnivores eat other animals (tigers, eagles). Omnivores eat both (bears, crows, most humans).',
            'A food chain shows who eats whom, with arrows pointing to the eater: grass → deer → tiger. The arrow means "is eaten by" — energy flows along it.',
          ],
          v: 'producer = a living thing that makes its own food (plants); consumer = a living thing that eats others; herbivore = eats only plants; carnivore = eats other animals; omnivore = eats plants and animals',
          x: ['Leaves → caterpillar → sparrow → hawk.', 'Algae → small fish → kingfisher.'],
          s: ['The Missing Grass', 'In a valley, the grass dried up in a long drought. The deer had little to eat and grew fewer. Then the tigers found fewer deer. When the rains returned and the grass grew, the deer returned, and so did the tigers. "Everything in a food chain is connected," said Tara.'],
          a: [
            od('Make a food chain', 'grass|rabbit|fox'),
            mt('Match the eater type', 'cow=herbivore|tiger=carnivore|bear=omnivore'),
            ch('Every food chain starts with a…', '*plant (producer)|tiger|rock'),
            tf('In a food chain, arrows point to the animal doing the eating.', true),
          ],
          t: ['What would happen to the tigers if all the grass disappeared?', 'Why do food chains almost always start with plants?'],
          k: ['Tell someone a food chain from the sea or forest and explain what the arrows mean.'],
          m: ['Food Chain Paper Links', 'paper strips, glue or stapler, pens', 'Write a living thing on each strip (start with a plant) | Link strips into a chain in order | Make two different chains | Join them where an animal appears in both to make a mini food web'],
          q: [
            ch('A deer is a…', '*herbivore|carnivore|producer'),
            od('Order', 'leaves|caterpillar|bird'),
            ch('Plants are called producers because…', '*they make their own food|they eat animals|they are green'),
          ],
          ms: ['Constructs valid food chains', 'Classifies consumers correctly', 'Predicts effects of changes in a chain'],
        }),
      ]),
    ]),
    S('s7', 'The human body systems, classification keys, and adaptation.', [
      'Describe digestive, circulatory and skeletal systems', 'Use classification keys', 'Explain adaptation to habitats',
    ], [
      U('adaptation', 'Adaptation', 'Features that help living things survive where they live.', 'Desert adaptations: camels, cacti; Polar adaptations: thick fur, blubber; Camouflage and warning colours', [
        L('built-to-survive', 'Built to Survive', {
          o: ['Explain how features help animals and plants survive in their habitat', 'Compare adaptations in different habitats'],
          p: ['Knows habitats and food chains'],
          e: [
            'An adaptation is a feature that helps a living thing survive in its habitat. Camels have wide feet for sand, long eyelashes against dust, and can go a long time without drinking.',
            'Polar bears have thick fur and a layer of fat (blubber) to stay warm. Cacti store water in thick stems and have spines instead of leaves to lose less water.',
            'Camouflage helps animals hide: a tiger\'s stripes blend with tall grass. Adaptations develop over many generations — an individual animal can\'t grow them just because it wants to.',
          ],
          c: [['science', 'A camel\'s hump stores mainly fat, not water. The fat can be used for energy when food is scarce.']],
          v: 'adaptation = a feature that helps a living thing survive; habitat = the natural home of a living thing; camouflage = colours or patterns that help hide; blubber = a thick layer of fat',
          x: ['Duck: webbed feet for swimming.', 'Owl: big eyes for seeing at night.'],
          s: ['The Desert Swap', 'In a dream, a polar bear and a camel swapped homes. The polar bear panted in the hot desert, its thick fur far too warm. The camel shivered on the ice, its wide feet slipping. They woke up and both laughed with relief. "Our bodies are made for our own homes," said the camel.'],
          a: [
            mt('Match the animal to its adaptation', 'camel=wide feet for sand|polar bear=thick fur and blubber|cactus=stores water in its stem|owl=big eyes for night'),
            tf('A camel\'s hump is full of water.', false, 'It stores mainly fat.'),
            ch('A tiger\'s stripes help it…', 'stay cool|*hide in tall grass|swim faster'),
            ch('Why do cacti have spines instead of wide leaves?', '*to lose less water|to grow taller|to catch insects'),
          ],
          t: ['If the Arctic gets warmer, which adaptations might become less useful?', 'Why can\'t an animal choose to grow a new adaptation?'],
          k: ['Invent an imaginary animal for a habitat of your choice and explain its adaptations.'],
          m: ['🧪 Blubber Glove', 'two zip bags, vegetable shortening or ghee, ice water, a timer', 'Fill one bag with shortening and place an empty bag inside it to make a "blubber glove" | Put one hand in the blubber glove and one in an empty bag | Dip both in ice water | Time how long each hand can stay comfortably | Explain the result'],
          q: [
            ch('Webbed feet help a duck to…', '*swim|climb|dig'),
            ch('Camouflage helps an animal…', '*hide|run faster|find water'),
            tf('Adaptations develop over many generations.', true),
          ],
          ms: ['Links features to survival in specific habitats', 'Explains camouflage and other adaptations with examples', 'Corrects common misconceptions (camel hump)'],
        }),
      ]),
      U('body-systems', 'Body Systems', 'Organs work together in systems.', 'Digestive system: mouth to intestines; Circulatory system: heart, blood vessels; Skeletal and muscular systems', [
        L('digestion-journey', 'The Journey of a Sandwich', {
          o: ['Describe the path of food through the digestive system', 'Explain the job of each main organ'],
          p: ['Knows the body needs food'],
          e: [
            'Digestion breaks food into tiny pieces the body can use. It starts in the mouth: teeth chew and saliva begins breaking food down.',
            'Food travels down the oesophagus (food pipe) to the stomach, where it is churned and mixed with acid. Then it moves to the small intestine, where nutrients pass into the blood.',
            'The large intestine absorbs water from what is left, and the waste leaves the body. The whole journey usually takes from about one to two days or more.',
          ],
          v: 'digestion = breaking food down so the body can use it; oesophagus = the tube from mouth to stomach; intestine = the long tube where nutrients and water are absorbed; nutrient = a useful substance in food',
          x: ['Chewing well helps digestion.', 'Fibre from fruit and vegetables helps food move through the intestines.'],
          s: ['A Ladoo\'s Adventure', 'A ladoo was popped into Kiko\'s mouth. Crunch, crunch — the teeth broke it up and saliva made it soft. Whoosh, down the oesophagus! Splash into the stomach for a churn. Then a long, winding trip through the small intestine, where its goodness passed into Kiko\'s blood to give energy for climbing.'],
          a: [
            od('Order the digestive journey', 'mouth|oesophagus|stomach|small intestine|large intestine'),
            mt('Match the organ to its job', 'teeth=break food into pieces|stomach=churns food with acid|small intestine=absorbs nutrients|large intestine=absorbs water'),
            tf('Digestion begins in the mouth.', true),
            ch('Nutrients pass into the blood mainly in the…', 'stomach|*small intestine|mouth'),
          ],
          t: ['Why is it important to chew food well?', 'Why do you think the small intestine is so long?'],
          k: ['Trace the path of food on your own body with your finger and explain each stop.'],
          m: ['🧪 Digestion in a Bag', 'zip bag, a piece of bread or a cracker, water, a little orange juice, an old stocking, a tray', 'Put bread in a bag with water (saliva) | Squish it (chewing and stomach churning) and add orange juice (acid) | Pour it into a stocking over a tray and squeeze (intestines absorbing) | Explain each step'],
          q: [
            ch('Which tube carries food to the stomach?', '*oesophagus|windpipe|intestine'),
            ch('Water is mainly absorbed in the…', 'mouth|stomach|*large intestine'),
            tf('Saliva helps start breaking food down.', true),
          ],
          ms: ['Sequences the digestive system', 'Explains organ functions', 'Links diet to digestive health'],
        }),
      ]),
    ]),
    S('s9', 'Cells, microorganisms, reproduction and inheritance.', [
      'Describe plant and animal cells', 'Explain the role of microorganisms', 'Understand basic inheritance and variation',
    ], [
      U('cells', 'Cells: Building Blocks of Life', 'All living things are made of cells.', 'Cell theory; Animal vs plant cells: nucleus, membrane, cell wall, chloroplasts; Using a microscope', [
        L('cell-parts', 'Inside a Cell', {
          o: ['Identify parts of plant and animal cells and their functions', 'Compare plant and animal cells'],
          p: ['Knows living things grow and need nutrients'],
          e: [
            'All living things are made of cells — the smallest units of life. Some living things are a single cell; your body has trillions.',
            'Animal and plant cells both have a cell membrane (controls what goes in and out), cytoplasm (where chemical reactions happen) and a nucleus (contains genetic instructions).',
            'Plant cells also have a cell wall (for strength), chloroplasts (where photosynthesis makes food), and usually a large vacuole (stores sap).',
          ],
          c: [['evidence', 'Robert Hooke named "cells" in 1665 after observing cork; Antonie van Leeuwenhoek observed single-celled organisms in the 1670s; cell theory was formalised in the 1830s by Schleiden and Schwann.']],
          v: 'cell = the basic unit of life; nucleus = the control centre containing genetic material; chloroplast = where photosynthesis happens in plant cells; membrane = a thin layer controlling what enters and leaves',
          x: ['Onion skin cells under a microscope look like bricks — plant cells with walls.', 'Cheek cells are rounder — animal cells, no wall.'],
          s: ['The Tiny Rooms in the Cork', 'In 1665, Robert Hooke looked at a thin slice of cork through his microscope. He saw many tiny box-like spaces and thought they looked like the small rooms monks lived in, called cells. The name stuck — and opened a whole invisible world.'],
          a: [
            mt('Match the part to its job', 'nucleus=holds genetic instructions|chloroplast=photosynthesis|cell wall=strength and support|membrane=controls what enters and leaves'),
            ch('Which is found ONLY in plant cells?', 'nucleus|membrane|*chloroplast'),
            tf('All living things are made of cells.', true),
            ch('Who named cells?', '*Robert Hooke|Isaac Newton|Marie Curie'),
          ],
          t: ['Why do animal cells not need cell walls?', 'How did the microscope change what people believed about life?'],
          k: ['Explain to someone the differences between a plant and animal cell using a model or drawing.'],
          m: ['Edible or Craft Cell Model', 'a bowl or zip bag, jelly or clear glue, small items (grapes, beans, string)', 'Make a plant cell: bag (membrane) in a box (cell wall) | Add items for nucleus, chloroplasts, vacuole | Make an animal cell without the box and chloroplasts | Label and present both'],
          q: [
            ch('The "control centre" of the cell is the…', '*nucleus|vacuole|wall'),
            ch('Plant cells have a cell wall made mainly of…', '*cellulose|bone|plastic'),
            tf('Animal cells have chloroplasts.', false),
          ],
          ms: ['Labels plant and animal cells', 'Explains organelle functions', 'Describes the history of cell discovery accurately'],
        }),
      ]),
      U('inheritance', 'Inheritance and Variation', 'Why offspring resemble — and differ from — their parents.', 'Inherited vs acquired traits; Variation within species; DNA and genes (introduction)', [
        L('inherited-traits', 'Inherited or Acquired?', {
          o: ['Distinguish inherited traits from acquired characteristics', 'Explain why offspring vary'],
          p: ['Knows cells contain a nucleus'],
          e: [
            'Offspring inherit characteristics from their parents through genes, which are made of DNA and found in the nucleus of cells. Eye colour and blood group are strongly inherited.',
            'Acquired characteristics come from experience or environment: a scar, a language you speak, or muscles from exercise. These are not passed on through genes.',
            'Each parent passes on half of their genes in different combinations, so siblings vary. Most traits, like height, are influenced by both genes and environment.',
          ],
          v: 'inherit = receive from parents; gene = a section of DNA that influences a trait; variation = differences between individuals; acquired characteristic = a trait developed during life, not inherited',
          x: ['Inherited: natural hair colour. Acquired: dyed hair.', 'Height depends on genes AND nutrition.'],
          s: ['The Gardener\'s Peas', 'In the 1860s, a monk named Gregor Mendel grew thousands of pea plants and carefully counted tall and short, smooth and wrinkled peas over generations. His patient counting revealed patterns of inheritance — though the world mostly ignored his work until 1900.'],
          a: [
            mt('Inherited or acquired?', 'natural eye colour=inherited|speaking Marathi=acquired by learning|a scar from a fall=acquired from injury'),
            ch('Genes are made of…', '*DNA|protein shakes|water'),
            tf('Siblings from the same parents always look identical.', false),
            ch('Height is influenced by…', 'genes only|food only|*both genes and environment'),
          ],
          t: ['If a weightlifter builds big muscles, will their children be born with big muscles? Why?', 'Why are identical twins useful for scientists studying genes and environment?'],
          k: ['Explain to someone one trait you inherited and one you acquired.'],
          m: ['Family Trait Survey', 'a table on paper, willing family members', 'Choose traits like earlobe shape, tongue rolling, dimples | Survey family members across generations | Record the results | Discuss patterns — and note that many traits are more complex than single genes'],
          q: [
            ch('Which is acquired?', 'blood group|*riding a bicycle|natural eye colour'),
            ch('Mendel studied inheritance using…', '*pea plants|dogs|bacteria'),
            tf('Each parent passes on about half their genes.', true),
          ],
          ms: ['Distinguishes inherited and acquired traits', 'Explains variation from gene combinations', 'Recognises interaction of genes and environment'],
        }),
      ]),
    ]),
    S('s12', 'Evolution by natural selection, genetics, and ecology at depth.', [
      'Explain evolution by natural selection with evidence', 'Use genetic diagrams', 'Analyse ecosystems and human impact',
    ], [
      U('evolution', 'Evolution by Natural Selection', 'How populations change over generations.', 'Variation, competition, selection, inheritance; Evidence: fossils, comparative anatomy, DNA; Antibiotic resistance', [
        L('natural-selection', 'Natural Selection', {
          o: ['Explain the mechanism of natural selection', 'Evaluate evidence for evolution'],
          p: ['Understands inheritance and variation'],
          e: [
            'Natural selection works through four observations: individuals vary; variations are inherited; more offspring are born than can survive; and those with helpful variations are more likely to survive and reproduce, passing those variations on.',
            'Over many generations, helpful traits become more common in a population. This is evolution. Individuals do not evolve; populations do.',
            'Evidence includes the fossil record, similarities in bone structure between species (comparative anatomy), DNA comparisons, and evolution observed today, such as bacteria evolving antibiotic resistance.',
          ],
          c: [['science', 'Charles Darwin and Alfred Russel Wallace independently proposed natural selection; their ideas were presented together in 1858, and Darwin published "On the Origin of Species" in 1859. Evolution is the central unifying theory of modern biology.'], ['interpretation', 'Some religious traditions interpret scientific evolution as compatible with their beliefs; some do not. Science describes natural processes and evidence; questions of ultimate meaning are explored in philosophy and religion.']],
          v: 'natural selection = the process where better-adapted individuals survive and reproduce more; evolution = change in inherited characteristics of a population over generations; fossil = preserved remains or traces of ancient life; antibiotic resistance = bacteria surviving drugs meant to kill them',
          x: ['Peppered moths in industrial England: darker forms became more common when trees were blackened by soot.', 'Antibiotic overuse selects for resistant bacteria.'],
          s: ['Darwin\'s Finches', 'On the Galápagos Islands, Darwin collected birds with differently shaped beaks. Later studies by Peter and Rosemary Grant measured finches for decades: after a drought, birds with larger beaks that could crack tough seeds survived better, and the next generation had larger beaks on average.'],
          a: [
            od('Order the logic of natural selection', 'Individuals in a population vary|Some variations help survival|Those individuals reproduce more|Helpful traits become more common'),
            tf('An individual giraffe can stretch its neck and pass a longer neck to its babies.', false, 'Acquired changes are not inherited; selection acts on inherited variation.'),
            ch('Which is evidence for evolution?', '*fossil record|horoscopes|folk songs'),
            ch('Antibiotic resistance increases when antibiotics are…', 'never used|*overused or misused|refrigerated'),
          ],
          t: ['Why does it matter to finish a course of antibiotics as prescribed?', 'Why do scientists say populations, not individuals, evolve?'],
          k: ['Explain natural selection to someone using a simulation you design.'],
          m: ['🧪 Beak Simulation', 'tools (tweezers, spoons, clothes pegs, chopsticks), "food" (rice, beans, marbles), cups, timer', 'Each person gets a "beak" tool | Collect food for 30 seconds per round | The least successful beaks "die" and others "reproduce" | Change the food type and repeat | Graph the beak types over generations and explain'],
          q: [
            ch('Natural selection acts on…', 'acquired traits|*inherited variation|wishes'),
            ch('"On the Origin of Species" was published in…', '1759|*1859|1959'),
            tf('Populations evolve over many generations.', true),
          ],
          ms: ['Explains natural selection clearly with examples', 'Evaluates multiple lines of evidence', 'Distinguishes scientific explanation from belief respectfully'],
        }),
      ]),
      U('genetics', 'Genetics', 'Genes, alleles and patterns of inheritance.', 'DNA structure; Alleles: dominant and recessive; Punnett squares; Genetic engineering and ethics', [
        L('punnett', 'Punnett Squares', {
          o: ['Use Punnett squares to predict inheritance', 'Discuss ethical questions in genetics'],
          p: ['Understands genes and inheritance'],
          e: [
            'Genes come in versions called alleles. You inherit one allele of each gene from each parent. A dominant allele (written with a capital letter, e.g. B) shows its effect even if only one copy is present; a recessive allele (b) shows only if both copies are recessive.',
            'A Punnett square predicts offspring probabilities. Two parents Bb × Bb produce BB, Bb, Bb, bb: a 3 in 4 chance of showing the dominant trait and 1 in 4 of the recessive trait.',
            'Most human traits involve many genes and the environment, so simple Punnett squares apply only to some traits (such as some genetic conditions). Modern tools like CRISPR allow gene editing, raising important ethical questions.',
          ],
          c: [['science', 'DNA\'s double-helix structure was described in 1953 by Watson and Crick, using X-ray data produced by Rosalind Franklin and Maurice Wilkins\' teams.']],
          v: 'allele = a version of a gene; dominant = an allele expressed with one copy; recessive = an allele expressed only with two copies; genotype = the alleles an organism has; phenotype = the observable characteristics',
          x: ['Pea plants: tall (T) dominant over short (t). Tt × tt → 50% tall, 50% short.', 'Sickle cell trait follows recessive inheritance.'],
          s: ['Franklin\'s Photograph 51', 'In the early 1950s, Rosalind Franklin captured a famous X-ray image of DNA, known as Photograph 51. It provided key evidence for the double-helix structure. Her contribution was under-recognised for many years — a reminder that science is the work of many people.'],
          a: [
            ch('Bb × Bb: chance of bb?', '½|*¼|¾'),
            ch('An organism with alleles Tt shows which trait (T dominant)?', '*the dominant trait|the recessive trait|neither'),
            mt('Match', 'genotype=the alleles present|phenotype=observable traits|allele=version of a gene'),
            tf('Most human traits are controlled by a single gene.', false),
          ],
          t: ['Should parents be allowed to choose traits for their children? Where would you draw the line?', 'Why was Rosalind Franklin\'s contribution overlooked?'],
          k: ['Hold a short debate on one ethical question in genetic engineering, presenting both sides fairly.'],
          m: ['Coin-Toss Genetics', 'two coins per person, labels (one side dominant allele, other side recessive), tally sheet', 'Label coins as Bb parents | Toss both coins 40 times to make "offspring" | Record genotypes | Compare ratios with the Punnett square prediction'],
          q: [
            ch('Tt × tt offspring: % showing recessive trait?', '25%|*50%|75%'),
            ch('BB is described as…', '*homozygous dominant|heterozygous|recessive'),
            tf('Punnett squares give probabilities, not certainties.', true),
          ],
          ms: ['Uses Punnett squares correctly', 'Distinguishes genotype and phenotype', 'Discusses genetic ethics with balanced reasoning'],
        }),
      ]),
    ]),
  ],
});
