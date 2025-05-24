import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Qetsia Nkulu',
  description: 'Created with v0',
  icons: { 
    icon: "/images/qetsiankulu-favicon.svg",
    apple: '/images/qetsiankulu-favicon.svg',
  },
    openGraph: {
    title: 'Qetsia Nkulu',
    description: 'A showcase of Qetsia\'s best work, personality, and talents.',
    url: 'https://qetsia.com',
    siteName: 'Qetsia Nkulu',
    images: [
      {
        url: 'https://qetsia.com/images/qetsiankulu-favicon.svg',
        width: 512,
        height: 512,
        alt: 'Qetsia Nkulu Logo',
      },
    ],
    type: 'website',
  },
    twitter: {
    card: 'summary',
    title: 'Qetsia Nkulu',
    description: 'A showcase of Qetsia\'s best work, personality, and talents.',
    images: ['https://qetsia.com/images/qetsiankulu-favicon.svg'],
  },
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
