import React from "react";
import axios from "axios";

function Selection() {
  const [token, setToken] = React.useState();
  const [data, setData] = React.useState();
  const [elements, setElements] = React.useState();
  const [ids, setIds] = React.useState([]);
  React.useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      window.alert("unauthorized")
      window.location.href = "/"
    }
    setToken(user);
  }, []);
  React.useEffect(() => {
    if (token) {
      console.log(token);
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
  function handleSelect(props, checked) {
    if (checked) {
      iterate2(props);
    } else {
      iterate3(props);
    }
  }
  function iterate2(props) {
    for (var i in data) {
      if (data[i]._id == props) {
        data[i].isSelected = true;
      }
    }
    iterate();
  }
  function iterate3(props) {
    for (var i in data) {
      if (data[i]._id == props) {
        data[i].isSelected = false;
      }
    }
    iterate();
  }

  function handleClick(props){
    const d = new Date();
    let year1 = d.getFullYear();
      const val = document.getElementById(props).value
      const tempData = {
        id : props,
        salary : val,
        year : year1
      }
      ids.push(tempData);
  }
  function handleComplete(){
    const notSelected = [];
    for(var i in data){
      if(data[i].isSelected == false){
        notSelected.push(data[i]._id);
      }
    }
    
    const finalData = {
       selected : ids,
       rejected: notSelected,
    }
    console.log("hello")
    console.log(finalData)

  }
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
              <button onClick={()=>handleClick(items._id)}>Submit</button>
            </td>
          </>
        )}
      </tr>
    ));
    setElements(elements1);
  }
  React.useEffect(() => {
    if (data) {
      console.log(data);
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
        <button onClick={handleComplete} className='btn btn-custom1 p-1 mt-2'>Complete</button>
      </div>
    </section>
  );
}

export default Selection;
