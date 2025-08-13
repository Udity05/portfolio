import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import BouncingLogos from "@/components/BouncingLogos";
import CurvedLoop from "@/components/ui/curvedloop";
import SplashCursor from '@/components/ui/SplashCursor';


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-[#1a1a1a] text-white overflow-hidden">
      <SplashCursor/>
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <BouncingLogos />
      </div>

      
      <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-sm tracking-widest text-[#CB0404]">
        UDITY BANERJEE
      </div>

      
      <div className="relative z-10 h-full flex items-center justify-start px-12 pl-[150px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-2xl shadow-2xl max-w-xl"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl font-extrabold text-gray-300 mb-4"
          >
            Hello
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-3xl font-semibold leading-snug mb-6"
          >
            I’m <span className="text-[#CB0404] font-bold">Udity Banerjee</span>
            <br />a frontend developer <br />& UI/UX designer.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-6">
            <a
              href="https://github.com/Udity05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#CB0404] transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/udity-banerjee1211"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0077B5] transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:banerjeeudity@gmail.com"
              className="text-white hover:text-[#f5f5f5] transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Portfolio Image */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-0 right-5 z-10 w-[600px]"
      >
        <img
          src="/assets/pic-no-bg.png"
          alt="Udity"
          className="w-full grayscale hover:grayscale-0 transition-all duration-500 object-contain"
        />
      </motion.div>

  <div className="absolute top-[10%] left-0 w-full z-0">
  <CurvedLoop
    marqueeText="Frontend Dev • Designer • UB • "
    speed={2}
    curveAmount={300}
    className="text-[#CB0404] opacity-30 "
    direction="left"
    interactive={true}
  />
</div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white z-10 animate-bounce">
        <p className="text-xs mb-1">Scroll down</p>
        <span className="text-lg">↓</span>
      </div>

      
    </section>
  );
};

export default HeroSection;
