import { ArrowRight, ArrowUpRight } from "lucide-react";
import { MaasVideo } from "@/components/MaasVideo";
import { site, video } from "@/content/site";

/** The final waterfront scene: the address in display rows over the slow water. */
export function ContactScene() {
  return (
    <section className="cscene field-navy on-dark" aria-labelledby="cscene-title">
      <div className="cscene__water pic" aria-hidden><MaasVideo /></div>
      <div className="cscene__shade" aria-hidden />
      <h2 id="cscene-title" className="sr-only">Contact en route</h2>
      <address className="cscene__rows">
        <p className="cscene__row display" data-reveal>{site.name}</p>
        <a className="cscene__row display" href={site.mapsUrl} target="_blank" rel="noopener noreferrer" data-reveal style={{ ["--i" as string]: 1 }}>
          {site.street}<ArrowUpRight aria-hidden className="cscene__ext" /><span className="sr-only"> (route in Google Maps, opent in nieuw venster)</span>
        </a>
        <p className="cscene__row display" data-reveal style={{ ["--i" as string]: 2 }}>{site.cityLine}</p>
        <a className="cscene__row display" href={`mailto:${site.email}`} data-reveal style={{ ["--i" as string]: 3 }}>{site.email}</a>
        <div className="cscene__row cscene__hello display" data-reveal style={{ ["--i" as string]: 4 }}>
          <span>Welkom aan de kade</span>
          <a className="cscene__go" href="/contact/" aria-label="Naar het contactformulier"><ArrowRight aria-hidden /></a>
        </div>
      </address>
      <p className="cscene__note wrap small">
        Aan de Maas bij Cuijk, te bereiken over het water en over de weg. Bel- en openingstijden volgen zodra de werf ze bevestigt. <span className="soft">{video.maas.credit}.</span>
      </p>
    </section>
  );
}
