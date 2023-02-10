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

const getEligibileCandidateList = async(req, res) => {
    // CGPA // year // skills // age
    const { CGPA, year, age } = req.body;
    console.log(req.body)
    const arr = [];
    try{
        const query = studentData.find({
            CGPA: { $gt: CGPA},
            age: { $lt: age},
            yearOfPassingOut: year
        })
        .select({});
        query.exec(function (err, info){
            if (err) return handleError(err);
            arr.push(info);
        });
        
    }
    catch(err){
        console.log(err);
    }
    
    res.send(arr)
}


module.exports = { shortlistedCandidateslist, getEligibileCandidateList };