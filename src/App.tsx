/** @jsx jsx */
import { Select} from 'antd';
const { Option } = Select;
import React,{Suspense,useState,lazy} from 'react';
import { css, jsx } from '@emotion/core'
import './App.css';
import BasicMenu from './Core/Menu';
import Dashboard from './Core/Dashboard';
import InitialComboBox from './Core/InitialComboBox';
const  ComboBox = lazy(() => import('./Core/ComboBox'));

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
    <div>
      <div css={wrapper}>
        <div css={basicMenu}>
            <BasicMenu/>
        </div>
        <div css={dashboard}>
      <InitialComboBox onCdange ={() => setCount(count + 1)}/>
        </div>
        {count > 2 &&
        <div css={comboBox2}>
          <Suspense fallback={<div>Loading...</div>}>
              <ComboBox multiple="default" value = {count+1} />
          </Suspense>
        </div>}
        
      </div>
    </div>
  );
  };
export default App;
