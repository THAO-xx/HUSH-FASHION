import { Link } from 'react-router-dom';
import { ShoppingBag, User, Languages, Share2 } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import React from 'react';

export function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-full bg-white/70 backdrop-blur-lg border border-hush-outline/20 flex justify-between items-center px-8 py-3 z-50 shadow-sm shadow-black/5">
      <Link to="/" className="font-display text-2xl font-extrabold tracking-[0.2em] text-hush-primary hover:opacity-80 transition-opacity">
        HUSH
      </Link>
      
      <div className="hidden md:flex items-center gap-10">
        <NavLink to="/collections">New Arrivals</NavLink>
        <NavLink to="/collections">Collections</NavLink>
        <NavLink to="/">About Us</NavLink>
        <NavLink to="/boutiques">Boutiques</NavLink>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-hush-gray-100 rounded-full transition-colors">
          <ShoppingBag size={20} className="text-hush-primary" />
        </button>
        <button className="p-2 hover:bg-hush-gray-100 rounded-full transition-colors">
          <User size={20} className="text-hush-primary" />
        </button>
      </div>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link 
      to={to} 
      className="font-display text-sm font-semibold text-hush-gray-600 hover:text-hush-primary transition-colors tracking-wide"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-hush-gray-100 border-t border-hush-outline/30 px-16 py-16 mt-20 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2 text-center md:text-left">
          <div className="font-display text-3xl font-bold tracking-widest text-hush-primary">HUSH</div>
          <p className="font-sans text-xs text-hush-gray-600 uppercase tracking-widest">
            © 2024 HUSH LUXURY. CREATED FOR THE VANGUARD.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          <FooterLink>Sustainability</FooterLink>
          <FooterLink>Shipping & Returns</FooterLink>
          <FooterLink>Privacy</FooterLink>
          <FooterLink>Contact</FooterLink>
        </div>

        <div className="flex gap-4">
          <SocialIcon icon={<Languages size={18} />} />
          <SocialIcon icon={<Share2 size={18} />} />
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ children }: { children: React.ReactNode }) {
  return (
    <a href="#" className="font-sans text-sm text-hush-gray-600 hover:text-hush-primary transition-all hover:translate-x-1 block">
      {children}
    </a>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="w-10 h-10 rounded-full border border-hush-outline/50 flex items-center justify-center text-hush-primary hover:bg-hush-primary hover:text-white transition-all cursor-pointer">
      {icon}
    </button>
  );
}
