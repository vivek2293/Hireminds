import React from "react";

export default function Testing() {
    return (
        <>
            <div className="main-div row d-flex align-items-center justify-content-between">
                <div className="col-md-8 row justify-content-center">
                    <input type="text" style={{width: '50vw'}}/>
                </div>
                <div className="col-md-4 d-flex" style={{flexDirection:'row !important'}}>
                    <span className="mx-4">Send this message to </span>
                    <div className="drop-down-div">
                        <select id="selection">
                            <option value="ToRecruiters">To Recruiters</option>
                            <option value="Students">Students</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}