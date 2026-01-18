"use client";

import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { useI18n } from "@/app/Providers";

// Put these in .env.local later (recommended). For now you can hardcode like your example.
const EMAILJS_SERVICE_ID = "service_o6i1pyg";
const EMAILJS_TEMPLATE_ID = "template_p2b2aam";
const EMAILJS_PUBLIC_KEY = "WnehnJTuuOwVLvopG";

export default function CTA() {
  const { t, lang, dir } = useI18n();

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"" | "sending" | "ok" | "fail">("");

  const statusText = useMemo(() => {
    if (status === "sending") return t.cta.sending;
    if (status === "ok") return t.cta.sentOk;
    if (status === "fail") return t.cta.sentFail;
    return "";
  }, [status, t]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          ...formData,
          lang, // extra context in the email template
          page: "marketing",
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("ok");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("fail");
    }
  };

  return (
    <section className="cta" id="cta">
      {/* Keep your CTA title + buttons */}
      <h2>{t.cta.title}</h2>

      <div className="buttons">
        <a
          className="btn primary"
          href="https://wa.me/972523411283"
          target="_blank"
          rel="noreferrer"
        >
          {t.cta.wa}
        </a>
        <a
          className="btn secondary"
          href="REPLACE_WITH_YOUR_SCHEDULING_LINK"
          target="_blank"
          rel="noreferrer"
        >
          {t.cta.call}
        </a>
      </div>

      {/* Contact Form */}
      <div
        className="contact-wrap"
        dir={dir}
        style={{ marginTop: 42, maxWidth: 920, marginLeft: "auto", marginRight: "auto" }}
      >
        <h3 className="contact-title">{t.cta.contactTitle}</h3>

        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <input
            name="name"
            type="text"
            required
            placeholder={t.cta.namePh}
            value={formData.name}
            onChange={handleChange}
            className="contact-input"
          />

          <input
            name="email"
            type="email"
            required
            placeholder={t.cta.emailPh}
            value={formData.email}
            onChange={handleChange}
            className="contact-input"
          />

          <textarea
            name="message"
            required
            placeholder={t.cta.messagePh}
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="contact-input contact-textarea"
          />

          <button type="submit" className="contact-submit" disabled={status === "sending"}>
            {status === "sending" ? t.cta.sending : t.cta.send}
          </button>
        </form>

        {!!statusText && <p className="contact-status">{statusText}</p>}

        
      </div>
    </section>
  );
}
