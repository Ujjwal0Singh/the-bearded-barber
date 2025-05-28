'use client';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Robert Johnson",
    role: "Regular Client",
    content: "The best barbershop in town. Always leave looking sharp and feeling great. James is a true artist with the clippers.",
    rating: 5
  },
  {
    name: "Thomas Smith",
    role: "New Client",
    content: "First time here and I'm impressed. The attention to detail is unmatched. Will definitely be coming back.",
    rating: 5
  },
  {
    name: "Marcus Lee",
    role: "Client for 3 years",
    content: "Consistently excellent service. The atmosphere is welcoming and the cuts are always on point.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our clients say about their experience at The Bearded Barber Co.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;