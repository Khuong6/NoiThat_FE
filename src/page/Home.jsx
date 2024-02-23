import { useState } from "react";
import reactLogo from "/src/assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="flex ">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://thegioidogo.com/wp-content/uploads/2022/12/noi-that-go-tu-nhien-12.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content lg:flex text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold ">Efurniture</h1>
              <p className="mb-5">
                <p>Efurniture chuyên cung cấp các sản phẩm nội thất</p>
                <p> hiện đại đẹp mắt và chất lượng cao</p>
                Efurniture luôn cam kết mang đến cho bạn những sản phẩm nội thất
                tốt nhất với giá cả hợp lý và dịch vụ chăm sóc khách hàng tận
                tình.
              </p>
              <button className="btn btn-primary">Bắt Đầu</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
