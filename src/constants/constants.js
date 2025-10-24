// src/constants/index.js

// =========================
// 🌐 NAVIGATION LINKS
// =========================
export const PROTECTED_NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Features", path: "#features" },
  { name: "About", path: "#about" },
  { name: "Login", path: "/login" },
  { name: "Signup", path: "/signup" },
];


// =========================
// 💡 APP FEATURES
// =========================
export const FEATURES = [
  {
    id: 1,
    title: "Simple Ticket Management",
    description:
      "Create, update, and track tickets easily. Stay organized and keep every request visible.",
    icon: "🧾",
  },
  {
    id: 2,
    title: "Powerful Dashboard Analytics",
    description:
      "Visualize your progress with charts showing total, pending, and resolved tickets at a glance.",
    icon: "📊",
  },
  {
    id: 3,
    title: "Secure & Fast Authentication",
    description:
      "Log in securely and access your dashboard in seconds with smooth, safe authentication.",
    icon: "🔒",
  },
  {
    id: 4,
    title: "Modern & Responsive Design",
    description:
      "Enjoy a clean, professional interface that looks perfect on desktop and mobile devices.",
    icon: "💻",
  },
];

// =========================
// 🎨 APP CONFIG / GENERAL INFO
// =========================
export const APP_INFO = {
  name: "TicketPro",
  tagline: "Manage your tickets effortlessly",
  description:
    "TicketPro helps you create, organize, and resolve tickets in one place — simple, secure, and fast.",
  primaryColor: "#4f46e5", // Tailwind's indigo-600
  year: new Date().getFullYear(),
};

// =========================
// 📈 DUMMY ANALYTICS (Optional)
// =========================
export const ANALYTICS_DATA = {
  totalTickets: 25,
  openTickets: 10,
  inProgress: 8,
  resolvedTickets: 7,
};

// =========================
// 🧭 FOOTER LINKS (Optional)
// =========================
export const FOOTER_LINKS = [
  { label: "Privacy Policy", path: "#" },
  { label: "Terms of Service", path: "#" },
  { label: "Contact", path: "#" },
];
