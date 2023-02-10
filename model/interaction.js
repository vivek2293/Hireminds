const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    list: Array,
    createdAt: { type: Date, expires: '5m', index: true, default: Date.now }
});

module.exports = mongoose.model("shortlistedCandidates", schema);