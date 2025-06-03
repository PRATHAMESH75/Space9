import { PencilRuler, Home, Building } from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';

const Services = () => {
  return (
    <Section id="services" className="bg-neutral-50">
      <SectionTitle
        title="Our Services"
        subtitle="We provide end-to-end solutions from conceptualization to construction, ensuring every detail is meticulously crafted to perfection."
        center
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <ServiceCard
          title="Architecture"
          description="We create architectural designs that seamlessly blend aesthetics and functionality, focusing on sustainable solutions that stand the test of time."
          icon={<PencilRuler size={36} />}
          linkTo="/services#architecture"
        />
        
        <ServiceCard
          title="Interior Design"
          description="Our interior design service transforms spaces into personalized environments that reflect your style, needs, and aspirations, with keen attention to detail."
          icon={<Home size={36} />}
          linkTo="/services#interior-design"
        />
        
        <ServiceCard
          title="Buildership"
          description="From blueprint to reality, our construction expertise ensures your project is executed with precision, using quality materials and craftsmanship."
          icon={<Building size={36} />}
          linkTo="/services#buildership"
        />
      </div>
    </Section>
  );
};

export default Services;