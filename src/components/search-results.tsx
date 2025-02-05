'use client'

import { categories, countryCode, Product } from '@/app/products'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { EditProductDialog } from './edit-product-dialog'
import { SearchResultsEmpty } from './search-results-empty'

export function SearchResults({ products, query, category }: { products: Product[]; query: string; category: string }) {
  if (!query && !category) {
    return <></>
  }

  if (!products.length) {
    return <SearchResultsEmpty />
  }

  const mappedProducts = products.map((product) => {
    return {
      ...product,
      isCanadian: product.percentCanadian >= 50,
    }
  })

  return (
    <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
      <div>
        <h3 className="text-base font-semibold text-gray-900">🇨🇦 Canadian</h3>
        <div className="rounded-lg border border-gray-200 p-4">
          <SearchColumn products={mappedProducts.filter((p) => p.isCanadian)} />
          {query && mappedProducts.filter((p) => p.isCanadian).length === 0 && <SearchResultsEmpty />}
        </div>
      </div>
      <div>
        <h3 className="text-base font-semibold text-gray-900">👎 Not Canadian</h3>
        <div className="rounded-lg border border-gray-200 p-4">
          <SearchColumn products={mappedProducts.filter((p) => !p.isCanadian)} />
          {mappedProducts.filter((p) => !p.isCanadian).length === 0 && <SearchResultsEmpty />}
        </div>
      </div>
    </div>
  )
}

function SearchColumn({ products }: { products: Product[] }) {
  return (
    <ul role="list" className="divide-y divide-gray-200 bg-white">
      {products.map((product) => (
        <li key={`${product.name}-${product.categoryId}`} className="relative flex flex-col py-2 first:pt-0 last:pb-0">
          <EditProductDialog product={product}>
            <button
              className="absolute right-2 top-2 cursor-pointer text-gray-400 hover:text-gray-600"
              aria-label={`Edit ${product.name}`}
            >
              <PencilSquareIcon className="h-5 w-5" />
            </button>
          </EditProductDialog>
          <p className="text-sm font-semibold text-gray-900">
            <span>{product.name}</span>{' '}
            <a href={`/?query=${categories[product.categoryId].name.toString()}`}>
              <span className="pointer ml-0.5 inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
                {categories[product.categoryId].name}
              </span>
            </a>
          </p>

          {!product.countryCode || product.countryCode === undefined ? (
            <p className="text-xs text-gray-600">{product.company}</p>
          ) : (
            <p className="text-xs text-gray-600">
              {countryCode[product.countryCode as keyof typeof countryCode]?.flag} {product.company}
            </p>
          )}

          <p className="text-xs">{getMapleLeafRating(product.percentCanadian)}</p>
          {product.notes && <p className="mt-0.5 text-xs text-gray-400">{product.notes}</p>}
        </li>
      ))}
    </ul>
  )
}

const getMapleLeafRating = (percent: number) => {
  const fullLeaves = Math.floor(percent / 20) // Full maple leaves
  const halfLeaf = percent % 20 >= 10 // Half maple leaf condition
  const emptyLeaves = 5 - fullLeaves - (halfLeaf ? 1 : 0) // Remaining empty spots

  return (
    <span className="flex space-x-0.5">
      {/* Full Maple Leaves */}
      {Array(fullLeaves)
        .fill('🍁')
        .map((leaf, i) => (
          <span key={`full-${i}`} className="text-md">
            {leaf}
          </span>
        ))}

      {/* Half Maple Leaf */}
      {halfLeaf && (
        <span className="relative inline-block h-[1em] w-[1em] overflow-hidden">
          <span className="text-md absolute left-0 opacity-20">🍁</span>
          <span className="text-md absolute left-0 w-1/2 overflow-hidden">🍁</span>
        </span>
      )}

      {/* Grayed-Out Empty Maple Leaves */}
      {Array(emptyLeaves)
        .fill('🍁')
        .map((leaf, i) => (
          <span key={`empty-${i}`} className="text-md opacity-20">
            {leaf}
          </span>
        ))}
    </span>
  )
}
