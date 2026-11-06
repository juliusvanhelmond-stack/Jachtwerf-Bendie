"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { Picture } from "@/components/Picture";
import { services } from "@/content/site";

/**
 * Interactive services: names in one size on the left; choosing one changes the large picture and text.
 * Built as disclosures, so it reads as an accordion on a phone and works fully with the keyboard.
 */
export function ServicesExplorer({ headingId, linkToPage = true }: { headingId: string; linkToPage?: boolean }) {
  const [active, setActive] = useState(services[0].id);
  const btns = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = services.length;
    let j = -1;
    if (e.key === "ArrowDown") j = (i + 1) % n;
    if (e.key === "ArrowUp") j = (i - 1 + n) % n;
    if (e.key === "Home") j = 0;
    if (e.key === "End") j = n - 1;
    if (j >= 0) { e.preventDefault(); btns.current[j]?.focus(); setActive(services[j].id); }
  };

  return (
    <div className="svc-wrap"><ul className="svc" aria-labelledby={headingId}>
      {services.map((s, i) => {
        const open = s.id === active;
        return (
          <li key={s.id} className={`svc__item ${open ? "is-open" : ""}`}>
            <h3 className="svc__h">
              <button
                ref={(el) => { btns.current[i] = el; }}
                type="button"
                className="svc__btn"
                aria-expanded={open}
                aria-controls={`svc-${s.id}`}
                id={`svc-btn-${s.id}`}
                onClick={() => setActive(s.id)}
                onMouseEnter={(e) => { if (window.matchMedia("(hover: hover) and (min-width: 900px)").matches) setActive(s.id); void e; }}
                onKeyDown={(e) => onKey(e, i)}
              >
                <span className="svc__name">{s.name}</span>
                <span className="svc__short soft">{s.short}</span>
                <span className="svc__icon" aria-hidden>{open ? <Minus /> : <Plus />}</span>
              </button>
            </h3>
            <div id={`svc-${s.id}`} role="region" aria-labelledby={`svc-btn-${s.id}`} className="svc__panel" hidden={!open}>
              <div className="svc__pic pic">
                <Picture img={s.image} sizes="(min-width: 900px) 50vw, 100vw" />
              </div>
              <div className="svc__body">
                <p>{s.text}</p>
                {s.items && (
                  <ul className="svc__list">
                    {s.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                )}
                {s.image.credit && <p className="credit">{s.image.credit}</p>}
                {linkToPage && (
                  <Link href={s.id === "winterstalling" ? "/winterstalling/" : `/diensten/#${s.id}`} className="link-arrow">
                    <span>Meer over {s.name.toLowerCase()}</span><ArrowRight aria-hidden />
                  </Link>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ul></div>
  );
}
