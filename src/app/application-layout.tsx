'use client'

import { Layout } from '@/components/layout'
import { getEvents } from '@/data'

export function ApplicationLayout({
  children,
}: {
  events: Awaited<ReturnType<typeof getEvents>>
  children: React.ReactNode
}) {
  return <Layout>{children}</Layout>
}
