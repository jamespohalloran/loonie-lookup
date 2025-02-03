import Link from "next/link"
import { categories } from "@/app/products"
import { Card } from "@/components/ui/card"

export default function CategoriesPage() {
  // Convert categories object to array and sort alphabetically by name
  const sortedCategories = Object.entries(categories)
    .map(([key, value]) => ({
      key,
      ...value,
    }))
    .sort((a, b) => (a.name || "").localeCompare(b.name || ""))

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-2">Categories</h1>
        <p className="text-gray-600 text-center mb-8">Browse Canadian alternatives by category</p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sortedCategories.map((category) => (
            <Link
              key={category.key}
              href={`/category/${category.key}`}
            >
              <Card className="p-4 hover:shadow-lg transition-shadow h-full">
                <h2 className="font-semibold text-lg mb-1">{category.name}</h2>
                {category.description && <p className="text-sm text-gray-600">{category.description}</p>}
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
