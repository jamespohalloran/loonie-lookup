'use client'

import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'
import Search from './search'

export default function Hero({ showSearch = true }: { showSearch?: boolean }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams?.get('query') || '')
  const [category, setCategory] = useState(searchParams?.get('category') || '')

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setSearchTerm('')
    setCategory('')
    router.push('/', { scroll: false })
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl text-center">
        <Link href="/" onClick={handleClick} className="inline-block">
          <img className="h-40 w-auto" src="/logo.png" alt="Logo" />

          {/* <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl hover:text-gray-600 transition-colors">
            Shop Canadian 🇨🇦
          </h2> */}
        </Link>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">
          Search for Canadian alternatives to your most used products.
        </p>
        <Suspense>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} category={category} setCategory={setCategory} />
        </Suspense>
      </div>
    </div>
  )
}
