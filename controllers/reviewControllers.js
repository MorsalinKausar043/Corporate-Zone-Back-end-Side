const mongoose = require("mongoose");
const { Review } = require("../models/reviewModel");

// post a review

const postReview = async (req, res) =>{
    try {
        const review = new Review(req.body);
        const result = await review.save();
        res.json(result)
    } catch (error) {
        res.status(500).json({ error : error.message })
    }
};

module.exports = {
    postReview
}