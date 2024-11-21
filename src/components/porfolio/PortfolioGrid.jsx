import { useState } from 'react';
import { projects } from './ProjectData';
import { ProjectFilter } from './ProjectFilter';
import { ProjectCard } from './ProjectCard';

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState('web');

  const webProjects = projects.filter(project => project.type === 'web');
  const appProjects = projects.filter(project => project.type === 'app');

  const filteredProjects = activeFilter === 'web' ? webProjects : appProjects;

  return (
    <div className="container mx-auto px-4 py-8">
      <ProjectFilter
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        webProjectCount={webProjects.length}
        appProjectCount={appProjects.length}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            imageUrl={project.imageUrl}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
}
