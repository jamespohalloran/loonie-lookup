import { Product } from '../products'

export const frozenPizza: Product[] = [
  {
    name: 'Delissio',
    company: 'Nestle Canada',
    countryCode: 'CA',
    percentCanadian: 0,
    notes: 'Not a Canadian brand, Delissio is manufactured by Nestle Canada.',
    categoryId: 'frozenPizza',
    aliases: ['delissio pizza'],
    popularity: 80
  },
  {
    name: 'Dr. Oetker',
    company: 'Dr. Oetker Canada',
    countryCode: 'CA',
    percentCanadian: 50,
    notes: 'Manufactured in Canada with a mix of local and imported ingredients.',
    categoryId: 'frozenPizza',
    aliases: ['dr. oetker pizza'],
    popularity: 90
  },
  {
    name: 'McCain',
    company: 'McCain Foods',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'McCain is a Canadian multinational brand. McCain pizza is readily available across Canada.',
    categoryId: 'frozenPizza',
    aliases: ['mccain pizza'],
    popularity: 70
  },
  {
    name: 'Casa di Mama',
    company: 'Dr. Oetker Canada',
    countryCode: 'CA',
    percentCanadian: 50,
    notes: 'Part of the Dr. Oetker brand, manufactured in Canada with a mix of local and imported ingredients.',
    categoryId: 'frozenPizza',
    aliases: ['casa di mama pizza'],
    popularity: 75
  },
  {
    name: 'President’s Choice',
    company: 'Loblaw Companies',
    countryCode: 'CA',
    percentCanadian: 70,
    notes: 'Loblaw’s private label pizza, made mostly with Canadian ingredients.',
    categoryId: 'frozenPizza',
    aliases: ['pc pizza', "president's choice pizza"],
    popularity: 80
  },
  {
    name: 'Great Value',
    company: 'Walmart Canada',
    countryCode: 'CA',
    percentCanadian: 30,
    notes: 'Walmart’s store brand, comprised of both imported and locally sourced ingredients.',
    categoryId: 'frozenPizza',
    aliases: ['great value pizza', 'walmart pizza'],
    popularity: 65
  },
  {
    name: 'Kirkland Signature',
    company: 'Costco',
    countryCode: 'US',
    percentCanadian: 30,
    notes: 'Costco’s private label brand, available at all Costco locations but not in regular grocery stores.',
    categoryId: 'frozenPizza',
    aliases: ['kirkland pizza', 'costco pizza'],
    popularity: 60
  },
  {
    name: 'No Name',
    company: 'Loblaw Companies',
    countryCode: 'CA',
    percentCanadian: 70,
    notes: 'Another Loblaw’s private label brand, available in Loblaw stores across Canada.',
    categoryId: 'frozenPizza',
    aliases: ['no name pizza'],
    popularity: 55
  },
  {
    name: 'Cavendish',
    company: 'Cavendish Farms',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Fully Canadian company offering pizza bites, available in stores across Canada.',
    categoryId: 'frozenPizza',
    aliases: ['cavendish pizza'],
    popularity: 50
  },
  {
    name: 'Giuseppe',
    company: 'Dr. Oetker Canada',
    countryCode: 'CA',
    percentCanadian: 50,
    notes: 'Part of the Dr. Oetker brand, made with a mix of local and imported ingredients.',
    categoryId: 'frozenPizza',
    aliases: ['giuseppe pizza'],
    popularity: 85
  }
]

export const frozenPizzaCategory = {
  name: 'Frozen Pizza',
  description: 'Pre-cooked pizza that can be stored in the freezer and cooked in a traditional oven, available in various flavor varieties.',
  aliases: ['frozen meal', 'ready meal', 'pizza']
}