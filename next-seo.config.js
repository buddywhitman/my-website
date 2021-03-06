/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "buddywhitman's Portfolio",
  titleTemplate: "%s | buddywhitman",
  defaultTitle: "buddywhitman",
  description: "Personal website that showcases my best work, tells you about me and has some fun eastern eggs",
  canonical: "https://buddywhitman.vercel.app",
  openGraph: {
    url: "https://buddywhitman.vercel.app",
    title: "buddywhitman's Portfolio",
    description: "Personal website that showcases my best work, tells you about me and has some fun eastern eggs",
    images: [
      {
        url: "https://www.daggy.tech/daggy_big.webp",
        height: 1024,
        width: 1024,
        alt: "png",
      },
    ],
    site_name: "buddywhtitman's Portfolio",
  },
  twitter: {
    handle: "@desihippe",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
