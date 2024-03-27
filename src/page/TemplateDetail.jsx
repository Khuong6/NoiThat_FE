import { Col, Row } from "antd";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import api from "../config/axios";

export const DetailedTemplate = () => {
  const params = useParams();
  const [template, setTemplate] = useState();

  const fetchTemplateDetail = async () => {
    const response = await api.get(`/template/${params.id}`);
    setTemplate(response.data);
  };

  useEffect(() => {
    fetchTemplateDetail();
  }, [params.id]);

  useEffect(() => {
    // Hàm này sẽ chạy mỗi khi component được render và mỗi khi buttonColor thay đổi
  }, 1000); // Thay đổi màu sắc mỗi giây

  // Xóa interval khi component unmount

  return (
    <>
      <Header />
      <div className="pt-10 pb-5 pl-20 pr-20 bg-gradient-to-r from-white via-blue-200 to-white  ">
        <div className="text text-center mb-5 text-4xl font-bold ">
          {template?.name}
        </div>
        <div className="text text-center mb-5 text-4xl font-bold ">
          <img
            alt="template img"
            src={template?.thumbnail}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="text text-center mb-3 text-2xl font-bold">
          <h2>Template Detail</h2>
        </div>

        {template?.templateSections?.map((item, index) => {
          //   if (index === 0) {
          //     return (
          //       <>
          //         <div>
          //           <ul style={{ listStyle: "none", padding: 0 }}>
          //             <li>{item.name}</li>
          //             <li
          //               key={index}
          //               style={{ padding: "10px", cursor: "pointer" }}
          //             >
          //               <img
          //                 alt={`Item ${index}`}
          //                 src={item.resources[0].url}
          //                 style={{
          //                   width: "100%",
          //                   height: "auto",
          //                   maxWidth: "400px",
          //                 }}
          //               />
          //             </li>
          //           </ul>
          //         </div>
          //       </>
          //     );
          //   }

          return (
            <>
              <Row
                gutter={[20, 20]}
                style={{
                  width: "100%",
                }}
              >
                <Col span={12} key={index}>
                  <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src={item.resources[0].url}
                        alt={`Item ${index + 1}`}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{item.name}</h2>
                      {/* <p>{template.templateSectionDTOS[0].name}</p> */}
                      {/* <div className="card-actions justify-end"></div> */}
                    </div>
                  </div>
                </Col>
              </Row>
            </>
          );
        })}
      </div>

      <Footer />
    </>
  );
};

export default DetailedTemplate;
