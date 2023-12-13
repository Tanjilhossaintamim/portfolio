/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.w3.org" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "getbootstrap.com" },
      { protocol: "https", hostname: "cdn-images-1.medium.com" },
      { protocol: "https", hostname: "e7.pngegg.com" },
      { protocol: "https", hostname: "github.githubassets.com" },
      { protocol: "https", hostname: "seeklogo.com" },
      { protocol: "https", hostname: "w7.pngwing.com" },
    ],
  },
};

module.exports = nextConfig;
