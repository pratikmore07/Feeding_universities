const express = require("express");
const { createLead } = require("../controllers/leadController");
const { validateLead } = require("../middleware/validation");

const router = express.Router();

router.post("/", validateLead, createLead);

module.exports = router;