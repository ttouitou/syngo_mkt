"use client";

import { useI18n } from "@/app/Providers";

export default function Solution() {
  const { t } = useI18n();

  return (
    <section className="section" id="solution">
      <h2>{t.solution.title}</h2>
      <div className="grid">
        {t.solution.cards.map((x) => (
          <div className="card" key={x}>
            {x}
          </div>
        ))}
      </div>
    </section>
  );
}
