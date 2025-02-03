'use client'
import { notFound } from "next/navigation"
import { categories, getProductsByCategory } from "@/app/products"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Percent } from "lucide-react"
import Hero from "@/components/hero"
import { ProductRequestAndSuggestCta } from "@/components/product-request-and-suggest-cta"

interface CategoryPageProps {
  params: { slug: string }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories[params.slug as keyof typeof categories]
  const products = getProductsByCategory(params.slug as keyof typeof categories)

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero showSearch={false} />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-3 text-gray-800">{category.name}</h1>
        {category.description && (
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">{category.description}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <Card
                key={product.name}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-grow">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-800">{product.name}</h2>
                    <div className="flex items-center mb-3 text-gray-600">
                      <Building2 className="w-5 h-5 mr-2" />
                      <span>{product.company}</span>
                    </div>
                    <p className="text-gray-600">{product.notes}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <Badge variant="secondary" className="flex items-center w-full justify-center py-1">
                      <Percent className="w-4 h-4 mr-1" />
                      {product.percentCanadian}% Canadian
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="col-span-full p-8 text-center text-gray-500 bg-gray-50">
              <p className="text-xl font-medium">No products found in this category.</p>
            </Card>
          )}
        </div>

        <ProductRequestAndSuggestCta />
      </main>
    </div>
  )
}

