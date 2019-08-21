/** @jsx jsx */
import { Select} from 'antd';
const { Option } = Select;
import React,{useState} from 'react';
import { css, jsx } from '@emotion/core'
import './App.css';
import BasicMenu from './Core/Menu';
import Dashboard from './Core/Dashboard';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import InitialComboBox from './Core/InitialComboBox';
import  ComboBox  from './Core/ComboBox';

/////////////////////////////////////
///          CSS Styles           ///
/////////////////////////////////////
const wrapper = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 700px 100px;
  grid-template-areas:
                      "basicMenu   basicMenu   basicMenu"
                       "dashboard     comboBox     comboBox2"
                       "footer   footer   footer";
	background-color: #fff;
	color: #444;
`
const basicMenu = css`
  grid-area: basicMenu;
`
const dashboard = css`
  grid-area: dashboard;
  display: inline-block;
`
const comboBox = css`
  grid-area: comboBox;
`
const comboBox2 = css`
  grid-area: comboBox2;
`



function App() {
  const [count, setCount] = useState(0);
  return (
    <Router>
    <div>
      <div css={wrapper}>
        <div css={basicMenu}>
            <BasicMenu/>
        </div>
        <div css={dashboard}>
        <Route exact path="/" render={() => <InitialComboBox onCdange ={() => setCount(count + 1)}/>} />
        <Route path="/otherbutton" render={() => <ComboBox multiple="default" value = {count+1}></ComboBox>} />
        <Route path="/otherbutton2" render={() => <ComboBox multiple="default" value = {count+2}></ComboBox>} />
        </div>
        {count > 2 &&
        <div css={comboBox2}>
              <ComboBox multiple="default" value = {count+1} />
        </div>}
        
      </div>
    </div>
    </Router>
  );
  };
export default App;
