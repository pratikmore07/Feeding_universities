const nodemailer = require("nodemailer");
const config = require("../../env");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.smtp.user,
    pass: config.smtp.pass,
  },
});

async function sendMetaLeadEmail(lead) {
  const subject = `Meta Ads Lead: ${lead.name} — ${lead.courseInterestedIn}`;

  const text = `
New Meta Ads Lead

Timestamp: ${lead.leadDateTime}
Lead ID: ${lead.leadId}
Lead Category: ${lead.leadCategory}
Sheet Tab: ${lead.sheetTab}
Form Name: ${lead.formName}
CTA Action: ${lead.ctaAction}
CTA Label: ${lead.ctaLabel}

Full Name: ${lead.name}
Mobile: ${lead.mobileNumber}
Email: ${lead.email}
Preferred University: ${lead.universityPreference || "Not provided"}
Interested Program: ${lead.courseInterestedIn}
City: ${lead.city}
State: ${lead.state}
Budget: ${lead.budget || "Not provided"}
Message: ${lead.message || "Not provided"}

Source Page: ${lead.sourcePage}
Page Title: ${lead.pageTitle}
Brochure Link: ${lead.brochureLink || "Not provided"}
UTM Source: ${lead.utmSource}
UTM Medium: ${lead.utmMedium}
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
Referrer: ${lead.referrer}
`;

  return transporter.sendMail({
    from: `"Meta Ads Leads" <${config.smtp.user}>`,
    to: config.leadEmailTo,
    replyTo: lead.email,
    subject,
    text,
  });
}

module.exports = {
  sendMetaLeadEmail,
};