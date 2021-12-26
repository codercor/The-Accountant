const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username:{
    type: String,
    required: true,
  },
  companyName:{
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  uid: {
    type: Number,
    required: false
  },
  bankAccount: {
    type: String,
    required: false
  },
  telefon: {
    type: Number,
    required: false
  },
  email: {
    type: String,
    required: true 
  }
});
userSchema.methods.comparePassword = function(candidatePassword) {
  console.log(this)
  return true;
};
const user = mongoose.model("user", userSchema);

module.exports = user;