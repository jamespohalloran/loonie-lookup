import { Product } from '../products'

export const coffee: Product[] = [
  {
    name: 'Tim Hortons',
    company: 'Restaurant Brands International',
    percentCanadian: 100,
    notes: 'A popular Canadian coffee brand, available in grocery stores across Canada.',
    categoryId: 'coffee',
    aliases: ['tims coffee', 'tim hortons coffee'],
    popularity: 95
  },
  {
    name: 'Folgers',
    company: 'The J.M. Smucker Company',
    percentCanadian: 0,
    notes: 'An American coffee brand, widely available in Canadian grocery stores.',
    categoryId: 'coffee',
    aliases: ['folgers coffee'],
    popularity: 80
  },
  {
    name: 'Kicking Horse Coffee',
    company: 'Kicking Horse Coffee Co.',
    percentCanadian: 100,
    notes: 'A Canadian coffee brand, based in Invermere, BC.',
    categoryId: 'coffee',
    aliases: ['kicking horse coffee'],
    popularity: 70
  },
  {
    name: 'Maxwell House',
    company: 'Kraft Heinz',
    percentCanadian: 20,
    notes: 'A coffee brand owned by American company Kraft Heinz, but packaged in Canada.' ,
    categoryId: 'coffee',
    aliases: ['maxwell coffee', 'maxwell house coffee'],
    popularity: 85
  },
  {
    name: 'Van Houtte',
    company: 'Keurig Dr Pepper',
    percentCanadian: 0,
    notes: 'Owned by American company Keurig Dr Pepper, widely available in Canadian grocery stores.',
    categoryId: 'coffee',
    aliases: ['van houtte coffee'],
    popularity: 90
  },
  {
    name: 'Melitta',
    company: 'Melitta Group',
    percentCanadian: 0,
    notes: 'A German coffee brand, widely available in Canadian grocery stores.',
    categoryId: 'coffee',
    aliases: ['melitta coffee'],
    popularity: 75
  },
  {
    name: 'McDonald’s McCafé',
    company: 'McDonald’s Canada',
    percentCanadian: 50,
    notes: 'McCafé coffee is packed in Canada and available in McDonald’s restaurants and in retail stores.',
    categoryId: 'coffee',
    aliases: ['mccafe coffee', 'mcdonalds coffee'],
    popularity: 85
  },
  {
    name: 'Nabob',
    company: 'Kraft Foods',
    percentCanadian: 100,
    notes: 'A popular Canadian coffee brand, available in grocery stores across Canada.',
    categoryId: 'coffee',
    aliases: ['nabob coffee'],
    popularity: 80
  },
  {
    name: 'President’s Choice Coffee',
    company: 'Loblaw Companies',
    percentCanadian: 90,
    notes: 'Produced by Loblaw Companies. Some of the coffee is sourced internationally.',
    categoryId: 'coffee',
    aliases: ['pc coffee', "president's choice coffee"],
    popularity: 65
  },
  {
    name: 'Second Cup Coffee',
    company: 'Aegis Brands',
    percentCanadian: 100,
    notes: 'A Canadian coffee brand, available in select grocery stores across Canada.',
    categoryId: 'coffee',
    aliases: ['second cup coffee'],
    popularity: 70
  }
]

export const coffeeCategory = {
  name: 'Coffee',
  description: 'Caffeinated beverage made from roasted coffee beans.',
  aliases: ['caffeine', 'beans', 'morning drink']
}