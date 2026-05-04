import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Tools',
}

export default function DataToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
