const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const {
  getTrackingFields,
  validateTrackingFields,
} = require("./tracking");

function clean(value) {
  if (value === undefined || value === null) {
    return "";
  }

  return String(value).trim();
}

function validateCounsellingLead(req, res, next) {
  const body = req.body || {};
  const lead = {
    ...getTrackingFields(body),
    name: clean(body.name),
    mobileNumber: clean(body.mobileNumber || body.mobile),
    email: clean(body.email).toLowerCase(),
    city: clean(body.city),
    state: clean(body.state),
    highestQualification: clean(body.highestQualification),
    interestedProgram: clean(body.interestedProgram),
    preferredUniversity: clean(body.preferredUniversity),
    budget: clean(body.budget),
    preferredCallTime: clean(body.preferredCallTime),
    message: clean(body.message),
  };
  const errors = {};

  if (!lead.name) errors.name = "Full name is required";
  if (!lead.mobileNumber) {
    errors.mobileNumber = "Mobile number is required";
  } else if (!/^[0-9+\-\s()]{7,20}$/.test(lead.mobileNumber)) {
    errors.mobileNumber = "Enter a valid mobile number";
  }
  if (!lead.email) {
    errors.email = "Email is required";
  } else if (!emailPattern.test(lead.email)) {
    errors.email = "Enter a valid email address";
  }
  if (!lead.city) errors.city = "City is required";
  if (!lead.state) errors.state = "State is required";
  if (!lead.highestQualification) {
    errors.highestQualification = "Highest qualification is required";
  }
  if (!lead.interestedProgram) {
    errors.interestedProgram = "Interested program is required";
  }

  const maxLengths = {
    name: 200,
    mobileNumber: 20,
    email: 254,
    city: 100,
    state: 100,
    highestQualification: 200,
    interestedProgram: 200,
    preferredUniversity: 200,
    budget: 100,
    preferredCallTime: 100,
    message: 3000,
  };

  for (const [field, maxLength] of Object.entries(maxLengths)) {
    if (lead[field].length > maxLength) {
      errors[field] = `${field} must be ${maxLength} characters or fewer`;
    }
  }

  validateTrackingFields(lead, errors);

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      success: false,
      message: "Please correct the counselling form fields",
      errors,
    });
  }

  req.counsellingLead = lead;
  next();
}

module.exports = { validateCounsellingLead };
