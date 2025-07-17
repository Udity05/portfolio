import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Layers, Wrench } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "text-primary",
      skills: [
        "HTML", "CSS", "JavaScript", "React", "Next.js", 
        "Tailwind CSS", "Framer Motion", "Bootstrap"
      ]
    },
    {
      title: "Design & Creative",
      icon: Palette,
      color: "text-secondary",
      skills: [
        "Figma", "Adobe XD", "Canva", "UI/UX Design", 
        "Brand Design", "Typography", "Color Theory"
      ]
    },
    {
      title: "3D & Interactive",
      icon: Layers,
      color: "text-accent",
      skills: [
        "Blender", "Spline", "Three.js", "WebGL", 
        "3D Modeling", "Animation", "Interactive Design"
      ]
    },
    {
      title: "Programming & Tools",
      icon: Wrench,
      color: "text-primary",
      skills: [
        "Java", "C++", "MySQL", "Git", "GitHub", 
        "Flask", "Python", "Version Control"
      ]
    }
  ];

  // Extended skill list for infinite scroll
  const scrollingSkills = [
    "React", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS", 
    "Figma", "Adobe XD", "Blender", "Three.js", "Node.js",
    "Python", "Java", "C++", "Git", "GitHub", "Framer Motion",
    "Spline", "WebGL", "MySQL", "Flask", "Canva", "Bootstrap"
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="hero-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit spanning frontend development, design, and creative technologies
            to bring digital visions to life.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-glass p-6 hover:shadow-glow transition-all duration-500 group"
            >
              <div className="text-center space-y-4">
                <div className={`inline-flex p-4 rounded-xl bg-background/50 ${category.color} group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="text-xs border-border/50 hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Infinite Scrolling Skills */}
        <div className="relative overflow-hidden py-8">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          <div className="flex gap-6 skill-scroll whitespace-nowrap">
            {/* First set */}
            <div className="flex gap-6 animate-none">
              {scrollingSkills.map((skill, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 px-6 py-3 bg-card border border-border/50 rounded-full hover:border-primary/50 transition-colors"
                >
                  <span className="text-foreground font-medium">{skill}</span>
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex gap-6 animate-none">
              {scrollingSkills.map((skill, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 px-6 py-3 bg-card border border-border/50 rounded-full hover:border-primary/50 transition-colors"
                >
                  <span className="text-foreground font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Proficiency */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            <span className="hero-gradient">Proficiency Levels</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { skill: "Frontend Development", level: 90 },
              { skill: "UI/UX Design", level: 85 },
              { skill: "React & Next.js", level: 88 },
              { skill: "3D & Animation", level: 75 },
              { skill: "Brand Design", level: 80 },
              { skill: "Community Leadership", level: 92 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{item.skill}</span>
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;