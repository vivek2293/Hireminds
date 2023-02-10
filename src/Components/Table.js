import React from "react";
import axios from "axios";
import data from "../Data";
import "./CSS/Table.css"
export default function Table() {
  const [showBranch, setShowBranch] = React.useState(false);
  const [showData, setShowData] = React.useState(false);
  const [roll, setRoll] = React.useState([]);
  const [name, setName] = React.useState([]);
  const [year, setYear] = React.useState([]);
  const [contact, setContact] = React.useState([]);
  const [email, setEmail] = React.useState([]);
  const [cgpa, setCgpa] = React.useState([]);
  const [branch, setBranch] = React.useState([]);
  const [whichYear, setWhichYear] = React.useState();
  const [branchElements, setBranchElements] = React.useState([]);
  const [yearElements, setYearElements] = React.useState([]);
  const [show, setShow] = React.useState(false);
  // const [data, setData] = React.useState([{}]);
  // React.useEffect(() => {
  //   axios
  //     .post("http://localhost:8000/api/v1/record/alldata", {})
  //     .then((info) => {
  //       console.log(info)
  //       setData(info.data);
  //     });
  // }, []);

  React.useEffect(() => {
    console.log(data);
    const numberOfYears = [];
    const elements = data.map((myList) =>
      numberOfYears.push(myList.yearOfPassingOut)
    );
    let years = [...new Set(numberOfYears)];
    const tempYearElements = years.map((myList) => (
      <button onClick={() => handleClick(myList)} key={myList}>
        {myList}
      </button>
    ));
    setYearElements(tempYearElements);
  }, [data]);
  function handleClick(params) {
    setWhichYear(params);
  }
  React.useEffect(() => {
    setShow(true);
  }, [yearElements]);

  React.useEffect(() => {
    console.log(whichYear);
    const numberOfBranches = [];
    // let tempData = [];
    const tempElements = data.map((myList) => {
      if (whichYear == myList.yearOfPassingOut) {
        numberOfBranches.push(myList.branch);
      }
    });
    let branches = [...new Set(numberOfBranches)];
    const tempBranchElements = branches.map((myList) => (
      <button onClick={() => handleClick2(myList)}>{myList}</button>
    ));

    setBranchElements(tempBranchElements);
  }, [whichYear]);
  React.useEffect(() => {
    console.log("hello");
    console.log(branchElements);
    setShowBranch(true);
  }, [branchElements]);
  function handleClick2(props) {
    setRoll([]);
    setBranch([]);
    setYear([]);
    setName([]);
    const tempRoll = [];
    const tempYear = [];
    const tempBranch = [];
    const tempName = [];
    const tempContact = [];
    const tempCgpa = [];
    const tempEmail = [];
    const tempElements = data.map((myList) => {
      if (props == myList.branch && myList.yearOfPassingOut == whichYear) {
        tempRoll.push(
          <p key={myList.roll} style={{ listStyle: "none" }}>
            {myList.rollNo}
          </p>
        );
        tempName.push(
          <p key={myList.roll} style={{ listStyle: "none" }}>
            {myList.name}
          </p>
        );
        tempYear.push(
          <p key={myList.roll} style={{ listStyle: "none" }}>
            {myList.yearOfPassingOut}
          </p>
        );
        tempBranch.push(
          <p key={myList.roll} style={{ listStyle: "none" }}>
            {myList.branch}
          </p>
        );
        tempContact.push(
          <p key={myList.roll} style={{ listStyle: "none" }}>
            {myList.contactNo}
          </p>
        );
        tempCgpa.push(
          <p key={myList.roll} style={{ listStyle: "none" }}>
            {myList.CGPA}
          </p>
        );
        tempEmail.push(
          <p key={myList.roll} style={{ listStyle: "none" }}>
            {myList.email}
          </p>
        );
      }
      setBranch(tempBranch);
      setRoll(tempRoll);
      setName(tempName);
      setYear(tempYear);
      setCgpa(tempCgpa);
      setEmail(tempEmail);
      setContact(tempContact);
      setShowData(true);
    });
  }

  return (
    <>
    <section style={{minWidth : '100vw'}}>
      {console.log(yearElements)}
      {setShow && yearElements}
      {showBranch && branchElements}
      {showData && (
        <section className="d-flex justify-content-start align-items-center">
          <div
            className=" d-flex justify-content-center align-items-center"
            style={{
             
              minHeight: "10vh",
              flexDirection: "column",
              border: "1px solid black",
            }}
            id = "rollNumberDiv"
          >
            <p>Roll Number</p>
            {roll}
          </div>
          <div
            className=" d-flex justify-content-center align-items-center"
            style={{
              minHeight: "10vh",
              flexDirection: "column",
              border: "1px solid black",
            }}
          >
            Name
            {name}
          </div>
          <div
            className=" d-flex justify-content-center align-items-center"
            style={{
              minHeight: "10vh",
              flexDirection: "column",
              border: "1px solid black",
            }}
          >
            Year
            {year}
          </div>
          <div
            className=" d-flex justify-content-center align-items-center"
            style={{
              minHeight: "10vh",
              flexDirection: "column",
              border: "1px solid black",
            }}
          >
            Branch
            {branch}
          </div>
          <div
            className=" d-flex justify-content-center align-items-center"
            style={{
              minHeight: "10vh",
              flexDirection: "column",
              border: "1px solid black",
            }}
          >
            Contact{contact}
          </div>
          <div
            className=" d-flex justify-content-center align-items-center"
            style={{
              minHeight: "10vh",
              flexDirection: "column",
              border: "1px solid black",
            }}
          >
            CGPA{cgpa}
          </div>
          <div
            className=" d-flex justify-content-center align-items-center"
            style={{
              minHeight: "10vh",
              flexDirection: "column",
              border: "1px solid black",
            }}
          >
            Email{email}
          </div>
        </section>
      )}
      </section>
    </>
  );
}
