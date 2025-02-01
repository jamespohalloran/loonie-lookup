import Hero from '@/components/hero'
import { getRecentOrders } from '@/data'

export default async function Home() {
  let orders = await getRecentOrders()

  return (
    <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <Hero />
      <div className="mt-8 flex items-end justify-between"></div>
    </div>
  )
}
