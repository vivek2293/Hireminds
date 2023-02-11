import React from "react";
import axios from "axios";
// import data from "../Data";
import "./CSS/Table.css";
export default function Table() {
  const [showBranch, setShowBranch] = React.useState(false);
  const [showData, setShowData] = React.useState(false);
  const [whichYear, setWhichYear] = React.useState();
  const [branchElements, setBranchElements] = React.useState([]);
  const [yearElements, setYearElements] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [data1, setData1] = React.useState({
    roll: "",
    name: "",
    year: "",
    contact: "",
    branch: "",
    CGPA: "",
    email: "",
  });
  const [data, setData] = React.useState([{}]);
  React.useEffect(() => {
    axios
      .post("http://localhost:8000/api/v1/record/alldata", {})
      .then((info) => {
        console.log(info)
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
      //   <button className="mx-3" onClick={() => handleClick(myList)} key={myList}>
      //     {myList}
      //   </button>
      <option key={myList} value={myList}>{myList}</option>
    ));
    setYearElements(tempYearElements);
  }, [data]);
  function handleClick(params) {
    if(params != "default"){
    console.log("hello");

    setWhichYear(params);
    }
  }
  React.useEffect(() => {
    setShow(true);
  }, [yearElements]);

  React.useEffect(() => {
    console.log(whichYear);
    const numberOfBranches = [];
    const tempElements = data.map((myList) => {
      if (whichYear == myList.yearOfPassingOut) {
        numberOfBranches.push(myList.branch);
      }
    });
    let branches = [...new Set(numberOfBranches)];
    const tempBranchElements = branches.map((myList) => (
    //   <button onClick={() => handleClick2(myList)}>{myList}</button>
        <option key={myList} value={myList}>{myList}</option>
    ));

    setBranchElements(tempBranchElements);
  }, [whichYear]);
  React.useEffect(() => {
    setShowBranch(true);
  }, [branchElements]);
  function handleClick2(props) {
    setData1((prevData) => {
      return {
        ...prevData,
        roll: "",
        name: "",
        year: "",
        contact: "",
        branch: "",
        CGPA: "",
        email: "",
      };
    });
    const tempRoll = [];
    const tempYear = [];
    const tempBranch = [];
    const tempName = [];
    const tempContact = [];
    const tempCgpa = [];
    const tempEmail = [];
    console.log("hello");
    // for(var i in data){
    //   console.log(i);
      
    //   for(var j in data[i]){
    //     if( j == "CGPA"){
    //       // console.log(data[i][j][$numberDecimal]); 
    //       for(var k in data[i][j]){
    //         console.log(k);
    //       }
    //         // data[i] = data[i].toString();
    //         // console.log(data[i]);
    //       }
    //   }
    // }
    console.log(data);
    const tempElements = data.map((myList) => {
      if (props == myList.branch && myList.yearOfPassingOut == whichYear) {
        tempRoll.push(
          <li key={myList.roll} style={{ listStyle: "none" }}>
            {myList.rollNo}
          </li>
        );
        tempName.push(
          <li key={myList.roll} style={{ listStyle: "none" }}>
            {myList.name}
          </li>
        );
        tempYear.push(
          <li key={myList.roll} style={{ listStyle: "none" }}>
            {myList.yearOfPassingOut}
          </li>
        );
        tempBranch.push(
          <li key={myList.roll} style={{ listStyle: "none" }}>
            {myList.branch}
          </li>
        );
        tempContact.push(
          <li key={myList.roll} style={{ listStyle: "none" }}>
            {myList.contactNo}
          </li>
        );
        tempCgpa.push(
          <li key={myList.roll} style={{ listStyle: "none" }}>
            {myList.CGPA}
          </li>
        );
        tempEmail.push(
          <li key={myList.roll} style={{ listStyle: "none" }}>
            {myList.email}
          </li>
        );
      }
      setData1((prevData) => {
        return {
          ...prevData,
          roll: tempRoll,
          name: tempName,
          year: tempYear,
          contact: tempContact,
          branch: tempBranch,
          CGPA: tempCgpa,
          email: tempEmail,
        };
      });
      setShowData(true);
    });
  }
  React.useEffect(() => {
    setShow(true);
  }, [data1]);
  return (
    <>
      <section className="card p-3" >
        {setShow && (
          <div className="my-3" >
            <p className="my-2">Please select year</p>
            <div className="d-flex justify-content-center align-items-center"></div>
            {/* {yearElements}
             */}
            <select
              className="form-select p-1"
              aria-label="Default select example"
              onChange={(event) => handleClick(event.target.value)}
            >
            <option value="default" key="defaultYear">Select Year</option>
              {yearElements}
            </select>
          </div>
        )}
        {showBranch && (
            <div className="my-3">
            <p className="my-2">Please select Branch</p>
            <div className="d-flex justify-content-center align-items-center"></div>
            {/* {yearElements}
             */}
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
          <section className="d-flex justify-content-start align-items-center">
            <div
              className=" d-flex justify-content-center align-items-center"
              style={{
                minHeight: "10vh",
                flexDirection: "column",
                border: "1px solid black",
                minWidth: '7vw'

              }}
              id="rollNumberDiv"
            >
              <h6 className="mb-3">Roll Number</h6>
              {show && data1.roll}
            </div>
            <div
              className=" d-flex justify-content-center align-items-center"
              style={{
                minHeight: "10vh",
                flexDirection: "column",
                border: "1px solid black",
                minWidth: '20vw'

              }}
            >
              <h6 className="mb-3">Name</h6>
              {data1.name}
            </div>
            <div
              className=" d-flex justify-content-center align-items-center"
              style={{
                minHeight: "10vh",
                flexDirection: "column",
                border: "1px solid black",
                minWidth: '5vw'

              }}
            >
              <h6 className="mb-3">Year</h6>
              {data1.year}
            </div>
            <div
              className=" d-flex justify-content-center align-items-center"
              style={{
                minHeight: "10vh",
                flexDirection: "column",
                border: "1px solid black",
                minWidth: '5vw'

              }}
            >
              <h6 className="mb-3">Branch</h6>
              {data1.branch}
            </div>
            <div
              className=" d-flex justify-content-center align-items-center"
              style={{
                minHeight: "10vh",
                flexDirection: "column",
                border: "1px solid black",
                minWidth: '10vw'

              }}
            >
              <h6 className="mb-3"> Contact</h6>{data1.contact}
            </div>
            <div
              className="  d-flex justify-content-center align-items-center"
              style={{
                minHeight: "10vh",
                flexDirection: "column",
                border: "1px solid black",
                minWidth: '6vw'
              }}
            >
              <h6 className="mb-3">CGPA</h6>{data1.CGPA}
            </div>
            <div
              className=" d-flex justify-content-center align-items-center"
              style={{
                minHeight: "10vh",
                flexDirection: "column",
                border: "1px solid black",
                minWidth: '27vw'
              }}
            >
              <h6 className="mb-3">Email</h6>{data1.email}
            </div>
          </section>
        )}
      </section>
    </>
  );
}
