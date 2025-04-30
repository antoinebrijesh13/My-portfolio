import React from 'react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: '',
      features: ['CMS Integration', 'Motion & Animations', '3D Development']
    },
    {
      title: 'Web Design',
      description: 'Amplify your online presence with a website that truly connects with your audience\'s feelings and desires. I design stunning, high-converting sites that align with your business goals, helping you stand out and scale effectively.',
      features: ['Responsive Design', 'Wireframing', 'UX Writing']
    },
    {
      title: 'SEO',
      description: 'Your website deserves to be seen. I optimize your online presence to elevate your visibility in search results, helping your business attract the right audience and stand out in the digital landscape.',
      features: ['Technical SEO', 'On-Page Optimization', 'SEO Audits & Analysis']
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
            <h1 className="heading-1 mb-6">idk</h1>
            <p className="paragraph max-w-2xl">
              idk
            </p>
          </section>

          <section className="grid gap-16">
            {services.map((service, index) => (
              <div key={index} className="grid gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold">0{index + 1}</span>
                  <h2 className="heading-2">{service.title}</h2>
                </div>
                <p className="paragraph max-w-2xl">{service.description}</p>
                <div className="flex flex-wrap gap-4">
                  {service.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="text-sm bg-gray-100 px-4 py-2 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section>
            <h2 className="heading-2 mb-6">idk</h2>
            <p className="paragraph mb-8 max-w-xl">
              idk
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-6 py-3 bg-primary text-white hover:bg-opacity-90 transition-colors"
            >
              Book a Call
            </Link>
          </section>
        </div>
      </div>
    </main>
  )
} 