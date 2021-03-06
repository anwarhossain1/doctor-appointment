import React, { useState } from "react";
import "antd/dist/antd.css";
import { Select, Divider, Modal } from "antd";

const Slot = ({viewSlot}) => {
  const { Option } = Select;
  const [modalVisible, setModalVisible] = useState(true);
  const [disableselect, setDisableSelect] = useState(viewSlot)

  const handleChange = (value) => {
    console.log(value);
  };

  const handleOk = () => {
    setModalVisible(false);
    setDisableSelect(false);
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
    </div>
  );
};

export default Slot;
