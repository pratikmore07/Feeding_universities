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

async function appendBrochureLeadToGoogleSheet(lead) {
  const values = [
    [
      // A - Timestamp
      lead.leadDateTime,

      // B - Lead ID
      lead.leadId,

      // C - Lead Category
      lead.leadCategory,

      // D - Sheet Tab
      lead.sheetTab,

      // E - Form Name
      lead.formName,

      // F - Full Name
      lead.name,

      // G - Mobile
      lead.mobileNumber,

      // H - Email
      lead.email,

      // I - Preferred University
      lead.universityPreference,

      // J - Interested Program
      lead.courseInterestedIn,

      // K - Brochure Link
      lead.brochureLink,

      // L - Message
      lead.message,

      // M - UTM Source
      lead.utmSource,

      // N - UTM Medium
      lead.utmMedium,

      // O - UTM Campaign
      lead.utmCampaign,

      // P - Referrer
      lead.referrer,

      // Q - Budget
      lead.budget,

      // R - UTM Term
      lead.utmTerm,

      // S - UTM Content
      lead.utmContent,

      // T - UTM ID
      lead.utmId,

      // U - UTM Source Platform
      lead.utmSourcePlatform,

      // V - UTM Creative Format
      lead.utmCreativeFormat,

      // W - UTM Marketing Tactic
      lead.utmMarketingTactic,

      // X - Google Click ID
      lead.gclid,

      // Y - Google Click ID (GBRAID)
      lead.gbraid,

      // Z - Google Click ID (WBRAID)
      lead.wbraid,

      // AA - Meta Click ID
      lead.fbclid,

      // AB - Meta Browser ID
      lead.fbp,

      // AC - Meta click cookie ID
      lead.fbc,

      // AD - GA4 Client ID
      lead.clientId,

      // AE - Conversion event ID
      lead.eventId,

      // AF - Source page
      lead.sourcePage,

      // AG - Page title
      lead.pageTitle,
    ],
  ];

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: config.google.sheetId,
    range: "'Brochure Leads'!A:AG",
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values,
    },
  });

  console.log(
    "Brochure lead saved:",
    response.data.updates.updatedRange
  );

  return response.data;
}

module.exports = {
  appendBrochureLeadToGoogleSheet,
};