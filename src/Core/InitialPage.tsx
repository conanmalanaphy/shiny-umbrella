/** @jsx jsx */
import React, { Component }  from 'react';
import { Input,Button } from 'antd';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { css, jsx } from '@emotion/core'
import * as _ from 'underscore';

/////////////////////////////////////
///          CSS Styles           ///
/////////////////////////////////////
const wrapper = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 300px 300px 300px;
  grid-template-areas:
                      "box1   box2   box3"
                      "box4 box4 box4";
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

const box4 = css`
  grid-area: box4;
 padding: 20px;
`
const sayHello = function() {

}
const pStyle = {
  width:'90%',
  color:'black',
  'backgroundColor':'#001628',
  border: '2px solid black',
  'borderRadius': '5px',
  padding:'10px',
  'MozBoxShadow':    '10px 10px 5px #888',
  'WebkitBoxShadow': '10px 10px 5px #888',
  'boxShadow':         '10px 10px 5px #888'
};

const dStyle = {
  width:'100%',
  color:'black',
  'backgroundColor':'#C4C4C4',
  border: '1px solid black',
  'borderRadius': '5px',
  padding:'5px',
  textAlign: 'center'
};


class InitialPage extends Component {
  public state:any = [];
  constructor(props:any) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    fetch('http://www.mocky.io/v2/5d87d3b134000041870a15c0')
      .then(response => response.json())
      .then(data => this.state = data);
  }

  render() {
        return (
      <div>   
         
      <div className="parallax"></div>
 
       <div className="bob" css={wrapper}>
       <div css={box1}> <div style={pStyle}> <div style={dStyle}>Conan</div></div></div>
       <div css={box2}> <div style={pStyle}> <div style={dStyle}>Malanaphy</div></div></div>
       <div css={box3}><div style={pStyle}> <div style={dStyle}>2019</div></div></div>
       <div css={box4}> list of listo
       <ul>
<li>Colour palette</li>
<li>create SQL api from front end masters</li>
<li>phone usage</li>
<li>Correct menu routes</li>
<li>Tidy file names</li>
<li>Tidy class names</li>
<li>remove excess code</li>
<li>remove extra photo</li>
<li>remove extra files</li>
<li>webpack minimize file sizes</li>
<li> AIzaSyC2Svf92vLLWXn8QjIwZxp3Qf4v9jcrEdI </li>
<li><h4>Project </h4></li>
<li>Google maps Api Cycle map between 2 routes</li>
<li>Option for maps</li>
<li>Create Npm version for maps</li>




       </ul>
       </div>

       </div>     
       <button onClick={sayHello}>
       Click me!
     </button>
     </div>
    );
  }
};

export default InitialPage;