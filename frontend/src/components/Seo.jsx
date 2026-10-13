import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = (
  import.meta.env.VITE_SITE_URL || "https://feedinguniversities.com"
).replace(/\/+$/, "");
const SITE_NAME = "Feeding Universities";
const DEFAULT_DESCRIPTION =
  "Explore online degree programs and UGC-DEB verified universities. Compare courses, fees and admission options with free guidance from Feeding Universities.";

const PAGE_METADATA = {
  "/": {
    title: "Online Universities & Degree Programs | Feeding Universities",
    description:
      "Find the right online degree program and UGC-DEB verified university. Compare courses, fees and admission options with free guidance.",
  },
  "/about": {
    title: "About Us | Feeding Universities",
    description:
      "Learn how Feeding Universities helps students discover online degrees and compare universities with clear, verified information.",
  },
  "/contact": {
    title: "Contact an Admission Counsellor | Feeding Universities",
    description:
      "Talk to a Feeding Universities counsellor for free guidance on online degree programs, universities and admissions.",
  },
  "/counselling": {
    title: "Free Education Counselling | Feeding Universities",
    description:
      "Request a free counselling call to compare online degree programs, universities, fees and admission options.",
  },
  "/universities": {
    title: "Explore Online Universities | Feeding Universities",
    description:
      "Browse universities offering online degrees. Compare programs, locations, recognition details and admission options.",
  },
  "/admission-process": {
    title: "Online University Admission Process | Feeding Universities",
    description:
      "Understand the steps, documents and timelines for applying to an online university program in India.",
  },
  "/compare": {
    title: "Compare Online Universities | Feeding Universities",
    description:
      "Compare online universities, programs and admission details to find the right fit for your goals.",
    noIndex: true,
  },
  "/fees-and-emi": {
    title: "Online Degree Fees and EMI Options | Feeding Universities",
    description:
      "Explore online degree fees, payment plans and possible EMI options to plan your university education.",
  },
  "/verify-recognition": {
    title: "Verify Online Degree Recognition | Feeding Universities",
    description:
      "Learn how to verify online university and degree recognition using official UGC-DEB information.",
  },
  "/management": {
    title: "Online Management Degrees | Feeding Universities",
    description:
      "Explore online MBA, BBA and management programs from universities, with guidance to compare your options.",
  },
  "/technology": {
    title: "Online Technology Degrees | Feeding Universities",
    description:
      "Explore online MCA, BCA and technology programs including data science, AI and cybersecurity.",
  },
  "/commerce": {
    title: "Online Commerce Degrees | Feeding Universities",
    description:
      "Compare online B.Com, M.Com and commerce programs to find a degree aligned with your career goals.",
  },
  "/arts": {
    title: "Online Arts and Humanities Degrees | Feeding Universities",
    description:
      "Explore online BA, MA and humanities programs from universities offering flexible study options.",
  },
  "/explore-by-goal": {
    title: "Find a Degree for Your Goals | Feeding Universities",
    description:
      "Explore online degree options based on your goals, experience and career plans.",
  },
  "/faq": {
    title: "Frequently Asked Questions | Feeding Universities",
    description:
      "Get answers to common questions about online degrees, admissions, university recognition and counselling.",
  },
  "/blog": {
    title: "Online Education Insights and Guides | Feeding Universities",
    description:
      "Read useful guides and insights on online degrees, university admissions, careers and education choices.",
  },
  "/admissions-guide": {
    title: "Online Admissions Guide | Feeding Universities",
    description:
      "Use this guide to understand online university applications, eligibility, documents and admission steps.",
  },
  "/ugc-deb-verification-guide": {
    title: "UGC-DEB Verification Guide | Feeding Universities",
    description:
      "Learn how to check UGC-DEB recognition and verify online programs before applying.",
  },
  "/online-degree-validity": {
    title: "Online Degree Validity and Recognition | Feeding Universities",
    description:
      "Understand online degree validity, recognition and what to verify for jobs and further education.",
  },
  "/career-outcomes": {
    title: "Online Degree Career Outcomes | Feeding Universities",
    description:
      "Explore career pathways and outcomes associated with online degrees and specializations.",
  },
  "/career-scope": {
    title: "Career Scope After an Online Degree | Feeding Universities",
    description:
      "Explore career possibilities after an online degree and learn how to choose a program for your goals.",
  },
  "/salary-guide": {
    title: "Career and Salary Guide | Feeding Universities",
    description:
      "Explore career paths and salary considerations when planning your next degree or specialization.",
  },
  "/emi-scholarship-guide": {
    title: "EMI and Scholarship Guide | Feeding Universities",
    description:
      "Learn about education fee planning, possible EMI options and scholarships for online degree programs.",
  },
  "/metaads": {
    title: "Get Free Online Degree Guidance | Feeding Universities",
    description:
      "Get free guidance to compare online degree programs and universities based on your goals.",
    noIndex: true,
  },
  "/thank-you": {
    title: "Request Received | Feeding Universities",
    description: "Your request has been received by Feeding Universities.",
    noIndex: true,
  },
};

function setMeta(selector, attribute, value, content) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", url);
}

const Seo = () => {
  const { pathname } = useLocation();
  const normalizedPath =
    pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const metadata = PAGE_METADATA[normalizedPath];
  const isNotFound = !metadata;
  const title = metadata?.title || `Page Not Found | ${SITE_NAME}`;
  const description = metadata?.description || DEFAULT_DESCRIPTION;
  const canonicalUrl = `${SITE_URL}${normalizedPath}`;
  const noIndex = isNotFound || metadata.noIndex;

  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta(
      'meta[name="robots"]',
      "name",
      "robots",
      noIndex ? "noindex, nofollow" : "index, follow",
    );
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta(
      'meta[property="og:site_name"]',
      "property",
      "og:site_name",
      SITE_NAME,
    );
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      description,
    );
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta(
      'meta[name="twitter:card"]',
      "name",
      "twitter:card",
      "summary",
    );
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      description,
    );
    setCanonical(canonicalUrl);

    let schema = document.head.querySelector("#page-seo-schema");
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "page-seo-schema";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url: canonicalUrl,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: `${SITE_URL}/`,
      },
    });
  }, [canonicalUrl, description, noIndex, title]);

  return null;
};

export default Seo;
