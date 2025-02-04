import { Product } from '../products'

export const garbageDisposalCleaners: Product[] = [
  {
    name: 'Green Gobbler',
    company: 'ECO Clean Solutions',
    percentCanadian: 0,
    notes: 'Environmentally friendly and biodegradable American brand. Product not made in Canada.',
    categoryId: 'garbageDisposalCleaners',
    aliases: ['green gobbler drain opener'],
    popularity: 85
  },
  {
    name: 'CLR',
    company: 'Jelmar',
    percentCanadian: 0,
    notes: 'Not Canadian made. Its a limescale and rust remover and is commonly used for garbage disposal.',
    categoryId: 'garbageDisposalCleaners',
    aliases: ['clr garbage disposal cleaner', 'clr drain cleaner'],
    popularity: 90
  },
  {
    name: 'Drano',
    company: 'S.C. Johnson & Son',
    percentCanadian: 0,
    notes: 'A popular American drain cleaner not made in Canada.',
    categoryId: 'garbageDisposalCleaners',
    aliases: ['drano drain cleaner'],
    popularity: 95
  },
  {
    name: 'Liquid-Plumr',
    company: 'The Clorox Company',
    percentCanadian: 0,
    notes: 'Mainly marketed in Canada but not produced there.',
    categoryId: 'garbageDisposalCleaners',
    aliases: ['liquid-plumr drain cleaner'],
    popularity: 85
  },
  {
    name: 'MrGreen',
    company: 'MrGreen Enviro Care Solutions',
    percentCanadian: 100,
    notes: 'Canadian brand that focuses on environmentally friendly products.',
    categoryId: 'garbageDisposalCleaners',
    aliases: ['mrgreen garbage disposal cleaner', 'mrgreen drain cleaner'],
    popularity: 80
  },
  {
    name: 'Bio-Clean',
    company: 'Bio-Clean Products',
    percentCanadian: 0,
    notes: 'Environmentally friendly product mainly marketed in Canada but not produced there.',
    categoryId: 'garbageDisposalCleaners',
    aliases: ['bio-clean drain cleaner'],
    popularity: 70
  },
  {
    name: 'Glisten',
    company: 'Summit Brands',
    percentCanadian: 0,
    notes: 'Glisten is an American brand not made in Canada.',
    categoryId: 'garbageDisposalCleaners',
    aliases: ['glisten garbage disposal cleaner', 'glisten drain cleaner'],
    popularity: 65
  },
  {
    name: 'ProClean',
    company: 'Franmar Chemical',
    percentCanadian: 0,
    notes: 'Not Canadian made but available in many Canadian stores.',
    categoryId: 'garbageDisposalCleaners',
    aliases: ['proclean drain cleaner', 'proclean garbage disposal cleaner'],
    popularity: 60
  },
  {
    name: 'Clean Earth',
    company: 'Clean Earth Brands',
    percentCanadian: 0,
    notes: 'An American brand, this product is not made in Canada.',
    categoryId: 'garbageDisposalCleaners',
    aliases: ['clean earth garbage disposal cleaner', 'clean earth drain cleaner'],
    popularity: 75
  },
  {
    name: 'EZ-Zyme',
    company: 'EZ-Zyme',
    percentCanadian: 100,
    notes: 'A fully Canadian brand, their products are designed to naturally break down organic waste.',
    categoryId: 'garbageDisposalCleaners',
    aliases: ['ez-zyme garbage disposal cleaner', 'ez-zyme drain cleaner'],
    popularity: 70
  }
]

export const garbageDisposalCleanersCategory = {
  name: 'Garbage Disposal Cleaners',
  description: 'Cleaning products used for the maintenance and disinfection of garbage disposal systems.',
  aliases: ['garbage disposal care', 'drain cleaners', 'disposal cleaners']
}