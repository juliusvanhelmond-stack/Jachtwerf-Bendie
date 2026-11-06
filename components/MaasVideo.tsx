"use client";
import { useEffect, useRef } from "react";
import { video } from "@/content/site";

/**
 * Silent, looping Maas footage. Plays only while on screen, never under prefers-reduced-motion
 * (the poster stays), and loads the small rendition on narrow screens.
 */
export function MaasVideo({ className }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduce.matches || saveData) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (v.preload !== "auto") { v.preload = "auto"; v.load(); }
          v.play().catch(() => {});
        } else v.pause();
      },
      { threshold: 0.05 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      preload="none"
      poster={video.maas.poster}
      aria-hidden="true"
      tabIndex={-1}
      disablePictureInPicture
    >
      <source src={video.maas.mp4Small} type="video/mp4" media="(max-width: 760px)" />
      <source src={video.maas.webm} type="video/webm" />
      <source src={video.maas.mp4} type="video/mp4" />
    </video>
  );
}
