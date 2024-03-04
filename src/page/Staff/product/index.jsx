import {
  Button,
  Form,
  Image,
  Input,
  InputNumber,
  Modal,
  Select,
  Table,
  Upload,
} from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useEffect, useState } from "react";
import api from "../../../config/axios";
import { PlusOutlined } from "@ant-design/icons";
import uploadFile from "../../../utils/upload";
import { ToastContainer, toast } from "react-toastify";
import { Checkbox, Divider } from "antd";

export const ManageProduct = () => {
  const [options, setOptions] = useState([]);
  const [products, setProducts] = useState([]);
  const [form] = useForm();
  const columns = [
    {
      title: "Images",
      dataIndex: "img",
      render: (value) => {
        return <Image width={200} src={value} />;
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
      dataIndex: "price",
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
      render: (value, record) => (
        <Checkbox
          onChange={(e) => handleCheckboxChange(record.id, e.target.checked)}
          style={{ border: "2px solid black", borderColor: "black" }}
        />
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
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
    const response = await api.get("/product");
    console.log(response.data);
    setProducts(response.data);
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
      price: values.price,
      img: url,
    });
    console.log(response);
    toast.success("Successfully create new product!");
    form.resetFields();
    handleCancel();
    fetchProducts();
  };

  const handleCheckboxChange = (productId, isChecked) => {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return { ...product, checked: isChecked };
        }
        return product;
      })
    );
  };

  const handleDeleteClick = () => {
    setProducts(items.filter((item) => !item.checked));
  };

  /////////////////////////////
  return (
    <div>
      <Button onClick={showModal} type="primary">
        Add
      </Button>
      <button onClick={handleDeleteClick}>Delete</button>
      <Table columns={columns} dataSource={products} onChange={onChange} />
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

          <Form.Item
            label="Price"
            name={"price"}
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

      <Button></Button>
    </div>
  );
};