import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "The Halo Plug",
  tagline: "Protective styles and premium hair in Scarborough, Toronto.",
  category: "Protective styles and sew-ins",
  schemaType: "BeautySalon",
  area: "Scarborough, Toronto, ON",
  siteUrl: "https://thehaloplug.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#8B6B4A" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Scarborough, Toronto",
    headline: "Protective styles and premium hair",
    subhead:
      "Sew-ins, stitch braids, and protective styles. Come get Haloed. DM to book your next appointment.",
    images: [
      { src: "/images/post-1.jpg", alt: "Protective style looks from The Halo Plug", width: 1080, height: 1440 },
      { src: "/images/post-5.jpg", alt: "Versatile sew-in with volume and curls", width: 1080, height: 1350 },
      { src: "/images/post-8.jpg", alt: "Cornrow and protective style finish", width: 1080, height: 1354 },
    ],
    secondaryCta: { label: "See the styles", href: "#gallery" },
  },

  highlights: [
    "Protective styles and premium hair",
    "Sew-ins and stitch braids",
    "Scarborough, Toronto",
    "Book by Instagram DM",
  ],

  about: {
    title: "The plug for protective styles",
    body: [
      "The Halo Plug is a Toronto hairstylist specializing in protective styles and premium hair. From sew-ins and stitch braids to boho kinky twists, every look is finished with care in Scarborough.",
      "Men's braid appointments are available too. Send a DM to book your next style.",
    ],
    image: { src: "/images/post-5.jpg", alt: "Versatile sew-in curls", width: 1080, height: 1350 },
  },

  menu: {
    label: "Services",
    title: "Services",
    intro: "Popular protective styles. Pricing is shared when you book.",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for current pricing.",
    groups: [
      {
        title: "Hair",
        items: [
          { name: "Sew-ins", description: "Side part, bang, and versatile sew-ins." },
          { name: "Stitch braids", description: "Including men's braid appointments." },
          { name: "Protective styles", description: "Boho kinky twists and more." },
          { name: "Premium hair", description: "Hair sales and styles with client-provided hair." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent installs",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1440, alt: "Style choices from The Halo Plug", caption: "Come get Haloed", href: "https://www.instagram.com/p/DeNz7dWlSZI/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1350, alt: "Versatile sew-in with curls", caption: "Versatile sew-in", href: "https://www.instagram.com/p/DdpeosxEdYd/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1354, alt: "Protective style with soft edges", caption: "Edge and softness", href: "https://www.instagram.com/p/DdadcW8FYFo/" },
      { src: "/images/post-3.jpg", width: 720, height: 1280, alt: "Long side part sew-in", caption: "Side part sew-in", href: "https://www.instagram.com/p/DeCBwfqq87t/" },
      { src: "/images/post-2.jpg", width: 640, height: 1136, alt: "16 piece stitch braids", caption: "Stitch braids", href: "https://www.instagram.com/p/DeDkm3wKsuD/" },
      { src: "/images/post-4.jpg", width: 640, height: 1136, alt: "Sew-in with bangs", caption: "Sew-in season", href: "https://www.instagram.com/p/Dd9aHW1Kkb8/" },
      { src: "/images/post-7.jpg", width: 640, height: 1136, alt: "Boho kinky twists", caption: "Boho kinky twists", href: "https://www.instagram.com/p/DdjUr76ROgI/" },
      { src: "/images/post-6.jpg", width: 1080, height: 720, alt: "Athlete race ready style", caption: "Commonwealth Games style", href: "https://www.instagram.com/p/Ddl-aTvEfDP/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "thehaloplug",
    embeds: [
      "https://www.instagram.com/p/DeNz7dWlSZI/",
      "https://www.instagram.com/p/DdpeosxEdYd/",
      "https://www.instagram.com/p/DdadcW8FYFo/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    title: "Book your appointment",
    intro: "Send a DM with the style you want and your preferred date. Tap the button to copy a starter message.",
    dmMessage:
      "Hi Halo Plug! I would love to book.\nPreferred date:\nStyle (sew-in, stitch braids, twists, other):\nHair provided or need hair:\nLength or colour idea:",
    links: [],
    note: "Located in Scarborough, Toronto. Details shared when you book.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send an Instagram DM with your preferred date and the style you want. We will confirm details in chat." },
    { q: "Where are you located?", a: "Scarborough, Toronto. Exact details are shared when you book." },
    { q: "Do you offer men's braids?", a: "Yes. Men's braid appointments are available." },
    { q: "What styles do you offer?", a: "Sew-ins, stitch braids, protective styles like boho kinky twists, and premium hair." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Scarborough, Toronto, Ontario",
    socials: [],
  },

  seo: {
    title: "The Halo Plug | Protective styles in Scarborough Toronto",
    description:
      "Protective styles, sew-ins, and stitch braids in Scarborough, Toronto. Premium hair and men's braids available. Book by Instagram DM.",
    keywords: [
      "Toronto sew-in",
      "Scarborough hairstylist",
      "stitch braids Toronto",
      "protective styles Scarborough",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
