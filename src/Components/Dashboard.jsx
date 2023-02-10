import React from "react";
import "./CSS/dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut, faUser, faHome, faList, faMessage, faCartShopping, faChartLine, faCog} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
    return (
        <>
            <div className="main-div row">
                <div className="col-md-2 left-div">
                    <div className="profile-div mt-4">
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> <span className="mx-2">Rutwik Dhale</span>
                    </div>
                    <div className="options-div my-5">
                        <div className="home-div my-3">
                            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> <span className="mx-2">Dashboard</span>
                        </div>
                        <div className="listing-div my-3">
                            <FontAwesomeIcon icon={faList}></FontAwesomeIcon> <span className="mx-2">Listings</span>
                        </div>
                        <div className="messages-div my-3">
                            <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon> <span className="mx-2">Messages</span>
                        </div>
                        <div className="orders my-3">
                            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> <span className="mx-2">Orders</span>
                        </div>
                        <div className="stats my-3">
                            <FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon> <span className="mx-2">Statistics</span>
                        </div>
                        <div className="settings my-3">
                            <FontAwesomeIcon icon={faCog}></FontAwesomeIcon> <span className="mx-2">Settings</span>
                        </div>
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
                        <div className="up2-div row p-3">
                            <div className="col-12 col-md-3 things shadow p-3 mb-5 bg-white rounded"></div>
                            <div className="col-12 col-md-3 things shadow p-3 mb-5 bg-white rounded"></div>
                            <div className="col-12 col-md-3 things shadow p-3 mb-5 bg-white rounded"></div>
                        </div>
                    </div>
                    <div className="right-low row">
                        <div className=" col-md-6 low1-div mt-5 shadow p-3 mb-5 bg-white rounded"></div>
                        <div className=" col-md-3 low2-div mt-5 shadow p-3 mb-5 bg-white rounded">
                            <center>Most Ordered</center>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}