import React, { useState, useEffect } from "react";
import { Form, Input, Button, Typography, Select, message } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const { Title } = Typography;
const { Option } = Select;

function Onboarding() {
  const location = useLocation();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    // گرفتن کسب‌وکار از state یا localStorage
    if (location.state && location.state.business) {
      setBusiness(location.state.business);
    } else {
      const stored = JSON.parse(localStorage.getItem("businesses") || "[]");
      if (stored.length > 0) setBusiness(stored[stored.length - 1]);
    }
  }, [location.state]);

  const handleBusinessInfo = (values) => {
    setBusiness((prev) => ({ ...prev, ...values }));
    setStep(2);
  };

  const handleComplete = (values) => {
    // ذخیره اطلاعات تکمیلی کسب‌وکار
    const allBusinesses = JSON.parse(localStorage.getItem("businesses") || "[]");
    const updatedBusinesses = allBusinesses.map((b) =>
      b.id === business.id
        ? {
            ...b,
            ...values,
            infoFilled: true,
          }
        : b
    );
    localStorage.setItem("businesses", JSON.stringify(updatedBusinesses));
    localStorage.setItem("activeBusiness", business.id);
    message.success("کسب‌وکار با موفقیت راه‌اندازی شد.");
    navigate("/dashboard");
  };

  if (!business) {
    return (
      <div className="page-content">
        <Title level={4}>هیچ کسب‌وکاری یافت نشد.</Title>
      </div>
    );
  }

  return (
    <div className="page-content">
      <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
        {step === 1 ? "اطلاعات کسب‌وکار" : "اطلاعات تکمیلی کسب‌وکار"}
      </Title>

      {step === 1 && (
        <Form
          layout="vertical"
          initialValues={{
            name: business.name,
            legalName: business.name,
            type: "company",
          }}
          onFinish={handleBusinessInfo}
          style={{ maxWidth: 500, margin: "0 auto" }}
        >
          <Form.Item
            name="name"
            label="نام کسب‌وکار"
            rules={[{ required: true, message: "نام کسب‌وکار را وارد کنید" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="legalName"
            label="نام قانونی"
            rules={[{ required: true, message: "نام قانونی را وارد کنید" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="type"
            label="نوع کسب‌وکار"
            initialValue="company"
            rules={[{ required: true, message: "نوع کسب‌وکار را انتخاب کنید" }]}
          >
            <Select>
              <Option value="company">شرکت</Option>
              <Option value="personal">شخصی</Option>
              <Option value="other">سایر</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="activity"
            label="زمینه فعالیت"
            rules={[{ required: true, message: "زمینه فعالیت را وارد کنید" }]}
          >
            <Input />
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
          <Form.Item
            name="nationalId"
            label="شناسه ملی"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="economicCode"
            label="کد اقتصادی"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="registerNumber"
            label="شماره ثبت"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="country"
            label="کشور"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="province"
            label="استان"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="city"
            label="شهر"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="postalCode"
            label="کدپستی"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="تلفن"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="fax"
            label="فکس"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="address"
            label="آدرس"
            rules={[{ required: false }]}
          >
            <Input.TextArea rows={2} />
          </Form.Item>
          <Form.Item
            name="website"
            label="وب‌سایت"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="ایمیل"
            rules={[{ required: false, type: "email", message: "ایمیل معتبر وارد کنید" }]}
          >
            <Input />
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