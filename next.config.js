/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/original/**",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/w500/**",
      },
      // {
      //   protocol: "https",
      //   hostname: "rb.gy",
      //   port: "",
      //   pathname: "/p2hphi/**",
      // },
    ],
    // domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
