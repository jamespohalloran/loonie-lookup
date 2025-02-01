import { Product } from '../products'

export const ketchup: Product[] = [
  {
    name: 'Heinz',
    company: 'Kraft Heinz Canada',
    percentCanadian: 0,
    notes: 'Heinz is not a Canadian company, although they do have manufacturing plants in Canada.',
    categoryId: 'ketchup',
    aliases: ['heinz ketchup'],
    popularity: 95,
  },
  {
    name: 'French’s',
    company: 'McCormick Canada',
    percentCanadian: 0,
    notes: 'French’s is not a Canadian company, but it manufactures its ketchup in Canada.',
    categoryId: 'ketchup',
    aliases: ['french’s ketchup'],
    popularity: 85,
  },
  {
    name: 'President’s Choice Ketchup',
    company: 'Loblaw Companies',
    percentCanadian: 90,
    notes: 'Loblaws private label ketchup, made with 100% Canadian tomatoes.',
    categoryId: 'ketchup',
    aliases: ['pc ketchup', "president's choice ketchup"],
    popularity: 80,
  },
  {
    name: 'Primo',
    company: 'Primofoods',
    percentCanadian: 100,
    notes: 'A Canadian-owned and operated company that produces ketchup made from locally sourced ingredients.',
    categoryId: 'ketchup',
    aliases: ['primo ketchup'],
    popularity: 70,
  },
  {
    name: 'No Name',
    company: 'Loblaw Companies',
    percentCanadian: 80,
    notes: 'Loblaw’s budget friendly brand. Made in Canada but uses a mix of Canadian and international ingredients.',
    categoryId: 'ketchup',
    aliases: ['no name ketchup'],
    popularity: 75,
  },
  {
    name: 'Great Value',
    company: 'Walmart Canada',
    percentCanadian: 0,
    notes: 'Walmart’s store brand ketchup. Not a Canadian product, but widely available across the country.',
    categoryId: 'ketchup',
    aliases: ['great value ketchup', 'walmart ketchup'],
    popularity: 70,
  },
  {
    name: 'Compliments',
    company: 'Sobeys Inc.',
    percentCanadian: 85,
    notes: 'Sobeys store brand. Made in Canada from Canadian and imported ingredients.',
    categoryId: 'ketchup',
    aliases: ['compliments ketchup'],
    popularity: 65,
  },
  {
    name: 'Simply Natural',
    company: 'Chelten House Products',
    percentCanadian: 0,
    notes: 'A premium, organic ketchup brand. Not Canadian and uses imported ingredients.',
    categoryId: 'ketchup',
    aliases: ['simply natural ketchup'],
    popularity: 60,
  },
  {
    name: 'Irresistibles',
    company: 'Metro Inc.',
    percentCanadian: 85,
    notes: 'Metro’s private label brand. Manufactured in Canada using a mix of local and imported ingredients.',
    categoryId: 'ketchup',
    aliases: ['irresistibles ketchup'],
    popularity: 55,
  },
  {
    name: 'E.D. Smith',
    company: 'TreeHouse Foods',
    percentCanadian: 0,
    notes:
      'A premium ketchup brand in the Canadian market. Not Canadian-made despite being widely available in Canadian stores.',
    categoryId: 'ketchup',
    aliases: ['ed smith ketchup'],
    popularity: 50,
  },
]

export const ketchupCategory = {
  name: 'Ketchup',
  description: 'A sweet and tangy sauce, often made from tomatoes, vinegar, sweetener, and spices.',
  aliases: ['tomato sauce', 'catsup', 'sauce'],
}
