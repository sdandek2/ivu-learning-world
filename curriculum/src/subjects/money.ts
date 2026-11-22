import { subject, S, U, L, ch, tf, mt, ct } from '../dsl.ts';

export default subject({
  id: 'money',
  description: 'Money and economics: recognising coins and notes, buying and change, needs and wants, earning and saving, banks and digital payments, supply and demand, markets, inflation, taxes and the economy of India — building both numeracy and economic thinking.',
  stages: [
    S('s4', 'Coins, notes and playing shop.', [
      'Recognise Indian coins and notes', 'Know money is used to buy things', 'Play shop and exchange money for goods',
    ], [
      U('coins-notes', 'Coins and Notes', 'Money we can hold.', 'Coins: ₹1, ₹2, ₹5, ₹10; Notes: ₹10, ₹20, ₹50, ₹100; The ₹ symbol', [
        L('rupees', 'Meet the Rupee', {
          o: ['Recognise common Indian coins and notes', 'Know money is exchanged for things we buy'],
          p: ['Counts to 10'],
          e: [
            'In India, our money is called the rupee. Its symbol is ₹. We have coins (round metal pieces) and notes (paper money).',
            'Coins include ₹1, ₹2, ₹5 and ₹10. Notes include ₹10, ₹20, ₹50, ₹100 and more. Each one has its number written on it.',
            'We use money to buy things. At a shop, you give money and the shopkeeper gives you what you bought.',
          ],
          c: [['evidence', 'The ₹ symbol was adopted by the Government of India in 2010; it was designed by D. Udaya Kumar.']],
          v: 'money = what we use to buy things; rupee = the money of India; coin = round metal money; note = paper money',
          x: ['A ₹10 coin and a ₹10 note have the same value.', 'Buying a banana for ₹5.'],
          s: ['Kiko\'s First Purchase', 'Kiko held a shiny ₹5 coin. At the fruit stall, Kiko pointed to a banana. "Five rupees, please," said the fruit seller. Kiko handed over the coin and got the banana. "I bought it myself!" Kiko beamed.'],
          a: [
            ch('The money of India is the…', '*rupee|dollar|pound'),
            ch('The rupee symbol is…', '*₹|$|£'),
            tf('Coins are made of metal.', true),
            ch('We use money to…', '*buy things|plant seeds|swim'),
          ],
          t: ['Why do you think we use money instead of swapping things?', 'Where does money come from?'],
          k: ['Name three coins or notes to a grown-up and show which is worth the most.'],
          m: ['Play Shop', 'toy items or real fruit, price tags, play money or real coins', 'Set up a shop with price tags | Take turns being the shopkeeper and the customer | Pay the right coins for each item | Count what you have left'],
          q: [
            ch('Paper money is called a…', '*note|coin|cheque'),
            tf('A ₹10 coin and a ₹10 note are worth the same.', true),
            ch('Which is worth more?', '₹2|*₹10'),
          ],
          ms: ['Recognises coins and notes', 'Understands exchange', 'Plays shop with correct coins'],
        }),
      ]),
      U('how-much', 'How Much Does It Cost?', 'Prices and paying.', 'Prices; More and less expensive; Paying with coins that add up', [
        L('paying', 'Paying at the Shop', {
          o: ['Compare prices to find which costs more', 'Pay small amounts with coins'],
          p: ['Recognises coins'],
          e: [
            'A price tells how much something costs. A pencil might cost ₹5; a book might cost ₹50. The book is more expensive.',
            'You can pay ₹5 with one ₹5 coin, or with a ₹2 coin, a ₹2 coin and a ₹1 coin. Different coins can add up to the same amount.',
            'If you don\'t have enough money, you can\'t buy it yet — you might save for it.',
          ],
          v: 'price = how much something costs; expensive = costs a lot; cheap = costs a little; pay = give money for something',
          x: ['₹2 + ₹2 + ₹1 = ₹5.', 'A ₹50 toy is more expensive than a ₹10 toy.'],
          s: ['Momo\'s Coin Puzzle', 'Momo wanted a ₹5 balloon but had no ₹5 coin. Momo had two ₹2 coins and a ₹1 coin. "Two plus two is four, plus one is five!" Momo paid and floated off happily with a red balloon.'],
          a: [
            ct('₹2 + ₹2 + ₹1 = ₹?', 5),
            ch('Which is more expensive?', '₹10 pencil|*₹100 book'),
            ct('₹5 + ₹5 = ₹?', 10),
            tf('Different coins can add up to the same amount.', true),
          ],
          t: ['Why do some things cost more than others?', 'What would you do if you didn\'t have enough money?'],
          k: ['Show a grown-up two different ways to make ₹5 with coins.'],
          m: ['Coin Combinations Game', 'real or play coins, price cards', 'Make price cards from ₹1 to ₹10 | Pick a card | Find two different coin combinations to pay | Check together'],
          q: [
            ct('₹2 + ₹2 + ₹2 = ₹?', 6),
            ch('Expensive means it costs…', '*a lot|a little|nothing'),
            ct('₹10 − ₹5 = ₹?', 5),
          ],
          ms: ['Compares prices', 'Combines coins to pay', 'Understands affordability'],
        }),
      ]),
    ]),
    S('s5', 'Needs and wants, earning and saving.', [
      'Distinguish needs and wants', 'Know people earn money by working', 'Save for a goal',
    ], [
      U('needs-wants', 'Needs and Wants', 'What we must have and what we would like.', 'Needs: food, water, shelter, clothes, health; Wants: toys, treats; Choices', [
        L('need-or-want', 'Need or Want?', {
          o: ['Sort items into needs and wants', 'Explain why needs come first'],
          p: ['Knows money buys things'],
          e: [
            'Needs are things we must have to live and be healthy: food, water, a home, clothes, medicine and education.',
            'Wants are things that are nice to have but we can live without: toys, sweets, games, fancy shoes.',
            'Families have a limited amount of money, so they buy needs first and wants when there is enough left. Choosing is part of using money wisely.',
          ],
          v: 'need = something we must have to live; want = something nice to have; choice = deciding between options; limited = only a certain amount',
          x: ['Rice and dal: needs. A new video game: a want.', 'School books: a need. Stickers: a want.'],
          s: ['The Shopping List', 'Zuri\'s family had ₹500 for the week. The list had rice, vegetables, milk, soap — and a toy Zuri wanted. They bought everything on the list first. Only ₹50 was left, not enough for the toy. "Next month, if we save," said Mama. Zuri understood: needs first.'],
          a: [
            mt('Need or want?', 'water=need|toy car=want|medicine=need, to stay healthy'),
            ch('Which comes first when money is limited?', '*needs|wants'),
            tf('A home is a need.', true),
            ch('Which is a want?', '*a new video game|food|clothes for school'),
          ],
          t: ['Can something be a need for one person and a want for another?', 'How does it feel to wait for a want?'],
          k: ['Sort ten things in your home into needs and wants with a grown-up.'],
          m: ['Needs and Wants Collage', 'old magazines or drawings, paper, glue', 'Divide paper into "Needs" and "Wants" | Cut out or draw items | Stick them on the correct side | Talk about any tricky ones'],
          q: [
            ch('Which is a need?', '*clean water|candy|a balloon'),
            tf('Families buy needs before wants when money is limited.', true),
            ch('Choosing between options is making a…', '*choice|mistake|cake'),
          ],
          ms: ['Classifies needs and wants', 'Explains prioritisation', 'Discusses trade-offs'],
        }),
      ]),
      U('earn-save', 'Earning and Saving', 'Where money comes from and keeping some for later.', 'Jobs earn money; Pocket money; Piggy banks; Saving goals', [
        L('piggy-bank', 'My Piggy Bank', {
          o: ['Explain that people earn money by working', 'Make a plan to save for something'],
          p: ['Distinguishes needs and wants'],
          e: [
            'Money doesn\'t grow on trees! People earn money by working: farmers sell crops, teachers get paid salaries, shopkeepers sell goods.',
            'When we get money, we can spend it now or save it for later. Saving means putting money away to use for something bigger.',
            'If you want a ₹100 book and save ₹10 a week, you need 10 weeks. Saving needs patience!',
          ],
          v: 'earn = get money for work; salary = money paid regularly for a job; save = keep money for later; goal = something you are working towards',
          x: ['A potter earns money by selling pots.', 'Saving coins in a gullak (piggy bank).'],
          s: ['Rangi\'s Gullak', 'Rangi wanted a ₹60 paint set. Every week, Grandpa gave Rangi ₹10 for helping in the garden. Rangi put it in a clay gullak. Week one: ₹10. Week three: ₹30. Week six: ₹60! Rangi broke open the gullak and bought the paints — and painted a picture of Grandpa.'],
          a: [
            ch('People earn money by…', '*working|wishing|sleeping'),
            ch('Save ₹10 each week. After 4 weeks you have…', '₹14|*₹40|₹4'),
            tf('Saving needs patience.', true),
            ch('A salary is…', '*money paid regularly for a job|a type of salad|a toy'),
          ],
          t: ['Why do grown-ups go to work?', 'What would you save for?'],
          k: ['Tell a grown-up a saving goal and how many weeks it would take.'],
          m: ['Savings Goal Chart', 'paper, a jar, coins', 'Draw a thermometer chart up to your goal amount | Put coins in a jar each time you can | Colour the chart as you save | Celebrate when you reach the top'],
          q: [
            ct('Save ₹5 a week. After 3 weeks: ₹?', 15),
            ch('Keeping money for later is…', '*saving|spending|earning'),
            tf('A farmer earns money by selling crops.', true),
          ],
          ms: ['Explains earning', 'Plans savings with calculation', 'Shows delayed gratification'],
        }),
      ]),
    ]),
    S('s6', 'Change, budgets and banks.', [
      'Calculate change', 'Make a simple shopping budget', 'Explain what banks do',
    ], [
      U('change', 'Getting Change', 'Calculating change in shops.', 'Paying with a bigger note; Subtracting to find change; Checking change', [
        L('count-change', 'Count Your Change', {
          o: ['Calculate change from a purchase', 'Check change by counting up'],
          p: ['Subtracts within 100'],
          e: [
            'If something costs ₹35 and you pay with a ₹50 note, the shopkeeper gives back the difference: ₹50 − ₹35 = ₹15. This is your change.',
            'Shopkeepers often "count up": from ₹35, add ₹5 to make ₹40, then ₹10 to make ₹50. That\'s ₹15.',
            'Always check your change — mistakes happen.',
          ],
          v: 'change = money given back when you pay more than the price; difference = how much more one number is than another; total = all added together; receipt = a paper showing what you bought and paid',
          x: ['Price ₹72, pay ₹100, change ₹28.', 'Two items ₹20 + ₹15 = ₹35 total.'],
          s: ['The Honest Shopkeeper', 'Ivaan bought a notebook for ₹42 and paid ₹50. The shopkeeper gave ₹18 change. Ivaan counted up: ₹42 + ₹8 = ₹50 — so the change should be ₹8! He gave ₹10 back. The shopkeeper smiled, "Thank you for your honesty — and your good maths!"'],
          a: [
            ch('Price ₹30, pay ₹50. Change?', '₹30|*₹20|₹80'),
            ch('Price ₹65, pay ₹100. Change?', '₹45|*₹35|₹25'),
            tf('You should check your change.', true),
            ch('Two items cost ₹25 and ₹40. Total?', '₹55|*₹65|₹15'),
          ],
          t: ['Why is counting up a useful trick?', 'What should you do if you get too much change?'],
          k: ['Show a grown-up how you would work out change from ₹100 for an ₹82 item.'],
          m: ['Shop Role-Play with Receipts', 'price tags, play money, paper for receipts', 'Set up a shop with prices | Customers pay with bigger notes | Shopkeepers calculate change by counting up | Write simple receipts and check them'],
          q: [
            ch('Price ₹48, pay ₹50. Change?', '*₹2|₹8|₹12'),
            ch('Money given back is called…', '*change|price|salary'),
            tf('Counting up helps find change.', true),
          ],
          ms: ['Calculates change accurately', 'Uses counting up', 'Checks transactions'],
        }),
      ]),
      U('banks', 'Banks and Safe Money', 'Where money is kept safe.', 'Bank accounts; Deposits and withdrawals; Interest; Digital payments and UPI', [
        L('what-banks-do', 'What Does a Bank Do?', {
          o: ['Explain what banks do', 'Describe digital payments and basic safety'],
          p: ['Saves money'],
          e: [
            'A bank keeps people\'s money safe. Putting money in is a deposit; taking money out is a withdrawal. Banks also lend money to people and businesses.',
            'Banks pay a little extra money, called interest, when you keep savings with them, because they can lend that money to others.',
            'Today many people in India pay with UPI apps on phones by scanning QR codes. Digital money still needs care: never share PINs or OTPs, and children should use digital payments only with a parent.',
          ],
          c: [['evidence', 'UPI (Unified Payments Interface) was launched in India in 2016 by the National Payments Corporation of India and is now used for billions of transactions each month.']],
          v: 'bank = a place that keeps money safe and lends money; deposit = put money in a bank; withdrawal = take money out of a bank; interest = extra money paid on savings',
          x: ['Scanning a QR code at a vegetable stall to pay.', 'Opening a children\'s savings account with a parent.'],
          s: ['The Gullak and the Bank', 'Zuri\'s gullak was full. Grandpa took her to the bank to open a savings account. "Will they keep my money safe?" she asked. "Yes," said the bank officer, "and every year we\'ll add a little interest." A year later, Zuri saw her savings had grown — without her doing anything!'],
          a: [
            mt('Match', 'deposit=put money in|withdrawal=take money out|interest=extra money on savings'),
            ch('Banks pay interest because…', '*they can lend your money to others|they are magic|they print it'),
            tf('Never share your PIN or OTP.', true),
            ch('UPI payments are made using…', '*phones and QR codes|carrier pigeons|cheques only'),
          ],
          t: ['Why might people prefer a bank to a gullak?', 'What are the good and risky sides of digital money?'],
          k: ['Explain to someone what happens when you deposit money in a bank.'],
          m: ['Pretend Bank Passbook', 'a notebook, play money', 'Make a pretend passbook | Record deposits and withdrawals for a month | Add pretend interest at the end | Check your balance each week'],
          q: [
            ch('Taking money out of a bank is a…', 'deposit|*withdrawal|loan'),
            tf('Banks lend money to people and businesses.', true),
            ch('A PIN should be…', '*kept secret|shared with friends|written on your phone case'),
          ],
          ms: ['Explains bank functions', 'Uses banking vocabulary', 'Knows digital payment safety'],
        }),
      ]),
    ]),
    S('s7', 'Markets, supply and demand, and entrepreneurship.', [
      'Explain how markets work', 'Describe supply and demand', 'Plan a small business',
    ], [
      U('markets', 'Markets and Prices', 'Why prices go up and down.', 'Buyers and sellers; Supply and demand; Seasonal prices; Competition', [
        L('supply-demand', 'Supply and Demand', {
          o: ['Explain how supply and demand affect prices', 'Use real examples like seasonal fruit'],
          p: ['Calculates with money'],
          e: [
            'A market is where buyers and sellers meet — a vegetable market, a shop or an online store.',
            'Supply is how much of something is available. Demand is how much people want it. When supply is high and demand low, prices tend to fall. When supply is low and demand high, prices tend to rise.',
            'Mangoes are cheap in peak summer when there are lots of them, and expensive at the start of the season. Onion prices can jump when bad weather damages crops.',
          ],
          v: 'market = a place where buyers and sellers meet; supply = how much is available; demand = how much people want; competition = sellers trying to win customers',
          x: ['Flower prices rise before festivals when demand is high.', 'Two tea stalls side by side keep prices fair through competition.'],
          s: ['The Mango Seller\'s Year', 'In April, Ramesh\'s first mangoes sold for ₹400 a dozen; few were available and everyone wanted them. By late May, mangoes were everywhere and the price fell to ₹150. "Same mangoes," he laughed, "but the market changed."'],
          a: [
            ch('High demand and low supply usually make prices…', '*rise|fall|stay at zero'),
            ch('Plenty of mangoes in peak season make the price…', 'rise|*fall'),
            tf('Competition between sellers can keep prices fair.', true),
            mt('Match', 'supply=how much is available|demand=how much people want|market=where buyers and sellers meet'),
          ],
          t: ['Why might flower prices rise before Diwali?', 'Is it fair for prices to rise a lot during shortages?'],
          k: ['Explain to someone why a fruit is cheaper in its main season.'],
          m: ['Market Price Watch', 'a notebook, visits to a local market over weeks', 'Record prices of three fruits or vegetables each week for a month | Graph the prices | Ask a seller why prices changed | Explain the changes using supply and demand'],
          q: [
            ch('If bad weather destroys onion crops, onion prices likely…', '*rise|fall|disappear'),
            tf('Markets can be online.', true),
            ch('Sellers trying to win customers is…', '*competition|demand|supply'),
          ],
          ms: ['Explains supply and demand', 'Applies to real prices', 'Analyses price data'],
        }),
      ]),
      U('business', 'Starting a Small Business', 'From idea to profit.', 'Costs, revenue and profit; Pricing; Customers; Social enterprise', [
        L('lemonade-stand', 'Costs, Revenue and Profit', {
          o: ['Calculate cost, revenue and profit', 'Plan a small business'],
          p: ['Understands prices and markets'],
          e: [
            'A business sells goods or services. Costs are what you spend to make them (ingredients, cups). Revenue is the money you receive from sales.',
            'Profit = revenue − costs. If you spend ₹200 on ingredients and sell 30 cups of lemonade at ₹10, revenue is ₹300 and profit is ₹100. If costs are higher than revenue, it\'s a loss.',
            'Entrepreneurs find a need, set a fair price, and keep customers happy. Social enterprises use business to solve social or environmental problems.',
          ],
          v: 'cost = money spent to make or provide something; revenue = money received from sales; profit = revenue minus costs; entrepreneur = a person who starts a business',
          x: ['A home tiffin service run by a neighbour.', 'A social enterprise making sanitary pads affordable.'],
          s: ['The Nimbu-Pani Stall', 'Kiko and Zuri set up a nimbu-pani (lemonade) stall for a school fair. Lemons, sugar and cups cost ₹250. They sold 40 glasses at ₹10 each — ₹400. "Profit: ₹150!" said Zuri. They gave half to the school library fund.'],
          a: [
            ch('Revenue ₹500, costs ₹300. Profit?', '₹800|*₹200|₹300'),
            ch('Revenue is…', '*money received from sales|money spent|a type of fruit'),
            tf('If costs are higher than revenue, it is a loss.', true),
            mt('Match', 'cost=money spent|revenue=money received|profit=revenue minus costs'),
          ],
          t: ['How would you decide the price of something you make?', 'What makes customers come back?'],
          k: ['Pitch a small business idea to your family with costs and expected profit.'],
          m: ['Mini Business Project', 'materials for a simple product (cards, bookmarks, snacks), a ledger', 'Choose a product and calculate costs | Set a price | Sell to family or at a school fair | Record revenue and calculate profit or loss, and reflect'],
          q: [
            ch('Costs ₹100, sell 20 items at ₹8. Profit?', '*₹60|₹160|₹80'),
            tf('Entrepreneurs start businesses.', true),
            ch('A business that solves social problems is a…', '*social enterprise|tax|bank'),
          ],
          ms: ['Calculates profit and loss', 'Plans pricing', 'Runs and evaluates a mini-business'],
        }),
      ]),
    ]),
    S('s9', 'Inflation, taxes and the role of government in the economy.', [
      'Explain inflation', 'Explain why taxes are collected', 'Describe GDP and economic sectors in India',
    ], [
      U('inflation', 'Inflation', 'Why prices rise over time.', 'Inflation and purchasing power; Consumer Price Index; RBI and interest rates', [
        L('rising-prices', 'Why Did Prices Go Up?', {
          o: ['Explain inflation and purchasing power', 'Describe how the RBI tries to control inflation'],
          p: ['Understands supply and demand'],
          e: [
            'Inflation is a general rise in prices over time. When prices rise, each rupee buys less — its purchasing power falls. Your grandparents may remember a cup of tea costing a few paise!',
            'Inflation is measured using price indexes like the Consumer Price Index (CPI), which tracks the cost of a basket of common goods and services.',
            'The Reserve Bank of India (RBI) aims to keep inflation moderate (around a 4% target, within a band of 2–6%). It can raise interest rates to cool spending when inflation is high.',
          ],
          c: [['evidence', 'Under India\'s flexible inflation targeting framework (since 2016), the RBI targets 4% CPI inflation with a tolerance band of 2–6%.']],
          v: 'inflation = a general rise in prices over time; purchasing power = how much money can buy; Consumer Price Index = a measure of price changes for common items; RBI = Reserve Bank of India, the central bank',
          x: ['A ₹10 snack costing ₹12 a few years later.', 'Savings losing value if interest is lower than inflation.'],
          s: ['Grandfather\'s Price List', 'Grandfather showed Ivaan an old bill from 1980: rice for a few rupees a kilo, a cinema ticket for a few rupees. Ivaan compared it with today\'s prices — many times higher. "Did everything get more expensive?" Ivaan asked. "Yes," said Grandfather, "but salaries rose too. That\'s inflation."'],
          a: [
            ch('Inflation means…', '*prices generally rise over time|prices always fall|money disappears'),
            ch('When inflation rises, purchasing power…', '*falls|rises|stays the same'),
            tf('The RBI tries to keep inflation moderate.', true),
            ch('The RBI\'s inflation target is about…', '1%|*4%|20%'),
          ],
          t: ['Who is hurt most by high inflation?', 'Why might a little inflation be normal in a growing economy?'],
          k: ['Interview a grandparent about prices in the past and present the comparison.'],
          m: ['Price Then and Now', 'old bills, newspapers, interviews with elders', 'Collect past prices for 5 common items | Find current prices | Calculate percentage increases | Graph and explain the results'],
          q: [
            ch('India\'s central bank is the…', '*RBI|SBI|ISRO'),
            tf('Inflation reduces what each rupee can buy.', true),
            ch('CPI tracks…', '*prices of a basket of common goods|cricket scores|rainfall'),
          ],
          ms: ['Explains inflation and purchasing power', 'Describes monetary policy simply', 'Calculates price changes'],
        }),
      ]),
      U('taxes', 'Taxes and Public Goods', 'Paying for what we share.', 'Direct and indirect taxes: income tax, GST; Public goods; Government budget', [
        L('why-taxes', 'Why Do We Pay Taxes?', {
          o: ['Explain direct and indirect taxes', 'Describe how taxes fund public goods'],
          p: ['Understands government services'],
          e: [
            'Taxes are money people and businesses pay to the government. Direct taxes, like income tax, are paid on income. Indirect taxes, like GST (Goods and Services Tax), are included in the prices of things we buy.',
            'Governments use taxes to provide public goods and services: roads, schools, hospitals, defence, police, clean water and support for people in need.',
            'Each year, the Union Budget, presented in Parliament, shows how the government plans to raise and spend money. Paying taxes honestly is a civic duty.',
          ],
          c: [['evidence', 'GST was introduced in India on 1 July 2017, replacing many earlier indirect taxes.']],
          v: 'tax = money paid to the government; direct tax = tax on income or wealth; indirect tax = tax included in prices; public good = something provided for everyone, like streetlights',
          x: ['GST included in the price of a notebook.', 'Taxes funding a new government hospital.'],
          s: ['The Streetlight Question', 'Ivaan asked, "Who pays for the streetlights?" Papa explained that part of the money they paid in taxes, and in GST when shopping, went to the government, which paid for streetlights, roads and Ivaan\'s school building. "So we all chipped in," said Ivaan.'],
          a: [
            mt('Direct or indirect tax?', 'income tax=direct|GST=indirect|tax on salary=direct, paid on income'),
            ch('Taxes pay for…', '*roads, schools and hospitals|private toys|nothing'),
            tf('GST was introduced in India in 2017.', true),
            ch('The government\'s yearly plan for money is the…', '*budget|calendar|receipt'),
          ],
          t: ['What would happen if nobody paid taxes?', 'How should a government decide what to spend money on?'],
          k: ['Explain to someone how taxes help your neighbourhood.'],
          m: ['Class Budget Simulation', 'pretend tax revenue (e.g. ₹10 crore), list of needs, paper', 'Divide pretend revenue among education, health, roads and others | Justify each choice | Compare with a partner\'s budget | Discuss trade-offs'],
          q: [
            ch('A tax included in the price of goods:', '*indirect tax|direct tax|loan'),
            tf('Paying taxes is a civic duty.', true),
            ch('Streetlights are an example of a…', '*public good|private good|tax'),
          ],
          ms: ['Distinguishes tax types', 'Links taxes to public goods', 'Reasons about budget trade-offs'],
        }),
      ]),
    ]),
    S('s12', 'Macroeconomics, India\'s economy and economic thinking.', [
      'Explain GDP, growth and unemployment', 'Analyse India\'s economic history', 'Apply economic reasoning to policy',
    ], [
      U('macro', 'Measuring an Economy', 'GDP, growth, unemployment and trade.', 'GDP and growth rate; Unemployment; Trade, imports and exports; Exchange rates', [
        L('gdp-growth', 'GDP and Growth', {
          o: ['Explain GDP, growth rate and unemployment', 'Interpret basic economic data'],
          p: ['Understands inflation and taxes'],
          e: [
            'Gross Domestic Product (GDP) is the total value of goods and services produced in a country in a year. GDP growth rate shows how fast the economy is expanding. GDP per capita divides GDP by population.',
            'Unemployment measures people who want work but can\'t find it. In India, much work is informal — without written contracts or social security — which makes measurement complex.',
            'Countries trade: exports are goods sold abroad (like software services, pharmaceuticals and textiles from India); imports are goods bought from abroad (like crude oil). Exchange rates set how many rupees buy a dollar.',
          ],
          c: [['interpretation', 'Economists debate how best to measure informal employment and wellbeing; GDP is useful but incomplete.']],
          v: 'GDP = total value of goods and services produced; per capita = per person; unemployment = people seeking work who cannot find it; export = goods or services sold abroad',
          x: ['India is a major exporter of IT services.', 'Crude oil is one of India\'s largest imports.'],
          s: ['Two Countries, Same GDP', 'Two imaginary countries both have the same GDP. In one, wealth is shared and most people have good schools and hospitals; in the other, a few are very rich and most are poor. "GDP tells you the size of the cake," said the economics teacher, "not how it\'s shared."'],
          a: [
            mt('Match', 'GDP=total value of production|export=sold abroad|import=bought from abroad'),
            ch('GDP per capita means GDP divided by…', '*population|area|number of cities'),
            tf('GDP alone doesn\'t show how wealth is shared.', true),
            ch('A large share of work in India is…', '*informal|done by robots|unpaid always'),
          ],
          t: ['What important things does GDP leave out?', 'Why is informal work hard to measure?'],
          k: ['Explain GDP growth to someone using the "size of the cake" analogy.'],
          m: ['Economic Indicators Dashboard', 'official data summaries (RBI, MoSPI), graph paper or spreadsheet', 'Collect India\'s GDP growth, inflation and unemployment for the last 10 years | Graph them | Identify trends and events | Write an analysis'],
          q: [
            ch('Goods bought from other countries:', '*imports|exports|taxes'),
            tf('The exchange rate sets how many rupees buy a dollar.', true),
            ch('GDP measures…', '*total production value|happiness|population'),
          ],
          ms: ['Explains macroeconomic indicators', 'Interprets data', 'Identifies limitations of GDP'],
        }),
      ]),
      U('india-economy', 'India\'s Economic Journey', 'From 1947 to today.', 'Planned economy and Five-Year Plans; 1991 liberalisation; Services boom; Challenges: jobs, inequality, sustainability', [
        L('reforms-1991', 'The 1991 Turning Point', {
          o: ['Describe major phases of India\'s economic history', 'Evaluate the effects of the 1991 reforms'],
          p: ['Understands GDP and trade'],
          e: [
            'After independence, India followed a mixed, planned economy with Five-Year Plans, public sector industries and many controls on business (often called the "licence raj").',
            'In 1991, facing a balance-of-payments crisis, India began liberalisation, privatisation and globalisation (LPG reforms): reducing licences, opening to foreign investment and trade.',
            'Since then, growth has generally been faster, with a boom in IT and services and a large reduction in extreme poverty. Challenges remain: creating enough good jobs, reducing inequality, supporting agriculture and growing sustainably. Economists debate the reforms\' full effects.',
          ],
          c: [['evidence', 'In 1991, India had foreign exchange reserves sufficient for only a few weeks of imports; reforms were announced in the July 1991 budget by Finance Minister Manmohan Singh.'], ['interpretation', 'Economists and historians differ on how to weigh the benefits and costs of liberalisation for different groups.']],
          v: 'liberalisation = reducing government controls on the economy; privatisation = transferring businesses from government to private ownership; balance of payments = record of a country\'s transactions with the world; Five-Year Plan = a national economic plan for five years',
          x: ['IT companies in Bengaluru growing rapidly after 1991.', 'More foreign brands available in Indian markets.'],
          s: ['The Crisis Summer', 'In 1991, India had so little foreign currency that it pledged gold to borrow money. That July, the government announced sweeping reforms. A young engineer who started a software company that decade later said, "Before, getting a phone line took years. After, everything moved faster."'],
          a: [
            ch('India\'s major economic reforms began in…', '1947|*1991|2016'),
            mt('Match', 'liberalisation=reducing controls|privatisation=moving ownership to private firms|globalisation=opening to world trade'),
            tf('Economists debate the full effects of the reforms.', true),
            ch('A sector that boomed after 1991:', '*IT and services|horse carriages|telegrams'),
          ],
          t: ['Who gained most from the reforms, and who may have been left behind?', 'What economic challenge should India prioritise now?'],
          k: ['Debate: "The 1991 reforms benefited all Indians equally." Present both sides.'],
          m: ['Economic History Timeline and Essay', 'research sources, timeline paper', 'Create a timeline of India\'s economy from 1947 to today | Mark key policies and events | Choose one reform and evaluate its impacts on different groups | Write a 1200-word essay'],
          q: [
            ch('"Licence raj" refers to…', '*heavy government controls on business|a type of driving licence|a royal kingdom'),
            tf('The 1991 reforms followed a balance-of-payments crisis.', true),
            ch('Reducing government controls is…', '*liberalisation|nationalisation|inflation'),
          ],
          ms: ['Describes economic history accurately', 'Evaluates reforms from multiple perspectives', 'Applies economic reasoning to current issues'],
        }),
      ]),
    ]),
  ],
});
