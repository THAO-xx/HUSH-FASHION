import { motion } from 'motion/react';
import { ArrowRight, Globe, Layers, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';

export function Home() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="px-6 md:px-12 mb-20">
        <div className="relative h-[85vh] rounded-[3rem] overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=1600" 
            alt="HUSH Hero" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex flex-col justify-end p-12 md:p-20">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-display text-5xl md:text-8xl font-bold text-white tracking-tight max-w-4xl leading-tight"
            >
              The Origin of Fluidity
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/80 text-lg md:text-xl font-sans mt-6 max-w-xl"
            >
              Redefining textile architecture through monochrome minimalism and advanced digital tailoring.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Origin Section */}
      <section className="px-6 md:px-12 py-20 flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 bg-hush-gray-200 px-4 py-1 rounded-full text-xs font-bold tracking-widest text-hush-gray-600 uppercase">
            <Sparkles size={14} /> The Vanguard
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Digital Craft & <br />Tactile Innovation
          </h2>
          <p className="text-hush-gray-500 max-w-lg leading-relaxed">
            Our workshop merges traditional savoir-faire with algorithmic design patterns. Each piece is engineered to react to movement, creating a living silhouette that evolves with the wearer.
          </p>
          <Link to="/collections" className="pill-button bg-hush-primary text-white inline-flex items-center gap-3 hover:shadow-xl hover:shadow-black/10">
            Explore Collection <ArrowRight size={18} />
          </Link>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <div className="rounded-[2rem] overflow-hidden h-64 bg-hush-gray-300">
              <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800" alt="Detail 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-[2rem] overflow-hidden h-40 glass-card flex items-center justify-center p-8 text-center uppercase tracking-widest text-[10px] font-bold text-hush-gray-600">
              Liquid <br /> Architecture
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-[2rem] overflow-hidden h-40 liquid-chrome-gradient p-1" />
            <div className="rounded-[2rem] overflow-hidden h-64 bg-hush-gray-200">
               <img src="https://images.unsplash.com/photo-1549174291-a1288599292c?auto=format&fit=crop&q=80&w=800" alt="Detail 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Bento Feature Section */}
      <section className="px-6 md:px-12 py-20 bg-hush-gray-100 rounded-[4rem] mx-6 md:mx-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Globe className="text-hush-primary" />}
            title="Global Presence"
            description="From Paris to Tokyo, HUSH boutiques serve as sanctuaries of silence in the urban chaos."
          />
          <FeatureCard 
            icon={<Layers className="text-hush-primary" />}
            title="Material Future"
            description="Utilizing recycled polymers and lab-grown fibers to create garments that return to the earth."
          />
          <FeatureCard 
            icon={<Sparkles className="text-hush-primary" />}
            title="The Origin"
            description="Every collection starts with a singular mathematical theorem, translated into fabric."
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="glass-card p-10 rounded-[3rem] space-y-6 hover:shadow-2xl hover:shadow-black/[0.03] transition-all">
      <div className="w-14 h-14 rounded-2xl bg-white border border-hush-outline/30 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-display text-2xl font-bold tracking-tight">{title}</h3>
      <p className="text-hush-gray-500 font-sans leading-relaxed">{description}</p>
    </div>
  );
}
