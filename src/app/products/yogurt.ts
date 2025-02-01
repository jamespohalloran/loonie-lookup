import { Product } from '../products'

export const yogurt: Product[] = [
  {
    name: 'Activia',
    company: 'Danone Canada',
    percentCanadian: 50,
    notes: 'Produced in Canada using local dairy, but owned by the multinational Danone Group.',
    categoryId: 'yogurt',
    aliases: ['activia'],
  },
  {
    name: 'Oikos',
    company: 'Danone Canada',
    percentCanadian: 50,
    notes: 'Manufactured in Canada with Canadian milk, but the brand is owned by Danone.',
    categoryId: 'yogurt',
    aliases: ['oikos'],
  },
  {
    name: 'Iögo',
    company: 'Agropur Cooperative',
    percentCanadian: 100,
    notes: 'A fully Canadian-owned brand, made using milk from Canadian dairy farms.',
    categoryId: 'yogurt',
    aliases: ['iogo'],
  },
  {
    name: 'Liberté',
    company: 'General Mills Canada',
    percentCanadian: 50,
    notes:
      'A Canadian-origin brand now owned by General Mills. Some products are still made in Canada using local milk.',
    categoryId: 'yogurt',
    aliases: ['liberte'],
  },
  {
    name: 'Yoplait',
    company: 'General Mills Canada',
    percentCanadian: 50,
    notes: 'Owned by General Mills, but some varieties are produced in Canada using Canadian dairy.',
    categoryId: 'yogurt',
    aliases: ['yoplait'],
  },
  {
    name: "Siggi's",
    company: 'Lactalis Canada',
    percentCanadian: 30,
    notes: 'Icelandic-style yogurt brand owned by Lactalis, with some varieties made in Canada.',
    categoryId: 'yogurt',
    aliases: ['siggis', "siggi's yogurt"],
  },
  {
    name: 'President’s Choice Yogurt',
    company: 'Loblaw Companies',
    percentCanadian: 90,
    notes: 'Loblaw’s private label, made primarily in Canada but some ingredients may be imported.',
    categoryId: 'yogurt',
    aliases: ["president's choice yogurt", 'pc yogurt'],
  },
  {
    name: 'Kirkland Signature Yogurt',
    company: 'Costco',
    percentCanadian: 50,
    notes: 'Some Kirkland yogurt varieties are made in Canada, but sourcing varies by product.',
    categoryId: 'yogurt',
    aliases: ['kirkland yogurt', 'costco yogurt'],
  },
  {
    name: 'Great Value Yogurt',
    company: 'Walmart Canada',
    percentCanadian: 40,
    notes: "Walmart's store brand yogurt is made in Canada, but some ingredients and varieties are imported.",
    categoryId: 'yogurt',
    aliases: ['great value yogurt', 'walmart yogurt'],
  },
  {
    name: 'Skyr Icelandic Yogurt',
    company: 'Various brands',
    percentCanadian: 20,
    notes: 'Most Skyr yogurt brands in Canada are imported, but some small-scale production happens locally.',
    categoryId: 'yogurt',
    aliases: ['skyr', 'icelandic yogurt'],
  },
]

export const yogurtCategory = {
  name: 'Yogurt',
  description:
    'A dairy product made from fermented milk, available in various styles such as Greek, Icelandic (Skyr), and traditional.',
  aliases: ['dairy', 'greek yogurt', 'skyr'],
}
