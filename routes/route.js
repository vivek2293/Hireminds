const express = require("express");
const router = express.Router();

const {
  getAllrecords,
  createStudentRecord,
  getPlacementData,
  getUpdateQuery,
  updateUserData,
  deleteUser
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
  selectedCandidate,
  getCurrentStatusCompany,
  announceToCompany,
  announceToStudent
} = require("../functions/company.interaction");

const {
  getRequest,
  register,
  login,
  verify,
  forgotPassword,
  resetPassword,
} = require("../functions/auth_route");

const {
  verifyToken
} = require("../middlewares/verify_token");

const {
  refreshToken
} = require("../middlewares/refresh_token");

// Auth routes
router.get("/auth/getData", verifyToken, refreshToken, getRequest);
router.post("/auth/create", register);
router.post("/auth/login", login);
router.post("/auth/verify", verify);
router.post("/auth/forgotPassword", forgotPassword);
router.post("/auth/resetPassword", resetPassword);

// User data Routes
router.post("/record/createData", createStudentRecord);
router.post("/record/alldata", getAllrecords);
router.post("/record/getPlacementData", getPlacementData);
router.post("/record/getUpdateQuery", getUpdateQuery);
router.patch("/record/updateUserData", updateUserData);
router.post("/record/deleteUser", deleteUser);


// Company data Routes
router.post("/company/alldata", getAllCompanyrecords);
router.post("/company/createCompanyRecord", createCompanyRecord);
router.post("/company/getAllCompanyname", getAllCompanyname);

// Interaction routes 
router.post("/interaction/eligibleList", eligibleCandidateslist);
router.post("/interaction/getEligibileCandidateList", getEligibileCandidateList );
router.post("/interaction/renderEligible", renderEligibleCandidate);
router.post("/interaction/shortlistedCandidate", shortlistedCandidate);
router.post("/interaction/renderShortlistedCandidate", renderShortlistedCandidate);
router.post("/interaction/selectedCandidate", selectedCandidate);
router.post("/interaction/getCurrentStatusCompany", getCurrentStatusCompany);
router.post("/interaction/announceToCompany", announceToCompany);
router.post("/interaction/announceToStudent", announceToStudent);

module.exports = router;