import { ArrowRight, PencilRuler, Home, Building, Lightbulb, Leaf, Repeat } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <Section className="bg-neutral-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="font-serif text-4xl md:text-5xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-neutral-600 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Space9 provides comprehensive design and construction services, allowing for a seamless experience from concept to completion.
          </motion.p>
        </div>
      </Section>
      
      {/* Architecture */}
      <Section id="architecture">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <PencilRuler size={28} className="text-navy-800 mr-4" />
              <h2 className="font-serif text-3xl">Architecture</h2>
            </div>
            
            <p className="text-neutral-600 mb-6">
              Our architectural services encompass the full spectrum of design, from conceptual sketches to detailed construction documents. We create spaces that respond to their context, fulfill functional requirements, and express a clear design vision.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <ArrowRight size={18} className="text-navy-700 mt-1 mr-2 flex-shrink-0" />
                <span>Residential Architecture (single-family homes, multi-family buildings)</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={18} className="text-navy-700 mt-1 mr-2 flex-shrink-0" />
                <span>Commercial Architecture (offices, retail, hospitality)</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={18} className="text-navy-700 mt-1 mr-2 flex-shrink-0" />
                <span>Cultural & Institutional Buildings</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={18} className="text-navy-700 mt-1 mr-2 flex-shrink-0" />
                <span>Adaptive Reuse & Renovation</span>
              </li>
            </ul>
            
            <Button href="/contact" variant="primary">
              Inquire About Architecture
            </Button>
          </motion.div>
          
          <motion.div
            className="h-[400px] md:h-[500px] overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Architectural design by Space9"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </Section>
      
      {/* Interior Design */}
      <Section id="interior-design" className="bg-neutral-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            className="order-2 md:order-1 h-[400px] md:h-[500px] overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Interior design by Space9"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <Home size={28} className="text-navy-800 mr-4" />
              <h2 className="font-serif text-3xl">Interior Design</h2>
            </div>
            
            <p className="text-neutral-600 mb-6">
              Our interior design services transform spaces into environments that reflect the client's identity and support their activities. We pay careful attention to materials, lighting, furniture, and details to create cohesive, functional, and beautiful interiors.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <ArrowRight size={18} className="text-navy-700 mt-1 mr-2 flex-shrink-0" />
                <span>Residential Interiors</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={18} className="text-navy-700 mt-1 mr-2 flex-shrink-0" />
                <span>Commercial & Hospitality Interiors</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={18} className="text-navy-700 mt-1 mr-2 flex-shrink-0" />
                <span>Custom Furniture Design</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={18} className="text-navy-700 mt-1 mr-2 flex-shrink-0" />
                <span>Material & Finish Selection</span>
              </li>
            </ul>
            
            <Button href="/contact" variant="primary">
              Inquire About Interior Design
            </Button>
          </motion.div>
        </div>
      </Section>
      
      {/* Buildership */}
      <Section id="buildership">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <Building size={28} className="text-navy-800 mr-4" />
              <h2 className="font-serif text-3xl">Buildership</h2>
            </div>
            
            <p className="text-neutral-600 mb-6">
              Our buildership services ensure that designs are faithfully executed with quality craftsmanship. We manage the construction process from start to finish, coordinating trades, monitoring schedules, and maintaining rigorous quality control.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <ArrowRight size={18} className="text-navy-700 mt-1 mr-2 flex-shrink-0" />
                <span>Pre-construction Planning</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={18} className="text-navy-700 mt-1 mr-2 flex-shrink-0" />
                <span>Construction Management</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={18} className="text-navy-700 mt-1 mr-2 flex-shrink-0" />
                <span>Quality Assurance</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={18} className="text-navy-700 mt-1 mr-2 flex-shrink-0" />
                <span>Project Closeout & Handover</span>
              </li>
            </ul>
            
            <Button href="/contact" variant="primary">
              Inquire About Buildership
            </Button>
          </motion.div>
          
          <motion.div
            className="h-[400px] md:h-[500px] overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Construction project by Space9"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </Section>
      
      {/* Our Approach */}
      <Section className="bg-navy-900 text-white">
        <SectionTitle
          title="Our Approach"
          subtitle="We believe in a holistic design and construction process that considers all aspects of a project from the beginning."
          center
          light
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div
            className="bg-navy-800 p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Lightbulb size={36} className="text-white mb-6" />
            <h3 className="font-serif text-xl text-white mb-4">Collaborative Process</h3>
            <p className="text-neutral-300">
              We work closely with clients throughout the entire process, ensuring their vision is understood and realized in every detail.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-navy-800 p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Leaf size={36} className="text-white mb-6" />
            <h3 className="font-serif text-xl text-white mb-4">Sustainable Design</h3>
            <p className="text-neutral-300">
              Environmental consciousness informs our design decisions, from material selection to energy systems, creating responsible and enduring spaces.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-navy-800 p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Repeat size={36} className="text-white mb-6" />
            <h3 className="font-serif text-xl text-white mb-4">Integrated Delivery</h3>
            <p className="text-neutral-300">
              Our multidisciplinary approach ensures seamless coordination between design and construction, reducing errors and optimizing outcomes.
            </p>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default ServicesPage;