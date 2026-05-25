"use client";

import { useEffect, useRef } from "react";
import { LOADER_READY_EVENT } from "../lib/events";

function isInViewport(element: Element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > window.innerHeight * 0.08;
}

function revealElement(element: Element) {
  element.classList.add("is-visible");
  element.querySelectorAll(".motion-text").forEach((text) => {
    text.classList.add("is-visible");
  });
}

function activateVisibleReveals() {
  document.querySelectorAll(".motion-reveal:not(.is-visible)").forEach((element) => {
    if (isInViewport(element)) {
      revealElement(element);
    }
  });
}

const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "clients", label: "Clients" },
  { id: "contact", label: "Contact" },
];

export function ScrollEffects() {
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const root = document.documentElement;
    const progressLine = document.querySelector<HTMLElement>(".scroll-progress__line");
    const sectionMarks = document.querySelectorAll<HTMLElement>("[data-scroll-section]");
    const heroStage = document.querySelector<HTMLElement>(".hero-scroll-stage");

    const updateScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;

      if (progressLine) {
        progressLine.style.transform = `scaleY(${progress})`;
      }

      sectionMarks.forEach((mark) => {
        const targetId = mark.dataset.scrollSection;
        const section = targetId ? document.getElementById(targetId) : null;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const passed = rect.top <= window.innerHeight * 0.45;
        const active =
          rect.top <= window.innerHeight * 0.5 &&
          rect.bottom >= window.innerHeight * 0.35;

        mark.classList.toggle("is-passed", passed);
        mark.classList.toggle("is-active", active);
      });

      if (heroStage) {
        const rect = heroStage.getBoundingClientRect();
        const heroProgress = Math.min(
          1,
          Math.max(0, -rect.top / Math.max(rect.height * 0.85, 1)),
        );
        root.style.setProperty("--hero-scale", `${1 - heroProgress * 0.045}`);
        root.style.setProperty("--hero-blur", `${heroProgress * 2}px`);
        root.style.setProperty("--hero-shift", `${heroProgress * -18}px`);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateScroll);
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealElement(entry.target);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    const observeReveals = () => {
      document.querySelectorAll(".motion-reveal:not(.is-visible)").forEach((node) => {
        revealObserver.observe(node);
      });
    };

    const handleReady = () => {
      requestAnimationFrame(() => {
        activateVisibleReveals();
        observeReveals();
        updateScroll();
        document.documentElement.classList.add("motion-ready");
      });
    };

    observeReveals();
    updateScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener(LOADER_READY_EVENT, handleReady);

    if (!document.documentElement.classList.contains("boot-loading")) {
      handleReady();
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener(LOADER_READY_EVENT, handleReady);
      revealObserver.disconnect();
      root.style.removeProperty("--hero-scale");
      root.style.removeProperty("--hero-blur");
      root.style.removeProperty("--hero-shift");
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress__track">
        <div className="scroll-progress__line" />
      </div>
      <div className="scroll-progress__sections">
        {SECTIONS.map((section) => (
          <span
            key={section.id}
            className="scroll-progress__mark"
            data-scroll-section={section.id}
          />
        ))}
      </div>
    </div>
  );
}
