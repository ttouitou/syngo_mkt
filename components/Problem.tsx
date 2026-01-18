"use client";

import { useI18n } from "@/app/Providers";

export default function Problem() {
  const { t } = useI18n();

  return (
    <section className="section gray" id="problem">
      <h2>{t.problem.title}</h2>
      <ul className="list">
        {t.problem.items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </section>
  );
}
