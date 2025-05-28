import React, { useState } from "react";
import { Form, Input, Button, Typography, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    // نمونه ساده: اگر ایمیل/پسورد وارد شد، ورود موفق!
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("authToken", "demo_token");
      message.success("ورود موفقیت‌آمیز بود!");
      navigate("/businesses");
    }, 1000);
  };

  return (
    <div className="page-content">
      <Title level={3} style={{ textAlign: "center", marginBottom: 32 }}>ورود به برنامه حسابداری</Title>
      <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400, margin: "0 auto" }}>
        <Form.Item
          name="username"
          label="ایمیل یا نام کاربری"
          rules={[{ required: true, message: "وارد کردن ایمیل یا نام کاربری الزامی است" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="ایمیل یا نام کاربری" size="large" />
        </Form.Item>
        <Form.Item
          name="password"
          label="رمز عبور"
          rules={[{ required: true, message: "وارد کردن رمز عبور الزامی است" }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="رمز عبور" size="large" />
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
    </div>
  );
}

export default Login;