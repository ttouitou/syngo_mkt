"use client";

import { useI18n } from "@/app/Providers";

export default function Community() {
  const { t } = useI18n();

  return (
    <section className="section gray" id="community">
      <h2>{t.community.title}</h2>
      <div className="grid">
        {t.community.cards.map((x) => (
          <div className="card" key={x}>
            {x}
          </div>
        ))}
      </div>
    </section>
  );
}
