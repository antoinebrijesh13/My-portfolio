'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PhotographyPage() {
  const lightboxRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const handleImageLoad = (src: string) => {
    setLoadedImages(prev => new Set(prev).add(src));
  };

  const images = [
    { src: "/1.jpg", alt: "Photography 1" },
    { src: "/3.jpg", alt: "Photography 2" },
    { src: "/4.jpg", alt: "Photography 3" },
    { src: "/7.jpg", alt: "Photography 4" },
    { src: "/8.jpg", alt: "Photography 5" },
    { src: "/5.jpg", alt: "Photography 6" },
    { src: "/9.jpg", alt: "Photography 7" },
    { src: "/88.jpg", alt: "Photography 8" }
  ];

  return (
    <main className="min-h-screen bg-black text-white relative pt-16">
      {/* Optimized Grain Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.15] mix-blend-screen" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
          willChange: 'transform'
        }}
      />
      <div className="container mx-auto py-12 px-4 relative">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-[#EFECE5] hover:text-white transition-colors duration-200">Photography</h1>
          <Link 
            href="/"
            className="w-full sm:w-auto block text-center px-6 py-3 rounded-full bg-white text-black hover:bg-opacity-90 transition-colors font-bold mb-6 sm:mb-0 text-base sm:text-lg"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={image.src}
              className="group relative overflow-hidden aspect-square cursor-pointer rounded-xl"
              onClick={() => openLightbox(image.src)}
            >
              <div className={`w-full h-full transition-opacity duration-300 ${loadedImages.has(image.src) ? 'opacity-100' : 'opacity-0'}`}>
                <Image 
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority={index < 4}
                  loading={index < 4 ? undefined : "lazy"}
                  onLoad={() => handleImageLoad(image.src)}
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          ref={lightboxRef}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white text-xl hover:text-gray-300 transition-colors duration-200"
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
  );
} 