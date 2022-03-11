const mongoose = require("mongoose");
const { Skill } = require("../models/skillModel");

// get a user skill by email
const getSkill = async (req, res) => {
  try {
    const email = req.params.email;
    const query = { email: email };
    const skill = await Skill.find(query);
    res.json(skill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// update a user skill
const updateSkill = async (req, res) => {
  try {
    const technology = req.params.technology;
    const query = { technology: technology };
    const updateDoc = { $set: req.body };
    console.log(updateDoc);
    const options = { upsert: true };
    const result = await Skill.findOneAndUpdate(query, updateDoc, options);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getSkill, updateSkill };
