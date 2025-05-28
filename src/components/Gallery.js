'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  { id: 1, src: '/Best_High_Fade_Haircuts_for_Men_2_1.webp', alt: 'Barber working on a fade haircut' },
  { id: 2, src: '/Barberian_-_Beard_Trim.webp', alt: 'Beard trimming service' },
  { id: 3, src: '/hot-towel-shave.webp', alt: 'Hot towel shave in progress' },
  { id: 4, src: '/barbershop-revival-francisco-segarra.jpg', alt: 'Barbershop interior' },
  { id: 5, src: '/Top-10-Salons-In-India.jpg', alt: 'Hair styling service' },
  { id: 6, src: '/pexels-photo-7697212.webp', alt: 'Client getting a haircut' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into our barbershop and the craftsmanship we deliver.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium text-lg">View</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
