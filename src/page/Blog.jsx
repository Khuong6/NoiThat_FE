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
      <div className="pt-52  pb-10 bg-gradient-to-r from-white via-blue-200 to-white">
        <p className="pb-8 text-2xl text-center">
          Những Mẫu THiết Kế Của NoiTHat
        </p>
        <div className=" mr-10 ">
          <Row>
            <Col span={8}>
              <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px]">
                <a href="/xemblog">
                  <img
                    src="https://storage.googleapis.com/digital-platform/hinh_anh_goi_y_cach_trang_tri_phong_ngu_kieu_nhat_toi_gian_sang_trong_so_1_b267641110/hinh_anh_goi_y_cach_trang_tri_phong_ngu_kieu_nhat_toi_gian_sang_trong_so_1_b267641110.jpg"
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
                  src="https://betaviet.vn/public/upload/noi-that-chung-cu-co-dien-kieu-anhjpg-1690432295411.jpg"
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
                PHÒNG KHÁCH KIỂU CHÂU ÂU
              </p>
            </Col>
            <Col span={8}>
              <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px]">
                <img
                  src="https://decordi.vn/wp-content/uploads/2021/08/thiet-ke-phong-khach-doc-dao-kieu-nhat.jpg"
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
                PHÒNG KHÁCH KIỂU NHẬT
              </p>
            </Col>
          </Row>
          <Row className="mt-10">
            <Col span={8}>
              <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px]">
                <img
                  src="https://noithathpro.com/uploads/tu-duoi-bon-rua-mat/thiet-ke-bep-kieu-nhat-15.jpg"
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
              <p className="text-sm font-bold ml-20 mt-5">BẾP KIỂU NHẬT</p>
            </Col>
            <Col span={8}>
              <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px]">
                <img
                  src="https://donggia.vn/wp-content/uploads/2020/12/phong-khach-biet-thu-cao-cap-2048x1152.jpg"
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
              <p className="text-sm font-bold ml-20 mt-5">THIẾT KẾ HIỆN ĐẠI</p>
            </Col>
            <Col span={8}>
              <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px]">
                <img
                  src="https://amore-architecture.vn/wp-content/uploads/2021/07/phong-khach-vintage-min-3.jpg"
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
              <p className="text-sm font-bold ml-20 mt-5">THIẾT KẾ VINTAGE</p>
            </Col>
          </Row>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Blog;
