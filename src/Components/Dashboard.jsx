import React from "react";
import "./CSS/dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut, faUser, faHome, faList, faMessage, faCartShopping, faChartLine, faCog} from "@fortawesome/free-solid-svg-icons";
import Table from "./Table";
import Form from "./form";
import Graph from "./Graph";
import Company from "./Company";
import AddCompany from "./AddCompany";
export default function Dashboard() {
    const [showData,setShowData] = React.useState();
    const [showRegister,setShowRegister] = React.useState();
    const [showPlacementStats,setShowPlacementStats] = React.useState();
    const [showFilterCandidates,setShowFilterCandidates] = React.useState();
    const [showPastRecuriters,setShowPastRecuriters] = React.useState();
    const [showCompanyStats,setShowCompanyStats] = React.useState();
    const [showCompanyRegister,setCompanyRegister] = React.useState();
    function handleClick1(){
        setShowData(true);
        setShowRegister(false);
        setShowPlacementStats(false);
        setShowCompanyStats(false);
        setShowFilterCandidates(false);
        setShowPastRecuriters(false);
        setCompanyRegister(false);
    }
    function handleClick2(){
        setShowData(false);
        setShowRegister(true);
        setShowPlacementStats(false);
        setShowCompanyStats(false);
        setShowFilterCandidates(false);
        setShowPastRecuriters(false); 
        setCompanyRegister(false);

    }
    function handleClick3(){
        setShowData(false);
        setShowRegister(false);
        setShowPlacementStats(true);
        setShowCompanyStats(false);
        setShowFilterCandidates(false);
        setShowPastRecuriters(false); 
        setCompanyRegister(false);

    }
    function handleClick6(){
        setShowData(false);
        setShowRegister(false);
        setShowPlacementStats(false);
        setShowCompanyStats(true);
        setShowFilterCandidates(false);
        setShowPastRecuriters(false); 
        setCompanyRegister(false);

    }
    function handleClick7(){
        setShowData(false);
        setShowRegister(false);
        setShowPlacementStats(false);
        setShowCompanyStats(false);
        setShowFilterCandidates(false);
        setShowPastRecuriters(false);  
        setCompanyRegister(true);

    }

    return (
        <>
            <div className="main-div row">
                <div className=" shadow-lg col-md-2 left-div ">
                    <div className="profile-div mt-4">
                        <FontAwesomeIcon icon={faUser} style={{color : 'rgb(160,90,255)'}}></FontAwesomeIcon> <span className="mx-2" style={{color : 'rgb(160,90,255)'}}>College Name</span>
                    </div>
                    <div className="options-div my-5 d-flex justify-content-center align-items-center" style={{flexDirection :' column'}}>
                        <button className="diff-btn my-3 p-2" style={{borderRadius : '20px'   }} name="showData" onClick={handleClick1}>Student Data</button>
                        <button className="diff-btn my-3 p-2" style={{borderRadius : '20px'   }} name="showRegister" onClick={handleClick2} >Register</button>
                        <button className="diff-btn my-3 p-2" style={{borderRadius : '20px'    }} name="showPlacementStats" onClick={handleClick3}>Placement Statistics</button>
                        <button className="diff-btn my-3 p-2" style={{borderRadius : '20px'    }}>Filter Coffee</button>
                        <button className="diff-btn my-3 p-2" style={{borderRadius : '20px'    }}>Past Recruiters</button>
                        <button className="diff-btn my-3 p-2" style={{borderRadius : '20px'    }} onClick={handleClick6}>Company Statistics</button>
                        <button className="diff-btn my-3 p-2" style={{borderRadius : '20px'   }} onClick={handleClick7}>Add Company</button>
                        <button className="diff-btn my-3 p-2" style={{borderRadius : '20px'    }} onClick={handleClick7}>Update</button>
                        <button className="diff-btn my-3 p-2" style={{borderRadius : '20px'    }} onClick={handleClick7}>Delete</button>
                    </div>
                </div>
                <div className="col-md-10 right-div">
                    <div className="right-up">
                        <div className="up1-div">
                            <div className="name-div m-4"><h5 style={{color: 'rgb(160,90,255)'}}>Hola! College Name</h5></div>
                            <div className="logout-div m-4">
                                <FontAwesomeIcon icon={faSignOut} style={{color: 'rgb(160,90,255)'}}></FontAwesomeIcon> <span style={{color: 'rgb(160,90,255)'}}>Logout</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-1">
                        {showData && <Table />}
                        {showRegister && <Form />}
                        {showPlacementStats && <Graph />}
                        {showCompanyStats && <Company />}
                        {showCompanyRegister && <AddCompany />}
                        
                    </div>
                </div>
            </div>
        </>
    )
}