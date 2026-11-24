"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUp } from "./icons";

function animateCount(element: HTMLElement) {
  const target = Number(element.dataset.count);
  if (!Number.isFinite(target)) return;

  const suffix = element.dataset.suffix ?? "";
  const duration = 1200;
  const start = performance.now();

  const tick = (now: number) => {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = `${Math.round(target * eased)}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  };

  element.textContent = `0${suffix}`;
  requestAnimationFrame(tick);
}

export function ScrollEffects() {
  const pathname = usePathname();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const timelines = Array.from(document.querySelectorAll<HTMLElement>("[data-timeline]"));
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));

    if (!prefersReduced) root.classList.add("reveal-ready");

    let revealObserver: IntersectionObserver | null = null;
    let counterObserver: IntersectionObserver | null = null;

    if (!prefersReduced && "IntersectionObserver" in window) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.add("is-revealed");
            revealObserver?.unobserve(entry.target);
          }
        },
        { threshold: 0.16, rootMargin: "0px 0px -10% 0px" },
      );

      reveals.forEach((element) => revealObserver?.observe(element));

      counterObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            animateCount(entry.target as HTMLElement);
            counterObserver?.unobserve(entry.target);
          }
        },
        { threshold: 0.6 },
      );

      counters.forEach((element) => counterObserver?.observe(element));
    } else {
      reveals.forEach((element) => element.classList.add("is-revealed"));
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollTop = window.scrollY;
      const maxScroll = root.scrollHeight - window.innerHeight;
      const scrollProgress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollTop / maxScroll)) : 0;

      root.style.setProperty("--scroll-progress", scrollProgress.toFixed(4));

      const shouldShowTop = scrollTop > 640;
      setShowTop((previous) => (previous === shouldShowTop ? previous : shouldShowTop));

      if (prefersReduced) return;

      const viewportHeight = window.innerHeight;

      for (const element of parallaxItems) {
        const rect = element.getBoundingClientRect();
        if (rect.bottom < -160 || rect.top > viewportHeight + 160) continue;

        const speed = Number(element.dataset.parallax) || 0;
        const offset = (rect.top + rect.height / 2 - viewportHeight / 2) * speed;
        element.style.setProperty("--parallax-y", `${offset.toFixed(1)}px`);
      }

      for (const element of timelines) {
        const rect = element.getBoundingClientRect();
        const start = viewportHeight * 0.78;
        const travel = rect.height + viewportHeight * 0.43;
        const passed = Math.min(1, Math.max(0, (start - rect.top) / Math.max(1, travel)));
        element.style.setProperty("--timeline-progress", passed.toFixed(3));
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      revealObserver?.disconnect();
      counterObserver?.disconnect();
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  const scrollToTop = () => {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";

    window.scrollTo({ top: 0, behavior });
  };

  return (
    <button
      type="button"
      className={`back-to-top${showTop ? " is-visible" : ""}`}
      aria-label="Volver arriba"
      tabIndex={showTop ? 0 : -1}
      onClick={scrollToTop}
    >
      <ArrowUp aria-hidden="true" />
    </button>
  );
}
