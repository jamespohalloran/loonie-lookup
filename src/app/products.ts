import { airFresheners, airFreshenersCategory } from './products/air-fresheners'
import { allPurposeCleanerCategory, allPurposeCleaners } from './products/all-purpose-cleaners'
import { automotiveCleaners, automotiveCleanersCategory } from './products/automotive-cleaners'
import { babyFormula, babyFormulaCategory } from './products/babyFormula'
import { bacon, baconCategory } from './products/bacon'
import { bbqSauce, bbqsauceCategory } from './products/bbqSauce'
import { beef, beefCategory } from './products/beef'
import { beer } from './products/beer'
import { bleachWhiteners, bleachWhitenersCategory } from './products/bleach-whiteners'
import { bottledWater, bottledWaterCategory } from './products/bottledWater'
import { bread, breadCategory } from './products/bread'
import { butter, butterCategory } from './products/butter'
import { candy, candyCategory } from './products/candy'
import { cannedFish, cannedFishCategory } from './products/cannedFish'
import { cannedSoup, cannedSoupCategory } from './products/cannedSoup'
import { cannedVegetables, cannedVegetablesCategory } from './products/cannedVegetables'
import { carpetShampoo, carpetShampooCategory } from './products/carpet-shampoo'
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
import { detergentCategory, laundryDetergent } from './products/laundryDetergent'
import { dinnerware } from './products/dinnerware'
import { dishSoap, dishSoapCategory } from './products/dishSoap'
import { dishwasherDetergents, dishwasherDetergentsCategory } from './products/dishwasher-detergents'
import { dishwashingLiquid, dishwashingLiquidCategory } from './products/dishwashing-liquid'
import { disinfectant, disinfectantCategory } from './products/disinfectants'
import { drainCleaners, drainCleanersCategory } from './products/drain-cleaners'
import { dryerSheets, dryerSheetsCategory } from './products/dryer-sheets'
import { eggs, eggsCategory } from './products/eggs'
import { electronicsScreenCleaners, electronicsScreenCleanersCategory } from './products/electronics-screen-cleaners'
import { energyDrinks, energyDrinksCategory } from './products/energyDrinks'
import { fabricRefreshers, fabricRefreshersCategory } from './products/fabric-refreshers'
import { fabricSofteners, fabricSoftenersCategory } from './products/fabric-softeners'
import { flour, flourCategory } from './products/flour'
import { frozenMeals, frozenMealsCategory } from './products/frozenMeals'
import { frozenPizza, frozenPizzaCategory } from './products/frozenPizza'
import { frozenVegetables, frozenVegetablesCategory } from './products/frozenVegetables'
import { garbageDisposalCleaners, garbageDisposalCleanersCategory } from './products/garbage-disposal-cleaners'
import { glassCleaners, glassCleanersCategory } from './products/glass-cleaners'
import { granolaBars, granolaBarsCategory } from './products/granolaBars'
import { hardwoodFloorCleaners, hardwoodFloorCleanersCategory } from './products/hardwood-floor-cleaners'
import { hosting } from './products/hosting'
import { iceCream } from './products/iceCream'
import { jam, jamCategory } from './products/jam'
import { jewelryCleaners, jewelryCleanersCategory } from './products/jewelry-cleaners'
import { juice, juiceCategory } from './products/juice'
import { ketchup, ketchupCategory } from './products/ketchup'
import { laundryDetergents, laundryDetergentsCategory } from './products/laundry-detergents'
import { leatherCleaners, leatherCleanersCategory } from './products/leather-cleaners'
import { mayoCategory, mayonnaise } from './products/mayonnaise'
import { menstrualCare } from './products/menstrual'
import { mildewMoldRemovers, mildewMoldRemoversCategory } from './products/mildew-mold-removers'
import { milk, milkCategory } from './products/milk'
import { mustard, mustardCategory } from './products/mustard'
import { odorEliminators, odorEliminatorsCategory } from './products/odor-eliminators'
import { ovenCleaners, ovenCleanersCategory } from './products/oven-cleaners'
import { paperTowels, paperTowelsCategory } from './products/paperTowels'
import { pasta, pastaCategory } from './products/pasta'
import { peanutButter, peanutButterCategory } from './products/peanutButter'
import { petStainOdorRemovers, petStainOdorRemoversCategory } from './products/pet-stain-odor-removers'
import { popcorn, popcornCategory } from './products/popcorn'
import { pork, porkCategory } from './products/pork'
import { proteinBars, proteinBarsCategory } from './products/proteinBars'
import { rice, riceCategory } from './products/rice'
import { rugUpholsteryCleaners, rugUpholsteryCleanersCategory } from './products/rug-upholstery-cleaners'
import { saladDressing, saladDressingCategory } from './products/saladDressing'
import { sausages, sausagesCategory } from './products/sausages'
import { shampoo, shampooCategory } from './products/shampoo'
import { shoeCleaners, shoeCleanersCategory } from './products/shoe-cleaners'
import { showerTubCleaner, showerTubCleanerCategory } from './products/shower-tub-cleaners'
import { soap, soapCategory } from './products/soap'
import { soda } from './products/soda'
import { stainRemovers, stainRemoversCategory } from './products/stain-removers'
import { stainlessSteelCleaners, stainlessSteelCleanersCategory } from './products/stainless-steel-cleaners'
import { streamingServices, streamingServicesCategory } from './products/streamingService'
import { sugar, sugarCategory } from './products/sugar'
import { tea, teaCategory } from './products/tea'
import { tileGroutCleaners, tileGroutCleanersCategory } from './products/tile-grout-cleaners'
import { tileLaminateCleaner, tileLaminateCleanerCategory } from './products/tile-laminate-cleaners'
import { toiletBowlCleaners, toiletBowlCleanersCategory } from './products/toilet-bowl-cleaners'
import { toiletPaper, toiletPaperCategory } from './products/toiletPaper'
import { toothpaste, toothpasteCategory } from './products/toothpaste'
import { woodPolish, woodPolishCategory } from './products/wood-polish'
import { yogurt, yogurtCategory } from './products/yogurt'

export const products: Product[] = [
  ...airFresheners,
  ...allPurposeCleaners,
  ...automotiveCleaners,
  ...babyFormula,
  ...bacon,
  ...bbqSauce,
  ...beef,
  ...beer,
  ...bleachWhiteners,
  ...bottledWater,
  ...bread,
  ...butter,
  ...candy,
  ...cannedFish,
  ...cannedSoup,
  ...cannedVegetables,
  ...carpetShampoo,
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
  ...dishwasherDetergents,
  ...dishwashingLiquid,
  ...disinfectant,
  ...dinnerware,
  ...drainCleaners,
  ...dryerSheets,
  ...eggs,
  ...electronicsScreenCleaners,
  ...energyDrinks,
  ...fabricRefreshers,
  ...fabricSofteners,
  ...flour,
  ...frozenMeals,
  ...frozenPizza,
  ...frozenVegetables,
  ...garbageDisposalCleaners,
  ...glassCleaners,
  ...granolaBars,
  ...hardwoodFloorCleaners,
  ...hosting,
  ...iceCream,
  ...jam,
  ...jewelryCleaners,
  ...juice,
  ...ketchup,
  ...laundryDetergent,
  ...laundryDetergents,
  ...leatherCleaners,
  ...mayonnaise,
  ...menstrualCare,
  ...mildewMoldRemovers,
  ...milk,
  ...mustard,
  ...odorEliminators,
  ...ovenCleaners,
  ...paperTowels,
  ...pasta,
  ...peanutButter,
  ...petStainOdorRemovers,
  ...popcorn,
  ...pork,
  ...proteinBars,
  ...rice,
  ...rugUpholsteryCleaners,
  ...saladDressing,
  ...sausages,
  ...shampoo,
  ...shoeCleaners,
  ...showerTubCleaner,
  ...soap,
  ...soda,
  ...stainRemovers,
  ...stainlessSteelCleaners,
  ...streamingServices,
  ...sugar,
  ...tea,
  ...tileGroutCleaners,
  ...tileLaminateCleaner,
  ...toiletBowlCleaners,
  ...toiletPaper,
  ...toothpaste,
  ...woodPolish,
  ...yogurt,
]

export const categories = {
  airFresheners: airFreshenersCategory,
  allPurposeCleaners: allPurposeCleanerCategory,
  automotive: {
    name: 'Automotive',
    description: 'Car parts and accessories',
    aliases: ['automotive', 'car', 'parts'],
  },
  automotiveCleaners: automotiveCleanersCategory,
  baby: {
    name: 'Baby',
    description: 'Baby food and supplies',
    aliases: ['baby', 'food', 'supplies'],
  },
  babyFormula: babyFormulaCategory,
  bacon: baconCategory,
  bbqsauce: bbqsauceCategory,
  beauty: {
    name: 'Beauty',
    description: 'Makeup, skincare, and other beauty products',
    aliases: ['beauty', 'makeup', 'skincare'],
  },
  beef: beefCategory,
  beer: {
    name: 'Beer',
    description: 'Beer and alcoholic beverages',
    aliases: ['beer', 'alcoholic beverages'],
  },
  bleachWhiteners: bleachWhitenersCategory,
  books: {
    name: 'Books',
    description: 'Books and reading materials',
    aliases: ['books', 'reading'],
  },
  bottledWater: bottledWaterCategory,
  bread: breadCategory,
  butter: butterCategory,
  candy: candyCategory,
  cannedFish: cannedFishCategory,
  cannedSoup: cannedSoupCategory,
  cannedVegetables: cannedVegetablesCategory,
  carpetShampoo: carpetShampooCategory,
  cereal: cerealCategory,
  cheese: cheeseCategory,
  chicken: chickenCategory,
  chocolate: chocolateCategory,
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
  coffee: coffeeCategory,
  condiments: {
    name: 'Condiments',
    description: 'Ketchup, mustard, and other condiments',
    aliases: ['condiments', 'ketchup', 'mustard'],
  },
  cookingOil: cookingOilCategory,
  crackers: crackersCategory,
  dairy: {
    name: 'Dairy',
    description: 'Milk, cheese, and other dairy products',
    aliases: ['dairy', 'milk', 'cheese'],
  },
  diapers: diapersCategory,
  dinnerware: {
    name: 'Dinnerware',
    description: 'Dinnerware and tableware',
    aliases: ['dinnerware', 'tableware'],
  },
  dishSoap: dishSoapCategory,
  dishwasherDetergents: dishwasherDetergentsCategory,
  dishwashingLiquid: dishwashingLiquidCategory,
  disinfectants: disinfectantCategory,
  drainCleaners: drainCleanersCategory,
  dryerSheets: dryerSheetsCategory,
  eggs: eggsCategory,
  electronics: {
    name: 'Electronics',
    description: 'Electronics and gadgets',
    aliases: ['electronics', 'gadgets'],
  },
  electronicsScreenCleaners: electronicsScreenCleanersCategory,
  energyDrinks: energyDrinksCategory,
  fabricRefreshers: fabricRefreshersCategory,
  fabricSofteners: fabricSoftenersCategory,
  flour: flourCategory,
  frozen: {
    name: 'Frozen',
    description: 'Frozen meals and desserts',
    aliases: ['frozen', 'meals', 'desserts'],
  },
  frozenMeals: frozenMealsCategory,
  frozenPizza: frozenPizzaCategory,
  frozenVegetables: frozenVegetablesCategory,
  garbageDisposalCleaners: garbageDisposalCleanersCategory,
  glassCleaners: glassCleanersCategory,
  granolaBars: granolaBarsCategory,
  hardwoodFloorCleaners: hardwoodFloorCleanersCategory,
  health: {
    name: 'Health',
    description: 'Vitamins, supplements, and other health products',
    aliases: ['health', 'vitamins', 'supplements'],
  },
  hosting: {
    name: 'Hosting Services',
    description: 'Web/Server hosting and domain services',
    aliases: ['hosting', 'web hosting', 'domain', 'server', 'cloud', 'backend'],
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
  jam: jamCategory,
  jewelryCleaners: jewelryCleanersCategory,
  juice: juiceCategory,
  ketchup: ketchupCategory,
  laundryDetergent: detergentCategory,
  laundryDetergents: laundryDetergentsCategory,
  leatherCleaners: leatherCleanersCategory,
  mayonnaise: mayoCategory,
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
  mildewMoldRemovers: mildewMoldRemoversCategory,
  milk: milkCategory,
  movies: {
    name: 'Movies',
    description: 'Movies and video products',
    aliases: ['movies', 'video'],
  },
  mustard: mustardCategory,
  odorEliminators: odorEliminatorsCategory,
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
  ovenCleaners: ovenCleanersCategory,
  pantry: {
    name: 'Pantry',
    description: 'Canned goods, pasta, and other pantry items',
    aliases: ['pantry', 'canned', 'pasta'],
  },
  paperTowels: paperTowelsCategory,
  pasta: pastaCategory,
  peanutButter: peanutButterCategory,
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
  petStainOdorRemovers: petStainOdorRemoversCategory,
  popcorn: popcornCategory,
  pork: porkCategory,
  produce: {
    name: 'Produce',
    description: 'Fruits and vegetables',
    aliases: ['produce', 'fruits', 'vegetables'],
  },
  proteinBars: proteinBarsCategory,
  rice: riceCategory,
  rugUpholsteryCleaners: rugUpholsteryCleanersCategory,
  saladDressing: saladDressingCategory,
  sausages: sausagesCategory,
  services: {
    name: 'Services',
    description: 'Services and subscriptions',
    aliases: ['services', 'subscriptions'],
  },
  shampoo: shampooCategory,
  shoeCleaners: shoeCleanersCategory,
  showerTubCleaner: showerTubCleanerCategory,
  chips: {
    name: 'Chips',
    description: 'Chips, tortilla chips, and other snacks',
    aliases: ['snacks', 'chips', 'tortilla chips'],
  },
  soap: soapCategory,
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
  stainRemovers: stainRemoversCategory,
  stainlessSteelCleaners: stainlessSteelCleanersCategory,
  streamingServices: streamingServicesCategory,
  sugar: sugarCategory,
  tea: teaCategory,
  tileGroutCleaners: tileGroutCleanersCategory,
  tileLaminateCleaner: tileLaminateCleanerCategory,
  toiletBowlCleaners: toiletBowlCleanersCategory,
  toiletPaper: toiletPaperCategory,
  tools: {
    name: 'Tools',
    description: 'Tools and hardware',
    aliases: ['tools', 'hardware'],
  },
  toothpaste: toothpasteCategory,
  toys: {
    name: 'Toys',
    description: 'Toys and games',
    aliases: ['toys', 'games'],
  },
  woodPolish: woodPolishCategory,
  yogurt: yogurtCategory,
}

export interface Product {
  name: string
  company: string
  countryCode?: string
  percentCanadian: number
  notes: string
  categoryId: keyof typeof categories
  aliases: string[]
  popularity?: number
}

export const countryCode = {
  AE: { flag: '🇦🇪', name: 'United Arab Emirates' },
  AR: { flag: '🇦🇷', name: 'Argentina' },
  AT: { flag: '🇦🇹', name: 'Austria' },
  AU: { flag: '🇦🇺', name: 'Australia' },
  BE: { flag: '🇧🇪', name: 'Belgium' },
  BG: { flag: '🇧🇬', name: 'Bulgaria' },
  BR: { flag: '🇧🇷', name: 'Brazil' },
  CA: { flag: '🇨🇦', name: 'Canada' },
  CH: { flag: '🇨🇭', name: 'Switzerland' },
  CL: { flag: '🇨🇱', name: 'Chile' },
  CN: { flag: '🇨🇳', name: 'China' },
  CO: { flag: '🇨🇴', name: 'Colombia' },
  CZ: { flag: '🇨🇿', name: 'Czech Republic' },
  DE: { flag: '🇩🇪', name: 'Germany' },
  DK: { flag: '🇩🇰', name: 'Denmark' },
  DZ: { flag: '🇩🇿', name: 'Algeria' },
  EG: { flag: '🇪🇬', name: 'Egypt' },
  ES: { flag: '🇪🇸', name: 'Spain' },
  FI: { flag: '🇫🇮', name: 'Finland' },
  FR: { flag: '🇫🇷', name: 'France' },
  GB: { flag: '🇬🇧', name: 'United Kingdom' },
  GR: { flag: '🇬🇷', name: 'Greece' },
  HK: { flag: '🇭🇰', name: 'Hong Kong' },
  HU: { flag: '🇭🇺', name: 'Hungary' },
  ID: { flag: '🇮🇩', name: 'Indonesia' },
  IE: { flag: '🇮🇪', name: 'Ireland' },
  IL: { flag: '🇮🇱', name: 'Israel' },
  IN: { flag: '🇮🇳', name: 'India' },
  IQ: { flag: '🇮🇶', name: 'Iraq' },
  IR: { flag: '🇮🇷', name: 'Iran' },
  IS: { flag: '🇮🇸', name: 'Iceland' },
  IT: { flag: '🇮🇹', name: 'Italy' },
  JP: { flag: '🇯🇵', name: 'Japan' },
  KE: { flag: '🇰🇪', name: 'Kenya' },
  KR: { flag: '🇰🇷', name: 'South Korea' },
  KW: { flag: '🇰🇼', name: 'Kuwait' },
  KZ: { flag: '🇰🇿', name: 'Kazakhstan' },
  LB: { flag: '🇱🇧', name: 'Lebanon' },
  LK: { flag: '🇱🇰', name: 'Sri Lanka' },
  LT: { flag: '🇱🇹', name: 'Lithuania' },
  LU: { flag: '🇱🇺', name: 'Luxembourg' },
  LV: { flag: '🇱🇻', name: 'Latvia' },
  MA: { flag: '🇲🇦', name: 'Morocco' },
  ME: { flag: '🇲🇪', name: 'Montenegro' },
  MK: { flag: '🇲🇰', name: 'North Macedonia' },
  MT: { flag: '🇲🇹', name: 'Malta' },
  MX: { flag: '🇲🇽', name: 'Mexico' },
  MY: { flag: '🇲🇾', name: 'Malaysia' },
  NG: { flag: '🇳🇬', name: 'Nigeria' },
  NL: { flag: '🇳🇱', name: 'Netherlands' },
  NO: { flag: '🇳🇴', name: 'Norway' },
  NP: { flag: '🇳🇵', name: 'Nepal' },
  NZ: { flag: '🇳🇿', name: 'New Zealand' },
  OM: { flag: '🇴🇲', name: 'Oman' },
  PE: { flag: '🇵🇪', name: 'Peru' },
  PH: { flag: '🇵🇭', name: 'Philippines' },
  PK: { flag: '🇵🇰', name: 'Pakistan' },
  PL: { flag: '🇵🇱', name: 'Poland' },
  PT: { flag: '🇵🇹', name: 'Portugal' },
  QA: { flag: '🇶🇦', name: 'Qatar' },
  RO: { flag: '🇷🇴', name: 'Romania' },
  RS: { flag: '🇷🇸', name: 'Serbia' },
  RU: { flag: '🇷🇺', name: 'Russia' },
  SA: { flag: '🇸🇦', name: 'Saudi Arabia' },
  SE: { flag: '🇸🇪', name: 'Sweden' },
  SG: { flag: '🇸🇬', name: 'Singapore' },
  SI: { flag: '🇸🇮', name: 'Slovenia' },
  SK: { flag: '🇸🇰', name: 'Slovakia' },
  SN: { flag: '🇸🇳', name: 'Senegal' },
  TH: { flag: '🇹🇭', name: 'Thailand' },
  TN: { flag: '🇹🇳', name: 'Tunisia' },
  TR: { flag: '🇹🇷', name: 'Turkey' },
  TW: { flag: '🇹🇼', name: 'Taiwan' },
  TZ: { flag: '🇹🇿', name: 'Tanzania' },
  UA: { flag: '🇺🇦', name: 'Ukraine' },
  UG: { flag: '🇺🇬', name: 'Uganda' },
  US: { flag: '🇺🇸', name: 'United States' },
  UY: { flag: '🇺🇾', name: 'Uruguay' },
  VE: { flag: '🇻🇪', name: 'Venezuela' },
  VN: { flag: '🇻🇳', name: 'Vietnam' },
  ZA: { flag: '🇿🇦', name: 'South Africa' },
  ZM: { flag: '🇿🇲', name: 'Zambia' },
  ZW: { flag: '🇿🇼', name: 'Zimbabwe' },
  GLOBAL: { flag: '🌍', name: 'Global' },
};

export function getProductsByCategory(categoryId: keyof typeof categories) {
  return products.filter((product) => product.categoryId === categoryId)
}

export function getCategories() {
  return Object.entries(categories)
    .map(([key, value]) => ({
      key,
      ...value,
    }))
    .sort((a, b) => (a.name || "").localeCompare(b.name || ""))
}
