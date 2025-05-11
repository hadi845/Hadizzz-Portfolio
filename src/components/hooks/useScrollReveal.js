// hooks/useScrollReveal.js
import { useEffect } from "react";

export const useScrollReveal = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const reveal = () => {
      for (const el of reveals) {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
          el.classList.add("visible");
        }
      }
    };

    window.addEventListener("scroll", reveal);
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);
};
