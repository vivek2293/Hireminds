const mongoose = require("mongoose");

const pkg = new mongoose.Schema({
  year: {
    type: String,
  },
  totalCTC: {
    type: Number,
    default: 0,
  },
  numberOfStudents: {
    type: Number,
    default: 0,
  },
  Maximum: {
    type: Number,
    default: 0,
  },
});

const schema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, "Must provide company name."],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Must provide email for the company."],
  },
  location: {
    type: String,
    trim: true,
    required: [true, "Must provide location for the company."],
  },
  websiteUrl: {
    type: String,
    trim: true,
  },
  records: {
    type: [pkg],
  },
});

module.exports = mongoose.model("companyData", schema);
