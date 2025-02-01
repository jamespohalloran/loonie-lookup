export function SearchResults({ products }: { products: any[] }) {
  return (
    <div className="mt-8 flex items-end justify-between">
      <div>
        <h3 className="text-base font-semibold text-gray-900">🇨🇦</h3>

        <SearchColumn products={products} />
      </div>
      <div>
        <h3 className="text-base font-semibold text-gray-900">👎</h3>

        <SearchColumn products={products} />
      </div>
    </div>
  )
}

function SearchColumn({ products }: { products: any[] }) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {products.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900">{person.name}</p>
              <p className="mt-1 truncate text-xs/5 text-gray-500">{person.email}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm/6 text-gray-900">{person.role}</p>
            {person.lastSeen ? (
              <p className="mt-1 text-xs/5 text-gray-500">
                Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="size-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs/5 text-gray-500">Online</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
