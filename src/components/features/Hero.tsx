import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';


interface HeroImage {
  url: string;
  alt: string;
}

const heroImages: HeroImage[] = [
  {
    url:'public/images/home-page-images/new-office.jpg',
    alt: 'Modern architectural building with clean lines',
  },
  {
    url: 'public/images/home-page-images/cabin.jpg',
    alt: 'Elegant interior design with natural light',
  },
  {
    url: 'public/images/home-page-images/chandelier-pune.jpg',
    alt: 'Residential architecture with clean geometric shapes',
  },
];


const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background images with crossfade */}
      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: index === currentImageIndex ? 1 : 0,
              zIndex: index === currentImageIndex ? 1 : 0,
            }}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 mt-24 md:mt-0">
        <motion.div
          className="max-w-3xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Transforming spaces with timeless design
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Architecture, Interior Design & Buildership Excellence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/projects" variant="primary" size="lg">
              Explore Our Work
            </Button>
            
            <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Get in Touch
            </Button>
          </div>
          
          <div className="mt-16 hidden md:block">
            <a
              href="#services"
              className="inline-flex items-center text-white hover:text-white/80 transition-colors"
            >
              <span className="mr-2">Scroll to discover</span>
              <ArrowRight size={16} className="animate-bounce" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;