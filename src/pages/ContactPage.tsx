import { Mail, Phone, MapPin } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/ui/ContactForm';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="pt-24 md:pt-32">
      <Section className="bg-neutral-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="font-serif text-4xl md:text-5xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-neutral-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We'd love to hear about your project. Reach out to us for a consultation or just to say hello.
          </motion.p>
        </div>
      </Section>
      
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              title="Send Us a Message"
              subtitle="Tell us about your project, and we'll get back to you as soon as possible."
            />
            
            <ContactForm />
          </motion.div>
          
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-neutral-50 p-8 h-full">
              <h2 className="font-serif text-2xl mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin size={24} className="text-navy-800 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2">Office Location</h3>
                    <p className="text-neutral-600">
                      123 Design Avenue<br />
                      Creative District<br />
                      Los Angeles, CA 90210
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-navy-800 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2">Email Us</h3>
                    <p className="text-neutral-600">
                      <a href="mailto:info@space9.com" className="hover:text-navy-700 transition-colors">
                        info@space9.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="text-navy-800 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2">Call Us</h3>
                    <p className="text-neutral-600">
                      <a href="tel:+11234567890" className="hover:text-navy-700 transition-colors">
                        +1 (123) 456-7890
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-medium mb-4">Office Hours</h3>
                <p className="text-neutral-600 mb-2">Monday – Friday: 9:00 AM – 6:00 PM</p>
                <p className="text-neutral-600">Weekends: By appointment only</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
      
      <Section className="px-0 pb-0">
        <div className="h-[400px] md:h-[500px] w-full">
          {/* Embed Google Map here - using an iframe placeholder */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1596584408015!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Space9 Location"
          ></iframe>
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;