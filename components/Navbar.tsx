'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-x-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-600 flex items-center justify-center">
              <span className="text-white font-bold text-2xl tracking-tighter">CG</span>
            </div>
            <div>
              <Link href="/" className="font-display text-2xl font-semibold tracking-tighter">
                Computer Generation
              </Link>
              <span className="text-[10px] text-sky-500 block -mt-1 tracking-[1.5px]">BUSINESS SOLUTIONS</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-x-8 text-sm font-medium">
            <Link href="/server" className="hover:text-sky-400 transition">Server</Link>
            <Link href="/servizi" className="hover:text-sky-400 transition">Servizi</Link>
            <Link href="/partner" className="hover:text-sky-400 transition">Partner</Link>
          </div>

          <div className="hidden lg:flex items-center gap-x-4">
            <Link 
              href="#contatti" 
              className="px-5 py-2 text-sm font-semibold rounded-2xl border border-slate-700 hover:bg-slate-900 transition"
            >
              Contattaci
            </Link>
            <Link 
              href="#contatti" 
              className="px-5 py-2 text-sm font-semibold bg-sky-600 hover:bg-sky-500 rounded-2xl transition"
            >
              Richiedi Preventivo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-slate-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-800 py-6">
            <div className="flex flex-col gap-y-4 text-sm font-medium px-2">
              <Link href="/server" className="py-1">Server</Link>
              <Link href="/servizi" className="py-1">Servizi</Link>
              <Link href="/partner" className="py-1">Partner</Link>
              <div className="pt-4 border-t border-slate-700 flex flex-col gap-y-3">
                <Link href="#contatti" className="py-3 text-center border border-slate-700 rounded-2xl">Contattaci</Link>
                <Link href="#contatti" className="py-3 text-center bg-sky-600 font-semibold rounded-2xl">Richiedi Preventivo</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
