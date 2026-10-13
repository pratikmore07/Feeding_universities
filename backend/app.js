const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const config = require("./env");
const leadRoutes = require("./src/routes/leadRoutes");
const metaLeadRoutes = require("./src/routes/metaLeadRoutes");
const brochureRoutes = require("./src/routes/brochureRoutes");
const counsellingLeadRoutes = require("./src/routes/counsellingLeadRoutes");
const { leadRateLimiter } = require("./src/middleware/rateLimiter");
const errorHandler = require("./src/middleware/errorHandler");
const app = express();

if (config.security.trustProxyHops > 0) {
  app.set("trust proxy", config.security.trustProxyHops);
}

app.use(
  helmet({
    strictTransportSecurity:
      process.env.NODE_ENV === "production"
        ? { maxAge: 31_536_000, includeSubDomains: false, preload: false }
        : false,
  }),
);

app.use(
  cors({
    origin: config.frontendUrl.split(",").map((url) => url.trim()),
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true, limit: "100kb" }));
app.use("/api/meta-leads", leadRateLimiter, metaLeadRoutes);

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Lead API is running",
  });
});
app.use("/api/leads", leadRateLimiter, leadRoutes);
app.use("/api/counselling-leads", leadRateLimiter, counsellingLeadRoutes);
app.use("/api/brochure-leads", leadRateLimiter, brochureRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use(errorHandler);

module.exports = app;