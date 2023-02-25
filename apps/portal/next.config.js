/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['loremflickr.com'],
	},
	async rewrites() {
		return [
			{
				source: '/auth/callback/:path*',
				destination: '/api/auth/callback/:path*',
			},
			{
				source: '/graphql/:path*',
				destination: 'http://localhost:3000/api/:path*',
			},
		];
	},
};

module.exports = nextConfig;
