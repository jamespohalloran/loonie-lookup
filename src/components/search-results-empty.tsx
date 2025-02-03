'use client'

import { PlusIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import { SuggestProductDialog } from './suggest-product-dialog'
import { RequestProductDialog } from './request-product-dialog'

export function SearchResultsEmpty() {
  const [showSuggestDialog, setShowSuggestDialog] = useState(false)
  const [showRequestDialog, setShowRequestDialog] = useState(false)

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
      <p className="mt-1 text-sm text-gray-500">No matching results.</p>
      <p className="mt-5 text-sm text-gray-500">Help us by suggesting or requesting a product.</p>
      <div className="mt-6 flex justify-center gap-4">
        <button
          type="button"
          className="inline-flex cursor-pointer items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => setShowSuggestDialog(true)}
        >
          <PlusIcon aria-hidden="true" className="mr-1.5 -ml-0.5 size-5" />
          Suggest a Product
        </button>

        <button
          type="button"
          className="inline-flex cursor-pointer items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          onClick={() => setShowRequestDialog(true)}
        >
          <PlusIcon aria-hidden="true" className="mr-1.5 -ml-0.5 size-5" />
          Request a Product
        </button>
      </div>

      <SuggestProductDialog 
        open={showSuggestDialog} 
        onOpenChange={setShowSuggestDialog} 
      />
      
      <RequestProductDialog 
        open={showRequestDialog} 
        onOpenChange={setShowRequestDialog} 
      />
    </div>
  )
}
