"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { nav, site } from "@/content/site";

/** Transparent over a dark hero, a solid ivory bar once the page scrolls. */
export function Header() {
  const pathname = usePathname();
  // pages that open on a dark full-bleed picture
  const overHero = pathname === "/" || /^\/jachten\/[^/]+\/?$/.test(pathname) || pathname === "/de-werf/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = menuRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
      if (e.key === "Tab" && menuRef.current) {
        const f = Array.from(menuRef.current.querySelectorAll<HTMLElement>("a, button"));
        const a = f[0], z = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
        else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const light = overHero && !scrolled;
  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className={`site-header ${light ? "is-light" : "is-solid"}`}>
      <div className="site-header__bar">
        <Link href="/" className="site-header__logo" aria-label="Jachtwerf Bendie, naar de homepage">
          <Logo tone={light ? "light" : "dark"} />
        </Link>
        <nav aria-label="Hoofdnavigatie" className="site-header__nav">
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} aria-current={isActive(n.href) ? "page" : undefined}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact/" className="btn btn-red site-header__cta" aria-current={isActive("/contact/") ? "page" : undefined}>
            Contact
          </Link>
        </nav>
        <button
          ref={buttonRef}
          type="button"
          className="site-header__menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span>{open ? "Sluit" : "Menu"}</span>
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu field-navy on-dark ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
      >
        <div className="mobile-menu__top">
          <Link href="/" aria-label="Jachtwerf Bendie, naar de homepage" className="site-header__logo"><Logo tone="light" /></Link>
          <button type="button" className="site-header__menu" onClick={() => { setOpen(false); buttonRef.current?.focus(); }}>
            <span>Sluit</span><X aria-hidden />
          </button>
        </div>
        <ul className="mobile-menu__list">
          <li><Link href="/" aria-current={pathname === "/" ? "page" : undefined}>Home</Link></li>
          {nav.map((n) => (
            <li key={n.href}><Link href={n.href} aria-current={isActive(n.href) ? "page" : undefined}>{n.label}</Link></li>
          ))}
          <li><Link href="/contact/" aria-current={isActive("/contact/") ? "page" : undefined}>Contact</Link></li>
        </ul>
        <div className="mobile-menu__foot">
          <p>{site.street}<br />{site.cityLine}</p>
          <a className="btn btn-red" href={`mailto:${site.email}`}>{site.email}<ArrowRight aria-hidden /></a>
        </div>
      </div>
    </header>
  );
}
