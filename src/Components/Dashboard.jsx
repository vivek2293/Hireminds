import React from "react";
import "./CSS/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUniversity } from "@fortawesome/free-solid-svg-icons";
import Table from "./Table";
import Form from "./form";
import Graph from "./Graph";
import Company from "./Company";
import AddCompany from "./AddCompany";
import Filter from "./Filter";
import PastRecruiter from "./PastRecruiter";
export default function Dashboard() {
  const [showData, setShowData] = React.useState();
  const [showRegister, setShowRegister] = React.useState();
  const [showPlacementStats, setShowPlacementStats] = React.useState();
  const [showFilterCandidates, setShowFilterCandidates] = React.useState();
  const [showPastRecuriters, setShowPastRecuriters] = React.useState();
  const [showCompanyStats, setShowCompanyStats] = React.useState();
  const [showCompanyRegister, setShowCompanyRegister] = React.useState();
  function handleClick(props) {
    console.log(props);
    if ("showData" != props) {
      setShowData(false);
    } else {
      console.log("came");
      setShowData(true);
    }
    if (props != "showRegister") {
      setShowRegister(false);
    } else {
      setShowRegister(true);
    }
    if (props != "showPlacementStats") {
      setShowPlacementStats(false);
    } else {
      setShowPlacementStats(true);
    }
    if (props != "showCompanyStats") {
      setShowCompanyStats(false);
    } else {
      setShowCompanyStats(true);
    }
    if (props != "showFilterCandidates") {
      setShowFilterCandidates(false);
    } else {
      setShowFilterCandidates(true);
    }
    if (props != "showPastRecuriters") {
      setShowPastRecuriters(false);
    } else {
      setShowPastRecuriters(true);
    }
    if (props != "showCompanyRegister") {
      setShowCompanyRegister(false);
    } else {
      setShowCompanyRegister(true);
    }
  }

  return (
    <>
      <div className="main-div row">
        <div className=" shadow-lg col-md-2 left-div ">
          <div className="profile-div mt-4">
            <FontAwesomeIcon
              icon={faUniversity}
              style={{ color: "rgb(160,90,255)" }}
            ></FontAwesomeIcon>{" "}
            <span className="mx-2" style={{ color: "rgb(160,90,255)"}} id="collegeName">
              IIIT SURAT
            </span>
          </div>
          <div
            className="options-div my-5 d-flex justify-content-center align-items-center"
            style={{ flexDirection: " column" }}
          >
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="showData"
              onClick={(e) => handleClick(e.target.name)}
            >
              Student Data
            </button>
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="showRegister"
              onClick={(e) => handleClick(e.target.name)}
            >
              Register
            </button>
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="showPlacementStats"
              onClick={(e) => handleClick(e.target.name)}
            >
              Placement Statistics
            </button>
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="showFilterCandidates"
              onClick={(e) => handleClick(e.target.name)}
            >
              Filter Students
            </button>
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="showPastRecuriters"
              onClick={(e) => handleClick(e.target.name)}
            >
              Past Recruiters
            </button>
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="showCompanyStats"
              onClick={(e) => handleClick(e.target.name)}
            >
              Company Statistics
            </button>
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="showCompanyRegister"
              onClick={(e) => handleClick(e.target.name)}
            >
              Add Company
            </button>
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              onClick={(e) => handleClick(e.target.name)}
            >
              Update
            </button>
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              onClick={(e) => handleClick(e.target.name)}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="col-md-10 right-div">
          <div className="right-up">
            <div className="up1-div">
              <div className="name-div m-4">
                <h3 style={{ color: "rgb(160,90,255)" }}>Hola! IIIT SURAT</h3>
              </div>
              <div className="logout-div m-4">
                <FontAwesomeIcon
                  icon={faSignOut}
                  style={{ color: "rgb(160,90,255)" }}
                ></FontAwesomeIcon>{" "}
                <span style={{ color: "rgb(160,90,255)" }}>Logout</span>
              </div>
            </div>
          </div>
          <div className="p-1">
            {showData && <Table />}
            {showRegister && <Form />}
            {showPlacementStats && <Graph />}
            {showCompanyStats && <Company />}
            {showCompanyRegister && <AddCompany />}
            {showFilterCandidates && <Filter />}
            {showPastRecuriters && <PastRecruiter />}
          </div>
        </div>
      </div>
    </>
  );
}
