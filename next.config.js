/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: [
      "bjorn66.com",
      "6ammart-test.6amdev.xyz",
      "192.168.50.168",
      "6ammart-dev.6amdev.xyz",
      "admin.tamam.krd",
      "app.tamam.krd",
      "admin.tamam.shop",
      "tamam.shop",
      "localhost",
      "admin-stag.tamam.krd",
      "app-stag.tamam.krd",
    ], // Add staging and production domains
  },
};

module.exports = nextConfig;
