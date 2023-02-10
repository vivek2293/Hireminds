import React from "react";
import axios from "axios";
export default function Table() {
  const [showBranch, setShowBranch] = React.useState(false);
  const [showData, setShowData] = React.useState(false);
  const [roll, setRoll] = React.useState([]);
  const [name, setName] = React.useState([]);
  const [year, setYear] = React.useState([]);
  const [branch, setBranch] = React.useState([]);
  const [whichYear, setWhichYear] = React.useState();
  const [branchElements, setBranchElements] = React.useState([]);
  const [data, setData] = React.useState([{}]);

  React.useEffect(() => {
    axios.post("http://localhost:8000/api/v1/record/alldata",{}).then((info) => {
      setData(info.data);
    })
  }, [])

  React.useEffect(() => {
    console.log(data)
  }, [data]);


  const numberOfYears = [];
  const numberOfBranches = [];
  const elements = data.map((myList) => numberOfYears.push(myList.year));
  let years = [...new Set(numberOfYears)];
  const yearElements = years.map((myList) => (
    <button onClick={() => handleClick(myList)} key={myList}>
      {myList}
    </button>
  ));

  function handleClick(params) {
    setWhichYear(params);
  }
  React.useEffect(() => {
    let tempData = [];
    const tempElements = data.map((myList) => {
      if (whichYear == myList.year) {
        numberOfBranches.push(myList.branch);
        tempData.push(myList);
      }
    });
    let branches = [...new Set(numberOfBranches)];
    const tempBranchElements = branches.map((myList) => (
      <button onClick={() => handleClick2(myList)}>{myList}</button>
    ));
    setBranchElements(tempBranchElements);
    setShowBranch(true);
  }, [whichYear]);

  function handleClick2(props) {
    setRoll([]);
    setBranch([]);
    setYear([]);
    setName([]);
    const tempRoll = [];
    const tempYear = [];
    const tempBranch = [];
    const tempName = [];
    const tempElements = data.map((myList) => {
      if (props == myList.branch && myList.year == whichYear) {
        tempRoll.push(
          <li key={myList.roll} style={{ listStyle: "none" }}>
            {myList.roll}
          </li>
        );
        tempName.push(
          <li key={myList.roll} style={{ listStyle: "none" }}>
            {myList.name}
          </li>
        );
        tempYear.push(
          <li key={myList.roll} style={{ listStyle: "none" }}>
            {myList.year}
          </li>
        );
        tempBranch.push(
          <li key={myList.roll} style={{ listStyle: "none" }}>
            {myList.branch}
          </li>
        );
      }
      setBranch(tempBranch);
      setRoll(tempRoll);
      setName(tempName);
      setYear(tempYear);
      setShowData(true);
    });
  }

  return (
    <>
      {yearElements}
      {showBranch && branchElements}
      {showData && (
        <section className="d-flex justify-content-center align-items-center">
          <div
            className="col-1 d-flex justify-content-center align-items-center"
            style={{
              minHeight: "10vh",
              flexDirection: "column",
              border: "1px solid black",
            }}
          >
            {roll}
          </div>
          <div
            className="col-5 d-flex justify-content-center align-items-center"
            style={{
              minHeight: "10vh",
              flexDirection: "column",
              border: "1px solid black",
            }}
          >
            {name}
          </div>
          <div
            className="col-3 d-flex justify-content-center align-items-center"
            style={{
              minHeight: "10vh",
              flexDirection: "column",
              border: "1px solid black",
            }}
          >
            {year}
          </div>
          <div
            className="col-3 d-flex justify-content-center align-items-center"
            style={{
              minHeight: "10vh",
              flexDirection: "column",
              border: "1px solid black",
            }}
          >
            {branch}
          </div>
        </section>
      )}
    </>
  );
}
