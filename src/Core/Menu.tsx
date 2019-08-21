import React from 'react';
import { Menu } from 'antd';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const BasicMenu: React.FunctionComponent = () =>
  (
    <div>    
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px', float: 'left', width:'100%'}}
      >
        <Menu.Item key="1"><Link to="/">Admin</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/otherbutton">Analysis</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/otherbutton2">Risk</Link></Menu.Item>
      </Menu>   
    </div>
  );

export default BasicMenu;
