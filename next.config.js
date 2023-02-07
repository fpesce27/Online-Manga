/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.leercapitulo.com', 'cdn.myanimelist.net'],
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/manga',
        permanent: true,
      },
      {
        source: '/anime',
        destination: '/manga',
        permanent: true,
      },
      {
        source: '/clubs',
        destination: '/manga',
        permanent: true,
      },
      {
        source: '/random',
        destination: '/manga',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
