import { useState } from "react";
import reactLogo from "/src/assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const PhongNgu = () => {
  return (
    <>
      <Header />
      <div className="pt-64 pl-20 pr-20">
        <div
          className="hero min-h-screen rounded-[15px] "
          style={{
            backgroundImage:
              "url(https://noithatlacgia.vn/wp-content/uploads/2021/11/thiet-ke-noi-that-nha-pho-hien-dai-anh-binh-24.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-[15px]"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl font-bold">PHÒNG NGỦ</h1>
              <p className="mb-5">
                Sáng tạo, trẻ trung và đa dạng trong từng thiết kế.
                <p>
                  Một thiết kế phòng ngủ nhỏ đẹp sẽ giúp tạo nên một không gian
                  nghỉ ngơi thư giãn, thoải mái, vì vậy, biết cách thiết kế sao
                  cho đảm bảo công năng thẩm mỹ là rất quan trọng.
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

export default PhongNgu;
