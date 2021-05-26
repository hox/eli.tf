module.exports = {
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
        source: '/snapchat',
        destination: 'https://go.eli.tf/snapchat',
      }
    ];
  },
};
