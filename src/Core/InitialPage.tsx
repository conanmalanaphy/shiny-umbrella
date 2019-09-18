/** @jsx jsx */
import React from 'react';
import { Input,Button } from 'antd';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { css, jsx } from '@emotion/core'

/////////////////////////////////////
///          CSS Styles           ///
/////////////////////////////////////
const wrapper = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 300px 300px 300px;
  grid-template-areas:
                      "box1   box2   box3";
	background-color: #fff;
  color: #444;
  width:100%;
`
const box1 = css`
 padding: 20px;
  grid-area: box1;
`
const box2 = css`
  grid-area: box2;
  display: inline-block;
 padding: 20px;
`
const box3 = css`
  grid-area: box3;
 padding: 20px;
`
const sayHello = function() {

}
const pStyle = {
  width:'90%',
  color:'black',
  'background-color':'#001628',
  border: '2px solid black',
  'border-radius': '5px',
  padding:'10px',
  '-moz-box-shadow':    '3px 3px 5px 6px #ccc',
  '-webkit-box-shadow': '3px 3px 5px 6px #ccc',
  'box-shadow':         '3px 3px 5px 6px #ccc'
};

const dStyle = {
  width:'100%',
  color:'black',
  'background-color':'#C4C4C4',
  border: '1px solid black',
  'border-radius': '5px',
  padding:'5px'
};

const InitialPage: React.FunctionComponent = () =>
  (
    <div>      
     <div className="parallax"></div>

      <div className="bob" css={wrapper}>
      <div css={box1}> <div style={pStyle}> <div style={dStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing</div></div></div>
      <div css={box2}> <div style={pStyle}> <div style={dStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing</div></div></div>
      <div css={box3}><div style={pStyle}> <div style={dStyle}> Lorem ipsum dolor sit amet, consectetur adipiscing</div>      </div></div>
      </div>     
      <button onClick={sayHello}>
      Click me!
    </button>
    </div>
  );

export default InitialPage;
