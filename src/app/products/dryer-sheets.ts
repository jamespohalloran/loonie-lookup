import { Product } from '../products'

export const dryerSheets: Product[] = [
  {
    name: 'Bounce',
    company: 'Procter & Gamble',
    percentCanadian: 0,
    notes: 'Originally a US product but widely available in various scents throughout Canada.',
    categoryId: 'dryerSheets',
    aliases: ['bounce dryer sheets'],
    popularity: 95
  },
  {
    name: 'Downy',
    company: 'Procter & Gamble',
    percentCanadian: 0,
    notes: 'Another offering from Procter & Gamble, Downy sheets are found in most Canadian homes.',
    categoryId: 'dryerSheets',
    aliases: ['downy dryer sheets'],
    popularity: 90
  },
  {
    name: 'Snuggle',
    company: 'Sun Products',
    percentCanadian: 0,
    notes: 'Not Canadian, made by the Sun Products, which is a United States corporation.',
    categoryId: 'dryerSheets',
    aliases: ['snuggle dryer sheets'],
    popularity: 85
  },
  {
    name: 'Gain',
    company: 'Procter & Gamble',
    percentCanadian: 0,
    notes: 'Produced by the mega corporation Procter & Gamble and famous for their original scent.',
    categoryId: 'dryerSheets',
    aliases: ['gain dryer sheets'],
    popularity: 80
  },
  {
    name: 'Purex',
    company: 'Henkel',
    percentCanadian: 0,
    notes: 'Made by Henkel, a German company, and widely available in Canada.',
    categoryId: 'dryerSheets',
    aliases: ['purex dryer sheets'],
    popularity: 75
  },
  {
    name: 'Arm & Hammer',
    company: 'Church & Dwight',
    percentCanadian: 0,
    notes: 'Another USA-produced dryer sheet brand, known for their baking soda ingredient.',
    categoryId: 'dryerSheets',
    aliases: ['arm & hammer dryer sheets'],
    popularity: 70
  },
  {
    name: 'Seventh Generation',
    company: 'Unilever',
    percentCanadian: 0,
    notes: 'Known for being an eco-friendly option. Part of the Unilever family with origin in USA.',
    categoryId: 'dryerSheets',
    aliases: ['seventh generation dryer sheets'],
    popularity: 65
  },
  {
    name: 'Method',
    company: 'Ecover',
    percentCanadian: 0,
    notes: 'Part of Method Products, a San Francisco, California-based corporation.',
    categoryId: 'dryerSheets',
    aliases: ['method dryer sheets'],
    popularity: 60
  },
  {
    name: 'Great Value',
    company: 'Walmart Canada',
    percentCanadian: 0,
    categoryId: 'dryerSheets',
    aliases: ['great value dryer sheets', 'walmart dryer sheets'],
    popularity: 55
  },
  {
    name: 'Kirkland Signature',
    company: 'Costco Wholesale',
    percentCanadian: 0,
    categoryId: 'dryerSheets',
    aliases: ['kirkland dryer sheets', 'costco dryer sheets'],
    popularity: 50
  }
]

export const dryerSheetsCategory = {
  name: 'Dryer Sheets',
  description: 'Used to soften clothes and reduce static cling in the dryer. Available in scented and unscented versions.',
  aliases: ['laundry', 'laundry aids']
}