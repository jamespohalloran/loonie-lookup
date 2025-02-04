import { Product } from '../products'

export const toothpaste: Product[] = [
  {
    name: 'Colgate',
    company: 'Colgate-Palmolive',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'American brand. The most widely available toothpaste in Canadian grocery stores.',
    categoryId: 'toothpaste',
    aliases: ['colgate toothpaste'],
    popularity: 95
  },
  {
    name: 'Crest',
    company: 'Procter & Gamble',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'American brand. It is widely available in most grocery stores across Canada.',
    categoryId: 'toothpaste',
    aliases: ['crest toothpaste'],
    popularity: 92
  },
  {
    name: 'Sensodyne',
    company: 'GlaxoSmithKline',
    countryCode: 'GB',
    percentCanadian: 0,
    notes: 'British brand. Popular for sensitivity prevention. Found mostly in drugstores and supermarkets nationwide.',
    categoryId: 'toothpaste',
    aliases: ['sensodyne toothpaste'],
    popularity: 90
  },
  {
    name: 'Arm & Hammer',
    company: 'Church & Dwight',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'American brand. Known for baking soda content, available at most grocery stores and pharmacies.',
    categoryId: 'toothpaste',
    aliases: ['arm and hammer toothpaste'],
    popularity: 80
  },
  {
    name: 'Close-Up',
    company: 'Unilever',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'American brand. Widely available in Walmart locations across Canada.',
    categoryId: 'toothpaste',
    aliases: ['close up toothpaste'],
    popularity: 75
  },
  {
    name: 'Toms of Maine',
    company: 'Colgate-Palmolive',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'American brand. Known for natural ingredients, sold in health food stores and major grocery stores.',
    categoryId: 'toothpaste',
    aliases: ['toms toothpaste', 'toms of maine toothpaste'],
    popularity: 70
  },
  {
    name: 'Burt’s Bees',
    company: 'The Clorox Company',
    countryCode: 'US',
    percentCanadian: 0,
    notes: "American brand. Known for natural ingredients, sold in health food stores, drugstores and select grocery stores in Canada.",
    categoryId: 'toothpaste',
    aliases: ['burts bees toothpaste'],
    popularity: 65
  },
  {
    name: 'Green Beaver',
    company: 'The Green Beaver Company',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Canadian brand. Known for natural ingredients and environmentally friendly practices. Found in health food stores and online.',
    categoryId: 'toothpaste',
    aliases: ['green beaver toothpaste'],
    popularity: 60
  },
  {
    name: 'The Natural Family Co.',
    company: 'The Natural Family Co.',
    countryCode: 'AU',
    percentCanadian: 0,
    notes: 'Australian brand. Known for natural ingredients, sold in health food stores and online.',
    categoryId: 'toothpaste',
    aliases: ['natural family toothpaste'],
    popularity: 55
  },
  {
    name: 'Hello',
    company: 'Hello Products',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'American brand. Known for natural ingredients, sold in health food stores and online.',
    categoryId: 'toothpaste',
    aliases: ['hello toothpaste'],
    popularity: 50
  }
]

export const toothpasteCategory = {
  name: 'Toothpaste',
  description: 'A gel or paste used with a toothbrush to clean and maintain the aesthetics and health of teeth.',
  aliases: ['dental care', 'oral care', 'personal care']
}
