const { google } = require("googleapis");
const config = require("../../env");

const sheetTab = "COUNSELLING LEADS";
const headers = [
  "Timestamp",
  "Lead ID",
  "Lead Category",
  "Sheet Tab",
  "Form Name",
  "CTA Action",
  "CTA Label",
  "Source Page",
  "Page Title",
  "Full Name",
  "Mobile",
  "Email",
  "City",
  "State",
  "Highest Qualification",
  "Interested Program",
  "Preferred University",
  "Budget",
  "Preferred Call Time",
  "Message",
  "UTM Source",
  "UTM Medium",
  "UTM Campaign",
  "Referrer",
];

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

async function ensureCounsellingHeaders() {
  const range = `'${sheetTab}'!A1:X1`;
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: config.google.sheetId,
    range,
  });
  const existingHeaders = response.data.values?.[0] || [];

  if (existingHeaders.length === 0) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: config.google.sheetId,
      range,
      valueInputOption: "RAW",
      requestBody: { values: [headers] },
    });
    return;
  }

  if (
    headers.some((header, index) => existingHeaders[index] !== header) ||
    existingHeaders.length > headers.length
  ) {
    throw new Error(
      `The ${sheetTab} tab headers must match the counselling lead columns in order`,
    );
  }
}

async function appendCounsellingLeadToGoogleSheet(lead) {
  await ensureCounsellingHeaders();

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
    lead.highestQualification || "",
    lead.interestedProgram || "",
    lead.preferredUniversity || "",
    lead.budget || "",
    lead.preferredCallTime || "",
    lead.message || "",
    lead.utmSource || "",
    lead.utmMedium || "",
    lead.utmCampaign || "",
    lead.referrer || "",
  ]];

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: config.google.sheetId,
    range: `'${sheetTab}'!A:X`,
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values },
  });

  return response.data;
}

module.exports = { appendCounsellingLeadToGoogleSheet };
