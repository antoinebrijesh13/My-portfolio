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

  const NavLink = ({ sectionId, text }: { sectionId: string, text: string }) => {
    if (pathname === '/') {
      return (
        <button onClick={() => scrollToSection(sectionId)} className="hover:text-primary transition-colors whitespace-nowrap">
          {text}
        </button>
      )
    }
    return (
      <Link href={`/${sectionId}`} className="hover:text-primary transition-colors whitespace-nowrap">
        {text}
      </Link>
    )
  }

  return (
    <header className="w-full py-3 sm:py-6 md:py-8 px-2 sm:px-6 md:px-12 bg-[#EFECE5]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo + Subtitle */}
        <div className="flex items-center space-x-1 sm:space-x-4">
          <Link href="/" className="font-bold text-sm sm:text-lg tracking-tight flex items-center hover:text-primary transition-colors">
            <span>AntBrrr</span>
            <span className="ml-1 align-super">©</span>
          </Link>
          <div className="hidden md:block text-secondary text-sm sm:text-base font-normal tracking-wide">
            (Developer)
          </div>
        </div>

        {/* Nav Links */}
        <nav className="overflow-x-auto">
          <ul className="flex space-x-2 sm:space-x-4 md:space-x-6 text-secondary text-xs sm:text-sm md:text-base font-medium">
            <li><NavLink sectionId="projects" text="Projects" /></li>
            <li className="hidden sm:block"><NavLink sectionId="tech-stack" text="Tech Stack" /></li>
            <li><NavLink sectionId="photography" text="Photography" /></li>
            <li><NavLink sectionId="about" text="About" /></li>
            <li><NavLink sectionId="contact" text="Contact" /></li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 