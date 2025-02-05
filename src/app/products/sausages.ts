import { Product } from '../products'

export const sausages: Product[] = [
  {
    name: 'Maple Leaf',
    company: 'Maple Leaf Foods',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A Canadian company, producing sausages using Canadian pork.',
    categoryId: 'sausages',
    aliases: ['maple leaf sausages'],
    popularity: 95
  },
  {
    name: 'Schneiders',
    company: 'Maple Leaf Foods',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Another brand under Maple Leaf Foods, well-known for its quality sausages across Canada.',
    categoryId: 'sausages',
    aliases: ['schneiders sausages'],
    popularity: 90
  },
  {
    name: 'President’s Choice Sausages',
    company: 'Loblaw Companies',
    countryCode: 'CA',
    percentCanadian: 90,
    notes: 'Loblaw’s private label sausages.',
    categoryId: 'sausages',
    aliases: ['pc sausages', "president's choice sausages"],
    popularity: 85
  },
  {
    name: 'Johnsonville',
    company: 'Johnsonville, LLC',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'American-made sausages imported for sale in Canadian markets.',
    categoryId: 'sausages',
    aliases: ['johnsonville sausages'],
    popularity: 80
  },
  {
    name: 'MarcAngelo',
    company: 'Concord Premium Meats Ltd.',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A Canadian brand offering a variety of sausage flavours, available in most grocery stores across Canada.',
    categoryId: 'sausages',
    aliases: ['marcangelo sausages'],
    popularity: 75
  },
  {
    name: 'Freybe',
    company: 'Freybe Gourmet Foods',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A BC-based company, producing European-style sausages.',
    categoryId: 'sausages',
    aliases: ['freybe sausages'],
    popularity: 70
  },
  {
    name: 'Olymel',
    company: 'Olymel L.P.',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Based in Quebec, Olymel offers a wide range of sausages, available across Canada.',
    categoryId: 'sausages',
    aliases: ['olymel sausages'],
    popularity: 70
  },
  {
    name: 'European Quality Meats',
    company: 'European Quality Meats & Sausages',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'A Canadian company best known for their European-style sausages.',
    categoryId: 'sausages',
    aliases: ['european quality sausages'],
    popularity: 65
  },
  {
    name: 'Greenfield Natural Meat Co.',
    company: 'Greenfield Natural Meat Co.',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Canadian brand offering all-natural meats, including a variety of sausages.',
    categoryId: 'sausages',
    aliases: ['greenfield sausages'],
    popularity: 60
  },
  {
    name: 'Grimm’s',
    company: 'Grimm’s Fine Foods',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Grimm’s is a western Canadian brand known for their naturally smoked sausages.',
    categoryId: 'sausages',
    aliases: ['grimm’s sausages'],
    popularity: 55
  }
];

export const sausagesCategory = {
  name: 'Sausages',
  description: 'A meat product usually made from ground meat, often pork, beef, or poultry, along with salt, spices and other flavourings.',
  aliases: ['meat', 'pork', 'beef', 'poultry']
}