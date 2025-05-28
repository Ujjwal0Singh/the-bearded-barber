'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <h3 className="text-xl font-bold text-amber-500 mb-4">The Bearded Barber Co.</h3>
            <p className="text-gray-400">
              Premium grooming services with traditional techniques and modern style.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-gray-400 hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">Services</Link></li>
              <li><Link href="#gallery" className="text-gray-400 hover:text-amber-500 transition-colors">Gallery</Link></li>
              <li><Link href="#team" className="text-gray-400 hover:text-amber-500 transition-colors">Our Barbers</Link></li>
              <li><Link href="#booking" className="text-gray-400 hover:text-amber-500 transition-colors">Book Now</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              <p>123 Barber Street</p>
              <p>Cityville, CV 12345</p>
              <p className="mt-2">Phone: (123) 456-7890</p>
              <p>Email: info@beardedbarberco.com</p>
            </address>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="text-gray-400 space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM - 3:00 PM</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500"
        >
          <p>&copy; {new Date().getFullYear()} The Bearded Barber Co. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;