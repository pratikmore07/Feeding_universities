const ATTRIBUTION_STORAGE_KEY = "fu_attribution";
const GOOGLE_TAG_MANAGER_ID = import.meta.env.VITE_GTM_ID;
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;
let lastPageViewKey;

const attributionParameters = {
  utmSource: "utm_source",
  utmMedium: "utm_medium",
  utmCampaign: "utm_campaign",
  utmTerm: "utm_term",
  utmContent: "utm_content",
  utmId: "utm_id",
  utmSourcePlatform: "utm_source_platform",
  utmCreativeFormat: "utm_creative_format",
  utmMarketingTactic: "utm_marketing_tactic",
  gclid: "gclid",
  gbraid: "gbraid",
  wbraid: "wbraid",
  fbclid: "fbclid",
};

function readAttribution() {
  try {
    const stored = sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.warn("Unable to read session attribution:", error);
    return {};
  }
}

function getCookie(name) {
  const cookie = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${name}=`));

  return cookie ? decodeURIComponent(cookie.slice(name.length + 1)) : "";
}

function captureAttribution() {
  const params = new URLSearchParams(window.location.search);
  const previous = readAttribution();
  const attribution = { ...previous };

  for (const [field, parameter] of Object.entries(attributionParameters)) {
    const value = params.get(parameter);
    if (value) {
      attribution[field] = value;
    }
  }

  let referrerHost = "";
  if (document.referrer) {
    try {
      referrerHost = new URL(document.referrer).hostname.replace(/^www\./, "");
    } catch (error) {
      console.warn("Unable to parse page referrer:", error);
    }
  }

  const hasUtmSource = params.has("utm_source");
  const hasUtmMedium = params.has("utm_medium");
  const inferredSource = attribution.fbclid
    ? "facebook"
    : attribution.gclid || attribution.gbraid || attribution.wbraid
      ? "google"
      : referrerHost || "direct";
  attribution.utmSource = attribution.utmSource || inferredSource;
  if (
    hasUtmSource &&
    !hasUtmMedium &&
    previous.utmSource !== attribution.utmSource
  ) {
    attribution.utmMedium = "unspecified";
  }
  attribution.utmMedium =
    attribution.utmMedium ||
    (hasUtmSource && !hasUtmMedium
      ? "unspecified"
      : attribution.fbclid
        ? "paid_social"
        : attribution.gclid || attribution.gbraid || attribution.wbraid
          ? "paid_search"
          : referrerHost
            ? "referral"
            : "none");

  attribution.fbp = getCookie("_fbp") || previous.fbp || "";
  attribution.fbc =
    getCookie("_fbc") ||
    (params.has("fbclid") && attribution.fbclid
      ? `fb.1.${Date.now()}.${attribution.fbclid}`
      : previous.fbc || "");
  attribution.referrer =
    previous.referrer || document.referrer || "Direct";

  try {
    sessionStorage.setItem(
      ATTRIBUTION_STORAGE_KEY,
      JSON.stringify(attribution),
    );
  } catch (error) {
    console.warn("Unable to store session attribution:", error);
  }

  return attribution;
}

function getGaClientId() {
  const gaCookie = getCookie("_ga");
  const match = gaCookie.match(/^GA\d+\.\d+\.(.+)$/);
  return match ? match[1] : "";
}

function createEventId() {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  const bytes = new Uint8Array(16);
  globalThis.crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join(
    "",
  );
}

function initializeGoogleTagManager() {
  window.dataLayer = window.dataLayer || [];

  if (!GOOGLE_TAG_MANAGER_ID || window.__fuGtmInitialized) {
    return;
  }

  window.__fuGtmInitialized = true;
  window.dataLayer.push({
    "gtm.start": Date.now(),
    event: "gtm.js",
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GOOGLE_TAG_MANAGER_ID)}`;
  document.head.appendChild(script);
}

function initializeMetaPixel() {
  if (!META_PIXEL_ID || window.__fuMetaPixelInitialized) {
    return;
  }

  window.__fuMetaPixelInitialized = true;

  if (!window.fbq) {
    const fbq = function (...args) {
      if (fbq.callMethod) {
        fbq.callMethod.apply(fbq, args);
      } else {
        fbq.queue.push(args);
      }
    };

    fbq.queue = [];
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    window.fbq = fbq;
    window._fbq = fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }

  window.fbq("init", META_PIXEL_ID);
}

export function trackPageView({ pathname, search, hash, key }) {
  if (key === lastPageViewKey) {
    return;
  }
  lastPageViewKey = key;

  const attribution = captureAttribution();

  initializeGoogleTagManager();
  initializeMetaPixel();

  if (typeof window.fbq === "function" && META_PIXEL_ID) {
    window.fbq("track", "PageView");
  }

  window.dataLayer.push({
    ...attribution,
    event: "page_view",
    page_location: `${window.location.origin}${pathname}${search}${hash}`,
    page_path: `${pathname}${search}${hash}`,
    page_title: document.title,
  });
}

export function getLeadTrackingData(formName) {
  const attribution = captureAttribution();

  return {
    ...attribution,
    clientId: getGaClientId(),
    eventId: createEventId(),
    sourcePage: window.location.href,
    pageTitle: document.title,
    formName,
  };
}

export function trackLeadSubmission({ formName, eventId, leadId }) {
  const trackingEventId = eventId || createEventId();

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    ...readAttribution(),
    event: "lead_submission_success",
    event_id: trackingEventId,
    form_name: formName,
    lead_id: leadId || "",
  });

  if (typeof window.fbq === "function" && META_PIXEL_ID) {
    window.fbq(
      "track",
      "Lead",
      {
        content_name: formName,
        content_category: "Education Lead Generation",
      },
      { eventID: trackingEventId },
    );
  }
}
