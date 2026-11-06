import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Picture } from "@/components/Picture";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Diensten",
  description: "Nieuwbouw en afbouw, onderhoud en reparatie, jachtbetimmering, installatie en elektra, schilderwerk, cascobouw en winterstalling bij Jachtwerf Bendie.",
};

export default function Diensten() {
  return (
    <>
      <header className="page-hero wrap">
        <h1 className="page-hero__title">Diensten</h1>
        <p className="page-hero__lead">Van een nieuwe impeller tot een compleet nieuw interieur: alles aan uw jacht op één werf aan het water.</p>
      </header>
      <div className="wrap">
        {services.map((s, i) => (
          <section key={s.id} id={s.id} className="service-block" aria-labelledby={`h-${s.id}`}>
            <figure className="pic" data-reveal style={{ margin: 0 }}>
              <Picture img={s.image} sizes="(min-width: 900px) 40vw, 100vw" />
            </figure>
            <div className="service-block__t" data-reveal style={{ ["--i" as string]: 1 }}>
              <h2 id={`h-${s.id}`} className="h-sub">{s.name}</h2>
              <p className="lead">{s.short}</p>
              <p>{s.text}</p>
              {s.items && <ul>{s.items.map((it) => <li key={it}>{it}</li>)}</ul>}
              {s.image.credit && <p className="credit">{s.image.credit}.</p>}
              <p>
                <Link className="link-arrow" href={s.id === "winterstalling" ? "/winterstalling/" : `/contact/?onderwerp=${encodeURIComponent(s.name)}`}>
                  <span>{s.id === "winterstalling" ? "Alles over winterstalling" : "Vraag dit aan"}</span><ArrowRight aria-hidden />
                </Link>
              </p>
            </div>
            {i === 0 && <span className="sr-only">Gebruik de koppen om tussen diensten te springen.</span>}
          </section>
        ))}
      </div>
    </>
  );
}
