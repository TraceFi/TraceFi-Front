/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/LP',
          permanent: false, // ou true se quiser que o navegador memorize (301)
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  