import { Col, Row } from "antd";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export const DetailedProject = () => {
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
  const [buttonColor, setButtonColor] = useState("#3498db"); // Màu sắc mặc định của button

  useEffect(() => {
    // Hàm này sẽ chạy mỗi khi component được render và mỗi khi buttonColor thay đổi
    const intervalId = setInterval(() => {
      // Đổi màu sắc của button ngẫu nhiên
      const randomColor = getRandomColor();
      setButtonColor(randomColor);
    }, 1000); // Thay đổi màu sắc mỗi giây

    // Xóa interval khi component unmount
    return () => clearInterval(intervalId);
  }, [buttonColor]);

  const getRandomColor = () => {
    // Hàm này trả về một màu sắc ngẫu nhiên
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <>
      <Header />
      <div className="pt-64 pb-5 pl-20 pr-20 bg-gradient-to-r from-white via-blue-200 to-white  ">
        <div className="ml-80 mb-5 text-4xl font-bold ">
          VINHOMES Q9 – JAPANDI – 90TR
        </div>
        <div
          className="px-10 py-10 "
          style={{ height: "100vh", overflow: "hidden" }}
        >
          <video
            controls
            className="mt-5 mb-30 rounded-[15px]"
            style={{ Width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source
              src="https://design-community-us-s3.coohom.com/design/video/perm/MM65N2IKTIZYYAABAAAAABQ8.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5rem",
            marginBottom: "2rem",
          }}
        >
          <div
            className="text-3xl font-semibold"
            style={{ fontFamily: "Arial", fontStyle: "italic" }}
          >
            Chi Tiết Phòng Khách
          </div>
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5rem",
            marginBottom: "2rem",
          }}
        >
          <div
            className="text-3xl font-semibold"
            style={{ fontFamily: "Arial", fontStyle: "italic" }}
          >
            Chi Tiết Phòng Ngủ
          </div>
        </div>
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5rem",
            marginBottom: "2rem",
          }}
        >
          <div
            className="text-3xl font-semibold"
            style={{ fontFamily: "Arial", fontStyle: "italic" }}
          >
            Chi Tiết Phong Bếp
          </div>
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
        <div className="flex justify-center items-center">
          <div className="text-4xl font-bold">
            Những Dự Án Đã Hoàn Thiện Khác
          </div>
        </div>
        <Row>
          <Col span={8}>
            <div className=" mt-5 ml-5 border border-gray-300 overflow-hidden rounded-[15px]">
              <div className="  border border-gray-300 overflow-hidden rounded-[15px]">
                <img
                  src="https://feeldecor.com.vn/wp-content/uploads/2017/05/khach-4.jpg"
                  style={{
                    borderRadius: "15px",

                    transform: isHovered1 ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.5s",
                  }}
                  onMouseEnter={() => setIsHovered1(true)}
                  onMouseLeave={() => setIsHovered1(false)}
                />
              </div>
              <div className="px-5 py-5 pl-5 ">
                <button className="  ml-10 font-medium hover:text-blue-500">
                  VẺ ĐẸP TỐI GIẢN CỦA GIAN BẾP HIỆN ĐẠI
                </button>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className=" mt-5 ml-5 border border-gray-300 overflow-hidden rounded-[15px]">
              <div className="  border border-gray-300 overflow-hidden rounded-[15px]">
                <img
                  src="https://feeldecor.com.vn/wp-content/uploads/2017/05/khach-4.jpg"
                  style={{
                    borderRadius: "15px",

                    transform: isHovered2 ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.5s",
                  }}
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}
                />
              </div>
              <div className="px-5 py-5 pl-5 ">
                <button className="  ml-10 font-medium hover:text-blue-500">
                  VẺ ĐẸP TỐI GIẢN CỦA GIAN BẾP HIỆN ĐẠI
                </button>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className=" mt-5 ml-5 border border-gray-300 overflow-hidden rounded-[15px]">
              <div className="  border border-gray-300 overflow-hidden rounded-[15px]">
                <img
                  src="https://feeldecor.com.vn/wp-content/uploads/2017/05/khach-4.jpg"
                  style={{
                    borderRadius: "15px",

                    transform: isHovered6 ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.5s",
                  }}
                  onMouseEnter={() => setIsHovered6(true)}
                  onMouseLeave={() => setIsHovered6(false)}
                />
              </div>
              <div className="px-5 py-5 pl-5 ">
                <button className="  ml-10 font-medium hover:text-blue-500">
                  VẺ ĐẸP TỐI GIẢN CỦA GIAN BẾP HIỆN ĐẠI
                </button>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className=" mt-5 ml-5 border border-gray-300 overflow-hidden rounded-[15px]">
              <div className="  border border-gray-300 overflow-hidden rounded-[15px]">
                <img
                  src="https://feeldecor.com.vn/wp-content/uploads/2017/05/khach-4.jpg"
                  style={{
                    borderRadius: "15px",

                    transform: isHovered3 ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.5s",
                  }}
                  onMouseEnter={() => setIsHovered3(true)}
                  onMouseLeave={() => setIsHovered3(false)}
                />
              </div>
              <div className="px-5 py-5 pl-5 ">
                <button className="  ml-10 font-medium hover:text-blue-500">
                  VẺ ĐẸP TỐI GIẢN CỦA GIAN BẾP HIỆN ĐẠI
                </button>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className=" mt-5 ml-5 border border-gray-300 overflow-hidden rounded-[15px]">
              <div className="  border border-gray-300 overflow-hidden rounded-[15px]">
                <img
                  src="https://feeldecor.com.vn/wp-content/uploads/2017/05/khach-4.jpg"
                  style={{
                    borderRadius: "15px",

                    transform: isHovered4 ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.5s",
                  }}
                  onMouseEnter={() => setIsHovered4(true)}
                  onMouseLeave={() => setIsHovered4(false)}
                />
              </div>
              <div className="px-5 py-5 pl-5 ">
                <button className="  ml-10 font-medium hover:text-blue-500">
                  VẺ ĐẸP TỐI GIẢN CỦA GIAN BẾP HIỆN ĐẠI
                </button>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className=" mt-5 ml-5 border border-gray-300 overflow-hidden rounded-[15px]">
              <div className="  border border-gray-300 overflow-hidden rounded-[15px]">
                <img
                  src="https://feeldecor.com.vn/wp-content/uploads/2017/05/khach-4.jpg"
                  style={{
                    borderRadius: "15px",

                    transform: isHovered5 ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.5s",
                  }}
                  onMouseEnter={() => setIsHovered5(true)}
                  onMouseLeave={() => setIsHovered5(false)}
                />
              </div>
              <div className="px-5 py-5 pl-5 ">
                <button className="  ml-10 font-medium hover:text-blue-500">
                  VẺ ĐẸP TỐI GIẢN CỦA GIAN BẾP HIỆN ĐẠI
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="flex flex-col justify-center items-center ">
        <img
          className="rounded-[15px] w-full "
          loading="lazy"
          srcSet="//qhstatic-sg-s3.coohom.com/image/png/1669707989886/E9FC6F646B6CEFD2ED934258842A35F0.png"
          alt="Where ideas turn into stunning designs"
        />
        <div className="absolute text-center w-full">
          <p className="text-3xl font-bold text-white p-4">
            Những dự án đã được thực hiện đẹp nhất thời đại
          </p>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
            style={{ backgroundColor: buttonColor }}
          >
            Biết thêm chi tiết
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default DetailedProject;
