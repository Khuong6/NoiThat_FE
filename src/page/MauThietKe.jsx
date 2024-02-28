import React from "react";
import { useState, useEffect } from "react";
import reactLogo from "/src/assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Button, Divider, Typography } from "antd";
import { Pagination } from "antd";
import { Card, Col, Row } from "antd";
const { Meta } = Card;
const { Title, Paragraph, Text, Link } = Typography;

const blockContent = ``;

const MauThietKe = () => {
  return (
    <>
      <Header />
      <div className="pt-64 pl-20 pr-20">
        <div>
          <Typography>
            <Title className="text-center">Mẫu Thiết Kế</Title>
            <Paragraph className="text-center ">
              Chinh phục đỉnh cao trong nghệ thuật kiến tạo không gian sống – đó
              là thiết kế nội thất theo phong cách gia chủ. Tại NoiThat, chúng
              tôi lắng nghe khách hàng, cùng khách hàng làm nên các tác phẩm
              mang đậm dấu ấn cá nhân riêng biệt. Chinh phục hoàn toàn sự hài
              lòng của cả những khách hàng khó tính nhất. Cùng NoiThat bước vào
              hành trình sáng tạo đứng trên xu hướng, nơi bạn hãnh diện gọi đó
              là Phong Cách Của Tôi!
            </Paragraph>
            <Title level={2}>Guidelines and Resources</Title>

            {/* Content 1 & 2*/}
            <div className="flex w-full pt">
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                    alt="Album"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">New album is released!</h2>
                  <p>Click the button to listen on Spotiwhy app.</p>
                  <div className="card-actions justify-end">
                    <a href="https://www.youtube.com/" target="_blank">
                      <button className="btn btn-primary ">Listen</button>
                    </a>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="divider divider-horizontal"></div>
              {/*  */}
              <div className="card lg:card-side bg-base-100 shadow-xl ">
                <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                    alt="Album"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">New album is released!</h2>
                  <p>Click the button to listen on Spotiwhy app.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="divider"></div>
            {/* Content 3 & 4 */}
            <div className="flex w-full">
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                    alt="Album"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">New album is released!</h2>
                  <p>Click the button to listen on Spotiwhy app.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="divider divider-horizontal"></div>
              {/*  */}
              <div className="card lg:card-side bg-base-100 shadow-xl ">
                <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                    alt="Album"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">New album is released!</h2>
                  <p>Click the button to listen on Spotiwhy app.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="divider"></div>
            {/* Content 5 & 6 */}
            <div className="flex w-full">
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                    alt="Album"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">New album is released!</h2>
                  <p>Click the button to listen on Spotiwhy app.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="divider divider-horizontal"></div>
              {/*  */}
              <div className="card lg:card-side bg-base-100 shadow-xl ">
                <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                    alt="Album"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">New album is released!</h2>
                  <p>Click the button to listen on Spotiwhy app.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div>
                </div>
              </div>
            </div>

            <Divider />
          </Typography>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MauThietKe;
