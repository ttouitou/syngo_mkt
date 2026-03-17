export type Lang = "fr" | "he";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "he", label: "🇮🇱 ישראל" },
  { code: "fr", label: "🇫🇷 France" }
];
export const DIR_BY_LANG: Record<Lang, "ltr" | "rtl"> = {
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
      trustBadge: string;
       
    };
    problem: { title: string; items: string[] };
    solution: { title: string; cards: string[] };
    members: { title: string; items: string[];};
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
 


  fr: {
  nav: { logo: "Dons Communautaires" },

  hero: {
  title: "La gestion de votre Synagogue, 100% digitalisée",
  subtitle: "La plateforme complète pour gérer vos fidèles, les montées à la Torah et les encaissements. Acceptez les paiements sécurisés par carte bancaire (via Stripe) avec génération et envoi immédiat des reçus CERFA automatiques.",
  cta1: "Commencer maintenant",
  cta2: "WhatsApp",
  trustBadge: "🔒 Paiements sécurisés : Stripe  • Reçus CERFA"
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
  title: "Notre Solution pour votre Synagogue",
  cards: [
    "📄 CERFA 100% Automatisés : Fini les carnets à souches. Chaque don génère et envoie instantanément un reçu fiscal CERFA officiel par e-mail.",
    "💳 Paiement en Ligne (Stripe) : Permettez à vos fidèles de régler leurs dons et leurs dettes par carte bancaire en toute simplicité.",
    "📊 Relevés Annuels en 1 Clic : Gagnez des heures de travail. Vos fidèles téléchargent eux-mêmes leur récapitulatif comptable annuel.",
    "📱 Espace Fidèle & Gabbai : Une application web centralisée. Le fidèle suit ses paiements, le Gabbai gère les encaissements en temps réel."
  ]
},

  members: {
    title: "Pour les membres",
    items: [
      "Solde clair et historique au même endroit",
      "Paiement rapide en ligne (Stripe)",
      "Moins de confusion, moins de relances",
    ],

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
  title: "Sécurité & Conformité Fiscale",
  cards: [
    "🔒 Paiements Sécurisés : Intégration officielle avec Stripe, la norme mondiale de sécurité pour les paiements en ligne.",
    "⚖️ 100% Légal & Conforme : Reçus CERFA formatés selon les exigences strictes de l'administration fiscale française.",
    "☁️ Vos données vous appartiennent : Base de données synchronisée en toute sécurité avec le compte Google Workspace de votre communauté."
  ]
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
  title: "ניהול תרומות חכם לבית הכנסת שלכם",
  subtitle: "מערכת דיגיטלית מתקדמת לניהול קהילה, עליות וגבייה. תמיכה מלאה בתשלומים דרך ביט (Bit), פייבוקס (PayBox) וכרטיסי אשראי. הפקת קבלות אוטומטיות המוכרות לפי סעיף 46 (הסליקה מתבצעת כרגע דרך Cardcom, אך המערכת ניתנת להתאמה לכל חברת סליקה שתבחרו).",
  cta1: "התחילו עכשיו",
  cta2: "וואטסאפ",
  trustBadge: "🔒 תומך ב: אשראי • Bit • PayBox • סעיף 46 (מותאם לכל חברות הסליקה)"
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
  title: "הפתרון המושלם לניהול הקהילה",
  cards: [
    "🧾 קבלות סעיף 46 אוטומטיות : סליקה מהירה ושליחת קבלה המוכרת למס (סעיף 46) ישירות למייל של התורם ברגע התשלום.",
    "💳 חיבור ישיר ל-Cardcom : סליקת אשראי מאובטחת וקלה המחוברת ישירות למסוף קארדקום של העמותה שלכם.",
    "📖 ניהול עליות ונדבות : תיעוד חכם של כל התרומות, העליות והנדבות ישירות לגיליון נתונים (Google Sheets) מסודר ונגיש.",
    "📱 אזור אישי למתפלל : כל תורם יכול לצפות ביתרת החוב שלו, לשלם בלחיצת כפתור, ולהוריד אישור תרומות שנתי למס הכנסה."
  ]
},
trust: {
  title: "אבטחה, אמינות ותקן מחמיר",
  cards: [
    "🔒 סליקה בתקן PCI-DSS : תשלומים מאובטחים ברמה הגבוהה ביותר דרך מערכות קארדקום.",
    "⚖️ מוכר על ידי מס הכנסה : הפקת מסמכים חשבונאיים חוקיים (מסמך 405 - קבלה על תרומה) התואמים לדרישות רשות המיסים בישראל.",
    "☁️ גיבוי ובעלות על הנתונים : כל הנתונים שלכם נשמרים בטוחים ומגובים בזמן אמת ב-Google Drive של העמותה בלבד."
  ]
},

  members: {
    title: "לחברי הקהילה",
    items: [
      "יתרה ברורה והיסטוריה במקום אחד",
      "תשלום אונליין תוך שניות (Bit, PayBox)",
      "פחות בלבול, פחות תזכורות",
    ],
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
