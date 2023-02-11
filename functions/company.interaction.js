const shortlistedCandidates = require("../model/interaction");
const studentData = require("../model/student");

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

const getEligibileCandidateList = async(req, res) => {
    // CGPA // year // age
    const { companyName, CGPA, year, age } = req.body;
    console.log(req.body)
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
                shortlistedCandidates.create({
                    companyName,
                    list: arr
                });
            }
            catch(err){
                return res.status(400).json({ "msg": err });
            }

            return res.status(200).json(arr);
        }
    });
}


module.exports = { shortlistedCandidateslist, getEligibileCandidateList };