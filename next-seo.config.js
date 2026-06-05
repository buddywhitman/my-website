/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Pulkit Kumar | Embedded Systems & Voice AI Engineer",
  titleTemplate: "%s | Pulkit Kumar",
  defaultTitle: "Pulkit Kumar",
  description: "Pre-final year EE undergrad. Founding Engineer at Fettle. I build production inference infrastructure, safety-critical embedded systems, and real-time voice AI. Q1 Springer Nature author & 3x Patent filer.",
  canonical: "https://buddywhitman.vercel.app",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://buddywhitman.vercel.app",
    title: "Pulkit Kumar | Embedded Systems & Voice AI Engineer",
    description: "Founding Engineer at Fettle. Specializing in safety-critical embedded systems, production AI inference, and real-time voice AI. Q1 Springer Nature author.",
    images: [
      {
        url: "https://buddywhitman.vercel.app/home_b.webp",
        width: 1200,
        height: 630,
        alt: "Pulkit Kumar - Embedded & AI Engineer",
      },
    ],
    site_name: "Pulkit Kumar Portfolio",
  },
  twitter: {
    handle: "@desihippe",
    site: "@desihippe",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
