import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Qetsia Nkulu',
  description: 'A showcase of Qetsia\'s best work, personality, and talents.',
  icons: {
    icon: [
      { url: "images/favicon.ico", sizes: "any" },
      { url: "images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "images/images/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "images/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "images/favicon.svg",
        color: "#ffd90d",
      },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#ffd90d",
    "theme-color": "#ffd90d",
  },
  openGraph: {
    title: 'Qetsia Nkulu',
    description: 'A showcase of Qetsia\'s best work, personality, and talents.',
    url: 'https://qetsia.com',
    siteName: 'Qetsia Nkulu',
    images: [
      {
        url: 'images/og-image.png', // Use a dedicated OG image
        width: 1200,
        height: 630,
        alt: 'Qetsia Nkulu - Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qetsia Nkulu',
    description: 'A showcase of Qetsia\'s best work, personality, and talents.',
    images: ['images/og-image.png'],
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
