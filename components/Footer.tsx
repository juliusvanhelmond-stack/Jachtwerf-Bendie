import Link from "next/link";
import { nav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer field-midnight on-dark">
      <div className="site-footer__cols wrap">
        <div>
          <p className="site-footer__lead">{site.name}</p>
          <p className="soft">{site.street}<br />{site.cityLine}<br />aan de Maas, bij Cuijk</p>
        </div>
        <div>
          <p className="site-footer__lead">Pagina’s</p>
          <ul className="soft">
            <li><Link href="/">Home</Link></li>
            {nav.map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}
            <li><Link href="/contact/">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="site-footer__lead">Contact</p>
          <ul className="soft">
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">Route plannen</a></li>
          </ul>
        </div>
        <div>
          <p className="site-footer__lead">Over deze demo</p>
          <ul className="soft">
            <li><Link href="/bronnen/">Bronnen en beeldrechten</Link></li>
            <li>Lid van de <a href="https://jachtbouw.nl/nji-lid/jachtwerf-bendie-b-v/" target="_blank" rel="noopener noreferrer">NJI</a></li>
          </ul>
        </div>
      </div>
      <div className="site-footer__mark" aria-hidden="true">
        <svg viewBox="0 0 1000 180" preserveAspectRatio="xMidYMax meet">
          <text x="0" y="172" textLength="1000" lengthAdjust="spacingAndGlyphs">BENDIE</text>
        </svg>
      </div>
      <p className="site-footer__legal wrap soft small">
        Conceptdemo door JUNEStudio voor Jachtwerf Bendie, geen officiële website. Foto’s van jachten en interieurs: bendie.nl; sfeerbeelden met bronvermelding op <Link href="/bronnen/">Bronnen</Link>.
      </p>
    </footer>
  );
}
