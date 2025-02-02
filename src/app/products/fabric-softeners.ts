import { Product } from '../products'

export const fabricSofteners: Product[] = [
  {
    name: 'Downy',
    company: 'Procter & Gamble',
    percentCanadian: 0,
    notes: 'An American brand widely available in Canadian grocery stores.',
    categoryId: 'fabricSofteners',
    aliases: ['downy fabric softener'],
    popularity: 95
  },
  {
    name: 'Snuggle',
    company: 'Sun Products',
    percentCanadian: 0,
    notes: 'Though the brand is American, it is widely found in supermarkets and convenience stores across Canada.',
    categoryId: 'fabricSofteners',
    aliases: ['snuggle fabric softener'],
    popularity: 85
  },
  {
    name: 'Gain',
    company: 'Procter & Gamble',
    percentCanadian: 0,
    notes: 'A well-known American brand, Gain fabric softener can be found in most grocery stores across Canada.',
    categoryId: 'fabricSofteners',
    aliases: ['gain fabric softener'],
    popularity: 90
  },
  {
    name: 'Purex',
    company: 'Henkel',
    percentCanadian: 0,
    notes: 'Purex fabric softener is a popular brand easily found in stores across Canada. The brand is originally from Germany.',
    categoryId: 'fabricSofteners',
    aliases: ['purex fabric softener'],
    popularity: 80
  },
  {
    name: 'Bounce',
    company: 'Procter & Gamble',
    percentCanadian: 0,
    notes: 'Bounce fabric softener is widely available in stores throughout Canada, but it is an American brand.',
    categoryId: 'fabricSofteners',
    aliases: ['bounce fabric softener'],
    popularity: 75
  },
  {
    name: 'Fleecy',
    company: 'Colgate-Palmolive',
    percentCanadian: 0,
    notes: 'Though the brand is headquartered in the United States, Fleecy products are quite prevalent in Canadian stores.',
    categoryId: 'fabricSofteners',
    aliases: ['fleecy fabric softener'],
    popularity: 70
  },
  {
    name: 'Arm & Hammer',
    company: 'Church & Dwight',
    percentCanadian: 0,
    notes: 'An American brand, Arm & Hammer fabric softeners are widely distributed in Canadian markets.',
    categoryId: 'fabricSofteners',
    aliases: ['arm and hammer fabric softener'],
    popularity: 65
  },
  {
    name: 'Tide',
    company: 'Procter & Gamble',
    percentCanadian: 0,
    notes: 'An American brand, Tide fabric conditioners are recognized and sold extensively in Canadian stores.',
    categoryId: 'fabricSofteners',
    aliases: ['tide fabric softener'],
    popularity: 60
  },
  {
    name: 'Great Value',
    company: 'Walmart Canada',
    percentCanadian: 5,
    notes: 'Walmart’s private label fabric softener, made in the USA but widely available in Walmart locations across Canada.',
    categoryId: 'fabricSofteners',
    aliases: ['great value fabric softener', 'walmart fabric softener'],
    popularity: 55
  },
  {
    name: 'Sunlight',
    company: 'Henkel',
    percentCanadian: 0,
    notes: 'Sunlight is a global brand, originating from the UK. Its fabric softeners are available in most Canadian grocery stores.',
    categoryId: 'fabricSofteners',
    aliases: ['sunlight fabric softener'],
    popularity: 50
  }
]

export const fabricSoftenersCategory = {
  name: 'Fabric Softeners',
  description: 'A product added to laundry to make clothes feel softer and smell fresh. Available in liquid, single-dose pack, and dryer sheet variations.',
  aliases: ['laundry care', 'fabric care', 'laundry enhancers']
}