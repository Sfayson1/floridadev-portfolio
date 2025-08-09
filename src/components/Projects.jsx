import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Luma",
      description: "A full-stack mindful journaling app built with React, TypeScript, and Supabase, featuring user authentication, real-time data sync, and responsive design.",
      tech: ["Python", "FastAPI", "Supabase", "React"],
      github: "https://github.com/Sfayson1/Luma",
      live: "https://www.lumajournal.com/",
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="projects">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A showcase of my recent work, each project built with passion and attention to detail
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-sunset transition-all duration-300 hover:-translate-y-2 ${
                project.featured ? 'ring-2 ring-primary/20 bg-gradient-to-br from-card to-primary/5' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                      {project.featured && (
                        <Badge className="ml-2 bg-gradient-sunset text-white border-0">
                          Featured
                        </Badge>
                      )}
                    </CardTitle>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="default"
                    className="flex-1"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="px-8" onClick={() => window.open("https://github.com/sfayson1", '_blank')}>
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
