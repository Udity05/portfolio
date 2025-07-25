import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import BouncingLogos from "@/components/BouncingLogos";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-[#1a1a1a] text-white overflow-hidden">
      
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <BouncingLogos />
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-sm tracking-widest text-[#CB0404]">
        UDITY BANERJEE
      </div>

     
      <div className="relative z-10 h-full flex items-center justify-start px-12 pl-48">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="backdrop-blur-lg bg-white/10 border border-white/20 p-10 rounded-2xl shadow-lg max-w-xl"
        >
          <h1 className="text-6xl font-extrabold text-gray-300 mb-4">Hello</h1>
          <p className="text-3xl font-semibold leading-snug mb-6">
            I’m <span className="text-[#CB0404] font-bold">Udity Banerjee</span><br />
            a frontend developer <br /> & UI/UX designer.
          </p>

          <div className="flex gap-6">
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
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-0 right-10 w-[420px] z-10"
      >
        <img
          src="/assets/portfolio_imgae_bg-remove.png"
          alt="Udity"
          className="w-full grayscale hover:grayscale-0 transition-all duration-500 object-contain"
        />
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white z-10 animate-bounce">
        <p className="text-xs mb-1">Scroll down</p>
        <span className="text-lg">↓</span>
      </div>
    </section>
  );
};

export default HeroSection;
