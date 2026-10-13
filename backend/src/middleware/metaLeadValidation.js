function clean(value) {
  if (value === undefined || value === null) {
    return "";
  }

  return String(value).trim();
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const {
  getTrackingFields,
  validateTrackingFields,
} = require("./tracking");

function validateMetaLead(req, res, next) {
  const body = req.body || {};

  const lead = {
    ...getTrackingFields(body),
    name: clean(body.name),
    mobileNumber: clean(body.mobileNumber || body.phone),
    email: clean(body.email).toLowerCase(),
    universityPreference: clean(
      body.universityPreference || body.university
    ),
    courseInterestedIn: clean(
      body.courseInterestedIn || body.course || body.programInterest
    ),
    city: clean(body.city),
    state: clean(body.state),
    budget: clean(body.budget),
    message: clean(body.message),

    leadCategory: "Meta Ads Lead",
    sheetTab: "Meta",
    formName: clean(body.formName) || "Meta Ads Landing Page Form",
    ctaAction: clean(body.ctaAction) || "Form Submit",
    ctaLabel: clean(body.ctaLabel) || "Get Free Counselling",

    brochureLink: clean(body.brochureLink),
  };
  lead.utmSource = lead.utmSource || "facebook";
  lead.utmMedium = lead.utmMedium || "paid_social";

  const errors = {};

  if (!lead.name) {
    errors.name = "Full name is required";
  }

  if (!lead.mobileNumber) {
    errors.mobileNumber = "Mobile number is required";
  } else if (!/^[0-9+\-\s()]{7,20}$/.test(lead.mobileNumber)) {
    errors.mobileNumber = "Enter a valid mobile number";
  }

  if (!lead.email) {
    errors.email = "Email address is required";
  } else if (!emailPattern.test(lead.email)) {
    errors.email = "Enter a valid email address";
  }

  if (!lead.courseInterestedIn) {
    errors.courseInterestedIn = "Interested program is required";
  }

  if (!lead.city) {
    errors.city = "City is required";
  }

  if (!lead.state) {
    errors.state = "State is required";
  }

  validateTrackingFields(lead, errors);

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      success: false,
      message: "Please correct the Meta lead form fields",
      errors,
    });
  }

  req.metaLead = lead;
  next();
}

module.exports = {
  validateMetaLead,
};