import { Product } from '../products'

export const flour: Product[] = [
  {
    name: 'Five Roses',
    company: 'Smucker Foods of Canada Corp.',
    percentCanadian: 100,
    notes: 'A Canadian brand that has been trusted for generations.',
    categoryId: 'flour',
    aliases: ['five roses flour'],
    popularity: 95
  },
  {
    name: 'Robin Hood',
    company: 'Smucker Foods of Canada Corp.',
    percentCanadian: 100,
    notes: 'A well-known Canadian brand, found in most grocery stores across Canada.',
    categoryId: 'flour',
    aliases: ['robin hood flour'],
    popularity: 90
  },
  {
    name: 'Rogers',
    company: 'Rogers Foods Ltd.',
    percentCanadian: 100,
    notes: 'Canadian milling company producing a variety of flours. Found in grocery stores nationwide.',
    categoryId: 'flour',
    aliases: ['rogers flour'],
    popularity: 85
  },
  {
    name: 'PC Organics',
    company: 'Loblaw Companies',
    percentCanadian: 100,
    notes: "President's Choice's organic label flour.",
    categoryId: 'flour',
    aliases: ['pc organics flour', "president's choice organic flour"],
    popularity: 80
  },
  {
    name: 'Anita’s Organic',
    company: 'Anita’s Organic Mill',
    percentCanadian: 100,
    notes: 'Canadian organic flour brand, available in select health food stores and major grocery stores with organic sections.',
    categoryId: 'flour',
    aliases: ['anitas organic flour'],
    popularity: 75
  },
  {
    name: 'Pillsbury Best',
    company: 'Hometown Food Company',
    percentCanadian: 0,
    notes: 'A brand made in the U.S.',
    categoryId: 'flour',
    aliases: ['pillsbury best flour'],
    popularity: 70
  },
  {
    name: 'Gold Medal',
    company: 'General Mills, Inc.',
    percentCanadian: 0,
    notes: 'A brand made in the U.S.',
    categoryId: 'flour',
    aliases: ['gold medal flour'],
    popularity: 65
  },
  {
    name: 'Arva',
    company: 'Arva Flour Mills Ltd.',
    percentCanadian: 100,
    notes: 'Producing flour using traditional methods and Canadian grains. Primarily available in London, Ontario, but also found online.',
    categoryId: 'flour',
    aliases: ['arva flour'],
    popularity: 60
  },
  {
    name: 'Great Value',
    company: 'Walmart Canada',
    percentCanadian: 100,
    notes: 'Walmart’s store brand flour, widely available in Walmart locations across Canada.',
    categoryId: 'flour',
    aliases: ['great value flour', 'walmart flour'],
    popularity: 55
  },
  {
    name: 'No Name',
    company: 'Loblaw Companies',
    percentCanadian: 100,
    notes: 'Loblaw’s economy label flour. Found in No Frills and associated stores.',
    categoryId: 'flour',
    aliases: ['no name flour'],
    popularity: 50
  }
]

export const flourCategory = {
  name: 'Flour',
  description: 'A powder made by grinding raw grains, roots, beans, nuts, or seeds. Used in baking and cooking, available in various types like all-purpose, whole wheat, and more.',
  aliases: ['baking', 'whole grain', 'bean flour', 'nut flour']
}