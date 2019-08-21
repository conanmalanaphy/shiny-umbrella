import React from 'react';
import { Menu ,Dropdown} from 'antd';

const menu = (
<Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        Portfolio settings
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Share
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Clone
      </a>
    </Menu.Item>
  </Menu>
);

const DropDown: React.FunctionComponent = () =>
  (
    <div>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            Settings 
          </a>
        </Dropdown>
    </div>
  );


export default DropDown;
