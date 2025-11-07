import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import TechStack from '../About/TechStack';
import { technologies } from '@/tecnologies-per-project';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  delay?: number;
}

function ProjectCard({
  project,
  onClick,
  delay = 0,
}: ProjectCardProps) {
  return (
    <div
      className="group relative glass-effect rounded-2xl overflow-hidden cursor-pointer smooth-transition hover-lift text-gray-200"
      style={{ animationDelay: `${delay}s` }}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Hover Overlay with Quick Links */}
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 z-20">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3 bg-background/30 backdrop-blur-sm">
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.slice(0, 3).map((tag) => {
            const stack = technologies[tag];
            return (
              <TechStack
                color={stack.color}
                key={Math.random()}
                tecnologie={stack.name}
                className="text-sm font-semibold py-0 opacity-90"
              />
            );
          })}
          {project.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>
      </div>

      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors pointer-events-none" />

      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/20 to-accent/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
    </div>
  );
}

export default ProjectCard;
