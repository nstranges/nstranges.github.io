import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import type { Project } from "@/lib/constants";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const detailsUrl = project.projectUrl || project.repoUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group h-full flex flex-col overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-colors duration-300">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {project.projectUrl && (
              <Button size="icon" variant="secondary" className="rounded-full" asChild>
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
            )}
            {project.repoUrl && (
              <Button size="icon" variant="secondary" className="rounded-full" asChild>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            )}
          </div>
        </div>
        
        <CardContent className="flex-1 p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-display group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-secondary/50 text-secondary-foreground">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex flex-col gap-2">
          {detailsUrl ? (
            <Button
              asChild
              variant="ghost"
              className="w-full justify-between group/btn hover:bg-primary/5 hover:text-primary"
            >
              <a href={detailsUrl} target="_blank" rel="noopener noreferrer">
                View Details
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </Button>
          ) : (
            <Button variant="ghost" className="w-full justify-between" disabled>
              View Details
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
          {project.pdfUrl && (
            <Button asChild variant="outline" className="w-full">
              <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer">
                View PDF
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
