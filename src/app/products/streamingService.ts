import { Product } from '../products'

export const streamingServices: Product[] = [
  {
    name: 'Netflix',
    company: 'Netflix Inc.',
    percentCanadian: 0,
    notes: 'An American streaming service available globally, including Canada.',
    categoryId: 'streamingServices',
    aliases: ['Netflix Canada'],
    popularity: 95
  },
  {
    name: 'Amazon Prime Video',
    company: 'Amazon.com Inc.',
    percentCanadian: 0,
    notes: 'An American streaming service, operated by Amazon, available globally, including Canada.',
    categoryId: 'streamingServices',
    aliases: ['Prime Video'],
    popularity: 90
  },
  {
    name: 'Disney+',
    company: 'The Walt Disney Company',
    percentCanadian: 0,
    notes: 'An American subscription streaming service, featuring Disney, Pixar, Marvel, Star Wars, National Geographic and Star content for the Canadian market.',
    categoryId: 'streamingServices',
    aliases: ['Disney Plus'],
    popularity: 80
  },
  {
    name: 'Crave',
    company: 'Bell Media',
    percentCanadian: 100,
    notes: 'A subscription video on demand service, owned by Bell Media and available only in Canada.',
    categoryId: 'streamingServices',
    aliases: ['Crave Canada'],
    popularity: 75
  },
  {
    name: 'Hulu',
    company: 'Walt Disney Direct-to-Consumer & International',
    percentCanadian: 0,
    notes: 'An American subscription service fully controlled and majority-owned by The Walt Disney Company, with NBCUniversal as an equity stakeholder.',
    categoryId: 'streamingServices',
    aliases: ['Hulu Canada'],
    popularity: 0
  },
  {
    name: 'Apple TV+',
    company: 'Apple Inc.',
    percentCanadian: 0,
    notes: 'An American over-the-top ad-free subscription video on demand web television service of Apple Inc. that is available in Canada.',
    categoryId: 'streamingServices',
    aliases: ['Apple TV Plus'],
    popularity: 70
  },
  {
    name: 'CBS All Access',
    company: 'ViacomCBS Streaming',
    percentCanadian: 0,
    notes: 'An American streaming video service owned and operated by ViacomCBS Streaming, available to the Canadian market.',
    categoryId: 'streamingServices',
    aliases: ['CBS All Access Canada'],
    popularity: 0
  },
  {
    name: 'Tubi',
    company: 'Fox Corporation',
    percentCanadian: 0,
    notes: 'An American ad-supported streaming service owned by the Fox Corporation, available to the Canadian market.',
    categoryId: 'streamingServices',
    aliases: ['Tubi TV'],
    popularity: 65
  },
  {
    name: 'Shudder',
    company: 'AMC Networks',
    percentCanadian: 0,
    notes: 'An American over-the-top subscription service for horror, thriller, and supernatural content, available to the Canadian market.',
    categoryId: 'streamingServices',
    aliases: ['Shudder Canada'],
    popularity: 60
  },
  {
    name: 'HBO Max',
    company: 'WarnerMedia Direct',
    percentCanadian: 0,
    notes: 'An American subscription-based streaming service owned by AT&T’s WarnerMedia, available to the Canadian market.',
    categoryId: 'streamingServices',
    aliases: ['HBO Max Canada'],
    popularity: 75
  }
]

export const streamingServicesCategory = {
  name: 'Streaming Services',
  description: 'Subscription video on demand services available to the Canadian market.',
  aliases: ['digital media', 'online streaming', 'video streaming']
}