module.exports = {
  apps: [
    {
      name: 'mai-admin-app',
      exec_mode: 'cluster',
      watch: true,
      script: 'node_modules/next/dist/bin/next',
      args: 'start --port 8000',
      autorestart: true,
      listen_timeout: 50000,
      kill_timeout: 5000,
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
