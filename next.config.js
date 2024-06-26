const MillionLint = require('@million/lint');
const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  swcMinify: true,
  pwa: {
    disable: process.env.NODE_ENV === "development",
    // process.env.NODE_ENV === "preview" ||
    // process.env.NODE_ENV === "production",
    // delete two lines above to enable PWA in production deployment
    // add your own icons to public/manifest.json 
    // to re-generate manifest.json, you can visit https://tomitm.github.io/appmanifest/
    dest: "public",
    register: true
  },
  reactStrictMode: true
});
/*{
  "rewrites": [
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "blog.buddywhitman.vercel.app"
        }
      ],
      "destination": "https://buddywhitman.vercel.app/blog"
    }
  ]
 }*/