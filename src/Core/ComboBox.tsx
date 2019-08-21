/** @jsx jsx */
import { Select} from 'antd';
import 'antd/dist/antd.css';
import { css, jsx } from '@emotion/core'
const { Option } = Select;

interface selectOptions{
  multiple:string,
  value: number
}

/////////////////////////////////////
///          CSS Styles           ///
/////////////////////////////////////
const dotGreen = css`
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
`

const ComboBox: React.FunctionComponent<selectOptions> = (props) =>
  (
    <div>
  <Select
    mode={props.multiple}
    style={{ width: '100%' }}
    placeholder="Please select"
    defaultValue={['Latest']}
  >
    <Option key="Latest"><div css={dotGreen}></div> Latest {props.value}</Option>
    <Option key="AwaitingSignedOff"><div css={dotOrange}></div> Awaiting Signed Off {props.value}</Option>
    <Option key="SignedOff"><div css={dotRed}></div> Signed Off {props.value}</Option>

  </Select>
  </div>
);

export default ComboBox;