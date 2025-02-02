import { categories, Product } from '@/app/products'
import { PlusIcon } from '@heroicons/react/16/solid'
import { PencilSquareIcon } from '@heroicons/react/24/outline'

export function SearchResults({ products, query }: { products: Product[]; query: string }) {
  if (!query) {
    return <></>
  }

  if (!products.length) {
    return <Empty />
  }

  const mappedProducts = products.map((product) => {
    return {
      ...product,
      isCanadian: product.percentCanadian >= 50,
    }
  })

  console.log('mappedProducts ' + JSON.stringify(mappedProducts))

  return (
    <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
      <div>
        <h3 className="text-base font-semibold text-gray-900">🇨🇦 Made in Canada</h3>
        <div className="rounded-lg border border-gray-200 p-4">
          <SearchColumn products={mappedProducts.filter((p) => p.isCanadian)} />
          {query && mappedProducts.filter((p) => p.isCanadian).length === 0 && <Empty />}
        </div>
      </div>
      <div>
        <h3 className="text-base font-semibold text-gray-900">👎 Not Canadian</h3>
        <div className="rounded-lg border border-gray-200 p-4">
          <SearchColumn products={mappedProducts.filter((p) => !p.isCanadian)} />
          {mappedProducts.filter((p) => !p.isCanadian).length === 0 && <Empty />}
        </div>
      </div>
    </div>
  )
}

function SearchColumn({ products }: { products: Product[] }) {
  console.log(products)
  return (
    <ul role="list" className="divide-y divide-gray-200 bg-white">
      {products.map((product) => (
        <li key={`${product.name}-${product.categoryId}`} className="relative flex flex-col py-2 first:pt-0">
          <a
            target="_blank"
            href={`https://github.com/jamespohalloran/loonie-lookup/tree/main/src/app/products/${product.categoryId}.ts`}
          >
            <button
              className="absolute top-2 right-2 cursor-pointer text-gray-400 hover:text-gray-600"
              aria-label={`Edit ${product.name}`}
            >
              <PencilSquareIcon className="h-5 w-5" />
            </button>
          </a>
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

function Empty() {
  return (
    <div className="mt-2 text-center">
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="mx-auto size-12 text-gray-400"
      >
        <path
          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          strokeWidth={2}
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* <h3 className="mt-2 text-sm font-semibold text-gray-900">No Products</h3> */}
      <p className="mt-1 text-sm text-gray-500">No matching results. Help us by submitting a product</p>
      <div className="mt-6">
        <a target="_blank" href="https://github.com/jamespohalloran/loonie-lookup/tree/main/src/app/products">
          <button
            type="button"
            className="inline-flex cursor-pointer items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <PlusIcon aria-hidden="true" className="mr-1.5 -ml-0.5 size-5" />
            Add Product
          </button>
        </a>
      </div>
    </div>
  )
}
