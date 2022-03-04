const express = require("express");
const router = express.Router();

const {

    postReview, deleteReview, getReview

} = require("../controllers/reviewControllers");

router.post("/", postReview);
router.delete("/:id", deleteReview);
router.get("/", getReview)

module.exports = router;