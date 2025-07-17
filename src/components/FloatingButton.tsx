import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            onClick={scrollToContact}
            className="btn-glow bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/90 hover:to-secondary/90 rounded-full w-14 h-14 shadow-lg hover:shadow-glow transition-all duration-300 group"
            size="icon"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </Button>
          
          <div className="absolute -top-12 right-0 bg-card border border-border/50 rounded-lg px-3 py-1 text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Let's Talk!
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButton;