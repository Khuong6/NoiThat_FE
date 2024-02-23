import { useState } from "react";
import reactLogo from "/src/assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const PhongKhach = () => {
  return (
    <>
      <Header />
      <div className="pt-64 pl-20 pr-20">
        <div
          className="hero min-h-screen rounded-[15px] "
          style={{
            backgroundImage:
              "url(https://donggia.vn/wp-content/uploads/2020/12/phong-khach-biet-thu-cao-cap.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-[15px]"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl font-bold">PHÒNG KHÁCH</h1>
              <p className="mb-5">
                Vẻ đẹp của tổ ấm
                <p>
                  Phòng khách là nơi thể hiện rõ cá tính và phong cách thẩm mỹ
                  riêng của gia chủ. Phòng khách không chỉ đáp ứng đầy đủ công
                  năng mà còn phải đẹp và phong cách
                </p>
              </p>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full pt-5 pb-10">
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PhongKhach;
