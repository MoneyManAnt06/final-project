/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'phrrjghinzbtbfxpdaff.supabase.co',
      },
    ],
  },
};

module.exports = nextConfig;
