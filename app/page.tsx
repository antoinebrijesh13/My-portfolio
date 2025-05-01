"use client";
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

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
    <main ref={mainRef} className="min-h-screen bg-[#EFECE5]">
      {/* Name at the top, left-aligned, bold, uppercase, tight tracking, Oswald, slightly transparent */}
      <section className="w-full pt-8 sm:pt-12 pb-6 sm:pb-8 px-4 sm:px-6 md:px-12 animate-on-scroll">
        <h1 className="font-extended font-black uppercase tracking-[-0.04em] text-[clamp(2rem,8vw,8rem)] leading-none mb-4 text-left w-full opacity-80">
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
            <Link href="/contact" className="contact-btn inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-primary text-white text-base sm:text-lg font-bold tracking-wide shadow hover:bg-opacity-90 transition-colors text-center">
              CONTACT ME <span className="ml-2">↗</span>
            </Link>
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

      {/* About Me Section */}
      <section id="about" className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-white animate-on-scroll">
        <div className="container mx-auto">
          <h1 className="heading-1 mb-4 sm:mb-6">Hi I'm Antony</h1>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <p className="paragraph mb-4 sm:mb-6">
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

      {/* Projects Section */}
      <section id="projects" className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-[#EFECE5] animate-on-scroll">
        <div className="container mx-auto">
          <h1 className="heading-1 mb-8 sm:mb-12">Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-100">
                <div className="w-full h-full flex items-center justify-center bg-[#8A8C6D]">
                  <span className="text-white text-lg sm:text-xl">Project Image</span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Project Title</h3>
                <p className="text-secondary mb-3 sm:mb-4 text-sm sm:text-base">A brief description of the project and its key features.</p>
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  <span className="px-2 sm:px-3 py-1 bg-[#EFECE5] text-xs sm:text-sm rounded-full">React</span>
                  <span className="px-2 sm:px-3 py-1 bg-[#EFECE5] text-xs sm:text-sm rounded-full">Next.js</span>
                  <span className="px-2 sm:px-3 py-1 bg-[#EFECE5] text-xs sm:text-sm rounded-full">TypeScript</span>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <a href="#" className="text-primary hover:underline text-sm sm:text-base">View Project</a>
                  <a href="#" className="text-primary hover:underline text-sm sm:text-base">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-100">
                {/* Project Image Placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-[#8A8C6D]">
                  <span className="text-white text-xl">Project Image</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Title</h3>
                <p className="text-secondary mb-4">A brief description of the project and its key features.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#EFECE5] text-sm rounded-full">React</span>
                  <span className="px-3 py-1 bg-[#EFECE5] text-sm rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-[#EFECE5] text-sm rounded-full">TypeScript</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-primary hover:underline">View Project</a>
                  <a href="#" className="text-primary hover:underline">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-100">
                {/* Project Image Placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-[#8A8C6D]">
                  <span className="text-white text-xl">Project Image</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Title</h3>
                <p className="text-secondary mb-4">A brief description of the project and its key features.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#EFECE5] text-sm rounded-full">React</span>
                  <span className="px-3 py-1 bg-[#EFECE5] text-sm rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-[#EFECE5] text-sm rounded-full">TypeScript</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-primary hover:underline">View Project</a>
                  <a href="#" className="text-primary hover:underline">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <section 
        ref={photographyRef} 
        id="photography" 
        className="w-full py-16 px-4 md:px-12 bg-black text-white animate-on-scroll"
      >
        <div className="container mx-auto">
          <h1 className="heading-1 mb-4 text-[#EFECE5] hover:text-white transition-colors duration-200 cursor-default">Photography</h1>
          <p className="text-[#EFECE5] text-lg mb-12 hover:text-white transition-colors duration-200 cursor-default">Sharing some moments I've captured – hope you like them!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Photo 1 */}
            <div 
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
              onClick={() => openLightbox("/1.jpg")}
            >
              <img 
                src="/1.jpg" 
                alt="Photography 1" 
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
              <img 
                src="/3.jpg" 
                alt="Photography 2" 
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
              <img 
                src="4.jpg" 
                alt="Photography 3" 
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
              <img 
                src="7.jpg" 
                alt="Photography 4" 
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
              <img 
                src="8.jpg" 
                alt="Photography 5" 
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
              <img 
                src="/5.jpg" 
                alt="Photography 6" 
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
              <img 
                src="/9.jpg" 
                alt="Photography 7" 
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
              <img 
                src="/88.jpg" 
                alt="Photography 8" 
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
              <img 
                src="/20.jpg" 
                alt="Photography 9" 
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
              <img 
                src="/21.jpg" 
                alt="Photography 10" 
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
              <img 
                src="/22.jpg" 
                alt="Photography 11" 
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
              <img 
                src="/23.jpg" 
                alt="Photography 12" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View</span>
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