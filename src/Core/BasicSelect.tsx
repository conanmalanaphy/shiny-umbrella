import React from 'React'
import Select from 'antd/lib/select'

import 'antd/lib/select/style/index.css'

const { Option } = Select

interface SelectOptions {
    multiple: string
}

const BasicSelect: React.FunctionComponent<SelectOptions> = (
    props: SelectOptions
) => (
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
