import React from 'react'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const dataSeries: any = [
    {
        name: 'Year 1800',
        data: [107, 31, 635, 203, 2],
    },
    {
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6],
    },
    {
        name: 'Year 2000',
        data: [814, 841, 3714, 727, 31],
    },
    {
        name: 'Year 2016',
        data: [1216, 1001, 4436, 738, 40],
    },
]
const options: Highcharts.Options = {
    chart: {
        type: 'bar',
    },
    tooltip: {
        valueSuffix: ' millions',
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
            },
        },
        // Define options specific to bar charts
        bar: {
            animation: false,
            minPointLength: 2,
            borderWidth: 0,
        },
    },
    xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
        title: {
            text: null,
        },
        type: 'category',
        lineWidth: 0,
        lineColor: '#999',
        tickLength: 0,
        // This is to prevent bar from appearing as 'chunky'. If there are less than 4
        // categories, some artificial points will be added on both sides of the vertical axis
        // to span from 0 to 3.
        minRange: 3,
    },
    // Configure the Y Axis (the horizontal one).
    yAxis: {
        min: 0,
        labels: {
            overflow: 'justify',
        },
        lineWidth: 1,
        lineColor: '#999',
        gridLineWidth: 0,
        tickLength: 5,
        plotLines: [
            {
                color: '#999',
                width: 1,
                value: 0,
            },
        ],
    },
    credits: {
        enabled: false,
    },
    series: dataSeries,
}

function BarChart(props: HighchartsReact.Props) {
    return (
        <div className="App">
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                {...props}
            />
        </div>
    )
}

export default BarChart
