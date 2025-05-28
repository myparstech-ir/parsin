import React, { useState } from "react";
import { BusinessBasicInfo } from "./types";

interface Props {
  initial?: Partial<BusinessBasicInfo>;
  onSubmit: (data: BusinessBasicInfo) => void;
  onCancel: () => void;
}

const defaultInfo: BusinessBasicInfo = {
  id: "",
  name: "",
  legalName: "",
  businessType: "",
  activityField: "",
  nationalId: "",
  economicCode: "",
  registrationNumber: "",
  country: "",
  province: "",
  city: "",
  postalCode: "",
  phone: "",
  fax: "",
  address: "",
  website: "",
  email: "",
};

const BusinessInfoForm: React.FC<Props> = ({ initial = {}, onSubmit, onCancel }) => {
  const [info, setInfo] = useState<BusinessBasicInfo>({ ...defaultInfo, ...initial });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(info);
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h3>اطلاعات کسب و کار</h3>
      <label>نام کسب و کار <input required name="name" value={info.name} onChange={handleChange} /></label>
      <label>نام قانونی <input name="legalName" value={info.legalName} onChange={handleChange} /></label>
      <label>نوع کسب و کار
        <select name="businessType" value={info.businessType} onChange={handleChange}>
          <option value="">انتخاب کنید</option>
          <option value="شرکت">شرکت</option>
          <option value="فروشگاه">فروشگاه</option>
          <option value="کارگاه">کارگاه</option>
        </select>
      </label>
      <label>زمینه فعالیت <input name="activityField" value={info.activityField} onChange={handleChange} /></label>
      <hr />
      <h4>اطلاعات اقتصادی</h4>
      <label>شناسه ملی <input name="nationalId" value={info.nationalId} onChange={handleChange} /></label>
      <label>کد اقتصادی <input name="economicCode" value={info.economicCode} onChange={handleChange} /></label>
      <label>شماره ثبت <input name="registrationNumber" value={info.registrationNumber} onChange={handleChange} /></label>
      <hr />
      <h4>اطلاعات تماس</h4>
      <label>کشور <input name="country" value={info.country} onChange={handleChange} /></label>
      <label>استان <input name="province" value={info.province} onChange={handleChange} /></label>
      <label>شهر <input name="city" value={info.city} onChange={handleChange} /></label>
      <label>کد پستی <input name="postalCode" value={info.postalCode} onChange={handleChange} /></label>
      <label>تلفن <input name="phone" value={info.phone} onChange={handleChange} /></label>
      <label>فکس <input name="fax" value={info.fax} onChange={handleChange} /></label>
      <label>آدرس <input name="address" value={info.address} onChange={handleChange} /></label>
      <label>وب سایت <input name="website" value={info.website} onChange={handleChange} /></label>
      <label>ایمیل <input type="email" name="email" value={info.email} onChange={handleChange} /></label>
      <div className="form-btns">
        <button type="button" onClick={onCancel}>انصراف</button>
        <button type="submit" className="primary-btn">مرحله بعد</button>
      </div>
    </form>
  );
};

export default BusinessInfoForm;