import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "SkillBoom+",
      description: "A comprehensive course platform designed to enhance learning experiences with modern UI/UX patterns. Built with React and enhanced with smooth animations using Framer Motion.",
      image: "/assets/education.jpg",
      tech: ["React", "Tailwind CSS", "Framer Motion", "LocalStorage"],
      category: "Web Application",
      role: "Full-Stack Developer & Designer",
      features: [
        "Responsive course catalog with search and filtering",
        "Interactive learning modules with progress tracking",
        "Modern dashboard with data visualization",
        "Smooth animations and micro-interactions"
      ],
      githubUrl: "https://github.com/Udity05/SkillBoom-",
      color: "primary"
    },
    {
      title: "Herbiary",
      description: "A virtual Ayurvedic garden that combines traditional knowledge with modern technology. Users can explore medicinal plants through an interactive interface.",
      image: "/assets/plant.jpg",
      tech: ["React", "Flask"],
      category: "Ayurvedic Garden",
      role: "Frontend Developer & 3D Designer",
      features: [
        "Plant models with detailed information",
        "Ayurvedic medicine knowledge base",
        "Plant identification through visual search",
        "Educational content with rich media"
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Udity05/Herbiary",
      color: "secondary"
    },
    {
      title: "0xKid",
      description: "Gamified learning platform for kids that makes education fun and engaging. Features interactive games and challenges designed to promote learning through play.",
      image: "/assets/game.jpg",
      tech: ["React", "Phaser.js", "Node.js", "MongoDB"],
      category: "Educational Game",
      role: "Game Developer & UI Designer",
      features: [
        "Interactive educational games with rewards system",
        "Progress tracking and parent dashboard",
        "Adaptive learning algorithms",
        "Colorful, kid-friendly interface design"
      ],
      githubUrl: "https://github.com/K-Nishant-18/0xKid",
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          gradient: "from-primary/20 to-primary/5",
          text: "text-primary",
          border: "border-primary/30"
        };
      case "secondary":
        return {
          gradient: "from-secondary/20 to-secondary/5",
          text: "text-secondary",
          border: "border-secondary/30"
        };
      case "accent":
        return {
          gradient: "from-accent/20 to-accent/5",
          text: "text-accent",
          border: "border-accent/30"
        };
      default:
        return {
          gradient: "from-primary/20 to-primary/5",
          text: "text-primary",
          border: "border-primary/30"
        };
    }
  };

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="hero-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my latest work, demonstrating expertise in modern web development, 
            interactive design, and user experience.
          </p>
        </div>

        <div className="grid gap-12">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            const isEven = index % 2 === 0;
            
            return (
              <Card 
                key={index} 
                className="card-glass overflow-hidden hover:shadow-glow transition-all duration-500 group"
              >
                <div className={`grid lg:grid-cols-2 gap-8 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative  rounded-lg ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover"
  />

                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-90`}></div>
                    <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground">
                      <Play className="w-16 h-16" />
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className={`${colors.border} ${colors.text} bg-background/80`}>
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className={`p-8 space-y-6 ${!isEven ? 'lg:col-start-1' : ''}`}>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className={`${colors.text} font-medium`}>Role:</span>
                        <span>{project.role}</span>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className={`w-1.5 h-1.5 ${colors.text.replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`}></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} variant="outline" className="border-border/50 hover:border-primary/50 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <Button 
                        className={`btn-glow bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/90 hover:to-secondary/90`}
                        asChild
                      >
          
                      </Button>
                      <Button 
                        variant="outline" 
                        className={`btn-glow ${colors.border} ${colors.text} hover:bg-background/50`}
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">
              Want to see more of my work?
            </h3>
            <p className="text-muted-foreground">
              Check out my GitHub for more projects and contributions to open source.
            </p>
            <Button 
              size="lg"
              variant="outline" 
              className="btn-glow border-primary/50 text-primary hover:bg-primary/10"
              asChild
            >
              <a href="https://github.com/Udity05" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;