const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    instituteName: {
        type: String,
        trim: true,
        required: [true, "Must provide institute name."]
    },
    rollNo: {
        type: String,
        trim: true,
        unique: [true, "Roll_No. should be unique"],
        required: [true, "Must provide Roll Number."]
    },
    name: {
        type: String,
        trim: true,
        required: [true, "Must provide name."]
    },
    branch: {
        type: String,
        trim: true,
        required: [true, "Must provide branch."]
    },
    yearOfPassingOut: {
        type: Number,
        trim: true,
        required: [true, "Must provide year of graduation."]
    },
    gender: {
        type: String,
        required: [true, "Must provide gender."]
    },
    CGPA: {
        type: Number,
        default: 0.00
    },
    age:{
        type: Number,
        required: [true, "Must provide age."]
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Must provide Email."]
    },
    contactNo: {
        type: String,
        trim: true,
        required: [true, "Must provide contact number."]
    },
    degree:{
        type: String,
        default: " ",
    },
    linkedIn: {
        type: String,
        default: "NA"
    },
    github: {
        type: String,
        default: "NA"
    },
    resumeLink: {
        type: String,
        default: "NA"
    },

    // selection attributes
    isSelected: {
        type: Boolean,
        default: false,
    },
    currentStatus: {
        type: String,
        default: "NA"
    },
    selectedBy: {
        type: String,
        default: "NA"
    },
    interviewTiming:{
        type: String,
        default: "NA"
    },
    CTC_offered:{
        type: String,
        default: "NA"
    },
    selectionYear:{
        type: Number,
        default: 0,
    }
});


module.exports = mongoose.model("studentData", schema);