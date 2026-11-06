"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";

type Errors = Partial<Record<"naam" | "email" | "telefoon" | "bericht", string>>;
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

/**
 * Contact form with real validation. There is no backend in this demo, so sending opens the
 * visitor's own e-mail program with the message filled in. It never claims to have sent anything.
 */
export function ContactForm({ preset }: { preset?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const next: Errors = {};
    if (!v("naam")) next.naam = "Vul uw naam in.";
    if (!v("email")) next.email = "Vul uw e-mailadres in.";
    else if (!emailOk(v("email"))) next.email = "Dit e-mailadres lijkt niet te kloppen, bijvoorbeeld naam@voorbeeld.nl.";
    if (v("telefoon") && !/^[+\d][\d\s-]{7,}$/.test(v("telefoon"))) next.telefoon = "Gebruik alleen cijfers, spaties, + of -.";
    if (v("bericht").length < 10) next.bericht = "Schrijf in een paar woorden waar het om gaat.";
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      document.getElementById(`f-${first}`)?.focus();
      setOpened(false);
      return;
    }
    const subject = `${v("onderwerp")}: vraag van ${v("naam")}`;
    const body = [
      v("bericht"),
      "",
      `Naam: ${v("naam")}`,
      `E-mail: ${v("email")}`,
      v("telefoon") ? `Telefoon: ${v("telefoon")}` : "",
      v("jacht") ? `Jacht: ${v("jacht")}` : "",
    ].filter(Boolean).join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  const field = (name: keyof Errors | "jacht", label: string, type = "text", extra: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div className="field" data-invalid={name in errors && !!errors[name as keyof Errors]}>
      <label htmlFor={`f-${name}`}>{label}</label>
      <input
        id={`f-${name}`}
        name={name}
        type={type}
        aria-invalid={!!errors[name as keyof Errors] || undefined}
        aria-describedby={errors[name as keyof Errors] ? `e-${name}` : undefined}
        {...extra}
      />
      {errors[name as keyof Errors] && <p id={`e-${name}`} className="field__error">{errors[name as keyof Errors]}</p>}
    </div>
  );

  return (
    <form className="form" noValidate onSubmit={onSubmit}>
      <div className="form__row">
        {field("naam", "Naam", "text", { autoComplete: "name", required: true })}
        {field("email", "E-mailadres", "email", { autoComplete: "email", required: true })}
      </div>
      <div className="form__row">
        {field("telefoon", "Telefoon (optioneel)", "tel", { autoComplete: "tel", inputMode: "tel" })}
        <div className="field">
          <label htmlFor="f-onderwerp">Onderwerp</label>
          <select id="f-onderwerp" name="onderwerp" defaultValue={preset ?? "Onderhoud en reparatie"}>
            <option>Nieuwbouw en afbouw</option>
            <option>Onderhoud en reparatie</option>
            <option>Jachtbetimmering</option>
            <option>Installatie, hydrauliek en elektra</option>
            <option>Schilderwerk</option>
            <option>Winterstalling</option>
            <option>Iets anders</option>
          </select>
        </div>
      </div>
      {field("jacht", "Uw jacht (optioneel)", "text", { placeholder: "Merk, type en lengte" })}
      <div className="field" data-invalid={!!errors.bericht}>
        <label htmlFor="f-bericht">Uw vraag</label>
        <textarea id="f-bericht" name="bericht" aria-invalid={!!errors.bericht || undefined} aria-describedby={errors.bericht ? "e-bericht" : "h-bericht"} />
        {errors.bericht ? <p id="e-bericht" className="field__error">{errors.bericht}</p> : <p id="h-bericht" className="field__hint">Bijvoorbeeld wat er aan het jacht moet gebeuren, en wanneer.</p>}
      </div>
      <p className="form__note small">
        Deze demo verstuurt zelf niets. Na ‘Bericht opstellen’ opent uw e-mailprogramma met uw bericht aan {site.email}; u verstuurt het daar.
      </p>
      <div><button type="submit" className="btn btn-red">Bericht opstellen<ArrowRight aria-hidden /></button></div>
      <div aria-live="polite">
        {opened && (
          <p className="form__status">
            Uw e-mailprogramma is geopend met het bericht. Opende er niets? Mail dan rechtstreeks naar <a className="link" href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
