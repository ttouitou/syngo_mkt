"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { DIR_BY_LANG, type Lang, MESSAGES } from "@/lib/i18n";

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  dir: "ltr" | "rtl";
  t: typeof MESSAGES[Lang]; // <--- ADD THIS LINE
};

const I18nContext = createContext<I18nContextValue | null>(null);

function isLang(x: string | null): x is Lang {
  return  x === "fr" || x === "he";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    // Default for server-side rendering
    if (typeof window === "undefined") return "he"; 
    
    try {
      const saved = localStorage.getItem("lang");
      // If a valid language is saved, use it. Otherwise, default to "he"
      return isLang(saved) ? saved : "he"; 
    } catch {
      // If localStorage fails, default to "he"
      return "he"; 
    }
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  };

  const dir = DIR_BY_LANG[lang];

  // Effects should synchronize external systems (DOM), not set React state
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const value = useMemo<I18nContextValue>(
    () => ({ lang, setLang, t: MESSAGES[lang], dir }),
    [lang, dir]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
