import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-luxuryBlack/90 backdrop-blur-md border-b border-subtleGold/20 text-cream">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo / Name */}
        <a href="#" className="font-serif text-2xl tracking-wider text-gold hover:opacity-90 transition">
          KRINA GINDRA
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm tracking-widest uppercase">
          <a href="#about" className="hover:text-gold transition">About</a>
          <a href="#services" className="hover:text-gold transition">Services</a>
          <a href="#portfolio" className="hover:text-gold transition">Portfolio</a>
          <a href="#contact" className="px-5 py-2.5 border border-gold text-gold hover:bg-gold hover:text-luxuryBlack transition duration-300">
            Enquire Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gold focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-luxuryBlack border-b border-subtleGold/20 px-6 py-6 space-y-4 text-center">
          <a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-gold tracking-widest uppercase text-sm">About</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block hover:text-gold tracking-widest uppercase text-sm">Services</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="block hover:text-gold tracking-widest uppercase text-sm">Portfolio</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="inline-block px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-luxuryBlack transition">
            Enquire Now
          </a>
        </div>
      )}
    </nav>
  );
}