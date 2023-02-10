import { func } from "prop-types";
import React from "react";
import data from "../Data.jsx";

export default function Company() {

    const [display, setDisplay] = React.useState({
        companyName: "",
        year: "",
        number: "",
        money: "",
        highest: "",
        avg: "",
        median: ""
    })

    const [show, setShow] = React.useState(false);
    const [elements1, setElements1] = React.useState(false);

    function handleChange(event) {
        setDisplay((prevdata) => {
            return {
                ...prevdata,
                [event.target.name]: event.target.value
            };
        });
    }


    function handleChange1() {
        const elements = data.map((e) => {
            if (display.companyName == e.companyName) {
                return (
                    <div className="row justify-content-around" key={e.key}>
                        <div className="comp-name col-md-4">{e.year}</div>
                        <div className="highest col-md-4">{e.highest}</div>
                        <div className="avg col-md-4">{e.avg}</div>
                    </div>
                )
            }
        })
        setElements1(elements);
    }

    console.log(show);
    React.useEffect(() => {
        if (elements1) {
            setShow(true);
        }
    }, [elements1])

    return (
        <>
            <div className="row">
                <label htmlFor="Companyfield">Company Name</label>
                <div>
                    <input type="text"
                        id="Companyfield"
                        placeholder="Company Name"
                        name="companyName"
                        onChange={handleChange} />
                </div>
                <button type="submit" onClick={handleChange1}>Submit</button>
                {show && (
                    <div className="row justify-content-around">
                        <h4 className="col-md-4">Year</h4>
                        <h4 className="col-md-4">Avg</h4>
                        <h4 className="col-md-4">Max</h4>
                    </div>
                )}
                {show && elements1}
            </div>

        </>
    )
}