import Section from '../ui/Section';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

const ContactCTA = () => {
  return (
    <Section className="bg-navy-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to transform your space?
        </motion.h2>
        
        <motion.p
          className="text-neutral-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Let's collaborate to create spaces that inspire, function perfectly, and stand the test of time.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

export default ContactCTA;