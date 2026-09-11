import React from 'react';
import { Award, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-luxuryBlack text-cream border-t border-subtleGold/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold uppercase tracking-widest text-xs mb-3">About The Founder</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            Elegance Meets <span className="text-gold italic">Strategic Vision</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="text-cream/80 text-base sm:text-lg font-light leading-relaxed">
            With years of mastery in high-end event curation and luxury marketing, Krina Gindra transforms ordinary visions into extraordinary milestones for elite brands and discerning clientele.
          </p>
        </div>

        {/* Features / Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-8 border border-subtleGold/20 bg-neutral-900/50 hover:border-gold transition duration-300">
            <Award className="w-10 h-10 text-gold mb-6" />
            <h3 className="font-serif text-xl font-semibold mb-3">Uncompromised Luxury</h3>
            <p className="text-cream/70 text-sm font-light leading-relaxed">
              Every detail is meticulously curated to reflect absolute sophistication, ensuring your brand stands out with timeless grace.
            </p>
          </div>

          <div className="p-8 border border-subtleGold/20 bg-neutral-900/50 hover:border-gold transition duration-300">
            <Target className="w-10 h-10 text-gold mb-6" />
            <h3 className="font-serif text-xl font-semibold mb-3">Targeted Impact</h3>
            <p className="text-cream/70 text-sm font-light leading-relaxed">
              We blend creative artistry with data-driven marketing strategies to maximize reach and elevate high-value audience engagement.
            </p>
          </div>

          <div className="p-8 border border-subtleGold/20 bg-neutral-900/50 hover:border-gold transition duration-300">
            <Users className="w-10 h-10 text-gold mb-6" />
            <h3 className="font-serif text-xl font-semibold mb-3">Seamless Execution</h3>
            <p className="text-cream/70 text-sm font-light leading-relaxed">
              From grand corporate galas to exclusive digital campaigns, our end-to-end management guarantees a flawless experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}