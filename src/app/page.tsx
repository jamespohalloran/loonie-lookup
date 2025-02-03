'use client'

import Hero from '@/components/hero'
import { SearchResults } from '@/components/search-results'
import { useSearchParams } from 'next/navigation'
import { categories, products } from './products'
import { ProductRequestAndSuggestCta } from '@/components/product-request-and-suggest-cta'
import { SharePopover } from '@/components/share-popover'

export default function Home() {
  const searchParams = useSearchParams()
  const query = searchParams.get('query') || ''
  const category = searchParams.get('category') || ''
  const shareUrl = `https://loonielookup.ca/`

  const filteredProducts = products
    .filter((product) => {
      if (category) {
        return product.categoryId === category
      }
      return true
    })
    .filter((product) => {
      if (!query) return category ? true : false
      const formattedQuery = query.toLowerCase()

      const cat = categories[product.categoryId]
      return (
        product.name.toLowerCase().includes(formattedQuery) ||
        product.company.toLowerCase().includes(formattedQuery) ||
        product.aliases.some((alias) => alias.toLowerCase().includes(formattedQuery)) ||
        cat.aliases.some((alias) => alias.toLowerCase().includes(formattedQuery)) ||
        cat.name.toLowerCase().includes(formattedQuery)
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
    <div className="px-6 pt-12 sm:px-6 lg:px-8">
      <Hero />

      <SearchResults query={query} category={category} products={filteredProducts || []} />

      {/* Project Status Section */}
      <div className="mt-24 rounded-lg bg-gray-100 p-6">
        <p className="mt-2 text-gray-700">
        Welcome to <strong>Loonie Lookup</strong>—your friendly hub for finding Canadian-owned products! Our mission is simple: to become the go-to source of truth for everything made and owned in Canada (or not!). We’re continuously refining our listings to help you “<strong>Search for Canadian alternatives to your most used products.</strong>”
        </p>
        <p className="mt-2 text-gray-700">
          Because this is a community-driven project, we’d love your help. Submit new products you’ve discovered, or let us know which items you’d like added. Every contribution moves us closer to showcasing the best of Canadian ownership. Join us, and let’s support homegrown businesses together!
        </p>
        <p className="mt-2 mb-2 text-gray-700">
          
        </p>
        <SharePopover url={shareUrl} text="Share the project with your friends! 🙏" />
      </div>

      <h3 className="text-2xl font-bold mt-24">Get involved!!</h3>
      <ProductRequestAndSuggestCta />
    </div>    
  )
}
