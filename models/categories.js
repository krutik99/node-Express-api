const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    required: true,
  },
  modefidBy: {
    type: String,
    required: false,
  },
  modefidDate: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Categoires", categoriesSchema);
