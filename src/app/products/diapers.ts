import { Product } from '../products'

export const diapers: Product[] = [
  {
    name: 'Pampers',
    company: 'Procter & Gamble',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Pampers diapers are manufactured in the United States.',
    categoryId: 'diapers',
    aliases: ['pampers diapers'],
    popularity: 95
  },
  {
    name: 'Huggies',
    company: 'Kimberly-Clark',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Huggies diapers are manufactured in the United States.',
    categoryId: 'diapers',
    aliases: ['huggies diapers'],
    popularity: 90
  },
  {
    name: 'Luvs',
    company: 'Procter & Gamble',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Luvs diapers are manufactured in the United States.',
    categoryId: 'diapers',
    aliases: ['luvs diapers'],
    popularity: 75
  },
  {
    name: 'President’s Choice Diapers',
    company: 'Loblaw Companies',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Loblaw’s store brand diapers, available in Loblaw locations across Canada.',
    categoryId: 'diapers',
    aliases: ['pc diapers', "president's choice diapers"],
    popularity: 80
  },
  {
    name: 'Compliments Diapers',
    company: 'Sobeys',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Sobeys’ store brand diapers, available in Sobeys stores across Canada.',
    categoryId: 'diapers',
    aliases: ['compliments diapers', 'sobeys diapers'],
    popularity: 70
  },
  {
    name: 'Seventh Generation',
    company: 'Seventh Generation Inc.',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Seventh Generation diapers are a U.S. brand of eco-conscious diapers.',
    categoryId: 'diapers',
    aliases: ['seventh generation diapers'],
    popularity: 60
  },
  {
    name: 'Kirkland Signature Diapers',
    company: 'Costco',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Costco’s store brand diapers are manufactured in the US.',
    categoryId: 'diapers',
    aliases: ['kirkland diapers', 'costco diapers'],
    popularity: 85
   },
   {
    name: 'Bambo Nature',
    company: 'Abena Group',
    countryCode: 'DK',
    percentCanadian: 0,
    notes: 'Bambo Nature diapers are a Danish brand known for their eco-friendly diapers.',
    categoryId: 'diapers',
    aliases: ['bambo nature diapers'],
    popularity: 50
   },
   {
    name: 'Parent’s Choice Diapers',
    company: 'Walmart Canada',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Parent’s Choice is Walmart Canada’s store brand of diapers.',
    categoryId: 'diapers',
    aliases: ['parents choice diapers', 'walmart diapers'],
    popularity: 65
   },
   {
    name: 'Honest Diapers',
    company: 'The Honest Company',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Honest Diapers are a U.S. brand, known for their use of organic cotton and eco-friendly materials.',
    categoryId: 'diapers',
    aliases: ['honest diapers'],
    popularity: 55
   }
]

export const diapersCategory = {
  name: 'Diapers',
  description: 'Baby care essentials aiming at providing comfort, dryness and health protection. Available in multiple sizes targeting various age groups.',
  aliases: ['nappies', 'baby care', 'infant products']
}