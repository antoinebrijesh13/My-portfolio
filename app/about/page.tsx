import React from 'react'
import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen">
      <div className="container py-16 md:py-24">
        <nav className="mb-16">
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-sm hover:text-primary">Home</Link></li>
            <li><Link href="/work" className="text-sm hover:text-primary">Work</Link></li>
            <li><Link href="/about" className="text-sm hover:text-primary">About</Link></li>
            <li><Link href="/contact" className="text-sm hover:text-primary">Contact</Link></li>
          </ul>
        </nav>

        <div className="grid gap-16 md:gap-24">
          <section>
            <h1 className="heading-1 mb-6">Designer, Developer, Creator</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="paragraph mb-6">
                  With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting positive impact on the digital landscape and your business.
                </p>
                <p className="paragraph">
                  Creating great web experiences is my primary focus. I ensure each project leaves users with a feel-good sensation through meticulous attention to detail and user-centric design principles.
                </p>
              </div>
              <div>
                <p className="paragraph">
                  When I'm not immersed in web development and design, you can find me sharing insights about my freelance journey on YouTube, bouldering, playing music, or tending to my cherished houseplants.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="heading-2 mb-6">Let's make it happen</h2>
            <p className="paragraph mb-8 max-w-xl">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-6 py-3 bg-primary text-white hover:bg-opacity-90 transition-colors"
            >
              
            </Link>
          </section>
        </div>
      </div>
    </main>
  )
}