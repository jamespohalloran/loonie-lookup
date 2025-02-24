import { Product } from '../products'

export const butter: Product[] = [
  {
    name: 'Lactantia',
    company: 'Lactalis Canada',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A Canadian brand under Lactalis, made entirely with Canadian cream.',
    categoryId: 'butter',
    aliases: ['lactantia butter'],
  },
  {
    name: 'Natrel',
    company: 'Agropur Cooperative',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A Canadian dairy cooperative, producing butter using 100% Canadian milk.',
    categoryId: 'butter',
    aliases: ['natrel butter'],
  },
  {
    name: 'Beatrice',
    company: 'Lactalis Canada',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A well-known Canadian brand, all butter is made with Canadian dairy.',
    categoryId: 'butter',
    aliases: ['beatrice butter'],
  },
  {
    name: 'President’s Choice Butter',
    company: 'Loblaw Companies',
    countryCode: 'CA',
    percentCanadian: 90,
    notes: 'Loblaw’s private label butter, mostly produced in Canada with some imported ingredients.',
    categoryId: 'butter',
    aliases: ['pc butter', "president's choice butter"],
  },
  {
    name: 'Great Value Butter',
    company: 'Walmart Canada',
    countryCode: 'CA',
    percentCanadian: 50,
    notes: 'Walmart’s store brand butter is made in Canada, but sourcing of cream may vary.',
    categoryId: 'butter',
    aliases: ['great value butter', 'walmart butter'],
  },
  {
    name: 'Kirkland Signature Butter',
    company: 'Costco',
    countryCode: 'US',
    percentCanadian: 50,
    notes: 'Some Kirkland butter is produced in Canada, but supply varies depending on region.',
    categoryId: 'butter',
    aliases: ['kirkland butter', 'costco butter'],
  },
  {
    name: 'Organic Meadow',
    company: 'Organic Meadow Co-op',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A Canadian organic dairy brand, all butter is made from locally sourced organic cream.',
    categoryId: 'butter',
    aliases: ['organic meadow butter'],
  },
  {
    name: 'Gay Lea',
    company: 'Gay Lea Foods Co-operative',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A Canadian dairy co-op producing butter using milk from local farmers.',
    categoryId: 'butter',
    aliases: ['gay lea butter'],
  },
  {
    name: 'Churn 84',
    company: 'Stirling Creamery',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A premium Canadian butter brand known for high butterfat content.',
    categoryId: 'butter',
    aliases: ['churn 84', 'stirling butter'],
  },
  {
    name: 'Silk Plant-Based Butter',
    company: 'Danone Canada',
    countryCode: 'FR',
    percentCanadian: 30,
    notes:
      'Plant-based alternative, made in Canada but owned by Danone, with some ingredients sourced internationally.',
    categoryId: 'butter',
    aliases: ['silk butter', 'plant-based butter'],
  },
]

export const butterCategory = {
  name: 'Butter',
  description: 'A dairy product made from churned cream, available in salted, unsalted, and specialty varieties.',
  aliases: ['dairy', 'cream', 'margarine'],
}
