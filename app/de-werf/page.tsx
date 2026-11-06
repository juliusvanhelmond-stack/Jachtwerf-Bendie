import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Picture } from "@/components/Picture";
import { NameIntro } from "@/components/home/NameIntro";
import { ContactScene } from "@/components/ContactScene";
import { media, site } from "@/content/site";

export const metadata: Metadata = {
  title: "De werf",
  description: "Jachtwerf Bendie ligt sinds 1977 pal aan de haven van Katwijk aan de Maas, bij Cuijk. Een werf voor bouwen, afbouwen, onderhoud en reparatie van jachten.",
};

export default function DeWerf() {
  return (
    <>
      <section className="photo-hero field-midnight on-dark" aria-labelledby="werf-title">
        <div className="pic"><Picture img={media.i2200Maas} sizes="100vw" priority /></div>
        <div className="photo-hero__inner wrap">
          <h1 id="werf-title" className="page-hero__title">De werf</h1>
          <p className="page-hero__lead">Sinds {site.since} aan de haven van Katwijk aan de Maas, bij Cuijk.</p>
        </div>
      </section>

      <section className="section wrap split" aria-labelledby="verhaal">
        <div className="split__a prose" data-reveal>
          <h2 id="verhaal" className="h-section">Een werf die het hele jacht kent</h2>
          <p>
            Jachtwerf Bendie is gespecialiseerd in het bouwen, afbouwen, onderhouden en repareren van jachten. Naast de eigen Bendie-kruisers bouwde de werf modellen van bekende ontwerpers: Vripack, Martin Bekebrede, Barkas en Van Vossen.
          </p>
          <p>
            In 2008 introduceerde Bendie de modellenlijn ‘Impressive’: stalen jachten van 15 tot 22 meter, ontworpen samen met Han van Vossen, met de uitstraling van een superjacht. Daarnaast bouwde de werf de Trawler 1800 in staal en de Trawler 53 in aluminium.
          </p>
          <p>
            Heeft u al een casco dat nog afgebouwd moet worden, of heeft u ergens een mooi model gezien? Dan is het de moeite waard om het met de werf te bespreken.
          </p>
          <p><Link href="/jachten/" className="link-arrow"><span>Bekijk de jachten</span><ArrowRight aria-hidden /></Link></p>
        </div>
        <figure className="split__b" data-reveal style={{ ["--i" as string]: 1 }}>
          <div className="pic" style={{ aspectRatio: "4 / 5" }}><Picture img={media.i2200Kombuis} sizes="(min-width: 900px) 40vw, 100vw" /></div>
          <figcaption className="credit">Kombuis van de Impressive 2200, in kersen met graniet (foto bendie.nl).</figcaption>
        </figure>
      </section>

      <NameIntro />

      <section className="section field-sand" aria-labelledby="ligging">
        <div className="wrap split">
          <div className="split__a prose">
            <h2 id="ligging" className="h-section" data-reveal>Pal aan de haven</h2>
            <p data-reveal style={{ ["--i" as string]: 1 }}>
              De werf ligt aan de {site.street} in Katwijk (Noord-Brabant), aan de haven bij Cuijk. Doordat de werf pal aan het water ligt, is ze gemakkelijk te bereiken, ook varend over de Maas.
            </p>
            <p data-reveal style={{ ["--i" as string]: 2 }}>
              <a className="link-arrow" href={site.mapsUrl} target="_blank" rel="noopener noreferrer"><span>Plan uw route in Google Maps</span><ArrowRight aria-hidden /></a>
            </p>
          </div>
          <figure className="split__b" data-reveal style={{ ["--i" as string]: 1 }}>
            <div className="pic" style={{ aspectRatio: "3 / 2" }}><Picture img={media.oever} sizes="(min-width: 900px) 40vw, 100vw" /></div>
            <figcaption className="credit">{media.oever.credit}.</figcaption>
          </figure>
        </div>
      </section>
      <ContactScene />
    </>
  );
}
