import { Product } from '../products'

export const dishwasherDetergents: Product[] = [
  {
    name: 'Cascade Complete',
    company: 'Procter & Gamble',
    percentCanadian: 0,
    notes: 'Made in the US',
    categoryId: 'dishwasherDetergents',
    aliases: ['cascade complete detergent'],
    popularity: 90
  },
  {
    name: 'Finish Quantum',
    company: 'Reckitt Benckiser',
    percentCanadian: 0,
    notes: 'Made in the US',
    categoryId: 'dishwasherDetergents',
    aliases: ['finish quantum detergent'],
    popularity: 85
  },
  {
    name: 'President’s Choice Dishwasher Detergent',
    company: 'Loblaw Companies',
    percentCanadian: 50,
    notes: 'Loblaw’s private label dishwasher detergent.',
    categoryId: 'dishwasherDetergents',
    aliases: ['pc dishwasher detergent', "president's choice dishwasher detergent"],
    popularity: 80
  },
  {
    name: 'Nature Clean Automatic Dishwasher Pacs',
    company: 'Nature Clean',
    percentCanadian: 100,
    notes: 'A Canadian brand that makes eco-friendly dishwasher detergent. Available in most grocery stores across Canada.',
    categoryId: 'dishwasherDetergents',
    aliases: ['nature clean dishwasher pacs', 'nature clean dishwasher detergent'],
    popularity: 75
  },
  {
    name: 'Seventh Generation Dishwasher Detergent',
    company: 'Unilever',
    percentCanadian: 0,
    notes: 'Made in the US',
    categoryId: 'dishwasherDetergents',
    aliases: ['seventh generation dishwasher detergent'],
    popularity: 70
  },
  {
    name: 'Great Value Dishwasher Detergent',
    company: 'Walmart Canada',
    percentCanadian: 50,
    notes: 'Walmart’s store brand dishwasher detergent, widely available in Walmart locations across Canada.',
    categoryId: 'dishwasherDetergents',
    aliases: ['great value dishwasher detergent', 'walmart dishwasher detergent'],
    popularity: 65
  },
  {
    name: 'Kirkland Signature Dishwasher Detergent',
    company: 'Costco',
    percentCanadian: 50,
    notes: 'Costco’s private label dishwasher detergent, available at all Costco locations but not in regular grocery stores.',
    categoryId: 'dishwasherDetergents',
    aliases: ['kirkland dishwasher detergent', 'costco dishwasher detergent'],
    popularity: 60
  },
  {
    name: 'Method Dishwasher Detergent',
    company: 'Method',
    percentCanadian: 10,
    notes: 'Available broadly. Majority company ownership outside of Canada. Some ingredients sourced internationally.',
    categoryId: 'dishwasherDetergents',
    aliases: ['method dishwasher detergent'],
    popularity: 55
  },
  {
    name: 'Ivory Ultra Dishwashing Liquid',
    company: 'Procter & Gamble',
    percentCanadian: 0,
    notes: 'Made in the US',
    categoryId: 'dishwasherDetergents',
    aliases: ['ivory ultra dish detergent'],
    popularity: 50
  },
  {
    name: 'Palmolive Ultra Dishwashing Liquid',
    company: 'Colgate-Palmolive',
    percentCanadian: 0,
    notes: 'Made in the US',
    categoryId: 'dishwasherDetergents',
    aliases: ['palmolive ultra dish detergent'],
    popularity: 45
  }
]

export const dishwasherDetergentsCategory = {
  name: 'Dishwasher Detergents',
  description: 'Cleaning agents used in dishwashers to remove food debris and grease from dishes and utensils.',
  aliases: ['cleaning', 'detergent', 'dishwasher']
}