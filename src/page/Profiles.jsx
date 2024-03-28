import React, { useState, useEffect } from "react";

import api from "../config/axios";
import { useParams } from "react-router-dom";
import { Input, Form, Button, Modal } from "antd";
import Item from "antd/es/list/Item";
import { toast } from "react-toastify";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Profiles() {
  const [userData, setUserData] = useState([]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const response = await api.put(`/authentication/account/${userData.id}`, {
      username: values.username,
      name: values.name,
      password: values.password,
      email: values.email,
      phone: values.phone,
      address: values.address,
    });
    console.log(response);
    toast.success("Successfully Update Account");
    form.resetFields();
    fetchUserData();
    setIsModalVisible(false); // Đóng modal sau khi xử lý submit
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const fetchUserData = async () => {
    try {
      const response = await api.get(`/authentication/account`);

      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (token) {
      const decodedToken = parseJwt(token);

      fetchUserData();
    }
  });

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[0]));
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <Header />
      <div
        className=" h-screen w-screen pt-8 "
        style={{ backgroundColor: "#332D29" }}
      >
        <h1
          className="text-3xl font-bold mb-4 text-center"
          style={{ color: "#ac9984" }}
        >
          PROFILE
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div> */}
          <div className="">
            <div className="px-4 py-4">
              <button
                className="border border-info rounded-[15px] py-1 px-2"
                onClick={() => {
                  setIsModalVisible(true); // Mở modal bằng cách cập nhật state
                  form.setFieldsValue(userData);
                }}
                style={{ color: "#ac9984" }}
              >
                EDIT PROFILE
              </button>
            </div>
            <dialog id="my_modal_1" className="modal" open={isModalVisible}>
              <div className="modal-box">
                <button
                  className="absolute top-0 right-0 mr-2 mt-2 text-red-500"
                  onClick={handleCancel}
                >
                  X
                </button>

                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  onCancel={() => {
                    setIsModalOpen(false);
                  }}
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      { required: true, message: "Please input your name!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please input your email!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Phone"
                    name="phone"
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
                    label="Address"
                    name="address"
                    rules={[
                      { required: true, message: "Please input your address!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </dialog>
          </div>
        </div>

        <div className="px-8">
          <div
            className="bg-white p-8 rounded-lg shadow-md border border-white px-4"
            style={{ backgroundColor: "#332D29" }}
          >
            <div className="grid grid-cols-2 gap-x-4">
              <div>
                <div
                  className="block mb-2 text-sm font-bold text-gray-600"
                  style={{ color: "#ac9984" }}
                >
                  Full Name
                </div>
                <label
                  className="input input-bordered flex items-center gap-2"
                  style={{ backgroundColor: "#332D29" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                  </svg>
                  <label
                    type="text"
                    className="grow"
                    disabled
                    style={{ backgroundColor: "#332D29" }}
                  >
                    {userData.name}
                  </label>
                </label>
              </div>
              <div>
                <div
                  className="block mb-2 text-sm font-bold text-gray-600"
                  style={{ color: "#ac9984" }}
                >
                  Phone Number
                </div>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </svg>
                  <label type="text" className="grow" disabled>
                    {userData.phone}
                  </label>
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-4 mt-4">
              <div>
                <div
                  className="block mb-2 text-sm font-bold text-gray-600"
                  style={{ color: "#ac9984" }}
                >
                  Email
                </div>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </svg>
                  <label type="text" className="grow" disabled>
                    {userData.email}
                  </label>
                </label>
              </div>
              <div>
                <div
                  className="block mb-2 text-sm font-bold text-gray-600"
                  style={{ color: "#ac9984" }}
                >
                  Address
                </div>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </svg>
                  <label type="text" className="grow" disabled>
                    {userData.address}
                  </label>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div>
          <a href="/trangchu">
            <button
              className="flex items-center justify-center gap-3 bg-[rgba(2566,256,256,0.2)] backdrop-blur-md w-full py-3 mt-10 rounded-xl hover:bg-[rgba(2566,256,256,0.4)] cursor-pointer border border-gray-400 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] ext-sm font-medium uppercase "
              style={{ backgroundColor: "blue" }}
              data-te-ripple-init=""
              data-te-ripple-color="light"
            >
              Back To Homepage
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Profiles;
