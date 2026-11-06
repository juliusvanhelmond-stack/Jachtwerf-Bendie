import type { Metadata } from "next";
import { Picture } from "@/components/Picture";
import { SeasonSlip } from "@/components/SeasonSlip";
import { StallingForm } from "@/components/StallingForm";
import { media } from "@/content/site";

export const metadata: Metadata = {
  title: "Winterstalling",
  description: "Winterstalling bij Jachtwerf Bendie: uit het water via de eigen helling, onderwaterschip reinigen, binnen of buiten stallen en het hele jaar zelf aan uw jacht werken.",
};

export default function Winterstalling() {
  return (
    <>
      <header className="page-hero wrap">
        <h1 className="page-hero__title">Winter&shy;stalling</h1>
        <p className="page-hero__lead">Het einde van het vaarseizoen nadert? Breng uw jacht naar de werf, binnen of buiten gestald.</p>
      </header>
      <section className="wrap split" aria-label="Zo werkt het">
        <div className="split__a prose" data-reveal>
          <p>Via de eigen helling haalt de werf uw jacht met een botenwagen uit het water. Daarna wordt het onderwaterschip gereinigd op de speciaal daarvoor aangelegde wasplaats.</p>
          <p>U kunt uw jacht zowel binnen als buiten stallen. Het hele jaar mag u zelf aan uw jacht werken. Geen tijd? Dan doet de werf het graag voor u, ook het winterklaar maken.</p>
        </div>
        <figure className="split__b" data-reveal style={{ ["--i" as string]: 1 }}>
          <div className="pic" style={{ aspectRatio: "4 / 3" }}><Picture img={media.archiefHelling} sizes="(min-width: 900px) 40vw, 100vw" /></div>
          <figcaption className="credit">{media.archiefHelling.credit}. Zo gaat een jacht met een botenwagen over de helling; foto’s van Bendie’s eigen helling volgen.</figcaption>
        </figure>
      </section>
      <div style={{ height: "var(--section)" }} />
      <SeasonSlip />
      <section className="section wrap split" aria-labelledby="aanvraag">
        <div className="split__a">
          <h2 id="aanvraag" className="h-section" data-reveal>Stalling aanvragen</h2>
          <p className="soft" data-reveal style={{ marginTop: 18, maxWidth: "38ch" }}>Kies wat u nodig heeft; uw e-mailprogramma zet de aanvraag voor u klaar.</p>
          <figure data-reveal style={{ margin: "32px 0 0" }}>
            <div className="pic" style={{ aspectRatio: "4 / 3" }}><Picture img={media.stallingHal} sizes="(min-width: 900px) 40vw, 100vw" /></div>
            <figcaption className="credit">De overdekte stalling van Jachtwerf Bendie (foto bendie.nl).</figcaption>
          </figure>
        </div>
        <div className="split__b"><StallingForm /></div>
      </section>
    </>
  );
}
