import { useRef, useEffect, useState } from "react";

export function useInView(threshold = 0.3, reappear = false) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
        else if (reappear) setInView(false);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, [threshold, reappear]);

  return [ref, inView] as const;
}
