"use client";
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [displayDate, setDisplayDate] = useState('');
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const now = new Date();
    const month = now.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = `'${now.getFullYear().toString().slice(-2)}`;
    setDisplayDate(`${month} ${year}`);
  }, []);

  useEffect(() => {
    if (mainRef.current) {
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

  return (
    <main ref={mainRef} className="min-h-screen bg-[#EFECE5]">
      {/* Name at the top, left-aligned, bold, uppercase, tight tracking, Oswald, slightly transparent */}
      <section className="w-full pt-12 pb-8 px-4 md:px-12 animate-on-scroll">
        <h1 className="font-extended font-black uppercase tracking-[-0.04em] text-[clamp(2.5rem,10vw,8rem)] leading-none mb-4 text-left w-full opacity-80">
          ANTONY BRIJESH<span className="ml-4 align-baseline">©</span>
        </h1>
      </section>

      {/* Full-width landscape image below the name */}
      <div className="w-full animate-on-scroll">
        <img
          src="/landscape.jpg"
          alt="Landscape"
          className="w-full h-[340px] md:h-[420px] object-cover object-center"
        />
      </div>

      {/* Main hero content: two columns */}
      <section className="container flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-8 animate-on-scroll">
        {/* Left column: arrow, greeting, contact button */}
        <div className="flex flex-col items-start justify-center max-w-md mx-auto md:mx-0 w-full">
          <span className="text-2xl mb-4 text-[#8A8C6D]">→</span>
          <p className="text-secondary text-xl md:text-2xl font-medium mb-8">
            Hi there! I'm really glad you stopped by
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 rounded-full bg-primary text-white text-lg font-bold tracking-wide shadow hover:bg-opacity-90 transition-colors mb-8">
            CONTACT ME <span className="ml-2">↗</span>
          </Link>
        </div>
        {/* Right column: availability info */}
        <div className="flex flex-col items-center md:items-end w-full md:w-auto">
          <span className="block text-secondary text-sm tracking-widest mb-1"></span>
          <span className="block text-5xl md:text-6xl font-bold tracking-tight"></span>
        </div>
      </section>
    </main>
  )
} 