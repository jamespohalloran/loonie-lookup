import { Product } from '../products'

export const disinfectant: Product[] = [
  {
    name: 'Lysol',
    company: 'Reckitt Benckiser',
    percentCanadian: 0,
    notes: 'This product is wholly made and sourced from the United States.',
    categoryId: 'disinfectants',
    aliases: ['lysol disinfectant'],
    popularity: 95
  },
  {
    name: 'Clorox',
    company: 'The Clorox Company',
    percentCanadian: 0,
    notes: 'This product is made and owned by the American company, The Clorox Company.',
    categoryId: 'disinfectants',
    aliases: ['clorox disinfectant'],
    popularity: 90
  },
  {
    name: 'Purell',
    company: 'GOJO Industries',
    percentCanadian: 0,
    notes: 'Purell, a widely popular disinfectant, is produced by the American company GOJO Industries.',
    categoryId: 'disinfectants',
    aliases: ['purell disinfectant'],
    popularity: 85
  },
  {
    name: 'Germs Be Gone',
    company: 'Brands International Corporation',
    percentCanadian: 100,
    notes: 'Germs Be Gone is a Canadian brand that produces disinfectants, widely available across the country.',
    categoryId: 'disinfectants',
    aliases: ['germs be gone disinfectant'],
    popularity: 80
  },
  {
    name: 'One Step',
    company: 'Bottles and Stuff Company',
    percentCanadian: 100,
    notes: 'Disinfectant brand that is wholly made in Canada.',
    categoryId: 'disinfectants',
    aliases: ['one step disinfectant'],
    popularity: 75
  },
  {
    name: 'Dettol',
    company: 'Reckitt Benckiser',
    percentCanadian: 0,
    notes: 'This product is made and sourced from the United States.',
    categoryId: 'disinfectants',
    aliases: ['dettol disinfectant'],
    popularity: 70
  },
  {
    name: 'Mister Clean',
    company: 'Proctor & Gamble Co.',
    percentCanadian: 0,
    notes: 'Mister Clean is a brand owned by the American company Proctor & Gamble Co.',
    categoryId: 'disinfectants',
    aliases: ['mister clean disinfectant'],
    popularity: 70
  },
  {
    name: 'Whats Next Clean',
    company: 'Carroll Company',
    percentCanadian: 100,
    notes: 'Whats Next Clean is a disinfectant brand that is made in Canada.',
    categoryId: 'disinfectants',
    aliases: ['whats next clean disinfectant'],
    popularity: 50
  },
  {
    name: 'Seventh Generation',
    company: 'Unilever',
    percentCanadian: 0,
    notes:	'This product is made and owned by Unilever, a multinational company.',
    categoryId: 'disinfectants',
    aliases: ['seventh generation disinfectant'],
    popularity: 60 
  },
  {
    name: 'Oxivir',
    company: 'Diversey, Inc.',
    percentCanadian: 0,
    notes: 'Oxivir is an American brand under the company Diversey, Inc.',
    categoryId: 'disinfectants',
    aliases: ['oxivir disinfectant'],
    popularity: 65
  }
]

export const disinfectantCategory = {
  name: 'Disinfectants',
  description: 'Products that help prevent the spread of germs/illness by killing microorganisms and/or inhibiting their growth.',
  aliases: ['cleaning products', 'cleaning solutions', 'antimicrobial products']
}