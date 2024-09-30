/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "user-profile-dating.s3.eu-north-1.amazonaws.com"
            },
            {
                hostname: "blogs.pokerdate.net"
            }
        ]
    },
    reactStrictMode: false,
};

export default nextConfig;
