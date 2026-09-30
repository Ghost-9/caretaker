'use client';

import Link from 'next/link';
import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import StarburstIcon from './StarburstIcon';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <StarburstIcon className="w-7 h-7 text-amber-500" fill="#F59E0B" />
              <span className="text-2xl font-serif font-bold text-white tracking-tight">
                CareTaker
              </span>
            </div>
            <p className="text-xs text-stone-400 font-normal leading-relaxed max-w-sm">
              CareTaker is a dedicated hospital attendant and private recovery concierge network providing compassionate bedside presence, post-op support, and senior assistance.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs text-amber-400/90 font-medium">
              <ShieldCheck size={16} />
              <span>Accredited Healthcare Concierge Protocol</span>
            </div>
          </div>

          {/* Protocols Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Care Protocols
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>CareTaker Starter &bull; Essential Support</li>
              <li>CareTaker Balance &bull; 12-Hour Continuous</li>
              <li>CareTaker Performance &bull; Post-Op Recovery</li>
              <li>CareTaker Premier &bull; 24/7 Dedicated Concierge</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#plans" className="hover:text-white transition-colors">Protocols</Link></li>
              <li><Link href="#inquire" className="hover:text-white transition-colors">Inquire</Link></li>
              <li><Link href="/admin" className="hover:text-white transition-colors">Intake Portal</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Inquiries
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li className="flex items-center space-x-2">
                <Phone size={13} className="text-stone-400 shrink-0" />
                <span>+91 94142 80566</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={13} className="text-stone-400 shrink-0" />
                <span>care@caretaker.org</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={13} className="text-stone-400 shrink-0" />
                <span>Jaipur & Jodhpur</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} CareTaker Health Technologies. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-stone-400 text-xs">
            <span>HIPAA-Compliant Protocols</span>
            <span>&bull;</span>
            <span>24/7 Rapid Bedside Response</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
