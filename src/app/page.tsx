import Hero from '@/components/hero'
import SearchResults from '@/components/search-results'
import { getRecentOrders } from '@/data'

export default async function Home() {
  let orders = await getRecentOrders()

  return (
    <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <Hero />
      <div className="mt-8 flex items-end justify-between">
        <div>
          <h3 className="text-base font-semibold text-gray-900">🇨🇦</h3>

          <SearchResults />
        </div>
        <div>
          <h3 className="text-base font-semibold text-gray-900">👎</h3>

          <SearchResults />
        </div>
      </div>
    </div>
  )
}
