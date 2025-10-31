"use client";

import { useEffect, useRef, useState } from "react";

type Quote = { text: string; cite: string };

const QUOTES: Quote[] = [
  {
    text:
      "Students who participated in undergraduate research were twice as likely to graduate in 4 years and over 10 times as likely to graduate in 6 years. Equity gaps in graduation rates (race, income, first-gen) were cut in half—or even closed—by research experience.",
    cite: "(Estrada et al., 2024)",
  },
  {
    text:
      "Lack of access to high-quality undergraduate research experiences can hinder a student in obtaining future opportunities… because of informal networking and community effects.",
    cite: "(Oregon State University, 2024)",
  },
  {
    text:
      "Exposure to undergraduate research is a powerful driver for persistence and upward mobility, but participation is suppressed for students at under-resourced institutions and those with limited connections.",
    cite: "(Carmeli et al., 2024)",
  },
  {
    text:
      "Financial barriers, geography, resource gaps, and lack of industry/academic networks are primary drivers of disparity in who accesses research/internships.",
    cite: "(Morehead Planetarium, 2024)",
  },
];

export function QuoteRotator() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // Randomize between 4–6 seconds
    const dwell = 4000 + Math.floor(Math.random() * 2000);
    timeoutRef.current = window.setTimeout(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIdx((i) => (i + 1) % QUOTES.length);
        setVisible(true);
      }, 280); // fade out duration should match CSS
    }, dwell) as unknown as number;
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [idx]);

  const { text, cite } = QUOTES[idx];

  return (
    <figure
      className={`transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <blockquote className="heading-serif text-sm leading-relaxed text-white/90">
        “{text}” <span className="text-white/70">{cite}</span>
      </blockquote>
    </figure>
  );
}


