"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export default function Navbar() {
  const pathname = usePathname()

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: section,
          offsetY: 0
        },
        ease: "power2.inOut"
      })
    }
  }

  return (
    <header className="w-full py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-12 bg-[#EFECE5]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo + Subtitle */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link href="/" className="font-bold text-base sm:text-lg tracking-tight flex items-center hover:text-primary transition-colors">
            <span>AntBrrr</span>
            <span className="ml-1 align-super">©</span>
          </Link>
          <div className="hidden md:block text-secondary text-sm sm:text-base font-normal tracking-wide">
            (Developer)
          </div>
        </div>

        {/* Right: Nav Links */}
        <nav>
          <ul className="flex space-x-4 sm:space-x-6 text-secondary text-sm sm:text-base font-medium">
            <li>
              {pathname === '/' ? (
                <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">
                  Projects
                </button>
              ) : (
                <Link href="/services" className="hover:text-primary transition-colors">Projects</Link>
              )}
            </li>
            <li>
              {pathname === '/' ? (
                <button onClick={() => scrollToSection('photography')} className="hover:text-primary transition-colors">
                  Photography
                </button>
              ) : (
                <Link href="/work" className="hover:text-primary transition-colors">Photography</Link>
              )}
            </li>
            <li>
              {pathname === '/' ? (
                <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
                  About
                </button>
              ) : (
                <Link href="/about" className="hover:text-primary transition-colors">About</Link>
              )}
            </li>
            <li>
              {pathname === '/' ? (
                <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
                  Contact
                </button>
              ) : (
                <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 