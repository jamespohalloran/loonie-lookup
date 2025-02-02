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
import { yogurt, yogurtCategory } from './products/yogurt'

export const products: Product[] = [
  ...soda,
  ...beer,
  ...chips,
  ...iceCream,
  ...soap,
  ...milk,
  ...cheese,
  ...yogurt,
  ...butter,
  ...bread,
  ...eggs,
  ...bacon,
  ...sausages,
  ...chicken,
  ...beef,
  ...pork,
  ...frozenVegetables,
  ...frozenPizza,
  ...frozenMeals,
  ...crackers,
  ...popcorn,
  ...cereal,
  ...granolaBars,
  ...pasta,
  ...rice,
  ...cannedSoup,
  ...cannedVegetables,
  ...cannedFish,
  ...peanutButter,
  ...jam,
  ...ketchup,
  ...mustard,
  ...mayonnaise,
  ...bbqSauce,
  ...saladDressing,
  ...cookingOil,
  ...flour,
  ...sugar,
  ...coffee,
  ...tea,
  ...bottledWater,
  ...juice,
  ...energyDrinks,
  ...chocolate,
  ...candy,
  ...proteinBars,
  ...babyFormula,
  ...diapers,
  ...toiletPaper,
  ...paperTowels,
  ...laundryDetergent,
  ...dishSoap,
  ...shampoo,
  ...toothpaste,
  ...streamingServices,
]

export const categories = {
  milk: milkCategory,
  cheese: cheeseCategory,
  yogurt: yogurtCategory,
  butter: butterCategory,
  bread: breadCategory,
  eggs: eggsCategory,
  bacon: baconCategory,
  sausages: sausagesCategory,
  chicken: chickenCategory,
  beef: beefCategory,
  pork: porkCategory,
  frozenVegetables: frozenVegetablesCategory,
  frozenPizza: frozenPizzaCategory,
  frozenMeals: frozenMealsCategory,
  // iceCream: iceCreamCategory,
  // chips: chipsCategory,
  crackers: crackersCategory,
  popcorn: popcornCategory,
  cereal: cerealCategory,
  granolaBars: granolaBarsCategory,
  pasta: pastaCategory,
  rice: riceCategory,
  cannedSoup: cannedSoupCategory,
  cannedVegetables: cannedVegetablesCategory,
  cannedFish: cannedFishCategory,
  peanutButter: peanutButterCategory,
  jam: jamCategory,
  ketchup: ketchupCategory,
  mustard: mustardCategory,
  mayonnaise: mayoCategory,
  bbqsauce: bbqsauceCategory,
  saladDressing: saladDressingCategory,
  cookingOil: cookingOilCategory,
  flour: flourCategory,
  sugar: sugarCategory,
  coffee: coffeeCategory,
  tea: teaCategory,
  bottledWater: bottledWaterCategory,
  juice: juiceCategory,
  energyDrinks: energyDrinksCategory,
  chocolate: chocolateCategory,
  candy: candyCategory,
  proteinBars: proteinBarsCategory,
  babyFormula: babyFormulaCategory,
  diapers: diapersCategory,
  toiletPaper: toiletPaperCategory,
  paperTowels: paperTowelsCategory,
  detergent: detergentCategory,
  dishSoap: dishSoapCategory,
  shampoo: shampooCategory,
  toothpaste: toothpasteCategory,
  soap: soapCategory,
  streamingServices: streamingServicesCategory,
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
  ice_cream: {
    name: 'Ice Cream',
    description: 'Ice cream and frozen desserts',
    aliases: ['ice cream', 'frozen desserts'],
  },
  beer: {
    name: 'Beer',
    description: 'Beer and alcoholic beverages',
    aliases: ['beer', 'alcoholic beverages'],
  },
  soda: {
    name: 'Soda',
    description: 'Soft drinks and carbonated beverages',
    aliases: ['soda', 'soft drinks', 'carbonated beverages', 'pop'],
  },
  snacks: {
    name: 'Snacks',
    description: 'Chips, candy, and other snacks',
    aliases: ['snacks', 'chips', 'candy'],
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
  produce: {
    name: 'Produce',
    description: 'Fruits and vegetables',
    aliases: ['produce', 'fruits', 'vegetables'],
  },
  beverages: {
    name: 'Beverages',
    description: 'Coffee, tea, and other beverages',
    aliases: ['beverages', 'coffee', 'tea'],
  },
  frozen: {
    name: 'Frozen',
    description: 'Frozen meals and desserts',
    aliases: ['frozen', 'meals', 'desserts'],
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
  cleaning: {
    name: 'Cleaning',
    description: 'Cleaning supplies and household products',
    aliases: ['cleaning', 'supplies', 'household'],
  },
  pet: {
    name: 'Pet',
    description: 'Pet food and supplies',
    aliases: ['pet', 'food', 'supplies'],
  },
  baby: {
    name: 'Baby',
    description: 'Baby food and supplies',
    aliases: ['baby', 'food', 'supplies'],
  },
  health: {
    name: 'Health',
    description: 'Vitamins, supplements, and other health products',
    aliases: ['health', 'vitamins', 'supplements'],
  },
  beauty: {
    name: 'Beauty',
    description: 'Makeup, skincare, and other beauty products',
    aliases: ['beauty', 'makeup', 'skincare'],
  },
  clothing: {
    name: 'Clothing',
    description: 'Clothing and accessories',
    aliases: ['clothing', 'accessories'],
  },
  electronics: {
    name: 'Electronics',
    description: 'Electronics and gadgets',
    aliases: ['electronics', 'gadgets'],
  },
  home: {
    name: 'Home',
    description: 'Furniture, decor, and other home items',
    aliases: ['home', 'furniture', 'decor'],
  },
  office: {
    name: 'Office',
    description: 'Office supplies and equipment',
    aliases: ['office', 'supplies', 'equipment'],
  },
  automotive: {
    name: 'Automotive',
    description: 'Car parts and accessories',
    aliases: ['automotive', 'car', 'parts'],
  },
  tools: {
    name: 'Tools',
    description: 'Tools and hardware',
    aliases: ['tools', 'hardware'],
  },
  sports: {
    name: 'Sports',
    description: 'Sporting goods and equipment',
    aliases: ['sports', 'goods', 'equipment'],
  },
  outdoor: {
    name: 'Outdoor',
    description: 'Camping gear and outdoor equipment',
    aliases: ['outdoor', 'camping', 'gear'],
  },
  toys: {
    name: 'Toys',
    description: 'Toys and games',
    aliases: ['toys', 'games'],
  },
  books: {
    name: 'Books',
    description: 'Books and reading materials',
    aliases: ['books', 'reading'],
  },
  music: {
    name: 'Music',
    description: 'Music and audio products',
    aliases: ['music', 'audio'],
  },
  movies: {
    name: 'Movies',
    description: 'Movies and video products',
    aliases: ['movies', 'video'],
  },
  software: {
    name: 'Software',
    description: 'Software and digital products',
    aliases: ['software', 'digital'],
  },
  services: {
    name: 'Services',
    description: 'Services and subscriptions',
    aliases: ['services', 'subscriptions'],
  },
  meat: {
    name: 'Meat',
    description: 'Meat and meat products',
    aliases: ['meat', 'products'],
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
