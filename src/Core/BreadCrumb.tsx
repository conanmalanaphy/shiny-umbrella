import React from 'React'

import { Breadcrumb } from 'antd'

const BasicBreadcrumb: React.FunctionComponent = () => (
    <div>
        <Breadcrumb style={{ float: 'left' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
    </div>
)

export default BasicBreadcrumb
