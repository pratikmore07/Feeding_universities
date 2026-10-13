function clean(value) {
  if (value === undefined || value === null) {
    return "";
  }

  return String(value).trim();
}

function getTrackingFields(body) {
  return {
    sourcePage: clean(body.sourcePage),
    pageTitle: clean(body.pageTitle),
    referrer: clean(body.referrer) || "Direct",
    utmSource: clean(body.utmSource || body.utm_source),
    utmMedium: clean(body.utmMedium || body.utm_medium),
    utmCampaign: clean(body.utmCampaign || body.utm_campaign),
    utmTerm: clean(body.utmTerm || body.utm_term),
    utmContent: clean(body.utmContent || body.utm_content),
    utmId: clean(body.utmId || body.utm_id),
    utmSourcePlatform: clean(
      body.utmSourcePlatform || body.utm_source_platform,
    ),
    utmCreativeFormat: clean(
      body.utmCreativeFormat || body.utm_creative_format,
    ),
    utmMarketingTactic: clean(
      body.utmMarketingTactic || body.utm_marketing_tactic,
    ),
    gclid: clean(body.gclid),
    gbraid: clean(body.gbraid),
    wbraid: clean(body.wbraid),
    fbclid: clean(body.fbclid),
    fbp: clean(body.fbp),
    fbc: clean(body.fbc),
    clientId: clean(body.clientId),
    eventId: clean(body.eventId),
  };
}

const trackingFieldMaxLengths = {
  sourcePage: 2048,
  pageTitle: 300,
  referrer: 2048,
  utmSource: 500,
  utmMedium: 500,
  utmCampaign: 500,
  utmTerm: 500,
  utmContent: 500,
  utmId: 500,
  utmSourcePlatform: 500,
  utmCreativeFormat: 500,
  utmMarketingTactic: 500,
  gclid: 2048,
  gbraid: 2048,
  wbraid: 2048,
  fbclid: 2048,
  fbp: 500,
  fbc: 500,
  clientId: 100,
  eventId: 100,
};

function validateTrackingFields(lead, errors) {
  for (const [field, maxLength] of Object.entries(trackingFieldMaxLengths)) {
    if (lead[field].length > maxLength) {
      errors[field] = `${field} must be ${maxLength} characters or fewer`;
    }
  }

  if (lead.eventId && !/^[A-Za-z0-9._-]+$/.test(lead.eventId)) {
    errors.eventId = "Invalid event ID";
  }

  return errors;
}

module.exports = {
  getTrackingFields,
  validateTrackingFields,
};
