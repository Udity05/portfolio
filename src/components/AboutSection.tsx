import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants= {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut", // ✅ Valid string for Framer Motion
    },
  },
};


const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-[#f9f9f9] text-[#1a1a1a]">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-bold mb-4">
            About <span className="text-[#CB0404]">Me</span>
          </h2>
          <div className="h-1 w-24 bg-[#CB0404] mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid Content */}
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* LEFT COLUMN: Intro */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6 col-span-1"
          >
            <p className="text-lg leading-relaxed">
              I’m <span className="font-semibold text-[#CB0404]">Udity Banerjee</span>, a final-year B.Tech Computer Science student passionate about merging technology and creativity.
              With a love for frontend development and a knack for UI/UX design, I transform ideas into elegant digital experiences.
            </p>
            <p className="text-lg leading-relaxed">
              I'm actively involved in communities and have led initiatives at platforms like GDSC, Digital Dominators, and Hack4Bengal. My goal? Craft intuitive, accessible, and impactful designs powered by robust code.
            </p>
            <p className="text-lg leading-relaxed">
              Let’s build tech that’s not just functional—but beautiful and human-centric.
            </p>
          </motion.div>

          {/* CENTER COLUMN: Stats/Profile */}
          <motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="bg-[#E5E0D8] border border-gray-200 rounded-xl shadow-md p-6 space-y-4 col-span-1"
  >
    <h3 className="text-xl font-semibold text-center text-[#CB0404] mb-2">
      Highlights
    </h3>

    <ul className="space-y-3 text-sm text-gray-700">
      <li className="flex items-start gap-2">
        <span className="text-[#CB0404] font-bold">➤</span>
        Designer at <span className="font-medium">Apex Circle</span> & <span className="font-medium">InnovateX</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-[#CB0404] font-bold">➤</span>
        Founder of <span className="font-medium">Digital Dominators</span> community
      </li>
      <li className="flex items-start gap-2">
        <span className="text-[#CB0404] font-bold">➤</span>
        Evangelist at <span className="font-medium">Hack4Bengal</span>, <span className="font-medium">Binary</span>, and <span className="font-medium">StatusCode2</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-[#CB0404] font-bold">➤</span>
        GDSC JISCE — Former Design Lead (2023)
      </li>
    </ul>

    <div className="space-y-1 text-center">
      <p className="text-sm text-gray-600 italic">“My role is about innovation, collaboration, and community-first design.”</p>
      <img
        src="/assets/udity-profile.jpg"
        alt="Udity"
        className="w-20 h-20 mx-auto rounded-full object-cover border border-gray-300 mt-4"
      />
    </div>
  </motion.div>
</motion.div>


          {/* RIGHT COLUMN: Cards */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6 col-span-1"
          >
            {/* Education */}
            <Card className="bg-[#E5E0D8] p-6 border border-gray-200 shadow-md hover:shadow-xl transition-all space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#CB0404]/10 text-[#CB0404]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#CB0404]">B.Tech in Computer Science</h3>
                  <p className="text-sm text-gray-600">JIS College of Engineering</p>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500">
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
            </Card>

            {/* Philosophy */}
            <Card className="bg-[#E5E0D8] p-6 border border-gray-200 shadow-md hover:shadow-xl transition-all space-y-4">
              <h3 className="text-lg font-semibold text-[#CB0404]">My Philosophy</h3>
              <blockquote className="text-md italic text-gray-600 border-l-4 border-[#CB0404] pl-4">
                “Design isn’t just what it looks like or feels like—it’s how it works. I believe in building tech that’s beautiful, intuitive, and meaningful.”
              </blockquote>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
