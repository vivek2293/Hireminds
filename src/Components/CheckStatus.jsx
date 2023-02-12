import React from "react";
import axios from "axios";
function CheckStatus() {
  const [companyName, setCompanyName] = React.useState();
  const [data, setData] = React.useState();
  const [show, setShow] = React.useState();
  const [elements,setElements] = React.useState();
  function handleClick() {
    console.log(companyName);
    axios
      .post(
        "http://localhost:8000/api/v1/interaction/getCurrentStatusCompany",
        { companyName }
      )
      .then((res) => {
        console.log("Sent");
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  React.useEffect(() => {
    if (data) {
    //   setShow(true);
    //   for(var i in data){
    //     const tempdata = [];
        
    //   }
    const element = data.map((myList) => (
        <tr>
            <td>{myList.name}</td>
            <td>{myList.branch}</td>
            <td>{myList.rollNo}</td>
            <td>{myList.currentStatus}</td>
            <td>{myList.yearOfPassingOut}</td>
            <td>{myList.interviewDate}</td>

        </tr>
    ))
    setElements(element);
    }
  }, [data]);
  React.useEffect(()=>{
    
    if(elements){
        console.log("came herer")
        console.log(elements)
        setShow(true);
    }
  },[elements])
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ flexDirection: "column" }}
      >
        <div className="heading-div d-flex justify-content-center pt-2 pb-2 my-1">
          <h4>Check Status</h4>
        </div>
        <label className="" htmlFor="Companyfield">
          Enter company name:
        </label>
        <div className="">
          <input
            type="text"
            id="Companyfield"
            placeholder="Company Name"
            name="companyName"
            onChange={(e) => setCompanyName(e.target.value)}
            className="my-1 p-1"
          />
        </div>
      </div>
      <div className="btn-div d-flex justify-content-center" id="btn-div">
        <button
          type="submit"
          className="btn btn-custom1 p-1 my-1"
          onClick={handleClick}
        >
          Submit
        </button>
        
      </div>
      <div className="d-flex justify-content-center">
      {show &&(
            <table>
                <tr>
                    <th>Name</th>
                    <th>Branch</th>
                    <th>RollNo</th>
                    <th>currentStatus</th>
                    <th>Year Of Passing Out</th>
                    <th>Interview DAte</th>
                </tr>
                    {elements}
            </table>
        )}
        </div>
    </>
  );
}

export default CheckStatus;
