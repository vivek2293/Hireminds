import React from "react";
import "./CSS/dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut, faUser, faHome, faList, faMessage, faCartShopping, faChartLine, faCog} from "@fortawesome/free-solid-svg-icons";
import Table from "./Table";
import Form from "./form";
import Graph from "./Graph";
export default function Dashboard() {
    const [showData,setShowData] = React.useState();
    const [showRegister,setShowRegister] = React.useState();
    const [showPlacementStats,setShowPlacementStats] = React.useState();
    const [showFilterCandidates,setShowFilterCandidates] = React.useState();
    const [showPastRecuriters,setShowPastRecuriters] = React.useState();
    const [showCompanyStats,setShowCompanyStats] = React.useState();

    
    function handleClick1(){
        setShowData(true);
        setShowRegister(false);
        setShowPlacementStats(false);
        setShowCompanyStats(false);
        setShowFilterCandidates(false);
        setShowPastRecuriters(false);
    }
    function handleClick2(){
        setShowData(false);
        setShowRegister(true);
        setShowPlacementStats(false);
        setShowCompanyStats(false);
        setShowFilterCandidates(false);
        setShowPastRecuriters(false); 
    }
    function handleClick3(){
        setShowData(false);
        setShowRegister(false);
        setShowPlacementStats(true);
        setShowCompanyStats(false);
        setShowFilterCandidates(false);
        setShowPastRecuriters(false); 
    }

    return (
        <>
            <div className="main-div row">
                <div className="col-md-2 left-div">
                    <div className="profile-div mt-4">
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> <span className="mx-2">College Name</span>
                    </div>
                    <div className="options-div my-5 d-flex justify-content-center align-items-center" style={{flexDirection :' column'}}>
                        <button className="btn btn-success my-3" name="showData" onClick={handleClick1}>Student Data</button>
                        <button className="btn btn-success my-3" name="showRegister" onClick={handleClick2} >Register</button>
                        <button className="btn btn-success my-3" name="showPlacementStats" onClick={handleClick3}>Placement Statistics</button>
                        <button className="btn btn-success my-3">Filter Coffee</button>
                        <button className="btn btn-success my-3">Past Recruiters</button>
                        <button className="btn btn-success my-3">Company Statistics</button>
                        <button className="btn btn-success my-3">Add Company</button>



                    </div>
                </div>
                <div className="col-md-10 right-div">
                    <div className="right-up">
                        <div className="up1-div">
                            <div className="name-div m-4"><h5>Good Afternoon, Rutwik</h5></div>
                            <div className="logout-div m-4">
                                <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon> <span>Logout</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-1">
                        {showData && <Table />}
                        {showRegister && <Form />}
                        {showPlacementStats && <Graph />}
                        
                    </div>
                </div>
            </div>
        </>
    )
}