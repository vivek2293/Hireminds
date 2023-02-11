import React from "react";

export default function Filter() {
    const [formdata, setFormdata] = React.useState({
        companyName: "",
        CGPA: "",
        year: "",
        age: "",
        email: ""
    })

    function handleChange(event) {
        setFormdata((prevdata) => {
            return {
                ...prevdata,
                [event.target.name]: event.target.value
            };
        });
    }

    console.log(formdata);

    return (
        <>
            <section className="" style={{ width: "85vw" }}>
                <div className="form-div d-flex justify-content-center ">
                    <div className="card col-md-5 p-2 shadow p-3 mb-5 bg-white rounded">
                        <div className="d-flex justify-content-center pt-2 pb-2">
                            <h4>Shortlisted Candidates</h4>
                        </div>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                // saveData();
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
                                <button type="submit" className="btn btn-custom1 p-1">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}