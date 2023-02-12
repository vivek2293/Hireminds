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
                    <p>{myList.companyName}</p>
                  );
                }

              });
              setPastRecuriters(tempElements);
        }
    },[companies])
  return (
    <>
        <h3 className='ms-3'>Past Recruiters:</h3>
        <div className='card p-3'>
        {PastRecruiter}

        </div>

    </>
  )
}

export default PastRecruiter