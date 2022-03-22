const mongoose = require("mongoose");
const { Schema } = mongoose;

const paymentSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    plan: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    method: {
        type: Array,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

const payment = mongoose.model("payment", paymentSchema);

module.exports = { payment };
