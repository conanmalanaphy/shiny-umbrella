import React from 'react'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const dataSeries: any = [
    { name: '#0061a2', y: 161, color: '#0061a2', sliced: true, selected: true },
    { name: '#66cc00', y: 315, color: '#66cc00' },
    { name: '#b6121b', y: 536, color: '#b6121b' },
]
const options: Highcharts.Options = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
    },
    credits: {
        enabled: false,
    },
    title: {
        text: '',
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
            },
            showInLegend: false,
        },
    },
    series: [
        {
            name: 'Consumed',
            colorByPoint: true,
            data: dataSeries,
            type: 'pie',
        },
    ],
}

function PieChart(props: HighchartsReact.Props) {
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

export default PieChart
