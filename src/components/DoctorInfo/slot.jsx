import React from 'react';
import "antd/dist/antd.css";
import { Select , Divider } from 'antd';

const slot = ({viewSlot}) => {
    const { Option } = Select;
    const handleChange=(value)=>{
        console.log(value);
        this.setState({
            viewSlot:true
            
        })
    }
    return (
      <div>
          <Divider/>
        <Select
          labelInValue
          placeholder="Available time slot for appointment"
          style={{ width: 500 }}
          onChange={handleChange}
        >
          <Option value="jack">Jack (100)</Option>
          <Option value="lucy">Lucy (101)</Option>
        </Select>
      </div>
    );
}

export default slot
