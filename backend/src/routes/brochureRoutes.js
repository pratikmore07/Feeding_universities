const express = require("express");
const {
  createBrochureLead,
} = require("../controllers/brochureController");
const {
  validateBrochureLead,
} = require("../middleware/brochureValidation");

const router = express.Router();

router.post("/", validateBrochureLead, createBrochureLead);

module.exports = router;