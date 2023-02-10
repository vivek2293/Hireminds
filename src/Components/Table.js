import React from "react";
import data from "../Data";
export default function Table() {
  const [show, setShow] = React.useState(false);
  const [roll, setRoll] = React.useState([]);
  const [name, setName] = React.useState([]);
  const [year, setYear] = React.useState([]);
  const [branch, setBranch] = React.useState([]);
  const numberOfYears = [];
  const elements = data.map((myList) => numberOfYears.push(myList.year));
  let years = [...new Set(numberOfYears)];
  const yearElements = years.map((myList) => (
    <button onClick={() => handleClick(myList)} key={myList}>
      {myList}
    </button>
  ));
  function handleClick(params) {
    setRoll([]);
    setBranch([]);
    setYear([]);
    setName([]);
    const tempRoll = [];
    const tempYear = [];
    const tempBranch = [];
    const tempName = [];
    const tempElements = data.map((myList) => {
      if (params == myList.year) {
        tempRoll.push(<li key={myList.roll} style={{listStyle : 'none'}}>{myList.roll}</li>);
        tempName.push(<li key={myList.roll} style={{listStyle : 'none'}}>{myList.name}</li>);
        tempYear.push(<li key={myList.roll} style={{listStyle : 'none'}}>{myList.year}</li>);
        tempBranch.push(<li key={myList.roll} style={{listStyle : 'none'}}>{myList.branch}</li>);
      }
    });
    setBranch(tempBranch);
    setRoll(tempRoll);
    setName(tempName);
    setYear(tempYear);
    setShow(true);
  }

  return (
    <>
      {yearElements}

      {show && (
        <section className="d-flex justify-content-center align-items-center">
          <div
            className="col-1 d-flex justify-content-center align-items-center"
            style={{
              minHeight: "10vh",
              flexDirection: "column",
              border : '1px solid black'
            }}
          >
          {roll}
          </div>
          <div
            className="col-5 d-flex justify-content-center align-items-center"
            style={{
              minHeight: "10vh",
              flexDirection: "column",
              border : '1px solid black'
            }}
          >
            {name}
          </div>
          <div
            className="col-3 d-flex justify-content-center align-items-center"
            style={{
              minHeight: "10vh",
              flexDirection: "column",
              border : '1px solid black'
            }}
          >
            {year}
          </div>
          <div
            className="col-3 d-flex justify-content-center align-items-center"
            style={{
              minHeight: "10vh",
              flexDirection: "column",
              border : '1px solid black'
            }}
          >
            {branch}
          </div>
        </section>
      )}
    </>
  );
}
