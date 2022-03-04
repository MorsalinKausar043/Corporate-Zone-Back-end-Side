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

// get all review

const getReview = async (req,res) =>{
    try{
        const reviews = await Review.find({});
        res.json(reviews)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

// delete review by id

const deleteReview = async (req,res) =>{
    try {
        const id = req.params.id;
        const query = {_id : id};
        const result = await Review.findByIdAndDelete(query)
        res.json(result);
    }catch{
        res.status(500).json({error:err.message})
    }
}

// const 

module.exports = {
    postReview,
    deleteReview,
    getReview,
}