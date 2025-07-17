import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Designer",
      companies: "Apex Circle, InnovateX, Digital Dominators",
      period: "Current",
      type: "Multiple Roles",
      location: "Remote",
      description: "Leading design initiatives across multiple organizations, creating comprehensive visual identities and user experiences.",
      achievements: [
        "Increased user engagement by 40% through redesigned interfaces",
        "Created cohesive brand guidelines for 3 different organizations",
        "Led cross-functional design teams"
      ],
      skills: ["UI/UX Design", "Brand Strategy", "Team Leadership"]
    },
    {
      title: "Founder & Design Lead",
      companies: "Digital Dominators",
      period: "2023 - Present",
      type: "Founder",
      location: "Kolkata, India",
      description: "Founded and leading a design-focused community, driving innovation in digital design and development.",
      achievements: [
        "Built a community of 200+ designers and developers",
        "Organized 15+ design workshops and events",
        "Established partnership with 5 tech companies"
      ],
      skills: ["Leadership", "Community Building", "Event Management"]
    },
    {
      title: "Design Lead",
      companies: "GDSC JISCE",
      period: "Jan 2023 - Dec 2023",
      type: "Community Role",
      location: "JIS College of Engineering",
      description: "Led design initiatives for Google Developer Student Club, creating event collateral and building the club's digital presence.",
      achievements: [
        "Designed UI for GDSC website with modern, responsive layout",
        "Created event collateral for 20+ technical events",
        "Increased social media engagement by 60%",
        "Mentored 30+ students in design fundamentals"
      ],
      skills: ["Web Design", "Event Design", "Mentoring", "React"]
    },
    {
      title: "Graphic Design Intern",
      companies: "PHICSIT",
      period: "Aug 2023 - May 2024",
      type: "Internship",
      location: "Remote",
      description: "Focused on creating compelling visual content and improving brand communication through strategic design.",
      achievements: [
        "Designed 100+ social media graphics",
        "Developed brand style guide and design system",
        "Improved brand consistency across all platforms",
        "Collaborated with marketing team on campaign design"
      ],
      skills: ["Graphic Design", "Brand Design", "Social Media", "Adobe Creative Suite"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Multiple Roles":
        return "bg-primary/20 text-primary border-primary/30";
      case "Founder":
        return "bg-accent/20 text-accent border-accent/30";
      case "Community Role":
        return "bg-secondary/20 text-secondary border-secondary/30";
      case "Internship":
        return "bg-muted text-muted-foreground border-border";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="hero-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A journey through various roles where I've contributed to digital innovation, 
            community building, and creative problem-solving.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="card-glass p-8 hover:shadow-glow transition-all duration-500 group"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Timeline Indicator */}
                <div className="flex-shrink-0">
                  <div className="flex flex-col items-center lg:items-start">
                    <Badge className={`mb-4 ${getTypeColor(exp.type)}`}>
                      {exp.type}
                    </Badge>
                    <div className="hidden lg:block w-px h-full bg-border/50 relative">
                      <div className="absolute top-0 w-3 h-3 bg-primary rounded-full -left-1.5 group-hover:bg-secondary transition-colors"></div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  {/* Header */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <h4 className="text-xl text-primary font-medium">
                      {exp.companies}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-4">
                    <h5 className="font-semibold text-foreground flex items-center gap-2">
                      <Award className="w-5 h-5 text-accent" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2">
                    <h5 className="font-semibold text-foreground">Skills Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="border-primary/30 text-primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;