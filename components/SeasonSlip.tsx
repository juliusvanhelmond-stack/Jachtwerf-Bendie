import { Picture } from "@/components/Picture";
import { media, season } from "@/content/site";

/** A season at the werf, printed as a slip: from the quay, over the slipway, into the hall and back. */
export function SeasonSlip() {
  return (
    <section className="season section field-sand" aria-labelledby="season-title">
      <div className="wrap grid season__grid">
        <div className="season__left">
          <h2 id="season-title" className="h-section" data-reveal>Een seizoen op de werf</h2>
          <p className="season__text" data-reveal style={{ ["--i" as string]: 1 }}>
            Van de kade over de helling, de hal in en in het voorjaar weer terug op de Maas. Wat er tussendoor gebeurt, bepaalt u: de werf doet het werk, of u werkt zelf aan uw jacht, het hele jaar door.
          </p>
          <figure className="season__pic" data-reveal style={{ ["--i" as string]: 2 }}>
            <div className="pic"><Picture img={media.stallingHal} sizes="(min-width: 900px) 34vw, 100vw" /></div>
            <figcaption className="credit">De overdekte stalling van Jachtwerf Bendie (foto bendie.nl).</figcaption>
          </figure>
        </div>
        <div className="slip" data-reveal style={{ ["--i" as string]: 1 }}>
          <p className="slip__head">Jachtwerf Bendie<br /><span className="soft">Havenlaan 18, Katwijk</span></p>
          {season.map((g) => (
            <div key={g.when} className="slip__group">
              <p className="slip__when">{g.when}</p>
              <ul>
                {g.rows.map((r) => (
                  <li key={r.what} className="slip__row">
                    <span>{r.what}</span>
                    <span className="slip__dots" aria-hidden />
                    <span className="slip__where">{r.where}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="slip__total"><span>Klaar voor het seizoen</span><span>Te water</span></p>
        </div>
      </div>
    </section>
  );
}
