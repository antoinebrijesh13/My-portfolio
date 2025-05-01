import React from 'react'
import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen">
      <div className="container py-16 md:py-24">
        <nav className="mb-16">
          <ul className="flex space-x-6">
          
          </ul>
        </nav>

        <div className="grid gap-16 md:gap-24">
          <section>
            <h1 className="heading-1 mb-6">Hi I'm Antony</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="paragraph mb-6">
                I like codeing particularly web design and Machine Learning, and I have a deep interest in Artificial Intelligence, especially in Large Language Models and Generative AI.
                </p>
                <p className="paragraph">
                I thrive on learning and constantly find myself drawn to the cutting edge of technology I love diving into new frameworks and AI concepts.
                </p>
              </div>
              <div>
                <p className="paragraph">
                Outside of the tech world, I'm an avid football fan especially FC Barcelona(Visca El Barça!) and enjoy unwinding by playing the piano and guitar.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="heading-2 mb-6">Wanna know more about me?</h2>
            <p className="paragraph mb-8 max-w-xl">
              Contact me here
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