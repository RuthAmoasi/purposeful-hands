import { useEffect } from "react";

function useFadeInOnScroll(refs) {
  useEffect(() => {
    const elements = Array.isArray(refs) ? refs : [refs];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((ref) => {
      if (ref?.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      elements.forEach((ref) => {
        if (ref?.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [refs]);
}

export default useFadeInOnScroll;