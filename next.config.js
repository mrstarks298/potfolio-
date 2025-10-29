/** @type {import('next').NextConfig} */
module.exports = {
  // experimental: { tsconfigPaths: true },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'drive.google.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  }
};
