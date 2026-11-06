import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Picture } from "@/components/Picture";
import { Ruler } from "@/components/Ruler";
import { yachts } from "@/content/site";

export const metadata: Metadata = {
  title: "Jachten",
  description: "Jachten gebouwd door Jachtwerf Bendie: Impressive 2200, Impressive 1800, Trawler 1800 en de aluminium Trawler 53, met specificaties.",
};

export default function Jachten() {
  return (
    <>
      <header className="page-hero wrap">
        <h1 className="page-hero__title">Jachten</h1>
        <p className="page-hero__lead">Vier jachten die Bendie bouwde, met de maten zoals de werf ze publiceerde. Interesse in een vergelijkbaar jacht? Bespreek het met de werf.</p>
      </header>
      <div className="wrap yacht-list section" style={{ paddingTop: 0 }}>
        {yachts.map((y) => (
          <Link key={y.slug} href={`/jachten/${y.slug}/`} className="yacht-row" data-reveal>
            <div className="pic"><Picture img={y.cover} sizes="(min-width: 900px) 58vw, 100vw" /></div>
            <div className="yacht-row__t">
              <h2 className="h-sub">Bendie {y.name}</h2>
              <p className="lead">{y.tagline}</p>
              <p className="soft tnum">{y.specs[0].value} · {y.material.toLowerCase()} · doorvaarthoogte {y.specs[3].value}</p>
              <span className="link-arrow"><span>Specificaties en foto’s</span><ArrowRight aria-hidden /></span>
            </div>
          </Link>
        ))}
      </div>
      <section className="section field-sand" aria-labelledby="meetlat">
        <div className="wrap measure__head">
          <h2 id="meetlat" className="h-section">Uw jacht op de meetlat</h2>
          <p className="soft measure__intro">Zet de maten van uw jacht naast een Bendie, en mail ze in één keer naar de werf.</p>
        </div>
        <div className="wrap"><Ruler /></div>
      </section>
    </>
  );
}
