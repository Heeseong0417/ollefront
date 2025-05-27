/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  //output: 'export',
  images: {
    unoptimized: true, 
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ['localhost:',"as1.ftcdn.net","d2v80xjmx68n4w.cloudfront.net" /* 다른 도메인들을 추가할 수 있습니다 */],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name].[ext]',
        },
      },
    });

    return config;
  },
};

export default nextConfig;