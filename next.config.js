const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");
const { i18n } = require('./next-i18next.config');


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
}

module.exports = withFonts(withOptimizedImages(nextConfig)) 


// module.exports = withFonts(
//   withOptimizedImages({
//     i18n,
//     reactStrictMode: true
    
//     /* config for next-optimized-images */
//     // your config for other plugins or the general next.js here...
//   })
// );
