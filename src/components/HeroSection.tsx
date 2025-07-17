import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles, Code2 } from "lucide-react";
import udityProfile from "@/assets/udity-profile.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-100"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-secondary/60 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-accent/60 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-primary/40 rounded-full animate-pulse delay-900"></div>
        <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-secondary/40 rounded-full animate-pulse delay-500"></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-30" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Enhanced Profile Image */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
            
            {/* Rotating ring */}
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-spin" style={{animationDuration: '20s'}}></div>
            <div className="absolute inset-2 rounded-full border border-secondary/20 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
            
            {/* Profile image container */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-border/50 float-animation group-hover:scale-105 transition-transform duration-500">
              <img 
                src={udityProfile} 
                alt="Udity Banerjee" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Floating icons */}
            <div className="absolute -top-4 -right-4 p-3 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 animate-bounce">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 p-3 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30 animate-bounce delay-500">
              <Sparkles className="w-5 h-5 text-secondary" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-6">
              {/* Animated greeting */}
              <div className="text-sm md:text-base text-primary font-medium opacity-0 animate-fade-in">
                👋 Hello, I'm
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight opacity-0 animate-fade-in delay-300">
                <span className="hero-gradient inline-block hover:scale-105 transition-transform duration-300 cursor-default">Udity</span>
                <br />
                <span className="text-foreground inline-block hover:scale-105 transition-transform duration-300 cursor-default">Banerjee</span>
              </h1>
              
              <div className="text-xl md:text-2xl text-muted-foreground font-medium opacity-0 animate-fade-in delay-500">
                <span className="text-primary hover:scale-110 inline-block transition-transform duration-200 cursor-default">Frontend Developer</span> |{' '}
                <span className="text-secondary hover:scale-110 inline-block transition-transform duration-200 cursor-default">UI/UX Designer</span> |{' '}
                <span className="text-accent hover:scale-110 inline-block transition-transform duration-200 cursor-default">Community Evangelist</span>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in delay-700">
                Crafting immersive digital experiences with 
                <span className="text-primary font-semibold"> code</span>, 
                <span className="text-secondary font-semibold"> design</span>, and 
                <span className="text-accent font-semibold"> creativity</span>.
              </p>
              
              {/* Stats or highlights */}
              <div className="flex gap-8 opacity-0 animate-fade-in delay-1000">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Done</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">5+</div>
                  <div className="text-sm text-muted-foreground">Communities</div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in delay-1200">
              <Button 
                size="lg" 
                className="btn-glow bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/90 hover:to-secondary/90 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                onClick={() => scrollToSection('projects')}
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-glow border-primary/50 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 group"
                onClick={() => scrollToSection('contact')}
              >
                Get in Touch
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="btn-glow text-accent hover:text-accent hover:bg-accent/10 hover:scale-105 transition-all duration-300 group"
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Resume
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start opacity-0 animate-fade-in delay-1400">
              <a 
                href="https://github.com/Udity05" 
                className="p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group hover:scale-110 hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://linkedin.com/in/udity-banerjee1211" 
                className="p-3 rounded-full border border-border/50 hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300 group hover:scale-110 hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6 group-hover:text-secondary transition-colors" />
              </a>
              <a 
                href="mailto:banerjeeudity@gmail.com" 
                className="p-3 rounded-full border border-border/50 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 group hover:scale-110 hover:-translate-y-1"
              >
                <Mail className="w-6 h-6 group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-1600">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground">Scroll to explore</span>
            <button 
              onClick={() => scrollToSection('about')}
              className="p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 animate-bounce hover:scale-110 group"
            >
              <ArrowDown className="w-5 h-5 group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;