"use client";
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  const [displayDate, setDisplayDate] = useState('');
  const mainRef = useRef<HTMLDivElement>(null);
  const photographyRef = useRef<HTMLElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const now = new Date();
    const month = now.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = `'${now.getFullYear().toString().slice(-2)}`;
    setDisplayDate(`${month} ${year}`);
  }, []);

  useEffect(() => {
    if (mainRef.current && photographyRef.current) {
      // Enhanced color transitions
      ScrollTrigger.create({
        trigger: photographyRef.current,
        start: 'top 60%',
        end: 'top 40%',
        onEnter: () => {
          gsap.to('body', {
            backgroundColor: '#000000',
            duration: 0.8,
            ease: 'power2.inOut'
          });
          gsap.to('.text-secondary:not(.contact-btn)', {
            color: '#9ca3af',
            duration: 0.8,
            ease: 'power2.inOut'
          });
        },
        onLeaveBack: () => {
          gsap.to('body', {
            backgroundColor: '#ffffff',
            duration: 0.8,
            ease: 'power2.inOut'
          });
          gsap.to('.text-secondary:not(.contact-btn)', {
            color: '#4b5563',
            duration: 0.8,
            ease: 'power2.inOut'
          });
        }
      });

      // Existing scroll animations
      gsap.utils.toArray<HTMLElement>('.animate-on-scroll').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: aboutSection,
          offsetY: 0
        },
        ease: "power2.inOut"
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: contactSection,
          offsetY: 0
        },
        ease: "power2.inOut"
      });
    }
  };

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
    
    // Animation for opening
    if (lightboxRef.current && imageRef.current) {
      gsap.fromTo(lightboxRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.inOut" }
      );
      gsap.fromTo(imageRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
    }
  };

  const closeLightbox = () => {
    // Animation for closing
    if (lightboxRef.current && imageRef.current) {
      gsap.to(lightboxRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut"
      });
      gsap.to(imageRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setSelectedImage(null);
          document.body.style.overflow = 'auto';
        }
      });
    }
  };

  return (
    <main ref={mainRef} className="min-h-screen bg-[#EFECE5] relative">
      {/* Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.50] mix-blend-multiply" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px'
        }}
      />
      {/* Name at the top, left-aligned, bold, uppercase, tight tracking, Oswald, slightly transparent */}
      <section className="w-full pt-8 sm:pt-12 pb-6 sm:pb-8 px-4 sm:px-6 md:px-12 animate-on-scroll">
        <h1 className="font-[Satoshi,sans-serif] font-black uppercase tracking-[-0.04em] text-[clamp(2rem,8vw,8rem)] leading-none mb-4 text-left w-full opacity-80">
          ANTONY BRIJESH<span className="ml-2 sm:ml-4 align-baseline">©</span>
        </h1>
      </section>

      {/* Full-width landscape image below the name */}
      <div className="w-full animate-on-scroll">
        <img
          src="/landscape.jpg"
          alt="Landscape"
          className="w-full h-[280px] sm:h-[340px] md:h-[420px] object-cover object-center"
        />
      </div>

      {/* Main hero content: two columns */}
      <section className="container flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8 py-6 sm:py-8 px-4 sm:px-6 md:px-8 animate-on-scroll">
        {/* Left column: arrow, greeting, contact button */}
        <div className="flex flex-col items-start justify-center max-w-md mx-auto md:mx-0 w-full">
          <span className="text-xl sm:text-2xl mb-3 sm:mb-4 text-[#8A8C6D]">→</span>
          <p className="text-secondary text-lg sm:text-xl md:text-2xl font-medium mb-6 sm:mb-8">
            Hi there! I'm really glad you stopped by
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <button 
              onClick={scrollToContact}
              className="contact-btn inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-primary text-white text-base sm:text-lg font-bold tracking-wide shadow hover:bg-opacity-90 transition-colors text-center"
            >
              CONTACT ME <span className="ml-2">↗</span>
            </button>
            <button 
              onClick={scrollToAbout}
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-primary text-base sm:text-lg font-bold tracking-wide shadow hover:bg-opacity-90 transition-colors text-center"
            >
              ABOUT ME <span className="ml-2">↓</span>
            </button>
          </div>
        </div>
        {/* Right column: availability info */}
        <div className="flex flex-col items-center md:items-end w-full md:w-auto mt-6 sm:mt-0">
          <span className="block text-secondary text-sm tracking-widest mb-1"></span>
          <span className="block text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"></span>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-[#EFECE5] animate-on-scroll">
        <div className="container mx-auto">
          <h1 className="heading-1 mb-8 sm:mb-12">Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Project 1 - Voice-Controlled LT-spice Circuit Designer */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-[#EFECE5] flex items-center justify-center">
                <img 
                  src="/maxresdefault.jpg" 
                  alt="LTspice Circuit Designer Interface"
                  className="w-full h-full object-contain opacity-80"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Voice-Controlled LT-spice Circuit Designer</h3>
                <p className="text-secondary mb-3 sm:mb-4 text-sm sm:text-base">
                  A voice-controlled interface for LT-spice circuit design using Python and machine learning. This project allows users to design circuits through voice commands, making circuit design more accessible and efficient.
                </p>
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  <span className="px-2 sm:px-3 py-1 bg-[#EFECE5] text-xs sm:text-sm rounded-full">Python</span>
                  <span className="px-2 sm:px-3 py-1 bg-[#EFECE5] text-xs sm:text-sm rounded-full">Machine Learning</span>
                  <span className="px-2 sm:px-3 py-1 bg-[#EFECE5] text-xs sm:text-sm rounded-full">Circuit Design</span>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <a 
                    href="https://github.com/Fourmidable123/Voice-Controlled-LT-spice-Circuit-Designer" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm sm:text-base"
                  >
                    View on GitHub ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 - Portfolio Website */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-[#EFECE5] flex items-center justify-center">
                <img 
                  src="/image.png" 
                  alt="Portfolio Website Preview"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Personal Portfolio Website</h3>
                <p className="text-secondary mb-4">A modern, responsive portfolio website built with Next.js and TailwindCSS. Features a clean design, smooth animations, and interactive elements.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#EFECE5] text-sm rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-[#EFECE5] text-sm rounded-full">TypeScript</span>
                  <span className="px-3 py-1 bg-[#EFECE5] text-sm rounded-full">TailwindCSS</span>
                  <span className="px-3 py-1 bg-[#EFECE5] text-sm rounded-full">GSAP</span>
                </div>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/antoinebrijesh13/My-portfolio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    View on GitHub ↗
                  </a>
                  <a 
                    href="https://my-portfolio-pi-azure-47.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-[#EFECE5] animate-on-scroll relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.80] mix-blend-screen" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            backgroundSize: '200px 200px'
          }}
        />
        <div className="container mx-auto relative">
          <h1 className="heading-1 mb-4 sm:mb-6">Hi I'm Antony</h1>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <p className="paragraph mb-4 sm:mb-6">
              Currently I'm a student at Kyungpook National University in Daegu,South Korea. Coding is something I genuinely enjoy, especially working on design and Machine Learning aspects. 
              I'm also really fascinated by Artificial Intelligence – particularly I find Large Language Models and Generative AI to be the most exciting areas in the field.
              </p>
              <p className="paragraph">
              I'm always eager to learn and love keeping up with new tech, trying out different frameworks and exploring AI concepts.
              </p>
            </div>
            <div>
              <p className="paragraph">
              Other than the tech stuff,I love watching football (big FC Barcelona fan here - Visca El Barça!),Photography and I also enjoy playing the piano and guitar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-[#FDF6EC] animate-on-scroll relative">
        {/* Grain Texture Overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.50] mix-blend-multiply" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            backgroundSize: '200px 200px'
          }}
        />
        <div className="container mx-auto relative">
          <h1 className="heading-1 mb-8 sm:mb-12">Tech Stack</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend Development Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#EFECE5] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#8A8C6D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-[#8A8C6D]">Frontend Development</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">Next.js</span>
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">React</span>
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">TypeScript</span>
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">TailwindCSS</span>
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">GSAP</span>
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">HTML5</span>
                
              </div>
            </div>

            {/* Backend & AI Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#EFECE5] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#8A8C6D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-[#8A8C6D]">AI</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">Python</span>
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">JavaScript</span>
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">Machine Learning</span>
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">TensorFlow</span>
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">PyTorch</span>
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">Ollama</span>
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">Langchain</span>
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">Neo4j</span>
              </div>
            </div>

            {/* Tools & Others Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#EFECE5] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#8A8C6D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-[#8A8C6D]">Tools & Others</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">Git</span>
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">GitHub</span>
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">VS Code</span>
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">Figma</span>
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">Adobe Photoshop</span>
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">Adobe Lightroom</span>
              </div>
            </div>

            {/* Currently Learning Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#EFECE5] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#8A8C6D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-[#8A8C6D]">Currently Learning</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">LLMs</span>
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">Generative AI</span>
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">Three.js</span>
                <span className="px-3 py-1.5 bg-[#EFECE5] text-sm rounded-full font-medium">WebGL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <section 
        ref={photographyRef} 
        id="photography" 
        className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-black text-white animate-on-scroll relative"
      >
        {/* Grain Texture Overlay for Photography Section */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.25] mix-blend-screen" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            backgroundSize: '200px 200px'
          }}
        />
        <div className="container mx-auto relative">
          <h1 className="heading-1 mb-4 text-[#EFECE5] hover:text-white transition-colors duration-200 cursor-default">Photography</h1>
          <p className="text-[#EFECE5] text-lg mb-12 hover:text-white transition-colors duration-200 cursor-default">Sharing some moments I've captured – hope you like them!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Photo 1 */}
            <div 
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
              onClick={() => openLightbox("/1.jpg")}
            >
              <Image 
                src="/1.jpg" 
                alt="Photography 1" 
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View</span>
              </div>
            </div>

            {/* Photo 2 */}
            <div 
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
              onClick={() => openLightbox("/3.jpg")}
            >
              <Image 
                src="/3.jpg" 
                alt="Photography 2" 
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View</span>
              </div>
            </div>

            {/* Photo 3 */}
            <div 
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
              onClick={() => openLightbox("4.jpg")}
            >
              <Image 
                src="4.jpg" 
                alt="Photography 3" 
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View</span>
              </div>
            </div>

            {/* Photo 4 */}
            <div 
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
              onClick={() => openLightbox("7.jpg")}
            >
              <Image 
                src="7.jpg" 
                alt="Photography 4" 
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View</span>
              </div>
            </div>

            {/* Photo 5 */}
            <div 
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
              onClick={() => openLightbox("8.jpg")}
            >
              <Image 
                src="8.jpg" 
                alt="Photography 5" 
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View</span>
              </div>
            </div>

            {/* Photo 6 */}
            <div 
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
              onClick={() => openLightbox("/5.jpg")}
            >
              <Image 
                src="/5.jpg" 
                alt="Photography 6" 
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View</span>
              </div>
            </div>

            {/* Photo 7 */}
            <div 
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
              onClick={() => openLightbox("/9.jpg")}
            >
              <Image 
                src="/9.jpg" 
                alt="Photography 7" 
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View</span>
              </div>
            </div>

            {/* Photo 8 */}
            <div 
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
              onClick={() => openLightbox("/88.jpg")}
            >
              <Image 
                src="/88.jpg" 
                alt="Photography 8" 
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View</span>
              </div>
            </div>

            {/* Photo 9 */}
            <div 
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
              onClick={() => openLightbox("/20.jpg")}
            >
              <Image 
                src="/20.jpg" 
                alt="Photography 9" 
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View</span>
              </div>
            </div>

            {/* Photo 10 */}
            <div 
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
              onClick={() => openLightbox("/21.jpg")}
            >
              <Image 
                src="/21.jpg" 
                alt="Photography 10" 
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View</span>
              </div>
            </div>

            {/* Photo 11 */}
            <div 
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
              onClick={() => openLightbox("/22.jpg")}
            >
              <Image 
                src="/22.jpg" 
                alt="Photography 11" 
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View</span>
              </div>
            </div>

            {/* Photo 12 */}
            <div 
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
              onClick={() => openLightbox("/23.jpg")}
            >
              <Image 
                src="/23.jpg" 
                alt="Photography 12" 
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotify Section */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-[#EFECE5] animate-on-scroll relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.50] mix-blend-multiply" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            backgroundSize: '200px 200px'
          }}
        />
        <div className="container mx-auto relative">
          <h1 className="heading-1 mb-8 sm:mb-12">Music I'm Listening To</h1>
          <div className="max-w-2xl mx-auto">
            {/* Spotify Playlist Embed */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none opacity-[0.30] mix-blend-multiply" 
                style={{
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                  backgroundSize: '200px 200px'
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#EFECE5] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-[#8A8C6D]">Current Playlist</h2>
                </div>
                <div className="aspect-[16/9] sm:aspect-square">
                  <iframe 
                    src="https://open.spotify.com/embed/playlist/7tg4o59k1q0Lz6g4oKXNie" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    allow="encrypted-media" 
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-[#EFECE5] animate-on-scroll relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.65] mix-blend-multiply" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'5\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            backgroundSize: '200px 200px'
          }}
        />
        <div className="container mx-auto relative">
          <h1 className="heading-1 mb-8 sm:mb-12">Let's Connect</h1>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Draw or write whats on your mind :)</h2>
              <p className="text-secondary mb-8 max-w-lg">
                Your message will be kept private and secure.
              </p>
              <Link 
                href="https://1drv.ms/o/c/c8b6d04d99283592/EiKXtobmmJRJqyJpq3NoCBcBsKcPly3s5oaVdO5ZNPDUrA?e=i4gDLc" 
                className="inline-block px-8 py-4 bg-primary text-white rounded-full hover:bg-opacity-90 transition-colors text-lg font-bold shadow"
              >
                Open Notebook <span className="ml-2">↗</span>
              </Link>
            </div>

            {/* Right Column - Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <span className="block text-secondary text-sm mb-1">Email</span>
                  <a href="mailto:brijeshantonio13@gmail.com" className="text-lg hover:text-primary transition-colors">
                    brijeshantonio13@gmail.com
                  </a>
                </div>
                <div>
                  <span className="block text-secondary text-sm mb-1">Location</span>
                  <p className="text-lg">Daegu,South Korea</p>
                </div>
                <div>
                </div>
                <div>
                  <span className="block text-secondary text-sm mb-1">Social</span>
                  <div className="flex space-x-6 mt-2">
                    <a href="https://www.linkedin.com/in/antony-brijesh-a0aa562ab/" target="_blank" className="text-lg hover:text-primary transition-colors">
                      LinkedIn
                    </a>
                    <a href="https://github.com/antoinebrijesh13" target="_blank" className="text-lg hover:text-primary transition-colors">
                      GitHub
                    </a>
                    <a href="https://www.instagram.com/antttttbrrrrr/" target="_blank" className="text-lg hover:text-primary transition-colors">
                      Instagram
                    </a>
                    <a href="https://vsco.co/antonybrijeshhh/gallery?fbclid=PAZXh0bgNhZW0CMTEAAadFRJT6KM-Svjg8pbsZSXma7lJbnXYGRc7r4kbdSQdhxouKTyEVZPta9Uw8zg_aem_ylu71SsW0peZzvxP79FTlA" target="_blank" className="text-lg hover:text-primary transition-colors">
                      VSCO
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          ref={lightboxRef}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white text-xl hover:text-[#EFECE5] transition-colors duration-200"
            onClick={closeLightbox}
          >
            ✕
          </button>
          <img 
            ref={imageRef}
            src={selectedImage} 
            alt="Full size"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </main>
  )
} 