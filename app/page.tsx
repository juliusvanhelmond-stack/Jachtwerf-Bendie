import { Hero } from "@/components/home/Hero";
import { NameIntro } from "@/components/home/NameIntro";
import { Dockside } from "@/components/home/Dockside";
import { CraftBand } from "@/components/home/CraftBand";
import { ServicesExplorer } from "@/components/ServicesExplorer";
import { YachtCarousel } from "@/components/YachtCarousel";
import { Ruler } from "@/components/Ruler";
import { SeasonSlip } from "@/components/SeasonSlip";
import { AboardRow } from "@/components/AboardRow";
import { ContactScene } from "@/components/ContactScene";

export default function Home() {
  return (
    <>
      <Hero />
      <NameIntro />
      <Dockside />
      <CraftBand />
      <section className="services section field-sand" aria-labelledby="svc-title">
        <div className="wrap services__head">
          <h2 id="svc-title" className="h-section" data-reveal>Wat de werf voor u doet</h2>
          <p className="soft services__intro" data-reveal style={{ ["--i" as string]: 1 }}>
            Bouwen, afbouwen, onderhouden, repareren en stallen, op één werf aan het water. Kies een onderdeel.
          </p>
        </div>
        <div className="wrap"><ServicesExplorer headingId="svc-title" /></div>
      </section>
      <YachtCarousel />
      <section className="measure section" aria-labelledby="measure-title">
        <div className="wrap measure__head">
          <h2 id="measure-title" className="h-section" data-reveal>Uw jacht op de meetlat</h2>
          <p className="soft measure__intro" data-reveal style={{ ["--i" as string]: 1 }}>
            Zet de maten van uw eigen jacht naast een jacht dat Bendie bouwde. Met één klik stuurt u ze naar de werf.
          </p>
        </div>
        <div className="wrap" data-reveal style={{ ["--i" as string]: 2 }}><Ruler /></div>
      </section>
      <SeasonSlip />
      <AboardRow />
      <ContactScene />
    </>
  );
}
