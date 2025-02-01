import { Product } from '../products'

export const babyFormula: Product[] = [
  {
    name: 'Similac',
    company: 'Abbott Laboratories',
    percentCanadian: 0,
    notes: 'A brand primarily made in the U.S.',
    categoryId: 'babyFormula',
    aliases: ['similac baby formula'],
    popularity: 90
  },
  {
    name: 'Enfamil',
    company: 'Mead Johnson & Company',
    percentCanadian: 0,
    notes: 'A brand primarily made in the U.S.',
    categoryId: 'babyFormula',
    aliases: ['enfamil baby formula'],
    popularity: 85
  },
  {
    name: 'Good Start',
    company: 'Nestlé',
    percentCanadian: 0,
    notes: 'A brand primarily made in Switzerland',
    categoryId: 'babyFormula',
    aliases: ['good start baby formula'],
    popularity: 80
  },
  {
    name: 'Parent’s Choice',
    company: 'Walmart Canada',
    percentCanadian: 30,
    notes: 'Walmart’s store brand baby formula is a combination of Canadian and internationally sourced ingredients.',
    categoryId: 'babyFormula',
    aliases: ['parents choice baby formula', 'walmart baby formula'],
    popularity: 75
  },
  {
    name: 'Kirkland Signature',
    company: 'Costco',
    percentCanadian: 30,
    notes: 'Costco’s private label baby formula, available at Costco locations and not regular grocery stores.',
    categoryId: 'babyFormula',
    aliases: ['kirkland baby formula', 'costco baby formula'],
    popularity: 70
  },
  {
    name: 'President’s Choice',
    company: 'Loblaw Companies',
    percentCanadian: 30,
    notes: 'Loblaw’s private label baby formula, partially sourced from Canadian ingredients.',
    categoryId: 'babyFormula',
    aliases: ['pc baby formula', "president's choice baby formula"],
    popularity: 65
  },
  {
    name: 'Nestlé',
    company: 'Nestlé',
    percentCanadian: 0,
    notes: 'A brand primarily made in Switzerland',
    categoryId: 'babyFormula',
    aliases: ['nestle baby formula'],
    popularity: 60
  },
  {
    name: 'Mead Johnson',
    company: 'Mead Johnson',
    percentCanadian: 0,
    notes: 'A brand primarily made in the U.S.',
    categoryId: 'babyFormula',
    aliases: ['mead johnson baby formula'],
    popularity: 55
  },
  {
    name: 'Gerber',
    company: 'Nestlé',
    percentCanadian: 0,
    notes: 'A brand primarily made in Switzerland',
    categoryId: 'babyFormula',
    aliases: ['gerber baby formula'],
    popularity: 50
  },
  {
    name: 'Happy Baby',
    company: 'Organic Baby Food Company',
    percentCanadian: 70,
    notes: 'A Canadian company producing organic baby formula mainly sold in health food stores and select grocery stores.',
    categoryId: 'babyFormula',
    aliases: ['happy baby formula', 'organic baby formula'],
    popularity: 45
  }
]

export const babyFormulaCategory = {
  name: 'Baby Formula',
  description: 'Infant formula is a manufactured food designed and marketed for feeding to babies.',
  aliases: ['baby food', 'infant formula', 'baby milk']
}
