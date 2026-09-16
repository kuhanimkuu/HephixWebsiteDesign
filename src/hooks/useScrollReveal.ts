import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.delay || "0", 10);
            setTimeout(() => {
              el.classList.add("visible");
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      if (!htmlEl.dataset.delay) {
        htmlEl.dataset.delay = String(i * 60);
      }
      observer.observe(el);
    });
    return () => observer.disconnect();
  });
}
