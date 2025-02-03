'use client'

import KofiButton from 'kofi-button'
import { FeedbackDialog } from './feedback-dialog'

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-8 lg:px-8">
        <div className="flex justify-center gap-x-10"></div>
        <div className="flex justify-center gap-x-10"></div>
        <div className="text-sm/6 text-gray-600">
          <div className="mt-8 flex items-center justify-center">
            <div className="">
              Made with ❤️ by{' '}
              <a className="underline" href="http://johalloran.dev">
                James OHalloran
              </a>{' '}
              and some{' '}
              <a className="underline" href="https://github.com/jamespohalloran/loonie-lookup/graphs/contributors">
                awesome contributors.
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-y-4 space-x-4 sm:flex-nowrap sm:space-x-4 md:justify-center">
            <KofiButton color="#0a9396" title="Tip the dev" kofiID="S6S5EMUTW" />

            <FeedbackDialog />
            <span className="hidden sm:inline">|</span>
            <a href="/terms" className="hover:underline">
              Terms
            </a>
            <span className="hidden sm:inline">|</span>

            <a href="/categories" className="hover:underline">
              Product Categories
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
