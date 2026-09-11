import React from 'react';
import { Calendar, Megaphone, Share2, TrendingUp } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <Calendar className="w-8 h-8 text-gold" />,
      title: "Events Curation",
      description: "Designing and managing bespoke corporate galas, high-profile product launches, and exclusive luxury private gatherings."
    },
    {
      icon: <Megaphone className="w-8 h-8 text-gold" />,
      title: "High-End Advertising",
      description: "Crafting sophisticated ad campaigns across premium print and digital mediums to capture the attention of elite audiences."
    },
    {
      icon: <Share2 className="w-8 h-8 text-gold" />,
      title: "Social Media Strategy",
      description: "Curating refined aesthetic grids, brand storytelling, and high-engagement curation across luxury digital networks."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-gold" />,
      title: "Targeted Marketing",
      description: "Deploying sophisticated growth strategies and data-driven marketing frameworks to scale high-value brand positioning."
    }
  ];

  return (
    <section id="services" className="py-24 bg-neutral-950 text-cream border-t border-subtleGold/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold uppercase tracking-widest text-xs mb-3">Our Expertise</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            Curated <span className="text-gold italic">Services</span> For Elite Brands
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="text-cream/80 text-base sm:text-lg font-light leading-relaxed">
            We offer comprehensive, luxury-driven solutions tailored to elevate your brand presence across every touchpoint.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              className="p-8 border border-subtleGold/20 bg-luxuryBlack hover:border-gold transition duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 p-3 bg-subtleGold/10 inline-block rounded-sm group-hover:bg-gold/20 transition">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-cream group-hover:text-gold transition">
                  {service.title}
                </h3>
                <p className="text-cream/70 text-sm font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-subtleGold/10 text-xs tracking-widest uppercase text-gold">
                Discover More &rarr;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}