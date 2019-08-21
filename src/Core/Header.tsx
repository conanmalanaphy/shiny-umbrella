import React from 'react';
import './Header.css';
import { Button, Divider, DatePicker} from 'antd';
import moment from 'moment';
import ComboBox from './ComboBox';
import DropDown from './DropDown';
import PortfolioModal from './PortfolioModal';


const { RangePicker } = DatePicker;
const ButtonGroup = Button.Group;
const dateFormat = 'YYYY/MM/DD';

const Header: React.FunctionComponent = () =>
  (
    <div className="wrapper">
      <div className="box context">
        <ComboBox multiple = "default" /> 
      </div>
      <div className="box options">
        <ButtonGroup>
            <Button>A</Button>
            <Button>B</Button>
            <Button>C</Button>
        </ButtonGroup>
        <Divider type="vertical" />
      </div>
      <div className="box portfolio"><PortfolioModal /></div>
      <div className="box datepicker">
      <RangePicker
          defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
          format={dateFormat}
        />
      </div>
      <div className="box settings"><DropDown /></div>
    </div>
  );
  
export default Header;

