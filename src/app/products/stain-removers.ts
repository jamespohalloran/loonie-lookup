import { Product } from '../products'

export const stainRemovers: Product[] = [
  {
    name: 'Shout',
    company: 'SC Johnson',
    percentCanadian: 0,
    notes: 'Made in the US.',
    categoryId: 'stainRemovers',
    aliases: ['shout stain remover'],
    popularity: 90
  },
  {
    name: 'Resolve',
    company: 'Reckitt Benckiser',
    percentCanadian: 0,
    notes: 'Made in the US.',
    categoryId: 'stainRemovers',
    aliases: ['resolve stain remover'],
    popularity: 85
  },
  {
    name: 'OxiClean',
    company: 'Church & Dwight',
    percentCanadian: 0,
    notes: 'Made in the US.',
    categoryId: 'stainRemovers',
    aliases: ['oxiclean stain remover'],
    popularity: 80
  },
  {
    name: 'Tide To Go',
    company: 'Proctor & Gamble',
    percentCanadian: 0,
    notes: 'Made in the US.',
    categoryId: 'stainRemovers',
    aliases: ['tide to go pen', 'tide stain remover'],
    popularity: 75
  },
  {
    name: 'Spray n Wash',
    company: 'Reckitt Benckiser',
    percentCanadian: 0,
    notes: 'Made in the US.',
    categoryId: 'stainRemovers',
    aliases: ['spray n wash stain remover'],
    popularity: 70
  },
  {
    name: 'Zout',
    company: 'Henkel',
    percentCanadian: 0,
    notes: 'Made in the US.',
    categoryId: 'stainRemovers',
    aliases: ['zout stain remover'],
    popularity: 65
  },
  {
    name: 'Fels-Naptha',
    company: 'Purex',
    percentCanadian: 0,
    notes: 'Made in the US.',
    categoryId: 'stainRemovers',
    aliases: ['fels-naptha soap'],
    popularity: 60
  },
  {
    name: 'Lestoil',
    company: 'Clorox',
    percentCanadian: 0,
    notes: 'Made in the US.',
    categoryId: 'stainRemovers',
    aliases: ['lestoil stain remover'],
    popularity: 55
  },
  {
    name: 'Amodex',
    company: 'Amodex Products Inc',
    percentCanadian: 0,
    notes: 'Made in the US.',
    categoryId: 'stainRemovers',
    aliases: ['amodex stain remover'],
    popularity: 50
  },
  {
    name: 'Carbona',
    company: 'Delta Pronatura',
    percentCanadian: 0,
    notes: 'Made in the US.',
    categoryId: 'stainRemovers',
    aliases: ['carbona stain remover'],
    popularity: 45
  }
]

export const stainRemoversCategory = {
  name: 'Stain Removers',
  description: 'Products specifically designed to remove stains from fabrics or other surfaces.',
  aliases: ['laundry care', 'cleaning supplies']
}