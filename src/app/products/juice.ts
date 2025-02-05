import { Product } from '../products'

export const juice: Product[] = [
  {
    name: 'Minute Maid',
    company: 'Coca-Cola Company',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Produced in the US.',
    categoryId: 'juice',
    aliases: ['minute maid juice'],
    popularity: 95
  },
  {
    name: 'Tropicana',
    company: 'PepsiCo Inc',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Produced in the US.',
    categoryId: 'juice',
    aliases: ['tropicana juice'],
    popularity: 90
  },
  {
    name: 'Ocean Spray',
    company: 'Ocean Spray',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Produced in the US.',
    categoryId: 'juice',
    aliases: ['ocean spray juice'],
    popularity: 85
  },
  {
    name: 'President’s Choice',
    company: 'Loblaw Companies',
    countryCode: 'CA',
    percentCanadian: 90,
    notes: 'Loblaw’s private label juice.',
    categoryId: 'juice',
    aliases: ['pc juice', "president's choice juice"],
    popularity: 80
  },
  {
    name: 'Sun-Rype',
    company: 'Jim Pattison Group',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Founded in British Columbia and uses Canadian fruit where possible.',
    categoryId: 'juice',
    aliases: ['sun-rype juice', 'sunrype'],
    popularity: 75
  },
  {
    name: 'Allen’s',
    company: 'Lassonde Industries',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A Canadian company based in Quebec, known for its apple juice.',
    categoryId: 'juice',
    aliases: ['allens juice', 'allen juice'],
    popularity: 70
  },
  {
    name: 'Great Value',
    company: 'Walmart Canada',
    countryCode: 'CA',
    percentCanadian: 50,
    notes: 'Walmart’s store brand juice, widely available in Walmart locations across Canada.',
    categoryId: 'juice',
    aliases: ['great value juice', 'walmart juice'],
    popularity: 65
  },
  {
    name: 'Kirkland Signature',
    company: 'Costco',
    countryCode: 'US',
    percentCanadian: 50,
    notes: 'Costco’s private label juice, available at all Costco locations but not in regular grocery stores.',
    categoryId: 'juice',
    aliases: ['kirkland juice', 'costco juice'],
    popularity: 60
  },
  {
    name: 'Simply Orange',
    company: 'Coca-Cola Company',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Produced in the US.',
    categoryId: 'juice',
    aliases: ['simply orange juice'],
    popularity: 55
  },
  {
    name: 'Naked',
    company: 'PepsiCo Inc',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Produced in the US.',
    categoryId: 'juice',
    aliases: ['naked juice'],
    popularity: 50
  }
]

export const juiceCategory = {
  name: 'Juice',
  description: 'a liquid naturally contained in fruit or vegetable tissue and is typically consumed as a beverage.',
  aliases: ['fruit juice', 'vegetable juice']
}