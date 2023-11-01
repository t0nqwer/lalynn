/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "res.cloudinary.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
