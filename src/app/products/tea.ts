import { Product } from '../products';

export const tea: Product[] = [
  {
    name: 'Red Rose',
    company: 'Unilever',
    countryCode: 'GB',
    percentCanadian: 50,
    notes: 'Originally a Canadian company but now owned by Unilever, still widely available in Canadian grocery stores.',
    categoryId: 'tea',
    aliases: ['red rose tea'],
    popularity: 90
  },
  {
    name: 'David’s Tea',
    company: 'David’s Tea',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A Canadian premium tea brand, available online and in select grocery stores nationally.',
    categoryId: 'tea',
    aliases: ['david’s tea'],
    popularity: 80
  },
  {
    name: 'Tetley',
    company: 'Tata Global Beverages',
    countryCode: 'IN',
    percentCanadian: 0,
    notes: 'A British brand widely available in Canadian grocery stores.',
    categoryId: 'tea',
    aliases: ['tetley tea'],
    popularity: 85
  },
  {
    name: 'Twinings',
    company: 'Associated British Foods',
    countryCode: 'GB',
    percentCanadian: 0,
    notes: 'An iconic British brand, widely available in Canadian grocery stores.',
    categoryId: 'tea',
    aliases: ['twinings tea'],
    popularity: 70
  },
  {
    name: 'Presidents Choice',
    company: 'Loblaws Companies',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Loblaws’ private label tea.',
    categoryId: 'tea',
    aliases: ['pc tea', "president's choice tea"],
    popularity: 75
  },
  {
    name: 'Great Value',
    company: 'Walmart',
    countryCode: 'US',
    percentCanadian: 50,
    notes: 'Walmarts store brand tea, widely available in Walmart locations across Canada.',
    categoryId: 'tea',
    aliases: ['great value tea', 'walmart tea'],
    popularity: 70
  },
  {
    name: 'Lipton',
    company: 'Unilever',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'An American brand that is widely available in Canadian grocery stores.',
    categoryId: 'tea',
    aliases: ['lipton tea'],
    popularity: 85
  },
  {
    name: 'Tim Hortons',
    company: 'Tim Hortons',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A Canadian coffee shop brand that also sells tea in grocery stores.',
    categoryId: 'tea',
    aliases: ['tim hortons tea', 'tims tea'],
    popularity: 80
  },
  {
    name: 'Teavana',
    company: 'Starbucks',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'An American brand owned by Starbucks, available online and in select grocery stores nationwide.',
    categoryId: 'tea',
    aliases: ['teavana tea', 'starbucks tea'],
    popularity: 65
  },
  {
    name: 'Numi',
    company: 'Numi',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'An American organic tea brand, found in organic or health conscious stores.',
    categoryId: 'tea',
    aliases: ['numi tea'],
    popularity: 60
  },
  {
    name: 'Tazo',
    company: 'Unilever',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'An American brand owned by Unilever, available in select grocery stores.',
    categoryId: 'tea',
    aliases: ['tazo tea'],
    popularity: 60
  },
  {
    name: 'Yorkshire Tea',
    company: 'Taylors of Harrogate',
    countryCode: 'GB',
    percentCanadian: 0,
    notes: 'A British brand available in select grocery stores.',
    categoryId: 'tea',
    aliases: ['yorkshire tea'],
    popularity: 60
  },
];

export const teaCategory = {
  name: 'Tea',
  description: 'A beverage made by pouring hot or boiling water over cured leaves of the Camellia sinensis, an evergreen shrub native to East Asia. Comes in many varieties including Black, Green, Oolong, White and Puer.',
  aliases: ['brew', 'cha', 'chai']
}