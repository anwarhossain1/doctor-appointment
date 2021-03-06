import React from "react";
import { Form, Input, Button } from "antd";
import "antd/dist/antd.css";

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

const onFinish=(value) =>{
    console.log(value)
}

const Formm = () => {
  return (
    <Form {...layout} onFinish={onFinish} validateMessages={validateMessages} >
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
  );
};

export default Formm;
