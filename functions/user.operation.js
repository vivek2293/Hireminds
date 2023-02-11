const studentData = require("../model/student");

const getAllrecords = async(req, res) => {
    const data = await studentData.find({});
    res.send(data);
};

const createStudentRecord = async(req, res) => {
    const {
        instituteName, rollNo, name, branch, yearOfPassingOut, gender, CGPA, age, email, linkedIn, github, resumeLink, degree, contactNo
    } = req.body;

    await studentData.create({
        instituteName, rollNo, name, branch, yearOfPassingOut, gender, CGPA, age, email, linkedIn, github, resumeLink, degree, contactNo
    }).then(() => {
        return res.status(201).json({ msg: "Profile created successfully"});
    }).catch((err) => {
        console.log(err)
        return res.status(400).json({ msg: err });
    });
};

const getPlacementData = async(req, res) => {
    const query = studentData.find({ isSelected: true });
    query.select("CTC_offered selectionYear").exec(function(err, info){
        if(err) return res.status(400).json({ msg: err });
        let query_yearwise = new Map([]);
        try{
            for(let i = 0;i < info.length; i++){
                if(query_yearwise.has(info[i].selectionYear)){
                    const val = query_yearwise.get(info[i].selectionYear);
                    query_yearwise.set(info[i].selectionYear, {
                        ctc: val.ctc + parseInt(info[i].CTC_offered),
                        total: parseInt(val.total) + 1,
                        max: Math.max(val.max, parseInt(info[i].CTC_offered))
                    })
                }
                else{
                    query_yearwise.set(info[i].selectionYear, {
                        ctc: parseInt(info[i].CTC_offered),
                        total: 1,
                        max: parseInt(info[i].CTC_offered)
                    })
                }
            }
        }
        catch(err){
            return res.status(400).json({ msg: err });
        }

        const arr = [...query_yearwise].map(([year, value ]) => ({ year, value }));
        return res.status(200).json({ "info": arr });
    })

}


module.exports = { getAllrecords, createStudentRecord, getPlacementData };