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
        <section>
            <div className="card col-md-5 p-2 shadow p-3 mb-5 bg-white rounded w-50">
                <center className="my-2"><h3>Send Messages</h3></center>
                <div className="main-div">
                    <div className="d-flex justify-content-center my-2">
                        <input type="textarea" style={{ width: '50vw' }} />
                    </div>
                    <div className="d-flex align-items-center" style={{ flexDirection: 'column' }}>
                        <div className="div d-flex align-items-center">
                            <p className="my-1 mx-3">Send this message to</p>
                            <div className="drop-down-div">
                                <select id="selection" onChange={handleChange} className="me-1">
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
                </div>
            </div>
        </section>
    )
}