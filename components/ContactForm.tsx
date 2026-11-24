"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site";
import { ArrowUpRight } from "./icons";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [opened, setOpened] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Contacto desde el portafolio — ${name}`);
    const body = encodeURIComponent(
      `Hola German,\n\n${message}\n\n— ${name}\n${email}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="contact-name">Nombre</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Tu nombre"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">Correo</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="tu@correo.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">Mensaje</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Cuéntame sobre tu proyecto o la oportunidad que tienes en mente."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
      </div>
      <div className="form-footer">
        <button type="submit" className="button">
          Enviar mensaje
          <ArrowUpRight aria-hidden="true" />
        </button>
        <p aria-live="polite">
          {opened
            ? "Se abrió tu cliente de correo. Si no ocurre, escríbeme directamente."
            : "El formulario abrirá tu cliente de correo con el mensaje listo."}
        </p>
      </div>
    </form>
  );
}
