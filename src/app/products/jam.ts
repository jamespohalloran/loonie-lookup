import { Product } from '../products'

export const jam: Product[] = [
  {
    name: 'E.D. Smith',
    company: 'TreeHouse Foods Inc.',
    countryCode: 'US',
    percentCanadian: 90,
    notes: 'Owned by American company TreeHouse Foods Inc. but mainly produced in Canada using local ingredients.',
    categoryId: 'jam',
    aliases: ['e.d. smith jam'],
    popularity: 95
  },
  {
    name: 'Bonne Maman',
    company: 'Andros',
    countryCode: 'FR',
    percentCanadian: 0,
    notes: 'Produced in France and widely available in most Canadian grocery stores.',
    categoryId: 'jam',
    aliases: ['bonne maman jam'],
    popularity: 90
  },
  {
    name: 'Smucker’s',
    company: 'The J.M. Smucker Company',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Produced in the United States.',
    categoryId: 'jam',
    aliases: ['smucker’s jam'],
    popularity: 85
  },
  {
    name: 'President’s Choice',
    company: 'Loblaw Companies',
    countryCode: 'CA',
    percentCanadian: 50,
    notes: 'Produced both locally and internationally. Available at Loblaws chains across Canada.',
    categoryId: 'jam',
    aliases: ['pc jam', "president's choice jam"],
    popularity: 80
  },
  {
    name: 'Kraft Pure',
    company: 'Kraft Heinz',
    countryCode: 'US',
    percentCanadian: 10,
    notes: 'Though American-owned, some Kraft Pure jams are produced in Canada.',
    categoryId: 'jam',
    aliases: ['kraft pure jam'],
    popularity: 75
  },
  {
    name: 'Hero',
    company: 'Hero Group',
    countryCode: 'CH',
    percentCanadian: 0,
    notes: 'Produced in Switzerland and widely available in Canadian grocery stores.',
    categoryId: 'jam',
    aliases: ['hero jam'],
    popularity: 70
  },
  {
    name: 'Compliments',
    company: 'Sobeys',
    countryCode: 'CA',
    percentCanadian: 50,
    notes: 'Sobeys’ private label, producing jam both locally and internationally.',
    categoryId: 'jam',
    aliases: ['compliments jam'],
    popularity: 65
  },
  {
    name: 'No Name',
    company: 'Loblaw Companies',
    countryCode: 'CA',
    percentCanadian: 50,
    notes: 'Loblaw’s budget brand. Produced both locally and internationally.',
    categoryId: 'jam',
    aliases: ['no name jam'],
    popularity: 60
  },
  {
    name: 'Great Value',
    company: 'Walmart Canada',
    countryCode: 'CA',
    percentCanadian: 20,
    notes: 'Walmart’s private label. Mainly produced abroad but distributed widely across Canadian Walmart stores.',
    categoryId: 'jam',
    aliases: ['great value jam'],
    popularity: 55
  },
  {
    name: 'Welch’s',
    company: 'Welch’s Global, LLC',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Produced in the United States.',
    categoryId: 'jam',
    aliases: ['welch’s jam'],
    popularity: 50
  }
]

export const jamCategory = {
  name: 'Jam',
  description: 'A sweet spread made from fruit, sugar and sometimes pectin, often consumed in breakfast or dessert settings.',
  aliases: ['preserves', 'jelly', 'marmalade']
}