"use client";

import { useEffect, useState } from "react";

export function MotionReadout() {
  const [scrollPct, setScrollPct] = useState(0);
  const [section, setSection] = useState("Hero");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (coarse || reduced) return;

    setVisible(true);

    const sections = [
      { id: "hero", label: "Hero" },
      { id: "about", label: "About" },
      { id: "services", label: "Services" },
      { id: "clients", label: "Clients" },
      { id: "contact", label: "Contact" },
    ];

    const update = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      setScrollPct(Math.round(progress * 100));

      const current = sections.find(({ id }) => {
        const node = document.getElementById(id);
        if (!node) return false;
        const rect = node.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.42 && rect.bottom > window.innerHeight * 0.28;
      });

      setSection(current?.label ?? "Hero");
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="motion-readout" aria-hidden="true">
      <div className="motion-readout__row">
        <span>Scroll</span>
        <strong>{scrollPct}%</strong>
      </div>
      <div className="motion-readout__row">
        <span>Section</span>
        <strong>{section}</strong>
      </div>
    </div>
  );
}
