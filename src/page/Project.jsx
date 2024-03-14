import { Col, Row } from "antd";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import api from "../config/axios";
import { Link } from "react-router-dom";

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

  const [blog, setBlog] = useState([]);

  const fetchBlog = async () => {
    const response = await api.get("/blog");
    setBlog(response.data);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <>
      <Header />

      <div className="pt-64 pb-64 pl-20 pr-20 bg-gradient-to-r from-white via-blue-200 to-white">
        <img src="https://www.lanha.vn/wp-content/uploads/2023/11/headline-web-2-3x-8-1300x243.png.webp" />
        <div className=" mr-10 ">
          <Row>
            {blog.map((item) => (
              <>
                <Col span={8}>
                  <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px]">
                    <Link to={`/duan/${item.id}`}>
                      <img
                        src={item.thumbnail}
                        style={{
                          borderRadius: "15px",
                          width: "700px",
                          height: "300px",
                          transform: isHovered1 ? "scale(1.2)" : "scale(1)",
                          transition: "transform 0.5s, filter 0.5s ease-out", // Chỉnh sửa transition để cả hiệu ứng mờ
                          filter: isHovered1 ? "brightness(40%)" : "brightness(100%)", // Thêm filter để làm mờ ảnh
                        }}
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}
                      />
                    </Link>
                  </div>
                  <a href="/duanchitiet">
                    <p className="text-sm font-bold ml-20 mt-5">{item.blogName}</p>
                  </a>
                </Col>
              </>
            ))}
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
