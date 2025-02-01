import { Product } from '../products'

export const pasta: Product[] = [
  {
    name: 'Catelli',
    company: 'Catelli Foods Corporation',
    percentCanadian: 100,
    notes: 'One of the oldest pasta brands owned by a Canadian company, producing a variety of pastas.',
    categoryId: 'pasta',
    aliases: ['catelli pasta'],
    popularity: 95
  },
  {
    name: 'Barilla',
    company: 'Barilla G. e R. Fratelli S.p.A.',
    percentCanadian: 0,
    notes: 'An Italian pasta brand. No Canadian connection.',
    categoryId: 'pasta',
    aliases: ['barilla pasta'],
    popularity: 90
  },
  {
    name: 'Primo',
    company: 'Primo Foods',
    percentCanadian: 100,
    notes: 'A Canadian brand producing traditional-style pasta. Available nationwide.',
    categoryId: 'pasta',
    aliases: ['primo pasta'],
    popularity: 85
  },
  {
    name: 'Olivieri',
    company: 'Olivieri Foods Ltd',
    percentCanadian: 100,
    notes: 'A wholly owned subsidiary of Catelli Foods Corporation, specializing in fresh pasta.',
    categoryId: 'pasta',
    aliases: ['olivieri pasta'],
    popularity: 80
  },
  {
    name: 'President’s Choice Pasta',
    company: 'Loblaw Companies',
    percentCanadian: 90,
    notes: 'Loblaw’s private label pasta. Produced in Canada with international ingredients.',
    categoryId: 'pasta',
    aliases: ['pc pasta', "president's choice pasta"],
    popularity: 75
  },
  {
    name: 'Great Value Pasta',
    company: 'Walmart Canada',
    percentCanadian: 50,
    notes: 'Walmart’s private label pasta, widely available in Walmart stores across Canada.',
    categoryId: 'pasta',
    aliases: ['great value pasta', 'walmart pasta'],
    popularity: 70
  },
  {
    name: 'De Cecco',
    company: 'F.lli De Cecco di Filippo S.p.A.',
    percentCanadian: 0,
    notes: 'An Italian pasta brand. No Canadian connection.',
    categoryId: 'pasta',
    aliases: ['de cecco pasta'],
    popularity: 65
  },
  {
    name: 'Italpasta',
    company: 'Italpasta Limited',
    percentCanadian: 100,
    notes: 'A Canadian brand supplying pasta from Ontario, using traditional Italian methods.',
    categoryId: 'pasta',
    aliases: ['italpasta'],
    popularity: 60
  },
  {
    name: 'San Remo',
    company: 'San Remo',
    percentCanadian: 0,
    notes: 'An Australian pasta brand. No Canadian connection.',
    categoryId: 'pasta',
    aliases: ['san remo pasta'],
    popularity: 55
  },
  {
    name: 'Ronzoni',
    company: 'Ronzoni Foods Canada Corporation',
    percentCanadian: 100,
    notes: 'A Canadian pasta company owned by Catelli Foods Corporation, offering inexpensive pasta varieties.',
    categoryId: 'pasta',
    aliases: ['ronzoni pasta'],
    popularity: 50
  }
]

export const pastaCategory = {
  name: 'Pasta',
  description: 'A staple ingredient in Italian cuisine, made from dough of durum wheat flour mixed with water or eggs.',
  aliases: ['noodles', 'spaghetti', 'macaroni', 'penne']
}