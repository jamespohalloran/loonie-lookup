import { Product } from '../products'

export const ovenCleaners: Product[] = [
  {
    name: 'Easy-Off',
    company: 'Reckitt Benckiser',
    percentCanadian: 0,
    notes: 'Produced in the US',
    categoryId: 'ovenCleaners',
    aliases: ['easy off', 'easy-off oven cleaner'],
    popularity: 90
  },
  {
    name: 'Mr. Clean',
    company: 'Procter & Gamble',
    percentCanadian: 0,
    notes: 'Produced in the US',
    categoryId: 'ovenCleaners',
    aliases: ['mr clean', 'mr. clean oven cleaner'],
    popularity: 85
  },
  {
    name: 'Goo Gone',
    company: 'Weiman Products, LLC',
    percentCanadian: 0,
    notes: 'Produced in the US',
    categoryId: 'ovenCleaners',
    aliases: ['goo gone', 'goo gone oven cleaner'],
    popularity: 80
  },
  {
    name: 'ZEP Commercial',
    company: 'ZEP Inc.',
    percentCanadian: 0,
    notes: 'Produced in the US',
    categoryId: 'ovenCleaners',
    aliases: ['zep', 'zep commercial oven cleaner'],
    popularity: 75
  },
  {
    name: 'Weiman',
    company: 'Weiman Products, LLC',
    percentCanadian: 0,
    notes: 'Produced in the US',
    categoryId: 'ovenCleaners',
    aliases: ['weiman oven cleaner'],
    popularity: 70
  }
];

export const ovenCleanersCategory = {
  name: 'Oven Cleaners',
  description: 'Products designed to clean ovens by breaking down baked-on food and grime.',
  aliases: ['cleaning', 'household cleaners', 'kitchen cleaners']
}