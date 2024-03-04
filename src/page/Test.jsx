import { useEffect, useState } from "react";
import { Col, Row } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Test = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [selectedImage1, setSelectedImage1] = useState("");
  const [selectedImage2, setSelectedImage2] = useState("");
  const [selectedImage3, setSelectedImage3] = useState("");
  const [imageUrls1] = useState([
    "https://www.lanha.vn/wp-content/uploads/2024/01/dsc03281-hdr.jpg.webp",
    "https://www.lanha.vn/wp-content/uploads/2024/01/dsc03291-hdr.jpg.webp",
    "https://www.lanha.vn/wp-content/uploads/2023/12/dsc02889-hdr-2-1153x800.jpg.webp",
    "https://www.lanha.vn/wp-content/uploads/2024/01/dsc03259-hdr.jpg.webp",
  ]);

  const [imageUrls2] = useState([
    "https://qhrenderpicoss.kujiale.com/r/2022/10/08/L3D336S62B15ENDPZP3O7YUWIPDCLUF3P3XE888_7680x4320.jpg?x-oss-process=image/resize,m_fill,w_1049,h_675/format,webp",
    "https://www.lanha.vn/wp-content/uploads/2024/01/dsc03291-hdr.jpg.webp",
    "https://www.lanha.vn/wp-content/uploads/2023/12/dsc02889-hdr-2-1153x800.jpg.webp",
    "https://www.lanha.vn/wp-content/uploads/2024/01/dsc03259-hdr.jpg.webp",
  ]);
  const [imageUrls3] = useState([
    "https://qhrenderpicoss.kujiale.com/r/2022/10/08/L3D336S62B15ENDPZP3O7YUWIPDCLUF3P3XE888_7680x4320.jpg?x-oss-process=image/resize,m_fill,w_1049,h_675/format,webp",
    "https://www.lanha.vn/wp-content/uploads/2024/01/dsc03291-hdr.jpg.webp",
    "https://www.lanha.vn/wp-content/uploads/2023/12/dsc02889-hdr-2-1153x800.jpg.webp",
    "https://www.lanha.vn/wp-content/uploads/2024/01/dsc03259-hdr.jpg.webp",
  ]);
  useEffect(() => {
    setSelectedImage1(imageUrls1[0]);
    setSelectedImage2(imageUrls2[0]);
    setSelectedImage3(imageUrls3[0]);
  }, [imageUrls1, imageUrls2, imageUrls3]);

  const handleImageClick1 = (url) => {
    setSelectedImage1(url);
  };

  const handleImageClick2 = (url) => {
    setSelectedImage2(url);
  };
  const handleImageClick3 = (url) => {
    setSelectedImage3(url);
  };
  return (
    <>
      <Header />
      <div className="pt-64 mb-20 pl-20 pr-20  ">
        <div className="ml-80 mb-5 text-4xl font-bold ">
          VINHOMES Q9 – JAPANDI – 90TR
        </div>
        <div className="px-10 py-10 ">
          <video
            controls
            className="mt-5 mb-30 rounded-[15px]"
            style={{ maxWidth: "100%" }}
          >
            <source
              src="https://design-community-us-s3.coohom.com/design/video/perm/MM65N2IKTIZYYAABAAAAABQ8.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mb-5 ml-80 text-4xl font-bold ">
          CHI TIẾT PHÒNG KHÁCH
        </div>
        <Row className="mb-20">
          <Col
            span={6}
            className="overflow-x-auto border border-gray-300 rounded p-15"
          >
            <div style={{ maxHeight: "300px" }}>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {imageUrls1.map((url, index) => (
                  <li
                    key={index}
                    style={{ padding: "8px", cursor: "pointer" }}
                    onClick={() => handleImageClick1(url)}
                  >
                    <img
                      src={url}
                      alt={`Item ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "400px",
                        borderRadius: "8px",
                        border:
                          selectedImage1 === url ? "2px solid blue" : "none",
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col span={18} className="border border-gray-300 rounded p-15">
            {selectedImage1 && (
              <img
                src={selectedImage1}
                alt="Selected Image"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            )}
          </Col>
        </Row>
        <div className="mb-5 ml-80 text-4xl font-bold ">CHI TIẾT PHÒNG NGỦ</div>
        <Row className="mb-20">
          <Col
            span={6}
            className="overflow-x-auto border border-gray-300 rounded p-15"
          >
            <div style={{ maxHeight: "300px" }}>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {imageUrls2.map((url, index) => (
                  <li
                    key={index}
                    style={{ padding: "8px", cursor: "pointer" }}
                    onClick={() => handleImageClick2(url)}
                  >
                    <img
                      src={url}
                      alt={`Item ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "400px",
                        borderRadius: "8px",
                        border:
                          selectedImage2 === url ? "2px solid blue" : "none",
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col span={18} className="border border-gray-300 rounded p-15">
            {selectedImage2 && (
              <img
                src={selectedImage2}
                alt="Selected Image"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            )}
          </Col>
        </Row>
        <div className=" mb-5 ml-80 text-4xl font-bold ">
          CHI TIẾT PHÒNG BẾP
        </div>
        <Row className="mb-20 ">
          <Col
            span={6}
            className="overflow-x-auto border border-gray-300 rounded p-15"
          >
            <div style={{ maxHeight: "300px" }}>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {imageUrls3.map((url, index) => (
                  <li
                    key={index}
                    style={{ padding: "8px", cursor: "pointer" }}
                    onClick={() => handleImageClick3(url)}
                  >
                    <img
                      src={url}
                      alt={`Item ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "400px",
                        borderRadius: "8px",
                        border:
                          selectedImage3 === url ? "2px solid blue" : "none",
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col span={18} className="border border-gray-300 rounded p-15">
            {selectedImage3 && (
              <img
                src={selectedImage3}
                alt="Selected Image"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            )}
          </Col>
        </Row>

        <Row>
          <Col span={8}>
            <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px]">
              <img
                src="https://www.lanha.vn/wp-content/uploads/2024/01/dsc03304.jpg.webp"
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
                src="https://www.lanha.vn/wp-content/uploads/2024/01/dsc03304.jpg.webp"
                style={{
                  borderRadius: "15px",
                  width: "700px",
                  height: "300px",
                  transform: isHovered2 ? "scale(1.2)" : "scale(1)",
                  transition: "transform 0.5s, filter 0.5s ease-out", // Chỉnh sửa transition để cả hiệu ứng mờ
                  filter: isHovered2
                    ? "brightness(70%) sepia(80%)"
                    : "brightness(100%)", // Thêm filter để làm mờ ảnh
                }}
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
              />
            </div>
          </Col>
          <Col span={8}>
            <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px]">
              <img
                src="https://www.lanha.vn/wp-content/uploads/2024/01/dsc03304.jpg.webp"
                style={{
                  borderRadius: "15px",
                  width: "700px",
                  height: "300px",
                  transform: isHovered3 ? "scale(1.2)" : "scale(1)",
                  transition: "transform 0.5s, filter 0.5s ease-out", // Chỉnh sửa transition để cả hiệu ứng mờ
                  filter: isHovered3
                    ? "brightness(70%) sepia(80%)"
                    : "brightness(100%)", // Thêm filter để làm mờ ảnh
                }}
                onMouseEnter={() => setIsHovered3(true)}
                onMouseLeave={() => setIsHovered3(false)}
              />
            </div>
          </Col>
          <Col span={8}>
            <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px] mt-5">
              <img
                src="https://www.lanha.vn/wp-content/uploads/2024/01/dsc03304.jpg.webp"
                style={{
                  borderRadius: "15px",
                  width: "700px",
                  height: "300px",
                  transform: isHovered4 ? "scale(1.2)" : "scale(1)",
                  transition: "transform 0.5s, filter 0.5s ease-out", // Chỉnh sửa transition để cả hiệu ứng mờ
                  filter: isHovered4
                    ? "brightness(70%) sepia(80%)"
                    : "brightness(100%)", // Thêm filter để làm mờ ảnh
                }}
                onMouseEnter={() => setIsHovered4(true)}
                onMouseLeave={() => setIsHovered4(false)}
              />
            </div>
          </Col>
          <Col span={8}>
            <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px] mt-5">
              <img
                src="https://www.lanha.vn/wp-content/uploads/2024/01/dsc03304.jpg.webp"
                style={{
                  borderRadius: "15px",
                  width: "700px",
                  height: "300px",
                  transform: isHovered5 ? "scale(1.2)" : "scale(1)",
                  transition: "transform 0.5s, filter 0.5s ease-out", // Chỉnh sửa transition để cả hiệu ứng mờ
                  filter: isHovered5
                    ? "brightness(70%) sepia(80%)"
                    : "brightness(100%)", // Thêm filter để làm mờ ảnh
                }}
                onMouseEnter={() => setIsHovered5(true)}
                onMouseLeave={() => setIsHovered5(false)}
              />
            </div>
          </Col>
          <Col span={8}>
            <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px] mt-5">
              <img
                src="https://www.lanha.vn/wp-content/uploads/2024/01/dsc03304.jpg.webp"
                style={{
                  borderRadius: "15px",
                  width: "700px",
                  height: "300px",
                  transform: isHovered6 ? "scale(1.2)" : "scale(1)",
                  transition: "transform 0.5s, filter 0.5s ease-out", // Chỉnh sửa transition để cả hiệu ứng mờ
                  filter: isHovered6
                    ? "brightness(70%) sepia(80%)"
                    : "brightness(100%)", // Thêm filter để làm mờ ảnh
                }}
                onMouseEnter={() => setIsHovered6(true)}
                onMouseLeave={() => setIsHovered6(false)}
              />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default Test;
