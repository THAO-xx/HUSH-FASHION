import { motion } from 'motion/react';
import { MapPin, ArrowUpRight, Phone, Mail } from 'lucide-react';

const BOUTIQUES = [
  {
    city: "Paris",
    address: "24 Rue du Faubourg Saint-Honoré",
    image: "https://images.unsplash.com/photo-1502602898657-3e91724ae33e?auto=format&fit=crop&q=80&w=1200",
    status: "Flagship",
    phone: "+33 1 45 67 89 00"
  },
  {
    city: "Tokyo",
    address: "5 Chome-10-1 Minamiaoyama, Minato City",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1200",
    status: "Concept Store",
    phone: "+81 3 1234 5678"
  },
  {
    city: "New York",
    address: "84 Mercer St, Soho District",
    image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&q=80&w=1200",
    status: "Boutique",
    phone: "+1 212 987 6543"
  }
];

export function Boutiques() {
  return (
    <div className="pt-32 min-h-screen">
      <section className="px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        <header className="text-center max-w-2xl mx-auto space-y-6">
          <h1 className="font-display text-6xl font-extrabold tracking-tight">Flagship Boutiques</h1>
          <p className="text-hush-gray-500 font-sans leading-relaxed">
            Sanctuaries of design where monochrome architecture meets tactile experience. Each space is designed to resonate with its local urban fabric while maintaining the HUSH silence.
          </p>
        </header>

        <div className="space-y-32">
          {BOUTIQUES.map((boutique, index) => (
            <motion.div 
              key={boutique.city}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="flex-1 w-full aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl shadow-black/10">
                <img 
                  src={boutique.image} 
                  alt={boutique.city} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <article className="flex-1 space-y-8 text-center md:text-left">
                <div className="inline-block px-6 py-2 rounded-full bg-hush-gray-100 text-[10px] font-bold tracking-[0.3em] uppercase text-hush-gray-500">
                  {boutique.status}
                </div>
                <h2 className="font-display text-5xl font-bold tracking-tight">{boutique.city}</h2>
                <div className="space-y-4 text-hush-gray-500">
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <MapPin size={18} />
                    <span>{boutique.address}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <Phone size={18} />
                    <span>{boutique.phone}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <Mail size={18} />
                    <span>contact.{boutique.city.toLowerCase()}@hush.com</span>
                  </div>
                </div>
                <div className="pt-6">
                  <button className="pill-button border border-hush-primary text-hush-primary inline-flex items-center gap-3 hover:bg-hush-primary hover:text-white">
                    Book Private Appointment <ArrowUpRight size={18} />
                  </button>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global Map CTA */}
      <section className="px-6 md:px-12 py-32 mt-20">
        <div className="h-96 rounded-[4rem] bg-hush-gray-600 relative overflow-hidden flex items-center justify-center text-center p-12 group">
          <div className="absolute inset-0 opacity-20 grayscale brightness-200 group-hover:scale-105 transition-transform duration-1000">
             <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1600" alt="Map" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="relative z-10 space-y-8">
            <h3 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">Worldwide Sanctuaries</h3>
            <p className="text-white/60 max-w-lg mx-auto uppercase tracking-widest text-[10px] font-bold leading-loose">
              Stockholm / Berlin / Seoul / Shanghai / Milan / London / Zurich
            </p>
            <button className="pill-button bg-white text-hush-primary hover:scale-105">
              Locate All Points of Sale
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
