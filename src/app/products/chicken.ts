import { Product } from '../products'

export const chicken: Product[] = [
  {
    name: 'Maple Leaf Prime',
    company: 'Maple Leaf Foods',
    percentCanadian: 100,
    notes: 'A well-known Canadian meat brand, Maple Leaf products are made with Canadian-raised chicken.',
    categoryId: 'chicken',
    aliases: ['maple leaf prime chicken'],
    popularity: 90
  },
  {
    name: 'Lilydale',
    company: 'Sofina Foods',
    percentCanadian: 100,
    notes: 'A Canadian food manufacturer producing chicken from Canadian farms. Available in grocery stores nationwide.',
    categoryId: 'chicken',
    aliases: ['lilydale chicken'],
    popularity: 85
  },
  {
    name: 'Irresistibles',
    company: 'Metro Inc.',
    percentCanadian: 100,
    notes: 'Metro’s store brand chicken is sourced solely from Canada, available in their supermarkets across the country.',
    categoryId: 'chicken',
    aliases: ['irresistibles chicken'],
    popularity: 70
  },
  {
    name: 'Compliments',
    company: 'Sobeys Inc.',
    percentCanadian: 100,
    notes: 'The private label brand of Sobeys, their chicken products feature Canadian-raised poultry.',
    categoryId: 'chicken',
    aliases: ['compliments chicken'],
    popularity: 75
  },
  {
    name: 'President’s Choice',
    company: 'Loblaw Companies',
    percentCanadian: 100,
    notes: 'Loblaws’ store brand chicken, sourced solely within Canada.',
    categoryId: 'chicken',
    aliases: ['pc chicken', "president's choice chicken"],
    popularity: 80
  },
  {
    name: 'Butterball',
    company: 'Butterball, LLC',
    percentCanadian: 0,
    notes: 'An American poultry company, commonly recognized and available but products are imported.',
    categoryId: 'chicken',
    aliases: ['butterball chicken'],
    popularity: 60
  },
  {
    name: 'Janes',
    company: 'Sofina Foods',
    percentCanadian: 100,
    notes: 'A Canadian brand producing chicken from Canadian farms. Known for their breaded chicken products.',
    categoryId: 'chicken',
    aliases: ['janes chicken'],
    popularity: 65
  },
  {
    name: 'Tyson',
    company: 'Tyson Foods',
    percentCanadian: 0,
    notes: 'A U.S. brand producing a wide variety of chicken products, available in Canada but not locally sourced.',
    categoryId: 'chicken',
    aliases: ['tyson chicken'],
    popularity: 50
  },
  {
    name: 'Your Fresh Market',
    company: 'Walmart Canada',
    percentCanadian: 50,
    notes: 'Walmart’s store brand, their chicken is a mixture of domestic and imported product.',
    categoryId: 'chicken',
    aliases: ['your fresh market chicken', 'walmart chicken'],
    popularity: 70
  },
  {
    name: 'Kirkland Signature',
    company: 'Costco Wholesale Corporation',
    percentCanadian: 50,
    notes: 'Costco’s private label, available at all Costco locations but not in regular grocery stores. Products are a mix of Canadian and imported.',
    categoryId: 'chicken',
    aliases: ['kirkland chicken', 'costco chicken'],
    popularity: 75
  }
]

export const chickenCategory = {
  name: 'Chicken',
  description: 'A widely consumed poultry product, available fresh or frozen, and in various cuts (whole, breast, thigh, etc.)',
  aliases: ['poultry']
}
