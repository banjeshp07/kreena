import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-luxuryBlack text-cream py-12 border-t border-subtleGold/20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <span className="font-serif text-xl tracking-wider text-gold">KRINA GINDRA</span>
          <p className="text-cream/60 text-xs tracking-widest uppercase mt-1">Events & Marketing Excellence</p>
        </div>
        
        <div className="text-xs text-cream/50 tracking-wider">
          &copy; {new Date().getFullYear()} Krina Gindra. All Rights Reserved. Designed with Luxury.
        </div>
      </div>
    </footer>
  );
}