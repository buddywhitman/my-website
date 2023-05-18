/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "buddywhitman's Portfolio",
  defaultTitle: "buddywhitman",
  description: "Portfolio site that showcases my best work, tells you about me and has some fun eastern eggs",
  canonical: "https://buddywhitman.vercel.app",
  openGraph: {
    url: "https://buddywhitman.vercel.app",
    title: "buddywhitman",
    description: "Portfolio site that showcases my best work, tells you about me and has some fun eastern eggs",
    images: [
      {
        url: "https://buddywhitman.vercel.app/daggy.png",
        height: 1024,
        width: 1024,
        alt: "png",
      },
    ],
    site_name: "buddywhitman",
  },
  twitter: {
    handle: "@desihippe",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
