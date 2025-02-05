'use client'

import { PlusIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import { RequestProductDialog } from './request-product-dialog'
import { SuggestProductDialog } from './suggest-product-dialog'

export function SearchResultsEmpty() {
  const [showSuggestDialog, setShowSuggestDialog] = useState(false)
  const [showRequestDialog, setShowRequestDialog] = useState(false)

  return (
    <div className="mt-4 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="m-auto size-12 text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
        />
      </svg>

      {/* <h3 className="mt-2 text-sm font-semibold text-gray-900">No Products</h3> */}
      <p className="mt-1 text-sm text-gray-500">No matching results.</p>
      <p className="mt-5 text-sm text-gray-500">Help us by suggesting or requesting a product.</p>
      <div className="mt-6 flex justify-center gap-4">
        <button
          type="button"
          className="shadow-xs inline-flex cursor-pointer items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => setShowSuggestDialog(true)}
        >
          <PlusIcon aria-hidden="true" className="-ml-0.5 mr-1.5 size-5" />
          Suggest a Product
        </button>

        <button
          type="button"
          className="shadow-xs inline-flex cursor-pointer items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          onClick={() => setShowRequestDialog(true)}
        >
          <PlusIcon aria-hidden="true" className="-ml-0.5 mr-1.5 size-5" />
          Request a Product
        </button>
      </div>

      <SuggestProductDialog open={showSuggestDialog} onOpenChange={setShowSuggestDialog} />

      <RequestProductDialog open={showRequestDialog} onOpenChange={setShowRequestDialog} />
    </div>
  )
}
