import React from 'react'
import axios from "axios";

function PastRecruiter() {

  // States are declared for the incoming data from backend

  const [companies, setCompanies] = React.useState();
  const [PastRecruiter, setPastRecuriters] = React.useState();

  // This hook is basically used to prevent website to re-render and render only when a particular state/field is varied hence contributing in overall performance of website, usually whenever an API call is made or when ever any external thing is imported then useEffect hook is used for the benefits stated above.

  // In the below hook the data is being posted to the dedicated route and that same data is stored in companies state as well and in the below one, all the data which was fetched is now stored in variable named tempElements through mapping which is then rendered on the scree.

  React.useEffect(() => {
    axios.post("http://localhost:8000/api/v1/company/getAllCompanyname")
      .then((res) => {
        console.log("Sent");
        setCompanies(res.data)
      }).catch((err) => {
        console.log(err);
      })
  }, [])

  React.useEffect(() => {
    if (companies) {
      const tempElements = companies.map((myList) => {
        if (myList.companyName) {
          return (
            <div className='card col-4 d-flex justify-content-center align-items-center' style={{ height: '10vh' }}><h5>{myList.companyName}</h5></div>
          );
        }

      });
      setPastRecuriters(tempElements);
    }
  }, [companies])

  // It returns the structure of this particular page
  
  return (
    <>
      <h3 className='ms-3'>Past Recruiters:</h3>
      <div className='row p-3 d-flex justify-content-start align-items-center' style={{ flexDirection: 'row' }}>
        {PastRecruiter}
        <div className='card col-4 d-flex justify-content-center align-items-center' style={{ height: '10vh' }}><h5>Bibek Sir</h5></div>
        <div className='card col-4 d-flex justify-content-center align-items-center' style={{ height: '10vh' }}><h5>Bibek Sir</h5></div>
      </div>

    </>
  )
}

export default PastRecruiter