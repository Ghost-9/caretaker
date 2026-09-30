'use client';

import { useState } from "react";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 backdrop-blur-md bg-sand-100/80 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Identity */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-forest-900 text-sand-100 flex items-center justify-center font-editorial text-xl font-bold tracking-tight shadow-subtle transition-transform duration-300 group-hover:scale-105">
              C
            </div>
            <div>
              <span className="block text-xl font-semibold tracking-tight text-forest-950 font-sans">
                CareTaker
              </span>
              <span className="block text-[10px] uppercase tracking-widest font-semibold text-stone-500">
                Hospital & Home Concierge
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#disciplines" 
              className="text-sm font-medium text-stone-600 hover:text-forest-900 transition-colors"
            >
              Care Disciplines
            </Link>
            <Link 
              href="#protocol" 
              className="text-sm font-medium text-stone-600 hover:text-forest-900 transition-colors"
            >
              The Clinical Protocol
            </Link>
            <Link 
              href="#plans" 
              className="text-sm font-medium text-stone-600 hover:text-forest-900 transition-colors"
            >
              Care Plans
            </Link>
            <Link 
              href="#about" 
              className="text-sm font-medium text-stone-600 hover:text-forest-900 transition-colors"
            >
              Accreditation
            </Link>
          </nav>

          {/* Direct CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 text-xs font-semibold text-forest-800 bg-forest-50 px-3 py-1.5 rounded-full border border-forest-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available in Jodhpur & Jaipur</span>
            </div>
            <Link 
              href="#inquire"
              className="px-5 py-2.5 rounded-full bg-forest-900 text-sand-50 text-sm font-medium hover:bg-forest-800 transition-all duration-200 shadow-subtle hover:shadow-premium"
            >
              Inquire for Care
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-200/50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-sand-100 px-6 py-6 space-y-4 shadow-elevated">
          <Link
            href="#disciplines"
            className="block text-base font-medium text-stone-800 hover:text-forest-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            Care Disciplines
          </Link>
          <Link
            href="#protocol"
            className="block text-base font-medium text-stone-800 hover:text-forest-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            The Clinical Protocol
          </Link>
          <Link
            href="#plans"
            className="block text-base font-medium text-stone-800 hover:text-forest-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            Care Plans
          </Link>
          <Link
            href="#about"
            className="block text-base font-medium text-stone-800 hover:text-forest-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            Accreditation
          </Link>
          <div className="pt-2">
            <Link
              href="#inquire"
              className="block w-full text-center px-5 py-3 rounded-full bg-forest-900 text-sand-50 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inquire for Care
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
