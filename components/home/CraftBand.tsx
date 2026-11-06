import { Picture } from "@/components/Picture";
import { media } from "@/content/site";

const panels = [
  { img: media.i2200Kombuis, title: "Kersen, esdoorn en mat RVS", grow: 5 },
  { img: media.i2200Kikkers, title: "Gepolijste kikkers", grow: 2 },
  { img: media.onderhoud, title: "Een machinekamer om in te werken", grow: 3 },
  { img: media.i2200Bel, title: "De scheepsbel boven het teak", grow: 2 },
];

/** Craftsmanship in motion: one folded band of real Bendie details; a panel opens as you point at it. */
export function CraftBand() {
  return (
    <section className="craft section" aria-labelledby="craft-title">
      <div className="wrap craft__head">
        <h2 id="craft-title" className="h-section" data-reveal>Gebouwd om lang mee te varen</h2>
        <p className="craft__intro soft" data-reveal style={{ ["--i" as string]: 1 }}>
          Het interieur wordt geheel op maat gebouwd en de indeling kiest de eigenaar. Details uit de Impressive 2200 en Impressive 1800.
        </p>
      </div>
      <ul className="craft__band" data-reveal style={{ ["--i" as string]: 2 }}>
        {panels.map((p, i) => (
          <li key={p.title} className="craft__panel pic" style={{ ["--g" as string]: p.grow }} tabIndex={0}>
            <Picture img={p.img} sizes="(min-width: 900px) 40vw, 60vw" />
            <p className={`craft__label ${i === 0 ? "is-first" : ""}`}>{p.title}</p>
          </li>
        ))}
      </ul>
      <p className="wrap credit">Alle foto’s in deze band: jachten gebouwd door Jachtwerf Bendie, van bendie.nl.</p>
    </section>
  );
}
