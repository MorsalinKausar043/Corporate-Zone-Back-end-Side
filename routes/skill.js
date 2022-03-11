const express = require("express");
const router = express.Router();
const {
    getSkill,
    updateSkill,
} = require("../controllers/skillControllers");

// get a user skill
router.get("/:email", getSkill);

// put a user skill
router.put("/:technology", updateSkill);

module.exports = router;