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

function getGoogleSheetTab() {
  const configuredRange = config.google.sheetRange || "Leads!A:V";
  const separatorIndex = configuredRange.lastIndexOf("!");
  const rawTab =
    separatorIndex === -1
      ? configuredRange
      : configuredRange.slice(0, separatorIndex);

  return rawTab.replace(/^'|'$/g, "").replace(/''/g, "'") || "Leads";
}

async function appendLeadToGoogleSheet(lead) {
  const escapedTab = getGoogleSheetTab().replace(/'/g, "''");
  const values = [[
    lead.timestamp || "",
    lead.leadId || "",
    lead.leadCategory || "",
    lead.sheetTab || "",
    lead.formName || "",
    lead.ctaAction || "",
    lead.ctaLabel || "",
    lead.sourcePage || "",
    lead.pageTitle || "",
    lead.name || "",
    lead.mobileNumber || "",
    lead.email || "",
    lead.city || "",
    lead.state || "",
    lead.interestedProgram || "",
    lead.preferredUniversity || "",
    lead.budget || "",
    lead.message || "",
    lead.utmSource || "",
    lead.utmMedium || "",
    lead.utmCampaign || "",
    lead.referrer || "",
    lead.utmTerm || "",
    lead.utmContent || "",
    lead.utmId || "",
    lead.utmSourcePlatform || "",
    lead.utmCreativeFormat || "",
    lead.utmMarketingTactic || "",
    lead.gclid || "",
    lead.gbraid || "",
    lead.wbraid || "",
    lead.fbclid || "",
    lead.fbp || "",
    lead.fbc || "",
    lead.clientId || "",
    lead.eventId || "",
  ]];

  try {
    return await sheets.spreadsheets.values.append({
      spreadsheetId: config.google.sheetId,
      range: `'${escapedTab}'!A:AJ`,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values },
    });
  } catch (error) {
    console.error("Google Sheets error:", {
      message: error.message,
      code: error.code,
      status: error.response?.status,
      details: error.response?.data,
    });

    throw error;
  }
}

module.exports = { appendLeadToGoogleSheet, getGoogleSheetTab };
