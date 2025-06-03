import Hero from '../components/features/Hero';
import Services from '../components/features/Services';
import FeaturedProjects from '../components/features/FeaturedProjects';
import AboutSection from '../components/features/AboutSection';
import Testimonials from '../components/features/Testimonials';
import ContactCTA from '../components/features/ContactCTA';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Space9 | Architecture & Interior Design</title>
        <meta name="description" content="Space9 is a multidisciplinary firm specializing in architecture, interior design, and buildership services." />
      </Helmet>
      
      <Hero />
      <Services />
      <AboutSection />
      <FeaturedProjects />
      <Testimonials />
      <ContactCTA />
    </>
  );
};

export default HomePage;