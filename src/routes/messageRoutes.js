const express = require("express");
const router = express.Router();

const {
  getMessage
} = require("../controllers/messageController");

router.get("/", getMessage);

module.exports = router;