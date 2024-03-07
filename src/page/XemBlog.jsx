import { Col, Row } from "antd";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export const XemBlog = () => {
  const [selectedImage1, setSelectedImage1] = useState("");

  const [imageUrls1] = useState([
    "https://www.cleanipedia.com/images/5iwkm8ckyw6v/24iizryrzYPvGOQaUjlk7r/fd4bbe66b69e733b8da75e7dab27df6b/dGhpZXQta2UtcGhvbmctbmd1LWtpZXUtbmhhdC02LmpwZw/1800w/thi%E1%BA%BFt-k%E1%BA%BF-ph%C3%B2ng-ng%E1%BB%A7-ki%E1%BB%83u-nh%E1%BA%ADt.webp",
    "https://www.cleanipedia.com/images/5iwkm8ckyw6v/44aqtk9z7tmQJoPsmaCmac/47aa8f2ea1a50823b76904c263cffb2b/dGhpZXQta2UtcGhvbmctbmd1LWtpZXUtbmhhdC01LmpwZw/1800w/ph%C3%B2ng-ng%E1%BB%A7-ki%E1%BB%83u-nh%E1%BA%ADt-t%E1%BB%91i-gi%E1%BA%A3n.webp",
    "https://www.cleanipedia.com/images/5iwkm8ckyw6v/2fKfnn47DhD49w2GNuhGGn/efbb1079ec86420a2f0f287ae3e7528c/dGhpZXQta2UtcGhvbmctbmd1LWtpZXUtbmhhdC5qcGc/1800w/n%E1%BB%87m-futon-nh%E1%BA%ADt-b%E1%BA%A3n.webp",
    "https://www.cleanipedia.com/images/5iwkm8ckyw6v/xTm4OeBCC1sk8nWTvqKJk/aaf17ae2073a6c7e496952509ea7275f/dGhpZXQta2UtcGhvbmctbmd1LWtpZXUtbmhhdC0xLmpwZw/1800w/g%E1%BB%91i-takamakura-nh%E1%BA%ADt-b%E1%BA%A3n.webp",
  ]);

  useEffect(() => {
    setSelectedImage1(imageUrls1[0]);
  }, [imageUrls1]);

  const handleImageClick1 = (url) => {
    setSelectedImage1(url);
  };

  return (
    <>
      <Header />
      <div className="pt-64 mb-20 pl-20 pr-20  bg-gradient-to-r from-white via-blue-200 to-white">
        <div className=" mb-5 text-4xl font-bold text-center ">
          <p>
            Bí quyết thiết kế phòng ngủ kiểu Nhật <br /> đẹp, tối giản, hiện đại
          </p>
          <p className="pt-8 text-sm font-mono">
            Người Nhật không chỉ tối giản trong công việc, sinh hoạt hằng ngày,
            mà còn thể hiện thông qua cách họ sắp xếp và bố trí nội thất trong
            gia đình. Chính vì thế, rất nhiều người đặc biệt là giới trẻ yêu
            thích phong cách của người Nhật. Nổi bật nhất có thể kể đến các
            thiết kế phòng ngủ kiểu Nhật luôn thoáng đãng, không quá nhiều đồ
            đạc, nhưng lại đem đến cho mọi người cảm giác hiện đại và mới lạ.
          </p>
        </div>
        <div>
          <img
            className="pl-80"
            src="https://www.cleanipedia.com/images/5iwkm8ckyw6v/V0dmJdHrd2rWg0ucsXlB7/f953ad2d6713fb56ec303f253eb9e56f/dGhpZXQta2UtcGhvbmctbmd1LWtpZXUtbmhhdC03LmpwZw/600w/thi%E1%BA%BFt-k%E1%BA%BF-ph%C3%B2ng-ng%E1%BB%A7-ki%E1%BB%83u-nh%C3%A2t.avif"
            alt=""
          />
        </div>

        <div>
          <p className="pt-8 text-lg font-mono">
            Đặc trưng của phòng ngủ kiểu Nhật
          </p>
          <p className="pl-7 pt-5 font-normal">
            -Khi nhìn vào phòng ngủ truyền thống của Nhật Bản, về mặt chức năng,
            chúng không có điểm gì khác biệt so với các kiểu phòng ngủ khác,
            cũng được dùng để phục vụ cho sinh hoạt hằng ngày như ngủ, học tập,
            làm việc,... Thế nhưng, điểm đặc biệt của kiểu thiết kế này nằm ở
            cách bố trí, sắp xếp đồ nội thất và không gian tổng thể của căn
            phòng. Đây cũng là yếu tố khiến cho thiết kế phòng ngủ kiểu Nhật
            khác biệt hẳn so với các phong cách truyền thống.
          </p>
          <p className="pl-7 pt-5 font-normal">
            -Tất cả đồ nội thất được sử dụng trong phòng ngủ truyền thống của
            người Nhật đều có đặc điểm chung là có khoảng thông tầng thấp, hầu
            như không có hoặc có rất ít khoảng trống giữa đồ đạc và sàn nhà.
            Khác với kiểu phòng ngủ phương Tây, người Nhật không có thói quen
            ngủ trên giường nệm, thay vào đó họ sử dụng những tấm đệm truyền
            thống của Nhật Bản - gọi là Futon.
            <p className="pl-7 pt-5 font-normal" /> -Ngoài ra, họ còn sử dụng
            một loại gối chuyên dụng có tên gọi là Takamakura, ngoài mục đích
            dùng để tạo sự thoải mái khi nghỉ ngơi, chúng còn có thể bảo vệ và
            không làm hư hại tóc của bạn - đây là một phần trong văn hóa Geisha
            của Nhật Bản. Thông thường, hạt kiều mạch sẽ được sử dụng để làm lõi
            gối, tránh gây đau mỏi cổ vai gáy và cột sống khi nằm.
          </p>
        </div>
        <div className="px-10 py-10 "></div>
        <div className="mb-5  text-4xl font-bold ">Hình Ảnh Tham Khảo</div>
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
                        maxWidth: "300px",
                        borderRadius: "15px",
                        border:
                          selectedImage1 === url ? "2px solid blue" : "none",
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col span={18} className=" border-gray-300 pl-15 ">
            {selectedImage1 && (
              <img
                src={selectedImage1}
                alt="Selected Image"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "25px",
                  paddingLeft: "10px",
                }}
              />
            )}
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};
export default XemBlog;
