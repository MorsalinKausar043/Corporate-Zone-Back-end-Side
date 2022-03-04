const mongoose = require("mongoose");
const { Schema } = mongoose;

const appliedJobModel = new Schema({
  jobId: {
    type: String,
    required: true,
  },
  candidateEmail: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
  appliedDate: {
    type: Date,
    default: Date.now(),
  },
});

const AppliedJob = mongoose.model("AppliedJob", appliedJobModel);

module.exports = { AppliedJob };