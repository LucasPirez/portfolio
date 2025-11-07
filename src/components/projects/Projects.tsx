import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import Title from '../util/Title';
import { Project } from '@/types';
import { useTranslation } from '@/TraslationContext';
import { ProjectsKeys } from '@/projects-description-text';

function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);
  const { text } = useTranslation();

  return (
    <section
      id="portfolio"
      className="min-h-screen py-20 px-6  relative overflow-hidden"
    >
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '1s' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Title text="Projects" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ProjectsKeys.map((project, index) => (
            <ProjectCard
              key={text.projectDescription[project].id}
              project={text.projectDescription[project]}
              onClick={() =>
                setSelectedProject(text.projectDescription[project])
              }
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;
