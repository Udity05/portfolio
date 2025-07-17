import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Paintbrush, Code2, Palette, Users, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces that enhance user experience and drive engagement.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design & Branding",
        "Usability Testing"
      ],
      color: "text-primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Code2,
      title: "Web Design & Development",
      description: "Building responsive, modern websites that combine beautiful design with robust functionality and performance.",
      features: [
        "Responsive Web Design",
        "Frontend Development",
        "Performance Optimization",
        "Cross-browser Compatibility"
      ],
      color: "text-secondary",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: Paintbrush,
      title: "Frontend Development",
      description: "Developing interactive, scalable web applications using modern technologies and best practices.",
      features: [
        "React & Next.js Development",
        "Component Libraries",
        "State Management",
        "API Integration"
      ],
      color: "text-accent",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Palette,
      title: "Branding & Visual Design",
      description: "Crafting unique brand identities and visual systems that communicate your story effectively.",
      features: [
        "Logo & Brand Design",
        "Visual Identity Systems",
        "Marketing Materials",
        "Brand Guidelines"
      ],
      color: "text-primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Users,
      title: "Community Campaign Design",
      description: "Designing engaging visual content for community events, social media, and marketing campaigns.",
      features: [
        "Event Collateral Design",
        "Social Media Graphics",
        "Campaign Strategy",
        "Community Engagement"
      ],
      color: "text-secondary",
      gradient: "from-secondary/20 to-secondary/5"
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="hero-gradient">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Comprehensive digital solutions combining design expertise with technical proficiency 
            to bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-glass p-8 hover:shadow-glow transition-all duration-500 group cursor-pointer"
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} ${service.color} group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8" />
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground text-sm uppercase tracking-wider">
                    What's Included
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold mb-4">
              My <span className="hero-gradient">Process</span>
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A structured approach to delivering exceptional results, from concept to completion.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your goals, audience, and requirements through detailed research and consultation."
              },
              {
                step: "02",
                title: "Strategy",
                description: "Developing a comprehensive plan and approach tailored to your specific needs and objectives."
              },
              {
                step: "03",
                title: "Design & Development",
                description: "Creating and building your solution with attention to detail and best practices."
              },
              {
                step: "04",
                title: "Delivery & Support",
                description: "Launching your project and providing ongoing support to ensure continued success."
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform">
                    {process.step}
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {process.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;