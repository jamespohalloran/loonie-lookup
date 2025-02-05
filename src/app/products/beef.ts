import { Product } from '../products'

export const beef: Product[] = [
  {
    name: 'Canada Prime',
    company: 'Multiple Suppliers',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Canada Prime is recognized nationwide for offering superior quality beef. Sourced entirely from Canadian farms.',
    categoryId: 'beef',
    aliases: ['canada prime beef'],
    popularity: 95
  },
  {
    name: 'Sterling Silver',
    company: 'Cargill',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Raised in Alberta and produced by one of the largest, most reputable meat processors in Canada.',
    categoryId: 'beef',
    aliases: ['sterling silver beef'],
    popularity: 90
  },
  {
    name: 'President’s Choice AAA Angus',
    company: 'Loblaw Companies',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Offering AAA Angus beef, Loblaw Companies ensures high quality and broad availability across Canada.',
    categoryId: 'beef',
    aliases: ['pc aaa angus beef', "president's choice aaa angus beef"],
    popularity: 85
  },
  {
    name: 'Spring Creek',
    company: 'Spring Creek Ranch',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Produced by a single family Ranch in Alberta, Spring Creek offers beef from grass-fed, grain-finished cattle.',
    categoryId: 'beef',
    aliases: ['spring creek beef'],
    popularity: 80
  },
  {
    name: 'Beretta Farms',
    company: 'Beretta Farms',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Beretta Farms offers organic and grass-fed beef. They have been in operation since 1992 in King City, Ontario.',
    categoryId: 'beef',
    aliases: ['beretta farms beef', 'beretta beef'],
    popularity: 75
  },
  {
    name: 'SunGold Specialty Meats',
    company: 'SunGold Specialty Meats Ltd.',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Specializes in lamb, but also offers complete range of beef products. Located in Alberta.',
    categoryId: 'beef',
    aliases: ['sungold specialty meats beef', 'sungold beef'],
    popularity: 70
  },
  {
    name: 'Chinook Ranch',
    company: 'Chinook Ranch Ltd.',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Producing grass-fed beef, Chinook Ranch is a family-run business located in Alberta.',
    categoryId: 'beef',
    aliases: ['chinook ranch beef', 'chinook beef'],
    popularity: 65
  },
  {
    name: 'Happy Beef',
    company: 'Happy Beef Ltd.',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Family owned, third generation farm that attributes their high quality beef to the happiness of their cattle.',
    categoryId: 'beef',
    aliases: ['happy beef'],
    popularity: 60
  },
  {
    name: 'Piedmontese Beef',
    company: 'Canadian Rangeland Bison & Elk',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Offering a unique breed of cattle originally from Italy, Piedmontese Beef is known to be lean and tender.',
    categoryId: 'beef',
    aliases: ['piedmontese beef'],
    popularity: 55
  },
  {
    name: 'Certified Angus Beef',
    company: 'Multiple Suppliers',
    countryCode: 'GLOBAL',
    percentCanadian: 10,
    notes: 'Popular world-wide beef brand with specific breed and marbling requirements. Some of the Certified Angus Beef comes from Canadian suppliers.',
    categoryId: 'beef',
    aliases: ['certified angus beef'],
    popularity: 50
  }
]

export const beefCategory = {
  name: 'Beef',
  description: 'A meat product from cattle, available in various cuts and grades.',
  aliases: ['meat', 'steak', 'roast']
}