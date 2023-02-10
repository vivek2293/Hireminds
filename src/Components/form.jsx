import React from "react";

export default function Form() {

    const [formdata, setFormdata] = React.useState({
        rollNo: "",
        name: "",
        branch: "",
        yearOfPassingOut: "",
        CGPA: "",
        email: "",
        linkedIn: "",
        github: "",
        resumeLink: ""
    });

    const [gender, setGender] = React.useState("");

    function handleChange(event) {
        setFormdata((prevdata) => {
            return {
                ...prevdata,
                [event.target.name]: event.target.value
            };
        });
    }

    console.log(gender);
    console.log(formdata);

    return (
        <>
            <section className="" style={{ width: "100vw" }}>
                <div className="form-div d-flex justify-content-center ">
                    <div className="card col-md-5 p-2 shadow p-3 mb-5 bg-white rounded">
                        <div className="d-flex justify-content-center pt-2 pb-2">
                            <h4>Student Details</h4>
                        </div>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                        >
                            <div className="form-group row m-2">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-md-4 col-form-label col-form-label-sm ps-4"
                                >
                                    Roll No.
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        name="rollNo"
                                        value={formdata.rollNo}
                                        className="form-control form-control-sm"
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
                                    className="col-md-4 col-form-label col-form-label-sm ps-4"
                                >
                                    Student Name
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formdata.name}
                                        className="form-control form-control-sm "
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
                                    className="col-md-4 col-form-label col-form-label-sm ps-4"
                                >
                                    Branch
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        name="branch"
                                        value={formdata.branch}
                                        className="form-control form-control-sm"
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
                                    className="col-md-4 col-form-label col-form-label-sm ps-4"
                                >
                                    Year of Graduation
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="number"
                                        name="yearOfPassingOut"
                                        value={formdata.yearOfPassingOut}
                                        className="form-control form-control-sm"
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
                                    className="col-md-4 col-form-label col-form-label-sm ps-4"
                                >
                                    Gender
                                </label>
                                <div className="col-md-5">
                                    <select
                                        className="form-select"
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
                                    className="col-md-4 col-form-label col-form-label-sm ps-4"
                                >
                                    CGPA
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="number"
                                        step="0.01"
                                        name="CGPA"
                                        value={formdata.CGPA}
                                        className="form-control form-control-sm"
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
                                    className="col-md-4 col-form-label col-form-label-sm ps-4"
                                >
                                    Email ID
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formdata.email}
                                        className="form-control form-control-sm"
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
                                    className="col-md-4 col-form-label col-form-label-sm ps-4"
                                >
                                    LinkedIn
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="url"
                                        name="linkedIn"
                                        value={formdata.linkedIn}
                                        className="form-control form-control-sm"
                                        id="colFormLabelSm"
                                        onChange={handleChange}
                                        placeholder="Enter linkedIn link"
                                        // required
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
                                        value={formdata.github}
                                        className="form-control form-control-sm"
                                        id="colFormLabelSm"
                                        onChange={handleChange}
                                        placeholder="Enter github link"
                                        // required
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
                                        value={formdata.resumeLink}
                                        className="form-control form-control-sm"
                                        id="colFormLabelSm"
                                        onChange={handleChange}
                                        placeholder="Enter resumeLink"
                                        // required
                                    />
                                </div>
                            </div>

                            <div className="btn-div d-flex justify-content-center" id="btn-div">
                                <button type="submit" className="btn btn-primary">
                                    Create
                                </button>
                                {/* <button type="button" className="btn primary-btn ms-3">
                                    Back
                                </button> */}
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}