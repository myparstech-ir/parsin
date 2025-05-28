import React, { useState } from "react";
import { BusinessAdvancedInfo } from "./types";

interface Props {
  initial?: Partial<BusinessAdvancedInfo>;
  onSubmit: (data: BusinessAdvancedInfo) => void;
  onCancel: () => void;
}

const defaultAdvancedInfo: BusinessAdvancedInfo = {
  inventoryAccountingSystem: "ادواری",
  inventoryEvaluationMethod: "FIFO",
  multiCurrency: false,
  warehouseSystem: false,
  mainCurrency: "IRR - ریال ایران",
  calendar: "هجری شمسی",
  vatRate: 10,
  fiscalYearStart: "",
  fiscalYearEnd: "",
  fiscalYearTitle: "",
};

const BusinessAdvancedForm: React.FC<Props> = ({ initial = {}, onSubmit, onCancel }) => {
  const [info, setInfo] = useState<BusinessAdvancedInfo>({ ...defaultAdvancedInfo, ...initial });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(info);
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h3>اطلاعات تخصصی کسب و کار</h3>
      <label>سیستم حسابداری انبار
        <select name="inventoryAccountingSystem" value={info.inventoryAccountingSystem} onChange={handleChange}>
          <option value="ادواری">ادواری</option>
          <option value="دایمی">دایمی</option>
        </select>
        <small className="form-hint">اگر انواع سیستم های حسابداری انبار را نمی شناسید مقدار پیش فرض را تغییر ندهید.</small>
      </label>
      <label>روش ارزیابی انبار
        <select name="inventoryEvaluationMethod" value={info.inventoryEvaluationMethod} onChange={handleChange}>
          <option value="FIFO">FIFO</option>
          <option value="LIFO">LIFO</option>
          <option value="WeightedAverage">میانگین موزون</option>
        </select>
        <small className="form-hint">اگر انواع روش های ارزیابی انبار را نمی شناسید مقدار پیش فرض را تغییر ندهید.</small>
      </label>
      <label>
        <input type="checkbox" name="multiCurrency" checked={info.multiCurrency} onChange={handleChange} />
        امکان استفاده از سیستم چند ارزی
      </label>
      <label>
        <input type="checkbox" name="warehouseSystem" checked={info.warehouseSystem} onChange={handleChange} />
        امکان استفاده از سیستم انبارداری
      </label>
      <label>واحد پول اصلی
        <input name="mainCurrency" value={info.mainCurrency} onChange={handleChange} readOnly style={{ background: "#f9f9f9" }} />
        <small className="form-hint">توجه کنید که واحد پول اصلی در آینده به هیچ صورت قابل تغییر نیست.</small>
      </label>
      <label>تقویم
        <select name="calendar" value={info.calendar} onChange={handleChange}>
          <option value="هجری شمسی">هجری شمسی</option>
          <option value="میلادی">میلادی</option>
        </select>
      </label>
      <label>نرخ مالیات ارزش افزوده
        <input type="number" name="vatRate" value={info.vatRate} min={0} max={100} onChange={handleChange} />
      </label>
      <hr />
      <h4>اطلاعات سال مالی</h4>
      <label>تاریخ شروع <input type="date" name="fiscalYearStart" value={info.fiscalYearStart} onChange={handleChange} /></label>
      <label>تاریخ پایان <input type="date" name="fiscalYearEnd" value={info.fiscalYearEnd} onChange={handleChange} /></label>
      <label>عنوان سال مالی <input name="fiscalYearTitle" value={info.fiscalYearTitle} onChange={handleChange} /></label>
      <div className="form-btns">
        <button type="button" onClick={onCancel}>بازگشت</button>
        <button type="submit" className="primary-btn">ثبت و ورود به حسابداری</button>
      </div>
    </form>
  );
};

export default BusinessAdvancedForm;