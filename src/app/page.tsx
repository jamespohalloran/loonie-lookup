import Hero from '@/components/hero'
import { SearchResults } from '@/components/search-results'
import { categories, products } from './products'
export const runtime = 'edge'

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string
    page?: string
  }>
}) {
  const searchParams = await props.searchParams
  const query = searchParams?.query || ''

  const filteredProducts = products
    .filter((product) => {
      if (!query) return false
      const formattedQuery = query.toLowerCase()

      const category = categories[product.categoryId]
      return (
        product.name.toLowerCase().includes(formattedQuery) ||
        product.company.toLowerCase().includes(formattedQuery) ||
        product.aliases.some((alias) => alias.toLowerCase().includes(formattedQuery)) ||
        category.aliases.some((alias) => alias.toLowerCase().includes(formattedQuery)) ||
        category.name.toLowerCase().includes(formattedQuery)
      )
    })
    .slice(0, 20)

    //prioritize sort if it matches category name
    .sort((a, b) => {
      const categoryA = categories[a.categoryId]
      const categoryB = categories[b.categoryId]
      const formattedQuery = query.toLowerCase()
      if (categoryA.name.toLowerCase().includes(formattedQuery)) return -1
      if (categoryB.name.toLowerCase().includes(formattedQuery)) return 1
      return 0
    })

  return (
    <div className="px-6 py-12 sm:px-6 sm:py-32 lg:px-8">
      <Hero />
      <SearchResults products={filteredProducts || []} />
    </div>
  )
}
