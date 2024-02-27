import React from "react";
import { useState, useEffect } from "react";
import reactLogo from "/src/assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Divider, Typography } from "antd";
import { Card, Col, Row } from "antd";
const { Meta } = Card;
const { Title, Paragraph, Text, Link } = Typography;
const blockContent = ``;

const MauThietKe = () => {
  return (
    <>
      <Header />
      <div className="pt-64 pl-20 pr-20">
        <div>
          <Typography>
            <Title className="text-center">Mẫu Thiết Kế</Title>
            <Paragraph className="text-center ">
              Chinh phục đỉnh cao trong nghệ thuật kiến tạo không gian sống – đó
              là thiết kế nội thất theo phong cách gia chủ. Tại NoiThat, chúng
              tôi lắng nghe khách hàng, cùng khách hàng làm nên các tác phẩm
              mang đậm dấu ấn cá nhân riêng biệt. Chinh phục hoàn toàn sự hài
              lòng của cả những khách hàng khó tính nhất. Cùng NoiThat bước vào
              hành trình sáng tạo đứng trên xu hướng, nơi bạn hãnh diện gọi đó
              là Phong Cách Của Tôi!
            </Paragraph>
            <Title level={2}>Guidelines and Resources</Title>
            <Row gutter={16} className="text-center ">
              <Col span={8}>
                <Card
                  hoverable
                  className="m-3"
                  style={{
                    width: 250,
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta title="Europe Street beat" description="localStorage" />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  hoverable
                  className="m-3"
                  style={{
                    width: 250,
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta title="Europe Street beat" description="localStorage" />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  hoverable
                  className="m-3"
                  style={{
                    width: 250,
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta title="Europe Street beat" description="localStorage" />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  hoverable
                  className="m-3"
                  style={{
                    width: 250,
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta title="Europe Street beat" description="localStorage" />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  hoverable
                  className="m-3"
                  style={{
                    width: 250,
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta title="Europe Street beat" description="localStorage" />
                </Card>
              </Col>

              <Col span={8}>
                <Card
                  hoverable
                  className="m-3"
                  style={{
                    width: 250,
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta title="Europe Street beat" description="localStorage" />
                </Card>
              </Col>
            </Row>

            <Divider />
          </Typography>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MauThietKe;
