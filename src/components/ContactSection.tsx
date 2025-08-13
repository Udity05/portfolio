import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }

    emailjs
      .send(
        "service_86p0y4g",
        "template_ymzw8y9",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "xZcPRux5nn_s9msFT"
      )
      .then(() => {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        toast({
          title: "Error sending message",
          description:
            error.text || "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "banerjeeudity@gmail.com",
      href: "mailto:banerjeeudity@gmail.com",
      color: "text-primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 86959 67882",
      href: "tel:+918695967882",
      color: "text-secondary",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kolkata, India",
      href: "#",
      color: "text-accent",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="hero-gradient">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to bring your digital vision to life? Let's discuss your
            project and explore how we can create something amazing together.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a project in mind, want to collaborate, or
                just want to say hello, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card
                  key={index}
                  className="card-glass p-6 hover:shadow-glow transition-all duration-300 group"
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                  >
                    <div
                      className={`p-3 rounded-lg bg-background/50 ${item.color} group-hover:scale-110 transition-transform`}
                    >
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        {item.label}
                      </h4>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Resume */}
            <Card className="card-glass p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Resume</h4>
                  <p className="text-sm text-muted-foreground">
                    Download my latest resume to learn more about my experience.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="btn-glow border-primary/50 text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="/assets/Udity_CV_Cogni.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-glass p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Send a Message
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project discussion, collaboration, etc."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full btn-glow">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground">
            Let's Connect on Social Media
          </h3>
          <div className="flex justify-center gap-4 mt-4">
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://linkedin.com/in/udity-banerjee1211"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://github.com/Udity05"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="mailto:banerjeeudity@gmail.com">Email</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
