import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <Section fullHeight className="flex items-center justify-center">
      <div className="text-center">
        <motion.h1
          className="font-serif text-8xl md:text-9xl text-navy-200 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          404
        </motion.h1>
        
        <motion.h2
          className="font-serif text-3xl md:text-4xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Page Not Found
        </motion.h2>
        
        <motion.p
          className="text-neutral-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          The page you are looking for doesn't exist or has been moved.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button href="/" variant="primary">
            Return to Home
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

export default NotFoundPage;