const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const protect = require("../middleware/authMiddleware");

router.post("/",protect,contactController.contactUs);

module.exports = router;