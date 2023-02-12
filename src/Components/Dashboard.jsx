import React from "react";
import "./CSS/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUniversity } from "@fortawesome/free-solid-svg-icons";
import Table from "./Table";
import Form from "./form";
import Graph from "./PlacementStats.jsx";
import Company from "./Company";
import AddCompany from "./AddCompany";
import Filter from "./Filter";
import PastRecruiter from "./PastRecruiter";
import logo from "./Assets/Logo2.png";
import Update from "./Update";

export default function Dashboard() {

  //An array of object is created below as these states stores the value and on the basis of these states only conditional rendering takes place as on dashboard everything is rendered conditionally apart from left div 

  const [show, setShow] = React.useState({
    Data: false,
    Register: false,
    PlacementStats: false,
    FilterCandidates: false,
    PastRecuriters: false,
    CompanyStats: false,
    CompanyRegister: false,
    update: false,
  });
  function logout() {
    localStorage.removeItem("user");
    window.location.href = "/login";
  }

  // This function is triggered whenever any button is clicked, this function basically changes the state to true for corresponding button and sets all other states to false as it decides the conditional rendering that what to display/render 
  React.useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      window.location.href = "/";
    }
  }, []);
  function handleClick(props) {
    const tempShow = {
      Data: false,
      Register: false,
      PlacementStats: false,
      FilterCandidates: false,
      PastRecuriters: false,
      CompanyStats: false,
      CompanyRegister: false,
      update: false,
    };
    if ("Data" != props) {
      tempShow.Data = false;
    } else {
      tempShow.Data = true;
    }
    if (props != "Register") {
      tempShow.Register = false;
    } else {
      tempShow.Register = true;
    }
    if (props != "PlacementStats") {
      tempShow.PlacementStats = false;
    } else {
      tempShow.PlacementStats = true;
    }
    if (props != "CompanyStats") {
      tempShow.CompanyStats = false;
    } else {
      tempShow.CompanyStats = true;
    }
    if (props != "FilterCandidates") {
      tempShow.FilterCandidates = false;
    } else {
      tempShow.FilterCandidates = true;
    }
    if (props != "PastRecuriters") {
      tempShow.PastRecuriters = false;
    } else {
      tempShow.PastRecuriters = true;
    }
    if (props != "CompanyRegister") {
      tempShow.CompanyRegister = false;
    } else {
      tempShow.CompanyRegister = true;
    }
    if (props != "update") {
      tempShow.update = false;
    } else {
      tempShow.update = true;
    }
    setShow(tempShow);
  }

  // It returns the structure of this particular page

  return (
    <>
      <div className="main-div row">
        <div className=" shadow-lg col-md-2 left-div ">
          <img src={logo} style={{ height: "14vh" }} className="mt-2"></img>
          <div
            className="options-div my-5 d-flex justify-content-center align-items-center"
            style={{ flexDirection: " column" }}
          >
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="Data"
              onClick={(e) => handleClick(e.target.name)}
            >
              Student Data
            </button>
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="Register"
              onClick={(e) => handleClick(e.target.name)}
            >
              Register
            </button>
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="PlacementStats"
              onClick={(e) => handleClick(e.target.name)}
            >
              Placement Statistics
            </button>
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="FilterCandidates"
              onClick={(e) => handleClick(e.target.name)}
            >
              Filter Students
            </button>
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="PastRecuriters"
              onClick={(e) => handleClick(e.target.name)}
            >
              Past Recruiters
            </button>
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="CompanyStats"
              onClick={(e) => handleClick(e.target.name)}
            >
              Company Statistics
            </button>
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="CompanyRegister"
              onClick={(e) => handleClick(e.target.name)}
            >
              Add Company
            </button>
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="update"
              onClick={(e) => handleClick(e.target.name)}
            >
              Update
            </button>
          </div>
        </div>
        <div className="col-md-10 right-div">
          <div className="right-up">
            <div className="up1-div">
              <div className="name-div m-4">
                <div className="profile-div mt-1">
                  <FontAwesomeIcon
                    icon={faUniversity}
                    style={{ color: "rgb(160,90,255)" }}
                  ></FontAwesomeIcon>{" "}
                  <span
                    className="mx-2"
                    style={{ color: "rgb(160,90,255)" }}
                    id="collegeName"
                  >
                    IIIT SURAT
                  </span>
                </div>
              </div>
              <div className="logout-div m-4">
                <FontAwesomeIcon
                  icon={faSignOut}
                  style={{ color: "rgb(160,90,255)" }}
                ></FontAwesomeIcon>{" "}
                <span style={{ color: "rgb(160,90,255)", cursor : 'pointer' }}  onClick={logout}>Logout</span>
              </div>
            </div>
          </div>
          <div className="p-1">
            {show.Data && <Table />}
            {show.Register && <Form />}
            {show.PlacementStats && <Graph />}
            {show.CompanyStats && <Company />}
            {show.CompanyRegister && <AddCompany />}
            {show.FilterCandidates && <Filter />}
            {show.PastRecuriters && <PastRecruiter />}
            {show.update && <Update />}

          </div>
        </div>
      </div>
    </>
  );
}
