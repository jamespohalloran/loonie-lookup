import { Product } from '../products'

export const frozenMeals: Product[] = [
  {
    name: 'Stouffer’s Lasagna',
    company: 'Nestle Canada',
    countryCode: 'CA',
    percentCanadian: 0,
    notes: 'Stouffer’s is a US brand marketed and sold in Canada by Nestle Canada.',
    categoryId: 'frozenMeals',
    aliases: ['stouffers', 'stouffers lasagna'],
    popularity: 90,
  },
  {
    name: 'Lean Cuisine',
    company: 'Nestle Canada',
    countryCode: 'CA',
    percentCanadian: 0,
    notes: 'Lean Cuisine is a US brand that is sold and distributed in Canada by Nestle Canada.',
    categoryId: 'frozenMeals',
    aliases: ['lean cuisine'],
    popularity: 85,
  },
  {
    name: 'Healthy Choice',
    company: 'ConAgra Foods',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Healthy Choice is an American brand but has a presence in many Canadian grocery stores.',
    categoryId: 'frozenMeals',
    aliases: ['healthy choice'],
    popularity: 80,
  },
  {
    name: 'President’s Choice Frozen Meals',
    company: 'Loblaw Companies',
    countryCode: 'CA',
    percentCanadian: 100,
    notes:
      'President’s Choice is a Canadian grocery store brand. Frozen meals are available in varieties such as lasagna and shepherd’s pie.',
    categoryId: 'frozenMeals',
    aliases: ['pc frozen meals'],
    popularity: 95,
  },
  {
    name: 'Compliments',
    company: 'Sobeys Inc.',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Compliments is the store brand for Sobeys, a Canadian grocery store.',
    categoryId: 'frozenMeals',
    aliases: ['compliments frozen meals'],
    popularity: 75,
  },
  {
    name: 'Irresistibles',
    company: 'Metro Inc.',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Irresistibles is the in-store brand for Metro, a Canadian grocery store chain.',
    categoryId: 'frozenMeals',
    aliases: ['irresistibles frozen meals'],
    popularity: 70,
  },
  {
    name: 'Michelina’s',
    company: 'Bellisio Foods',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'US brand but is widely available in Canadian grocery stores.',
    categoryId: 'frozenMeals',
    aliases: ['michelinas', 'michelinas frozen meals'],
    popularity: 85,
  },
  {
    name: 'Voila!',
    company: 'Birds Eye Foods',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Voila! is a US brand but has widespread availability in Canadian grocery stores.',
    categoryId: 'frozenMeals',
    aliases: ['voila', 'voila frozen meals'],
    popularity: 65,
  },
  {
    name: 'Great Value Frozen Meals',
    company: 'Walmart Canada',
    countryCode: 'CA',
    percentCanadian: 0,
    notes: 'Great Value is Walmart’s store brand, with frozen meals available at Walmart stores across Canada.',
    categoryId: 'frozenMeals',
    aliases: ['great value frozen meals'],
    popularity: 80,
  },
  {
    name: 'Amy’s Kitchen',
    company: 'Amy’s Kitchen, Inc',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Amy’s Kitchen is a US brand, but several of its products are available in Canadian markets.',
    categoryId: 'frozenMeals',
    aliases: ['amys kitchen', 'amys frozen meals'],
    popularity: 75,
  },
]

export const frozenMealsCategory = {
  name: 'Frozen Meals',
  description:
    'Pre-cooked meals that are flash frozen and reheated for convenience. Includes a variety of cuisines and dietary options.',
  aliases: ['frozen foods', 'ready meals', 'tv dinners'],
}
