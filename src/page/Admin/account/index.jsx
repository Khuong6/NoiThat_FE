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
import { PlusOutlined } from "@ant-design/icons";
import uploadFile from "../../../utils/upload";
import { ToastContainer, toast } from "react-toastify";
import { Checkbox, Divider } from "antd";
import { message } from "antd";

export const AccountManagerment = () => {
  const [options, setOptions] = useState([]);
  const [products, setProducts] = useState([]);
  const [form] = useForm();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value),
      width: "30%",
    },
    {
      title: "Mail",
      dataIndex: "mail",

      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "20%",
    },

    {
      title: "Phone",
      dataIndex: "phone",

      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "20%",
    },

    {
      title: "Adress",
      dataIndex: "adress",

      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "20%",
    },

    {
      title: "Role",
      dataIndex: "role",

      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "10%",
    },
    {
      title: "Actions",
      render: (value, record) => (
        <Button type="dashed" onClick={() => handleDelete(record.id)}>
          Xóa
        </Button>
      ),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {};
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

  // const fetchProducts = async () => {
  //   const response = await api.get("/product");
  //   console.log(response.data);
  //   setProducts(response.data);
  // };

  const fetchProducts = async () => {
    try {
      const response = await api.get("/product");
      const filteredProducts = response.data.filter(
        (product) => !product.deleted
      );
      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
      message.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const onSubmit = async (values) => {
    console.log(values);
    const file = values.resource.fileList[0].originFileObj;

    const url = await uploadFile(file);

    const response = await api.post("product", {
      name: values.name,
      mail: values.mail,
      phone: values.phone,
      adress: values.address,
    });
    console.log(response);
    toast.success("Successfully create new product!");
    form.resetFields();
    handleCancel();
    fetchProducts();
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/product/${id}`);

      message.success("Product deleted successfully");
      const response = await api.get(`/product/${id}`);
      if (response.data.deleted) {
        // Nếu sản phẩm đã được đánh dấu là đã xóa thì không hiển thị nó trên màn hình
        return;
      }
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      message.error("Failed to delete product");
    }
  };

  /////////////////////////////
  return (
    <div>
      <Button onClick={showModal} type="primary" className="">
        Add
      </Button>
      {/* <button onClick={handleDeleteClick}>Delete</button> */}
      <Table
        className="p-2"
        columns={columns}
        dataSource={products}
        onChange={onChange}
      />
      <Modal
        title="Thêm tài khoản"
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
            label="Mail"
            name={"Mail"}
            rules={[
              {
                required: true,
                message: "Please input mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone"
            name={"Phone"}
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Adress"
            name={"Adress"}
            rules={[
              {
                required: true,
                message: "Please input your adress!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
