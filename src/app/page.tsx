import Hero from '@/components/hero'
import { SearchResults } from '@/components/search-results'
import { products } from './products'
export const runtime = 'edge'

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string
    page?: string
  }>
}) {
  const searchParams = await props.searchParams
  const query = searchParams?.query || ''

  const filteredProducts = products.filter((product) => {
    if (!query) return false
    const formattedQuery = query.toLowerCase()

    return (
      product.name.toLowerCase().includes(formattedQuery) ||
      product.company.toLowerCase().includes(formattedQuery) ||
      product.aliases.some((alias) => alias.toLowerCase().includes(formattedQuery))
    )
  })

  return (
    <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <Hero />
      <SearchResults products={filteredProducts || []} />
    </div>
  )
}
