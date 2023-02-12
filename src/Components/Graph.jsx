import React from 'react'
import ReactApexChart from "react-apexcharts";
import axios from "axios";


function Graph() {
  
  React.useEffect(()=>{
    axios.post("http://localhost:8000/api/v1/record/getPlacementData",{})
    .then((res) => {
        console.log("Sent");
        console.log(res)
    }).catch((err) => {
        console.log(err);
    })
  },[])
  //store sepereate datas in seperate states and just render them
  const [example,setExample]=React.useState({
    series: [{
      name: "&nbsp; Highest &nbsp; &nbsp;",
      data: [44, 55, 41, 64, 22, 43, 21],
      color: '#6F42C1'
    }, {
      name: "&nbsp; Average &nbsp; &nbsp;",
      data: [53, 32, 33, 52, 13, 44, 32],
      color: '#007BFF'
    }, {
      name: "&nbsp; No. of Students Applied &nbsp; &nbsp;",
      data: [50, 3, 23, 25, 53, 94, 30],
      color:'#00CCCC'
    }
  ],
    options: {
      chart: {
        type: 'bar',
        height: 430
      },
      plotOptions: {
        bar: {
          vertical: true,
          dataLabels: {
            position: 'top',
          },
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff']
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
      },
      tooltip: {
        shared: true,
        intersect: false
      },
      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
      },
    },
  });


  return (
    <>
      <h3 className='ms-3'>Past Year's Placement Statistics:</h3>

      <ReactApexChart 
      options={example.options} 
      series={example.series} 
      type="bar" 
      height={430} />
    </>
  )
}

export default Graph;
