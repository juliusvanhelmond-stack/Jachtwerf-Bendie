import { Picture } from "@/components/Picture";
import { media } from "@/content/site";

/** The name explained by the name: BEN-zine and DIE-sel, with the engine room set in the word space. */
export function NameIntro() {
  return (
    <section id="de-naam" className="name section" aria-labelledby="name-title">
      <div className="wrap">
        <h2 id="name-title" className="sr-only">Waar de naam Bendie vandaan komt</h2>
        <p className="name__line display" aria-hidden data-reveal>
          <span>Ben</span>
          <span className="name__frame pic" data-shutter>
            <Picture img={media.i1800Motoren} sizes="(min-width: 900px) 24vw, 80vw" />
          </span>
          <span>die</span>
        </p>
        <div className="name__text grid">
          <p className="lead name__lead" data-reveal style={{ ["--i" as string]: 1 }}>
            <strong>Benzine en diesel.</strong> De naam Bendie komt van de motoren die de jachten voortbewegen.
          </p>
          <p className="name__note soft" data-reveal style={{ ["--i" as string]: 2 }}>
            Een werf die het hele schip kent: van casco en laswerk tot machinekamer, betimmering en lak.
          </p>
        </div>

        <dl className="facts">
          {[
            ["1977", "Sinds dat jaar aan de haven van Katwijk aan de Maas, bij Cuijk"],
            ["15–22 m", "Lengtes waarin de Impressive-lijn werd aangeboden"],
            ["Staal en aluminium", "De rompen die de werf bouwde"],
            ["NJI", "Lid van de Nederlandse Jachtbouw Industrie"],
          ].map(([k, v], i) => (
            <div key={k} className="facts__item" data-reveal style={{ ["--i" as string]: i }}>
              <dt className="facts__key display">{k}</dt>
              <dd className="small soft">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
