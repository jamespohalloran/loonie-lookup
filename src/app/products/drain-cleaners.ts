import { Product } from '../products'

export const drainCleaners: Product[] = [
  {
    name: 'Drano',
    company: 'S.C. Johnson & Son',
    percentCanadian: 0,
    notes: 'A US brand, it widely available in most grocery and convenience stores in Canada.',
    categoryId: 'drainCleaners',
    aliases: ['drano drain cleaner'],
    popularity: 95
  },
  {
    name: 'Liquid-Plumr',
    company: 'The Clorox Company',
    percentCanadian: 0,
    notes: 'A US brand, it is widely available in most grocery stores across Canada.',
    categoryId: 'drainCleaners',
    aliases: ['liquid plumr drain cleaner'],
    popularity: 90
  },
  {
    name: 'Green Gobbler',
    company: 'Eco Clean Solutions',
    percentCanadian: 0,
    notes: 'An eco-friendly US brand, it\'s available online and in several stores across Canada.',
    categoryId: 'drainCleaners',
    aliases: ['green gobbler drain cleaner'],
    popularity: 85
  },
  {
    name: 'Xion Lab',
    company: 'Xion Lab',
    percentCanadian: 0,
    notes: 'A US brand, it is known for its fast-acting, industrial-strength products and is available online in Canada.',
    categoryId: 'drainCleaners',
    aliases: ['xion lab drain cleaner'],
    popularity: 80
  },
  {
    name: 'Zep',
    company: 'Zep Inc.',
    percentCanadian: 0,
    notes: 'A US brand, its products are available in select stores and online in Canada.',
    categoryId: 'drainCleaners',
    aliases: ['zep drain cleaner'],
    popularity: 85
  },
  {
    name: 'CLR',
    company: 'Jelmar, LLC',
    percentCanadian: 20,
    notes: 'Though a US brand, CLR has a Canadian division CLR Canada and its products are widely available across the country.',
    categoryId: 'drainCleaners',
    aliases: ['clr drain cleaner'],
    popularity: 80
  },
  {
    name: 'Pequa',
    company: 'Pequa Industries',
    percentCanadian: 0,
    notes: 'A US brand, its products are available online for Canadians.',
    categoryId: 'drainCleaners',
    aliases: ['pequa drain cleaner'],
    popularity: 75
  },
  {
    name: 'Instant Power',
    company: 'Scotch Corporation',
    percentCanadian: 0,
    notes: 'A US brand, it is available online for Canadian customers.',
    categoryId: 'drainCleaners',
    aliases: ['instant power drain cleaner'],
    popularity: 70
  },
  {
    name: 'Comstar Pure Lye',
    company: 'Comstar International Inc.',
    percentCanadian: 0,
    notes: 'A US brand, it is available online for Canadian customers.',
    categoryId: 'drainCleaners',
    aliases: ['comstar pure lye drain cleaner'],
    popularity: 65
  },
  {
    name: 'Professor Amos',
    company: 'Professor Amos',
    percentCanadian: 0,
    notes: 'A US brand, it is available online for Canadian customers.',
    categoryId: 'drainCleaners',
    aliases: ['professor amos drain cleaner'],
    popularity: 60
  }
]

export const drainCleanersCategory = {
  name: 'Drain Cleaners',
  description: 'Substances used to unclog blocked drains, available in various forms including liquid, foam, and granular.',
  aliases: ['drain openers', 'drain uncloggers', 'pipe cleaners']
}