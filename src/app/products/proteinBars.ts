import { Product } from '../products'

export const proteinBars: Product[] = [
  {
    name: 'PowerBar',
    company: 'PowerBar',
    percentCanadian: 0,
    notes: 'A product of the US and not made in Canada.',
    categoryId: 'proteinBars',
    aliases: ['powerbar protein bar'],
    popularity: 85
  },
  {
    name: 'Clif Bar',
    company: 'Clif Bar & Company',
    percentCanadian: 0,
    notes: 'Purely made in the United States.',
    categoryId: 'proteinBars',
    aliases: ['clif bar protein bar'],
    popularity: 90
  },
  {
    name: 'SimplyProtein',
    company: 'SimplyProtein',
    percentCanadian: 100,
    notes: 'A protein bar brand that is 100% Canadian.',
    categoryId: 'proteinBars',
    aliases: ['simplyprotein protein bar'],
    popularity: 70
  },
  {
    name: 'Quest Bar',
    company: 'Quest Nutrition',
    percentCanadian: 0,
    notes: 'A product of the US and not made in Canada.',
    categoryId: 'proteinBars',
    aliases: ['quest bar protein bar'],
    popularity: 80
  },
  {
    name: "Kirkland's Signature Protein Bars",
    company: 'Costco',
    percentCanadian: 0,
    notes: 'A product of the US and not made in Canada, distributed by Costco.',
    categoryId: 'proteinBars',
    aliases: ['kirkland protein bar'],
    popularity: 75
  },
  {
    name: 'Grenade Carb Killa',
    company: 'Grenade',
    percentCanadian: 0,
    notes: 'A UK brand, fairly popular but not made in Canada.',
    categoryId: 'proteinBars',
    aliases: ['grenade carb killa bar'],
    popularity: 65
  },
  {
    name: 'Genuine Health Vegan Proteins+ Bar',
    company: 'Genuine Health',
    percentCanadian: 100,
    notes: 'A 100% Canadian brand offering vegan protein bars.',
    categoryId: 'proteinBars',
    aliases: ['genuine health protein bar'],
    popularity: 55
  },
  {
    name: 'RXBAR',
    company: 'RXBAR',
    percentCanadian: 0,
    notes: 'Purely made in the United States.',
    categoryId: 'proteinBars',
    aliases: ['rxbar protein bar'],
    popularity: 70
  },
  {
    name: 'No Cow Bar',
    company: 'No Cow',
    percentCanadian: 0,
    notes: 'A product of the US and not made in Canada.',
    categoryId: 'proteinBars',
    aliases: ['no cow protein bar'],
    popularity: 60
  },
  {
    name: 'MuscleTech Nitro Tech Crunch Bars',
    company: 'MuscleTech',
    percentCanadian: 0,
    notes: 'From a USA sports nutrition company.',
    categoryId: 'proteinBars',
    aliases: ['muscletech protein bar'],
    popularity: 65
  }
]

export const proteinBarsCategory = {
  name: 'Protein Bars',
  description: 'Protein bars are a popular supplement for those looking for a quick and easy source of protein.',
  aliases: ['nutrition bars', 'protein supplements']
}
