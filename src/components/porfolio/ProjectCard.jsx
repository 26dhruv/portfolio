import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export function ProjectCard({ 
  title, 
  description, 
  technologies, 
  imageUrl, 
  githubLink, 
  liveLink 
}) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
          )}
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              <FaExternalLinkAlt className="h-6 w-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}