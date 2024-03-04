
import { useEffect, useState } from "react";
import { Col, Row } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Test = () => {
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
  return (
    <>
      <Header />
      <div className="pt-64 mb-20 pl-20 pr-20  ">
        <div className="ml-80 mb-5 text-4xl font-bold ">
          VINHOMES Q9 – JAPANDI – 90TR
        </div>
        <div className="px-10 py-10 ">
          <video
            controls
            className="mt-5 mb-30 rounded-[15px]"
            style={{ maxWidth: "100%" }}
          >
            <source
              src="https://design-community-us-s3.coohom.com/design/video/perm/MM65N2IKTIZYYAABAAAAABQ8.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mb-5 ml-80 text-4xl font-bold ">
          CHI TIẾT PHÒNG KHÁCH
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
        <div className="mb-5 ml-80 text-4xl font-bold ">CHI TIẾT PHÒNG NGỦ</div>
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
        <div className=" mb-5 ml-80 text-4xl font-bold ">
          CHI TIẾT PHÒNG BẾP
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

        <Row>
          <Col span={8}>
            <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px]">
              <img
                src="https://www.lanha.vn/wp-content/uploads/2024/01/dsc03304.jpg.webp"
                style={{
                  borderRadius: "15px",
                  width: "700px",
                  height: "300px",
                  transform: isHovered1 ? "scale(1.2)" : "scale(1)",
                  transition: "transform 0.5s, filter 0.5s ease-out", // Chỉnh sửa transition để cả hiệu ứng mờ
                  filter: isHovered1
                    ? "brightness(70%) sepia(80%)"
                    : "brightness(100%)", // Thêm filter để làm mờ ảnh
                }}
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
              />
            </div>
          </Col>
          <Col span={8}>
            <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px]">
              <img
                src="https://www.lanha.vn/wp-content/uploads/2024/01/dsc03304.jpg.webp"
                style={{
                  borderRadius: "15px",
                  width: "700px",
                  height: "300px",
                  transform: isHovered2 ? "scale(1.2)" : "scale(1)",
                  transition: "transform 0.5s, filter 0.5s ease-out", // Chỉnh sửa transition để cả hiệu ứng mờ
                  filter: isHovered2
                    ? "brightness(70%) sepia(80%)"
                    : "brightness(100%)", // Thêm filter để làm mờ ảnh
                }}
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
              />
            </div>
          </Col>
          <Col span={8}>
            <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px]">
              <img
                src="https://www.lanha.vn/wp-content/uploads/2024/01/dsc03304.jpg.webp"
                style={{
                  borderRadius: "15px",
                  width: "700px",
                  height: "300px",
                  transform: isHovered3 ? "scale(1.2)" : "scale(1)",
                  transition: "transform 0.5s, filter 0.5s ease-out", // Chỉnh sửa transition để cả hiệu ứng mờ
                  filter: isHovered3
                    ? "brightness(70%) sepia(80%)"
                    : "brightness(100%)", // Thêm filter để làm mờ ảnh
                }}
                onMouseEnter={() => setIsHovered3(true)}
                onMouseLeave={() => setIsHovered3(false)}
              />
            </div>
          </Col>
          <Col span={8}>
            <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px] mt-5">
              <img
                src="https://www.lanha.vn/wp-content/uploads/2024/01/dsc03304.jpg.webp"
                style={{
                  borderRadius: "15px",
                  width: "700px",
                  height: "300px",
                  transform: isHovered4 ? "scale(1.2)" : "scale(1)",
                  transition: "transform 0.5s, filter 0.5s ease-out", // Chỉnh sửa transition để cả hiệu ứng mờ
                  filter: isHovered4
                    ? "brightness(70%) sepia(80%)"
                    : "brightness(100%)", // Thêm filter để làm mờ ảnh
                }}
                onMouseEnter={() => setIsHovered4(true)}
                onMouseLeave={() => setIsHovered4(false)}
              />
            </div>
          </Col>
          <Col span={8}>
            <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px] mt-5">
              <img
                src="https://www.lanha.vn/wp-content/uploads/2024/01/dsc03304.jpg.webp"
                style={{
                  borderRadius: "15px",
                  width: "700px",
                  height: "300px",
                  transform: isHovered5 ? "scale(1.2)" : "scale(1)",
                  transition: "transform 0.5s, filter 0.5s ease-out", // Chỉnh sửa transition để cả hiệu ứng mờ
                  filter: isHovered5
                    ? "brightness(70%) sepia(80%)"
                    : "brightness(100%)", // Thêm filter để làm mờ ảnh
                }}
                onMouseEnter={() => setIsHovered5(true)}
                onMouseLeave={() => setIsHovered5(false)}
              />
            </div>
          </Col>
          <Col span={8}>
            <div className="border ml-5 border-gray-300 overflow-hidden rounded-[15px] mt-5">
              <img
                src="https://www.lanha.vn/wp-content/uploads/2024/01/dsc03304.jpg.webp"
                style={{
                  borderRadius: "15px",
                  width: "700px",
                  height: "300px",
                  transform: isHovered6 ? "scale(1.2)" : "scale(1)",
                  transition: "transform 0.5s, filter 0.5s ease-out", // Chỉnh sửa transition để cả hiệu ứng mờ
                  filter: isHovered6
                    ? "brightness(70%) sepia(80%)"
                    : "brightness(100%)", // Thêm filter để làm mờ ảnh
                }}
                onMouseEnter={() => setIsHovered6(true)}
                onMouseLeave={() => setIsHovered6(false)}
              />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
=======
import React, { useState, useEffect } from "react";
import {
  Radio,
  Tabs,
  List,
  Row,
  Col,
  Badge,
  Table,
  Button,
  Descriptions,
} from "antd";
import api from "../config/axios";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/feature/cartSlice";
import { ShoppingCartOutlined } from "@ant-design/icons";

const SanPham = ({ info, handleCheckout }) => {
  const [mode, setMode] = useState("top");
  const [categories, setCategories] = useState([]);
  const [activeKey, setActiveKey] = useState(null);
  const [products, setProducts] = useState({});
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  console.log(info);
  useEffect(() => {
    api
      .get("/categories")
      .then((response) => {
        setCategories(response.data);
        if (response.data.length > 0) {
          setActiveKey(response.data[0].id); // Chọn danh mục đầu tiên mặc định
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  useEffect(() => {
    if (activeKey) {
      api
        .get(`/product/${activeKey}`)
        .then((response) => {
          setProducts({ ...products, [activeKey]: response.data });
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }
  }, [activeKey]);

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  const handleTabChange = (key) => {
    setActiveKey(key);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  };

  const handleSubmit = async () => {
    try {
      // Xây dựng dữ liệu sản phẩm từ giỏ hàng
      const quotationDetailDTOS = cart.map((product) => ({
        productDetailId: product.id, // ID của sản phẩm
        quantity: product.quantity, // Số lượng sản phẩm
        price: product.price * product.quantity, // Tổng giá của sản phẩm (số lượng * giá)
      }));

      // Gửi dữ liệu xuống API "/quotation"
      const response = await api.post("/quotation", {
        requestId: info.id, // requestId có thể là một giá trị cố định hoặc được tạo động
        type: "PENDING",
        quotationDetailDTOS: quotationDetailDTOS,
      });

      handleCheckout();

      console.log(response);
      // Xử lý response từ API ở đây (nếu cần)
    } catch (error) {
      console.error("Error submitting quotation:", error);
      // Xử lý lỗi ở đây (nếu cần)
    }
  };

  function convertToVND(money) {
    const formattedAmount = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(money);

    return formattedAmount;
  }
  return (
    <>
      <div>
        <Badge count={cart.length} style={{ marginTop: "10px" }}>
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary "
            style={{
              width: "50px", // Đặt kích thước nút
              height: "50px", // Đặt kích thước nút
              borderRadius: "50%", // Đặt hình dạng hình tròn
              marginTop: "10px",
              marginLeft: "10px",
            }}
          >
            <ShoppingCartOutlined />
          </label>
        </Badge>

        {info && (
          <Descriptions>
            <Descriptions.Item label="dienTich">
              {info?.dienTich}
            </Descriptions.Item>
            <Descriptions.Item label="budget">
              {convertToVND(info?.budget)}
            </Descriptions.Item>
            <Descriptions.Item label="description">
              {info?.description}
            </Descriptions.Item>
            <Descriptions.Item label="Total">
              {convertToVND(calculateTotalPrice())}
            </Descriptions.Item>
          </Descriptions>
        )}

        <Radio.Group
          onChange={handleModeChange}
          value={mode}
          style={{
            marginBottom: 8,
          }}
        >
          {/* <Radio.Button value="top">Horizontal</Radio.Button> */}
        </Radio.Group>

        <Tabs
          defaultActiveKey={activeKey ? activeKey.toString() : ""}
          tabPosition={mode}
          type="card"
          style={{
            // height: 220,
            padding: 50,
          }}
          onChange={handleTabChange}
        >
          {categories.map((category) => (
            <Tabs.TabPane
              tab={category.name}
              key={category.id}
              style={{
                border: "3px solid #ccc",
                borderRadius: "15px",
                padding: "12px",
                zIndex: 100000000,
              }}
            >
              <Row gutter={[12, 12]}>
                {products[category.id]?.map(
                  (product) =>
                    product.productDetails &&
                    product.productDetails.length > 0 && (
                      <Col lg={8} sm={12} xs={24}>
                        <div
                          key={product.id}
                          style={{
                            backgroundColor: "#fff",
                            borderRadius: 15,
                            overflow: "hidden",
                          }}
                        >
                          <figure>
                            <img
                              style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                              }}
                              src={
                                product.resources.length > 0
                                  ? product.resources[0].url
                                  : ""
                              }
                              alt={product.name}
                            />
                          </figure>
                          <div className="card-body">
                            <div>
                              <h2 className="card-title">{product.name}</h2>
                              <p>{product.price} VND</p>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                // justifyContent: "space-between",
                                // alignContent: "flex-end",
                                placeContent: "flex-end",
                              }}
                            >
                              <button
                                className="btn btn-primary"
                                onClick={() => {
                                  dispatch(add(product.productDetails[0]));
                                }}
                              >
                                Thêm
                              </button>
                            </div>
                          </div>
                        </div>
                      </Col>
                    )
                )}
              </Row>
            </Tabs.TabPane>
          ))}
        </Tabs>

        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content"></div>
          <div className="drawer-side absolute">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul
              className="menu p-4 w-80 min-h-full bg-base-200 text-base-content"
              style={{ height: "100%" }}
            >
              {cart.map((product) => {
                return (
                  <>
                    <ul
                      style={{
                        border: "3px solid #ccc",
                        borderRadius: "10px",
                        marginBottom: "5px",
                        padding: 10,
                      }}
                    >
                      <li>So luong: {product.quantity}</li>
                      <li>{product.name}</li>
                      <li>{product.price}</li>

                      <li
                        style={{
                          justifyContent: "space-between",
                          alignContent: "flex-end",
                        }}
                      >
                        <Button
                          type="dashed"
                          onClick={() => {
                            dispatch(remove(product));
                          }}
                        >
                          Delete
                        </Button>
                      </li>
                    </ul>
                  </>
                );
              })}
              <div>Tổng chi phí: {calculateTotalPrice()} VND</div>
              <Button onClick={handleSubmit}>Checkout</Button>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
};

export default SanPham;
