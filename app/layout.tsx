import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'trim.it',
  description: 'Smart URL Shortener'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}