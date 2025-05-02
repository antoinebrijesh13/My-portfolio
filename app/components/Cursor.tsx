"use client";
import { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add resize listener
    window.addEventListener('resize', checkIfMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add hover effect to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => setIsHovering(true));
      element.addEventListener('mouseleave', () => setIsHovering(false));
    });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', checkIfMobile);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', () => setIsHovering(true));
        element.removeEventListener('mouseleave', () => setIsHovering(false));
      });
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      gsap.to('.cursor-follower', {
        x: mousePosition.x,
        y: mousePosition.y,
        duration: 0.3,
        ease: 'power1.out'
      });
    }
  }, [mousePosition, isMobile]);

  if (isMobile) return null;

  return (
    <div 
      className={`cursor-follower fixed w-3 h-3 bg-[#FF1493] pointer-events-none z-50 transition-transform duration-300 opacity-80 ${
        isHovering ? 'scale-150' : 'scale-100'
      }`}
      style={{
        transform: 'rotate(45deg)'
      }}
    />
  );
} 