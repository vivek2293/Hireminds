const studentData = require("../model/student");

const getAllrecords = async(req, res) => {
    const data = await studentData.find({});
    res.send(data);
};

const createStudentRecord = async(req, res) => {
    const {
        instituteName, rollNo, name, branch, yearOfPassingOut, gender, CGPA, email, linkedIn, github, resumeLink, degree, contactNo
    } = req.body;

    await studentData.create({
        instituteName, rollNo, name, branch, yearOfPassingOut, gender, CGPA, email, linkedIn, github, resumeLink, degree, contactNo
    }).then(() => {
        return res.status(201).json({ msg: "Profile created successfully"});
    }).catch((err) => {
        console.log(err)
        return res.status(400).json({ msg: err });
    });
};


module.exports = { getAllrecords, createStudentRecord };