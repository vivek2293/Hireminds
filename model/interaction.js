const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    companyName: {
        type: String,
        required: [true, "Must provide company name."]
    },
    list: Array,
    createdAt: { type: Date, expires: '15d', index: true, default: Date.now }
});

module.exports = mongoose.model("eligibleCandidates", schema);