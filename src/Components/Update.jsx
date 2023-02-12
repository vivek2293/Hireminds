import React from "react";
import axios from "axios";
import "./CSS/form.css";

export default function Update() {

    const [formdata, setFormdata] = React.useState({
        rollNo: "",
        name: "",
        branch: "",
        yearOfPassingOut: ""
    });

    const [formdata1, setFormdata1] = React.useState({
        rollNo: "",
        name: "",
        contactNo: "",
        branch: "",
        yearOfPassingOut: "",
        CGPA: "",
        email: "",
        age: "",
        linkedIn: "NA",
        github: "NA",
        resumeLink: "NA"
    });
    const [gender, setGender] = React.useState("male");
    const [degree, setDegree] = React.useState("BTech");
    const [show1,setShow1] = React.useState(true);
    const [show2,setShow2] = React.useState(false);



    function handleChange(event) {
        setFormdata((prevdata) => {
            return {
                ...prevdata,
                [event.target.name]: (event.target.value)
            };
        });
    }

    function saveData1() {
        const data = { ...formdata };
        console.log(data);
        // axios.post("http://localhost:8000/api/v1/record/createData", data)
        //     .then(() => {
        //         console.log("Sent");
        //     }).catch((err) => {
        //         console.log(err);
        //     })
        setShow1(false);
        setShow2(true);
    }
    function saveData2(){
            //axios post this saved data;
    }


    return (
        <>
            <section className="" style={{ width: "85vw" }}>
                {show1 && <div className="form-div d-flex justify-content-center ">
                    <div className="card col-md-5 shadow p-3 mb-5 bg-white rounded w-75">
                        <div className="d-flex justify-content-center pt-2 pb-2 mb-2 mt-1">
                            <h4>Student Details</h4>
                        </div>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                saveData1();
                            }}
                        >
                            <div className="form-group row m-2">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                                >
                                    Roll No.
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        name="rollNo"
                                        value={formdata.rollNo}
                                        className="form-control form-control-sm px-1"
                                        id="colFormLabelSm"
                                        placeholder="Enter Roll No."
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group row m-2">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                                >
                                    Student Name
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formdata.name}
                                        className="form-control form-control-sm px-1"
                                        id="colFormLabelSm"
                                        onChange={handleChange}
                                        placeholder="Enter student name"
                                        required
                                    />
                                </div>
                            </div>


                            <div className="form-group row m-2">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                                >
                                    Branch
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        name="branch"
                                        value={formdata.branch}
                                        className="form-control form-control-sm px-1"
                                        id="colFormLabelSm"
                                        onChange={handleChange}
                                        placeholder="Enter branch name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group row m-2">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                                >
                                    Year of Graduation
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="number"
                                        name="yearOfPassingOut"
                                        value={formdata.yearOfPassingOut}
                                        className="form-control form-control-sm px-1"
                                        id="colFormLabelSm"
                                        onChange={handleChange}
                                        placeholder="Enter graduation year"
                                        required
                                    />
                                </div>
                            </div>


                            <div className="btn-div d-flex justify-content-center" id="btn-div">
                                <button type="submit" className="btn btn-custom1 p-1 mt-3">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>}
                {show2&& (
                    <div className="form-div d-flex justify-content-center ">
                    <div className="card col-md-5 shadow p-3 mb-5 bg-white rounded w-75">
                        <div className="d-flex justify-content-center pt-2 pb-2 mb-2 mt-1">
                            <h4>Student Details</h4>
                        </div>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                saveData2();
                            }}
                        >

                            <div className="form-group row m-2">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                                >
                                    Student Name
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control form-control-sm px-1"
                                        id="colFormLabelSm"
                                        onChange={handleChange}
                                        placeholder="Enter student name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group row m-2">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                                >
                                    Contact No.
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="tel"
                                        name="contactNo"
                                        className="form-control form-control-sm px-1"
                                        id="colFormLabelSm"
                                        onChange={handleChange}
                                        placeholder="Enter contact Number"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group row m-2">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                                >
                                    Branch
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        name="branch"
                                        className="form-control form-control-sm px-1"
                                        id="colFormLabelSm"
                                        onChange={handleChange}
                                        placeholder="Enter branch name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group row m-2">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                                >
                                    Year of Graduation
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="number"
                                        name="yearOfPassingOut"
                                        className="form-control form-control-sm px-1"
                                        id="colFormLabelSm"
                                        onChange={handleChange}
                                        placeholder="Enter graduation year"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group row m-2">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                                >
                                    Gender
                                </label>
                                <div className="col-md-5">
                                    <select
                                        className="form-select p-1"
                                        aria-label="Default select example"
                                        onChange={(event) => setGender(event.target.value)}
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group row m-2">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                                >
                                    CGPA
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="number"
                                        step="0.01"
                                        name="CGPA"
                                        className="form-control form-control-sm px-1"
                                        id="colFormLabelSm"
                                        onChange={handleChange}
                                        placeholder="Enter CGPA"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group row m-2">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                                >
                                    Age
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="number"
                                        name="age"
                                        className="form-control form-control-sm px-1"
                                        id="colFormLabelSm"
                                        onChange={handleChange}
                                        placeholder="Enter Age"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group row m-2">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                                >
                                    Email ID
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control form-control-sm px-1"
                                        id="colFormLabelSm"
                                        onChange={handleChange}
                                        placeholder="Enter Email ID"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group row m-2">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                                >
                                    Degree
                                </label>
                                <div className="col-md-5">
                                    <select
                                        className="form-select p-1"
                                        aria-label="Default select example"
                                        onChange={(event) => setDegree(event.target.value)}
                                    >
                                        <option value="BTech">BTech</option>
                                        <option value="BE">BE</option>
                                        <option value="BSc">BSc</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group row m-2">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-md-4 col-form-label col-form-label-sm ps-4"
                                >
                                    LinkedIn
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="url"
                                        name="linkedIn"
                                        className="form-control form-control-sm px-1"
                                        id="colFormLabelSm"
                                        onChange={handleChange}
                                        placeholder="Enter linkedIn link"
                                    />
                                </div>
                            </div>

                            <div className="form-group row m-2">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-md-4 col-form-label col-form-label-sm ps-4"
                                >
                                    Github
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="url"
                                        name="github"
                                        className="form-control form-control-sm px-1"
                                        id="colFormLabelSm"
                                        onChange={handleChange}
                                        placeholder="Enter github link"
                                    />
                                </div>
                            </div>

                            <div className="form-group row m-2">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-md-4 col-form-label col-form-label-sm ps-4"
                                >
                                    Resume
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="url"
                                        name="resumeLink"
                                        className="form-control form-control-sm px-1"
                                        id="colFormLabelSm"
                                        onChange={handleChange}
                                        placeholder="Enter resumeLink"
                                    />
                                </div>
                            </div>

                            <div className="btn-div d-flex justify-content-center" id="btn-div">
                                <button type="submit" className="btn btn-custom1 p-1 mt-3">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
                )
                }
            </section>
        </>
    )
}