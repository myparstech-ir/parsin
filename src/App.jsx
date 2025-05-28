import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Businesses from "./pages/Businesses";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import "./styles/main.css";

// Lazy loading for future page components
const LazyComponent = ({ title }) => (
  <div className="page-content">
    <h2>{title}</h2>
    <p>این صفحه هنوز پیاده‌سازی نشده است.</p>
  </div>
);

function App() {
  // Simple auth simulation (replace with real logic)
  const isAuthenticated = !!localStorage.getItem("authToken");

  return (
    <Router>
      <div className="app-root">
        {isAuthenticated && <Sidebar />}
        <div className={isAuthenticated ? "app-main" : "app-no-sidebar"}>
          <Routes>
            {/* Auth pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Business selection and onboarding */}
            <Route
              path="/businesses"
              element={isAuthenticated ? <Businesses /> : <Navigate to="/login" />}
            />
            <Route
              path="/onboarding"
              element={isAuthenticated ? <Onboarding /> : <Navigate to="/login" />}
            />

            {/* Main dashboard */}
            <Route
              path="/dashboard"
              element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
            />

            {/* Example for all sidebar subpages: */}
            <Route
              path="/people/*"
              element={isAuthenticated ? <LazyComponent title="اشخاص" /> : <Navigate to="/login" />}
            />
            <Route
              path="/goods/*"
              element={isAuthenticated ? <LazyComponent title="کالاها و خدمات" /> : <Navigate to="/login" />}
            />
            <Route
              path="/banking/*"
              element={isAuthenticated ? <LazyComponent title="بانکداری" /> : <Navigate to="/login" />}
            />
            <Route
              path="/sales/*"
              element={isAuthenticated ? <LazyComponent title="فروش و درآمد" /> : <Navigate to="/login" />}
            />
            <Route
              path="/purchase/*"
              element={isAuthenticated ? <LazyComponent title="خرید و هزینه" /> : <Navigate to="/login" />}
            />
            <Route
              path="/warehouse/*"
              element={isAuthenticated ? <LazyComponent title="انبارداری" /> : <Navigate to="/login" />}
            />
            <Route
              path="/accounting/*"
              element={isAuthenticated ? <LazyComponent title="حسابداری" /> : <Navigate to="/login" />}
            />
            <Route
              path="/other/*"
              element={isAuthenticated ? <LazyComponent title="سایر" /> : <Navigate to="/login" />}
            />
            <Route
              path="/reports/*"
              element={isAuthenticated ? <LazyComponent title="گزارش‌ها" /> : <Navigate to="/login" />}
            />
            <Route
              path="/settings/*"
              element={isAuthenticated ? <LazyComponent title="تنظیمات" /> : <Navigate to="/login" />}
            />

            {/* Default: redirect to dashboard or login */}
            <Route
              path="/"
              element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;