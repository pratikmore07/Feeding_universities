const nodemailer = require("nodemailer");
const config = require("../../env");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.smtp.user,
    pass: config.smtp.pass,
  },
});

async function sendBrochureLeadEmail(lead) {
  const subject = `Brochure Download: ${lead.brochureName} — ${lead.name}`;

  const text = `
New Brochure Download Lead

Timestamp: ${lead.leadDateTime}
Lead ID: ${lead.leadId}
Lead Category: ${lead.leadCategory}
Form Name: ${lead.formName}

Brochure Name: ${lead.brochureName}
Brochure Link: ${lead.brochureLink}

Full Name: ${lead.name}
Mobile: ${lead.mobileNumber}
Email: ${lead.email}
Preferred University: ${lead.universityPreference}
Interested Program: ${lead.courseInterestedIn}
Budget: ${lead.budget || "Not provided"}
Message: ${lead.message || "Not provided"}

UTM Source: ${lead.utmSource || "Not provided"}
UTM Medium: ${lead.utmMedium || "Not provided"}
UTM Campaign: ${lead.utmCampaign || "Not provided"}
UTM Term: ${lead.utmTerm || "Not provided"}
UTM Content: ${lead.utmContent || "Not provided"}
UTM ID: ${lead.utmId || "Not provided"}
UTM Source Platform: ${lead.utmSourcePlatform || "Not provided"}
UTM Creative Format: ${lead.utmCreativeFormat || "Not provided"}
UTM Marketing Tactic: ${lead.utmMarketingTactic || "Not provided"}
Google Click ID: ${lead.gclid || "Not provided"}
Google GBRAID: ${lead.gbraid || "Not provided"}
Google WBRAID: ${lead.wbraid || "Not provided"}
Meta Click ID: ${lead.fbclid || "Not provided"}
Source Page: ${lead.sourcePage || "Not provided"}
Referrer: ${lead.referrer || "Direct"}
`;

  return transporter.sendMail({
    from: `"Website Brochure Leads" <${config.smtp.user}>`,
    to: config.leadEmailTo,
    replyTo: lead.email,
    subject,
    text,
  });
}

module.exports = {
  sendBrochureLeadEmail,
};