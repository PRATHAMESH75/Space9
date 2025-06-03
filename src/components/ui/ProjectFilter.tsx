import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap justify-center mb-12">
      <div className="inline-flex flex-wrap justify-center border border-neutral-200 rounded-sm divide-x divide-neutral-200">
        {['All', ...categories].map((category) => (
          <div
            key={category}
            className="relative"
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <button
              onClick={() => onCategoryChange(category)}
              className={`px-6 py-3 text-sm font-medium transition-colors relative z-10 ${
                activeCategory === category
                  ? 'text-white'
                  : 'text-neutral-600 hover:text-navy-700'
              }`}
            >
              {category}
            </button>
            
            <AnimatePresence>
              {activeCategory === category && (
                <motion.div
                  className="absolute inset-0 bg-navy-800 z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>
            
            <AnimatePresence>
              {hoveredCategory === category && activeCategory !== category && (
                <motion.div
                  className="absolute inset-0 bg-neutral-100 z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;