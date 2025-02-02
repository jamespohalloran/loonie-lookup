import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import type React from 'react'
import { ApplicationLayout } from './application-layout'
export const runtime = 'edge'

export const metadata: Metadata = {
  title: {
    template: '%s - Loonie Lookup',
    default: 'Loonie Lookup',
  },
  description: 'Search for Canadian alternatives to your favourite products.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      /*data-theme="dark"*/
      lang="en"
      className="text-zinc-950 antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950"
    >
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        <ApplicationLayout>{children}</ApplicationLayout>
      </body>
    </html>
  )
}
