const imageDomains = (process.env.IMAGE_DOMAINS || 'localhost').split(',');

module.exports = {
  reactStrictMode: true,
  env: {
    apiUrl: process.env.API_URL || 'http://localhost:1337',
    imageBaseUrl: process.env.IMAGE_BASE_URL || 'http://localhost:1337',
    social: {
      instagram: 'nucleoeiras_',
    },
  },
  images: {
    domains: imageDomains,
  },
};
