const { google } = require("googleapis");
const config = require("../../env");

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: config.google.serviceAccountEmail,
    private_key: config.google.privateKey,
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({
  version: "v4",
  auth,
});

async function appendMetaLeadToGoogleSheet(lead) {
  const values = [
    [
      // A: Timestamp
      lead.leadDateTime || "",

      // B: Lead ID
      lead.leadId || "",

      // C: Lead Category
      lead.leadCategory || "Meta Ads Lead",

      // D: Sheet Tab
      lead.sheetTab || "Meta",

      // E: Form Name
      lead.formName || "Meta Ads Landing Page Form",

      // F: CTA Action
      lead.ctaAction || "Form Submit",

      // G: CTA Label
      lead.ctaLabel || "Get Free Counselling",

      // H: Source Page
      lead.sourcePage || "",

      // I: Page Title
      lead.pageTitle || "",

      // J: Full Name
      lead.name || "",

      // K: Mobile
      lead.mobileNumber || "",

      // L: Email
      lead.email || "",

      // M: Preferred University
      lead.universityPreference || "",

      // N: Interested Program
      lead.courseInterestedIn || "",

      // O: Brochure Link
      lead.brochureLink || "",

      // P: Message
      lead.message || "",

      // Q: UTM Source
      lead.utmSource || "",

      // R: UTM Medium
      lead.utmMedium || "",

      // S: UTM Campaign
      lead.utmCampaign || "",

      // T: Referrer
      lead.referrer || "Direct",

      // U: Name
      lead.name || "",

      // V: City
      lead.city || "",

      // W: State
      lead.state || "",

      // X: Program Interest
      lead.courseInterestedIn || "",

      // Y: Budget
      lead.budget || "",

      // Z: UTM Term
      lead.utmTerm || "",

      // AA: UTM Content
      lead.utmContent || "",

      // AB: UTM ID
      lead.utmId || "",

      // AC: UTM Source Platform
      lead.utmSourcePlatform || "",

      // AD: UTM Creative Format
      lead.utmCreativeFormat || "",

      // AE: UTM Marketing Tactic
      lead.utmMarketingTactic || "",

      // AF: Google Click ID
      lead.gclid || "",

      // AG: Google Click ID (GBRAID)
      lead.gbraid || "",

      // AH: Google Click ID (WBRAID)
      lead.wbraid || "",

      // AI: Meta Click ID
      lead.fbclid || "",

      // AJ: Meta Browser ID
      lead.fbp || "",

      // AK: Meta click cookie ID
      lead.fbc || "",

      // AL: GA4 Client ID
      lead.clientId || "",

      // AM: Conversion event ID
      lead.eventId || "",
    ],
  ];

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: config.google.sheetId,
    range: "Meta!A:AM",
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values,
    },
  });

  console.log(
    "Meta lead saved to Google Sheet:",
    response.data.updates.updatedRange
  );

  return response.data;
}

module.exports = {
  appendMetaLeadToGoogleSheet,
};