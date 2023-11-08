module.exports = {
  apps: [
    {
      name: "sit_stay_style-react-app",
      script: "npm",
      args: "build",
      interpreter: "none",
      env: {
        PORT: 8080, // Set the desired port number here
      },
      cwd: "/home/site/wwwroot/client", // Set the correct working directory
    },
  ],
};

