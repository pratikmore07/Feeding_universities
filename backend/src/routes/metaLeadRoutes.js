const express = require("express");
const {
  createMetaLead,
} = require("../controllers/metaLeadController");
const {
  validateMetaLead,
} = require("../middleware/metaLeadValidation");

const router = express.Router();

router.post("/", validateMetaLead, createMetaLead);

module.exports = router;