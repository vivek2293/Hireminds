import React from "react";
import ReactApexChart from "react-apexcharts";
import dummy from "./Dummy";

export default function Exgraph() {
    const [yrbtn, setYrbtn] = React.useState(false);
    const [branchbtn, setBranchbtn] = React.useState(false);

    function yearwise() {
        setYrbtn(true);
    }

    function branchwise() {
        setBranchbtn(true);
    }

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

    const year = [];
    const avg = [];
    const max = [];
    const branch = [];

    dummy.map(item => {
        year.push(item.year);
        avg.push(item.avg);
        max.push(item.max);
        branch.push(item.branch);
    })

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
                }
            ],
            options: {
                xaxis: {
                    categories: year
                }
            }
        })
    }, [])

    const [brData, setBrData] = React.useState({
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
        setBrData({
            series: [
                {
                    name: "&nbsp Avg &nbsp &nbsp",
                    data: avg
                },
                {
                    name: "&nbsp Max &nbsp &nbsp",
                    data: max
                }
            ],
            options: {
                xaxis: {
                    categories: branch
                }
            }
        })
    }, [])

    return (
        <div className="charts">
            <h3 className='ms-3 mb-5'>Past Year's Placement Statistics:</h3>

            <div className="graph-render-div">
                <button onClick={yearwise}>Year-wise Stats</button>
                <button onClick={branchwise}>Branch-wise Stats</button>
            </div>

            {/* {yrbtn && <ReactApexChart
                options={data.options}
                series={data.series}
                type="bar"
                height={430} />} */}

            {branchbtn && <ReactApexChart
                options={brData.options}
                series={brData.series}
                type="bar"
                height={430} />}

        </div>
    )
}