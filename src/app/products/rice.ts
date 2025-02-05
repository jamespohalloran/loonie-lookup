import { Product } from '../products'

export const rice: Product[] = [
  {
    name: 'Uncle Ben\'s',
    company: 'Mars Food',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Made in the US.',
    categoryId: 'rice',
    aliases: ['uncle bens rice'],
    popularity: 90
  },
  {
    name: 'Minute Rice',
    company: 'Riviana Foods Inc',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Made in the US.',
    categoryId: 'rice',
    aliases: ['minute rice'],
    popularity: 85
  },
  {
    name: 'Canoe',
    company: 'McCain Foods',
    countryCode: 'CA',
    percentCanadian: 30,
    notes: 'Made in Canada, partially owned by a Canadian company, and some rice is sourced internationally.',
    categoryId: 'rice',
    aliases: ['canoe rice'],
    popularity: 70
  },
  {
    name: 'Tilda',
    company: 'Tilda Ltd',
    countryCode: 'UK',
    percentCanadian: 0,
    notes: 'Imported from the UK.',
    categoryId: 'rice',
    aliases: ['tilda rice'],
    popularity: 65
  },
  {
    name: 'Riceland',
    company: 'Riceland Foods',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Made in the US.',
    categoryId: 'rice',
    aliases: ['riceland rice'],
    popularity: 60
  },
  {
    name: 'President\'s Choice Rice',
    company: 'Loblaw Companies',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Made in Canada, under Loblaw’s private label.',
    categoryId: 'rice',
    aliases: ['pc rice', 'president\'s choice rice'],
    popularity: 80
  },
  {
    name: 'Dainty',
    company: 'Dainty Foods',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Made in Canada with international ingredients.',
    categoryId: 'rice',
    aliases: ['dainty rice'],
    popularity: 75
  },
  {
    name: 'RiceSelect',
    company: 'Riviana Foods Inc',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Produced in the US.',
    categoryId: 'rice',
    aliases: ['riceselect', 'riceselect rice'],
    popularity: 50
  },
  {
    name: 'Home Grown Living Foods',
    company: 'Home Grown Living Foods',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A Canadian brand made with Canadian rice.',
    categoryId: 'rice',
    aliases: ['home grown rice'],
    popularity: 40
  },
  {
    name: 'Wild Rows',
    company: 'Wild Rows',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A Canadian brand, made with Canadian wild rice.',
    categoryId: 'rice',
    aliases: ['wild rows rice'],
    popularity: 35
  }
]

export const riceCategory = {
  name: 'Rice',
  description: 'A staple food for much of the world\'s human population, and is available in various colours, shapes, and sizes.',
  aliases: ['grains', 'cereal', 'staple food']
}