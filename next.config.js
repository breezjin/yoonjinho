/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['s3.us-west-2.amazonaws.com', 'www.notion.so', 'images.unsplash.com', 'encrypted-tbn0.gstatic.com'],
  },
  env: {
    NOTION_API_URL: 'https://api.notion.com/v1',
    NOTION_API_VERSION: '2022-06-28',
  },
};

module.exports = nextConfig;
