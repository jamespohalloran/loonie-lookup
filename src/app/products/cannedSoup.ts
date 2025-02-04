import { Product } from '../products'

export const cannedSoup: Product[] = [
  {
    name: 'Campbell’s',
    company: 'Campbell Company of Canada',
    countryCode: 'CA',
    percentCanadian: 60,
    notes: 'A well-known brand, Canadian products are made in Canada with some ingredients sourced internationally. Owned by Campbell\'s Soup Company, from New Jersey, USA.',
    categoryId: 'cannedSoup',
    aliases: ['campbell’s soup'],
    popularity: 95
  },
  {
    name: 'Progresso',
    company: 'General Mills Sales, Inc.',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'American brand, widely available in most Canadian grocery stores.',
    categoryId: 'cannedSoup',
    aliases: ['progresso soup'],
    popularity: 90
  },
  {
    name: 'Habitant',
    company: 'Smucker Foods of Canada Corp.',
    countryCode: 'CA',
    percentCanadian: 50,
    notes: 'Historically Canadian brand, now owned by Smucker with production in both Canada and the US.',
    categoryId: 'cannedSoup',
    aliases: ['habitant soup'],
    popularity: 85
  },
  {
    name: 'Amy’s Kitchen',
    company: 'Amy’s Kitchen, Inc.',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'American brand, offers a variety of vegetarian and organic soups. Widely available in Canadian grocery stores.',
    categoryId: 'cannedSoup',
    aliases: ['amy’s soup'],
    popularity: 80
  },
  {
    name: 'President’s Choice',
    company: 'Loblaw Companies',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Loblaw’s private label soup. Made in Canada, available at Loblaw stores nationwide.',
    categoryId: 'cannedSoup',
    aliases: ['pc soup', "president’s choice soup"],
    popularity: 75
  },
  {
    name: 'Great Value',
    company: 'Walmart Canada',
    countryCode: 'CA',
    percentCanadian: 10,
    notes: 'Walmart\'s store brand soup, made from a variety of ingredients source globally. Owned by Walmart, from Arkansas, USA.',
    categoryId: 'cannedSoup',
    aliases: ['great value soup', 'walmart soup'],
    popularity: 70
  },
  {
    name: 'Compliments',
    company: 'Sobeys',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Sobeys’ store brand. Available at Sobeys, Safeway and other affiliate stores across Canada.',
    categoryId: 'cannedSoup',
    aliases: ['compliments soup'],
    popularity: 65
  },
  {
    name: 'Kirkland Signature',
    company: 'Costco Wholesale Corporation',
    countryCode: 'US',
    percentCanadian: 50,
    notes: 'Costco’s store brand soup. Available at Costco locations across Canada.',
    categoryId: 'cannedSoup',
    aliases: ['kirkland soup', 'costco soup'],
    popularity: 60
  },
  {
    name: 'Aylmer',
    company: 'Conagra Brands Canada',
    countryCode: 'CA',
    percentCanadian: 50,
    notes: 'Canadian brand made with a mix of domestic and imported ingredients. Owned by Conagra, widely available in Canadian grocery stores.',
    categoryId: 'cannedSoup',
    aliases: ['aylmer soup'],
    popularity: 55
  },
  {
    name: 'Knorr',
    company: 'Unilever Canada',
    countryCode: 'CA',
    percentCanadian: 0,
    notes: 'International brand offering a variety of soup mixes. Widely available in Canadian grocery stores.',
    categoryId: 'cannedSoup',
    aliases: ['knorr soup'],
    popularity: 50
  }
]

export const cannedSoupCategory = {
  name: 'Canned Soup',
  description: 'Ready-to-eat soups in a can. Available in a variety of flavours and styles.',
  aliases: ['soup', 'broth', 'stew']
}