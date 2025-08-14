import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion, Variants } from "framer-motion";
import profilePic from "/assets/bw-image.png";
import PixelTransition from "./ui/PixelTransition";

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
    <section
      id="about"
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#f5f5f5] via-[#f9f9f9] to-white text-[#1a1a1a] overflow-hidden"
    >
      {/* Heading */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-12 sm:mb-16 lg:mb-20 px-4"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
          Know <span className="text-[#CB0404]">Me</span>
        </h2>
        <div className="h-1 w-16 sm:w-20 lg:w-24 mx-auto bg-[#CB0404] rounded-full"></div>
      </motion.div>

      {/* Content wrapper */}
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto px-4 sm:px-6 items-center relative z-10">
        
        {/* Left Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 bg-[#141111ff] backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-[0_0_25px_#CB0404] transition w-full"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-[#CB0404] mb-4">
            Who am I?
          </h3>
          <p className="text-base sm:text-lg text-white mb-4">
            I’m <span className="font-semibold text-[#CB0404]">Udity Banerjee</span>, 
            a B.Tech Computer Science student, passionate about merging design with development. 
            I specialize in building elegant frontend experiences with a blend of creativity and code.
          </p>
          <p className="text-base sm:text-lg text-white">
            From founding <span className="font-medium text-[#CB0404]">Digital Dominators</span> to 
            leading at <span className="font-medium">GDSC</span> and evangelizing tech through events 
            like Binary, Hack4Bengal, StatusCode2 — I strive to inspire and innovate.
          </p>
        </motion.div>

        {/* Middle Section (Image) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 text-center"
        >
          <div className="relative w-56 sm:w-64 lg:w-full max-w-lg mx-auto">
            <div className="absolute -top-6 -left-6 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-[#CB0404]/20 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 sm:-bottom-8 -right-6 sm:-right-8 w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-[#CB0404]/10 blur-2xl animate-pulse delay-100"></div>
            
            <PixelTransition
              firstContent={
                <img
                  src={profilePic}
                  alt="Udity"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className="rounded-xl"
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#111"
                  }}
                >
                  <p
                    style={{
                      fontWeight: 900,
                      fontSize: "2rem",
                      color: "#fff",
                      textAlign: "center",
                      padding: "0 10px"
                    }}
                  >
                    Hi! Udity here
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#141111ff"
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </div>
        </motion.div>

        {/* Right Section (Cards) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 space-y-6 w-full"
        >
          <Card className="p-4 sm:p-6 rounded-xl bg-[#141111ff] backdrop-blur-xl border border-gray-200 hover:shadow-[0_0_20px_#CB0404] transition">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-[#CB0404]/10 text-[#CB0404] rounded-full">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-[#CB0404]">
                  Education
                </h4>
                <p className="text-xs sm:text-sm text-white">
                  B.Tech CSE, JIS College of Engineering
                </p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mt-1">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    2022–26
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                    Kolkata, India
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 rounded-xl bg-[#141111ff] backdrop-blur-xl border border-gray-200 hover:shadow-[0_0_20px_#CB0404] transition">
            <h4 className="text-base sm:text-lg font-semibold text-[#CB0404] mb-2">
              Philosophy
            </h4>
            <blockquote className="text-xs sm:text-sm md:text-base text-white italic border-l-4 border-[#CB0404] pl-3 sm:pl-4">
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
