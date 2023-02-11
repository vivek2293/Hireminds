import React from 'react'
import axios from "axios";

function Selection() {
  const [token,setToken] = React.useState();
  const [data,setData] = React.useState();
  const [elements,setElements] = React.useState();
  React.useEffect(()=>{
    const user = localStorage.getItem("user");
    // if (!user) {
      //   window.alert("unauthorized")
      //   window.location.href = "/"
      // }
      setToken(user);
       
  },[])
  React.useEffect(()=>{
    if(token){
      console.log(token);
      axios.post("http://localhost:8000/api/v1/interaction/renderShortlistedCandidate",  {token} )
      .then((res) => {
          setData(res.data);
      }).catch((err) => {
          console.log(err);
      })
    }
  },[token])
  function handleSelect(){
    
  }
  React.useEffect(()=>{
    if(data){
      // console.log(data)
      const elements1 = data.map((items)=>(
        <tr key = {items.rollNo}>
            <td>{items.rollNo}</td>
            <td>{items.name}</td>
            <td>{items.branch}</td>
            <td>{items.gender}</td>
            <td>{items.CGPA}</td>
            <td style={{padding : '20px'}}>{items.email}</td>
            <td>{items.contactNo}</td>
            <td>{items.linkedIn}</td>
            <td>{items.interviewDate}</td>
            <td>{items.interviewTiming}</td>
            <td>{items.resumeLink}</td>
            <td ><input type="checkbox" value={items._id} onChange = {(e)=>handleSelect(e.target.value)}></input></td>
        </tr>
    ))
    setElements(elements1)
    }
  },[data])




  return (
    <section style={{minHeight:'100vh', width: '100vw', flexDirection : 'column', backgroundColor: 'rgb(242, 237, 243)' }} className="d-flex justify-content-center align-items-center">
    <div>
     <h3 style={{ color: 'rgb(120,123,206)' }}>List of Shortlisted Students  : </h3>
 
     <table className='my-3'>
         <thead style={{width : '100%', border:'1px solid black'}}>
             <tr>
                 <th style={{border:'1px solid black'}} >Roll number</th>
                 <th style={{border:'1px solid black'}}>Name</th>
                 <th style={{border:'1px solid black'}}>branch</th>
                 <th style={{border:'1px solid black'}}>gender</th>
                 <th style={{border:'1px solid black'}}>CGPA</th>
                 <th style={{border:'1px solid black'}} >Email</th>
                 <th style={{border:'1px solid black'}}>Contact</th>
                 <th style={{border:'1px solid black'}}>linkedIn</th>
                 <th style={{border:'1px solid black'}} >Interview Date</th>
                 <th style={{border:'1px solid black'}} >Interview Timing</th>
                 <th style={{border:'1px solid black'}}>Resume</th>
                 <th style={{border:'1px solid black'}}>Hired?</th>

             </tr>
         </thead>
         <tbody>
             {elements}
         </tbody>
 
     </table>
     </div>
     {/* <div className='my-3 d-flex justify-content-center align-items-center' style={{flexDirection: 'column'}}>
     <label>Please Scheduled Interview Rounds</label><input type="date" min="2018-01-01" max = "2050" onChange={(e)=>setDate(e.target.value)} required className='my-3'></input>
     <label>Start time : </label><input type="time"
        min="09:00" max="18:00" required onChange={(e) => setTime(e.target.value)} className="my-3"></input>
     </div>
     <button onClick={handleClick}>Submit</button> */}
     </section>
  )
}

export default Selection