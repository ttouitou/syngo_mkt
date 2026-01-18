export type Lang = "en" | "fr" | "he";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "he", label: "עברית" },
];

export const DIR_BY_LANG: Record<Lang, "ltr" | "rtl"> = {
  en: "ltr",
  fr: "ltr",
  he: "rtl",
};

export const MESSAGES: Record<
  Lang,
  {
    nav: { logo: string };
    hero: {
      title: string;
      subtitle: string;
      cta1: string;
      cta2: string;
      note: string;
    };
    problem: { title: string; items: string[] };
    solution: { title: string; cards: string[] };
    members: { title: string; items: string[]; note: string };
    community: { title: string; cards: string[] };
    pricing: { title: string; price: string; subtitle: string; addon: string };
    trust: { title: string; cards: string[] };
    cta: {
      title: string;
      wa: string;
      call: string;
      contactTitle: string;
      namePh: string;
      emailPh: string;
      messagePh: string;
      send: string;
      sending: string;
      sentOk: string;
      sentFail: string;
    };
  }
> = {
  en: {
    nav: { logo: "Community Donations" },
    hero: {
      title: "Collect donations faster - with zero chasing",
      subtitle:
        "A simple portal for synagogues: members see their balance, pay online, and you keep clean records with transparency.",
      cta1: "Request a Demo",
      cta2: "WhatsApp",
      note: "Payments: Bit + PayBox today. Credit card via Nedarim Plus (Section 46-ready for approved institutions) - coming soon.",
    },
    problem: {
      title: "Managing Donations Shouldn’t Be Complicated",
      items: [
        "Manual tracking steals hours every month",
        "Members don’t know what they owe, so they delay paying",
        "Payment follow-ups are uncomfortable and never end",
      ],
    },
    solution: {
      title: "A Complete Donation Management Service",
      cards: [
        "Managed donation database",
        "Secure, centralized records",
        "No technical work required",
      ],
    },
    members: {
      title: "For Community Members",
      items: [
        "View donation history",
        "Know exactly what must be paid",
        "Pay online (Bit, PayBox)",
      ],
      note: "Optional: credit card payments via Nedarim Plus - coming soon.",
    },
    community: {
      title: "More Than Donations",
      cards: [
        "Prayer Times",
        "Community Announcements",
        "Trusted Professionals",
      ],
    },
    pricing: {
      title: "Simple Monthly Pricing",
      price: "₪200-250 / Month",
      subtitle: "No setup fee · No commitment",
      addon: "Optional add-on: credit card via Nedarim Plus (coming soon)",
    },
    trust: {
      title: "Reliable & Secure",
      cards: ["Secure Data", "Confidential Access", "Personal Support"],
    },
    cta: {
      title: "Let’s Simplify Donation Management",
      wa: "WhatsApp",
      call: "Schedule a Call",
      contactTitle: "Contact",
      namePh: "Votre nom",
      emailPh: "Votre email",
      messagePh: "Votre message",
      send: "Envoyer",
      sending: "Envoi en cours...",
      sentOk: "✅ Message envoyé avec succès !",
      sentFail: "❌ Échec de l’envoi. Réessayez.",
    },
  },

  fr: {
    nav: { logo: "Dons Communautaires" },
    hero: {
      title: "Collectez plus vite - sans relances",
      subtitle:
        "Un portail simple pour les synagogues : les membres voient leur solde, paient en ligne, et vous gardez des registres clairs et transparents.",
      cta1: "Demander une démo",
      cta2: "WhatsApp",
      note: "Paiements : Bit + PayBox aujourd’hui. Carte bancaire via Nedarim Plus (compatible סעיף 46 pour institutions agréées) - bientôt disponible.",
    },
    problem: {
      title: "La gestion des dons ne devrait pas être compliquée",
      items: [
        "Le suivi manuel prend des heures chaque mois",
        "Les membres ne savent pas ce qu’ils doivent, donc ils paient plus tard",
        "Les relances sont inconfortables et interminables",
      ],
    },
    solution: {
      title: "Un service complet de gestion des dons",
      cards: [
        "Base de dons gérée",
        "Registres centralisés et sécurisés",
        "Aucune compétence technique requise",
      ],
    },
    members: {
      title: "Pour les membres",
      items: [
        "Voir l’historique des dons",
        "Savoir exactement ce qu’il reste à payer",
        "Payer en ligne (Bit, PayBox)",
      ],
      note: "Option : paiement par carte via Nedarim Plus - bientôt disponible.",
    },
    community: {
      title: "Plus que des dons",
      cards: [
        "Horaires de prière",
        "Annonces communautaires",
        "Professionnels recommandés",
      ],
    },
    pricing: {
      title: "Tarif mensuel simple",
      price: "₪200-250 / mois",
      subtitle: "Sans frais d’installation · Sans engagement",
      addon: "Option : carte bancaire via Nedarim Plus (bientôt disponible)",
    },
    trust: {
      title: "Fiable et sécurisé",
      cards: [
        "Données sécurisées",
        "Accès confidentiel",
        "Support personnalisé",
      ],
    },
    cta: {
      title: "Simplifions la gestion des dons",
      wa: "WhatsApp",
      call: "Planifier un appel",
      contactTitle: "Contact",
      namePh: "Votre nom",
      emailPh: "Votre email",
      messagePh: "Votre message",
      send: "Envoyer",
      sending: "Envoi en cours...",
      sentOk: "✅ Message envoyé avec succès !",
      sentFail: "❌ Échec de l’envoi. Réessayez.",
    },
  },

  he: {
    nav: { logo: "תרומות לקהילה" },
    hero: {
      title: "אוספים תרומות מהר יותר - בלי לרדוף אחרי אנשים",
      subtitle:
        "פורטל פשוט לבתי כנסת: כל חבר רואה את היתרה שלו, משלם אונליין, ואתם מנהלים רישום מסודר ושקוף.",
      cta1: "קבעו הדגמה",
      cta2: "וואטסאפ",
      note: "תשלומים: Bit ו-PayBox כבר עכשיו. כרטיס אשראי דרך Nedarim Plus (מותאם לסעיף 46 למוסדות מאושרים) - בקרוב.",
    },
    problem: {
      title: "ניהול תרומות לא חייב להיות מסובך",
      items: [
        "מעקב ידני גוזל שעות כל חודש",
        "חברים לא יודעים מה הם חייבים ולכן דוחים תשלום",
        "תזכורות לתשלום זה לא נעים וזה לא נגמר",
      ],
    },
    solution: {
      title: "שירות מלא לניהול תרומות",
      cards: [
        "מאגר תרומות מנוהל",
        "רישום מרכזי ומאובטח",
        "ללא עבודה טכנית מצדכם",
      ],
    },
    members: {
      title: "לחברי הקהילה",
      items: [
        "צפייה בהיסטוריית תרומות",
        "הבנה ברורה מה נשאר לתשלום",
        "תשלום אונליין (Bit, PayBox)",
      ],
      note: "אופציה: תשלום באשראי דרך Nedarim Plus - בקרוב.",
    },
    community: {
      title: "יותר מתרומות",
      cards: ["זמני תפילה", "הודעות קהילה", "בעלי מקצוע מומלצים"],
    },
    pricing: {
      title: "מחיר חודשי פשוט",
      price: "₪200-250 לחודש",
      subtitle: "ללא דמי הקמה · ללא התחייבות",
      addon: "אופציה בתוספת: אשראי דרך Nedarim Plus (בקרוב)",
    },
    trust: {
      title: "אמין ומאובטח",
      cards: ["שמירת נתונים", "גישה חסויה", "תמיכה אישית"],
    },
    cta: {
      title: "בואו נפשט את ניהול התרומות",
      wa: "וואטסאפ",
      call: "קביעת שיחה",
      contactTitle: "צור קשר",
      namePh: "שם מלא",
      emailPh: "אימייל",
      messagePh: "הודעה",
      send: "שלח הודעה",
      sending: "שולח...",
      sentOk: "✅ ההודעה נשלחה בהצלחה!",
      sentFail: "❌ השליחה נכשלה. נסה שוב.",
    },
  },
};
