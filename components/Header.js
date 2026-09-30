'use client';

import { useState } from "react";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import StarburstIcon from './StarburstIcon';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 backdrop-blur-md bg-[#FCFAF7]/90 border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Identity with Starburst */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <StarburstIcon className="w-7 h-7 text-amber-500 transition-transform duration-300 group-hover:rotate-45" fill="#F59E0B" />
            <span className="text-2xl font-serif font-bold tracking-tight text-stone-900">
              CareTaker
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#home" 
              className="text-xs font-semibold uppercase tracking-widest text-stone-700 hover:text-stone-950 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className="text-xs font-semibold uppercase tracking-widest text-stone-700 hover:text-stone-950 transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="#care" 
              className="text-xs font-semibold uppercase tracking-widest text-stone-700 hover:text-stone-950 transition-colors"
            >
              Our Care
            </Link>
            <Link 
              href="#specialties" 
              className="text-xs font-semibold uppercase tracking-widest text-stone-700 hover:text-stone-950 transition-colors"
            >
              Specialties
            </Link>
            <Link 
              href="#plans" 
              className="text-xs font-semibold uppercase tracking-widest text-stone-700 hover:text-stone-950 transition-colors"
            >
              Concierge Plans
            </Link>
          </nav>

          {/* Direct CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="#inquire"
              className="bg-stone-950 text-white rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-stone-800 transition-all shadow-sm hover:shadow"
            >
              Our Services
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FCFAF7] border-b border-stone-200 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            <Link 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-widest text-stone-800 py-1"
            >
              Home
            </Link>
            <Link 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-widest text-stone-800 py-1"
            >
              About Us
            </Link>
            <Link 
              href="#care" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-widest text-stone-800 py-1"
            >
              Our Care
            </Link>
            <Link 
              href="#specialties" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-widest text-stone-800 py-1"
            >
              Specialties
            </Link>
            <Link 
              href="#plans" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-widest text-stone-800 py-1"
            >
              Concierge Plans
            </Link>
            <Link
              href="#inquire"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block text-center bg-stone-950 text-white rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-wider mt-4"
            >
              Our Services
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
