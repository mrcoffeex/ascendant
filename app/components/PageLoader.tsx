"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import brandIcon from "../icon.png";
import { LOADER_READY_EVENT } from "../lib/events";

const GRID_SIZE = 12;
const LOADER_KEY = "ascendant-loader-seen";

export function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "exit" | "done">("loading");

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const seenLoader = sessionStorage.getItem(LOADER_KEY) === "1";

    if (reducedMotion || seenLoader) {
      document.documentElement.classList.remove("boot-loading");
      window.dispatchEvent(new CustomEvent(LOADER_READY_EVENT));
      setPhase("done");
      return;
    }

    document.documentElement.classList.add("boot-loading");
    sessionStorage.setItem(LOADER_KEY, "1");

    let frame = 0;
    let value = 0;
    const start = performance.now();
    const duration = 1100;

    const tick = (now: number) => {
      const elapsed = now - start;
      const simulated = Math.min(92, Math.round((elapsed / duration) * 92));
      value = Math.max(value, simulated);
      setProgress(value);

      if (elapsed < duration) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    const finish = () => {
      setProgress(100);
      window.setTimeout(() => setPhase("exit"), 140);
      window.setTimeout(() => {
        document.documentElement.classList.remove("boot-loading");
        window.dispatchEvent(new CustomEvent(LOADER_READY_EVENT));
        setPhase("done");
      }, 820);
    };

    if (document.readyState === "complete") {
      window.setTimeout(finish, duration);
    } else {
      window.addEventListener("load", () => window.setTimeout(finish, duration), {
        once: true,
      });
    }

    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("boot-loading");
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`page-loader${phase === "exit" ? " page-loader--exit" : ""}`}
      aria-hidden="true"
    >
      <div className="page-loader__grid">
        {Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, index) => (
          <span
            key={index}
            className="page-loader__cell"
            style={{ animationDelay: `${(index % GRID_SIZE) * 14}ms` }}
          />
        ))}
      </div>
      <div className="page-loader__content">
        <Image
          src={brandIcon}
          alt=""
          width={32}
          height={32}
          priority
          className="page-loader__mark"
        />
        <div className="page-loader__line">
          <span
            className="page-loader__bar"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="page-loader__percent">{progress}%</span>
      </div>
    </div>
  );
}
