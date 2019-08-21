import React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const dataSeries: any = [{
  name: 'John',
  data: [5, 3, 4, 7, 2]
}, {
  name: 'Jane',
  data: [2, -2, -3, 2, 1]
}, {
  name: 'Joe',
  data: [3, 4, 4, -2, 5]
}];
const options: Highcharts.Options = {
  chart: {
    type: 'column'
},
title: {
    text: 'Column chart with negative values'
},
xAxis: {
    categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
},
credits: {
    enabled: false
},
series: dataSeries
};

function ColumnChart(props: HighchartsReact.Props) {
    return(
      <div className="App">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          {...props}
        /> 
      </div>
    );
  }
  
  export default ColumnChart;