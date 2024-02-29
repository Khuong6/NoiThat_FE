import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import uploadFile from "../../utils/upload";
import api from "../../config/axios";

export const Request = () => {
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const handleCancelImage = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChangeImage = ({ fileList: newFileList }) => {
    console.log(newFileList);
    setFileList(newFileList);
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  const handleSubmit = async (values) => {
    values.type = "QUOTATION_REQUEST";
    const urls = [];
    if (values.resourceDTOS.fileList) {
      console.log(values.resourceDTOS.fileList);
      await Promise.all(
        values.resourceDTOS.fileList.map(async (file) => {
          console.log(file);
          const url = await uploadFile(file.originFileObj);
          console.log(file.originFileObj);
          urls.push({
            url: url,
            type: "IMG",
          });
          console.log(url);
        })
      );
    }
    values.resourceDTOS = urls;
    console.log(values);
    const response = await api.post("/request", values);
    console.log(response);
  };

  return (
    <div>
      <Form onFinish={handleSubmit}>
        <Form.Item label="Budget" name={"budget"}>
          <Input type="number" />
        </Form.Item>

        <Form.Item label="Description" name={"description"}>
          <TextArea />
        </Form.Item>

        <Form.Item label="dienTich" name={"dienTich"}>
          <TextArea />
        </Form.Item>

        <Form.Item
          name={"resourceDTOS"}
          label="Image"
          className="post-form-item"
        >
          <Upload
            action={() => {
              console.log(123);
            }}
            beforeUpload={false}
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChangeImage}
          >
            {uploadButton}
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={() => setPreviewOpen(false)}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </div>
  );
};
