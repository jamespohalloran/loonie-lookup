import { Product } from '../products'

export const beer: Product[] = [
  {
    name: 'Molson Canadian',
    company: 'Molson Coors Beverage Company',
    countryCode: 'CA',
    percentCanadian: 50,
    notes:
      'Founded in Canada, Molson merged with Coors in 2005 to form Molson Coors, a multinational company. Molson Canadian is brewed in Canada using local ingredients.',
    categoryId: 'beer',
    aliases: ['molson', 'molson canadian'],
  },
  {
    name: 'Labatt Blue',
    company: 'Anheuser-Busch InBev',
    countryCode: 'CA',
    percentCanadian: 50,
    notes:
      'Originally a Canadian brand, Labatt was acquired by Interbrew (now Anheuser-Busch InBev) in 1995. Labatt Blue is brewed in Canada with local ingredients.',
    categoryId: 'beer',
    aliases: ['labatt', 'labatt blue'],
  },
  {
    name: "Alexander Keith's",
    company: 'Anheuser-Busch InBev',
    countryCode: 'CA',
    percentCanadian: 50,
    notes:
      "Founded in Nova Scotia, Canada, Alexander Keith's was sold to Oland Brewery in 1928 and is now owned by Anheuser-Busch InBev. The beer is still brewed in Canada.",
    categoryId: 'beer',
    aliases: ["alexander keith's", "keith's"],
  },
  {
    name: 'Moosehead Lager',
    company: 'Moosehead Breweries',
    countryCode: 'CA',
    percentCanadian: 100,
    notes:
      "Moosehead Breweries is Canada's oldest independent brewery, family-owned and operated in Saint John, New Brunswick.",
    categoryId: 'beer',
    aliases: ['moosehead', 'moosehead lager'],
  },
  {
    name: 'Sleeman Honey Brown Lager',
    company: 'Sleeman Breweries',
    countryCode: 'CA',
    percentCanadian: 50,
    notes:
      'Sleeman Breweries was re-established in 1988 and sold to Sapporo Brewery in 2006. Sleeman Honey Brown Lager is brewed in Canada.',
    categoryId: 'beer',
    aliases: ['sleeman', 'honey brown lager'],
  },
  {
    name: 'Steam Whistle Pilsner',
    company: 'Steam Whistle Brewing',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'An independent Canadian brewery based in Toronto, known for its flagship Steam Whistle Pilsner.',
    categoryId: 'beer',
    aliases: ['steam whistle', 'steam whistle pilsner'],
  },
  {
    name: 'Unibroue La Fin du Monde',
    company: 'Unibroue',
    countryCode: 'CA',
    percentCanadian: 50,
    notes:
      'Unibroue, based in Quebec, was sold to Sleeman Breweries in 2004, which is now owned by Sapporo Brewery. La Fin du Monde is brewed in Canada.',
    categoryId: 'beer',
    aliases: ['unibroue', 'la fin du monde'],
  },
  {
    name: 'Budweiser',
    company: 'Anheuser-Busch InBev',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'An American brand owned by Anheuser-Busch InBev. Budweiser sold in Canada is brewed domestically.',
    categoryId: 'beer',
    aliases: ['budweiser', 'bud'],
  },
  {
    name: 'Coors Light',
    company: 'Molson Coors Beverage Company',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'An American brand under Molson Coors. Coors Light sold in Canada is brewed domestically.',
    categoryId: 'beer',
    aliases: ['coors light', 'coors'],
  },
  {
    name: 'Corona Extra',
    company: 'Grupo Modelo (Anheuser-Busch InBev)',
    countryCode: 'MX',
    percentCanadian: 0,
    notes:
      'A Mexican beer brand owned by Grupo Modelo, which is part of Anheuser-Busch InBev. Corona Extra is imported into Canada.',
    categoryId: 'beer',
    aliases: ['corona', 'corona extra'],
  },
]
