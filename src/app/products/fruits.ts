import { Product } from '../products'

export const fruits: Product[] = [
  {
    name: 'Apples (Domestic)',
    company: 'Domestic',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Many varieties are grown in provinces such as Ontario, British Columbia, and Quebec.',
    categoryId: 'fruits',
    aliases: ['apples'],
    popularity: 95
  },
  {
    name: 'Apples (Imported)',
    company: 'Imported',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'In off-seasons or for certain varieties, apples may also come from the United States, Chile, or New Zealand.',
    categoryId: 'fruits',
    aliases: ['apples'],
    popularity: 95
  },
  {
    name: 'Bananas (Imported)',
    company: 'Imported',
    countryCode: 'CO',
    percentCanadian: 0,
    notes: 'Almost exclusively sourced from Latin American countries (e.g., Ecuador, Costa Rica, Colombia).',
    categoryId: 'fruits',
    aliases: ['apples'],
    popularity: 95
  },
  {
    name: 'Oranges (Imported)',
    company: 'Imported',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Commonly imported from the United States (Florida/California), Mexico, or Chile. Very limited citrus grows in Canada due to the climate.',
    categoryId: 'fruits',
    aliases: ['apples'],
    popularity: 95
  },
  {
    name: 'Grapes (Domestic)',
    company: 'Domestic',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Grown in regions like British Columbia and Ontario during local growing seasons.',
    categoryId: 'fruits',
    aliases: ['apples'],
    popularity: 95
  },
  {
    name: 'Grapes (Imported)',
    company: 'Imported',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Off-season supplies often come from Chile or the United States.',
    categoryId: 'fruits',
    aliases: ['apples'],
    popularity: 95
  },
  {
    name: 'Strawberries (Domestic)',
    company: 'Domestic',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Available during the summer months from provinces like Ontario and British Columbia.',
    categoryId: 'fruits',
    aliases: ['apples'],
    popularity: 95
  },
  {
    name: 'Strawberries (Imported)',
    company: 'Imported',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Off-season strawberries are sometimes imported from Mexico or the United States.',
    categoryId: 'fruits',
    aliases: ['apples'],
    popularity: 95
  },
  {
    name: 'Blueberries (Domestic)',
    company: 'Domestic',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Grown in provinces such as British Columbia and Atlantic Canada during summer.',
    categoryId: 'fruits',
    aliases: ['apples'],
    popularity: 95
  },
  {
    name: 'Blueberries (Imported)',
    company: 'Imported',
    countryCode: 'MX',
    percentCanadian: 0,
    notes: 'Typically imported from tropical regions, with Mexico, Peru, or Brazil being common sources.',
    categoryId: 'fruits',
    aliases: ['apples'],
    popularity: 95
  },
  {
    name: 'Pineapples (Imported)',
    company: 'Imported',
    countryCode: 'CO',
    percentCanadian: 0,
    notes: 'Sourced mainly from Costa Rica.',
    categoryId: 'fruits',
    aliases: ['apples'],
    popularity: 95
  },
  {
    name: 'Kiwifruit (Imported)',
    company: 'Imported',
    countryCode: 'NZ',
    percentCanadian: 0,
    notes: 'Often come from countries like New Zealand, Italy, or Chile.',
    categoryId: 'fruits',
    aliases: ['apples'],
    popularity: 95
  },
  {
    name: 'Pears (Domestic)',
    company: 'Domestic',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Often come from countries like New Zealand, Italy, or Chile.',
    categoryId: 'fruits',
    aliases: ['apples'],
    popularity: 95
  },
  {
    name: 'Pears (Imported)',
    company: 'Imported',
    countryCode: 'NZ',
    percentCanadian: 0,
    notes: 'Often come from countries like New Zealand, Italy, or Chile.',
    categoryId: 'fruits',
    aliases: ['apples'],
    popularity: 95
  },
]

export const fruitsCategory = {
  name: 'Produce',
  description: 'Fruits and vegetables',
  aliases: ['fruits', 'fruits', 'vegetables'],
}