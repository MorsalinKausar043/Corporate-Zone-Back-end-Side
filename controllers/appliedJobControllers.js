const { AppliedJob } = require("../models/appliedJobModel");
const mongoose = require("mongoose");

// get all applied jobs
const allAppliedJobs = async (req, res) => {
  try {
    if (req.query.email) {
      const email = req.query.email;
      const results = await AppliedJob.find({ candidateEmail: email });
      res.json(results);
    } else {
      const results = await AppliedJob.find();
      res.json(results);
    }
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

// post a applied jobs
const applyJob = async (req, res) => {
  try {
    const appliedJob = new AppliedJob(req.body);
    const result = await appliedJob.save();
    res.json(result);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

// delete a applied jobs
const deleteAppliedJob = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: mongoose.Types.ObjectId(id) };
    const result = await AppliedJob.findOneAndDelete(query);
    res.json(result);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

// update a applied job status
const updateAppliedJobStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: mongoose.Types.ObjectId(id) };
    const updatedDoc = { $set: req.body };
    const options = { upsert: true };
    const result = await AppliedJob.findOneAndUpdate(
      query,
      updatedDoc,
      options
    );
    res.json(result);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports = {
  allAppliedJobs,
  applyJob,
  deleteAppliedJob,
  updateAppliedJobStatus,
};
