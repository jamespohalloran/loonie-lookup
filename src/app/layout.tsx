import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import type React from 'react'
import { ApplicationLayout } from './application-layout'
export const runtime = 'edge'
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: {
    template: '%s - Loonie Lookup',
    default: 'Loonie Lookup',
  },
  description: 'Search for Canadian alternatives to your favourite products.',
}

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      /*data-theme="dark"*/
      lang="en"
      className="text-zinc-950 antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950"
    >
      <head></head>
      <body className={inter.className}>
        <ApplicationLayout>{children}</ApplicationLayout>
      </body>
    </html>
  )
}
