export const products: Product[] = [
  {
    name: 'Heinz Ketchup',
    company: 'Heinz',
    percentCanadian: 0,
    notes: 'Made in the USA',
    categoryId: 'condiments',
    aliases: ['heinz', 'ketchup'],
  },
  {
    name: 'French’s Ketchup',
    company: 'French’s',
    percentCanadian: 100,
    notes: 'Made with Canadian tomatoes, produced in Canada',
    categoryId: 'condiments',
    aliases: ['french’s', 'ketchup'],
  },
  {
    name: 'Old Dutch Chips',
    company: 'Old Dutch Foods',
    percentCanadian: 100,
    notes: 'Made in Canada, locally sourced potatoes',
    categoryId: 'snacks',
    aliases: ['old dutch', 'chips'],
  },
  {
    name: 'Kraft Peanut Butter',
    company: 'Kraft Heinz',
    percentCanadian: 0,
    notes: 'Made in the USA, peanuts sourced from the USA',
    categoryId: 'snacks',
    aliases: ['kraft', 'peanut butter'],
  },
  {
    name: 'Tim Hortons Coffee',
    company: 'Tim Hortons',
    percentCanadian: 100,
    notes: 'Roasted in Canada, beans sourced from around the world',
    categoryId: 'beverages',
    aliases: ['tim hortons', 'coffee'],
  },
  {
    name: 'Smucker’s Jam',
    company: 'Smucker’s',
    percentCanadian: 10,
    notes: 'Made in Canada, but fruit is mostly imported',
    categoryId: 'snacks',
    aliases: ['smucker’s', 'jam'],
  },
  {
    name: 'Chapman’s Ice Cream',
    company: 'Chapman’s',
    percentCanadian: 100,
    notes: 'Made in Canada with Canadian dairy',
    categoryId: 'frozen',
    aliases: ['chapman’s', 'ice cream'],
  },
  {
    name: 'Maple Leaf Bacon',
    company: 'Maple Leaf Foods',
    percentCanadian: 80,
    notes: 'Processed in Canada, some pork sourced from the USA',
    categoryId: 'meat',
    aliases: ['maple leaf', 'bacon'],
  },
  {
    name: 'Lays Chips',
    company: 'PepsiCo (Frito-Lay)',
    percentCanadian: 75,
    notes: 'Made in Canada, potatoes sourced locally when possible',
    categoryId: 'snacks',
    aliases: ['lays', 'chips'],
  },
  {
    name: 'Breyers',
    company: 'Unilever',
    percentCanadian: 30,
    notes: 'Manufactured in Canada but owned by Unilever. Some ingredients are imported.',
    categoryId: 'ice_cream',
    aliases: ['breyers'],
  },
  {
    name: 'Häagen-Dazs',
    company: 'Nestlé',
    percentCanadian: 10,
    notes: 'Mostly imported from the U.S., though some varieties are produced in Canada.',
    categoryId: 'ice_cream',
    aliases: ['haagen dazs'],
  },
  {
    name: "Ben & Jerry's",
    company: 'Unilever',
    percentCanadian: 5,
    notes: 'Imported from the U.S., not manufactured in Canada.',
    categoryId: 'ice_cream',
    aliases: ['ben and jerrys', 'ben & jerry'],
  },
  {
    name: "Chapman's",
    company: "Chapman's",
    percentCanadian: 100,
    notes: 'Family-owned Canadian brand, made in Ontario using Canadian dairy.',
    categoryId: 'ice_cream',
    aliases: ['chapmans'],
  },
  {
    name: 'Kawartha Dairy',
    company: 'Kawartha Dairy',
    percentCanadian: 100,
    notes: 'Ontario-based brand, all products are made in Canada using locally sourced dairy.',
    categoryId: 'ice_cream',
    aliases: ['kawartha'],
  },
  {
    name: 'Cows Creamery',
    company: 'Cows Inc.',
    percentCanadian: 100,
    notes: 'PEI-based brand, known for using high-quality Canadian dairy.',
    categoryId: 'ice_cream',
    aliases: ['cows', 'cows creamery'],
  },
  {
    name: "President's Choice Ice Cream",
    company: 'Loblaw Companies',
    percentCanadian: 90,
    notes: 'Loblaw store brand, manufactured in Canada, but some ingredients may be imported.',
    categoryId: 'ice_cream',
    aliases: ['presidents choice', 'pc ice cream'],
  },
  {
    name: 'Nestlé Real Dairy',
    company: 'Nestlé Canada',
    percentCanadian: 50,
    notes: 'Produced in Canada using Canadian dairy, but owned by Nestlé and may use some imported ingredients.',
    categoryId: 'ice_cream',
    aliases: ['nestle', 'real dairy'],
  },
  {
    name: 'Great Value Ice Cream',
    company: 'Walmart Canada',
    percentCanadian: 40,
    notes: "Walmart's store brand. Some varieties are made in Canada, but ingredients and sourcing vary.",
    categoryId: 'ice_cream',
    aliases: ['great value', 'walmart ice cream'],
  },
  {
    name: 'Agropur Iceberg',
    company: 'Agropur Cooperative',
    percentCanadian: 100,
    notes: 'Canadian dairy cooperative brand, made entirely in Canada with local dairy.',
    categoryId: 'ice_cream',
    aliases: ['iceberg', 'agropur'],
  },
]

export const categories = {
  ice_cream: {
    name: 'Ice Cream',
    description: 'Ice cream and frozen desserts',
    aliases: ['ice cream', 'frozen desserts'],
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
}
