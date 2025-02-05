import { Product } from '../products'

export const sugar: Product[] = [
  {
    name: 'Redpath',
    company: 'ASR Group',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A Canadian brand manufacturing sugar from Canadian sugar beets. Available nationwide.',
    categoryId: 'sugar',
    aliases: ['redpath sugar'],
    popularity: 95
  },
  {
    name: 'Rogers',
    company: 'Lantic Inc',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A well-known Canadian brand, all sugar made from locally-grown sugar beets. Available across the nation.',
    categoryId: 'sugar',
    aliases: ['rogers sugar'],
    popularity: 85
  },
  {
    name: 'Lantic',
    company: 'Lantic Inc',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Another popular Canadian brand, Lantic produces sugar from Canadian-grown sugar beets. Widely available.',
    categoryId: 'sugar',
    aliases: ['lantic sugar'],
    popularity: 90
  },
  {
    name: 'Great Value Sugar',
    company: 'Walmart Canada',
    countryCode: 'CA',
    percentCanadian: 0,
    notes: 'Walmart’s store brand sugar, widely available in Walmart locations across Canada.',
    categoryId: 'sugar',
    aliases: ['great value sugar', 'walmart sugar', 'no name sugar'],
    popularity: 80
  },
  {
    name: 'President’s Choice Sugar',
    company: 'Loblaw Companies',
    countryCode: 'CA',
    percentCanadian: 80,
    notes: 'Loblaw’s private label sugar made from Canadian sugar beets.',
    categoryId: 'sugar',
    aliases: ['pc sugar', "president's choice sugar"],
    popularity: 85
  },
  {
    name: 'Superstore No Name Sugar',
    company: 'Loblaw Companies',
    countryCode: 'CA',
    percentCanadian: 80,
    notes: 'Private label sugar brand from Real Canadian Superstore.',
    categoryId: 'sugar',
    aliases: ['no name sugar', 'superstore sugar'],
    popularity: 70
  },
  {
    name: 'Domino Sugar',
    company: 'Domino Foods',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'A popular sugar brand from the US.',
    categoryId: 'sugar',
    aliases: ['domino sugar'],
    popularity: 61
  },
  {
    name: 'Organic Traditions Coconut Sugar',
    company: 'Organic Traditions',
    countryCode: 'CA',
    percentCanadian: 50,
    notes: 'A Canadian-owned brand specializing in organic sugar alternatives.',
    categoryId: 'sugar',
    aliases: ['organic traditions sugar', 'coconut sugar'],
    popularity: 50
  },
  {
    name: 'Wholesome Sweeteners',
    company: 'Wholesome Sweeteners, Inc.',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'An organic and fair trade sugar brand originating from the US.',
    categoryId: 'sugar',
    aliases: ['wholesome sweeteners sugar'],
    popularity: 65
  },
  {
    name: 'Sugar In The Raw',
    company: 'Cumberland Packing Corp',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Unrefined sugar originating from the US.',
    categoryId: 'sugar',
    aliases: ['sugar in the raw'],
    popularity: 57
  }
]

export const sugarCategory = {
  name: 'Sugar',
  description: 'A sweet-tasting, soluble carbohydrate used in food. Available in granulated, powdered, raw, and alternative varieties.',
  aliases: ['sweetener', 'granulated', 'powdered', 'organic']
}