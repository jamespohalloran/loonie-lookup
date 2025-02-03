import { allPurposeCleanerCategory, allPurposeCleaners } from './products/all-purpose-cleaners'
import { babyFormula, babyFormulaCategory } from './products/babyFormula'
import { bacon, baconCategory } from './products/bacon'
import { bbqSauce, bbqsauceCategory } from './products/bbqSauce'
import { beef, beefCategory } from './products/beef'
import { beer } from './products/beer'
import { bottledWater, bottledWaterCategory } from './products/bottledWater'
import { bread, breadCategory } from './products/bread'
import { butter, butterCategory } from './products/butter'
import { candy, candyCategory } from './products/candy'
import { cannedFish, cannedFishCategory } from './products/cannedFish'
import { cannedSoup, cannedSoupCategory } from './products/cannedSoup'
import { cannedVegetables, cannedVegetablesCategory } from './products/cannedVegetables'
import { cereal, cerealCategory } from './products/cereal'
import { cheese, cheeseCategory } from './products/cheese'
import { chicken, chickenCategory } from './products/chicken'
import { chips } from './products/chips'
import { chocolate, chocolateCategory } from './products/chocolate'
import { clothing } from './products/clothing'
import { coffee, coffeeCategory } from './products/coffee'
import { cookingOil, cookingOilCategory } from './products/cookingOil'
import { crackers, crackersCategory } from './products/crackers'
import { diapers, diapersCategory } from './products/diapers'
import { dishSoap, dishSoapCategory } from './products/dishSoap'
import { eggs, eggsCategory } from './products/eggs'
import { energyDrinks, energyDrinksCategory } from './products/energyDrinks'
import { flour, flourCategory } from './products/flour'
import { frozenMeals, frozenMealsCategory } from './products/frozenMeals'
import { frozenPizza, frozenPizzaCategory } from './products/frozenPizza'
import { frozenVegetables, frozenVegetablesCategory } from './products/frozenVegetables'
import { granolaBars, granolaBarsCategory } from './products/granolaBars'
import { iceCream } from './products/iceCream'
import { jam, jamCategory } from './products/jam'
import { juice, juiceCategory } from './products/juice'
import { ketchup, ketchupCategory } from './products/ketchup'
import { detergentCategory, laundryDetergent } from './products/laundryDetergent'
import { mayoCategory, mayonnaise } from './products/mayonnaise'
import { menstrualCare } from './products/menstrual'
import { milk, milkCategory } from './products/milk'
import { mustard, mustardCategory } from './products/mustard'
import { paperTowels, paperTowelsCategory } from './products/paperTowels'
import { pasta, pastaCategory } from './products/pasta'
import { peanutButter, peanutButterCategory } from './products/peanutButter'
import { popcorn, popcornCategory } from './products/popcorn'
import { pork, porkCategory } from './products/pork'
import { proteinBars, proteinBarsCategory } from './products/proteinBars'
import { rice, riceCategory } from './products/rice'
import { saladDressing, saladDressingCategory } from './products/saladDressing'
import { sausages, sausagesCategory } from './products/sausages'
import { shampoo, shampooCategory } from './products/shampoo'
import { soap, soapCategory } from './products/soap'
import { soda } from './products/soda'
import { streamingServices, streamingServicesCategory } from './products/streamingService'
import { sugar, sugarCategory } from './products/sugar'
import { tea, teaCategory } from './products/tea'
import { toiletPaper, toiletPaperCategory } from './products/toiletPaper'
import { toothpaste, toothpasteCategory } from './products/toothpaste'
import { yogurtCategory } from './products/yogurt'

import { airFresheners, airFreshenersCategory } from './products/air-fresheners'
import { automotiveCleaners, automotiveCleanersCategory } from './products/automotive-cleaners'
import { bleachWhiteners, bleachWhitenersCategory } from './products/bleach-whiteners'
import { carpetShampoo, carpetShampooCategory } from './products/carpet-shampoo'
import { dishwasherDetergents, dishwasherDetergentsCategory } from './products/dishwasher-detergents'
import { dishwashingLiquid, dishwashingLiquidCategory } from './products/dishwashing-liquid'
import { disinfectant, disinfectantCategory } from './products/disinfectants'
import { drainCleaners, drainCleanersCategory } from './products/drain-cleaners'
import { dryerSheets, dryerSheetsCategory } from './products/dryer-sheets'
import { electronicsScreenCleaners, electronicsScreenCleanersCategory } from './products/electronics-screen-cleaners'
import { fabricRefreshers, fabricRefreshersCategory } from './products/fabric-refreshers'
import { fabricSofteners, fabricSoftenersCategory } from './products/fabric-softeners'
import { garbageDisposalCleaners, garbageDisposalCleanersCategory } from './products/garbage-disposal-cleaners'
import { glassCleaners, glassCleanersCategory } from './products/glass-cleaners'
import { hardwoodFloorCleaners, hardwoodFloorCleanersCategory } from './products/hardwood-floor-cleaners'
import { jewelryCleaners, jewelryCleanersCategory } from './products/jewelry-cleaners'
import { laundryDetergents, laundryDetergentsCategory } from './products/laundry-detergents'
import { leatherCleaners, leatherCleanersCategory } from './products/leather-cleaners'
import { mildewMoldRemovers, mildewMoldRemoversCategory } from './products/mildew-mold-removers'
import { odorEliminators, odorEliminatorsCategory } from './products/odor-eliminators'
import { ovenCleaners, ovenCleanersCategory } from './products/oven-cleaners'
import { petStainOdorRemovers, petStainOdorRemoversCategory } from './products/pet-stain-odor-removers'
import { rugUpholsteryCleaners, rugUpholsteryCleanersCategory } from './products/rug-upholstery-cleaners'
import { shoeCleaners, shoeCleanersCategory } from './products/shoe-cleaners'
import { showerTubCleaner, showerTubCleanerCategory } from './products/shower-tub-cleaners'
import { stainRemovers, stainRemoversCategory } from './products/stain-removers'
import { stainlessSteelCleaners, stainlessSteelCleanersCategory } from './products/stainless-steel-cleaners'
import { tileGroutCleaners, tileGroutCleanersCategory } from './products/tile-grout-cleaners'
import { tileLaminateCleaner, tileLaminateCleanerCategory } from './products/tile-laminate-cleaners'
import { toiletBowlCleaners, toiletBowlCleanersCategory } from './products/toilet-bowl-cleaners'
import { woodPolish, woodPolishCategory } from './products/wood-polish'

export const products: Product[] = [
  ...babyFormula,
  ...bacon,
  ...bbqSauce,
  ...beef,
  ...beer,
  ...bottledWater,
  ...bread,
  ...butter,
  ...candy,
  ...cannedFish,
  ...cannedSoup,
  ...cannedVegetables,
  ...cereal,
  ...cheese,
  ...chicken,
  ...chips,
  ...chocolate,
  ...clothing,
  ...coffee,
  ...cookingOil,
  ...crackers,
  ...diapers,
  ...dishSoap,
  ...eggs,
  ...energyDrinks,
  ...flour,
  ...frozenMeals,
  ...frozenPizza,
  ...frozenVegetables,
  ...granolaBars,
  ...iceCream,
  ...jam,
  ...juice,
  ...ketchup,
  ...laundryDetergent,
  ...mayonnaise,
  ...menstrualCare,
  ...milk,
  ...mustard,
  ...paperTowels,
  ...pasta,
  ...peanutButter,
  ...popcorn,
  ...pork,
  ...proteinBars,
  ...rice,
  ...saladDressing,
  ...sausages,
  ...shampoo,
  ...soap,
  ...soda,
  ...sugar,
  ...tea,
  ...toiletPaper,
  ...toothpaste,
  ...allPurposeCleaners,
  ...streamingServices,
  ...glassCleaners,
  ...disinfectant,
  ...woodPolish,
  ...stainlessSteelCleaners,
  ...dishwashingLiquid,
  ...dishwasherDetergents,
  ...ovenCleaners,
  ...drainCleaners,
  ...garbageDisposalCleaners,
  ...toiletBowlCleaners,
  ...showerTubCleaner,
  ...tileGroutCleaners,
  ...mildewMoldRemovers,
  ...hardwoodFloorCleaners,
  ...tileLaminateCleaner,
  ...carpetShampoo,
  ...rugUpholsteryCleaners,
  ...laundryDetergents,
  ...fabricSofteners,
  ...bleachWhiteners,
  ...stainRemovers,
  ...dryerSheets,
  ...airFresheners,
  ...fabricRefreshers,
  ...odorEliminators,
  ...electronicsScreenCleaners,
  ...jewelryCleaners,
  ...leatherCleaners,
  ...shoeCleaners,
  ...automotiveCleaners,
  ...petStainOdorRemovers,
]

export const categories = {
  babyFormula: babyFormulaCategory,
  bacon: baconCategory,
  bbqsauce: bbqsauceCategory,
  beef: beefCategory,
  bottledWater: bottledWaterCategory,
  bread: breadCategory,
  butter: butterCategory,
  candy: candyCategory,
  cannedFish: cannedFishCategory,
  cannedSoup: cannedSoupCategory,
  cannedVegetables: cannedVegetablesCategory,
  cereal: cerealCategory,
  cheese: cheeseCategory,
  chicken: chickenCategory,
  chocolate: chocolateCategory,
  coffee: coffeeCategory,
  cookingOil: cookingOilCategory,
  crackers: crackersCategory,
  detergent: detergentCategory,
  diapers: diapersCategory,
  dishSoap: dishSoapCategory,
  eggs: eggsCategory,
  energyDrinks: energyDrinksCategory,
  flour: flourCategory,
  frozenMeals: frozenMealsCategory,
  frozenPizza: frozenPizzaCategory,
  frozenVegetables: frozenVegetablesCategory,
  granolaBars: granolaBarsCategory,
  jam: jamCategory,
  juice: juiceCategory,
  ketchup: ketchupCategory,
  mayonnaise: mayoCategory,
  milk: milkCategory,
  mustard: mustardCategory,
  paperTowels: paperTowelsCategory,
  pasta: pastaCategory,
  peanutButter: peanutButterCategory,
  popcorn: popcornCategory,
  pork: porkCategory,
  proteinBars: proteinBarsCategory,
  rice: riceCategory,
  saladDressing: saladDressingCategory,
  sausages: sausagesCategory,
  shampoo: shampooCategory,
  soap: soapCategory,
  sugar: sugarCategory,
  tea: teaCategory,
  toiletPaper: toiletPaperCategory,
  toothpaste: toothpasteCategory,
  yogurt: yogurtCategory,
  automotive: {
    name: 'Automotive',
    description: 'Car parts and accessories',
    aliases: ['automotive', 'car', 'parts'],
  },
  streamingServices: streamingServicesCategory,
  allPurposeCleaners: allPurposeCleanerCategory,

  airFresheners: airFreshenersCategory,
  automotiveCleaners: automotiveCleanersCategory,
  bleachWhiteners: bleachWhitenersCategory,
  carpetShampoo: carpetShampooCategory,
  dishwasherDetergents: dishwasherDetergentsCategory,
  dishwashingLiquid: dishwashingLiquidCategory,
  disinfectants: disinfectantCategory,
  drainCleaners: drainCleanersCategory,
  dryerSheets: dryerSheetsCategory,
  electronicsScreenCleaners: electronicsScreenCleanersCategory,
  fabricRefreshers: fabricRefreshersCategory,
  fabricSofteners: fabricSoftenersCategory,
  garbageDisposalCleaners: garbageDisposalCleanersCategory,
  glassCleaners: glassCleanersCategory,
  hardwoodFloorCleaners: hardwoodFloorCleanersCategory,
  jewelryCleaners: jewelryCleanersCategory,
  laundryDetergents: laundryDetergentsCategory,
  leatherCleaners: leatherCleanersCategory,
  mildewMoldRemovers: mildewMoldRemoversCategory,
  odorEliminators: odorEliminatorsCategory,
  ovenCleaners: ovenCleanersCategory,
  petStainOdorRemovers: petStainOdorRemoversCategory,
  rugUpholsteryCleaners: rugUpholsteryCleanersCategory,
  shoeCleaners: shoeCleanersCategory,
  showerTubCleaner: showerTubCleanerCategory,
  stainRemovers: stainRemoversCategory,
  stainlessSteelCleaners: stainlessSteelCleanersCategory,
  tileGroutCleaners: tileGroutCleanersCategory,
  tileLaminateCleaner: tileLaminateCleanerCategory,
  toiletBowlCleaners: toiletBowlCleanersCategory,
  woodPolish: woodPolishCategory,

  // milk: milkCategory,
  // cheese: cheeseCategory,
  // yogurt: yogurtCategory,
  // butter: butterCategory,
  // soap: soapCategory,
  chips: {
    name: 'Chips',
    description: 'Potato chips and snack foods',
    aliases: ['chips', 'snacks'],
  },
  baby: {
    name: 'Baby',
    description: 'Baby food and supplies',
    aliases: ['baby', 'food', 'supplies'],
  },
  beauty: {
    name: 'Beauty',
    description: 'Makeup, skincare, and other beauty products',
    aliases: ['beauty', 'makeup', 'skincare'],
  },
  beverages: {
    name: 'Beverages',
    description: 'Coffee, tea, and other beverages',
    aliases: ['beverages', 'coffee', 'tea'],
  },
  beer: {
    name: 'Beer',
    description: 'Beer and alcoholic beverages',
    aliases: ['beer', 'alcoholic beverages'],
  },
  books: {
    name: 'Books',
    description: 'Books and reading materials',
    aliases: ['books', 'reading'],
  },
  cleaning: {
    name: 'Cleaning',
    description: 'Cleaning supplies and household products',
    aliases: ['cleaning', 'supplies', 'household'],
  },
  clothing: {
    name: 'Clothing',
    description: 'Clothing and accessories',
    aliases: ['apparel', 'clothing', 'accessories', 'fashion'],
  },
  condiments: {
    name: 'Condiments',
    description: 'Ketchup, mustard, and other condiments',
    aliases: ['condiments', 'ketchup', 'mustard'],
  },
  dairy: {
    name: 'Dairy',
    description: 'Milk, cheese, and other dairy products',
    aliases: ['dairy', 'milk', 'cheese'],
  },
  electronics: {
    name: 'Electronics',
    description: 'Electronics and gadgets',
    aliases: ['electronics', 'gadgets'],
  },
  frozen: {
    name: 'Frozen',
    description: 'Frozen meals and desserts',
    aliases: ['frozen', 'meals', 'desserts'],
  },
  health: {
    name: 'Health',
    description: 'Vitamins, supplements, and other health products',
    aliases: ['health', 'vitamins', 'supplements'],
  },
  home: {
    name: 'Home',
    description: 'Furniture, decor, and other home items',
    aliases: ['home', 'furniture', 'decor'],
  },
  ice_cream: {
    name: 'Ice Cream',
    description: 'Ice cream and frozen desserts',
    aliases: ['ice cream', 'frozen desserts'],
  },
  meat: {
    name: 'Meat',
    description: 'Meat and meat products',
    aliases: ['meat', 'products'],
  },
  menstrualCare: {
    name: 'Menstrual Care',
    description: 'Menstrual, period and other products for feminine hygiene',
    aliases: ['menstrual', 'period', 'feminine hygiene'],
  },
  movies: {
    name: 'Movies',
    description: 'Movies and video products',
    aliases: ['movies', 'video'],
  },
  music: {
    name: 'Music',
    description: 'Music and audio products',
    aliases: ['music', 'audio'],
  },
  office: {
    name: 'Office',
    description: 'Office supplies and equipment',
    aliases: ['office', 'supplies', 'equipment'],
  },
  outdoor: {
    name: 'Outdoor',
    description: 'Camping gear and outdoor equipment',
    aliases: ['outdoor', 'camping', 'gear'],
  },
  pantry: {
    name: 'Pantry',
    description: 'Canned goods, pasta, and other pantry items',
    aliases: ['pantry', 'canned', 'pasta'],
  },
  personalCare: {
    name: 'Personal Care',
    description: 'Shampoo, soap, and other personal care products',
    aliases: ['personal care', 'shampoo', 'soap'],
  },
  pet: {
    name: 'Pet',
    description: 'Pet food and supplies',
    aliases: ['pet', 'food', 'supplies'],
  },
  produce: {
    name: 'Produce',
    description: 'Fruits and vegetables',
    aliases: ['produce', 'fruits', 'vegetables'],
  },
  services: {
    name: 'Services',
    description: 'Services and subscriptions',
    aliases: ['services', 'subscriptions'],
  },
  snacks: {
    name: 'Snacks',
    description: 'Chips, candy, and other snacks',
    aliases: ['snacks', 'chips', 'candy'],
  },
  soda: {
    name: 'Soda',
    description: 'Soft drinks and carbonated beverages',
    aliases: ['soda', 'soft drinks', 'carbonated beverages', 'pop'],
  },
  software: {
    name: 'Software',
    description: 'Software and digital products',
    aliases: ['software', 'digital'],
  },
  sports: {
    name: 'Sports',
    description: 'Sporting goods and equipment',
    aliases: ['sports', 'goods', 'equipment'],
  },
  tools: {
    name: 'Tools',
    description: 'Tools and hardware',
    aliases: ['tools', 'hardware'],
  },
  toys: {
    name: 'Toys',
    description: 'Toys and games',
    aliases: ['toys', 'games'],
  },
}

export interface Product {
  name: string
  company: string
  percentCanadian: number
  notes: string
  categoryId: keyof typeof categories
  aliases: string[]
  popularity?: number
}

export function getProductsByCategory(categoryId: keyof typeof categories) {
  return products.filter((product) => product.categoryId === categoryId)
}
