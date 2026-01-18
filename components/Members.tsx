"use client";

import { useI18n } from "@/app/Providers";

export default function Members() {
  const { t } = useI18n();

  return (
    <section className="section split" id="members">
      <div className="image-placeholder">📱</div>

      <div>
        <h2>{t.members.title}</h2>
        <ul>
          {t.members.items.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <p className="muted">{t.members.note}</p>
      </div>
    </section>
  );
}
