import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main id="contenido" className="not-found">
      <div className="container not-found-inner">
        <span className="not-found-code">404</span>
        <h1>Esta página no existe.</h1>
        <p>
          Puede que el enlace haya cambiado o que la página todavía no esté publicada.
          Vuelve al inicio o escríbeme directamente.
        </p>
        <div className="not-found-actions">
          <Link className="button" href="/">
            <ArrowLeft aria-hidden="true" />
            Volver al inicio
          </Link>
          <a className="button button-ghost" href={`mailto:${siteConfig.email}`}>
            <Mail aria-hidden="true" />
            Escribirme
          </a>
        </div>
      </div>
    </main>
  );
}
