import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion, Variants } from "framer-motion";
import udityProfile from "/assets/portfolio_imgae_bg-remove.png";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-br from-[#f5f5f5] via-[#f9f9f9] to-white text-[#1a1a1a] overflow-hidden">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl font-bold mb-2">
          Know <span className="text-[#CB0404]">Me</span>
        </h2>
        <div className="h-1 w-24 mx-auto bg-[#CB0404] rounded-full"></div>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto px-6 items-center relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 bg-white/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-[0_0_25px_#CB0404] transition"
        >
          <h3 className="text-2xl font-bold text-[#CB0404] mb-4">Who am I?</h3>
          <p className="text-lg text-gray-800 mb-4">
            I’m <span className="font-semibold text-[#CB0404]">Udity Banerjee</span>, a B.Tech Computer Science student, passionate about merging
            design with development. I specialize in building elegant frontend experiences with a blend of
            creativity and code.
          </p>
          <p className="text-lg text-gray-700">
            From founding <span className="font-medium text-[#CB0404]">Digital Dominators</span> to leading at <span className="font-medium">GDSC</span> and evangelizing tech through events like Hack4Bengal,
            I strive to inspire and innovate.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 text-center"
        >
          <div className="relative w-full max-w-sm mx-auto">
            <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-[#CB0404]/20 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-[#CB0404]/10 blur-2xl animate-pulse delay-100"></div>
            <img
              src={udityProfile}
              alt="Udity"
              className="w-72 h-72 mx-auto rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border-4 border-[#CB0404] shadow-lg"
            />
            <h3 className="text-xl font-semibold text-[#CB0404] mt-4">Udity Banerjee</h3>
            <p className="text-sm text-gray-600">Frontend Dev • Designer • Community Enthusiast</p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 space-y-6"
        >
          <Card className="p-6 rounded-xl bg-white/40 backdrop-blur-xl border border-gray-200 hover:shadow-[0_0_20px_#CB0404] transition">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#CB0404]/10 text-[#CB0404] rounded-full">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#CB0404]">Education</h4>
                <p className="text-sm text-gray-700">B.Tech CSE, JIS College of Engineering</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    2022–26
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Kolkata, India
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 rounded-xl bg-white/40 backdrop-blur-xl border border-gray-200 hover:shadow-[0_0_20px_#CB0404] transition">
            <h4 className="text-lg font-semibold text-[#CB0404] mb-2">Philosophy</h4>
            <blockquote className="text-gray-700 italic border-l-4 border-[#CB0404] pl-4">
              “Design isn’t just what it looks like or feels like—it’s how it works. I believe in building digital
              interfaces that feel natural, aesthetic, and useful.”
            </blockquote>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
