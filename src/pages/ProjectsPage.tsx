import { useState } from 'react';
import Section from '../components/ui/Section';
import ProjectFilter from '../components/ui/ProjectFilter';
import ProjectCard from '../components/ui/ProjectCard';
import { projects, projectCategories } from '../data/projects';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

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
            Our Projects
          </motion.h1>
          <motion.p
            className="text-neutral-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our portfolio of architectural, interior design, and buildership projects that showcase our integrated approach and attention to detail.
          </motion.p>
        </div>
      </Section>
      
      <Section>
        <ProjectFilter
          categories={projectCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ProjectsPage;