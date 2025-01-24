import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                hostname: "images.dc.prod.cloud.atriumsports.com",
            },
        ],
    },
};

export default nextConfig;
