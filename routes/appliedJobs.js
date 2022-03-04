const express = require("express");
const router = express.Router();
const {
  allAppliedJobs,
  applyJob,
  updateAppliedJobStatus,
  deleteAppliedJob,
} = require("../controllers/appliedJobControllers");

// put a applied job
router.get("/", allAppliedJobs);

// post a applied job
router.post("/", applyJob);

// put a applied job
router.put("/:id", updateAppliedJobStatus);

// delete a applied job
router.delete("/:id", deleteAppliedJob);

module.exports = router;
