import { Product } from '../products'

export const iceCream: Product[] = [
  {
    name: 'Breyers',
    company: 'Unilever',
    countryCode: 'NL',
    percentCanadian: 30,
    notes: 'Manufactured in Canada but owned by Unilever. Some ingredients are imported.',
    categoryId: 'ice_cream',
    aliases: ['breyers'],
  },
  {
    name: 'Häagen-Dazs',
    company: 'Nestlé',
    countryCode: 'CH',
    percentCanadian: 10,
    notes: 'Mostly imported from the U.S., though some varieties are produced in Canada.',
    categoryId: 'ice_cream',
    aliases: ['haagen dazs'],
  },
  {
    name: "Ben & Jerry's",
    company: 'Unilever',
    countryCode: 'NL',
    percentCanadian: 5,
    notes: 'Imported from the U.S., not manufactured in Canada.',
    categoryId: 'ice_cream',
    aliases: ['ben and jerrys', 'ben & jerry'],
  },
  {
    name: "Chapman's",
    company: "Chapman's",
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Family-owned Canadian brand, made in Ontario using Canadian dairy.',
    categoryId: 'ice_cream',
    aliases: ['chapmans'],
  },
  {
    name: 'Kawartha Dairy',
    company: 'Kawartha Dairy',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Ontario-based brand, all products are made in Canada using locally sourced dairy.',
    categoryId: 'ice_cream',
    aliases: ['kawartha'],
  },
  {
    name: 'Cows Creamery',
    company: 'Cows Inc.',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'PEI-based brand, known for using high-quality Canadian dairy.',
    categoryId: 'ice_cream',
    aliases: ['cows', 'cows creamery'],
  },
  {
    name: "President's Choice Ice Cream",
    company: 'Loblaw Companies',
    countryCode: 'CA',
    percentCanadian: 90,
    notes: 'Loblaw store brand, manufactured in Canada, but some ingredients may be imported.',
    categoryId: 'ice_cream',
    aliases: ['presidents choice', 'pc ice cream'],
  },
  {
    name: 'Nestlé Real Dairy',
    company: 'Nestlé Canada',
    countryCode: 'CA',
    percentCanadian: 50,
    notes: 'Produced in Canada using Canadian dairy, but owned by Nestlé and may use some imported ingredients.',
    categoryId: 'ice_cream',
    aliases: ['nestle', 'real dairy'],
  },
  {
    name: 'Great Value Ice Cream',
    company: 'Walmart Canada',
    countryCode: 'CA',
    percentCanadian: 40,
    notes: "Walmart's store brand. Some varieties are made in Canada, but ingredients and sourcing vary.",
    categoryId: 'ice_cream',
    aliases: ['great value', 'walmart ice cream'],
  },
  {
    name: 'Agropur Iceberg',
    company: 'Agropur Cooperative',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Canadian dairy cooperative brand, made entirely in Canada with local dairy.',
    categoryId: 'ice_cream',
    aliases: ['iceberg', 'agropur'],
  },
]
