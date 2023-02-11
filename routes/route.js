const express = require("express");
const router = express.Router();

const {
  getAllrecords,
  createStudentRecord,
  getPlacementData,
} = require("../functions/user.operation");

const {
  getAllCompanyrecords,
  createCompanyRecord,
  getAllCompanyname,
} = require("../functions/company.operation");

const {
  shortlistedCandidateslist,
  getEligibileCandidateList,
  renderShortlistedCandidate,
} = require("../functions/company.interaction");

router.post("/record/alldata", getAllrecords);
router.post("/record/createData", createStudentRecord);
router.post("/company/alldata", getAllCompanyrecords);
router.post("/company/createCompanyRecord", createCompanyRecord);
router.post("/interaction/shortlistedList", shortlistedCandidateslist);
router.post("/interaction/getEligibileCandidateList", getEligibileCandidateList );
router.post("/interaction/renderShortlisted", renderShortlistedCandidate);
router.post("/company/getAllCompanyname", getAllCompanyname);
router.post("/record/getPlacementData", getPlacementData);

module.exports = router;