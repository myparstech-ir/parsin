import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ConfigProvider, Layout, Spin } from "antd";
import faIR from "antd/locale/fa_IR";
import "./styles/main.css";

import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Businesses from "./pages/Businesses";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";

// کامپوننت محافظت‌شده برای چک ورود کاربر
function ProtectedRoute({ children }) {
  const authUserId = localStorage.getItem("authUserId") || sessionStorage.getItem("authUserId");
  const location = useLocation();

  if (!authUserId) {
    if (location.pathname !== "/login" && location.pathname !== "/register") {
      return <Navigate to="/login" replace />;
    }
  }
  return children;
}

// صفحات بدون سایدبار
const noSidebarRoutes = ["/login", "/register", "/onboarding"];

// لایوت هوشمند: سایدبار فقط صفحات اصلی
function LayoutWithSidebar({ children }) {
  const location = useLocation();
  const showSidebar = !noSidebarRoutes.includes(location.pathname);
  return (
    <Layout style={{ minHeight: "100vh", background: "#f9f9fb" }}>
      {showSidebar && <Sidebar />}
      <Layout.Content className={showSidebar ? "app-main" : "app-no-sidebar"}>
        {children}
      </Layout.Content>
    </Layout>
  );
}

function AppContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 400);
  }, []);

  if (loading) {
    return (
      <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/businesses"
        element={
          <ProtectedRoute>
            <Businesses />
          </ProtectedRoute>
        }
      />
      <Route
        path="/onboarding"
        element={
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

function App() {
  return (
    <ConfigProvider direction="rtl" locale={faIR}>
      <BrowserRouter>
        <LayoutWithSidebar>
          <AppContent />
        </LayoutWithSidebar>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;