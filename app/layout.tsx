import React from 'react'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Archivo_Black, Oswald } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './context/ThemeContext'
import Cursor from './components/Cursor'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['900'], variable: '--font-montserrat' })
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: '400', variable: '--font-archivo-black' })
const oswald = Oswald({ subsets: ['latin'], weight: ['700'], variable: '--font-oswald' })

export const metadata: Metadata = {
  title: 'Antony Brijesh',
  description: 'antony brijesh portfolio',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,400&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} ${archivoBlack.variable} ${oswald.variable} font-sans antialiased overflow-x-hidden`}>
        <ThemeProvider>
          {/* Only render Cursor if not on /photography or its subpages */}
          {!(pathname.startsWith('/photography')) && <Cursor />}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 