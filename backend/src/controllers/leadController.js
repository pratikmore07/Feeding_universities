const crypto = require("crypto");
const {
  appendLeadToGoogleSheet,
  getGoogleSheetTab,
} = require("../services/googleSheetsService");
const { sendLeadEmail } = require("../services/emailService");
const { trackLeadConversion } = require("../services/analyticsService");

function createLeadId() {
  return `LEAD-${Date.now()}-${crypto.randomBytes(3).toString("hex")}`;
}

async function createLead(req, res, next) {
  try {
    const lead = {
      ...req.lead,
      leadId: createLeadId(),
      eventId: req.lead.eventId || crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      leadCategory: "Admission Enquiry",
      sheetTab: getGoogleSheetTab(),
    };

    const results = await Promise.allSettled([
      appendLeadToGoogleSheet(lead),
      sendLeadEmail(lead),
    ]);

    const sheetResult = results[0];
    const emailResult = results[1];

    const sheetSuccess = sheetResult.status === "fulfilled";
    const emailSuccess = emailResult.status === "fulfilled";

    if (!sheetSuccess || !emailSuccess) {
      console.error("Lead delivery failed:", {
        sheet:
          sheetResult.status === "rejected"
            ? sheetResult.reason?.message
            : "success",
        email:
          emailResult.status === "rejected"
            ? emailResult.reason?.message
            : "success",
      });

      return res.status(502).json({
        success: false,
        message: "Lead received, but one or more delivery services failed",
        delivery: {
          googleSheets: sheetSuccess,
          email: emailSuccess,
        },
        leadId: lead.leadId,
      });
    }

    void trackLeadConversion(lead, req);

    return res.status(201).json({
      success: true,
      message: "Lead submitted successfully",
      leadId: lead.leadId,
      eventId: lead.eventId,
      delivery: {
        googleSheets: true,
        email: true,
      },
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createLead,
};