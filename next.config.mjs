/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.basePath ?? '/home-app',
    output: 'export',
};

export default nextConfig;
