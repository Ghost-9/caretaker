'use client';

import Link from 'next/link';
import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-sand-200 pt-20 pb-12 border-t border-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-forest-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-sand-100 text-forest-950 flex items-center justify-center font-editorial text-xl font-bold">
                C
              </div>
              <span className="text-2xl font-bold font-editorial text-sand-50 tracking-tight">
                CareTaker
              </span>
            </div>
            <p className="text-xs text-sand-300 font-normal leading-relaxed max-w-sm">
              CareTaker is an accredited hospital attendant and convalescence concierge network providing compassionate bedside presence, post-op support, and senior assistance across Rajasthan.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs text-emerald-400">
              <ShieldCheck size={16} />
              <span>Certified Healthcare Attendant Protocol</span>
            </div>
          </div>

          {/* Disciplines Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-sand-400">
              Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-sand-300 font-medium">
              <li>Bedside Hospital Guardianship</li>
              <li>Post-Surgical Home Recovery</li>
              <li>Senior Memory & Palliative Companionship</li>
              <li>ICU Step-down Continuous Observation</li>
              <li>Outpatient & Dialysis Escort</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-sand-400">
              Platform
            </h4>
            <ul className="space-y-2 text-xs text-sand-300 font-medium">
              <li><Link href="#disciplines" className="hover:text-sand-50 transition-colors">Care Disciplines</Link></li>
              <li><Link href="#protocol" className="hover:text-sand-50 transition-colors">Clinical Protocol</Link></li>
              <li><Link href="#plans" className="hover:text-sand-50 transition-colors">Concierge Plans</Link></li>
              <li><Link href="#inquire" className="hover:text-sand-50 transition-colors">Request Attendant</Link></li>
              <li><Link href="/admin" className="hover:text-sand-50 transition-colors">Admin Dashboard</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-sand-400">
              Concierge Desk
            </h4>
            <div className="space-y-2.5 text-xs text-sand-300">
              <div className="flex items-center space-x-2.5">
                <Phone size={14} className="text-sand-400 shrink-0" />
                <span>+91 98765 43210 (24/7 Hotline)</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail size={14} className="text-sand-400 shrink-0" />
                <span>concierge@caretaker.in</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <MapPin size={14} className="text-sand-400 shrink-0 mt-0.5" />
                <span>Serving Jodhpur, Jaipur & Premier Rajasthan Hospitals</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-sand-400 space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} CareTaker Health Concierge Pvt. Ltd. All rights reserved.
          </div>
          <div className="text-sand-400">
            Designed with agency rigor & clinical ethics.
          </div>
        </div>

      </div>
    </footer>
  );
}
