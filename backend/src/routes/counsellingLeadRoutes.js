const express = require("express");
const {
  createCounsellingLead,
} = require("../controllers/counsellingLeadController");
const {
  validateCounsellingLead,
} = require("../middleware/counsellingLeadValidation");

const router = express.Router();

router.post("/", validateCounsellingLead, createCounsellingLead);

module.exports = router;
