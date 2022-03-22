const mongoose = require("mongoose");
const { payment } = require("../models/paymentModel");

// get a user skill by email
const getPayment = async (req, res) =>
{
    try {
        const email = req.params.email;
        const query = { email: email };
        const result = await payment.findOne(query);
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// update a user skill
const updatePayment = async (req, res) =>
{
    try {
        const email = req.params.email;
        const query = { email: email };
        const updateDoc = { $set: req.body };
        const options = { upsert: true };
        const result = await payment.findOneAndUpdate(query, updateDoc, options);
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getPayment, updatePayment };
