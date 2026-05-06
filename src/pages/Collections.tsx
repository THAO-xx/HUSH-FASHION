import { motion } from 'motion/react';
import { Share2, Plus } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: "Monolith 0.1",
    price: "€1,250",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1200",
    category: "Outerwear",
    colSpan: "md:col-span-2",
  },
  {
    id: 2,
    name: "Chrome Axis",
    price: "€890",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=800",
    category: "Accessories",
    colSpan: "md:col-span-1",
  },
  {
    id: 3,
    name: "Glacier Vest",
    price: "€980",
    image: "https://images.unsplash.com/photo-1591047139829-d91aec36caea?auto=format&fit=crop&q=80&w=800",
    category: "Essentials",
    colSpan: "md:col-span-1",
  },
  {
    id: 4,
    name: "Orbital Silhouette",
    price: "€2,100",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200",
    category: "Couture",
    colSpan: "md:col-span-2",
  }
];

export function Collections() {
  return (
    <div className="pt-32 px-6 md:px-12 min-h-screen">
      <header className="mb-20 flex flex-col md:flex-row justify-between items-end gap-10">
        <div className="space-y-6">
          <div className="font-sans text-xs font-bold tracking-[0.3em] text-hush-gray-500 uppercase">
            Collection 2024 / 2025
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter">
            The Vanguard Series
          </h1>
        </div>
        <p className="text-hush-gray-500 max-w-xs font-sans text-sm leading-relaxed pb-2">
          An exploration of volume and void. Designed using parametric modeling to follow the natural rhythm of human motion.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`group relative rounded-[3rem] overflow-hidden h-[600px] bg-hush-gray-200 ${product.colSpan}`}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
              <div className="flex justify-between items-end">
                <div className="text-white space-y-1">
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">
                    {product.category}
                  </span>
                  <h3 className="text-3xl font-display font-bold">
                    {product.name}
                  </h3>
                  <p className="text-lg opacity-90">{product.price}</p>
                </div>
                <div className="flex gap-2">
                  <button className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-white hover:text-hush-primary transition-all">
                    <Share2 size={18} />
                  </button>
                  <button className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-white hover:text-hush-primary transition-all">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Static badge */}
            <div className="absolute top-8 right-8 glass-card border-none px-4 py-2 rounded-full text-[10px] font-bold tracking-widest text-hush-primary uppercase transition-opacity group-hover:opacity-0">
              Available
            </div>
          </motion.div>
        ))}
      </div>

      {/* See More Section */}
      <div className="py-20 flex justify-center">
        <button className="pill-button border border-hush-outline text-hush-primary hover:bg-hush-primary hover:text-white transition-all">
          View All Series (14)
        </button>
      </div>
    </div>
  );
}
