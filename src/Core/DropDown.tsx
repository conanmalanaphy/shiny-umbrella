import React from 'React'
import Menu from 'antd/lib/menu'
import Dropdown from 'antd/lib/dropdown'
import 'antd/lib/menu/style/index.css'
import 'antd/lib/dropdown/style/index.css'

const menu = (
    <Menu>
        <Menu.Item>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.alipay.com/"
            >
                Portfolio settings
            </a>
        </Menu.Item>
        <Menu.Item>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.taobao.com/"
            >
                Share
            </a>
        </Menu.Item>
        <Menu.Item>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.tmall.com/"
            >
                Clone
            </a>
        </Menu.Item>
    </Menu>
)

const DropDown: React.FunctionComponent = () => (
    <div>
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
                Settings
            </a>
        </Dropdown>
    </div>
)

export default DropDown
