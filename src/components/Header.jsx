import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { logout } from "../redux/feature/authenSlice";
import { DownOutlined, UserOutlined, CheckOutlined } from "@ant-design/icons";
import "animate.css";

export const Header = () => {
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
=======
        <Button>
          <Link to={"/quotationrequest"}>Quotation</Link>
        </Button>
      ),
    },
    {
      key: "3",
      label: (
        <Button

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

      <header className="animate__flipInX animate__animated bg-gradient-to-r from-white via-blue-200 to-white rounded-b-full sticky top-0 z-50">
        <div class="pr-24 py-4">
          <div class="flex justify-between items-end ">
            <a href="/trangchu">
              {/* <img
                className="w-36 rounded-3xl"
                src="/public/Capture.PNG"
                alt=""
              /> */}
            </a>

      <div className="bg-white flex flex-row justify-center w-full">
        <div className="absolute w-[1200px] h-[50px] top-[85px] left-[120px] rounded-[10px]">
          <div className="absolute w-[1200px] h-[50px] top-0 left-0 bg-[#37667e] rounded-[10px] " />
          <div className="flex w-[1200px] items-center pl-0 pr-[223.19px] py-0 absolute top-0 left-0 rounded-[10px]">
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="flex flex-col items-start pl-[20px] pr-[19.31px] py-[14px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-vinmuscomnero text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                  ESTRO
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="flex flex-col items-start pl-[20px] pr-[19.2px] py-[14px] relative self-stretch w-full flex-[0_0_auto]">
                <a
                  className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-vinmuscomnero text-[14px] tracking-[0] leading-[22px] whitespace-nowrap"
                  href=""
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  CÔNG TRÌNH
                </a>
              </div>
            </div>
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="dropdown dropdown-hover flex pl-[20px] pr-[20.44px] py-[14px] self-stretch w-full bg-[#7b92aa] flex-col items-start relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-vinmuscomnero text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                  BỘ SƯU TẬP
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52  bg-white outline outline-gray-200 outline-2 rounded-[5px]  mt-4 left-[0.1px] "
                >
                  <li>
                    <a href="/PhongNgu">Phòng Ngủ</a>
                  </li>
                  <li>
                    <a href="/PhongKhach">Phòng Khách</a>
                  </li>
                  <li>
                    <a href="/PhongBep">Phòng Bếp</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="flex flex-col items-start pl-[20px] pr-[19.06px] py-[14px] relative self-stretch w-full flex-[0_0_auto]">
                <a
                  className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-vinmuscomnero text-[14px] tracking-[0] leading-[22px] whitespace-nowrap"
                  href=""
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  SẢN PHẨM
                </a>
              </div>
            </div>
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="flex flex-col items-start pl-[20px] pr-[19.55px] py-[14px] relative self-stretch w-full flex-[0_0_auto]">
                <a
                  className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-vinmuscomnero text-[14px] tracking-[0] leading-[22px] whitespace-nowrap"
                  href=""
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  TIN TỨC
                </a>
              </div>
            </div>
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="flex flex-col items-start pl-[20px] pr-[19.44px] py-[14px] relative self-stretch w-full flex-[0_0_auto]">
                <a
                  className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-vinmuscomnero text-[14px] tracking-[0] leading-[22px] whitespace-nowrap"
                  href=""
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  SHOWROOM
                </a>
              </div>
            </div>
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="flex flex-col items-start pl-[20px] pr-[19.42px] py-[14px] relative self-stretch w-full flex-[0_0_auto]">
                <a
                  className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-vinmuscomnero text-[14px] tracking-[0] leading-[22px] whitespace-nowrap"
                  href=""
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  E-CATALOGUE
                </a>
              </div>
            </div>
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="flex flex-col items-start pl-[20px] pr-[19.39px] py-[14px] relative self-stretch w-full flex-[0_0_auto]">
                <a
                  className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-vinmuscomnero text-[14px] tracking-[0] leading-[22px] whitespace-nowrap"
                  href=""
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Ý TƯỞNG THIẾT KẾ
                </a>
              </div>
            </div>
          </div>
        </div>


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
                          className="px-3 py-11  capitalize text-sm font-medium transition duration-500 text-black"
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
                    href="/sanPhamDon"
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
                    href=""
                  >
                    <span>Tin Tức</span>
                  </a>
                </li>
                <li>
                  <a
                    className="px-3 py-11 text-070120 capitalize text-sm font-medium transition duration-500 text-black"
                    href=""
                  >
                    <span>Công Trình</span>
                  </a>
                </li>
              </ul>

              {user ? (
                <Dropdown
                  menu={{ items }}
                  trigger={["click"]}
                  placement="bottom"
                >
                  <button className="px-8 py-5 text-sm font-medium bg-gradient-to-r from-yellow-500  to-orange-500 border transition-all duration-500 rounded-full text-white uppercaser">
                    <UserOutlined />
                    <span className="p-1  ">{user.username}</span>
                    <DownOutlined className="text-xs " />
                  </button>
                </Dropdown>
              ) : (
                <a href="/login">
                  <button className="px-8 py-5 text-sm font-medium bg-gradient-to-r from-yellow-500  to-orange-500 border transition-all duration-500 rounded-full text-white uppercaser">
                    <UserOutlined />
                    <span className="p-1  ">Đăng Nhập</span>
                  </button>
                </a>
              )}
            </nav>
          </div>
        </div>

      </header>

        <a
          className="absolute h-[20px] top-[51px] left-[285px] [font-family:'Roboto',Helvetica] font-normal text-[12px] tracking-[0] leading-[20px] whitespace-nowrap"
          href=""
          rel="noopener noreferrer"
          target="_blank"
        >
          EMAIL - HỎI ĐÁP
        </a>
      </div>

    </>
  );
};

export default Header;
