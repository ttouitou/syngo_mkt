"use client";

import Image from "next/image";
import { LANGS } from "@/lib/i18n";
import { useI18n } from "@/app/Providers";

export default function Hero() {
  const { lang, setLang, t } = useI18n();

  return (
    <section className="hero" id="top">
      <nav className="nav">
        <div className="logo"><Image
            src="/SynagoGive.png"
            alt="SynagoGive"
            width={240}
            height={64}
            priority
          /></div>

        <div className="lang-switch" role="group" aria-label="Language switch">
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              className={`lang-btn ${lang === l.code ? "active" : ""}`}
              onClick={() => setLang(l.code)}
            >
              {l.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="hero-content">
        <h1>{t.hero.title}</h1>
        <p>{t.hero.subtitle}</p>

        <div className="buttons">
          <a className="btn primary" href="#cta">
            {t.hero.cta1}
          </a>
          <a
            className="btn secondary"
            href="https://wa.me/972523411283"
            target="_blank"
            rel="noreferrer"
          >
            {t.hero.cta2}
          </a>
        </div>
        <p style={{ marginTop: '15px', fontSize: '0.9rem',  fontWeight: 500 }}>
          {t.hero.trustBadge}
        </p>

  
      </div>
    </section>
  );
}
