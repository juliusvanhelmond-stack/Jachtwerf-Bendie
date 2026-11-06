"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Picture } from "@/components/Picture";
import { yachts } from "@/content/site";

/** Fullscreen editorial carousel of the yachts Bendie built: swipe, arrow keys, buttons and thumbnails. */
export function YachtCarousel() {
  const [i, setI] = useState(0);
  const n = yachts.length;
  const go = useCallback((j: number) => setI(((j % n) + n) % n), [n]);
  const start = useRef<{ x: number; y: number } | null>(null);
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (!el.contains(document.activeElement)) return;
      if (e.key === "ArrowRight") { e.preventDefault(); go(i + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(i - 1); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [i, go]);

  const onDown = (e: React.PointerEvent) => { start.current = { x: e.clientX, y: e.clientY }; };
  const onUp = (e: React.PointerEvent) => {
    const s = start.current; start.current = null;
    if (!s) return;
    const dx = e.clientX - s.x, dy = e.clientY - s.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) go(i + (dx < 0 ? 1 : -1));
  };

  return (
    <section
      ref={root}
      className="yc field-navy on-dark"
      aria-roledescription="carrousel"
      aria-labelledby="yc-title"
    >
      <div className="yc__head wrap">
        <h2 id="yc-title" className="yc__title display">Jachten</h2>
        <Link href="/jachten/" className="link-arrow"><span>Alle jachten en specificaties</span><ArrowRight aria-hidden /></Link>
      </div>

      <div className="yc__viewport" onPointerDown={onDown} onPointerUp={onUp} onPointerCancel={() => (start.current = null)}>
        {yachts.map((y, k) => (
          <article
            key={y.slug}
            className={`yc__slide ${k === i ? "is-active" : ""}`}
            aria-roledescription="dia"
            aria-label={`${k + 1} van ${n}: ${y.name}`}
            aria-hidden={k !== i}
            inert={k !== i ? true : undefined}
          >
            <div className="yc__pic pic">
              <Picture img={y.cover} sizes="(min-width: 900px) 62vw, 100vw" />
            </div>
            <div className="yc__text">
              <h3 className="h-sub">Bendie {y.name}</h3>
              <p className="lead">{y.tagline}</p>
              <dl className="yc__specs tnum">
                <div><dt className="soft small">Lengte</dt><dd>{y.specs[0].value}</dd></div>
                <div><dt className="soft small">Doorvaarthoogte</dt><dd>{y.specs[3].value}</dd></div>
                <div><dt className="soft small">Romp</dt><dd>{y.material}</dd></div>
              </dl>
              <p className="soft yc__intro">{y.intro}</p>
              <Link href={`/jachten/${y.slug}/`} className="link-arrow" tabIndex={k === i ? 0 : -1}>
                <span>Bekijk de {y.name}</span><ArrowRight aria-hidden />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="yc__controls wrap">
        <div className="yc__thumbs" role="group" aria-label="Kies een jacht">
          {yachts.map((y, k) => (
            <button
              key={y.slug}
              type="button"
              className={`yc__thumb ${k === i ? "is-active" : ""}`}
              aria-label={`Toon ${y.name}`}
              aria-current={k === i ? "true" : undefined}
              onClick={() => go(k)}
            >
              <Picture img={y.cover} sizes="120px" />
              <span className="small">{y.name}</span>
            </button>
          ))}
        </div>
        <div className="yc__arrows">
          <button type="button" className="yc__arrow" onClick={() => go(i - 1)} aria-label="Vorig jacht"><ArrowLeft aria-hidden /></button>
          <button type="button" className="yc__arrow" onClick={() => go(i + 1)} aria-label="Volgend jacht"><ArrowRight aria-hidden /></button>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">{`${yachts[i].name}, ${i + 1} van ${n}`}</p>
    </section>
  );
}
