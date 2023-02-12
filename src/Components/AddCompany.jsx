import React from 'react'
import axios from "axios";

// Made states for all the entries in the form

function AddCompany() {
    const [formdata, setFormdata] = React.useState({
        companyName: "",
        location: "",
        email: "",
        websiteUrl: "",

    });

    // This function handles all the changes in the input field i.e while entering company name, event.target.name and event.target.value helps specifying that in which field value has been updated.

    function handleChange(event) {
        setFormdata((prevdata) => {
            return {
                ...prevdata,
                [event.target.name]: event.target.value
            };
        });
    }

    // This function posts, when form is submitted, the data provided in the input fields to the particular route provided below.

    function saveData() {
        const data = { ...formdata };
        console.log(data);
        axios.post("http://localhost:8000/api/v1/company/createCompanyRecord", data)
            .then((res) => {
                console.log("Sent");
            }).catch((err) => {
                console.log(err);
            })
    }

    // It returns the structure of this particular page

    return (
        <>
            <section className="" style={{ width: "85vw" }}>
                <div className="form-div d-flex justify-content-center ">
                    <div className="card col-md-5 p-2 shadow p-3 mb-5 bg-white rounded w-50">
                        <div className="d-flex justify-content-center pt-2 pb-2">
                            <h4>Company Details</h4>
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
                                <div className="col-md-5 mx-2">
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formdata.name}
                                        className="form-control form-control-sm p-1"
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
                                    Location
                                </label>
                                <div className="col-md-5 mx-2">
                                    <input
                                        type="text"
                                        name="location"
                                        value={formdata.branch}
                                        className="form-control form-control-sm p-1"
                                        onChange={handleChange}
                                        placeholder="Enter Location of company"
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
                                <div className="col-md-5 mx-2">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formdata.email}
                                        className="form-control form-control-sm p-1"
                                        onChange={handleChange}
                                        placeholder="Enter Email ID"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group row m-2">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-md-4 col-form-label col-form-label-sm ps-4"
                                >
                                    Website url
                                </label>
                                <div className="col-md-5 mx-2">
                                    <input
                                        type="url"
                                        name="websiteUrl"
                                        className="form-control form-control-sm p-1"
                                        onChange={handleChange}
                                        placeholder="Enter Company Website url"
                                    />
                                </div>
                            </div>


                            <div className="btn-div d-flex justify-content-center" id="btn-div">
                                <button type="submit" className="btn btn-custom1 p-1 mt-2">Click Me</button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddCompany