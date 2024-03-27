import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import api from "../config/axios";
import { Col, Row } from "antd";
import { Link, useParams } from "react-router-dom";

const PhongBep = () => {
  const { id } = useParams();
  const [template, setTemplate] = useState([]);
  const [projectType, setProjectType] = useState([]);

  const fetchProjectType = async () => {
    try {
      const response = await api.get("/projectTypes"); // Sử dụng axios để gọi API
      console.log(response.data.filter((item) => item.id === Number(id)));
      setProjectType(response.data.filter((item) => item.id === Number(id))[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchProjectType();
    fetchTemplate();
  }, [id]);
  const fetchTemplate = async () => {
    try {
      const response = await api.get(`/template-ProjectType/${id}`); // Sử dụng axios để gọi API
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
              "url(https://spacet-release.s3.ap-southeast-1.amazonaws.com/img/blog/2023-07-25/6-bo-cuc-phong-bep-pho-bien-nhat-kem-ban-ve-minh-hoa-64bfaea78f7873324f1de014.webp)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-[15px]"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl font-bold">{projectType?.type}</h1>
              <p className="mb-5">
                Sáng tạo, trẻ trung và đa dạng trong từng thiết kế
                <p>
                  Xu hướng thiết kế nội thất phòng bếp hiện nay rất đa dạng Gia
                  chủ có thể chọn kiểu bếp không gian mở liền phòng khách, bố
                  trí phòng bếp có bàn đảo, các mẫu tủ bếp đẹp thông minh
                </p>
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
                      src={
                        template.thumbnail
                          ? template.thumbnail
                          : "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                      }
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
                      <Link to={`/template-detail/${template.id}`}>
                        <button className="btn btn-primary">Listen</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {/* <div className="card lg:card-side bg-base-100 shadow-xl ">
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
            </div> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PhongBep;
