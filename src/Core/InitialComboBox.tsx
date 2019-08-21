import { Select} from 'antd';
import React from 'react';

const { Option } = Select;

const InitalComboBox = (props:any) =>
{
return(    <div>
<Select
  style={{ width: '100%' }}
  placeholder="Please select"
  defaultValue={['Latest']}
  onChange={props.onCdange}
>
  <Option key="Latest"> 1st </Option>
  <Option key="AwaitingSignedOff">2</Option>
  <Option key="SignedOff">3</Option>
</Select>
</div>
)};

export default InitalComboBox;