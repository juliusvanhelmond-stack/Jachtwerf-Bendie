import type { Metadata } from "next";
import { media, video } from "@/content/site";

export const metadata: Metadata = { title: "Bronnen en beeldrechten", description: "Bronnen, feiten en beeldrechten van deze demo voor Jachtwerf Bendie." };

const found = [
  { what: "De Maas bij Cuijk, vanaf de kade", by: "Hermann Luyken", lic: "CC0", url: "https://commons.wikimedia.org/w/index.php?curid=27766618" },
  { what: "De Maas bij Cuijk, de overkant", by: "Hermann Luyken", lic: "CC0", url: "https://commons.wikimedia.org/w/index.php?curid=27766786" },
  { what: "Sfeerfilm ‘River Maas 0036’ (ingekort, vertraagd en heen-en-terug gemonteerd; de bewerking valt onder dezelfde licentie)", by: "Quahadi Añtó", lic: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:River_Maas_0036.webm" },
  { what: "Haarlemse jachtwerf, boten worden binnengehaald (1994). Niet Bendie.", by: "Rob Hendriks, Noord-Hollands Archief", lic: "CC0", url: "https://commons.wikimedia.org/wiki/File:De_Haarlemse_jachtwerf_J._van_Opzeeland_aan_de_Zuid_Schalkwijkerweg._De_boten_worden_weer_naar_binnen_gehaald._NL-HlmNHA_54035307.JPG" },
  { what: "Lasser op de werf van Bartram & Sons, Sunderland (1956). Niet Bendie.", by: "Tyne & Wear Archives & Museums", lic: "Geen bekende auteursrechten (Flickr Commons)", url: "https://commons.wikimedia.org/wiki/File:This_photograph_shows_a_workman_welding_at_the_shipyard_of_Bartram_%26_Sons_Ltd,_South_Dock,_16_April_1956._(11187432825).jpg" },
];

export default function Bronnen() {
  void media; void video;
  return (
    <>
      <header className="page-hero wrap">
        <h1 className="page-hero__title" style={{ fontSize: "clamp(2.6rem, 8vw, 8rem)" }}>Bronnen</h1>
        <p className="page-hero__lead">Deze site is een conceptdemo van JUNEStudio. Zo is hij gemaakt.</p>
      </header>
      <section className="wrap section prose" style={{ paddingTop: 0 }}>
        <h2>Feiten</h2>
        <p>Teksten over de werf, de diensten, de winterstalling en de jachten zijn gebaseerd op de bestaande website <a className="link" href="https://www.bendie.nl/backup_website/">bendie.nl</a> en het ledenprofiel bij de <a className="link" href="https://jachtbouw.nl/nji-lid/jachtwerf-bendie-b-v/">Nederlandse Jachtbouw Industrie</a>. Telefoonnummer, openingstijden en reviews zijn bewust weggelaten tot de werf ze bevestigt.</p>
        <h2>Foto’s van Bendie</h2>
        <p>Alle foto’s van jachten, interieurs, machinekamers en de stallingshal komen van bendie.nl en zijn gebruikt als voorbeeld voor de klant. Ze zijn verkleind en licht in kleur gelijkgetrokken; er is niets gegenereerd of toegevoegd.</p>
        <h2>Sfeerbeelden met open licentie</h2>
        <ul className="credits-list">
          {found.map((f) => (
            <li key={f.url}>
              <span>{f.what}</span>
              <span className="soft small">{f.by} · {f.lic} · <a className="link" href={f.url}>bron</a></span>
            </li>
          ))}
        </ul>
        <h2>Lettertypen</h2>
        <p>Unbounded en Onest, beide onder de SIL Open Font License, via Google Fonts.</p>
      </section>
    </>
  );
}
