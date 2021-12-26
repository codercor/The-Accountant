const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  uid: {
    type: Number,
    required: true
  },
  telefon: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: false 
  }
});

const customer = mongoose.model("customer", customerSchema);

module.exports = customer;