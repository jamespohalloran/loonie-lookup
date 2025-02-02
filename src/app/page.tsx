'use client'

import Hero from '@/components/hero'
import { SearchResults } from '@/components/search-results'
import { useSearchParams } from 'next/navigation'
import { categories, products } from './products'

export default function Home() {
  const searchParams = useSearchParams()
  const query = searchParams.get('query') || ''

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
    // Prioritize sort if it matches category name
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
      <SearchResults query={query} products={filteredProducts || []} />

      {/* Project Status Section */}
      <div className="mt-24 rounded-lg bg-gray-100 p-6">
        <h2 className="text-2xl font-bold">Project Status</h2>
        <p className="mt-2 text-gray-700">
          This project is currently in a prototype phase. AI was used to help generate the initial list of products, and
          the data is not guaranteed to be accurate. The content is available on GitHub, and contributions are welcome
          if the project proves to be useful. Feel free to check out the{' '}
          <a className="underline" href="https://github.com/jamespohalloran/loonie-lookup">
            repository
          </a>{' '}
          and contribute!
        </p>
      </div>
    </div>
  )
}
