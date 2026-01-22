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
      "At the end of Shabbat or Yom Tov, the Gabai sends one simple sheet. We handle the upload, updates, and follow-up as a service - members immediately see their balance and can pay online.",
    cta1: "Request a Demo",
    cta2: "WhatsApp",
    note: "Payments: Bit + PayBox today. Credit card via Nedarim Plus (Section 46-ready for approved institutions) - coming soon.",
  },

  problem: {
    title: "Donation Management Should Be Simple",
    items: [
      "Spreadsheets and WhatsApp messages get messy and take hours",
      "Members don’t know what they owe, so payments get delayed",
      "Following up for payments is uncomfortable and never ends",
    ],
  },

  solution: {
    title: "A Managed Service for the Gabai",
    cards: [
      "You send the sheet - we handle the rest",
      "Members portal with balances, payments, and history",
      "Also a community hub: announcements, prayer times, professionals",
    ],
  },

  members: {
    title: "For Community Members",
    items: [
      "Clear balance and history in one place",
      "Pay online in seconds (Bit, PayBox)",
      "No confusion, no chasing, no awkward conversations",
    ],
    note: "Optional: credit card payments via Nedarim Plus - coming soon.",
  },

  community: {
    title: "A Tool for Community Communication",
    cards: [
      "Prayer times and Shabbat times",
      "Community announcements and updates",
      "Trusted professionals directory",
    ],
  },

  pricing: {
    title: "Simple Monthly Pricing",
    price: "₪200-250 / Month",
    subtitle: "Managed service - onboarding and support included",
    addon: "Optional add-on: credit card via Nedarim Plus (coming soon)",
  },

  trust: {
    title: "Secure and Confidential",
    cards: [
      "Role-based access (admin vs members)",
      "Confidential by design - members only see their own data",
      "Audit trail and controlled changes",
    ],
  },

  cta: {
    title: "Let’s Simplify Donation Management",
    wa: "WhatsApp",
    contactTitle: "Get in Touch",
    namePh: "Your Name",
    emailPh: "Your Email",
    messagePh: "Your Message",
    send: "Send Message",
    sending: "Sending...",
    sentOk: "✅ Message sent successfully!",
    sentFail: "❌ Failed to send. Try again.",
  },
},


  fr: {
  nav: { logo: "Dons Communautaires" },

  hero: {
    title: "Collectez plus vite - sans relances",
    subtitle:
      "À la fin de Chabbat ou de Yom Tov, le Gabbaï envoie un simple tableau. On s’occupe de tout comme un service - mise à jour, suivi, et les membres voient immédiatement leur solde et peuvent payer en ligne.",
    cta1: "Demander une démo",
    cta2: "WhatsApp",
    note: "Paiements : Bit + PayBox aujourd’hui. Carte bancaire via Nedarim Plus (compatible סעיף 46 pour institutions agréées) - bientôt disponible.",
  },

  problem: {
    title: "La gestion des dons doit être simple",
    items: [
      "Excel et WhatsApp deviennent vite ingérables et font perdre du temps",
      "Les membres ne savent pas ce qu’ils doivent, donc ils paient plus tard",
      "Les relances sont inconfortables et interminables",
    ],
  },

  solution: {
    title: "Un service géré pour le Gabbaï",
    cards: [
      "Vous envoyez le tableau - on s’occupe du reste",
      "Portail membres avec soldes, paiements et historique",
      "Aussi un outil de communauté : annonces, horaires, répertoire",
    ],
  },

  members: {
    title: "Pour les membres",
    items: [
      "Solde clair et historique au même endroit",
      "Paiement rapide en ligne (Bit, PayBox)",
      "Moins de confusion, moins de relances",
    ],
    note: "Option : paiement par carte via Nedarim Plus - bientôt disponible.",
  },

  community: {
    title: "Un outil de communication communautaire",
    cards: [
      "Horaires de prière et horaires de Chabbat",
      "Annonces et informations communautaires",
      "Répertoire de professionnels recommandés",
    ],
  },

  pricing: {
    title: "Tarif mensuel simple",
    price: "₪200-250 / mois",
    subtitle: "Service géré - installation et support inclus",
    addon: "Option : carte bancaire via Nedarim Plus (bientôt disponible)",
  },

  trust: {
    title: "Sécurisé et confidentiel",
    cards: [
      "Accès par rôles (admin vs membres)",
      "Confidentialité : chaque membre ne voit que ses données",
      "Journal d’activité et changements contrôlés",
    ],
  },

  cta: {
    title: "Simplifions la gestion des dons",
    wa: "WhatsApp",

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
      "בסוף שבת או חג הגבאי שולח קובץ אחד פשוט. אני מטפל בהעלאה, בעדכון ובמעקב כשירות - וכל חבר רואה מיד יתרה ויכול לשלם אונליין.",
    cta1: "קבעו הדגמה",
    cta2: "וואטסאפ",
    note: "תשלומים: Bit ו-PayBox כבר עכשיו. כרטיס אשראי דרך Nedarim Plus (מותאם לסעיף 46 למוסדות מאושרים) - בקרוב.",
  },

  problem: {
    title: "ניהול תרומות לא חייב להיות מסובך",
    items: [
      "אקסלים והודעות וואטסאפ מתבלגנים וגוזלים שעות",
      "חברים לא יודעים מה הם חייבים ולכן דוחים תשלום",
      "תזכורות לתשלום זה לא נעים וזה לא נגמר",
    ],
  },

  solution: {
    title: "שירות מנוהל לגבאי",
    cards: [
      "אתם שולחים קובץ - אני מטפל בכל השאר",
      "פורטל לחברי הקהילה: יתרה, תשלומים והיסטוריה",
      "גם כלי תקשורת לקהילה: הודעות, זמני תפילה ורשימות",
    ],
  },

  members: {
    title: "לחברי הקהילה",
    items: [
      "יתרה ברורה והיסטוריה במקום אחד",
      "תשלום אונליין תוך שניות (Bit, PayBox)",
      "פחות בלבול, פחות תזכורות",
    ],
    note: "אופציה: תשלום באשראי דרך Nedarim Plus - בקרוב.",
  },

  community: {
    title: "כלי לתקשורת קהילתית",
    cards: [
      "זמני תפילה וזמני שבת",
      "הודעות ועדכונים לקהילה",
      "רשימת בעלי מקצוע מומלצים",
    ],
  },

  pricing: {
    title: "מחיר חודשי פשוט",
    price: "₪200-250 לחודש",
    subtitle: "שירות מנוהל - הקמה ותמיכה כלולים",
    addon: "אופציה בתוספת: אשראי דרך Nedarim Plus (בקרוב)",
  },

  trust: {
    title: "מאובטח וחסוי",
    cards: [
      "גישה לפי הרשאות (מנהל מול חברים)",
      "חסוי כברירת מחדל - כל אחד רואה רק את הנתונים שלו",
      "תיעוד פעולות ושינויים מבוקרים",
    ],
  },

  cta: {
    title: "בואו נפשט את ניהול התרומות",
    wa: "וואטסאפ",
     

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
