"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";
import { ArrowUpRight, Close, Menu } from "./icons";
import { ThemeToggle } from "./ThemeToggle";

const sectionIds = siteConfig.nav.map((item) => item.href.split("#")[1]).filter(Boolean);

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let frame = 0;

    const update = () => {
      setScrolled(window.scrollY > 16);

      if (pathname !== "/") {
        setActiveSection("");
        return;
      }

      const probe = window.innerHeight * 0.35;
      let current = "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= probe && rect.bottom > probe) {
          current = `#${id}`;
          break;
        }
      }

      setActiveSection((previous) => (previous === current ? previous : current));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner container">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            GC
          </span>
          <span className="brand-copy">
            <strong>German Chura</strong>
            <span>Full Stack Developer</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {siteConfig.nav.map((item) => {
            const hash = `#${item.href.split("#")[1]}`;
            const active = activeSection === hash;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "is-active" : undefined}
                aria-current={active ? "location" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <a className="button button-small header-cta" href={`mailto:${siteConfig.email}`}>
            Hablemos
            <ArrowUpRight aria-hidden="true" />
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <Close aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegación móvil">
          <div className="mobile-nav-inner container">
            {siteConfig.nav.map((item, index) => {
              const hash = `#${item.href.split("#")[1]}`;
              const active = activeSection === hash;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: `${index * 35}ms` }}
                  className={active ? "is-active" : undefined}
                  aria-current={active ? "location" : undefined}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              );
            })}
            <a
              className="button mobile-nav-cta"
              href={`mailto:${siteConfig.email}`}
              onClick={() => setOpen(false)}
            >
              Escribirme
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
