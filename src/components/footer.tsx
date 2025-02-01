import KofiButton from 'kofi-button'

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="flex justify-center gap-x-10"></div>
        <div className="space-between mt-10 flex justify-center text-sm/6 text-gray-600">
          <div className="m-auto">
            Made with ❤️ by <a href="http://johalloran.dev">James OHalloran.</a>
          </div>
          <div className="mt-2">
            {' '}
            <KofiButton color="#0a9396" title="Tip the dev" kofiID="S6S5EMUTW" />
          </div>
        </div>
      </div>
    </footer>
  )
}
