import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content */}
      <main>
        <div id="home">
          <HeroSection />
        </div>
        
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;
