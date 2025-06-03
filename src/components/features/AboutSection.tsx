import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Button from '../ui/Button';

const AboutSection = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Design that transcends time
          </h2>
          
          <p className="text-neutral-600 mb-4">
            Founded in 2015, Space9 has established itself as a leading multidisciplinary design firm, combining architecture, interior design, and buildership under one roof. Our integrated approach ensures seamless project execution from concept to completion.
          </p>
          
          <p className="text-neutral-600 mb-6">
            We believe in creating spaces that not only look exceptional but also enhance the quality of life for those who experience them. Our designs prioritize functionality, sustainability, and timeless aesthetics.
          </p>
          
          <Button href="/about" variant="outline">
            Learn More About Us
          </Button>
        </motion.div>
        
        <motion.div
          className="order-1 md:order-2 h-[400px] md:h-[500px] overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Space9 team working on architectural designs"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutSection;