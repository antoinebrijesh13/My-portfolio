'use client';

import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';
import Navbar from '../components/Navbar';
import Cursor from '../components/Cursor';

export default function PhotographyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black text-white">
        <Cursor />
        <Navbar className="bg-black text-white" />
        {children}
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
} 