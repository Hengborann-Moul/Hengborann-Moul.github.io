import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Password Generator',
}

export default function PasswordGeneratorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
