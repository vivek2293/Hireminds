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
  eligibleCandidateslist,
  getEligibileCandidateList,
  renderEligibleCandidate,
  shortlistedCandidate,
  renderShortlistedCandidate,
  selectedCandidate
} = require("../functions/company.interaction");

router.post("/record/alldata", getAllrecords);
router.post("/record/createData", createStudentRecord);
router.post("/company/alldata", getAllCompanyrecords);
router.post("/company/createCompanyRecord", createCompanyRecord);
router.post("/interaction/eligibleList", eligibleCandidateslist);
router.post("/interaction/getEligibileCandidateList", getEligibileCandidateList );
router.post("/interaction/renderEligible", renderEligibleCandidate);
router.post("/company/getAllCompanyname", getAllCompanyname);
router.post("/record/getPlacementData", getPlacementData);
router.post("/interaction/shortlistedCandidate", shortlistedCandidate);
router.post("/interaction/renderShortlistedCandidate", renderShortlistedCandidate);
router.post("/interaction/selectedCandidate", selectedCandidate);

module.exports = router;