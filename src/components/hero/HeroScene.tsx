"use client";

import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";

const Hero3DScene = dynamic(() => import("./Hero3DScene").then((m) => m.Hero3DScene), { ssr: false });

function subscribe(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getSnapshot() {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot() {
  return false;
}

export function HeroScene({ className }: { className?: string }) {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!enabled) return null;

  return (
    <div className={className} style={{ pointerEvents: "none" }}>
      <Hero3DScene />
    </div>
  );
}
