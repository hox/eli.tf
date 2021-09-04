module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/twitter',
        destination: 'https://go.eli.tf/twitter',
      },
      {
        source: '/github',
        destination: 'https://go.eli.tf/github',
      },
      {
        source: '/instagram',
        destination: 'https://go.eli.tf/instagram',
      },
      {
        source: '/unsplash',
        destination: 'https://go.eli.tf/unsplash',
      },
    ];
  },
};
