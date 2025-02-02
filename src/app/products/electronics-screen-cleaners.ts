import { Product } from '../products'

export const electronicsScreenCleaners: Product[] = [
  {
    name: 'WHOOSH!',
    company: 'Whoosh Inc.',
    percentCanadian: 100,
    notes: 'A Canadian brand, conceived and developed in Toronto. Available in most stores across Canada.',
    categoryId: 'electronicsScreenCleaners',
    aliases: ['whoosh screen cleaner'],
    popularity: 90
  },
  {
    name: 'iKlear',
    company: 'Klear Screen',
    percentCanadian: 0,
    notes: 'Produced entirely in the US.',
    categoryId: 'electronicsScreenCleaners',
    aliases: ['iklear screen cleaner'],
    popularity: 80
  },
  {
    name: 'Endust',
    company: 'Norazza, Inc',
    percentCanadian: 0,
    notes: 'Manufactured in the USA.',
    categoryId: 'electronicsScreenCleaners',
    aliases: ['endust screen cleaner'],
    popularity: 85
  },
  {
    name: 'ScreenMom',
    company: 'ScreenMom',
    percentCanadian: 0,
    notes: 'Designed and packaged in Indiana, USA.',
    categoryId: 'electronicsScreenCleaners',
    aliases: ['screenmom screen cleaner'],
    popularity: 75
  },
  {
    name: 'Monster ScreenClean',
    company: 'Monster Inc.',
    percentCanadian: 0,
    notes: 'Made in the USA.',
    categoryId: 'electronicsScreenCleaners',
    aliases: ['monster screen cleaner'],
    popularity: 70
  },
  {
    name: 'Belkin Screen Cleaning Kit',
    company: 'Belkin',
    percentCanadian: 0,
    notes: 'Manufactured by Belkin, a US-based company.',
    categoryId: 'electronicsScreenCleaners',
    aliases: ['belkin screen cleaner'],
    popularity: 65
  },
  {
    name: 'TechLink Screen Cleaning Kit',
    company: 'TechLink',
    percentCanadian: 0,
    notes: 'Originates from the UK.',
    categoryId: 'electronicsScreenCleaners',
    aliases: ['techlink screen cleaner'],
    popularity: 60
  },
  {
    name: 'Insignia Screen Cleaning Kit',
    company: 'Best Buy',
    percentCanadian: 0,
    notes: 'Best Buy’s private label brand. Designed in the USA.',
    categoryId: 'electronicsScreenCleaners',
    aliases: ['insignia screen cleaner'],
    popularity: 55
  },
  {
    name: 'AM Labs Mist Screen Cleaner',
    company: 'AM Labs',
    percentCanadian: 0,
    notes: 'Based in Denmark.',
    categoryId: 'electronicsScreenCleaners',
    aliases: ['am labs screen cleaner'],
    popularity: 50
  },
  {
    name: 'Klear Screen Spray',
    company: 'iKlear',
    percentCanadian: 0,
    notes: 'A product of iKlear, based in the US.',
    categoryId: 'electronicsScreenCleaners',
    aliases: ['klear screen cleaner'],
    popularity: 45
  }
]

export const electronicsScreenCleanersCategory = {
  name: 'Electronics Screen Cleaners',
  description: 'Products specifically designed to clean electronic screens.',
  aliases: ['screen cleaners', 'electronics cleaning']
}