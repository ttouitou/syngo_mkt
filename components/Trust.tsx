"use client";

import { useI18n } from "@/app/Providers";

export default function Trust() {
  const { t } = useI18n();

  return (
    <section className="section gray" id="trust">
      <h2>{t.trust.title}</h2>
      <div className="grid">
        {t.trust.cards.map((x) => (
          <div className="card" key={x}>
            {x}
          </div>
        ))}
      </div>
    </section>
  );
}
