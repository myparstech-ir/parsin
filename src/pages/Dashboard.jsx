import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

function Dashboard() {
  // نمایش اطلاعات کسب‌وکار فعال
  const businesses = JSON.parse(localStorage.getItem("businesses") || "[]");
  const activeId = localStorage.getItem("activeBusiness");
  const business = businesses.find((b) => String(b.id) === String(activeId));

  return (
    <div className="page-content">
      <Title level={2}>داشبورد حسابداری</Title>
      {business ? (
        <>
          <Paragraph>
            خوش آمدید، <strong>{business.name}</strong>!
          </Paragraph>
          <Paragraph>
            نوع کسب‌وکار: {business.type === "company" ? "شرکت" : business.type === "personal" ? "شخصی" : "سایر"}
          </Paragraph>
          <Paragraph>
            زمینه فعالیت: {business.activity || "-"}
          </Paragraph>
        </>
      ) : (
        <Paragraph>هیچ کسب‌وکار فعالی انتخاب نشده است.</Paragraph>
      )}
      <Paragraph>
        این داشبورد نمونه است. امکانات بیشتر به زودی اضافه می‌شود.
      </Paragraph>
    </div>
  );
}

export default Dashboard;