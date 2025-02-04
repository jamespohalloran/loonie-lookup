import { Product } from '../products'

export const bread: Product[] = [
  {
    name: 'Dempster’s',
    company: 'Canada Bread',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Owned by Grupo Bimbo, Dempster’s is rooted in Canada and is available all across the country.',
    categoryId: 'bread',
    aliases: ['dempsters bread'],
    popularity: 95
  },
  {
    name: 'Stonemill',
    company: 'Canada Bread',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A Canadian brand under Canada Bread, primarily baked with 100% whole grains.',
    categoryId: 'bread',
    aliases: ['stonemill bread'],
    popularity: 85
  },
  {
    name: 'Wonder Bread',
    company: 'Weston Foods',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A well-known Canadian brand, known for its soft, white bread. Found in most grocery stores across Canada.',
    categoryId: 'bread',
    aliases: ['wonder bread'],
    popularity: 90
  },
  {
    name: 'Country Harvest',
    company: 'Canada Bread',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A staple in Canadian households, providing hearty grains and seeds.',
    categoryId: 'bread',
    aliases: ['country harvest bread'],
    popularity: 80
  },
  {
    name: 'Gadoua',
    company: 'Canada Bread',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Popular in Quebec and parts of Eastern Canada, offering a variety of bread types.',
    categoryId: 'bread',
    aliases: ['gadoua bread'],
    popularity: 75
  },
  {
    name: 'Bon Matin',
    company: 'Canada Bread',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A Quebec based bread brand offering a diverse selection for bread lovers.',
    categoryId: 'bread',
    aliases: ['bon matin bread'],
    popularity: 70
  },
  {
    name: 'Villaggio',
    company: 'Canada Bread',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'An Italian style bread brand, popular in various regions across Canada.',
    categoryId: 'bread',
    aliases: ['villaggio bread'],
    popularity: 75
  },
  {
    name: 'All But Gluten',
    company: 'Weston Foods',
    countryCode: 'CA',
    percentCanadian: 95,
    notes: 'A gluten-free brand providing bread options for those with gluten intolerance, available in select locations.',
    categoryId: 'bread',
    aliases: ['all but gluten bread'],
    popularity: 60
  },
  {
    name: 'ACE Bakery Bread',
    company: 'ACE Bakery',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Baked in Canada with a variety of bread types for all occasions.',
    categoryId: 'bread',
    aliases: ['ace bakery bread'],
    popularity: 65
  },
  {
    name: 'Silver Hills Sprouted Bread',
    company: 'Silver Hills Bakery',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A Canadian brand offering organic sprouted breads.',
    categoryId: 'bread',
    aliases: ['silver hills sprouted bread'],
    popularity: 60
  }
]

export const breadCategory = {
  name: 'Bread',
  description: 'A staple food prepared from a dough of flour and water, varying widely in its preparation methods.',
  aliases: ['bakery', 'grain', 'loaf']
}
