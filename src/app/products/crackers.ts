import { Product } from '../products'

export const crackers: Product[] = [
  {
    name: 'Premium Plus',
    company: 'Mondelez International',
    countryCode: 'US',
    percentCanadian: 25,
    notes: 'Widely available but only a portion of production occurs in Canada.',
    categoryId: 'crackers',
    aliases: ['premium plus crackers'],
    popularity: 95
  },
  {
    name: 'Ritz',
    company: 'Mondelez International',
    countryCode: 'US',
    percentCanadian: 25,
    notes: 'A portion of its production occurs in Canada but it is largely an American brand.',
    categoryId: 'crackers',
    aliases: ['ritz crackers'],
    popularity: 90
  },
  {
    name: 'Christie',
    company: 'Mondelez International',
    countryCode: 'US',
    percentCanadian: 25,
    notes: 'Known for its crackers but only a portion of its production occurs in Canada.',
    categoryId: 'crackers',
    aliases: ['christie crackers'],
    popularity: 85
  },
  {
    name: 'Dare',
    company: 'Dare Foods',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A 100% Canadian company known for its variety of crackers.',
    categoryId: 'crackers',
    aliases: ['dare crackers'],
    popularity: 75
  },
  {
    name: 'Triscuit',
    company: 'Mondelez International',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'An entirely American-made product.',
    categoryId: 'crackers',
    aliases: ['triscuit crackers'],
    popularity: 70
  },
  {
    name: 'Wheat Thins',
    company: 'Mondelez International',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Entirely made in the US.',
    categoryId: 'crackers',
    aliases: ['wheat thins crackers'],
    popularity: 65
  },
  {
    name: 'Breton',
    company: 'Dare Foods',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Produced by a 100% Canadian company and available in most Canadian grocery stores.',
    categoryId: 'crackers',
    aliases: ['breton crackers'],
    popularity: 80
  },
  {
    name: 'Carr’s',
    company: 'United Biscuits',
    countryCode: 'GB',
    percentCanadian: 0,
    notes: 'A British brand, widely available in Canada.',
    categoryId: 'crackers',
    aliases: ['carr’s crackers'],
    popularity: 55
  },
  {
    name: 'Keebler',
    company: 'Ferrero SpA',
    countryCode: 'IT',
    percentCanadian: 0,
    notes: 'A US brand owned by an Italian company, widely available in Canadian supermarkets.',
    categoryId: 'crackers',
    aliases: ['keebler crackers'],
    popularity: 60
  },
  {
    name: 'Grissol',
    company: 'Dare Foods',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A 100% Canadian company producing a variety of crackers.',
    categoryId: 'crackers',
    aliases: ['grissol crackers'],
    popularity: 70
  }
]

export const crackersCategory = {
  name: 'Crackers',
  description: 'Baked food typically made from flour, available in various flavors and often consumed with cheese, dips, or spreads.',
  aliases: ['grain', 'biscuits', 'baked goods']
}