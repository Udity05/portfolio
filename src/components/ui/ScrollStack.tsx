import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ScrollStackItem = ({ children, index }: { children: React.ReactNode; index: number }) => (
  <div className="scroll-stack-item w-full relative">
    <div
      className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-white/30 z-0 transform -translate-x-1/2"
      aria-hidden
    />
    <div className={`relative z-10 mt-20 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>{children}</div>
  </div>
);

const ScrollStack = ({ children }: { children: React.ReactNode[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number>();

  useEffect(() => {
    const lenis = new Lenis({ smooth: true });
    const raf = (time: number) => {
      lenis.raf(time);
      frame.current = requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      cancelAnimationFrame(frame.current!);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".scroll-stack-item").forEach((el: any, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative flex flex-col items-center w-full px-6 sm:px-12">
      {children}
    </div>
  );
};

export default ScrollStack;
