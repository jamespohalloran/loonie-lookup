import { Product } from '../products'

export const hosting: Product[] = [
  {
    name: 'eStruxture',
    company: 'eStruxture Data Centers',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Largest Canadian-owned data center provider with locations in Montreal, Toronto, Calgary, and Vancouver.',
    categoryId: 'hosting',
    aliases: ['estruxture hosting', 'estruxture cloud'],
    popularity: 90
  },
  {
    name: 'Leaseweb Canada',
    company: 'Leaseweb',
    countryCode: 'NL',
    percentCanadian: 20,
    notes: 'Operates green-powered data centers in Quebec, offering dedicated servers, private/public cloud solutions.',
    categoryId: 'hosting',
    aliases: ['leaseweb canada servers'],
    popularity: 85
  },
  {
    name: 'OVHcloud Canada',
    company: 'OVHcloud',
    countryCode: 'FR',
    percentCanadian: 20,
    notes: 'Global cloud provider with a significant presence in Canada, including a Toronto data center.',
    categoryId: 'hosting',
    aliases: ['ovh canada', 'ovhcloud toronto'],
    popularity: 95
  },
  {
    name: 'Cologix',
    company: 'Cologix',
    countryCode: 'US',
    percentCanadian: 20,
    notes: 'Operates multiple network-neutral data centers across Canada, including Montreal, Toronto, and Vancouver.',
    categoryId: 'hosting',
    aliases: ['cologix hosting'],
    popularity: 88
  },
  {
    name: 'CenterServ',
    company: 'CenterServ International',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Montreal-based managed server and cloud computing provider with a decentralized global network.',
    categoryId: 'hosting',
    aliases: ['centerserv cloud'],
    popularity: 80
  },
  {
    name: 'Web Hosting Canada',
    company: 'WHC',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Montreal-based hosting company offering web hosting, cloud servers, reseller hosting, and dedicated servers.',
    categoryId: 'hosting',
    aliases: ['whc hosting', 'web hosting canada'],
    popularity: 85
  },
  {
    name: 'ServerMania',
    company: 'ServerMania',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Canadian hosting company providing dedicated servers with a data center in Montreal.',
    categoryId: 'hosting',
    aliases: ['servermania hosting'],
    popularity: 80
  },
  {
    name: 'Server Cloud Canada',
    company: 'Server Cloud Canada',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Canadian-owned provider specializing in private, secure cloud hosting solutions.',
    categoryId: 'hosting',
    aliases: ['server cloud canada hosting'],
    popularity: 75
  },
  {
    name: 'Canadian Web Hosting',
    company: 'Canadian Web Hosting',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Fully Canadian-owned hosting provider offering web hosting, VPS, and dedicated servers.',
    categoryId: 'hosting',
    aliases: ['canadian web hosting servers'],
    popularity: 78
  },
  {
    name: 'FullHost',
    company: 'FullHost',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Victoria-based hosting provider offering shared hosting, VPS, and dedicated servers.',
    categoryId: 'hosting',
    aliases: ['fullhost canada'],
    popularity: 72
  },
  {
    name: 'CanSpace Solutions',
    company: 'CanSpace Solutions',
    countryCode: 'CA',
    percentCanadian: 100,
    notes: 'Canadian provider with eco-friendly hosting services, specializing in web hosting and VPS.',
    categoryId: 'hosting',
    aliases: ['canspace hosting'],
    popularity: 70
  },
  {
    name: 'Amazon Web Services (AWS)',
    company: 'Amazon',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'The largest cloud computing provider with data centers worldwide, including Canada.',
    categoryId: 'hosting',
    aliases: ['aws hosting', 'amazon cloud'],
    popularity: 100
  },
  {
    name: 'Microsoft Azure',
    company: 'Microsoft',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'A leading cloud platform with extensive global coverage and enterprise-grade services.',
    categoryId: 'hosting',
    aliases: ['azure hosting', 'microsoft cloud'],
    popularity: 98
  },
  {
    name: 'Google Cloud Platform (GCP)',
    company: 'Google',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Google’s cloud offering, known for AI/ML integrations and global-scale hosting.',
    categoryId: 'hosting',
    aliases: ['gcp hosting', 'google cloud'],
    popularity: 95
  },
  {
    name: 'DigitalOcean',
    company: 'DigitalOcean',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'A developer-friendly cloud provider offering simple and scalable cloud computing.',
    categoryId: 'hosting',
    aliases: ['digitalocean servers'],
    popularity: 90
  },
  {
    name: 'Linode',
    company: 'Akamai',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'A long-time favorite among developers for VPS and dedicated cloud hosting.',
    categoryId: 'hosting',
    aliases: ['linode hosting'],
    popularity: 85
  },
  {
    name: 'Hetzner',
    company: 'Hetzner Online',
    countryCode: 'DE',
    percentCanadian: 0,
    notes: 'German-based hosting provider known for affordable and powerful dedicated servers.',
    categoryId: 'hosting',
    aliases: ['hetzner servers'],
    popularity: 88
  },
  {
    name: 'Vultr',
    company: 'Constant',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'A global cloud provider with a strong presence in the VPS and dedicated hosting market.',
    categoryId: 'hosting',
    aliases: ['vultr hosting'],
    popularity: 87
  },
  {
    name: 'IBM Cloud',
    company: 'IBM',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Enterprise-grade cloud hosting with a focus on AI and hybrid cloud solutions.',
    categoryId: 'hosting',
    aliases: ['ibm cloud hosting'],
    popularity: 75
  },
  {
    name: 'Alibaba Cloud',
    company: 'Alibaba',
    countryCode: 'CN',
    percentCanadian: 0,
    notes: 'China’s largest cloud computing provider, expanding globally.',
    categoryId: 'hosting',
    aliases: ['alibaba cloud hosting'],
    popularity: 72
  },
  {
    name: 'Oracle Cloud',
    company: 'Oracle',
    countryCode: 'US',
    percentCanadian: 0,
    notes: 'Enterprise cloud computing with a focus on databases and enterprise applications.',
    categoryId: 'hosting',
    aliases: ['oracle cloud hosting'],
    popularity: 70
  }
]

export const serverHostingCategory = {
  name: 'Hosting Services',
  description: 'Canadian-owned server hosting providers with data centers in Canada and worldwide.',
  aliases: ['cloud hosting', 'dedicated servers', 'canadian cloud', 'web hosting']
}
