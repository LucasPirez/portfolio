import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] text-gray-200 overflow-y-auto glass-effect border-primary/20">
        <DialogHeader>
          <DialogTitle className=" text:2xl sm:text-3xl font-bold text-gradient">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-sm text-left">
            {project.shortDescription}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Project Image */}
          <div className="relative rounded-xl overflow-hidden aspect-video shadow-strong">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl tfont-semibold mb-2">
              Descripción
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Características Principales
            </h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Tecnologías Utilizadas
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag + Math.random()}
                  variant="secondary"
                  className="text-sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-border">
            {project.demoUrl && (
              <Button variant="hero" asChild className="flex-1">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="glass" asChild className="flex-1">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  Ver Código
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectModal;
