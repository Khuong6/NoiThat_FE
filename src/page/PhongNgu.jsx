import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import api from "../config/axios";

export const PhongNgu = () => {
  const [template, setTemplate] = useState([]);
  useEffect(() => {
    fetchTemplate();
  }, []);

  const fetchTemplate = async () => {
    try {
      const response = await api.get("/template"); // Sử dụng axios để gọi API
      setTemplate(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      <Header />
      <div className="pt-10 pl-20 pr-20">
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
                      <Link to={`/phongbep/${template.id}`}>
                        <button className="btn btn-primary">Listen</button>
                      </Link>
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
};

export default PhongNgu;
