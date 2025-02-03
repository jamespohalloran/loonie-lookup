'use client'

import { Suspense } from 'react'
import Search from './search'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Hero() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams?.get('query') || '')

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setSearchTerm('')
    router.push('/', { scroll: false })
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl text-center">
        <Link href="/" onClick={handleClick} className="inline-block">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl hover:text-gray-600 transition-colors">
            Shop Canadian 🇨🇦
          </h2>
        </Link>
        <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600">
          Search for Canadian alternatives to your favourite products.
        </p>
        <Suspense>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </Suspense>
      </div>
    </div>
  )
}
