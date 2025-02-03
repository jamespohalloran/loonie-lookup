'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { SearchBox } from './search-box'

interface SearchProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  category: string
  setCategory: (category: string) => void
}

export default function Search({ searchTerm, category, setSearchTerm, setCategory }: SearchProps) {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams || '')
      if (searchTerm) {
        params.set('query', searchTerm)
      } else {
        params.delete('query')
      }

      if (category) {
        params.set('category', category)
      } else {
        params.delete('category')
      }

      window.history.replaceState(null, '', `${pathname}?${params.toString()}`)
    }, 200)

    return () => clearTimeout(handler)
  }, [searchTerm, category, pathname, searchParams])

  return (
    <div>
      <div className="mt-2">
        <SearchBox 
          searchTerm={searchTerm}
          category={category}
          setSearchTerm={setSearchTerm}
          setCategory={setCategory}
          placeholder="Product name, brand, or category"
          onChange={(terms, category) => {
            setSearchTerm(terms)
            setCategory(category)
          }}
        />
      </div>
    </div>
  )
}
