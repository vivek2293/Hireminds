const shortlistedCandidates = require("../model/interaction");


const shortlistedCandidateslist = async(req, res) => {
    // will get Array of Strings containing Ids 
    const record = req.body.record;
    const arr = [];
    for(let i = 0;i < record.length;i++){
        arr.push(record[i]);
    }
    console.log(arr);
    await shortlistedCandidates.create({
        list: arr
    }).then(() => {
        res.status(201).json({ msg: "List created successfully"});
    }).catch((err) => {
        res.status(400).json({ msg: err });
    })
};


module.exports = { shortlistedCandidateslist };