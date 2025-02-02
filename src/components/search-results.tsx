'use client'

import { categories, Product } from '@/app/products'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { SearchResultsEmpty } from './search-results-empty';
import { EditProductDialog } from './edit-product-dialog'

export function SearchResults({ products, query }: { products: Product[]; query: string }) {
  if (!query) {
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
        <h3 className="text-base font-semibold text-gray-900">🇨🇦 Made in Canada</h3>
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
        <li key={`${product.name}-${product.categoryId}`} className="relative flex flex-col py-2 first:pt-0">
          <EditProductDialog product={product}>
            <button
              className="absolute top-2 right-2 cursor-pointer text-gray-400 hover:text-gray-600"
              aria-label={`Edit ${product.name}`}
            >
              <PencilSquareIcon className="h-5 w-5" />
            </button>
          </EditProductDialog>
          <p className="text-sm font-semibold text-gray-900">{product.name}</p>
          <a href={`/?query=${categories[product.categoryId].name.toString()}`}>
            <span className="pointer inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-gray-200 ring-inset">
              {categories[product.categoryId].name}
            </span>
          </a>
          <p className="text-xs text-gray-500">{product.company}</p>
          <p className="text-xs text-gray-500">🇨🇦 {product.percentCanadian}% Canadian</p>
          {product.notes && <p className="text-xs text-gray-400">{product.notes}</p>}
        </li>
      ))}
    </ul>
  )
}
