import React from 'react'

function CheckStatus() {
    const [companyName, setCompanyName] = React.useState();
    function handleClick(){
        console.log(companyName);
    }
  return (
    <>
        <div className="d-flex justify-content-center align-items-center" style={{ flexDirection: "column" }}>
                    <div className="heading-div d-flex justify-content-center pt-2 pb-2 my-1">
                        <h4>Check Status</h4>
                    </div>
                    <label className="" htmlFor="Companyfield">Enter company name:</label>
                    <div className="">
                        <input
                            type="text"
                            id="Companyfield"
                            placeholder="Company Name"
                            name="companyName"
                            onChange={(e)=>setCompanyName(e.target.value)}
                            className="my-1 p-1"
                        />
                    </div>
                </div>
                <div className="btn-div d-flex justify-content-center" id="btn-div">
                    <button type="submit" className="btn btn-custom1 p-1 my-1" onClick={handleClick}>Submit</button>
                </div>
    </>
  )
}

export default CheckStatus