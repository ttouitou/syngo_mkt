"use client";

import { useI18n } from "@/app/Providers";

export default function Pricing() {
  const { t } = useI18n();

  return (
    <section className="section" id="pricing">
      <h2>{t.pricing.title}</h2>

      <div className="pricing-card">
        <h3>{t.pricing.price}</h3>
        <p>{t.pricing.subtitle}</p>
        <p className="pricing-addon">{t.pricing.addon}</p>
      </div>
    </section>
  );
}
