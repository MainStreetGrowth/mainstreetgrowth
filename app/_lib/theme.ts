/* ─── Central brand theme + site data (single source of truth) ─── */
export const theme = {
  cream: "#fff8f4",      // ivory base
  ink: "#1e3a2f",        // forest-mid: dark surfaces + primary text
  green: "#3b6933",      // primary accent (buttons, links)
  terracotta: "#df8752", // warm accent
  terracottaDeep: "#c4713e", // warm fill w/ light text
  sage: "#86a496",       // cool accent
  linen: "#fcebdc",      // warm tint section
  charcoal: "#221a11",
  muted: "rgba(34,26,17,0.6)",
  onInk: "#fff8f4",      // text on dark
  onInkMuted: "rgba(255,248,244,0.66)",
};

export const NAV_LINKS: { href: string; label: string }[] = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

/* Placeholder contact details — replace with the real ones before launch. */
export const SITE = {
  name: "Main Street Compass",
  tagline: "Customer acquisition for small-town restaurants.",
  phone: "(601) 555-0100",
  phoneHref: "tel:+16015550100",
  email: "hello@mainstreetcompass.com",
  area: "Mississippi & the Southeast",
  url: "https://mainstreetcompass.com",
  social: {
    facebook: "https://facebook.com/mainstreetcompass",
    instagram: "https://instagram.com/mainstreetcompass",
  },
};
