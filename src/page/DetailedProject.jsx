import { Col, Row } from "antd";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import api from "../config/axios";

export const DetailedProject = () => {
  const params = useParams();
  const [blog, setBlog] = useState();

  const fetchBlogDetail = async () => {
    const response = await api.get(`/blog/${params.id}`);
    setBlog(response.data);
  };

  useEffect(() => {
    fetchBlogDetail();
  }, [params.id]);

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
      <div className="pt-10 pb-5 pl-20 pr-20 bg-gradient-to-r from-white via-blue-200 to-white  ">
        <div className="text text-center mb-5 text-4xl font-bold ">
          {blog?.blogName}
        </div>

        {blog?.blogSections?.map((item, index) => {
          if (index === 0) {
            return (
              <>
                <div
                  className="px-10 py-10 "
                  style={{ height: "100vh", overflow: "hidden" }}
                >
                  <video
                    controls
                    className="mt-5 mb-30 rounded-[15px]"
                    style={{
                      Width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    autoPlay
                    muted
                  >
                    <source src={item.resources[0].url} type="video/mp4" />
                  </video>
                </div>
              </>
            );
          }

          return (
            <>
              <ImageSection
                title={item.name}
                images={item?.resources.map((resource) => resource.url)}
              />
              {/* <div
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
                  {item.name}
                </div>
              </div>
              <Row className="mb-20">
                <Col
                  span={6}
                  className="overflow-x-auto border border-gray-300 rounded p-15"
                >
                  <div style={{ maxHeight: "300px" }}>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {item?.resources.map((resource, index) => (
                        <li
                          key={index}
                          style={{ padding: "8px", cursor: "pointer" }}
                          onClick={() => handleImageClick2(resource.url)}
                        >
                          <img
                            src={resource.url}
                            alt={`Item ${index + 1}`}
                            style={{
                              width: "100%",
                              height: "auto",
                              maxWidth: "400px",
                              borderRadius: "8px",
                              border:
                                selectedImage2 === resource.url
                                  ? "2px solid blue"
                                  : "none",
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
              </Row> */}
            </>
          );
        })}
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

const ImageSection = ({ title, images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  return (
    <>
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
          {title}
        </div>
      </div>
      <Row className="mb-20">
        <Col
          span={6}
          className="overflow-x-auto border border-gray-300 rounded p-15"
        >
          <div style={{ maxHeight: "300px" }}>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {images.map((resource, index) => (
                <li
                  key={index}
                  style={{ padding: "8px", cursor: "pointer" }}
                  onClick={() => setSelectedImage(resource)}
                >
                  <img
                    src={resource}
                    alt={`Item  ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxWidth: "400px",
                      borderRadius: "8px",
                      border:
                        selectedImage === resource ? "2px solid blue" : "none",
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col span={18} className="border border-gray-300 rounded p-15">
          {selectedImage && (
            <img
              src={selectedImage}
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
    </>
  );
};

export default DetailedProject;
