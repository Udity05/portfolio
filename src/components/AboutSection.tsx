import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="hero-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a passionate <span className="text-primary font-semibold">B.Tech Computer Science student 4th year</span> with 
                an insatiable curiosity for creating digital experiences that seamlessly blend functionality with aesthetics. 
                My journey in tech is driven by the belief that great design and robust code can transform how people 
                interact with technology.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                As a <span className="text-secondary font-semibold">frontend developer</span> and{' '}
                <span className="text-accent font-semibold">UI/UX designer</span>, I thrive at the intersection of 
                creativity and technology. Whether I'm crafting pixel-perfect interfaces, building interactive web 
                applications, or leading design initiatives in developer communities, I bring a unique perspective 
                that bridges the gap between design and development.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                My active involvement in developer communities has taught me the value of collaboration, knowledge 
                sharing, and continuous learning. I believe in building not just great products, but also fostering 
                environments where creativity and innovation can flourish.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold hero-gradient">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold hero-gradient">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="space-y-6">
            <Card className="card-glass p-8 hover:shadow-glow transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/20 text-primary">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Education</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-primary">B.Tech in Computer Science</h4>
                      <p className="text-muted-foreground">JIS College of Engineering</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Graduation: 2026</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Kolkata, India</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Philosophy Card */}
            <Card className="card-glass p-8 hover:shadow-glow transition-all duration-500">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">My Philosophy</h3>
                <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-4">
                  "Great design is not just about how it looks, but how it works. 
                  I believe in creating digital experiences that are not only beautiful 
                  but also intuitive, accessible, and meaningful."
                </blockquote>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;