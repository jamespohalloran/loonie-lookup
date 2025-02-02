import { Product } from '../products'

export const bleachWhiteners: Product[] = [
  {
    name: 'Clorox',
    company: 'The Clorox Company',
    percentCanadian: 0,
    notes: 'Product is made in the United States.',
    categoryId: 'bleachWhiteners',
    aliases: ['clorox bleach'],
    popularity: 95
  },
  {
    name: 'Javex',
    company: 'The Clorox Company',
    percentCanadian: 50,
    notes: 'Produced in Canada but the brand is owned by an American company.',
    categoryId: 'bleachWhiteners',
    aliases: ['javex bleach'],
    popularity: 90
  },
  {
    name: 'Comet',
    company: 'Spic and Span',
    percentCanadian: 0,
    notes: 'Product is made in the United States.',
    categoryId: 'bleachWhiteners',
    aliases: ['comet bleach'],
    popularity: 75
  },
  {
    name: 'Tide Whitening',
    company: 'Procter & Gamble',
    percentCanadian: 0,
    notes: 'Product is made in the United States.',
    categoryId: 'bleachWhiteners',
    aliases: ['tide whitening bleach', "tide's whitening"],
    popularity: 85
  },

  {
    name: 'Purex2 Stain Fighter and Bright Booster',
    company: 'Henkel Corporation',
    percentCanadian: 0,
    notes: 'Product is made in the United States.',
    categoryId: 'bleachWhiteners',
    aliases: ['purex2 bleach', 'stain fighter'],
    popularity: 80
  },
   {
    name: 'OxiClean Versatile Stain Remover',
    company: 'Church and Dwight Co., Inc.',
    percentCanadian: 0,
    notes: 'Product is made in the United States.',
    categoryId: 'bleachWhiteners',
    aliases: ['oxiclean bleach', 'versatile stain remover'],
    popularity: 70
  },
  {
    name: 'La Parisienne',
    company: 'La Parisienne',
    percentCanadian: 100,
    notes: 'A Canadian company producing bleach made in Quebec.',
    categoryId: 'bleachWhiteners',
    aliases: ['la parisienne bleach'],
    popularity: 60
  },
  {
    name: 'Old Dutch',
    company: 'Old Dutch',
    percentCanadian: 100,
    notes: 'A Canadian company producing bleach made in Winnipeg.',
    categoryId: 'bleachWhiteners',
    aliases: ['old dutch bleach'],
    popularity: 70
  },
  {
    name: 'President’s Choice Bleach',
    company: 'Loblaw Companies',
    percentCanadian: 80,
    notes: 'Loblaws private label bleach. The product is made locally but some ingredients are sourced internationally.',
    categoryId: 'bleachWhiteners',
    aliases: ['pc bleach', "president's choice bleach"],
    popularity: 50
  },
  {
    name: 'No Name',
    company: 'Loblaw Companies',
    percentCanadian: 80,
    notes: 'Loblaws budget-friendly private label. The product is made locally but some ingredients are sourced internationally.',
    categoryId: 'bleachWhiteners',
    aliases: ['no name bleach'],
    popularity: 65
  }
]

export const bleachWhitenersCategory = {
  name: 'Bleach Whiteners',
  description: 'Products used for whitening and sanitizing laundry and household surfaces.',
  aliases: ['bleach', 'whitening']
}