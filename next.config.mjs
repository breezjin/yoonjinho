import addMdx from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrism from '@mapbox/rehype-prism';

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
  experimental: {
    appDir: true,
    mdxRs: true,
    scrollRestoration: true,
  },
  images: {
    domains: ['s3.us-west-2.amazonaws.com', 'www.notion.so', 'images.unsplash.com', 'encrypted-tbn0.gstatic.com'],
    formats: ['image/webp'],
  },
  env: {
    NOTION_API_URL: 'https://api.notion.com/v1',
    NOTION_API_VERSION: '2022-06-28',
  },
};

addMdx(nextConfig, {
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

export default nextConfig;
