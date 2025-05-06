/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const isProd = process.env.NODE_ENV === "production";

    return [
      {
        source: "/uploads/:path*",
        destination: isProd
          ? "https://api.datasec.org.kz/uploads/:path*"
          : "http://localhost:4200/uploads/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloudflare-ipfs.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
