import { Product } from '../products'

export const toiletPaper: Product[] = [
  {
    name: 'Cashmere',
    company: 'Kruger Products',
    percentCanadian: 100,
    notes: 'Fully produced in Canada using Canadian resources.',
    categoryId: 'toiletPaper',
    aliases: ['cashmere toilet paper'],
    popularity: 90
  },
  {
    name: 'Purex',
    company: 'Kruger Products',
    percentCanadian: 100,
    notes: 'A well-known Canadian toilet paper brand, widespread in major grocery stores.',
    categoryId: 'toiletPaper',
    aliases: ['purex toilet paper'],
    popularity: 85
  },
  {
    name: 'White Swan',
    company: 'Kruger Products',
    percentCanadian: 100,
    notes: 'A Canadian brand that’s available in most locations nationwide.',
    categoryId: 'toiletPaper',
    aliases: ['white swan toilet paper'],
    popularity: 75
  },
  {
    name: 'Royale',
    company: 'Irving Consumer Products',
    percentCanadian: 100,
    notes: 'Canadian made toilet paper from New Brunswick.',
    categoryId: 'toiletPaper',
    aliases: ['royale toilet paper'],
    popularity: 80
  },
  {
    name: 'President’s Choice',
    company: 'Loblaw Companies',
    percentCanadian: 100,
    notes: 'Loblaw’s private label toilet paper, sold in most grocery stores nationwide.',
    categoryId: 'toiletPaper',
    aliases: ['pc toilet paper', "president's choice toilet paper"],
    popularity: 90
  },
  {
    name: 'Compliments',
    company: 'Sobeys',
    percentCanadian: 100,
    notes: 'Sobeys’ store brand toilet paper.',
    categoryId: 'toiletPaper',
    aliases: ['compliments toilet paper', 'sobeys toilet paper'],
    popularity: 70
  },
  {
    name: 'Charmin',
    company: 'Procter & Gamble',
    percentCanadian: 0,
    notes: 'Fully produced in the US.',
    categoryId: 'toiletPaper',
    aliases: ['charmin toilet paper'],
    popularity: 85
  },
  {
    name: 'Cottonelle',
    company: 'Kimberly-Clark',
    percentCanadian: 0,
    notes: 'Fully made in the US.',
    categoryId: 'toiletPaper',
    aliases: ['cottonelle toilet paper'],
    popularity: 80
  },
  {
    name: 'Scott',
    company: 'Kimberly-Clark',
    percentCanadian: 0,
    notes: 'Produced in the US.',
    categoryId: 'toiletPaper',
    aliases: ['scott toilet paper'],
    popularity: 70
  },
  {
    name: 'Great Value',
    company: 'Walmart Canada',
    percentCanadian: 0,
    notes: 'Walmart’s store brand toilet paper.',
    categoryId: 'toiletPaper',
    aliases: ['great value toilet paper', 'walmart toilet paper',],
    popularity: 75
  }
]

export const toiletPaperCategory = {
  name: 'Toilet Paper',
  description: 'Basic household essential – these brands offer various levels of softness, strength, and pack sizes.',
  aliases: ['bath tissue', 'loo roll']
}