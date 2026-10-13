require("dotenv").config({ path: require("path").join(__dirname, ".env") });

const requiredEnv = [
  "SMTP_USER",
  "SMTP_PASS",
  "LEAD_EMAIL_TO",
  "GOOGLE_SHEET_ID",
  "GOOGLE_SERVICE_ACCOUNT_EMAIL",
  "GOOGLE_PRIVATE_KEY",
];

for (const variable of requiredEnv) {
  if (!process.env[variable]) {
    console.warn(`Warning: Missing environment variable ${variable}`);
  }
}

const trustProxyHops = Number(process.env.TRUST_PROXY_HOPS || 0);
if (!Number.isInteger(trustProxyHops) || trustProxyHops < 0) {
  throw new Error("TRUST_PROXY_HOPS must be a non-negative integer");
}

module.exports = {
  port: Number(process.env.PORT || 5000),
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:3000",
  security: {
    trustProxyHops,
  },

  smtp: {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 465),
    secure: String(process.env.SMTP_SECURE || "true") === "true",
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },

  leadEmailTo: process.env.LEAD_EMAIL_TO,

  google: {
    sheetId: process.env.GOOGLE_SHEET_ID,
    sheetRange: process.env.GOOGLE_SHEET_RANGE || "Leads!A:AJ",
    serviceAccountEmail: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    privateKey: process.env.GOOGLE_PRIVATE_KEY
      ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
      : undefined,
  },

  analytics: {
    ga4MeasurementId: process.env.GA4_MEASUREMENT_ID,
    ga4ApiSecret: process.env.GA4_API_SECRET,
    ga4DebugMode: process.env.GA4_DEBUG_MODE === "true",
    metaPixelId: process.env.META_PIXEL_ID,
    metaAccessToken: process.env.META_ACCESS_TOKEN,
    metaTestEventCode: process.env.META_TEST_EVENT_CODE,
    metaApiVersion: process.env.META_API_VERSION || "v24.0",
  },
};