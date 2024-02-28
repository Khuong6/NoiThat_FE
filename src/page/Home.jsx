import { useState } from "react";
import reactLogo from "/src/assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import VideoHoverPlay from "../components/VideoHoverPlay";
import React from "react";
import "daisyui/dist/full.css";
import { FloatButton } from "antd";

export const Home = () => {
  return (
    <>
      <Header />
      <div>
        <div className="flex pt-40 rounded-[15px]">
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
                  Efurniture luôn cam kết mang đến cho bạn những sản phẩm nội
                  thất tốt nhất với giá cả hợp lý và dịch vụ chăm sóc khách hàng
                  tận tình.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-200 to-white w-200 h-200">
          <div class="grid grid-cols-3 gap-4 py-2 px-2">
            <div className="pt-10 py-5 px-5  ">
              <div className="text-3xl font-serif font-bold  ">
                Những sản phẩm nổi bật
              </div>
              <div className="text-2xl font-serif mt-5 font-bold pl-20">
                Được thực hiện bởi chúng tôi
              </div>

              <div className="stats stats-vertical mt-40 ml-10">
                <div className="stat">
                  <div className="stat-title font-semibold text-black">
                    Mẫu nội thất
                  </div>
                  <div className="stat-value">1000+</div>
                </div>

                <div className="stat">
                  <div className="stat-title font-semibold text-black">
                    Khách hàng hài lòng
                  </div>
                  <div className="stat-value">4,200+</div>
                </div>

                <div className="stat">
                  <div className="stat-title font-semibold text-black">
                    Nhân viên giàu kinh nghiệm
                  </div>
                  <div className="stat-value">120</div>
                </div>
              </div>
            </div>

            <div>
              <div class="grid grid-rows-2 grid-flow-col gap-2">
                <div>
                  <div>
                    <VideoHoverPlay videoUrl="https://coohom-biz-sg-s3.coohom.com/ins/static/homepage/video/p21s.webm" />
                  </div>
                </div>

                <div>
                  <div>
                    <VideoHoverPlay videoUrl="https://coohom-biz-sg-s3.coohom.com/ins/static/homepage/video/p22s.webm" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="grid grid-rows-2 grid-flow-col gap-2">
                <div>
                  <div>
                    <VideoHoverPlay videoUrl="https://coohom-biz-sg-s3.coohom.com/ins/static/homepage/video/p23s.webm" />
                  </div>
                </div>

                <div>
                  <div>
                    <VideoHoverPlay videoUrl="https://coohom-biz-sg-s3.coohom.com/ins/static/homepage/video/p24s.webm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FloatButton.BackTop />
      <Footer />
    </>
  );
};

export default Home;
