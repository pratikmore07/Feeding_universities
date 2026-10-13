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

function validateBrochureLead(req, res, next) {
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
      body.courseInterestedIn || body.course
    ),
    budget: clean(body.budget),
    message: clean(body.message),

    leadCategory: "Brochure Download",
    sheetTab: "Brochure Leads",
    formName: "Brochure Download Form",
    brochureName: clean(body.brochureName),
    brochureLink: clean(body.brochureLink),

  };

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

  if (!lead.universityPreference) {
    errors.universityPreference = "Preferred university is required";
  }

  if (!lead.courseInterestedIn) {
    errors.courseInterestedIn = "Interested program is required";
  }

  if (!lead.brochureName) {
    errors.brochureName = "Brochure information is missing";
  }

  if (!lead.brochureLink) {
    errors.brochureLink = "Brochure link is missing";
  }

  validateTrackingFields(lead, errors);

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      success: false,
      message: "Please correct the brochure form fields",
      errors,
    });
  }

  req.brochureLead = lead;
  next();
}

module.exports = {
  validateBrochureLead,
};