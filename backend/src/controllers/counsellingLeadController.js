const crypto = require("crypto");
const {
  appendCounsellingLeadToGoogleSheet,
} = require("../services/counsellingGoogleSheetsService");
const { sendLeadEmail } = require("../services/emailService");
const { trackLeadConversion } = require("../services/analyticsService");

function createCounsellingLeadId() {
  return `COUNSELLING-${Date.now()}-${crypto.randomBytes(3).toString("hex")}`;
}

async function createCounsellingLead(req, res, next) {
  const lead = {
    ...req.counsellingLead,
    leadId: createCounsellingLeadId(),
    eventId: req.counsellingLead.eventId || crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    leadCategory: "Counselling Lead",
    sheetTab: "COUNSELLING LEADS",
    formName: "Counselling Page Form",
    ctaAction: "Counselling Form Submit",
    ctaLabel: "Get Counselling",
  };

  try {
    await appendCounsellingLeadToGoogleSheet(lead);
  } catch (error) {
    return next(error);
  }

  void sendLeadEmail(lead).catch((error) => {
    console.error("Counselling lead email notification failed:", {
      leadId: lead.leadId,
      message: error.message,
    });
  });

  void trackLeadConversion(lead, req);

  return res.status(201).json({
    success: true,
    message: "Counselling request submitted successfully",
    leadId: lead.leadId,
    eventId: lead.eventId,
    delivery: { googleSheets: true },
  });
}

module.exports = { createCounsellingLead };
