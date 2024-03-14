// import React, { useState, useEffect } from "react";
// import { Radio, Tabs, List } from "antd";
// import api from "../config/axios";

// const SanPham = () => {
//   const [mode, setMode] = useState("top");
//   const [categories, setCategories] = useState([]);
//   const [activeKey, setActiveKey] = useState(null);
//   const [products, setProducts] = useState({});

//   useEffect(() => {
//     api
//       .get("/categories")
//       .then((response) => {
//         setCategories(response.data);
//         if (response.data.length > 0) {
//           setActiveKey(response.data[0].id); // Chọn danh mục đầu tiên mặc định
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching categories:", error);
//       });
//   }, []);

//   useEffect(() => {
//     if (activeKey) {
//       api
//         .get(`/product/${activeKey}`)
//         .then((response) => {
//           setProducts({ ...products, [activeKey]: response.data });
//         })
//         .catch((error) => {
//           console.error("Error fetching products:", error);
//         });
//     }
//   }, [activeKey]);

//   const handleModeChange = (e) => {
//     setMode(e.target.value);
//   };

//   const handleTabChange = (key) => {
//     setActiveKey(key);
//   };

//   return (
//     <>
//       <div>
//         <Radio.Group
//           onChange={handleModeChange}
//           value={mode}
//           style={{
//             marginBottom: 8,
//           }}
//         >
//           <Radio.Button value="top">Horizontal</Radio.Button>
//         </Radio.Group>
//         <Tabs
//           defaultActiveKey={activeKey ? activeKey.toString() : ""}
//           tabPosition={mode}
//           style={{
//             height: 220,
//           }}
//           onChange={handleTabChange}
//         >
//           {categories.map((category) => (
//             <Tabs.TabPane tab={category.name} key={category.id}>
//               <List
//                 dataSource={products[category.id] || []}
//                 renderItem={(product) => (
//                   <List.Item>
//                     <List.Item.Meta
//                       title={product.name}
//                       description={`Price: ${product.price}`}
//                     />
//                     {product.resources.length > 0 && (
//                       <img
//                         src={product.resources[0].url}
//                         alt={product.name}
//                         style={{ width: 100 }}
//                       />
//                     )}
//                   </List.Item>
//                 )}
//               />
//             </Tabs.TabPane>
//           ))}
//         </Tabs>
//       </div>
//     </>
//   );
// };

// export default SanPham;

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
      const response = await api.post("/buy-available", {
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
