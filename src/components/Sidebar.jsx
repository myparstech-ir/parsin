import React, { useState } from "react";
import { Menu, Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import SidebarMenuData from "./SidebarMenuData";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";

const { SubMenu } = Menu;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getDefaultOpenKeys = () => {
    let keys = [];
    SidebarMenuData.forEach((item) => {
      if (item.children) {
        item.children.forEach((child) => {
          if (location.pathname.startsWith(child.path)) {
            keys.push(item.key);
          }
        });
      }
    });
    return keys;
  };

  const [openKeys, setOpenKeys] = useState(getDefaultOpenKeys());
  const [selectedKeys, setSelectedKeys] = useState([
    location.pathname,
  ]);

  const handleMenuClick = ({ key }) => {
    setSelectedKeys([key]);
    navigate(key);
  };

  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  const renderMenuItems = () =>
    SidebarMenuData.map((item) => {
      if (item.children) {
        return (
          <SubMenu
            key={item.key}
            icon={item.icon}
            title={item.label}
            className="sidebar-submenu"
          >
            {item.children.map((child) => (
              <Menu.Item
                key={child.path}
                icon={child.icon}
                className="sidebar-subitem"
              >
                {child.label}
              </Menu.Item>
            ))}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.path} icon={item.icon}>
          {item.label}
        </Menu.Item>
      );
    });

  return (
    <div
      className={`sidebar-container ${collapsed ? "collapsed" : ""}`}
      dir="rtl"
    >
      <div className="sidebar-toggle-btn">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "20px",
            margin: "16px 0 0 0",
            color: "#2e86de",
            background: "#fff",
            border: "none",
          }}
        />
      </div>
      <Menu
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        selectedKeys={selectedKeys}
        openKeys={collapsed ? [] : openKeys}
        onOpenChange={handleOpenChange}
        onClick={handleMenuClick}
        style={{
          height: "100vh",
          borderRight: 0,
          background: "#fff",
          fontWeight: "bold",
        }}
        className="sidebar-menu"
      >
        {renderMenuItems()}
      </Menu>
    </div>
  );
};

export default Sidebar;