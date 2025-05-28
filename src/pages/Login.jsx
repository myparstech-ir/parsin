import React, { useState } from "react";
import { Form, Input, Button, Typography, message, Checkbox } from "antd";
import { LockOutlined, MailOutlined, EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { loginUser, getUserBusinesses } from "../db";

const { Title, Paragraph } = Typography;

function Login() {
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(true);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    const { email, password } = values;
    const result = loginUser({ email, password });
    if (result.success) {
      if (remember) {
        localStorage.setItem("authUserId", result.user.id);
        localStorage.setItem("authEmail", result.user.email);
        localStorage.setItem("authFullname", result.user.fullname);
      } else {
        sessionStorage.setItem("authUserId", result.user.id);
        sessionStorage.setItem("authEmail", result.user.email);
        sessionStorage.setItem("authFullname", result.user.fullname);
      }
      let isFirstLogin = localStorage.getItem("isFirstLogin");
      if (isFirstLogin === "true") {
        localStorage.removeItem("isFirstLogin");
        message.success("خوش آمدید! ابتدا کسب‌وکار خود را راه‌اندازی کنید.");
        navigate("/onboarding");
      } else {
        const businesses = getUserBusinesses(result.user.id);
        if (!businesses || businesses.length === 0) {
          message.info("ابتدا باید کسب‌وکار جدیدی راه‌اندازی کنید.");
          navigate("/onboarding");
        } else {
          localStorage.setItem("activeBusiness", businesses[0].id);
          message.success("ورود موفقیت‌آمیز بود!");
          navigate("/dashboard");
        }
      }
    } else {
      message.error(result.message || "ایمیل یا رمز عبور اشتباه است");
    }
    setLoading(false);
  };

  return (
    <div className="page-content">
      <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>ورود به برنامه حسابداری</Title>
      <Form
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: 400, margin: "0 auto" }}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          label="ایمیل"
          rules={[{ required: true, message: "ایمیل الزامی است" }]}
        >
          <Input prefix={<MailOutlined />} placeholder="ایمیل" size="large" />
        </Form.Item>
        <Form.Item
          name="password"
          label="رمز عبور"
          rules={[{ required: true, message: "رمز عبور الزامی است" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="رمز عبور"
            size="large"
            iconRender={visible => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
          />
        </Form.Item>
        <Form.Item>
          <Checkbox checked={remember} onChange={e => setRemember(e.target.checked)}>
            مرا به خاطر بسپار
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={loading}
            block
            style={{ marginTop: 8 }}
          >
            ورود
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            type="link"
            block
            onClick={() => navigate("/register")}
            style={{ color: "#2e86de" }}
          >
            ثبت‌نام کاربر جدید
          </Button>
        </Form.Item>
      </Form>
      <Paragraph style={{ textAlign: "center", color: "#999", fontSize: 12, marginTop: 16 }}>
        رمز عبورتان را فراموش کرده‌اید؟ بازیابی رمز به زودی فعال می‌شود.
      </Paragraph>
    </div>
  );
}

export default Login;