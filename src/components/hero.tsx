import Search from './search'

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          Shop Canadian 🇨🇦
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600">
          Search for Canadian Alternatives to your favourite products.
        </p>
        <Search />
      </div>
    </div>
  )
}
