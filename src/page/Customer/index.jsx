import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import uploadFile from "../../utils/upload";
import api from "../../config/axios";

import { toast } from "react-toastify";

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
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    values.type = "QUOTATION_REQUEST";
    const urls = [];
    if (values.resourceDTOS.fileList) {
      await Promise.all(
        values.resourceDTOS.fileList.map(async (file) => {
          const url = await uploadFile(file.originFileObj);
          urls.push({
            url: url,
            type: "IMG",
          });
        })
      );
    }
    values.resourceDTOS = urls;
    try {
      const response = await api.post("/request", values);
      // Nếu request thành công, hiển thị toast "Gửi thành công"
      toast.success("Gửi yêu cầu thành công");
      console.log(response);
      form.resetFields();
    } catch (error) {
      // Xử lý lỗi khi gửi request
      console.error("Lỗi khi gửi request:", error);
      // Hiển thị thông báo lỗi nếu cần
      toast.error("Đã xảy ra lỗi khi gửi request");
    }
  };

  return (
    <div style={{ padding: 100, backgroundColor: "white" }}>
      <div
        style={{
          padding: 50,
          border: "3px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "white",
          borderColor: "#4299e1",
        }}
      >
        <div>
          <Form form={form} onFinish={handleSubmit}>
            <Form.Item label="Mức giá mong muốn" name={"budget"}>
              <Input type="number" />
            </Form.Item>

            <Form.Item label="Mô tả" name={"description"}>
              <TextArea />
            </Form.Item>

            <Form.Item label="Diện tích" name={"dienTich"}>
              <TextArea />
            </Form.Item>

            <Form.Item
              name={"resourceDTOS"}
              label="Tải lên hình ảnh"
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
            <Form.Item
              style={{
                display: "flex",
                placeContent: "flex-end",
              }}
            >
              <Button type="primary" htmlType="submit">
                Gửi
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
      </div>
    </div>
  );
};
