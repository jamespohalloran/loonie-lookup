import { Product } from '../products'

export const glassCleaners: Product[] = [
  {
    name: 'Windex',
    company: 'SC Johnson',
    percentCanadian: 0,
    notes: 'Made in the USA.',
    categoryId: 'glassCleaners',
    aliases: ['windex glass cleaner'],
    popularity: 95
  },
  {
    name: 'Mr. Clean',
    company: 'Procter & Gamble',
    percentCanadian: 0,
    notes: 'Made in the USA.',
    categoryId: 'glassCleaners',
    aliases: ['mr clean glass cleaner'],
    popularity: 85
  },
  {
    name: 'Clorox',
    company: 'The Clorox Company',
    percentCanadian: 0,
    notes: 'Made in the USA.',
    categoryId: 'glassCleaners',
    aliases: ['clorox glass cleaner'],
    popularity: 75
  },
  {
    name: 'Great Value',
    company: 'Walmart Canada',
    percentCanadian: 0,
    notes: 'Made in the USA.',
    categoryId: 'glassCleaners',
    aliases: ['great value glass cleaner', 'walmart glass cleaner'],
    popularity: 80
  },
  {
    name: 'Sprayway',
    company: 'Sprayway Inc',
    percentCanadian: 0,
    notes: 'Made in the USA.',
    categoryId: 'glassCleaners',
    aliases: ['sprayway glass cleaner'],
    popularity: 70
  },
  {
    name: 'Method',
    company: 'Method Products',
    percentCanadian: 0,
    notes: 'Made in the USA.',
    categoryId: 'glassCleaners',
    aliases: ['method glass cleaner'],
    popularity: 65
  },
  {
    name: 'Seventh Generation',
    company: 'Seventh Generation Inc',
    percentCanadian: 0,
    notes: 'Made in the USA.',
    categoryId: 'glassCleaners',
    aliases: ['seventh generation glass cleaner'],
    popularity: 60
  },
  {
    name: 'LA’s Totally Awesome',
    company: 'LA’s Totally Awesome',
    percentCanadian: 0,
    notes: 'Made in the USA.',
    categoryId: 'glassCleaners',
    aliases: ['las totally awesome glass cleaner'],
    popularity: 55
  },
  {
    name: 'Eco-Max',
    company: 'Eco-Max',
    percentCanadian: 100,
    notes: 'Eco-friendly brand,  made entirely in Canada.',
    categoryId: 'glassCleaners',
    aliases: ['eco-max glass cleaner'],
    popularity: 50
  },
  {
    name: 'Green Works',
    company: 'The Clorox Company',
    percentCanadian: 0,
    notes: 'Made in the USA.',
    categoryId: 'glassCleaners',
    aliases: ['green works glass cleaner'],
    popularity: 45
  }
]

export const glassCleanersCategory = {
  name: 'Glass Cleaners',
  description: 'Cleaning products specifically designed for cleaning glass surfaces without leaving streaks or residue.',
  aliases: ['cleaner', 'cleaning supplies', 'home supplies']
}