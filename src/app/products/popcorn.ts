import { Product } from '../products'

export const popcorn: Product[] = [
  {
    name: 'Orville Redenbacher',
    company: 'Conagra Brands',
    percentCanadian: 0,
    notes: 'An American popcorn brand available across Canada.',
    categoryId: 'popcorn',
    aliases: ['orville redenbacher popcorn'],
    popularity: 90
  },
  {
    name: 'Smartfood',
    company: 'Frito-Lay',
    percentCanadian: 0,
    notes: 'An American popcorn brand available across Canada.',
    categoryId: 'popcorn',
    aliases: ['smartfood popcorn'],
    popularity: 85
  },
  {
    name: 'Crunchy Colonel Popcorn',
    company: 'President’s Choice',
    percentCanadian: 100,
    notes: 'President’s Choice signature popcorn brand. Available in most grocery stores across Canada.',
    categoryId: 'popcorn',
    aliases: ['crunchy colonel popcorn', 'pc popcorn'],
    popularity: 75
  },
  {
    name: 'Great Value Popcorn',
    company: 'Walmart',
    percentCanadian: 0,
    notes: 'Walmart’s store brand popcorn. Widely available in Walmart locations across Canada.',
    categoryId: 'popcorn',
    aliases: ['great value popcorn', 'walmart popcorn'],
    popularity: 70
  },
  {
    name: 'Kernel Encore Gourmet Popcorn',
    company: 'Costco',
    percentCanadian: 0,
    notes: 'Costco’s gourmet popcorn brand. Available in all Costco locations across Canada.',
    categoryId: 'popcorn',
    aliases: ['kernel encore popcorn', 'costco popcorn'],
    popularity: 65
  },
  {
    name: 'Cineplex Popcorn',
    company: 'Cineplex',
    percentCanadian: 100,
    notes: 'Canada’s leading cinema chain also sells their popcorn in grocery stores.',
    categoryId: 'popcorn',
    aliases: ['cineplex popcorn'],
    popularity: 60
  },
  {
    name: 'Act II Popcorn',
    company: 'Conagra Brands',
    percentCanadian: 0,
    notes: 'An American popcorn brand available across Canada.',
    categoryId: 'popcorn',
    aliases: ['act ii popcorn'],
    popularity: 55
  },
  {
    name: 'Pop Secret',
    company: 'Loblaw Companies',
    percentCanadian: 0,
    notes: 'An American popcorn brand that is widely available in Canada.',
    categoryId: 'popcorn',
    aliases: ['pop secret popcorn'],
    popularity: 50
  },
  {
    name: 'Kernels Popcorn',
    company: 'Kernels',
    percentCanadian: 100,
    notes: 'A Canadian popcorn brand, available in select grocery stores and Kernels stores nationwide.',
    categoryId: 'popcorn',
    aliases: ['kernels popcorn'],
    popularity: 45
  },
  {
    name: 'Popcorn, Indiana',
    company: 'Popcorn, Indiana',
    percentCanadian: 0,
    notes: 'An American popcorn brand that is widely available in Canada.',
    categoryId: 'popcorn',
    aliases: ['popcorn indiana'],
    popularity: 40
  }
]

export const popcornCategory = {
  name: 'Popcorn',
  description: 'A variety of corn kernel which expands and puffs up when heated; a popular snack food.',
  aliases: ['snack', 'corn', 'popped corn']
}