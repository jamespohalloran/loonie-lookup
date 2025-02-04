import { Product } from '../products'

export const bottledWater: Product[] = [
  {
    name: 'Nestle Pure Life',
    company: 'Nestle Canada Inc.',
    countryCode: 'CA',
    percentCanadian: 50,
    notes: 'Bottled in Canada, under strict control and quality standards. Widely distributed across major grocery chains. Owned by Swiss multinational Nestle.',
    categoryId: 'bottledWater',
    aliases: ['nestle pure life', 'nestle'],
    popularity: 95
  },
  {
    name: 'Flow',
    company: 'Flow Beverages',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Canadian brand that offers mineral-rich water from their own artesian source.',
    categoryId: 'bottledWater',
    aliases: ['flow water'],
    popularity: 90
  },
  {
    name: 'Naya',
    company: 'Naya Waters Inc.',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A reputed Canadian brand, well-known for its natural spring water.',
    categoryId: 'bottledWater',
    aliases: ['naya'],
    popularity: 85
  },
  {
    name: 'Aquafina',
    company: 'PepsiCo',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Bottled water brand owned by PepsiCo, originated in the US.',
    categoryId: 'bottledWater',
    aliases: ['aquafina'],
    popularity: 80
  },
  {
    name: 'Dasani',
    company: 'The Coca-Cola Company',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Owned by The Coca-Cola Company, originated in the US.',
    categoryId: 'bottledWater',
    aliases: ['dasani'],
    popularity: 75
  },
  {
    name: 'Ice River Springs',
    company: 'Ice River Springs Inc.',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Known for its 100% recycled plastic bottles, Ice River Springs is a family-owned Canadian brand.',
    categoryId: 'bottledWater',
    aliases: ['ice river'],
    popularity: 70
  },
  {
    name: 'Eska',
    company: 'Joe’s No Frills',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Canadian brand sourced from a natural spring in unspoiled Northern Quebec wilderness.',
    categoryId: 'bottledWater',
    aliases: ['eska'],
    popularity: 65
  },
  {
    name: 'Perrier',
    company: 'Nestle',
    countryCode: 'FR',
    percentCanadian: 0,
    notes: 'Premium brand of sparkling water of French origin, owned by Nestle.',
    categoryId: 'bottledWater',
    aliases: ['perrier'],
    popularity: 60
  },
  {
    name: 'Fiji',
    company: 'The Wonderful Company',
    countryCode: 'FJ',
    percentCanadian: 0,
    notes: 'Premium brand of water imported from the Fiji Islands.',
    categoryId: 'bottledWater',
    aliases: ['fiji'],
    popularity: 55
  },
  {
    name: 'Evian',
    company: 'Danone',
    countryCode: 'FR',
    percentCanadian: 0,
    notes: 'Premium brand of water sourced from the French Alps, owned by Danone.',
    categoryId: 'bottledWater',
    aliases: ['evian'],
    popularity: 50
  }
]

export const bottledWaterCategory = {
  name: 'Bottled Water',
  description: 'Purified or distilled water, which may or may not be enriched with additional minerals, packaged in plastic or glass bottles.',
  aliases: ['water', 'mineral water', 'spring water']
}