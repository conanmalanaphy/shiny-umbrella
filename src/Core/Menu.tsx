import React from 'react';
import { Menu } from 'antd';

const BasicMenu: React.FunctionComponent = () =>
  (
    <div>    
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px', float: 'left', width:'100%'}}
      >
        <Menu.Item key="1">Admin</Menu.Item>
        <Menu.Item key="2">Analysis</Menu.Item>
        <Menu.Item key="3">Risk</Menu.Item>
      </Menu>   
    </div>
  );

export default BasicMenu;
