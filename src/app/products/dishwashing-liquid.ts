import { Product } from '../products'

export const dishwashingLiquid: Product[] = [
  {
    name: 'Sunlight',
    company: 'Unilever Canada',
    percentCanadian: 50,
    notes: 'A common Canadian dishwashing brand, uses locally sourced materials and manufactured in Canada though under a multinational company.',
    categoryId: 'dishwashingLiquid',
    aliases: ['sunlight dish soap'],
    popularity: 90
  },
  {
    name: 'Palmolive',
    company: 'Colgate-Palmolive Canada',
    percentCanadian: 0,
    notes: 'Manufactured in the US.',
    categoryId: 'dishwashingLiquid',
    aliases: ['palmolive dish soap'],
    popularity: 85
  },
  {
    name: 'Dawn',
    company: 'Procter & Gamble Canada',
    percentCanadian: 0,
    notes: 'Manufactured in the US.',
    categoryId: 'dishwashingLiquid',
    aliases: ['dawn dish soap'],
    popularity: 80
  },
  {
    name: 'Cascade',
    company: 'Procter & Gamble Canada',
    percentCanadian: 0,
    notes: 'Manufactured in the US.',
    categoryId: 'dishwashingLiquid',
    aliases: ['cascade dish soap'],
    popularity: 80
  },
  {
    name: 'Presidents Choice Dishwashing Liquid',
    company: 'Loblaw Companies',
    percentCanadian: 100,
    notes: 'Loblaws private label dishwashing liquid.',
    categoryId: 'dishwashingLiquid',
    aliases: ['pc dish soap', 'presidents choice dish soap'],
    popularity: 75
  },
  {
    name: 'Compliments',
    company: 'Sobeys',
    percentCanadian: 100,
    notes: 'Sobeys store brand dish soap. widely available in Sobeys locations across Canada.',
    categoryId: 'dishwashingLiquid',
    aliases: ['compliments dish soap'],
    popularity: 75
  },
  {
    name: 'Ivory',
    company: 'Procter & Gamble Canada',
    percentCanadian: 0,
    notes: 'Manufactured in the US.',
    categoryId: 'dishwashingLiquid',
    aliases: ['ivory dish soap'],
    popularity: 70
  },
  {
    name: 'Seventh Generation',
    company: 'Unilever Canada',
    percentCanadian: 0,
    notes: 'Manufactured in the US.',
    categoryId: 'dishwashingLiquid',
    aliases: ['seventh generation dish soap'],
    popularity: 65
  },
  {
    name: 'Great Value Dishwashing Liquid',
    company: 'Walmart Canada',
    percentCanadian: 50,
    notes: 'Walmarts store brand dish soap, widely available in Walmart locations across Canada.',
    categoryId: 'dishwashingLiquid',
    aliases: ['great value dish soap', 'walmart dish soap'],
    popularity: 60
  },
  {
    name: 'Green Works',
    company: 'The Clorox Company of Canada Ltd',
    percentCanadian: 40,
    notes: 'Company is a subsidiary of an American company, dish soap is manufactured in Canada.',
    categoryId: 'dishwashingLiquid',
    aliases: ['green works dish soap'],
    popularity: 60
  }
]

export const dishwashingLiquidCategory = {
  name: 'Dishwashing Liquid',
  description: 'A cleaning product used for washing and cleaning dishes and utensils.',
  aliases: ['dish soap', 'dish detergent']
}