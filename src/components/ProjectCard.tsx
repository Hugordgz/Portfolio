import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [showQuery, setShowQuery] = useState(false);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'powerbi': return '📊';
      case 'python': return '🐍';
      case 'sql': return '🗃️';
      default: return '📈';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'powerbi': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'python': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'sql': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="card overflow-hidden h-full flex flex-col"
    >
      {/* Header */}
      <div className="p-6 flex-grow space-y-4">
        <div className="flex items-center justify-between">
          <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(project.type)}`}>
            <span className="mr-1">{getTypeIcon(project.type)}</span>
            {project.type.toUpperCase()}
          </div>
          {project.featured && (
            <div className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs font-medium">
              Featured
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold text-secondary-900">
          {project.title}
        </h3>

        <p className="text-secondary-600 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Content based on project type */}
      <div className="px-6 pb-6">
        {project.type === 'powerbi' && project.embedUrl && (
          <div className="space-y-4">
            <div className="bg-secondary-50 rounded-lg p-4 border-2 border-dashed border-secondary-200">
              <div className="text-center text-secondary-600">
                <div className="text-2xl mb-2">📊</div>
                <p className="text-sm">Interactive Power BI Dashboard</p>
                <p className="text-xs text-secondary-500 mt-1">
                  Click "View Dashboard" to explore
                </p>
              </div>
            </div>
            <a
              href={project.embedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center block"
            >
              View Dashboard
            </a>
          </div>
        )}

        {project.type === 'python' && project.link && (
          <div className="space-y-4">
            <div className="bg-secondary-50 rounded-lg p-4 border-2 border-dashed border-secondary-200">
              <div className="text-center text-secondary-600">
                <div className="text-2xl mb-2">📓</div>
                <p className="text-sm">Jupyter Notebook</p>
                <p className="text-xs text-secondary-500 mt-1">
                  View code and analysis on GitHub
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 text-center"
              >
                View on GitHub
              </a>
              <a
                href={project.link.replace('github.com', 'nbviewer.org/github')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1 text-center"
              >
                NBViewer
              </a>
            </div>
          </div>
        )}

        {project.type === 'sql' && (
          <div className="space-y-4">
            {project.query && (
              <div className="space-y-2">
                <button
                  onClick={() => setShowQuery(!showQuery)}
                  className="btn-secondary w-full flex items-center justify-center gap-2"
                >
                  <span>View SQL Query</span>
                  <svg
                    className={`w-4 h-4 transform transition-transform ${showQuery ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {showQuery && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-secondary-900 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto"
                  >
                    <pre className="whitespace-pre-wrap">{project.query}</pre>
                  </motion.div>
                )}
              </div>
            )}
            
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block"
              >
                View Repository
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
