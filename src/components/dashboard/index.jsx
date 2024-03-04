import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
import { FloatButton } from "antd";
import { CommentOutlined, CustomerServiceOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const Dashboard = ({ role }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const renderItem = () => {
    if (role === "STAFF") {
      return [
        {
          key: "1",
          icon: <UserOutlined />,
          label: <Link to={"product"}>Manage Product</Link>,
        },
        {
          key: "2",
          icon: <VideoCameraOutlined />,
          label: <Link to={"category"}>Manage Category</Link>,
        },
        {
          key: "3",
          icon: <ProfileOutlined />,
          label: <Link to={"quotation"}>Manage Quotation</Link>,
        },
      ];
    } else {
      return [
        {
          key: "1",
          icon: <UserOutlined />,
          label: "Manage Account",
        },
      ];
    }
  };

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      {/* <FloatButton.Group
        trigger="hover"
        type="primary"
        style={{
          left: 94,
        }}
        icon={<CustomerServiceOutlined />}
      >
        <FloatButton />
        <FloatButton icon={<CommentOutlined />} />
      </FloatButton.Group> */}

      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={renderItem()}
        />
        {/* <Button type="primary" shape="circle" style={}>
          A
        </Button> */}
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: "auto",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;