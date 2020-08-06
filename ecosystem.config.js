module.exports = {
  apps: [
    {
      name: 'strapi-api',
      script: 'npm',
      args: 'start',
      env: {
        "NODE_ENV": "production",
      }
    },
  ],
};