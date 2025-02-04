import { Product } from '../products'

export const pork: Product[] = [
  {
    name: 'Maple Leaf',
    company: 'Maple Leaf Foods',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A Canadian brand specializing in meat products, known for quality pork. Available in most grocery stores across Canada.',
    categoryId: 'pork',
    aliases: ['maple leaf pork'],
    popularity: 95,
  },
  {
    name: 'Schneiders',
    company: 'Maple Leaf Foods',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Part of the Maple Leaf Foods family. Known for a wide range of pork products. Available nationwide.',
    categoryId: 'pork',
    aliases: ['schneiders pork'],
    popularity: 90,
  },
  {
    name: 'President’s Choice Pork',
    company: 'Loblaw Companies',
    countryCode: 'CA',
    percentCanadian: 90,
    notes: 'Part of Loblaw’s private label featuring various pork products.',
    categoryId: 'pork',
    aliases: ['pc pork', "president's choice pork"],
    popularity: 85,
  },
  {
    name: 'Great Value Pork',
    company: 'Walmart Canada',
    countryCode: 'CA',
    percentCanadian: 70,
    notes: 'Walmart’s store brand pork, available in Walmart locations across Canada.',
    categoryId: 'pork',
    aliases: ['great value pork', 'walmart pork'],
    popularity: 80,
  },
  {
    name: 'Tenderflake',
    company: 'Maple Leaf Foods',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Known for their lard product, used for pastries and other cooking. Widely available across Canada.',
    categoryId: 'pork',
    aliases: ['tenderflake lard', 'tenderflake pork'],
    popularity: 60,
  },
  {
    name: 'Kirkland Signature Pork',
    company: 'Costco',
    countryCode: 'US',
    percentCanadian: 60,
    notes: 'Costco’s private label pork, available in all Costco locations.',
    categoryId: 'pork',
    aliases: ['kirkland pork', 'costco pork'],
    popularity: 75,
  },
  {
    name: 'Compliments',
    company: 'Sobey’s Inc.',
    countryCode: 'CA',
    percentCanadian: 90,
    notes: 'Sobey’s store brand featuring a variety of pork products.',
    categoryId: 'pork',
    aliases: ['compliments pork'],
    popularity: 80,
  },
  {
    name: 'Olymel',
    company: 'Olymel L.P.',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Canada’s leader in the production, processing and distribution of pork and poultry meats.',
    categoryId: 'pork',
    aliases: ['olymel pork'],
    popularity: 85,
  },
  {
    name: 'Grimms',
    company: 'Grimm’s Fine Foods',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Specialize in European sausages and deli products, using quality pork. Available across Western Canada and select locations nationwide.',
    categoryId: 'pork',
    aliases: ['grimms pork'],
    popularity: 70,
  },
  {
    name: 'Heavenly Hogs',
    company: 'Peace River Pork',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Based in Alberta, they raise their hogs in a free-range system.',
    categoryId: 'pork',
    aliases: ['heavenly hogs pork', 'peace river pork'],
    popularity: 65,
  }
]

export const porkCategory = {
  name: 'Pork',
  description: 'Meat derived from domesticated pigs, available in various cuts and forms, including bacon, sausages, and ham.',
  aliases: ['meat', 'pigs', 'bacon', 'ham', 'sausages']
}