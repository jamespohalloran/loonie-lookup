import { Product } from '../products'

export const dishSoap: Product[] = [
  {
    name: 'Cascade',
    company: 'Procter & Gamble Canada',
    countryCode: 'CA',
    percentCanadian: 50,
    notes: 'Manufactured in Canada with some imported components. Available nationwide.',
    categoryId: 'dishSoap',
    aliases: ['cascade dish soap'],
    popularity: 90
  },
  {
    name: 'Dawn',
    company: 'Procter & Gamble Canada',
    countryCode: 'CA',
    percentCanadian: 50,
    notes: 'Manufactured in Canada with some imported components. Available nationwide.',
    categoryId: 'dishSoap',
    aliases: ['dawn dish soap'],
    popularity: 95
  },
  {
    name: 'Palmolive',
    company: 'Colgate-Palmolive Canada',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Manufactured outside Canada.',
    categoryId: 'dishSoap',
    aliases: ['palmolive dish soap'],
    popularity: 85
  },
  {
    name: 'Sunlight',
    company: 'Unilever Canada',
    countryCode: 'NL',
    percentCanadian: 0,
    notes: 'Manufactured outside Canada.',
    categoryId: 'dishSoap',
    aliases: ['sunlight dish soap'],
    popularity: 70
  },
  {
    name: 'Ivory',
    company: 'Procter & Gamble Canada',
    countryCode: 'CA',
    percentCanadian: 50,
    notes: 'Manufactured in Canada with some imported components. Available nationwide.',
    categoryId: 'dishSoap',
    aliases: ['ivory dish soap'],
    popularity: 80
  },
  {
    name: 'President’s Choice Dish Soap',
    company: 'Loblaw Companies',
    countryCode: 'CA',
    percentCanadian: 90,
    notes: 'Loblaw’s private label dish soap.',
    categoryId: 'dishSoap',
    aliases: ['pc dish soap', "president's choice dish soap"],
    popularity: 75
  },
  {
    name: 'Great Value Dish Soap',
    company: 'Walmart Canada',
    countryCode: 'CA',
    percentCanadian: 50,
    notes: 'Walmart’s store brand dish soap, widely available in Walmart locations across Canada.',
    categoryId: 'dishSoap',
    aliases: ['great value dish soap', 'walmart dish soap'],
    popularity: 70
  },
  {
    name: 'Method Dish Soap',
    company: 'Method Products Canada',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Manufactured outside Canada.',
    categoryId: 'dishSoap',
    aliases: ['method dish soap'],
    popularity: 65
  },
  {
    name: 'Seventh Generation',
    company: 'Seventh Generation',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Manufactured outside Canada.',
    categoryId: 'dishSoap',
    aliases: ['seventh generation dish soap'],
    popularity: 60
  },
  {
    name: 'Better Life Dish Soap',
    company: 'Better Life',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Manufactured outside Canada.',
    categoryId: 'dishSoap',
    aliases: ['better life dish soap'],
    popularity: 55
  }
]

export const dishSoapCategory = {
  name: 'Dish Soap',
  description: 'Liquid detergent used to clean dishes.',
  aliases: ['detergent', 'dish detergent']
}