import type { Metadata } from 'next'
import { Inter, Bebas_Neue, Barlow_Condensed } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ayomalakalanka.com'),
  title: 'Ayomal Akalanka | Sri Lanka 400m Hurdles | Road to LA 2028',
  description:
    'Official portfolio of Ayomal Akalanka — Sri Lankan national athlete, 400m hurdles national junior record holder (49.90s), South Asian Championship medalist, and 2028 Olympic hopeful.',
  keywords: [
    'Ayomal Akalanka',
    'Sri Lanka athletics',
    '400m hurdles',
    'LA 2028',
    'national record',
    'South Asian Championship',
    'Olympic hopeful',
  ],
  openGraph: {
    title: "Ayomal Akalanka — Sri Lanka's Next Olympic Champion",
    description: 'National Junior Record 49.90s · South Asian Champion · Road to LA 2028',
    images: ['/images/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayomal Akalanka | Sri Lanka Athletics',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} ${barlowCondensed.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}
