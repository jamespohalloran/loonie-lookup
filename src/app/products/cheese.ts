import { Product } from '../products'

export const cheese: Product[] = [
  {
    name: 'Black Diamond',
    company: 'Lactalis Canada',
    percentCanadian: 100,
    notes: 'A Canadian brand under Lactalis, using Canadian-sourced milk for cheese production.',
    categoryId: 'cheese',
    aliases: ['black diamond'],
  },
  {
    name: 'Cracker Barrel',
    company: 'Lactalis Canada',
    percentCanadian: 50,
    notes:
      'Originally a Kraft brand, now owned by Lactalis. Some varieties are made in Canada, while others are imported.',
    categoryId: 'cheese',
    aliases: ['cracker barrel'],
  },
  {
    name: 'Saputo',
    company: 'Saputo Inc.',
    percentCanadian: 100,
    notes: "One of Canada's largest dairy companies, producing a wide variety of cheeses using Canadian milk.",
    categoryId: 'cheese',
    aliases: ['saputo'],
  },
  {
    name: 'Tre Stelle',
    company: 'Arla Foods',
    percentCanadian: 50,
    notes: 'Owned by a multinational company, but some cheeses are produced in Canada using Canadian dairy.',
    categoryId: 'cheese',
    aliases: ['tre stelle'],
  },
  {
    name: 'Lactantia',
    company: 'Lactalis Canada',
    percentCanadian: 100,
    notes: 'A Canadian dairy brand offering various cheeses made with locally sourced milk.',
    categoryId: 'cheese',
    aliases: ['lactantia'],
  },
  {
    name: 'Agropur',
    company: 'Agropur Cooperative',
    percentCanadian: 100,
    notes: 'A Canadian dairy cooperative producing a wide range of cheeses from Canadian dairy farms.',
    categoryId: 'cheese',
    aliases: ['agropur'],
  },
  {
    name: 'President’s Choice Cheese',
    company: 'Loblaw Companies',
    percentCanadian: 90,
    notes:
      "Loblaw's private label, most cheese varieties are made in Canada, but some ingredients or specialty cheeses are imported.",
    categoryId: 'cheese',
    aliases: ["president's choice", 'pc cheese'],
  },
  {
    name: 'Kirkland Signature Cheese',
    company: 'Costco',
    percentCanadian: 50,
    notes: 'Some cheeses are produced in Canada, but many varieties are sourced internationally.',
    categoryId: 'cheese',
    aliases: ['kirkland cheese', 'costco cheese'],
  },
  {
    name: 'Armstrong Cheese',
    company: 'Saputo Inc.',
    percentCanadian: 100,
    notes: 'A Canadian cheese brand under Saputo, made entirely with Canadian milk.',
    categoryId: 'cheese',
    aliases: ['armstrong'],
  },
  {
    name: 'Castello',
    company: 'Arla Foods',
    percentCanadian: 30,
    notes: 'A Danish-owned brand, but some varieties are produced in Canada.',
    categoryId: 'cheese',
    aliases: ['castello'],
  },
]

export const cheeseCategory = {
  name: 'Cheese',
  description: 'A dairy product available in various forms, including blocks, slices, shredded, and specialty cheeses.',
  aliases: ['dairy', 'cheddar', 'mozzarella', 'gouda'],
}
