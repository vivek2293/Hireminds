import React from "react";

export default function Testing() {
    const [msg, setMsg] = React.useState(false);

    function handleChange() {
        var ex = document.getElementById("selection");
        var valu = ex.value;
        if (valu === "Students") {
            setMsg(true);
        }
        else {
            setMsg(false);
        }
    }

    return (
        <>
            <div className="main-div row d-flex align-items-center justify-content-between">
                <div className="col-md-8 row justify-content-center">
                    <input type="text" style={{ width: '50vw' }} />
                </div>
                <div className="col-md-4 d-flex" style={{ flexDirection: 'row !important' }}>
                    <span className="mx-4">Send this message to </span>
                    <div className="drop-down-div">
                        <select id="selection" onChange={handleChange}>
                            <option value="ToRecruiters" selected="selected">To Recruiters</option>
                            <option value="Students">Students</option>
                        </select>
                        {msg && <select id="further">
                            <option value="1">1st Year</option>
                            <option value="2">2nd Year</option>
                            <option value="3">3rd Year</option>
                            <option value="4">4th Year</option>
                        </select>}
                    </div>
                </div>
            </div>
        </>
    )
}