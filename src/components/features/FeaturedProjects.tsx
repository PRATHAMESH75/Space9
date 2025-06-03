import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { featuredProjects } from '../../data/projects';

const FeaturedProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <Section>
      <SectionTitle
        title="Featured Projects"
        subtitle="Explore a selection of our notable works showcasing our expertise in architecture, interior design, and buildership."
      />

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {featuredProjects.map((project) => (
              <div key={project.id} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="md:order-2">
                    <motion.div
                      className="h-[400px] md:h-full overflow-hidden"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>

                  <div className="flex flex-col justify-center md:order-1">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-navy-700 uppercase text-sm tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl mt-2 mb-4">
                        {project.title}
                      </h3>
                      <p className="text-neutral-600 mb-6">{project.excerpt}</p>
                      <Button href={`/projects/${project.id}`} variant="primary">
                        View Project
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {featuredProjects.length > 1 && (
          <div className="flex justify-end mt-8 space-x-4">
            <button
              onClick={goToPrev}
              className="p-3 border border-neutral-200 hover:border-navy-700 hover:text-navy-700 transition-colors"
              aria-label="Previous project"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="p-3 border border-neutral-200 hover:border-navy-700 hover:text-navy-700 transition-colors"
              aria-label="Next project"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>

      <div className="text-center mt-16">
        <Button href="/projects" variant="outline">
          View All Projects
        </Button>
      </div>
    </Section>
  );
};

export default FeaturedProjects;