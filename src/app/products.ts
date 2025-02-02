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
import { clothing, clothingCategory } from './products/clothing'
import { coffee, coffeeCategory } from './products/coffee'
import { cookingOil, cookingOilCategory } from './products/cookingOil'
import { crackers, crackersCategory } from './products/crackers'
import { diapers, diapersCategory } from './products/diapers'
import { detergentCategory, laundryDetergent } from './products/laundryDetergent'
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
import { sugar, sugarCategory } from './products/sugar'
import { tea, teaCategory } from './products/tea'
import { toiletPaper, toiletPaperCategory } from './products/toiletPaper'
import { toothpaste, toothpasteCategory } from './products/toothpaste'
import { yogurt, yogurtCategory } from './products/yogurt'

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
  chips: {
    name: 'Chips',
    description: 'Potato chips and snack foods',
    aliases: ['chips', 'snacks'],
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
