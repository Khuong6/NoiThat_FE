import React from "react";
import reactLogo from "/src/assets/react.svg";
import viteLogo from "/vite.svg";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Button, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { logout } from "../redux/feature/authenSlice";

export const Header = () => {
  const user = useSelector((store) => store.authen);
  const dispatch = useDispatch();
  const items = [
    {
      key: "1",
      label: (
        <Button>
          <Link to={"/profile"}>Setting</Link>
        </Button>
      ),
    },
    {
      key: "2",
      label: (
        <Button
          onClick={() => {
            dispatch(logout());
          }}
        >
          Logout
        </Button>
      ),
    },
  ];

  return (
    <>
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
                  href="http://vinmus.com/vn/du-an.html"
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
                  className="dropdown-content z-[1] menu p-2 shadow w-52  bg-white outline outline-gray-200 outline-2 rounded-[5px]  mt-4 left-[0.1px] "
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
                  href="http://vinmus.com/vn/san-pham.html"
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
                  href="http://vinmus.com/vn/tin-tuc.html"
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
                  href="http://vinmus.com/vn/he-thong-showroom.html"
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
                  href="https://vinmus.com/vn/e-catalogue.html"
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
                  href="http://vinmus.com/vn/y-tuong-thiet-ke.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Ý TƯỞNG THIẾT KẾ
                </a>
              </div>
            </div>
          </div>
        </div>

        {user ? (
          <>
            <div className="inline-flex flex-col items-start absolute top-[51px] left-[1218px]">
              <div className="flex items-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Before"
                  src="https://c.animaapp.com/jsxmGnQm/img/--before.svg"
                />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-vinmuscommine-shaft text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                  <Dropdown menu={{ items }} placement="bottomLeft">
                    <span>{user.username}</span>
                  </Dropdown>
                </div>
              </div>
            </div>
          </>
        ) : (
          <a href="/login">
            <div className="inline-flex flex-col items-start absolute top-[51px] left-[1218px]">
              <div className="flex items-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Before"
                  src="https://c.animaapp.com/jsxmGnQm/img/--before.svg"
                />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-vinmuscommine-shaft text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                  Thành viên
                </div>
              </div>
            </div>
          </a>
        )}

        <div className="absolute h-[30px] top-[46px] left-[140px] [font-family:'Roboto',Helvetica] font-bold text-vinmuscomblack text-[12px] tracking-[0] leading-[30px] whitespace-nowrap">
          HOTLINE: 012345678
        </div>
        <a
          className="absolute h-[20px] top-[51px] left-[285px] [font-family:'Roboto',Helvetica] font-normal text-[12px] tracking-[0] leading-[20px] whitespace-nowrap"
          href="http://vinmus.com/vn/lien-he.html"
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
