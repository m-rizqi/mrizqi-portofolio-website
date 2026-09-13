// PM2 process config for production (VPS). Not used by `npm run dev` locally.
// Port lives here (not hardcoded in the deploy script) so it survives
// redeploys and stays in one place with the Nginx config that must match it.
module.exports = {
  apps: [
    {
      name: "mrizqi-portfolio",
      cwd: __dirname,
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3003,
      },
    },
  ],
};
