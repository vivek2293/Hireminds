
import React from "react";
import data from "../Data.jsx";
import "./CSS/Company.css"
export default function Company() {
    const [display, setDisplay] = React.useState({
        companyName: "",
        year: "",
        number: "",
        money: "",
        highest: "",
        avg: "",
        median: "",
    });

    const [show, setShow] = React.useState(false);
    const [elements1, setElements1] = React.useState(false);

    function handleChange(event) {
        setDisplay((prevdata) => {
            return {
                ...prevdata,
                [event.target.name]: event.target.value,
            };
        });
    }

    function handleChange1() {
        const elements = data.map((e) => {
            if (display.companyName == e.companyName) {
                return (
                    <tr>
                        <td>{e.year}</td>
                        <td className="d-flex justify-content-center">{e.highest}</td>
                        <td><center>{e.avg}</center></td>
                    </tr>

                );
            }
        });
        setElements1(elements);
    }

    console.log(show);
    React.useEffect(() => {
        if (elements1) {
            setShow(true);
        }
    }, [elements1]);

    return (
        <>
            <div className="card col-md-12 p-2 shadow p-3 mb-5 bg-white rounded">
                <div className="d-flex justify-content-center align-items-center" >
                    <label className="my-3" htmlFor="Companyfield">Enter company name:</label>
                    <div className="mx-2">
                        <input
                            type="text"
                            id="Companyfield"
                            placeholder="Company Name"
                            name="companyName"
                            onChange={handleChange}
                            className="my-3"
                        />
                    </div>
                </div>
                <div className="btn-div d-flex justify-content-center" id="btn-div">
                    <button type="submit" className="btn btn-custom1 p-1" onClick={handleChange1}>Submit</button>
                </div>
                <div id="companyData" className="mt-4">
                    {show && (
                        <table className="table table-striped border">
                            <thead>
                                <tr>
                                    <th scope="col">Year</th>
                                    <th scope="col" className="d-flex justify-content-center">Highest</th>
                                    <th scope="col"><center>Average</center></th>
                                </tr>
                            </thead>
                            <tbody>{elements1}</tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    );
}
