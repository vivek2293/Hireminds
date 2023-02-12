const eligibleCandidates = require("../model/interaction");
const studentData = require("../model/student");
const companyData = require("../model/company");
const { mail } = require("../middlewares/mailer");
const jwt = require("jsonwebtoken");

// Make a doc of all candidates who are eligible according to the company's eligibility criteria
const eligibleCandidateslist = async (req, res) => {
  const { companyName } = req.body;

  // verify if company exists
  const doc = await companyData.findOne({ companyName }).exec();
  if(!doc){
    return res.status(400).json({ "msg": "Company not found."})
  }

  const record = req.body.record;
  const arr = [];
  for (let i = 0; i < record.length; i++) {
    arr.push(record[i]);
  }
  console.log(arr);

  await eligibleCandidates
    .create({
      companyName,
      list: arr,
    })
    .then(() => {
      res.status(201).json({ msg: "List created successfully" });
    })
    .catch((err) => {
      res.status(400).json({ msg: err });
    });
};

// set status of all eligible students from "NA" --> "In Progress"
const markAllEligible = async (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const filter = { _id: arr[i] };
    await studentData
      .findOneAndUpdate(filter, { currentStatus: "In Progress" }, { new: true })
      .catch((err) => {
        message = err;
      });
  }
};

// send an encrypted Link to company's email by which company can access all eligible candidates
const createListOfEligibleCandidates = async (arr, companyName, email) => {
  const task = await eligibleCandidates.create({
    companyName,
    list: arr,
  });

  // make an authentication token with 15 days expiry time
  const token = jwt.sign(
    {
      companyName,
      email,
      _id: task._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "15d" }
  );

  const subject = "List of shortlisted candidates.";
  const message = `
    Hello Sir, 
    We are providing you the list of the shortlisted students on the basis of the shortlisting criteria provided by you.
    This link will only be valid for 15 days.
    Link: ${process.env.CLIENT + "?token=" + token}
    `;
  console.log(message);
  // mail("rutwik2514@gmail.com", subject, message);
};


// Initiate the process of campus placement
const getEligibileCandidateList = async (req, res) => {
  const { companyName, CGPA, year, age, email } = req.body;

  // verify if company exists
  const doc = await companyData.findOne({ companyName }).exec();
  if (!doc) {
    return res.status(400).json({ msg: "Company not found." });
  }

  studentData
    .find({
      CGPA: { $gt: CGPA },
      age: { $lt: age },
      yearOfPassingOut: year,
      isSelected: false,
    })
    .select({})
    .exec(function (err, info) {
      if (err) return res.status(400).json({ msg: err });
      else {
        const arr = [];
        for (let i = 0; i < info.length; i++) {
          arr.push(info[i]._id);
        }

        // set status of all eligible students from "NA" --> "In Progress"
        markAllEligible(arr);

        try {
          //send mail to company
          createListOfEligibleCandidates(arr, companyName, email);
        } catch (err) {
          return res.status(400).json({ msg: err });
        }

        return res.status(200).json(arr);
      }
    });
};

// When company clicks on the received link from T&P validate the token and proceed further
const renderEligibleCandidate = async (req, res) => {
  const { token } = req.body;

  // verify security of token
  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) return res.status(401);
  });

  // extract payload from jwt token
  const payload = jwt.decode(token, process.env.JWT_SECRET, (err, authData) => {
    console.log(authData);
  });

  try {
    // get all studentData and render it to the company side
    const query = await eligibleCandidates.find({ _id: payload._id }).limit(1);
    const listOfAllCandidates = query[0].list;
    studentData
      .find()
      .where("_id")
      .in(listOfAllCandidates)
      .select(
        "rollNo name branch gender degree CGPA email contactNo linkedIn github resumeLink"
      )
      .exec((err, records) => {
        if (err) return res.status(400).json({ msg: err });
        return res.status(200).json(records);
      });
  } catch (err) {
    return res.status(400).json({ msg: err });
  }
};

// Function that gets triggered when company shorlists the candidate for the further rounds
const shortlistedCandidate = async (req, res) => {
  const ids_list = req.body.ids;
  const rejected_list = req.body.rejected;
  const { time, date, token } = req.body;

  // verify authentication of the token
  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) return res.status(401);
  });

  
  // extract payload from jwt
  const payload = jwt.decode(token, process.env.JWT_SECRET);
  const companyName = payload.companyName;

  // verify if doc exists
  const doc = await eligibleCandidates.findOne({ _id: payload._id }).exec();
  if (!doc) {
    return res.status(400).json({ msg: "Record not found." });
  }

  const arr = [];
  for (let i = 0; i < ids_list.length; i++) {
    arr.push(ids_list[i]);
  }

  // Shortlisted Candidates List in temporary collection (Auto-expire docs)
  const record = await eligibleCandidates.create({
    companyName,
    list: arr,
  });

  try {
    // Update status of all Students with the interview date and time
    const query = await studentData.find().where('_id').in(ids_list).exec();
    for(let i = 0;i < query.length;i++){
      await studentData.updateOne( { _id: query[i]._id },{$set: { currentStatus: "Shortlisted", interviewDate: date, interviewTiming: time }})
    }

    // Revert status of all non-shortlisted students
    const query1 = await studentData.find().where("_id").in(rejected_list).exec();
    for(let i = 0;i < query1.length;i++){
      const doc = await studentData.updateOne( { _id: query1[i]._id },{$set: { currentStatus: "NA", interviewDate: "NA", interviewTiming: "NA" }})
    }

    // Delete the doc from temporary collection (Collection with Auto-expire docs)
    await eligibleCandidates.deleteOne({ _id: payload.id });
  } catch (err) {
    return res.status(400).json({ msg: err });
  }
  
    const data = {
      companyName: payload.companyName,
      email: payload.email,
      _id: record._id,
    };

    // generate new jwt token for authorisation purposes
    const accesstoken = jwt.sign(data, process.env.JWT_SECRET, {
      expiresIn: "15d",
    });

    // send new generated token
    return res.status(200).json({ token: accesstoken });
};

// Authenticate with the jwt token and if correct then send relevant student data
const renderShortlistedCandidate = async (req, res) => {
  const { token } = req.body;

  // verify authentication of the token
  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) return res.status(401);
  });

  // extract payload from jwt
  const payload = jwt.decode(token, process.env.JWT_SECRET, (err, authData) => {
    console.log(authData);
  });

  try {
    // get all student data
    const query = await eligibleCandidates.find({ _id: payload._id }).limit(1);
    const listOfAllCandidates = query[0].list;
    studentData
      .find()
      .where("_id")
      .in(listOfAllCandidates)
      .select(
        "rollNo name branch gender degree CGPA email contactNo linkedIn resumeLink interviewDate interviewTiming isSelected"
      )
      .exec((err, records) => {
        if (err) return res.status(400).json({ msg: err });
        return res.status(200).json(records);
      });
  } catch (err) {
    return res.status(400).json({ msg: err });
  }
};

// Get info about all selected and rejected students
const selectedCandidate = async (req, res) => {
  const selected = req.body.selected;
  const rejected = req.body.rejected;
  const token = req.body.token;

  // verify authentication of the token
  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) return res.status(401);
  });

  // extract payload from jwt
  const payload = jwt.decode(token, process.env.JWT_SECRET);
  const companyName = payload.companyName;
  const temp_id = payload._id;
  try {
    // Update all selected student status
    for (let i = 0; i < selected.length; i++) {
      const query = await studentData.findById(selected[i].id).exec();
      const id = query._id;
      const record = await studentData.findByIdAndUpdate(
        { _id: id },
        {
          isSelected: true,
          currentStatus: "Hired",
          selectedBy: companyName,
          interviewTiming: "NA",
          interviewDate: "NA",
          CTC_offered: selected[i].salary,
          selectionYear: selected[i].year,
        },
        { new: true }
      );
    }

    // Update all rejected student status
    for (let i = 0; i < rejected.length; i++) {
      const query = await studentData.findById(rejected[i].id).exec();
      const id = query._id;
      const record = await studentData.findByIdAndUpdate(
        { _id: id },
        {
          isSelected: false,
          currentStatus: "NA",
          selectedBy: "NA",
          interviewTiming: "NA",
          interviewDate: "NA",
          CTC_offered: "NA",
        }
      );
    }

    // Delete the doc from temporary collection (Collection with Auto-expire docs)
    await eligibleCandidates.deleteOne({ _id: temp_id });
  } catch (err) {
    return res.status(400).json(err);
  }
  return res.status(200).json({ msg: "Updated successfully." });
};

module.exports = {
  eligibleCandidateslist,
  getEligibileCandidateList,
  renderEligibleCandidate,
  shortlistedCandidate,
  renderShortlistedCandidate,
  selectedCandidate,
};
