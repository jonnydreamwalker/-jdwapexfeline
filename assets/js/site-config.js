/** Apex Feline — brand + categories + API */
window.APEX_SITE = {
  brand: "JONNYDREAMWALKER",
  tagline: "APEX FELINE SUPPLY",
  trustBar: "Premium feline gear • Litter • Enrichment. Florida warehouse. Fast ship FL-TX-CA.",
  cartKey: "jdw_feline_cart",
  apiBase: "https://api.jdwapexherp.com",
  paypalBusiness: "jonnydreamwalker@gmail.com",
  categories: [
    { href: "services/food.html", label: "Food & Treats", dataCategory: "Food" },
    { href: "services/litter.html", label: "Litter & Boxes", dataCategory: "Litter" },
    { href: "services/play.html", label: "Scratching & Play", dataCategory: "Play" },
    { href: "services/beds.html", label: "Beds & Comfort", dataCategory: "Beds" },
    { href: "services/health.html", label: "Health", dataCategory: "Health" },
    { href: "services/apparel.html", label: "Apparel", dataCategory: "Apparel" },
    { href: "services/deals.html", label: "Deals", dataCategory: "Deals", accent: true }
  ]
};
window.APEX_API_BASE = window.APEX_SITE.apiBase;
