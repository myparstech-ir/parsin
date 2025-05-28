import React, { useEffect, useState } from "react";
import { Button, List, Typography, Modal, Form, Input, Select, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const { Option } = Select;

function Businesses() {
  const [businesses, setBusinesses] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    // شبیه‌سازی دریافت لیست کسب‌وکارها از localStorage
    const stored = JSON.parse(localStorage.getItem("businesses") || "[]");
    setBusinesses(stored);
  }, []);

  const handleCreateBusiness = (values) => {
    const newBusiness = {
      name: values.name,
      lang: values.lang,
      id: Date.now(),
      infoFilled: false,
    };
    const updated = [...businesses, newBusiness];
    setBusinesses(updated);
    localStorage.setItem("businesses", JSON.stringify(updated));
    message.success("کسب‌وکار جدید ایجاد شد. لطفاً اطلاعات تکمیلی را وارد کنید.");
    setModalVisible(false);
    // رفتن به مرحله اطلاعات تکمیلی کسب‌وکار
    navigate("/onboarding", { state: { business: newBusiness } });
  };

  const handleSelect = (biz) => {
    if (!biz.infoFilled) {
      navigate("/onboarding", { state: { business: biz } });
    } else {
      localStorage.setItem("activeBusiness", biz.id);
      message.success(`کسب‌وکار "${biz.name}" انتخاب شد.`);
      navigate("/dashboard");
    }
  };

  return (
    <div className="page-content">
      <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
        لیست کسب‌وکارهای شما
      </Title>
      <List
        bordered
        dataSource={businesses}
        style={{ maxWidth: 500, margin: "0 auto" }}
        renderItem={(biz) => (
          <List.Item
            actions={[
              <Button type="link" onClick={() => handleSelect(biz)}>
                {biz.infoFilled ? "ورود" : "تکمیل اطلاعات"}
              </Button>,
            ]}
          >
            <span>{biz.name}</span>
            <span style={{ color: "#999", marginRight: 12 }}>
              ({biz.lang === "fa" ? "فارسی" : "انگلیسی"})
            </span>
          </List.Item>
        )}
        locale={{ emptyText: "هنوز کسب‌وکاری ثبت نشده است." }}
      />
      <Button
        type="primary"
        icon={<PlusOutlined />}
        style={{ marginTop: 24, width: "100%", maxWidth: 500 }}
        onClick={() => setModalVisible(true)}
      >
        راه‌اندازی کسب‌وکار جدید
      </Button>
      <Modal
        open={modalVisible}
        title="راه‌اندازی کسب‌وکار جدید"
        onCancel={() => setModalVisible(false)}
        footer={null}
        destroyOnClose
      >
        <Form form={form} layout="vertical" onFinish={handleCreateBusiness}>
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
      </Modal>
    </div>
  );
}

export default Businesses;