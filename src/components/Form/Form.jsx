import React, { useState } from "react";
import { Form, Input, Button, Result } from "antd";
import "antd/dist/antd.css";
import { selectViewResult, setViewDate, setViewForm, setViewResult, setViewSlots } from "../../features/userSlice";
import { useDispatch, useSelector  } from "react-redux";
import {Link } from 'react-router-dom';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email",
    number: "${label} is not a valid number",
  },
};





const Formm = () => {

  const [formV,setFormV] = useState(true)
  
  const dispatch = useDispatch();

  const onFinish=(values) =>{
    console.log(values);
    // dispatch(setViewDate(true));
    dispatch(setViewResult(true));
    setFormV(false);
  
   
  
    
    
    
}
const DocInfoPage = () =>{
  dispatch(setViewDate(true));
  dispatch(setViewForm(false));
  dispatch(setViewSlots(false));
  setFormV(true);
}

const success= useSelector(selectViewResult);
console.log(success)
  return (
     <>
{
  formV ?
  <>
  <h1>Details About You</h1><Form style={{marginRight:"500px"}} {...layout} onFinish={(values) => onFinish(values)}  validateMessages={validateMessages} >
  <Form.Item 
  name={['user', 'name']}
  label="Name"
  rules={
      [
          {
              required:true,
          }
      ]
  }>
    <Input />
  </Form.Item>
  <Form.Item 

  label="Email"
  name={['user', 'email']}
  rules={
      [
          {
              type:'email',
              required:true,
          },
      ]
  }>
    <Input />
  </Form.Item>
  <Form.Item 
  name={['user', 'number']}
  label="Number"
  rules={
      [
          {
             
              required:true,
          },
      ]
  }>
    <Input />
  </Form.Item>
  <Form.Item 
  name={['user', 'reason']}
  label="Reason Behind Appointment">
    <Input.TextArea />
  </Form.Item>
  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
  <Button type="primary" htmlType="submit">Submit</Button>
  </Form.Item>
  
</Form> 
  


  

  
</>: <Result
 title="Great, Appoinment Has Been Set. See You soon."
 extra={<Link to='/'><Button type='primary' onClick={DocInfoPage}>Done</Button></Link>}
 />
}

     </>
    
  );
  
}

export default Formm;
