const mongoose = require("mongoose");

const idSchema = new mongoose.Schema({
    selectedId: {
        type: String,
    }
})

const schema = new mongoose.Schema({
    list: [idSchema]
});

schema.index({createdAt: 1},{expireAfterSeconds: 3600});

module.exports = mongoose.model("shortlistedCandidates", schema);