import { useEffect, useRef } from "react";

/**
 * Reveals elements with the `.reveal` class as they enter the viewport.
 * Watches for late-mounted content (client-side navigation, streamed SSR),
 * so sections never stay stuck at opacity 0.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" },
    );

    const scan = () => {
      const root: ParentNode = ref.current ?? document;
      root.querySelectorAll(".reveal:not(.in-view)").forEach((n) => {
        // Anything already scrolled past should simply be visible.
        if (n.getBoundingClientRect().bottom < 0) {
          n.classList.add("in-view");
          return;
        }
        io.observe(n);
      });
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, []);
  return ref;
}
