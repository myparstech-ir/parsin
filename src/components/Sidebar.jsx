import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  AppstoreOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const { Sider } = Layout;

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = ({ key }) => {
    if (key === "logout") {
      localStorage.clear();
      sessionStorage.clear();
      navigate("/login");
    } else {
      navigate(key);
    }
  };

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        background: "#fff",
        minHeight: "100vh",
        boxShadow: "0 0 8px #eee",
        direction: "rtl",
      }}
      width={220}
    >
      <div
        style={{
          height: 60,
          margin: "16px 0",
          textAlign: "center",
          fontWeight: 700,
          fontSize: 20,
          color: "#2e86de",
          fontFamily: "AnjomanMax, Tahoma, Arial",
          letterSpacing: 0,
        }}
      >
        پارسین
      </div>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        style={{ border: "none", fontFamily: "AnjomanMax, Tahoma, Arial" }}
        onClick={handleMenuClick}
        items={[
          {
            key: "/dashboard",
            icon: <DashboardOutlined />,
            label: "داشبورد",
          },
          {
            key: "/businesses",
            icon: <AppstoreOutlined />,
            label: "کسب‌وکارها",
          },
          {
            key: "logout",
            icon: <LogoutOutlined />,
            label: "خروج",
            danger: true,
          },
        ]}
      />
    </Sider>
  );
}

export default Sidebar;