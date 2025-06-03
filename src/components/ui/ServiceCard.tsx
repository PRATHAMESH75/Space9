import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  linkTo: string;
}

const ServiceCard = ({ title, description, icon, linkTo }: ServiceCardProps) => {
  return (
    <motion.div
      className="bg-white p-8 md:p-10 h-full flex flex-col border border-neutral-100 hover:border-navy-200 transition-colors shadow-sm hover:shadow-md"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-navy-800 mb-6">{icon}</div>
      
      <h3 className="font-serif text-xl md:text-2xl mb-4">{title}</h3>
      
      <p className="text-neutral-600 mb-6 flex-grow">{description}</p>
      
      <Link
        to={linkTo}
        className="inline-flex items-center text-navy-800 border-b border-navy-800/30 pb-1 hover:border-navy-800 mt-auto transition-colors group"
      >
        Learn More{' '}
        <ArrowRight
          size={16}
          className="ml-2 transition-transform group-hover:translate-x-1"
        />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;