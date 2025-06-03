import { motion } from 'framer-motion';
import { Testimonial } from '../../data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <motion.div
      className="bg-white p-8 md:p-10 shadow-sm border border-neutral-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 mr-1">
            ★
          </span>
        ))}
      </div>
      
      <p className="text-neutral-700 italic mb-6">{testimonial.text}</p>
      
      <div className="flex items-center">
        {testimonial.image && (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        <div>
          <h4 className="font-medium text-lg">{testimonial.name}</h4>
          <p className="text-neutral-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;