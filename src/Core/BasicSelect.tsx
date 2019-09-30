import React from 'react'
import { Select } from 'antd'
const { Option } = Select

interface selectOptions {
    multiple: string
}

const BasicSelect: React.FunctionComponent<selectOptions> = props => (
    <div>
        <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Please select"
            defaultValue={['a']}
        >
            <Option key="Conan">Conan</Option>
            <Option key="Ricky">Ricky</Option>
            <Option key="Jimmy">{props.multiple}</Option>
        </Select>
    </div>
)

export default BasicSelect
