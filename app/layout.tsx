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
  title: 'Portfolio',
  description: 'Minimalistic portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} ${archivoBlack.variable} ${oswald.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
} 