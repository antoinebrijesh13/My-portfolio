import React from 'react'
import Link from 'next/link'

export default function Contact() {
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
            <h1 className="heading-1 mb-6">Let's make it happen</h1>
            <p className="paragraph max-w-2xl">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-2 mb-6">Book a Call</h2>
              <p className="paragraph mb-8">
                Schedule a call to discuss your project and how we can work together.
              </p>
              <Link 
                href="https://calendly.com/your-calendly-link" 
                target="_blank"
                className="inline-block px-6 py-3 bg-primary text-white hover:bg-opacity-90 transition-colors"
              >
                Schedule a Call
              </Link>
            </div>

            <div>
              <h2 className="heading-2 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <p className="paragraph">
                  <span className="font-medium">Email:</span> hello@yourdomain.com
                </p>
                <p className="paragraph">
                  <span className="font-medium">Location:</span> Working Globally
                </p>
                <p className="paragraph">
                  <span className="font-medium">Availability:</span> Available Apr '25
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="heading-2 mb-6">Social Links</h2>
            <div className="flex space-x-6">
              <Link href="https://linkedin.com/in/your-profile" target="_blank" className="text-sm hover:text-primary">
                LinkedIn
              </Link>
              <Link href="https://youtube.com/your-channel" target="_blank" className="text-sm hover:text-primary">
                YouTube
              </Link>
              <Link href="https://instagram.com/your-profile" target="_blank" className="text-sm hover:text-primary">
                Instagram
              </Link>
              <Link href="https://github.com/your-profile" target="_blank" className="text-sm hover:text-primary">
                GitHub
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 