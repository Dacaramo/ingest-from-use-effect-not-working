const { withAxiom } = require('next-axiom');

const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl(
  withAxiom({
    // Other Next.js configuration ...
    output: 'standalone',
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
    },
  })
);
