import { Product } from '../products'

export const cannedVegetables: Product[] = [
  {
    name: 'Green Giant',
    company: 'B&G Foods',
    percentCanadian: 0,
    notes: 'Manufactured in the United States.',
    categoryId: 'cannedVegetables',
    aliases: ['green giant vegetables'],
    popularity: 95
  },
  {
    name: 'Aylmer',
    company: 'ConAgra Foods',
    percentCanadian: 100,
    notes: 'Aylmer is a Canadian brand and widely available across Canada.',
    categoryId: 'cannedVegetables',
    aliases: ['aylmer vegetables'],
    popularity: 90
  },
  {
    name: 'Del Monte',
    company: 'Del Monte Foods',
    percentCanadian: 0,
    notes: 'Manufactured in the United States.',
    categoryId: 'cannedVegetables',
    aliases: ['del monte vegetables'],
    popularity: 85
  },
  {
    name: 'Habitant',
    company: 'Smuckers',
    percentCanadian: 100,
    notes: 'Habitant is a Canadian brand and is widespread in the Québec region.',
    categoryId: 'cannedVegetables',
    aliases: ['habitant vegetables'],
    popularity: 75
  },
  {
    name: 'Great Value',
    company: 'Walmart Canada',
    percentCanadian: 50,
    notes: 'Walmart’s store brand, widely available in Walmart locations across Canada.',
    categoryId: 'cannedVegetables',
    aliases: ['great value vegetables', 'walmart vegetables'],
    popularity: 80
  },
  {
    name: 'Compliments',
    company: 'Sobeys',
    percentCanadian: 100,
    notes: 'Sobeys’ private label, available in store locations across Canada.',
    categoryId: 'cannedVegetables',
    aliases: ['compliments vegetables'],
    popularity: 70
  },
  {
    name: 'President’s Choice',
    company: 'Loblaw Companies',
    percentCanadian: 100,
    notes: 'Loblaw’s private label, available in store locations across Canada.',
    categoryId: 'cannedVegetables',
    aliases: ['pc vegetables', "president's choice vegetables"],
    popularity: 80
  },
  {
    name: 'Our Compliments',
    company: 'Sobeys',
    percentCanadian: 100,
    notes: 'Sobeys’ premium private label, available in store locations across Canada.',
    categoryId: 'cannedVegetables',
    aliases: ['our compliments vegetables'],
    popularity: 70
  },
  {
    name: 'No Name',
    company: 'Loblaw Companies',
    percentCanadian: 100,
    notes: 'Loblaw’s budget private label, available in store locations across Canada.',
    categoryId: 'cannedVegetables',
    aliases: ['no name vegetables'],
    popularity: 60
  },
  {
    name: 'Kirkland Signature',
    company: 'Costco',
    percentCanadian: 50,
    notes: 'Costco’s private label, available at all Costco locations but not in regular grocery stores.',
    categoryId: 'cannedVegetables',
    aliases: ['kirkland vegetables', 'costco vegetables'],
    popularity: 70
  }
]

export const cannedVegetablesCategory = {
  name: 'Canned Vegetables',
  description: 'Vegetable products preserved in a can for longer shelf life.',
  aliases: ['preserved vegetables', 'canned goods']
}