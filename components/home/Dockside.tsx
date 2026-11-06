"use client";
import { useEffect, useRef } from "react";
import { Picture } from "@/components/Picture";
import { MaasVideo } from "@/components/MaasVideo";
import { media, video } from "@/content/site";

/**
 * The dockside moment: you stand on the quay, then the quay falls away and only the water is left.
 * Native scroll drives one CSS variable (--p); nothing is pinned on phones or under reduced motion.
 */
export function Dockside() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia("(min-width: 900px)");
    let raf = 0;
    const update = () => {
      raf = 0;
      if (reduce.matches || !wide.matches) { el.style.setProperty("--p", "1"); return; }
      const r = el.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, span)));
      el.style.setProperty("--p", p.toFixed(4));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={ref} className="dock field-navy on-dark" aria-labelledby="dock-title">
      <div className="dock__stage">
        <div className="dock__water pic">
          <MaasVideo />
        </div>
        <div className="dock__quay pic">
          <Picture img={media.kade} sizes="100vw" />
        </div>
        <div className="dock__copy wrap">
          <h2 id="dock-title" className="h-section dock__title">Aan de kade, aan de Maas</h2>
          <p className="lead dock__lead">
            Pal aan de haven van Katwijk. U vaart er zó naartoe; via de eigen helling gaat uw jacht uit het water.
          </p>
        </div>
        <p className="dock__credit credit wrap">
          {media.kade.credit}. {video.maas.credit}.
        </p>
      </div>
    </section>
  );
}
