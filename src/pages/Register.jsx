import React, { useState } from "react";
import { Form, Input, Button, Typography, message, Checkbox } from "antd";
import { LockOutlined, UserOutlined, MailOutlined, EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../db";

const { Title, Paragraph } = Typography;

function Register() {
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    if (!agree) {
      message.warning("برای ثبت‌نام باید قوانین را بپذیرید.");
      return;
    }
    setLoading(true);
    const { fullname, email, password } = values;
    const result = registerUser({ fullname, email, password });
    if (result.success) {
      message.success("ثبت‌نام با موفقیت انجام شد. وارد برنامه شوید.");
      localStorage.setItem("authUserId", result.userId);
      localStorage.setItem("isFirstLogin", "true");
      navigate("/login");
    } else {
      message.error(result.message || "خطا در ثبت‌نام");
    }
    setLoading(false);
  };

  return (
    <div className="page-content">
      <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>ثبت‌نام کاربر جدید</Title>
      <Form
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: 400, margin: "0 auto" }}
        scrollToFirstError
        autoComplete="off"
      >
        <Form.Item
          name="fullname"
          label="نام و نام خانوادگی"
          rules={[
            { required: true, message: "نام و نام خانوادگی الزامی است" },
            { min: 3, message: "حداقل ۳ کاراکتر وارد کنید" }
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="نام و نام خانوادگی" size="large" />
        </Form.Item>
        <Form.Item
          name="email"
          label="ایمیل"
          rules={[
            { required: true, message: "ایمیل الزامی است" },
            { type: "email", message: "فرمت ایمیل صحیح نیست" }
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="ایمیل" size="large" />
        </Form.Item>
        <Form.Item
          name="password"
          label="رمز عبور"
          rules={[
            { required: true, message: "رمز عبور الزامی است" },
            { min: 6, message: "رمز عبور حداقل باید ۶ کاراکتر باشد" },
            {
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
              message: "رمز باید شامل حروف و عدد باشد"
            }
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="رمز عبور"
            size="large"
            iconRender={visible => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
          />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="تکرار رمز عبور"
          dependencies={['password']}
          hasFeedback
          rules={[
            { required: true, message: "تکرار رمز عبور الزامی است" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject("تکرار رمز عبور مطابقت ندارد");
              }
            })
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="تکرار رمز عبور"
            size="large"
            iconRender={visible => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
          />
        </Form.Item>
        <Form.Item>
          <Checkbox checked={agree} onChange={e => setAgree(e.target.checked)}>
            قوانین استفاده از نرم‌افزار را می‌پذیرم
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
      <Paragraph style={{ textAlign: "center", color: "#999", fontSize: 12, marginTop: 16 }}>
        اطلاعات شما کاملاً محرمانه نزد ما محفوظ است.
      </Paragraph>
    </div>
  );
}

export default Register;