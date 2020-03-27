import React from 'react'
import { Select } from 'antd'
import 'antd/dist/antd.css'
const { Option } = Select

interface Map {
    id: number
    name: string
}
interface SelectOptions {
    multiple: string
    value: Map[]
}

/////////////////////////////////////
///          CSS Styles           ///
/////////////////////////////////////
/*const dotGreen = css`
    height: 10px;
    width: 10px;
    background-color: green;
    border-radius: 50%;
    display: inline-block;
`
const dotOrange = css`
    height: 10px;
    width: 10px;
    background-color: orange;
    border-radius: 50%;
    display: inline-block;
`
const dotRed = css`
    height: 10px;
    width: 10px;
    background-color: red;
    border-radius: 50%;
    display: inline-block;
` */
const ComboBox: React.FunctionComponent<any> = (props: any) => {
    const names = props.value.map((x: Map) => ({ id: x.id, name: x.name }))
    console.log(names)
    const children = []
    for (let i = 0; i < names.length; i++) {
        children.push(<Option key={names[i].id}>{names[i].name}</Option>)
    }
    return (
        <div>
            <Select
                mode={props.multiple}
                style={{ width: '100%' }}
                placeholder="Please select"
            >
                {children}
            </Select>
        </div>
    )
}

export default ComboBox
