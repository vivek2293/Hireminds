import React from 'react'
import axios from "axios";

function PastRecruiter() {
    const [companies, setCompanies] = React.useState();
    const [PastRecruiter,setPastRecuriters] = React.useState();
    React.useEffect(()=>{
        axios.post("http://localhost:8000/api/v1/company/getAllCompanyname")
        .then((res) => {
            console.log("Sent");
            console.log(res.data);
            setCompanies(res.data)
        }).catch((err) => {
            console.log(err);
        })
    },[])
    React.useEffect(()=>{
        if(companies){
            const tempElements = companies.map((myList) => {
                if (myList.companyName) {
                  return (
                    <div className='card col-4 d-flex justify-content-center align-items-center' style={{height: '10vh'}}><h5>{myList.companyName}</h5></div>
                  );
                }

              });
              setPastRecuriters(tempElements);
        }
    },[companies])
  return (
    <>
        <h3 className='ms-3'>Past Recruiters:</h3>
        <div className='row p-3 d-flex justify-content-start align-items-center' style={{flexDirection : 'row'}}>
        {PastRecruiter}
        <div className='card col-4 d-flex justify-content-center align-items-center' style={{height: '10vh'}}><h5>Bibek Sir</h5></div>
        <div className='card col-4 d-flex justify-content-center align-items-center' style={{height: '10vh'}}><h5>Bibek Sir</h5></div>




        </div>

    </>
  )
}

export default PastRecruiter