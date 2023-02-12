import React from "react";
import axios from "axios";

export default function Filter() {

    // Made states for all the entries in the form 

    const [formdata, setFormdata] = React.useState({
        companyName: "",
        CGPA: "",
        year: "",
        age: "",
        email: ""
    })

    // This function posts the data provided in the input fields to the particular route provided below.

    function saveData() {
        const data = { ...formdata };
        axios.post("http://localhost:8000/api/v1/interaction/getEligibileCandidateList", data)
            .then(() => {
                console.log("Sent");
            }).catch((err) => {
                console.log(err);
            })
    }

    // This function handles all the changes in the input field i.e while entering company name, event.target.name and event.target.value helps specifying that in which field value has been updated.

    function handleChange(event) {
        setFormdata((prevdata) => {
            return {
                ...prevdata,
                [event.target.name]: event.target.value
            };
        });
    }

    // It returns the structure of this particular page

    return (
        <>
            <section className="" style={{ width: "85vw" }}>
                <div className="form-div d-flex justify-content-center ">
                    <div className="card col-md-5 p-2 shadow p-3 mb-5 bg-white rounded w-50">
                        <div className="d-flex justify-content-center pt-2 pb-2">
                            <h4>Eligibility Criteria</h4>
                        </div>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                saveData();
                            }}
                        >
                            <div className="form-group row m-2">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                                >
                                    Company Name
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formdata.companyName}
                                        className="form-control form-control-sm p-1"
                                        id="colFormLabelSm"
                                        placeholder="Enter Company Name"
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
                                    CGPA
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="number"
                                        name="CGPA"
                                        step="0.01"
                                        value={formdata.CGPA}
                                        className="form-control form-control-sm p-1"
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
                                    Year
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="number"
                                        name="year"
                                        value={formdata.year}
                                        className="form-control form-control-sm p-1"
                                        id="colFormLabelSm"
                                        onChange={handleChange}
                                        placeholder="Enter Year"
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
                                        value={formdata.age}
                                        className="form-control form-control-sm p-1"
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
                                        value={formdata.email}
                                        className="form-control form-control-sm p-1"
                                        id="colFormLabelSm"
                                        onChange={handleChange}
                                        placeholder="Enter Email"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="btn-div d-flex justify-content-center" id="btn-div">
                                <button type="submit" className="btn btn-custom1 mt-2 p-1">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}