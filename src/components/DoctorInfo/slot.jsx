import React, { useState } from "react";
import "antd/dist/antd.css";
import { Select, Divider, Modal } from "antd";
import Form from '../Form/Form';

const Slot = ({viewSlot}) => {
  const { Option } = Select;
  const [modalVisible, setModalVisible] = useState(true);
  const [disableselect, setDisableSelect] = useState(viewSlot)
  const [form,setForm] = useState(false);

  const handleChange = (value) => {
    console.log(value);
  };

  const handleOk = () => {
    setModalVisible(false);
    setDisableSelect(false);
    setForm(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
    setDisableSelect(false);
  };
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
      {form && <Form/>}
    </div>
  );
};

export default Slot;
