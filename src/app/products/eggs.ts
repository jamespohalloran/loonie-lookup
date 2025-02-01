import { Product } from '../products'

export const eggs: Product[] = [
  {
    name: 'Burnbrae Farms',
    company: 'Burnbrae Farms Limited',
    percentCanadian: 100,
    notes: 'Family owned and operated, offering a wide variety of eggs and egg products in stores across Canada.',
    categoryId: 'eggs',
    aliases: ['burnbrae eggs'],
    popularity: 90
  },
  {
    name: 'Gray Ridge Eggs',
    company: 'Gray Ridge Egg Farms',
    percentCanadian: 100,
    notes: 'Committed to providing high-quality and locally farmed eggs, available in grocery stores across Canada.',
    categoryId: 'eggs',
    aliases: ['gray ridge eggs'],
    popularity: 85
  },
  {
    name: 'Golden D Eggs',
    company: 'Nutri Group',
    percentCanadian: 100,
    notes: 'Canadian farming cooperative, offering 100% Canadian eggs from Quebec and Ontario.',
    categoryId: 'eggs',
    aliases: ['golden d eggs'],
    popularity: 75
  },
  {
    name: 'President’s Choice Eggs',
    company: 'Loblaw Companies',
    percentCanadian: 90,
    notes: 'Loblaw’s private label eggs from Canadian farms.',
    categoryId: 'eggs',
    aliases: ['pc eggs', "president's choice eggs"],
    popularity: 80
  },
  {
    name: 'Great Value Eggs',
    company: 'Walmart Canada',
    percentCanadian: 70,
    notes: 'Walmart’s store brand eggs, widely available in Walmart locations across Canada.',
    categoryId: 'eggs',
    aliases: ['great value eggs', 'walmart eggs'],
    popularity: 75
  },
  {
    name: 'Kirkland Signature Eggs',
    company: 'Costco',
    percentCanadian: 50,
    notes: 'Costco’s private label eggs, available at all Costco locations but not in regular grocery stores.',
    categoryId: 'eggs',
    aliases: ['kirkland eggs', 'costco eggs'],
    popularity: 70
  },
  {
    name: 'Maple Hill Farms',
    company: 'Maple Hill Farms',
    percentCanadian: 100,
    notes: 'Family owned and operated, offering organic-free range and nest laid eggs across Western Canada.',
    categoryId: 'eggs',
    aliases: ['maple hill eggs'],
    popularity: 65
  },
  {
    name: 'Scotian Gold Eggs',
    company: 'Scotian Gold Cooperative',
    percentCanadian: 100,
    notes: 'A Canadian egg brand from Nova Scotia, available in select provinces.',
    categoryId: 'eggs',
    aliases: ['scotian gold eggs'],
    popularity: 60
  },
  {
    name: 'Island Gold Eggs',
    company: 'Farmer Ben’s Eggs',
    percentCanadian: 100,
    notes: 'A Canadian egg brand from British Columbia, available in Western Canada.',
    categoryId: 'eggs',
    aliases: ['island gold eggs'],
    popularity: 55
  },
  {
    name: 'Healthy Choice Farm Fresh Eggs',
    company: 'Healthy Choice',
    percentCanadian: 100,
    notes: 'A Canadian brand that provides farm fresh eggs to Ontario and Quebec.',
    categoryId: 'eggs',
    aliases: ['healthy choice eggs'],
    popularity: 50
  }
]

export const eggsCategory = {
  name: 'Eggs',
  description: 'Eggs are laid by female animals of many species, including birds, reptiles, amphibians, and fish',
  aliases: ['poultry', 'white eggs', 'brown eggs']
}