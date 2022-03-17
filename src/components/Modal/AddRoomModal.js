import React, { useState, useContext } from "react";
import { Modal, Form, Input } from "antd";
import { AppContext } from "../../Context/AppProvider";
function AddRoomModal() {
  const [isAddRoomVisible, setIsAddRoomVisible] = useContext(AppContext);
  const [form] = Form.useForm();
  const handleOk = () => {
    console.log({ formData: form.getFieldsValue() });
    setIsAddRoomVisible(false);
  };
  const handleCancel = () => {
    setIsAddRoomVisible(false);
  };
  return (
    <Modal
      title="Tạo phòng"
      visible={isAddRoomVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form}>
        <Form.Item label="Tên phòng" name="name">
          <Input placeholder="Nhập tên phòng"></Input>
        </Form.Item>
        <Form.Item label="Mô tả" name="description">
          <Input placeholder="Nhập mô tả"></Input>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddRoomModal;
