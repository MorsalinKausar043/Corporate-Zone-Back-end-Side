const express = require("express");
const router = express.Router();

const {

    postReview

} = require("../controllers/reviewControllers");

router.post("/", postReview);

module.exports = router;