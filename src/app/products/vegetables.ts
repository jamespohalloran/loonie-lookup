import { Product } from '../products'

export const vegetables: Product[] = [
  {
    name: 'Lettuce and Other Salad Greens (Domestic)',
    company: 'Domestic',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Grown locally in many provinces (e.g., Ontario, Quebec), often in controlled-environment greenhouses during colder months.',
    categoryId: 'vegetables',
    aliases: ['lettuce'],
    popularity: 95
  },
  {
    name: 'Tomatoes (Domestic)',
    company: 'Domestic',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Widely grown in Canadian greenhouses, particularly in the winter.',
    categoryId: 'vegetables',
    aliases: ['tomatoes'],
    popularity: 95
  },
  {
    name: 'Tomatoes (Imported)',
    company: 'Imported',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'In the summer, tomatoes may also be sourced from the United States or Mexico when demand is high.',
    categoryId: 'vegetables',
    aliases: ['tomatoes'],
    popularity: 95
  },
  {
    name: 'Bell Peppers & Cucumbers (Domestic)',
    company: 'Domestic',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Available during the summer from local farms.',
    categoryId: 'vegetables',
    aliases: ['bell', 'peppers', 'cucumbers'],
    popularity: 95
  },
  {
    name: 'Bell Peppers & Cucumbers (Imported)',
    company: 'Imported',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Off-season supplies are often imported from Mexico or the United States.',
    categoryId: 'vegetables',
    aliases: ['bell', 'peppers', 'cucumbers'],
    popularity: 95
  },
  {
    name: 'Carrots (Domestic)',
    company: 'Domestic',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Available during the summer from local farms.',
    categoryId: 'vegetables',
    aliases: ['carrots'],
    popularity: 95
  },
  {
    name: 'Potatoes (Domestic)',
    company: 'Domestic',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Cultivated widely across Canada (e.g., in Ontario, Prince Edward Island, and even northern regions).',
    categoryId: 'vegetables',
    aliases: ['potatoes'],
    popularity: 95
  },
  {
    name: 'Broccoli & Other Cruciferous Vegetables (Domestic)',
    company: 'Domestic',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Produced in provinces like Ontario and British Columbia.',
    categoryId: 'vegetables',
    aliases: ['broccoli'],
    popularity: 95
  },
  {
    name: 'Onions (Domestic)',
    company: 'Domestic',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A staple crop in Canada, though some specialty varieties may be imported from the United States or other regions when not in season.',
    categoryId: 'vegetables',
    aliases: ['onions'],
    popularity: 95
  },
  {
    name: 'Garlic (Domestic)',
    company: 'Domestic',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'While there is local production, some garlic is also imported from countries such as China.',
    categoryId: 'vegetables',
    aliases: ['garlic'],
    popularity: 95
  },
  {
    name: 'Garlic (Imported)',
    company: 'Imported',
    countryCode: 'CN',
    percentCanadian: 0,
    notes: 'While there is local production, some garlic is also imported from countries such as China.',
    categoryId: 'vegetables',
    aliases: ['garlic'],
    popularity: 95
  },
  {
    name: 'Asparagus (Domestic)',
    company: 'Domestic',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Grown in regions like Ontario during the summer months.',
    categoryId: 'vegetables',
    aliases: ['asparagus'],
    popularity: 95
  },
  {
    name: 'Asparagus (Imported)',
    company: 'Imported',
    countryCode: 'MX',
    percentCanadian: 0,
    notes: 'Off-season asparagus is sometimes imported from Mexico or Peru.',
    categoryId: 'vegetables',
    aliases: ['asparagus'],
    popularity: 95
  },
  {
    name: 'Squash, Zucchini & Pumpkins (Domestic)',
    company: 'Domestic',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Typically grown locally during their natural growing seasons in the summer and autumn.',
    categoryId: 'vegetables',
    aliases: ['squash', 'zucchini', 'pumpkins'],
    popularity: 95
  },
]

export const vegetablesCategory = {
  name: 'Vegetables',
  description: 'Vegetables',
  aliases: ['vegetables'],
}