import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="group relative overflow-hidden h-[400px] md:h-[500px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-black/30 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
      
      <img
        src={project.coverImage}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
      />
      
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-20">
        <div
          className="transform transition-transform duration-300 ease-in-out"
          style={{
            transform: isHovered ? 'translateY(0)' : 'translateY(40px)',
          }}
        >
          <p className="text-white/80 text-sm mb-2">{project.category}</p>
          <h3 className="font-serif text-white text-xl md:text-2xl mb-2">{project.title}</h3>
          
          <p
            className="text-white/90 mb-4 line-clamp-2 transition-opacity duration-300"
            style={{ opacity: isHovered ? 1 : 0 }}
          >
            {project.excerpt}
          </p>
          
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center text-white border-b border-white/40 pb-1 hover:border-white transition-all"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.3s, transform 0.3s',
            }}
          >
            View Project <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;