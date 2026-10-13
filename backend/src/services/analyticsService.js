const crypto = require("crypto");
const config = require("../../env");

const REQUEST_TIMEOUT_MS = 5000;

function addIfPresent(target, key, value) {
  if (value) {
    target[key] = value;
  }
}

function hash(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

async function sendGa4LeadEvent(lead) {
  const { ga4MeasurementId, ga4ApiSecret } = config.analytics;
  if (!ga4MeasurementId || !ga4ApiSecret || !lead.clientId) {
    return;
  }

  const params = {
    engagement_time_msec: 1,
    method: "website_form",
    form_name: lead.formName,
    event_id: lead.eventId,
  };
  if (config.analytics.ga4DebugMode) {
    params.debug_mode = true;
  }

  addIfPresent(params, "campaign_source", lead.utmSource);
  addIfPresent(params, "campaign_medium", lead.utmMedium);
  addIfPresent(params, "campaign_name", lead.utmCampaign);
  addIfPresent(params, "campaign_term", lead.utmTerm);
  addIfPresent(params, "campaign_content", lead.utmContent);

  const endpoint = new URL(
    "https://www.google-analytics.com/mp/collect",
  );
  endpoint.searchParams.set("measurement_id", ga4MeasurementId);
  endpoint.searchParams.set("api_secret", ga4ApiSecret);

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    body: JSON.stringify({
      client_id: lead.clientId,
      events: [{ name: "generate_lead", params }],
    }),
  });

  if (!response.ok) {
    throw new Error(
      `GA4 Measurement Protocol returned HTTP ${response.status}: ${await response.text()}`,
    );
  }
}

async function sendMetaLeadEvent(lead, req) {
  const { metaPixelId, metaAccessToken, metaApiVersion } = config.analytics;
  if (!metaPixelId || !metaAccessToken) {
    return;
  }

  const userData = {};
  if (lead.email) {
    userData.em = [hash(lead.email.trim().toLowerCase())];
  }
  if (lead.mobileNumber) {
    const phone = lead.mobileNumber.replace(/\D/g, "");
    if (phone) {
      userData.ph = [hash(phone)];
    }
  }
  addIfPresent(userData, "fbp", lead.fbp);
  addIfPresent(userData, "fbc", lead.fbc);
  addIfPresent(userData, "client_ip_address", req.ip);
  addIfPresent(userData, "client_user_agent", req.get("user-agent"));

  const endpoint = new URL(
    `https://graph.facebook.com/${encodeURIComponent(metaApiVersion)}/${encodeURIComponent(metaPixelId)}/events`,
  );
  endpoint.searchParams.set("access_token", metaAccessToken);

  const payload = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: lead.eventId,
        action_source: "website",
        event_source_url: lead.sourcePage || undefined,
        user_data: userData,
        custom_data: {
          content_name: lead.formName,
          content_category: "Education Lead Generation",
          ...(lead.utmSource && { utm_source: lead.utmSource }),
          ...(lead.utmMedium && { utm_medium: lead.utmMedium }),
          ...(lead.utmCampaign && { utm_campaign: lead.utmCampaign }),
          ...(lead.utmTerm && { utm_term: lead.utmTerm }),
          ...(lead.utmContent && { utm_content: lead.utmContent }),
          ...(lead.utmId && { utm_id: lead.utmId }),
        },
      },
    ],
  };
  if (config.analytics.metaTestEventCode) {
    payload.test_event_code = config.analytics.metaTestEventCode;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(
      `Meta Conversions API returned HTTP ${response.status}: ${await response.text()}`,
    );
  }
}

async function trackLeadConversion(lead, req) {
  const results = await Promise.allSettled([
    sendMetaLeadEvent(lead, req),
    sendGa4LeadEvent(lead),
  ]);

  for (const [index, result] of results.entries()) {
    if (result.status === "rejected") {
      console.error(
        `${index === 0 ? "Meta Conversions API" : "GA4 Measurement Protocol"} lead event failed:`,
        {
          leadId: lead.leadId,
          message: result.reason?.message || "Unknown analytics error",
        },
      );
    }
  }
}

module.exports = { trackLeadConversion };
