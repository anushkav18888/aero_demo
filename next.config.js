/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  /**assetPrefix: '/aea', */
  images: {
    domains: ["cdn.sanity.io"],
    path: "/aea/_next"
  }
}
