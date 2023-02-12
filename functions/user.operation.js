const studentData = require("../model/student");

// get whole student docs
const getAllrecords = async (req, res) => {
  const data = await studentData.find({});
  res.send(data);
};

// create a student doc
const createStudentRecord = async (req, res) => {
  const {
    instituteName,
    rollNo,
    name,
    branch,
    yearOfPassingOut,
    gender,
    CGPA,
    age,
    email,
    linkedIn,
    github,
    resumeLink,
    degree,
    contactNo,
  } = req.body;

  await studentData
    .create({
      instituteName,
      rollNo,
      name,
      branch,
      yearOfPassingOut,
      gender,
      CGPA,
      age,
      email,
      linkedIn,
      github,
      resumeLink,
      degree,
      contactNo,
    })
    .then(() => {
      return res.status(201).json({ msg: "Profile created successfully" });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ msg: err });
    });
};

// get Placement Data
const getPlacementData = async (req, res) => {
  // All students who are selected
  const query = studentData.find({ isSelected: true });

  // Get total CTC, total no. of student, maximum CTC offered by the company
  query.select("CTC_offered selectionYear").exec(function (err, info) {
    if (err) return res.status(400).json({ msg: err });
    let query_yearwise = new Map([]);
    try {
      for (let i = 0; i < info.length; i++) {
        if (query_yearwise.has(info[i].selectionYear)) {
          const val = query_yearwise.get(info[i].selectionYear);
          query_yearwise.set(info[i].selectionYear, {
            ctc: val.ctc + parseInt(info[i].CTC_offered),
            total: parseInt(val.total) + 1,
            max: Math.max(val.max, parseInt(info[i].CTC_offered)),
          });
        } else {
          query_yearwise.set(info[i].selectionYear, {
            ctc: parseInt(info[i].CTC_offered),
            total: 1,
            max: parseInt(info[i].CTC_offered),
          });
        }
      }
    } catch (err) {
      return res.status(400).json({ msg: err });
    }

    // Send all yearwise data
    const arr = [...query_yearwise].map(([year, value]) => ({ year, value }));
    return res.status(200).json({ info: arr });
  });
};

const getUpdateQuery = async (req, res) => {
  const { rollNo, name, branch, yearOfPassingOut } = req.body;
  const doc = await studentData
    .findOne({ rollNo, name, branch, yearOfPassingOut })
    .exec();


    if(!doc){
      return res.status(400).json({ "msg" : "User not found."})
    }

    return res.status(200).json( doc );
};

const updateUserData = async(req, res) => {
  const {
    instituteName,
    rollNo,
    name,
    branch,
    yearOfPassingOut,
    gender,
    CGPA,
    age,
    email,
    contactNo,
    degree,
    linkedIn,
    github,
    resumeLink,
    isSelected,
    currentStatus,
    selectedBy,
    interviewTiming,
    interviewDate,
    CTC_offered,
    selectionYear
  } = req.body;
  const { _id } = req.body;

  try{
    await studentData.findByIdAndUpdate({ _id }, {
      instituteName,
      rollNo,
      name,
      branch,
      yearOfPassingOut,
      gender,
      CGPA,
      age,
      email,
      contactNo,
      degree,
      linkedIn,
      github,
      resumeLink,
      isSelected,
      currentStatus,
      selectedBy,
      interviewTiming,
      interviewDate,
      CTC_offered,
      selectionYear
    });
  
    return res.status(200).json({ "msg": "Update Successful." });
  }
  catch(err){
    return res.status(400).json(err);
  }
  
}

const deleteUser = async(req, res) => {
  const { _id } = req.body;
  try{
    await studentData.findOneAndDelete({ _id });
  }
  catch(err){
    return res.status(400).json(err);
  }

  return res.status(200).json( {"msg": "User deleted."})
}

module.exports = {
  getAllrecords,
  createStudentRecord,
  getPlacementData,
  getUpdateQuery,
  updateUserData,
  deleteUser
};
