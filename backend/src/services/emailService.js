const nodemailer = require("nodemailer");
const config = require("../../env");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.smtp.user,
    pass: config.smtp.pass,
  },
});

async function sendLeadEmail(lead) {
  const subject = `New Lead: ${lead.name || "Website Enquiry"}`;

  const text = `
New Website Lead Received

Timestamp: ${lead.timestamp || ""}
Lead ID: ${lead.leadId || ""}
Lead Category: ${lead.leadCategory || ""}
Sheet Tab: ${lead.sheetTab || ""}
Form Name: ${lead.formName || ""}
CTA Action: ${lead.ctaAction || ""}
CTA Label: ${lead.ctaLabel || ""}
Source Page: ${lead.sourcePage || ""}
Page Title: ${lead.pageTitle || ""}
Full Name: ${lead.name || ""}
Mobile: ${lead.mobileNumber || ""}
Email: ${lead.email || ""}
City: ${lead.city || ""}
State: ${lead.state || ""}
Highest Qualification: ${lead.highestQualification || ""}
Interested Program: ${lead.interestedProgram || ""}
Preferred University: ${lead.preferredUniversity || ""}
Budget: ${lead.budget || ""}
Preferred Call Time: ${lead.preferredCallTime || ""}
Message: ${lead.message || ""}
UTM Source: ${lead.utmSource || ""}
UTM Medium: ${lead.utmMedium || ""}
UTM Campaign: ${lead.utmCampaign || ""}
UTM Term: ${lead.utmTerm || ""}
UTM Content: ${lead.utmContent || ""}
UTM ID: ${lead.utmId || ""}
UTM Source Platform: ${lead.utmSourcePlatform || ""}
UTM Creative Format: ${lead.utmCreativeFormat || ""}
UTM Marketing Tactic: ${lead.utmMarketingTactic || ""}
Google Click ID: ${lead.gclid || ""}
Google GBRAID: ${lead.gbraid || ""}
Google WBRAID: ${lead.wbraid || ""}
Meta Click ID: ${lead.fbclid || ""}
Referrer: ${lead.referrer || ""}
`;

  return transporter.sendMail({
    from: `"Website Leads" <${config.smtp.user}>`,
    to: config.leadEmailTo,
    replyTo: lead.email || config.smtp.user,
    subject,
    text,
  });
}

async function verifyEmailConnection() {
  return transporter.verify();
}

module.exports = {
  sendLeadEmail,
  verifyEmailConnection,
};