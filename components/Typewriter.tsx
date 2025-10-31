"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type TypewriterProps = {
  items: string[];
  typingSpeedMs?: number;
  eraseSpeedMs?: number;
  delayBetweenMs?: number;
  className?: string;
};

export function Typewriter({
  items,
  typingSpeedMs = 45,
  eraseSpeedMs = 30,
  delayBetweenMs = 1200,
  className = "",
}: TypewriterProps) {
  const safeItems = useMemo(() => (items.length ? items : [""]), [items]);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [erasing, setErasing] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const current = safeItems[index % safeItems.length];
    if (!erasing) {
      if (text.length < current.length) {
        timer.current = window.setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeedMs) as unknown as number;
      } else {
        timer.current = window.setTimeout(() => setErasing(true), delayBetweenMs) as unknown as number;
      }
    } else {
      if (text.length > 0) {
        timer.current = window.setTimeout(() => setText(current.slice(0, text.length - 1)), eraseSpeedMs) as unknown as number;
      } else {
        setErasing(false);
        setIndex((i) => (i + 1) % safeItems.length);
      }
    }
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [text, erasing, index, safeItems, typingSpeedMs, eraseSpeedMs, delayBetweenMs]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-white/80 align-middle" />
    </span>
  );
}


