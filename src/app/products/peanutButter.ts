import { Product } from '../products'

export const peanutButter: Product[] = [
  {
    name: 'Kraft',
    company: 'Kraft Heinz',
    percentCanadian: 0,
    notes: 'Made in the USA.',
    categoryId: 'peanutButter',
    aliases: ['kraft peanut butter'],
    popularity: 85,
  },
  {
    name: 'Jif',
    company: 'J.M. Smucker Company',
    percentCanadian: 0,
    notes: 'Made in the USA.',
    categoryId: 'peanutButter',
    aliases: ['jif peanut butter'],
    popularity: 80,
  },
  {
    name: 'Skippy',
    company: 'Hormel Foods',
    percentCanadian: 0,
    notes: 'Made in the USA.',
    categoryId: 'peanutButter',
    aliases: ['skippy peanut butter'],
    popularity: 75,
  },
  {
    name: 'President’s Choice',
    company: 'Loblaw Companies',
    percentCanadian: 90,
    notes: 'Loblaw’s private label, made with mostly Canadian ingredients.',
    categoryId: 'peanutButter',
    aliases: ['pc peanut butter', "president's choice peanut butter"],
    popularity: 70,
  },
  {
    name: 'Great Value',
    company: 'Walmart Canada',
    percentCanadian: 50,
    notes: 'Walmart’s store brand, made with a combination of Canadian and international ingredients.',
    categoryId: 'peanutButter',
    aliases: ['great value peanut butter', 'walmart peanut butter'],
    popularity: 65,
  },
  {
    name: 'Kirkland Signature',
    company: 'Costco',
    percentCanadian: 50,
    notes: 'Costco’s private label, made with a combination of Canadian and international ingredients.',
    categoryId: 'peanutButter',
    aliases: ['kirkland peanut butter', 'costco peanut butter'],
    popularity: 60,
  },
  {
    name: 'Adams',
    company: 'Smucker Foods of Canada',
    percentCanadian: 100,
    notes: 'A Canadian brand, made entirely with Canadian peanuts.',
    categoryId: 'peanutButter',
    aliases: ['adams peanut butter'],
    popularity: 55,
  },
  {
    name: 'Nuts to You Nut Butter',
    company: 'Nuts to You Nut Butter Inc',
    percentCanadian: 100,
    notes: 'A Canadian company, produces organic and all-natural peanut butters.',
    categoryId: 'peanutButter',
    aliases: ['nuts to you peanut butter'],
    popularity: 50,
  },
  {
    name: 'Wowbutter',
    company: 'Wowbutter Foods',
    percentCanadian: 100,
    notes: 'A Canadian brand that produces peanut free, tree nut free, gluten free, and dairy free spread.',
    categoryId: 'peanutButter',
    aliases: ['wowbutter'],
    popularity: 45,
  },
  {
    name: 'Teddie',
    company: 'Leavitt Corporation',
    percentCanadian: 0,
    notes: 'Made in the USA.',
    categoryId: 'peanutButter',
    aliases: ['teddie peanut butter'],
    popularity: 40,
  },
]

export const peanutButterCategory = {
  name: 'Peanut Butter',
  description: 'A spread that is made from ground, dry-roasted peanuts, available in creamy and crunchy varieties.',
  aliases: ['spread', 'peanut spread', 'nut butter'],
}
