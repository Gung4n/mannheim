/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ["placekitten.com"],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: "url-loader",
      },
    });
    return config;
  },
};
