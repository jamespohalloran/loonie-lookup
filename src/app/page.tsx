import Hero from '@/components/hero'
import { SearchResults } from '@/components/search-results'
export const runtime = 'edge'

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string
    page?: string
  }>
}) {
  const searchParams = await props.searchParams
  const query = searchParams?.query || ''

  const filteredProducts = products.filter(
    (product) => query && product.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <Hero />
      <SearchResults products={filteredProducts || []} />
    </div>
  )
}

const products = [
  {
    name: 'Heinz Ketchup',
    company: 'Heinz',
    percentCanadian: 0,
    notes: 'Made in the USA',
  },
  {
    name: 'French’s Ketchup',
    company: 'French’s',
    percentCanadian: 100,
    notes: 'Made with Canadian tomatoes, produced in Canada',
  },
  {
    name: 'Maple Leaf Bacon',
    company: 'Maple Leaf Foods',
    percentCanadian: 80,
    notes: 'Processed in Canada, some pork sourced from the USA',
  },
  {
    name: 'Lays Chips',
    company: 'PepsiCo (Frito-Lay)',
    percentCanadian: 75,
    notes: 'Made in Canada, potatoes sourced locally when possible',
  },
  {
    name: 'Old Dutch Chips',
    company: 'Old Dutch Foods',
    percentCanadian: 100,
    notes: 'Made in Canada, locally sourced potatoes',
  },
  {
    name: 'Kraft Peanut Butter',
    company: 'Kraft Heinz',
    percentCanadian: 0,
    notes: 'Made in the USA, peanuts sourced from the USA',
  },
  {
    name: 'Smucker’s Jam',
    company: 'Smucker’s',
    percentCanadian: 10,
    notes: 'Made in Canada, but fruit is mostly imported',
  },
  {
    name: 'Chapman’s Ice Cream',
    company: 'Chapman’s',
    percentCanadian: 100,
    notes: 'Made in Canada with Canadian dairy',
  },
  {
    name: 'Tim Hortons Coffee',
    company: 'Tim Hortons',
    percentCanadian: 10,
    notes: 'Headquartered in Canada, but coffee beans are imported',
  },
  {
    name: 'Molson Canadian Beer',
    company: 'Molson Coors',
    percentCanadian: 100,
    notes: 'Brewed in Canada with local ingredients',
  },
  {
    name: 'Dairyland Milk',
    company: 'Saputo',
    percentCanadian: 100,
    notes: 'Produced in Canada with 100% Canadian dairy',
  },
  {
    name: 'Yoplait Yogurt',
    company: 'General Mills',
    percentCanadian: 30,
    notes: 'Some production in Canada, but ingredients may be imported',
  },
  {
    name: 'Cavendish Farms Fries',
    company: 'Cavendish Farms',
    percentCanadian: 100,
    notes: 'Made in Canada with PEI potatoes',
  },
  {
    name: 'McCain Fries',
    company: 'McCain Foods',
    percentCanadian: 100,
    notes: 'Made in Canada with local potatoes',
  },
  {
    name: 'President’s Choice Butter',
    company: 'Loblaws (President’s Choice)',
    percentCanadian: 100,
    notes: 'Made in Canada with Canadian dairy',
  },
  {
    name: 'Nutella',
    company: 'Ferrero',
    percentCanadian: 0,
    notes: 'Made in Europe with imported ingredients',
  },
  {
    name: 'Purdy’s Chocolates',
    company: 'Purdy’s',
    percentCanadian: 100,
    notes: 'Produced in Canada, ingredients sourced globally',
  },
  {
    name: 'Hershey’s Chocolate',
    company: 'Hershey’s',
    percentCanadian: 0,
    notes: 'Manufactured in the USA',
  },
  {
    name: 'Shreddies Cereal',
    company: 'Post Consumer Brands',
    percentCanadian: 100,
    notes: 'Made in Canada with Canadian wheat',
  },
  {
    name: 'Cheerios',
    company: 'General Mills',
    percentCanadian: 30,
    notes: 'Some production in Canada, ingredients sourced globally',
  },
  {
    name: 'Canadian Club Whisky',
    company: 'Beam Suntory',
    percentCanadian: 100,
    notes: 'Distilled in Canada with local grains',
  },
]
