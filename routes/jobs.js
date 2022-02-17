const express = require("express");
const router = express.Router();
const {
  postJob,
  allJobs,
  approvedJobs,
  getJobById,
  updateJob,
  deleteJobById,
} = require("../controllers/jobControllers");

// get all jobs
router.get("/", allJobs);

// get all approved jobs here
router.get("/approved", approvedJobs);

// get a job by _id
router.get("/:id", getJobById);

// post a new job
router.post("/", postJob);

// update a job
router.put("/:id", updateJob);

// delete a job by _id
router.delete("/:id", deleteJobById);

module.exports = router;
