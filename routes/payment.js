const express = require("express");
const router = express.Router();
const { getPayment, updatePayment } = require("../controllers/paymentControllers");

// get a user Payment
router.get("/:email", getPayment);

// put a user Payment
router.put("/:email", updatePayment);

module.exports = router;