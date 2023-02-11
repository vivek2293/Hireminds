const shortlistedCandidates = require("../model/interaction");
const studentData = require("../model/student");
const mail = require("../middlewares/mailer");
const jwt = require("jsonwebtoken");
const server = "http://localhost:3000/shortlisted";

const shortlistedCandidateslist = async(req, res) => {
    const { companyName } = req.body
    // will get Array of Strings containing Ids 
    const record = req.body.record;
    const arr = [];
    for(let i = 0;i < record.length;i++){
        arr.push(record[i]);
    }
    console.log(arr);
    await shortlistedCandidates.create({
        companyName,
        list: arr
    }).then(() => {
        res.status(201).json({ msg: "List created successfully"});
    }).catch((err) => {
        res.status(400).json({ msg: err });
    })
};

const markAllShortlisted = async(arr) => {
    for(let i = 0;i < arr.length;i++){
        const filter = { _id: arr[i] }
        await studentData.findOneAndUpdate( filter, { currentStatus: "In Progress" }, { new: true })
        .catch((err) => { message = err });
    }
}

const createListOfShortlistedCandidates = async(arr, companyName, email) => {
    const task = await shortlistedCandidates.create({
        companyName,
        list: arr
    });
    const token = jwt.sign({
        companyName,
        email,
        _id: task._id
    }, process.env.JWT_SECRET, { expiresIn: "30 day"});
    // console.log(token)
    const message = 
    `
    Hello Sir, 
    We are providing you the list of the shortlisted students on the basis of the shortlisting criteria provided by you.
    Link: ${server + "?token" + token}.
    `
    console.log(message)
    // mail( email, subject, )
}

const getEligibileCandidateList = async(req, res) => {
    // CGPA // year // age // email
    const { companyName, CGPA, year, age, email } = req.body;
    studentData.find({
        CGPA: { $gt: CGPA},
        age: { $lt: age},
        yearOfPassingOut: year,
        isSelected: false
    })
    .select({})
    .exec(function (err, info){
        if (err) return res.status(400).json({ "msg": err });
        else {
            const arr = [];
            for(let i = 0;i < info.length;i++){
                arr.push(info[i]._id);
            }

            markAllShortlisted(arr);

            try{
                createListOfShortlistedCandidates(arr, companyName, email);
            }
            catch(err){
                return res.status(400).json({ "msg": err });
            }

            return res.status(200).json(arr);
        }
    });
}


module.exports = { shortlistedCandidateslist, getEligibileCandidateList };