import React, { useState } from "react";
import { Form, Input, Button, Typography, message } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    // نمونه ساده: اطلاعات ثبت می‌شود و به صفحه ورود می‌رویم
    setTimeout(() => {
      setLoading(false);
      message.success("ثبت‌نام با موفقیت انجام شد. وارد شوید.");
      navigate("/login");
    }, 1200);
  };

  return (
    <div className="page-content">
      <Title level={3} style={{ textAlign: "center", marginBottom: 32 }}>ثبت‌نام کاربر جدید</Title>
      <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400, margin: "0 auto" }}>
        <Form.Item
          name="fullname"
          label="نام و نام خانوادگی"
          rules={[{ required: true, message: "وارد کردن نام و نام خانوادگی الزامی است" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="نام و نام خانوادگی" size="large" />
        </Form.Item>
        <Form.Item
          name="email"
          label="ایمیل"
          rules={[
            { required: true, message: "وارد کردن ایمیل الزامی است" },
            { type: "email", message: "فرمت ایمیل صحیح نیست" },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="ایمیل" size="large" />
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
            ثبت‌نام
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            type="link"
            block
            onClick={() => navigate("/login")}
            style={{ color: "#2e86de" }}
          >
            بازگشت به ورود
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;