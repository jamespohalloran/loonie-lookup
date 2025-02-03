'use client'

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { SuggestProductDialog } from "@/components/suggest-product-dialog"
import { RequestProductDialog } from "@/components/request-product-dialog"

export function ProductRequestAndSuggestCta() {
  const [suggestDialogOpen, setSuggestDialogOpen] = useState(false)
  const [requestDialogOpen, setRequestDialogOpen] = useState(false)

  return (
    <>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card 
          className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer" 
          onClick={() => setSuggestDialogOpen(true)}
        >
          <h3 className="text-xl font-semibold mb-2">Know a Canadian Product?</h3>
          <p className="text-gray-600">
            Help others discover great Canadian products by suggesting one to our database.
          </p>
        </Card>

        <Card 
          className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer" 
          onClick={() => setRequestDialogOpen(true)}
        >
          <h3 className="text-xl font-semibold mb-2">Looking for Something?</h3>
          <p className="text-gray-600">
            Can&apos;t find what you&apos;re looking for? Request a product or a category of products and we&apos;ll help track it down.
          </p>
        </Card>
      </div>

      <SuggestProductDialog 
        open={suggestDialogOpen} 
        onOpenChange={setSuggestDialogOpen} 
      />
      <RequestProductDialog 
        open={requestDialogOpen} 
        onOpenChange={setRequestDialogOpen} 
      />
    </>
  )
} 