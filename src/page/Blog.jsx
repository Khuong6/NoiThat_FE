import { Col, Row } from "antd";
import Header from "../components/Header";
import { useState } from "react";
import Footer from "../components/Footer";

export const Blog = () => {
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
      <div className="pt-52  ">
        <p className="pb-8 text-2xl text-center">
          Những Mẫu THiết Kế Của NoiTHat
        </p>
        <div className=" mr-10 ">
          <Row>
            <Col span={8}>
              <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px]">
                <a href="/xemblog">
                  <img
                    src="data:image/jpeg;base64,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"
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
              <a href="/xemblog">
                <p className="text-sm font-bold ml-20 mt-5">
                  PHÒNG NGỦ KIỂU NHẬT
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

      <Footer />
    </>
  );
};
export default Blog;
