'use client';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      
      <section id="home" className="w-full h-screen">
        <Hero />
      </section>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <Services />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <Gallery />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <Team />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <Testimonials />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <Booking />
        </motion.div>
      </AnimatePresence>

      <Footer />
    </main>
  );
}