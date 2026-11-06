"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";

const extras = ["Winterklaar maken", "Onderwaterschip reinigen", "Motoronderhoud", "Schilderwerk", "Zelf werken tijdens de stalling"];

/** Build a winter storage request; it opens as an e-mail with every choice written out. */
export function StallingForm() {
  const [where, setWhere] = useState("Binnen");
  const [picked, setPicked] = useState<string[]>(["Winterklaar maken"]);
  const [len, setLen] = useState("");
  const [err, setErr] = useState("");
  const toggle = (x: string) => setPicked((p) => (p.includes(x) ? p.filter((y) => y !== x) : [...p, x]));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const n = parseFloat(len.replace(",", "."));
    if (!len || isNaN(n) || n < 3 || n > 40) {
      setErr("Vul de lengte van uw jacht in meters in, bijvoorbeeld 12,5.");
      document.getElementById("s-len")?.focus();
      return;
    }
    setErr("");
    const body = [
      "Beste Jachtwerf Bendie,",
      "",
      "Graag vraag ik winterstalling aan:",
      `- Lengte van het jacht: ${len} m`,
      `- Stallen: ${where.toLowerCase()}`,
      picked.length ? `- Graag ook: ${picked.join(", ").toLowerCase()}` : "",
      "",
      "Naam en telefoonnummer:",
      "",
      "Met vriendelijke groet,",
    ].filter((l) => l !== "").join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Winterstalling, jacht van ${len} m`)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="form" noValidate onSubmit={onSubmit}>
      <div className="field" data-invalid={!!err}>
        <label htmlFor="s-len">Lengte van uw jacht (meter)</label>
        <input id="s-len" inputMode="decimal" value={len} onChange={(e) => setLen(e.target.value)} placeholder="Bijvoorbeeld 12,5" aria-invalid={!!err || undefined} aria-describedby={err ? "s-err" : undefined} />
        {err && <p id="s-err" className="field__error">{err}</p>}
      </div>
      <fieldset className="checks field">
        <legend>Stallen</legend>
        {["Binnen", "Buiten"].map((w) => (
          <label key={w} className={`chip ${where === w ? "is-on" : ""}`}>
            <input type="radio" name="waar" checked={where === w} onChange={() => setWhere(w)} />{w}
          </label>
        ))}
      </fieldset>
      <fieldset className="checks field">
        <legend>Graag ook</legend>
        {extras.map((x) => (
          <label key={x} className={`chip ${picked.includes(x) ? "is-on" : ""}`}>
            <input type="checkbox" checked={picked.includes(x)} onChange={() => toggle(x)} />{x}
          </label>
        ))}
      </fieldset>
      <p className="form__note small">Opent uw e-mailprogramma met deze aanvraag aan {site.email}. Prijzen en beschikbaarheid hoort u van de werf.</p>
      <div><button type="submit" className="btn btn-red">Aanvraag opstellen<ArrowRight aria-hidden /></button></div>
    </form>
  );
}
