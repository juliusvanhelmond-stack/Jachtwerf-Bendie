import { Picture } from "@/components/Picture";
import { media } from "@/content/site";

const frames = [
  media.i2200Salon, media.t53Salon, media.i1800Stuur, media.i2200Trap, media.t1800Stuur,
  media.i1800Kombuis, media.t53Office, media.i2200Hut, media.t1800Salon, media.i1800Dinette,
  media.t53Kombuis, media.i2200Bad, media.t1800Dinette, media.i1800Hut,
];

/** Aboard: a quiet row of small portrait frames, interiors the werf built, scrolled sideways. */
export function AboardRow() {
  return (
    <section className="aboard" aria-labelledby="aboard-title">
      <h2 id="aboard-title" className="aboard__title">Aan boord <span className="soft">{frames.length} interieurs, op maat gebouwd</span></h2>
      <ul className="aboard__row" tabIndex={0} aria-label="Interieurfoto’s, horizontaal scrollen">
        {frames.map((f) => (
          <li key={f.src} className="aboard__frame pic">
            <Picture img={f} sizes="(min-width: 900px) 12vw, 36vw" />
          </li>
        ))}
      </ul>
    </section>
  );
}
