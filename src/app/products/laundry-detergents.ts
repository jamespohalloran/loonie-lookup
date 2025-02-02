import { Product } from '../products'

export const laundryDetergents: Product[] = [
  {
    name: 'Tide',
    company: 'Procter & Gamble',
    percentCanadian: 0,
    notes: 'Made in the US. Available in most grocery stores across Canada.',
    categoryId: 'laundryDetergents',
    aliases: ['tide detergent'],
    popularity: 95
  },
  {
    name: 'Sunlight',
    company: 'Henkel',
    percentCanadian: 0,
    categoryId: 'laundryDetergents',
    aliases: ['sunlight detergent'],
    popularity: 80
  },
  {
    name: 'Purex',
    company: 'Henkel',
    percentCanadian: 0,
    categoryId: 'laundryDetergents',
    aliases: ['purex detergent'],
    popularity: 75
  },
  {
    name: 'Presidents Choice',
    company: 'Loblaw Companies',
    percentCanadian: 90,
    notes: 'Loblaw’s private label detergent. Made mainly with Canadian ingredients.',
    categoryId: 'laundryDetergents',
    aliases: ['pc detergent', "president's choice detergent"],
    popularity: 85
  },
  {
    name: 'Great Value',
    company: 'Walmart Canada',
    percentCanadian: 0,
    categoryId: 'laundryDetergents',
    aliases: ['great value detergent', 'walmart detergent'],
    popularity: 80
  },
  {
    name: 'Kirkland Signature',
    company: 'Costco',
    percentCanadian: 0,
    categoryId: 'laundryDetergents',
    aliases: ['kirkland detergent', 'costco detergent'],
    popularity: 70
  },
  {
    name: 'Attitude',
    company: 'Bio Spectra',
    percentCanadian: 100,
    notes: 'A eco-friendly Canadian brand, available in select health food stores and major grocery stores.',
    categoryId: 'laundryDetergents',
    aliases: ['attitude detergent'],
    popularity: 60
  },
  {
    name: 'Compliments',
    company: 'Sobeys',
    percentCanadian: 90,
    notes: 'Sobeys’ store brand detergent, made mainly with Canadian ingredients. Widely available in Sobeys locations across Canada.',
    categoryId: 'laundryDetergents',
    aliases: ['compliments laundry soap', 'sobeys laundry detergent'],
    popularity: 70
  },
  {
    name: 'Seventh Generation',
    company: 'Unilever',
    percentCanadian: 0,
    notes: 'A United States-based company that produces cleaning, paper, and personal care products with a focus on sustainability.',
    categoryId: 'laundryDetergents',
    aliases: ['seventh generation detergent'],
    popularity: 50
  },
  {
    name: 'Arm & Hammer',
    company: 'Church & Dwight',
    percentCanadian: 0,
    notes: 'A United States-based manufacturer of household products that is widely known for its brands of baking soda and cleaning products.',
    categoryId: 'laundryDetergents',
    aliases: ['arm and hammer detergent'],
    popularity: 85
  },
]

export const laundryDetergentsCategory = {
  name: 'Laundry Detergents',
  description: 'Household products used for cleaning clothes and textiles. They are typically made from chemicals to remove stains and odors.',
  aliases: ['washing powders', 'fabric care', 'cleaning agents']
}