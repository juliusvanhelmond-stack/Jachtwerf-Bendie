"use client";
import { useId, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { site, yachts } from "@/content/site";

const MAX = 24; // metres on the ruler
const U = 10; // svg units per metre
const fmt = (v: number) => v.toLocaleString("nl-NL", { minimumFractionDigits: 1, maximumFractionDigits: 2 });

/** A side profile drawn the way the Bendie logo draws a yacht: one line, at true scale. */
function profile(L: number, H: number, D: number, knik: boolean) {
  const f = H * 0.34, c = H * 0.66;
  const pts: [number, number][] = [
    [0.02 * L, 0], [0.12 * L, -D * 0.75], [0.18 * L, -D], [0.68 * L, -D],
    [knik ? 0.95 * L : 0.9 * L, -D * 0.2], [L, f], [0.8 * L, f],
    [knik ? 0.66 * L : 0.7 * L, c], [knik ? 0.34 * L : 0.26 * L, c],
    [knik ? 0.3 * L : 0.2 * L, f], [0, f], [0.02 * L, 0],
  ];
  const mast: [number, number][] = [[0.46 * L, c], [0.49 * L, H], [0.55 * L, H]];
  const toPath = (p: [number, number][]) => p.map(([x, y], k) => `${k ? "L" : "M"}${(x * U).toFixed(1)} ${(-y * U).toFixed(1)}`).join("");
  return toPath(pts) + toPath(mast);
}

/**
 * The live thing: put your own yacht on the ruler next to the yachts Bendie built,
 * then send the werf an e-mail with those measurements already filled in.
 */
export function Ruler() {
  const id = useId();
  const [model, setModel] = useState(yachts[0].slug);
  const [len, setLen] = useState(12.5);
  const [air, setAir] = useState(3.2);
  const [draft, setDraft] = useState(1.1);
  const y = yachts.find((v) => v.slug === model)!;

  const diff = y.lengthM - len;
  const compare =
    Math.abs(diff) < 0.05
      ? `Uw jacht is precies zo lang als de ${y.name}.`
      : `Uw jacht is ${fmt(Math.abs(diff))} m ${diff > 0 ? "korter" : "langer"} dan de ${y.name}.`;

  const mail = useMemo(() => {
    const subject = `Stalling of onderhoud voor een jacht van ${fmt(len)} m`;
    const body = [
      "Beste Jachtwerf Bendie,",
      "",
      "Ik wil graag de mogelijkheden bespreken voor mijn jacht:",
      `- Lengte: ${fmt(len)} m`,
      `- Doorvaarthoogte: ${fmt(air)} m`,
      `- Diepgang: ${fmt(draft)} m`,
      "",
      "Het gaat om: (winterstalling / onderhoud / anders)",
      "",
      "Met vriendelijke groet,",
    ].join("\n");
    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [len, air, draft]);

  const W = MAX * U + 20;
  const top = 6.5 * U, water = 2.6 * U, bottom = water + 1.6 * U;

  return (
    <div className="ruler">
      <div className="ruler__controls">
        <fieldset className="ruler__models">
          <legend className="small soft">Vergelijk met</legend>
          {yachts.map((v) => (
            <label key={v.slug} className={`chip ${v.slug === model ? "is-on" : ""}`}>
              <input type="radio" name={`${id}-m`} value={v.slug} checked={v.slug === model} onChange={() => setModel(v.slug)} />
              {v.name}
            </label>
          ))}
        </fieldset>

        <div className="ruler__sliders">
          {[
            { k: "len", label: "Lengte van uw jacht", v: len, set: setLen, min: 6, max: 24, step: 0.1 },
            { k: "air", label: "Doorvaarthoogte", v: air, set: setAir, min: 1.5, max: 6, step: 0.05 },
            { k: "draft", label: "Diepgang", v: draft, set: setDraft, min: 0.4, max: 2.5, step: 0.05 },
          ].map((s) => (
            <label key={s.k} className="slider">
              <span className="slider__row"><span>{s.label}</span><output className="tnum">{fmt(s.v)} m</output></span>
              <input type="range" min={s.min} max={s.max} step={s.step} value={s.v} onChange={(e) => s.set(parseFloat(e.target.value))} />
            </label>
          ))}
        </div>
      </div>

      <figure className="ruler__figure on-dark">
        <svg viewBox={`-10 ${-top} ${W} ${top + bottom}`} role="img" aria-labelledby={`${id}-cap`}>
          <rect x={-10} y={0} width={W} height={water} className="ruler__water" />
          {Array.from({ length: MAX / 2 + 1 }, (_, k) => k * 2).map((m) => (
            <g key={m} className="ruler__tick">
              <rect x={m * U - 0.4} y={water} width={0.8} height={m % 4 === 0 ? 4 : 2} />
              {m % 4 === 0 && <text x={m * U} y={water + 12} textAnchor="middle">{m} m</text>}
            </g>
          ))}
          <path d={profile(y.lengthM, y.airDraftM, y.draftM, y.hull === "knik")} className="ruler__bendie" />
          <path d={profile(len, air, draft, false)} className="ruler__yours" />
        </svg>
        <figcaption id={`${id}-cap`} className="ruler__cap">
          <span className="ruler__key"><i className="k-red" aria-hidden /> Bendie {y.name}: {y.specs[0].value}, doorvaarthoogte {y.specs[3].value}, diepgang {y.specs[2].value}</span>
          <span className="ruler__key"><i className="k-ink" aria-hidden /> Uw jacht: {fmt(len)} m, {fmt(air)} m, {fmt(draft)} m</span>
          <span className="soft small">Schematisch profiel op ware schaal. De afmetingen van de Bendie-jachten komen van bendie.nl.</span>
        </figcaption>
      </figure>

      <div className="ruler__result">
        <p className="lead" aria-live="polite">{compare}</p>
        <a className="btn btn-red" href={mail}>Mail de werf over dit jacht<ArrowRight aria-hidden /></a>
      </div>
    </div>
  );
}
