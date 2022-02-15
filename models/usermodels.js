const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    trim:true,
  },
  companyName: {
    type: String,
    trim:true,
  },
  email: {
    type: String,
    unique:true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value))
      {
        throw new Error("Invalid Email")
      }
    }
  },
  photoURL: {
    type:String,
  },
  companyWebsite: {
    type:String,
  },
  experienceInHiring: {
    type:String,
  },
  phone:{
    type: Number,
  }
  ,
  post: {
    type:"string"
  },
  role: {
    type: String,
  },
  location: {
    type:String,
  }
  ,
  tokens: [{
    token: {
      type: String,
      required:true
    }
  }]
  ,
    date: {
        type: Date,
        default: Date.now(),
    },
});

userSchema.methods.getTokenId = async function () {
  try
  {
    const token = await jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token })
    return token;
    
  } catch (error) {
    console.log(error);
  }
}

const User = mongoose.model("User", userSchema);

module.exports = { User };