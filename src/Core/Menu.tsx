import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import '../App.css'

const BasicMenu: React.FunctionComponent = () => (
    <div>
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px', width: '100%', textAlign: 'center' }}
        >
            <Menu.Item key="2">
                <Link to="/learnt">Learnt</Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link to="/">
                    <div id="img_box" className="menu-center" />
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/my-things">My Things</Link>
            </Menu.Item>
        </Menu>
    </div>
)

export default BasicMenu
