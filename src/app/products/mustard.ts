import { Product } from '../products'

export const mustard: Product[] = [
  {
    name: 'French’s',
    company: 'French’s',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Entirely made in the US.',
    categoryId: 'mustard',
    aliases: ['frenchs mustard'],
    popularity: 95
  },
  {
    name: 'Maille Dijon',
    company: 'Maille',
    countryCode: 'FR',
    percentCanadian: 0,
    notes: 'Premium European brand, not made in Canada, but quite popular among Canadians.',
    categoryId: 'mustard',
    aliases: ['maille mustard', 'maille dijon originale mustard'],
    popularity: 85
  },
  {
    name: 'President’s Choice Dijon Mustard',
    company: 'Loblaw Companies',
    countryCode: 'CA',
    percentCanadian: 50,
    notes: 'Manufactured in Canada using Canadian and imported ingredients.',
    categoryId: 'mustard',
    aliases: ['presidents choice mustard', 'pc dijon mustard'],
    popularity: 80
  },
  {
    name: 'Great Value Mustard',
    company: 'Walmart Canada',
    countryCode: 'CA',
    percentCanadian: 50,
    notes: 'Produced in Canada but primarily sold in Walmart stores.',
    categoryId: 'mustard',
    aliases: ['great value mustard', 'walmart mustard'],
    popularity: 70
  },
  {
    name: 'Heinz Yellow Mustard',
    company: 'Heinz',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Primarily produced in the US.',
    categoryId: 'mustard',
    aliases: ['heinz mustard'],
    popularity: 65
  },
  {
    name: 'Kozlik’s Canadian Mustard',
    company: 'Anton Kozlik’s Canadian Mustard',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Hand-made in Toronto since 1948. Known for its natural, high-quality ingredients.',
    categoryId: 'mustard',
    aliases: ['kozliks mustard'],
    popularity: 75
  },
  {
    name: 'Compliments Mustard',
    company: 'Sobeys',
    countryCode: 'CA',
    percentCanadian: 70,
    notes: 'Sobeys store brand, manufactured in Canada but with some imported ingredients.',
    categoryId: 'mustard',
    aliases: ['compliments mustard'],
    popularity: 60
  },
  {
    name: 'Inglehoffer Mustard',
    company: 'Beaverton Foods',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Produced by an American company.',
    categoryId: 'mustard',
    aliases: ['inglehoffer mustard'],
    popularity: 50
  },
  {
    name: 'Honeycup Mustard',
    company: 'Unico',
    countryCode: 'CA',
    percentCanadian: 75,
    notes: 'A Canadian owned company but some ingredients sourced internationally.',
    categoryId: 'mustard',
    aliases: ['honeycup mustard'],
    popularity: 55
  },
  {
    name: 'Co-op Gold Pure Mustard',
    company: 'Co-op Gold',
    countryCode: 'CA',
    percentCanadian: 90,
    notes: 'Co-op’s private label, made primarily with Canadian-grown seeds.',
    categoryId: 'mustard',
    aliases: ['co-op mustard'],
    popularity: 65
  }
]

export const mustardCategory = {
  name: 'Mustard',
  description: 'A condiment made from the seeds of a mustard plant mixed with water, vinegar, lemon juice, wine, or other liquids, salt, and other flavorings and spices.',
  aliases: ['condiment']
}