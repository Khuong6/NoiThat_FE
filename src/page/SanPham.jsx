import React, { useState, useEffect } from "react";
import { Radio, Tabs, List } from "antd";
import api from "../config/axios";

const SanPham = () => {
  const [mode, setMode] = useState("top");
  const [categories, setCategories] = useState([]);
  const [activeKey, setActiveKey] = useState(null);
  const [products, setProducts] = useState({});

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

  return (
    <>
      <div>
        <Radio.Group
          onChange={handleModeChange}
          value={mode}
          style={{
            marginBottom: 8,
          }}
        >
          <Radio.Button value="top">Horizontal</Radio.Button>
        </Radio.Group>
        <Tabs
          defaultActiveKey={activeKey ? activeKey.toString() : ""}
          tabPosition={mode}
          style={{
            height: 220,
          }}
          onChange={handleTabChange}
        >
          {categories.map((category) => (
            <Tabs.TabPane tab={category.name} key={category.id}>
              <List
                dataSource={products[category.id] || []}
                renderItem={(product) => (
                  <List.Item>
                    <List.Item.Meta
                      title={product.name}
                      description={`Price: ${product.price}`}
                    />
                    {product.resources.length > 0 && (
                      <img
                        src={product.resources[0].url}
                        alt={product.name}
                        style={{ width: 100 }}
                      />
                    )}
                  </List.Item>
                )}
              />
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default SanPham;
