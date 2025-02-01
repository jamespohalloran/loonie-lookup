import { Product } from '../products'

export const saladDressing: Product[] = [
  {
    name: 'Kraft',
    company: 'Kraft Heinz Company',
    percentCanadian: 0,
    notes: 'An American brand, with a wide range of salad dressings widely available across Canada.',
    categoryId: 'saladDressing',
    aliases: ['kraft salad dressing'],
    popularity: 95
  },
  {
    name: 'Renee’s Gourmet',
    company: 'Kraft Heinz Company',
    percentCanadian: 100,
    notes: 'Canadian brand known for gourmet dressing varieties. Available in grocery stores all over Canada.',
    categoryId: 'saladDressing',
    aliases: ['renee’s gourmet salad dressing'],
    popularity: 85
  },
  {
    name: 'Newman’s Own',
    company: 'Newman’s Own, Inc.',
    percentCanadian: 0,
    notes: 'An American brand that donates all post-tax profits to charity. Popular internationally, including in Canada.',
    categoryId: 'saladDressing',
    aliases: ['newman’s own salad dressing'],
    popularity: 80
  },
  {
    name: 'President’s Choice',
    company: 'Loblaw Companies',
    percentCanadian: 100,
    notes: 'Private label brand from Canadian company Loblaws, carried nationwide.',
    categoryId: 'saladDressing',
    aliases: ['president’s choice salad dressing', 'pc salad dressing'],
    popularity: 95
  },
  {
    name: 'Compliments',
    company: 'Sobeys',
    percentCanadian: 100,
    notes: 'Private label brand from Canadian company Sobeys, available across Canada.',
    categoryId: 'saladDressing',
    aliases: ['compliments salad dressing'],
    popularity: 90
  },
  {
    name: 'Hellmann’s',
    company: 'Unilever',
    percentCanadian: 0,
    notes: 'A globally recognized brand, Hellmann’s offers a range of dressings. Widely available in Canadian grocery stores.',
    categoryId: 'saladDressing',
    aliases: ['hellmann’s salad dressing'],
    popularity: 85
  },
  {
    name: 'Hidden Valley',
    company: 'The Clorox Company',
    percentCanadian: 0,
    notes: 'American brand known for its ranch dressing, found all over Canada.',
    categoryId: 'saladDressing',
    aliases: ['hidden valley salad dressing'],
    popularity: 80
  },
  {
    name: 'Great Value',
    company: 'Walmart',
    percentCanadian: 0,
    notes: 'Walmart’s store brand salad dressing, available in Walmart locations across Canada.',
    categoryId: 'saladDressing',
    aliases: ['great value salad dressing'],
    popularity: 85
  },
  {
    name: 'Wish-Bone',
    company: 'Pinnacle Foods',
    percentCanadian: 0,
    notes: 'An American brand, available all over Canada.',
    categoryId: 'saladDressing',
    aliases: ['wish-bone salad dressing'],
    popularity: 75
  },
  {
    name: 'Maple Grove Farms',
    company: 'B&G Foods',
    percentCanadian: 0,
    notes: 'American brand offering a number of salad dressings, available in select Canadian grocery stores.',
    categoryId: 'saladDressing',
    aliases: ['maple grove farms salad dressing'],
    popularity: 70
  }
]

export const saladDressingCategory = {
  name: 'Salad Dressing',
  description: 'A sauce for salads, typically made by mixing oil and vinegar with spices or other flavorings.',
  aliases: ['dressing', 'vinaigrette', 'ranch']
}
