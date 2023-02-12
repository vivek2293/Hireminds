import React from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

export default function Exgraph() {
    const [yrbtn, setYrbtn] = React.useState(false);
    const [done,setDone] = React.useState(false);
    const [data1,setData1] = React.useState();
    const [tempData, setTempData] = React.useState();
    React.useEffect(()=>{
        axios.post("http://localhost:8000/api/v1/record/getPlacementData",{})
        .then((res) => {
            console.log("Sent");
            setData1(res.data.info);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    const [year,setYear] = React.useState([]);
    const [avg,setAvg] = React.useState([]);
    const [max,setMax] = React.useState([]);
    // const [students,setStudents] = React.useState();
    React.useEffect(()=>{
        if(data1){
        console.log(data1);
        for(var i in data1){
            year.push(data1[i].year);
            var average = (data1[i].value.ctc) / (data1[i].value.total);
            avg.push(average);
            max.push(data1[i].value.max);
            // students.push(data[i].value.total);
        }
        setDone(true);
    }
    },[data1])
    const [data, setData] = React.useState({
        series: [
            {
                name: "",
                data: []
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
            }, chart: {
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
                categories: [],
            },
        },
    });
 


    

    React.useEffect(() => {
        setData({
            series: [
                {
                    name: "&nbsp Avg &nbsp &nbsp",
                    data: avg
                },
                {
                    name: "&nbsp Max &nbsp &nbsp",
                    data: max
                },
                // {
                //     name: "&nbsp Total Students &nbsp &nbsp",
                //     data: students
                // }
            ],
            options: {
                xaxis: {
                    categories: year
                }
            }
        })
    }, [done])
    React.useEffect(()=>{
        if(data){
            console.log("cameherer")
            console.log(data);
        setYrbtn(true);
        }
    },[data])




    return (
        <div className="charts">
            <h3 className='ms-3 mb-5'>Past Year's Placement Statistics:</h3>
            {yrbtn && <ReactApexChart
                options={data.options}
                series={data.series}
                type="bar"
                height={430} />}
        </div>
    )
}