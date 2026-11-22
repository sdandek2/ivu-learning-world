import { subject, S, U, L, ch, tf, od, mt, ct } from '../dsl.ts';

export default subject({
  id: 'animals',
  description: 'Animals and where they live: animal homes, habitats from forests to oceans, animal behaviour and senses, India\'s wildlife and protected areas, migration, and animal behaviour science and ethics.',
  stages: [
    S('s4', 'Animal homes, animal sounds, and caring for pets.', [
      'Match animals to their homes', 'Recognise animals by sound and look', 'Know how to be kind to animals',
    ], [
      U('animal-homes', 'Where Do Animals Live?', 'Every animal has a home that suits it.', 'Nests, burrows, hives, dens, water; Wild animals and farm animals; Pets', [
        L('animal-homes-match', 'Home Sweet Home', {
          o: ['Match animals to their homes', 'Explain that homes keep animals safe'],
          p: ['Can name common animals'],
          e: [
            'Animals need homes to stay safe, rest and raise their babies. Birds build nests in trees. Rabbits dig burrows underground. Bees live in hives.',
            'Fish live in water — in rivers, ponds and the sea. Lions and tigers rest in dens or shady grass.',
            'Some animals live with people: cows and goats on farms, and pets like cats and dogs in our homes.',
          ],
          v: 'nest = a home birds build from twigs and grass; burrow = a hole dug underground as a home; hive = a home for bees; den = a hidden home for wild animals',
          x: ['🐦 A sparrow builds a nest.', '🐝 Bees make honey in a hive.'],
          s: ['The Lost Little Rabbit', 'A little rabbit got lost. "Is this my home?" it asked a bird\'s nest. "Too high!" It peeked into a beehive — "Too buzzy!" It looked in a pond — "Too wet!" At last it found a hole under a bush, and there was Mother Rabbit. "My burrow!" it cried happily.'],
          a: [
            mt('Match the animal to its home', '🐦 bird=nest|🐝 bee=hive|🐇 rabbit=burrow|🐟 fish=water'),
            ch('Which animal lives in a hive?', '*🐝 bee|🐄 cow|🐟 fish'),
            tf('Homes help keep animals safe.', true),
            ch('A cow usually lives…', '*on a farm|in a nest|in the sea'),
          ],
          t: ['Why do you think birds build nests high in trees?', 'What would you need in your home if you were a frog?'],
          k: ['Tell a grown-up about an animal home you have seen near your house.'],
          m: ['Build a Bird Nest Model', 'twigs, grass, mud or playdough, a small bowl as a mould', 'Collect twigs and dry grass | Weave them around a small bowl, using mud or dough to hold them | Remove the bowl to see your nest | Put toy eggs inside and explain how birds keep eggs safe'],
          q: [
            ch('Where does a fish live?', '*in water|in a nest|in a burrow'),
            mt('Match', '🦁 lion=den|🐇 rabbit=burrow|🐝 bee=hive'),
            tf('Some animals live in burrows under the ground.', true),
          ],
          ms: ['Matches animals to homes', 'Explains purpose of homes', 'Distinguishes wild and domestic animals'],
        }),
      ]),
      U('kind-to-animals', 'Being Kind to Animals', 'All animals deserve care and respect.', 'Pet care: food, water, shelter, love; Gentle touch; Watching wild animals safely', [
        L('pet-care', 'Caring for Animals', {
          o: ['Describe what pets need', 'Show safe and kind behaviour with animals'],
          p: ['Knows animals are living things'],
          e: [
            'Like us, animals need food, clean water, shelter and care. Pets also need gentle play and a visit to the vet when they are unwell.',
            'Be gentle: stroke animals softly, never pull tails or ears, and let them rest when they want to.',
            'With street dogs or unknown animals, ask a grown-up first and never put your hand near a strange animal\'s face. Watch wild animals from a distance — their home is not our playground.',
          ],
          v: 'pet = an animal that lives with people and is cared for; vet = an animal doctor; gentle = soft and kind; shelter = a safe place to stay',
          x: ['Fresh water for a dog every day.', 'Feeding birds grain and water in summer.'],
          s: ['The Summer Water Bowl', 'One very hot day, Ivaan noticed sparrows panting on the balcony. He asked his grandmother, and together they put out a shallow bowl of water in the shade. Soon sparrows, a mynah and even a squirrel came to drink. Ivaan refilled it every morning all summer.'],
          a: [
            ch('Pets need…', '*food, water and care|only toys|nothing'),
            ch('How should you touch a cat?', '*gently stroke it|pull its tail|squeeze it tight'),
            tf('We should ask a grown-up before touching an unknown animal.', true),
            ch('An animal doctor is called a…', '*vet|chef|pilot'),
          ],
          t: ['How can we tell if an animal is happy or scared?', 'Why shouldn\'t we feed wild animals junk food?'],
          k: ['Explain to a grown-up three ways to be kind to animals.'],
          m: ['Bird Water Station', 'a shallow dish, water, a few pebbles, a shady spot', 'Place pebbles in a shallow dish so small birds can stand | Fill with clean water | Put it in a shady, safe spot | Refill daily and draw the visitors you see'],
          q: [
            ch('Which is kind?', '*giving a dog fresh water|chasing birds|throwing stones'),
            tf('Wild animals should be watched from a distance.', true),
            ch('When an animal is sick, we take it to the…', '*vet|zoo|shop'),
          ],
          ms: ['Lists animal needs', 'Demonstrates gentle behaviour', 'Knows safety around unfamiliar animals'],
        }),
      ]),
    ]),
    S('s5', 'Habitats: forest, desert, ocean, polar and grasslands.', [
      'Name major habitats', 'Match animals to habitats', 'Explain how a habitat provides food, water and shelter',
    ], [
      U('habitats', 'Amazing Habitats', 'Different places, different animals.', 'Forest, desert, ocean, polar, grassland, wetland; What a habitat provides', [
        L('habitat-match', 'Who Lives Where?', {
          o: ['Name major habitats and their features', 'Explain why an animal lives in a particular habitat'],
          p: ['Knows animals need homes'],
          e: [
            'A habitat is the natural home of an animal or plant. It gives them food, water, shelter and a place to raise young.',
            'Forests have trees for shelter (tigers, monkeys, hornbills). Deserts are dry and hot or cold (camels, desert foxes). Oceans are salty and deep (whales, octopus). Polar regions are icy (polar bears, penguins — at opposite poles!).',
            'Grasslands are wide and grassy (blackbuck, zebras). Wetlands, like marshes and lakes, attract many birds, including migrating cranes.',
          ],
          v: 'habitat = the natural home of a living thing; grassland = a wide area covered with grass; wetland = land soaked with water, like marshes; polar = near the North or South Pole',
          x: ['Polar bears live in the Arctic; penguins mostly in the Southern Hemisphere.', 'Flamingos gather in wetlands like the Rann of Kutch.'],
          s: ['The Habitat Swap Party', 'At a party, the animals decided to swap homes for a day. The camel went to the ocean — glug! The octopus went to the desert — dry! The polar bear went to the forest — too hot! By evening, everyone rushed home. "My habitat fits me best," they all agreed.'],
          a: [
            mt('Match the animal to its habitat', '🐪 camel=desert|🐋 whale=ocean|🐧 penguin=polar|🐅 tiger=forest'),
            ch('A habitat gives an animal…', '*food, water and shelter|homework|toys'),
            tf('Polar bears and penguins live at the same pole.', false, 'Polar bears live in the Arctic (north); most penguins live in the Southern Hemisphere.'),
            ch('Flamingos are often found in…', '*wetlands|deserts|snowy mountains'),
          ],
          t: ['Could a fish live in a desert? Why not?', 'What happens to animals when their habitat is destroyed?'],
          k: ['Choose a habitat and describe three animals that live there and why.'],
          m: ['Shoebox Habitat Diorama', 'a shoebox, paint, paper, clay or toy animals', 'Choose a habitat | Paint the background (sky, sea, trees) | Add plants and animals that belong there | Present your diorama explaining food, water and shelter'],
          q: [
            ch('Which habitat is very dry?', '*desert|ocean|wetland'),
            ch('Hornbills live in…', '*forests|deserts|the Arctic'),
            tf('A habitat is an animal\'s natural home.', true),
          ],
          ms: ['Names major habitats', 'Matches animals with justification', 'Explains habitat resources'],
        }),
      ]),
      U('ocean-life', 'Life in the Ocean', 'The ocean is the biggest habitat on Earth.', 'Ocean animals: fish, mammals, invertebrates; Coral reefs; Deep sea', [
        L('under-the-sea', 'Under the Sea', {
          o: ['Name ocean animals from different groups', 'Describe coral reefs and why they matter'],
          p: ['Knows ocean as a habitat'],
          e: [
            'Oceans cover about 70% of Earth\'s surface. They are home to fish, mammals like whales and dolphins, and invertebrates (animals without backbones) like jellyfish, octopus and crabs.',
            'Coral reefs look like rocks but are built by tiny animals called coral polyps. Reefs shelter about a quarter of all ocean species, even though they cover a tiny part of the sea floor. India has reefs in the Gulf of Mannar, Lakshadweep and the Andaman and Nicobar Islands.',
            'The deep sea is dark and cold. Some deep-sea creatures make their own light — this is called bioluminescence.',
          ],
          v: 'invertebrate = an animal without a backbone; coral reef = an underwater structure built by tiny coral animals; bioluminescence = light made by living things; marine = to do with the sea',
          x: ['A dolphin is a mammal: it breathes air and feeds its baby milk.', 'An octopus has eight arms and no bones.'],
          s: ['Pala\'s Reef Tour', 'Pala the dolphin gave Kiko a tour of the coral reef. Clownfish peeked from anemones, a turtle munched seagrass, and a shy octopus changed colour to hide. "All of this was built by tiny coral animals," said Pala. "That\'s why we must keep the sea clean."'],
          a: [
            mt('Match the sea animal to its group', '🐬 dolphin=mammal|🐠 clownfish=fish|🐙 octopus=invertebrate'),
            ch('About how much of Earth is covered by oceans?', 'a tenth|half|*about 70%'),
            tf('Coral reefs are built by tiny animals.', true),
            ch('Light made by living things is…', '*bioluminescence|photosynthesis|reflection'),
          ],
          t: ['Why do you think scientists say we know more about the Moon\'s surface than the deep ocean floor?', 'How can plastic in the sea harm animals?'],
          k: ['Describe a coral reef to someone as if you were swimming through it.'],
          m: ['Ocean Zones Jar', 'a tall clear jar, honey, washing-up liquid, water, vegetable oil (layered), small paper sea animals', 'Layer liquids carefully to make "ocean zones" | Label sunlit, twilight and dark zones on the outside | Research one animal for each zone | Attach drawings and explain each zone'],
          q: [
            ch('Which is a mammal?', '*whale|shark|crab'),
            ch('India has coral reefs in…', '*Lakshadweep|Thar Desert|Delhi'),
            tf('An octopus has a backbone.', false),
          ],
          ms: ['Classifies ocean animals', 'Explains coral reef importance', 'Describes ocean zones'],
        }),
      ]),
    ]),
    S('s6', 'Animal senses, behaviour and communication.', [
      'Describe special animal senses', 'Explain animal behaviours: hibernation, migration, herding', 'Describe how animals communicate',
    ], [
      U('animal-senses', 'Super Senses', 'Animals sense the world in amazing ways.', 'Sight: eagles, owls; Hearing: bats, elephants; Smell: dogs; Echolocation', [
        L('super-senses', 'Super Senses', {
          o: ['Describe special senses of different animals', 'Explain echolocation'],
          p: ['Knows the five human senses'],
          e: [
            'Many animals have senses much stronger than ours. Eagles can spot small prey from very high up. Owls see well in dim light and hear tiny rustles.',
            'Dogs have a sense of smell many thousands of times more sensitive than ours, which is why they help find people after disasters.',
            'Bats and dolphins use echolocation: they make sounds and listen for echoes bouncing back, building a "sound picture" of their surroundings. Elephants can communicate using very low rumbles that travel long distances.',
          ],
          v: 'sense = a way of noticing the world (sight, hearing, smell, taste, touch); echolocation = finding things by listening to echoes; prey = an animal hunted for food; predator = an animal that hunts',
          x: ['Snakes "smell" by flicking their tongues.', 'Elephants may sense rumbles through their feet.'],
          s: ['The Bat\'s Night Flight', 'In total darkness, a little bat swooped between branches. "How do you see?" asked Olu the owl. "I shout!" squeaked the bat. Tiny high-pitched calls bounced off a moth and back to the bat\'s ears. Snap! Dinner. "I see with sound," said the bat.'],
          a: [
            mt('Match the animal to its super sense', 'dog=smell|bat=echolocation|eagle=sharp eyesight|owl=hearing in the dark'),
            ch('Echolocation uses…', '*sound echoes|light|smell'),
            tf('Dogs can help find people by smell.', true),
            ch('Elephants communicate using…', '*low rumbles|bright lights|colours'),
          ],
          t: ['If you could have one animal\'s super sense, which would you choose and why?', 'How have scientists used animal senses to invent technology?'],
          k: ['Explain echolocation to someone using a ball bounced off a wall as an example.'],
          m: ['🧪 Echo Experiment', 'a large empty room or courtyard, a hallway, hands for clapping', 'Clap in a small furnished room and listen | Clap in a large empty space or near a big wall | Notice when you hear an echo | Explain how bats use echoes to "see"'],
          q: [
            ch('Which animal uses echolocation?', '*dolphin|cow|parrot'),
            ch('Owls are good at…', '*seeing and hearing in dim light|smelling underwater|echolocation'),
            tf('Some animals sense the world better than humans.', true),
          ],
          ms: ['Describes animal sensory adaptations', 'Explains echolocation', 'Relates senses to survival'],
        }),
      ]),
      U('behaviour', 'Animal Behaviour', 'Migration, hibernation and living in groups.', 'Migration: Amur falcons, Siberian cranes; Hibernation and aestivation; Herds, packs and colonies', [
        L('migration', 'Long Journeys', {
          o: ['Explain why animals migrate', 'Describe hibernation and group behaviour'],
          p: ['Knows seasons'],
          e: [
            'Migration is a regular long journey animals make, usually with the seasons, to find food, warmth or places to breed. Amur falcons fly from East Asia, stop in Nagaland in large numbers, then cross the Arabian Sea to Africa — one of the longest bird migrations.',
            'Hibernation is a deep sleep through winter to save energy when food is scarce (some bears and bats). Some animals, like certain frogs and snails, rest through hot dry seasons instead — called aestivation.',
            'Many animals live in groups: elephants in herds led by an older female (the matriarch), wolves in packs, ants and bees in colonies. Groups help find food and protect young.',
          ],
          c: [['evidence', 'Satellite tagging of Amur falcons has tracked journeys of over 20,000 km a year between Asia and southern Africa. Community conservation in Nagaland\'s Pangti village has protected the roosting falcons since 2013.']],
          v: 'migration = a regular seasonal journey; hibernation = a deep winter sleep to save energy; matriarch = the female leader of a group; colony = a large group living together',
          x: ['Flamingos visit Indian wetlands in winter.', 'An elephant matriarch remembers where to find water in droughts.'],
          s: ['The Village That Protected the Falcons', 'Every October, huge flocks of Amur falcons arrive in Nagaland. Years ago, many were hunted. Then the villagers of Pangti decided to protect them. Today, people come from far away to watch the sky fill with falcons, and the village is proud to be their guardian.'],
          a: [
            mt('Match the behaviour', 'flying thousands of km each season=migration|sleeping through winter=hibernation|living in a herd=group behaviour'),
            ch('Why do animals migrate?', '*to find food, warmth or breeding places|to go shopping|for no reason'),
            ch('An elephant herd is led by the…', '*matriarch (older female)|youngest calf|strongest male always'),
            tf('Amur falcons stop in Nagaland on their migration.', true),
          ],
          t: ['How do you think migrating birds find their way?', 'What dangers might animals face on long migrations?'],
          k: ['Tell the story of the Amur falcons\' journey to someone using a map.'],
          m: ['Migration Map', 'a world map (printed or drawn), coloured thread or pens', 'Choose three migrating animals (Amur falcon, flamingo, a whale) | Draw their routes on the map | Note distances and reasons for travel | Present your map'],
          q: [
            ch('A deep winter sleep is…', '*hibernation|migration|echolocation'),
            ch('Ants and bees live in…', '*colonies|alone always|nests in the sea'),
            tf('Migration usually follows the seasons.', true),
          ],
          ms: ['Explains migration and hibernation', 'Describes group behaviours', 'Uses real Indian examples accurately'],
        }),
      ]),
    ]),
    S('s7', 'India\'s wildlife, endangered species and protected areas.', [
      'Name iconic Indian animals and where they live', 'Explain why species become endangered', 'Describe national parks and conservation projects',
    ], [
      U('indian-wildlife', 'Wildlife of India', 'India\'s rich animal life and protected areas.', 'Iconic species: tiger, elephant, one-horned rhino, Asiatic lion, snow leopard; National parks and sanctuaries; Biodiversity hotspots', [
        L('iconic-species', 'India\'s Iconic Animals', {
          o: ['Locate iconic Indian species and their protected areas', 'Explain what national parks and wildlife sanctuaries do'],
          p: ['Knows habitats'],
          e: [
            'India is one of the world\'s most biodiverse countries. The Bengal tiger is the national animal. Asiatic lions live in the wild only in Gujarat\'s Gir forest area. One-horned rhinos thrive in Kaziranga, Assam.',
            'Snow leopards roam the high Himalayas, and Asian elephants live in forests across the south, northeast and the Himalayan foothills.',
            'National parks and wildlife sanctuaries protect habitats by limiting hunting, logging and building. India has two internationally recognised biodiversity hotspots partly within its borders: the Western Ghats and the Himalaya, plus parts of the Indo-Burma and Sundaland hotspots.',
          ],
          v: 'national park = a protected area for wildlife and nature; sanctuary = a protected place for animals; biodiversity hotspot = a region with many species found nowhere else that is under threat; endemic = found only in one area',
          x: ['Kaziranga: one-horned rhinos.', 'Gir: Asiatic lions.'],
          s: ['The Last Lions of Asia', 'Over a century ago, only a small number of Asiatic lions survived, all in the Gir forest. With protection, the population grew. The 2020 count estimated about 674 lions. "Protection works," said the forest guard, "but all our lions in one region is still a risk."'],
          a: [
            mt('Match the animal to its protected area', 'one-horned rhino=Kaziranga|Asiatic lion=Gir|Bengal tiger=Sundarbans and many tiger reserves'),
            ch('India\'s national animal is the…', '*Bengal tiger|peacock|elephant'),
            tf('Asiatic lions live in the wild only in Gujarat.', true),
            ch('A species found only in one region is…', '*endemic|extinct|domestic'),
          ],
          t: ['Why is it risky for a whole species to live in just one area?', 'How can people and wildlife share space safely?'],
          k: ['Present an iconic Indian animal: where it lives, its threats, and how it is protected.'],
          m: ['Wildlife Atlas Page', 'a map of India, pictures or drawings, pens', 'Mark five protected areas on a map | Add the key animal for each | Write one conservation success or challenge | Combine pages from family members into an atlas'],
          q: [
            ch('Snow leopards live in…', '*the high Himalayas|the Thar Desert|the sea'),
            ch('National parks mainly…', '*protect habitats and wildlife|build factories|sell animals'),
            tf('The Western Ghats is a biodiversity hotspot.', true),
          ],
          ms: ['Locates iconic species and protected areas', 'Explains protected area roles', 'Discusses conservation challenges'],
        }),
      ]),
      U('endangered', 'Endangered Species', 'Why species decline and how they recover.', 'Threats: habitat loss, poaching, pollution, climate change; Project Tiger; Extinction and the dodo; IUCN Red List', [
        L('project-tiger', 'Saving the Tiger', {
          o: ['Explain the main threats to wildlife', 'Describe Project Tiger and evaluate its results'],
          p: ['Knows Indian wildlife'],
          e: [
            'Species become endangered because of habitat loss (forests cleared for farms and roads), poaching (illegal hunting), pollution, invasive species and climate change.',
            'India launched Project Tiger in 1973, creating tiger reserves with protected core areas. Tiger numbers have since increased; the 2022 national estimate was about 3,167 tigers, roughly three-quarters of the world\'s wild tigers.',
            'The IUCN Red List classifies species by extinction risk: from Least Concern to Critically Endangered, Extinct in the Wild and Extinct. Extinction is forever — like the dodo of Mauritius, extinct since the late 1600s.',
          ],
          c: [['evidence', 'Tiger population estimates come from the All India Tiger Estimation using camera traps and surveys; the 2022 cycle reported a minimum of about 3,167 tigers.']],
          v: 'endangered = at serious risk of extinction; poaching = illegal hunting; extinct = no longer existing anywhere; habitat loss = destruction of the places animals live',
          x: ['Great Indian Bustard: critically endangered by power lines and habitat loss.', 'Gharials have recovered in some rivers through breeding programmes.'],
          s: ['A Tiger Reserve Ranger\'s Day', 'Before dawn, ranger Meena checked camera traps along the forest trail. One photo showed a tigress with two cubs. She logged it carefully, then patrolled for snares. "Every cub that grows up," she said, "is proof that protection is working."'],
          a: [
            mt('Match the threat to its meaning', 'poaching=illegal hunting|habitat loss=homes destroyed|pollution=harmful substances in the environment'),
            ch('Project Tiger began in…', '1947|*1973|2010'),
            ch('Extinct means…', 'rare|*no longer existing|sleeping'),
            tf('India has most of the world\'s wild tigers.', true),
          ],
          t: ['Why protect tigers if they can be dangerous to people?', 'What can ordinary people do to help endangered species?'],
          k: ['Explain to someone how camera traps help count tigers.'],
          m: ['Species Rescue Plan', 'research materials, poster paper', 'Choose an endangered Indian species | Research its threats and status | Design a rescue plan with three actions | Present it as a poster or short talk'],
          q: [
            ch('The dodo is…', 'endangered|*extinct|common'),
            ch('Which is a major threat to wildlife?', '*habitat loss|more rainforests|clean rivers'),
            tf('The IUCN Red List classifies extinction risk.', true),
          ],
          ms: ['Explains threats to species', 'Evaluates conservation programmes with evidence', 'Uses Red List categories'],
        }),
      ]),
    ]),
    S('s9', 'Classification and evolution of animals, and invertebrates.', [
      'Use the Linnaean classification system', 'Describe major invertebrate groups', 'Use and build dichotomous keys',
    ], [
      U('classification', 'Classifying Animals', 'Scientific names and the tree of life.', 'Kingdom to species; Binomial names: Panthera tigris; Vertebrates and invertebrates; Dichotomous keys', [
        L('binomial', 'Scientific Names', {
          o: ['Explain the levels of classification', 'Use binomial names and dichotomous keys'],
          p: ['Classifies animals into major groups'],
          e: [
            'Scientists classify living things into nested groups: kingdom, phylum, class, order, family, genus, species. Each level is more specific. Carl Linnaeus developed this system in the 1700s.',
            'Every species has a two-part scientific name (binomial): genus + species, written in italics. The tiger is Panthera tigris; the lion is Panthera leo — both in the genus Panthera, showing they are closely related.',
            'A dichotomous key identifies organisms by a series of yes/no questions: "Does it have legs? → yes → How many? → six → insect."',
          ],
          v: 'classification = sorting living things into groups; species = a group that can breed to produce fertile offspring; genus = a group of closely related species; dichotomous key = a tool using paired choices to identify organisms',
          x: ['Humans: Homo sapiens.', 'Indian peafowl: Pavo cristatus.'],
          s: ['Why Not Just Call It a Tiger?', 'A scientist from Brazil, one from Japan and one from India all studied the same cat — but each language called it something different. Using Panthera tigris, they knew instantly they meant the same animal. "A shared name," they agreed, "is a shared language for science."'],
          a: [
            od('Order from broadest to most specific', 'kingdom|phylum|class|order|family|genus'),
            ch('In Panthera tigris, the genus is…', '*Panthera|tigris|tiger'),
            tf('Lions and tigers are in the same genus.', true),
            ch('A dichotomous key uses…', '*pairs of choices|random guesses|colours only'),
          ],
          t: ['Why do scientists use Latin or Greek names instead of local names?', 'How might DNA evidence change how we classify animals?'],
          k: ['Teach someone how to use a dichotomous key with a set of objects.'],
          m: ['Build a Dichotomous Key', '8–10 animal pictures, paper', 'Lay out animal pictures | Write yes/no questions that split them into smaller groups | Continue until each animal is identified | Test your key on a family member'],
          q: [
            ch('Homo sapiens is the scientific name for…', '*humans|tigers|peacocks'),
            ch('Which level is most specific?', 'family|order|*species'),
            tf('Scientific names have two parts: genus and species.', true),
          ],
          ms: ['Uses classification hierarchy', 'Writes binomial names correctly', 'Constructs and uses dichotomous keys'],
        }),
      ]),
      U('invertebrates', 'The World of Invertebrates', 'Most animals have no backbone.', 'Insects, arachnids, crustaceans, molluscs, worms, cnidarians; Importance: pollination, decomposition', [
        L('no-backbone', 'Animals Without Backbones', {
          o: ['Describe the main invertebrate groups', 'Explain the ecological importance of invertebrates'],
          p: ['Knows vertebrates'],
          e: [
            'About 95% or more of animal species are invertebrates — animals without backbones. Arthropods have jointed legs and a hard outer skeleton (exoskeleton): insects (6 legs), arachnids (8 legs: spiders, scorpions) and crustaceans (crabs, prawns).',
            'Molluscs have soft bodies, often with shells (snails, oysters, octopus). Annelids are segmented worms (earthworms). Cnidarians include jellyfish and corals.',
            'Invertebrates do vital jobs: pollinating crops, recycling dead material, aerating soil and feeding birds and fish. Their decline would harm entire ecosystems.',
          ],
          v: 'invertebrate = an animal without a backbone; exoskeleton = a hard outer skeleton; arthropod = an invertebrate with jointed legs; mollusc = a soft-bodied invertebrate, often with a shell',
          x: ['Spiders are arachnids, not insects.', 'Earthworms aerate and enrich soil.'],
          s: ['The Tiny Majority', 'Professor Hoot asked the class to count every animal in one square metre of garden. They found two birds flying past — and hundreds of ants, beetles, mites, worms and springtails. "The world is run by tiny creatures," Hoot said. "We just don\'t notice them."'],
          a: [
            mt('Match the animal to its group', 'spider=arachnid|crab=crustacean|snail=mollusc|earthworm=annelid'),
            ct('How many legs does a spider have?', 8),
            tf('Most animal species are invertebrates.', true),
            ch('A hard outer skeleton is an…', '*exoskeleton|endoskeleton|shell bone'),
          ],
          t: ['Why do people often fear spiders and insects even though most are harmless?', 'What would happen without decomposers?'],
          k: ['Explain to someone why insects matter for the food we eat.'],
          m: ['Minibeast Survey', 'a magnifying glass, a white tray, a quadrat (1 m² marked with string), notebook', 'Mark a square metre in a garden or park | Gently search under leaves and stones | Identify and count invertebrates (return them carefully) | Graph your results by group'],
          q: [
            ch('Insects have ___ legs.', '4|*6|8'),
            ch('An octopus is a…', 'crustacean|*mollusc|insect'),
            tf('Invertebrates help recycle dead material.', true),
          ],
          ms: ['Classifies invertebrates into major groups', 'Explains ecological roles', 'Conducts a fair field survey'],
        }),
      ]),
    ]),
    S('s12', 'Animal behaviour science, ethics and human–wildlife conflict.', [
      'Analyse animal behaviour studies', 'Debate ethics of animal use', 'Evaluate solutions to human–wildlife conflict',
    ], [
      U('ethology', 'Animal Behaviour Science', 'Studying how and why animals behave.', 'Innate vs learned behaviour; Field studies: Goodall, Salim Ali; Animal cognition', [
        L('innate-learned', 'Innate and Learned Behaviour', {
          o: ['Distinguish innate from learned behaviour', 'Evaluate methods of animal behaviour research'],
          p: ['Understands evolution and adaptation'],
          e: [
            'Innate behaviours are inherited and done without learning — a spider spinning its first web, a baby turtle heading for the sea. Learned behaviours develop through experience — crows learning to use tools, elephants learning migration routes from elders.',
            'Field researchers observe animals in their natural habitats, often for years. Jane Goodall\'s study of chimpanzees in Tanzania revealed tool use; Salim Ali, "the Birdman of India", conducted systematic bird surveys across India.',
            'Studies of animal cognition show many animals solve problems, remember, and communicate in complex ways — raising questions about how we should treat them.',
          ],
          c: [['evidence', 'Goodall observed chimpanzees making and using termite-fishing tools in 1960. Salim Ali\'s "The Book of Indian Birds" was first published in 1941.']],
          v: 'innate behaviour = inherited, performed without learning; learned behaviour = developed through experience; ethology = the scientific study of animal behaviour; cognition = mental processes like learning and memory',
          x: ['Weaver birds build complex nests; young males improve with practice.', 'Some crows can solve multi-step puzzles.'],
          s: ['The Birdman\'s Notebook', 'As a boy, Salim Ali shot a sparrow with a yellow patch on its throat and took it to the Bombay Natural History Society to ask what it was. That curiosity grew into a lifetime of careful bird surveys across India — and eventually into a powerful voice for protecting birds and their habitats.'],
          a: [
            mt('Innate or learned?', 'spider spinning a web=innate|crow using a stick tool=learned|newborn sucking reflex=innate, present at birth'),
            ch('Salim Ali is known as…', '*the Birdman of India|the Tiger King|the Insect Queen'),
            tf('Some animals can use tools.', true),
            ch('Long-term observation in natural habitats is…', '*field research|astrology|guesswork'),
          ],
          t: ['Is it ethical to keep intelligent animals in captivity? Under what conditions?', 'How can observers avoid influencing the animals they study?'],
          k: ['Present a famous animal behaviour study: question, method, findings and impact.'],
          m: ['Behaviour Observation Log', 'notebook, timer, binoculars (optional)', 'Choose a common animal (pigeons, ants, squirrels) | Observe for 15 minutes on five days | Record behaviours in a table with times | Classify them as innate or learned and write conclusions'],
          q: [
            ch('Innate behaviour is…', '*inherited|always learned from parents|done only by humans'),
            ch('Jane Goodall studied…', '*chimpanzees|tigers|whales'),
            tf('Learned behaviour develops through experience.', true),
          ],
          ms: ['Distinguishes innate and learned behaviours', 'Evaluates research methods', 'Conducts systematic observations'],
        }),
      ]),
      U('conflict', 'Human–Wildlife Conflict and Ethics', 'Sharing land with wild animals.', 'Elephant and leopard conflict; Corridors and early warning; Ethics of zoos and animal use', [
        L('coexistence', 'Living with Wildlife', {
          o: ['Analyse causes of human–wildlife conflict', 'Evaluate solutions and ethical positions'],
          p: ['Knows conservation and threats'],
          e: [
            'As towns and farms expand into forests, people and wildlife compete for space. Elephants may raid crops; leopards may enter villages at night. Both people and animals can be harmed.',
            'Solutions include wildlife corridors linking forests, early warning systems (SMS alerts when elephants approach), compensation for crop loss, community-based conservation and better land-use planning.',
            'Ethical questions arise: How should we weigh human livelihoods against animal welfare? Should zoos exist? Different philosophies and traditions — including Jain and Buddhist ideas of ahimsa (non-violence) — offer different answers.',
          ],
          c: [['belief', 'Jainism teaches ahimsa — non-harm — towards all living beings; many Hindus and Buddhists also value non-violence, and some communities, such as the Bishnoi of Rajasthan, protect wildlife as a religious duty.']],
          v: 'human–wildlife conflict = negative interactions between people and wild animals; wildlife corridor = a strip of habitat connecting protected areas; coexistence = living together peacefully; ahimsa = non-violence',
          x: ['Elephant early-warning SMS systems used in parts of Karnataka and Tamil Nadu.', 'The Bishnoi community protects blackbuck and chinkara.'],
          s: ['The Elephant Alert', 'In a village at the forest edge, phones buzzed at dusk: "Elephants approaching from the east." Families stayed indoors, and farmers lit lights at field edges as advised. The herd passed through and returned to the forest. No one was hurt — on either side.'],
          a: [
            ch('A strip of habitat linking forests is a…', '*wildlife corridor|highway|fence'),
            mt('Match the solution to the problem', 'SMS alerts=warning of approaching elephants|compensation=helping farmers after crop loss|corridors=allowing safe animal movement'),
            tf('Human–wildlife conflict can harm both people and animals.', true),
            ch('Ahimsa means…', '*non-violence|hunting|farming'),
          ],
          t: ['Whose needs should come first when an elephant destroys a farmer\'s crop?', 'Are well-run zoos good for conservation or mainly for entertainment?'],
          k: ['Run a role-play meeting with a farmer, a forest officer, a conservationist and a villager to agree a plan.'],
          m: ['Conflict Resolution Proposal', 'case study research, notebook', 'Choose a real conflict case in India | Map stakeholders and their interests | Evaluate three possible solutions with evidence | Write a proposal recommending a plan with ethical reasoning'],
          q: [
            ch('Which reduces conflict?', '*early warning systems|clearing more forest|feeding wild animals junk food'),
            ch('The Bishnoi community is known for…', '*protecting wildlife|building ships|mining'),
            tf('Ethical questions about animals can have different reasonable answers.', true),
          ],
          ms: ['Analyses causes of conflict', 'Evaluates solutions with evidence', 'Reasons ethically and respectfully about diverse views'],
        }),
      ]),
    ]),
  ],
});
