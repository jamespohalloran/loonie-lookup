import { PlusIcon } from '@heroicons/react/16/solid'

export function SearchResults({ products }: { products: any[] }) {
  if (!products.length) {
    return <></>
  }
  console.log(products)

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
          {mappedProducts.filter((p) => p.isCanadian).length === 0 && <Empty />}
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

function SearchColumn({ products }: { products: any[] }) {
  return (
    <ul role="list" className="divide-y divide-gray-200 bg-white">
      {products.map((product) => (
        <li key={product.name} className="py-4 first:pt-0">
          <p className="text-sm font-semibold text-gray-900">{product.name}</p>
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
    <div className="text-center">
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
      <p className="mt-1 text-sm text-gray-500">Help us by submitting a product</p>
      <div className="mt-6">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <PlusIcon aria-hidden="true" className="mr-1.5 -ml-0.5 size-5" />
          Add Product
        </button>
      </div>
    </div>
  )
}
