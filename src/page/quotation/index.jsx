import React, { useEffect, useState } from "react";
import "./index.css";
import { Button, Col, Form, Input, Modal, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import api from "../../config/axios";
export const Quotation = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  const [form] = useForm();
  const [quotations, setQuotations] = useState([
    {
      name: "Giuong",
      length: 1000,
      width: 1000,
      height: 300,
      weight: 50,
      unit: "Cai",
      pricePerUnit: 10,
      total: 10000,
      img: "cc",
    },
  ]);

  const fetchProduct = async () => {
    const response = await api.get("/product-productResponseDTO");
    setProducts(response.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const onFinish = (values) => {
    setQuotations([...quotations, values]);
    form.resetFields();
    setShowModal(false);
  };
  const postQuotation = async () => {
    try {
      const response = await api.post("/quotation", {
        requestId: 0,
        type: "PENDING",
        quotationDetailDTOS: quotations.map((item) => ({
          productDetailId: 0,
          productId: 0,
          quantity: 1,
          price: item.price,
          length: item.length,
          width: item.width,
          pricePerUnit: item.pricePerUnit,
          total: item.total,
          unit: item.unit,
        })),
      });
      console.log("Quotation posted successfully:", response.data);
    } catch (error) {
      console.error("Error posting quotation:", error);
      // You can add logic here to handle error response from API
    }
  };
  return (
    <div className="quotation">
      <Button
        onClick={() => {
          setShowModal(true);
        }}
        type="primary"
        className="add"
      >
        Add new Product
      </Button>
      <table border="1">
        <thead>
          <tr>
            <th rowspan="2">Sản phẩm</th>
            {/* <th rowspan="2">Mô tả</th> */}
            <th class="size" colspan="3">
              Kích thước
            </th>
            <th rowspan="2">Đơn vị</th>
            <th rowspan="2">Khối lượng</th>
            <th rowspan="2">Số lượng</th>
            <th rowspan="2">Đơn giá</th>
            <th rowspan="2">Thành tiền</th>
            {/* <th rowspan="2">Hình ảnh</th> */}
          </tr>
          <tr>
            <th colspan="1">Dài</th>
            <th colspan="1">Rộng</th>
            <th colspan="1">Cao</th>
          </tr>
        </thead>
        <tbody>
          {quotations.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.length}</td>
                <td>{item.width}</td>
                <td>{item.height}</td>
                <td>{item.unit}</td>
                <td>{item.weight}</td>
                <td>{item.quantity}</td>
                <td>{item.pricePerUnit}</td>
                <td>{item.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button type="primary" onClick={postQuotation}>
        Xác Nhận
      </Button>
      <Modal
        title="Add new product"
        open={showModal}
        onCancel={() => {
          form.resetFields();
          setShowModal(false);
        }}
        onOk={() => form.submit()}
      >
        <Form
          form={form}
          labelCol={{
            span: 24,
          }}
          onFinish={onFinish}
        >
          <Form.Item label="Name" name="name">
            <Select
              showSearch
              placeholder="Select a item"
              optionFilterProp="children"
              // onChange={onChange}
              // onSearch={onSearch}
              filterOption={filterOption}
              options={products.map((item) => {
                return {
                  label: item.name,
                  value: item.name,
                };
              })}
            />
          </Form.Item>
          <Row gutter={12}>
            <Col span={8}>
              <Form.Item label="Length" name="length">
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Width" name="width">
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Height" name="height">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={8}>
              <Form.Item label="Unit" name="unit">
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Weight" name="weight">
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Price per unit" name="pricePerUnit">
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Total" name="total">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

// const sendToQuotationAPI = async () => {
//   try {
//     const requestData = {
//       type: "PENDING",
//       quotationDetailDTOS: quotations.map((item) => ({
//         productDetailId: item.productId,
//         productId: item.productId,
//         quantity: 1,
//         price: item.pricePerUnit,
//         length: item.length,
//         width: item.width,
//       })),
//     };
//     await api.post("/quotation", requestData);
//     setQuotations([]);
//   } catch (error) {
//     console.error("Error sending data to quotation API:", error);
//   }
// };
