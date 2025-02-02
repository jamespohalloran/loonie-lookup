'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Input } from './ui/input'

export default function Search() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [searchTerm, setSearchTerm] = useState(searchParams?.get('query') || '')

  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams || '')
      if (searchTerm) {
        params.set('query', searchTerm)
      } else {
        params.delete('query')
      }

      window.history.replaceState(null, '', `${pathname}?${params.toString()}`)
    }, 200)

    return () => clearTimeout(handler)
  }, [searchTerm, pathname, searchParams])

  return (
    <div>
      <div className="mt-2">
        <Input
          id="search"
          name="search"
          type="search"
          placeholder="Product name, brand, or category"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>
    </div>
  )
}
