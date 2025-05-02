"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    setIsMenuOpen(false) // Close menu after clicking
  }

  const NavLink = ({ sectionId, text }: { sectionId: string, text: string }) => {
    if (pathname === '/') {
      return (
        <button onClick={() => scrollToSection(sectionId)} className="hover:text-primary transition-colors">
          {text}
        </button>
      )
    }
    return (
      <Link href={`/${sectionId}`} className="hover:text-primary transition-colors">
        {text}
      </Link>
    )
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

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center">
            <span className={`block w-6 h-0.5 bg-current transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current my-1.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current transform transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4 sm:space-x-6 text-secondary text-sm sm:text-base font-medium">
            <li><NavLink sectionId="projects" text="Projects" /></li>
            <li><NavLink sectionId="tech-stack" text="Tech Stack" /></li>
            <li><NavLink sectionId="photography" text="Photography" /></li>
            <li><NavLink sectionId="about" text="About" /></li>
            <li><NavLink sectionId="contact" text="Contact" /></li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-[#EFECE5] transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="h-full flex flex-col items-center justify-center space-y-8">
            <ul className="flex flex-col items-center space-y-6 text-secondary text-xl font-medium">
              <li><NavLink sectionId="projects" text="Projects" /></li>
              <li><NavLink sectionId="tech-stack" text="Tech Stack" /></li>
              <li><NavLink sectionId="photography" text="Photography" /></li>
              <li><NavLink sectionId="about" text="About" /></li>
              <li><NavLink sectionId="contact" text="Contact" /></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
} 