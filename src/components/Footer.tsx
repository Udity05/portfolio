import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Branding */}
          <div className="space-y-4">
            <div className="text-2xl font-bold hero-gradient font-space-grotesk">
              Udity Banerjee
            </div>
            <p className="text-muted-foreground text-sm">
              Frontend Developer | UI/UX Designer | Community Evangelist
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/Udity05" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/udity-banerjee1211" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:banerjeeudity@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Back to Top */}
          <div className="flex justify-center md:justify-end">
            <Button 
              variant="outline" 
              size="sm"
              onClick={scrollToTop}
              className="btn-glow border-primary/50 text-primary hover:bg-primary/10"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made by Udity Banerjee © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;