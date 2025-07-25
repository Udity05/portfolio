import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  image: HTMLImageElement;
}

const BouncingLogos: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const logos = [
      "/assets/html-bubble.png",
      "/assets/javascript-bubble.png",
      "/assets/react-bubble.png",
      "/assets/git-bubble.png",
      "/assets/monodb-bubble.png",
      "/assets/firebase-bubble.png",
    ];

    const images: HTMLImageElement[] = [];
    let loaded = 0;

    const size = 48;
    const speed = 1;
    const particles: Particle[] = [];

    let mouseX: number | null = null;
    let mouseY: number | null = null;

    const resize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouse);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        // Repulsion
        if (mouseX !== null && mouseY !== null) {
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const angle = Math.atan2(dy, dx);
            const force = (100 - dist) / 100;
            p.vx += Math.cos(angle) * force * 0.4;
            p.vy += Math.sin(angle) * force * 0.4;
          }
        }

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Bounce walls
        if (p.x < size / 2 || p.x > canvas.width - size / 2) p.vx *= -1;
        if (p.y < size / 2 || p.y > canvas.height - size / 2) p.vy *= -1;

        // Draw
        if (p.image.complete) {
          ctx.drawImage(p.image, p.x - size / 2, p.y - size / 2, size, size);
        }
      }

      requestAnimationFrame(animate);
    };

    // Load and start animation
    logos.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        images[i] = img;
        loaded++;
        if (loaded === logos.length) {
          for (let i = 0; i < 12; i++) {
            particles.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              vx: (Math.random() - 0.5) * speed,
              vy: (Math.random() - 0.5) * speed,
              image: images[i % images.length],
            });
          }
          animate();
        }
      };
      img.onerror = () => {
        console.warn("Image failed:", src);
        loaded++;
      };
    });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-auto">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default BouncingLogos;
