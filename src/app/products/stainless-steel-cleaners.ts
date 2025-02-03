import { Product } from '../products'

export const stainlessSteelCleaners: Product[] = [
  {
    name: 'Weiman',
    company: 'Weiman Products',
    percentCanadian: 0,
    notes: 'Purely made in the US.',
    categoryId: 'stainlessSteelCleaners',
    aliases: ['weiman stainless steel cleaner'],
    popularity: 95
  },
  {
    name: 'Bar Keepers Friend',
    company: 'SerVaas Laboratories',
    percentCanadian: 0,
    notes: 'Purely made in the US.',
    categoryId: 'stainlessSteelCleaners',
    aliases: ['bar keepers friend stainless steel cleaner'],
    popularity: 90
  },
  {
    name: 'Therapy',
    company: 'Therapy Clean',
    percentCanadian: 0,
    notes: 'Purely made in the US.',
    categoryId: 'stainlessSteelCleaners',
    aliases: ['therapy stainless steel cleaner'],
    popularity: 85
  },
  {
    name: 'Magic',
    company: 'Magic American Corporation',
    percentCanadian: 0,
    notes: 'Purely made in the US.',
    categoryId: 'stainlessSteelCleaners',
    aliases: ['magic stainless steel cleaner'],
    popularity: 80
  },
  {
    name: 'Scrubby’s',
    company: 'Scrubby´s Stainless Steel Cleaners',
    percentCanadian: 50,
    notes: 'Company based in Canada with some international manufacturing.',
    categoryId: 'stainlessSteelCleaners',
    aliases: ['scrubbys stainless steel cleaner'],
    popularity: 70
  },
  {
    name: 'Effeclean',
    company: 'Effeclean Canada Inc.',
    percentCanadian: 100,
    notes: 'Made entirely in Canada.',
    categoryId: 'stainlessSteelCleaners',
    aliases: ['effeclean stainless steel cleaner'],
    popularity: 65
  }
]

export const stainlessSteelCleanersCategory = {
  name: 'Stainless Steel Cleaners',
  description: 'Products used for cleaning and maintaining stainless steel appliances and surfaces.',
  aliases: ['cleaning products', 'kitchen cleaners', 'appliance cleaners']
}