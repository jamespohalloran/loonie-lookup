import { Product } from '../products'

export const soap: Product[] = [
  {
    name: 'Dove',
    company: 'Unilever',
    countryCode: 'NL',
    percentCanadian: 0,
    notes: 'Produced by Unilever, a multinational consumer goods company.',
    categoryId: 'soap',
    aliases: ['dove soap'],
    popularity: 95,
  },
  {
    name: 'Lifebuoy',
    company: 'Unilever',
    countryCode: 'NL',
    percentCanadian: 0,
    notes: 'Lifebuoy is a Unilever brand, based out of the USA.',
    categoryId: 'soap',
    aliases: ['lifebuoy soap'],
    popularity: 90,
  },
  {
    name: 'Irish Spring',
    company: 'Colgate-Palmolive',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Irish Spring is produced by American multinational company Colgate-Palmolive.',
    categoryId: 'soap',
    aliases: ['irish spring soap'],
    popularity: 85,
  },
  {
    name: 'Olay',
    company: 'Procter & Gamble',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Olay is owned by Procter & Gamble, a multinational consumer goods corporation headquartered in America.',
    categoryId: 'soap',
    aliases: ['olay soap'],
    popularity: 80,
  },
  {
    name: 'Lush',
    company: 'Lush Retail',
    countryCode: 'CA',
    percentCanadian: 100,
    notes:
      'Lush is a handmade cosmetics company founded in Canada. Its products are available in both physical retail stores and online.',
    categoryId: 'soap',
    aliases: ['lush soap'],
    popularity: 75,
  },
  {
    name: 'Ivory',
    company: 'Procter & Gamble',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Ivory is produced by the American-based company, Procter & Gamble.',
    categoryId: 'soap',
    aliases: ['ivory soap'],
    popularity: 70,
  },
  {
    name: 'Lever 2000',
    company: 'Unilever',
    countryCode: 'NL',
    percentCanadian: 0,
    notes: 'Lever 2000 is owned by the multinational corporation, Unilever.',
    categoryId: 'soap',
    aliases: ['lever 2000 soap'],
    popularity: 65,
  },
  {
    name: 'Boreal Soap',
    company: 'Boreal Manufactory',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Boreal is a 100% Canadian brand, created using natural ingredients sourced in Canada.',
    categoryId: 'soap',
    aliases: ['boreal soap'],
    popularity: 60,
  },
  {
    name: 'Rocky Mountain Soap Company',
    company: 'Rocky Mountain Soap Company',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Rocky Mountain Soap is a Canadian company that handcrafts soaps using 100% natural ingredients.',
    categoryId: 'soap',
    aliases: ['rocky mountain soap'],
    popularity: 55,
  },
  {
    name: 'The Soap Works',
    company: 'The Soap Works',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A proudly Canadian company, The Soap Works produces all-natural soaps using traditional formulas.',
    categoryId: 'soap',
    aliases: ['the soap works'],
    popularity: 50,
  },
]

export const soapCategory = {
  name: 'Soap',
  description: 'A product used for cleaning, available in various scents and for various skin types.',
  aliases: ['cleaner', 'bar soap', 'liquid soap'],
}
