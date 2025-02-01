import { Product } from '../products'

export const cereal: Product[] = [
  {
    name: 'Shreddies',
    company: 'Post Foods Canada',
    percentCanadian: 100,
    notes: 'A well-known Canadian brand, manufactured in Niagara Falls, Ontario.',
    categoryId: 'cereal',
    aliases: ['shreddies cereal'],
    popularity: 95
  },
  {
    name: 'Vector',
    company: 'Kellogg’s',
    percentCanadian: 100,
    notes: 'A popular cereal for health-conscious Canadians. Made in Canada.',
    categoryId: 'cereal',
    aliases: ['vector cereal'],
    popularity: 90
  },
  {
    name: 'Cheerios',
    company: 'General Mills Canada',
    percentCanadian: 100,
    notes: 'Manufactured in Canada and uses whole grain oats which come from fields in the Prairie Provinces.',
    categoryId: 'cereal',
    aliases: ['cheerios cereal'],
    popularity: 85
  },
  {
    name: 'Life',
    company: 'Quaker Oats Company',
    percentCanadian: 0,
    notes: 'Made by the US-based Quaker Oats Company.',
    categoryId: 'cereal',
    aliases: ['life cereal'],
    popularity: 80
  },
  {
    name: 'Frosted Flakes',
    company: 'Kellogg’s',
    percentCanadian: 50,
    notes: 'Half of all Frosted Flakes sold in Canada are made in Canada.',
    categoryId: 'cereal',
    aliases: ['frosted flakes cereal'],
    popularity: 75
  },
  {
    name: 'Raisin Bran',
    company: 'Kellogg’s',
    percentCanadian: 75,
    notes: '75% of Raisin Bran sold in Canada is made in Canada.',
    categoryId: 'cereal',
    aliases: ['raisin bran cereal'],
    popularity: 70
  },
  {
    name: 'Honey Nut Cheerios',
    company: 'General Mills Canada',
    percentCanadian: 100,
    notes: 'Manufactured in Canada and uses Canadian honey.',
    categoryId: 'cereal',
    aliases: ['honey nut cheerios cereal'],
    popularity: 65
  },
  {
    name: 'Cinnamon Toast Crunch',
    company: 'General Mills Canada',
    percentCanadian: 100,
    notes: 'Manufactured in Canada and is very popular among children.',
    categoryId: 'cereal',
    aliases: ['cinnamon toast crunch cereal'],
    popularity: 60
  },
  {
    name: 'Rice Krispies',
    company: 'Kellogg’s',
    percentCanadian: 0,
    notes: 'Made by the US-based Kellogg’s Company.',
    categoryId: 'cereal',
    aliases: ['rice krispies cereal'],
    popularity: 55
  },
  {
    name: 'Special K',
    company: 'Kellogg’s',
    percentCanadian: 50,
    notes: 'Half of all Special K sold in Canada is made in Canada.',
    categoryId: 'cereal',
    aliases: ['special k cereal'],
    popularity: 50
  }
]

export const cerealCategory = {
  name: 'Cereal',
  description: 'A breakfast staple, often consumed in combination with milk. Available in a variety of styles and flavours.',
  aliases: ['breakfast', 'grains']
}