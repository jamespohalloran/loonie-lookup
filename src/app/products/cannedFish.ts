import { Product } from '../products'

export const cannedFish: Product[] = [
  {
    name: 'Gold Seal',
    company: 'Gold Seal Seafoods',
    percentCanadian: 70,
    notes: 'A brand known for canned sockeye salmon, mackerel, and sardines sourced partly from Canadian waters.',
    categoryId: 'cannedFish',
    aliases: ['gold seal fish'],
    popularity: 90,
  },
  {
    name: 'Clover Leaf',
    company: 'Clover Leaf Seafoods',
    percentCanadian: 85,
    notes:
      'A well-known Canadian brand offering a variety of canned seafood products, primarily sourced from Canadian waters.',
    categoryId: 'cannedFish',
    aliases: ['clover leaf fish'],
    popularity: 100,
  },
  {
    name: 'Ocean’s',
    company: 'Ocean Brands',
    percentCanadian: 80,
    notes:
      'A Canadian-owned brand offering a variety of canned seafood, with most species sourced from Canadian waters.',
    categoryId: 'cannedFish',
    aliases: ['ocean’s fish'],
    popularity: 90,
  },
  {
    name: 'President’s Choice Canned Fish',
    company: 'Loblaw Companies',
    percentCanadian: 45,
    notes: 'Loblaw’s private label canned fish, sourced from various locations worldwide.',
    categoryId: 'cannedFish',
    aliases: ['pc canned fish', "president's choice canned fish"],
    popularity: 85,
  },
  {
    name: 'Brunswick',
    company: 'Brunswick Seafood',
    percentCanadian: 40,
    notes:
      'A well-recognized brand for canned sardines in Canada, however, primarily sourced from various locations worldwide.',
    categoryId: 'cannedFish',
    aliases: ['brunswick fish'],
    popularity: 80,
  },
  {
    name: 'Great Value Canned Fish',
    company: 'Walmart Canada',
    notes: '',
    percentCanadian: 0,
    categoryId: 'cannedFish',
    aliases: ['great value canned fish', 'walmart canned fish'],
    popularity: 75,
  },
  {
    name: 'Our Finest',
    company: 'Walmart Canada',
    percentCanadian: 0,
    notes: '',

    categoryId: 'cannedFish',
    aliases: ['our finest canned fish', 'of canned fish'],
    popularity: 70,
  },
  {
    name: 'Raincoast Trading',
    company: 'Raincoast Trading Company',
    percentCanadian: 100,
    notes:
      'A Canadian canned seafood company that specializes in sustainably sourced products, available in select locations across Canada.',
    categoryId: 'cannedFish',
    aliases: ['raincoast canned fish'],
    popularity: 70,
  },

  {
    name: 'Wild Planet',
    company: 'Wild Planet Foods',
    percentCanadian: 0,
    categoryId: 'cannedFish',
    notes: '',

    aliases: ['wild planet canned fish'],
    popularity: 60,
  },
  {
    name: 'Safe Catch',
    company: 'Safe Catch Foods',
    percentCanadian: 0,
    notes: '',
    categoryId: 'cannedFish',
    aliases: ['safe catch canned fish'],
    popularity: 60,
  },
]

export const cannedFishCategory = {
  name: 'Canned Fish',
  description: 'Fish that is canned for preservation and convenience, available in a variety of species and brands.',
  aliases: ['seafood', 'tuna', 'salmon', 'sardines'],
}
