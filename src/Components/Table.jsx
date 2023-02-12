import React from "react";
import axios from "axios";
import "./CSS/Table.css";
export default function Table() {
  const [showBranch, setShowBranch] = React.useState(false);
  const [showData, setShowData] = React.useState(false);
  const [whichYear, setWhichYear] = React.useState();
  const [branchElements, setBranchElements] = React.useState([]);
  const [yearElements, setYearElements] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [elements, setElements] = React.useState();
  const [data, setData] = React.useState([{}]);
  React.useEffect(() => {
    axios
      .post("http://localhost:8000/api/v1/record/alldata", {})
      .then((info) => {
        console.log(info);
        setData(info.data);
      });
  }, []);

  React.useEffect(() => {
    const numberOfYears = [];
    const elements = data.map((myList) =>
      numberOfYears.push(myList.yearOfPassingOut)
    );
    let years = [...new Set(numberOfYears)];
    const tempYearElements = years.map((myList) => (
      <option key={myList} value={myList}>
        {myList}
      </option>
    ));
    setYearElements(tempYearElements);
  }, [data]);
  function handleClick(params) {
    if (params != "default") {
      setWhichYear(params);
    }
  }
  React.useEffect(() => {
    setShow(true);
  }, [yearElements]);

  React.useEffect(() => {
    const numberOfBranches = [];
    const tempElements = data.map((myList) => {
      if (whichYear == myList.yearOfPassingOut) {
        numberOfBranches.push(myList.branch);
      }
    });
    let branches = [...new Set(numberOfBranches)];
    const tempBranchElements = branches.map((myList) => (
      <option key={myList} value={myList}>
        {myList}
      </option>
    ));

    setBranchElements(tempBranchElements);
  }, [whichYear]);
  React.useEffect(() => {
    setShowBranch(true);
  }, [branchElements]);
  function handleClick2(props) {
    const tempElements = data.map((myList) => {
      if (props == myList.branch && myList.yearOfPassingOut == whichYear) {
        return (
          <tr key={myList.rollNo}>
            <td>{myList.rollNo}</td>
            <td>{myList.name}</td>
            <td>{myList.yearOfPassingOut}</td>
            <td>{myList.branch}</td>
            <td>{myList.contactNo}</td>
            <td>{myList.CGPA}</td>
            <td>{myList.email}</td>
          </tr>
        );
      }
    });
    setElements(tempElements);
  }
  React.useEffect(() => {
    if (elements) {
      setShowData(true);
    }
  }, [elements]);
  return (
    <>
      <section className="card p-3">
        {setShow && (
          <div className="my-3">
          <h4>Student Data:</h4>
            <p className="my-2">Please select year</p>
            <div className="d-flex justify-content-center align-items-center"></div>
            <select
              className="form-select p-1"
              aria-label="Default select example"
              onChange={(event) => handleClick(event.target.value)}
            >
              <option value="default" key="defaultYear">
                Select Year
              </option>
              {yearElements}
            </select>
          </div>
        )}
        {showBranch && (
          <div className="my-3">
            <p className="my-2">Please select Branch</p>
            <div className="d-flex justify-content-center align-items-center"></div>
            <select
              className="form-select p-1"
              aria-label="Default select example"
              onChange={(event) => handleClick2(event.target.value)}
            >
              <option key="selectBranch">Select Branch</option>
              {branchElements}
            </select>
          </div>
        )}
        {showData && (
          <table className="my-3">
            <thead style={{ width: "100%", border: "1px solid black" }}>
              <tr>
                <th style={{ border: "1px solid black" }}>Roll number</th>
                <th style={{ border: "1px solid black" }}>Name</th>
                <th style={{ border: "1px solid black" }}>Year</th>
                <th style={{ border: "1px solid black" }}>branch</th>
                <th style={{ border: "1px solid black" }}>Contact</th>
                <th style={{ border: "1px solid black" }}>CGPA</th>
                <th style={{ border: "1px solid black" }}>Email</th>
              </tr>
            </thead>
            <tbody>{elements}</tbody>
          </table>
        )}

      </section>
    </>
  );
}

{
}
