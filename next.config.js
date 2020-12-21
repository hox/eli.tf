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
        source: '/discord',
        destination: 'https://go.eli.tf/discord',
      },
      {
        source: '/twitch',
        destination: 'https://go.eli.tf/twitch',
      },
      {
        source: '/snapchat',
        destination: 'https://go.eli.tf/snapchat',
      },
      {
        source: '/youtube',
        destination: 'https://go.eli.tf/youtube',
      },
    ];
  },
};
