import { Product } from '../products'

export const odorEliminators: Product[] = [
  {
    name: 'Febreze',
    company: 'Procter & Gamble',
    percentCanadian: 0,
    notes: 'Produced entirely in the US.',
    categoryId: 'odorEliminators',
    aliases: ['febreze air freshener'],
    popularity: 95
  },
  {
    name: 'Lysol',
    company: 'Reckitt Benckiser',
    percentCanadian: 0,
    notes: 'Manufactured in the US.',
    categoryId: 'odorEliminators',
    aliases: ['lysol spray'],
    popularity: 90
  },
  {
    name: 'Glade',
    company: 'S. C. Johnson & Son',
    percentCanadian: 0,
    notes: 'Made in the US.',
    categoryId: 'odorEliminators',
    aliases: ['glade air freshener'],
    popularity: 85
  },
  {
    name: 'Air Wick',
    company: 'Reckitt Benckiser',
    percentCanadian: 0,
    notes: 'Produced entirely in the US.',
    categoryId: 'odorEliminators',
    aliases: ['air wick air freshener'],
    popularity: 80
  },
  {
    name: 'Ozium',
    company: 'MEDO Industries',
    percentCanadian: 0,
    notes: 'Manufactured in the US.',
    categoryId: 'odorEliminators',
    aliases: ['ozium air sanitizer'],
    popularity: 70
  },
  {
    name: 'Renuzit',
    company: 'Henkel',
    percentCanadian: 0,
    notes: 'Product of the US.',
    categoryId: 'odorEliminators',
    aliases: ['renuzit air freshener'],
    popularity: 65
  },
  {
    name: 'Citrus Magic',
    company: 'Beaumont Products',
    percentCanadian: 0,
    notes: 'Completely made in the US.',
    categoryId: 'odorEliminators',
    aliases: ['citrus magic air freshener'],
    popularity: 60
  },
  {
    name: 'Zero Odor',
    company: 'Zero Odor LLC',
    percentCanadian: 0,
    notes: 'Created and produced in the US.',
    categoryId: 'odorEliminators',
    aliases: ['zero odor spray'],
    popularity: 55
  },
  {
    name: 'OdoBan',
    company: 'Clean Control Corporation',
    percentCanadian: 0,
    notes: 'Manufactured in the US.',
    categoryId: 'odorEliminators',
    aliases: ['odoban disinfectant'],
    popularity: 50
  },
  {
    name: 'Pure Citrus',
    company: 'North American',
    percentCanadian: 0,
    notes: 'Made completely in the US.',
    categoryId: 'odorEliminators',
    aliases: ['pure citrus air freshener'],
    popularity: 45
  }
]

export const odorEliminatorsCategory = {
  name: 'Odor Eliminators',
  description: 'Products designed to neutralise or remove unpleasant odours in homes, cars, or other indoor areas.',
  aliases: ['air fresheners', 'air sanitizers', 'disinfectant']
}