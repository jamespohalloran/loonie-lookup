import { Product } from '../products'

export const tileLaminateCleaner: Product[] = [
  {
    name: 'Bona',
    company: 'Bona US',
    percentCanadian: 0,
    notes: 'An American brand that is popular and widely available in Canadian grocery stores.',
    categoryId: 'tileLaminateCleaner',
    aliases: ['bona tile cleaner', 'bona laminate cleaner'],
    popularity: 90
  },
  {
    name: 'Swiffer',
    company: 'Procter & Gamble',
    percentCanadian: 0,
    notes: 'An American brand that is widely recognized and available in Canadian stores.',
    categoryId: 'tileLaminateCleaner',
    aliases: ['swiffer tile cleaner', 'swiffer laminate cleaner'],
    popularity: 85
  },
  {
    name: 'Mr. Clean',
    company: 'Procter & Gamble',
    percentCanadian: 0,
    notes: 'Another American brand from P&G, widely used in Canadian households.',
    categoryId: 'tileLaminateCleaner',
    aliases: ['mr. clean tile cleaner', 'mr. clean laminate cleaner'],
    popularity: 80
  },
  {
    name: 'Pine-Sol',
    company: 'The Clorox Company',
    percentCanadian: 0,
    notes: 'Based in the US, but a popular choice in Canada.',
    categoryId: 'tileLaminateCleaner',
    aliases: ['pine-sol tile cleaner', 'pine-sol laminate cleaner'],
    popularity: 75
  },
  {
    name: 'Method',
    company: 'Method Products',
    percentCanadian: 0,
    notes: 'American-made brand, known for eco-friendly cleaning products, widely available in Canadian grocery stores.',
    categoryId: 'tileLaminateCleaner',
    aliases: ['method tile cleaner', 'method laminate cleaner'],
    popularity: 70
  },
  {
    name: 'Attitude',
    company: 'Bio Spectra',
    percentCanadian: 100,
    notes: 'Canadian-made eco-friendly brand, available nationwide.',
    categoryId: 'tileLaminateCleaner',
    aliases: ['attitude tile cleaner', 'attitude laminate cleaner'],
    popularity: 65
  },
  {
    name: 'EcoMax',
    company: 'Eco-Max',
    percentCanadian: 100,
    notes: 'Canadian brand focusing on green cleaning solutions, widely available across the country.',
    categoryId: 'tileLaminateCleaner',
    aliases: ['ecomax tile cleaner', 'ecomax laminate cleaner'],
    popularity: 60
  },
  {
    name: 'Nature Clean',
    company: 'Frank T Ross & Sons',
    percentCanadian: 100,
    notes: 'A Canadian company that offers naturally-derived cleaning products. Available nationwide.',
    categoryId: 'tileLaminateCleaner',
    aliases: ['nature clean tile cleaner', 'nature clean laminate cleaner'],
    popularity: 55
  },
  {
    name: 'Lysol',
    company: 'Reckitt Benckiser',
    percentCanadian: 0,
    categoryId: 'tileLaminateCleaner',
    aliases: ['lysol tile cleaner', 'lysol laminate cleaner'],
    popularity: 50
  },
  {
    name: 'CLR',
    company: 'Jelmar',
    percentCanadian: 0,
    notes: 'Made in the USA, but frequently used in many Canadian households.',
    categoryId: 'tileLaminateCleaner',
    aliases: ['clr tile cleaner', 'clr laminate cleaner'],
    popularity: 45
  }
]

export const tileLaminateCleanerCategory = {
  name: 'Tile & Laminate Cleaner',
  description: 'Cleaning products specifically designed for tile and laminate surfaces.',
  aliases: ['cleaners', 'surface cleaners', 'tile cleaners', 'laminate cleaners']
}
