'use client';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Classic Haircut",
    description: "Traditional cut with clippers and scissors for a clean, sharp look.",
    price: "$35",
    duration: "30 min",
    icon: "✂️"
  },
  {
    title: "Beard Trim",
    description: "Precision shaping and trimming to maintain your beard's perfect form.",
    price: "$25",
    duration: "20 min",
    icon: "🧔"
  },
  {
    title: "Hot Towel Shave",
    description: "Traditional straight razor shave with hot towels and premium products.",
    price: "$40",
    duration: "45 min",
    icon: "🪒"
  },
  {
    title: "Hair & Beard Combo",
    description: "Complete grooming package with haircut and beard service.",
    price: "$55",
    duration: "50 min",
    icon: "👨"
  },
  {
    title: "Kid's Cut",
    description: "Specialized service for our younger clients in a comfortable environment.",
    price: "$25",
    duration: "25 min",
    icon: "👦"
  },
  {
    title: "Hair Coloring",
    description: "Professional coloring services to cover gray or change your look.",
    price: "$60+",
    duration: "60 min",
    icon: "🎨"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: "0px 0px -100px 0px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Premium grooming services tailored to your individual style and needs.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: false, margin: "0px 0px -100px 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-600 font-bold">{service.price}</span>
                  <span className="text-gray-500">{service.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;