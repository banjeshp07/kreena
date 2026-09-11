import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-luxuryBlack text-cream pt-20 overflow-hidden">
      {/* Background Luxury Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 py-20 text-center relative z-10">
        {/* Subtitle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-subtleGold/30 bg-subtleGold/10 text-gold text-xs tracking-widest uppercase mb-6 animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Events & Marketing Excellence</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Crafting Unforgettable <span className="text-gold italic font-normal">Experiences</span> & Luxury Brands
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-cream/80 text-base sm:text-lg font-light tracking-wide mb-10 leading-relaxed">
          Welcome to the world of Krina Gindra. We curate high-end corporate events, sophisticated marketing campaigns, and impactful social strategies designed for elite brands.
        </p>

        {/* Call To Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-gold text-luxuryBlack font-medium tracking-wider uppercase text-sm hover:bg-subtleGold transition duration-300 flex items-center justify-center gap-3 group"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 border border-gold/40 text-cream font-medium tracking-wider uppercase text-sm hover:border-gold hover:text-gold transition duration-300"
          >
            Explore Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}