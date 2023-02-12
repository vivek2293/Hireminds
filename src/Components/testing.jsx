import React from "react";

export default function Testing() {
    const [msg, setMsg] = React.useState(false);
    const [data,setData] = React.useState();
    const [sendTo,setSendTo] = React.useState();
    const [year,setYear] = React.useState();
    const [inputMessage, setInputMessage] = React.useState();
    function handleChange() {
        var ex = document.getElementById("selection");
        var valu = ex.value;
        setSendTo(valu)
        if (valu === "Students") {
            setMsg(true);
        }
        else {
            setMsg(false);
        }
    }
    function handleClick(){
        console.log(sendTo)
        console.log(year);
        console.log(inputMessage)
    }
    function handleChange2(e){
        setYear(e.target.value);
    }
    function handleChange3(e){
        setInputMessage(e.target.value);
    }

    return (
        <section style={{width : '85vw'}} className="d-flex justify-content-center">
            <div className="card col-md-5 p-2 shadow p-3 mb-5 bg-white rounded w-50">
                <center className="my-2"><h3>Send Messages</h3></center>
                <div className="main-div">
                    <div className="d-flex justify-content-center my-2">
                        <input type="textarea" style={{ width: '50vw' }} onChange={handleChange3}/>
                    </div>
                    <div className="d-flex align-items-center" style={{ flexDirection: 'column' }}>
                        <div className="div d-flex align-items-center">
                            <p className="my-1 mx-3">Send this message to</p>
                            <div className="drop-down-div">
                                <select id="selection" onChange={handleChange} className="me-1">
                                    <option value="ToRecruiters" selected="selected">To Recruiters</option>
                                    <option value="Students">Students</option>
                                </select>
                                {msg && <select id="further" onChange={handleChange2}>
                                    <option value="1">1st Year</option>
                                    <option value="2">2nd Year</option>
                                    <option value="3">3rd Year</option>
                                    <option value="4">4th Year</option>
                                </select>}
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-2">
                    <button className="p-1" onClick={handleClick}>Submit</button>
                    </div>
                </div>
            </div>
        </section>
    )
}