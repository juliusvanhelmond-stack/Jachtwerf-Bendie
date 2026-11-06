import type { Metadata } from "next";
import { Suspense } from "react";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { ContactPreset } from "@/components/ContactPreset";
import { ContactScene } from "@/components/ContactScene";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met Jachtwerf Bendie, Havenlaan 18, 5433 NL Katwijk (Noord-Brabant), aan de Maas bij Cuijk.",
};

export default function Contact() {
  return (
    <>
      <header className="page-hero wrap">
        <h1 className="page-hero__title">Contact</h1>
        <p className="page-hero__lead">Vertel wat er aan uw jacht moet gebeuren. De werf neemt contact met u op.</p>
      </header>
      <section className="wrap split" style={{ paddingBottom: "var(--section)" }} aria-label="Contactformulier en gegevens">
        <div className="split__a">
          <Suspense fallback={<ContactForm />}><ContactPreset /></Suspense>
        </div>
        <div className="split__b prose">
          <h2 className="h-sub">{site.name}</h2>
          <address style={{ fontStyle: "normal" }}>
            {site.street}<br />{site.cityLine}<br />
            <a className="link" href={`mailto:${site.email}`}>{site.email}</a>
          </address>
          <p><a className="link-arrow" href={site.mapsUrl} target="_blank" rel="noopener noreferrer"><span>Route plannen</span><ArrowRight aria-hidden /></a></p>
          <p className="soft small">Telefoonnummer en openingstijden staan hier zodra de werf ze heeft bevestigd.</p>
        </div>
      </section>
      <ContactScene />
    </>
  );
}
