import React from 'react'
import Menu from 'antd/lib/menu'
import 'antd/lib/menu/style/index.css'

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
                <Link to="/WhatsThePlan" style={{ textDecoration: 'none' }}>
                    What&apos;s the plan
                </Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link to="/">
                    <div id="img_box" className="menu-center" />
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/WhatsTheRating" style={{ textDecoration: 'none' }}>
                    What&apos;s the Rating
                </Link>
            </Menu.Item>
        </Menu>
        <div style={{ textAlign: 'right' }}>linkedin </div>
    </div>
)

export default BasicMenu
