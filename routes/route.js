const express = require("express");
const router = express.Router();

const { 
    getAllrecords,
    createStudentRecord
} = require("../functions/user.operation");

const { 
    getAllCompanyrecords, createCompanyRecord
} = require("../functions/company.operation");

const { shortlistedCandidateslist } = require("../functions/company.interaction");

router.post("/record/alldata", getAllrecords);
router.post("/record/createData", createStudentRecord);
router.post("/company/alldata", getAllCompanyrecords);
router.post("/company/createCompanyRecord", createCompanyRecord);
router.post("/company/shortlistedList", shortlistedCandidateslist);

module.exports = router;