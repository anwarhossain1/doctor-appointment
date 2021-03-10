import React, { useState } from "react";
import "antd/dist/antd.css";
import { Select, Divider, Modal, message } from "antd";
import Form from '../Form/Form';
import { useDispatch, useSelector  } from "react-redux";
import { selectViewDate, setViewSlots, setViewDate, setViewForm, selectViewForm } from "../../features/userSlice";

const Slot = () => {
  const { Option } = Select;
  const [modalVisible, setModalVisible] = useState(true);
  // const [disableselect, setDisableSelect] = useState(viewSlot)
  // const [form,setForm] = useState(false);
  const isViewDate= useSelector(selectViewDate);
  const dispatch=useDispatch();

  const [Value, setValue] = useState('');
  

  const handleChange = (value) => {
  setValue(value.value)
  
   
  };
  console.log(Value)


  const handleOk = () => {

    if(Value!==""){
      dispatch(setViewDate(false));
      setModalVisible(false);
      dispatch(setViewForm(true));
      // 
      

    }
    else{
      message.error('Please select a slot...');
    
    }

    

   

    
      

    
    
    // setDisableSelect(false);
    

   
  };

  const handleCancel = () => {
    setModalVisible(false);
    dispatch(setViewSlots(false));
  };

  const apForm=useSelector(selectViewForm);

  
  return (
    <div>
      <Divider />
      <Modal visible={modalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Select
          labelInValue
          placeholder="Available time slot for appointment"
          style={{ width: 200 }}
          onChange={handleChange}
        >
          <Option value="jack">Jack (100)</Option>
          <Option value="lucy">Lucy (101)</Option>
        </Select>
        
      </Modal>
      {apForm && <Form/>}
    </div>
  );
};

export default Slot;
