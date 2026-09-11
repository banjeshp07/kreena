import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 text-cream border-t border-subtleGold/10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold uppercase tracking-widest text-xs mb-3">Get In Touch</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            Begin Your <span className="text-gold italic">Luxury Journey</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="text-cream/80 text-base font-light leading-relaxed">
            Connect with us to curate your next high-end event or elevate your brand's digital presence.
          </p>
        </div>

        {submitted ? (
          <div className="p-10 border border-gold bg-luxuryBlack text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-gold mx-auto animate-bounce" />
            <h3 className="font-serif text-2xl font-semibold">Enquiry Received</h3>
            <p className="text-cream/70 text-sm font-light max-w-md mx-auto">
              Thank you for reaching out. Our executive concierge will review your requirements and get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-luxuryBlack p-8 sm:p-12 border border-subtleGold/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gold mb-2">Full Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Lord / Lady / Enterprise"
                  className="w-full bg-neutral-900 border border-subtleGold/30 px-4 py-3 text-cream focus:outline-none focus:border-gold transition text-sm"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gold mb-2">Professional Email</label>
                <input 
                  type="email" 
                  required 
                  placeholder="concierge@brand.com"
                  className="w-full bg-neutral-900 border border-subtleGold/30 px-4 py-3 text-cream focus:outline-none focus:border-gold transition text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gold mb-2">Service Required</label>
              <select className="w-full bg-neutral-900 border border-subtleGold/30 px-4 py-3 text-cream focus:outline-none focus:border-gold transition text-sm">
                <option>Events Curation</option>
                <option>High-End Advertising</option>
                <option>Social Media Strategy</option>
                <option>Targeted Marketing</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gold mb-2">Project Details</label>
              <textarea 
                rows="4" 
                required 
                placeholder="Describe your vision, timeline, and expectations..."
                className="w-full bg-neutral-900 border border-subtleGold/30 px-4 py-3 text-cream focus:outline-none focus:border-gold transition text-sm"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-gold text-luxuryBlack font-medium tracking-widest uppercase text-sm hover:bg-subtleGold transition duration-300 flex items-center justify-center gap-2"
            >
              <span>Submit Enquiry</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}