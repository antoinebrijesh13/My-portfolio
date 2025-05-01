import React from 'react'
import Link from 'next/link'

export default function Work() {
  const projects = [
    {
      title: 'Entuitive Engineering',
      category: 'Architecture & Engineering',
      tags: ['Design', 'Development'],
      year: '2024'
    },
    {
      title: 'SOGAI™',
      category: 'Technology & Arts',
      tags: ['Design', 'Development'],
      year: '2024'
    },
    {
      title: 'BlueBrown Partners',
      category: 'Venture Capital',
      tags: ['Design', 'Development'],
      year: '2024'
    },
    {
      title: 'Mam La Viet Ignite',
      category: 'Education & Entrepreneurship',
      tags: ['Design', 'Development'],
      year: '2024'
    },
    {
      title: 'Ubimov',
      category: 'Transportation Network Services',
      tags: ['Development', 'Design'],
      year: '2023'
    }
  ]

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
            <h1 className="heading-1 mb-6">Selected Works</h1>
            <p className="paragraph max-w-2xl">
              Featured projects that have been meticulously crafted with passion to drive results and impact.
            </p>
          </section>

          <section className="grid gap-16">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="aspect-video bg-gray-100 mb-4"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                    <p className="text-sm text-secondary">{project.category}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-sm">{tag}</span>
                      ))}
                    </div>
                    <span className="text-sm text-secondary">{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* About Me Section */}
          <section className="relative bg-[#EFECE5] py-12 px-8 rounded-lg">
            <div className="absolute inset-0 pointer-events-none opacity-[0.80] mix-blend-multiply" 
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                backgroundSize: '200px 200px'
              }}
            />
            <div className="relative">
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
            </div>
          </section>

          <section className="relative bg-[#EFECE5] py-12 px-8 rounded-lg">
            <div className="absolute inset-0 pointer-events-none opacity-[0.80] mix-blend-multiply" 
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                backgroundSize: '200px 200px'
              }}
            />
            <div className="relative">
              <h2 className="heading-2 mb-6">Let's make it happen</h2>
              <p className="paragraph mb-8 max-w-xl">
                Have a project in mind? I'd love to hear about it. Let's create something amazing together.
              </p>
              <Link 
                href="/contact" 
                className="inline-block px-6 py-3 bg-primary text-white hover:bg-opacity-90 transition-colors"
              >
                Book a Call
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 