import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Picture } from "@/components/Picture";
import { yachts } from "@/content/site";

export function generateStaticParams() {
  return yachts.map((y) => ({ slug: y.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const y = yachts.find((v) => v.slug === slug);
  if (!y) return {};
  return { title: `Bendie ${y.name}`, description: `${y.tagline}. ${y.intro}` };
}

export default async function YachtPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = yachts.findIndex((v) => v.slug === slug);
  if (idx < 0) notFound();
  const y = yachts[idx];
  const next = yachts[(idx + 1) % yachts.length];
  const prev = yachts[(idx - 1 + yachts.length) % yachts.length];
  return (
    <>
      <section className="photo-hero field-midnight on-dark" aria-labelledby="y-title">
        <div className="pic"><Picture img={y.cover} sizes="100vw" priority /></div>
        <div className="photo-hero__inner wrap">
          <h1 id="y-title" className="page-hero__title" style={{ fontSize: "clamp(2.6rem, 9vw, 9rem)" }}>{y.name}</h1>
          <p className="page-hero__lead">{y.tagline}</p>
        </div>
      </section>
      <section className="section wrap split" aria-label="Over dit jacht">
        <div className="split__a prose">
          <p className="lead" data-reveal>{y.intro}</p>
          {y.body.map((b, k) => <p key={k} data-reveal style={{ ["--i" as string]: k + 1 }}>{b}</p>)}
          {(y.designer || y.premiere) && (
            <p className="soft" data-reveal>
              {y.designer && <>Ontwerp: {y.designer}. </>}
              {y.premiere && <>Primeur: {y.premiere}.</>}
            </p>
          )}
        </div>
        <div className="split__b" data-reveal style={{ ["--i" as string]: 1 }}>
          <table className="specs">
            <caption className="sr-only">Specificaties {y.name}</caption>
            <tbody>
              {y.specs.map((s) => (
                <tr key={s.label}><th scope="row">{s.label}</th><td>{s.value}</td></tr>
              ))}
            </tbody>
          </table>
          <p className="credit">Bron: bendie.nl. Specificaties van het gebouwde jacht; een nieuw jacht wordt op maat uitgevoerd.</p>
          <p style={{ marginTop: 24 }}>
            <Link href={`/contact/?onderwerp=${encodeURIComponent("Nieuwbouw en afbouw")}`} className="btn btn-red">Bespreek een vergelijkbaar jacht<ArrowRight aria-hidden /></Link>
          </p>
        </div>
      </section>
      <section className="wrap" aria-label={`Foto’s van de ${y.name}`}>
        <div className="mosaic">
          {y.gallery.map((g) => (
            <figure key={g.src} className="pic" style={{ margin: 0 }} data-reveal>
              <Picture img={g} sizes="(min-width: 900px) 50vw, 100vw" />
            </figure>
          ))}
        </div>
        <p className="credit">Foto’s: bendie.nl.</p>
      </section>
      <nav className="wrap section" aria-label="Andere jachten" style={{ display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
        <Link className="link-arrow" href={`/jachten/${prev.slug}/`}><ArrowLeft aria-hidden /><span>{prev.name}</span></Link>
        <Link className="link-arrow" href={`/jachten/${next.slug}/`}><span>{next.name}</span><ArrowRight aria-hidden /></Link>
      </nav>
    </>
  );
}
