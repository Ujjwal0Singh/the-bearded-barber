'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const barbers = [
  {
    name: "James Wilson",
    role: "Master Barber",
    bio: "With over 15 years of experience, James specializes in classic and modern haircuts.",
    image: "/booksy.jpeg"
  },
  {
    name: "Mike Rodriguez",
    role: "Beard Specialist",
    bio: "Mike's precision beard work has earned him a loyal following among our clients.",
    image: "/Michael-Rodriguez-biz-photo.png"
  },
  {
    name: "David Chen",
    role: "Stylist",
    bio: "David brings contemporary styling techniques to create your perfect look.",
    image: "/front-view-male-barber-holding-scissors-barbershop.jpg"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Barbers</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Our skilled team is dedicated to providing you with the best grooming experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {barbers.map((barber, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{barber.name}</h3>
                <p className="text-amber-500 mb-3">{barber.role}</p>
                <p className="text-gray-300">{barber.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
