// /** @type {import('next').NextConfig} */
// module.exports = {
//   // experimental: { tsconfigPaths: true },
//   images: {
//     remotePatterns: [
//       { protocol: 'https', hostname: 'drive.google.com' },
//       { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
//     ],
//   }
// };


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/potfolio-', // <-- your repo name
  assetPrefix: '/potfolio-/', // <-- your repo name again
};

module.exports = nextConfig;
