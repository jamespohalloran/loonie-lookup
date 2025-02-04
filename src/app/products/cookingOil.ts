import { Product } from '../products'

export const cookingOil: Product[] = [
  {
    name: 'Canola Harvest',
    company: 'Bunge Canada',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Made from 100% Canadian-grown canola. Available widely in grocery stores.',
    categoryId: 'cookingOil',
    aliases: ['canola harvest oil'],
    popularity: 95
  },
  {
    name: 'Becel',
    company: 'Upfield',
    countryCode: 'NL',
    percentCanadian: 50,
    notes: 'Made in Canada but owned by an Amsterdam-based company. Widely used and available across Canada.',
    categoryId: 'cookingOil',
    aliases: ['becel oil'],
    popularity: 90
  },
  {
    name: 'Mazola',
    company: 'ACH Food Companies',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'An American brand. Well-known and available in most Canadian grocery stores.',
    categoryId: 'cookingOil',
    aliases: ['mazola oil'],
    popularity: 90
  },
  {
    name: 'Crisco',
    company: 'The J.M. Smucker Company',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Made in the U.S. Widely available in most Canadian grocery stores.',
    categoryId: 'cookingOil',
    aliases: ['crisco oil'],
    popularity: 85
  },
  {
    name: 'Compliments',
    company: 'Sobeys',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Sobeys’s private label cooking oil, widely available in Sobeys locations across Canada.',
    categoryId: 'cookingOil',
    aliases: ['compliments oil', 'sobeys oil'],
    popularity: 80
  },
  {
    name: 'President’s Choice',
    company: 'Loblaw Companies',
    countryCode: 'CA',
    percentCanadian: 90,
    notes: 'Loblaw’s private label cooking oil, made in Canada but some ingredients are internationally sourced. Available widely.',
    categoryId: 'cookingOil',
    aliases: ['pc oil', "president's choice oil"],
    popularity: 85
  },
  {
    name: 'Great Value',
    company: 'Walmart Canada',
    countryCode: 'CA',
    percentCanadian: 50,
    notes: 'Walmart’s store brand cooking oil. Available everywhere in Canadian Walmarts.',
    categoryId: 'cookingOil',
    aliases: ['great value oil', 'walmart oil'],
    popularity: 75
  },
  {
    name: 'Kirkland Signature',
    company: 'Costco',
    countryCode: 'US',
    percentCanadian: 50,
    notes: 'Costco’s private label cooking oil, available at all Costco locations but not regular grocery stores.',
    categoryId: 'cookingOil',
    aliases: ['kirkland oil', 'costco oil'],
    popularity: 70
  },
  {
    name: 'LouAna',
    company: 'Ventura Foods',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'An American brand available in most Canadian grocery stores.',
    categoryId: 'cookingOil',
    aliases: ['louana oil'],
    popularity: 60
  },
  {
    name: 'Spectrum',
    company: 'The Hain Celestial Group',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Made in the U.S. Available in select health food stores and major grocery stores across Canada.',
    categoryId: 'cookingOil',
    aliases: ['spectrum oil'],
    popularity: 65
  }
]

export const cookingOilCategory = {
  name: 'Cooking Oil',
  description: 'An essential kitchen staple, used in baking, frying, and other forms of cooking.',
  aliases: ['oil', 'vegetable oil', 'canola oil', 'olive oil']
}