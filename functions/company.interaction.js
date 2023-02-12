const eligibleCandidates = require("../model/interaction");
const studentData = require("../model/student");
const { mail } = require("../middlewares/mailer");
const jwt = require("jsonwebtoken");
const student = require("../model/student");
const { findByIdAndUpdate } = require("../model/interaction");

const eligibleCandidateslist = async(req, res) => {
    const { companyName } = req.body
    // will get Array of Strings containing Ids 
    const record = req.body.record;
    const arr = [];
    for(let i = 0;i < record.length;i++){
        arr.push(record[i]);
    }
    console.log(arr);
    await eligibleCandidates.create({
        companyName,
        list: arr
    }).then(() => {
        res.status(201).json({ msg: "List created successfully"});
    }).catch((err) => {
        res.status(400).json({ msg: err });
    })
};

const markAllEligible = async(arr) => {
    for(let i = 0;i < arr.length;i++){
        const filter = { _id: arr[i] }
        await studentData.findOneAndUpdate( filter, { currentStatus: "In Progress" }, { new: true })
        .catch((err) => { message = err });
    }
}

const createListOfEligibleCandidates = async(arr, companyName, email) => {
    const task = await eligibleCandidates.create({
        companyName,
        list: arr
    });
    const token = jwt.sign({
        companyName,
        email,
        _id: task._id
    }, process.env.JWT_SECRET, { expiresIn: "15d" });
    // console.log(token)
    const subject = "List of shortlisted candidates."
    const message = 
    `
    Hello Sir, 
    We are providing you the list of the shortlisted students on the basis of the shortlisting criteria provided by you.
    This link will only be valid for 15 days.
    Link: ${process.env.CLIENT + "?token=" + token}
    `
    console.log(message)
    // mail("preetkhatri07@gmail.com", subject, message);
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

            markAllEligible(arr);

            try{
                createListOfEligibleCandidates(arr, companyName, email);
            }
            catch(err){
                return res.status(400).json({ "msg": err });
            }

            return res.status(200).json(arr);
        }
    });
}

const renderEligibleCandidate = async(req, res) => {
    const { token } = req.body;
    const payload = jwt.decode( token , process.env.JWT_SECRET, (err, authData) => {
        console.log(authData);
    })
    
    //find
    try{
        const query = await eligibleCandidates.find({ _id: payload._id }).limit(1);
        const listOfAllCandidates = query[0].list;
        studentData.find().where("_id").in(listOfAllCandidates).select("rollNo name branch gender degree CGPA email contactNo linkedIn github resumeLink").exec((err, records) => {
            if(err) return res.status(400).json({ "msg": err });
            return res.status(200).json(records);
        });
    }
    catch (err){
        return res.status(400).json({ "msg": err })
    }
}

const shortlistedCandidate = async(req,res) => {
    const ids_list = req.body.ids;
    const { time, date, token } = req.body;

    const payload = jwt.decode(token , process.env.JWT_SECRET);
    const companyName = payload.companyName;
    
    const arr = [];
    for(let i = 0;i < ids_list.length;i++){
        arr.push(ids_list[i]);
    }

    //Shortlisted Candidates
    const record = await eligibleCandidates.create({
        companyName,
        list: arr
    });

    const data = {
        companyName: payload.companyName,
        email: payload.email,
        _id: record._id
    }

    const query = await studentData.find().where("_id").in(ids_list).exec();
    await studentData.updateMany({query}, { currentStatus: "Shortlisted", interviewDate: date, interviewTiming: time }).then(() => {
        const accesstoken = jwt.sign( data, process.env.JWT_SECRET, { expiresIn: "15d" });
        return res.status(200).json({ token: accesstoken })
    }).catch((err) => {
        return res.status(400).json({ msg: err });
    })
}

const renderShortlistedCandidate = async(req, res) => {
    const { token } = req.body;
    const payload = jwt.decode( token , process.env.JWT_SECRET, (err, authData) => {
        console.log(authData);
    })
    
    //find
    try{
        const query = await eligibleCandidates.find({ _id: payload._id }).limit(1);
        const listOfAllCandidates = query[0].list;
        studentData.find().where("_id").in(listOfAllCandidates).select("rollNo name branch gender degree CGPA email contactNo linkedIn resumeLink interviewDate interviewTiming isSelected").exec((err, records) => {
            if(err) return res.status(400).json({ "msg": err });
            return res.status(200).json(records);
        });
    }
    catch (err){
        return res.status(400).json({ "msg": err })
    }
}

const selectedCandidate = async(req,res) => {
    const selected = req.body.selected;
    const rejected = req.body.rejected;
    const token = req.body.token;

    const payload = jwt.decode(token , process.env.JWT_SECRET);
    const companyName = payload.companyName;
    try{
        for(let i = 0;i < selected.length; i++){
            const query = await studentData.findById(selected[i].id).exec();
            const id = query._id;
            const record = await studentData.findByIdAndUpdate({ _id: id }, {
                isSelected : true, currentStatus : "Hired", selectedBy: companyName, interviewTiming: "NA",
                interviewDate: "NA", CTC_offered: selected[i].salary, selectionYear: selected[i].year
            }, { new: true });
            console.log(record);
        }

        for(let i = 0; i < rejected.length; i++){
            const query = await studentData.findById(rejected[i].id).exec();
            const id = query._id;
            const record = await studentData.findByIdAndUpdate({ _id: rejected[i].id },{
                isSelected : false, currentStatus : "NA", selectedBy: "NA", interviewTiming: "NA",
                interviewDate: "NA", CTC_offered: "NA"
            })
        }
    } catch(err){
       return res.status(400).json( err );
    }
    return res.status(200).json({"msg": "Updated successfully."});
}

module.exports = { eligibleCandidateslist, getEligibileCandidateList, renderEligibleCandidate, shortlistedCandidate, renderShortlistedCandidate, selectedCandidate };