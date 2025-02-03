'use client'

import KofiButton from 'kofi-button'
import { FeedbackDialog } from './feedback-dialog'

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-8 lg:px-8">
        <div className="flex justify-center gap-x-10">
          
        </div>
        <div className="flex justify-center gap-x-10"></div>
        <div className="flex items-center justify-center space-x-4 text-sm/6 text-gray-600 mt-8">
          <div>
            Made with ❤️ by <a href="http://johalloran.dev">James OHalloran.</a>
          </div>
          <div>
            <KofiButton color="#0a9396" title="Tip the dev" kofiID="S6S5EMUTW" />
          </div>
          <div className="flex gap-x-4">
            <FeedbackDialog />
            <span>|</span>
            <a href="/terms" className="hover:underline">
              Terms
            </a>
            <span>|</span>
            <a href="/categories" className="hover:underline">
              Product Categories
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
