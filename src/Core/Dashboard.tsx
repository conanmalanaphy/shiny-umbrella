/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core'
import { Row, Col } from 'antd';
import Header from './Header';
import BasicBreadcrumb from './BreadCrumb';
import HighchartsReact from 'highcharts-react-official';
import PieChart from '../ChartComponents/PieChart';
import ColumnChart from '../ChartComponents/ColumnChart';
import LineChart from '../ChartComponents/LineChart';
import BarChart from '../ChartComponents/BarChart';

/////////////////////////////////////
///          CSS Styles           ///
/////////////////////////////////////
const wrapper = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 3% 7% 45% 45%;
  grid-template-areas:
                    "breadcrumb   breadcrumb   breadcrumb"
                    "header   header   header"
                    "columnChart     pieChart     barChart"
                    "lineChart   lineChart   lineChart";
	background-color: #fff;
	color: #444;
`
const breadcrumb = css`
  grid-area: breadcrumb;
  padding: 5px 0px 30px 20px;
`
const header = css`
  grid-area: header;
  padding: 5px 0px 30px 20px;
`
const columnChart = css`
  grid-area: columnChart;
`
const pieChart = css`
  grid-area: pieChart;
`
const barChart = css`
  grid-area: barChart;
`
const lineChart = css`
  grid-area: lineChart;
`
class Dashboard extends React.Component<HighchartsReact.Props>{
    render() {
        return(
            <div>
            <div css={wrapper}>
                <div css={breadcrumb}>
                    <BasicBreadcrumb />
                </div>
                <div css={header} >
                    <Header />
                </div>
                <div css={columnChart}>
                    <ColumnChart />
                </div>
                <div css={pieChart}>
                    <PieChart props={this.props} />
                </div>
                <div css={barChart}>
                    <BarChart />
                </div>
                <div css={lineChart}>
                    <LineChart />
                </div>
            </div>
      </div>
    );
  }
}
  export default Dashboard;