const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobSchema = new Schema({
  jobTitle: {
    type: String,
    require: true,
  },
  jobDescription: {
    type: String,
    require: true,
  },
  responsibilities: {
    type: Array,
    require: true,
  },
  skills: {
    type: Array,
    require: true,
  },
  companyName: {
    type: String,
    require: true,
  },
  companyEmail: {
    type: String,
    require: true,
  },
  companyWebsite: {
    type: String,
    require: true,
  },
  companySize: {
    type: String,
    require: true,
  },
  businessType: {
    type: String,
    require: true,
  },
  companyLogo: {
    type: String,
    require: true,
  },
  jobType: {
    type: String,
    require: true,
  },
  salary: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  jobTags: {
    type: String,
    require: true,
  },
  experience: {
    type: String,
    require: true,
  },
  since: {
    type: Number,
    require: true,
  },
  lastDate: {
    type: Date,
    require: true,
  },
  postedTime: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    default: "pending",
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = { Job };
