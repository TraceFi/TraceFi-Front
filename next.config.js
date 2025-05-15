/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/LP',
          permanent: false,
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  