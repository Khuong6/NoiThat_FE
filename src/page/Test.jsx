// import { useState } from "react";
// import Footer from "../components/Footer";
// import Header from "../components/Header";

import { Col, Row, Menu } from "antd";
import { useState } from "react";
import Header from "../components/Header";

export const Test = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <Header />
      <div className="pt-64 pl-20 pr-20">
        <div
          className="mt-10 mb-10"
          style={{ width: "500px", height: "500px" }}
        >
          <Row>
            <Col span={18}>
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Large Image"
                  style={{ width: "100%", height: "100%" }}
                />
              )}
            </Col>
            <Col span={6} style={{ overflowY: "auto", maxHeight: "500px" }}>
              
              <Menu
                onClick={({ key }) => handleImageSelect(key)}
                style={{ maxHeight: "100%", overflowY: "auto" }}
              >
                {[1, 2, 3, 4, 5].map((item) => (
                  <Menu.Item
                    key={`https://www.lanha.vn/wp-content/uploads/2023/09/${item}-2.jpeg`}
                  >
                    <img
                      src={`https://www.lanha.vn/wp-content/uploads/2023/09/${item}-2.jpeg`}
                      alt={`https://www.lanha.vn/wp-content/uploads/2023/09/${item}-2.jpeg`}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Menu.Item>
                ))}
              </Menu>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Test;
