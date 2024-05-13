import withVideos from "next-videos";
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
          },
        ],
      },
};
const videoConfig = withVideos();
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...nextConfig,
  ...videoConfig,
};



