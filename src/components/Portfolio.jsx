import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "The Royal Crown Gala",
      category: "Luxury Corporate Event",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
      description: "An exclusive 3-day international summit and gala managed for elite stakeholders."
    },
    {
      title: "Vogue Haute Couture Launch",
      category: "High-End Advertising & PR",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
      description: "A high-impact brand campaign and runway launch generating massive global reach."
    },
    {
      title: "Aura Luxury Residences",
      category: "Social Media & Marketing",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive digital growth and aesthetic grid curation for premium real estate."
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-luxuryBlack text-cream border-t border-subtleGold/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold uppercase tracking-widest text-xs mb-3">Selected Work</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            Masterpieces of <span className="text-gold italic">Distinction</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="text-cream/80 text-base sm:text-lg font-light leading-relaxed">
            A showcase of iconic events, elite advertising campaigns, and luxury brand transformations.
          </p>
        </div>

        {/* Portfolio Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden border border-subtleGold/20 bg-neutral-900"
            >
              <div className="h-80 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxuryBlack via-luxuryBlack/40 to-transparent"></div>
              </div>
              
              <div className="p-6 relative z-10 -mt-20">
                <span className="text-gold text-xs tracking-widest uppercase font-medium block mb-2">
                  {project.category}
                </span>
                <h3 className="font-serif text-xl font-semibold mb-2 text-cream">
                  {project.title}
                </h3>
                <p className="text-cream/70 text-sm font-light mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-gold text-xs tracking-widest uppercase group-hover:underline cursor-pointer">
                  <span>View Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}