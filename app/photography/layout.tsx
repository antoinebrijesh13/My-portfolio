'use client';

import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/Navbar';

export default function PhotographyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar className="bg-black text-white" logoOnly />
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
} 