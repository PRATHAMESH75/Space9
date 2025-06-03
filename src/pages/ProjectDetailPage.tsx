import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import NotFoundPage from './NotFoundPage';

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!project) {
    return <NotFoundPage />;
  }
  
  const projectIndex = projects.findIndex(p => p.id === id);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };
  
  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <Section>
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center text-neutral-600 hover:text-navy-700 transition-colors mb-8"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Projects
          </button>
          
          <span className="text-navy-700 uppercase text-sm tracking-wider">
            {project.category}
          </span>
          <h1 className="font-serif text-3xl md:text-5xl mt-2 mb-6">
            {project.title}
          </h1>
        </motion.div>
        
        {/* Image Gallery */}
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative h-[300px] md:h-[600px] overflow-hidden">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-opacity duration-500"
                style={{ opacity: index === currentImageIndex ? 1 : 0 }}
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {project.images.length > 1 && (
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={goToPrevImage}
                className="p-2 bg-white/80 hover:bg-white text-neutral-800 transition-colors"
                aria-label="Previous image"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={goToNextImage}
                className="p-2 bg-white/80 hover:bg-white text-neutral-800 transition-colors"
                aria-label="Next image"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          )}
        </motion.div>
        
        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-serif text-2xl mb-6">About the Project</h2>
            <p className="text-neutral-600 mb-8 whitespace-pre-line">
              {project.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl mb-4">Services Provided</h3>
                <ul className="space-y-2">
                  {project.services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight size={16} className="text-navy-700 mt-1 mr-2 flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-serif text-xl mb-4">Project Outcomes</h3>
                <p className="text-neutral-600">
                  The completed project successfully addressed the client's needs while demonstrating our commitment to design excellence and quality construction.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-neutral-50 p-6 md:p-8">
              <h3 className="font-serif text-xl mb-6">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm uppercase text-neutral-500 mb-1">Client</h4>
                  <p>{project.client}</p>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase text-neutral-500 mb-1">Location</h4>
                  <p>{project.location}</p>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase text-neutral-500 mb-1">Year</h4>
                  <p>{project.year}</p>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase text-neutral-500 mb-1">Category</h4>
                  <p>{project.category}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
      
      {/* Project Navigation */}
      <Section className="bg-neutral-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <span className="text-sm uppercase text-neutral-500 mb-2 block">Previous Project</span>
            <Button
              href={`/projects/${prevProject.id}`}
              variant="outline"
              className="flex items-center"
            >
              <ArrowLeft size={16} className="mr-2" /> {prevProject.title}
            </Button>
          </div>
          
          <div className="text-right">
            <span className="text-sm uppercase text-neutral-500 mb-2 block">Next Project</span>
            <Button
              href={`/projects/${nextProject.id}`}
              variant="outline"
              className="flex items-center justify-end ml-auto"
            >
              {nextProject.title} <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ProjectDetailPage;