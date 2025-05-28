import React from "react";
import { Business } from "./types";

interface Props {
  business: Business;
  onBack: () => void;
}

const AccountingSystem: React.FC<Props> = ({ business, onBack }) => {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h3>سیستم حسابداری کسب و کار: {business.name}</h3>
      <div style={{ marginBottom: 16 }}>
        <strong>عنوان سال مالی:</strong> {business.fiscalYearTitle}
        <br />
        <strong>دوره مالی:</strong> {business.fiscalYearStart} تا {business.fiscalYearEnd}
        <br />
        <strong>واحد پول:</strong> {business.mainCurrency}
        <br />
        <strong>سیستم انبار:</strong> {business.inventoryAccountingSystem} / {business.inventoryEvaluationMethod}
        <br />
        <strong>چند ارزی:</strong> {business.multiCurrency ? "بله" : "خیر"}
      </div>
      <button onClick={onBack}>بازگشت به لیست کسب و کارها</button>
      {/* در اینجا ماژول‌های حسابداری و غیره را می‌توانید اضافه کنید */}
    </div>
  );
};

export default AccountingSystem;