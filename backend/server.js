const app = require("./app");
const config = require("./env");
const { verifyEmailConnection } = require("./src/services/emailService");

const server = app.listen(config.port, async (error) => {
  if (error) {
    console.error(`Failed to start lead server on port ${config.port}:`, error);
    process.exitCode = 1;
    return;
  }

  console.log(`Lead server running on port ${config.port}`);

  try {
    await verifyEmailConnection();
    console.log("Email service connected");
  } catch (error) {
    console.error("Email service connection failed:", error.message);
  }
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});