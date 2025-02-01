import { Product } from '../products'

export const paperTowels: Product[] = [
  {
    name: 'Bounty',
    company: 'Procter & Gamble',
    percentCanadian: 0,
    notes: 'Manufactured in the US.',
    categoryId: 'paperTowels',
    aliases: ['bounty paper towels'],
    popularity: 99
  },
  {
    name: 'SpongeTowels',
    company: 'Kruger Products',
    percentCanadian: 100,
    notes: 'A Canadian brand that manufactures in both Canada and the US.',
    categoryId: 'paperTowels',
    aliases: ['spongetowels'],
    popularity: 95
  },
  {
    name: 'Royale Tiger Towel',
    company: 'Irving Consumer Products',
    percentCanadian: 100,
    notes: 'Manufactured entirely in Canada.',
    categoryId: 'paperTowels',
    aliases: ['royale tiger towel'],
    popularity: 90
  },
  {
    name: 'President’s Choice Paper Towels',
    company: 'Loblaw Companies',
    percentCanadian: 45,
    notes: 'Manufactured with both Canadian and imported materials.',
    categoryId: 'paperTowels',
    aliases: ['pc paper towels', "president's choice paper towels"],
    popularity: 85
  },
  {
    name: 'Compliments Paper Towels',
    company: 'Sobeys',
    percentCanadian: 40,
    notes: 'Manufactured with both Canadian and imported materials.',
    categoryId: 'paperTowels',
    aliases: ['compliments paper towels', 'sobeys paper towels'],
    popularity: 80
  },
  {
    name: 'AmazonBasics Paper Towels',
    company: 'Amazon',
    percentCanadian: 0,
    notes: 'Manufactured in the US.',
    categoryId: 'paperTowels',
    aliases: ['amazonbasics paper towels', 'amazon paper towels'],
    popularity: 80
  },
  {
    name: 'Kirkland Signature Paper Towels',
    company: 'Costco',
    percentCanadian: 0,
    notes: 'Manufactured in the US.',
    categoryId: 'paperTowels',
    aliases: ['kirkland paper towels', 'costco paper towels'],
    popularity: 75
  },
  {
    name: 'Great Value Paper Towels',
    company: 'Walmart Canada',
    percentCanadian: 0,
    notes: 'Manufactured in the US.',
    categoryId: 'paperTowels',
    aliases: ['great value paper towels', 'walmart paper towels'],
    popularity: 70
  },
  {
    name: 'Marcal Paper Towels',
    company: 'Marcal',
    percentCanadian: 0,
    notes: 'Manufactured in the US.',
    categoryId: 'paperTowels',
    aliases: ['marcal paper towels'],
    popularity: 50
  },
  {
    name: 'No Name Paper Towels',
    company: 'Loblaw Companies',
    percentCanadian: 30,
    notes: 'Manufactured with both Canadian and imported materials.',
    categoryId: 'paperTowels',
    aliases: ['no name paper towels', 'loblaw paper towels'],
    popularity: 60
  }
]

export const paperTowelsCategory = {
  name: 'Paper Towels',
  description: 'Absorbent towels made from paper for cleaning or drying.',
  aliases: ['cleaning supplies', 'household goods', 'disposables']
}