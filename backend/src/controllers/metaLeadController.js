const crypto = require("crypto");

const {
  appendMetaLeadToGoogleSheet,
} = require("../services/metaGoogleSheetsService");

const {
  sendMetaLeadEmail,
} = require("../services/metaEmailService");
const { trackLeadConversion } = require("../services/analyticsService");

function createMetaLeadId() {
  return `META-${Date.now()}-${crypto.randomBytes(3).toString("hex")}`;
}

function getIndiaDateTime() {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(new Date());
}

function getErrorMessage(result) {
  if (result.status === "fulfilled") {
    return null;
  }

  return (
    result.reason?.response?.data?.error?.message ||
    result.reason?.message ||
    "Unknown delivery error"
  );
}

async function createMetaLead(req, res, next) {
  try {
    const lead = {
      ...req.metaLead,
      leadId: createMetaLeadId(),
      eventId: req.metaLead.eventId || crypto.randomUUID(),
      leadDateTime: getIndiaDateTime(),
    };

    const [sheetResult, emailResult] = await Promise.allSettled([
      appendMetaLeadToGoogleSheet(lead),
      sendMetaLeadEmail(lead),
    ]);

    const googleSheets = {
      success: sheetResult.status === "fulfilled",
      error: getErrorMessage(sheetResult),
    };

    const email = {
      success: emailResult.status === "fulfilled",
      error: getErrorMessage(emailResult),
    };

    console.log("Meta lead delivery result:", {
      leadId: lead.leadId,
      googleSheets,
      email,
    });

    if (!googleSheets.success || !email.success) {
      return res.status(502).json({
        success: false,
        message:
          "Meta lead received, but one or more delivery services failed",
        leadId: lead.leadId,
        delivery: {
          googleSheets,
          email,
        },
      });
    }

    void trackLeadConversion(lead, req);

    return res.status(201).json({
      success: true,
      message: "Meta lead submitted successfully",
      leadId: lead.leadId,
      eventId: lead.eventId,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createMetaLead,
};