"use client";

import { useEffect, useState } from "react";

type LiveMetric = {
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
  delta: string;
  deltaTone?: "up" | "good" | "neutral";
};

const dashboardMetrics: LiveMetric[] = [
  {
    label: "Revenue",
    value: 124580,
    delta: "+18.4%",
    deltaTone: "up",
  },
  {
    label: "Users",
    value: 2418,
    delta: "+312",
    deltaTone: "up",
  },
  {
    label: "Uptime",
    value: 99.9,
    suffix: "%",
    decimals: 1,
    delta: "Stable",
    deltaTone: "good",
  },
];

function formatMetric(metric: LiveMetric, value: number) {
  if (metric.label === "Revenue") {
    return `$${Math.round(value / 1000)}K`;
  }

  if (metric.suffix === "%") {
    return `${value.toFixed(metric.decimals ?? 0)}%`;
  }

  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  }

  return `${Math.round(value)}`;
}

export function HeroLiveDashboard() {
  const [metrics, setMetrics] = useState(dashboardMetrics);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMetrics((current) =>
        current.map((metric) => {
          if (metric.label === "Uptime") {
            return metric;
          }

          const growth =
            metric.label === "Revenue"
              ? Math.round(Math.random() * 280 + 60)
              : Math.round(Math.random() * 2);

          return { ...metric, value: metric.value + growth };
        }),
      );
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="hero-dashboard__metrics">
      {metrics.map((metric) => (
        <div key={metric.label} className="hero-metric hero-metric--live">
          <span className="hero-metric__label">{metric.label}</span>
          <span className="hero-metric__value">
            {formatMetric(metric, metric.value)}
          </span>
          <span
            className={`hero-metric__delta${
              metric.deltaTone === "good" ? " hero-metric__delta--good" : ""
            }`}
          >
            {metric.delta}
          </span>
        </div>
      ))}
    </div>
  );
}
