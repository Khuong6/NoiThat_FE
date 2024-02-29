import { Col, Row } from "antd";
import Header from "../components/Header";
import { useState } from "react";

export const DetailedProject = () => {
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
      <div className="pt-64 mb-20 pl-20 pr-20  ">
        <div className="  ml-80 mb-10 text-4xl  font-bold ">
          VINHOMES Q9 – JAPANDI – 90TR
        </div>
        <Row>
          <Col span={24}>
            <div className=" ml-10 ">
              <img
                src="https://www.lanha.vn/wp-content/uploads/2024/01/dsc03249-hdr-1200x800.jpg.webp"
                className="  mt-5 mb-5 rounded-[15px]  "
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px]">
              <img
                src="https://www.lanha.vn/wp-content/uploads/2023/09/12.jpeg.webp"
                style={{
                  borderRadius: "15px",
                  width: "700px",
                  height: "300px",
                  transform: isHovered1 ? "scale(1.2)" : "scale(1)",
                  transition: "transform 0.5s, filter 0.5s ease-out", // Chỉnh sửa transition để cả hiệu ứng mờ
                  filter: isHovered1
                    ? "brightness(70%) sepia(80%)"
                    : "brightness(100%)", // Thêm filter để làm mờ ảnh
                }}
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
              />
            </div>
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
                  filter: isHovered2
                    ? "brightness(70%) sepia(80%)"
                    : "brightness(100%)",
                }}
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
              />
            </div>
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
                  filter: isHovered3
                    ? "brightness(70%) sepia(80%)"
                    : "brightness(100%)",
                }}
                onMouseEnter={() => setIsHovered3(true)}
                onMouseLeave={() => setIsHovered3(false)}
              />
            </div>
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
                  filter: isHovered4
                    ? "brightness(70%) sepia(80%)"
                    : "brightness(100%)",
                }}
                onMouseEnter={() => setIsHovered4(true)}
                onMouseLeave={() => setIsHovered4(false)}
              />
            </div>
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
                  filter: isHovered5
                    ? "brightness(70%) sepia(80%)"
                    : "brightness(100%)",
                }}
                onMouseEnter={() => setIsHovered5(true)}
                onMouseLeave={() => setIsHovered5(false)}
              />
            </div>
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
                  filter: isHovered6
                    ? "brightness(70%) sepia(80%)"
                    : "brightness(100%)",
                }}
                onMouseEnter={() => setIsHovered6(true)}
                onMouseLeave={() => setIsHovered6(false)}
              />
            </div>
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
                  filter: isHovered7
                    ? "brightness(70%) sepia(80%)"
                    : "brightness(100%)",
                }}
                onMouseEnter={() => setIsHovered7(true)}
                onMouseLeave={() => setIsHovered7(false)}
              />
            </div>
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
                  filter: isHovered8
                    ? "brightness(70%) sepia(80%)"
                    : "brightness(100%)",
                }}
                onMouseEnter={() => setIsHovered8(true)}
                onMouseLeave={() => setIsHovered8(false)}
              />
            </div>
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
                  filter: isHovered9
                    ? "brightness(70%) sepia(80%)"
                    : "brightness(100%)",
                }}
                onMouseEnter={() => setIsHovered9(true)}
                onMouseLeave={() => setIsHovered9(false)}
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default DetailedProject;
