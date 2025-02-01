import { beer } from './products/beer'
import { butter, butterCategory } from './products/butter'
import { cheese, cheeseCategory } from './products/cheese'
import { chips } from './products/chips'
import { iceCream } from './products/iceCream'
import { milk, milkCategory } from './products/milk'
import { soda } from './products/soda'
import { yogurt, yogurtCategory } from './products/yogurt'

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
  ...soda,
  ...beer,
  ...chips,
  ...iceCream,
  ...milk,
  ...cheese,
  ...yogurt,
  ...butter,
]

export const categories = {
  milk: milkCategory,
  cheese: cheeseCategory,
  yogurt: yogurtCategory,
  butter: butterCategory,
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
