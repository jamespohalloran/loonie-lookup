import { Product } from '../products'

export const milk: Product[] = [
  {
    name: 'Natrel',
    company: 'Agropur Cooperative',
    percentCanadian: 100,
    notes: 'A Canadian dairy cooperative, producing milk sourced entirely from Canadian farms.',
    categoryId: 'milk',
    aliases: ['natrel'],
  },
  {
    name: 'Neilson',
    company: 'Saputo Inc.',
    percentCanadian: 100,
    notes: 'A Canadian brand under Saputo, all milk is sourced and processed in Canada.',
    categoryId: 'milk',
    aliases: ['neilson'],
  },
  {
    name: 'Beatrice',
    company: 'Lactalis Canada',
    percentCanadian: 100,
    notes: 'A well-known Canadian dairy brand with milk sourced from Canadian farms.',
    categoryId: 'milk',
    aliases: ['beatrice'],
  },
  {
    name: 'Dairyland',
    company: 'Saputo Inc.',
    percentCanadian: 100,
    notes: 'A long-standing Canadian brand under Saputo, using Canadian-sourced milk.',
    categoryId: 'milk',
    aliases: ['dairyland'],
  },
  {
    name: 'Lucerne',
    company: 'Sobeys Inc.',
    percentCanadian: 100,
    notes: 'A Canadian grocery store brand offering milk sourced from Canadian dairy farms.',
    categoryId: 'milk',
    aliases: ['lucerne'],
  },
  {
    name: 'Sealtest',
    company: 'Lactalis Canada',
    percentCanadian: 100,
    notes: 'A Canadian milk brand under Lactalis, all milk is sourced from Canadian farms.',
    categoryId: 'milk',
    aliases: ['sealtest'],
  },
  {
    name: 'Fairlife',
    company: 'Coca-Cola Canada',
    percentCanadian: 50,
    notes: 'Owned by Coca-Cola, Fairlife is produced in Canada using local dairy, but the brand is American.',
    categoryId: 'milk',
    aliases: ['fairlife'],
  },
  {
    name: 'Organic Meadow',
    company: 'Organic Meadow Co-op',
    percentCanadian: 100,
    notes: 'A Canadian organic dairy brand, all products are sourced from Canadian organic farms.',
    categoryId: 'milk',
    aliases: ['organic meadow'],
  },
  {
    name: 'Kirkland Signature Milk',
    company: 'Costco',
    percentCanadian: 50,
    notes: 'Costco’s private label milk is sourced both from Canadian and U.S. suppliers.',
    categoryId: 'milk',
    aliases: ['kirkland milk', 'costco milk'],
  },
  {
    name: 'Great Value Milk',
    company: 'Walmart Canada',
    percentCanadian: 40,
    notes: 'Some varieties of Great Value milk are sourced in Canada, but supply chains vary.',
    categoryId: 'milk',
    aliases: ['great value milk', 'walmart milk'],
  },
]

export const milkCategory = {
  name: 'Milk',
  description:
    'A staple dairy product available in various fat percentages, organic options, and lactose-free varieties.',
  aliases: ['dairy'],
}
