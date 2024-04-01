import {
  Button,
  Col,
  Form,
  Image,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
  Table,
  Upload,
} from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useEffect, useState } from "react";
import api from "../../../config/axios";
import { PlusOutlined, PlusSquareOutlined } from "@ant-design/icons";
import uploadFile from "../../../utils/upload";
import { ToastContainer, toast } from "react-toastify";
import { Checkbox, Divider } from "antd";
import { message } from "antd";
import { convertToCurrency } from "../../../utils/currency";
import { UploadOutlined } from "@ant-design/icons";

export const ManageProduct = () => {
  const [options, setOptions] = useState([]);
  const [products, setProducts] = useState([]);

  const [form] = useForm();
  const columns = [
    {
      title: "Images",

      dataIndex: "resources",
      render: (value) => {
        return (
          <Image
            width={200}
            src={value[0]?.url}
            style={{ borderRadius: "10px" }}
          />
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Category 1",
          value: "Category 1",
          children: [
            {
              text: "Yellow",
              value: "Yellow",
            },
            {
              text: "Pink",
              value: "Pink",
            },
          ],
        },
        {
          text: "Category 2",
          value: "Category 2",
          children: [
            {
              text: "Green",
              value: "Green",
            },
            {
              text: "Black",
              value: "Black",
            },
          ],
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value),
      width: "30%",
    },
    {
      title: "Price",
      dataIndex: "pricePerUnit",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "40%",
    },

    {
      title: "Actions",
      render: (value, record) => (
        <Button type="dashed" onClick={() => handleDelete(record.id)}>
          Delete
        </Button>
      ),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setFileList([]);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    // setIsModalOpen(false);
    form.submit();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const fetchCategories = async () => {
    const response = await api.get("/categories");
    console.log(response.data);
    setOptions(
      response.data.map((item) => {
        return {
          label: item.name,
          value: item.id,
        };
      })
    );
  };

  const fetchProducts = async () => {
    try {
      const response = await api.get("/product");
      const filteredProducts = response.data.filter(
        (product) => !product.deleted
      );
      setProducts(
        filteredProducts.map((item) => {
          return {
            ...item,
            key: item.id,
          };
        })
      );
    } catch (error) {
      console.error("Error fetching products:", error);
      message.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);
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

  const onSubmit = async (values) => {
    console.log(values);
    const file = values.resource.fileList[0].originFileObj;

    const url = await uploadFile(file);

    const response = await api.post("product", {
      name: values.name,
      categoriesId: values.categoriesId,
      pricePerUnit: values.pricePerUnit,
      unit: values.unit,
      length: values.length,
      width: values.width,
      height: values.height,
      resourceDTOS: [
        {
          url: url,
          type: "IMG",
        },
      ],
    });
    console.log(response);
    toast.success("Successfully create new product!");
    form.resetFields();
    handleCancel();
    fetchProducts();
  };

  // const handleDelete = async (id) => {
  //   try {
  //     await api.delete(`/product/${id}`);

  //     message.success("Product deleted successfully");
  //     fetchProducts();
  //   } catch (error) {
  //     console.error("Error deleting product:", error);
  //     message.error("Failed to delete product");
  //   }
  // };

  // const handleDelete = async (id) => {
  //   try {
  //     await api.delete(`/product/${id}`);

  //     message.success("Product deleted successfully");
  //     const response = await api.get(`/product/${id}`);
  //     if (response.data.deleted) {

  //       return;
  //     }
  //     fetchProducts();
  //   } catch (error) {
  //     console.error("Error deleting product:", error);
  //     message.error("Failed to delete product");
  //   }
  // };
  const handleDelete = async (id) => {
    try {
      await api.delete(`/product/${id}`);
      message.success("Product deleted successfully");
      fetchProducts(); // Cập nhật lại danh sách sản phẩm sau khi xóa
    } catch (error) {
      console.error("Error deleting product:", error);
      message.error("Failed to delete product");
    }
  };

  /////////////////////////////
  return (
    <div>
      <Button onClick={showModal} type="primary">
        Add
      </Button>

      <Table
        columns={columns}
        dataSource={products}
        onChange={onChange}
        expandable={{
          expandedRowRender: (record) => {
            return (
              <ProductDetail
                data={record}
                handleDelete={handleDelete} // Truyền hàm handleDelete vào ProductDetail
              />
            );
          },
        }}
      />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          onFinish={onSubmit}
          labelCol={{
            span: 24,
          }}
          form={form}
        >
          <Form.Item
            label="Name"
            name={"name"}
            rules={[
              {
                required: true,
                message: "Please input product's name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Categories"
            name={"categoriesId"}
            rules={[
              {
                required: true,
                message: "Please input product's category!",
              },
            ]}
          >
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="Please select"
              onChange={handleChange}
              options={options}
            />
          </Form.Item>

          <Row>
            <Col span={12}>
              <Form.Item
                label="Price per unit"
                name={"pricePerUnit"}
                rules={[
                  {
                    required: true,
                    message: "Please input product's price!",
                  },
                ]}
              >
                <InputNumber
                  addonAfter={"VND"}
                  style={{
                    width: 200,
                  }}
                  defaultValue={1000}
                  p
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  onChange={onChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Unit" name="unit">
                <Select
                  options={[
                    { value: "ITEM", label: "ITEM" },
                    { value: "METER", label: "METER" },
                    { value: "SQUARE_METER", label: "SQUARE_METER" },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={12}>
            <Col span={8}>
              <Form.Item label="Length" name="length">
                <Input type="number" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Width" name="width">
                <Input type="number" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Height" name="height">
                <Input type="number'" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="resource"
            label="Hình ảnh"
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
        </Form>
      </Modal>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancelImage}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </div>
  );
};

const ProductDetail = ({ data, handleDelete }) => {
  const calcTotalDetail = () => {
    let total = 0;
    const length = form.getFieldValue("length");
    const width = form.getFieldValue("width");
    const quantity = form.getFieldValue("quantity");
    const pricePerUnit = form.getFieldValue("pricePerUnit");
    console.log(Number(pricePerUnit));
    // const weight = form.getFieldValue("weight");
    let weight = 0;
    if (data.unit === "ITEM") {
      weight = 1;
    } else if (data.unit === "METER") {
      weight = length / 1000;
    } else if (data.unit === "SQUARE_METER") {
      weight = ((length / 1000) * width) / 1000;
    }
    console.log(Number(weight));

    // const length = form.getFieldValue("length")
    total = Number(pricePerUnit) * Number(weight);
    console.log(total);
    form.setFieldValue("pricePerUnit", pricePerUnit);
    form.setFieldValue("total", total);
    form.setFieldValue("weight", weight);
  };
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  const [fileList, setFileList] = useState([]);
  const handleChangeImage = ({ fileList: newFileList }) => {
    console.log(newFileList);
    setFileList(newFileList);
  };
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
  const [disableLength, setDisableLength] = useState(false);
  const [disableWidth, setDisableWidth] = useState(false);
  const [disableheight, setDisableheight] = useState(false);
  const [total, setTotal] = useState(0);
  const [productDetails, setProductDetails] = useState([]);
  const [productUnit, setProductUnit] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [colors, setColors] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [form] = useForm();
  const [showModalColor, setShowModalColor] = useState(false);
  const [showModalMaterial, setShowModalMaterial] = useState(false);
  const [formColor] = useForm();
  const [formMaterial] = useForm();

  const fetchProductDetails = async (id) => {
    try {
      const response = await api.get(`/productDetail-productId/${id}`);
      const filteredProductDetails = response.data.filter(
        (productDetail) => !productDetail.deleted
      );
      setProductDetails(filteredProductDetails);
    } catch (error) {
      console.error("Error fetching product details:", error);
      message.error("Failed to fetch product details");
    }
  };

  const fetchProductUnit = async (id) => {
    const res = await api.get(`/product/${id}`);
    setProductUnit(res.data);
  };

  const fetchProductColor = async (id) => {
    const response = await api.get(`/productColors-productId/${id}`);
    setColors(response.data);
  };

  const fetchProductMaterial = async (id) => {
    const response = await api.get(`/productMaterial-productId/${id}`);
    setMaterials(response.data);
  };
  const handleDetailDelete = async (id) => {
    try {
      await api.delete(`/product-detail/${id}`);
      message.success("Product detail deleted successfully");
      // Lọc ra các chi tiết sản phẩm không bị xóa và cập nhật lại state
      setProductDetails((prevDetails) =>
        prevDetails.filter((detail) => detail.id !== id)
      );
    } catch (error) {
      console.error("Error deleting product detail:", error);
      message.error("Failed to delete product detail");
    }
  };
  const handleEdit = async (id) => {
    try {
      // Lấy thông tin chi tiết sản phẩm cần chỉnh sửa từ state hoặc từ API (nếu cần)
      const productDetailToUpdate = productDetails.find(
        (detail) => detail.id === id
      );

      // Gửi yêu cầu cập nhật thông tin chi tiết sản phẩm lên server
      await api.put(`/product-detail/${id}`, {
        ...productDetailToUpdate,
      });

      fetchProductDetails(productDetailToUpdate.productId);

      message.success("Product detail updated successfully");
    } catch (error) {
      console.error("Error updating product detail:", error);
      message.error("Failed to update product detail");
    }
  };
  const [editProductDetail, setEditProductDetail] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const handleEditModalOpen = async (id) => {
    try {
      const response = await api.get(`/product-detail/${id}`);
      setEditProductDetail(response.data);
      setIsEditModalOpen(true);
    } catch (error) {
      console.error("Error fetching product detail for edit:", error);
      message.error("Failed to fetch product detail for edit");
    }
  };
  const onFinishDetail = async (values) => {
    try {
      await api.put(`/product-detail/${editProductDetail.id}`, values);
      message.success("Product detail updated successfully");
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error updating product detail:", error);
      message.error("Failed to update product detail");
    }
  };
  useEffect(() => {
    fetchProductDetails(data.id);
    fetchProductColor(data.id);
    fetchProductMaterial(data.id);
    fetchProductUnit(data.id);
  }, [data]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "resources",
      key: "resources",
      render: (value) => {
        return (
          <Image
            width={100}
            src={
              value[0]
                ? value[0].url
                : "https://clipground.com/images/no-image-png-5.jpg"
            }
          />
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (value) => {
        return convertToCurrency(value);
      },
    },

    {
      title: "Actions",
      render: (value, record) => (
        <>
          <Button type="primary" onClick={() => handleEditModalOpen(record.id)}>
            Edit
          </Button>

          <Button type="dashed" onClick={() => handleDetailDelete(record.id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];
  const firstUnit = productUnit.length > 0 ? productUnit[0].unit : "";
  const onFinish = async (values) => {
    console.log(values);
    if (values.resource.file) {
      const file = values.resource.file.originFileObj;
      const url = await uploadFile(file);
      values.resourceDTOS = [
        {
          url: url,
          type: "IMG",
        },
      ];
    }

    console.log(values);
    await api.post("/product-detail", {
      ...values,
      productId: data.id,
      price: values.total,
    });
    fetchProductDetails(data.id);
    form.resetFields();
    setShowModal(false);
    setFileList([]);
  };

  return (
    <>
      <Row
        justify={"end"}
        style={{
          marginBottom: 20,
        }}
      >
        <Button
          type="primary"
          onClick={() => {
            form.setFieldValue("unit", data.unit);
            form.setFieldValue("unit", data.unit);
            form.setFieldValue("pricePerUnit", data.pricePerUnit);
            form.setFieldValue("length", data.length);
            form.setFieldValue("width", data.width);
            form.setFieldValue("height", data.height);
            form.setFieldValue("weight", data.weight);
            form.setFieldValue("quantity", 0);
            form.setFieldValue("total", 0);

            if (data.unit === "ITEM") {
              setDisableLength(true);
              setDisableWidth(true);
              setDisableheight(true);
            } else if (data.unit === "METER") {
              setDisableLength(false);
              setDisableWidth(true);
              setDisableheight(true);
            } else {
              setDisableLength(false);
              setDisableWidth(false);
              setDisableheight(true);
            }
            calcTotalDetail();
            setShowModal(true);
          }}
        >
          Add new product Detail
        </Button>
      </Row>
      <Table dataSource={productDetails} columns={columns} />

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
            <Input
              showSearch
              placeholder="Select a item"
              optionFilterProp="children"
              onChange={(value) => {
                console.log(value);
                const product = products.filter(
                  (item) => item.productId === value
                )[0];
                console.log(product);
                form.setFieldValue("unit", product.unit);
                form.setFieldValue("pricePerUnit", product.pricePerUnit);
                form.setFieldValue("length", product.length);
                form.setFieldValue("width", product.width);
                form.setFieldValue("height", product.height);
                form.setFieldValue("weight", product.weight);
                form.setFieldValue("quantity", 0);
                form.setFieldValue("total", product.pricePerUnit);

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
              options={productUnit.map((item, index) => {
                return {
                  label: item.name,
                  value: item.productId,
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
                <Input disabled />
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
            <Col span={8}>
              <Row gutter={12} align={"middle"}>
                <Col span={18}>
                  <Form.Item
                    label="Color"
                    name="colorId"
                    rules={[
                      {
                        required: true,
                        message: "Please input product color!",
                      },
                    ]}
                  >
                    <Select>
                      {colors.map((item) => {
                        return (
                          <Select.Option value={item.id}>
                            {item.color}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Button
                    onClick={() => setShowModalColor(true)}
                    type="primary"
                    icon={<PlusSquareOutlined />}
                  ></Button>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row gutter={12} align={"middle"}>
                <Col span={22}>
                  <Form.Item
                    label="Material"
                    name="materialId"
                    rules={[
                      {
                        required: true,
                        message: "Please input product material!",
                      },
                    ]}
                  >
                    <Select>
                      {materials.map((item) => {
                        return (
                          <Select.Option value={item.id}>
                            {item.size}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={2}>
                  <Button
                    onClick={() => setShowModalMaterial(true)}
                    type="primary"
                    icon={<PlusSquareOutlined />}
                  ></Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Form.Item
            name="resource"
            label="Hình ảnh"
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
        </Form>
      </Modal>

      <Modal
        open={showModalColor}
        onCancel={() => {
          setShowModalColor(false);
        }}
        onOk={() => {
          formColor.submit();
        }}
      >
        <Form
          form={formColor}
          onFinish={async (values) => {
            console.log(data.id);
            await api.post(`/productColor/${data.id}`, values);
            fetchProductColor(data.id);
            formColor.resetFields();
            setShowModalColor(false);
          }}
        >
          <Form.Item label="Color" name="color">
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        open={showModalMaterial}
        onCancel={() => {
          setShowModalMaterial(false);
        }}
        onOk={() => {
          formMaterial.submit();
        }}
      >
        <Form
          form={formMaterial}
          onFinish={async (values) => {
            console.log(data.id);
            await api.post(`/productMaterial/${data.id}`, values);
            fetchProductMaterial(data.id);
            formMaterial.resetFields();
            setShowModalMaterial(false);
          }}
        >
          <Form.Item label="Material" name="size">
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      {/* Modal Edit Product Detail */}
      <Modal
        title="Sửa Chi Tiết Sản Phẩm"
        visible={isEditModalOpen}
        onCancel={() => setIsEditModalOpen(false)}
        footer={null}
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
          onFinish={onFinishDetail}
          initialValues={editProductDetail}
        >
          <Form.Item label="Name" name="name">
            <Input
              showSearch
              placeholder="Select a item"
              optionFilterProp="children"
              onChange={(value) => {
                console.log(value);
                const product = products.filter(
                  (item) => item.productId === value
                )[0];
                console.log(product);
                form.setFieldValue("unit", product.unit);
                form.setFieldValue("pricePerUnit", product.pricePerUnit);
                form.setFieldValue("length", product.length);
                form.setFieldValue("width", product.width);
                form.setFieldValue("height", product.height);
                form.setFieldValue("weight", product.weight);
                form.setFieldValue("quantity", 0);
                form.setFieldValue("total", product.pricePerUnit);

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
              options={productUnit.map((item, index) => {
                return {
                  label: item.name,
                  value: item.productId,
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
                <Input disabled />
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
            <Col span={8}>
              <Row gutter={12} align={"middle"}>
                <Col span={18}>
                  <Form.Item
                    label="Color"
                    name="colorId"
                    rules={[
                      {
                        required: true,
                        message: "Please input product color!",
                      },
                    ]}
                  >
                    <Select>
                      {colors.map((item) => {
                        return (
                          <Select.Option value={item.id}>
                            {item.color}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Button
                    onClick={() => setShowModalColor(true)}
                    type="primary"
                    icon={<PlusSquareOutlined />}
                  ></Button>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row gutter={12} align={"middle"}>
                <Col span={22}>
                  <Form.Item
                    label="Material"
                    name="materialId"
                    rules={[
                      {
                        required: true,
                        message: "Please input product material!",
                      },
                    ]}
                  >
                    <Select>
                      {materials.map((item) => {
                        return (
                          <Select.Option value={item.id}>
                            {item.size}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={2}>
                  <Button
                    onClick={() => setShowModalMaterial(true)}
                    type="primary"
                    icon={<PlusSquareOutlined />}
                  ></Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Form.Item
            name="resource"
            label="Hình ảnh"
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
        </Form>
      </Modal>
    </>
  );
};
