import { Product } from '../products'

export const bbqSauce: Product[] = [
  {
    name: 'Diana Sauce',
    company: 'Kraft Heinz Canada',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A Canadian brand known for BBQ sauces, owned by Kraft Heinz. Available nationwide.',
    categoryId: 'bbqsauce',
    aliases: ['diana bbq sauce'],
    popularity: 95
  },
  {
    name: 'Presidents Choice',
    company: 'Loblaw Companies',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Loblaws’ private label BBQ sauce, can be found in Loblaws-owned stores across Canada.',
    categoryId: 'bbqsauce',
    aliases: ['pc bbq sauce', "president's choice bbq sauce"],
    popularity: 90
  },
  {
    name: 'Bull’s Eye',
    company: 'Kraft Heinz Canada',
    countryCode: 'CA',
    percentCanadian: 20,
    notes: 'Owned by Kraft Heinz, Bull’s Eye BBQ Sauce is made in Canada with a mix of domestic and imported ingredients.',
    categoryId: 'bbqsauce',
    aliases: ['bulls eye bbq sauce'],
    popularity: 85
  },
  {
    name: 'Sweet Baby Ray’s',
    company: 'Ken’s Foods',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Although it’s widely available in Canadian grocery stores, Sweet Baby Ray’s is a U.S. product.',
    categoryId: 'bbqsauce',
    aliases: ['sweet baby rays', "sweet baby ray's bbq sauce"],
    popularity: 80
  },
  {
    name: 'Kraft BBQ Sauce',
    company: 'Kraft Heinz',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'An American brand that’s widely available in Canada.',
    categoryId: 'bbqsauce',
    aliases: ['kraft bbq sauce'],
    popularity: 75
  },
  {
    name: 'Compliments',
    company: 'Sobeys',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Sobeys’ store brand BBQ sauce, can be found in Sobeys and affiliated stores.',
    categoryId: 'bbqsauce',
    aliases: ['compliments bbq sauce', 'sobeys bbq sauce'],
    popularity: 70
  },
  {
    name: 'Club House La Grille',
    company: 'McCormick Canada',
    countryCode: 'CA',
    percentCanadian: 0,
    notes: 'Club House, owned by McCormick, is based in London, Ontario but its BBQ sauces are not Canadian.',
    categoryId: 'bbqsauce',
    aliases: ['club house la grille bbq sauce', 'la grille bbq sauce'],
    popularity: 65
  },
  {
    name: 'Stubb’s',
    company: 'McCormick & Co',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Stubb’s is an American BBQ sauce that’s popular in Canada.',
    categoryId: 'bbqsauce',
    aliases: ['stubbs bbq sauce', "stubb's bbq sauce"],
    popularity: 60
  },
  {
    name: 'KC Masterpiece',
    company: 'The HV Food Products Company',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'KC Masterpiece is an American BBQ sauce that is distributed in Canada.',
    categoryId: 'bbqsauce',
    aliases: ['kc masterpiece bbq sauce'],
    popularity: 55
  },
  {
    name: 'Cattle Boyz',
    company: 'Cattle Boyz Foods Ltd',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Cattle Boyz is a Canadian family owned and operated BBQ sauce company, available across Canada.',
    categoryId: 'bbqsauce',
    aliases: ['cattle boyz bbq sauce'],
    popularity: 50
  }
]

export const bbqsauceCategory = {
  name: 'BBQ Sauce',
  description: 'A flavoring sauce used as a marinade, basting, condiment or topping for meat cooked in the barbecue style.',
  aliases: ['barbecue sauce', 'grilling sauce', 'bbq', 'marinade']
}