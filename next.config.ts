/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  // If deploying to a GitHub Pages custom domain, you can remove the basePath
  // If deploying to a GitHub Pages project page (username.github.io/repo-name),
  // uncomment the line below and replace 'repo-name' with your repository name
  // basePath: '/repo-name',
  basePath: "/next-intl-ssg",
};

module.exports = nextConfig;
