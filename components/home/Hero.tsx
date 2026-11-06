import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Picture } from "@/components/Picture";
import { media } from "@/content/site";

/**
 * Cinematic waterfront hero. A Bendie-built yacht on the Maas, slowly drifting; the name stands
 * on the water as a monument and is mirrored beneath its own waterline, where the reflection ripples.
 */
export function Hero() {
  return (
    <section className="hero field-midnight on-dark" aria-labelledby="hero-title">
      <div className="hero__media">
        <Picture img={media.hero} sizes="100vw" priority className="hero__img" />
      </div>
      <div className="hero__scrim" aria-hidden />

      <div className="hero__copy wrap">
        <p className="hero__statement">Vakmanschap dat verder vaart.</p>
        <p className="hero__sentence">
          Sinds 1977 bouwt, bouwt af, onderhoudt en stalt Jachtwerf Bendie motorjachten, pal aan de haven van Katwijk aan de Maas.
        </p>
        <div className="hero__actions">
          <Link href="/de-werf/" className="btn btn-red">Ontdek de werf<ArrowRight aria-hidden /></Link>
          <Link href="/contact/" className="btn btn-light">Neem contact op</Link>
        </div>
      </div>

      <div className="hero__name">
        <h1 id="hero-title" className="hero__word">
          <span className="sr-only">Jachtwerf </span>Bendie
        </h1>
        <div className="hero__reflection" aria-hidden>
          <span className="hero__word">Bendie</span>
        </div>
      </div>

      <div className="hero__foot wrap">
        <p className="small">Impressive 2200 ‘Temporalis’, gebouwd door Bendie, op de Maas</p>
        <a href="#de-naam" className="hero__cue small">
          <span>Naar de kade</span>
          <ArrowDown aria-hidden />
        </a>
      </div>

      <svg className="hero__filters" aria-hidden width="0" height="0" focusable="false">
        <filter id="ripple" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.006 0.09" numOctaves="1" seed="4" result="n">
            <animate attributeName="baseFrequency" dur="14s" values="0.006 0.09;0.008 0.12;0.006 0.09" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="n" scale="14" />
        </filter>
      </svg>
    </section>
  );
}
