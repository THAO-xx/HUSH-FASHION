/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { Collections } from './pages/Collections';
import { Boutiques } from './pages/Boutiques';
import { motion, AnimatePresence } from 'motion/react';
import React from 'react';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen selection:bg-hush-primary selection:text-white">
        <Navbar />
        
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/collections" element={<PageWrapper><Collections /></PageWrapper>} />
              <Route path="/boutiques" element={<PageWrapper><Boutiques /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

