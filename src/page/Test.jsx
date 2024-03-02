import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { logout } from "../redux/feature/authenSlice";
import { DownOutlined, UserOutlined, CheckOutlined } from "@ant-design/icons";
import "animate.css";

export const Test = () => {
  const user = useSelector((store) => store.authen);
  const dispatch = useDispatch();
  const items = [
    {
      label: (
        <div className="text-center bg-green-500 p-1 rounded-3xl">
          <Link to={"/profile"}>Setting</Link>
        </div>
      ),
    },
    {
      type: "divider",
    },
    {
      label: (
        <div
          onClick={() => {
            dispatch(logout());
          }}
          className="text-center bg-red-500 p-1 rounded-3xl"
        >
          Logout
        </div>
      ),
    },
  ];
  const downLine = [
    {
      label: <a href="/phongngu">Phòng Ngủ</a>,
    },
    {
      type: "divider",
    },
    {
      label: <a href="/phongbep">Phòng Bếp</a>,
    },
    {
      type: "divider",
    },
    {
      label: <a href="/phongkhach">Phòng Khách</a>,
    },
  ];
  return (
    <>
      <header className="bg-gradient-to-r from-white via-gray-300  to-white p-8">
        <div class="max-w-7xl mx-auto">
          <div class="flex justify-between items-center m-0 p-0">
            <a href="/trangchu">
              <img
                className="w-36 rounded-3xl"
                src="/public/Capture.PNG"
                alt=""
              />
            </a>

            <nav className="flex items-center">
              <ul className="flex mr-8 ">
                <div>
                  <Dropdown
                    menu={{ items: downLine }}
                    trigger={["click"]}
                    placement="bottomLeft"
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        <a
                          className="px-3 py-11 text-070120 capitalize text-sm font-medium transition duration-500 text-black"
                          href="#"
                        >
                          <span>
                            Bộ Sưu Tập
                            <DownOutlined className="text-xs mt-[-3px] align-middle pl-1" />
                          </span>
                        </a>
                      </Space>
                    </a>
                  </Dropdown>
                </div>
                <li>
                  <a
                    className="px-3 py-11 text-070120 capitalize text-sm font-medium transition duration-500 text-black"
                    href="#"
                  >
                    <span>Sản Phẩm</span>
                  </a>
                </li>
                <li>
                  <a
                    className="px-3 py-11 text-070120 capitalize text-sm font-medium transition duration-500 text-black"
                    href="#"
                  >
                    <span>Mẫu Thiết Kế</span>
                  </a>
                </li>
                <li>
                  <a
                    className="px-3 py-11 text-070120 capitalize text-sm font-medium transition duration-500 text-black"
                    href="#"
                  >
                    <span>Blogs</span>
                  </a>
                </li>
                <li>
                  <a
                    className="px-3 py-11 text-070120 capitalize text-sm font-medium transition duration-500 text-black"
                    href="/tin"
                  >
                    <span>Tin Tức</span>
                  </a>
                </li>
              </ul>

              {user ? (
                <Dropdown
                  menu={{ items }}
                  trigger={["click"]}
                  placement="bottom"
                >
                  <button className="px-8 py-5 text-sm font-medium bg-gradient-to-r from-pink-500 via-pink-300-300 to-orange-400 border  transition-all duration-500 rounded-full text-white uppercaser">
                    <UserOutlined />
                    <span className="p-1  ">{user.username}</span>
                    <DownOutlined className="text-xs " />
                  </button>
                </Dropdown>
              ) : (
                <a href="/login">
                  <button className="px-8 py-5 text-sm font-medium bg-gradient-to-r from-pink-500 via-pink-300-300 to-orange-400 border  transition-all duration-500 rounded-full text-white uppercaser">
                    <UserOutlined />
                    <span className="p-1  ">Đăng Nhập</span>
                  </button>
                </a>
              )}
            </nav>
          </div>
        </div>
      </header>
      <section className="pt-180 overflow-hidden bg-gradient-to-r from-white via-gray-300  to-white p-8">
        <div className="max-w-1200 mx-auto">
          <div className="flex ">
            <div className="w-3/5  ml-20">
              <div className="title m-0 p-0 -">
                <p className="font-semibold text-3xl mb-3 mt-20 text-pink-500 animate__animated animate__fadeInUp  ">
                  We are The Best
                </p>
                <h2 className="text-6xl leading-tight font-extrabold text-gray-700 mb-6 animate__animated animate__fadeInUp animate__delay-1s">
                  - NOITHAT -
                </h2>
              </div>
              <div className="saCarousel__article">
                <p class="text-lg mb-2 animate__animated animate__fadeInUp animate__delay-2s">
                  Bạn muốn có một không gian nội thất riêng danh cho bạn và gia
                  đình <br /> - NOITHAT - có thể giúp bạn hiện thực hóa nó !!!!
                </p>
                <ul class="mb-2 animate__animated animate__fadeInUp animate__delay-3s">
                  <li className="pl-3">
                    <CheckOutlined className="mr-3" />
                    Minh Bạch - Uy Tín - Chất Lượng
                  </li>
                  <li className="pl-3">
                    <CheckOutlined className="mr-3" />
                    Tinh Tế - Sang Trọng - Đẳng Cấp
                  </li>
                </ul>
                <button class="px-8 py-5 text-base font-medium bg-gradient-to-r from-pink-500 via-pink-300-300 to-orange-400 bg-cover border  transition-all duration-500 rounded-full text-white uppercase leading-6 cursor-pointer focus:outline-none animate__animated animate__fadeInUp animate__delay-4s mt-4">
                  <a href="/trangchu">GET STARTED</a>
                </button>
              </div>
            </div>
            <div className="w-2/5 mr-20 ">
              <div className="w-570px ml-50px animate__animated animate__fadeInUp animate__delay-3s">
                <img
                  className="max-w-full flex"
                  src="/public/F/pic3_1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Test;
