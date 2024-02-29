import { Col, Row } from "antd";
import Header from "../components/Header";
import { useState } from "react";
import Footer from "../components/Footer";

export const Project = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [isHovered9, setIsHovered9] = useState(false);

  return (
    <>
      <Header />
      <div className="pt-64 mb-20 pl-20 pr-20">
        <img src="https://www.lanha.vn/wp-content/uploads/2023/11/headline-web-2-3x-8-1300x243.png.webp" />
        <div className=" mr-10 ">
          <Row>
            <Col span={8}>
              <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px]">
                <a href="/duanchitiet">
                  <img
                    src="https://www.lanha.vn/wp-content/uploads/2023/09/12.jpeg.webp"
                    style={{
                      borderRadius: "15px",
                      width: "700px",
                      height: "300px",
                      transform: isHovered1 ? "scale(1.2)" : "scale(1)",
                      transition: "transform 0.5s, filter 0.5s ease-out", // Chỉnh sửa transition để cả hiệu ứng mờ
                      filter: isHovered1
                        ? "brightness(40%)"
                        : "brightness(100%)", // Thêm filter để làm mờ ảnh
                    }}
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                  />
                </a>
              </div>
              <a href="/duanchitiet">
                <p className="text-sm font-bold ml-20 mt-5">
                  VINHOMES Q9 – JAPANDI – 90TR
                </p>
              </a>
            </Col>
            <Col span={8}>
              <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px]">
                <img
                  src="https://www.lanha.vn/wp-content/uploads/2024/01/dsc03249-hdr-1200x800.jpg.webp"
                  style={{
                    borderRadius: "15px",
                    width: "700px",
                    height: "300px",
                    transform: isHovered2 ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.5s, filter 0.5s ease-out", // Chỉnh sửa transition để cả hiệu ứng mờ
                    filter: isHovered2 ? "brightness(40%)" : "brightness(100%)",
                  }}
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}
                />
              </div>
              <p className="text-sm font-bold ml-20 mt-5">
                VINHOMES Q9 – SANTORINI – 213TR
              </p>
            </Col>
            <Col span={8}>
              <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px]">
                <img
                  src="https://www.lanha.vn/wp-content/uploads/2023/10/dsc01654-hdr-1202x800.jpg.webp"
                  style={{
                    borderRadius: "15px",
                    width: "700px",
                    height: "300px",
                    transform: isHovered3 ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.5s, filter 0.5s ease-out", // Chỉnh sửa transition để cả hiệu ứng mờ
                    filter: isHovered3 ? "brightness(40%)" : "brightness(100%)",
                  }}
                  onMouseEnter={() => setIsHovered3(true)}
                  onMouseLeave={() => setIsHovered3(false)}
                />
              </div>
              <p className="text-sm font-bold ml-20 mt-5">
                TOPAZ – JAPANDI – 120TRs
              </p>
            </Col>
          </Row>
          <Row className="mt-10">
            <Col span={8}>
              <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px]">
                <img
                  src="https://www.lanha.vn/wp-content/uploads/2023/09/DSC00496-1200x800.jpg.webp"
                  style={{
                    borderRadius: "15px",
                    width: "700px",
                    height: "300px",
                    transform: isHovered4 ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.5s, filter 0.5s ease-out", // Chỉnh sửa transition để cả hiệu ứng mờ
                    filter: isHovered4 ? "brightness(40%)" : "brightness(100%)",
                  }}
                  onMouseEnter={() => setIsHovered4(true)}
                  onMouseLeave={() => setIsHovered4(false)}
                />
              </div>
              <p className="text-sm font-bold ml-20 mt-5">
                VINHOMES Q9 – HIỆN ĐẠI – 130TR
              </p>
            </Col>
            <Col span={8}>
              <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px]">
                <img
                  src="https://www.lanha.vn/wp-content/uploads/2023/09/4-2.jpg.webp"
                  style={{
                    borderRadius: "15px",
                    width: "700px",
                    height: "300px",
                    transform: isHovered5 ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.5s, filter 0.5s ease-out", // Chỉnh sửa transition để cả hiệu ứng mờ
                    filter: isHovered5 ? "brightness(40%)" : "brightness(100%)",
                  }}
                  onMouseEnter={() => setIsHovered5(true)}
                  onMouseLeave={() => setIsHovered5(false)}
                />
              </div>
              <p className="text-sm font-bold ml-20 mt-5">
                SUNRISE – INDOCHINE – 110TR
              </p>
            </Col>
            <Col span={8}>
              <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px]">
                <img
                  src="https://www.lanha.vn/wp-content/uploads/2023/09/IMG_9996-Enhanced-NR-1142x800.jpg.webp"
                  style={{
                    borderRadius: "15px",
                    width: "700px",
                    height: "300px",
                    transform: isHovered6 ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.5s, filter 0.5s ease-out", // Chỉnh sửa transition để cả hiệu ứng mờ
                    filter: isHovered6 ? "brightness(40%)" : "brightness(100%)",
                  }}
                  onMouseEnter={() => setIsHovered6(true)}
                  onMouseLeave={() => setIsHovered6(false)}
                />
              </div>
              <p className="text-sm font-bold ml-20 mt-5">
                NHÀ PHỐ VT – HIỆN ĐẠI – 150TR
              </p>
            </Col>
          </Row>
          <Row className="mt-10">
            <Col span={8}>
              <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px]">
                <img
                  src="https://www.lanha.vn/wp-content/uploads/2023/10/DSCF9747-1200x800.jpg.webp"
                  style={{
                    borderRadius: "15px",
                    width: "700px",
                    height: "300px",
                    transform: isHovered7 ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.5s, filter 0.5s ease-out", // Chỉnh sửa transition để cả hiệu ứng mờ
                    filter: isHovered7 ? "brightness(40%)" : "brightness(100%)",
                  }}
                  onMouseEnter={() => setIsHovered7(true)}
                  onMouseLeave={() => setIsHovered7(false)}
                />
              </div>
              <p className="text-sm font-bold ml-20 mt-5">
                NHÀ PHỐ TB – HIỆN ĐẠI – 120TR
              </p>
            </Col>
            <Col span={8}>
              <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px]">
                <img
                  src="https://www.lanha.vn/wp-content/uploads/2023/12/dsc02889-hdr-2-1153x800.jpg.webp"
                  style={{
                    borderRadius: "15px",
                    width: "700px",
                    height: "300px",
                    transform: isHovered8 ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.5s, filter 0.5s ease-out", // Chỉnh sửa transition để cả hiệu ứng mờ
                    filter: isHovered8 ? "brightness(40%)" : "brightness(100%)",
                  }}
                  onMouseEnter={() => setIsHovered8(true)}
                  onMouseLeave={() => setIsHovered8(false)}
                />
              </div>
              <p className="text-sm font-bold ml-20 mt-5">
                TOPAZ – HIỆN ĐẠI – 220TR
              </p>
            </Col>
            <Col span={8}>
              <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px]">
                <img
                  src="https://www.lanha.vn/wp-content/uploads/2023/12/dsc02467-enhanced-nr-1200x800.jpg.webp"
                  style={{
                    borderRadius: "15px",
                    width: "700px",
                    height: "300px",
                    transform: isHovered9 ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.5s, filter 0.5s ease-out", // Chỉnh sửa transition để cả hiệu ứng mờ
                    filter: isHovered9 ? "brightness(40%)" : "brightness(100%)",
                  }}
                  onMouseEnter={() => setIsHovered9(true)}
                  onMouseLeave={() => setIsHovered9(false)}
                />
              </div>
              <p className="text-sm font-bold ml-20 mt-5">
                TIỆM SPA TÂN BÌNH – 250TR
              </p>
            </Col>
          </Row>
        </div>
        <div className="mt-10 mb-20">
          <ul className="flex justify-center">
            <button className="block border border-gray-300 rounded-md py-2 px-4 bg-white text-gray-700 hover:bg-gray-50">
              Xem Thêm
            </button>
          </ul>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};
export default Project;
