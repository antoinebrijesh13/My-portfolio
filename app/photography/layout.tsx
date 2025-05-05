'use client';

import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Cursor from '../components/Cursor';

export default function PhotographyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Cursor />
      <Navbar className="bg-black text-white" />
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
} 