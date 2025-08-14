import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import BouncingLogos from "@/components/BouncingLogos";
import CurvedLoop from "@/components/ui/curvedloop";
import SplashCursor from "@/components/ui/SplashCursor";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#1a1a1a] text-white overflow-hidden flex flex-col">
      <SplashCursor />

      {/* Background Bouncing Logos */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <BouncingLogos />
      </div>

      {/* Side Text */}
      <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 rotate-90 text-[10px] md:text-sm tracking-widest text-[#CB0404]">
        UDITY BANERJEE
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between flex-1 px-4 sm:px-8 md:px-12 gap-10 lg:gap-16">
        
        {/* Text Box */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl max-w-full sm:max-w-xl text-center lg:text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-300 mb-4"
          >
            Hello
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-2xl md:text-3xl font-semibold leading-snug mb-6"
          >
            I’m <span className="text-[#CB0404] font-bold">Udity Banerjee</span>
            <br />a frontend developer <br className="hidden sm:block" />& UI/UX designer.
          </motion.p>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start gap-4 sm:gap-6">
            <a
              href="https://github.com/Udity05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#CB0404] transition-colors duration-300"
            >
              <Github size={22} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://linkedin.com/in/udity-banerjee1211"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0077B5] transition-colors duration-300"
            >
              <Linkedin size={22} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:banerjeeudity@gmail.com"
              className="text-white hover:text-[#f5f5f5] transition-colors duration-300"
            >
              <Mail size={22} className="sm:w-6 sm:h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Portfolio Image */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-40 h-40 sm:w-52 sm:h-52 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0"
        >
          <img
            src="/assets/pic-no-bg.png"
            alt="Udity"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>
      </div>

      {/* Curved Loop */}
      <div className="absolute top-[10%] left-0 w-full z-0">
        <CurvedLoop
          marqueeText="Frontend Dev • Designer • UB • "
          speed={2}
          curveAmount={300}
          className="text-[#CB0404] opacity-30"
          direction="left"
          interactive={true}
        />
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 text-center text-white z-10 animate-bounce">
        <p className="text-[10px] sm:text-xs mb-1">Scroll down</p>
        <span className="text-base sm:text-lg">↓</span>
      </div>
    </section>
  );
};

export default HeroSection;
