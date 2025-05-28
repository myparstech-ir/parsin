import React, { useState } from "react";
import { Form, Input, Button, Typography, Select, message } from "antd";
import { useNavigate } from "react-router-dom";
import { addBusiness } from "../db";

const { Title } = Typography;
const { Option } = Select;

function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [businessId, setBusinessId] = useState(null);

  const userId = localStorage.getItem("authUserId");

  const handleCreateBusiness = (values) => {
    const result = addBusiness({ userId, name: values.name, lang: values.lang });
    if (result.success) {
      setBusinessId(result.businessId);
      localStorage.setItem("activeBusiness", result.businessId);
      message.success("کسب‌وکار جدید ایجاد شد. لطفاً اطلاعات تکمیلی را وارد کنید.");
      setStep(2);
    } else {
      message.error("خطا در ایجاد کسب‌وکار");
    }
  };

  const handleComplete = (values) => {
    // این قسمت را می‌توانی با updateBusinessInfo از db.js کامل‌تر کنی
    message.success("کسب‌وکار با موفقیت راه‌اندازی شد.");
    navigate("/dashboard");
  };

  return (
    <div className="page-content">
      <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
        {step === 1 ? "راه‌اندازی کسب‌وکار جدید" : "اطلاعات تکمیلی کسب‌وکار"}
      </Title>
      {step === 1 && (
        <Form
          layout="vertical"
          onFinish={handleCreateBusiness}
          style={{ maxWidth: 500, margin: "0 auto" }}
        >
          <Form.Item
            name="name"
            label="نام کسب‌وکار"
            rules={[{ required: true, message: "نام کسب‌وکار را وارد کنید" }]}
          >
            <Input placeholder="مثلاً: پارس تک" />
          </Form.Item>
          <Form.Item
            name="lang"
            label="زبان پیش‌فرض"
            initialValue="fa"
            rules={[{ required: true, message: "زبان را انتخاب کنید" }]}
          >
            <Select>
              <Option value="fa">فارسی</Option>
              <Option value="en">English</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              مرحله بعد
            </Button>
          </Form.Item>
        </Form>
      )}

      {step === 2 && (
        <Form
          layout="vertical"
          onFinish={handleComplete}
          style={{ maxWidth: 600, margin: "0 auto" }}
        >
          <Form.Item name="info" label="سایر اطلاعات (اختیاری)">
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              ذخیره و ورود به داشبورد
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
}

export default Onboarding;