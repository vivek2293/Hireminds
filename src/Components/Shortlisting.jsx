import React from "react";
import axios from "axios";
import "./CSS/Shortlisting.css";

function Shortlisting() {

  // Made states for all the entries in the form

  const [data, setData] = React.useState();
  const [date, setDate] = React.useState();
  const [time, setTime] = React.useState();
  const [Ids, setIds] = React.useState([]);
  const [elements, setElements] = React.useState();
  const [selected, setSelected] = React.useState({
    ids: "",
    time: "",
    date: "",
    token: "",
    rejected: "",
  });

  // This hook is basically used to prevent website to re-render and render only when a particular state/field is varied hence contributing in overall performance of website

  // Inside this hook, first of all the token is being extracted from the url which is very crucial as with the help of this token only company will be able to see the shortlisted candidates, this extracted toke is then posted on pre defined route and the response to this token is being saved or set to state name "data"

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    console.log(token);
    axios
      .post("http://localhost:8000/api/v1/interaction/renderEligible", {
        token,
      })
      .then((res) => {
        console.log("Sent");
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // The following function is triggered when there is change in checkbox, this function has 2 parameters. It basically stores the id of the data if checkbox is checked

  function handleSelect(prop, checked) {
    if (checked) {
      const tempData = Ids;
      tempData.push(prop);
      setIds(tempData);
    } else {
      console.log(prop);
      const index = Ids.indexOf(prop);
      const x = Ids.splice(index, 1);
    }
  }

  //If state named "data" is non empty then only data is mapped over and all the essential info is stored in var named "elements1", which is then used to another state and it is re-rendered only when data is altered

  React.useEffect(() => {
    if (data) {
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
          <td>{items.github}</td>
          <td>{items.resumeLink}</td>
          <td>
            <input
              type="checkbox"
              value={items._id}
              onChange={(e) => handleSelect(e.target.value, e.target.checked)}
            ></input>
          </td>
        </tr>
      ));
      setElements(elements1);
    }
  }, [data]);

  // The following function is triggered when the form is submitted and as described above that first token is extracted from url and then for loop is used to traverse "data" and if any particular element does not contain "Ids" then it is stored in an array named "rejected". The desried data is then stored in state named "selected" and then posted on a particular route and in response if token is defined or unaltered then it is stored in local storage and user is redirected to further location otherwise error is thrown

  function handleClick() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const rejected = [];
    for (var i in data) {
      if (!Ids.includes(data[i]._id)) {
        rejected.push(data[i]._id);
      }
    }
    selected.ids = Ids;
    selected.time = time;
    selected.date = date;
    selected.token = token;
    selected.rejected = rejected;

    axios
      .post(
        "http://localhost:8000/api/v1/interaction/shortlistedCandidate",
        selected
      )
      .then((res) => {
        if (typeof res.data.token !== "undefined")
          localStorage.setItem("user", res.data.token);
        window.location.href = "/selection";
      })
      .catch((err) => {
        window.alert(err);
      });
  }

  // It returns the structure of this particular page

  return (
    <>
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
                <th style={{ border: "1px solid black" }}>github</th>
                <th style={{ border: "1px solid black" }}>Resume</th>
                <th style={{ border: "1px solid black" }}>Selected?</th>
              </tr>
            </thead>
            <tbody>{elements}</tbody>
          </table>
        </div>
        <div
          className="my-3 d-flex justify-content-center align-items-center"
          style={{ flexDirection: "column" }}
        >
          <label>Please Scheduled Interview Rounds</label>
          <input
            type="date"
            min="2018-01-01"
            max="2050"
            onChange={(e) => setDate(e.target.value)}
            required
            className="my-3"
          ></input>
          <label>Start time : </label>
          <input
            type="time"
            min="09:00"
            max="18:00"
            required
            onChange={(e) => setTime(e.target.value)}
            className="my-3"
          ></input>
        </div>
        <button onClick={handleClick}>Submit</button>
      </section>
    </>
  );
}

export default Shortlisting;
