import { useEffect, useState } from "react";
import api from "../config/axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Col, Row } from "antd";

function PhongKhach() {
  const [template, setTemplate] = useState([]);

  useEffect(() => {
    fetchTemplate();
  }, []);

  const fetchTemplate = async (id) => {
    try {
      const response = await api.get(`/template/${id}`); // Sử dụng axios để gọi API
      setTemplate(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Header />

      {/* Hero section */}
      <div className="pt-10 pl-20 pr-20">
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
              <p className="mb-5">Vẻ đẹp của tổ ấm</p>
              <p>
                Phòng khách là nơi thể hiện rõ cá tính và phong cách thẩm mỹ
                riêng của gia chủ. Phòng khách không chỉ đáp ứng đầy đủ công
                năng mà còn phải đẹp và phong cách
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full pt-5 pb-10">
          <Row gutter={[20, 20]}>
            {template.map((template, index) => (
              <Col span={12} key={index}>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={template.thumbnail}
                      alt={template.name}
                      style={{
                        width: "700px",
                        height: "300px",
                      }}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{template.name}</h2>
                    {/* <p>{template.templateSectionDTOS[0].name}</p> */}
                    <div className="card-actions justify-end">
                      {/* <Link to={`/phogkhach/${template.id}`}> */}
                      <button className="btn btn-primary">Listen</button>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PhongKhach;
