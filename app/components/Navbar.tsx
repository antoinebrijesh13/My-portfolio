import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="w-full py-8 px-4 md:px-12 flex items-center justify-between bg-[#EFECE5]">
      {/* Left: Logo + Subtitle */}
      <div className="flex items-center space-x-4">
        <div className="font-bold text-lg tracking-tight flex items-center">
          <span>AntBrrr</span>
          <span className="ml-1 text-xl align-super">©</span>
        </div>
        <div className="hidden md:block text-secondary text-base font-normal tracking-wide">
          (Developer)
        </div>
      </div>

      {/* Right: Nav Links */}
      <nav>
        <ul className="flex space-x-6 text-secondary text-base font-medium">
          <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
          <li><Link href="/work" className="hover:text-primary transition-colors">Works</Link></li>
          <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
          <li><Link href="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
          <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
} 