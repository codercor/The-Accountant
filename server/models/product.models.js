const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true
  }
});

const product = mongoose.model("product", productSchema);

module.exports = product;