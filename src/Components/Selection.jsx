import React from "react";
import axios from "axios";

function Selection() {
  //States to store Data's
  const [token, setToken] = React.useState();
  const [data, setData] = React.useState();
  const [elements, setElements] = React.useState();
  const [ids, setIds] = React.useState([]);


  //Renders when page is loaded
  React.useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      window.alert("unauthorized")
      window.location.href = "/"
    }
    setToken(user);
  }, []);

  //After token is set, that is after we validate that user is authorized, following useEffect will be triggered
  React.useEffect(() => {
    if (token) {
      axios
        .post(
          "http://localhost:8000/api/v1/interaction/renderShortlistedCandidate",
          { token }
        )
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);


  //if student is selected by company, we change its status to true and rerender page, if not selected, changing status to false
  function handleSelect(props, checked) {
    if (checked) {
      iterate2(props);
    } else {
      iterate3(props);
    }
  }

  //sets select status of particular student(id passed in props) to true

  function iterate2(props) {
    for (var i in data) {
      if (data[i]._id == props) {
        data[i].isSelected = true;
      }
    }
    iterate();
  }
  //sets select status of particular student(id passed in props) to false
  function iterate3(props) {
    for (var i in data) {
      if (data[i]._id == props) {
        data[i].isSelected = false;
      }
    }
    iterate();
  }
//this function sets the salary of individual person
  function handleClick(props){
    const d = new Date();
    let year1 = d.getFullYear();
    const val = document.getElementById(props).value
    const tempData = {
      id: props,
      salary: val,
      year: year1
    }
    ids.push(tempData);
  }

  // after company completes loging data of all students, this function will be triggered and status of students will be changed in databases
  function handleComplete(){
    const notSelected = [];
    for (var i in data) {
      if (data[i].isSelected == false) {
        notSelected.push({ "id": data[i]._id });
      }
    }
    const finalData = {
      selected: ids,
      rejected: notSelected,
      token: token
    }
    console.log("hello")
    console.log(finalData)
    axios
        .post(
          "http://localhost:8000/api/v1/interaction/selectedCandidate",
           finalData 
        )
        .then((res) => {
          console.log("success");
          window.alert("Thank you, we have updated status of selected students")
        })
        .catch((err) => {
          console.log(err);
        });


  }

//renders data  in table
  function iterate() {
    const elements1 = data.map((items) => (
      <tr key={items.rollNo}>
        <td>{items.rollNo}</td>
        <td>{items.name}</td>
        <td>{items.branch}</td>
        <td>{items.gender}</td>
        <td>{items.CGPA}</td>
        <td style={{ padding: "20px" }}>{items.email}</td>
        <td>{items.contactNo}</td>
        <td>{items.linkedIn}</td>
        <td>{items.interviewDate}</td>
        <td>{items.interviewTiming}</td>
        <td>{items.resumeLink}</td>
        <td>
          <input
            type="checkbox"
            value={items._id}
            onChange={(e) => handleSelect(e.target.value, e.target.checked)}
          ></input>
        </td>

        {items.isSelected && (
          <>
            <td>
              <input
                type="number"
                placeholder="Salary Offered"
                id={items._id}
              ></input>
            </td>
            <td>
              <button onClick={() => handleClick(items._id)}>Submit</button>
            </td>
          </>
        )}
      </tr>
    ));
    setElements(elements1);
  }



//As soon as we fetch data, we render it
  React.useEffect(() => {
    if (data) {
      iterate();
    }
  }, [data]);

  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100vw",
        flexDirection: "column",
        backgroundColor: "rgb(242, 237, 243)",
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <div>
        <h3 style={{ color: "rgb(120,123,206)" }}>
          List of Shortlisted Students :{" "}
        </h3>

        <table className="my-3">
          <thead style={{ width: "100%", border: "1px solid black" }}>
            <tr>
              <th style={{ border: "1px solid black" }}>Roll number</th>
              <th style={{ border: "1px solid black" }}>Name</th>
              <th style={{ border: "1px solid black" }}>branch</th>
              <th style={{ border: "1px solid black" }}>gender</th>
              <th style={{ border: "1px solid black" }}>CGPA</th>
              <th style={{ border: "1px solid black" }}>Email</th>
              <th style={{ border: "1px solid black" }}>Contact</th>
              <th style={{ border: "1px solid black" }}>linkedIn</th>
              <th style={{ border: "1px solid black" }}>Interview Date</th>
              <th style={{ border: "1px solid black" }}>Interview Timing</th>
              <th style={{ border: "1px solid black" }}>Resume</th>
              <th style={{ border: "1px solid black" }}>Hired?</th>
            </tr>
          </thead>
          <tbody>{elements}</tbody>
        </table>
        <div className="d-flex justify-content-center align-items-center">
        <button onClick={handleComplete} className='btn btn-custom1 p-1 mt-2'>Complete</button>
        </div>
      </div>
    </section>
  );
}

export default Selection;
