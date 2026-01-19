/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // 🔥 This enables `out/` folder
  images: {
    unoptimized: true // required for static export
  }
}

module.exports = nextConfig
