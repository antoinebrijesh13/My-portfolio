import React from 'react'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Archivo_Black, Oswald } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,400&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} ${archivoBlack.variable} ${oswald.variable} font-sans antialiased overflow-x-hidden`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
} 