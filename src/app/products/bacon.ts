import { Product } from '../products'

export const bacon: Product[] = [
  {
    name: 'Maple Leaf',
    company: 'Maple Leaf Foods',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A truly Canadian brand using pork raised by Canadian farmers.',
    categoryId: 'bacon',
    aliases: ['maple leaf bacon'],
    popularity: 95
  },
  {
    name: 'Schneiders',
    company: 'Maple Leaf Foods',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'One of Canada\'s oldest food companies, all bacon products are made with 100% locally sourced pork.',
    categoryId: 'bacon',
    aliases: ['schneiders bacon'],
    popularity: 90
  },
  {
    name: 'President’s Choice',
    company: 'Loblaw Companies',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'The product is made within Canada using Canadian pork with wide availability across the country.',
    categoryId: 'bacon',
    aliases: ['pc bacon', "president's choice bacon"],
    popularity: 85
  },
  {
    name: 'Olymel',
    company: 'Olymel LP',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Fully Canadian company producing traditional smoked bacon, widely available across Canada.',
    categoryId: 'bacon',
    aliases: ['olymel bacon'],
    popularity: 80
  },
  {
    name: 'Great Value',
    company: 'Walmart Canada',
    countryCode: 'CA',
    percentCanadian: 50,
    notes: 'Walmart’s store brand bacon that is available in Walmart locations across Canada.',
    categoryId: 'bacon',
    aliases: ['great value bacon', 'walmart bacon'],
    popularity: 75
  },
  {
    name: 'Kirkland Signature',
    company: 'Costco',
    countryCode: 'US',
    percentCanadian: 50,
    notes: 'Costco’s private label bacon available across Costco locations.',
    categoryId: 'bacon',
    aliases: ['kirkland bacon', 'costco bacon'],
    popularity: 70
  },
  {
    name: 'Hormel',
    company: 'Hormel',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'An American brand with bacon products, but their products are available and popular in Canada.',
    categoryId: 'bacon',
    aliases: ['hormel bacon'],
    popularity: 65
  },
  {
    name: 'Compliments',
    company: 'Sobeys',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Sobeys’ private label bacon produced exclusively for their stores across Canada.',
    categoryId: 'bacon',
    aliases: ['compliments bacon'],
    popularity: 60
  },
  {
    name: 'Grimm’s Fine Foods',
    company: 'Grimm’s Fine Foods',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A Western Canadian company, mainly found in BC, Alberta and select stores nationwide.',
    categoryId: 'bacon',
    aliases: ['grimm bacon', 'grimm’s bacon'],
    popularity: 55
  },
  {
    name: 'Oscar Mayer',
    company: 'Oscar Mayer',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Produced by an American company and wide-spread across Canada.',
    categoryId: 'bacon',
    aliases: ['oscar mayer bacon'],
    popularity: 50
  }
]

export const baconCategory = {
  name: 'Bacon',
  description: 'A type of salt-cured pork, typically served in slices as a breakfast dish or used in cooking for its fat content.',
  aliases: ['pork', 'meat', 'breakfast']
}