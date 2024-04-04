import React, { useEffect, useState } from "react";
import "./index.css";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
} from "antd";
import { useForm } from "antd/es/form/Form";
import api from "../../config/axios";
import { convertToCurrency } from "../../utils/currency";
import useModal from "antd/es/modal/useModal";
export const Quotation = ({
  edit,
  quotationId,
  fetchQuatationsList,
  requestId,
  isCustomer,
  open,
  products,
  setProducts,
  quotations,
  setQuotations, //
}) => {
  const [quotationDetailId, setQuotationDetailId] = useState();
  const [showModal, setShowModal] = useState(false);
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  const [form] = useForm();
  const [total, setTotal] = useState(0);
  const [disableLength, setDisableLength] = useState(false);
  const [disableWidth, setDisableWidth] = useState(false);
  const [disableheight, setDisableheight] = useState(false);

  const fetchProduct = async () => {
    const response = await api.get("/product-productResponseDTO");
    setProducts(response.data);
  };
  useEffect(() => {
    console.log("load");
    setQuotations([]); //
    fetchProduct();
  }, []);

  const onFinish = (values) => {
    console.log(values);
    const data = [...quotations, values];
    console.log(data);
    setQuotations([...quotations, values]); //
    form.resetFields([]);
    setShowModal(false);
  };

  const fetchQuotation = async () => {
    const response = await api.get(`/quotation/${quotationId}`);
    console.log(response.data);
    console.log("sadas");
    setQuotations(
      response.data.quotationDetails.map((item) => {
        console.log("first");
        console.log(item);

        return {
          ...item,
          name: item.productDetail
            ? item.productDetail.name
            : item.product.name,
        };
      })
    );
  };

  useEffect(() => {
    console.log(open);
  }, [open]);

  useEffect(() => {
    console.log(quotationId);
    setQuotations([]); //
    if (quotationId) {
      fetchQuotation();
    }
  }, [quotationId]);

  const postQuotation = async () => {
    try {
      const response = await api.post("/quotation", {
        requestId: requestId,
        type: "PENDING",
        quotationDetailDTOS: quotations.map((item) => {
          console.log(products);
          console.log(item);
          const name = products.filter((product) => {
            console.log(product.name);
            console.log(item.name);
            return product.name === item.name;
          })[0].productId;
          console.log(name);
          return {
            productDetailId: 0,
            productId: name,
            quantity: Number(item.quantity),
            price: item.price,
            length: item.length,
            height: item.height,
            weight: item.weight,
            width: item.width,
            pricePerUnit: item.pricePerUnit,
            total: item.total,
            unit: item.unit,
          };
        }),
      });
      fetchQuatationsList();
      setQuotations([]); //
      console.log("Quotation posted successfully:", response.data);
    } catch (error) {
      console.error("Error posting quotation:", error);
      // You can add logic here to handle error response from API
    }
  };

  const calcTotal = () => {
    let res = 0;

    quotations.forEach((item) => {
      res += item.total;
    });

    return convertToCurrency(res);
  };

  const calcTotalDetail = () => {
    let total = 0;
    const length = form.getFieldValue("length");
    const width = form.getFieldValue("width");
    const quantity = form.getFieldValue("quantity");
    const pricePerUnit = form.getFieldValue("pricePerUnit");

    console.log(pricePerUnit);
    const unit = form.getFieldValue("unit");

    let weight = 0;
    if (unit === "ITEM") {
      weight = 1;
    } else if (unit === "METER") {
      weight = length / 1000;
    } else if (unit === "SQUARE_METER") {
      weight = ((length / 1000) * width) / 1000;
    }

    // const length = form.getFieldValue("length")
    total = pricePerUnit * Number(weight) * Number(quantity);
    console.log(total);
    form.setFieldValue("total", total);
    form.setFieldValue("weight", weight);
  };

  const handleEdit = (index) => {};
  return (
    <div className="quotation">
      {edit && (
        <Button
          onClick={() => {
            setShowModal(true);
          }}
          type="primary"
          className="add"
        >
          Add new Product
        </Button>
      )}
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
          {quotations.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.length}</td>
                <td>{item.width}</td>
                <td>{item.height}</td>
                <td>{item.unit}</td>
                <td>{item.weight}</td>
                <td>{item.quantity}</td>
                <td>{item.pricePerUnit}</td>
                <td>{convertToCurrency(item.total)}</td>

                {/* <td>
                  <Button
                    type="primary"
                    onClick={() => {
                      setShowModal(true);
                      // setQuotationDetailId(item.id);
                      form.setFieldsValue(item);
                    }}
                  >
                    Edit
                  </Button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>

      {quotations.length > 0 && (
        <Row justify={"end"}>
          <h1
            style={{
              fontSize: 20,
            }}
          >
            Tong tien: {calcTotal()}
          </h1>
        </Row>
      )}

      {edit && quotations.length > 0 && (
        <Button
          type="primary"
          style={{
            marginTop: 20,
          }}
          onClick={postQuotation}
        >
          Xác Nhận
        </Button>
      )}

      <Modal
        title="Add New Product Detail"
        open={showModal}
        onCancel={() => {
          form.resetFields();
          setShowModal(false);
        }}
        onOk={() => form.submit()}
      >
        <Form
          onChange={() => {
            calcTotalDetail();
          }}
          form={form}
          labelCol={{
            span: 24,
          }}
          onFinish={onFinish}
        >
          <Form.Item label="Name" name="name">
            <Select
              disabled={isCustomer}
              showSearch
              placeholder="Select a item"
              optionFilterProp="children"
              onChange={(value) => {
                console.log(value);
                const product = products.filter(
                  (item) => item.name === value
                )[0];
                console.log("1244");
                console.log(product);
                form.setFieldValue("unit", product.unit);
                form.setFieldValue("pricePerUnit", product.pricePerUnit);
                form.setFieldValue("length", product.length);
                form.setFieldValue("width", product.width);
                form.setFieldValue("height", product.height);
                form.setFieldValue("weight", product.weight);
                form.setFieldValue("quantity", 0);
                form.setFieldValue("total", 0);

                if (product.unit === "ITEM") {
                  setDisableLength(true);
                  setDisableWidth(true);
                  setDisableheight(true);
                } else if (product.unit === "METER") {
                  setDisableLength(false);
                  setDisableWidth(true);
                  setDisableheight(true);
                } else {
                  setDisableLength(false);
                  setDisableWidth(false);
                  setDisableheight(true);
                }
                calcTotalDetail();
              }}
              // onSearch={onSearch}
              filterOption={filterOption}
              options={products.map((item, index) => {
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
                <Input type="number" disabled={disableLength} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Width" name="width">
                <Input type="number" disabled={disableWidth} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Height" name="height">
                <Input type="number" disabled={disableheight} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={8}>
              <Form.Item label="Unit" name="unit">
                <Select
                  disabled
                  options={[
                    { value: "ITEM", label: "ITEM" },
                    { value: "METER", label: "METER" },
                    { value: "SQUARE_METER", label: "SQUARE_METER" },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Weight" name="weight">
                <Input disabled />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Price per unit" name="pricePerUnit">
                <InputNumber
                  disabled
                  addonAfter={"VND"}
                  style={{
                    width: 150,
                  }}
                  defaultValue={0}
                  p
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Quantity" name="quantity">
                <Input type="number" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Total" name="total">
                <InputNumber
                  value={total}
                  disabled
                  addonAfter={"VND"}
                  style={{
                    width: 200,
                  }}
                  defaultValue={0}
                  p
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
      {quotations.length === 0 && "No data"}
    </div>
  );
};
