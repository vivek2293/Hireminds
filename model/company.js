const mongoose = require("mongoose");

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
        required: [true, "Must provide email for the company."]
    },
    location: {
        type: String,
        trim: true,
        required: [true, "Must provide location for the company."]
    },
    websiteUrl: {
        type: String,
        trim: true
    },
    totalCTC:{
        type: String
    },
    totalStudents:{
        type: String
    }
});


module.exports = mongoose.model("companyData", schema);