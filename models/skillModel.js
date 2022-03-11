const mongoose = require("mongoose");
const { Schema } = mongoose;

const skillSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    technology: {
        type: String,
        required: true,
    },
    pass: {
        type: Boolean,
        required: true,
    },
});

const Skill = mongoose.model("Skill", skillSchema);

module.exports = { Skill };