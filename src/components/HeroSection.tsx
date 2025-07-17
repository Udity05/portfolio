import React from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import udityProfile from "@/assets/portfolio_image.jpg";

const HeroSection = () => {
  return (
    <section className="bg-[#f5f5f5] text-[#1a1a1a] min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div className="space-y-8">
    
          <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">
            Hello
            <br />
            <span className="block mt-4 text-3xl font-medium">
              I’m <span className="font-bold text-[#CB0404]">Udity Banerjee</span><br />
              a frontend developer & UI/UX designer
            </span>
          </h1>

          {/* Stats */}
          <div className="flex items-center gap-10 mt-8 text-gray-600 text-sm">
            <div>
              <span className="text-2xl font-semibold text-black">10+</span>
              <div>Projects Completed</div>
            </div>
            <div>
              <span className="text-2xl font-semibold text-black">5+</span>
              <div>Communities</div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 pt-6">
            <a
              href="https://github.com/Udity05"
              target="_blank"
              className="hover:text-[#000]"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/udity-banerjee1211"
              target="_blank"
              className="hover:text-[#0077b5]"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:banerjeeudity@gmail.com"
              className="hover:text-[#ff3366]"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Right Profile Section */}
        <div className="relative w-full flex justify-center items-center">
          <div className="w-full max-w-sm aspect-square overflow-hidden rounded-xl shadow-xl border border-gray-200 hover:scale-105 transition-transform duration-500">
            <img
              src={udityProfile}
              alt="Udity Banerjee"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs text-gray-500 mb-2">Scroll down</span>
        <ArrowDown size={18} className="text-black" />
      </div>
    </section>
  );
};

export default HeroSection;
