

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.drydash.in", // incoming domain
          },
        ],
        destination: "https://drydash.in/:path*", // target domain
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
